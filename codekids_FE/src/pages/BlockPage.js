import React from 'react';
import './BlockPage.css';
import BlocklyComponent, {Block, Value, Field, Shadow} from '../Blockly';

import '../blocks/customblocks';
import '../generator/generator';

function BlockPage(props) {
  return (
    <div className="BlockPage" >
        <BlocklyComponent
          readOnly={false}
          trashcan={true}
          media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
</xml>
      `}>
          <Block type="interface" />
          <Block type="go" />
          <Block type="back" />
          <Block type="car" />
          <Block type="motorcycle" />
          <Block type="main" />
          <Block type="carinterface" />
        </BlocklyComponent>
    </div>
  );
}

export default BlockPage;
