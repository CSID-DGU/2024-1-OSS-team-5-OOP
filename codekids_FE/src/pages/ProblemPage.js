import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './buttonlist.css';
import MediaQuery from './alignlist.module.css';

// 샘플 JSON 데이터
const sampleResponse = {
  "data": [
      {
          "problemId": 1,
          "problemTitle": "나는 낭만 고양이!",
          "concept": "ABSTRACT",
          "imageUrl": "~" 
      },
      {
          "problemId": 2,
          "problemTitle": "불이 났어요!",
          "concept": "ABSTRACT",
          "imageUrl": "~"  
      },
      {
          "problemId": 3,
          "problemTitle": "빠빵 차가 지나갑니당!",
          "concept": "ABSTRACT",
          "imageUrl": "~" 
      },
      {
          "problemId": 4,
          "problemTitle": "도형이 뭘까요?",
          "concept": "POLYMORPHISM",
          "imageUrl": "~" 
      }
  ]
}

const ProblemPage = () => {
  const { problemId } = useParams();
  const [problemData, setProblemData] = useState(null);
  const navigate = useNavigate();


  const url = concept ? `/problem/getFilteredProblems?concept=${concept}` : '/problem/getAllProblems';

  useEffect(() => {
    // 실제로는 fetch 등을 통해 데이터를 가져오는 코드가 필요합니다.
    // 여기서는 샘플 데이터를 바로 설정합니다.
    const fetchData = async () => {
      try {
        // 서버에서 데이터를 가져오는 것 대신 샘플 데이터를 사용합니다.
        // const response = await fetch(`/api/problems/${problemId}`);
        // const data = await response.json();
        const data = sampleResponse; // 샘플 데이터 사용
        setProblemData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [problemId]);

  // 상자 클릭 핸들러
  const handleBoxClick = (problemId) => {
    navigate(`/problems/block/${problemId}`);
  };

  return (
    <div className="content" style={{ height: "calc(100% - 120px)" }}>
      <div className={MediaQuery['box-container']}>
        <div className="inner-container">
          {problemData && problemData.data.map(item => (
            <div className="box" key={item.problemId} onClick={() => handleBoxClick(item.problemId)}>
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
