import { React, useState, useRef } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import './Header.css';

const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? '#FFFFFF' : '',
    backgroundColor: isActive ? '#A1C398' : ''
  };
};

const Header = () => {
  const location = useLocation();
  const isTutorial = location.pathname === '/tutorial';
  const [buttonOn, setbuttonOn] = useState(false);
  const audioRef = useRef(null);

  const ToggleHandler = () => {
    if (buttonOn) {
      audioRef.current.play();
    } 
    else {
      audioRef.current.pause();
    }
    setbuttonOn(!buttonOn);
  }
  
  return (
    <header className={`header${isTutorial ? ' banner' : ''}`}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div style={{ marginLeft: '80px'}}>
          <a href="/tutorial"><img src="/logo.png" alt="CodeKids" style={{ width: `${isTutorial ? '230px' : '120px'}`, transition: 'width 0.5s' }} /></a>
      </div>
      <div className="toggle-button" onClick={ToggleHandler}>
        <span class="material-symbols-outlined">{buttonOn ? "play_arrow" : "pause" }</span>
        <audio ref={audioRef} src="/bgm.mp3" autoPlay loop />
      </div>
      <div className="headerbtn-container">
        <NavLink to="/tutorial" className="headerbtn" style={ activeStyle }>튜토리얼</NavLink>
        <NavLink to="/problems" className="headerbtn" style={ activeStyle }>문제 풀어보기</NavLink>
        <a href="https://github.com/CSID-DGU/2024-1-OSS-team-5-OOP/issues" target="_blank" rel="noopener noreferrer" className="headerbtn">개발자에게 제안하기</a>
      </div>
      
    </header>
  );
};

export default Header;