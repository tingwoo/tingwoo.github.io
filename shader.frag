precision mediump float;

varying vec2 vTexCoord;
uniform vec2 uResolution;
uniform float uTime;

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b * cos(6.28318 * (c * t + d));
}

void main() {
    vec2 uv = vTexCoord * uResolution;
    float d = length(uv);
    vec3 col = palette(d);
    d = sin(d * 8.0 + uTime / 2.0) / 8.0;
    d = abs(d);
    d = 0.02 / d;
    col *= d;
    
    gl_FragColor = vec4(col, 1.0);
}