<?php

namespace App\Controller;

use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/image', name: 'app_image_')]
class ImageController extends AbstractController
{

    #[Route('/upload', name: 'upload')]
    public function upload()
    {
        $imageFolder = $_SERVER['DOCUMENT_ROOT'].'/public/' . 'images/';
        //dump($imageFolder);

        //Prevent uploads on an OPTIONS request
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            header("Access-Control-Allow-Methods: POST, OPTIONS");
        return;
        }
        //sanitize and verify images before they arrive on the server
        reset ($_FILES);
        $temp = current($_FILES);
        try {
            if (is_uploaded_file($temp['tmp_name'])){
                if (preg_match("/([^\w\s\d\-_~,;:\[\]\(\).])|([\.]{2,})/", $temp['name'])) {
                    header("HTTP/1.1 400 Invalid file name.");
                return;
                }
    
            if (!in_array(strtolower(pathinfo($temp['name'], PATHINFO_EXTENSION)), array("gif", "jpg", "png"))) {
                    header("HTTP/1.1 400 Invalid extension.");
                return;
            }
            //Configure the script to accept an image upload if there is an accepted origin, or if there was no origin
                $filetowrite = $imageFolder . $temp['name'];
                //dd($temp['tmp_name']."  -  ".$filetowrite);
                move_uploaded_file($temp['tmp_name'], $filetowrite);
    
                $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on' ? "https://" : "http://";
                $localAddress = 'localhost:8000/images/';
                $baseurl = $protocol . $_SERVER["HTTP_HOST"] . "/images/";
    
            //Send the required JSON object that has 'location' as a property back to TinyMCE
            return new Response(json_encode(array('location' => $baseurl . $temp['name']))); //was $filetowrite
                } else {
            header("HTTP/1.1 500 Server Error");
            } 
        }catch (Exception $e){
            header("Error: Invalid name, check special characters in the name of the image");
        }
    }

}