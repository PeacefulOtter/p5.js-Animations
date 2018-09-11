
var rotateAngle;
var center;
var snowflakes

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  rotateAngle = 0;
  center = [windowWidth / 2, windowHeight / 2];
  snowflakes = 17;
}

function draw() {
  background(255);
  for (let i = 0; i < snowflakes; i++) {
    color = i * 10;
    new createSnowflakes(i);
  }
  rotateAngle += 0.005;
}




