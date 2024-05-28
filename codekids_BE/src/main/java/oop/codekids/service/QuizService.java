package oop.codekids.service;

import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import oop.codekids.Concept;
import oop.codekids.dto.QuizDto;
import oop.codekids.dto.QuizListDto;
import oop.codekids.entity.Quiz;
import oop.codekids.entity.Tutorial;
import oop.codekids.repository.QuizRepository;
import oop.codekids.repository.TutorialRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class QuizService {
    private final QuizRepository quizRepository;
    private final TutorialRepository tutorialRepository;
    public QuizListDto getQuizList(String concept_s){
        Concept concept = Concept.valueOf(concept_s);
        Tutorial tutorial = tutorialRepository.findByConcept(concept);
        List<Quiz> quizList = quizRepository.findRandomQuizzesByTutorial(tutorial.getId());
        List<QuizDto> quizDtoList = new ArrayList<>();
        for (Quiz quiz: quizList){
            quizDtoList.add(quiz.toDto());
        }
        QuizListDto quizListDto = new QuizListDto(quizDtoList);
        return quizListDto;
    }
}
