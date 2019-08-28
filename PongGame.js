
//ball size variables
let xball = 300;
let yball = 200;
let diameter = 15;
let radius = diameter/2;

//ball speed variables
let speedyball = 3;
let speedxball = 3;

//racket variables
let xracket = 5;
let yracket = 150;
let racketWidth = 10;
let racketHeight = 90;

function setup() {
  createCanvas(600, 400);
}

function showBall(){
  circle (xball,yball, diameter);
}

function moveBall(){
  xball += speedxball;
  yball += speedyball;
}

function verifyCollision () {
 if (xball + radius > width || xball - radius < 0) {
    speedxball *= -1;
  }
  
  if (yball + radius > height || yball - radius < 0) {
    speedyball *= -1; 
  }
}

function showRacket(){
  rect(xracket,yracket,racketWidth,racketHeight);
}
function draw() {
  background(0);
  showBall();
  moveBall();
  verifyCollision ();
  showRacket ();
  racketMovement()
}

function racketMovement(){
  if(keyIsDown(UP_ARROW)){
  yracket -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
  yracket += 10;
  }
  
}

