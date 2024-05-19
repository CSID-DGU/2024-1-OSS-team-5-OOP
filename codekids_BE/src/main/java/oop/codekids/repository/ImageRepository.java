package oop.codekids.repository;

import oop.codekids.entity.ProblemImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<ProblemImage, Long> {
}
