package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.codekids.Concept;
import oop.codekids.dto.TutorialDto;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "tutorial")
public class Tutorial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private Concept concept;
    private String imageUrl;

    @Builder
    Tutorial(Concept concept, String imageUrl) {
        this.concept = concept;
        this.imageUrl = imageUrl;
    }

    public TutorialDto toDto(Tutorial tutorial) {
        TutorialDto dto = new TutorialDto(tutorial.getId(),tutorial.getConcept().getConcept(), tutorial.getImageUrl());
        return dto;
    }
}
