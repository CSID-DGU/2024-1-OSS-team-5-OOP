package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.codekids.Concept;
import oop.codekids.dto.TutorialDto;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "tutorial")
public class Tutorial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tutorial_id")
    private Long Id;
    @Enumerated(EnumType.STRING)
    private Concept concept;
    private String imageUrl;

    @Builder
    Tutorial(Concept concept, String imageUrl) {
        this.concept = concept;
        this.imageUrl = imageUrl;
    }

    public TutorialDto toDto(Tutorial tutorial) {
        TutorialDto dto = TutorialDto.builder()
                .id(tutorial.getId())
                .imageUrl(tutorial.getImageUrl())
                .concept_eng(tutorial.getConcept().name())
                .concept(tutorial.getConcept().getConcept())
                .build();
        return dto;
    }

}
