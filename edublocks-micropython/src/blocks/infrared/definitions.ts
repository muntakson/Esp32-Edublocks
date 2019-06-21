export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['remote_class'] = {
    init() {
      this.appendDummyInput()
          .appendField('remote_class');
      this.appendStatementInput('DO')
          .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('remote_class');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['create_def'] = {
    init() {
      this.appendDummyInput()
          .appendField('create_def')
          .appendField('Name = ')
          .appendField(new Blockly.FieldTextInput('className'), 'className')
      this.appendStatementInput('DO')
          .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('create_def');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['init_def_body'] = {
    init() {
      this.appendDummyInput()
        .appendField('init_def_body')
        .appendField('PIN = ')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('init_def_body');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['using_ir_remote'] = {
      init() {
        this.appendDummyInput()
            .appendField('using_ir_remote')
            .appendField('PIN = ')
            .appendField(new Blockly.FieldTextInput('pin'), 'pin')
            .appendField(':');
        this.appendStatementInput('DO')
            .appendField('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
      this.setTooltip('using_ir_remote');
      this.setHelpUrl('http://www.example.com/');
      },
    };

    Blocks['if'] = {
      init() {
        this.appendDummyInput()
          .appendField('if')
          .appendField(new Blockly.FieldTextInput('0'), 'var')
          .appendField(':');
        this.appendStatementInput('DO')
          .appendField('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(336);
        this.setTooltip('If Statement.');
        this.setHelpUrl('');
      },
    };
}
