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

  var index = 0;
  const whatQuizType=()=>{
    const qt = response.data[index].quizType;
    console.log(qt);
    index++;
    if(qt=="OX"){
      return true
    }
    else return false

  }
  return(
    <div className="BlockPage">
      <div className="Quizdiv">
        <h1 className='Quiz'>개념 퀴즈</h1>
      </div>
      <span className='check'>지금까지 공부한 다형성을 얼마나 잘 이해하고 있는지 확인해보세요.</span>
      {response.data.map(item => (
        <>
        <div className='topdiv'>
        <p className='Q'>Q</p>
     <span className='quiztitle'>{item.title}</span>
       </div>
       <div className='bottomdiv'>
        {whatQuizType() 
        ? 
        (<>
        <button className='OXBtn' onClick={() => {
                  }}>
        O</button>
      <button className='OXBtn' onClick={() => {
                  }}>
        X</button></>)
        :
        (<>
        <div><button className='fiveBtn' onClick={() => {
                  }}>
        1. </button>
        <span className='fivetext'>{item.multichoose[0].detail}</span></div>
        <div><button className='fiveBtn' onClick={() => {
                  }}>
        2. </button>
        <span className='fivetext'>{item.multichoose[1].detail}</span></div>
        <div><button className='fiveBtn' onClick={() => {
                  }}>
        3. </button>
        <span className='fivetext'>{item.multichoose[2].detail}</span></div>
        <div><button className='fiveBtn' onClick={() => {
                  }}>
        4. </button>
        <span className='fivetext'>{item.multichoose[3].detail}</span></div>
        <div><button className='fiveBtn' onClick={() => {
                  }}>
        5. </button>
        <span className='fivetext'>{item.multichoose[4].detail}</span></div>
        </>)}
        </div>
       </>

      ))}
        <button className='goBtn' onClick={() => {
                  }}>
        제출</button>
    </div>
  )
};

export default QuizPage;
