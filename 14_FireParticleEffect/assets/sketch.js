
let particles = [];
let cWidth = 1280;
let cHeight = 720;

function setup() {
  createCanvas(cWidth, cHeight);
}

function draw() {
  background(0);
  for (let i = 0; i < 2; i++) {
    particles.push(new particleSystem());
  }
  console.log(particles)
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}


class particleSystem {
  constructor() {
    this.x = cWidth / 2;
    this.y = cHeight;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.diameter = 30;
    this.red = 255;
    this.green = 0;
    this.blue = 0;
    this.alpha = 255;
  }

  show() {
    noStroke();
    fill(this.red, this.green, this.blue, this.alpha);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.green += 2.3;
    this.diameter -= 0.13;
    this.alpha -= 2;
  }

  finished() {
    return this.alpha <= 0;
  }
}