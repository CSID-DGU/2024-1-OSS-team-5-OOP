package oop.codekids;

import oop.codekids.entity.Problem;
import oop.codekids.entity.Tutorial;
import oop.codekids.repository.ProblemRepository;
import oop.codekids.repository.TutorialRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Profile;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

@SpringBootTest
@ActiveProfiles("local")
class CodekidsApplicationTests {

    @Autowired
    private ProblemRepository workBookRepository;

    @Test
    void contextLoads() {
    }

    @Test
    @DisplayName("데이터 저장하기")
    void createData() {
        Problem workBook1 = Problem.builder()
                .concept(Concept.ABSTRACT)
                .problemTitle("나는 낭만 고양이!")
                .build();

        Problem workBook2 = Problem.builder()
                .concept(Concept.ABSTRACT)
                .problemTitle("불이 났어요!")
                .build();

        Problem workBook3 = Problem.builder()
                .concept(Concept.ABSTRACT)
                .problemTitle("빠빵 차가 지나갑니당!")
                .build();
        Problem workBook4 = Problem.builder()
                .concept(Concept.POLYMORPHISM)
                .problemTitle("도형이 뭘까요?")
                .build();

        workBookRepository.save(workBook1);
        workBookRepository.save(workBook2);
        workBookRepository.save(workBook3);
        workBookRepository.save(workBook4);

        Assertions.assertThat(workBookRepository.findAll()).hasSize(4);
    }
    @Test
    void deleteData() {
        workBookRepository.deleteAll();
    }

    @Autowired
    private TutorialRepository tutorialRepository;

    @Test
    @DisplayName("튜토리얼 데이터 넣기")
    void addTutorial() {
        Tutorial tutorial1 = Tutorial.builder()
                .concept(Concept.ABSTRACT)
                .build();
        Tutorial tutorial2 = Tutorial.builder()
                .concept(Concept.ENCAPSULATION)
                .build();
        Tutorial tutorial3 = Tutorial.builder()
                .concept(Concept.POLYMORPHISM)
                .build();

        tutorialRepository.save(tutorial1);
        tutorialRepository.save(tutorial2);
        tutorialRepository.save(tutorial3);

        Assertions.assertThat(tutorialRepository.findAll()).hasSize(3);
    }
    @Test
    @DisplayName("튜토리얼 전체 조회")
    void getAllTutorial(){
        List<Tutorial> tutorials = tutorialRepository.findAll();
        Assertions.assertThat(tutorials).isNotNull();
    }



}
