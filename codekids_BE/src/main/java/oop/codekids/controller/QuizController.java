package oop.codekids.controller;

import lombok.RequiredArgsConstructor;
import oop.codekids.dto.QuizListDto;
import oop.codekids.service.QuizService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    @GetMapping("/getQuizList")
    public ResponseEntity<QuizListDto> getQuizList(@RequestParam("concept")String concept_s){
        return ResponseEntity.ok(quizService.getQuizList(concept_s));
    }
}
