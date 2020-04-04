'use strict'

export const ENline1 = [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], 'Backspace'];
export const ENline2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', ['[', '{'], [']', '}'], ['\\', '|']];
export const ENline3 = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', [';', ':'], ['\'', '"'], 'ENTER'];
export const ENline4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', [',', '<'], ['.', '>'], ['/', '?'], '&uarr;', 'Shift'];
export const line5 = ['Ctrl', 'Win', 'Alt', '&ensp;', 'Alt', 'Ctrl', ' &larr;', '&darr;', '&rarr;'];

export const RUline1 = ['Ё', ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], 'Backspace'];
export const RUline2 = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', ['\\', '/']];
export const RUline3 = ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER'];
export const RUline4 = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ['.', ','], '&uarr;', 'Shift'];

export const AllCodesAndKeys = {

  Backquote: ['`', '~', 'ё', 'Ё'],
  Digit1: ['1', '!', '1', '!'],
  Digit2: ['2', '@', '2', '"'],
  Digit3: ['3', '#', '3', '№'],
  Digit4: ['4', '$', '4', ';'],
  Digit5: ['5', '%', '5', '%'],
  Digit6: ['6', '^', '6', ':'],
  Digit7: ['7', '&', '7', '?'],
  Digit8: ['8', '*', '8', '*'],
  Digit9: ['9', '(', '9', '('],
  Digit0: ['0', ')', '0', ')'],
  Minus: ['-', '_', '-', '_'],
  Equal: ['=', '+', '=', '+'],
  Backspace: ['Backspace', 'controlButton'],

  Tab: ['    ', '    ', '    ', '    '],
  KeyQ: ['q', 'Q', 'й', 'Й'],
  KeyW: ['w', 'W', 'ц', 'Ц'],
  KeyE: ['e', 'E', 'у', 'У'],
  KeyR: ['r', 'R', 'к', 'К'],
  KeyT: ['t', 'T', 'е', 'Е'],
  KeyY: ['y', 'Y', 'н', 'Н'],
  KeyU: ['u', 'U', 'г', 'Г'],
  KeyI: ['i', 'I', 'ш', 'Ш'],
  KeyO: ['o', 'O', 'щ', 'Щ'],
  KeyP: ['p', 'P', 'з', 'З'],
  BracketLeft: ['[', '{', 'х', 'Х'],
  BracketRight: [']', '}', 'ъ', 'Ъ'],
  Backslash: ['\\', '|', '\\', '/'],

  CapsLock: ['CapsLock', 'controlButton'],
  KeyA: ['a', 'A', 'ф', 'Ф'],
  KeyS: ['s', 'S', 'ы', 'Ы'],
  KeyD: ['d', 'D', 'в', 'В'],
  KeyF: ['f', 'F', 'а', 'А'],
  KeyG: ['g', 'G', 'п', 'П'],
  KeyH: ['h', 'H', 'р', 'Р'],
  KeyJ: ['j', 'J', 'о', 'О'],
  KeyK: ['k', 'K', 'л', 'Л'],
  KeyL: ['l', 'L', 'д', 'Д'],
  Semicolon: [';', ':', 'ж', 'Ж'],
  Quote: ['\'', '"', 'э', 'Э'],
  Enter: ['<br />', 'controlButton'],

  ShiftLeft: ['Shift', 'controlButton'],
  KeyZ: ['z', 'Z', 'я', 'Я'],
  KeyX: ['x', 'X', 'ч', 'Ч'],
  KeyC: ['c', 'C', 'с', 'С'],
  KeyV: ['v', 'V', 'м', 'М'],
  KeyB: ['b', 'B', 'и', 'И'],
  KeyN: ['n', 'N', 'т', 'Т'],
  KeyM: ['m', 'M', 'ь', 'Ь'],
  Comma: [',', '<', 'б', 'Б'],
  Period: ['.', '>', 'ю', 'Ю'],
  Slash: ['/', '?', '.', ','],
  ArrowUp: ['&uarr;', 'controlButton'],
  ShiftRight: ['Shift', 'controlButton'],

  ControlLeft: ['Control', 'controlButton'],
  MetaLeft: ['Meta', 'controlButton'],
  AltLeft: ['Alt', 'controlButton'],
  Space: [' ', ' ', ' ', ' '],
  AltRight: ['Alt', 'controlButton'],
  ControlRight: ['Control', 'controlButton'],
  ArrowLeft: ['&larr;', 'controlButton'],
  ArrowDown: ['&darr;', 'controlButton'],
  ArrowRight: ['&rarr;', 'controlButton'],
};

export const codesArray = Object.keys(AllCodesAndKeys);

export const buttonsLength = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 90,
  90, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  98, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 98,
  146, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  50, 50, 50, 370, 50, 50, 50, 50, 50];