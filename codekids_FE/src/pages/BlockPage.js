import React, { useState, useRef } from 'react';
import './BlockPage.css';
import BlocklyComponent, { Block } from '../Blockly';
import '../blocks/customblocks';
import '../generator/generator';
import { javascriptGenerator } from 'blockly/javascript';
import { FaPlay } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import picture1 from './quiz.png'
import HintModal from './HintModal.js';

function BlockPage() {
  const navigate = useNavigate();
  const location = useLocation();
  let primaryWorkspace = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const concept = location.state.concept;
  const problemId = location.state.problemId;
  const path = location.pathname;

  const generateCode = () => {
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    console.log(code);
  };

  const handleBoxClick = (concept) => {
    navigate(`${path}/2`, { state: { concept } });
  };

  const modalContent = '나는 읽기 쉬운 마음이야 당신도 쓱 훑고 가셔요\n달랠 길 없는 외로운 마음 있지 머물다 가셔요\n내게 긴 여운을 남겨줘요 사랑을, 사랑을 해줘요 할 수 있다면 그럴 수만 있다면 새하얀 빛으로 그댈 비춰 줄게요\n그러다 밤이 찾아오면 우리 둘만의 비밀을 새겨요 추억할 그 밤 위에 갈피를 꽂고선 남몰래 펼쳐보아요\n나의 자라나는 마음을 못 본채 꺾어 버릴 순 없네 미련 남길 바엔 그리워 아픈 게 나아\n서둘러 안겨본 그 품은 따스할 테니';

  const showPopup = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="BlockPage">
        <HintModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            body={modalContent}
        />
      <div className="div1">
        <p className='problem'>로봇 만들기</p></div>
      <div><img className='quizImg' src={picture1} />
        <span className='quiz'>전원 켜기, 전원 끄기를 할 수 있는 로봇 인터페이스를 만드세요.</span></div>
      <div style={{ display: 'flex', justifyContent: 'center', right: '20%', width: '100%' }}><p className="nextbutton" onClick={showPopup}>힌트</p></div>
      <BlocklyComponent
        readOnly={false}
        trashcan={true}
        media={'/media'}
        move={{
          scrollbars: true, drag: true, wheel: true,
        }}
        grid={{spacing: 20,length: 3,colour: '#ccc',snap: true
        }}
        zoom={{
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
        <Block type="interface" />
        <Block type="on()" />
        <Block type="off()" />
        <Block type="robot" />
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

export default BlockPage;
