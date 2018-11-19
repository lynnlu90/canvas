function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.neibourCount = 0;
  if (random(1) < 0.5) this.bee = true;
  else this.bee = false;

  this.revealed = false;

}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
	rect(this.x, this.y, this.w, this.w);
  if (this.revealed) {
    if (this.bee) {
      stroke(0);
      fill(127);
      ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
    } else {
      noStroke();
      fill(227);
      rect(this.x, this.y, this.w, this.w);
      textAlign(CENTER);
      fill(0);
      text(this.neighbourCount, this.x, this.y);
    }
  }
}

Cell.prototype.countNeighbours = function() {
  if (this.bee) {
    return;
  }
  var total = 0;
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      var neighbour = grid[this.i + i][this.j + j];
      if (neighbour.bee) {
        total++;
      }
    }
  }
  this.neibourCount = total;
}

Cell.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function() {
  this.revealed = true;
}
