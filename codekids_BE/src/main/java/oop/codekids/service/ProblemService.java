package oop.codekids.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import oop.codekids.dto.ProblemDto;
import oop.codekids.dto.ProblemsDto;
import oop.codekids.entity.Problem;
import oop.codekids.repository.ProblemRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProblemService {
    private final ProblemRepository problemRepository;

    public ProblemsDto getAllProblems(){
        List<Problem> problems = problemRepository.findAll();
        List<ProblemDto> problemDtos = new ArrayList<>();
        for (Problem problem : problems) {
            ProblemDto problemDto = new ProblemDto(
                    problem.getProblemId(),
                    problem.getProblemTitle(),
                    problem.getConcept(),
                    Optional.ofNullable(problem.getJavaAnswer()),
                    Optional.ofNullable(problem.getJavaHint()),
                    Optional.ofNullable(problem.getBlockAnswer()),
                    Optional.ofNullable(problem.getBlockHint())
            );
            problemDtos.add(problemDto);
        }
        ProblemsDto problemsDto = new ProblemsDto(problemDtos);
        return problemsDto;
    }
}
