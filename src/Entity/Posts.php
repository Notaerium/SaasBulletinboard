<?php

namespace App\Entity;

use App\Repository\PostsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PostsRepository::class)]
class Posts
{

    #[Groups("post")]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups("post")]
    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[Groups("post")]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $body = null;

    #[Groups('post')]
    #[ORM\ManyToOne(inversedBy: 'posts')]
    #[ORM\JoinColumn(onDelete: 'CASCADE')]
    private ?Users $user = null;

    #[Groups("post")]
    #[ORM\ManyToMany(targetEntity: Categories::class, inversedBy: 'posts', cascade: ['persist'], fetch: 'EAGER')]
    private Collection $categories;

    #[Groups("post")]
    #[ORM\Column]
    private ?\DateTimeImmutable $start_display_date = null;

    #[Groups("post")]
    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $delete_date = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $created_at = null;

    #[Groups("post")]
    #[ORM\OneToMany(mappedBy: 'liked_post', targetEntity: PostsLikes::class, orphanRemoval: true)]
    #[ORM\JoinColumn(onDelete:'CASCADE')]
    private Collection $postsLikes;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->postsLikes = new ArrayCollection();
        $this->created_at = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): static
    {
        $this->body = $body;

        return $this;
    }

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): static
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, Categories>
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Categories $category): static
    {
        if (!$this->categories->contains($category)) {
            $this->categories->add($category);
        }

        return $this;
    }

    public function removeCategory(Categories $category): static
    {
        $this->categories->removeElement($category);

        return $this;
    }

    public function getStartDisplayDate(): ?\DateTimeImmutable
    {
        return $this->start_display_date;
    }

    public function setStartDisplayDate(\DateTimeImmutable $start_display_date): static
    {
        $this->start_display_date = $start_display_date;

        return $this;
    }

    public function getDeleteDate(): ?\DateTimeImmutable
    {
        return $this->delete_date;
    }

    public function setDeleteDate(?\DateTimeImmutable $delete_date): static
    {
        $this->delete_date = $delete_date;

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
            $postsLike->setLikedPostId($this);
        }

        return $this;
    }

    public function removePostsLike(PostsLikes $postsLike): static
    {
        if ($this->postsLikes->removeElement($postsLike)) {
            // set the owning side to null (unless already changed)
            if ($postsLike->getLikedPostId() === $this) {
                $postsLike->setLikedPostId(null);
            }
        }

        return $this;
    }

    public function toArray(){
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'user_id' => $this->user,
            'categories' => $this->categories,
            'start_display_date' => $this->start_display_date,
            'delete_date' => $this->delete_date,
            'created_at' => $this->created_at
        ];
    }
}
