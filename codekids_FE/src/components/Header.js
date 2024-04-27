import React from 'react';

const Header = () => {
  return (
    <header style = {{ display: 'flex', width: '100%', height: '120px', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        <div style = {{ marginLeft: '60px' }}>
            <img src="logo.png" alt="CodeKids" style={{ width: '120px'}} />
        </div>
        <div style={{ marginLeft: 'auto', marginRight: '30px'}}>
            <button class='headerbtn'>튜토리얼</button>
            <button class='headerbtn'>문제 풀어보기</button>
            <button class='headerbtn'>개발자에게 제안하기</button>
        </div>
    </header>
  );
};

export default Header;
