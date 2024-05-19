import React, { useState, useEffect } from 'react';
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

  const nextDescription = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % (response?.description.length || 0));
      setIsFading(false);
    }, 500);
  };

  const showPopup = () => {
    setIsModalOpen(true);
  };
  
  useEffect(() => {
    if (response) {
      const interval = setInterval(nextDescription, 3000);
      const timeout = setTimeout(() => {
        clearInterval(interval);
        showPopup();
      }, (response?.description.length || 0) * 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [response]);

  return (
    <div className="content" style={{ height: "calc(100% - 120px)" }}>
      {response && (
        <>
          <div className="image-container">
            <img src={response.imageUrl[currentIndex]} className="image" alt="Tutorial" />
          </div>
          <div className="description-container">
            <div>
              <p className={`description ${isFading ? 'fade-out' : 'fade-in'}`}>
                {response.description[currentIndex]}
              </p>
            </div>
          </div>
          <div className="nextbutton-container">
            <p className="nextbutton" onClick={showPopup}>[설명 건너뛰기]</p>
          </div>
          {isModalOpen && <SuccessModal />}
        </>
      )}
    </div>
  );  
};

export default TutorialDetailPage;
