import React from 'react';
import { useNavigate } from 'react-router-dom';
import './buttonlist.css';

const TutorialPage = () => {
  const navigate = useNavigate();

  // 샘플 응답 데이터
  const sampleResponse = {
    "data": [
      {
        "id": 1,
        "concept": "ABSTRACT",
        "imageUrl": "~" 
      },
      {
        "id": 2,
        "concept": "ENCAPSULATION",
        "imageUrl": "~" 
      },
      {
        "id": 3,
        "concept": "POLYMORPHISM",
        "imageUrl": "~" 
      }
    ]
  };

  // 박스 클릭 핸들러
  const handleBoxClick = (id) => {
    const concept = sampleResponse.data.find(item => item.id === id)?.concept.toLowerCase();
    if (concept) {
      navigate(`/tutorial/${concept}`);
    }
  };

  return (
    <div className="content" style={{ height: "calc(100% - 400px)" }}>
      <div className="box-container">
        {sampleResponse.data.map(item => (
          <div className="box" key={item.id} onClick={() => handleBoxClick(item.id)}>
            <div className="title">
              <p>{item.concept}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialPage;
