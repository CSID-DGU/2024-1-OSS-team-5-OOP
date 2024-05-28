import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './QuizPage.css';


const QuizPage = () => {
  const location = useLocation();
  const concept = location.state.concept;
  const [response, setResponse] = useState({ data: [] });

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


  return(
    <div className="BlockPage">
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
