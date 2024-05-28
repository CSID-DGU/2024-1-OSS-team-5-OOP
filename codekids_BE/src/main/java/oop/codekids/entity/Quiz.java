package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.codekids.QuizType;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "quiz")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "quiz_type")
    private QuizType quizType;
    private String title;
    private String description;
    private int answer;
    @Builder
    public Quiz(QuizType quizType, String title, Optional<List<String>> multiChoose, String description, int answer){
        this.quizType = quizType;
        this.title = title;
        this.description = description;
        this.answer = answer;
    }
    @OneToMany(mappedBy = "quiz")
    private List<MultiChoose> multiChooseList = new ArrayList<>();

}
