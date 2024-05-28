package oop.codekids;

public enum Answer {
    CORRECT("o"),
    INCORRECT("x"),
    ONE("1"),
    TWO("2"),
    THREE("3"),
    FOUR("4"),
    FIVE("5");

    private String answer;
    Answer(String answer) {
        this.answer = answer;
    }
    public String answer() {
        return answer;
    }
    public String getAnswer(QuizType quizType) {
        if(quizType == QuizType.MULTI) return answer();
        return name();
    }
}
