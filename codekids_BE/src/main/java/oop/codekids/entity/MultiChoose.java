package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
@Table(name = "multi_choose")
public class MultiChoose {
    @Id
    private Double id;
    private int Choice;
    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;
}
