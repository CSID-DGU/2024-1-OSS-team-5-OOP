package oop.codekids.dto;

import lombok.Builder;
import oop.codekids.Answer;

@Builder
public record ProblemDetailDto(
        String problem_title,
        String problem_detail_title,
        String hint,
        String concept,
        int level
) {
}
