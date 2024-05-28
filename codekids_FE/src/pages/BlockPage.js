import React, {useState, useRef} from 'react';
import './BlockPage.css';
import { useLocation } from 'react-router-dom';
import BlocklyComponent, { Block} from '../Blockly';
import '../blocks/customblocks';
import '../generator/generator';
import { javascriptGenerator } from 'blockly/javascript';
import {FaPlay} from 'react-icons/fa'


function BlockPage(props) {
  const location = useLocation();
  const { concept } = location.state || {};
  const [visible, setVisible] = useState(false);
  const onPress = () => {
    setVisible(!visible);
  };

  let primaryWorkspace = useRef();

  const generateCode = () => {
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    console.log(code);
  };

  return (
    <div className="BlockPage">
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
      <Block type="interface" />
      <Block type="go" />
      <Block type="back" />
      <Block type="car" />
      <Block type="motorcycle" />
      <Block type="main" />
      {visible && <Block type="carinterface" />}
    </BlocklyComponent>
    <div className='btnBox'>
      <button className='convertBtn' onClick={() => {
                  onPress();
                  generateCode();
                  }}>
        <FaPlay className='FaPlayBtn' size="30" color='#20CF26' />
        <span className='Btn'>실행하기</span></button>
        </div>
    </div >
  );
}

export default BlockPage;
