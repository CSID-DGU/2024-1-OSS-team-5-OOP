# 아키텍쳐
## 디렉터리 구조
```
.
├── codekids_BE
│   ├── HELP.md
│   ├── bin
│   │   ├── main
│   │   │   ├── application.properties
│   │   │   └── oop
│   │   │       └── codekids
│   │   │           └── CodekidsApplication.class
│   │   └── test
│   │       └── oop
│   │           └── codekids
│   │               └── CodekidsApplicationTests.class
│   ├── build
│   │   └── classes
│   │       └── java
│   │           └── main
│   │               └── oop
│   │                   └── codekids
│   │                       └── controller
│   │                           └── TutorialController.class
│   ├── build.gradle
│   ├── gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── out
│   │   └── production
│   │       └── resources
│   │           └── application.yaml
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
