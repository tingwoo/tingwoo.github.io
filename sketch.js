var cnv;
let myShader;

function preload() {
  // load each shader file (don't worry, we will come back to these!)
  myShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.position(0, 0); 
}

function draw() {
  shader(myShader);
  myShader.setUniform('uResolution', windowWidth > windowHeight ? [windowWidth/windowHeight, 1] : [1, windowHeight/windowWidth]);
  myShader.setUniform('uTime', millis() / 1000.0);
  
  // background(220, 0, 0);

  rect(0, 0, windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}