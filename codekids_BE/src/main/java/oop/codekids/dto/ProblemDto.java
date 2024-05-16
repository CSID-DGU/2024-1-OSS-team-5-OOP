package oop.codekids.dto;

import lombok.Builder;
import oop.codekids.Concept;

import java.util.Optional;


public record ProblemDto (
    Long problemId,
    String problemTitle,
    Concept concept
    ){
}
