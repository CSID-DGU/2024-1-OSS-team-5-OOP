import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const FailureModal = ({ isOpen, closeModal, title, buttonName, modalLink }) => {
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
    navigate(modalLink);
  };

  if(!fade) return null;

  return (
    <div className={`modal-overlay ${fade ? 'fade-in' : 'fade-out'}`}>
      <audio src="/failure.mp3" autoPlay />
      <div className="modal-logo"><img src="/sadrobot.png" style={{ height:'140px' }}/></div>
      <div className="modal-content">
        <div className="modal-title"><h2>{title}</h2></div>
        <div className="modal-button">
          <button onClick={handleClose}>다시 풀기</button>
          <button onClick={handleButtonClick}>{buttonName}</button>
        </div>
      </div>
    </div>
  );
};

export default FailureModal;