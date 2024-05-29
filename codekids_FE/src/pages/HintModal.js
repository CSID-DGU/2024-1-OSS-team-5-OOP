import React, { useState, useEffect } from 'react';
import './Modal.css';
import hintstyle from './HintModal.module.css';

const HintModal = ({ isOpen, closeModal, body }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!isOpen) {
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

  return (
    <div className={`modal-overlay ${fade ? 'fade-out' : 'fade-in'}`}>
      <div className={`modal-content ${hintstyle.modalContent}`}>
        <div className={`modal-title ${hintstyle.modalTitle}`}><h2>힌트</h2></div>
        <div className={`modal-body ${hintstyle.modalBody}`}><p>{body}</p></div>
        <div className="modal-button"><button onClick={handleClose}>이해했어요!</button></div>
      </div>
    </div>
  );
};

export default HintModal;
