import lang from './translate.js';

const DEFAULT_LANG = 'en';
let langOn = localStorage.getItem('language') || DEFAULT_LANG;

let keyCapsLock = false;

let cursorInput = 0;
let entryFieldTexts = '';

const body = document.querySelector('body');

function allContent() {
  const htmlContent = `<div class="container">
                        <textarea name="textarea" class="textarea" autofocus></textarea>
                        <div class="keyboards">
                            <div class="row-1">
                                <div class="key letter_key symbol" data-lg="backquote" id='Backquote'>\`</div>
                                <div class="key digit" id="Digit1">1</div>
                                <div class="key digit" id="Digit2">2</div>
                                <div class="key digit" id="Digit3">3</div>
                                <div class="key digit" id="Digit4">4</div>
                                <div class="key digit" id="Digit5">5</div>
                                <div class="key digit" id="Digit6">6</div>
                                <div class="key digit" id="Digit7">7</div>
                                <div class="key digit" id="Digit8">8</div>
                                <div class="key digit" id="Digit9">9</div>
                                <div class="key digit" id="Digit0">0</div>
                                <div class="key symbol" id="Minus">-</div>
                                <div class="key symbol" id="Equal">=</div>
                                <div class="key control-key centr backspace" id="Backspace">backspace</div>
                            </div>
                            <div class="row-2">
                                <div class="key control-key tab" id="Tab">tab</div>
                                <div class="key letter_key" data-lg="q" id="KeyQ">q</div>
                                <div class="key letter_key" data-lg="w" id="KeyW">w</div>
                                <div class="key letter_key" data-lg="e" id="KeyE">e</div>
                                <div class="key letter_key" data-lg="r" id="KeyR">r</div>
                                <div class="key letter_key" data-lg="t" id="KeyT">t</div>
                                <div class="key letter_key" data-lg="y" id="KeyY">y</div>
                                <div class="key letter_key" data-lg="u" id="KeyU">u</div>
                                <div class="key letter_key" data-lg="i" id="KeyI">i</div>
                                <div class="key letter_key" data-lg="o" id="KeyO">o</div>
                                <div class="key letter_key" data-lg="p" id="KeyP">p</div>
                                <div class="key letter_key symbol" data-lg="[" id="BracketLeft">[</div>
                                <div class="key letter_key symbol" data-lg="]" id="BracketRight">]</div>
                                <div class="key symbol" id="Backslash">\\</div>
                                <div class="key control-key del" id="Delete">del</div>
                            </div>
                            <div class="row-3">
                                <div class="key control-key centr capslock" id="CapsLock">caps lock</div>
                                <div class="key letter_key" data-lg="a" id="KeyA">a</div>
                                <div class="key letter_key" data-lg="s" id="KeyS">s</div>
                                <div class="key letter_key" data-lg="d" id="KeyD">d</div>
                                <div class="key letter_key" data-lg="f" id="KeyF">f</div>
                                <div class="key letter_key" data-lg="g" id="KeyG">g</div>
                                <div class="key letter_key" data-lg="h" id="KeyH">h</div>
                                <div class="key letter_key" data-lg="j" id="KeyJ">j</div>
                                <div class="key letter_key" data-lg="k" id="KeyK">k</div>
                                <div class="key letter_key" data-lg="l" id="KeyL">l</div>
                                <div class="key letter_key symbol" data-lg=";" id="Semicolon">;</div>
                                <div class="key letter_key symbol" data-lg="quotes" id="Quote">'</div>
                                <div class="key control-key centr enter" id="Enter">enter</div>
                            </div>
                            <div class="row-4">
                                <div class="key control-key centr shift" id="ShiftLeft">shift</div>
                                <div class="key letter_key" data-lg="z" id="KeyZ">z</div>
                                <div class="key letter_key" data-lg="x" id="KeyX">x</div>
                                <div class="key letter_key" data-lg="c" id="KeyC">c</div>
                                <div class="key letter_key" data-lg="v" id="KeyV">v</div>
                                <div class="key letter_key" data-lg="b" id="KeyB">b</div>
                                <div class="key letter_key" data-lg="n" id="KeyN">n</div>
                                <div class="key letter_key" data-lg="m" id="KeyM">m</div>
                                <div class="key letter_key symbol" data-lg="comma" id="Comma">,</div>
                                <div class="key letter_key symbol" data-lg="period" id="Period">.</div>
                                <div class="key symbol" data-lg="slash" id="Slash">/</div>
                                <div class="key control-key arrow-up arrow" id="ArrowUp">▲</div>
                                <div class="key control-key centr shift" id="ShiftRight">shift</div>
                            </div>
                            <div class="row-5">
                                <div class="key control-key" id="ControlLeft">ctrl</div>
                                <div class="key control-key" id="MetaLeft">win</div>
                                <div class="key control-key" id="AltLeft">alt</div>
                                <div class="key space" id="Space"> </div>
                                <div class="key control-key" id="AltRight">alt</div>
                                <div class="key control-key arrow" id="ArrowLeft">◄</div>
                                <div class="key control-key arrow" id="ArrowDown">▼</div>
                                <div class="key control-key arrow" id="ArrowRight">►</div>
                                <div class="key control-key" id="ControlRight">ctrl</div>
                            </div>
                        </div>
                        <div class="addition">
                            <p>Смена языка: ctrl + alt</p>
                        </div>
                    </div>`;

  body.insertAdjacentHTML('afterbegin', htmlContent);
}
allContent();
