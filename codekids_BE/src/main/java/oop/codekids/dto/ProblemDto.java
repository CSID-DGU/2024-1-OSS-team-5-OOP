package oop.codekids.dto;

import lombok.Builder;
import oop.codekids.Concept;

import java.util.Optional;

@Builder
public class ProblemDto {
    private Long problemId;
    private String problemTitle;
    private Concept concept;
    private Optional<String> javaAnswer;
    private Optional<String> javaHint;
    private Optional<String> blockAnswer;
    private Optional<String> blockHint;

}
