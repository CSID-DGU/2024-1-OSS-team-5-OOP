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


    @Autowired
    private S3Service s3Service;


    @Test
    void testPostImageWithData() throws IOException {

        String filePath = "/Users/heoeunjeong/Desktop/codekids/codekids_BE/src/test/resource/animal.png";
        File file = new File(filePath);
        // 파일이 존재하는지 확인
        if (!file.exists()) {
            throw new IOException("File not found at " + filePath);
        }
        else {
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

    Problem postImageWithData(MultipartFile image)  {
        try{

            s3Service.uploadImage("problem/",image);
            Problem problem5 = Problem.builder()
                    .problemTitle("강아지는 냐옹, 고양이는 멍멍?")
                    .concept(oop.codekids.Concept.ABSTRACT)
                    .imageUrl(image.getOriginalFilename())
                    .build();
            problemRepository.save(problem5);
            return problem5;
        }catch (RuntimeException | IOException e){
            throw new RuntimeException(e.getMessage());
        }
    }



}
