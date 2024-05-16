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
                    problem.getConcept()
            );
            problemDtos.add(problemDto);
        }
        ProblemsDto problemsDto = new ProblemsDto(problemDtos);
        return problemsDto;
    }
}
