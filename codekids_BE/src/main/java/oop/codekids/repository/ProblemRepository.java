package oop.codekids.repository;

import oop.codekids.entity.WorkBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<WorkBook, Long> {
}