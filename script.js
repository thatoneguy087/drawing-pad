//create reference to grid
//establish base size of 16 pixels for the grid
//create function to create grid based on grid size
  //clear current grid
  //pixel size will be grid size(800) divided by resolution(16) in the initial case, our grid will be 16 x 16
  //find out how many pixels we need by multiplying the grid dimensions together
  //add new pixels to the grid
function createGrid(resolution) {
  const pixelSize = 800/resolution;
  const totalPixels = Math.pow(resolution, 2);
  for(let i = 0; i < totalPixels; i ++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = `${pixelSize}px`;
    grid.appendChild(pixel);
  }
  enablePixels();
}
function clearGrid() {
  let child = grid.lastElementChild;
  while (child) {
    grid.removeChild(child);
    child = grid.lastElementChild;
  }
}
function enablePixels() {
  const pixels = [...document.querySelectorAll('.pixel')];
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
      pixel.classList.add('colored');
    });
  });
}

let grid = document.querySelector('.grid');
const gridSizeButton = document.querySelector('#grid-size');
let defaultGridSize = 16;

createGrid(defaultGridSize);

//Add an event listener to pixels, waiting for a hover event
//upon a hover event, color in the pixel. 
gridSizeButton.addEventListener('click', () => {
  const newSize = prompt('Enter New Size', 16);
  if(newSize === null) {
    return;
  } else if(newSize <= 100 && newSize > 0) {
    clearGrid();
    createGrid(newSize);
  } else {
    alert('not valid!');
  }
});

