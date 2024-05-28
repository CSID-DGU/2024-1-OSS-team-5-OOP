package oop.codekids.repository;

import oop.codekids.entity.Tutorial;
import oop.codekids.entity.TutorialDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface TutorialDetailRepository extends JpaRepository<TutorialDetail, Long> {
    List<TutorialDetail> findAllByTutorial(Tutorial tutorial);
}
