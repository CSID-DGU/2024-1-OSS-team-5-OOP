package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.*;
import oop.codekids.Answer;
import oop.codekids.Concept;
import oop.codekids.dto.ProblemDto;

import java.util.List;

@Entity
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
@Table(name = "problems")
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(unique = true)
    private String title;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Concept concept;

    @Column
    private String imageUrl;

    public ProblemDto toDto(){
        ProblemDto problemDto = ProblemDto.builder()
                .problemId(this.getId())
                .concept_eng(this.getConcept().name())
                .concept(this.getConcept().getConcept())
                .problemTitle(this.getTitle())
                .imageUrl(this.getImageUrl())
                .build();
        return problemDto;
    }
}
