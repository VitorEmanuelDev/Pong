let xball = 300;
let yball = 200;
let diameter = 15;
let speedyball = 6;
let speedxball = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle (xball,yball, diameter);
  xball += speedxball;
  yball += speedyball;
  
  if (xball > width || xball < 0) {
    speedxball *= -1;
  }
  
  if (yball > height || yball < 0) {
    speedyball *= -1; 
  }
}
