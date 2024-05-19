package oop.codekids;


import oop.codekids.entity.Problem;
import oop.codekids.entity.Tutorial;
import oop.codekids.repository.ProblemRepository;
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
@ActiveProfiles("dev")
class CodekidsApplicationTests {

    @Autowired
    private ProblemRepository problemRepository;

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
