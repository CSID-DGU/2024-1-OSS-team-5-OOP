import React from 'react';
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

  return (
    <header className={`header${isTutorial ? ' banner' : ''}`}>
        <div style={{ margin: '80px' }}>
            <a href="/tutorial"><img src="/logo.png" alt="CodeKids" style={{ width: `${isTutorial ? '230px' : '120px'}`, transition: 'width 0.5s' }} /></a>
        </div>
        <div className="headerbtn-container">
          <NavLink to="/tutorial" className="headerbtn" style={ activeStyle }>튜토리얼</NavLink>
          <NavLink to="/problems" className="headerbtn" style={ activeStyle }>문제 풀어보기</NavLink>
          <NavLink to="/suggestion" className="headerbtn" style={ activeStyle }>개발자에게 제안하기</NavLink>
        </div>
    </header>
  );
};

export default Header;