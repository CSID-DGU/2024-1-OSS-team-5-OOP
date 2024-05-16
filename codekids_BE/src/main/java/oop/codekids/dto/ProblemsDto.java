package oop.codekids.dto;

import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record ProblemsDto(
        @NotEmpty(message = "문제 목록이 없습니다.")
        List<ProblemDto> data
) {
}
