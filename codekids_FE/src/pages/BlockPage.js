import React, { useState, useRef, useEffect, useMemo } from 'react';
import './BlockPage.css';
import BlocklyComponent, { Block } from '../Blockly';
import '../blocks/customblocks';
import '../generator/generator';
import { javascriptGenerator } from 'blockly/javascript';
import { FaPlay, FaQuestion, FaRedo } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import HintModal from './HintModal.js';
import SuccessModal from './SuccessModal.js';
import FailureModal from './FailureModal.js';

function BlockPage() {
  const location = useLocation();
  const primaryWorkspace = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSModalOpen, setIsSModalOpen] = useState(false);
  const [isFModalOpen, setIsFModalOpen] = useState(false);
  const [response, setResponse] = useState({ data: [] });
  const [isBlocklyVisible, setIsBlocklyVisible] = useState(false);
  const [resetKey, setResetKey] = useState(0); // 리셋 상태 추가

  const concept_eng = location.state.concept_eng;
  const concept = location.state.concept;
  const problemId = location.state.problemId;
  const path = location.pathname;

  useEffect(() => {
    const fetchBlock = async () => {
      const url = `/problem/getOneProblem?id=${problemId}&level=1`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResponse(data);
        setIsBlocklyVisible(true);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchBlock();
  }, [problemId]);

  const generateCode = () => {
    const code = String(javascriptGenerator.workspaceToCode(primaryWorkspace.current));
    const fetchCheck = async () => {
      const url2 = `/problem/checkAnswer?id=${problemId}&level=1&answer=${code}`;
      try {
        const res = await fetch(url2);
        const data = await res.json();
        if (data.data === true) {
          showSPopup();
        } else {
          showFPopup();
        }
        console.log(data.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    console.log(code);

    fetchCheck(); // Wait for fetchBlock to complete
  };

  const modalContent = `${response.data.hint}`;

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

  const FmodalTitle = '문제를 해결하지 못했어요ㅠㅠ!';
  const FmodalButtonName = '이론 페이지로~';
  const FmodalLink = `/`;

  const modalTitle = '대단해요!! 문제 해결에 성공했어요!!';
  const modalButtonName = '다음 단계로~';
  const modalLink = `${path}/next`;


  const resetWorkspace = () => {
    setResetKey(prevKey => prevKey + 1); // 리셋 상태 변경
  };


  const memoizedBlocklyComponent = useMemo(() => (
    <BlocklyComponent
      key={resetKey} // 리셋 상태를 key로 사용하여 재렌더링 유도
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
      {problemId === 1 && <>
        <category name="block" colour="#D9E6F6">
          <block type="controls_if"></block>
          <block type="logic_compare">
            <field name="OP">EQ</field>
          </block>
          <block type="math_arithmetic">
            <field name="OP">ADD</field>
            <value name="A">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
            <value name="B">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
          </block>
          <block type="variables_get">
            <field name="VAR" id="E+w7.Xmx;t@-~$*1DEO7">숫자1</field>
          </block>
          <block type="text">
            <field name="TEXT"></field>
          </block>
          <block type="variables_get">
            <field name="VAR" id="=F{`dUrTFSEK2k4K?!:/">숫자2</field>
          </block>
          <block type="variables_set">
            <field name="VAR" id="iFyn.V3zDj}d9^66+C.)">결과</field>
          </block>
          <block type="variables_get">
            <field name="VAR" id="9FOR:DS7ViPcAS?O9k.J">연산자</field>
          </block>
          <block type="variables_get">
            <field name="VAR" id="iFyn.V3zDj}d9^66+C.)">결과</field>
          </block>
        </category>
        <category name="Variables" colour="#F2D9F6" custom="VARIABLE"></category>
      </>}
      {problemId === 2 && <>
        <Block type="absclass" />
        <Block type="cal()" />
        <Block type="figure" />
      </>}
      {problemId === 3 && <>
        <Block type="interface" />
        <Block type="sound()" />
        <Block type="animal" />
      </>}
      {problemId === 4 && <>
        <Block type="interface" />
        <Block type="move()" />
        <Block type="attack()" />
        <Block type="game" />
      </>}
      {problemId === 5 && <>
        <Block type="interface" />
        <Block type="on()" />
        <Block type="off()" />
        <Block type="robot" />
      </>}
    </BlocklyComponent>
  ), [resetKey, problemId, response]);

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
        <img className='quizImg' src={`${process.env.PUBLIC_URL}/quiz.png`} alt='Quiz' />
        <span className='quiz'>{response.data.problem_detail_title}</span>
      </div>

      {isBlocklyVisible && memoizedBlocklyComponent}

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
        <button className='hintBtn' onClick={showPopup}>
          <FaQuestion className='FaPlayBtn' size="30" color='#FFD15B' />
          <span className='Btn'>힌트</span>
        </button>
        <button className='convertBtn' onClick={generateCode}>
          <FaPlay className='FaPlayBtn' size="30" color='#20CF26' />
          <span className='Btn'>실행하기</span>
        </button>
        <button className='resetBtn' onClick={resetWorkspace}>
          <FaRedo className='FaPlayBtn' size="30" color='#EF4538' />
          <span className='Btn'>되돌리기</span>
        </button>
      </div>
    </div>
  );
}

export default BlockPage;
