package oop.codekids.controller;

import jakarta.persistence.Id;
import lombok.RequiredArgsConstructor;
import oop.codekids.dto.TutorialsDto;
import oop.codekids.service.TutorialService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/tutorial")
public class TutorialController {
    private final TutorialService tutorialService;
    @GetMapping("/getAllTutorial")
    public ResponseEntity<TutorialsDto> getTutorial() {
        return ResponseEntity.ok(tutorialService.getAll());
    }
}
