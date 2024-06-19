---
## 화면 구성 📺

| 이론 페이지  |  문제 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="(https://github.com/CSID-DGU/2024-1-OSS-team-5-OOP/assets/149465566/3853c576-8706-4a5c-aac8-96ca6f69aee0"/> |  <img width="329" src="https://github.com/CSID-DGU/2024-1-OSS-team-5-OOP/assets/149465566/b84c0f66-43d5-44ac-bd67-61cebc3fe4e9"/>|  
| 퀴즈 페이지   |  개발자에게 문 페이지   |  
| <img width="329" src="https://github.com/CSID-DGU/2024-1-OSS-team-5-OOP/assets/149465566/f86020a5-8bef-4653-8753-1a047e85aad3"/>   |  <img width="329" src="https://github.com/CSID-DGU/2024-1-OSS-team-5-OOP/assets/149465566/292a651e-1763-4a44-b6f6-119b036fb417"/>     |
---
## 아키텍쳐
**디렉터리 구조**
```
.
├── codekids_BE
│   ├── HELP.md
│   ├── bin
│   ├── build
│   ├── build.gradle
│   ├── gradle
│   ├── gradlew
│   ├── gradlew.bat
│   ├── out
│   ├── settings.gradle
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── oop
│       │   │       └── codekids
│       │   │           ├── Answer.java
│       │   │           ├── CodekidsApplication.java
│       │   │           ├── Concept.java
│       │   │           ├── QuizType.java
│       │   │           ├── config
│       │   │           │   ├── AWSConfig.java
│       │   │           │   └── WebConfig.java
│       │   │           ├── controller
│       │   │           │   ├── ProblemController.java
│       │   │           │   ├── QuizController.java
│       │   │           │   └── TutorialController.java
│       │   │           ├── dto
│       │   │           │   ├── AnswerRequestDto.java
│       │   │           │   ├── MultiChooseDto.java
│       │   │           │   ├── ProblemDetailDto.java
│       │   │           │   ├── ProblemDto.java
│       │   │           │   ├── ProblemsDto.java
│       │   │           │   ├── QuizDto.java
│       │   │           │   ├── QuizListDto.java
│       │   │           │   ├── ResponseDto.java
│       │   │           │   ├── TutorialDetailDto.java
│       │   │           │   ├── TutorialDto.java
│       │   │           │   └── TutorialsDto.java
│       │   │           ├── entity
│       │   │           │   ├── MultiChoose.java
│       │   │           │   ├── Problem.java
│       │   │           │   ├── ProblemDetail.java
│       │   │           │   ├── Quiz.java
│       │   │           │   ├── Tutorial.java
│       │   │           │   └── TutorialDetail.java
│       │   │           ├── repository
│       │   │           │   ├── MultiChooseRepository.java
│       │   │           │   ├── ProblemDetailRepository.java
│       │   │           │   ├── ProblemRepository.java
│       │   │           │   ├── QuizRepository.java
│       │   │           │   ├── TutorialDetailRepository.java
│       │   │           │   └── TutorialRepository.java
│       │   │           └── service
│       │   │               ├── ProblemService.java
│       │   │               ├── QuizService.java
│       │   │               ├── S3Service.java
│       │   │               └── TutorialService.java
│       │   └── resources
│       │       ├── application-dev.yaml
│       │       └── application.yaml
│       └── test
│           └── java
│               └── oop
│                   └── codekids
│                       └── CodekidsApplicationTests.java
├── codekids_FE
│   ├── README.md
│   ├── blockly-blockly-v11.0.0.-beta.6
│   └── src
│       ├── App.js
│       ├── Blockly
│       │   ├── BlocklyComponent.css
│       │   ├── BlocklyComponent.jsx
│       │   └── index.js
│       ├── blocks
│       │   └── customblocks.js
│       ├── components
│       │   ├── Header.css
│       │   └── Header.js
│       ├── fields
│       │   ├── BlocklyReactField.jsx
│       │   └── DateField.jsx
│       ├── fonts
│       │   ├── NanumGothic-Bold.ttf
│       │   ├── NanumGothic-ExtraBold.ttf
│       │   └── NanumGothic-Regular.ttf
│       ├── generator
│       │   └── generator.js
│       ├── index.css
│       ├── index.js
│       ├── logo.png
│       ├── pages
│       │   ├── BlockPage.css
│       │   ├── BlockPage.js
│       │   ├── BlockPage.test.js
│       │   ├── ButtonList.css
│       │   ├── FailureModal.js
│       │   ├── FinalBlockPage.js
│       │   ├── HintModal.js
│       │   ├── HintModal.module.css
│       │   ├── Modal.css
│       │   ├── NextBlockPage.js
│       │   ├── ProblemPage.js
│       │   ├── QuizCheckPage.js
│       │   ├── QuizPage.css
│       │   ├── QuizPage.js
│       │   ├── SuccessModal.js
│       │   ├── TutorialDetailPage.css
│       │   ├── TutorialDetailPage.js
│       │   ├── TutorialPage.js
│       │   ├── alignlist.module.css
│       │   └── logo.png
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       └── seviceWorker.js
├── node_modules
├── package-lock.json
└── package.json
```
