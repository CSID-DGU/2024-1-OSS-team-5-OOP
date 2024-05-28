package oop.codekids.dto;

import jakarta.persistence.Column;
import lombok.Builder;
import oop.codekids.QuizType;

@Builder
public record QuizDto(
        int id,
        QuizType quizType,
        String title,
        String description,
        String answer
) {
}
