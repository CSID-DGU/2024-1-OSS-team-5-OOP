import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ButtonList.css';
import MediaQuery from './alignlist.module.css';

const ProblemPage = () => {
  const { problemId } = useParams();
  const [response, setResponse] = useState({ data: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/problem/getAllProblems');
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [problemId]);

  const handleBoxClick = (problemId) => {
    navigate(`/problems/block/${problemId}`);
  };

  return (
    <div className="content" style={{ height: "calc(100% - 120px)" }}>
      <div className={MediaQuery['box-container']}>
        <div className="inner-container">
          {response.data.map(item => (
            <div className="box" key={item.problemId} onClick={() => handleBoxClick(item.problemId)}>
              <img src={item.imageUrl} alt={item.problemTitle} className="box-image" />
              <div className="title">
                <p>{item.problemTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
