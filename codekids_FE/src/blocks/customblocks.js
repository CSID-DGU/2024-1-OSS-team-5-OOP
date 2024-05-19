import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

import '@blockly/field-date';

const reactDateField = {
  type: 'test_react_date_field',
  message0: 'date field: %1',
  args0: [
    {
      type: 'field_date',
      name: 'DATE',
      date: '2020-02-20',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['test_react_date_field'] = {
  init: function () {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  },
};

const testReactField = {
  type: 'test_react_field',
  message0: 'custom field %1',
  args0: [
    {
      type: 'field_react_component',
      name: 'FIELD',
      text: 'Click me',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['test_react_field'] = {
  init: function () {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  },
};

Blockly.Blocks['interface'] = {
  init: function() {
    this.appendValueInput("이동수단")
        .setCheck(null)
        .appendField("이동수단");
    this.appendStatementInput("전진")
        .setCheck(null)
        .appendField("전진");
    this.appendStatementInput("후진")
        .setCheck(null)
        .appendField("후진");
    this.setColour(130);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("전진합니다");
    this.setPreviousStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['back'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("후진합니다");
    this.setPreviousStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['car'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("차");
    this.setOutput(true, null);
    this.setColour(245);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['motorcycle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("오토바이");
    this.setOutput(true, null);
    this.setColour(245);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['main'] = {
  init: function() {
    this.appendStatementInput("main")
        .setCheck(null)
        .appendField("main");
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['carinterface'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("테슬라"), "car")
        .appendField(new Blockly.FieldDropdown([["차","OPTIONNAME"], ["오토바이","OPTIONNAME"]]), "carop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};