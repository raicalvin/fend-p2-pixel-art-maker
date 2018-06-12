// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let submitButton = document.getElementsByTagName("submit");
let colorButton = document.getElementById('colorPicker');
let canvas = document.getElementById('pixelCanvas');
console.log("The input type is: ");


let formItem = document.getElementById('sizePicker');
console.log(`The formItem is ${formItem}`);
formItem.addEventListener('submit', function(evt) {
  evt.preventDefault();
  let gridHeightInput = document.getElementById("inputHeight").value;
  let gridWidthInput = document.getElementById("inputWidth").value;
  console.log(gridHeightInput);
  console.log(submitButton);
  console.log('Yay! The form is now not refreshing the page!');
  console.log('Now calling the makeGrid() method to create the table...');
  makeGrid(gridHeightInput, gridWidthInput);
});

canvas.addEventListener('click', colorSquare)



function makeGrid(row, col) {
  // Your code goes here!
  // Clear the old canvas when user clicks submit again
  canvas.innerHTML = '';
  for (let i = 0; i < row; i++) {
    let tempRow = document.createElement('tr');
    for (let j = 0; j < col; j++) {
      let tempCell = document.createElement('td');
      tempRow.appendChild(tempCell);
    }
    canvas.appendChild(tempRow);
  }
}

function colorSquare(event) {
  console.log(`The color is ${colorButton.value}`);
  console.log(event);
  event.target.bgColor = colorButton.value;
}
