package oop.codekids.entity;

import jakarta.persistence.*;
import oop.codekids.Concept;

@Entity
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
  