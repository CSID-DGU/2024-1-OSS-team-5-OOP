import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FailureModal.css';

const FailureModal = ({ isOpen, closeModal, title, buttonName, modalLink }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleButtonClick = () => {
    navigate(modalLink);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-title"><h2>{title}</h2></div>
        <div className="modal-button"><button onClick={closeModal}>힌트 보기</button><button onClick={handleButtonClick}>{buttonName}</button></div>
      </div>
    </div>
  );
};

export default FailureModal;
