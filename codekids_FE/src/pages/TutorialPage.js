import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TutorialPage.css';

const TutorialPage = () => {
  const navigate = useNavigate();
  const handleBoxClick = (id) => {
    navigate(`/problems/${id}`);
  };

  return (
    <div className="content">
      <div className="box-container">
        <div className="box" onClick={() => handleBoxClick('abstract')}>
          <div className="description">
            <p>캡슐화</p>
          </div>
        </div>
        <div className="box" onClick={() => handleBoxClick('encapsulation')}>
          <div className="description">
            <p>다형성</p>
          </div>
        </div>
        <div className="box" onClick={() => handleBoxClick('polymorphism')}>
          <div className="description">
            <p>추상화</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
