
//ball size variables
let xball = 300;
let yball = 200;
let diameter = 15;
let radius = diameter/2;

//ball speed variables
let speedyball = 3;
let speedxball = 3;


function setup() {
  createCanvas(600, 400);
}

function showball(){
  circle (xball,yball, diameter);
}

function moveball(){
  xball += speedxball;
  yball += speedyball;
}

function verifycollision () {
 if (xball + radius > width || xball - radius < 0) {
    speedxball *= -1;
  }
  
  if (yball + radius > height || yball - radius < 0) {
    speedyball *= -1; 
  }
}

function draw() {
  background(0);
  showball();
  moveball();
  verifycollision ();
}

