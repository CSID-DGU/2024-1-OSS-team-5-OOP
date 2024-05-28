package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.codekids.Concept;
import oop.codekids.dto.ProblemDto;

@Entity
@NoArgsConstructor
@Getter
@Table(name = "problems")
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(unique = true)
    private String title;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Concept concept;

    @Column
    private String javaAnswer;

    @Column
    private String javaHint;

    @Column
    private String blockAnswer;

    @Column
    private String blockHint;

    @Column
    private String imageUrl;

    @Builder
    Problem(String title, Concept concept, String javaAnswer, String javaHint, String blockAnswer,String blockHint, String imageUrl) {
        this.title = title;
        this.concept = concept;
        this.javaAnswer = javaAnswer;
        this.javaHint = javaHint;
        this.blockAnswer = blockAnswer;
        this.blockHint = blockHint;
        this.imageUrl = imageUrl;
    }

    public ProblemDto toDto(Problem problem){
        ProblemDto problemDto = new ProblemDto(
                problem.getId(),
                problem.getTitle(),
                problem.getConcept().getConcept(),
                problem.getImageUrl()
        );
        return problemDto;
    }
}
