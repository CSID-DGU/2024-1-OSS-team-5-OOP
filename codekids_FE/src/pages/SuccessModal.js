import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// 모달 스타일 설정
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// 컴포넌트 이름을 대문자로 변경합니다.
const SuccessModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  // 모달 열기 함수
  const openModal = () => {
    setIsOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>성공했어요!</h2>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
};

export default SuccessModal;
