package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class TutorialDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tutorial_detail_id")
    private int id;
    private String description;
    private String imageUrl;

    @Builder
    public TutorialDetail(String title, String description, String imageUrl) {
        this.description = description;
        this.imageUrl = imageUrl;
    }

}
