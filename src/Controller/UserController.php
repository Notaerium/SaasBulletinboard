<?php

namespace App\Controller;

use App\Entity\Departments;
use App\Entity\Users;
use App\Repository\DepartmentsRepository;
use App\Repository\UsersRepository;
use App\Security\UsersAuthenticator;
use App\Service\JWTService;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;

#[Route('/api/user', name: 'app_user_')]
class UserController extends AbstractController
{

    private $emi;
    private $usersRepository;
    private $departmentsRepository;

    public function __construct(EntityManagerInterface $emi, UsersRepository $usersRepository,
     DepartmentsRepository $departmentsRepository) {
        $this->emi = $emi;
        $this->usersRepository = $usersRepository;
        $this->departmentsRepository = $departmentsRepository;
     }

    /**
     * Get all the departments from the departmentsRepository with findAll()
     * 
     * Return a response of an array of departments
     */
    #[Route('/departments', name: 'departments')]
    public function getDepartments()
    {
        $departments = $this->departmentsRepository->findAll();
        $arrayOfDepartments = [];
        foreach($departments as $department){
            $arrayOfDepartments[] = $department->toArray();
        }
        return $this->json($arrayOfDepartments);
    }

    /**
     * Return the role of the current user
     */
    #[Route('/getRole', name: 'getRole')]
    public function getUserRole(): Response
    {
        $userRole = $this->getUser()->getRoles();
        return $this->json($userRole);
    }

    /**
     * Return a response of the current user's id
     */
    #[Route('/getId', name: 'getId')]
    public function getUserId(): Response
    {
        $userId = $this->getUser()->getId();
        return $this->json($userId);
    }



    /**
     * Return a response saying if the user is verified or not
     */
    #[Route('/verified', name: 'verified')]
    public function is_Verified(): Response
    {
        $userVerified = $this->getUser()->getIsVerified();
        return $this->json($userVerified);
    }
    
    /**
     * @param request
     * @param userPasswordHasher
     * @param userAuthenticator
     * @param authenticator
     * @param mail
     * @param jwt
     * 
     * Get all the information from the form in the Signup component. Hash the password
     * Send an email and create a JSON Web Tokens for the user to verify their account and their mail address.
     * If not verified, the user can't post anything, even if admin.
     * 
     * Return aResponse of the authenticated user or null
     */
    #[Route('/create', name: 'create')]
    public function create(Request $request, UserPasswordHasherInterface $userPasswordHasher,
     UserAuthenticatorInterface $userAuthenticator, UsersAuthenticator $authenticator, SendMailService $mail,
     JWTService $jwt): Response | null
    {
        $content = json_decode($request->getContent());

        $user = new Users();
        $user->setFirstname($content->firstname);
        $user->setLastname($content->lastname);
        $user->setDepartment($this->emi->getReference(Departments::class, $content->department_id));
        $user->setRoles($content->role);
        $user->setEmail($content->email);
        $user->setPassword($userPasswordHasher->hashPassword(
            $user,
            $content->password
        ));

        try{
            $this->emi->persist($user);
            $this->emi->flush();
            
            //create the user's JWT
            $header = [
                'alg' => 'HS256',
                'typ' => 'JWT'
            ];
            $payload = [
                'user_id' => $user->getId()
            ];
            $token = $jwt->generateToken($header, $payload, $this->getParameter('app.jwtsecret'));

            // send email
            $error = " error send mail";
            $mail->send('bulletinboard@vinhparneix.com',
                $user->getEmail(),
                "Verify your account on the company's noticeboard",
                'register', 
                compact('user', 'token')
            );

            return $userAuthenticator->authenticateUser(
                $user,
                $authenticator,
                $request
            );
        }catch(Exception $e){
            dd($e->getMessage());
            return null;
        }          
    }

