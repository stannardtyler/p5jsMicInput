let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  
  let vol = mic.getLevel()
  circle(width/2, height/2, vol*width*3)
}

function mousePressed() {
  userStartAudio();
}