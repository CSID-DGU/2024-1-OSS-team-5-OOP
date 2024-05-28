package oop.codekids.repository;

import oop.codekids.entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz,Double> {
}
