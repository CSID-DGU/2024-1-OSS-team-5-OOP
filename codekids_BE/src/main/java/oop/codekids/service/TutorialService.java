package oop.codekids.service;

import lombok.RequiredArgsConstructor;
import oop.codekids.dto.TutorialDto;
import oop.codekids.dto.TutorialsDto;
import oop.codekids.entity.Tutorial;
import oop.codekids.repository.TutorialRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TutorialService {

    private final TutorialRepository tutorialRepository;

    public TutorialsDto getAll() {
        List<Tutorial> tutorials = tutorialRepository.findAll();
        List<TutorialDto> tutorialsDtosList = new ArrayList<>();
        for (Tutorial tutorial : tutorials) {
            TutorialDto tutorialDto = new TutorialDto(tutorial.getId(),tutorial.getConcept().toString());
            tutorialsDtosList.add(tutorialDto);
        }
        TutorialsDto tutorialsDto = new TutorialsDto(tutorialsDtosList);
        return tutorialsDto;
    }
}
