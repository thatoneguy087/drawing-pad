//function to create the grid. Fills the grid up with the appropriate number of pixels based on our pixel size
function createGrid(resolution) {
  const pixelSize = 600/resolution;
  const totalPixels = Math.pow(resolution, 2);
  for(let i = 0; i < totalPixels; i ++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = `${pixelSize}px`;
    grid.appendChild(pixel);
  }
}

//completely resets the grid, getting rid of all the pixels, so that a new grid can be made to fill in its place
function resetGrid() {
  let child = grid.lastElementChild;
  while (child) {
    grid.removeChild(child);
    child = grid.lastElementChild;
  }
}

//erases pixel colors
function clearGrid() {
  const pixels = [...document.querySelectorAll('.pixel')];
  pixels.forEach(pixel => pixel.style.backgroundColor = '');
}

function draw(e) {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    if(e.target === pixel) {
      if(color === 'random') {
        e.target.style.backgroundColor = randomRGBColor();
      } else {
        e.target.style.backgroundColor = color;
      }
    }
  });
}

//check to see if a given number is an integer or not
function isInt(num) {
  if(num == Math.floor(num)) {
    return true;
  }
  return false;
}

//generates a random RGB color and gives us a value we can use in CSS
function randomRGBColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}

//UI declarations and setting initial values for our grid and color
const grid = document.querySelector('.grid');
const gridSizeButton = document.querySelector('#grid-size');
const clearGridButton = document.querySelector('#clear-grid');
const colorOptions = document.querySelectorAll('.color-options button')
let defaultGridSize = 16;
let color = '#070600';
createGrid(defaultGridSize);


grid.addEventListener('mousedown', e => {
        if(color === 'random') {
        e.target.style.backgroundColor = randomRGBColor();
      } else {
        e.target.style.backgroundColor = color;
      }
  grid.addEventListener('mouseover', draw);
});
window.addEventListener('mouseup', () => {
  grid.removeEventListener('mouseover', draw);
});

//Event listeners to our color options to change our current color
colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    colorOptions.forEach(option => {
      option.classList.remove('active');
    });
    option.classList.add('active');
    if(option.id === 'normal'){
      randomFlag = false;
      color = '#070600';
    } else if (option.id === 'transparent') {
      randomFlag = false;
      color = '';
    } else if (option.id === 'random'){
      color = 'random';
    }
  });
});

//Clears grid, erasing the pixel colors
clearGridButton.addEventListener('click', clearGrid);

//resize our grid with a valid number. This will reset the grid.
gridSizeButton.addEventListener('click', () => {
  const newSize = prompt('Enter New Size', 16);
  const newSizeInt = isInt(newSize);
  if(newSize === null) {
    return;
  } else if(newSizeInt && (newSize <= 100 && newSize > 0)) {
    resetGrid();
    createGrid(newSize);
  } else {
    alert('Grid must be a whole number between 1 and 100.');
  }
});