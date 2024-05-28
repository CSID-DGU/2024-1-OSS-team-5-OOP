Blockly.JavaScript['console_print'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = generator.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = generator.statementToCode(block, 'NAME');
  var statements_name = generator.statementToCode(block, 'NAME');
  var statements_name = generator.statementToCode(block, 'NAME');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
  };
