import React from 'react';
import './BlocklyComponent.css';
import { useEffect, useRef } from 'react';

import Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import locale from 'blockly/msg/en';
import 'blockly/blocks';
import picture1 from './quiz.png'

Blockly.setLocale(locale);

function BlocklyComponent(props) {
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();

  const generateCode = () => {
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    console.log(code);
  };

  Blockly.Themes.Halloween = Blockly.Theme.defineTheme('halloween', {
    'base': Blockly.Themes.Classic,
    'componentStyles': {
      'workspaceBackgroundColour': "#E7F6D9",
      'flyoutBackgroundColour': '#F3F9E1',
      'flyoutForegroundColour': '#000000',
      'flyoutOpacity': 0.5,
      'scrollbarColour': '#91B886',
      'insertionMarkerColour': '#fff',
      'insertionMarkerOpacity': 0.3,
      'scrollbarOpacity': 0.4,
      'cursorColour': '#d0d0d0',
      'blackBackground': '#333'
    }
  });

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      theme: Blockly.Themes.Halloween,
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
      <div style={{ display: 'none'}} ref={toolbox}>
        {props.children}
      </div>
      
    </React.Fragment>
  );
}

export default BlocklyComponent;