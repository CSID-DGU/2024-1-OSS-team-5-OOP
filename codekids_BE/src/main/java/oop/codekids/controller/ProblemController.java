package oop.codekids.controller;

import lombok.RequiredArgsConstructor;
import oop.codekids.Answer;
import oop.codekids.dto.AnswerRequestDto;
import oop.codekids.dto.ProblemDto;
import oop.codekids.dto.ProblemsDto;
import oop.codekids.dto.ResponseDto;
import oop.codekids.service.ProblemService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/problem")
@Controller
@RequiredArgsConstructor
public class ProblemController {

    private final ProblemService problemService;

    @GetMapping("/getAllProblems")
    public ResponseEntity<ProblemsDto> getAllProblems(){
        return ResponseEntity.ok(problemService.getAllProblems());
    }

    @GetMapping("/getFilteredProblems")
    public ResponseEntity<ProblemsDto> getFilteredProblems(@RequestParam("concept") String concept_s){
        return ResponseEntity.ok(problemService.getFilteredProblemId(concept_s));
    }
    @GetMapping("/getOneProblem")
    public ResponseEntity<ResponseDto> getOneProblem(@RequestParam("id") Long id, @RequestParam("level") int level){
        return ResponseEntity.ok(problemService.getOneProblem(id,level));
    }
    @GetMapping("/checkAnswer")
    public ResponseEntity<ResponseDto> checkAnswer(@RequestParam("id") Long id, @RequestParam("level") int level, @RequestParam("answer") AnswerRequestDto answer){
        return ResponseEntity.ok(problemService.checkAnswer(id, level, answer));
    }

}
