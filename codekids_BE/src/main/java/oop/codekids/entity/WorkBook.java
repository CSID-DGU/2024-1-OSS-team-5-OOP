package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import oop.codekids.Concept;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "work_book")
public class WorkBook {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long problemId;

    @Column(unique = true)
    private String problemTitle;

    @Column(nullable = false)
    private Concept concept;

    @Column
    private String blockAnswer;

    @Column
    private String blockHint;

    @Column
    private String javaAnswer;

    @Column
    private String javaHint;
}
  