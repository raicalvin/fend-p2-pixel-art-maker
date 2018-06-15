// Store the 'Submit' and 'Color' buttons in a variable
let submitButton = document.getElementsByTagName('submit');
console.log('The submit button: ' + submitButton);
let colorButton = document.getElementById('colorPicker');
let lowerBackground = document.getElementsByClassName('lower-background');

// Store the canvas in a variable
let canvas = document.getElementById('pixelCanvas');

let formItem = document.getElementById('sizePicker');

formItem.addEventListener('submit', function(e) {
  e.preventDefault();
  let gridHeightInput = document.getElementById('inputHeight').value;
  let gridWidthInput = document.getElementById('inputWidth').value;
  makeGrid(gridHeightInput, gridWidthInput);
});

canvas.addEventListener('click', colorSquare);
colorButton.addEventListener('input', updateBackgroundColor);

function makeGrid(row, col) {
  // Clear the old canvas when user clicks submit
  canvas.innerHTML = '';
  for (let i = 0; i < row; i++) {
    let tempRow = document.createElement('tr');
    for (let j = 0; j < col; j++) {
      tempRow.appendChild(document.createElement('td'));
    }
    console.log(tempRow);
    canvas.appendChild(tempRow);
  }
}

function colorSquare(e) {
  e.target.bgColor = colorButton.value;
}

function updateBackgroundColor(e) {
  console.log('The button color got pressed...');
  console.log(lowerBackground);
  lowerBackground[0].style.backgroundColor = colorButton.value;
  console.log(`The color is ${lowerBackground[0].bgColor}`);
}
