var cnv;
let myShader;
let rand;
// let noiseTexture;

function preload() {
    // load each shader file (don't worry, we will come back to these!)
    myShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
    cnv = createCanvas(windowWidth, windowHeight, WEBGL);
    cnv.position(0, 0);
    rand = random(0, 300);
    // noiseTexture = loadImage("noise.jpg");
}

function draw() {
    shader(myShader);
    myShader.setUniform(
        "uResolution",
        width > height ? [width / height, 1] : [1, height / width]
    );
    myShader.setUniform("uTime", millis() / 1000.0 + rand);
    myShader.setUniform("uRunningTime", millis() / 1000.0);
    // myShader.setUniform('uTex', noiseTexture);

    rect(0, 0, windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
