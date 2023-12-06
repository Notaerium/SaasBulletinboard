<?php

namespace App\Repository;

use App\Entity\PostsLikes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PostsLikes>
 *
 * @method PostsLikes|null find($id, $lockMode = null, $lockVersion = null)
 * @method PostsLikes|null findOneBy(array $criteria, array $orderBy = null)
 * @method PostsLikes[]    findAll()
 * @method PostsLikes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostsLikesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PostsLikes::class);
    }

//    /**
//     * @return PostsLikes[] Returns an array of PostsLikes objects
//     */
   public function findByUserId($value): array
   {
       return $this->createQueryBuilder('p')
           ->select('IDENTITY(p.liked_post)')
           ->andWhere('p.liking_user = :val')
           ->setParameter('val', $value)
           ->getQuery()
           ->getResult()
       ;
   }

//    public function findOneBySomeField($value): ?PostsLikes
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
