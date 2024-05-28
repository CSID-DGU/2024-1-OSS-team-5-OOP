package oop.codekids.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.codekids.dto.TutorialDetailDto;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class TutorialDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tutorial_detail_id")
    private Long id;
    private String description;
    private String imageUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tutorial_id")
    private Tutorial tutorial;

    @Builder
    public TutorialDetail(String title, String description, String imageUrl,Tutorial tutorial) {
        this.description = description;
        this.imageUrl = imageUrl;
        this.tutorial = tutorial;
    }

}
