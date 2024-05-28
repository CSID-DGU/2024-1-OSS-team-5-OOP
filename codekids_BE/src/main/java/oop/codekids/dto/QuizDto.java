package oop.codekids.dto;

import jakarta.persistence.Column;
import lombok.Builder;
import oop.codekids.QuizType;

import java.util.List;

@Builder
public record QuizDto(
        Long id,
        QuizType quizType,
        String title,
        List<MultiChooseDto> multichoose,
        String description,
        String answer
) {
}
