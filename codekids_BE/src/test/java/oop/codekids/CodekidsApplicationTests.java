package oop.codekids;


import oop.codekids.entity.Problem;
import oop.codekids.entity.Tutorial;
import oop.codekids.repository.ProblemRepository;
import oop.codekids.repository.TutorialRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@SpringBootTest
@ActiveProfiles("local")
class CodekidsApplicationTests {

    @Autowired
    private ProblemRepository problemRepository;

    @Test
    void contextLoads() {
    }

    @Test
    @DisplayName("데이터 저장하기")
    void createData() {
        Problem workBook1 = Problem.builder()
                .concept(oop.codekids.Concept.ABSTRACT)
                .problemTitle("나는 낭만 고양이!")
                .build();

        Problem workBook2 = Problem.builder()
                .concept(oop.codekids.Concept.ABSTRACT)
                .problemTitle("불이 났어요!")
                .build();

        Problem workBook3 = Problem.builder()
                .concept(oop.codekids.Concept.ABSTRACT)
                .problemTitle("빠빵 차가 지나갑니당!")
                .build();
        Problem workBook4 = Problem.builder()
                .concept(oop.codekids.Concept.POLYMORPHISM)
                .problemTitle("도형이 뭘까요?")
                .build();

        problemRepository.save(workBook1);
        problemRepository.save(workBook2);
        problemRepository.save(workBook3);
        problemRepository.save(workBook4);

        Assertions.assertThat(problemRepository.findAll()).hasSize(4);
    }
    @Test
    void deleteData() {
        problemRepository.deleteAll();
    }

    @Autowired
    private TutorialRepository tutorialRepository;

    @Test
    @DisplayName("튜토리얼 데이터 넣기")
    void addTutorial() {
        Tutorial tutorial1 = Tutorial.builder()
                .concept(oop.codekids.Concept.ABSTRACT)
                .build();
        Tutorial tutorial2 = Tutorial.builder()
                .concept(oop.codekids.Concept.ENCAPSULATION)
                .build();
        Tutorial tutorial3 = Tutorial.builder()
                .concept(oop.codekids.Concept.POLYMORPHISM)
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




    @Test
    void testPostImageWithData()  {

        MockMultipartFile image = new MockMultipartFile("image", "animal.png", "image/png", "anima.png".getBytes());

        Problem target = postImageWithData(image);

        Assertions.assertThat(target.getImageUrl()).isEqualTo("animal.png");
    }

    Problem postImageWithData(MultipartFile image)  {
        try{
            Problem problem5 = Problem.builder()
                    .problemTitle("강아지는 냐옹, 고양이는 멍멍?")
                    .concept(oop.codekids.Concept.ABSTRACT)
                    .imageUrl(image.toString())
                    .build();
            problemRepository.save(problem5);
            return problem5;
        }catch (RuntimeException e){
            throw new RuntimeException(e.getMessage());
        }
    }


}
