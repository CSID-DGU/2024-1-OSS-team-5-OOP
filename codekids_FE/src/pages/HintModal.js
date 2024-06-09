import React, { useState, useEffect, useRef } from 'react';
import './Modal.css';
import hintstyle from './HintModal.module.css';

const HintModal = ({ isOpen, closeModal, body }) => {
  const [fade, setFade] = useState(false);
  const modalContentRef = useRef(null);
  const [logoTop, setLogoTop] = useState('50%');

  useEffect(() => {
    if (!isOpen) {
      setFade(false);
    } else {
      updateLogoPosition();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        updateLogoPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const updateLogoPosition = () => {
    if (modalContentRef.current) {
      const modalHeight = modalContentRef.current.offsetHeight;
      const topValue = `calc(50% - ${modalHeight / 2}px - 88px)`;
      setLogoTop(topValue);
    }
  };

  const handleClose = () => {
    setFade(true);
    setTimeout(() => {
      closeModal();
    }, 200);
  };

  if (!isOpen && !fade) return null;

  return (
    <div className={`modal-overlay ${fade ? 'fade-out' : 'fade-in'}`}>
      <div className="modal-logo" style={{ top: logoTop }}>
        <img src="/hintrobot.png" style={{ height: '140px' }} />
      </div>
      <div ref={modalContentRef} className={`modal-content ${hintstyle.modalContent}`} style={{ padding: '40px' }}>
        <div className={`modal-title ${hintstyle.modalTitle}`} style={{ color: 'black' }}>
          <h2>힌트</h2>
        </div>
        <div className={`modal-body ${hintstyle.modalBody}`}>
          <p>{body}</p>
        </div>
        <div className="modal-button">
          <button onClick={handleClose}>이해했어요!</button>
        </div>
      </div>
    </div>
  );
};

export default HintModal;