    /**
     * @param authenticationUtils
     * @param request
     * @param userPasswordHasher
     * @param userAuthenticator
     * @param authenticator
     * 
     * Get the data from the form in the Login component
     * Check if the email and password are correct.
     * 
     * Return a response of the authentication of the user or an error message
     */
    #[Route(path: '/login', name: 'login', methods:'POST')]
    public function login(AuthenticationUtils $authenticationUtils, Request $request, UserPasswordHasherInterface $userPasswordHasher,
    UserAuthenticatorInterface $userAuthenticator, UsersAuthenticator $authenticator) : Response
    {
        $content = json_decode($request->getContent());
        $user = new Users();
        $user = $this->usersRepository->findUserByEmail($content->email);
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        if (!$user || !$userPasswordHasher->isPasswordValid($user, $content->password) || $error) {
            return new Response("ERROR");
        }
        else{
            return $userAuthenticator->authenticateUser(
                $user,
                $authenticator,
                $request
            );
        }       
    }

    /**
     * @param token
     * @param jwt
     * @param usersRepository
     * @param emi
     * 
     * Verify if the user from its token by the mail they've been sent when creating an account
     * 
     * Return a response that redirect to the main page.
     */
    #[Route(path: '/verif/{token}', name: 'verify_user')]
    public function verifyUser($token, JWTService $jwt, UsersRepository $usersRepository, EntityManagerInterface $emi) : Response
    {
        //token valid, not expired and not modified
        
        if($jwt->isValid($token) && !$jwt->isExpired($token) && $jwt->checkSignature($token, $this->getParameter('app.jwtsecret'))){
            //get payload
            $payload = $jwt->getPayload($token);

            //user from payload
            $user = $usersRepository->find($payload['user_id']);
            //user exist and is still not verified
            if($user && !$user->getIsVerified()){
                $user->setIsVerified(true);
                $emi->flush($user);
                $this->addFlash('success', 'Mail address verified');
                return $this->redirectToRoute('app_spa');
            }
        }
        //problem with the token
        $this->addFlash('danger', 'Invalid or expired token');
        return $this->redirectToRoute('app_spa');
    }

    /**
     * @param jwt
     * @param mail
     * @param usersRepository
     * 
     * If the mail link to be verified has expired, an other mail with a new link can be sent.
     * Create another JWT and send another mail.
     * 
     * Return a response saying true if everything went right
     */
    #[Route(path: '/reverif', name: 'reverif')]
    public function resendVerif(JWTService $jwt, SendMailService $mail, UsersRepository $usersRepository) : Response
    {
        $user = $this->getUser();
        if(!$user){
            $this->addFlash('danger', 'You should be connected to be verified');
            return $this->redirectToRoute('app_spa');
        }
        if($user->getIsVerified()){
            $this->addFlash('warning', 'This user is already verified');
            return $this->redirectToRoute('app_spa');
        }
        //create the user's JWT
        $header = [
            'alg' => 'HS256',
            'typ' => 'JWT'
        ];
        $payload = [
            'user_id' => $user->getId()
        ];
        $token = $jwt->generateToken($header, $payload, $this->getParameter('app.jwtsecret'));

        // send email
        $error = " error send mail";
        $mail->send('bulletinboard@vinhparneix.com',
            $user->getEmail(),
            "Verify your account on the company's noticeboard",
            'register', 
            compact('user', 'token')
        );

        return new Response(true);
    }

    /**
     * Return a response of true or false saying if a user is logged in or not
     */
    #[Route(path: '/check', name: 'check')]
    public function checkLoggedIn(): Response
    {
        if ($this->getUser()) {
            return $this->json(true);
        }
        else{
            return $this->json(false);
        }
    }

    /**
     * Return a response of the current user mail address
     */
    #[Route(path: '/mail', name:'mail')]
    public function getMail(): Response
    {
        $userMail = $this->getUser()->getEmail();
        return $this->json($userMail);
    }

    #[Route(path: '/logout', name: 'logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }


}
