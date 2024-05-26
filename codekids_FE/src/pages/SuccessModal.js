import React from 'react';
import Modal from 'react-modal';

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

const SuccessModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={true}
    >
      <h2>성공했어요!</h2>
      <button onClick={closeModal}>다시 학습하기</button>
    </Modal>
  );
};

export default SuccessModal;
