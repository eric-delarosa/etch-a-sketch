const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

const gridArea = document.querySelector('.grid-area');

const slider = document.getElementById('gridRange');
const output = document.getElementById('squareValue');

slider.onchange = (e) => changeSize(e.target.value);

const squareValue = document.getElementById('squareInput');

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => clear());
const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", () => eraser());
const grayscaleButton = document.querySelector("#grayscale");
grayscaleButton.addEventListener("click", () => draw());
const colorButton = document.querySelector('#color');
colorButton.addEventListener("click", () => color());


function setupGrid(size) {
    gridArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "grid-square");
        gridArea.appendChild(square);
    }
    
}

function reloadGrid() {
  clearGrid();
  setupGrid(currentSize);
}

function clearGrid() {
  gridArea.innerHTML = '';
}

function updateSizeValue(value) {
    output.textContent = `${value} x ${value}`
}

function changeSize(value){
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid(); 
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function draw() {
    const squares = document.querySelectorAll(".grid-square");
    for (let square of squares) {
        square.addEventListener("mouseover", () => {
            square.classList.add("colored-gray");
            square.removeAttribute("style");
        });
    }
}

function eraser() {
    const squares = document.querySelectorAll(".grid-square");
    for (let square of squares) {
      square.addEventListener("mouseover", () => {
        square.classList.remove("colored-gray");
        square.removeAttribute("style");
      });
    }
}

function clear() {
    const coloredSquares = document.querySelectorAll(".grid-square");
    coloredSquares.forEach(coloredSquare => {
        coloredSquare.classList.remove('colored-gray');
        coloredSquare.removeAttribute('style');
    });
}

function color() {
    const squares = document.querySelectorAll(".grid-square");
    for (let square of squares) {
        square.addEventListener("mouseover", () => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            square.style.cssText = "background-color: #" + randomColor;
        });
    }    
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
    draw();
};