package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.codekids.Answer;
import oop.codekids.QuizType;
import oop.codekids.dto.QuizDto;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "quiz")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_id")
    private int id;
    @Column(name = "quiz_type")
    @Enumerated(EnumType.STRING)
    private QuizType quizType;
    private String title;
    private String description;
    @Enumerated(EnumType.STRING)
    private Answer answer;

    @OneToMany(mappedBy = "quiz", fetch =  FetchType.LAZY)
    private List<MultiChoose> multiChooseList = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "tutorial")
    private Tutorial tutorial;

    public QuizDto toDto(){
        QuizDto quizDto = QuizDto.builder()
                .id(this.id)
                .title(this.title)
                .quizType(this.quizType)
                .answer(this.answer.getAnswer(this.quizType))
                .description(this.description)
                .build();
        return quizDto;
    }
}
