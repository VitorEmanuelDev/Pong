//ball size variables
let xball = 300;
let yball = 200;
let diameter = 15;
let radius = diameter/2;

//ball speed variables
let speedyball = 6;
let speedxball = 6;

//racket variables
let xracket = 5;
let yracket = 150;
let racketWidth = 10;
let racketHeight = 90;

// pc racket variables
let xracket2= 585;
let yracket2= 150;
let speedy2;


//score variables
let myPoints = 0;
let pcPoints = 0;

//function blocks
function draw() {
  background(0);
  showBall();
  moveBall();
  verifyCollision();
  verifyCollisionWithRacket(xracket, yracket);
  verifyCollisionWithRacket(xracket2, yracket2);
  collideRectCircle(xracket, yracket);
  collideRectCircle(xracket2, yracket);
  showRacket(xracket2, yracket2);
  showRacket(xracket, yracket);
  racketMovement();
  includeScore();
  movePcRacket();
  score();
}

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


function verifyCollisionWithRacket(x, y){
  collision = collideRectCircle(x, y, racketWidth, racketHeight, xball, yball, radius);
  if(collision){
  speedxball *= -1;
  }  
}


function racketMovement(){
  if(keyIsDown(UP_ARROW)){
  yracket -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
  yracket += 10;
  }
}

function movePcRacket(){
  speedy2 = yball - yracket2 - racketWidth / 2 -30;
  
  yracket2 += speedy2
}

function includeScore(){
  textAlign(CENTER);
  textSize(16);
  fill(128,0,128);
  rect(140, 10, 40, 20);
  fill(128,0,128);
  rect(440, 10, 40, 20);
  fill(0,255,255)
  text(pcPoints,450, 26);
  text(myPoints, 150, 26);
}

function score(){
  if(xball > 591){
  myPoints +=1;
  }
  if(xball < 9){
  pcPoints += 1;
  }
}
