import {javascriptGenerator, Order} from 'blockly/javascript';

//인터페이스
javascriptGenerator.forBlock['interface'] = function(block, generator) {
  const val_1=generator.valueToCode(block,'인터페이스',Order.ATOMIC);
  const num_1=generator.statementToCode(block,'메소드');
  const code = `interface${val_1}method:${num_1}`;
  return code;
};

//추상클래스
javascriptGenerator.forBlock['absclass'] = function(block, generator) {
  const val_1=generator.valueToCode(block,'추상클래스',Order.ATOMIC);
  const num_1=generator.statementToCode(block,'메소드');
  const code = `abscalss${val_1}method:${num_1}`;
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

//객체 이름
javascriptGenerator.forBlock['obname'] = function(block, generator) {
  var text_name = block.getFieldValue('NAME');
  var code = text_name;
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

//게임문제 - 인터페이스에서 움직이기 추상 메소드
javascriptGenerator.forBlock['move()'] = function(block, generator) {
  return "move()";
};

//넓이문제 - 인터페이스에서 넓이구하기 추상 메소드
javascriptGenerator.forBlock['cal()'] = function(block, generator) {
  return "cal()";
};

//게임문제 - 인터페이스에서 공격하기 추상 메소드
javascriptGenerator.forBlock['attack()'] = function(block, generator) {
  return "attack()";
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

//게임문제 - 인터페이스, 클래스에서 게임 객체
javascriptGenerator.forBlock['game'] = function(block, generator) {
  var code = 'game';
  return [code, Order.NONE];
};

//넓이문제 - 인터페이스, 클래스에서 도형 객체
javascriptGenerator.forBlock['figure'] = function(block, generator) {
  var code = 'figure';
  return [code, Order.NONE];
};


//로봇문제 - 로봇 인터페이스를 가지고 만드는 클래스
javascriptGenerator.forBlock['robotclass'] = function(block, generator) {
  var text______ = block.getFieldValue('클래스이름');
  var value____ = generator.valueToCode(block, '클래스', Order.ATOMIC);
  var statements1 = generator.statementToCode(block, '전원켜기');
  var statements2 = generator.statementToCode(block, '전원끄기');
  var statements3 = generator.statementToCode(block, '기능추가');
  if ((text______==='청소')&&(statements3==='  청소하기')){
    text______ = 'clean';
    statements3 ='clean';
  } else if ((text______==='요리')&&(statements3==='  요리하기')){
    text______ = 'cook';
    statements3 ='cook';
  } else {
    text______ = 'false';
    statements3 = 'false';
  }
  
  const code = `classname:${text______}class:${value____}on:${statements1}off:${statements2}add:${statements3}`;
  return code;
};

//로봇문제 - 로봇 인터페이스를 가지고 만드는 클래스
javascriptGenerator.forBlock['charclass'] = function(block, generator) {
  var text______ = block.getFieldValue('클래스이름');
  var value____ = generator.valueToCode(block, '클래스', Order.ATOMIC);
  var statements1 = generator.statementToCode(block, '움직이기');
  var statements2 = generator.statementToCode(block, '공격하기');
  if ((text______==='전사')&&(statements1==='  앞으로 움직이기뒤로 움직이기')&&(statements2==='  공격하기')){
    text______ = 'true';
    statements1 ='true';
    statements2 ='true';

  } else if ((text______==='마법사')&&(statements1==='  움직이기')&&(statements2==='  공격하기')){
    text______ = 'true';
    statements1 ='true';
    statements2 ='true';

  } else {
    text______ = 'false';
    statements1 ='fasle';
    statements2 ='false';

  }
  
  const code = `classname:${text______}class:${value____}move:${statements1}attack:${statements2}`;
  return code;
};

//로봇문제 - 청소로봇 클래스
javascriptGenerator.forBlock['cleanuprobot'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'robotname1', Order.ATOMIC);
  if ((value_robotname1==='(아이언맨)')){
    value_robotname1 = 'ironman'
  }
  else {value_robotname1 = 'false'}
  var code = `cleanrobotclass:${value_robotname1}`;
  return code;
};

//게임문제 - 전사 클래스
javascriptGenerator.forBlock['a'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'name1', Order.ATOMIC);
  if ((value_robotname1==='(볼드모트)')){
    value_robotname1 = 'true'
  }
  else {value_robotname1 = 'false'}
  var code = `gameclass:${value_robotname1}`;
  return code;
};
//게임문제 - 전사 클래스
javascriptGenerator.forBlock['b'] = function(block, generator) {
  var value_robotname2 = generator.valueToCode(block, 'name2', Order.ATOMIC);
  if ((value_robotname2==='(해리포터)')){
    value_robotname2 = 'true'
  }
  else {value_robotname2 = 'false'}
  var code = `gameclass:${value_robotname2}`;
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

//게임문제 - 볼드모트 객체 생성 후
javascriptGenerator.forBlock['amethod'] = function(block, generator) {
  var text_robotname = block.getFieldValue('name');
  if ((text_robotname==='볼드모트')){
    text_robotname = 'true'
  } else {
    text_robotname = 'false';
  }
  var dropdown_op = block.getFieldValue('op');
  // TODO: Assemble javascript into code variable.
  const code =  `name:${text_robotname}methodop:${dropdown_op}`;
  return code;
};
//게임문제 - 해리포터 객체 생성 후
javascriptGenerator.forBlock['bmethod'] = function(block, generator) {
  var text_robotname = block.getFieldValue('name');
  if ((text_robotname==='해리포터')){
    text_robotname = 'true'
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

//넓이문제 - 동물 인터페이스를 가지고 만드는 클래스
javascriptGenerator.forBlock['figureclass'] = function(block, generator) {
  var text______ = block.getFieldValue('클래스이름');
  var value____ = generator.valueToCode(block, '클래스', Order.ATOMIC);
  var statements_____1 = generator.statementToCode(block, '넓이 구하기');
  if (text______==='직사각형'){
    text______ = 'S';
  } else if ((text______==='삼각형')){
    text______ = 'T';
  } else if ((text______==='원')){
    text______ = 'C';
  } else {
    text______ = 'false';
  }
  
  const code = `classname:${text______}class:${value____}sound:${statements_____1}`;
  return code;
};
//계산기문제 - 계산 클래스
javascriptGenerator.forBlock['opclass'] = function(block, generator) {
  var text_classname = block.getFieldValue('classname');
  var statements_methodinput = generator.statementToCode(block, 'methodinput');
  if (text_classname==='계산'){
    text_classname='true';
  }
  else return text_classname='false';
  var code = `classname:${text_classname}method:${statements_methodinput}`;
  return code;
};


//동물문제 - 강아지 클래스
javascriptGenerator.forBlock['dog'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'dogname', Order.ATOMIC);
  if ((value_robotname1==='(포키)')){
    value_robotname1 = 'dagname'
  }
  else value_robotname1 = 'false'
  var code = `dogclass:${value_robotname1}`;
  return code;
};



//로봇문제 - 고양이 클래스
javascriptGenerator.forBlock['cat'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'catname', Order.ATOMIC);
  if ((value_robotname1==='(달니)')){
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

//동물문제 - 강아지 클래스
javascriptGenerator.forBlock['s'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'name', Order.ATOMIC);
  if ((value_robotname1==='(직사각형)')){
    value_robotname1 = 's'
  }
  else {value_robotname1 = 'false'}
  var code = `class:${value_robotname1}`;
  return code;
};

//동물문제 - 강아지 클래스
javascriptGenerator.forBlock['t'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'name', Order.ATOMIC);
  if ((value_robotname1==='(삼각형)')){
    value_robotname1 = 't'
  }
  else value_robotname1 = 'false'
  var code = `class:${value_robotname1}`;
  return code;
};

//동물문제 - 강아지 클래스
javascriptGenerator.forBlock['c'] = function(block, generator) {
  var value_robotname1 = generator.valueToCode(block, 'name', Order.ATOMIC);
  if ((value_robotname1==='(원)')){
    value_robotname1 = 'c'
  }
  else value_robotname1 = 'false'
  var code = `class:${value_robotname1}`;
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
//로봇문제 - 청소 로봇 객체 생성 후
javascriptGenerator.forBlock['obmethod2'] = function(block, generator) {
  var text_dogname = block.getFieldValue('name');
  if ((text_dogname==='직사각형')){
    text_dogname = 's'
  } else if ((text_dogname==='원')){
    text_dogname = 'c'
  } else if ((text_dogname==='삼각형')){
    text_dogname = 't'
  }else {
    text_dogname = 'false';
  }
  var code = `objectname:${text_dogname}`;
  return code;
};


//로봇문제 - 인터페이스, 클래스에서 로봇 객체
javascriptGenerator.forBlock['cal'] = function(block, generator) {
  var code = 'cal';
  return code;
};

javascriptGenerator.forBlock['figurecal'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var code = `classname:${value_name}`;
  return code;
};