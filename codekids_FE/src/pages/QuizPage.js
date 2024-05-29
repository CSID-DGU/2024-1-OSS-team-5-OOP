import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './QuizPage.css';

const QuizPage = () => {
  const location = useLocation();
  const concept = location.state.concept;
  const [response, setResponse] = useState({ data: [] });

  const url = `/quiz/getQuizList?concept=${concept}`;
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchQuiz();
  }, []);

  return(
    <div className="BlockPage">
      <div className="Quizdiv">
        <h1 className='Quiz'>개념 퀴즈</h1>
      </div>
      <span className='check'>지금까지 공부한 다형성을 얼마나 잘 이해하고 있는지 확인해보세요.</span>
      <div className='topdiv'>
      <p className='Q'>Q</p>
      {response.data && response.data.map((product) => (
      <span className='quiztitle'>{Object.keys(product)[0]}</span>
      ))}
      </div>
      <div className='bottomdiv'>
        <button className='OXBtn' onClick={() => {
                    }}>
          O</button>
        <button className='OXBtn' onClick={() => {
                    }}>
          X</button>
      </div>
    {response.data.map(item => (
      <>
        <div>
          <p>{item.title}</p>
        </div>
        <div>
          <p>{item.description}</p>
        </div>
      </>
    ))}

    </div>


  )
};

export default QuizPage;