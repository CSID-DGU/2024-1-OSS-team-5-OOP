package oop.codekids.service;

import lombok.RequiredArgsConstructor;
import oop.codekids.Concept;
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
        // Entity ->  Dto
        List<ProblemDto> problemDtos = new ArrayList<>();
        for (Problem problem : problems) {
            ProblemDto problemDto = problem.toDto(problem);
            problemDtos.add(problemDto);
        }
        ProblemsDto problemsDto = new ProblemsDto(problemDtos);
        return problemsDto;
    }
    public ProblemsDto getFilteredProblemId(String concept_s){
        Concept concept = Concept.valueOf(concept_s);
        List<Problem> problems = problemRepository.findAllByConcept(concept);
        List<ProblemDto> problemDtos = new ArrayList<>();
        for (Problem problem : problems) {
            ProblemDto problemDto = problem.toDto(problem);
            problemDtos.add(problemDto);
        }
        ProblemsDto problemsDto = new ProblemsDto(problemDtos);
        return problemsDto;
    }
}
