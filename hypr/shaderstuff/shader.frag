//
// Example blue light filter shader.
// 



#define LOWP lowp

precision mediump float;




varying LOWP vec4 v_color;
varying vec2 v_texcoord;



uniform sampler2D tex;



void main() {



	vec2 tc = vec2(v_texcoord.x, v_texcoord.y);

	// Distance from the center
	float dx = abs(0.5-tc.x);
	float dy = abs(0.5-tc.y);



	// Square it to smooth the edges
	dx *= dx;
	dy *= dy;
	tc.x -= 0.5;
//	tc.x *= 1.0 + (dy * CRT_CURVE_AMNTy);
//	tc.x += sin(tc.x*10.0)*0.1;
        tc.x += (sin(tc.y*30.0+1.0) * 0.015)/(dx+0.05)*0.005;
	tc.x += 0.5;



	tc.y -= 0.5;
//	tc.y *= 1.0 + (dx * CRT_CURVE_AMNTx);
//	dx += 1.5;
//	tc.y += (sin(tc.y*30.0+1.0) * 0.015)/1.0;
	tc.y += 0.5;



	// Get texel, and add in scanline if need be
	vec4 cta = texture2D(tex, vec2(tc.x, tc.y));

//vec4 cta = texture2D(tex, vec2(0.5,0.5));

	// Apply

	gl_FragColor = cta;

}

