var cnv;
let myShader;

function preload() {
  // load each shader file (don't worry, we will come back to these!)
  myShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.position(0, 0);
  shader(myShader);
}

function draw() {
  
  background(220, 0, 0);

  rect(0, 0, windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}