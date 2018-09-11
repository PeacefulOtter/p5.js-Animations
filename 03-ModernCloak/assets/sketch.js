
var cloak;

let slider;
let sliderRed;
let sliderGreen;
let sliderBlue;

var font;


function preload() {
    font = loadFont('font/ProductSans.ttf');
}


function setup() {
    var canvas = createCanvas(1000, 800);
    canvas.style('display', 'block');
    frameRate(60);
    cloak = new Cloak();

    slider = createSlider(0, 100, 60, 2);
    sliderRed = createSlider(0, 195, 50);
    sliderGreen = createSlider(0, 195, 50);
    sliderBlue = createSlider(0, 100, 50);

    textAlign(CENTER, CENTER);
    textSize(30);
    textFont(font, 30);
}

function draw() {
    background(220);
    text(slider.value(), 970, 770);
    fill(220)

    if (frameCount % slider.value() === 0) {
        cloak.update();
    }
    cloak.show(sliderRed.value(), sliderGreen.value(), sliderBlue.value());

}

