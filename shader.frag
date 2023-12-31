precision mediump float;

varying vec2 vTexCoord;
uniform vec2 uResolution;
uniform float uTime;
uniform float uRunningTime;
// uniform sampler2D uTex;

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b * cos(6.28318 * (c * t + d));
}

float squareLength(vec2 vector) {
    return dot(vector, vector);
}

// float sigmoid(float x) {
//     return 1.0 / (1.0 + exp(-(2.0 * x - 5.0)));
// }

void main() {
    vec2 uv = vTexCoord * uResolution;

    // float a = uv.x * 0.1 + uTime / 20.0;
    // float r = (uv.y + 1.0) * 0.25 + 0.5; 
    // vec2 noisePos = vec2(cos(a), sin(a)) * r;
    // noisePos = 0.5 * (noisePos + vec2(1.0, 1.0));
    // vec4 noise = texture2D(uTex, noisePos);

    vec2 point1 = vec2(cos(uTime * 0.3756), sin(uTime * 0.4756)) + vec2(0.5, 0.5);
    vec2 point2 = vec2(cos(uTime * 0.5223), sin(uTime * 0.2223)) + vec2(-0.5, -0.5);
    float coef1 = cos(uTime * 0.3343);
    float coef2 = sin(uTime * 0.6589);
    float coef3 = cos(uTime * 0.3343);
    float coef4 = sin(uTime * 0.6139);
    // float d = length(uv);
    // float d = uv.x + noise.x / 2.5;
    float d = coef1 * uv.x + coef2 * uv.y + coef3 * squareLength(uv - point1) / 10.0 + coef4 * squareLength(uv - point1) / 10.0;
    // float d = noise.x;
    vec3 col = palette(d);
    d = sin(d * 8.0 - uTime / 2.0) / 8.0;
    d = abs(d);
    d = 0.02 / d;
    col *= d;
    // col *= sigmoid(uRunningTime);
    
    gl_FragColor = vec4(col, 1.0);

    // gl_FragColor = noise;

    // if (uv.x < -1.0) {
    //     gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    // }
}