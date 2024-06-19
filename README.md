## 🍀 Code-kids: 객체 지향 교육용 프로그램
![image 4](https://github.com/CSID-DGU/2024-1-OSS-team-5-OOP/assets/111877048/2ce8a60e-1f89-4589-b66d-2a4d0b128d8c)

### ✨ 프로젝트 소개
_**객체 지향의 개념을 누구보다 쉽게**_<br>
객체 지향 프로그래밍에 대해 깊이 이해하고 적용할 수 있도록 돕기 위해, 블록 코딩을 활용한 시각적 설명을 준비했습니다. 이를 통해 추상화, 캡슐화, 상속, 다형성 등의 개념을 친근하게 전달하며, 복잡한 개념도 쉽게 이해하고 프로그래밍 실력을 향상할 수 있도록 설계했습니다.

여러분들이 객체 지향 프로그래밍을 배우는 데 도움이 되기를 바랍니다!

## 🧑🏻‍💻 팀원 소개
|     허은정     |     서건우     |     이해니    |
|:--------------:|:--------------:|:--------------:|
| <img src="https://avatars.githubusercontent.com/u/111877048?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/10668347?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/149465566?v=4" width="200px"/> |
|     [@eundeang](https://github.com/eundeang)     |     [@Shilvister](https://github.com/gws8820)     |     [@haeni82](https://github.com/haeni82)     |
| Backend, Team Leader | Frontend | Frontend|
<!-- 역할 분담 작성 -->

<br>

## 🗂 백엔드 기술 스택
<!-- 버전 명시 -->
<img src="https://img.shields.io/badge/java 17-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"> ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
## 🗂 프론트엔드 기술 스택
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
## 📣 Communication
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)

## 🛠️ 서비스 아키텍처

![image](https://github.com/CSID-DGU/2024-1-OSS-team-5-OOP/assets/111877048/d32d7360-28a0-4be5-b804-0b8352d7bfe8)

## 💎 시작 가이드
### Requirements
For building and running the application you need:

- [Node.js 14.19.3](https://nodejs.org/ca/blog/release/v14.19.3/)
- [Npm 9.2.0](https://www.npmjs.com/package/npm/v/9.2.0)
- [JAVA 17.0.9](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

### Installation
``` bash
$ git clone https://github.com/CSID-DGU/2024-1-OSS-team-5-OOP.git
$ cd 2024-1-OSS-team-5-OOP
```

#### Backend
```
$ cd codekids_BE
$ ./gradlew build
$ java -jar codekids_BE.jar
```

#### Frontend
```
$ cd codekids_FE
$ nvm use v.14.19.3
$ npm install 
$ npm start
```

---
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
