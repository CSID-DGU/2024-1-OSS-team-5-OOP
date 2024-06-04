import React, {useRef, useState, useEffect} from 'react';
import './BlockPage.css';
import BlocklyComponent, { Block} from '../Blockly';
import '../blocks/customblocks';
import '../generator/generator';
import { javascriptGenerator } from 'blockly/javascript';
import {FaPlay} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
var index=0;


function FinalBlockPage() {
  const navigate = useNavigate();
  const location = useLocation();
  let primaryWorkspace = useRef();
  const [response, setResponse] = useState({ data: [] });
  const problemId = location.state.problemId;

  const concept_eng = location.state.concept_eng;
  const concept = location.state.concept;
  const path = location.pathname;

  const url = `/problem/getOneProblem?id=${problemId}&level=3`;
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchBlock();
  }, []);

  const generateCode = () => {
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    console.log(code);
  };
  const handleBoxClick = (concept_eng, concept) => {
    navigate(`${path}/quiz`, { state: { concept_eng, concept } });
  };
  const call = (index) => {
    console.log(index)
    if (index == 1) {
      return true
    }
    else return false
  };

  return (
    <div className="BlockPage">
        <div className="div1">
        <p className='problemtitle'>{response.data.problem_title}</p></div>
        <div className='quizdiv'><img className='quizImg'src={`${process.env.PUBLIC_URL}/quiz.png`} />
        <span className='quiz'>{response.data.problem_detail_title}</span></div>
        {call(index++) && <BlocklyComponent
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
      <Block type="main" />
      <Block type="cleanuprobot" />
      <Block type="cookrobot" />
      <Block type="robotname" />
      <Block type="cleanup" />
      <Block type="cook" />
    </BlocklyComponent>}
    <div className='btnBox'>
      <button className='convertBtn' onClick={() => {
                  handleBoxClick(concept_eng, concept);
                  generateCode();
                  index=0;
                  }}>
        <FaPlay className='FaPlayBtn' size="30" color='#20CF26' />
        <span className='Btn'>실행하기</span></button>
        </div>
    </div >
  );
}

export default FinalBlockPage;
