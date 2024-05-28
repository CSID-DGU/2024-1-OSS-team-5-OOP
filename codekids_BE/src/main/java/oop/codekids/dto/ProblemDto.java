package oop.codekids.dto;

import lombok.Builder;

@Builder
public record ProblemDto (
        Long problemId,
        String problemTitle,
        String concept_eng,
        String concept,
        String imageUrl
    ){

}
