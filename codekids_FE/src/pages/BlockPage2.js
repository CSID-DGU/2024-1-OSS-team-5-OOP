import React, {useRef} from 'react';
import './BlockPage.css';
import BlocklyComponent, { Block} from '../Blockly';
import '../blocks/customblocks';
import '../generator/generator';
import { javascriptGenerator } from 'blockly/javascript';
import {FaPlay} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import picture1 from './quiz.png'

function BlockPage2() {
  const navigate = useNavigate();
  const location = useLocation();
  let primaryWorkspace = useRef();

  
  const concept = location.state.concept;
  const path = location.pathname;
  
  const generateCode = () => {
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    console.log(code);
  };
  const handleBoxClick = (concept) => {
    navigate(`${path}/3`, { state: { concept } });
  };

  return (
    <div className="BlockPage">
        <div className="div1">
        <p className='problemtitle'>로봇 만들기</p></div>
        <div className='quizdiv'><img className='quizImg' src={picture1} />
        <span className='quiz'>앞에서 만든 로봇 인터페이스를 이용해서 '청소하기' 기능을 가진 청소 로봇 클래스와 '요리하기'기능을 가진 요리 로봇 클래스를 만드시오.</span></div>
      <BlocklyComponent
        readOnly={false}
        trashcan={true}
        media={'/media'}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true,
        }}
        grid=
        {{
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true
        }}
        zoom=
        {{
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true
        }}
      initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
</xml>
      `}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="96px" height="124px"></svg>
      <Block type="robotclass" />
      <Block type="on" />
      <Block type="off" />
      <Block type="robot" />
      <Block type="methodname" />
    </BlocklyComponent>
    <div className='btnBox'>
      <button className='convertBtn' onClick={() => {
                  handleBoxClick(concept);
                  generateCode();
                  }}>
        <FaPlay className='FaPlayBtn' size="30" color='#20CF26' />
        <span className='Btn'>실행하기</span></button>
        </div>
    </div >
  );
}

export default BlockPage2;
