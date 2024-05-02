package oop.codekids.repository;

import oop.codekids.entity.WorkBookEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkBookRepository extends JpaRepository<WorkBookEntity, Long> {
}