package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.codekids.Concept;

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


    @Builder
    Problem(String problemTitle, Concept concept, String javaAnswer, String javaHint, String blockAnswer) {
        this.problemTitle = problemTitle;
        this.concept = concept;
        this.javaAnswer = javaAnswer;
        this.javaHint = javaHint;
        this.blockAnswer = blockAnswer;
    }
}
