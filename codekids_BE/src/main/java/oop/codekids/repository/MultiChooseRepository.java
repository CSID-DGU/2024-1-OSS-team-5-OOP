package oop.codekids.repository;

import oop.codekids.entity.MultiChoose;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MultiChooseRepository extends JpaRepository<MultiChoose, Long> {
    List<MultiChoose> findAllByQuizId(Long quiz_id);
}
