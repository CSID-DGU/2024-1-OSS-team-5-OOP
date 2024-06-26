package oop.codekids.repository;

import oop.codekids.entity.ProblemDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProblemDetailRepository extends JpaRepository<ProblemDetail, Long> {
    List<ProblemDetail> findByProblemIdAndLevel(Long problemId, int level);
    Optional<ProblemDetail> findByProblemIdAndLevelAndAnswer(Long problemId, int level,String answer);
}
