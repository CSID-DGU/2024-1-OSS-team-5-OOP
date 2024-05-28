import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FailureModal.css';

const FailureModal = ({ isOpen, closeModal, title, buttonName, modalLink }) => {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFade(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setFade(true);
    setTimeout(() => {
      closeModal();
    }, 200);
  };

  if (!isOpen && !fade) return null;

  const handleButtonClick = () => {
    navigate(modalLink);
  };

  return (
    <div className={`modal-overlay ${fade ? 'fade-out' : 'fade-in'}`}>
      <div className="modal-content">
        <div className="modal-title"><h2>{title}</h2></div>
        <div className="modal-button">
          <button onClick={handleClose}>힌트 보기</button>
          <button onClick={handleButtonClick}>{buttonName}</button>
        </div>
      </div>
    </div>
  );
};

export default FailureModal;