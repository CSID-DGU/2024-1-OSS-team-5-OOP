package oop.codekids.service;

import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import oop.codekids.Concept;
import oop.codekids.QuizType;
import oop.codekids.dto.MultiChooseDto;
import oop.codekids.dto.QuizDto;
import oop.codekids.dto.QuizListDto;
import oop.codekids.entity.MultiChoose;
import oop.codekids.entity.Quiz;
import oop.codekids.entity.Tutorial;
import oop.codekids.repository.MultiChooseRepository;
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
    private final MultiChooseRepository multiChooseRepository;

    public QuizListDto getQuizList(String concept_s){
        Concept concept = Concept.valueOf(concept_s);
        Tutorial tutorial = tutorialRepository.findByConcept(concept);
        List<Quiz> quizList = quizRepository.findRandomQuizzesByTutorial(tutorial.getId());
        List<MultiChooseDto> multiChooseDtoList = new ArrayList<>();
        List<QuizDto> quizDtoList = new ArrayList<>();
        for (Quiz quiz: quizList){
            List<MultiChoose> multiChooseList = multiChooseRepository.findAllByQuizId(quiz.getId());
            for (MultiChoose multiChoose: multiChooseList){
                multiChooseDtoList.add(multiChoose.toDto());
            }
            QuizDto quizDto = QuizDto.builder()
                    .id(quiz.getId())
                    .title(quiz.getTitle())
                    .quizType(quiz.getQuizType())
                    .description(quiz.getDescription())
                    .answer(quiz.getAnswer().getAnswer(quiz.getQuizType()))
                    .multichoose(multiChooseDtoList)
                    .build();
            quizDtoList.add(quizDto);
        }
        QuizListDto quizListDto = new QuizListDto(quizDtoList);
        return quizListDto;
    }
}
