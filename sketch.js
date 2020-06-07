var r = 0;
var g = 230;
var b = 255;
let time = 0;
let wave = [];
var slider1,slider2,slider3,slider4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider1 = createSlider(0, 255, 50, 0.1);
  slider1.position(width / 2.5, height - 50);
  slider1.style('width','300px');
  slider2 = createSlider(0, 255, 50, 0.1);
  slider2.position(width / 2.5, height - 25);
  slider2.style('width','300px');
  slider3 = createSlider(0, 255, 50, 0.1);
  slider3.position(width / 2.5, height - 75);
  slider3.style('width','300px');
  slider4 = createSlider(0, 25, 1, 1);
  slider4.position(width / 2.5, height - 100);
  slider4.style('width','300px');
  
}

function draw() {
  background(0);
  r = map(slider3.value(), 0, 255, 0, 255);
  b = map(slider2.value(), 255, 0, 255, 0);
  g = map(slider1.value(), 0, 255, 0, 255);
  
  translate(250, height / 2);
  let x = 0;
  let y = 0;

  for (let i = 0; i < slider4.value(); i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = 100 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    noFill();
    stroke(r, g, b);
    ellipse(prevx, prevy, radius * 2);

    noFill();
    stroke(r, g, b);
    strokeWeight(2);
    ellipse(x, y, 24);

    line(prevx, prevy, x, y);
  }

  wave.unshift(y);

  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;

  if (wave.length > width) {
    wave.pop();
  }
}