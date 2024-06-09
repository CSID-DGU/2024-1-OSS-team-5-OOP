import React, { useState, useRef, useEffect } from 'react';
import './BlockPage.css';
import BlocklyComponent, { Block } from '../Blockly';
import '../blocks/customblocks';
import '../generator/generator';
import { javascriptGenerator } from 'blockly/javascript';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HintModal from './HintModal.js';
import SuccessModal from './SuccessModal.js';
import FailureModal from './FailureModal.js';


function FinalBlockPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const primaryWorkspace = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSModalOpen, setIsSModalOpen] = useState(false);
  const [isFModalOpen, setIsFModalOpen] = useState(false);
  const [response, setResponse] = useState({ data: [] });
  const [check, setCheck] = useState({ data: [] });
  const [isBlocklyVisible, setIsBlocklyVisible] = useState(false);

  const concept_eng = location.state.concept_eng;
  const concept = location.state.concept;
  const problemId = location.state.problemId;
  const path = location.pathname;

  useEffect(() => {
    const fetchBlock = async () => {
      const url = `/problem/getOneProblem?id=${problemId}&level=3`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchBlock();
  }, [problemId]);

  useEffect(() => {
    if (response.data && response.data.problem_title && response.data.problem_detail_title) {
      setIsBlocklyVisible(true);
    }
  }, [response]);

  const generateCode = () => {
    const code = String(javascriptGenerator.workspaceToCode(primaryWorkspace.current));
    const fetchCheck = async () => {
      const url2 = `/problem/checkAnswer?id=${problemId}&level=3&answer=interface`;
      try {
        const res = await fetch(url2);
        const data = await res.json();
        setCheck(data);
        if (data.data == true) {
          showSPopup();
        } else {
          showFPopup();
        }
        console.log(data.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchCheck(); // Wait for fetchBlock to complete


  };

  const modalContent = '나는 읽기 쉬운 마음이야 당신도 쓱 훑고 가셔요\n달랠 길 없는 외로운 마음 있지 머물다 가셔요\n내게 긴 여운을 남겨줘요 사랑을, 사랑을 해줘요 할 수 있다면 그럴 수만 있다면 새하얀 빛으로 그댈 비춰 줄게요\n그러다 밤이 찾아오면 우리 둘만의 비밀을 새겨요 추억할 그 밤 위에 갈피를 꽂고선 남몰래 펼쳐보아요\n나의 자라나는 마음을 못 본채 꺾어 버릴 순 없네 미련 남길 바엔 그리워 아픈 게 나아\n서둘러 안겨본 그 품은 따스할 테니';

  const showPopup = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showSPopup = () => {
    setIsSModalOpen(true);
  };

  const closeSModal = () => {
    setIsSModalOpen(false);
  };

  const showFPopup = () => {
    setIsFModalOpen(true);
  };

  const closeFModal = () => {
    setIsFModalOpen(false);
  };

  const FmodalTitle = '틀렸습니다!';
  const FmodalButtonName = '이론 페이지로~';
  const FmodalLink = `/`;

  const modalTitle = '정답입니다!';
  const modalButtonName = '다음 단계로~';
  const modalLink = `${path}/quiz`;

  return (
    <div className="BlockPage">
      <HintModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        body={modalContent}
      />
      <div className="div1">
        <p className='problemtitle'>{response.data.problem_title}</p>
      </div>
      <div className='quizdiv'>
        <img className='quizImg' src={`${process.env.PUBLIC_URL}/quiz.png`} />
        <span className='quiz'>{response.data.problem_detail_title}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', right: '20%', width: '100%' }}>
        <p className="nextbutton" onClick={showPopup}>힌트</p>
      </div>

      {isBlocklyVisible && !isModalOpen && !isSModalOpen && !isFModalOpen && (
        <BlocklyComponent
          ref={primaryWorkspace}
          readOnly={false}
          trashcan={true}
          media={'/media'}
          move={{
            scrollbars: true, drag: true, wheel: true,
          }}
          grid={{
            spacing: 20, length: 3, colour: '#ccc', snap: true
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
          initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`}>
          <Block type="main" />
          <Block type="cleanuprobot" />
          <Block type="cookrobot" />
          <Block type="robotname" />
          <Block type="cleanup" />
          <Block type="cook" />
        </BlocklyComponent>
      )}
      <SuccessModal
        isOpen={isSModalOpen}
        closeModal={closeSModal}
        title={modalTitle}
        buttonName={modalButtonName}
        modalLink={modalLink}
        problemId={problemId}
        concept_eng={concept_eng}
        concept={concept}
      />
      <FailureModal
        isOpen={isFModalOpen}
        closeModal={closeFModal}
        title={FmodalTitle}
        buttonName={FmodalButtonName}
        modalLink={FmodalLink}
      />
      <div className='btnBox'>
        <button className='convertBtn' onClick={() => {
          generateCode();
        }}>
          <FaPlay className='FaPlayBtn' size="30" color='#20CF26' />
          <span className='Btn'>실행하기</span>
        </button>
      </div>
    </div>
  );
}

export default FinalBlockPage;

