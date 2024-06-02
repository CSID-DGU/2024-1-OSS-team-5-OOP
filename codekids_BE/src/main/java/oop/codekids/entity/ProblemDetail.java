package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.codekids.Concept;
import oop.codekids.dto.ProblemDetailDto;

@Entity
@NoArgsConstructor
@Getter
@AllArgsConstructor
@Builder
public class ProblemDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int level;

    private String title;

    private String hint;

    @Enumerated(EnumType.STRING)
    private Concept concept;

    private String answer;

    @ManyToOne
    @JoinColumn(name = "problem_id")
    private Problem problem;

    public ProblemDetailDto toDto(String problem_title, String concept) {
        ProblemDetailDto dto = ProblemDetailDto.builder()
                .problem_detail_title(this.title)
                .level(this.level)
                .hint(this.hint)
                .problem_title(problem_title)
                .concept(concept)
                .build();
        return dto;
    }
}
