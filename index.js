//import { getResistorOhms } from './resistor.js';
const band1Div = document.getElementById('color0');
const band2Div = document.getElementById('color1');
const multiplierDiv = document.getElementById('color2');
const toleranceDiv = document.getElementById('color3');
const band1 = document.getElementById('b0');
const band2 = document.getElementById('b1');
const multiplier = document.getElementById('b2');
const tolerance = document.getElementById('b3');
[].forEach.call(band1Div.childNodes, (child) => {
  child.onclick = () => {
    band1.className = 'box ' + child.innerText.toLowerCase();
  }
});
