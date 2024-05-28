import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessModal.css';

const SuccessModal = ({ isOpen, closeModal, title, buttonName, modalLink }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleButtonClick = () => {
    navigate(modalLink);
  };

  return (
    <div className="modal-overlay">
      <audio src="/kidsclap.mp3" autoPlay />
      <div className="modal-content">
        <div className="modal-title"><h2>{title}</h2></div>
        <div className="modal-button"><button onClick={closeModal}>다시 학습하기</button><button onClick={handleButtonClick}>{buttonName}</button></div>
      </div>
    </div>
  );
};

export default SuccessModal;
