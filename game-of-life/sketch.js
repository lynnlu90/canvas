let grid;
let next;
let cols;
let rows;
let resolution = 10;
let min = 30;
let remain = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(6);
  cols = width / resolution;
  rows = height / resolution;
  initiateGame();
}

function initiateGame() {
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
  	for (let j = 0; j < rows; j++) {
    	grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background('blue');

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        let colour = random(10);
        if (colour < 5) fill('red');
        else fill('yellow');
        noStroke();
        ellipse(x, y, resolution - 2, resolution - 2);
      }
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] == 1) remain++;
    }
  }
  if (remain < 120) {
    console.log('you died');
    initiateGame();
  } else remain = 0;
  console.log(remain);

  next = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      let neighbours = countNeighbours(grid, i, j);
      if (state == 0 && neighbours == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbours < 2 || neighbours > 3)) {
        next[i][j] = 0;
      } else next[i][j] = state;
    }
  }

  grid = next;

}

function countNeighbours(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {

      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;

      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

function make2DArray(cols, rows) {
	let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
  	arr[i] = new Array(rows);
  }
  return arr;
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for(var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}
