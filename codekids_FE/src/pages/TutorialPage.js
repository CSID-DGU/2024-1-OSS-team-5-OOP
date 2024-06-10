import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonList.css';

const TutorialPage = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/tutorial/getAllTutorial');
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBoxClick = (id) => {
    const concept_eng = response.data.find(item => item.id === id)?.concept_eng;
    if (concept_eng) {
      navigate(`/tutorial/${concept_eng}`);
    }
  };

  return (
    <div className="content" style={{ height: '55%' }}>
      <div className="box-container">
        {response.data.map(item => (
          <div className="box" key={item.id} onClick={() => handleBoxClick(item.id)}>
            
            <img src={item.imageUrl} alt={item.problemTitle} className="box-image" />
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