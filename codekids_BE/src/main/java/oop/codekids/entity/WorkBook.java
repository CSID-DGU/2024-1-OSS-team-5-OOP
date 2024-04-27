package oop.codekids.entity;

import jakarta.persistence.*;
import oop.codekids.Concept;

@Entity
public class WorkBook {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long problemId;

    @Column(unique = true)
    private String problem_title;

    @Column(nullable = false)
    private Concept concept;

}
  