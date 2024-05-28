package oop.codekids;


import oop.codekids.entity.Problem;
import oop.codekids.entity.Quiz;
import oop.codekids.entity.Tutorial;
import oop.codekids.entity.TutorialDetail;
import oop.codekids.repository.ProblemRepository;
import oop.codekids.repository.QuizRepository;
import oop.codekids.repository.TutorialDetailRepository;
import oop.codekids.repository.TutorialRepository;
import oop.codekids.service.S3Service;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;

@SpringBootTest
class CodekidsApplicationTests {

    @Autowired
    private ProblemRepository problemRepository;
    @Autowired
    private QuizRepository quizRepository;

    @Test
    void contextLoads() {
    }

    @Test
    @DisplayName("문제 데이터 전부 저장하기")
    void saveAllProblem() {
        Problem workBook1 = Problem.builder()
                .title("업앤다운 게임 만들기")
                .concept(Concept.ENCAPSULATION)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/upAndDown.png")
                .build();

        Problem workBook2 = Problem.builder()
                .title("자판기 유지보수하기")
                .concept(Concept.ENCAPSULATION)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/vendingMachine.png")
                .build();

        Problem workBook3 = Problem.builder()
                .title("도형 넓이 계산하기")
                .concept(Concept.ABSTRACT)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/car.png")
                .build();

        Problem workBook4 = Problem.builder()
                .title("자동차 움직이기")
                .concept(Concept.ABSTRACT)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/car.png")
                .build();

        Problem workBook5 = Problem.builder()
                .title("동물친구들과 놀기")
                .concept(Concept.POLYMORPHISM)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/animalFriends.png")
                .build();

        Problem workBook6 = Problem.builder()
                .title("연극 배우 공통점 찾기")
                .concept(Concept.POLYMORPHISM)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/show.png")
                .build();

        problemRepository.save(workBook1);
        problemRepository.save(workBook2);
        problemRepository.save(workBook3);
        problemRepository.save(workBook4);
        problemRepository.save(workBook5);
        problemRepository.save(workBook6);

        Assertions.assertThat(problemRepository.findAll()).hasSize(6);
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

        Tutorial polymorphism = Tutorial.builder()
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/POLYMORPHISM.png")
                .concept(Concept.POLYMORPHISM)
                .build();

        Tutorial encapsulation = Tutorial.builder()
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/ENCAPSULATION.png")
                .concept(Concept.ENCAPSULATION)
                .build();

        Tutorial abstract_ = Tutorial.builder()
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/ABSTRACT.png")
                .concept(Concept.ABSTRACT)
                .build();

        tutorialRepository.save(polymorphism);
        tutorialRepository.save(encapsulation);
        tutorialRepository.save(abstract_);

        Assertions.assertThat(tutorialRepository.findAll()).hasSize(3);
    }
    @Test
    @DisplayName("퀴즈 데이터 넣기")
    void quizData(){
        Tutorial polymorphism = tutorialRepository.findByConcept(Concept.POLYMORPHISM);
        Quiz quiz = Quiz.builder()
                .quizType(QuizType.OX)
                .title("다형성은 객체지향 프로그래밍에서 다양한 형태로 사용할 수 있는 능력을 말해요.")
                .answer(Answer.CORRECT)
                .tutorial(polymorphism)
                .description("‘다’ ‘형’ 성 , 말 그대로 다양한 형태로 동작할 수 있음을 의미하는거 잊지 않았죠?")
                .build();
        Quiz quiz1 =  Quiz.builder()
                .quizType(QuizType.OX)
                .title("다형성은 같은 이름의 함수가 항상 같은 일을 해야 한다는 뜻입니다. ")
                .answer(Answer.INCORRECT)
                .tutorial(polymorphism)
                .description("‘다형성에서는 동작이 같은 이름을 가지더라도 상황에 따라 다른 동작을 수행할 수 있어요!")
                .build();
        Quiz quiz2 = Quiz.builder()
                .quizType(QuizType.MULTI)
                .title("다음 중 다형성(polymorphism)에 대한 설명으로 가장 적절한 것은 무엇인가요?")
                .answer(Answer.TWO)
                .tutorial(polymorphism)
                .description("‘다형성에서는 동작이 같은 이름을 가지더라도 상황에 따라 다른 동작을 수행할 수 있어요!")
                .build();
        quizRepository.save(quiz);
        quizRepository.save(quiz1);
        quizRepository.save(quiz2);
    }

    @Autowired
    TutorialDetailRepository tutorialDetailRepository;

