<?php

namespace App\Security\Voter;

use App\Entity\Posts;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class PostsVoter extends Voter
{
    const EDIT = "POST_EDIT";
    const DELETE = "POST_DELETE";

    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    protected function supports(string $attribute, $post): bool
    {
        return in_array($attribute, [self::EDIT, self::DELETE]) && $post instanceof Posts;
    }

    protected function voteOnAttribute($attribute, $post, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if(!$user instanceof UserInterface) return false;
        if($this->security->isGranted('ROLE_ADMIN')) return true;
        switch($attribute){
            case self::EDIT:
                return $this->canEdit();
                break;
            case self::DELETE:
                return $this->canDelete();
                break;
        }
    }


    private function canEdit(){
        return $this->security->isGranted("ROLE_DEPARTMENT_ADMIN");
    }
    private function canDelete(){
        return $this->security->isGranted("ROLE_DEPARTMENT_ADMIN");
    }
}