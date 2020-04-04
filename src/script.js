'use strict'

import {ENline1, ENline2, ENline3, ENline4, line5, RUline1, RUline2, RUline3,
  RUline4, AllCodesAndKeys, codesArray, buttonsLength} from './consts.js';

class Keyboards {
  constructor() {
    this.virtualDisplay = document.createElement('div');
    this.printedText = document.createElement('textarea');
    this.currentLanguage = document.createElement('div');
    this.myKeyboard = document.createElement('div');
    this.info = document.createElement('div');
    this.button = document.createElement('div');
    this.bill = document.createElement('div');
    this.language = '';
    this.shiftStatus = false;
    this.CapsLockStatus = false;
  }

  createAreas() {
    document.body.append(this.virtualDisplay);
    this.virtualDisplay.classList.add('virtualDisplay');
    this.virtualDisplay.append(this.printedText);
    this.virtualDisplay.append(this.currentLanguage);
    this.printedText.classList.add('printedText');
    this.currentLanguage.classList.add('currentLanguage');
    this.currentLanguage.innerText = this.language;
    document.body.append(this.myKeyboard);
    this.myKeyboard.className = 'keyboard';
    document.body.append(this.info);
    this.info.classList.add('info');
    this.info.innerHTML = 'Смена языка: ShiftLeft + ControlLeft. На виртуальной клавиатуре сначала нажать ShiftLeft, затем - ConrolLeft. <br /> Создано в ОС Windows <br /> Поведение клавиш SHIFT и CAPSLOCK в виртуальном режиме имитирует реальное поведение';
    document.body.append(this.bill);
    this.bill.classList.add('bill');
  }

  createButtons() {
    for (let i = 0; i < buttonsLength.length; i += 1) {
      const button = document.createElement('div');
      button.classList.add('button');
      button.setAttribute('id', codesArray[i]);
      button.style.width = `${buttonsLength[i]}px`;
      this.myKeyboard.append(button);
    }
  }

  addButtonText() {
    const allButtons = this.myKeyboard.querySelectorAll('.button');

    for (let x = 0; x < this.ALL_KEYS.length; x += 1) {
      const button = allButtons[x];
      if (Array.isArray(this.ALL_KEYS[x])) {
        button.classList.add('doubleInputButton');
        const noShiftText = document.createElement('div');
        const shiftText = document.createElement('div');
        shiftText.classList.add('shiftText');
        noShiftText.classList.add('noShiftText');
        button.append(shiftText);
        button.append(noShiftText);
        const [a, b] = this.ALL_KEYS[x];
        shiftText.innerHTML = b;
        noShiftText.innerHTML = a;
      } else {
        button.innerHTML = this.ALL_KEYS[x];
      }
    }
  }

  addListeners() {
    document.addEventListener('keydown', (event) => this.RealKeyDown(event));
    document.addEventListener('keyup', (event) => this.RealKeyUp(event));
    document.addEventListener('mousedown', (event) => this.MouseDown(event));
    document.addEventListener('mouseup', (event) => this.MouseUp(event));
    document.addEventListener('mouseout', (event) => this.MouseOut(event));
  }

