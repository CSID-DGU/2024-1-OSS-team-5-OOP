package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.codekids.dto.MultiChooseDto;

@Entity
@NoArgsConstructor
@Getter
@Table(name = "multi_choose")
public class MultiChoose {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Double id;
    private int Choice;
    private String detail;
    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    @Builder
    MultiChoose(int Choice, String detail,Quiz quiz) {
        this.Choice = Choice;
        this.detail = detail;
        this.quiz = quiz;
    }
    public MultiChooseDto toDto(){
        MultiChooseDto dto = MultiChooseDto.builder()
                .detail(getDetail())
                .choice(getChoice())
                .build();
        return dto;
    }
}
