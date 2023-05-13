////these three inputs are the main knobs to tweak based on your use
//float _Strength = 0.001;
//float _Frequency = 100;  <-- lower numbers here look like water.
//float _Speed = 0.25;
float sineNoise = sin(_Frequency * iTexCoord.uv.y - _Time * _Speed);
float offset = sineNoise * _Strength; 
float2 coord = iTexCoord.uv;
coord.x += offset
return tex2D(_MainTex, coord);
