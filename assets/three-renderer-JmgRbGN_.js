import{c as yr,N as At,S as Nr,C as $e,F as sr,V as We,R as Or,a as dt,w as wn,M as Zt,W as jn,b as Vt,d as nt,L as Yt,H as hn,U as It,D as Tt,B as mt,e as Qt,f as mn,p as Fr,g as Jt,h as kt,i as ct,O as Br,P as cn,j as Gr,k as Wn,E as Hr,l as ut,A as Vr,m as Sn,n as xt,o as dn,q as zn,r as jt,s as en,t as cr,u as kr,v as yt,x as wt,y as _n,z as Xn,G as qt,I as Gt,J as Bt,K as un,Q as Wr,T as zr,X as Xt,Y as Xr,Z as Yr,_ as Kr,$ as qr,a0 as $r,a1 as Zr,a2 as Qr,a3 as Jr,a4 as jr,a5 as ea,a6 as ta,a7 as na,a8 as ia,a9 as ra,aa,ab as oa,ac as sa,ad as ca,ae as Mn,af as rn,ag as la,ah as $t,ai as fa,aj as da,ak as ua,al as pa,am as lr,an as ha,ao as ma,ap as _a,aq as va,ar as Fe,as as ga,at as Ea,au as Sa,av as fr,aw as Mt,ax as pn,ay as dr,az as ur,aA as pr,aB as hr,aC as Ma,aD as Ta,aE as xa,aF as Aa,aG as mr,aH as Dt,aI as Ra,aJ as ba,aK as Ca,aL as _r,aM as Pa,aN as vr,aO as gr,aP as Tn,aQ as xn,aR as An,aS as Rn,aT as Ye,aU as ei,aV as ti,aW as ni,aX as ii,aY as ri,aZ as ai,a_ as oi,a$ as si,b0 as ci,b1 as li,b2 as fi,b3 as di,b4 as ui,b5 as pi,b6 as hi,b7 as mi,b8 as _i,b9 as vi,ba as gi,bb as Ei,bc as Si,bd as Mi,be as Ti,bf as xi,bg as Ai,bh as Ri,bi,bj as Ci,bk as In,bl as yn,bm as Nn,bn as On,bo as Fn,bp as Bn,bq as Gn,br as Ua,bs as Pi,bt as La,bu as ln,bv as Da,bw as Ui,bx as Li,by as Di,bz as Hn,bA as Vn,bB as wa,bC as Er,bD as Ia,bE as ya,bF as Na,bG as Sr,bH as wi,bI as Mr,bJ as Ii,bK as Tr,bL as Oa,bM as Fa,bN as Ba,bO as yi,bP as ft,bQ as Ga,bR as Ha,bS as Va,bT as ka,bU as Wa,bV as za,bW as Xa,bX as Ya,bY as Ka,bZ as qa,b_ as $a,b$ as Za,c0 as Qa,c1 as Ja,c2 as ja,c3 as eo,c4 as to,c5 as no,c6 as io,c7 as Ni,c8 as ro,c9 as ao,ca as oo,cb as so}from"./three-core-DrO9hH5O.js";function xr(){let e=null,n=!1,t=null,i=null;function c(o,h){t(o,h),i=e.requestAnimationFrame(c)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(c),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function co(e){const n=new WeakMap;function t(l,A){const T=l.array,M=l.usage,_=T.byteLength,g=e.createBuffer();e.bindBuffer(A,g),e.bufferData(A,T,M),l.onUploadCallback();let v;if(T instanceof Float32Array)v=e.FLOAT;else if(typeof Float16Array<"u"&&T instanceof Float16Array)v=e.HALF_FLOAT;else if(T instanceof Uint16Array)l.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(T instanceof Int16Array)v=e.SHORT;else if(T instanceof Uint32Array)v=e.UNSIGNED_INT;else if(T instanceof Int32Array)v=e.INT;else if(T instanceof Int8Array)v=e.BYTE;else if(T instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(T instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+T);return{buffer:g,type:v,bytesPerElement:T.BYTES_PER_ELEMENT,version:l.version,size:_}}function i(l,A,T){const M=A.array,_=A.updateRanges;if(e.bindBuffer(T,l),_.length===0)e.bufferSubData(T,0,M);else{_.sort((v,y)=>v.start-y.start);let g=0;for(let v=1;v<_.length;v++){const y=_[g],L=_[v];L.start<=y.start+y.count+1?y.count=Math.max(y.count,L.start+L.count-y.start):(++g,_[g]=L)}_.length=g+1;for(let v=0,y=_.length;v<y;v++){const L=_[v];e.bufferSubData(T,L.start*M.BYTES_PER_ELEMENT,M,L.start,L.count)}A.clearUpdateRanges()}A.onUploadCallback()}function c(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const A=n.get(l);A&&(e.deleteBuffer(A.buffer),n.delete(l))}function h(l,A){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const M=n.get(l);(!M||M.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const T=n.get(l);if(T===void 0)n.set(l,t(l,A));else if(T.version<l.version){if(T.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(T.buffer,l,A),T.version=l.version}}return{get:c,remove:o,update:h}}var lo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fo=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,po=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ho=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_o=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,go=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,So=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,To=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ao=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ro=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Co=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Po=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Do=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wo=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Io=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,No=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Oo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Go=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ho="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ko=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zo=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ko=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qo=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$o=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zo=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qo=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jo=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jo=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,es=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ts=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ns=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,is=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rs=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,as=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,os=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ss=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cs=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ls=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fs=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ds=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,us=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ps=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ms=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_s=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vs=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gs=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Es=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ss=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ms=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ts=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xs=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,As=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rs=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bs=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cs=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ps=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Us=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ls=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ds=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ws=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Is=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ys=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ns=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Os=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fs=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bs=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gs=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hs=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vs=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ks=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ws=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zs=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xs=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ys=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ks=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qs=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$s=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zs=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qs=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Js=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,js=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ec=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ic=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ac=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_c=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ec=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ac=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ic=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:lo,alphahash_pars_fragment:fo,alphamap_fragment:uo,alphamap_pars_fragment:po,alphatest_fragment:ho,alphatest_pars_fragment:mo,aomap_fragment:_o,aomap_pars_fragment:vo,batching_pars_vertex:go,batching_vertex:Eo,begin_vertex:So,beginnormal_vertex:Mo,bsdfs:To,iridescence_fragment:xo,bumpmap_pars_fragment:Ao,clipping_planes_fragment:Ro,clipping_planes_pars_fragment:bo,clipping_planes_pars_vertex:Co,clipping_planes_vertex:Po,color_fragment:Uo,color_pars_fragment:Lo,color_pars_vertex:Do,color_vertex:wo,common:Io,cube_uv_reflection_fragment:yo,defaultnormal_vertex:No,displacementmap_pars_vertex:Oo,displacementmap_vertex:Fo,emissivemap_fragment:Bo,emissivemap_pars_fragment:Go,colorspace_fragment:Ho,colorspace_pars_fragment:Vo,envmap_fragment:ko,envmap_common_pars_fragment:Wo,envmap_pars_fragment:zo,envmap_pars_vertex:Xo,envmap_physical_pars_fragment:ns,envmap_vertex:Yo,fog_vertex:Ko,fog_pars_vertex:qo,fog_fragment:$o,fog_pars_fragment:Zo,gradientmap_pars_fragment:Qo,lightmap_pars_fragment:Jo,lights_lambert_fragment:jo,lights_lambert_pars_fragment:es,lights_pars_begin:ts,lights_toon_fragment:is,lights_toon_pars_fragment:rs,lights_phong_fragment:as,lights_phong_pars_fragment:os,lights_physical_fragment:ss,lights_physical_pars_fragment:cs,lights_fragment_begin:ls,lights_fragment_maps:fs,lights_fragment_end:ds,logdepthbuf_fragment:us,logdepthbuf_pars_fragment:ps,logdepthbuf_pars_vertex:hs,logdepthbuf_vertex:ms,map_fragment:_s,map_pars_fragment:vs,map_particle_fragment:gs,map_particle_pars_fragment:Es,metalnessmap_fragment:Ss,metalnessmap_pars_fragment:Ms,morphinstance_vertex:Ts,morphcolor_vertex:xs,morphnormal_vertex:As,morphtarget_pars_vertex:Rs,morphtarget_vertex:bs,normal_fragment_begin:Cs,normal_fragment_maps:Ps,normal_pars_fragment:Us,normal_pars_vertex:Ls,normal_vertex:Ds,normalmap_pars_fragment:ws,clearcoat_normal_fragment_begin:Is,clearcoat_normal_fragment_maps:ys,clearcoat_pars_fragment:Ns,iridescence_pars_fragment:Os,opaque_fragment:Fs,packing:Bs,premultiplied_alpha_fragment:Gs,project_vertex:Hs,dithering_fragment:Vs,dithering_pars_fragment:ks,roughnessmap_fragment:Ws,roughnessmap_pars_fragment:zs,shadowmap_pars_fragment:Xs,shadowmap_pars_vertex:Ys,shadowmap_vertex:Ks,shadowmask_pars_fragment:qs,skinbase_vertex:$s,skinning_pars_vertex:Zs,skinning_vertex:Qs,skinnormal_vertex:Js,specularmap_fragment:js,specularmap_pars_fragment:ec,tonemapping_fragment:tc,tonemapping_pars_fragment:nc,transmission_fragment:ic,transmission_pars_fragment:rc,uv_pars_fragment:ac,uv_pars_vertex:oc,uv_vertex:sc,worldpos_vertex:cc,background_vert:lc,background_frag:fc,backgroundCube_vert:dc,backgroundCube_frag:uc,cube_vert:pc,cube_frag:hc,depth_vert:mc,depth_frag:_c,distanceRGBA_vert:vc,distanceRGBA_frag:gc,equirect_vert:Ec,equirect_frag:Sc,linedashed_vert:Mc,linedashed_frag:Tc,meshbasic_vert:xc,meshbasic_frag:Ac,meshlambert_vert:Rc,meshlambert_frag:bc,meshmatcap_vert:Cc,meshmatcap_frag:Pc,meshnormal_vert:Uc,meshnormal_frag:Lc,meshphong_vert:Dc,meshphong_frag:wc,meshphysical_vert:Ic,meshphysical_frag:yc,meshtoon_vert:Nc,meshtoon_frag:Oc,points_vert:Fc,points_frag:Bc,shadow_vert:Gc,shadow_frag:Hc,sprite_vert:Vc,sprite_frag:kc},ie={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Et={basic:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:ft([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:ft([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:ft([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:ft([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:ft([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:ft([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:ft([ie.common,ie.displacementmap,{referencePosition:{value:new We},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:ft([ie.lights,ie.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Et.physical={uniforms:ft([Et.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const an={r:0,b:0,g:0},Ct=new Mr,Wc=new Zt;function zc(e,n,t,i,c,o,h){const l=new $e(0);let A=o===!0?0:1,T,M,_=null,g=0,v=null;function y(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:n).get(E)),E}function L(b){let E=!1;const O=y(b);O===null?r(l,A):O&&O.isColor&&(r(O,1),E=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,h):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,h),(e.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(b,E){const O=y(E);O&&(O.isCubeTexture||O.mapping===_n)?(M===void 0&&(M=new ct(new Wn(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:wi(Et.backgroundCube.uniforms),vertexShader:Et.backgroundCube.vertexShader,fragmentShader:Et.backgroundCube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),M.geometry.deleteAttribute("normal"),M.geometry.deleteAttribute("uv"),M.onBeforeRender=function(P,N,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(M.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(M)),Ct.copy(E.backgroundRotation),Ct.x*=-1,Ct.y*=-1,Ct.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ct.y*=-1,Ct.z*=-1),M.material.uniforms.envMap.value=O,M.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,M.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,M.material.uniforms.backgroundRotation.value.setFromMatrix4(Wc.makeRotationFromEuler(Ct)),M.material.toneMapped=nt.getTransfer(O.colorSpace)!==Ye,(_!==O||g!==O.version||v!==e.toneMapping)&&(M.material.needsUpdate=!0,_=O,g=O.version,v=e.toneMapping),M.layers.enableAll(),b.unshift(M,M.geometry,M.material,0,0,null)):O&&O.isTexture&&(T===void 0&&(T=new ct(new hr(2,2),new yt({name:"BackgroundMaterial",uniforms:wi(Et.background.uniforms),vertexShader:Et.background.vertexShader,fragmentShader:Et.background.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),T.geometry.deleteAttribute("normal"),Object.defineProperty(T.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(T)),T.material.uniforms.t2D.value=O,T.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,T.material.toneMapped=nt.getTransfer(O.colorSpace)!==Ye,O.matrixAutoUpdate===!0&&O.updateMatrix(),T.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||g!==O.version||v!==e.toneMapping)&&(T.material.needsUpdate=!0,_=O,g=O.version,v=e.toneMapping),T.layers.enableAll(),b.unshift(T,T.geometry,T.material,0,0,null))}function r(b,E){b.getRGB(an,Sr(e)),i.buffers.color.setClear(an.r,an.g,an.b,E,h)}function D(){M!==void 0&&(M.geometry.dispose(),M.material.dispose(),M=void 0),T!==void 0&&(T.geometry.dispose(),T.material.dispose(),T=void 0)}return{getClearColor:function(){return l},setClearColor:function(b,E=1){l.set(b),A=E,r(l,A)},getClearAlpha:function(){return A},setClearAlpha:function(b){A=b,r(l,A)},render:L,addToRenderList:f,dispose:D}}function Xc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},c=g(null);let o=c,h=!1;function l(d,C,B,X,Y){let $=!1;const z=_(X,B,C);o!==z&&(o=z,T(o.object)),$=v(d,X,B,Y),$&&y(d,X,B,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,E(d,C,B,X),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function A(){return e.createVertexArray()}function T(d){return e.bindVertexArray(d)}function M(d){return e.deleteVertexArray(d)}function _(d,C,B){const X=B.wireframe===!0;let Y=i[d.id];Y===void 0&&(Y={},i[d.id]=Y);let $=Y[C.id];$===void 0&&($={},Y[C.id]=$);let z=$[X];return z===void 0&&(z=g(A()),$[X]=z),z}function g(d){const C=[],B=[],X=[];for(let Y=0;Y<t;Y++)C[Y]=0,B[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:X,object:d,attributes:{},index:null}}function v(d,C,B,X){const Y=o.attributes,$=C.attributes;let z=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){const Te=Y[H];let De=$[H];if(De===void 0&&(H==="instanceMatrix"&&d.instanceMatrix&&(De=d.instanceMatrix),H==="instanceColor"&&d.instanceColor&&(De=d.instanceColor)),Te===void 0||Te.attribute!==De||De&&Te.data!==De.data)return!0;z++}return o.attributesNum!==z||o.index!==X}function y(d,C,B,X){const Y={},$=C.attributes;let z=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){let Te=$[H];Te===void 0&&(H==="instanceMatrix"&&d.instanceMatrix&&(Te=d.instanceMatrix),H==="instanceColor"&&d.instanceColor&&(Te=d.instanceColor));const De={};De.attribute=Te,Te&&Te.data&&(De.data=Te.data),Y[H]=De,z++}o.attributes=Y,o.attributesNum=z,o.index=X}function L(){const d=o.newAttributes;for(let C=0,B=d.length;C<B;C++)d[C]=0}function f(d){r(d,0)}function r(d,C){const B=o.newAttributes,X=o.enabledAttributes,Y=o.attributeDivisors;B[d]=1,X[d]===0&&(e.enableVertexAttribArray(d),X[d]=1),Y[d]!==C&&(e.vertexAttribDivisor(d,C),Y[d]=C)}function D(){const d=o.newAttributes,C=o.enabledAttributes;for(let B=0,X=C.length;B<X;B++)C[B]!==d[B]&&(e.disableVertexAttribArray(B),C[B]=0)}function b(d,C,B,X,Y,$,z){z===!0?e.vertexAttribIPointer(d,C,B,Y,$):e.vertexAttribPointer(d,C,B,X,Y,$)}function E(d,C,B,X){L();const Y=X.attributes,$=B.getAttributes(),z=C.defaultAttributeValues;for(const ne in $){const H=$[ne];if(H.location>=0){let ve=Y[ne];if(ve===void 0&&(ne==="instanceMatrix"&&d.instanceMatrix&&(ve=d.instanceMatrix),ne==="instanceColor"&&d.instanceColor&&(ve=d.instanceColor)),ve!==void 0){const Te=ve.normalized,De=ve.itemSize,Be=n.get(ve);if(Be===void 0)continue;const et=Be.buffer,Je=Be.type,Ve=Be.bytesPerElement,V=Je===e.INT||Je===e.UNSIGNED_INT||ve.gpuType===mr;if(ve.isInterleavedBufferAttribute){const q=ve.data,le=q.stride,Ce=ve.offset;if(q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)r(H.location+Ee,q.meshPerAttribute);d.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)f(H.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,et);for(let Ee=0;Ee<H.locationSize;Ee++)b(H.location+Ee,De/H.locationSize,Je,Te,le*Ve,(Ce+De/H.locationSize*Ee)*Ve,V)}else{if(ve.isInstancedBufferAttribute){for(let q=0;q<H.locationSize;q++)r(H.location+q,ve.meshPerAttribute);d.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let q=0;q<H.locationSize;q++)f(H.location+q);e.bindBuffer(e.ARRAY_BUFFER,et);for(let q=0;q<H.locationSize;q++)b(H.location+q,De/H.locationSize,Je,Te,De*Ve,De/H.locationSize*q*Ve,V)}}else if(z!==void 0){const Te=z[ne];if(Te!==void 0)switch(Te.length){case 2:e.vertexAttrib2fv(H.location,Te);break;case 3:e.vertexAttrib3fv(H.location,Te);break;case 4:e.vertexAttrib4fv(H.location,Te);break;default:e.vertexAttrib1fv(H.location,Te)}}}}D()}function O(){W();for(const d in i){const C=i[d];for(const B in C){const X=C[B];for(const Y in X)M(X[Y].object),delete X[Y];delete C[B]}delete i[d]}}function P(d){if(i[d.id]===void 0)return;const C=i[d.id];for(const B in C){const X=C[B];for(const Y in X)M(X[Y].object),delete X[Y];delete C[B]}delete i[d.id]}function N(d){for(const C in i){const B=i[C];if(B[d.id]===void 0)continue;const X=B[d.id];for(const Y in X)M(X[Y].object),delete X[Y];delete B[d.id]}}function W(){p(),h=!0,o!==c&&(o=c,T(o.object))}function p(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:W,resetDefaultState:p,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:L,enableAttribute:f,disableUnusedAttributes:D}}function Yc(e,n,t){let i;function c(T){i=T}function o(T,M){e.drawArrays(i,T,M),t.update(M,i,1)}function h(T,M,_){_!==0&&(e.drawArraysInstanced(i,T,M,_),t.update(M,i,_))}function l(T,M,_){if(_===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,T,0,M,0,_);let v=0;for(let y=0;y<_;y++)v+=M[y];t.update(v,i,1)}function A(T,M,_,g){if(_===0)return;const v=n.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<T.length;y++)h(T[y],M[y],g[y]);else{v.multiDrawArraysInstancedWEBGL(i,T,0,M,0,g,0,_);let y=0;for(let L=0;L<_;L++)y+=M[L]*g[L];t.update(y,i,1)}}this.setMode=c,this.render=o,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=A}function Kc(e,n,t,i){let c;function o(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const N=n.get("EXT_texture_filter_anisotropic");c=e.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function h(N){return!(N!==xt&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(N){const W=N===hn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(N!==It&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Dt&&!W)}function A(N){if(N==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let T=t.precision!==void 0?t.precision:"highp";const M=A(T);M!==T&&(console.warn("THREE.WebGLRenderer:",T,"not supported, using",M,"instead."),T=M);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),r=e.getParameter(e.MAX_VERTEX_ATTRIBS),D=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),O=y>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:A,textureFormatReadable:h,textureTypeReadable:l,precision:T,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:L,maxCubemapSize:f,maxAttributes:r,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:O,maxSamples:P}}function qc(e){const n=this;let t=null,i=0,c=!1,o=!1;const h=new va,l=new Fe,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const v=_.length!==0||g||i!==0||c;return c=g,i=_.length,v},this.beginShadows=function(){o=!0,M(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){t=M(_,g,0)},this.setState=function(_,g,v){const y=_.clippingPlanes,L=_.clipIntersection,f=_.clipShadows,r=e.get(_);if(!c||y===null||y.length===0||o&&!f)o?M(null):T();else{const D=o?0:i,b=D*4;let E=r.clippingState||null;A.value=E,E=M(y,g,b,v);for(let O=0;O!==b;++O)E[O]=t[O];r.clippingState=E,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=D}};function T(){A.value!==t&&(A.value=t,A.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function M(_,g,v,y){const L=_!==null?_.length:0;let f=null;if(L!==0){if(f=A.value,y!==!0||f===null){const r=v+L*4,D=g.matrixWorldInverse;l.getNormalMatrix(D),(f===null||f.length<r)&&(f=new Float32Array(r));for(let b=0,E=v;b!==L;++b,E+=4)h.copy(_[b]).applyMatrix4(D,l),h.normal.toArray(f,E),f[E+3]=h.constant}A.value=f,A.needsUpdate=!0}return n.numPlanes=L,n.numIntersection=0,f}}function $c(e){let n=new WeakMap;function t(h,l){return l===Hn?h.mapping=Jt:l===Vn&&(h.mapping=kt),h}function i(h){if(h&&h.isTexture){const l=h.mapping;if(l===Hn||l===Vn)if(n.has(h)){const A=n.get(h).texture;return t(A,h.mapping)}else{const A=h.image;if(A&&A.height>0){const T=new wa(A.height);return T.fromEquirectangularTexture(e,h),n.set(h,T),h.addEventListener("dispose",c),t(T.texture,h.mapping)}else return null}}return h}function c(h){const l=h.target;l.removeEventListener("dispose",c);const A=n.get(l);A!==void 0&&(n.delete(l),A.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const Ht=4,Oi=[.125,.215,.35,.446,.526,.582],Lt=20,bn=new Br,Fi=new $e;let Cn=null,Pn=0,Un=0,Ln=!1;const Ut=(1+Math.sqrt(5))/2,Ot=1/Ut,Bi=[new We(-Ut,Ot,0),new We(Ut,Ot,0),new We(-Ot,0,Ut),new We(Ot,0,Ut),new We(0,Ut,-Ot),new We(0,Ut,Ot),new We(-1,1,-1),new We(1,1,-1),new We(-1,1,1),new We(1,1,1)],Zc=new We;class Gi{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,c=100,o={}){const{size:h=256,position:l=Zc}=o;Cn=this._renderer.getRenderTarget(),Pn=this._renderer.getActiveCubeFace(),Un=this._renderer.getActiveMipmapLevel(),Ln=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const A=this._allocateTargets();return A.depthBuffer=!0,this._sceneToCubeUV(n,i,c,A,l),t>0&&this._blur(A,0,0,t),this._applyPMREM(A),this._cleanup(A),A}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ki(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Cn,Pn,Un),this._renderer.xr.enabled=Ln,n.scissorTest=!1,on(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Jt||n.mapping===kt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Cn=this._renderer.getRenderTarget(),Pn=this._renderer.getActiveCubeFace(),Un=this._renderer.getActiveMipmapLevel(),Ln=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:hn,format:xt,colorSpace:mn,depthBuffer:!1},c=Hi(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hi(n,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qc(o)),this._blurMaterial=Jc(o,n,t)}return c}_compileMaterial(n){const t=new ct(this._lodPlanes[0],n);this._renderer.compile(t,bn)}_sceneToCubeUV(n,t,i,c,o){const A=new cn(90,1,t,i),T=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,v=_.toneMapping;_.getClearColor(Fi),_.toneMapping=At,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(c),_.clearDepth(),_.setRenderTarget(null));const L=new Gr({name:"PMREM.Background",side:mt,depthWrite:!1,depthTest:!1}),f=new ct(new Wn,L);let r=!1;const D=n.background;D?D.isColor&&(L.color.copy(D),n.background=null,r=!0):(L.color.copy(Fi),r=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(A.up.set(0,T[b],0),A.position.set(o.x,o.y,o.z),A.lookAt(o.x+M[b],o.y,o.z)):E===1?(A.up.set(0,0,T[b]),A.position.set(o.x,o.y,o.z),A.lookAt(o.x,o.y+M[b],o.z)):(A.up.set(0,T[b],0),A.position.set(o.x,o.y,o.z),A.lookAt(o.x,o.y,o.z+M[b]));const O=this._cubeSize;on(c,E*O,b>2?O:0,O,O),_.setRenderTarget(c),r&&_.render(f,A),_.render(n,A)}f.geometry.dispose(),f.material.dispose(),_.toneMapping=v,_.autoClear=g,n.background=D}_textureToCubeUV(n,t){const i=this._renderer,c=n.mapping===Jt||n.mapping===kt;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=ki()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vi());const o=c?this._cubemapMaterial:this._equirectMaterial,h=new ct(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=n;const A=this._cubeSize;on(t,0,0,3*A,2*A),i.setRenderTarget(t),i.render(h,bn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const c=this._lodPlanes.length;for(let o=1;o<c;o++){const h=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=Bi[(c-o-1)%Bi.length];this._blur(n,o-1,o,h,l)}t.autoClear=i}_blur(n,t,i,c,o){const h=this._pingPongRenderTarget;this._halfBlur(n,h,t,i,c,"latitudinal",o),this._halfBlur(h,n,i,i,c,"longitudinal",o)}_halfBlur(n,t,i,c,o,h,l){const A=this._renderer,T=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const M=3,_=new ct(this._lodPlanes[c],T),g=T.uniforms,v=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Lt-1),L=o/y,f=isFinite(o)?1+Math.floor(M*L):Lt;f>Lt&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Lt}`);const r=[];let D=0;for(let N=0;N<Lt;++N){const W=N/L,p=Math.exp(-W*W/2);r.push(p),N===0?D+=p:N<f&&(D+=2*p)}for(let N=0;N<r.length;N++)r[N]=r[N]/D;g.envMap.value=n.texture,g.samples.value=f,g.weights.value=r,g.latitudinal.value=h==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:b}=this;g.dTheta.value=y,g.mipInt.value=b-i;const E=this._sizeLods[c],O=3*E*(c>b-Ht?c-b+Ht:0),P=4*(this._cubeSize-E);on(t,O,P,3*E,2*E),A.setRenderTarget(t),A.render(_,bn)}}function Qc(e){const n=[],t=[],i=[];let c=e;const o=e-Ht+1+Oi.length;for(let h=0;h<o;h++){const l=Math.pow(2,c);t.push(l);let A=1/l;h>e-Ht?A=Oi[h-e+Ht-1]:h===0&&(A=0),i.push(A);const T=1/(l-2),M=-T,_=1+T,g=[M,M,_,M,_,_,M,M,_,_,M,_],v=6,y=6,L=3,f=2,r=1,D=new Float32Array(L*y*v),b=new Float32Array(f*y*v),E=new Float32Array(r*y*v);for(let P=0;P<v;P++){const N=P%3*2/3-1,W=P>2?0:-1,p=[N,W,0,N+2/3,W,0,N+2/3,W+1,0,N,W,0,N+2/3,W+1,0,N,W+1,0];D.set(p,L*y*P),b.set(g,f*y*P);const d=[P,P,P,P,P,P];E.set(d,r*y*P)}const O=new Xn;O.setAttribute("position",new qt(D,L)),O.setAttribute("uv",new qt(b,f)),O.setAttribute("faceIndex",new qt(E,r)),n.push(O),c>Ht&&c--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Hi(e,n,t){const i=new Vt(e,n,t);return i.texture.mapping=_n,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function on(e,n,t,i,c){e.viewport.set(n,t,i,c),e.scissor.set(n,t,i,c)}function Jc(e,n,t){const i=new Float32Array(Lt),c=new We(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:Lt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Yn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Vi(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function ki(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Yn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jc(e){let n=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const A=l.mapping,T=A===Hn||A===Vn,M=A===Jt||A===kt;if(T||M){let _=n.get(l);const g=_!==void 0?_.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return t===null&&(t=new Gi(e)),_=T?t.fromEquirectangular(l,_):t.fromCubemap(l,_),_.texture.pmremVersion=l.pmremVersion,n.set(l,_),_.texture;if(_!==void 0)return _.texture;{const v=l.image;return T&&v&&v.height>0||M&&v&&c(v)?(t===null&&(t=new Gi(e)),_=T?t.fromEquirectangular(l):t.fromCubemap(l),_.texture.pmremVersion=l.pmremVersion,n.set(l,_),l.addEventListener("dispose",o),_.texture):null}}}return l}function c(l){let A=0;const T=6;for(let M=0;M<T;M++)l[M]!==void 0&&A++;return A===T}function o(l){const A=l.target;A.removeEventListener("dispose",o);const T=n.get(A);T!==void 0&&(n.delete(A),T.dispose())}function h(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:h}}function el(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let c;switch(i){case"WEBGL_depth_texture":c=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=e.getExtension(i)}return n[i]=c,c}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const c=t(i);return c===null&&wn("THREE.WebGLRenderer: "+i+" extension not supported."),c}}}function tl(e,n,t,i){const c={},o=new WeakMap;function h(_){const g=_.target;g.index!==null&&n.remove(g.index);for(const y in g.attributes)n.remove(g.attributes[y]);g.removeEventListener("dispose",h),delete c[g.id];const v=o.get(g);v&&(n.remove(v),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(_,g){return c[g.id]===!0||(g.addEventListener("dispose",h),c[g.id]=!0,t.memory.geometries++),g}function A(_){const g=_.attributes;for(const v in g)n.update(g[v],e.ARRAY_BUFFER)}function T(_){const g=[],v=_.index,y=_.attributes.position;let L=0;if(v!==null){const D=v.array;L=v.version;for(let b=0,E=D.length;b<E;b+=3){const O=D[b+0],P=D[b+1],N=D[b+2];g.push(O,P,P,N,N,O)}}else if(y!==void 0){const D=y.array;L=y.version;for(let b=0,E=D.length/3-1;b<E;b+=3){const O=b+0,P=b+1,N=b+2;g.push(O,P,P,N,N,O)}}else return;const f=new(Ba(g)?Oa:Fa)(g,1);f.version=L;const r=o.get(_);r&&n.remove(r),o.set(_,f)}function M(_){const g=o.get(_);if(g){const v=_.index;v!==null&&g.version<v.version&&T(_)}else T(_);return o.get(_)}return{get:l,update:A,getWireframeAttribute:M}}function nl(e,n,t){let i;function c(g){i=g}let o,h;function l(g){o=g.type,h=g.bytesPerElement}function A(g,v){e.drawElements(i,v,o,g*h),t.update(v,i,1)}function T(g,v,y){y!==0&&(e.drawElementsInstanced(i,v,o,g*h,y),t.update(v,i,y))}function M(g,v,y){if(y===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,g,0,y);let f=0;for(let r=0;r<y;r++)f+=v[r];t.update(f,i,1)}function _(g,v,y,L){if(y===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let r=0;r<g.length;r++)T(g[r]/h,v[r],L[r]);else{f.multiDrawElementsInstancedWEBGL(i,v,0,o,g,0,L,0,y);let r=0;for(let D=0;D<y;D++)r+=v[D]*L[D];t.update(r,i,1)}}this.setMode=c,this.setIndex=l,this.render=A,this.renderInstances=T,this.renderMultiDraw=M,this.renderMultiDrawInstances=_}function il(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,h,l){switch(t.calls++,h){case e.TRIANGLES:t.triangles+=l*(o/3);break;case e.LINES:t.lines+=l*(o/2);break;case e.LINE_STRIP:t.lines+=l*(o-1);break;case e.LINE_LOOP:t.lines+=l*o;break;case e.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function c(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:c,update:i}}function rl(e,n,t){const i=new WeakMap,c=new dt;function o(h,l,A){const T=h.morphTargetInfluences,M=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,_=M!==void 0?M.length:0;let g=i.get(l);if(g===void 0||g.count!==_){let p=function(){N.dispose(),i.delete(l),l.removeEventListener("dispose",p)};g!==void 0&&g.texture.dispose();const v=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,L=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],r=l.morphAttributes.normal||[],D=l.morphAttributes.color||[];let b=0;v===!0&&(b=1),y===!0&&(b=2),L===!0&&(b=3);let E=l.attributes.position.count*b,O=1;E>n.maxTextureSize&&(O=Math.ceil(E/n.maxTextureSize),E=n.maxTextureSize);const P=new Float32Array(E*O*4*_),N=new Er(P,E,O,_);N.type=Dt,N.needsUpdate=!0;const W=b*4;for(let d=0;d<_;d++){const C=f[d],B=r[d],X=D[d],Y=E*O*4*d;for(let $=0;$<C.count;$++){const z=$*W;v===!0&&(c.fromBufferAttribute(C,$),P[Y+z+0]=c.x,P[Y+z+1]=c.y,P[Y+z+2]=c.z,P[Y+z+3]=0),y===!0&&(c.fromBufferAttribute(B,$),P[Y+z+4]=c.x,P[Y+z+5]=c.y,P[Y+z+6]=c.z,P[Y+z+7]=0),L===!0&&(c.fromBufferAttribute(X,$),P[Y+z+8]=c.x,P[Y+z+9]=c.y,P[Y+z+10]=c.z,P[Y+z+11]=X.itemSize===4?c.w:1)}}g={count:_,texture:N,size:new ut(E,O)},i.set(l,g),l.addEventListener("dispose",p)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)A.getUniforms().setValue(e,"morphTexture",h.morphTexture,t);else{let v=0;for(let L=0;L<T.length;L++)v+=T[L];const y=l.morphTargetsRelative?1:1-v;A.getUniforms().setValue(e,"morphTargetBaseInfluence",y),A.getUniforms().setValue(e,"morphTargetInfluences",T)}A.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),A.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:o}}function al(e,n,t,i){let c=new WeakMap;function o(A){const T=i.render.frame,M=A.geometry,_=n.get(A,M);if(c.get(_)!==T&&(n.update(_),c.set(_,T)),A.isInstancedMesh&&(A.hasEventListener("dispose",l)===!1&&A.addEventListener("dispose",l),c.get(A)!==T&&(t.update(A.instanceMatrix,e.ARRAY_BUFFER),A.instanceColor!==null&&t.update(A.instanceColor,e.ARRAY_BUFFER),c.set(A,T))),A.isSkinnedMesh){const g=A.skeleton;c.get(g)!==T&&(g.update(),c.set(g,T))}return _}function h(){c=new WeakMap}function l(A){const T=A.target;T.removeEventListener("dispose",l),t.remove(T.instanceMatrix),T.instanceColor!==null&&t.remove(T.instanceColor)}return{update:o,dispose:h}}const Ar=new Za,Wi=new cr(1,1),Rr=new Er,br=new $a,Cr=new qa,zi=[],Xi=[],Yi=new Float32Array(16),Ki=new Float32Array(9),qi=new Float32Array(4);function Wt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const c=n*t;let o=zi[c];if(o===void 0&&(o=new Float32Array(c),zi[c]=o),n!==0){i.toArray(o,0);for(let h=1,l=0;h!==n;++h)l+=t,e[h].toArray(o,l)}return o}function it(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function rt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function vn(e,n){let t=Xi[n];t===void 0&&(t=new Int32Array(n),Xi[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function ol(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function sl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2fv(this.addr,n),rt(t,n)}}function cl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(it(t,n))return;e.uniform3fv(this.addr,n),rt(t,n)}}function ll(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4fv(this.addr,n),rt(t,n)}}function fl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;qi.set(i),e.uniformMatrix2fv(this.addr,!1,qi),rt(t,i)}}function dl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;Ki.set(i),e.uniformMatrix3fv(this.addr,!1,Ki),rt(t,i)}}function ul(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;Yi.set(i),e.uniformMatrix4fv(this.addr,!1,Yi),rt(t,i)}}function pl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function hl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2iv(this.addr,n),rt(t,n)}}function ml(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(it(t,n))return;e.uniform3iv(this.addr,n),rt(t,n)}}function _l(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4iv(this.addr,n),rt(t,n)}}function vl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function gl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2uiv(this.addr,n),rt(t,n)}}function El(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(it(t,n))return;e.uniform3uiv(this.addr,n),rt(t,n)}}function Sl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4uiv(this.addr,n),rt(t,n)}}function Ml(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c);let o;this.type===e.SAMPLER_2D_SHADOW?(Wi.compareFunction=lr,o=Wi):o=Ar,t.setTexture2D(n||o,c)}function Tl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture3D(n||br,c)}function xl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTextureCube(n||Cr,c)}function Al(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture2DArray(n||Rr,c)}function Rl(e){switch(e){case 5126:return ol;case 35664:return sl;case 35665:return cl;case 35666:return ll;case 35674:return fl;case 35675:return dl;case 35676:return ul;case 5124:case 35670:return pl;case 35667:case 35671:return hl;case 35668:case 35672:return ml;case 35669:case 35673:return _l;case 5125:return vl;case 36294:return gl;case 36295:return El;case 36296:return Sl;case 35678:case 36198:case 36298:case 36306:case 35682:return Ml;case 35679:case 36299:case 36307:return Tl;case 35680:case 36300:case 36308:case 36293:return xl;case 36289:case 36303:case 36311:case 36292:return Al}}function bl(e,n){e.uniform1fv(this.addr,n)}function Cl(e,n){const t=Wt(n,this.size,2);e.uniform2fv(this.addr,t)}function Pl(e,n){const t=Wt(n,this.size,3);e.uniform3fv(this.addr,t)}function Ul(e,n){const t=Wt(n,this.size,4);e.uniform4fv(this.addr,t)}function Ll(e,n){const t=Wt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Dl(e,n){const t=Wt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function wl(e,n){const t=Wt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Il(e,n){e.uniform1iv(this.addr,n)}function yl(e,n){e.uniform2iv(this.addr,n)}function Nl(e,n){e.uniform3iv(this.addr,n)}function Ol(e,n){e.uniform4iv(this.addr,n)}function Fl(e,n){e.uniform1uiv(this.addr,n)}function Bl(e,n){e.uniform2uiv(this.addr,n)}function Gl(e,n){e.uniform3uiv(this.addr,n)}function Hl(e,n){e.uniform4uiv(this.addr,n)}function Vl(e,n,t){const i=this.cache,c=n.length,o=vn(t,c);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==c;++h)t.setTexture2D(n[h]||Ar,o[h])}function kl(e,n,t){const i=this.cache,c=n.length,o=vn(t,c);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==c;++h)t.setTexture3D(n[h]||br,o[h])}function Wl(e,n,t){const i=this.cache,c=n.length,o=vn(t,c);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==c;++h)t.setTextureCube(n[h]||Cr,o[h])}function zl(e,n,t){const i=this.cache,c=n.length,o=vn(t,c);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==c;++h)t.setTexture2DArray(n[h]||Rr,o[h])}function Xl(e){switch(e){case 5126:return bl;case 35664:return Cl;case 35665:return Pl;case 35666:return Ul;case 35674:return Ll;case 35675:return Dl;case 35676:return wl;case 5124:case 35670:return Il;case 35667:case 35671:return yl;case 35668:case 35672:return Nl;case 35669:case 35673:return Ol;case 5125:return Fl;case 36294:return Bl;case 36295:return Gl;case 36296:return Hl;case 35678:case 36198:case 36298:case 36306:case 35682:return Vl;case 35679:case 36299:case 36307:return kl;case 35680:case 36300:case 36308:case 36293:return Wl;case 36289:case 36303:case 36311:case 36292:return zl}}class Yl{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rl(t.type)}}class Kl{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xl(t.type)}}class ql{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const c=this.seq;for(let o=0,h=c.length;o!==h;++o){const l=c[o];l.setValue(n,t[l.id],i)}}}const Dn=/(\w+)(\])?(\[|\.)?/g;function $i(e,n){e.seq.push(n),e.map[n.id]=n}function $l(e,n,t){const i=e.name,c=i.length;for(Dn.lastIndex=0;;){const o=Dn.exec(i),h=Dn.lastIndex;let l=o[1];const A=o[2]==="]",T=o[3];if(A&&(l=l|0),T===void 0||T==="["&&h+2===c){$i(t,T===void 0?new Yl(l,e,n):new Kl(l,e,n));break}else{let _=t.map[l];_===void 0&&(_=new ql(l),$i(t,_)),t=_}}}class fn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const o=n.getActiveUniform(t,c),h=n.getUniformLocation(t,o.name);$l(o,h,this)}}setValue(n,t,i,c){const o=this.map[t];o!==void 0&&o.setValue(n,i,c)}setOptional(n,t,i){const c=t[i];c!==void 0&&this.setValue(n,i,c)}static upload(n,t,i,c){for(let o=0,h=t.length;o!==h;++o){const l=t[o],A=i[l.id];A.needsUpdate!==!1&&l.setValue(n,A.value,c)}}static seqWithValue(n,t){const i=[];for(let c=0,o=n.length;c!==o;++c){const h=n[c];h.id in t&&i.push(h)}return i}}function Zi(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Zl=37297;let Ql=0;function Jl(e,n){const t=e.split(`
`),i=[],c=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let h=c;h<o;h++){const l=h+1;i.push(`${l===n?">":" "} ${l}: ${t[h]}`)}return i.join(`
`)}const Qi=new Fe;function jl(e){nt._getMatrix(Qi,nt.workingColorSpace,e);const n=`mat3( ${Qi.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(e)){case Tr:return[n,"LinearTransferOETF"];case Ye:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Ji(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),o=(e.getShaderInfoLog(n)||"").trim();if(i&&o==="")return"";const h=/ERROR: 0:(\d+)/.exec(o);if(h){const l=parseInt(h[1]);return t.toUpperCase()+`

`+o+`

`+Jl(e.getShaderSource(n),l)}else return o}function ef(e,n){const t=jl(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tf(e,n){let t;switch(n){case Ka:t="Linear";break;case Ya:t="Reinhard";break;case Xa:t="Cineon";break;case za:t="ACESFilmic";break;case Wa:t="AgX";break;case ka:t="Neutral";break;case Va:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sn=new We;function nf(){nt.getLuminanceCoefficients(sn);const e=sn.x.toFixed(4),n=sn.y.toFixed(4),t=sn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kt).join(`
`)}function af(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function of(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let c=0;c<i;c++){const o=e.getActiveAttrib(n,c),h=o.name;let l=1;o.type===e.FLOAT_MAT2&&(l=2),o.type===e.FLOAT_MAT3&&(l=3),o.type===e.FLOAT_MAT4&&(l=4),t[h]={type:o.type,location:e.getAttribLocation(n,h),locationSize:l}}return t}function Kt(e){return e!==""}function ji(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function er(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const sf=/^[ \t]*#include +<([\w\d./]+)>/gm;function kn(e){return e.replace(sf,lf)}const cf=new Map;function lf(e,n){let t=Ie[n];if(t===void 0){const i=cf.get(n);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return kn(t)}const ff=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tr(e){return e.replace(ff,df)}function df(e,n,t,i){let c="";for(let o=parseInt(n);o<parseInt(t);o++)c+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return c}function nr(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function uf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===fr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===Ha?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Mt&&(n="SHADOWMAP_TYPE_VSM"),n}function pf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Jt:case kt:n="ENVMAP_TYPE_CUBE";break;case _n:n="ENVMAP_TYPE_CUBE_UV";break}return n}function hf(e){let n="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===kt&&(n="ENVMAP_MODE_REFRACTION"),n}function mf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case eo:n="ENVMAP_BLENDING_MULTIPLY";break;case ja:n="ENVMAP_BLENDING_MIX";break;case Ja:n="ENVMAP_BLENDING_ADD";break}return n}function _f(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vf(e,n,t,i){const c=e.getContext(),o=t.defines;let h=t.vertexShader,l=t.fragmentShader;const A=uf(t),T=pf(t),M=hf(t),_=mf(t),g=_f(t),v=rf(t),y=af(o),L=c.createProgram();let f,r,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Kt).join(`
`),f.length>0&&(f+=`
`),r=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Kt).join(`
`),r.length>0&&(r+=`
`)):(f=[nr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+M:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kt).join(`
`),r=[nr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+T:"",t.envMap?"#define "+M:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==At?"#define TONE_MAPPING":"",t.toneMapping!==At?Ie.tonemapping_pars_fragment:"",t.toneMapping!==At?tf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,ef("linearToOutputTexel",t.outputColorSpace),nf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kt).join(`
`)),h=kn(h),h=ji(h,t),h=er(h,t),l=kn(l),l=ji(l,t),l=er(l,t),h=tr(h),l=tr(l),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,f=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,r=["#define varying in",t.glslVersion===yi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const b=D+f+h,E=D+r+l,O=Zi(c,c.VERTEX_SHADER,b),P=Zi(c,c.FRAGMENT_SHADER,E);c.attachShader(L,O),c.attachShader(L,P),t.index0AttributeName!==void 0?c.bindAttribLocation(L,0,t.index0AttributeName):t.morphTargets===!0&&c.bindAttribLocation(L,0,"position"),c.linkProgram(L);function N(C){if(e.debug.checkShaderErrors){const B=c.getProgramInfoLog(L)||"",X=c.getShaderInfoLog(O)||"",Y=c.getShaderInfoLog(P)||"",$=B.trim(),z=X.trim(),ne=Y.trim();let H=!0,ve=!0;if(c.getProgramParameter(L,c.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(c,L,O,P);else{const Te=Ji(c,O,"vertex"),De=Ji(c,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(L,c.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+$+`
`+Te+`
`+De)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(z===""||ne==="")&&(ve=!1);ve&&(C.diagnostics={runnable:H,programLog:$,vertexShader:{log:z,prefix:f},fragmentShader:{log:ne,prefix:r}})}c.deleteShader(O),c.deleteShader(P),W=new fn(c,L),p=of(c,L)}let W;this.getUniforms=function(){return W===void 0&&N(this),W};let p;this.getAttributes=function(){return p===void 0&&N(this),p};let d=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=c.getProgramParameter(L,Zl)),d},this.destroy=function(){i.releaseStatesOfProgram(this),c.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ql++,this.cacheKey=n,this.usedTimes=1,this.program=L,this.vertexShader=O,this.fragmentShader=P,this}let gf=0;class Ef{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,c=this._getShaderStage(t),o=this._getShaderStage(i),h=this._getShaderCacheForMaterial(n);return h.has(c)===!1&&(h.add(c),c.usedTimes++),h.has(o)===!1&&(h.add(o),o.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Sf(n),t.set(n,i)),i}}class Sf{constructor(n){this.id=gf++,this.code=n,this.usedTimes=0}}function Mf(e,n,t,i,c,o,h){const l=new Ga,A=new Ef,T=new Set,M=[],_=c.logarithmicDepthBuffer,g=c.vertexTextures;let v=c.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(p){return T.add(p),p===0?"uv":`uv${p}`}function f(p,d,C,B,X){const Y=B.fog,$=X.geometry,z=p.isMeshStandardMaterial?B.environment:null,ne=(p.isMeshStandardMaterial?t:n).get(p.envMap||z),H=ne&&ne.mapping===_n?ne.image.height:null,ve=y[p.type];p.precision!==null&&(v=c.getMaxPrecision(p.precision),v!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",v,"instead."));const Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,De=Te!==void 0?Te.length:0;let Be=0;$.morphAttributes.position!==void 0&&(Be=1),$.morphAttributes.normal!==void 0&&(Be=2),$.morphAttributes.color!==void 0&&(Be=3);let et,Je,Ve,V;if(ve){const Ge=Et[ve];et=Ge.vertexShader,Je=Ge.fragmentShader}else et=p.vertexShader,Je=p.fragmentShader,A.update(p),Ve=A.getVertexShaderID(p),V=A.getFragmentShaderID(p);const q=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),Ce=X.isInstancedMesh===!0,Ee=X.isBatchedMesh===!0,Ne=!!p.map,ot=!!p.matcap,m=!!ne,Ke=!!p.aoMap,Ue=!!p.lightMap,Re=!!p.bumpMap,ue=!!p.normalMap,qe=!!p.displacementMap,pe=!!p.emissiveMap,we=!!p.metalnessMap,at=!!p.roughnessMap,tt=p.anisotropy>0,u=p.clearcoat>0,a=p.dispersion>0,U=p.iridescence>0,G=p.sheen>0,K=p.transmission>0,F=tt&&!!p.anisotropyMap,ge=u&&!!p.clearcoatMap,ee=u&&!!p.clearcoatNormalMap,he=u&&!!p.clearcoatRoughnessMap,me=U&&!!p.iridescenceMap,J=U&&!!p.iridescenceThicknessMap,oe=G&&!!p.sheenColorMap,Ae=G&&!!p.sheenRoughnessMap,_e=!!p.specularMap,re=!!p.specularColorMap,Le=!!p.specularIntensityMap,S=K&&!!p.transmissionMap,j=K&&!!p.thicknessMap,te=!!p.gradientMap,ce=!!p.alphaMap,Z=p.alphaTest>0,k=!!p.alphaHash,de=!!p.extensions;let Pe=At;p.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Pe=e.toneMapping);const ze={shaderID:ve,shaderType:p.type,shaderName:p.name,vertexShader:et,fragmentShader:Je,defines:p.defines,customVertexShaderID:Ve,customFragmentShaderID:V,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:v,batching:Ee,batchingColor:Ee&&X._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&X.instanceColor!==null,instancingMorph:Ce&&X.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:q===null?e.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:mn,alphaToCoverage:!!p.alphaToCoverage,map:Ne,matcap:ot,envMap:m,envMapMode:m&&ne.mapping,envMapCubeUVHeight:H,aoMap:Ke,lightMap:Ue,bumpMap:Re,normalMap:ue,displacementMap:g&&qe,emissiveMap:pe,normalMapObjectSpace:ue&&p.normalMapType===Na,normalMapTangentSpace:ue&&p.normalMapType===ya,metalnessMap:we,roughnessMap:at,anisotropy:tt,anisotropyMap:F,clearcoat:u,clearcoatMap:ge,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:a,iridescence:U,iridescenceMap:me,iridescenceThicknessMap:J,sheen:G,sheenColorMap:oe,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:re,specularIntensityMap:Le,transmission:K,transmissionMap:S,thicknessMap:j,gradientMap:te,opaque:p.transparent===!1&&p.blending===ln&&p.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:k,combine:p.combine,mapUv:Ne&&L(p.map.channel),aoMapUv:Ke&&L(p.aoMap.channel),lightMapUv:Ue&&L(p.lightMap.channel),bumpMapUv:Re&&L(p.bumpMap.channel),normalMapUv:ue&&L(p.normalMap.channel),displacementMapUv:qe&&L(p.displacementMap.channel),emissiveMapUv:pe&&L(p.emissiveMap.channel),metalnessMapUv:we&&L(p.metalnessMap.channel),roughnessMapUv:at&&L(p.roughnessMap.channel),anisotropyMapUv:F&&L(p.anisotropyMap.channel),clearcoatMapUv:ge&&L(p.clearcoatMap.channel),clearcoatNormalMapUv:ee&&L(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&L(p.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&L(p.iridescenceMap.channel),iridescenceThicknessMapUv:J&&L(p.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&L(p.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&L(p.sheenRoughnessMap.channel),specularMapUv:_e&&L(p.specularMap.channel),specularColorMapUv:re&&L(p.specularColorMap.channel),specularIntensityMapUv:Le&&L(p.specularIntensityMap.channel),transmissionMapUv:S&&L(p.transmissionMap.channel),thicknessMapUv:j&&L(p.thicknessMap.channel),alphaMapUv:ce&&L(p.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ue||tt),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(Ne||ce),fog:!!Y,useFog:p.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:p.flatShading===!0&&p.wireframe===!1,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:le,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Be,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ne&&p.map.isVideoTexture===!0&&nt.getTransfer(p.map.colorSpace)===Ye,decodeVideoTextureEmissive:pe&&p.emissiveMap.isVideoTexture===!0&&nt.getTransfer(p.emissiveMap.colorSpace)===Ye,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Tt,flipSided:p.side===mt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:de&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&p.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return ze.vertexUv1s=T.has(1),ze.vertexUv2s=T.has(2),ze.vertexUv3s=T.has(3),T.clear(),ze}function r(p){const d=[];if(p.shaderID?d.push(p.shaderID):(d.push(p.customVertexShaderID),d.push(p.customFragmentShaderID)),p.defines!==void 0)for(const C in p.defines)d.push(C),d.push(p.defines[C]);return p.isRawShaderMaterial===!1&&(D(d,p),b(d,p),d.push(e.outputColorSpace)),d.push(p.customProgramCacheKey),d.join()}function D(p,d){p.push(d.precision),p.push(d.outputColorSpace),p.push(d.envMapMode),p.push(d.envMapCubeUVHeight),p.push(d.mapUv),p.push(d.alphaMapUv),p.push(d.lightMapUv),p.push(d.aoMapUv),p.push(d.bumpMapUv),p.push(d.normalMapUv),p.push(d.displacementMapUv),p.push(d.emissiveMapUv),p.push(d.metalnessMapUv),p.push(d.roughnessMapUv),p.push(d.anisotropyMapUv),p.push(d.clearcoatMapUv),p.push(d.clearcoatNormalMapUv),p.push(d.clearcoatRoughnessMapUv),p.push(d.iridescenceMapUv),p.push(d.iridescenceThicknessMapUv),p.push(d.sheenColorMapUv),p.push(d.sheenRoughnessMapUv),p.push(d.specularMapUv),p.push(d.specularColorMapUv),p.push(d.specularIntensityMapUv),p.push(d.transmissionMapUv),p.push(d.thicknessMapUv),p.push(d.combine),p.push(d.fogExp2),p.push(d.sizeAttenuation),p.push(d.morphTargetsCount),p.push(d.morphAttributeCount),p.push(d.numDirLights),p.push(d.numPointLights),p.push(d.numSpotLights),p.push(d.numSpotLightMaps),p.push(d.numHemiLights),p.push(d.numRectAreaLights),p.push(d.numDirLightShadows),p.push(d.numPointLightShadows),p.push(d.numSpotLightShadows),p.push(d.numSpotLightShadowsWithMaps),p.push(d.numLightProbes),p.push(d.shadowMapType),p.push(d.toneMapping),p.push(d.numClippingPlanes),p.push(d.numClipIntersection),p.push(d.depthPacking)}function b(p,d){l.disableAll(),d.supportsVertexTextures&&l.enable(0),d.instancing&&l.enable(1),d.instancingColor&&l.enable(2),d.instancingMorph&&l.enable(3),d.matcap&&l.enable(4),d.envMap&&l.enable(5),d.normalMapObjectSpace&&l.enable(6),d.normalMapTangentSpace&&l.enable(7),d.clearcoat&&l.enable(8),d.iridescence&&l.enable(9),d.alphaTest&&l.enable(10),d.vertexColors&&l.enable(11),d.vertexAlphas&&l.enable(12),d.vertexUv1s&&l.enable(13),d.vertexUv2s&&l.enable(14),d.vertexUv3s&&l.enable(15),d.vertexTangents&&l.enable(16),d.anisotropy&&l.enable(17),d.alphaHash&&l.enable(18),d.batching&&l.enable(19),d.dispersion&&l.enable(20),d.batchingColor&&l.enable(21),d.gradientMap&&l.enable(22),p.push(l.mask),l.disableAll(),d.fog&&l.enable(0),d.useFog&&l.enable(1),d.flatShading&&l.enable(2),d.logarithmicDepthBuffer&&l.enable(3),d.reversedDepthBuffer&&l.enable(4),d.skinning&&l.enable(5),d.morphTargets&&l.enable(6),d.morphNormals&&l.enable(7),d.morphColors&&l.enable(8),d.premultipliedAlpha&&l.enable(9),d.shadowMapEnabled&&l.enable(10),d.doubleSided&&l.enable(11),d.flipSided&&l.enable(12),d.useDepthPacking&&l.enable(13),d.dithering&&l.enable(14),d.transmission&&l.enable(15),d.sheen&&l.enable(16),d.opaque&&l.enable(17),d.pointsUvs&&l.enable(18),d.decodeVideoTexture&&l.enable(19),d.decodeVideoTextureEmissive&&l.enable(20),d.alphaToCoverage&&l.enable(21),p.push(l.mask)}function E(p){const d=y[p.type];let C;if(d){const B=Et[d];C=Ia.clone(B.uniforms)}else C=p.uniforms;return C}function O(p,d){let C;for(let B=0,X=M.length;B<X;B++){const Y=M[B];if(Y.cacheKey===d){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new vf(e,d,p,o),M.push(C)),C}function P(p){if(--p.usedTimes===0){const d=M.indexOf(p);M[d]=M[M.length-1],M.pop(),p.destroy()}}function N(p){A.remove(p)}function W(){A.dispose()}return{getParameters:f,getProgramCacheKey:r,getUniforms:E,acquireProgram:O,releaseProgram:P,releaseShaderCache:N,programs:M,dispose:W}}function Tf(){let e=new WeakMap;function n(h){return e.has(h)}function t(h){let l=e.get(h);return l===void 0&&(l={},e.set(h,l)),l}function i(h){e.delete(h)}function c(h,l,A){e.get(h)[l]=A}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:c,dispose:o}}function xf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function ir(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function rr(){const e=[];let n=0;const t=[],i=[],c=[];function o(){n=0,t.length=0,i.length=0,c.length=0}function h(_,g,v,y,L,f){let r=e[n];return r===void 0?(r={id:_.id,object:_,geometry:g,material:v,groupOrder:y,renderOrder:_.renderOrder,z:L,group:f},e[n]=r):(r.id=_.id,r.object=_,r.geometry=g,r.material=v,r.groupOrder=y,r.renderOrder=_.renderOrder,r.z=L,r.group=f),n++,r}function l(_,g,v,y,L,f){const r=h(_,g,v,y,L,f);v.transmission>0?i.push(r):v.transparent===!0?c.push(r):t.push(r)}function A(_,g,v,y,L,f){const r=h(_,g,v,y,L,f);v.transmission>0?i.unshift(r):v.transparent===!0?c.unshift(r):t.unshift(r)}function T(_,g){t.length>1&&t.sort(_||xf),i.length>1&&i.sort(g||ir),c.length>1&&c.sort(g||ir)}function M(){for(let _=n,g=e.length;_<g;_++){const v=e[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:c,init:o,push:l,unshift:A,finish:M,sort:T}}function Af(){let e=new WeakMap;function n(i,c){const o=e.get(i);let h;return o===void 0?(h=new rr,e.set(i,[h])):c>=o.length?(h=new rr,o.push(h)):h=o[c],h}function t(){e=new WeakMap}return{get:n,dispose:t}}function Rf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new We,color:new $e};break;case"SpotLight":t={position:new We,direction:new We,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new We,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new We,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new We,halfWidth:new We,halfHeight:new We};break}return e[n.id]=t,t}}}function bf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Cf=0;function Pf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Uf(e){const n=new Rf,t=bf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let T=0;T<9;T++)i.probe.push(new We);const c=new We,o=new Zt,h=new Zt;function l(T){let M=0,_=0,g=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let v=0,y=0,L=0,f=0,r=0,D=0,b=0,E=0,O=0,P=0,N=0;T.sort(Pf);for(let p=0,d=T.length;p<d;p++){const C=T[p],B=C.color,X=C.intensity,Y=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)M+=B.r*X,_+=B.g*X,g+=B.b*X;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],X);N++}else if(C.isDirectionalLight){const z=n.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ne=C.shadow,H=t.get(C);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[v]=H,i.directionalShadowMap[v]=$,i.directionalShadowMatrix[v]=C.shadow.matrix,D++}i.directional[v]=z,v++}else if(C.isSpotLight){const z=n.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(B).multiplyScalar(X),z.distance=Y,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[L]=z;const ne=C.shadow;if(C.map&&(i.spotLightMap[O]=C.map,O++,ne.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[L]=ne.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[L]=H,i.spotShadowMap[L]=$,E++}L++}else if(C.isRectAreaLight){const z=n.get(C);z.color.copy(B).multiplyScalar(X),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[f]=z,f++}else if(C.isPointLight){const z=n.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const ne=C.shadow,H=t.get(C);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[y]=H,i.pointShadowMap[y]=$,i.pointShadowMatrix[y]=C.shadow.matrix,b++}i.point[y]=z,y++}else if(C.isHemisphereLight){const z=n.get(C);z.skyColor.copy(C.color).multiplyScalar(X),z.groundColor.copy(C.groundColor).multiplyScalar(X),i.hemi[r]=z,r++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=M,i.ambient[1]=_,i.ambient[2]=g;const W=i.hash;(W.directionalLength!==v||W.pointLength!==y||W.spotLength!==L||W.rectAreaLength!==f||W.hemiLength!==r||W.numDirectionalShadows!==D||W.numPointShadows!==b||W.numSpotShadows!==E||W.numSpotMaps!==O||W.numLightProbes!==N)&&(i.directional.length=v,i.spot.length=L,i.rectArea.length=f,i.point.length=y,i.hemi.length=r,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,W.directionalLength=v,W.pointLength=y,W.spotLength=L,W.rectAreaLength=f,W.hemiLength=r,W.numDirectionalShadows=D,W.numPointShadows=b,W.numSpotShadows=E,W.numSpotMaps=O,W.numLightProbes=N,i.version=Cf++)}function A(T,M){let _=0,g=0,v=0,y=0,L=0;const f=M.matrixWorldInverse;for(let r=0,D=T.length;r<D;r++){const b=T[r];if(b.isDirectionalLight){const E=i.directional[_];E.direction.setFromMatrixPosition(b.matrixWorld),c.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(c),E.direction.transformDirection(f),_++}else if(b.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(b.matrixWorld),c.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(c),E.direction.transformDirection(f),v++}else if(b.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),h.identity(),o.copy(b.matrixWorld),o.premultiply(f),h.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(h),E.halfHeight.applyMatrix4(h),y++}else if(b.isPointLight){const E=i.point[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),g++}else if(b.isHemisphereLight){const E=i.hemi[L];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(f),L++}}}return{setup:l,setupView:A,state:i}}function ar(e){const n=new Uf(e),t=[],i=[];function c(M){T.camera=M,t.length=0,i.length=0}function o(M){t.push(M)}function h(M){i.push(M)}function l(){n.setup(t)}function A(M){n.setupView(t,M)}const T={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:T,setupLights:l,setupLightsView:A,pushLight:o,pushShadow:h}}function Lf(e){let n=new WeakMap;function t(c,o=0){const h=n.get(c);let l;return h===void 0?(l=new ar(e),n.set(c,[l])):o>=h.length?(l=new ar(e),h.push(l)):l=h[o],l}function i(){n=new WeakMap}return{get:t,dispose:i}}const Df=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function If(e,n,t){let i=new sr;const c=new ut,o=new ut,h=new dt,l=new ga({depthPacking:Ea}),A=new Sa,T={},M=t.maxTextureSize,_={[Qt]:mt,[mt]:Qt,[Tt]:Tt},g=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Df,fragmentShader:wf}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const y=new Xn;y.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new ct(y,g),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fr;let r=this.type;this.render=function(P,N,W){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const p=e.getRenderTarget(),d=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),B=e.state;B.setBlending(wt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=r!==Mt&&this.type===Mt,Y=r===Mt&&this.type!==Mt;for(let $=0,z=P.length;$<z;$++){const ne=P[$],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;c.copy(H.mapSize);const ve=H.getFrameExtents();if(c.multiply(ve),o.copy(H.mapSize),(c.x>M||c.y>M)&&(c.x>M&&(o.x=Math.floor(M/ve.x),c.x=o.x*ve.x,H.mapSize.x=o.x),c.y>M&&(o.y=Math.floor(M/ve.y),c.y=o.y*ve.y,H.mapSize.y=o.y)),H.map===null||X===!0||Y===!0){const De=this.type!==Mt?{minFilter:$t,magFilter:$t}:{};H.map!==null&&H.map.dispose(),H.map=new Vt(c.x,c.y,De),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const Te=H.getViewportCount();for(let De=0;De<Te;De++){const Be=H.getViewport(De);h.set(o.x*Be.x,o.y*Be.y,o.x*Be.z,o.y*Be.w),B.viewport(h),H.updateMatrices(ne,De),i=H.getFrustum(),E(N,W,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Mt&&D(H,W),H.needsUpdate=!1}r=this.type,f.needsUpdate=!1,e.setRenderTarget(p,d,C)};function D(P,N){const W=n.update(L);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Vt(c.x,c.y)),g.uniforms.shadow_pass.value=P.map.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(N,null,W,g,L,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(N,null,W,v,L,null)}function b(P,N,W,p){let d=null;const C=W.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)d=C;else if(d=W.isPointLight===!0?A:l,e.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const B=d.uuid,X=N.uuid;let Y=T[B];Y===void 0&&(Y={},T[B]=Y);let $=Y[X];$===void 0&&($=d.clone(),Y[X]=$,N.addEventListener("dispose",O)),d=$}if(d.visible=N.visible,d.wireframe=N.wireframe,p===Mt?d.side=N.shadowSide!==null?N.shadowSide:N.side:d.side=N.shadowSide!==null?N.shadowSide:_[N.side],d.alphaMap=N.alphaMap,d.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,d.map=N.map,d.clipShadows=N.clipShadows,d.clippingPlanes=N.clippingPlanes,d.clipIntersection=N.clipIntersection,d.displacementMap=N.displacementMap,d.displacementScale=N.displacementScale,d.displacementBias=N.displacementBias,d.wireframeLinewidth=N.wireframeLinewidth,d.linewidth=N.linewidth,W.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const B=e.properties.get(d);B.light=W}return d}function E(P,N,W,p,d){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&d===Mt)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld);const X=n.update(P),Y=P.material;if(Array.isArray(Y)){const $=X.groups;for(let z=0,ne=$.length;z<ne;z++){const H=$[z],ve=Y[H.materialIndex];if(ve&&ve.visible){const Te=b(P,ve,p,d);P.onBeforeShadow(e,P,N,W,X,Te,H),e.renderBufferDirect(W,null,X,Te,P,H),P.onAfterShadow(e,P,N,W,X,Te,H)}}}else if(Y.visible){const $=b(P,Y,p,d);P.onBeforeShadow(e,P,N,W,X,$,null),e.renderBufferDirect(W,null,X,$,P,null),P.onAfterShadow(e,P,N,W,X,$,null)}}const B=P.children;for(let X=0,Y=B.length;X<Y;X++)E(B[X],N,W,p,d)}function O(P){P.target.removeEventListener("dispose",O);for(const W in T){const p=T[W],d=P.target.uuid;d in p&&(p[d].dispose(),delete p[d])}}}const yf={[Gn]:Bn,[Fn]:yn,[On]:In,[un]:Nn,[Bn]:Gn,[yn]:Fn,[In]:On,[Nn]:un};function Nf(e,n){function t(){let S=!1;const j=new dt;let te=null;const ce=new dt(0,0,0,0);return{setMask:function(Z){te!==Z&&!S&&(e.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){S=Z},setClear:function(Z,k,de,Pe,ze){ze===!0&&(Z*=Pe,k*=Pe,de*=Pe),j.set(Z,k,de,Pe),ce.equals(j)===!1&&(e.clearColor(Z,k,de,Pe),ce.copy(j))},reset:function(){S=!1,te=null,ce.set(-1,0,0,0)}}}function i(){let S=!1,j=!1,te=null,ce=null,Z=null;return{setReversed:function(k){if(j!==k){const de=n.get("EXT_clip_control");k?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),j=k;const Pe=Z;Z=null,this.setClear(Pe)}},getReversed:function(){return j},setTest:function(k){k?q(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(k){te!==k&&!S&&(e.depthMask(k),te=k)},setFunc:function(k){if(j&&(k=yf[k]),ce!==k){switch(k){case Gn:e.depthFunc(e.NEVER);break;case Bn:e.depthFunc(e.ALWAYS);break;case Fn:e.depthFunc(e.LESS);break;case un:e.depthFunc(e.LEQUAL);break;case On:e.depthFunc(e.EQUAL);break;case Nn:e.depthFunc(e.GEQUAL);break;case yn:e.depthFunc(e.GREATER);break;case In:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ce=k}},setLocked:function(k){S=k},setClear:function(k){Z!==k&&(j&&(k=1-k),e.clearDepth(k),Z=k)},reset:function(){S=!1,te=null,ce=null,Z=null,j=!1}}}function c(){let S=!1,j=null,te=null,ce=null,Z=null,k=null,de=null,Pe=null,ze=null;return{setTest:function(Ge){S||(Ge?q(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(Ge){j!==Ge&&!S&&(e.stencilMask(Ge),j=Ge)},setFunc:function(Ge,St,gt){(te!==Ge||ce!==St||Z!==gt)&&(e.stencilFunc(Ge,St,gt),te=Ge,ce=St,Z=gt)},setOp:function(Ge,St,gt){(k!==Ge||de!==St||Pe!==gt)&&(e.stencilOp(Ge,St,gt),k=Ge,de=St,Pe=gt)},setLocked:function(Ge){S=Ge},setClear:function(Ge){ze!==Ge&&(e.clearStencil(Ge),ze=Ge)},reset:function(){S=!1,j=null,te=null,ce=null,Z=null,k=null,de=null,Pe=null,ze=null}}}const o=new t,h=new i,l=new c,A=new WeakMap,T=new WeakMap;let M={},_={},g=new WeakMap,v=[],y=null,L=!1,f=null,r=null,D=null,b=null,E=null,O=null,P=null,N=new $e(0,0,0),W=0,p=!1,d=null,C=null,B=null,X=null,Y=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=ne>=2);let ve=null,Te={};const De=e.getParameter(e.SCISSOR_BOX),Be=e.getParameter(e.VIEWPORT),et=new dt().fromArray(De),Je=new dt().fromArray(Be);function Ve(S,j,te,ce){const Z=new Uint8Array(4),k=e.createTexture();e.bindTexture(S,k),e.texParameteri(S,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(S,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let de=0;de<te;de++)S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,ce,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(j+de,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return k}const V={};V[e.TEXTURE_2D]=Ve(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=Ve(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=Ve(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=Ve(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),h.setClear(1),l.setClear(0),q(e.DEPTH_TEST),h.setFunc(un),Re(!1),ue(Pi),q(e.CULL_FACE),Ke(wt);function q(S){M[S]!==!0&&(e.enable(S),M[S]=!0)}function le(S){M[S]!==!1&&(e.disable(S),M[S]=!1)}function Ce(S,j){return _[S]!==j?(e.bindFramebuffer(S,j),_[S]=j,S===e.DRAW_FRAMEBUFFER&&(_[e.FRAMEBUFFER]=j),S===e.FRAMEBUFFER&&(_[e.DRAW_FRAMEBUFFER]=j),!0):!1}function Ee(S,j){let te=v,ce=!1;if(S){te=g.get(j),te===void 0&&(te=[],g.set(j,te));const Z=S.textures;if(te.length!==Z.length||te[0]!==e.COLOR_ATTACHMENT0){for(let k=0,de=Z.length;k<de;k++)te[k]=e.COLOR_ATTACHMENT0+k;te.length=Z.length,ce=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,ce=!0);ce&&e.drawBuffers(te)}function Ne(S){return y!==S?(e.useProgram(S),y=S,!0):!1}const ot={[Xt]:e.FUNC_ADD,[zr]:e.FUNC_SUBTRACT,[Wr]:e.FUNC_REVERSE_SUBTRACT};ot[to]=e.MIN,ot[no]=e.MAX;const m={[aa]:e.ZERO,[ra]:e.ONE,[ia]:e.SRC_COLOR,[na]:e.SRC_ALPHA,[ta]:e.SRC_ALPHA_SATURATE,[ea]:e.DST_COLOR,[jr]:e.DST_ALPHA,[Jr]:e.ONE_MINUS_SRC_COLOR,[Qr]:e.ONE_MINUS_SRC_ALPHA,[Zr]:e.ONE_MINUS_DST_COLOR,[$r]:e.ONE_MINUS_DST_ALPHA,[qr]:e.CONSTANT_COLOR,[Kr]:e.ONE_MINUS_CONSTANT_COLOR,[Yr]:e.CONSTANT_ALPHA,[Xr]:e.ONE_MINUS_CONSTANT_ALPHA};function Ke(S,j,te,ce,Z,k,de,Pe,ze,Ge){if(S===wt){L===!0&&(le(e.BLEND),L=!1);return}if(L===!1&&(q(e.BLEND),L=!0),S!==Da){if(S!==f||Ge!==p){if((r!==Xt||E!==Xt)&&(e.blendEquation(e.FUNC_ADD),r=Xt,E=Xt),Ge)switch(S){case ln:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Di:e.blendFunc(e.ONE,e.ONE);break;case Li:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ui:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case ln:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Di:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Li:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ui:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}D=null,b=null,O=null,P=null,N.set(0,0,0),W=0,f=S,p=Ge}return}Z=Z||j,k=k||te,de=de||ce,(j!==r||Z!==E)&&(e.blendEquationSeparate(ot[j],ot[Z]),r=j,E=Z),(te!==D||ce!==b||k!==O||de!==P)&&(e.blendFuncSeparate(m[te],m[ce],m[k],m[de]),D=te,b=ce,O=k,P=de),(Pe.equals(N)===!1||ze!==W)&&(e.blendColor(Pe.r,Pe.g,Pe.b,ze),N.copy(Pe),W=ze),f=S,p=!1}function Ue(S,j){S.side===Tt?le(e.CULL_FACE):q(e.CULL_FACE);let te=S.side===mt;j&&(te=!te),Re(te),S.blending===ln&&S.transparent===!1?Ke(wt):Ke(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),h.setFunc(S.depthFunc),h.setTest(S.depthTest),h.setMask(S.depthWrite),o.setMask(S.colorWrite);const ce=S.stencilWrite;l.setTest(ce),ce&&(l.setMask(S.stencilWriteMask),l.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),l.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),pe(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?q(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(S){d!==S&&(S?e.frontFace(e.CW):e.frontFace(e.CCW),d=S)}function ue(S){S!==Ua?(q(e.CULL_FACE),S!==C&&(S===Pi?e.cullFace(e.BACK):S===La?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),C=S}function qe(S){S!==B&&(z&&e.lineWidth(S),B=S)}function pe(S,j,te){S?(q(e.POLYGON_OFFSET_FILL),(X!==j||Y!==te)&&(e.polygonOffset(j,te),X=j,Y=te)):le(e.POLYGON_OFFSET_FILL)}function we(S){S?q(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function at(S){S===void 0&&(S=e.TEXTURE0+$-1),ve!==S&&(e.activeTexture(S),ve=S)}function tt(S,j,te){te===void 0&&(ve===null?te=e.TEXTURE0+$-1:te=ve);let ce=Te[te];ce===void 0&&(ce={type:void 0,texture:void 0},Te[te]=ce),(ce.type!==S||ce.texture!==j)&&(ve!==te&&(e.activeTexture(te),ve=te),e.bindTexture(S,j||V[S]),ce.type=S,ce.texture=j)}function u(){const S=Te[ve];S!==void 0&&S.type!==void 0&&(e.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function a(){try{e.compressedTexImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function U(){try{e.compressedTexImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function G(){try{e.texSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function K(){try{e.texSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ge(){try{e.compressedTexSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ee(){try{e.texStorage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function he(){try{e.texStorage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function me(){try{e.texImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function J(){try{e.texImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function oe(S){et.equals(S)===!1&&(e.scissor(S.x,S.y,S.z,S.w),et.copy(S))}function Ae(S){Je.equals(S)===!1&&(e.viewport(S.x,S.y,S.z,S.w),Je.copy(S))}function _e(S,j){let te=T.get(j);te===void 0&&(te=new WeakMap,T.set(j,te));let ce=te.get(S);ce===void 0&&(ce=e.getUniformBlockIndex(j,S.name),te.set(S,ce))}function re(S,j){const ce=T.get(j).get(S);A.get(j)!==ce&&(e.uniformBlockBinding(j,ce,S.__bindingPointIndex),A.set(j,ce))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),h.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),M={},ve=null,Te={},_={},g=new WeakMap,v=[],y=null,L=!1,f=null,r=null,D=null,b=null,E=null,O=null,P=null,N=new $e(0,0,0),W=0,p=!1,d=null,C=null,B=null,X=null,Y=null,et.set(0,0,e.canvas.width,e.canvas.height),Je.set(0,0,e.canvas.width,e.canvas.height),o.reset(),h.reset(),l.reset()}return{buffers:{color:o,depth:h,stencil:l},enable:q,disable:le,bindFramebuffer:Ce,drawBuffers:Ee,useProgram:Ne,setBlending:Ke,setMaterial:Ue,setFlipSided:Re,setCullFace:ue,setLineWidth:qe,setPolygonOffset:pe,setScissorTest:we,activeTexture:at,bindTexture:tt,unbindTexture:u,compressedTexImage2D:a,compressedTexImage3D:U,texImage2D:me,texImage3D:J,updateUBOMapping:_e,uniformBlockBinding:re,texStorage2D:ee,texStorage3D:he,texSubImage2D:G,texSubImage3D:K,compressedTexSubImage2D:F,compressedTexSubImage3D:ge,scissor:oe,viewport:Ae,reset:Le}}function Of(e,n,t,i,c,o,h){const l=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new ut,M=new WeakMap;let _;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(u,a){return v?new OffscreenCanvas(u,a):Qa("canvas")}function L(u,a,U){let G=1;const K=tt(u);if((K.width>U||K.height>U)&&(G=U/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const F=Math.floor(G*K.width),ge=Math.floor(G*K.height);_===void 0&&(_=y(F,ge));const ee=a?y(F,ge):_;return ee.width=F,ee.height=ge,ee.getContext("2d").drawImage(u,0,0,F,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+F+"x"+ge+")."),ee}else return"data"in u&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),u;return u}function f(u){return u.generateMipmaps}function r(u){e.generateMipmap(u)}function D(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(u,a,U,G,K=!1){if(u!==null){if(e[u]!==void 0)return e[u];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let F=a;if(a===e.RED&&(U===e.FLOAT&&(F=e.R32F),U===e.HALF_FLOAT&&(F=e.R16F),U===e.UNSIGNED_BYTE&&(F=e.R8)),a===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(F=e.R8UI),U===e.UNSIGNED_SHORT&&(F=e.R16UI),U===e.UNSIGNED_INT&&(F=e.R32UI),U===e.BYTE&&(F=e.R8I),U===e.SHORT&&(F=e.R16I),U===e.INT&&(F=e.R32I)),a===e.RG&&(U===e.FLOAT&&(F=e.RG32F),U===e.HALF_FLOAT&&(F=e.RG16F),U===e.UNSIGNED_BYTE&&(F=e.RG8)),a===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(F=e.RG8UI),U===e.UNSIGNED_SHORT&&(F=e.RG16UI),U===e.UNSIGNED_INT&&(F=e.RG32UI),U===e.BYTE&&(F=e.RG8I),U===e.SHORT&&(F=e.RG16I),U===e.INT&&(F=e.RG32I)),a===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(F=e.RGB8UI),U===e.UNSIGNED_SHORT&&(F=e.RGB16UI),U===e.UNSIGNED_INT&&(F=e.RGB32UI),U===e.BYTE&&(F=e.RGB8I),U===e.SHORT&&(F=e.RGB16I),U===e.INT&&(F=e.RGB32I)),a===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),U===e.UNSIGNED_INT&&(F=e.RGBA32UI),U===e.BYTE&&(F=e.RGBA8I),U===e.SHORT&&(F=e.RGBA16I),U===e.INT&&(F=e.RGBA32I)),a===e.RGB&&(U===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),a===e.RGBA){const ge=K?Tr:nt.getTransfer(G);U===e.FLOAT&&(F=e.RGBA32F),U===e.HALF_FLOAT&&(F=e.RGBA16F),U===e.UNSIGNED_BYTE&&(F=ge===Ye?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&n.get("EXT_color_buffer_float"),F}function E(u,a){let U;return u?a===null||a===en||a===jt?U=e.DEPTH24_STENCIL8:a===Dt?U=e.DEPTH32F_STENCIL8:a===pn&&(U=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===en||a===jt?U=e.DEPTH_COMPONENT24:a===Dt?U=e.DEPTH_COMPONENT32F:a===pn&&(U=e.DEPTH_COMPONENT16),U}function O(u,a){return f(u)===!0||u.isFramebufferTexture&&u.minFilter!==$t&&u.minFilter!==Gt?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function P(u){const a=u.target;a.removeEventListener("dispose",P),W(a),a.isVideoTexture&&M.delete(a)}function N(u){const a=u.target;a.removeEventListener("dispose",N),d(a)}function W(u){const a=i.get(u);if(a.__webglInit===void 0)return;const U=u.source,G=g.get(U);if(G){const K=G[a.__cacheKey];K.usedTimes--,K.usedTimes===0&&p(u),Object.keys(G).length===0&&g.delete(U)}i.remove(u)}function p(u){const a=i.get(u);e.deleteTexture(a.__webglTexture);const U=u.source,G=g.get(U);delete G[a.__cacheKey],h.memory.textures--}function d(u){const a=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(a.__webglFramebuffer[G]))for(let K=0;K<a.__webglFramebuffer[G].length;K++)e.deleteFramebuffer(a.__webglFramebuffer[G][K]);else e.deleteFramebuffer(a.__webglFramebuffer[G]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[G])}else{if(Array.isArray(a.__webglFramebuffer))for(let G=0;G<a.__webglFramebuffer.length;G++)e.deleteFramebuffer(a.__webglFramebuffer[G]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let G=0;G<a.__webglColorRenderbuffer.length;G++)a.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[G]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const U=u.textures;for(let G=0,K=U.length;G<K;G++){const F=i.get(U[G]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),h.memory.textures--),i.remove(U[G])}i.remove(u)}let C=0;function B(){C=0}function X(){const u=C;return u>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+c.maxTextures),C+=1,u}function Y(u){const a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function $(u,a){const U=i.get(u);if(u.isVideoTexture&&we(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&U.__version!==u.version){const G=u.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(U,u,a);return}}else u.isExternalTexture&&(U.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+a)}function z(u,a){const U=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&U.__version!==u.version){V(U,u,a);return}t.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+a)}function ne(u,a){const U=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&U.__version!==u.version){V(U,u,a);return}t.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+a)}function H(u,a){const U=i.get(u);if(u.version>0&&U.__version!==u.version){q(U,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+a)}const ve={[ca]:e.REPEAT,[sa]:e.CLAMP_TO_EDGE,[oa]:e.MIRRORED_REPEAT},Te={[$t]:e.NEAREST,[la]:e.NEAREST_MIPMAP_NEAREST,[rn]:e.NEAREST_MIPMAP_LINEAR,[Gt]:e.LINEAR,[Mn]:e.LINEAR_MIPMAP_NEAREST,[Yt]:e.LINEAR_MIPMAP_LINEAR},De={[_a]:e.NEVER,[ma]:e.ALWAYS,[ha]:e.LESS,[lr]:e.LEQUAL,[pa]:e.EQUAL,[ua]:e.GEQUAL,[da]:e.GREATER,[fa]:e.NOTEQUAL};function Be(u,a){if(a.type===Dt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===Gt||a.magFilter===Mn||a.magFilter===rn||a.magFilter===Yt||a.minFilter===Gt||a.minFilter===Mn||a.minFilter===rn||a.minFilter===Yt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,ve[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,ve[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,ve[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Te[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Te[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,De[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===$t||a.minFilter!==rn&&a.minFilter!==Yt||a.type===Dt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const U=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,c.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function et(u,a){let U=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",P));const G=a.source;let K=g.get(G);K===void 0&&(K={},g.set(G,K));const F=Y(a);if(F!==u.__cacheKey){K[F]===void 0&&(K[F]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,U=!0),K[F].usedTimes++;const ge=K[u.__cacheKey];ge!==void 0&&(K[u.__cacheKey].usedTimes--,ge.usedTimes===0&&p(a)),u.__cacheKey=F,u.__webglTexture=K[F].texture}return U}function Je(u,a,U){return Math.floor(Math.floor(u/U)/a)}function Ve(u,a,U,G){const F=u.updateRanges;if(F.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,U,G,a.data);else{F.sort((J,oe)=>J.start-oe.start);let ge=0;for(let J=1;J<F.length;J++){const oe=F[ge],Ae=F[J],_e=oe.start+oe.count,re=Je(Ae.start,a.width,4),Le=Je(oe.start,a.width,4);Ae.start<=_e+1&&re===Le&&Je(Ae.start+Ae.count-1,a.width,4)===re?oe.count=Math.max(oe.count,Ae.start+Ae.count-oe.start):(++ge,F[ge]=Ae)}F.length=ge+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),he=e.getParameter(e.UNPACK_SKIP_PIXELS),me=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let J=0,oe=F.length;J<oe;J++){const Ae=F[J],_e=Math.floor(Ae.start/4),re=Math.ceil(Ae.count/4),Le=_e%a.width,S=Math.floor(_e/a.width),j=re,te=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Le),e.pixelStorei(e.UNPACK_SKIP_ROWS,S),t.texSubImage2D(e.TEXTURE_2D,0,Le,S,j,te,U,G,a.data)}u.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,he),e.pixelStorei(e.UNPACK_SKIP_ROWS,me)}}function V(u,a,U){let G=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(G=e.TEXTURE_3D);const K=et(u,a),F=a.source;t.bindTexture(G,u.__webglTexture,e.TEXTURE0+U);const ge=i.get(F);if(F.version!==ge.__version||K===!0){t.activeTexture(e.TEXTURE0+U);const ee=nt.getPrimaries(nt.workingColorSpace),he=a.colorSpace===Bt?null:nt.getPrimaries(a.colorSpace),me=a.colorSpace===Bt||ee===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let J=L(a.image,!1,c.maxTextureSize);J=at(a,J);const oe=o.convert(a.format,a.colorSpace),Ae=o.convert(a.type);let _e=b(a.internalFormat,oe,Ae,a.colorSpace,a.isVideoTexture);Be(G,a);let re;const Le=a.mipmaps,S=a.isVideoTexture!==!0,j=ge.__version===void 0||K===!0,te=F.dataReady,ce=O(a,J);if(a.isDepthTexture)_e=E(a.format===dn,a.type),j&&(S?t.texStorage2D(e.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Ae,null));else if(a.isDataTexture)if(Le.length>0){S&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Le[0].width,Le[0].height);for(let Z=0,k=Le.length;Z<k;Z++)re=Le[Z],S?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,Ae,re.data):t.texImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,oe,Ae,re.data);a.generateMipmaps=!1}else S?(j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,J.width,J.height),te&&Ve(a,J,oe,Ae)):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Ae,J.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){S&&j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,Le[0].width,Le[0].height,J.depth);for(let Z=0,k=Le.length;Z<k;Z++)if(re=Le[Z],a.format!==xt)if(oe!==null)if(S){if(te)if(a.layerUpdates.size>0){const de=Ii(re.width,re.height,a.format,a.type);for(const Pe of a.layerUpdates){const ze=re.data.subarray(Pe*de/re.data.BYTES_PER_ELEMENT,(Pe+1)*de/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Pe,re.width,re.height,1,oe,ze)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,oe,re.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,_e,re.width,re.height,J.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else S?te&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,oe,Ae,re.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,_e,re.width,re.height,J.depth,0,oe,Ae,re.data)}else{S&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Le[0].width,Le[0].height);for(let Z=0,k=Le.length;Z<k;Z++)re=Le[Z],a.format!==xt?oe!==null?S?te&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,re.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,Ae,re.data):t.texImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,oe,Ae,re.data)}else if(a.isDataArrayTexture)if(S){if(j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,J.width,J.height,J.depth),te)if(a.layerUpdates.size>0){const Z=Ii(J.width,J.height,a.format,a.type);for(const k of a.layerUpdates){const de=J.data.subarray(k*Z/J.data.BYTES_PER_ELEMENT,(k+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,k,J.width,J.height,1,oe,Ae,de)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,Ae,J.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,oe,Ae,J.data);else if(a.isData3DTexture)S?(j&&t.texStorage3D(e.TEXTURE_3D,ce,_e,J.width,J.height,J.depth),te&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,Ae,J.data)):t.texImage3D(e.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,oe,Ae,J.data);else if(a.isFramebufferTexture){if(j)if(S)t.texStorage2D(e.TEXTURE_2D,ce,_e,J.width,J.height);else{let Z=J.width,k=J.height;for(let de=0;de<ce;de++)t.texImage2D(e.TEXTURE_2D,de,_e,Z,k,0,oe,Ae,null),Z>>=1,k>>=1}}else if(Le.length>0){if(S&&j){const Z=tt(Le[0]);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}for(let Z=0,k=Le.length;Z<k;Z++)re=Le[Z],S?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,oe,Ae,re):t.texImage2D(e.TEXTURE_2D,Z,_e,oe,Ae,re);a.generateMipmaps=!1}else if(S){if(j){const Z=tt(J);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}te&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,Ae,J)}else t.texImage2D(e.TEXTURE_2D,0,_e,oe,Ae,J);f(a)&&r(G),ge.__version=F.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function q(u,a,U){if(a.image.length!==6)return;const G=et(u,a),K=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+U);const F=i.get(K);if(K.version!==F.__version||G===!0){t.activeTexture(e.TEXTURE0+U);const ge=nt.getPrimaries(nt.workingColorSpace),ee=a.colorSpace===Bt?null:nt.getPrimaries(a.colorSpace),he=a.colorSpace===Bt||ge===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const me=a.isCompressedTexture||a.image[0].isCompressedTexture,J=a.image[0]&&a.image[0].isDataTexture,oe=[];for(let k=0;k<6;k++)!me&&!J?oe[k]=L(a.image[k],!0,c.maxCubemapSize):oe[k]=J?a.image[k].image:a.image[k],oe[k]=at(a,oe[k]);const Ae=oe[0],_e=o.convert(a.format,a.colorSpace),re=o.convert(a.type),Le=b(a.internalFormat,_e,re,a.colorSpace),S=a.isVideoTexture!==!0,j=F.__version===void 0||G===!0,te=K.dataReady;let ce=O(a,Ae);Be(e.TEXTURE_CUBE_MAP,a);let Z;if(me){S&&j&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Le,Ae.width,Ae.height);for(let k=0;k<6;k++){Z=oe[k].mipmaps;for(let de=0;de<Z.length;de++){const Pe=Z[de];a.format!==xt?_e!==null?S?te&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,Pe.width,Pe.height,_e,Pe.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,Le,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,Pe.width,Pe.height,_e,re,Pe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,Le,Pe.width,Pe.height,0,_e,re,Pe.data)}}}else{if(Z=a.mipmaps,S&&j){Z.length>0&&ce++;const k=tt(oe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Le,k.width,k.height)}for(let k=0;k<6;k++)if(J){S?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,oe[k].width,oe[k].height,_e,re,oe[k].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Le,oe[k].width,oe[k].height,0,_e,re,oe[k].data);for(let de=0;de<Z.length;de++){const ze=Z[de].image[k].image;S?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,ze.width,ze.height,_e,re,ze.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,Le,ze.width,ze.height,0,_e,re,ze.data)}}else{S?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,_e,re,oe[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Le,_e,re,oe[k]);for(let de=0;de<Z.length;de++){const Pe=Z[de];S?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,_e,re,Pe.image[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,Le,_e,re,Pe.image[k])}}}f(a)&&r(e.TEXTURE_CUBE_MAP),F.__version=K.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function le(u,a,U,G,K,F){const ge=o.convert(U.format,U.colorSpace),ee=o.convert(U.type),he=b(U.internalFormat,ge,ee,U.colorSpace),me=i.get(a),J=i.get(U);if(J.__renderTarget=a,!me.__hasExternalTextures){const oe=Math.max(1,a.width>>F),Ae=Math.max(1,a.height>>F);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?t.texImage3D(K,F,he,oe,Ae,a.depth,0,ge,ee,null):t.texImage2D(K,F,he,oe,Ae,0,ge,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),pe(a)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,K,J.__webglTexture,0,qe(a)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,K,J.__webglTexture,F),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(u,a,U){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){const G=a.depthTexture,K=G&&G.isDepthTexture?G.type:null,F=E(a.stencilBuffer,K),ge=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=qe(a);pe(a)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,F,a.width,a.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,F,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,F,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ge,e.RENDERBUFFER,u)}else{const G=a.textures;for(let K=0;K<G.length;K++){const F=G[K],ge=o.convert(F.format,F.colorSpace),ee=o.convert(F.type),he=b(F.internalFormat,ge,ee,F.colorSpace),me=qe(a);U&&pe(a)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,me,he,a.width,a.height):pe(a)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me,he,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,he,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(u,a){if(a&&a.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(a.depthTexture);G.__renderTarget=a,(!G.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),$(a.depthTexture,0);const K=G.__webglTexture,F=qe(a);if(a.depthTexture.format===zn)pe(a)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(a.depthTexture.format===dn)pe(a)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ne(u){const a=i.get(u),U=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){const G=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),G){const K=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),a.__depthDisposeCallback=K}a.__boundDepthTexture=G}if(u.depthTexture&&!a.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const G=u.texture.mipmaps;G&&G.length>0?Ee(a.__webglFramebuffer[0],u):Ee(a.__webglFramebuffer,u)}else if(U){a.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[G]),a.__webglDepthbuffer[G]===void 0)a.__webglDepthbuffer[G]=e.createRenderbuffer(),Ce(a.__webglDepthbuffer[G],u,!1);else{const K=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=a.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,F)}}else{const G=u.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),Ce(a.__webglDepthbuffer,u,!1);else{const K=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,F)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ot(u,a,U){const G=i.get(u);a!==void 0&&le(G.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&Ne(u)}function m(u){const a=u.texture,U=i.get(u),G=i.get(a);u.addEventListener("dispose",N);const K=u.textures,F=u.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=a.version,h.memory.textures++),F){U.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0){U.__webglFramebuffer[ee]=[];for(let he=0;he<a.mipmaps.length;he++)U.__webglFramebuffer[ee][he]=e.createFramebuffer()}else U.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){U.__webglFramebuffer=[];for(let ee=0;ee<a.mipmaps.length;ee++)U.__webglFramebuffer[ee]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(ge)for(let ee=0,he=K.length;ee<he;ee++){const me=i.get(K[ee]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),h.memory.textures++)}if(u.samples>0&&pe(u)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ee=0;ee<K.length;ee++){const he=K[ee];U.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[ee]);const me=o.convert(he.format,he.colorSpace),J=o.convert(he.type),oe=b(he.internalFormat,me,J,he.colorSpace,u.isXRRenderTarget===!0),Ae=qe(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,oe,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,U.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){t.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Be(e.TEXTURE_CUBE_MAP,a);for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0)for(let he=0;he<a.mipmaps.length;he++)le(U.__webglFramebuffer[ee][he],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else le(U.__webglFramebuffer[ee],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(a)&&r(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ee=0,he=K.length;ee<he;ee++){const me=K[ee],J=i.get(me);let oe=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(oe=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Be(oe,me),le(U.__webglFramebuffer,u,me,e.COLOR_ATTACHMENT0+ee,oe,0),f(me)&&r(oe)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(ee=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,G.__webglTexture),Be(ee,a),a.mipmaps&&a.mipmaps.length>0)for(let he=0;he<a.mipmaps.length;he++)le(U.__webglFramebuffer[he],u,a,e.COLOR_ATTACHMENT0,ee,he);else le(U.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,ee,0);f(a)&&r(ee),t.unbindTexture()}u.depthBuffer&&Ne(u)}function Ke(u){const a=u.textures;for(let U=0,G=a.length;U<G;U++){const K=a[U];if(f(K)){const F=D(u),ge=i.get(K).__webglTexture;t.bindTexture(F,ge),r(F),t.unbindTexture()}}}const Ue=[],Re=[];function ue(u){if(u.samples>0){if(pe(u)===!1){const a=u.textures,U=u.width,G=u.height;let K=e.COLOR_BUFFER_BIT;const F=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=i.get(u),ee=a.length>1;if(ee)for(let me=0;me<a.length;me++)t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const he=u.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let me=0;me<a.length;me++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const J=i.get(a[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,U,G,0,0,U,G,K,e.NEAREST),A===!0&&(Ue.length=0,Re.length=0,Ue.push(e.COLOR_ATTACHMENT0+me),u.depthBuffer&&u.resolveDepthBuffer===!1&&(Ue.push(F),Re.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Re)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<a.length;me++){t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const J=i.get(a[me]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,J,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&A){const a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function qe(u){return Math.min(c.maxSamples,u.samples)}function pe(u){const a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function we(u){const a=h.render.frame;M.get(u)!==a&&(M.set(u,a),u.update())}function at(u,a){const U=u.colorSpace,G=u.format,K=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||U!==mn&&U!==Bt&&(nt.getTransfer(U)===Ye?(G!==xt||K!==It)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),a}function tt(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(T.width=u.naturalWidth||u.width,T.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(T.width=u.displayWidth,T.height=u.displayHeight):(T.width=u.width,T.height=u.height),T}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=ot,this.setupRenderTarget=m,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=le,this.useMultisampledRTT=pe}function Ff(e,n){function t(i,c=Bt){let o;const h=nt.getTransfer(c);if(i===It)return e.UNSIGNED_BYTE;if(i===dr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ur)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Ma)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ta)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===xa)return e.BYTE;if(i===Aa)return e.SHORT;if(i===pn)return e.UNSIGNED_SHORT;if(i===mr)return e.INT;if(i===en)return e.UNSIGNED_INT;if(i===Dt)return e.FLOAT;if(i===hn)return e.HALF_FLOAT;if(i===Ra)return e.ALPHA;if(i===ba)return e.RGB;if(i===xt)return e.RGBA;if(i===zn)return e.DEPTH_COMPONENT;if(i===dn)return e.DEPTH_STENCIL;if(i===Ca)return e.RED;if(i===_r)return e.RED_INTEGER;if(i===Pa)return e.RG;if(i===vr)return e.RG_INTEGER;if(i===gr)return e.RGBA_INTEGER;if(i===Tn||i===xn||i===An||i===Rn)if(h===Ye)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Tn)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===An)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Tn)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xn)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===An)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rn)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ei||i===ti||i===ni||i===ii)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ei)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ti)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ni)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ii)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ri||i===ai||i===oi)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ri||i===ai)return h===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===oi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===si||i===ci||i===li||i===fi||i===di||i===ui||i===pi||i===hi||i===mi||i===_i||i===vi||i===gi||i===Ei||i===Si)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===si)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ci)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===li)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===di)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ui)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_i)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ei)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Si)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mi||i===Ti||i===xi)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===Mi)return h===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ti)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xi)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ai||i===Ri||i===bi||i===Ci)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ai)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ri)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bi)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ci)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jt?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Bf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new pr(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new yt({vertexShader:Bf,fragmentShader:Gf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new hr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vf extends Hr{constructor(n,t){super();const i=this;let c=null,o=1,h=null,l="local-floor",A=1,T=null,M=null,_=null,g=null,v=null,y=null;const L=typeof XRWebGLBinding<"u",f=new Hf,r={},D=t.getContextAttributes();let b=null,E=null;const O=[],P=[],N=new ut;let W=null;const p=new cn;p.viewport=new dt;const d=new cn;d.viewport=new dt;const C=[p,d],B=new Vr;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=O[V];return q===void 0&&(q=new Sn,O[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=O[V];return q===void 0&&(q=new Sn,O[V]=q),q.getGripSpace()},this.getHand=function(V){let q=O[V];return q===void 0&&(q=new Sn,O[V]=q),q.getHandSpace()};function $(V){const q=P.indexOf(V.inputSource);if(q===-1)return;const le=O[q];le!==void 0&&(le.update(V.inputSource,V.frame,T||h),le.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){c.removeEventListener("select",$),c.removeEventListener("selectstart",$),c.removeEventListener("selectend",$),c.removeEventListener("squeeze",$),c.removeEventListener("squeezestart",$),c.removeEventListener("squeezeend",$),c.removeEventListener("end",z),c.removeEventListener("inputsourceschange",ne);for(let V=0;V<O.length;V++){const q=P[V];q!==null&&(P[V]=null,O[V].disconnect(q))}X=null,Y=null,f.reset();for(const V in r)delete r[V];n.setRenderTarget(b),v=null,g=null,_=null,c=null,E=null,Ve.stop(),i.isPresenting=!1,n.setPixelRatio(W),n.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){l=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return T||h},this.setReferenceSpace=function(V){T=V},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return _===null&&L&&(_=new XRWebGLBinding(c,t)),_},this.getFrame=function(){return y},this.getSession=function(){return c},this.setSession=async function(V){if(c=V,c!==null){if(b=n.getRenderTarget(),c.addEventListener("select",$),c.addEventListener("selectstart",$),c.addEventListener("selectend",$),c.addEventListener("squeeze",$),c.addEventListener("squeezestart",$),c.addEventListener("squeezeend",$),c.addEventListener("end",z),c.addEventListener("inputsourceschange",ne),D.xrCompatible!==!0&&await t.makeXRCompatible(),W=n.getPixelRatio(),n.getSize(N),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ce=null,Ee=null;D.depth&&(Ee=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=D.stencil?dn:zn,Ce=D.stencil?jt:en);const Ne={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:o};_=this.getBinding(),g=_.createProjectionLayer(Ne),c.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),E=new Vt(g.textureWidth,g.textureHeight,{format:xt,type:It,depthTexture:new cr(g.textureWidth,g.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:D.stencil,colorSpace:n.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const le={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(c,t,le),c.updateRenderState({baseLayer:v}),n.setPixelRatio(1),n.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new Vt(v.framebufferWidth,v.framebufferHeight,{format:xt,type:It,colorSpace:n.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(A),T=null,h=await c.requestReferenceSpace(l),Ve.setContext(c),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(V){for(let q=0;q<V.removed.length;q++){const le=V.removed[q],Ce=P.indexOf(le);Ce>=0&&(P[Ce]=null,O[Ce].disconnect(le))}for(let q=0;q<V.added.length;q++){const le=V.added[q];let Ce=P.indexOf(le);if(Ce===-1){for(let Ne=0;Ne<O.length;Ne++)if(Ne>=P.length){P.push(le),Ce=Ne;break}else if(P[Ne]===null){P[Ne]=le,Ce=Ne;break}if(Ce===-1)break}const Ee=O[Ce];Ee&&Ee.connect(le)}}const H=new We,ve=new We;function Te(V,q,le){H.setFromMatrixPosition(q.matrixWorld),ve.setFromMatrixPosition(le.matrixWorld);const Ce=H.distanceTo(ve),Ee=q.projectionMatrix.elements,Ne=le.projectionMatrix.elements,ot=Ee[14]/(Ee[10]-1),m=Ee[14]/(Ee[10]+1),Ke=(Ee[9]+1)/Ee[5],Ue=(Ee[9]-1)/Ee[5],Re=(Ee[8]-1)/Ee[0],ue=(Ne[8]+1)/Ne[0],qe=ot*Re,pe=ot*ue,we=Ce/(-Re+ue),at=we*-Re;if(q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(at),V.translateZ(we),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ee[10]===-1)V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const tt=ot+we,u=m+we,a=qe-at,U=pe+(Ce-at),G=Ke*m/u*tt,K=Ue*m/u*tt;V.projectionMatrix.makePerspective(a,U,G,K,tt,u),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function De(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(c===null)return;let q=V.near,le=V.far;f.texture!==null&&(f.depthNear>0&&(q=f.depthNear),f.depthFar>0&&(le=f.depthFar)),B.near=d.near=p.near=q,B.far=d.far=p.far=le,(X!==B.near||Y!==B.far)&&(c.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,Y=B.far),B.layers.mask=V.layers.mask|6,p.layers.mask=B.layers.mask&3,d.layers.mask=B.layers.mask&5;const Ce=V.parent,Ee=B.cameras;De(B,Ce);for(let Ne=0;Ne<Ee.length;Ne++)De(Ee[Ne],Ce);Ee.length===2?Te(B,p,d):B.projectionMatrix.copy(p.projectionMatrix),Be(V,B,Ce)};function Be(V,q,le){le===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=kr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(g===null&&v===null))return A},this.setFoveation=function(V){A=V,g!==null&&(g.fixedFoveation=V),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=V)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(B)},this.getCameraTexture=function(V){return r[V]};let et=null;function Je(V,q){if(M=q.getViewerPose(T||h),y=q,M!==null){const le=M.views;v!==null&&(n.setRenderTargetFramebuffer(E,v.framebuffer),n.setRenderTarget(E));let Ce=!1;le.length!==B.cameras.length&&(B.cameras.length=0,Ce=!0);for(let m=0;m<le.length;m++){const Ke=le[m];let Ue=null;if(v!==null)Ue=v.getViewport(Ke);else{const ue=_.getViewSubImage(g,Ke);Ue=ue.viewport,m===0&&(n.setRenderTargetTextures(E,ue.colorTexture,ue.depthStencilTexture),n.setRenderTarget(E))}let Re=C[m];Re===void 0&&(Re=new cn,Re.layers.enable(m),Re.viewport=new dt,C[m]=Re),Re.matrix.fromArray(Ke.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ke.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),m===0&&(B.matrix.copy(Re.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ce===!0&&B.cameras.push(Re)}const Ee=c.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&L){_=i.getBinding();const m=_.getDepthInformation(le[0]);m&&m.isValid&&m.texture&&f.init(m,c.renderState)}if(Ee&&Ee.includes("camera-access")&&L){n.state.unbindTexture(),_=i.getBinding();for(let m=0;m<le.length;m++){const Ke=le[m].camera;if(Ke){let Ue=r[Ke];Ue||(Ue=new pr,r[Ke]=Ue);const Re=_.getCameraImage(Ke);Ue.sourceTexture=Re}}}}for(let le=0;le<O.length;le++){const Ce=P[le],Ee=O[le];Ce!==null&&Ee!==void 0&&Ee.update(Ce,q,T||h)}et&&et(V,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),y=null}const Ve=new xr;Ve.setAnimationLoop(Je),this.setAnimationLoop=function(V){et=V},this.dispose=function(){}}}const Pt=new Mr,kf=new Zt;function Wf(e,n){function t(f,r){f.matrixAutoUpdate===!0&&f.updateMatrix(),r.value.copy(f.matrix)}function i(f,r){r.color.getRGB(f.fogColor.value,Sr(e)),r.isFog?(f.fogNear.value=r.near,f.fogFar.value=r.far):r.isFogExp2&&(f.fogDensity.value=r.density)}function c(f,r,D,b,E){r.isMeshBasicMaterial||r.isMeshLambertMaterial?o(f,r):r.isMeshToonMaterial?(o(f,r),_(f,r)):r.isMeshPhongMaterial?(o(f,r),M(f,r)):r.isMeshStandardMaterial?(o(f,r),g(f,r),r.isMeshPhysicalMaterial&&v(f,r,E)):r.isMeshMatcapMaterial?(o(f,r),y(f,r)):r.isMeshDepthMaterial?o(f,r):r.isMeshDistanceMaterial?(o(f,r),L(f,r)):r.isMeshNormalMaterial?o(f,r):r.isLineBasicMaterial?(h(f,r),r.isLineDashedMaterial&&l(f,r)):r.isPointsMaterial?A(f,r,D,b):r.isSpriteMaterial?T(f,r):r.isShadowMaterial?(f.color.value.copy(r.color),f.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}function o(f,r){f.opacity.value=r.opacity,r.color&&f.diffuse.value.copy(r.color),r.emissive&&f.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(f.map.value=r.map,t(r.map,f.mapTransform)),r.alphaMap&&(f.alphaMap.value=r.alphaMap,t(r.alphaMap,f.alphaMapTransform)),r.bumpMap&&(f.bumpMap.value=r.bumpMap,t(r.bumpMap,f.bumpMapTransform),f.bumpScale.value=r.bumpScale,r.side===mt&&(f.bumpScale.value*=-1)),r.normalMap&&(f.normalMap.value=r.normalMap,t(r.normalMap,f.normalMapTransform),f.normalScale.value.copy(r.normalScale),r.side===mt&&f.normalScale.value.negate()),r.displacementMap&&(f.displacementMap.value=r.displacementMap,t(r.displacementMap,f.displacementMapTransform),f.displacementScale.value=r.displacementScale,f.displacementBias.value=r.displacementBias),r.emissiveMap&&(f.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,f.emissiveMapTransform)),r.specularMap&&(f.specularMap.value=r.specularMap,t(r.specularMap,f.specularMapTransform)),r.alphaTest>0&&(f.alphaTest.value=r.alphaTest);const D=n.get(r),b=D.envMap,E=D.envMapRotation;b&&(f.envMap.value=b,Pt.copy(E),Pt.x*=-1,Pt.y*=-1,Pt.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pt.y*=-1,Pt.z*=-1),f.envMapRotation.value.setFromMatrix4(kf.makeRotationFromEuler(Pt)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=r.reflectivity,f.ior.value=r.ior,f.refractionRatio.value=r.refractionRatio),r.lightMap&&(f.lightMap.value=r.lightMap,f.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,f.lightMapTransform)),r.aoMap&&(f.aoMap.value=r.aoMap,f.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,f.aoMapTransform))}function h(f,r){f.diffuse.value.copy(r.color),f.opacity.value=r.opacity,r.map&&(f.map.value=r.map,t(r.map,f.mapTransform))}function l(f,r){f.dashSize.value=r.dashSize,f.totalSize.value=r.dashSize+r.gapSize,f.scale.value=r.scale}function A(f,r,D,b){f.diffuse.value.copy(r.color),f.opacity.value=r.opacity,f.size.value=r.size*D,f.scale.value=b*.5,r.map&&(f.map.value=r.map,t(r.map,f.uvTransform)),r.alphaMap&&(f.alphaMap.value=r.alphaMap,t(r.alphaMap,f.alphaMapTransform)),r.alphaTest>0&&(f.alphaTest.value=r.alphaTest)}function T(f,r){f.diffuse.value.copy(r.color),f.opacity.value=r.opacity,f.rotation.value=r.rotation,r.map&&(f.map.value=r.map,t(r.map,f.mapTransform)),r.alphaMap&&(f.alphaMap.value=r.alphaMap,t(r.alphaMap,f.alphaMapTransform)),r.alphaTest>0&&(f.alphaTest.value=r.alphaTest)}function M(f,r){f.specular.value.copy(r.specular),f.shininess.value=Math.max(r.shininess,1e-4)}function _(f,r){r.gradientMap&&(f.gradientMap.value=r.gradientMap)}function g(f,r){f.metalness.value=r.metalness,r.metalnessMap&&(f.metalnessMap.value=r.metalnessMap,t(r.metalnessMap,f.metalnessMapTransform)),f.roughness.value=r.roughness,r.roughnessMap&&(f.roughnessMap.value=r.roughnessMap,t(r.roughnessMap,f.roughnessMapTransform)),r.envMap&&(f.envMapIntensity.value=r.envMapIntensity)}function v(f,r,D){f.ior.value=r.ior,r.sheen>0&&(f.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),f.sheenRoughness.value=r.sheenRoughness,r.sheenColorMap&&(f.sheenColorMap.value=r.sheenColorMap,t(r.sheenColorMap,f.sheenColorMapTransform)),r.sheenRoughnessMap&&(f.sheenRoughnessMap.value=r.sheenRoughnessMap,t(r.sheenRoughnessMap,f.sheenRoughnessMapTransform))),r.clearcoat>0&&(f.clearcoat.value=r.clearcoat,f.clearcoatRoughness.value=r.clearcoatRoughness,r.clearcoatMap&&(f.clearcoatMap.value=r.clearcoatMap,t(r.clearcoatMap,f.clearcoatMapTransform)),r.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=r.clearcoatRoughnessMap,t(r.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),r.clearcoatNormalMap&&(f.clearcoatNormalMap.value=r.clearcoatNormalMap,t(r.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),r.side===mt&&f.clearcoatNormalScale.value.negate())),r.dispersion>0&&(f.dispersion.value=r.dispersion),r.iridescence>0&&(f.iridescence.value=r.iridescence,f.iridescenceIOR.value=r.iridescenceIOR,f.iridescenceThicknessMinimum.value=r.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=r.iridescenceThicknessRange[1],r.iridescenceMap&&(f.iridescenceMap.value=r.iridescenceMap,t(r.iridescenceMap,f.iridescenceMapTransform)),r.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=r.iridescenceThicknessMap,t(r.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),r.transmission>0&&(f.transmission.value=r.transmission,f.transmissionSamplerMap.value=D.texture,f.transmissionSamplerSize.value.set(D.width,D.height),r.transmissionMap&&(f.transmissionMap.value=r.transmissionMap,t(r.transmissionMap,f.transmissionMapTransform)),f.thickness.value=r.thickness,r.thicknessMap&&(f.thicknessMap.value=r.thicknessMap,t(r.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=r.attenuationDistance,f.attenuationColor.value.copy(r.attenuationColor)),r.anisotropy>0&&(f.anisotropyVector.value.set(r.anisotropy*Math.cos(r.anisotropyRotation),r.anisotropy*Math.sin(r.anisotropyRotation)),r.anisotropyMap&&(f.anisotropyMap.value=r.anisotropyMap,t(r.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=r.specularIntensity,f.specularColor.value.copy(r.specularColor),r.specularColorMap&&(f.specularColorMap.value=r.specularColorMap,t(r.specularColorMap,f.specularColorMapTransform)),r.specularIntensityMap&&(f.specularIntensityMap.value=r.specularIntensityMap,t(r.specularIntensityMap,f.specularIntensityMapTransform))}function y(f,r){r.matcap&&(f.matcap.value=r.matcap)}function L(f,r){const D=n.get(r).light;f.referencePosition.value.setFromMatrixPosition(D.matrixWorld),f.nearDistance.value=D.shadow.camera.near,f.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:c}}function zf(e,n,t,i){let c={},o={},h=[];const l=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function A(D,b){const E=b.program;i.uniformBlockBinding(D,E)}function T(D,b){let E=c[D.id];E===void 0&&(y(D),E=M(D),c[D.id]=E,D.addEventListener("dispose",f));const O=b.program;i.updateUBOMapping(D,O);const P=n.render.frame;o[D.id]!==P&&(g(D),o[D.id]=P)}function M(D){const b=_();D.__bindingPointIndex=b;const E=e.createBuffer(),O=D.__size,P=D.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,O,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,E),E}function _(){for(let D=0;D<l;D++)if(h.indexOf(D)===-1)return h.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const b=c[D.id],E=D.uniforms,O=D.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let P=0,N=E.length;P<N;P++){const W=Array.isArray(E[P])?E[P]:[E[P]];for(let p=0,d=W.length;p<d;p++){const C=W[p];if(v(C,P,p,O)===!0){const B=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let $=0;$<X.length;$++){const z=X[$],ne=L(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,e.bufferSubData(e.UNIFORM_BUFFER,B+Y,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(D,b,E,O){const P=D.value,N=b+"_"+E;if(O[N]===void 0)return typeof P=="number"||typeof P=="boolean"?O[N]=P:O[N]=P.clone(),!0;{const W=O[N];if(typeof P=="number"||typeof P=="boolean"){if(W!==P)return O[N]=P,!0}else if(W.equals(P)===!1)return W.copy(P),!0}return!1}function y(D){const b=D.uniforms;let E=0;const O=16;for(let N=0,W=b.length;N<W;N++){const p=Array.isArray(b[N])?b[N]:[b[N]];for(let d=0,C=p.length;d<C;d++){const B=p[d],X=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,$=X.length;Y<$;Y++){const z=X[Y],ne=L(z),H=E%O,ve=H%ne.boundary,Te=H+ve;E+=ve,Te!==0&&O-Te<ne.storage&&(E+=O-Te),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=ne.storage}}}const P=E%O;return P>0&&(E+=O-P),D.__size=E,D.__cache={},this}function L(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function f(D){const b=D.target;b.removeEventListener("dispose",f);const E=h.indexOf(b.__bindingPointIndex);h.splice(E,1),e.deleteBuffer(c[b.id]),delete c[b.id],delete o[b.id]}function r(){for(const D in c)e.deleteBuffer(c[D]);h=[],c={},o={}}return{bind:A,update:T,dispose:r}}class Yf{constructor(n={}){const{canvas:t=yr(),context:i=null,depth:c=!0,stencil:o=!1,alpha:h=!1,antialias:l=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:T=!1,powerPreference:M="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=h;const y=new Uint32Array(4),L=new Int32Array(4);let f=null,r=null;const D=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=At,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let O=!1;this._outputColorSpace=Nr;let P=0,N=0,W=null,p=-1,d=null;const C=new dt,B=new dt;let X=null;const Y=new $e(0);let $=0,z=t.width,ne=t.height,H=1,ve=null,Te=null;const De=new dt(0,0,z,ne),Be=new dt(0,0,z,ne);let et=!1;const Je=new sr;let Ve=!1,V=!1;const q=new Zt,le=new We,Ce=new dt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ot(){return W===null?H:1}let m=i;function Ke(s,x){return t.getContext(s,x)}try{const s={alpha:!0,depth:c,stencil:o,antialias:l,premultipliedAlpha:A,preserveDrawingBuffer:T,powerPreference:M,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Or}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Z,!1),m===null){const x="webgl2";if(m=Ke(x,s),m===null)throw Ke(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(s){throw console.error("THREE.WebGLRenderer: "+s.message),s}let Ue,Re,ue,qe,pe,we,at,tt,u,a,U,G,K,F,ge,ee,he,me,J,oe,Ae,_e,re,Le;function S(){Ue=new el(m),Ue.init(),_e=new Ff(m,Ue),Re=new Kc(m,Ue,n,_e),ue=new Nf(m,Ue),Re.reversedDepthBuffer&&g&&ue.buffers.depth.setReversed(!0),qe=new il(m),pe=new Tf,we=new Of(m,Ue,ue,pe,Re,_e,qe),at=new $c(E),tt=new jc(E),u=new co(m),re=new Xc(m,u),a=new tl(m,u,qe,re),U=new al(m,a,u,qe),J=new rl(m,Re,we),ee=new qc(pe),G=new Mf(E,at,tt,Ue,Re,re,ee),K=new Wf(E,pe),F=new Af,ge=new Lf(Ue),me=new zc(E,at,tt,ue,U,v,A),he=new If(E,U,Re),Le=new zf(m,qe,Re,ue),oe=new Yc(m,Ue,qe),Ae=new nl(m,Ue,qe),qe.programs=G.programs,E.capabilities=Re,E.extensions=Ue,E.properties=pe,E.renderLists=F,E.shadowMap=he,E.state=ue,E.info=qe}S();const j=new Vf(E,m);this.xr=j,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){const s=Ue.get("WEBGL_lose_context");s&&s.loseContext()},this.forceContextRestore=function(){const s=Ue.get("WEBGL_lose_context");s&&s.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(s){s!==void 0&&(H=s,this.setSize(z,ne,!1))},this.getSize=function(s){return s.set(z,ne)},this.setSize=function(s,x,w=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=s,ne=x,t.width=Math.floor(s*H),t.height=Math.floor(x*H),w===!0&&(t.style.width=s+"px",t.style.height=x+"px"),this.setViewport(0,0,s,x)},this.getDrawingBufferSize=function(s){return s.set(z*H,ne*H).floor()},this.setDrawingBufferSize=function(s,x,w){z=s,ne=x,H=w,t.width=Math.floor(s*w),t.height=Math.floor(x*w),this.setViewport(0,0,s,x)},this.getCurrentViewport=function(s){return s.copy(C)},this.getViewport=function(s){return s.copy(De)},this.setViewport=function(s,x,w,I){s.isVector4?De.set(s.x,s.y,s.z,s.w):De.set(s,x,w,I),ue.viewport(C.copy(De).multiplyScalar(H).round())},this.getScissor=function(s){return s.copy(Be)},this.setScissor=function(s,x,w,I){s.isVector4?Be.set(s.x,s.y,s.z,s.w):Be.set(s,x,w,I),ue.scissor(B.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(s){ue.setScissorTest(et=s)},this.setOpaqueSort=function(s){ve=s},this.setTransparentSort=function(s){Te=s},this.getClearColor=function(s){return s.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(s=!0,x=!0,w=!0){let I=0;if(s){let R=!1;if(W!==null){const Q=W.texture.format;R=Q===gr||Q===vr||Q===_r}if(R){const Q=W.texture.type,ae=Q===It||Q===en||Q===pn||Q===jt||Q===dr||Q===ur,fe=me.getClearColor(),se=me.getClearAlpha(),xe=fe.r,be=fe.g,Se=fe.b;ae?(y[0]=xe,y[1]=be,y[2]=Se,y[3]=se,m.clearBufferuiv(m.COLOR,0,y)):(L[0]=xe,L[1]=be,L[2]=Se,L[3]=se,m.clearBufferiv(m.COLOR,0,L))}else I|=m.COLOR_BUFFER_BIT}x&&(I|=m.DEPTH_BUFFER_BIT),w&&(I|=m.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),m.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),me.dispose(),F.dispose(),ge.dispose(),pe.dispose(),at.dispose(),tt.dispose(),U.dispose(),re.dispose(),Le.dispose(),G.dispose(),j.dispose(),j.removeEventListener("sessionstart",gt),j.removeEventListener("sessionend",Kn),Rt.stop()};function te(s){s.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const s=qe.autoReset,x=he.enabled,w=he.autoUpdate,I=he.needsUpdate,R=he.type;S(),qe.autoReset=s,he.enabled=x,he.autoUpdate=w,he.needsUpdate=I,he.type=R}function Z(s){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",s.statusMessage)}function k(s){const x=s.target;x.removeEventListener("dispose",k),de(x)}function de(s){Pe(s),pe.remove(s)}function Pe(s){const x=pe.get(s).programs;x!==void 0&&(x.forEach(function(w){G.releaseProgram(w)}),s.isShaderMaterial&&G.releaseShaderCache(s))}this.renderBufferDirect=function(s,x,w,I,R,Q){x===null&&(x=Ee);const ae=R.isMesh&&R.matrixWorld.determinant()<0,fe=Pr(s,x,w,I,R);ue.setMaterial(I,ae);let se=w.index,xe=1;if(I.wireframe===!0){if(se=a.getWireframeAttribute(w),se===void 0)return;xe=2}const be=w.drawRange,Se=w.attributes.position;let ye=be.start*xe,He=(be.start+be.count)*xe;Q!==null&&(ye=Math.max(ye,Q.start*xe),He=Math.min(He,(Q.start+Q.count)*xe)),se!==null?(ye=Math.max(ye,0),He=Math.min(He,se.count)):Se!=null&&(ye=Math.max(ye,0),He=Math.min(He,Se.count));const je=He-ye;if(je<0||je===1/0)return;re.setup(R,I,fe,w,se);let Xe,ke=oe;if(se!==null&&(Xe=u.get(se),ke=Ae,ke.setIndex(Xe)),R.isMesh)I.wireframe===!0?(ue.setLineWidth(I.wireframeLinewidth*ot()),ke.setMode(m.LINES)):ke.setMode(m.TRIANGLES);else if(R.isLine){let Me=I.linewidth;Me===void 0&&(Me=1),ue.setLineWidth(Me*ot()),R.isLineSegments?ke.setMode(m.LINES):R.isLineLoop?ke.setMode(m.LINE_LOOP):ke.setMode(m.LINE_STRIP)}else R.isPoints?ke.setMode(m.POINTS):R.isSprite&&ke.setMode(m.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)wn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ke.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))ke.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{const Me=R._multiDrawStarts,Ze=R._multiDrawCounts,Oe=R._multiDrawCount,pt=se?u.get(se).bytesPerElement:1,Nt=pe.get(I).currentProgram.getUniforms();for(let ht=0;ht<Oe;ht++)Nt.setValue(m,"_gl_DrawID",ht),ke.render(Me[ht]/pt,Ze[ht])}else if(R.isInstancedMesh)ke.renderInstances(ye,je,R.count);else if(w.isInstancedBufferGeometry){const Me=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,Ze=Math.min(w.instanceCount,Me);ke.renderInstances(ye,je,Ze)}else ke.render(ye,je)};function ze(s,x,w){s.transparent===!0&&s.side===Tt&&s.forceSinglePass===!1?(s.side=mt,s.needsUpdate=!0,nn(s,x,w),s.side=Qt,s.needsUpdate=!0,nn(s,x,w),s.side=Tt):nn(s,x,w)}this.compile=function(s,x,w=null){w===null&&(w=s),r=ge.get(w),r.init(x),b.push(r),w.traverseVisible(function(R){R.isLight&&R.layers.test(x.layers)&&(r.pushLight(R),R.castShadow&&r.pushShadow(R))}),s!==w&&s.traverseVisible(function(R){R.isLight&&R.layers.test(x.layers)&&(r.pushLight(R),R.castShadow&&r.pushShadow(R))}),r.setupLights();const I=new Set;return s.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;const Q=R.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const fe=Q[ae];ze(fe,w,R),I.add(fe)}else ze(Q,w,R),I.add(Q)}),r=b.pop(),I},this.compileAsync=function(s,x,w=null){const I=this.compile(s,x,w);return new Promise(R=>{function Q(){if(I.forEach(function(ae){pe.get(ae).currentProgram.isReady()&&I.delete(ae)}),I.size===0){R(s);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ge=null;function St(s){Ge&&Ge(s)}function gt(){Rt.stop()}function Kn(){Rt.start()}const Rt=new xr;Rt.setAnimationLoop(St),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(s){Ge=s,j.setAnimationLoop(s),s===null?Rt.stop():Rt.start()},j.addEventListener("sessionstart",gt),j.addEventListener("sessionend",Kn),this.render=function(s,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(x),x=j.getCamera()),s.isScene===!0&&s.onBeforeRender(E,s,x,W),r=ge.get(s,b.length),r.init(x),b.push(r),q.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),Je.setFromProjectionMatrix(q,jn,x.reversedDepth),V=this.localClippingEnabled,Ve=ee.init(this.clippingPlanes,V),f=F.get(s,D.length),f.init(),D.push(f),j.enabled===!0&&j.isPresenting===!0){const Q=E.xr.getDepthSensingMesh();Q!==null&&gn(Q,x,-1/0,E.sortObjects)}gn(s,x,0,E.sortObjects),f.finish(),E.sortObjects===!0&&f.sort(ve,Te),Ne=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ne&&me.addToRenderList(f,s),this.info.render.frame++,Ve===!0&&ee.beginShadows();const w=r.state.shadowsArray;he.render(w,s,x),Ve===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=f.opaque,R=f.transmissive;if(r.setupLights(),x.isArrayCamera){const Q=x.cameras;if(R.length>0)for(let ae=0,fe=Q.length;ae<fe;ae++){const se=Q[ae];$n(I,R,s,se)}Ne&&me.render(s);for(let ae=0,fe=Q.length;ae<fe;ae++){const se=Q[ae];qn(f,s,se,se.viewport)}}else R.length>0&&$n(I,R,s,x),Ne&&me.render(s),qn(f,s,x);W!==null&&N===0&&(we.updateMultisampleRenderTarget(W),we.updateRenderTargetMipmap(W)),s.isScene===!0&&s.onAfterRender(E,s,x),re.resetDefaultState(),p=-1,d=null,b.pop(),b.length>0?(r=b[b.length-1],Ve===!0&&ee.setGlobalState(E.clippingPlanes,r.state.camera)):r=null,D.pop(),D.length>0?f=D[D.length-1]:f=null};function gn(s,x,w,I){if(s.visible===!1)return;if(s.layers.test(x.layers)){if(s.isGroup)w=s.renderOrder;else if(s.isLOD)s.autoUpdate===!0&&s.update(x);else if(s.isLight)r.pushLight(s),s.castShadow&&r.pushShadow(s);else if(s.isSprite){if(!s.frustumCulled||Je.intersectsSprite(s)){I&&Ce.setFromMatrixPosition(s.matrixWorld).applyMatrix4(q);const ae=U.update(s),fe=s.material;fe.visible&&f.push(s,ae,fe,w,Ce.z,null)}}else if((s.isMesh||s.isLine||s.isPoints)&&(!s.frustumCulled||Je.intersectsObject(s))){const ae=U.update(s),fe=s.material;if(I&&(s.boundingSphere!==void 0?(s.boundingSphere===null&&s.computeBoundingSphere(),Ce.copy(s.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ce.copy(ae.boundingSphere.center)),Ce.applyMatrix4(s.matrixWorld).applyMatrix4(q)),Array.isArray(fe)){const se=ae.groups;for(let xe=0,be=se.length;xe<be;xe++){const Se=se[xe],ye=fe[Se.materialIndex];ye&&ye.visible&&f.push(s,ae,ye,w,Ce.z,Se)}}else fe.visible&&f.push(s,ae,fe,w,Ce.z,null)}}const Q=s.children;for(let ae=0,fe=Q.length;ae<fe;ae++)gn(Q[ae],x,w,I)}function qn(s,x,w,I){const R=s.opaque,Q=s.transmissive,ae=s.transparent;r.setupLightsView(w),Ve===!0&&ee.setGlobalState(E.clippingPlanes,w),I&&ue.viewport(C.copy(I)),R.length>0&&tn(R,x,w),Q.length>0&&tn(Q,x,w),ae.length>0&&tn(ae,x,w),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function $n(s,x,w,I){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;r.state.transmissionRenderTarget[I.id]===void 0&&(r.state.transmissionRenderTarget[I.id]=new Vt(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?hn:It,minFilter:Yt,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Q=r.state.transmissionRenderTarget[I.id],ae=I.viewport||C;Q.setSize(ae.z*E.transmissionResolutionScale,ae.w*E.transmissionResolutionScale);const fe=E.getRenderTarget(),se=E.getActiveCubeFace(),xe=E.getActiveMipmapLevel();E.setRenderTarget(Q),E.getClearColor(Y),$=E.getClearAlpha(),$<1&&E.setClearColor(16777215,.5),E.clear(),Ne&&me.render(w);const be=E.toneMapping;E.toneMapping=At;const Se=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),r.setupLightsView(I),Ve===!0&&ee.setGlobalState(E.clippingPlanes,I),tn(s,w,I),we.updateMultisampleRenderTarget(Q),we.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let He=0,je=x.length;He<je;He++){const Xe=x[He],ke=Xe.object,Me=Xe.geometry,Ze=Xe.material,Oe=Xe.group;if(Ze.side===Tt&&ke.layers.test(I.layers)){const pt=Ze.side;Ze.side=mt,Ze.needsUpdate=!0,Zn(ke,w,I,Me,Ze,Oe),Ze.side=pt,Ze.needsUpdate=!0,ye=!0}}ye===!0&&(we.updateMultisampleRenderTarget(Q),we.updateRenderTargetMipmap(Q))}E.setRenderTarget(fe,se,xe),E.setClearColor(Y,$),Se!==void 0&&(I.viewport=Se),E.toneMapping=be}function tn(s,x,w){const I=x.isScene===!0?x.overrideMaterial:null;for(let R=0,Q=s.length;R<Q;R++){const ae=s[R],fe=ae.object,se=ae.geometry,xe=ae.group;let be=ae.material;be.allowOverride===!0&&I!==null&&(be=I),fe.layers.test(w.layers)&&Zn(fe,x,w,se,be,xe)}}function Zn(s,x,w,I,R,Q){s.onBeforeRender(E,x,w,I,R,Q),s.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,s.matrixWorld),s.normalMatrix.getNormalMatrix(s.modelViewMatrix),R.onBeforeRender(E,x,w,I,s,Q),R.transparent===!0&&R.side===Tt&&R.forceSinglePass===!1?(R.side=mt,R.needsUpdate=!0,E.renderBufferDirect(w,x,I,R,s,Q),R.side=Qt,R.needsUpdate=!0,E.renderBufferDirect(w,x,I,R,s,Q),R.side=Tt):E.renderBufferDirect(w,x,I,R,s,Q),s.onAfterRender(E,x,w,I,R,Q)}function nn(s,x,w){x.isScene!==!0&&(x=Ee);const I=pe.get(s),R=r.state.lights,Q=r.state.shadowsArray,ae=R.state.version,fe=G.getParameters(s,R.state,Q,x,w),se=G.getProgramCacheKey(fe);let xe=I.programs;I.environment=s.isMeshStandardMaterial?x.environment:null,I.fog=x.fog,I.envMap=(s.isMeshStandardMaterial?tt:at).get(s.envMap||I.environment),I.envMapRotation=I.environment!==null&&s.envMap===null?x.environmentRotation:s.envMapRotation,xe===void 0&&(s.addEventListener("dispose",k),xe=new Map,I.programs=xe);let be=xe.get(se);if(be!==void 0){if(I.currentProgram===be&&I.lightsStateVersion===ae)return Jn(s,fe),be}else fe.uniforms=G.getUniforms(s),s.onBeforeCompile(fe,E),be=G.acquireProgram(fe,se),xe.set(se,be),I.uniforms=fe.uniforms;const Se=I.uniforms;return(!s.isShaderMaterial&&!s.isRawShaderMaterial||s.clipping===!0)&&(Se.clippingPlanes=ee.uniform),Jn(s,fe),I.needsLights=Lr(s),I.lightsStateVersion=ae,I.needsLights&&(Se.ambientLightColor.value=R.state.ambient,Se.lightProbe.value=R.state.probe,Se.directionalLights.value=R.state.directional,Se.directionalLightShadows.value=R.state.directionalShadow,Se.spotLights.value=R.state.spot,Se.spotLightShadows.value=R.state.spotShadow,Se.rectAreaLights.value=R.state.rectArea,Se.ltc_1.value=R.state.rectAreaLTC1,Se.ltc_2.value=R.state.rectAreaLTC2,Se.pointLights.value=R.state.point,Se.pointLightShadows.value=R.state.pointShadow,Se.hemisphereLights.value=R.state.hemi,Se.directionalShadowMap.value=R.state.directionalShadowMap,Se.directionalShadowMatrix.value=R.state.directionalShadowMatrix,Se.spotShadowMap.value=R.state.spotShadowMap,Se.spotLightMatrix.value=R.state.spotLightMatrix,Se.spotLightMap.value=R.state.spotLightMap,Se.pointShadowMap.value=R.state.pointShadowMap,Se.pointShadowMatrix.value=R.state.pointShadowMatrix),I.currentProgram=be,I.uniformsList=null,be}function Qn(s){if(s.uniformsList===null){const x=s.currentProgram.getUniforms();s.uniformsList=fn.seqWithValue(x.seq,s.uniforms)}return s.uniformsList}function Jn(s,x){const w=pe.get(s);w.outputColorSpace=x.outputColorSpace,w.batching=x.batching,w.batchingColor=x.batchingColor,w.instancing=x.instancing,w.instancingColor=x.instancingColor,w.instancingMorph=x.instancingMorph,w.skinning=x.skinning,w.morphTargets=x.morphTargets,w.morphNormals=x.morphNormals,w.morphColors=x.morphColors,w.morphTargetsCount=x.morphTargetsCount,w.numClippingPlanes=x.numClippingPlanes,w.numIntersection=x.numClipIntersection,w.vertexAlphas=x.vertexAlphas,w.vertexTangents=x.vertexTangents,w.toneMapping=x.toneMapping}function Pr(s,x,w,I,R){x.isScene!==!0&&(x=Ee),we.resetTextureUnits();const Q=x.fog,ae=I.isMeshStandardMaterial?x.environment:null,fe=W===null?E.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:mn,se=(I.isMeshStandardMaterial?tt:at).get(I.envMap||ae),xe=I.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,be=!!w.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Se=!!w.morphAttributes.position,ye=!!w.morphAttributes.normal,He=!!w.morphAttributes.color;let je=At;I.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(je=E.toneMapping);const Xe=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ke=Xe!==void 0?Xe.length:0,Me=pe.get(I),Ze=r.state.lights;if(Ve===!0&&(V===!0||s!==d)){const st=s===d&&I.id===p;ee.setState(I,s,st)}let Oe=!1;I.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ze.state.version||Me.outputColorSpace!==fe||R.isBatchedMesh&&Me.batching===!1||!R.isBatchedMesh&&Me.batching===!0||R.isBatchedMesh&&Me.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&Me.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&Me.instancing===!1||!R.isInstancedMesh&&Me.instancing===!0||R.isSkinnedMesh&&Me.skinning===!1||!R.isSkinnedMesh&&Me.skinning===!0||R.isInstancedMesh&&Me.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Me.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Me.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Me.instancingMorph===!1&&R.morphTexture!==null||Me.envMap!==se||I.fog===!0&&Me.fog!==Q||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==xe||Me.vertexTangents!==be||Me.morphTargets!==Se||Me.morphNormals!==ye||Me.morphColors!==He||Me.toneMapping!==je||Me.morphTargetsCount!==ke)&&(Oe=!0):(Oe=!0,Me.__version=I.version);let pt=Me.currentProgram;Oe===!0&&(pt=nn(I,x,R));let Nt=!1,ht=!1,zt=!1;const Qe=pt.getUniforms(),_t=Me.uniforms;if(ue.useProgram(pt.program)&&(Nt=!0,ht=!0,zt=!0),I.id!==p&&(p=I.id,ht=!0),Nt||d!==s){ue.buffers.depth.getReversed()&&s.reversedDepth!==!0&&(s._reversedDepth=!0,s.updateProjectionMatrix()),Qe.setValue(m,"projectionMatrix",s.projectionMatrix),Qe.setValue(m,"viewMatrix",s.matrixWorldInverse);const lt=Qe.map.cameraPosition;lt!==void 0&&lt.setValue(m,le.setFromMatrixPosition(s.matrixWorld)),Re.logarithmicDepthBuffer&&Qe.setValue(m,"logDepthBufFC",2/(Math.log(s.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Qe.setValue(m,"isOrthographic",s.isOrthographicCamera===!0),d!==s&&(d=s,ht=!0,zt=!0)}if(R.isSkinnedMesh){Qe.setOptional(m,R,"bindMatrix"),Qe.setOptional(m,R,"bindMatrixInverse");const st=R.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),Qe.setValue(m,"boneTexture",st.boneTexture,we))}R.isBatchedMesh&&(Qe.setOptional(m,R,"batchingTexture"),Qe.setValue(m,"batchingTexture",R._matricesTexture,we),Qe.setOptional(m,R,"batchingIdTexture"),Qe.setValue(m,"batchingIdTexture",R._indirectTexture,we),Qe.setOptional(m,R,"batchingColorTexture"),R._colorsTexture!==null&&Qe.setValue(m,"batchingColorTexture",R._colorsTexture,we));const vt=w.morphAttributes;if((vt.position!==void 0||vt.normal!==void 0||vt.color!==void 0)&&J.update(R,w,pt),(ht||Me.receiveShadow!==R.receiveShadow)&&(Me.receiveShadow=R.receiveShadow,Qe.setValue(m,"receiveShadow",R.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(_t.envMap.value=se,_t.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&x.environment!==null&&(_t.envMapIntensity.value=x.environmentIntensity),ht&&(Qe.setValue(m,"toneMappingExposure",E.toneMappingExposure),Me.needsLights&&Ur(_t,zt),Q&&I.fog===!0&&K.refreshFogUniforms(_t,Q),K.refreshMaterialUniforms(_t,I,H,ne,r.state.transmissionRenderTarget[s.id]),fn.upload(m,Qn(Me),_t,we)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(fn.upload(m,Qn(Me),_t,we),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Qe.setValue(m,"center",R.center),Qe.setValue(m,"modelViewMatrix",R.modelViewMatrix),Qe.setValue(m,"normalMatrix",R.normalMatrix),Qe.setValue(m,"modelMatrix",R.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const st=I.uniformsGroups;for(let lt=0,En=st.length;lt<En;lt++){const bt=st[lt];Le.update(bt,pt),Le.bind(bt,pt)}}return pt}function Ur(s,x){s.ambientLightColor.needsUpdate=x,s.lightProbe.needsUpdate=x,s.directionalLights.needsUpdate=x,s.directionalLightShadows.needsUpdate=x,s.pointLights.needsUpdate=x,s.pointLightShadows.needsUpdate=x,s.spotLights.needsUpdate=x,s.spotLightShadows.needsUpdate=x,s.rectAreaLights.needsUpdate=x,s.hemisphereLights.needsUpdate=x}function Lr(s){return s.isMeshLambertMaterial||s.isMeshToonMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial||s.isShadowMaterial||s.isShaderMaterial&&s.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(s,x,w){const I=pe.get(s);I.__autoAllocateDepthBuffer=s.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),pe.get(s.texture).__webglTexture=x,pe.get(s.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:w,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(s,x){const w=pe.get(s);w.__webglFramebuffer=x,w.__useDefaultFramebuffer=x===void 0};const Dr=m.createFramebuffer();this.setRenderTarget=function(s,x=0,w=0){W=s,P=x,N=w;let I=!0,R=null,Q=!1,ae=!1;if(s){const se=pe.get(s);if(se.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(m.FRAMEBUFFER,null),I=!1;else if(se.__webglFramebuffer===void 0)we.setupRenderTarget(s);else if(se.__hasExternalTextures)we.rebindTextures(s,pe.get(s.texture).__webglTexture,pe.get(s.depthTexture).__webglTexture);else if(s.depthBuffer){const Se=s.depthTexture;if(se.__boundDepthTexture!==Se){if(Se!==null&&pe.has(Se)&&(s.width!==Se.image.width||s.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(s)}}const xe=s.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ae=!0);const be=pe.get(s).__webglFramebuffer;s.isWebGLCubeRenderTarget?(Array.isArray(be[x])?R=be[x][w]:R=be[x],Q=!0):s.samples>0&&we.useMultisampledRTT(s)===!1?R=pe.get(s).__webglMultisampledFramebuffer:Array.isArray(be)?R=be[w]:R=be,C.copy(s.viewport),B.copy(s.scissor),X=s.scissorTest}else C.copy(De).multiplyScalar(H).floor(),B.copy(Be).multiplyScalar(H).floor(),X=et;if(w!==0&&(R=Dr),ue.bindFramebuffer(m.FRAMEBUFFER,R)&&I&&ue.drawBuffers(s,R),ue.viewport(C),ue.scissor(B),ue.setScissorTest(X),Q){const se=pe.get(s.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+x,se.__webglTexture,w)}else if(ae){const se=x;for(let xe=0;xe<s.textures.length;xe++){const be=pe.get(s.textures[xe]);m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0+xe,be.__webglTexture,w,se)}}else if(s!==null&&w!==0){const se=pe.get(s.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,se.__webglTexture,w)}p=-1},this.readRenderTargetPixels=function(s,x,w,I,R,Q,ae,fe=0){if(!(s&&s.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=pe.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ae!==void 0&&(se=se[ae]),se){ue.bindFramebuffer(m.FRAMEBUFFER,se);try{const xe=s.textures[fe],be=xe.format,Se=xe.type;if(!Re.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=s.width-I&&w>=0&&w<=s.height-R&&(s.textures.length>1&&m.readBuffer(m.COLOR_ATTACHMENT0+fe),m.readPixels(x,w,I,R,_e.convert(be),_e.convert(Se),Q))}finally{const xe=W!==null?pe.get(W).__webglFramebuffer:null;ue.bindFramebuffer(m.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(s,x,w,I,R,Q,ae,fe=0){if(!(s&&s.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=pe.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ae!==void 0&&(se=se[ae]),se)if(x>=0&&x<=s.width-I&&w>=0&&w<=s.height-R){ue.bindFramebuffer(m.FRAMEBUFFER,se);const xe=s.textures[fe],be=xe.format,Se=xe.type;if(!Re.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=m.createBuffer();m.bindBuffer(m.PIXEL_PACK_BUFFER,ye),m.bufferData(m.PIXEL_PACK_BUFFER,Q.byteLength,m.STREAM_READ),s.textures.length>1&&m.readBuffer(m.COLOR_ATTACHMENT0+fe),m.readPixels(x,w,I,R,_e.convert(be),_e.convert(Se),0);const He=W!==null?pe.get(W).__webglFramebuffer:null;ue.bindFramebuffer(m.FRAMEBUFFER,He);const je=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);return m.flush(),await Fr(m,je,4),m.bindBuffer(m.PIXEL_PACK_BUFFER,ye),m.getBufferSubData(m.PIXEL_PACK_BUFFER,0,Q),m.deleteBuffer(ye),m.deleteSync(je),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(s,x=null,w=0){const I=Math.pow(2,-w),R=Math.floor(s.image.width*I),Q=Math.floor(s.image.height*I),ae=x!==null?x.x:0,fe=x!==null?x.y:0;we.setTexture2D(s,0),m.copyTexSubImage2D(m.TEXTURE_2D,w,0,0,ae,fe,R,Q),ue.unbindTexture()};const wr=m.createFramebuffer(),Ir=m.createFramebuffer();this.copyTextureToTexture=function(s,x,w=null,I=null,R=0,Q=null){Q===null&&(R!==0?(wn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=R,R=0):Q=0);let ae,fe,se,xe,be,Se,ye,He,je;const Xe=s.isCompressedTexture?s.mipmaps[Q]:s.image;if(w!==null)ae=w.max.x-w.min.x,fe=w.max.y-w.min.y,se=w.isBox3?w.max.z-w.min.z:1,xe=w.min.x,be=w.min.y,Se=w.isBox3?w.min.z:0;else{const vt=Math.pow(2,-R);ae=Math.floor(Xe.width*vt),fe=Math.floor(Xe.height*vt),s.isDataArrayTexture?se=Xe.depth:s.isData3DTexture?se=Math.floor(Xe.depth*vt):se=1,xe=0,be=0,Se=0}I!==null?(ye=I.x,He=I.y,je=I.z):(ye=0,He=0,je=0);const ke=_e.convert(x.format),Me=_e.convert(x.type);let Ze;x.isData3DTexture?(we.setTexture3D(x,0),Ze=m.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(we.setTexture2DArray(x,0),Ze=m.TEXTURE_2D_ARRAY):(we.setTexture2D(x,0),Ze=m.TEXTURE_2D),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,x.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,x.unpackAlignment);const Oe=m.getParameter(m.UNPACK_ROW_LENGTH),pt=m.getParameter(m.UNPACK_IMAGE_HEIGHT),Nt=m.getParameter(m.UNPACK_SKIP_PIXELS),ht=m.getParameter(m.UNPACK_SKIP_ROWS),zt=m.getParameter(m.UNPACK_SKIP_IMAGES);m.pixelStorei(m.UNPACK_ROW_LENGTH,Xe.width),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,Xe.height),m.pixelStorei(m.UNPACK_SKIP_PIXELS,xe),m.pixelStorei(m.UNPACK_SKIP_ROWS,be),m.pixelStorei(m.UNPACK_SKIP_IMAGES,Se);const Qe=s.isDataArrayTexture||s.isData3DTexture,_t=x.isDataArrayTexture||x.isData3DTexture;if(s.isDepthTexture){const vt=pe.get(s),st=pe.get(x),lt=pe.get(vt.__renderTarget),En=pe.get(st.__renderTarget);ue.bindFramebuffer(m.READ_FRAMEBUFFER,lt.__webglFramebuffer),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let bt=0;bt<se;bt++)Qe&&(m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,pe.get(s).__webglTexture,R,Se+bt),m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,pe.get(x).__webglTexture,Q,je+bt)),m.blitFramebuffer(xe,be,ae,fe,ye,He,ae,fe,m.DEPTH_BUFFER_BIT,m.NEAREST);ue.bindFramebuffer(m.READ_FRAMEBUFFER,null),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if(R!==0||s.isRenderTargetTexture||pe.has(s)){const vt=pe.get(s),st=pe.get(x);ue.bindFramebuffer(m.READ_FRAMEBUFFER,wr),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,Ir);for(let lt=0;lt<se;lt++)Qe?m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,vt.__webglTexture,R,Se+lt):m.framebufferTexture2D(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,vt.__webglTexture,R),_t?m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,st.__webglTexture,Q,je+lt):m.framebufferTexture2D(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,st.__webglTexture,Q),R!==0?m.blitFramebuffer(xe,be,ae,fe,ye,He,ae,fe,m.COLOR_BUFFER_BIT,m.NEAREST):_t?m.copyTexSubImage3D(Ze,Q,ye,He,je+lt,xe,be,ae,fe):m.copyTexSubImage2D(Ze,Q,ye,He,xe,be,ae,fe);ue.bindFramebuffer(m.READ_FRAMEBUFFER,null),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else _t?s.isDataTexture||s.isData3DTexture?m.texSubImage3D(Ze,Q,ye,He,je,ae,fe,se,ke,Me,Xe.data):x.isCompressedArrayTexture?m.compressedTexSubImage3D(Ze,Q,ye,He,je,ae,fe,se,ke,Xe.data):m.texSubImage3D(Ze,Q,ye,He,je,ae,fe,se,ke,Me,Xe):s.isDataTexture?m.texSubImage2D(m.TEXTURE_2D,Q,ye,He,ae,fe,ke,Me,Xe.data):s.isCompressedTexture?m.compressedTexSubImage2D(m.TEXTURE_2D,Q,ye,He,Xe.width,Xe.height,ke,Xe.data):m.texSubImage2D(m.TEXTURE_2D,Q,ye,He,ae,fe,ke,Me,Xe);m.pixelStorei(m.UNPACK_ROW_LENGTH,Oe),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,pt),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Nt),m.pixelStorei(m.UNPACK_SKIP_ROWS,ht),m.pixelStorei(m.UNPACK_SKIP_IMAGES,zt),Q===0&&x.generateMipmaps&&m.generateMipmap(Ze),ue.unbindTexture()},this.initRenderTarget=function(s){pe.get(s).__webglFramebuffer===void 0&&we.setupRenderTarget(s)},this.initTexture=function(s){s.isCubeTexture?we.setTextureCube(s,0):s.isData3DTexture?we.setTexture3D(s,0):s.isDataArrayTexture||s.isCompressedArrayTexture?we.setTexture2DArray(s,0):we.setTexture2D(s,0),ue.unbindTexture()},this.resetState=function(){P=0,N=0,W=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(n),t.unpackColorSpace=nt._getUnpackColorSpace()}}function Kf(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),c=new Set(Object.keys(e[0].morphAttributes)),o={},h={},l=e[0].morphTargetsRelative,A=new Xn;let T=0;for(let M=0;M<e.length;++M){const _=e[M];let g=0;if(t!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in _.attributes){if(!i.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;o[v]===void 0&&(o[v]=[]),o[v].push(_.attributes[v]),g++}if(g!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+". Make sure all geometries have the same number of attributes."),null;if(l!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in _.morphAttributes){if(!c.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+".  .morphAttributes must be consistent throughout all geometries."),null;h[v]===void 0&&(h[v]=[]),h[v].push(_.morphAttributes[v])}if(n){let v;if(t)v=_.index.count;else if(_.attributes.position!==void 0)v=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+". The geometry must have either an index or a position attribute"),null;A.addGroup(T,v,M),T+=v}}if(t){let M=0;const _=[];for(let g=0;g<e.length;++g){const v=e[g].index;for(let y=0;y<v.count;++y)_.push(v.getX(y)+M);M+=e[g].attributes.position.count}A.setIndex(_)}for(const M in o){const _=or(o[M]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+M+" attribute."),null;A.setAttribute(M,_)}for(const M in h){const _=h[M][0].length;if(_===0)break;A.morphAttributes=A.morphAttributes||{},A.morphAttributes[M]=[];for(let g=0;g<_;++g){const v=[];for(let L=0;L<h[M].length;++L)v.push(h[M][L][g]);const y=or(v);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+M+" morphAttribute."),null;A.morphAttributes[M].push(y)}}return A}function or(e){let n,t,i,c=-1,o=0;for(let T=0;T<e.length;++T){const M=e[T];if(n===void 0&&(n=M.array.constructor),n!==M.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=M.itemSize),t!==M.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=M.normalized),i!==M.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(c===-1&&(c=M.gpuType),c!==M.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=M.count*t}const h=new n(o),l=new qt(h,t,i);let A=0;for(let T=0;T<e.length;++T){const M=e[T];if(M.isInterleavedBufferAttribute){const _=A/t;for(let g=0,v=M.count;g<v;g++)for(let y=0;y<t;y++){const L=M.getComponent(g,y);l.setComponent(g+_,y,L)}}else h.set(M.array,A);A+=M.count*t}return c!==void 0&&(l.gpuType=c),l}class qf extends io{constructor(){super();const n=new Wn;n.deleteAttribute("uv");const t=new Ni({side:mt}),i=new Ni,c=new ro(16777215,900,28,2);c.position.set(.418,16.199,.3),this.add(c);const o=new ct(n,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const h=new ao(n,i,6),l=new oo;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),h.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),h.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),h.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),h.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),h.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),h.setMatrixAt(5,l.matrix),this.add(h);const A=new ct(n,Ft(50));A.position.set(-16.116,14.37,8.208),A.scale.set(.1,2.428,2.739),this.add(A);const T=new ct(n,Ft(50));T.position.set(-16.109,18.021,-8.207),T.scale.set(.1,2.425,2.751),this.add(T);const M=new ct(n,Ft(17));M.position.set(14.904,12.198,-1.832),M.scale.set(.15,4.265,6.331),this.add(M);const _=new ct(n,Ft(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new ct(n,Ft(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const v=new ct(n,Ft(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const n=new Set;this.traverse(t=>{t.isMesh&&(n.add(t.geometry),n.add(t.material))});for(const t of n)t.dispose()}}function Ft(e){return new so({color:0,emissive:16777215,emissiveIntensity:e})}export{Gi as P,qf as R,Yf as W,Kf as m};
