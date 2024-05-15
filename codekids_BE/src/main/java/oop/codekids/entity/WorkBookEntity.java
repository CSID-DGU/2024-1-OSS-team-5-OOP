package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.codekids.Concept;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Table(name = "work_book")
public class WorkBookEntity {
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

}
