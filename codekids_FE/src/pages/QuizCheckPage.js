import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './QuizPage.css';

const QuizCheckPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const result = location.state.result;

    const handleSubmit = () => {
    
        navigate(`/`);
      };

    const whatQuizType = (quizType) => {
        const qt = quizType;
        if (qt === "OX") {
            return true
        }
        else return false

    }



    return (
        <div className="BlockPage">
            <div className="Quizdiv">
                <h1 className='Quiz'>개념 퀴즈</h1>
            </div>
            <span className='check'>지금까지 공부한 다형성을 얼마나 잘 이해하고 있는지 확인해보세요.</span>
            {result.map((item, index) => (
                <>
                    <div className='topdiv'>
                        {item.isCorrect?(<img className='correctImg' src={`${process.env.PUBLIC_URL}/correct.png`} />):(<img className='correctImg' src={`${process.env.PUBLIC_URL}/incorrect.png`} />)}<span className='Q'>Q</span>
                        <span className='quiztitle'>{item.questionTitle}</span>
                    </div>
                    <div className='bottomdiv'>
    
                        {whatQuizType(item.questionType)
                            ?
                            (<>
                                <button className='OXBtn'>
                                    O</button>
                                <button className='OXBtn'>
                                    X</button></>)
                            :
                            (
                                item.questionMulti &&
                                item.questionMulti.length > 0 &&
                                item.questionMulti.map((choice, choiceIdx) => (
                                    <div key={choiceIdx}>
                                        <button
                                            className='fiveBtn'>
                                            {choice.choice}.
                                        </button>
                                        <span className='fivetext'>{choice.detail}</span>
                                    </div>
                                )))}
                                <p className='descrip'>{item.questiondescription}</p>
                    </div>

                </>

            ))}
            <button className='goBtn' onClick={handleSubmit}>
                다른 개념도 알아보기</button>
        </div>


    )
};

export default QuizCheckPage;