import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './QuizPage.css';

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const concept = location.state.concept;
  const concept_eng = location.state.concept_eng;
  const problemId = location.state.problemId;
  const path = location.pathname;
  const [response, setResponse] = useState({ data: [] });

  const url = `/quiz/getQuizList?concept=${concept_eng}`;
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


  // Maintain an array to store the active state for each OX question
  const [oxBtnActive, setOxBtnActive] = useState([]);

  // Maintain an object to store the active state for each MULTI question's buttons
  const [multiBtnActive, setMultiBtnActive] = useState({});

  // Function to toggle the active state for the specific OX question button clicked
  const toggleOxActive = (questionIdx, answer) => {
    setOxBtnActive((prev) => ({
      ...prev,
      [questionIdx]: answer,
    }));
  };

  // Function to toggle the active state for the specific MULTI question button clicked
  const toggleMultiActive = (questionIdx, choiceIdx) => {
    setMultiBtnActive((prev) => ({
      ...prev,
      [questionIdx]: choiceIdx,
    }));
  };

  
  // Function to handle form submission
  const handleSubmit = () => {
    const result = response.data.map((item, idx) => {
      let userAnswer;
      if (item.quizType === 'OX') {
        userAnswer = oxBtnActive[idx] || 'No answer selected';
      } else if (item.quizType === 'MULTI') {
        userAnswer = multiBtnActive[idx] !== undefined ? item.multichoose[multiBtnActive[idx]].choice : 'No answer selected';
      }

      const correctAnswer = item.quizType === 'OX' ? (item.answer === 'CORRECT' ? 'O' : 'X') : item.answer;
      const isCorrect = userAnswer === correctAnswer;

      return {
        questionTitle: item.title,
        questionType: item.quizType,
        questionMulti: item.multichoose,
        questionId: item.id,
        questiondescription: item.description,
        userAnswer,
        correctAnswer,
        isCorrect,
      };
    })
    navigate(`${path}/check`, { state: { problemId, concept, result }});
  };

  var index = 0;
  const whatQuizType=()=>{
    const qt = response.data[index].quizType;
    index++;
    if(qt==="OX"){
      return true
    }
    else return false

  }
  return(
    <div className="BlockPage">
      <div className="Quizdiv">
        <h1 className='Quiz'>개념 퀴즈</h1>
      </div>
      <span className='check'>지금까지 공부한 {concept} 얼마나 잘 이해하고 있는지 확인해보세요.</span>
      {response.data.map((item, idx) => (
        <>
        <div className='topdiv'>
        <span className='Q'>Q</span>
        <span className='quiztitle'>{item.title}</span>
       </div>
       <div className='bottomdiv'>
        {whatQuizType() 
        ? 
        (<>
         <button
                  className={'OXBtn' + (oxBtnActive[idx] === 'O' ? ' active' : '')}
                  onClick={() => toggleOxActive(idx, 'O')}
                >
        O</button>
        <button
                  className={'OXBtn' + (oxBtnActive[idx] === 'X' ? ' active' : '')}
                  onClick={() => toggleOxActive(idx, 'X')}
                >
        X</button></>)
        :
        (
          item.multichoose &&
          item.multichoose.length > 0 &&
          item.multichoose.map((choice, choiceIdx) => (
            <div key={choiceIdx}>
              <button
                className={
                  'fiveBtn' +
                  (multiBtnActive[idx] === choiceIdx ? ' active' : '')
                }
                onClick={() => toggleMultiActive(idx, choiceIdx)}
              >
                {choice.choice}.
              </button>
              <span className='fivetext'>{choice.detail}</span>
            </div>
          )))}
        </div>
       </>

      ))}
        <button className='goBtn' onClick={handleSubmit}>
        제출</button>
    </div>


  )
};

export default QuizPage;