import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './buttonlist.css';

const TutorialPage = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://3.37.103.81/tutorial/getAllTutorial');
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBoxClick = (id) => {
    const concept = response.data.find(item => item.id === id)?.concept;
    if (concept) {
      navigate(`/tutorial/${concept}`);
    }
  };

  return (
    <div className="content" style={{ height: "calc(100% - 400px)" }}>
      <div className="box-container">
        {response.data.map(item => (
          <div className="box" key={item.id} onClick={() => handleBoxClick(item.id)}>
            <img src={item.imageUrl} alt={item.concept} className="box-image" />
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