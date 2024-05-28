package oop.codekids.repository;

import oop.codekids.Concept;
import oop.codekids.entity.Problem;
import oop.codekids.entity.Quiz;
import oop.codekids.entity.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface QuizRepository extends JpaRepository<Quiz,Double> {
    @Query(value = "SELECT * FROM quiz Q WHERE Q.tutorial = :tutorial ORDER BY RAND() LIMIT 3", nativeQuery = true)
    List<Quiz> findRandomQuizzesByTutorial(@Param("tutorial") Long tutorial);
}
