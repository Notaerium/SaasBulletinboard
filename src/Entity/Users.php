<?php

namespace App\Entity;

use App\Repository\UsersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UsersRepository::class)]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class Users implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[Groups('user')]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups('user')]
    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[Groups('user')]
    #[ORM\Column(length: 100)]
    private ?string $firstname = null;

    #[Groups('user')]
    #[ORM\Column(length: 100)]
    private ?string $lastname = null;

    #[Groups('user')]
    #[ORM\Column]
    private ?bool $is_verified = false;

    #[Groups('user')]
    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?Departments $department = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Posts::class, orphanRemoval: true)]
    private Collection $posts;

    #[Groups('user')]
    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $created_at = null;

    #[Groups('user')]
    #[ORM\OneToMany(mappedBy: 'liking_user', targetEntity: PostsLikes::class, orphanRemoval: true)]
    private Collection $postsLikes;

    public function __construct()
    {
        $this->posts = new ArrayCollection();
        $this->postsLikes = new ArrayCollection();
        $this->created_at = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }


    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): static
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): static
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getIsVerified(): ?bool
    {
        return $this->is_verified;
    }

    public function setIsVerified(bool $is_verified): self
    {
        $this->is_verified = $is_verified;
        return $this;
    }

    public function getDepartment(): ?Departments
    {
        return $this->department;
    }

    public function setDepartment(?Departments $department): static
    {
        $this->department = $department;

        return $this;
    }

    /**
     * @return Collection<int, Posts>
     */
    public function getPosts(): Collection
    {
        return $this->posts;
    }

    public function addPost(Posts $post): static
    {
        if (!$this->posts->contains($post)) {
            $this->posts->add($post);
            $post->setUser($this);
        }

        return $this;
    }

    public function removePost(Posts $post): static
    {
        if ($this->posts->removeElement($post)) {
            // set the owning side to null (unless already changed)
            if ($post->getUser() === $this) {
                $post->setUser(null);
            }
        }

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

    /**
     * @return Collection<int, PostsLikes>
     */
    public function getPostsLikes(): Collection
    {
        return $this->postsLikes;
    }

    public function addPostsLike(PostsLikes $postsLike): static
    {
        if (!$this->postsLikes->contains($postsLike)) {
            $this->postsLikes->add($postsLike);
            $postsLike->setLikingUserId($this);
        }

        return $this;
    }

    public function removePostsLike(PostsLikes $postsLike): static
    {
        if ($this->postsLikes->removeElement($postsLike)) {
            // set the owning side to null (unless already changed)
            if ($postsLike->getLikingUserId() === $this) {
                $postsLike->setLikingUserId(null);
            }
        }

        return $this;
    }


    public function toArray(){
        return [
            'id' => $this->id,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'department' => $this->department,
            'email' => $this->email,
            'password' => $this->password,
            'created_at' => $this->created_at
        ];
    }
}
