
let hu = 0;
let speed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(HSB);
  strokeWeight(10);

  sliderAmount = createSlider(100, 5000, 2000, 100);
  sliderIntensity = createSlider(0, 1, 0.5, 0.01);
  sliderOrigin = createSlider(0, 1000, 30, 1);
  sliderCurve = createSlider(0, 2, 0.9, 0.001);
  sliderSpeed = createSlider(-0.03, 0.03, 0, 0.001);
}

function draw() {
  clear();
  translate(windowWidth/2, windowHeight/2);

  let amount = sliderAmount.value();
  let intensity = sliderIntensity.value();
  let origin = sliderOrigin.value();
  let curve = sliderCurve.value();
  speed += sliderSpeed.value();

  for (let i = 0; i <= amount; i++) {
    stroke(hu, 255, 255);

    circlePos = (i + speed) * curve;
    hu += 0.0003;
    if (hu > 255) {
      hu = 0;
    }
    let x = cos(circlePos) * ((i - (i / intensity))**2 + origin);
    let y = sin(circlePos) * ((i - (i / intensity))**2 + origin);
    ellipse(x, y, 5, 5);
  }
}