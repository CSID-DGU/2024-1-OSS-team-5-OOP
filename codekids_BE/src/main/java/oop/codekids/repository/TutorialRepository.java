package oop.codekids.repository;

import oop.codekids.Concept;
import oop.codekids.entity.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
    Tutorial findByConcept(Concept concept);
}
