<?php

namespace App\Controller;

use App\Entity\Posts;
use App\Entity\PostsLikes;
use App\Repository\PostsLikesRepository;
use App\Repository\PostsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/like', name: 'app_like_')]
class LikeController extends AbstractController
{
    private $emi;
    private $likesRepo;
    protected $currentUser;

    public function __construct(TokenStorageInterface $tokenStorage, EntityManagerInterface $emi, PostsLikesRepository $likesRepo) {
        $this->emi = $emi;
        $this->likesRepo = $likesRepo;
        $this->currentUser = $tokenStorage->getToken()->getUser();
     }

    /**
     * @param request
     * From the request, catch the id of the liked post to get the whole post from entity manager.
     * Set the user to the current one
     * Add a like in the db (posts_likes table)
     * 
     * Return true or an error message
     */
    #[Route(path: '/add', name: 'add')]
    public function add(Request $request) : Response
    {
        $content = json_decode($request->getContent());
        $like = new PostsLikes();
        $like->setLikingUserId($this->currentUser);
        $post = $this->emi->getReference(Posts::class, $content->postId);
        $like->setLikedPostId($post);
        try{
            $this->emi->persist($like);
            $this->emi->flush();
            return new Response(true);
        }catch(Exception $e){
            return new Response($e);
        }
    }

    /**
     * @param request
     * fetch a DELETE methods. Get the deleted like from its postId obtained from the request
     * and delete it in the db (posts_likes table)
     * 
     * Return true or an error message
     */
    #[Route(path: '/unlike', name: 'unlike', methods: ["DELETE"])]
    public function unlike(Request $request) : Response
    {
        $content = json_decode($request->getContent());
        $like = $this->likesRepo->findOneBy(array('liked_post' => $content->postId, 'liking_user' => $this->currentUser->getId()));
        try{
            if($like!=null){
                $this->emi->remove($like);
                $this->emi->flush();
            }
        }catch(Exception $e){
            return new Response($e);
        }
        return new Response(true);
    }

    /**
     * Get all the likes from the user currently logged in using their id
     * 
     * Return an array of Likes
     */
    #[Route(path: '/get', name:'get')]
    public function getAllUserLikes() : Response
    {
        $likes = $this->likesRepo->findByUserId($this->currentUser->getId());
        return $this->json($likes);
    }
}
