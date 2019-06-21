export default function define(Python: Blockly.BlockGenerators) {

  Python['using_ir_remote'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    //branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const _pin = block.getFieldValue('pin');
    const code = 
'class Remote: \n' +
'  def __init__(self):\n' +
'    self.recv = machine.Pin(' + _pin + ', machine.Pin.IN , machine.Pin.PULL_UP)\n' +
'    self.recv.irq(trigger = machine.Pin.IRQ_RISING|machine.Pin.IRQ_FALLING , handler = self._handler)\n' +
'    self.buffer = [0 for x in range(100)]\n' +
'    self.bin = 0\n' +
'    self.length = 0\n' +
'    self.prev_irq = 0\n' +
'\n' +
'  def _handler(self , source):\n' +
'    self.time = ticks_us()\n' +
'    if self.prev_irq == 0:\n' +
'      self.prev_irq = self.time\n' +
'      self.length = 0\n' +
'      return\n' +
'    self.buffer[self.length] = time.ticks_diff(self.time , self.prev_irq)\n' +
'    self.prev_irq = self.time\n' +
'    self.length += 1\n' +
'\n' +
'  def _routine(self):\n' +
'    while True :\n' +
'      time.sleep_ms(200)\n' +
'      if time.ticks_diff(time.ticks_us(),self.prev_irq) > 200000 and self.length > 0 :\n' +
'        print("DECODED = [{},{}] ".format(self.decode()[1],self.length))\n' +
'\n' +
'        self.length = 0\n' +
'        self.prev_irq = 0\n' +
'        for x in range(len(self.buffer)):\n' +
'          self.buffer[x] = 0\n' + 
'      ' + branch + '\n' +
'\n' +
'  def decode(self):\n' +
'    self.bin = 0\n' +
'    m = 50000\n' +
'    for x in range(self.length):\n' +
'      m = min(self.buffer[x],m)\n' +
'    for x in range(0,self.length,2):\n' +
'      if self.buffer[x+1] > m*3 and self.buffer[x] > m*3:\n' +
'        continue\n' +
'      if self.buffer[x+1] > self.buffer[x]*3//2 :\n' +
'        self.bin += 2**(x//2)\n' +
'      else :\n' +
'        pass\n' +
'    return hex(self.bin) , bin(self.bin)\n' +
'\n' +
'remote = Remote()\n' +
'remote._routine()';

    return code;
};
  
  Python['import_edupy'] = function (block) {
    const code = 'from edupy import *\n';
    return code;
  };

  Python['import_signal'] = function (block) {
    const code = 'from signal import pause\n';
    return code;
  };

  Python['pause_s'] = function (block) {
    const code = 'pause()\n';
    return code;
  };

  Python['random'] = function (block) {
    const code = 'import random\n';
    return code;
  };

  Python['while_true'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'while True:\n' + branch;
  };

  Python['pass'] = function (block) {
    const code = 'pass \n';
    return code;
  };

  Python['if'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'if ' + text_const + ':\n' + branch;
  };

  Python['varprint'] = function (block) {
    const text_const = block.getFieldValue('var');
    // TODO: Assemble Python into code variable.
    const code = 'print(' + text_const + ')\n';
    return code;
  };

  Python['defcall'] = function (block) {
    let text_fname = block.getFieldValue('fname');
    let text_extra = block.getFieldValue('extra');
    // TODO: Assemble Python into code variable.
    let code = text_fname + '(' + text_extra + ')\n';
    return code;
  };

  Python['ifcroc'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_this = block.getFieldValue('this');
    const dropdown_crocsigns = block.getFieldValue('crocsigns');
    const text_that = block.getFieldValue('that');
    // const statements_name = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'if ' + text_this + ' ' + dropdown_crocsigns + ' ' + text_that + ':\n' + branch;
    return code;
  };

  Python['varminus'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_2 = block.getFieldValue('2');
    // TODO: Assemble Python into code variable.
    const code = text_1 + ' -= ' + text_2 + '\n';
    return code;
  };

  Python['for'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_letter = block.getFieldValue('letter');
    const text_no = block.getFieldValue('no');
    // const statements_name = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'for ' + text_letter + ' in range(' + text_no + '):\n' + branch;
    return code;
  };

  Python['advancedforloops'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_x = block.getFieldValue('x');
    const text_y = block.getFieldValue('y');
    // const statements_do = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'for ' + text_x + ' in ' + text_y + ':\n' + branch;
    return code;
  };

  Python['ifequals'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_this = block.getFieldValue('this');
    const text_that = block.getFieldValue('that');
    // const statements_do = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'if ' + text_this + ' == ' + text_that + ':\n' + branch;
    return code;
  };

  Python['importinputs'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'import inputs\n';
    return code;
  };

  Python['return2'] = function (block) {
    const text_return = block.getFieldValue('return');
    // TODO: Assemble Python into code variable.
    const code = 'return ' + text_return + '\n';
    return code;
  };

  Python['elif'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'elif ' + text_const + ':\n' + branch;
  };

  Python['else'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'else:\n' + branch;
  };

  Python['df'] = function (block) {
    const text_def = block.getFieldValue('def');
    // TODO: Assemble Python into code variable.
    const code = text_def + '()\n';
    return code;
  };

  Python['whileout'] = function (block) {
    const text_1 = block.getFieldValue('1');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // TODO: Assemble Python into code variable.
    const code = 'while ' + text_1 + ':\n' + branch;
    return code;
  };

  Python['time'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'import time\n';
    return code;
  };

  Python['import_math'] = function (block) {
    const code = 'import math\n';
    return code;
  };

  Python['sleep'] = function (block) {
    const text_sleeptime = block.getFieldValue('sleepTime');
    const code = 'time.sleep(' + text_sleeptime + ')\n';
    return code;
  };

  Python['print'] = function (block) {
    const text_print = block.getFieldValue('print');
    // TODO: Assemble Python into code variable.
    const code = 'print("' + text_print + '")\n';
    return code;
  };

  Python['equalsblock'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_2 = block.getFieldValue('2');
    // TODO: Assemble Python into code variable.
    const code = text_1 + '=' + text_2 + '\n';
    return code;
  };

  Python['define'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_2 = block.getFieldValue('2');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // const statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    const code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
    return code;
  };

  Python['greater'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_v = block.getFieldValue('v');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // TODO: Assemble Python into code variable.
    const code = 'while ' + text_1 + ' > ' + text_v + ':\n' + branch;
    return code;
  };
}
