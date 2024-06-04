import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const SuccessModal = ({ isOpen, closeModal, title, buttonName, modalLink, problemId, concept_eng, concept}) => {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFade(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setFade(false);
    closeModal();
  };

  if (!isOpen && !fade) return null;

  const handleButtonClick = () => {
    navigate(modalLink, { state: { problemId, concept_eng, concept } });
  };

  if(!fade) return null;

  return (
    <div className={`modal-overlay ${fade ? 'fade-in' : 'fade-out'}`}>
      <audio src="/kidsclap.mp3" autoPlay />
      <div className="modal-content">
        <div className="modal-title"><h2>{title}</h2></div>
        <div className="modal-button">
          <button onClick={handleClose}>다시 학습하기</button>
          <button onClick={handleButtonClick}>{buttonName}</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
