package oop.codekids.controller;

import lombok.RequiredArgsConstructor;
import oop.codekids.dto.ProblemDto;
import oop.codekids.dto.ProblemsDto;
import oop.codekids.service.ProblemService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RequestMapping("/problem")
@Controller
@RequiredArgsConstructor
public class ProblemController {

    private final ProblemService problemService;

    @PostMapping("/getAllProblems")
    public ResponseEntity<ProblemsDto> getAllProblems(){
        return ResponseEntity.ok(problemService.getAllProblems());
    }
}
