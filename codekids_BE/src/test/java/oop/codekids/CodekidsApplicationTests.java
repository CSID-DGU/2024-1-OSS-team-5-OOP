package oop.codekids;


import oop.codekids.entity.*;
import oop.codekids.repository.*;
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
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class CodekidsApplicationTests {

    @Autowired
    private ProblemRepository problemRepository;
    @Autowired
    private ProblemDetailRepository problemDetailRepository;
    @Autowired
    private QuizRepository quizRepository;

    @Test
    void contextLoads() {
    }

    @Test
    @DisplayName("3. Problem: 문제 데이터 전부 저장하기")
    void saveAllProblem() {

        Problem workBook1 = Problem.builder()
                .title("업/앤 다운 게임 만들기")
                .concept(Concept.ENCAPSULATION)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/upanddown.png")
                .build();
        problemRepository.save(workBook1);

        Problem workBook2 = Problem.builder()
                .title("계산기 만들기")
                .concept(Concept.ENCAPSULATION)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/calculator.png")
                .build();
        problemRepository.save(workBook2);

        Problem workBook3 = Problem.builder()
                .title("도형의 넓이를 구해볼까요? ")
                .concept(Concept.POLYMORPHISM)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/shape.png")
                .build();
        problemRepository.save(workBook3);

        Problem workBook4 = Problem.builder()
                .title("각 동물들은 어떤 소리를 낼까요?")
                .concept(Concept.POLYMORPHISM)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/car.png")
                .build();
        problemRepository.save(workBook4);

        Problem workBook5 = Problem.builder()
                .title("로봇과 함께 편리한 세상을 위하여~!")
                .concept(Concept.ABSTRACT)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/robot.png")
                .build();
        problemRepository.save(workBook5);

        ProblemDetail problemDetail1 = ProblemDetail.builder()
                .level(1)
                .concept(Concept.ABSTRACT)
                .hint("로봇 1단계 힌트입니다~")
                .title("전원 켜기,전원 끄기를 할 수 있는 로봇 인터페이스를 만드세요")
                .answer("interface(로봇)메소드:  전원켜기()전원끄기()")
                .problem(workBook5)
                .build();

        ProblemDetail problemDetail2 = ProblemDetail.builder()
                .level(2)
                .concept(Concept.ABSTRACT)
                .hint("로봇 2단계 힌트입니다~")
                .title("앞에서 만든 로봇 인터페이스를 이용해서 '청소하기' 기능을 가진 청소 로봇 클래스와 '요리하기' 기능을 가진 요리 로봇 클래스를 만드시오")
                .answer("클래스이름:청소클래스:(로봇)전원켜기:  청소하기전원끄기:  청소하기기능추가:  청소하기" +
                        "클래스이름:요리클래스:(로봇)전원켜기:  요리하기전원끄기:  요리하기기능추가:  요리하기")
                .problem(workBook5)
                .build();

        ProblemDetail problemDetail3 = ProblemDetail.builder()
                .level(3)
                .concept(Concept.ABSTRACT)
                .hint("로봇 2단계 힌트입니다~")
                .title("앞에서 만든 클래스를 이용해서 청소 로봇 '아이언맨'과 요리 로봇 '토르' 객체를 생성하고 아이언맨이 전원을 키고 청소를 하도록 main을 채우시오")
                .answer("청소로봇클래스:(로봇이름:아이언맨)요리로봇클래스:(로봇이름:토르)객체이름:아이언맨메소드 선택:op1객체이름:아이언맨메소드 선택:op3")
                .problem(workBook5)
                .build();

        problemDetailRepository.save(problemDetail1);
        problemDetailRepository.save(problemDetail2);
        problemDetailRepository.save(problemDetail3);

        Problem workBook6 = Problem.builder()
                .title("연극 배우 공통점 찾기")
                .concept(Concept.POLYMORPHISM)
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/problem/show.png")
                .build();
        problemRepository.save(workBook6);




        Assertions.assertThat(problemRepository.findAll()).hasSize(6);
    }


    @Autowired
    private TutorialRepository tutorialRepository;

    @Autowired
    private MultiChooseRepository multiChooseRepository;

    @Test
    @DisplayName("1.Tutorial: 튜토리얼 데이터 넣기")
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
    @DisplayName("2. Quiz: 퀴즈 데이터 넣기")
    void quizData(){
        Tutorial polymorphism = tutorialRepository.findByConcept(Concept.POLYMORPHISM);
        Tutorial abstract_tu = tutorialRepository.findByConcept(Concept.ABSTRACT);
        Tutorial encapsulation = tutorialRepository.findByConcept(Concept.ENCAPSULATION);
        Quiz quiz = Quiz.builder()
                .quizType(QuizType.OX)
                .title("다형성은 객체지향 프로그래밍에서 다양한 형태로 사용할 수 있는 능력을 말해요.")
                .answer(Answer.CORRECT)
                .tutorial(polymorphism)
                .description("‘다’ ‘형’ 성 , 말 그대로 다양한 형태로 동작할 수 있음을 의미하는거 잊지 않았죠?")
                .build();
        quizRepository.save(quiz);


        Quiz quiz1 =  Quiz.builder()
                .quizType(QuizType.OX)
                .title("다형성은 같은 이름의 함수가 항상 같은 일을 해야 한다는 뜻입니다. ")
                .answer(Answer.INCORRECT)
                .tutorial(polymorphism)
                .description("‘다형성에서는 동작이 같은 이름을 가지더라도 상황에 따라 다른 동작을 수행할 수 있어요!")
                .build();
        quizRepository.save(quiz1);


        Quiz quiz2 = Quiz.builder()
                .quizType(QuizType.MULTI)
                .title("다음 중 다형성(polymorphism)에 대한 설명으로 가장 적절한 것은 무엇인가요?")
                .answer(Answer.TWO)
                .tutorial(polymorphism)
                .description("다형성은 객체지향 프로그래밍에서 동일한 인터페이스를 사용하여 서로 다른 구현을 가능하게 하는 개념입니다.")
                .build();
        MultiChoose multiChoose2_1 = MultiChoose.builder()
                .Choice(1)
                .detail("다형성은 같은 이름의 함수가 항상 같은 일을 해야 한다는 뜻입니다.")
                .quiz(quiz2)
                .build();
        MultiChoose multiChoose2_2 = MultiChoose.builder()
                .Choice(2)
                .detail("다형성은 객체지향 프로그래밍에서 동일한 인터페이스를 사용하여 서로 다른 구현을 가능하게 하는 개념입니다.")
                .quiz(quiz2)
                .build();
        MultiChoose multiChoose2_3 = MultiChoose.builder()
                .Choice(3)
                .detail("다형성은 프로그램에서 변수가 여러 가지 다른 값을 가질 수 있다는 뜻입니다.")
                .quiz(quiz2)
                .build();
        MultiChoose multiChoose2_4 = MultiChoose.builder()
                .Choice(4)
                .detail("다형성은 함수를 작성할 때 항상 다른 이름을 사용해야 한다는 뜻입니다.")
                .quiz(quiz2)
                .build();
        MultiChoose multiChoose2_5 = MultiChoose.builder()
                .Choice(5)
                .detail("다형성은 모든 프로그램이 같은 방식으로 실행된다는 뜻입니다.")
                .quiz(quiz2)
                .build();
        quizRepository.save(quiz2);
        multiChooseRepository.save(multiChoose2_1);
        multiChooseRepository.save(multiChoose2_2);
        multiChooseRepository.save(multiChoose2_3);
        multiChooseRepository.save(multiChoose2_4);
        multiChooseRepository.save(multiChoose2_5);



        Quiz quiz3 = Quiz.builder()
                .quizType(QuizType.MULTI)
                .title("다형성(polymorphism)이 무엇을 의미하는지 가장 잘 설명하는 것은 무엇일까요?")
                .answer(Answer.TWO)
                .tutorial(polymorphism)
                .description("다형성은 객체지향 프로그래밍에서 동일한 인터페이스를 사용하여 서로 다른 구현을 가능하게 하는 개념입니다.")
                .build();
        MultiChoose multiChoose3_1 = MultiChoose.builder()
                .Choice(1)
                .detail("여러 가지 동물들이 같은 소리를 낼 수 있는 것")
                .quiz(quiz3)
                .build();
        MultiChoose multiChoose3_2 = MultiChoose.builder()
                .Choice(2)
                .detail("같은 이름의 함수가 다양한 일을 할 수 있는 것")
                .quiz(quiz3)
                .build();
        MultiChoose multiChoose3_3 = MultiChoose.builder()
                .Choice(3)
                .detail("여러 종류의 꽃이 같은 색을 가지는 것")
                .quiz(quiz3)
                .build();
        MultiChoose multiChoose3_4 = MultiChoose.builder()
                .Choice(4)
                .detail("같은 프로그램을 여러 번 실행하는 것")
                .quiz(quiz3)
                .build();
        MultiChoose multiChoose3_5 = MultiChoose.builder()
                .Choice(5)
                .detail("여러 가지 색깔의 펜을 사용하는 것")
                .quiz(quiz3)
                .build();
        quizRepository.save(quiz3);
        multiChooseRepository.save(multiChoose3_1);
        multiChooseRepository.save(multiChoose3_2);
        multiChooseRepository.save(multiChoose3_3);
        multiChooseRepository.save(multiChoose3_4);
        multiChooseRepository.save(multiChoose3_5);

        Quiz quiz4 =  Quiz.builder()
                .quizType(QuizType.OX)
                .title("다형성은 객체지향 프로그래밍에서 다양한 형태로 사용할 수 있는 능력을 말해요.")
                .answer(Answer.CORRECT)
                .tutorial(polymorphism)
                .description("‘다’ ‘형’ 성 , 말 그대로 다양한 형태로 동작할 수 있음을 의미하는거 잊지 않았죠? ")
                .build();
        quizRepository.save(quiz4);

        Quiz quiz5 =  Quiz.builder()
                .quizType(QuizType.MULTI)
                .title("다형성(polymorphism)이 무엇을 의미하는지 가장 잘 설명하는 것은 무엇일까요?")
                .answer(Answer.ONE)
                .tutorial(polymorphism)
                .description("다형성을 사용하면 같은 이름의 함수가 다양한 작업을 수행할 수 있습니다. 예를 들어, 같은 이름의 함수가 숫자를 더하거나 문자열을 이어붙일 수 있습니다.")
                .build();
        MultiChoose multiChoose5_1 = MultiChoose.builder()
                .Choice(1)
                .detail("프로그램이 더 느려집니다.")
                .quiz(quiz5)
                .build();
        MultiChoose multiChoose5_2 = MultiChoose.builder()
                .Choice(2)
                .detail("프로그램이 더 어려워집니다.")
                .quiz(quiz5)
                .build();
        MultiChoose multiChoose5_3 = MultiChoose.builder()
                .Choice(3)
                .detail("같은 이름의 함수로 다양한 작업을 수행할 수 있습니다.")
                .quiz(quiz5)
                .build();
        MultiChoose multiChoose5_4 = MultiChoose.builder()
                .Choice(4)
                .detail("변수의 이름을 더 많이 만들어야 합니다.")
                .quiz(quiz5)
                .build();
        MultiChoose multiChoose5_5 = MultiChoose.builder()
                .Choice(5)
                .detail("프로그램이 더 많은 메모리를 사용합니다.")
                .quiz(quiz5)
                .build();
        quizRepository.save(quiz5);
        multiChooseRepository.save(multiChoose5_1);
        multiChooseRepository.save(multiChoose5_2);
        multiChooseRepository.save(multiChoose5_3);
        multiChooseRepository.save(multiChoose5_4);
        multiChooseRepository.save(multiChoose5_5);

        /*
        추상화
         */
        Quiz quiz6 =  Quiz.builder()
                .quizType(QuizType.MULTI)
                .title("추상화란 무엇인가요?")
                .answer(Answer.TWO)
                .tutorial(abstract_tu)
                .description("추상화는 여러 구체적인 물건의 공통된 특징을 모아서 하나의 개념으로 만드는 것입니다.")
                .build();
        MultiChoose multiChoose6_1 = MultiChoose.builder()
                .Choice(1)
                .detail("코드를 더 복잡하게 만드는 것")
                .quiz(quiz6)
                .build();
        MultiChoose multiChoose6_2 = MultiChoose.builder()
                .Choice(2)
                .detail("구체적인 물건의 특징을 하나로 모으는 것")
                .quiz(quiz6)
                .build();
        MultiChoose multiChoose6_3 = MultiChoose.builder()
                .Choice(3)
                .detail("컴퓨터를 더 빨리 작동하게 만드는 것")
                .quiz(quiz6)
                .build();
        MultiChoose multiChoose6_4 = MultiChoose.builder()
                .Choice(4)
                .detail("색을 더 많이 사용하는 것")
                .quiz(quiz6)
                .build();
        MultiChoose multiChoose6_5 = MultiChoose.builder()
                .Choice(5)
                .detail("코드를 더 길게 만드는 것")
                .quiz(quiz6)
                .build();
        quizRepository.save(quiz6);
        multiChooseRepository.save(multiChoose6_1);
        multiChooseRepository.save(multiChoose6_2);
        multiChooseRepository.save(multiChoose6_3);
        multiChooseRepository.save(multiChoose6_4);
        multiChooseRepository.save(multiChoose6_5);

        Quiz quiz7 = Quiz.builder()
                .quizType(QuizType.OX)
                .title("추상화는 여러 가지 물건의 공통된 특징을 모아서 하나로 만드는 것이다.")
                .answer(Answer.CORRECT)
                .tutorial(abstract_tu)
                .description("추상화는 여러 물건의 공통된 특징을 모아서 더 간단하게 만드는 과정입니다.")
                .build();
        quizRepository.save(quiz7);

        Quiz quiz8 = Quiz.builder()
                .quizType(QuizType.OX)
                .title("추상화는 코드를 더 복잡하게 만드는 과정이다.")
                .answer(Answer.INCORRECT)
                .tutorial(abstract_tu)
                .description("추상화는 코드를 더 간단하게 하고 이해하기 쉽게 만드는 과정입니다.")
                .build();
        quizRepository.save(quiz8);

        Quiz quiz9 = Quiz.builder()
                .quizType(QuizType.OX)
                .title("인터페이스는 추상화의 한 형태로, 객체의 공통된 행동을 정의할 수 있다.")
                .answer(Answer.CORRECT)
                .tutorial(abstract_tu)
                .description("인터페이스는 객체의 공통된 행동을 정의하는 추상화의 한 형태입니다.")
                .build();
        quizRepository.save(quiz9);


        Quiz quiz10 =  Quiz.builder()
                .quizType(QuizType.MULTI)
                .title("'동물'이라는 추상 클래스에 어떤 동물도 포함될 수 있는 이유는 무엇인가요?")
                .answer(Answer.THREE)
                .tutorial(abstract_tu)
                .description("모든 동물은 숨쉬기, 먹기 등 공통된 특징을 가지고 있기 때문에 '동물' 추상 클래스에 포함될 수 있습니다.")
                .build();
        MultiChoose multiChoose10_1 = MultiChoose.builder()
                .Choice(1)
                .detail("동물은 모두 비슷하게 생겼기 때문에")
                .quiz(quiz10)
                .build();
        MultiChoose multiChoose10_2 = MultiChoose.builder()
                .Choice(2)
                .detail("동물은 모두 물에서 살기 때문에")
                .quiz(quiz10)
                .build();
        MultiChoose multiChoose10_3 = MultiChoose.builder()
                .Choice(3)
                .detail("동물은 공통된 특징을 가지고 있기 때문에")
                .quiz(quiz10)
                .build();
        MultiChoose multiChoose10_4 = MultiChoose.builder()
                .Choice(4)
                .detail("동물은 모두 크기 때문")
                .quiz(quiz10)
                .build();
        MultiChoose multiChoose10_5 = MultiChoose.builder()
                .Choice(5)
                .detail("동물은 모두 같은 색이기 때문")
                .quiz(quiz10)
                .build();
        quizRepository.save(quiz10);
        multiChooseRepository.save(multiChoose10_1);
        multiChooseRepository.save(multiChoose10_2);
        multiChooseRepository.save(multiChoose10_3);
        multiChooseRepository.save(multiChoose10_4);
        multiChooseRepository.save(multiChoose10_5);

        /*
        캡슐화
         */
        Quiz quiz11 =  Quiz.builder()
                .quizType(QuizType.MULTI)
                .title("캡슐화에 대한 설명으로 옳지 않은 것은?")
                .answer(Answer.ONE)
                .tutorial(encapsulation)
                .description("")
                .build();
        MultiChoose multiChoose11_1 = MultiChoose.builder()
                .Choice(1)
                .detail("캡슐화는 하나의 클래스 안에서 기능을 처리하는 방식이다.")
                .quiz(quiz11)
                .build();
        MultiChoose multiChoose11_2 = MultiChoose.builder()
                .Choice(2)
                .detail("캡슐화를 통해 프로그램을 효과적으로 관리할 수 있다.")
                .quiz(quiz11)
                .build();
        MultiChoose multiChoose11_3 = MultiChoose.builder()
                .Choice(3)
                .detail("캡슐화를 통해 정보를 보호할 수 있다.")
                .quiz(quiz10)
                .build();

        quizRepository.save(quiz11);
        multiChooseRepository.save(multiChoose11_1);
        multiChooseRepository.save(multiChoose11_2);
        multiChooseRepository.save(multiChoose11_3);

        Quiz quiz12 =  Quiz.builder()
                .quizType(QuizType.MULTI)
                .title("캡슐화와 관련된 단어인 것은?")
                .answer(Answer.ONE)
                .tutorial(encapsulation)
                .description("")
                .build();
        MultiChoose multiChoose12_1 = MultiChoose.builder()
                .Choice(1)
                .detail("다형성")
                .quiz(quiz12)
                .build();
        MultiChoose multiChoose12_2 = MultiChoose.builder()
                .Choice(2)
                .detail("상속")
                .quiz(quiz12)
                .build();
        MultiChoose multiChoose12_3 = MultiChoose.builder()
                .Choice(3)
                .detail("클래스")
                .quiz(quiz12)
                .build();

        quizRepository.save(quiz12);
        multiChooseRepository.save(multiChoose12_1);
        multiChooseRepository.save(multiChoose12_2);
        multiChooseRepository.save(multiChoose12_3);

        Quiz quiz13 =  Quiz.builder()
                .quizType(QuizType.MULTI)
                .title("캡슐화를 사용하여 구현된 프로그래밍 언어는?")
                .answer(Answer.TWO)
                .tutorial(abstract_tu)
                .description("")
                .build();

        MultiChoose multiChoose13_1 = MultiChoose.builder()
                .Choice(1)
                .detail("C")
                .quiz(quiz13)
                .build();
        MultiChoose multiChoose13_2 = MultiChoose.builder()
                .Choice(2)
                .detail("Java")
                .quiz(quiz13)
                .build();
        MultiChoose multiChoose13_3 = MultiChoose.builder()
                .Choice(3)
                .detail("JavaScript")
                .quiz(quiz13)
                .build();

        quizRepository.save(quiz13);
        multiChooseRepository.save(multiChoose13_1);
        multiChooseRepository.save(multiChoose13_2);
        multiChooseRepository.save(multiChoose13_3);

        Quiz quiz14 = Quiz.builder()
                .quizType(QuizType.OX)
                .title("캡슐화의 장점으로 객체 간의 의존성이 증가한다.")
                .answer(Answer.INCORRECT)
                .tutorial(encapsulation)
                .description("")
                .build();
        quizRepository.save(quiz14);

        Quiz quiz15 = Quiz.builder()
                .quizType(QuizType.OX)
                .title("캡슐화는 객체의 내부 상태를 보호하기 위해 사용되는가?")
                .answer(Answer.CORRECT)
                .tutorial(encapsulation)
                .description("")
                .build();
        quizRepository.save(quiz15);

        Quiz quiz16 = Quiz.builder()
                .quizType(QuizType.OX)
                .title("캡슐화를 통해 코드의 재사용성이 향상되는가?")
                .answer(Answer.CORRECT)
                .tutorial(encapsulation)
                .description("")
                .build();
        quizRepository.save(quiz16);

    }

    @Autowired
    TutorialDetailRepository tutorialDetailRepository;

    @Test
    @DisplayName("2. TutorialDetail : 개념 설명 관련 데이터 넣기 - finish")
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

        /*
        캡슐화
         */
        Tutorial con_abstract = tutorialRepository.findByConcept(Concept.ABSTRACT);
        TutorialDetail ab_detail1 = TutorialDetail.builder()
                .description("우리가 로봇을 만든다고 상상해봐요. 로봇에는 여러 가지 종류가 있을 수 있어요. 청소하는 로봇, 요리하는 로봇, 춤추는 로봇 등이 있어요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/abstract/abs1.jpg")
                .tutorial(con_abstract)
                .build();
        TutorialDetail ab_detail2 = TutorialDetail.builder()
                .description("이 로봇들은 각각 다른 일을 하지만, 모두 \"움직이기\"라는 공통된 역할을 해요. 그래서 우리는 \"로봇 객체\"에 \"움직이기\"라는 역할을 정의할 수 있어요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/abstract/abs2.jpg")
                .tutorial(con_abstract)
                .build();
        TutorialDetail ab_detail3 = TutorialDetail.builder()
                .description("청소 로봇을 만들 때는 \"움직이기\" 역할을 청소하는 방법으로 채우고, 요리 로봇을 만들 때는 \"움직이기\" 역할을 요리하는 방법으로 채우면 돼요. 춤추는 로봇도 마찬가지로 \"움직이기\" 역할을 춤추는 방법으로 채우면 돼요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/abstract/abs3.jpg")
                .tutorial(con_abstract)
                .build();
        TutorialDetail ab_detail4 = TutorialDetail.builder()
                .description("이렇게 복잡한 것을 간단하게 만들고, 공통된 특징을 찾아내어 다양한 로봇을 만드는 것이 바로 추상화예요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/abstract/abs4.jpg")
                .tutorial(con_abstract)
                .build();
        TutorialDetail ab_detail5 = TutorialDetail.builder()
                .description("이제 추상화가 무엇인지 알겠죠? 여러 가지 복잡한 것들을 더 단순하게 만들고, 중요한 특징을 찾아내어 사용하는 것이 바로 추상화예요!")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/abstract/abs5.jpg")
                .tutorial(con_abstract)
                .build();

        tutorialDetailRepository.save(ab_detail1);
        tutorialDetailRepository.save(ab_detail2);
        tutorialDetailRepository.save(ab_detail3);
        tutorialDetailRepository.save(ab_detail4);
        tutorialDetailRepository.save(ab_detail5);

        /*
        다형성
         */
        Tutorial poly = tutorialRepository.findByConcept(Concept.POLYMORPHISM);
        TutorialDetail po_detail1 = TutorialDetail.builder()
                .description("다형성은 같은 이름을 가진 행동이 상황에 따라 다르게 행동할 수 있는 능력이에요. 예를 들어,  '걷다'라는 행동을 생각해 보세요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/polymorphism/poly1.jpg")
                .tutorial(poly)
                .build();
        TutorialDetail po_detail2 = TutorialDetail.builder()
                .description("사람이 걷는다면 두 발로 걷겠죠?")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/polymorphism/poly2.jpg")
                .tutorial(poly)
                .build();
        TutorialDetail po_detail3 = TutorialDetail.builder()
                .description("강아지가 걷는다면 네 발로 걸을거에요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/polymorphism/poly3.jpg")
                .tutorial(poly)
                .build();
        TutorialDetail po_detail4 = TutorialDetail.builder()
                .description("새가 걷는다면 두 발로 걷지만, 날아다닐 수도 있겠죠? 그럼 이걸 컴퓨터 프로그램에서는 어떻게 사용할까요?")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/polymorphism/poly4.jpg")
                .tutorial(poly)
                .build();
        TutorialDetail po_detail5 = TutorialDetail.builder()
                .description("컴퓨터 프로그램에서 다형성을 사용하면, 같은 이름의 함수나 메소드를 여러 클래스에서 다르게 구현할 수 있어요. ")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/polymorphism/poly5.jpg")
                .tutorial(poly)
                .build();
        TutorialDetail po_detail6 = TutorialDetail.builder()
                .description("즉 , 앞에서 얘기했던 것처럼 같은 '걷다’라는 행동이지만, 어떤 동물이 걷느냐에 따라 다르게 동작하는거예요. 이렇게 다양한 행동을 할 수 있는 능력을 다형성이라고 해요.")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/polymorphism/poly4.jpg")
                .tutorial(poly)
                .build();
        TutorialDetail po_detail7 = TutorialDetail.builder()
                .description("다형성을 이해하면, 프로그래밍에서 더 유연하고 재사용 가능한 코드를 작성할 수 있어요. 상황에 따라 다르게 행동하는 프로그램을 만들 수 있는 멋진 능력이랍니다!")
                .imageUrl("https://codekids-bucket.s3.ap-northeast-2.amazonaws.com/concept/polymorphism/poly5.jpg")
                .tutorial(poly)
                .build();
        tutorialDetailRepository.save(po_detail1);
        tutorialDetailRepository.save(po_detail2);
        tutorialDetailRepository.save(po_detail3);
        tutorialDetailRepository.save(po_detail4);
        tutorialDetailRepository.save(po_detail5);
        tutorialDetailRepository.save(po_detail6);
        tutorialDetailRepository.save(po_detail7);

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
