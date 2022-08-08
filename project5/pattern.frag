#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
in vec2  	vST;		// texture coords
float A;
float scale;
float vscale;
uniform bool	ufrag_Shader;
uniform int	uvert_Shader;
const float PI = 	3.14159265;
uniform float	ufTime;


void
main( )
{
  	A = 0;
  	scale = 0.5 * sin(PI*ufTime);
  	vscale = 0.5 * sin(PI*ufTime);
	vec3 myColor = vec3( 0., 1., 1. );
	if( ufrag_Shader )
	{
		if(A-scale/3. <= vST.s && vST.s <= A+scale/1.5 && A-scale/2. <= vST.t && vST.t <= A+scale/2.)
		{myColor = vec3( 1., 0., 1. );}
	}
	if(uvert_Shader == 1)
	{
		if(A-vscale/3. <= vST.s && vST.s <= A+vscale/1.5 && A-vscale/2. <= vST.t && vST.t <= A+vscale/2.)
		{myColor = vec3( 1., 0., 1. );}
	}
	gl_FragColor = vec4( myColor,  1. );
}
