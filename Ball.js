let xball = 300;
let yball = 200;
let diameter = 15;
let speedyball = 3;
let speedxball = 3;
let radius = diameter/2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle (xball,yball, diameter);
  xball += speedxball;
  yball += speedyball;
  
  if (xball + radius > width || xball - radius < 0) {
    speedxball *= -1;
  }
  
  if (yball + radius > height || yball - radius < 0) {
    speedyball *= -1; 
  }
}
