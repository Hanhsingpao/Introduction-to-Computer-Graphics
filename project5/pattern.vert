#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
out vec2  	vST;		// texture coords
uniform bool	uv_s;

const float PI = 	3.14159265;
const float AMP = 	0.2;		// amplitude
const float W = 	2.;		// frequency

void
main( )
{ 
	vST = gl_MultiTexCoord0.st;
	vec3 vert = gl_Vertex.xyz;
	
		vert.x *= 0.5 * (sin(PI*uTime)) + .3;
		vert.y *= 0.5  * (sin(PI*uTime)) + .3;
		vert.z *= 0.5 * (sin(PI*uTime)) + .3;
	
	gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1. );
}
