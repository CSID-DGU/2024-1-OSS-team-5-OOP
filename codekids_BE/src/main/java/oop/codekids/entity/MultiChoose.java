package oop.codekids.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
}
