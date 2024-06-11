import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './TutorialDetailPage.css';
import SuccessModal from './SuccessModal.js';

const TutorialDetailPage = () => {
  const { concept } = useParams();
  const [response, setResponse] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await fetch(`/tutorial/getTutorial/${concept}`);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error('Error fetching tutorial:', error);
      }
    };
    fetchTutorial();
  }, [concept]);

  const nextDescription = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % (response?.description.length || 0));
      setIsFading(false);
    }, 500);
  }, [response]);

  const showPopup = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetTutorial();
  };

  const resetTutorial = () => {
    setCurrentIndex(0);
    setIsModalOpen(false);
    if (response) {
      const interval = setInterval(nextDescription, 5000);
      const timeout = setTimeout(() => {
        clearInterval(interval);
        showPopup();
      }, (response?.description.length || 0) * 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  };

  const modalTitle = '학습을 완료했어요!';
  const modalButtonName = '문제 풀러가기';
  const modalLink = `/problems/${concept}`;

  useEffect(() => {
    if (response) {
      const interval = setInterval(nextDescription, 5000);
      const timeout = setTimeout(() => {
        clearInterval(interval);
        showPopup();
      }, (response?.description.length || 0) * 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [response, nextDescription]);

  return (
    <div className="content" style={{ height: "calc(100% - 120px)" }}>
      {response && (
        <>
          <div className="image-container">
            <img src={response.imageUrl[currentIndex]} className={`image ${isFading ? 'fade-out' : 'fade-in'}`} alt="Tutorial" />
            <img src="/skip.png" className={`nextbutton ${isFading ? 'fade-out' : 'fade-in'}`} onClick={showPopup} />
          </div>
          <div className="description-container">
            <div>
              <p className={`description ${isFading ? 'fade-out' : 'fade-in'}`}>
                {response.description[currentIndex]}
              </p>
            </div>
          </div>
          <SuccessModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            title={modalTitle}
            buttonName={modalButtonName}
            modalLink={modalLink}
            problemId=''
            concept_eng=''
            concept=''
          />
        </>
      )}
    </div>
  );
};

export default TutorialDetailPage;
