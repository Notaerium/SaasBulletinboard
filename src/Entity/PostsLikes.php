<?php

namespace App\Entity;

use App\Repository\PostsLikesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PostsLikesRepository::class)]
class PostsLikes
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'postsLikes')]
    #[ORM\JoinColumn(onDelete: 'CASCADE')]
    private ?Users $liking_user = null;

    #[ORM\ManyToOne(inversedBy: 'postsLikes')]
    #[ORM\JoinColumn(onDelete: 'CASCADE')]
    private ?Posts $liked_post = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLikingUserId(): ?Users
    {
        return $this->liking_user;
    }

    public function setLikingUserId(?Users $liking_user): static
    {
        $this->liking_user = $liking_user;

        return $this;
    }

    public function getLikedPostId(): ?Posts
    {
        return $this->liked_post;
    }

    public function setLikedPostId(?Posts $liked_post): static
    {
        $this->liked_post = $liked_post;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }
}
