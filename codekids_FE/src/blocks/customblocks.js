import * as Blockly from 'blockly/core';

//인터페이스 블록
Blockly.Blocks['interface'] = {
  init: function() {
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

//커스텀 메소드
Blockly.Blocks['methodname'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "메소드 이름");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#93BBD8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//메인
Blockly.Blocks['main'] = {
  init: function() {
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
  init: function() {
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
  init: function() {
    this.appendDummyInput()
        .appendField("전원켜기()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EFB290');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//로봇문제 - 클래스에서 전원 끄기 메소드
Blockly.Blocks['off'] = {
  init: function() {
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
  init: function() {
    this.appendDummyInput()
        .appendField("전원끄기()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#EFB290');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//로봇문제 - 인터페이스, 클래스에서 로봇 객체
Blockly.Blocks['robot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("로봇");
    this.setOutput(true, null);
    this.setColour('#B5D893');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//로봇문제 - 로봇 인터페이스를 가지고 만드는 클래스
Blockly.Blocks['robotclass'] = {
  init: function() {
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

//로봇문제 - 청소로봇 클래스
Blockly.Blocks['cleanuprobot'] = {
  init: function() {
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

//로봇문제 - 요리로봇 클래스
Blockly.Blocks['cookrobot'] = {
  init: function() {
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

//로봇문제 - 로봇 이름
Blockly.Blocks['robotname'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//로봇문제 - 청소로봇 객체 생성 후
Blockly.Blocks['cleanup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "robotname")
        .appendField(new Blockly.FieldDropdown([["전원켜기","op1"], ["전원끄기","op2"], ["청소하기","op3"]]), "op");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//로봇문제 - 요리로봇 객체 생성 후
Blockly.Blocks['cook'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "robotname")
        .appendField(new Blockly.FieldDropdown([["전원켜기","op1"], ["전원끄기","op2"], ["요리하기","op3"]]), "op");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};