  RealKeyDown(event) {
    event.preventDefault();
    if (!codesArray.includes(event.code)) { return; }

    if (event.code === 'MetaLeft') {
      document.querySelector('.bill').style.display = 'block';
    }

    this.printedText.focus();

    if (AllCodesAndKeys[event.code][0] === 'CapsLock') {
      if (document.getElementById(`${event.code}`).classList.contains('active')) {
        document.getElementById(`${event.code}`).classList.remove('active');
      } else {
        document.getElementById(`${event.code}`).classList.add('active');
      }
    } else {
      document.getElementById(`${event.code}`).classList.add('active');
    }

    if (document.getElementById('ShiftLeft').classList.contains('active') && document.getElementById('ControlLeft').classList.contains('active')) {
      this.changeLanguage();
      return;
    }

    if (event.code.match(/(Arrow).*/)) {
      this.printedText.value += document.getElementById(`${event.code}`).innerHTML;
    }

    if (this.language === 'EN' && AllCodesAndKeys[event.code][1] !== 'controlButton') {
      if (this.shiftStatus === false && this.CapsLockStatus === false) {
        this.printedText.value += AllCodesAndKeys[event.code][0];
      } else if (this.shiftStatus === true && this.CapsLockStatus === false) {
        this.printedText.value += AllCodesAndKeys[event.code][1];
      } else if (this.shiftStatus === false && this.CapsLockStatus === true) {
        if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/) && event.code !== 'Backquote') {
          this.printedText.value += AllCodesAndKeys[event.code][1];
        } else {
          this.printedText.value += AllCodesAndKeys[event.code][0];
        }
      } else if (this.shiftStatus === true && this.CapsLockStatus === true) {
        if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/) && event.code !== 'Backquote') {
          this.printedText.value += AllCodesAndKeys[event.code][0];
        } else {
          this.printedText.value += AllCodesAndKeys[event.code][1];
        }
      }
    } else if (this.language === 'RU' && AllCodesAndKeys[event.code][1] !== 'controlButton') {
      if (this.shiftStatus === false && this.CapsLockStatus === false) {
        this.printedText.value += AllCodesAndKeys[event.code][2];
      } else if (this.shiftStatus === true && this.CapsLockStatus === false) {
        this.printedText.value += AllCodesAndKeys[event.code][3];
      } else if (this.shiftStatus === false && this.CapsLockStatus === true) {
        if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/)) {
          this.printedText.value += AllCodesAndKeys[event.code][3];
        } else {
          this.printedText.value += AllCodesAndKeys[event.code][2];
        }
      } else if (this.shiftStatus === true && this.CapsLockStatus === true) {
        if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/)) {
          this.printedText.value += AllCodesAndKeys[event.code][2];
        } else {
          this.printedText.value += AllCodesAndKeys[event.code][3];
        }
      }
    } else if (event.code === 'CapsLock') {
      if (this.CapsLockStatus === false) {
        this.CapsLockStatus = true;
      } else {
        this.CapsLockStatus = false;
      }
    } else if (AllCodesAndKeys[event.code][0] === 'Shift') {
      this.shiftStatus = true;
    } else if (event.code === 'Backspace') {
      this.printedText.value = this.printedText.value.slice(0, -1);
    } else if (event.code === 'Enter') {
      this.printedText.setRangeText('\n', this.printedText.selectionStart, this.printedText.selectionEnd, 'end');
    }
  }

  RealKeyUp(event) {
    event.preventDefault();

    if (!codesArray.includes(event.code)) { return; }

    if (event.code === 'MetaLeft') {
      document.querySelector('.bill').style.display = 'none';
    }

    if (AllCodesAndKeys[event.code][0] === 'Shift') {
      this.shiftStatus = false;
    }
    if (AllCodesAndKeys[event.code][0] !== 'CapsLock') {
      document.getElementById(`${event.code}`).classList.remove('active');
    }
  }

  MouseDown(event) {
    const ShiftLeft = document.getElementById('ShiftLeft');
    const ShiftRight = document.getElementById('ShiftRight');

    if (!event.target.classList.contains('button') && !event.target.parentNode.classList.contains('button')) { return; }
    if (!event.target.classList === undefined) { return; }

    if (event.target.id === 'CapsLock') {
      if (event.target.classList.contains('active')) {
        event.target.classList.remove('active');
      } else {
        event.target.classList.add('active');
      }
    } else {
      event.target.classList.add('active');
      event.target.parentNode.classList.add('active');
    }

    if (event.target.id === 'ControlLeft' && document.getElementById('ShiftLeft').classList.contains('active')) {
      document.getElementById('ShiftLeft').classList.remove('active');
      this.shiftStatus = false;
      this.changeLanguage();
      return;
    }

    if (event.target.parentNode.classList.contains('doubleInputButton') && this.shiftStatus === false) {
      this.printedText.value += AllCodesAndKeys[event.target.parentNode.id][0];
    } else if (event.target.parentNode.classList.contains('doubleInputButton') && this.shiftStatus === true) {
      this.printedText.value += AllCodesAndKeys[event.target.parentNode.id][1];

      this.shiftStatus = false;
      ShiftLeft.classList.remove('active');
      ShiftRight.classList.remove('active');
    } else if (this.language === 'EN' && AllCodesAndKeys[event.target.id][1] !== 'controlButton') {
      if (this.shiftStatus === false && this.CapsLockStatus === false) {
        this.printedText.value += AllCodesAndKeys[event.target.id][0];
      } else if (this.shiftStatus === true && this.CapsLockStatus === false) {
        this.printedText.value += AllCodesAndKeys[event.target.id][1];
        this.shiftStatus = false;
        ShiftLeft.classList.remove('active');
        ShiftRight.classList.remove('active');
      } else if (this.shiftStatus === false && this.CapsLockStatus === true) {
        if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
          this.printedText.value += AllCodesAndKeys[event.target.id][1];
        } else {
          this.printedText.value += AllCodesAndKeys[event.target.id][0];
        }
      } else if (this.shiftStatus === true && this.CapsLockStatus === true) {
        if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
          this.printedText.value += AllCodesAndKeys[event.target.id][0];
        } else {
          this.printedText.value += AllCodesAndKeys[event.target.id][1];
        }

        this.shiftStatus = false;
        ShiftLeft.classList.remove('active');
        ShiftRight.classList.remove('active');
      }
    } else if (this.language === 'RU' && AllCodesAndKeys[event.target.id][1] !== 'controlButton') {
      if (this.shiftStatus === false && this.CapsLockStatus === false) {
        this.printedText.value += AllCodesAndKeys[event.target.id][2];
      } else if (this.shiftStatus === true && this.CapsLockStatus === false) {
        this.printedText.value += AllCodesAndKeys[event.target.id][3];

        this.shiftStatus = false;
        ShiftLeft.classList.remove('active');
        ShiftRight.classList.remove('active');
      } else if (this.shiftStatus === false && this.CapsLockStatus === true) {
        if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
          this.printedText.value += AllCodesAndKeys[event.target.id][3];
        } else {
          this.printedText.value += AllCodesAndKeys[event.target.id][2];
        }
      } else if (this.shiftStatus === true && this.CapsLockStatus === true) {
        if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
          this.printedText.value += AllCodesAndKeys[event.target.id][2];
          this.shiftStatus = false;
          ShiftLeft.classList.remove('active');
          ShiftRight.classList.remove('active');
        } else {
          this.printedText.value += AllCodesAndKeys[event.target.id][3];
          this.shiftStatus = false;
          ShiftLeft.classList.remove('active');
          ShiftRight.classList.remove('active');
        }
      }
    } else if (event.target.id === 'CapsLock') {
      if (this.CapsLockStatus === false) {
        this.CapsLockStatus = true;
      } else {
        this.CapsLockStatus = false;
      }
    } else if (AllCodesAndKeys[event.target.id][0] === 'Shift') { // придумать обработку активного шифта
      if (this.shiftStatus === true) {
        this.shiftStatus = false;
        ShiftLeft.classList.remove('active');
        ShiftRight.classList.remove('active');
      } else {
        this.shiftStatus = true;
      }
    } else if (event.target.id === 'Backspace') {
      this.printedText.value = this.printedText.value.slice(0, -1);
    } else if (event.target.id === 'Enter') {
      this.printedText.setRangeText('\n', this.printedText.selectionStart, this.printedText.selectionEnd, 'end');
    } else if (event.target.id.match(/(Arrow).*/)) {
      this.printedText.value += event.target.innerHTML;
    }
  }

  MouseUp(event) {
    if (event.target.id !== 'CapsLock' && !event.target.id.match(/.*(Shift)/)) {
      if (event.target.classList !== undefined) {
        event.target.classList.remove('active');
      }
      if (event.target.parentNode.classList !== undefined) {
        event.target.parentNode.classList.remove('active');
      }
    }
    this.printedText.focus();
  }

  MouseOut(event) {
    if (event.target.id !== 'CapsLock' && !event.target.id.match(/.*(Shift)/) && event.target !== null) {
      event.target.classList.remove('active');
    }
    this.printedText.focus();
  }

  setLanguage() {
    if (localStorage.getItem('languageAAA') === undefined) {
      localStorage.setItem('languageAAA', 'EN');
    }

    if (localStorage.getItem('languageAAA') === 'EN') {
      this.language = 'EN';
      this.ALL_KEYS = ENline1.concat(ENline2, ENline3, ENline4, line5);
    } else if (localStorage.getItem('languageAAA') === 'RU') {
      this.language = 'RU';
      this.ALL_KEYS = RUline1.concat(RUline2, RUline3, RUline4, line5);
    }
  }

  changeLanguage() {
    if (this.language === 'RU') {
      this.language = 'EN';
      localStorage.languageAAA = 'EN';
      this.ALL_KEYS = ENline1.concat(ENline2, ENline3, ENline4, line5);
    } else if (this.language === 'EN') {
      this.language = 'RU';
      localStorage.languageAAA = 'RU';
      this.ALL_KEYS = RUline1.concat(RUline2, RUline3, RUline4, line5);
    }

    this.currentLanguage.innerText = this.language;
    const allButtons = this.myKeyboard.querySelectorAll('.button');
    allButtons.forEach((elem) => {
      elem.remove();
    });
    this.createButtons();
    this.addButtonText();
  }
}


const NewKeyboard = new Keyboards();

NewKeyboard.setLanguage();
NewKeyboard.createAreas();
NewKeyboard.createButtons();
NewKeyboard.addButtonText();
NewKeyboard.addListeners();
