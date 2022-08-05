const gridArea = document.querySelector('.grid-area');

// const slider = document.getElementById('gridRange');
// const output = document.getElementById('squareValue');
// output.textContent = slider.value;

// function getSliderValue() {
//     slider.oninput = function () {
//         output.textContent = this.value;     
//     }
// }

const squareValue = document.getElementById('squareInput');

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => clear());
const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", () => eraser());
const grayscaleButton = document.querySelector("#grayscale");
grayscaleButton.addEventListener("click", () => draw());
const colorButton = document.querySelector('#color');
colorButton.addEventListener("click", () => color());


createGrid(squareValue.value);


function createGrid(numSquares) {
    for (let row = 0; row < numSquares; row++) {
      for (let col = 0; col < numSquares; col++) {
        const square = document.createElement("div");
        square.setAttribute("class", "grid-square");
        gridArea.appendChild(square);
      }
    }
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

draw();