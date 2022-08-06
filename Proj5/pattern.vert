#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
out vec2  	vST;		// texture coords
uniform bool	uv_Shader;

const float PI = 	3.14159265;
const float AMP = 	0.2;		// amplitude
const float W = 	2.;		// frequency

void
main( )
{ 
	vST = gl_MultiTexCoord0.st;
	vec3 vert = gl_Vertex.xyz;
	
		vert.x *= 0.5 * (sin(PI*uTime)) + .5;
		vert.y *= 1.  * (sin(PI*uTime)) + .5;
		vert.z *= 1.5 * (sin(PI*uTime)) + .5;
	
	gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1. );
}
