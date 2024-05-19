package oop.codekids.dto;


public record ProblemDto (
        Long problemId,
        String problemTitle,
        String concept,
        String imageUrl
    ){

}
