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
@Table(name = "work_book")
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long problemId;

    @Column(unique = true)
    private String problemTitle;

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
    Problem(String problemTitle, Concept concept, String javaAnswer, String javaHint, String blockAnswer,String blockHint, String imageUrl) {
        this.problemTitle = problemTitle;
        this.concept = concept;
        this.javaAnswer = javaAnswer;
        this.javaHint = javaHint;
        this.blockAnswer = blockAnswer;
        this.blockHint = blockHint;
        this.imageUrl = imageUrl;
    }

    public ProblemDto toDto(Problem problem){
        ProblemDto problemDto = new ProblemDto(
                problem.getProblemId(),
                problem.getProblemTitle(),
                problem.getConcept(),
                problem.getImageUrl()
        );
        return problemDto;
    }
}
