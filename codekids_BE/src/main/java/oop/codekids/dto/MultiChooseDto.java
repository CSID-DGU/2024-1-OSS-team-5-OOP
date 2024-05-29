package oop.codekids.dto;

import lombok.Builder;

@Builder
public record MultiChooseDto(
        int choice,
        String detail
) {
}
