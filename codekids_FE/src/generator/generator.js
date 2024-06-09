import {javascriptGenerator, Order} from 'blockly/javascript';

//인터페이스
javascriptGenerator.forBlock['interface'] = function(block, generator) {
  const val_1=generator.valueToCode(block,'인터페이스',Order.ATOMIC);
  const num_1=generator.statementToCode(block,'메소드');
  const code = `interface${val_1}method:${num_1}`;
  return code;
};

//커스텀 메소드
javascriptGenerator.forBlock['methodname'] = function(block, generator) {
  var text_______ = block.getFieldValue('메소드 이름');
  var code = text_______;
  return code;
};

//객체 이름
javascriptGenerator.forBlock['objectname'] = function(block, generator) {
  var text_name = block.getFieldValue('NAME');
  var code = text_name;
  return [code, Order.NONE];
};


//메인
javascriptGenerator.forBlock['main'] = function(block, generator) {
  var statements_____ = generator.statementToCode(block, 'main');
  const code = `:${statements_____}`;
  return code;
};

//로봇문제 - 클래스에서 전원 키기 메소드
javascriptGenerator.forBlock['on'] = function(block, generator) {
  return "on";
};

//로봇문제 - 클래스에서 전원 끄기 메소드
javascriptGenerator.forBlock['off'] = function(block, generator) {
  return "off";
};

//로봇문제 - 인터페이스에서 전원 키기 추상 메소드
javascriptGenerator.forBlock['on()'] = function(block, generator) {
  return "on()";
};

//로봇문제 - 인터페이스에서 전원 끄기 추상 메소드
javascriptGenerator.forBlock['off()'] = function(block, generator) {
  return "off()";
};

//로봇문제 - 인터페이스, 클래스에서 로봇 객체
javascriptGenerator.forBlock['robot'] = function(block, generator) {
  var code = 'robot';
  return [code, Order.NONE];
};

//로봇문제 - 로봇 인터페이스를 가지고 만드는 클래스
javascriptGenerator.forBlock['robotclass'] = function(block, generator) {
  var text______ = block.getFieldValue('클래스이름');
  var value____ = generator.valueToCode(block, '클래스', Order.ATOMIC);
  var statements_____1 = generator.statementToCode(block, '전원켜기');
  var statements_____2 = generator.statementToCode(block, '전원끄기');
  var statements_____3 = generator.statementToCode(block, '기능추가');
  if ((text______==='청소')&&(statements_____3==='  청소하기')){
    text______ = 'clean';
    statements_____3 ='clean';
  } else if ((text______==='요리')&&(statements_____3==='  요리하기')){
    text______ = 'cook';
    statements_____3 ='cook';
  } else {
    text______ = 'false';
    statements_____3 ='fasle';
  }
  
  const code = `classname:${text______}class:${value____}on:${statements_____1}off:${statements_____2}add:${statements_____3}`;
  return code;
};

//로봇문제 - 청소로봇 클래스
javascriptGenerator.forBlock['cleanuprobot'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'robotname1', Order.ATOMIC);
  if ((value_robotname1==='(아이언맨)')){
    value_robotname1 = 'ironman'
  }
  else value_robotname1 = 'false'
  var code = `cleanrobotclass:${value_robotname1}`;
  return code;
};

//로봇문제 - 요리로봇 클래스
javascriptGenerator.forBlock['cookrobot'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'robotname2', Order.ATOMIC);
  if ((value_robotname1==='(토르)')){
    value_robotname1 = 'thor'
  } else {
    value_robotname1 = 'false';
  }
  var code = `cookrobotclass:${value_robotname1}`;
  return code;
};

//로봇문제 - 청소 로봇 객체 생성 후
javascriptGenerator.forBlock['cleanup'] = function(block, generator) {
  var text_robotname = block.getFieldValue('robotname');
  if ((text_robotname==='아이언맨')){
    text_robotname = 'ironman'
  } else {
    text_robotname = 'false';
  }
  var dropdown_op = block.getFieldValue('op');
  // TODO: Assemble javascript into code variable.
  const code =  `name:${text_robotname}methodop:${dropdown_op}`;
  return code;
};

//로봇문제 - 요리 로봇 객체 생성 후
javascriptGenerator.forBlock['cook'] = function(block, generator) {
  var text_robotname = block.getFieldValue('robotname');
  var dropdown_op = block.getFieldValue('op');
  // TODO: Assemble javascript into code variable.
  const code =  `name:${text_robotname}methodop:${dropdown_op}`;
  return code;
};

//동물문제 - 인터페이스에서 소리내기 추상 메소드
javascriptGenerator.forBlock['sound()'] = function(block, generator) {
  return "sound()";
};

//동물문제 - 인터페이스, 클래스에서 동물 객체
javascriptGenerator.forBlock['animal'] = function(block, generator) {
  var code = 'animal';
  return [code, Order.NONE];
};

//동물문제 - 동물 인터페이스를 가지고 만드는 클래스
javascriptGenerator.forBlock['animalclass'] = function(block, generator) {
  var text______ = block.getFieldValue('클래스이름');
  var value____ = generator.valueToCode(block, '클래스', Order.ATOMIC);
  var statements_____1 = generator.statementToCode(block, '소리내기');
  if ((text______==='강아지')&&(statements_____1==='  멍멍!')){
    text______ = 'dog';
    statements_____1 ='dog';
  } else if ((text______==='고양이')&&(statements_____1==='  야옹!')){
    text______ = 'cat';
    statements_____1 ='cat';
  } else if ((text______==='새')&&(statements_____1==='  짹짹!')){
    text______ = 'bird';
    statements_____1 ='bird';
  } else {
    text______ = 'false';
    statements_____1 ='fasle';
  }
  
  const code = `classname:${text______}class:${value____}sound:${statements_____1}`;
  return code;
};



//동물문제 - 강아지 클래스
javascriptGenerator.forBlock['dog'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'dogname', Order.ATOMIC);
  if ((value_robotname1==='포키')){
    value_robotname1 = 'dagname'
  }
  else value_robotname1 = 'false'
  var code = `dogclass:${value_robotname1}`;
  return code;
};

//로봇문제 - 고양이 클래스
javascriptGenerator.forBlock['cat'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'catname', Order.ATOMIC);
  if ((value_robotname1==='달니')){
    value_robotname1 = 'catname'
  } else {
    value_robotname1 = 'false';
  }
  var code = `catcalss:${value_robotname1}`;
  return code;
};

//로봇문제 - 새 클래스
javascriptGenerator.forBlock['bird'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'birdname', Order.ATOMIC);
  value_robotname1 = 'false';
  var code = `birdclass:${value_robotname1}`;
  return code;
};

//로봇문제 - 청소 로봇 객체 생성 후
javascriptGenerator.forBlock['obmethod'] = function(block, generator) {
  var text_dogname = block.getFieldValue('animalname');
  if ((text_dogname==='포키')){
    text_dogname = 'dogname'
  } else if ((text_dogname==='달니')){
    text_dogname = 'catname'
  } else {
    text_dogname = 'false';
  }
  var code = `objectname:${text_dogname}`;
  return code;
};