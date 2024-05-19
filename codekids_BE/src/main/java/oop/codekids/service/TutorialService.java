package oop.codekids.service;

import lombok.RequiredArgsConstructor;
import oop.codekids.Concept;
import oop.codekids.dto.TutorialDetailDto;
import oop.codekids.dto.TutorialDto;
import oop.codekids.dto.TutorialsDto;
import oop.codekids.entity.Tutorial;
import oop.codekids.entity.TutorialDetail;
import oop.codekids.repository.TutorialDetailRepository;
import oop.codekids.repository.TutorialRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TutorialService {

    private final TutorialRepository tutorialRepository;
    private final TutorialDetailRepository tutorialDetailRepository;

    public TutorialsDto getAllTutorial() {
        List<Tutorial> tutorials = tutorialRepository.findAll();
        List<TutorialDto> tutorialsDtosList = new ArrayList<>();
        for (Tutorial tutorial : tutorials) {
            TutorialDto tutorialDto = tutorial.toDto(tutorial);
            tutorialsDtosList.add(tutorialDto);
        }
        TutorialsDto tutorialsDto = new TutorialsDto(tutorialsDtosList);
        return tutorialsDto;
    }
    public TutorialDetailDto getTutorialDetail(String concept_s) {
        Concept concept = Concept.valueOf(concept_s);
        Tutorial tutorial = tutorialRepository.findByConcept(concept);
        List<TutorialDetail> tutorialDetails = tutorialDetailRepository.findAllByTutorial(tutorial);
        List<String> tmpDescription = new ArrayList<>();
        List<String> tmpImgUrl = new ArrayList<>();
        for (TutorialDetail tutorialDetail : tutorialDetails) {
            tmpDescription.add(tutorialDetail.getDescription());
            tmpImgUrl.add(tutorialDetail.getImageUrl());
        }
        TutorialDetailDto tutorialDetailDtos = new TutorialDetailDto(tmpImgUrl,tmpDescription);
        return tutorialDetailDtos;
    }
}
