import React from 'react';
import { NavLink } from "react-router-dom";

const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? '#FFFFFF' : '',
    backgroundColor: isActive ? '#A1C398' : ''
  };
};

const Header = () => {
  return (
    <header className="header">
        <div style = {{ marginLeft: '60px' }}>
            <a href="http://localhost:3000/"><img src="logo.png" alt="CodeKids" style={{ width: '120px'}} /></a>
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