    @Test
    @DisplayName("개념 설명 관련 데이터 넣기")
    void getTutorial() {

        Tutorial encapsulation = tutorialRepository.findByConcept(Concept.ENCAPSULATION);
        TutorialDetail encap_detail1 = TutorialDetail.builder()
                .description("캡슐화는 하나의 클래스라는 큰 단위 안에서 기능을 처리하는 방식이에요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/encapsulation/cap1.jpg")
                .tutorial(encapsulation)
                .build();
        TutorialDetail encap_detail2 = TutorialDetail.builder()
                .description("랜덤 뽑기 기계를 만들었다고 생각해 보자구요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/encapsulation/cap3.jpg")
                .tutorial(encapsulation)
                .build();
        TutorialDetail encap_detail3 = TutorialDetail.builder()
                .description("만약 10개의 뽑기 게임이 있는데, 일일이 확률 조정을 하기 어렵겠죠?")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/encapsulation/cap4.jpg")
                .tutorial(encapsulation)
                .build();
        TutorialDetail encap_detail4 = TutorialDetail.builder()
                .description("이 때, 확률 조정하는 프로그램을 하나만 만들면, 모든 게임의 확률을 한번에 조정할 수 있을 거에요!")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/encapsulation/cap5.jpg")
                .tutorial(encapsulation)
                .build();
        TutorialDetail encap_detail5 = TutorialDetail.builder()
                .description("이걸 캡슐화 개념에 대입해 보면, 확률 조정하는 기능을 따로 떼어서 클래스라는 단위로 묶었다고 볼 수 있습니다.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/encapsulation/cap6.jpg")
                .tutorial(encapsulation)
                .build();
        TutorialDetail encap_detail6 = TutorialDetail.builder()
                .description("자, 이제 캡슐화 문제를 풀러 가볼까요?")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/encapsulation/cap7.jpg")
                .tutorial(encapsulation)
                .build();
        tutorialDetailRepository.save(encap_detail1);
        tutorialDetailRepository.save(encap_detail2);
        tutorialDetailRepository.save(encap_detail3);
        tutorialDetailRepository.save(encap_detail4);
        tutorialDetailRepository.save(encap_detail5);
        tutorialDetailRepository.save(encap_detail6);

        Tutorial con_abstract = tutorialRepository.findByConcept(Concept.ABSTRACT);
        TutorialDetail ab_detail1 = TutorialDetail.builder()
                .description("우리 모두 동물원에 가본 적이 있죠? 동물원에는 사자, 호랑이, 코끼리 등 여러 가지 동물이 있어요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/encapsulation/cap4.jpg")
                .tutorial(con_abstract)
                .build();
        TutorialDetail ab_detail2 = TutorialDetail.builder()
                .description("사자와 호랑이는 모두 고양잇과 동물이에요. 그래서 사자 객체와 호랑이 객체는 고양잇과 동물의 특징을 가지고 있어요. 이걸 더 간단하게 \"고양잇과 동물 객체\"라고 할 수 있어요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/encapsulation/cap4.jpg")
                .tutorial(con_abstract)
                .build();
        TutorialDetail ab_detail3 = TutorialDetail.builder()
                .description("또, 모든 동물은 숨 쉬고, 먹고, 잠을 자요. 그래서 사자 객체, 호랑이 객체, 코끼리 객체 모두 \"숨 쉬기\", \"먹기\", \"잠자기\"라는 역할을 가지고 있어요. 이걸 더 크게 보면 \"동물 객체\"라고 할 수 있어요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/encapsulation/cap4.jpg")
                .tutorial(con_abstract)
                .build();
        TutorialDetail ab_detail4 = TutorialDetail.builder()
                .description("이렇게 각각의 동물들이 가지고 있는 공통적인 특징과 역할을 모아서 더 큰 개념으로 만드는 것을 \"추상화\"라고 해요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/encapsulation/cap4.jpg")
                .tutorial(con_abstract)
                .build();

    }

    @Test
    @DisplayName("튜토리얼 전체 조회")
    void getAllTutorial() {
        List<Tutorial> tutorials = tutorialRepository.findAll();
        Assertions.assertThat(tutorials).isNotNull();
    }


    @Autowired
    private S3Service s3Service;


    @Test
    void testPostImageWithData() throws IOException {

        String filePath = "/Users/heoeunjeong/Desktop/codekids/codekids_BE/src/test/resource/animal.png";
        File file = new File(filePath);
        // 파일이 존재하는지 확인
        if (!file.exists()) {
            throw new IOException("File not found at " + filePath);
        } else {
            // 파일 내용을 바이트 배열로 읽기
            FileInputStream input = new FileInputStream(file);
            byte[] fileContent = input.readAllBytes();
            input.close();

            // 바이트 배열을 MultipartFile로 변환
            MultipartFile multipartFile = new MockMultipartFile(file.getName(), file.getName(), "text/plain", fileContent);
            Problem target = postImageWithData(multipartFile);

            Assertions.assertThat(target.getImageUrl()).isEqualTo("animal.png");

        }

    }

    Problem postImageWithData(MultipartFile image) {
        try {

            s3Service.uploadImage("problem/", image);
            Problem problem5 = Problem.builder()
                    .title("강아지는 냐옹, 고양이는 멍멍?")
                    .concept(oop.codekids.Concept.ABSTRACT)
                    .imageUrl(image.getOriginalFilename())
                    .build();
            problemRepository.save(problem5);
            return problem5;
        } catch (RuntimeException | IOException e) {
            throw new RuntimeException(e.getMessage());
        }
    }


}
