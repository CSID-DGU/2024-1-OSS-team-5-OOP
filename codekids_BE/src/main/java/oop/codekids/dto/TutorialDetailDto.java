package oop.codekids.dto;

import java.util.List;

public record TutorialDetailDto(
        List<String> imageUrl,
        List<String> description
) {
}
