import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './QuizPage.css';
import HintModal from './HintModal.js';

const QuizPage = () => {
  const location = useLocation();
  const concept = location.state.concept;
  const [response, setResponse] = useState({ data: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const url = `/quiz/getQuizList?concept=${concept}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const modalContent = '테스트';

  const showPopup = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return(
    <div className="BlockPage">
      <HintModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          body={modalContent}
      />
      <div style={{ display: 'flex', justifyContent: 'center', right: '20%', width: '100%' }}><p className="nextbutton" onClick={showPopup}>힌트</p></div>
      <div className="Quizdiv">
        <p className='Quiz'>개념 퀴즈</p>
        </div>
        <span className='Btn'>지금까지 공부한 다형성을 얼마나 잘 이해하고 있는지 확인해보세요.</span>
      {response.data && response.data.map(item => (
                <p>{item.title}</p>
          ))}
    </div>
  )
};

export default QuizPage;
