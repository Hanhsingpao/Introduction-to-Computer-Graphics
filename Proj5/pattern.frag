#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
in vec2  	vST;		// texture coords
float a;
float size;
float vsize;
uniform bool	uf_Shader;
uniform int	uvv_Shader;
const float PI = 	3.14159265;
uniform float	ufTime;


void
main( )
{
  	a = 0;
  	size = 0.8 * sin(PI*ufTime);
  	vsize = 0.8 * sin(PI*ufTime);
	vec3 myColor = vec3( 0., 1., 1. );
	if( uf_Shader )
	{
		if(a-size/3. <= vST.s && vST.s <= a+size/3. && a-size/2. <= vST.t && vST.t <= a+size/2.)
		{myColor = vec3( 1., 1., 0. );}
	}
	if(uvv_Shader == 1)
	{
		if(a-vsize/3. <= vST.s && vST.s <= a+vsize/3. && a-vsize/2. <= vST.t && vST.t <= a+vsize/2.)
		{myColor = vec3( 1., 1., 0. );}
	}
	gl_FragColor = vec4( myColor,  1. );
}
