import React from 'react';
import './BlocklyComponent.css';
import { useEffect, useRef } from 'react';

import Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import locale from 'blockly/msg/en';
import 'blockly/blocks';
import picture1 from './quiz.png'
import {FaPlay} from 'react-icons/fa'

Blockly.setLocale(locale);


function BlocklyComponent(props) {
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();

  const generateCode = () => {
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    console.log(code);
  };

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.utils.xml.textToDom(initialXml),
        primaryWorkspace.current,
      );
    }
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  return (
    <React.Fragment>
      <div className="div1">
        <p className='problem'>자동차 움직이기</p></div>
      <div><img className='quizImg' src={picture1} />
        <span className='quiz'>인터페이스를 이용하여, 테슬라가 전진하도록 메인 클래스를 만드세요</span></div>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: 'none' }} ref={toolbox}>
        {props.children}
      </div>
      <div className='btnBox'>
      <button className='convertBtn' onClick={generateCode}>
        <FaPlay className='FaPlayBtn' size="30" color='#20CF26' />
        <span className='Btn'>실행하기</span></button>
        </div>
    </React.Fragment>
  );
}

export default BlocklyComponent;