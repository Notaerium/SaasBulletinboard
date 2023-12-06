<?php

namespace App\Controller;

use App\Repository\CategoriesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/category', name: 'app_category_')]
class CategoryController extends AbstractController
{
    private $categoriesRepository;

    public function __construct(CategoriesRepository $categoriesRepository) {
        $this->categoriesRepository = $categoriesRepository;
     }

    /**
     * findNameList() => get all the names of the categories in the categoriesRepository
     * 
     * Return an array of categories' name
     */
    #[Route('/getCats', name: 'getCats')]
    public function getCategories(): Response
    {
        $categories = $this->categoriesRepository->findNameList();
        $list = [];
        foreach($categories as $category){
            $list[] = $category['category'];
        }
        return $this->json($list);
    }
}
