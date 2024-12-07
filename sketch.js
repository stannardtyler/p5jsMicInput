let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
  background(0);
}

function draw() {
  noFill();
  strokeWeight(2);
  stroke(255);
  
  background(0, 10);

  let vol = mic.getLevel();
  circle(width / 2, height / 2, vol * width * 3);
}

function mousePressed() {
  userStartAudio();

  ellipse(random(width), random(height), 20, 20);
}
