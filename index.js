import { getResistorOhms } from './resistor.js';
const band1Div = document.getElementById('color0');
const band2Div = document.getElementById('color1');
const multiplierDiv = document.getElementById('color2');
const toleranceDiv = document.getElementById('color3');
const band1 = document.getElementById('b0');
const band2 = document.getElementById('b1');
const multiplier = document.getElementById('b2');
const tolerance = document.getElementById('b3');
const answer = document.querySelector('.answer');

let bands = {
  color1: 'red',
  color2: 'green',
  multiplier: 'violet',
  tolerance: 'gold'
};

[].forEach.call(band1Div.childNodes, (child) => {
  child.onclick = () => {
    const color = child.innerText.toLowerCase();
    band1.className = 'band ' + color;
    bands.color1 = color;
    answer.innerText = getResistorOhms(bands);
  }
});

[].forEach.call(band2Div.childNodes, (child) => {
  child.onclick = () => {
    const color = child.innerText.toLowerCase();
    band2.className = 'band ' + color;
    bands.color2 = color;
    answer.innerText = getResistorOhms(bands);
  }
});

[].forEach.call(multiplierDiv.childNodes, (child) => {
  child.onclick = () => {
    const color = child.innerText.toLowerCase();
    multiplier.className = 'band ' + color;
    bands.multiplier = color;
    answer.innerText = getResistorOhms(bands);
  }
});
[].forEach.call(toleranceDiv.childNodes, (child) => {
  child.onclick = () => {
    const color = child.innerText.toLowerCase();
    tolerance.className = 'band ' + color;
    bands.tolerance = color;
    answer.innerText = getResistorOhms(bands);
  }
});