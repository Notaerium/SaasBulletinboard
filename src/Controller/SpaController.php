<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SpaController extends AbstractController
{
    /**
     * This is where the Single page application takes roots
     * Render a react Route
     */
    #[Route("/{reactRouting}", name: "app_spa", priority: "-1", defaults: ["reactRouting" => null], requirements: ["reactRouting" => "^(?!api).+"])]
    public function index(): Response
    {
        return $this->render('spa/index.html.twig', [
            'controller_name' => 'SpaController',
        ]);
    }
}
