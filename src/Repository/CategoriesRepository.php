<?php

namespace App\Repository;

use App\Entity\Categories;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Categories>
 *
 * @method Categories|null find($id, $lockMode = null, $lockVersion = null)
 * @method Categories|null findOneBy(array $criteria, array $orderBy = null)
 * @method Categories[]    findAll()
 * @method Categories[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoriesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Categories::class);
    }

//    /**
//     * @return Categories[] Returns an array of Categories objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

    //select all the categories name
   public function findNameList(): array
   {
        return $this->createQueryBuilder('c')
            ->select('c.category')
            ->getQuery()
            ->getResult()
            ;
   }

   public function findOneByName($value): ?Categories
   {
       return $this->createQueryBuilder('c')
           ->andWhere('c.category = :val')
           ->setParameter('val', $value)
           ->getQuery()
           ->getOneOrNullResult()
       ;
   }

    public function findSomeByPostId($postId): array
    {
        return $this->createQueryBuilder('c')
        ->select('c.category')
        ->from('App\Entity\Posts', 'p')
        ->where('p.id =:postId')
        ->setParameter('postId', $postId)
        ->getQuery()
        ->getResult()
         ;
    }
}
