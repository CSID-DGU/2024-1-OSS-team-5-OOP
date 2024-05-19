package oop.codekids.dto;

import lombok.Builder;

@Builder
public record TutorialDto(
        Long id,
        String concept,
        String concept_eng,
        String imageUrl
        ) {
}
