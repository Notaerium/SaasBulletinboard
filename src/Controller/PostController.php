<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Entity\Posts;
use App\Repository\CategoriesRepository;
use App\Repository\PostsRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/post', name: 'app_post_')]
class PostController extends AbstractController
{

    private $emi;
    private $postsRepo;
    private $catRepo;
    protected $currentUser;

    public function __construct(EntityManagerInterface $emi, PostsRepository $postsRepo, CategoriesRepository $catRepo, TokenStorageInterface $tokenStorage) {
       $this->emi = $emi;
       $this->postsRepo = $postsRepo;
       $this->catRepo = $catRepo;
       $this->currentUser = $tokenStorage->getToken()->getUser();
    }

    /**
     * @param serializer
     * findAll() from the postsRepository
     * Serialization to avoid circular reference (a post call for a user that call for posts that call for users and so on ...)
     * This is why every attribute in the entities have been given a group
     * 
     * Return an array of all the posts from the db (posts table)
     */
    #[Route('/getAll', name: 'getAll')]
    public function getPosts(SerializerInterface $serializer) : Response
    {
        $posts = $this->postsRepo->findAll();
        $json = $serializer->serialize( //To avoid circular reference
            $posts,
            'json', ['groups' => ['user','post']]
        );
        return new Response($json);
    }

    /**
     * @param request
     * Create a post from the form sent by the AddUpdatePost component
     * reformat the date so that it is matching the one required for sql
     * Write the post in the db (posts table)
     * 
     * Return the created post or an error message
     */
    #[Route('/create', name: 'create')]
    public function create(Request $request)
    {
        $content = json_decode($request->getContent());
        $showTime = new DateTimeImmutable(date("Y-m-d H:i:s", strtotime($content->displayTime)));
        if($content->suppressionTime != null){
            $supprTime = new DateTimeImmutable(date("Y-m-d H:i:s", strtotime($content->suppressionTime)));
        }
        else {
            $supprTime = null;
        }

        $post = new Posts();
        $post->setTitle($content->title);
        $post->setBody($content->body);
        $post->setUser($this->currentUser);
        foreach ($content->categories as $category_name){ // get all the selected categories before creating the post
            $category = $this->catRepo->findOneByName("$category_name");
            $post->addCategory($this->emi->getReference(Categories::class, $category->getId()));
        }
        $post->setStartDisplayDate($showTime);
        $post->setDeleteDate($supprTime);
        try{
            $this->emi->persist($post);
            $this->emi->flush();
            
            return $this->json([
                "post" => $post->toArray(),
            ]);
        }catch(Exception $e){
           return new Response($e);
        }
    }

    // #[Route('/categories', name: 'categories')]
    // public function getAllPostCategories(Request $request){
    //     $content = json_decode($request->getContent());
    //     $categories = $this->catRepo->findSomeByPostId($content->id);
    //     return $this->json($categories);
    // }

    /**
     * @param request
     * Select the post that has to be deleted by its Id
     * FindOnBy(id) in postsRepository
     * 
     * Return true or false
     */
    #[Route('/delete', name: 'delete')]
    public function deletePost(Request $request) : Response
    {
        $content = json_decode($request->getContent());
        $post = $this->postsRepo->findOneBy(array('id' => $content->id));

        if($post != null){
            $this->emi->remove($post);
            $this->emi->flush();
            return new Response(true);
        }
        return new Response(false);
    }

    /**
     * @param serializer
     * @param request
     * Used when an id parameter is present in the url.
     * Get from the database the post concerned to zoom on.
     * findOneById(id) from postsRepository
     * 
     * Return a post
     */
    #[Route('/get', name: 'get')]
    public function getById(SerializerInterface $serializer, Request $request) : Response
    {
        $content = json_decode($request->getContent());
        $posts = $this->postsRepo->findOneById($content->id);
        $json = $serializer->serialize(
            $posts,
            'json', ['groups' => ['user','post']]
        );
        return new Response($json);
    }

}
