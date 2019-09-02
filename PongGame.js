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

// pc racket variables
let xracket2= 585;
let yracket2= 150;
let racket2Width = 10;
let racket2Height = 90;

//score variables
let myPoints = 0;
let pcPoints = 0;

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

function showRacket(x, y){
  rect(x, y,racketWidth,racketHeight);
}


function verifyCollisionWithRacket(){
  if(xball - radius < xracket + racketWidth && yball - radius < yracket + racketHeight && yball + radius > yracket){
  speedxball *= -1;
  }  
}
function draw() {
  background(0);
  showBall();
  moveBall();
  verifyCollision();
  verifyCollisionWithRacket();
  showRacket(xracket2, yracket2);
  showRacket(xracket, yracket);
  racketMovement();
  includeScore();
}

function racketMovement(){
  if(keyIsDown(UP_ARROW)){
  yracket -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
  yracket += 10;
  }
}

function includeScore(){
  fill(255);
  text(myPoints, 278, 26);
  fill(255);
  text(pcPoints,321, 26);
}
