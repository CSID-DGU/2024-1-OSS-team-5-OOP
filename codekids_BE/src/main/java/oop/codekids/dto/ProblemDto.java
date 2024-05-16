package oop.codekids.dto;

import oop.codekids.Concept;


public record ProblemDto (
    Long problemId,
    String problemTitle,
    Concept concept
    ){
}
