package oop.codekids.service;

import lombok.RequiredArgsConstructor;
import oop.codekids.Concept;
import oop.codekids.dto.*;
import oop.codekids.entity.Problem;
import oop.codekids.entity.ProblemDetail;
import oop.codekids.repository.ProblemDetailRepository;
import oop.codekids.repository.ProblemRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProblemService {
    private final ProblemRepository problemRepository;
    private final ProblemDetailRepository problemDetailRepository;

    public ProblemsDto getAllProblems() {
        List<Problem> problems = problemRepository.findAll();
        // Entity ->  Dto
        List<ProblemDto> problemDtos = new ArrayList<>();
        for (Problem problem : problems) {
            ProblemDto problemDto = problem.toDto();
            problemDtos.add(problemDto);
        }
        ProblemsDto problemsDto = new ProblemsDto(problemDtos);
        return problemsDto;
    }

    public ProblemsDto getFilteredProblemId(String concept_s) {
        Concept concept = Concept.valueOf(concept_s);
        List<Problem> problems = problemRepository.findAllByConcept(concept);
        List<ProblemDto> problemDtos = new ArrayList<>();
        for (Problem problem : problems) {
            ProblemDto problemDto = problem.toDto();
            problemDtos.add(problemDto);
        }
        ProblemsDto problemsDto = new ProblemsDto(problemDtos);
        return problemsDto;
    }

    public ResponseDto getOneProblem(Long id, int level) {
        Optional<Problem> problem = problemRepository.findById(id);
        if (problem.isPresent()) {
            Optional<ProblemDetail> problemDetail = problemDetailRepository.findByProblemIdAndLevel(id, level);
            if (problemDetail.isPresent()) {
                ProblemDetailDto problemDetailDto = problemDetail.get().toDto(problem.get().getTitle(), problem.get().getConcept().toString());
                return new ResponseDto(problemDetailDto);
            } else {
                return new ResponseDto("ProblemDetail not found");
            }
        } else {
            return new ResponseDto("Problem not found");
        }
    }

    public ResponseDto checkAnswer(Long id, int level, String answer) {

        Optional<ProblemDetail> problemDetail = problemDetailRepository.findByProblemIdAndLevelAndAnswer(id, level,answer);
        if (problemDetail.isPresent()) {
            return new ResponseDto<Boolean>(true);
        } else {
            return new ResponseDto<Boolean>(false);
        }

    }
}
