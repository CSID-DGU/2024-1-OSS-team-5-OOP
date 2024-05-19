package oop.codekids.controller;

import jakarta.persistence.Id;
import lombok.RequiredArgsConstructor;
import oop.codekids.dto.TutorialDetailDto;
import oop.codekids.dto.TutorialsDto;
import oop.codekids.entity.TutorialDetail;
import oop.codekids.service.TutorialService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/tutorial")
public class TutorialController {
    private final TutorialService tutorialService;
    @GetMapping("/getAllTutorial")
    public ResponseEntity<TutorialsDto> getAllTutorial() {
        return ResponseEntity.ok(tutorialService.getAllTutorial());
    }

    @GetMapping("getTutorial/{concept_s}")
    public ResponseEntity<TutorialDetailDto> getTutorial(@PathVariable String concept_s) {return ResponseEntity.ok(tutorialService.getTutorialDetail(concept_s));
    }
}
