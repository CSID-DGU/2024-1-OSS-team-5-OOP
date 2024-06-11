import * as Blockly from 'blockly/core';

//인터페이스 블록
Blockly.Blocks['interface'] = {
  init: function () {
    this.appendValueInput("인터페이스")
      .setCheck(null)
      .appendField("인터페이스");
    this.appendStatementInput("메소드")
      .setCheck(null)
      .appendField("");
    this.setColour('#EF9090');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//인터페이스 블록
Blockly.Blocks['absclass'] = {
  init: function () {
    this.appendValueInput("추상클래스")
      .setCheck(null)
      .appendField("추상클래스");
    this.appendStatementInput("메소드")
      .setCheck(null)
      .appendField("");
    this.setColour('#EF9090');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//커스텀 메소드
Blockly.Blocks['methodname'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "메소드 이름");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#93BBD8");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//객체 이름
Blockly.Blocks['objectname'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.setOutput(true, null);
    this.setColour("#F2D9F6");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


//객체 이름
Blockly.Blocks['obname'] = {
  init: function() {
    this.appendValueInput("obname")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput(""), "obname");
    this.setColour("#F2D9F6");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//메인
Blockly.Blocks['main'] = {
  init: function () {
    this.appendStatementInput("main")
      .setCheck(null)
      .appendField("main");
    this.setColour("#93BBD8");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//로봇문제 - 클래스에서 전원 키기 메소드
Blockly.Blocks['on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("전원을 켭니다");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EFB290');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//로봇문제 - 인터페이스에서 전원 키기 추상 메소드
Blockly.Blocks['on()'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("전원켜기()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EFB290');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//게임문제 - 인터페이스에서 움직이기 추상 메소드
Blockly.Blocks['move()'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("움직이기()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EFB290');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//넓이문제 - 인터페이스에서 넓이구하기 추상 메소드
Blockly.Blocks['cal()'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("넓이구하기()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EFB290');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//로봇문제 - 클래스에서 전원 끄기 메소드
Blockly.Blocks['off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("전원을 끕니다");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EFB290');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


//로봇문제 - 인터페이스에서 전원 끄기 추상 메소드
Blockly.Blocks['off()'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("전원끄기()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EFB290');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//게임문제 - 인터페이스에서 공격하기 추상 메소드
Blockly.Blocks['attack()'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("공격하기()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EFB290');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//로봇문제 - 인터페이스, 클래스에서 로봇 객체
Blockly.Blocks['robot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("로봇");
    this.setOutput(true, null);
    this.setColour('#B5D893');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
//게임문제 - 인터페이스, 클래스에서 게임 객체
Blockly.Blocks['game'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("게임");
    this.setOutput(true, null);
    this.setColour('#B5D893');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
//넓이문제 - 인터페이스, 클래스에서 도형 객체
Blockly.Blocks['figure'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("도형");
    this.setOutput(true, null);
    this.setColour('#B5D893');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
//로봇문제 - 로봇 인터페이스를 가지고 만드는 클래스
Blockly.Blocks['robotclass'] = {
  init: function () {
    this.appendValueInput("클래스")
      .setCheck(null)
      .appendField("클래스")
      .appendField(new Blockly.FieldTextInput(""), "클래스이름");
    this.appendStatementInput("전원켜기")
      .setCheck(null)
      .appendField("전원켜기()");
    this.appendStatementInput("전원끄기")
      .setCheck(null)
      .appendField("전원끄기()");
    this.appendStatementInput("기능추가")
      .setCheck(null)
      .appendField("");
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//게임문제 - 게임 인터페이스를 가지고 만드는 클래스
Blockly.Blocks['charclass'] = {
  init: function () {
    this.appendValueInput("클래스")
      .setCheck(null)
      .appendField("클래스")
      .appendField(new Blockly.FieldTextInput(""), "클래스이름");
    this.appendStatementInput("움직이기")
      .setCheck(null)
      .appendField("움직이기()");
    this.appendStatementInput("공격하기")
      .setCheck(null)
      .appendField("공격하기()");
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


//로봇문제 - 청소로봇 클래스
Blockly.Blocks['cleanuprobot'] = {
  init: function () {
    this.appendValueInput("robotname1")
      .setCheck(null)
      .appendField("청소로봇 클래스");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//게임문제 - 전사 클래스
Blockly.Blocks['a'] = {
  init: function () {
    this.appendValueInput("name1")
      .setCheck(null)
      .appendField("전사 클래스");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//로봇문제 - 요리로봇 클래스
Blockly.Blocks['cookrobot'] = {
  init: function () {
    this.appendValueInput("robotname2")
      .setCheck(null)
      .appendField("요리로봇 클래스");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//게임문제 - 마법사 클래스
Blockly.Blocks['b'] = {
  init: function () {
    this.appendValueInput("name2")
      .setCheck(null)
      .appendField("마법사 클래스");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//로봇문제 - 청소로봇 객체 생성 후
Blockly.Blocks['cleanup'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "robotname")
      .appendField(new Blockly.FieldDropdown([["전원켜기", "op1"], ["전원끄기", "op2"], ["청소하기", "op3"]]), "op");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DAF6D9");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//게임문제 - 전사 객체 생성 후
Blockly.Blocks['amethod'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "name")
      .appendField(new Blockly.FieldDropdown([["움직이기", "op1"], ["공격하기", "op2"]]), "op");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DAF6D9");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//게임문제 - 마법사 객체 생성 후
Blockly.Blocks['bmethod'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "name")
      .appendField(new Blockly.FieldDropdown([["움직이기", "op1"], ["공격하기", "op2"]]), "op");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DAF6D9");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//로봇문제 - 요리로봇 객체 생성 후
Blockly.Blocks['cook'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "robotname")
      .appendField(new Blockly.FieldDropdown([["전원켜기", "op1"], ["전원끄기", "op2"], ["요리하기", "op3"]]), "op");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DAF6D9");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//동물문제 - 인터페이스에서 소리내기 추상 메소드
Blockly.Blocks['sound()'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("소리내기()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EFB290');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//동물문제 - 인터페이스, 클래스에서 동물 객체
Blockly.Blocks['animal'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("동물");
    this.setOutput(true, null);
    this.setColour('#B5D893');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//동물문제 - 동물 인터페이스를 가지고 만드는 클래스
Blockly.Blocks['animalclass'] = {
  init: function () {
    this.appendValueInput("클래스")
      .setCheck(null)
      .appendField("클래스")
      .appendField(new Blockly.FieldTextInput(""), "클래스이름");
    this.appendStatementInput("소리내기")
      .setCheck(null)
      .appendField("소리내기()");
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//동물문제 - 동물 인터페이스를 가지고 만드는 클래스
Blockly.Blocks['figureclass'] = {
  init: function () {
    this.appendValueInput("클래스")
      .setCheck(null)
      .appendField("클래스")
      .appendField(new Blockly.FieldTextInput(""), "클래스이름");
    this.appendStatementInput("넓이 구하기")
      .setCheck(null)
      .appendField("넓이 구하기()");
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//동물문제 - 강아지 클래스
Blockly.Blocks['dog'] = {
  init: function () {
    this.appendValueInput("dogname")
      .setCheck(null)
      .appendField("강아지 클래스");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//동물문제 - 고양이 클래스
Blockly.Blocks['cat'] = {
  init: function () {
    this.appendValueInput("catname")
      .setCheck(null)
      .appendField("고양이 클래스");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//동물문제 - 새 클래스
Blockly.Blocks['bird'] = {
  init: function () {
    this.appendValueInput("birdname")
      .setCheck(null)
      .appendField("새 클래스");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//넓이문제 - 직사각형 클래스
Blockly.Blocks['s'] = {
  init: function () {
    this.appendValueInput("name")
      .setCheck(null)
      .appendField("직사각형 클래스");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//넓이문제 - 삼각형 클래스
Blockly.Blocks['t'] = {
  init: function () {
    this.appendValueInput("name")
      .setCheck(null)
      .appendField("삼각형 클래스");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
//넓이문제 - 원 클래스
Blockly.Blocks['c'] = {
  init: function () {
    this.appendValueInput("name")
      .setCheck(null)
      .appendField("원 클래스");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EF9090");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//동물문제 - 객체 생성 후 메소드 실행하기
Blockly.Blocks['obmethod'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "animalname");
    this.appendDummyInput()
      .appendField("소리내기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour("#FFCB8D");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//넓이문제 - 객체 생성 후 메소드 실행하기
Blockly.Blocks['obmethod2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "name");
    this.appendDummyInput()
      .appendField("넓이 구하기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour("#FFCB8D");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//계산기문제 - 계산 클래스
Blockly.Blocks['opclass'] = {
  init: function() {
    this.appendValueInput("methodinput")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput(""), "classname")
        .appendField("클래스");
    this.setColour("#93BBD8");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//계산기문제 - 인터페이스, 클래스에서 로봇 객체
Blockly.Blocks['cal'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("계산기");
    this.setOutput(true, null);
    this.setColour('#B5D893');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['figurecal'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F2D9F6");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};