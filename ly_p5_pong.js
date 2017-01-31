var ball, paddle;
var gamestate = 'start';
var bg = [138, 105, 212];

function setup() {
  createCanvas(240, 360);
  drawBg();
  ball = new Ball(width / 2, height / 3);
  ball.show();
  paddle = new Paddle(width / 2, height);
  paddle.show();
  textAlign(CENTER);
  textSize(12);
  text('Click anywhere to start', width / 2, height / 2);
}

function draw() {
  if (gamestate == 'playing') {
    noCursor();
    drawBg();
    ball.show();
    ball.move();
    paddle.show();
    paddle.move();
  }
  if (gamestate == 'over') {
    cursor(ARROW);
    drawBg();
    textAlign(CENTER);
    textSize(16);
    text('GAME OVER', width / 2, height / 2 - 12);
    textSize(12);
    text('Click anywhere to play again', width / 2, height / 2 + 12);
  }
}

function drawBg() {
  background(bg[0], bg[1], bg[2]);
}

function newDir() {
  var d = random(0, 10);
  if (d < 5) return random(3, 7);
  else return random(-3, -7);
}

function mouseClicked() {
  gamestate = 'playing';
}

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.s = 20;
  this.xdir = 5;
  this.ydir = 6;
  this.show = function() {
    noStroke();
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.s, this.s);
  }
  this.move = function() {
    this.x += this.xdir;
    this.y += this.ydir;
    if (this.y >= height - paddle.h / 2) {
      if (this.x > paddle.x && this.x - paddle.x < paddle.w / 2) {
        this.ydir = -5;
        this.xdir = newDir();
      } else if (this.x < paddle.x && paddle.x - this.x < paddle.w / 2) {
        this.ydir = -5;
        this.xdir = newDir();
      } else {
        gamestate = 'over';
        this.x = width / 2;
        this.y = height / 3;
      }
    }
    if (this.y <= 0) {
      this.ydir = 5;
      this.xdir = newDir();
    }
    if (this.x >= width) {
      this.xdir = -5;
    }
    if (this.x <= 0) {
      this.xdir = 5;
    }
  }
}

function Paddle(x, y) {
  this.x = x;
  this.y = y;
  this.w = 50;
  this.h = 15;
  this.r = 5;
  this.show = function() {
    noStroke();
    fill(255, 255, 255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h, this.r);
  }
  this.move = function() {
    this.x = mouseX;
  }
}