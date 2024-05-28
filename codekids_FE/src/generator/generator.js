import Blockly from '../Blockly';
import {javascriptGenerator, Order} from 'blockly/javascript';

//인터페이스
javascriptGenerator.forBlock['interface'] = function(block, generator) {
  const val_1=generator.valueToCode(block,'인터페이스',Order.ATOMIC);
  const num_1=generator.statementToCode(block,'메소드');
  const code = `interface${val_1}메소드:${num_1}`;
  return code;
};

//커스텀 메소드
javascriptGenerator.forBlock['methodname'] = function(block, generator) {
  var text_______ = block.getFieldValue('메소드 이름');
  var code = text_______;
  return code;
};

//메인
javascriptGenerator.forBlock['main'] = function(block, generator) {
  var statements_____ = generator.statementToCode(block, 'main');
  const code = `:${statements_____}`;
  return code;
};

//로봇문제 - 클래스에서 전원 키기 메소드
javascriptGenerator.forBlock['on'] = function(block, generator) {
  return "전원을 켭니다";
};

//로봇문제 - 클래스에서 전원 끄기 메소드
javascriptGenerator.forBlock['off'] = function(block, generator) {
  return "전원을 끕니다";
};

//로봇문제 - 인터페이스에서 전원 키기 추상 메소드
javascriptGenerator.forBlock['on()'] = function(block, generator) {
  return "전원켜기()";
};

//로봇문제 - 인터페이스에서 전원 끄기 추상 메소드
javascriptGenerator.forBlock['off()'] = function(block, generator) {
  return "전원끄기()";
};

//로봇문제 - 인터페이스, 클래스에서 로봇 객체
javascriptGenerator.forBlock['robot'] = function(block, generator) {
  var code = '로봇';
  return [code, Order.NONE];
};

//로봇문제 - 로봇 인터페이스를 가지고 만드는 클래스
javascriptGenerator.forBlock['robotclass'] = function(block, generator) {
  var text______ = block.getFieldValue('클래스이름');
  var value____ = generator.valueToCode(block, '클래스', Order.ATOMIC);
  var statements_____ = generator.statementToCode(block, '전원켜기');
  var statements_____ = generator.statementToCode(block, '전원끄기');
  var statements_____ = generator.statementToCode(block, '기능추가');
  const code = `클래스이름:${text______}클래스:${value____}전원켜기:${statements_____}전원끄기:${statements_____}기능추가:${statements_____}`;
  return code;
};

//로봇문제 - 청소로봇 클래스
javascriptGenerator.forBlock['cleanuprobot'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'robotname1', Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `청소로봇클래스:${value_robotname1}`;
  return code;
};

//로봇문제 - 요리로봇 클래스
javascriptGenerator.forBlock['cookrobot'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'robotname2', Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `요리로봇클래스:${value_robotname1}`;
  return code;
};

//로봇문제 - 로봇이름
javascriptGenerator.forBlock['robotname'] = function(block, generator) {
  var text_name = block.getFieldValue('NAME');
  var code = `로봇이름:${text_name}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};

//로봇문제 - 청소 로봇 객체 생성 후
javascriptGenerator.forBlock['cleanup'] = function(block, generator) {
  var text_robotname = block.getFieldValue('robotname');
  var dropdown_op = block.getFieldValue('op');
  // TODO: Assemble javascript into code variable.
  const code =  `객체이름:${text_robotname}메소드 선택:${dropdown_op}`;
  return code;
};

//로봇문제 - 요리 로봇 객체 생성 후
javascriptGenerator.forBlock['cook'] = function(block, generator) {
  var text_robotname = block.getFieldValue('robotname');
  var dropdown_op = block.getFieldValue('op');
  // TODO: Assemble javascript into code variable.
  const code =  `객체이름:${text_robotname}메소드 선택:${dropdown_op}`;
  return code;
};
