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
}

let grid = document.querySelector('.grid');
let gridSize = 16;

createGrid(16);
