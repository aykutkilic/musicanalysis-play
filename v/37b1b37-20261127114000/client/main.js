import{a as At,b as Kc,d as Qc,f as qn,h as Do}from"./chunk-NYSAUWBU.js";import{a as su,b as au,c as Hs}from"./chunk-MFJ7QUAJ.js";import{A as Zc,B as Jc,D as zs,F as No,H as eu,I as tu,L as iu,Z as nu,_ as ru,a as li,b as xi,c as Os,d as ks,e as Xc,f as Lo,g as oe,h as Uo,i as jc,j as qc,k as $c,n as zr,o as Yc,q as Hr,r as Fs,t as jn,u as Bs,y as gn,z as yi}from"./chunk-ZSNVMKTQ.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var gd=2;var Jp=0,Yh=1,Ti=2;var Ln=2;var wn=100,Kp=101,Qp=102;var ef=200,tf=201,nf=202,rf=203,yl=204,_l=205,sf=206,af=207,of=208,lf=209,hf=210,cf=211,uf=212,df=213,pf=214,ff=0,mf=1,gf=2,vf=3,xf=4,yf=5,_f=6,Mf=7;var vd=0;var xd=300,gr=301,vr=302,Ml=303,bl=304,eo=306,is=1e3,ns=1001,Sl=1002,di=1003,bf=1004;var Vs=1005;var ki=1006,Oo=1007;var dr=1008;var nn=1009,yd=1010,_d=1011,rs=1012,Zh=1013,An=1014,Fi=1015,vs=1016,Jh=1017,Kh=1018,xr=1020,Md=35902,bd=1021,Sd=1022,bi=1023,wd=1024,Td=1025,ss=1026,yr=1027,Ed=1028,Qh=1029,Ad=1030,ec=1031;var tc=1033,Ma=33776,ba=33777,Sa=33778,wa=33779,wl=35840,Tl=35841,El=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Il=37808,Ll=37809,Ul=37810,Dl=37811,Nl=37812,Ol=37813,kl=37814,Fl=37815,Bl=37816,zl=37817,Hl=37818,Vl=37819,Gl=37820,Wl=37821,Ta=36492,Xl=36494,jl=36495,Rd=36283,ql=36284,$l=36285,Yl=36286;var Aa=2300,Zl=2301,ko=2302,ou=2400,lu=2401,hu=2402;var ur="",lt="srgb",Er="srgb-linear",to="linear",qe="srgb";var $n=7680;var Sf=512,wf=513,Tf=514,Ef=515,Af=516,Rf=517,Cf=518,Pf=519,Jl=35044,xs=35048;var cu="300 es",_r=2e3,Ra=2001,rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,r=i.length;n<r;n++)i[n].call(this,e);e.target=null}}},Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ea=Math.PI/180,Kl=180/Math.PI;function Bi(){let s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ct[255&s]+Ct[s>>8&255]+Ct[s>>16&255]+Ct[s>>24&255]+"-"+Ct[255&e]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[63&t|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[255&i]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function If(s,e){return(s%e+e)%e}function Fo(s,e,t){return(1-t)*s+t*e}function Mi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}var he=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class s{constructor(e,t,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],y=n[0],f=n[3],v=n[6],m=n[1],x=n[4],M=n[7],E=n[2],w=n[5],R=n[8];return r[0]=a*y+o*m+l*E,r[3]=a*f+o*x+l*w,r[6]=a*v+o*M+l*R,r[1]=c*y+h*m+u*E,r[4]=c*f+h*x+u*w,r[7]=c*v+h*M+u*R,r[2]=d*y+p*m+g*E,r[5]=d*f+p*x+g*w,r[8]=d*v+p*M+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(n*c-h*i)*y,e[2]=(o*i-n*a)*y,e[3]=d*y,e[4]=(h*t-n*l)*y,e[5]=(n*r-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bo=new Le;function Cd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ca(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lf(){let s=Ca("canvas");return s.style.display="block",s}var uu={};function Kr(s){s in uu||(uu[s]=!0,console.warn(s))}var Ge={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(s,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===qe&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===qe&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ur?to:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function zi(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function fr(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}var du=[.64,.33,.3,.6,.15,.06],pu=[.2126,.7152,.0722],fu=[.3127,.329],mu=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Yn;Ge.define({[Er]:{primaries:du,whitePoint:fu,transfer:to,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:pu,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:du,whitePoint:fu,transfer:qe,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:pu,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}});var Ql=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=Ca("canvas")),Yn.width=e.width,Yn.height=e.height;let i=Yn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ca("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=255*zi(r[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*zi(t[i]/255)):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uf=0,Pa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(zo(n[a].image)):r.push(zo(n[a]))}else r=zo(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function zo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ql.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Df=0,Vt=class s extends rn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=1001,n=1001,r=1006,a=1008,o=1023,l=1009,c=s.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Bi(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null,Vt.DEFAULT_MAPPING=xd,Vt.DEFAULT_ANISOTROPY=1;var je=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],f=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(p+1)/2,E=(v+1)/2,w=(h+d)/4,R=(u+y)/4,b=(g+f)/4;return x>M&&x>E?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=w/i,r=R/i):M>E?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=w/n,r=b/n):E<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(E),i=R/r,n=b/r),this.set(i,n,r,t),this}let m=Math.sqrt((f-g)*(f-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(f-g)/m,this.y=(u-y)/m,this.z=(d-h)/m,this.w=Math.acos((c+p+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eh=class extends rn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Vt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hi=class extends eh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ia=class extends Vt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends Vt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=g,void(e[t+3]=y);if(u!==y||l!==d||c!==p||h!==g){let f=1-o,v=l*d+c*p+h*g+u*y,m=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){let E=Math.sqrt(x),w=Math.atan2(E,v*m);f=Math.sin(f*w)/E,o=Math.sin(o*w)/E}let M=o*m;if(l=l*f+d*M,c=c*f+p*M,h=h*f+g*M,u=u*f+y*M,f===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),p=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ho=new P,vu=new $t,Yt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gs.copy(i.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Ws.subVectors(this.max,Vr),Zn.subVectors(e.a,Vr),Jn.subVectors(e.b,Vr),Kn.subVectors(e.c,Vr),Yi.subVectors(Jn,Zn),Zi.subVectors(Kn,Jn),vn.subVectors(Zn,Kn);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-vn.z,vn.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,vn.z,0,-vn.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-vn.y,vn.x,0];return!!Vo(t,Zn,Jn,Kn,Ws)&&(t=[1,0,0,0,1,0,0,0,1],!!Vo(t,Zn,Jn,Kn,Ws)&&(Xs.crossVectors(Yi,Zi),t=[Xs.x,Xs.y,Xs.z],Vo(t,Zn,Jn,Kn,Ws)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(hi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pi=[new P,new P,new P,new P,new P,new P,new P,new P],hi=new P,Gs=new Yt,Zn=new P,Jn=new P,Kn=new P,Yi=new P,Zi=new P,vn=new P,Vr=new P,Ws=new P,Xs=new P,xn=new P;function Vo(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){xn.fromArray(s,r);let o=n.x*Math.abs(xn.x)+n.y*Math.abs(xn.y)+n.z*Math.abs(xn.z),l=e.dot(xn),c=t.dot(xn),h=i.dot(xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Nf=new Yt,Gr=new P,Go=new P,Zt=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Nf.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Gr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Go)),this.expandByPoint(Gr.copy(e.center).sub(Go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new P,Wo=new P,js=new P,Ji=new P,Xo=new P,qs=new P,jo=new P,Rn=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Wo.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(Wo);let r=.5*e.distanceTo(t),a=-this.direction.dot(js),o=Ji.dot(this.direction),l=-Ji.dot(js),c=Ji.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Wo).addScaledVector(js,d),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);let i=Ii.dot(this.direction),n=Ii.dot(Ii)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>n?null:((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,n,r){Xo.subVectors(t,e),qs.subVectors(i,e),jo.crossVectors(Xo,qs);let a,o=this.direction.dot(jo);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ji.subVectors(this.origin,e);let l=a*this.direction.dot(qs.crossVectors(Ji,qs));if(l<0)return null;let c=a*this.direction.dot(Xo.cross(Ji));if(c<0||l+c>o)return null;let h=-a*Ji.dot(jo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class s{constructor(e,t,i,n,r,a,o,l,c,h,u,d,p,g,y,f){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,d,p,g,y,f)}set(e,t,i,n,r,a,o,l,c,h,u,d,p,g,y,f){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=n,v[1]=r,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=p,v[7]=g,v[11]=y,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Qn.setFromMatrixColumn(e,0).length(),r=1/Qn.setFromMatrixColumn(e,1).length(),a=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Of,e,kf)}lookAt(e,t,i){let n=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Ki.crossVectors(i,zt),Ki.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Ki.crossVectors(i,zt)),Ki.normalize(),$s.crossVectors(zt,Ki),n[0]=Ki.x,n[4]=$s.x,n[8]=zt.x,n[1]=Ki.y,n[5]=$s.y,n[9]=zt.y,n[2]=Ki.z,n[6]=$s.z,n[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],y=i[6],f=i[10],v=i[14],m=i[3],x=i[7],M=i[11],E=i[15],w=n[0],R=n[4],b=n[8],T=n[12],C=n[1],_=n[5],S=n[9],A=n[13],I=n[2],B=n[6],O=n[10],F=n[14],W=n[3],q=n[7],re=n[11],z=n[15];return r[0]=a*w+o*C+l*I+c*W,r[4]=a*R+o*_+l*B+c*q,r[8]=a*b+o*S+l*O+c*re,r[12]=a*T+o*A+l*F+c*z,r[1]=h*w+u*C+d*I+p*W,r[5]=h*R+u*_+d*B+p*q,r[9]=h*b+u*S+d*O+p*re,r[13]=h*T+u*A+d*F+p*z,r[2]=g*w+y*C+f*I+v*W,r[6]=g*R+y*_+f*B+v*q,r[10]=g*b+y*S+f*O+v*re,r[14]=g*T+y*A+f*F+v*z,r[3]=m*w+x*C+M*I+E*W,r[7]=m*R+x*_+M*B+E*q,r[11]=m*b+x*S+M*O+E*re,r[15]=m*T+x*A+M*F+E*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+r*l*u-n*c*u-r*o*d+i*c*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*d+r*a*d-n*a*p+n*c*h-r*l*h)+e[11]*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+e[15]*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],y=e[13],f=e[14],v=e[15],m=u*f*c-y*d*c+y*l*p-o*f*p-u*l*v+o*d*v,x=g*d*c-h*f*c-g*l*p+a*f*p+h*l*v-a*d*v,M=h*y*c-g*u*c+g*o*p-a*y*p-h*o*v+a*u*v,E=g*u*l-h*y*l-g*o*d+a*y*d+h*o*f-a*u*f,w=t*m+i*x+n*M+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=m*R,e[1]=(y*d*r-u*f*r-y*n*p+i*f*p+u*n*v-i*d*v)*R,e[2]=(o*f*r-y*l*r+y*n*c-i*f*c-o*n*v+i*l*v)*R,e[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*p-i*l*p)*R,e[4]=x*R,e[5]=(h*f*r-g*d*r+g*n*p-t*f*p-h*n*v+t*d*v)*R,e[6]=(g*l*r-a*f*r-g*n*c+t*f*c+a*n*v-t*l*v)*R,e[7]=(a*d*r-h*l*r+h*n*c-t*d*c-a*n*p+t*l*p)*R,e[8]=M*R,e[9]=(g*u*r-h*y*r-g*i*p+t*y*p+h*i*v-t*u*v)*R,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*v+t*o*v)*R,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*p-t*o*p)*R,e[12]=E*R,e[13]=(h*y*n-g*u*n+g*i*d-t*y*d-h*i*f+t*u*f)*R,e[14]=(g*o*n-a*y*n-g*i*l+t*y*l+a*i*f-t*o*f)*R,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,y=a*h,f=a*u,v=o*u,m=l*c,x=l*h,M=l*u,E=i.x,w=i.y,R=i.z;return n[0]=(1-(y+v))*E,n[1]=(p+M)*E,n[2]=(g-x)*E,n[3]=0,n[4]=(p-M)*w,n[5]=(1-(d+v))*w,n[6]=(f+m)*w,n[7]=0,n[8]=(g+x)*R,n[9]=(f-m)*R,n[10]=(1-(d+y))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=Qn.set(n[0],n[1],n[2]).length(),a=Qn.set(n[4],n[5],n[6]).length(),o=Qn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],ci.copy(this);let l=1/r,c=1/a,h=1/o;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=c,ci.elements[5]*=c,ci.elements[6]*=c,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=2e3){let l=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,g;if(o===_r)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else{if(o!==Ra)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-r),g=-a*r/(a-r)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-r),d=(t+e)*c,p=(i+n)*h,g,y;if(o===_r)g=(a+r)*u,y=-2*u;else{if(o!==Ra)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=r*u,y=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Qn=new P,ci=new Ae,Of=new P(0,0,0),kf=new P(1,1,1),Ki=new P,$s=new P,zt=new P,xu=new Ae,yu=new $t,Si=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yu.setFromEuler(this),this.setFromQuaternion(yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},Ff=0,_u=new P,er=new $t,Li=new Ae,Ys=new P,Wr=new P,Bf=new P,zf=new $t,Mu=new P(1,0,0),bu=new P(0,1,0),Su=new P(0,0,1),wu={type:"added"},Hf={type:"removed"},tr={type:"childadded",child:null},qo={type:"childremoved",child:null},dt=class s extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new Si,i=new $t,n=new P(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Le}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ys.copy(e):Ys.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Wr,Ys,this.up):Li.lookAt(Ys,Wr,this.up),this.quaternion.setFromRotationMatrix(Li),n&&(Li.extractRotation(n.matrixWorld),er.setFromRotationMatrix(Li),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wu),tr.child=e,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hf),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wu),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};dt.DEFAULT_UP=new P(0,1,0),dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=new P,Ui=new P,$o=new P,Di=new P,ir=new P,nr=new P,Tu=new P,Yo=new P,Zo=new P,Jo=new P,Ko=new je,Qo=new je,el=new je,Oi=class s{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ui.subVectors(e,t),n.cross(ui);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){ui.subVectors(n,t),Ui.subVectors(i,t),$o.subVectors(e,t);let a=ui.dot(ui),o=ui.dot(Ui),l=ui.dot($o),c=Ui.dot(Ui),h=Ui.dot($o),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Di)!==null&&Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Ko.setScalar(0),Qo.setScalar(0),el.setScalar(0),Ko.fromBufferAttribute(e,t),Qo.fromBufferAttribute(e,i),el.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Ko,r.x),a.addScaledVector(Qo,r.y),a.addScaledVector(el,r.z),a}static isFrontFacing(e,t,i,n){return ui.subVectors(i,t),Ui.subVectors(e,t),ui.cross(Ui).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),.5*ui.cross(Ui).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;ir.subVectors(n,i),nr.subVectors(r,i),Yo.subVectors(e,i);let l=ir.dot(Yo),c=nr.dot(Yo);if(l<=0&&c<=0)return t.copy(i);Zo.subVectors(e,n);let h=ir.dot(Zo),u=nr.dot(Zo);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ir,a);Jo.subVectors(e,r);let p=ir.dot(Jo),g=nr.dot(Jo);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(nr,o);let f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Tu.subVectors(r,n),o=(u-h)/(u-h+(p-g)),t.copy(n).addScaledVector(Tu,o);let v=1/(f+y+d);return a=y*v,o=d*v,t.copy(i).addScaledVector(ir,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function tl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}var we=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ge.workingColorSpace){if(e=If(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=tl(a,r,e+1/3),this.g=tl(a,r,e),this.b=tl(a,r,e-1/3)}return Ge.toWorkingColorSpace(this,n),this}setStyle(e,t=lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let i=Pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Ge.fromWorkingColorSpace(Pt.copy(this),e),65536*Math.round(St(255*Pt.r,0,255))+256*Math.round(St(255*Pt.g,0,255))+Math.round(St(255*Pt.b,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Pt.copy(this),t);let i=Pt.r,n=Pt.g,r=Pt.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=lt){Ge.fromWorkingColorSpace(Pt.copy(this),e);let t=Pt.r,i=Pt.g,n=Pt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Zs);let i=Fo(Qi.h,Zs.h,t),n=Fo(Qi.s,Zs.s,t),r=Fo(Qi.l,Zs.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new we;we.NAMES=Pd;var Vf=0,Vi=class extends rn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Bi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=_l,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yl&&(i.blendSrc=this.blendSrc),this.blendDst!==_l&&(i.blendDst=this.blendDst),this.blendEquation!==wn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mt=class extends Vi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wg=Gf();function Gf(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}var ft=new P,Js=new he,at=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jl,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$e(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jl&&(e.usage=this.usage),e}};var La=class extends at{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ua=class extends at{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Re=class extends at{constructor(e,t,i){super(new Float32Array(e),t,i)}},Wf=0,qt=new Ae,il=new dt,rr=new P,Ht=new Yt,Xr=new Yt,bt=new P,Je=class s extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?Ua:La)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Le().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(i,3))}else{for(let i=0,n=t.count;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new P,1/0);if(e){let i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Ht.min,Xr.min),Ht.expandByPoint(bt),bt.addVectors(Ht.max,Xr.max),Ht.expandByPoint(bt)):(Ht.expandByPoint(Xr.min),Ht.expandByPoint(Xr.max))}Ht.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),bt.add(rr)),n=Math.max(n,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new P,l[b]=new P;let c=new P,h=new P,u=new P,d=new he,p=new he,g=new he,y=new P,f=new P;function v(b,T,C){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let _=1/(p.x*g.y-g.x*p.y);isFinite(_)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(_),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(_),o[b].add(y),o[T].add(y),o[C].add(y),l[b].add(f),l[T].add(f),l[C].add(f))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let b=0,T=m.length;b<T;++b){let C=m[b],_=C.start;for(let S=_,A=_+C.count;S<A;S+=3)v(e.getX(S+0),e.getX(S+1),e.getX(S+2))}let x=new P,M=new P,E=new P,w=new P;function R(b){E.fromBufferAttribute(n,b),w.copy(E);let T=o[b];x.copy(T),x.sub(E.multiplyScalar(E.dot(T))).normalize(),M.crossVectors(w,T);let C=M.dot(l[b])<0?-1:1;a.setXYZW(b,x.x,x.y,x.z,C)}for(let b=0,T=m.length;b<T;++b){let C=m[b],_=C.start;for(let S=_,A=_+C.count;S<A;S+=3)R(e.getX(S+0)),R(e.getX(S+1)),R(e.getX(S+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new at(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,f=l.length;y<f;y++){p=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*h;for(let v=0;v<h;v++)d[g++]=c[p++]}return new at(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eu=new Ae,yn=new Rn,Ks=new Zt,Au=new P,Qs=new P,ea=new P,ta=new P,nl=new P,ia=new P,Ru=new P,na=new P,xe=class extends dt{constructor(e=new Je,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(nl.fromBufferAttribute(u,e),a?ia.addScaledVector(nl,h):ia.addScaledVector(nl.sub(t),h))}t.add(ia)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),yn.copy(e.ray).recast(e.near),Ks.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Ks,Au)===null||yn.origin.distanceToSquared(Au)>(e.far-e.near)**2))return;Eu.copy(r).invert(),yn.copy(e.ray).applyMatrix4(Eu),i.boundingBox!==null&&yn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,yn)}}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let f=d[g],v=a[f.materialIndex];for(let m=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));m<x;m+=3)n=ra(this,v,e,i,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);g<y;g+=3)n=ra(this,a,e,i,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let f=d[g],v=a[f.materialIndex];for(let m=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));m<x;m+=3)n=ra(this,v,e,i,c,h,u,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);g<y;g+=3)n=ra(this,a,e,i,c,h,u,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}};function ra(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Qs),s.getVertexPosition(l,ea),s.getVertexPosition(c,ta);let h=(function(u,d,p,g,y,f,v,m){let x;if(x=d.side===1?g.intersectTriangle(v,f,y,!0,m):g.intersectTriangle(y,f,v,d.side===0,m),x===null)return null;na.copy(m),na.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(na);return M<p.near||M>p.far?null:{distance:M,point:na.clone(),object:u}})(s,e,t,i,Qs,ea,ta,Ru);if(h){let u=new P;Oi.getBarycoord(Ru,Qs,ea,ta,u),n&&(h.uv=Oi.getInterpolatedAttribute(n,o,l,c,u,new he)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,o,l,c,u,new he)),a&&(h.normal=Oi.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Oi.getNormal(Qs,ea,ta,d.normal),h.face=d,h.barycoord=u}return h}var gt=class s extends Je{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function g(y,f,v,m,x,M,E,w,R,b,T){let C=M/R,_=E/b,S=M/2,A=E/2,I=w/2,B=R+1,O=b+1,F=0,W=0,q=new P;for(let re=0;re<O;re++){let z=re*_-A;for(let j=0;j<B;j++){let ee=j*C-S;q[y]=ee*m,q[f]=z*x,q[v]=I,c.push(q.x,q.y,q.z),q[y]=0,q[f]=0,q[v]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(j/R),u.push(1-re/b),F+=1}}for(let re=0;re<b;re++)for(let z=0;z<R;z++){let j=d+z+B*re,ee=d+z+B*(re+1),le=d+(z+1)+B*(re+1),ue=d+(z+1)+B*re;l.push(j,ee,ue),l.push(ee,le,ue),W+=6}o.addGroup(p,W,T),p+=W,d+=F}g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Mr(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Nt(s){let e={};for(let t=0;t<s.length;t++){let i=Mr(s[t]);for(let n in i)e[n]=i[n]}return e}function Id(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var Xf={clone:Mr,merge:Nt},Jt=class extends Vi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},os=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=_r}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},en=new P,Cu=new he,Pu=new he,It=class extends os{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Kl*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ea*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Kl*Math.atan(Math.tan(.5*Ea*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){en.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(en.x,en.y).multiplyScalar(-e/en.z),en.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(en.x,en.y).multiplyScalar(-e/en.z)}getViewSize(e,t){return this.getViewBounds(e,Cu,Pu),t.subVectors(Pu,Cu)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ea*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sr=-90,ih=class extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new It(sr,1,e,t);n.layers=this.layers,this.add(n);let r=new It(sr,1,e,t);r.layers=this.layers,this.add(r);let a=new It(sr,1,e,t);a.layers=this.layers,this.add(a);let o=new It(sr,1,e,t);o.layers=this.layers,this.add(o);let l=new It(sr,1,e,t);l.layers=this.layers,this.add(l);let c=new It(sr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===_r)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ra)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Da=class extends Vt{constructor(e,t,i,n,r,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:gr,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nh=class extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Da(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ki}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new gt(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;let a=new xe(n,r),o=t.minFilter;return t.minFilter===dr&&(t.minFilter=ki),new ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},rl=new P,jf=new P,qf=new Le,Ni=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=rl.subVectors(i,t).cross(jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(rl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||qf.getNormalMatrix(e),n=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_n=new Zt,sa=new P,sn=class{constructor(e=new Ni,t=new Ni,i=new Ni,n=new Ni,r=new Ni,a=new Ni){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],g=n[9],y=n[10],f=n[11],v=n[12],m=n[13],x=n[14],M=n[15];if(i[0].setComponents(l-r,d-c,f-p,M-v).normalize(),i[1].setComponents(l+r,d+c,f+p,M+v).normalize(),i[2].setComponents(l+a,d+h,f+g,M+m).normalize(),i[3].setComponents(l-a,d-h,f-g,M-m).normalize(),i[4].setComponents(l-o,d-u,f-y,M-x).normalize(),t===_r)i[5].setComponents(l+o,d+u,f+y,M+x).normalize();else{if(t!==Ra)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,y,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(sa.x=n.normal.x>0?e.max.x:e.min.x,sa.y=n.normal.y>0?e.max.y:e.min.y,sa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ld(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function $f(s){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(s.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(r,a){let o=r.array,l=r.usage,c=o.byteLength,h=s.createBuffer(),u;if(s.bindBuffer(a,h),s.bufferData(a,o,l),r.onUploadCallback(),o instanceof Float32Array)u=s.FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?s.HALF_FLOAT:s.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=s.SHORT;else if(o instanceof Uint32Array)u=s.UNSIGNED_INT;else if(o instanceof Int32Array)u=s.INT;else if(o instanceof Int8Array)u=s.BYTE;else if(o instanceof Uint8Array)u=s.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=s.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:c}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){let l=a.array,c=a.updateRanges;if(s.bindBuffer(o,r),c.length===0)s.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];s.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var ct=class s extends Je{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],y=[],f=[];for(let v=0;v<h;v++){let m=v*d-a;for(let x=0;x<c;x++){let M=x*u-r;g.push(M,-m,0),y.push(0,0,1),f.push(x/o),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let m=0;m<o;m++){let x=m+c*v,M=m+c*(v+1),E=m+1+c*(v+1),w=m+1+c*v;p.push(x,M,w),p.push(M,E,w)}this.setIndex(p),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},De={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},fe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},_i={basic:{uniforms:Nt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Nt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new we(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Nt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Nt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Nt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new we(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Nt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Nt([fe.points,fe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Nt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Nt([fe.common,fe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Nt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Nt([fe.sprite,fe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Nt([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Nt([fe.lights,fe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};_i.physical={uniforms:Nt([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var aa={r:0,b:0,g:0},Mn=new Si,Yf=new Ae;function Zf(s,e,t,i,n,r,a){let o=new we(0),l,c,h=r===!0?0:1,u=null,d=0,p=null;function g(f){let v=f.isScene===!0?f.background:null;return v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v}function y(f,v){f.getRGB(aa,Id(s)),i.buffers.color.setClear(aa.r,aa.g,aa.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(f,v=1){o.set(f),h=v,y(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,y(o,h)},render:function(f){let v=!1,m=g(f);m===null?y(o,h):m&&m.isColor&&(y(m,1),v=!0);let x=s.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))},addToRenderList:function(f,v){let m=g(v);m&&(m.isCubeTexture||m.mapping===eo)?(c===void 0&&(c=new xe(new gt(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Mr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Mn.copy(v.backgroundRotation),Mn.x*=-1,Mn.y*=-1,Mn.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(Mn.y*=-1,Mn.z*=-1),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yf.makeRotationFromEuler(Mn)),c.material.toneMapped=Ge.getTransfer(m.colorSpace)!==qe,u===m&&d===m.version&&p===s.toneMapping||(c.material.needsUpdate=!0,u=m,d=m.version,p=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new xe(new ct(2,2),new Jt({name:"BackgroundMaterial",uniforms:Mr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(m.colorSpace)!==qe,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),u===m&&d===m.version&&p===s.toneMapping||(l.material.needsUpdate=!0,u=m,d=m.version,p=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}}}function Jf(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=c(null),r=n,a=!1;function o(v){return s.bindVertexArray(v)}function l(v){return s.deleteVertexArray(v)}function c(v){let m=[],x=[],M=[];for(let E=0;E<t;E++)m[E]=0,x[E]=0,M[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:x,attributeDivisors:M,object:v,attributes:{},index:null}}function h(){let v=r.newAttributes;for(let m=0,x=v.length;m<x;m++)v[m]=0}function u(v){d(v,0)}function d(v,m){let x=r.newAttributes,M=r.enabledAttributes,E=r.attributeDivisors;x[v]=1,M[v]===0&&(s.enableVertexAttribArray(v),M[v]=1),E[v]!==m&&(s.vertexAttribDivisor(v,m),E[v]=m)}function p(){let v=r.newAttributes,m=r.enabledAttributes;for(let x=0,M=m.length;x<M;x++)m[x]!==v[x]&&(s.disableVertexAttribArray(x),m[x]=0)}function g(v,m,x,M,E,w,R){R===!0?s.vertexAttribIPointer(v,m,x,E,w):s.vertexAttribPointer(v,m,x,M,E,w)}function y(){f(),a=!0,r!==n&&(r=n,o(r.object))}function f(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(v,m,x,M,E){let w=!1,R=(function(b,T,C){let _=C.wireframe===!0,S=i[b.id];S===void 0&&(S={},i[b.id]=S);let A=S[T.id];A===void 0&&(A={},S[T.id]=A);let I=A[_];return I===void 0&&(I=c(s.createVertexArray()),A[_]=I),I})(M,x,m);r!==R&&(r=R,o(r.object)),w=(function(b,T,C,_){let S=r.attributes,A=T.attributes,I=0,B=C.getAttributes();for(let O in B)if(B[O].location>=0){let F=S[O],W=A[O];if(W===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),F===void 0||F.attribute!==W||W&&F.data!==W.data)return!0;I++}return r.attributesNum!==I||r.index!==_})(v,M,x,E),w&&(function(b,T,C,_){let S={},A=T.attributes,I=0,B=C.getAttributes();for(let O in B)if(B[O].location>=0){let F=A[O];F===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(F=b.instanceColor));let W={};W.attribute=F,F&&F.data&&(W.data=F.data),S[O]=W,I++}r.attributes=S,r.attributesNum=I,r.index=_})(v,M,x,E),E!==null&&e.update(E,s.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,(function(b,T,C,_){h();let S=_.attributes,A=C.getAttributes(),I=T.defaultAttributeValues;for(let B in A){let O=A[B];if(O.location>=0){let F=S[B];if(F===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(F=b.instanceColor)),F!==void 0){let W=F.normalized,q=F.itemSize,re=e.get(F);if(re===void 0)continue;let z=re.buffer,j=re.type,ee=re.bytesPerElement,le=j===s.INT||j===s.UNSIGNED_INT||F.gpuType===Zh;if(F.isInterleavedBufferAttribute){let ue=F.data,N=ue.stride,U=F.offset;if(ue.isInstancedInterleavedBuffer){for(let X=0;X<O.locationSize;X++)d(O.location+X,ue.meshPerAttribute);b.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let X=0;X<O.locationSize;X++)u(O.location+X);s.bindBuffer(s.ARRAY_BUFFER,z);for(let X=0;X<O.locationSize;X++)g(O.location+X,q/O.locationSize,j,W,N*ee,(U+q/O.locationSize*X)*ee,le)}else{if(F.isInstancedBufferAttribute){for(let ue=0;ue<O.locationSize;ue++)d(O.location+ue,F.meshPerAttribute);b.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ue=0;ue<O.locationSize;ue++)u(O.location+ue);s.bindBuffer(s.ARRAY_BUFFER,z);for(let ue=0;ue<O.locationSize;ue++)g(O.location+ue,q/O.locationSize,j,W,q*ee,q/O.locationSize*ue*ee,le)}}else if(I!==void 0){let W=I[B];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(O.location,W);break;case 3:s.vertexAttrib3fv(O.location,W);break;case 4:s.vertexAttrib4fv(O.location,W);break;default:s.vertexAttrib1fv(O.location,W)}}}}p()})(v,m,x,M),E!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:y,resetDefaultState:f,dispose:function(){y();for(let v in i){let m=i[v];for(let x in m){let M=m[x];for(let E in M)l(M[E].object),delete M[E];delete m[x]}delete i[v]}},releaseStatesOfGeometry:function(v){if(i[v.id]===void 0)return;let m=i[v.id];for(let x in m){let M=m[x];for(let E in M)l(M[E].object),delete M[E];delete m[x]}delete i[v.id]},releaseStatesOfProgram:function(v){for(let m in i){let x=i[m];if(x[v.id]===void 0)continue;let M=x[v.id];for(let E in M)l(M[E].object),delete M[E];delete x[v.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Kf(s,e,t){let i;function n(r,a,o){o!==0&&(s.drawArraysInstanced(i,r,a,o),t.update(a,i,o))}this.setMode=function(r){i=r},this.render=function(r,a){s.drawArrays(i,r,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(r,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,r,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(r,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<r.length;h++)n(r[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,r,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,i,1)}}}function Qf(s,e,t,i){let n;function r(d){if(d==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:r,textureFormatReadable:function(d){return d===bi||i.convert(d)===s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==nn&&i.convert(d)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Fi&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:s.getParameter(s.MAX_TEXTURE_SIZE),maxCubemapSize:s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:s.getParameter(s.MAX_VERTEX_ATTRIBS),maxVertexUniforms:s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:s.getParameter(s.MAX_VARYING_VECTORS),maxFragmentUniforms:s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:s.getParameter(s.MAX_SAMPLES)}}function em(s){let e=this,t=null,i=0,n=!1,r=!1,a=new Ni,o=new Le,l={value:null,needsUpdate:!1};function c(h,u,d,p){let g=h!==null?h.length:0,y=null;if(g!==0){if(y=l.value,p!==!0||y===null){let f=d+4*g,v=u.matrixWorldInverse;o.getNormalMatrix(v),(y===null||y.length<f)&&(y=new Float32Array(f));for(let m=0,x=d;m!==g;++m,x+=4)a.copy(h[m]).applyMatrix4(v,o),a.normal.toArray(y,x),y[x+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||n;return n=u,i=h.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,g=h.clipIntersection,y=h.clipShadows,f=s.get(h);if(!n||p===null||p.length===0||r&&!y)r?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let v=r?0:i,m=4*v,x=f.clippingState||null;l.value=x,x=c(p,u,m,d);for(let M=0;M!==m;++M)x[M]=t[M];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}}}function tm(s){let e=new WeakMap;function t(n,r){return r===Ml?n.mapping=gr:r===bl&&(n.mapping=vr),n}function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping;if(r===Ml||r===bl){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new nh(a.height);return o.fromEquirectangularTexture(s,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Na=class extends os{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Iu=[.125,.215,.35,.446,.526,.582],jr=20,sl=new Na,Lu=new we,al=null,ol=0,ll=0,hl=!1,Sn=(1+Math.sqrt(5))/2,ar=1/Sn,Uu=[new P(-Sn,ar,0),new P(Sn,ar,0),new P(-ar,0,Sn),new P(ar,0,Sn),new P(0,Sn,-ar),new P(0,Sn,ar),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],br=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(al,ol,ll),this._renderer.xr.enabled=hl,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ki,minFilter:ki,generateMipmaps:!1,type:vs,format:bi,colorSpace:Er,depthBuffer:!1},n=Du(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Iu.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let g=1/p;d>a-4?g=Iu[d-a+4-1]:d===0&&(g=0),c.push(g);let y=1/(p-2),f=-y,v=1+y,m=[f,f,v,f,v,v,f,f,v,v,f,v],x=6,M=6,E=3,w=2,R=1,b=new Float32Array(E*M*x),T=new Float32Array(w*M*x),C=new Float32Array(R*M*x);for(let S=0;S<x;S++){let A=S%3*2/3-1,I=S>2?0:-1,B=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];b.set(B,E*M*S),T.set(m,w*M*S);let O=[S,S,S,S,S,S];C.set(O,R*M*S)}let _=new Je;_.setAttribute("position",new at(b,E)),_.setAttribute("uv",new at(T,w)),_.setAttribute("faceIndex",new at(C,R)),o.push(_),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(r)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(jr),h=new P(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ic(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(r,e,t)}return n}_compileMaterial(e){let t=new xe(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,i,n){let r=new It(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Lu),l.toneMapping=0,l.autoClear=!1;let u=new mt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new xe(new gt,u),p=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(Lu),p=!0);for(let y=0;y<6;y++){let f=y%3;f===0?(r.up.set(0,a[y],0),r.lookAt(o[y],0,0)):f===1?(r.up.set(0,0,a[y]),r.lookAt(0,o[y],0)):(r.up.set(0,a[y],0),r.lookAt(0,0,o[y]));let v=this._cubeSize;oa(n,f*v,y>2?v:0,v,v),l.setRenderTarget(n),p&&l.render(d,r),l.render(e,r)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===gr||e.mapping===vr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;oa(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,sl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uu[(n-r-1)%Uu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new xe(this._lodPlanes[n],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,g=r/p,y=isFinite(r)?1+Math.floor(3*g):jr;y>jr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let f=[],v=0;for(let M=0;M<jr;++M){let E=M/g,w=Math.exp(-E*E/2);f.push(w),M===0?v+=w:M<y&&(v+=2*w)}for(let M=0;M<f.length;M++)f[M]=f[M]/v;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:m}=this;u.dTheta.value=p,u.mipInt.value=m-i;let x=this._sizeLods[n];oa(t,3*x*(n>m-4?n-m+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,sl)}};function Du(s,e,t){let i=new Hi(s,e,t);return i.texture.mapping=eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function Nu(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ou(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function im(s){let e=new WeakMap,t=null;function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping,a=r===Ml||r===bl,o=r===gr||r===vr;if(a||o){let l=e.get(n),c=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return t===null&&(t=new br(s)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),l.texture;if(l!==void 0)return l.texture;{let h=n.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new br(s)),l=a?t.fromEquirectangular(n):t.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function nm(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Kr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function rm(s,e,t,i){let n={},r=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,g=d.length;p<g;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete n[c.id];let h=r.get(c);h&&(e.remove(h),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let y=h.array;d=h.version;for(let f=0,v=y.length;f<v;f+=3){let m=y[f+0],x=y[f+1],M=y[f+2];c.push(m,x,x,M,M,m)}}else{if(u===void 0)return;{let y=u.array;d=u.version;for(let f=0,v=y.length/3-1;f<v;f+=3){let m=f+0,x=f+1,M=f+2;c.push(m,x,x,M,M,m)}}}let p=new(Cd(c)?Ua:La)(c,1);p.version=d;let g=r.get(l);g&&e.remove(g),r.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],s.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,g=d.length;p<g;p++)e.update(d[p],s.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=r.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return r.get(l)}}}function sm(s,e,t){let i,n,r;function a(o,l,c){c!==0&&(s.drawElementsInstanced(i,l,n,o*r,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,r=o.bytesPerElement},this.render=function(o,l){s.drawElements(i,l,n,o*r),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/r,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function am(s){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case s.TRIANGLES:e.triangles+=n*(t/3);break;case s.LINES:e.lines+=n*(t/2);break;case s.LINE_STRIP:e.lines+=n*(t-1);break;case s.LINE_LOOP:e.lines+=n*t;break;case s.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function om(s,e,t){let i=new WeakMap,n=new je;return{update:function(r,a,o){let l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let b=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],m=0;d===!0&&(m=1),p===!0&&(m=2),g===!0&&(m=3);let x=a.attributes.position.count*m,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*M*4*h),w=new Ia(E,x,M,h);w.type=Fi,w.needsUpdate=!0;let R=4*m;for(let T=0;T<h;T++){let C=y[T],_=f[T],S=v[T],A=x*M*4*T;for(let I=0;I<C.count;I++){let B=I*R;d===!0&&(n.fromBufferAttribute(C,I),E[A+B+0]=n.x,E[A+B+1]=n.y,E[A+B+2]=n.z,E[A+B+3]=0),p===!0&&(n.fromBufferAttribute(_,I),E[A+B+4]=n.x,E[A+B+5]=n.y,E[A+B+6]=n.z,E[A+B+7]=0),g===!0&&(n.fromBufferAttribute(S,I),E[A+B+8]=n.x,E[A+B+9]=n.y,E[A+B+10]=n.z,E[A+B+11]=S.itemSize===4?n.w:1)}}u={count:h,texture:w,size:new he(x,M)},i.set(a,u),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(s,"morphTargetBaseInfluence",p),o.getUniforms().setValue(s,"morphTargetInfluences",l)}o.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}}}function lm(s,e,t,i){let n=new WeakMap;function r(a){let o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),n.get(a)!==o&&(t.update(a.instanceMatrix,s.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,s.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}var Oa=class extends Vt{constructor(e,t,i,n,r,a,o,l,c,h=1026){if(h!==ss&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ss&&(i=An),i===void 0&&h===yr&&(i=xr),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ud=new Vt,ku=new Oa(1,1),Dd=new Ia,Nd=new th,Od=new Da,Fu=[],Bu=[],zu=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function Ar(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=Fu[n];if(r===void 0&&(r=new Float32Array(n),Fu[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function yt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function io(s,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function hm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function um(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function dm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function pm(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,i))return;Vu.set(i),s.uniformMatrix2fv(this.addr,!1,Vu),_t(t,i)}}function fm(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,i))return;Hu.set(i),s.uniformMatrix3fv(this.addr,!1,Hu),_t(t,i)}}function mm(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,i))return;zu.set(i),s.uniformMatrix4fv(this.addr,!1,zu),_t(t,i)}}function gm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function xm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function ym(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function _m(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Mm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function bm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function Sm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function wm(s,e,t){let i=this.cache,n=t.allocateTextureUnit(),r;i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),this.type===s.SAMPLER_2D_SHADOW?(ku.compareFunction=515,r=ku):r=Ud,t.setTexture2D(e||r,n)}function Tm(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Nd,n)}function Em(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Od,n)}function Am(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Dd,n)}function Rm(s,e){s.uniform1fv(this.addr,e)}function Cm(s,e){let t=Ar(e,this.size,2);s.uniform2fv(this.addr,t)}function Pm(s,e){let t=Ar(e,this.size,3);s.uniform3fv(this.addr,t)}function Im(s,e){let t=Ar(e,this.size,4);s.uniform4fv(this.addr,t)}function Lm(s,e){let t=Ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Um(s,e){let t=Ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Dm(s,e){let t=Ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Nm(s,e){s.uniform1iv(this.addr,e)}function Om(s,e){s.uniform2iv(this.addr,e)}function km(s,e){s.uniform3iv(this.addr,e)}function Fm(s,e){s.uniform4iv(this.addr,e)}function Bm(s,e){s.uniform1uiv(this.addr,e)}function zm(s,e){s.uniform2uiv(this.addr,e)}function Hm(s,e){s.uniform3uiv(this.addr,e)}function Vm(s,e){s.uniform4uiv(this.addr,e)}function Gm(s,e,t){let i=this.cache,n=e.length,r=io(t,n);yt(i,r)||(s.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Ud,r[a])}function Wm(s,e,t){let i=this.cache,n=e.length,r=io(t,n);yt(i,r)||(s.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Nd,r[a])}function Xm(s,e,t){let i=this.cache,n=e.length,r=io(t,n);yt(i,r)||(s.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Od,r[a])}function jm(s,e,t){let i=this.cache,n=e.length,r=io(t,n);yt(i,r)||(s.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Dd,r[a])}var rh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return hm;case 35664:return cm;case 35665:return um;case 35666:return dm;case 35674:return pm;case 35675:return fm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return ym;case 5125:return _m;case 36294:return Mm;case 36295:return bm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Am}})(t.type)}},sh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Im;case 35674:return Lm;case 35675:return Um;case 35676:return Dm;case 5124:case 35670:return Nm;case 35667:case 35671:return Om;case 35668:case 35672:return km;case 35669:case 35673:return Fm;case 5125:return Bm;case 36294:return zm;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return jm}})(t.type)}},ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},cl=/(\w+)(\])?(\[|\.)?/g;function Gu(s,e){s.seq.push(e),s.map[e.id]=e}function qm(s,e,t){let i=s.name,n=i.length;for(cl.lastIndex=0;;){let r=cl.exec(i),a=cl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){Gu(t,c===void 0?new rh(o,s,e):new sh(o,s,e));break}{let h=t.map[o];h===void 0&&(h=new ah(o),Gu(t,h)),t=h}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=e.getActiveUniform(t,n);qm(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Wu(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var $m=0,Xu=new Le;function ju(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let g=p+1;h.push(`${g===l?">":" "} ${g}: ${c[p]}`)}return h.join(`
`)})(s.getShaderSource(e),a)}return n}function Ym(s,e){let t=(function(i){Ge._getMatrix(Xu,Ge.workingColorSpace,i);let n=`mat3( ${Xu.elements.map((r=>r.toFixed(4)))} )`;switch(Ge.getTransfer(i)){case to:return[n,"LinearTransferOETF"];case qe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zm(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var la=new P;function Jm(){return Ge.getLuminanceCoefficients(la),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${la.x.toFixed(4)}, ${la.y.toFixed(4)}, ${la.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qr(s){return s!==""}function qu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(s){return s.replace(Km,e0)}var Qm=new Map;function e0(s,e){let t=De[e];if(t===void 0){let i=Qm.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return oh(t)}var t0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(s){return s.replace(t0,i0)}function i0(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Zu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n0(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(_){let S="SHADOWMAP_TYPE_BASIC";return _.shadowMapType===1?S="SHADOWMAP_TYPE_PCF":_.shadowMapType===2?S="SHADOWMAP_TYPE_PCF_SOFT":_.shadowMapType===3&&(S="SHADOWMAP_TYPE_VSM"),S})(t),c=(function(_){let S="ENVMAP_TYPE_CUBE";if(_.envMap)switch(_.envMapMode){case gr:case vr:S="ENVMAP_TYPE_CUBE";break;case eo:S="ENVMAP_TYPE_CUBE_UV"}return S})(t),h=(function(_){let S="ENVMAP_MODE_REFLECTION";return _.envMap&&_.envMapMode===vr&&(S="ENVMAP_MODE_REFRACTION"),S})(t),u=(function(_){let S="ENVMAP_BLENDING_NONE";if(_.envMap)switch(_.combine){case 0:S="ENVMAP_BLENDING_MULTIPLY";break;case 1:S="ENVMAP_BLENDING_MIX";break;case 2:S="ENVMAP_BLENDING_ADD"}return S})(t),d=(function(_){let S=_.envMapCubeUVHeight;if(S===null)return null;let A=Math.log2(S)-2,I=1/S;return{texelWidth:1/(3*Math.max(Math.pow(2,A),112)),texelHeight:I,maxMip:A}})(t),p=(function(_){return[_.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",_.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)})(t),g=(function(_){let S=[];for(let A in _){let I=_[A];I!==!1&&S.push("#define "+A+" "+I)}return S.join(`
`)})(r),y=n.createProgram(),f,v,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),f.length>0&&(f+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),v.length>0&&(v+=`
`)):(f=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),v=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?De.tonemapping_pars_fragment:"",t.toneMapping!==0?Zm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Ym("linearToOutputTexel",t.outputColorSpace),Jm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=oh(a),a=qu(a,t),a=$u(a,t),o=oh(o),o=qu(o,t),o=$u(o,t),a=Yu(a),o=Yu(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let x=m+f+a,M=m+v+o,E=Wu(n,n.VERTEX_SHADER,x),w=Wu(n,n.FRAGMENT_SHADER,M);function R(_){if(s.debug.checkShaderErrors){let S=n.getProgramInfoLog(y).trim(),A=n.getShaderInfoLog(E).trim(),I=n.getShaderInfoLog(w).trim(),B=!0,O=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,y,E,w);else{let F=ju(n,E,"vertex"),W=ju(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+S+`
`+F+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):A!==""&&I!==""||(O=!1);O&&(_.diagnostics={runnable:B,programLog:S,vertexShader:{log:A,prefix:f},fragmentShader:{log:I,prefix:v}})}n.deleteShader(E),n.deleteShader(w),b=new mr(n,y),T=(function(S,A){let I={},B=S.getProgramParameter(A,S.ACTIVE_ATTRIBUTES);for(let O=0;O<B;O++){let F=S.getActiveAttrib(A,O),W=F.name,q=1;F.type===S.FLOAT_MAT2&&(q=2),F.type===S.FLOAT_MAT3&&(q=3),F.type===S.FLOAT_MAT4&&(q=4),I[W]={type:F.type,location:S.getAttribLocation(A,W),locationSize:q}}return I})(n,y)}let b,T;n.attachShader(y,E),n.attachShader(y,w),t.index0AttributeName!==void 0?n.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y),this.getUniforms=function(){return b===void 0&&R(this),b},this.getAttributes=function(){return T===void 0&&R(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(y,37297)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$m++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=w,this}var r0=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hh(e),t.set(e,i)),i}},hh=class{constructor(e){this.id=r0++,this.code=e,this.usedTimes=0}};function s0(s,e,t,i,n,r,a){let o=new as,l=new lh,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,v,m,x,M){let E=x.fog,w=M.geometry,R=f.isMeshStandardMaterial?x.environment:null,b=(f.isMeshStandardMaterial?t:e).get(f.envMap||R),T=b&&b.mapping===eo?b.image.height:null,C=g[f.type];f.precision!==null&&(p=n.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let _=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,S=_!==void 0?_.length:0,A,I,B,O,F=0;if(w.morphAttributes.position!==void 0&&(F=1),w.morphAttributes.normal!==void 0&&(F=2),w.morphAttributes.color!==void 0&&(F=3),C){let kr=_i[C];A=kr.vertexShader,I=kr.fragmentShader}else A=f.vertexShader,I=f.fragmentShader,l.update(f),B=l.getVertexShaderID(f),O=l.getFragmentShaderID(f);let W=s.getRenderTarget(),q=s.state.buffers.depth.getReversed(),re=M.isInstancedMesh===!0,z=M.isBatchedMesh===!0,j=!!f.map,ee=!!f.matcap,le=!!b,ue=!!f.aoMap,N=!!f.lightMap,U=!!f.bumpMap,X=!!f.normalMap,V=!!f.displacementMap,k=!!f.emissiveMap,G=!!f.metalnessMap,L=!!f.roughnessMap,H=f.anisotropy>0,Y=f.clearcoat>0,ae=f.dispersion>0,$=f.iridescence>0,ne=f.sheen>0,ie=f.transmission>0,ce=H&&!!f.anisotropyMap,ge=Y&&!!f.clearcoatMap,me=Y&&!!f.clearcoatNormalMap,Me=Y&&!!f.clearcoatRoughnessMap,Ce=$&&!!f.iridescenceMap,He=$&&!!f.iridescenceThicknessMap,Oe=ne&&!!f.sheenColorMap,be=ne&&!!f.sheenRoughnessMap,Xe=!!f.specularMap,Ke=!!f.specularColorMap,rt=!!f.specularIntensityMap,ye=ie&&!!f.transmissionMap,Fe=ie&&!!f.thicknessMap,Ze=!!f.gradientMap,Wn=!!f.alphaMap,Us=f.alphaTest>0,ri=!!f.alphaHash,gi=!!f.extensions,dn=0;f.toneMapped&&(W!==null&&W.isXRRenderTarget!==!0||(dn=s.toneMapping));let Z={shaderID:C,shaderType:f.type,shaderName:f.name,vertexShader:A,fragmentShader:I,defines:f.defines,customVertexShaderID:B,customFragmentShaderID:O,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:z,batchingColor:z&&M._colorsTexture!==null,instancing:re,instancingColor:re&&M.instanceColor!==null,instancingMorph:re&&M.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Er,alphaToCoverage:!!f.alphaToCoverage,map:j,matcap:ee,envMap:le,envMapMode:le&&b.mapping,envMapCubeUVHeight:T,aoMap:ue,lightMap:N,bumpMap:U,normalMap:X,displacementMap:d&&V,emissiveMap:k,normalMapObjectSpace:X&&f.normalMapType===1,normalMapTangentSpace:X&&f.normalMapType===0,metalnessMap:G,roughnessMap:L,anisotropy:H,anisotropyMap:ce,clearcoat:Y,clearcoatMap:ge,clearcoatNormalMap:me,clearcoatRoughnessMap:Me,dispersion:ae,iridescence:$,iridescenceMap:Ce,iridescenceThicknessMap:He,sheen:ne,sheenColorMap:Oe,sheenRoughnessMap:be,specularMap:Xe,specularColorMap:Ke,specularIntensityMap:rt,transmission:ie,transmissionMap:ye,thicknessMap:Fe,gradientMap:Ze,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:Wn,alphaTest:Us,alphaHash:ri,combine:f.combine,mapUv:j&&y(f.map.channel),aoMapUv:ue&&y(f.aoMap.channel),lightMapUv:N&&y(f.lightMap.channel),bumpMapUv:U&&y(f.bumpMap.channel),normalMapUv:X&&y(f.normalMap.channel),displacementMapUv:V&&y(f.displacementMap.channel),emissiveMapUv:k&&y(f.emissiveMap.channel),metalnessMapUv:G&&y(f.metalnessMap.channel),roughnessMapUv:L&&y(f.roughnessMap.channel),anisotropyMapUv:ce&&y(f.anisotropyMap.channel),clearcoatMapUv:ge&&y(f.clearcoatMap.channel),clearcoatNormalMapUv:me&&y(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&y(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(f.iridescenceMap.channel),iridescenceThicknessMapUv:He&&y(f.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&y(f.sheenColorMap.channel),sheenRoughnessMapUv:be&&y(f.sheenRoughnessMap.channel),specularMapUv:Xe&&y(f.specularMap.channel),specularColorMapUv:Ke&&y(f.specularColorMap.channel),specularIntensityMapUv:rt&&y(f.specularIntensityMap.channel),transmissionMapUv:ye&&y(f.transmissionMap.channel),thicknessMapUv:Fe&&y(f.thicknessMap.channel),alphaMapUv:Wn&&y(f.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(X||H),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!w.attributes.uv&&(j||Wn),fog:!!E,useFog:f.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:q,skinning:M.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:S,morphTextureStride:F,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:s.shadowMap.enabled&&m.length>0,shadowMapType:s.shadowMap.type,toneMapping:dn,decodeVideoTexture:j&&f.map.isVideoTexture===!0&&Ge.getTransfer(f.map.colorSpace)===qe,decodeVideoTextureEmissive:k&&f.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(f.emissiveMap.colorSpace)===qe,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:gi&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gi&&f.extensions.multiDraw===!0||z)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Z.vertexUv1s=c.has(1),Z.vertexUv2s=c.has(2),Z.vertexUv3s=c.has(3),c.clear(),Z},getProgramCacheKey:function(f){let v=[];if(f.shaderID?v.push(f.shaderID):(v.push(f.customVertexShaderID),v.push(f.customFragmentShaderID)),f.defines!==void 0)for(let m in f.defines)v.push(m),v.push(f.defines[m]);return f.isRawShaderMaterial===!1&&((function(m,x){m.push(x.precision),m.push(x.outputColorSpace),m.push(x.envMapMode),m.push(x.envMapCubeUVHeight),m.push(x.mapUv),m.push(x.alphaMapUv),m.push(x.lightMapUv),m.push(x.aoMapUv),m.push(x.bumpMapUv),m.push(x.normalMapUv),m.push(x.displacementMapUv),m.push(x.emissiveMapUv),m.push(x.metalnessMapUv),m.push(x.roughnessMapUv),m.push(x.anisotropyMapUv),m.push(x.clearcoatMapUv),m.push(x.clearcoatNormalMapUv),m.push(x.clearcoatRoughnessMapUv),m.push(x.iridescenceMapUv),m.push(x.iridescenceThicknessMapUv),m.push(x.sheenColorMapUv),m.push(x.sheenRoughnessMapUv),m.push(x.specularMapUv),m.push(x.specularColorMapUv),m.push(x.specularIntensityMapUv),m.push(x.transmissionMapUv),m.push(x.thicknessMapUv),m.push(x.combine),m.push(x.fogExp2),m.push(x.sizeAttenuation),m.push(x.morphTargetsCount),m.push(x.morphAttributeCount),m.push(x.numDirLights),m.push(x.numPointLights),m.push(x.numSpotLights),m.push(x.numSpotLightMaps),m.push(x.numHemiLights),m.push(x.numRectAreaLights),m.push(x.numDirLightShadows),m.push(x.numPointLightShadows),m.push(x.numSpotLightShadows),m.push(x.numSpotLightShadowsWithMaps),m.push(x.numLightProbes),m.push(x.shadowMapType),m.push(x.toneMapping),m.push(x.numClippingPlanes),m.push(x.numClipIntersection),m.push(x.depthPacking)})(v,f),(function(m,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),m.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),m.push(o.mask)})(v,f),v.push(s.outputColorSpace)),v.push(f.customProgramCacheKey),v.join()},getUniforms:function(f){let v=g[f.type],m;if(v){let x=_i[v];m=Xf.clone(x.uniforms)}else m=f.uniforms;return m},acquireProgram:function(f,v){let m;for(let x=0,M=h.length;x<M;x++){let E=h[x];if(E.cacheKey===v){m=E,++m.usedTimes;break}}return m===void 0&&(m=new n0(s,v,f,r),h.push(m)),m},releaseProgram:function(f){if(--f.usedTimes==0){let v=h.indexOf(f);h[v]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function a0(){let s=new WeakMap;return{has:function(e){return s.has(e)},get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,i){s.get(e)[t]=i},dispose:function(){s=new WeakMap}}}function o0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ju(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ku(){let s=[],e=0,t=[],i=[],n=[];function r(a,o,l,c,h,u){let d=s[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},s[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,u){let d=r(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=r(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=s.length;a<o;a++){let l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||o0),i.length>1&&i.sort(o||Ju),n.length>1&&n.sort(o||Ju)}}}function l0(){let s=new WeakMap;return{get:function(e,t){let i=s.get(e),n;return i===void 0?(n=new Ku,s.set(e,[n])):t>=i.length?(n=new Ku,i.push(n)):n=i[t],n},dispose:function(){s=new WeakMap}}}function h0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new we};break;case"SpotLight":t={position:new P,direction:new P,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new P,halfWidth:new P,halfHeight:new P}}return s[e.id]=t,t}}}var c0=0;function u0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function d0(s){let e=new h0,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new P);let n=new P,r=new Ae,a=new Ae;return{setup:function(o){let l=0,c=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let u=0,d=0,p=0,g=0,y=0,f=0,v=0,m=0,x=0,M=0,E=0;o.sort(u0);for(let R=0,b=o.length;R<b;R++){let T=o[R],C=T.color,_=T.intensity,S=T.distance,A=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)l+=C.r*_,c+=C.g*_,h+=C.b*_;else if(T.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(T.sh.coefficients[I],_);E++}else if(T.isDirectionalLight){let I=e.get(T);if(I.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let B=T.shadow,O=t.get(T);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,i.directionalShadow[u]=O,i.directionalShadowMap[u]=A,i.directionalShadowMatrix[u]=T.shadow.matrix,f++}i.directional[u]=I,u++}else if(T.isSpotLight){let I=e.get(T);I.position.setFromMatrixPosition(T.matrixWorld),I.color.copy(C).multiplyScalar(_),I.distance=S,I.coneCos=Math.cos(T.angle),I.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),I.decay=T.decay,i.spot[p]=I;let B=T.shadow;if(T.map&&(i.spotLightMap[x]=T.map,x++,B.updateMatrices(T),T.castShadow&&M++),i.spotLightMatrix[p]=B.matrix,T.castShadow){let O=t.get(T);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,i.spotShadow[p]=O,i.spotShadowMap[p]=A,m++}p++}else if(T.isRectAreaLight){let I=e.get(T);I.color.copy(C).multiplyScalar(_),I.halfWidth.set(.5*T.width,0,0),I.halfHeight.set(0,.5*T.height,0),i.rectArea[g]=I,g++}else if(T.isPointLight){let I=e.get(T);if(I.color.copy(T.color).multiplyScalar(T.intensity),I.distance=T.distance,I.decay=T.decay,T.castShadow){let B=T.shadow,O=t.get(T);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,O.shadowCameraNear=B.camera.near,O.shadowCameraFar=B.camera.far,i.pointShadow[d]=O,i.pointShadowMap[d]=A,i.pointShadowMatrix[d]=T.shadow.matrix,v++}i.point[d]=I,d++}else if(T.isHemisphereLight){let I=e.get(T);I.skyColor.copy(T.color).multiplyScalar(_),I.groundColor.copy(T.groundColor).multiplyScalar(_),i.hemi[y]=I,y++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let w=i.hash;w.directionalLength===u&&w.pointLength===d&&w.spotLength===p&&w.rectAreaLength===g&&w.hemiLength===y&&w.numDirectionalShadows===f&&w.numPointShadows===v&&w.numSpotShadows===m&&w.numSpotMaps===x&&w.numLightProbes===E||(i.directional.length=u,i.spot.length=p,i.rectArea.length=g,i.point.length=d,i.hemi.length=y,i.directionalShadow.length=f,i.directionalShadowMap.length=f,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=m,i.spotShadowMap.length=m,i.directionalShadowMatrix.length=f,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=m+x-M,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=E,w.directionalLength=u,w.pointLength=d,w.spotLength=p,w.rectAreaLength=g,w.hemiLength=y,w.numDirectionalShadows=f,w.numPointShadows=v,w.numSpotShadows=m,w.numSpotMaps=x,w.numLightProbes=E,i.version=c0++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,g=l.matrixWorldInverse;for(let y=0,f=o.length;y<f;y++){let v=o[y];if(v.isDirectionalLight){let m=i.directional[c];m.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),m.direction.sub(n),m.direction.transformDirection(g),c++}else if(v.isSpotLight){let m=i.spot[u];m.position.setFromMatrixPosition(v.matrixWorld),m.position.applyMatrix4(g),m.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),m.direction.sub(n),m.direction.transformDirection(g),u++}else if(v.isRectAreaLight){let m=i.rectArea[d];m.position.setFromMatrixPosition(v.matrixWorld),m.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),m.halfWidth.set(.5*v.width,0,0),m.halfHeight.set(0,.5*v.height,0),m.halfWidth.applyMatrix4(a),m.halfHeight.applyMatrix4(a),d++}else if(v.isPointLight){let m=i.point[h];m.position.setFromMatrixPosition(v.matrixWorld),m.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){let m=i.hemi[p];m.direction.setFromMatrixPosition(v.matrixWorld),m.direction.transformDirection(g),p++}}},state:i}}function Qu(s){let e=new d0(s),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(r){n.camera=r,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(r){e.setupView(t,r)},pushLight:function(r){t.push(r)},pushShadow:function(r){i.push(r)}}}function p0(s){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),r;return n===void 0?(r=new Qu(s),e.set(t,[r])):i>=n.length?(r=new Qu(s),n.push(r)):r=n[i],r},dispose:function(){e=new WeakMap}}}var ch=class extends Vi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uh=class extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function f0(s,e,t){let i=new sn,n=new he,r=new he,a=new je,o=new ch({depthPacking:3201}),l=new uh,c={},h=t.maxTextureSize,u={[Jp]:1,[Yh]:0,[Ti]:2},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new xe(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;function m(w,R){let b=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hi(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,b,d,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,b,p,y,null)}function x(w,R,b,T){let C=null,_=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(_!==void 0)C=_;else if(C=b.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let S=C.uuid,A=R.uuid,I=c[S];I===void 0&&(I={},c[S]=I);let B=I[A];B===void 0&&(B=C.clone(),I[A]=B,R.addEventListener("dispose",E)),C=B}return C.visible=R.visible,C.wireframe=R.wireframe,C.side=T===3?R.shadowSide!==null?R.shadowSide:R.side:R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(s.properties.get(C).light=b),C}function M(w,R,b,T,C){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===3)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let S=e.update(w),A=w.material;if(Array.isArray(A)){let I=S.groups;for(let B=0,O=I.length;B<O;B++){let F=I[B],W=A[F.materialIndex];if(W&&W.visible){let q=x(w,W,T,C);w.onBeforeShadow(s,w,R,b,S,q,F),s.renderBufferDirect(b,null,S,q,w,F),w.onAfterShadow(s,w,R,b,S,q,F)}}}else if(A.visible){let I=x(w,A,T,C);w.onBeforeShadow(s,w,R,b,S,I,null),s.renderBufferDirect(b,null,S,I,w,null),w.onAfterShadow(s,w,R,b,S,I,null)}}let _=w.children;for(let S=0,A=_.length;S<A;S++)M(_[S],R,b,T,C)}function E(w){w.target.removeEventListener("dispose",E);for(let R in c){let b=c[R],T=w.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}this.render=function(w,R,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;let T=s.getRenderTarget(),C=s.getActiveCubeFace(),_=s.getActiveMipmapLevel(),S=s.state;S.setBlending(0),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);let A=v!==3&&this.type===3,I=v===3&&this.type!==3;for(let B=0,O=w.length;B<O;B++){let F=w[B],W=F.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let q=W.getFrameExtents();if(n.multiply(q),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/q.x),n.x=r.x*q.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/q.y),n.y=r.y*q.y,W.mapSize.y=r.y)),W.map===null||A===!0||I===!0){let z=this.type!==3?{minFilter:di,magFilter:di}:{};W.map!==null&&W.map.dispose(),W.map=new Hi(n.x,n.y,z),W.map.texture.name=F.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let re=W.getViewportCount();for(let z=0;z<re;z++){let j=W.getViewport(z);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),S.viewport(a),W.updateMatrices(F,z),i=W.getFrustum(),M(R,b,W.camera,F,this.type)}W.isPointLightShadow!==!0&&this.type===3&&m(W,b),W.needsUpdate=!1}v=this.type,f.needsUpdate=!1,s.setRenderTarget(T,C,_)}}var m0={[ff]:1,[gf]:6,[xf]:7,[vf]:5,[mf]:0,[_f]:2,[Mf]:4,[yf]:3};function g0(s,e){let t=new function(){let L=!1,H=new je,Y=null,ae=new je(0,0,0,0);return{setMask:function($){Y===$||L||(s.colorMask($,$,$,$),Y=$)},setLocked:function($){L=$},setClear:function($,ne,ie,ce,ge){ge===!0&&($*=ce,ne*=ce,ie*=ce),H.set($,ne,ie,ce),ae.equals(H)===!1&&(s.clearColor($,ne,ie,ce),ae.copy(H))},reset:function(){L=!1,Y=null,ae.set(-1,0,0,0)}}},i=new function(){let L=!1,H=!1,Y=null,ae=null,$=null;return{setReversed:function(ne){if(H!==ne){let ie=e.get("EXT_clip_control");H?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);let ce=$;$=null,this.setClear(ce)}H=ne},getReversed:function(){return H},setTest:function(ne){ne?le(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function(ne){Y===ne||L||(s.depthMask(ne),Y=ne)},setFunc:function(ne){if(H&&(ne=m0[ne]),ae!==ne){switch(ne){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}ae=ne}},setLocked:function(ne){L=ne},setClear:function(ne){$!==ne&&(H&&(ne=1-ne),s.clearDepth(ne),$=ne)},reset:function(){L=!1,Y=null,ae=null,$=null,H=!1}}},n=new function(){let L=!1,H=null,Y=null,ae=null,$=null,ne=null,ie=null,ce=null,ge=null;return{setTest:function(me){L||(me?le(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(me){H===me||L||(s.stencilMask(me),H=me)},setFunc:function(me,Me,Ce){Y===me&&ae===Me&&$===Ce||(s.stencilFunc(me,Me,Ce),Y=me,ae=Me,$=Ce)},setOp:function(me,Me,Ce){ne===me&&ie===Me&&ce===Ce||(s.stencilOp(me,Me,Ce),ne=me,ie=Me,ce=Ce)},setLocked:function(me){L=me},setClear:function(me){ge!==me&&(s.clearStencil(me),ge=me)},reset:function(){L=!1,H=null,Y=null,ae=null,$=null,ne=null,ie=null,ce=null,ge=null}}},r=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,g=null,y=null,f=null,v=null,m=null,x=null,M=new we(0,0,0),E=0,w=!1,R=null,b=null,T=null,C=null,_=null,S=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,I=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(B)[1]),A=I>=1):B.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),A=I>=2);let O=null,F={},W=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),re=new je().fromArray(W),z=new je().fromArray(q);function j(L,H,Y,ae){let $=new Uint8Array(4),ne=s.createTexture();s.bindTexture(L,ne),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<Y;ie++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(H,0,s.RGBA,1,1,ae,0,s.RGBA,s.UNSIGNED_BYTE,$):s.texImage2D(H+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,$);return ne}let ee={};function le(L){o[L]!==!0&&(s.enable(L),o[L]=!0)}function ue(L){o[L]!==!1&&(s.disable(L),o[L]=!1)}ee[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),le(s.DEPTH_TEST),i.setFunc(3),V(!1),k(1),le(s.CULL_FACE),X(0);let N={[wn]:s.FUNC_ADD,[Kp]:s.FUNC_SUBTRACT,[Qp]:s.FUNC_REVERSE_SUBTRACT};N[103]=s.MIN,N[104]=s.MAX;let U={[ef]:s.ZERO,[tf]:s.ONE,[nf]:s.SRC_COLOR,[yl]:s.SRC_ALPHA,[hf]:s.SRC_ALPHA_SATURATE,[of]:s.DST_COLOR,[sf]:s.DST_ALPHA,[rf]:s.ONE_MINUS_SRC_COLOR,[_l]:s.ONE_MINUS_SRC_ALPHA,[lf]:s.ONE_MINUS_DST_COLOR,[af]:s.ONE_MINUS_DST_ALPHA,[cf]:s.CONSTANT_COLOR,[uf]:s.ONE_MINUS_CONSTANT_COLOR,[df]:s.CONSTANT_ALPHA,[pf]:s.ONE_MINUS_CONSTANT_ALPHA};function X(L,H,Y,ae,$,ne,ie,ce,ge,me){if(L!==0){if(d===!1&&(le(s.BLEND),d=!0),L===5)$=$||H,ne=ne||Y,ie=ie||ae,H===g&&$===v||(s.blendEquationSeparate(N[H],N[$]),g=H,v=$),Y===y&&ae===f&&ne===m&&ie===x||(s.blendFuncSeparate(U[Y],U[ae],U[ne],U[ie]),y=Y,f=ae,m=ne,x=ie),ce.equals(M)!==!1&&ge===E||(s.blendColor(ce.r,ce.g,ce.b,ge),M.copy(ce),E=ge),p=L,w=!1;else if(L!==p||me!==w){if(g===wn&&v===wn||(s.blendEquation(s.FUNC_ADD),g=wn,v=wn),me)switch(L){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L)}else switch(L){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L)}y=null,f=null,m=null,x=null,M.set(0,0,0),E=0,p=L,w=me}}else d===!0&&(ue(s.BLEND),d=!1)}function V(L){R!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),R=L)}function k(L){L!==0?(le(s.CULL_FACE),L!==b&&(L===1?s.cullFace(s.BACK):L===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),b=L}function G(L,H,Y){L?(le(s.POLYGON_OFFSET_FILL),C===H&&_===Y||(s.polygonOffset(H,Y),C=H,_=Y)):ue(s.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:le,disable:ue,bindFramebuffer:function(L,H){return l[L]!==H&&(s.bindFramebuffer(L,H),l[L]=H,L===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=H),L===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=H),!0)},drawBuffers:function(L,H){let Y=h,ae=!1;if(L){Y=c.get(H),Y===void 0&&(Y=[],c.set(H,Y));let $=L.textures;if(Y.length!==$.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,ie=$.length;ne<ie;ne++)Y[ne]=s.COLOR_ATTACHMENT0+ne;Y.length=$.length,ae=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,ae=!0);ae&&s.drawBuffers(Y)},useProgram:function(L){return u!==L&&(s.useProgram(L),u=L,!0)},setBlending:X,setMaterial:function(L,H){L.side===2?ue(s.CULL_FACE):le(s.CULL_FACE);let Y=L.side===1;H&&(Y=!Y),V(Y),L.blending===1&&L.transparent===!1?X(0):X(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),i.setFunc(L.depthFunc),i.setTest(L.depthTest),i.setMask(L.depthWrite),t.setMask(L.colorWrite);let ae=L.stencilWrite;n.setTest(ae),ae&&(n.setMask(L.stencilWriteMask),n.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),n.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:V,setCullFace:k,setLineWidth:function(L){L!==T&&(A&&s.lineWidth(L),T=L)},setPolygonOffset:G,setScissorTest:function(L){L?le(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)},activeTexture:function(L){L===void 0&&(L=s.TEXTURE0+S-1),O!==L&&(s.activeTexture(L),O=L)},bindTexture:function(L,H,Y){Y===void 0&&(Y=O===null?s.TEXTURE0+S-1:O);let ae=F[Y];ae===void 0&&(ae={type:void 0,texture:void 0},F[Y]=ae),ae.type===L&&ae.texture===H||(O!==Y&&(s.activeTexture(Y),O=Y),s.bindTexture(L,H||ee[L]),ae.type=L,ae.texture=H)},unbindTexture:function(){let L=F[O];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},updateUBOMapping:function(L,H){let Y=a.get(H);Y===void 0&&(Y=new WeakMap,a.set(H,Y));let ae=Y.get(L);ae===void 0&&(ae=s.getUniformBlockIndex(H,L.name),Y.set(L,ae))},uniformBlockBinding:function(L,H){let Y=a.get(H).get(L);r.get(H)!==Y&&(s.uniformBlockBinding(H,Y,L.__bindingPointIndex),r.set(H,Y))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}},scissor:function(L){re.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),re.copy(L))},viewport:function(L){z.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),z.copy(L))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),i.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),o={},O=null,F={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,g=null,y=null,f=null,v=null,m=null,x=null,M=new we(0,0,0),E=0,w=!1,R=null,b=null,T=null,C=null,_=null,re.set(0,0,s.canvas.width,s.canvas.height),z.set(0,0,s.canvas.width,s.canvas.height),t.reset(),i.reset(),n.reset()}}}function ed(s,e,t,i){let n=(function(r){switch(r){case nn:case yd:return{byteLength:1,components:1};case rs:case _d:case vs:return{byteLength:2,components:1};case Jh:case Kh:return{byteLength:2,components:4};case An:case Zh:case Fi:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)})(i);switch(t){case bd:case wd:return s*e;case Td:return s*e*2;case Ed:case Qh:return s*e/n.components*n.byteLength;case Ad:case ec:return s*e*2/n.components*n.byteLength;case Sd:return s*e*3/n.components*n.byteLength;case bi:case tc:return s*e*4/n.components*n.byteLength;case Ma:case ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sa:case wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Al:return Math.max(s,16)*Math.max(e,8)/4;case wl:case El:return Math.max(s,8)*Math.max(e,8)/2;case Rl:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ta:case Xl:case jl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rd:case ql:return Math.ceil(s/4)*Math.ceil(e/4)*8;case $l:case Yl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v0(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,U){return p?new OffscreenCanvas(N,U):Ca("canvas")}function y(N,U,X){let V=1,k=ue(N);if((k.width>X||k.height>X)&&(V=X/Math.max(k.width,k.height)),V<1){if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let G=Math.floor(V*k.width),L=Math.floor(V*k.height);u===void 0&&(u=g(G,L));let H=U?g(G,L):u;return H.width=G,H.height=L,H.getContext("2d").drawImage(N,0,0,G,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+G+"x"+L+")."),H}return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),N}return N}function f(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function m(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(N,U,X,V,k=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let G=U;if(U===s.RED&&(X===s.FLOAT&&(G=s.R32F),X===s.HALF_FLOAT&&(G=s.R16F),X===s.UNSIGNED_BYTE&&(G=s.R8)),U===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.R8UI),X===s.UNSIGNED_SHORT&&(G=s.R16UI),X===s.UNSIGNED_INT&&(G=s.R32UI),X===s.BYTE&&(G=s.R8I),X===s.SHORT&&(G=s.R16I),X===s.INT&&(G=s.R32I)),U===s.RG&&(X===s.FLOAT&&(G=s.RG32F),X===s.HALF_FLOAT&&(G=s.RG16F),X===s.UNSIGNED_BYTE&&(G=s.RG8)),U===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.RG8UI),X===s.UNSIGNED_SHORT&&(G=s.RG16UI),X===s.UNSIGNED_INT&&(G=s.RG32UI),X===s.BYTE&&(G=s.RG8I),X===s.SHORT&&(G=s.RG16I),X===s.INT&&(G=s.RG32I)),U===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.RGB8UI),X===s.UNSIGNED_SHORT&&(G=s.RGB16UI),X===s.UNSIGNED_INT&&(G=s.RGB32UI),X===s.BYTE&&(G=s.RGB8I),X===s.SHORT&&(G=s.RGB16I),X===s.INT&&(G=s.RGB32I)),U===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),X===s.UNSIGNED_INT&&(G=s.RGBA32UI),X===s.BYTE&&(G=s.RGBA8I),X===s.SHORT&&(G=s.RGBA16I),X===s.INT&&(G=s.RGBA32I)),U===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),U===s.RGBA){let L=k?to:Ge.getTransfer(V);X===s.FLOAT&&(G=s.RGBA32F),X===s.HALF_FLOAT&&(G=s.RGBA16F),X===s.UNSIGNED_BYTE&&(G=L===qe?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return G!==s.R16F&&G!==s.R32F&&G!==s.RG16F&&G!==s.RG32F&&G!==s.RGBA16F&&G!==s.RGBA32F||e.get("EXT_color_buffer_float"),G}function M(N,U){let X;return N?U===null||U===An||U===xr?X=s.DEPTH24_STENCIL8:U===Fi?X=s.DEPTH32F_STENCIL8:U===rs&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===An||U===xr?X=s.DEPTH_COMPONENT24:U===Fi?X=s.DEPTH_COMPONENT32F:U===rs&&(X=s.DEPTH_COMPONENT16),X}function E(N,U){return f(N)===!0||N.isFramebufferTexture&&N.minFilter!==di&&N.minFilter!==ki?Math.log2(Math.max(U.width,U.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?U.mipmaps.length:1}function w(N){let U=N.target;U.removeEventListener("dispose",w),(function(X){let V=i.get(X);if(V.__webglInit===void 0)return;let k=X.source,G=d.get(k);if(G){let L=G[V.__cacheKey];L.usedTimes--,L.usedTimes===0&&b(X),Object.keys(G).length===0&&d.delete(k)}i.remove(X)})(U),U.isVideoTexture&&h.delete(U)}function R(N){let U=N.target;U.removeEventListener("dispose",R),(function(X){let V=i.get(X);if(X.depthTexture&&(X.depthTexture.dispose(),i.remove(X.depthTexture)),X.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(V.__webglFramebuffer[G]))for(let L=0;L<V.__webglFramebuffer[G].length;L++)s.deleteFramebuffer(V.__webglFramebuffer[G][L]);else s.deleteFramebuffer(V.__webglFramebuffer[G]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[G])}else{if(Array.isArray(V.__webglFramebuffer))for(let G=0;G<V.__webglFramebuffer.length;G++)s.deleteFramebuffer(V.__webglFramebuffer[G]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let G=0;G<V.__webglColorRenderbuffer.length;G++)V.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[G]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let k=X.textures;for(let G=0,L=k.length;G<L;G++){let H=i.get(k[G]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(k[G])}i.remove(X)})(U)}function b(N){let U=i.get(N);s.deleteTexture(U.__webglTexture);let X=N.source;delete d.get(X)[U.__cacheKey],a.memory.textures--}let T=0;function C(N,U){let X=i.get(N);if(N.isVideoTexture&&(function(V){let k=a.render.frame;h.get(V)!==k&&(h.set(V,k),V.update())})(N),N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){let V=N.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(V.complete!==!1)return void O(X,N,U);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+U)}let _={[is]:s.REPEAT,[ns]:s.CLAMP_TO_EDGE,[Sl]:s.MIRRORED_REPEAT},S={[di]:s.NEAREST,[bf]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[ki]:s.LINEAR,[Oo]:s.LINEAR_MIPMAP_NEAREST,[dr]:s.LINEAR_MIPMAP_LINEAR},A={[Sf]:s.NEVER,[Pf]:s.ALWAYS,[wf]:s.LESS,[Ef]:s.LEQUAL,[Tf]:s.EQUAL,[Cf]:s.GEQUAL,[Af]:s.GREATER,[Rf]:s.NOTEQUAL};function I(N,U){if(U.type!==Fi||e.has("OES_texture_float_linear")!==!1||U.magFilter!==ki&&U.magFilter!==Oo&&U.magFilter!==Vs&&U.magFilter!==dr&&U.minFilter!==ki&&U.minFilter!==Oo&&U.minFilter!==Vs&&U.minFilter!==dr||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,_[U.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,_[U.wrapT]),N!==s.TEXTURE_3D&&N!==s.TEXTURE_2D_ARRAY||s.texParameteri(N,s.TEXTURE_WRAP_R,_[U.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,S[U.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,S[U.minFilter]),U.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,A[U.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===di||U.minFilter!==Vs&&U.minFilter!==dr||U.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||i.get(U).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,n.getMaxAnisotropy())),i.get(U).__currentAnisotropy=U.anisotropy}}}function B(N,U){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,U.addEventListener("dispose",w));let V=U.source,k=d.get(V);k===void 0&&(k={},d.set(V,k));let G=(function(L){let H=[];return H.push(L.wrapS),H.push(L.wrapT),H.push(L.wrapR||0),H.push(L.magFilter),H.push(L.minFilter),H.push(L.anisotropy),H.push(L.internalFormat),H.push(L.format),H.push(L.type),H.push(L.generateMipmaps),H.push(L.premultiplyAlpha),H.push(L.flipY),H.push(L.unpackAlignment),H.push(L.colorSpace),H.join()})(U);if(G!==N.__cacheKey){k[G]===void 0&&(k[G]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),k[G].usedTimes++;let L=k[N.__cacheKey];L!==void 0&&(k[N.__cacheKey].usedTimes--,L.usedTimes===0&&b(U)),N.__cacheKey=G,N.__webglTexture=k[G].texture}return X}function O(N,U,X){let V=s.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),U.isData3DTexture&&(V=s.TEXTURE_3D);let k=B(N,U),G=U.source;t.bindTexture(V,N.__webglTexture,s.TEXTURE0+X);let L=i.get(G);if(G.version!==L.__version||k===!0){t.activeTexture(s.TEXTURE0+X);let H=Ge.getPrimaries(Ge.workingColorSpace),Y=U.colorSpace===ur?null:Ge.getPrimaries(U.colorSpace),ae=U.colorSpace===ur||H===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,U.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,U.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let $=y(U.image,!1,n.maxTextureSize);$=le(U,$);let ne=r.convert(U.format,U.colorSpace),ie=r.convert(U.type),ce,ge=x(U.internalFormat,ne,ie,U.colorSpace,U.isVideoTexture);I(V,U);let me=U.mipmaps,Me=U.isVideoTexture!==!0,Ce=L.__version===void 0||k===!0,He=G.dataReady,Oe=E(U,$);if(U.isDepthTexture)ge=M(U.format===yr,U.type),Ce&&(Me?t.texStorage2D(s.TEXTURE_2D,1,ge,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,ge,$.width,$.height,0,ne,ie,null));else if(U.isDataTexture)if(me.length>0){Me&&Ce&&t.texStorage2D(s.TEXTURE_2D,Oe,ge,me[0].width,me[0].height);for(let be=0,Xe=me.length;be<Xe;be++)ce=me[be],Me?He&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ce.width,ce.height,ne,ie,ce.data):t.texImage2D(s.TEXTURE_2D,be,ge,ce.width,ce.height,0,ne,ie,ce.data);U.generateMipmaps=!1}else Me?(Ce&&t.texStorage2D(s.TEXTURE_2D,Oe,ge,$.width,$.height),He&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,ne,ie,$.data)):t.texImage2D(s.TEXTURE_2D,0,ge,$.width,$.height,0,ne,ie,$.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){Me&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ge,me[0].width,me[0].height,$.depth);for(let be=0,Xe=me.length;be<Xe;be++)if(ce=me[be],U.format!==bi)if(ne!==null)if(Me){if(He)if(U.layerUpdates.size>0){let Ke=ed(ce.width,ce.height,U.format,U.type);for(let rt of U.layerUpdates){let ye=ce.data.subarray(rt*Ke/ce.data.BYTES_PER_ELEMENT,(rt+1)*Ke/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,rt,ce.width,ce.height,1,ne,ye)}U.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,ce.width,ce.height,$.depth,ne,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,ge,ce.width,ce.height,$.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?He&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,ce.width,ce.height,$.depth,ne,ie,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,ge,ce.width,ce.height,$.depth,0,ne,ie,ce.data)}else{Me&&Ce&&t.texStorage2D(s.TEXTURE_2D,Oe,ge,me[0].width,me[0].height);for(let be=0,Xe=me.length;be<Xe;be++)ce=me[be],U.format!==bi?ne!==null?Me?He&&t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,ce.width,ce.height,ne,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,be,ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?He&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ce.width,ce.height,ne,ie,ce.data):t.texImage2D(s.TEXTURE_2D,be,ge,ce.width,ce.height,0,ne,ie,ce.data)}else if(U.isDataArrayTexture)if(Me){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ge,$.width,$.height,$.depth),He)if(U.layerUpdates.size>0){let be=ed($.width,$.height,U.format,U.type);for(let Xe of U.layerUpdates){let Ke=$.data.subarray(Xe*be/$.data.BYTES_PER_ELEMENT,(Xe+1)*be/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xe,$.width,$.height,1,ne,ie,Ke)}U.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ne,ie,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,$.width,$.height,$.depth,0,ne,ie,$.data);else if(U.isData3DTexture)Me?(Ce&&t.texStorage3D(s.TEXTURE_3D,Oe,ge,$.width,$.height,$.depth),He&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ne,ie,$.data)):t.texImage3D(s.TEXTURE_3D,0,ge,$.width,$.height,$.depth,0,ne,ie,$.data);else if(U.isFramebufferTexture){if(Ce)if(Me)t.texStorage2D(s.TEXTURE_2D,Oe,ge,$.width,$.height);else{let be=$.width,Xe=$.height;for(let Ke=0;Ke<Oe;Ke++)t.texImage2D(s.TEXTURE_2D,Ke,ge,be,Xe,0,ne,ie,null),be>>=1,Xe>>=1}}else if(me.length>0){if(Me&&Ce){let be=ue(me[0]);t.texStorage2D(s.TEXTURE_2D,Oe,ge,be.width,be.height)}for(let be=0,Xe=me.length;be<Xe;be++)ce=me[be],Me?He&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ne,ie,ce):t.texImage2D(s.TEXTURE_2D,be,ge,ne,ie,ce);U.generateMipmaps=!1}else if(Me){if(Ce){let be=ue($);t.texStorage2D(s.TEXTURE_2D,Oe,ge,be.width,be.height)}He&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne,ie,$)}else t.texImage2D(s.TEXTURE_2D,0,ge,ne,ie,$);f(U)&&v(V),L.__version=G.version,U.onUpdate&&U.onUpdate(U)}N.__version=U.version}function F(N,U,X,V,k,G){let L=r.convert(X.format,X.colorSpace),H=r.convert(X.type),Y=x(X.internalFormat,L,H,X.colorSpace),ae=i.get(U),$=i.get(X);if($.__renderTarget=U,!ae.__hasExternalTextures){let ne=Math.max(1,U.width>>G),ie=Math.max(1,U.height>>G);k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?t.texImage3D(k,G,Y,ne,ie,U.depth,0,L,H,null):t.texImage2D(k,G,Y,ne,ie,0,L,H,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),ee(U)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,k,$.__webglTexture,0,j(U)):(k===s.TEXTURE_2D||k>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,k,$.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function W(N,U,X){if(s.bindRenderbuffer(s.RENDERBUFFER,N),U.depthBuffer){let V=U.depthTexture,k=V&&V.isDepthTexture?V.type:null,G=M(U.stencilBuffer,k),L=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=j(U);ee(U)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,H,G,U.width,U.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,H,G,U.width,U.height):s.renderbufferStorage(s.RENDERBUFFER,G,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,L,s.RENDERBUFFER,N)}else{let V=U.textures;for(let k=0;k<V.length;k++){let G=V[k],L=r.convert(G.format,G.colorSpace),H=r.convert(G.type),Y=x(G.internalFormat,L,H,G.colorSpace),ae=j(U);X&&ee(U)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,Y,U.width,U.height):ee(U)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,Y,U.width,U.height):s.renderbufferStorage(s.RENDERBUFFER,Y,U.width,U.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function q(N){let U=i.get(N),X=N.isWebGLCubeRenderTarget===!0;if(U.__boundDepthTexture!==N.depthTexture){let V=N.depthTexture;if(U.__depthDisposeCallback&&U.__depthDisposeCallback(),V){let k=()=>{delete U.__boundDepthTexture,delete U.__depthDisposeCallback,V.removeEventListener("dispose",k)};V.addEventListener("dispose",k),U.__depthDisposeCallback=k}U.__boundDepthTexture=V}if(N.depthTexture&&!U.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");(function(V,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,V),!k.depthTexture||!k.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=i.get(k.depthTexture);G.__renderTarget=k,G.__webglTexture&&k.depthTexture.image.width===k.width&&k.depthTexture.image.height===k.height||(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),C(k.depthTexture,0);let L=G.__webglTexture,H=j(k);if(k.depthTexture.format===ss)ee(k)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,L,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,L,0);else{if(k.depthTexture.format!==yr)throw new Error("Unknown depthTexture format");ee(k)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,L,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,L,0)}})(U.__webglFramebuffer,N)}else if(X){U.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(s.FRAMEBUFFER,U.__webglFramebuffer[V]),U.__webglDepthbuffer[V]===void 0)U.__webglDepthbuffer[V]=s.createRenderbuffer(),W(U.__webglDepthbuffer[V],N,!1);else{let k=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=U.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,k,s.RENDERBUFFER,G)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer===void 0)U.__webglDepthbuffer=s.createRenderbuffer(),W(U.__webglDepthbuffer,N,!1);else{let V=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=U.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,k),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,k)}t.bindFramebuffer(s.FRAMEBUFFER,null)}let re=[],z=[];function j(N){return Math.min(n.maxSamples,N.samples)}function ee(N){let U=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function le(N,U){let X=N.colorSpace,V=N.format,k=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==Er&&X!==ur&&(Ge.getTransfer(X)===qe?V===bi&&k===nn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),U}function ue(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=function(){let N=T;return N>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+n.maxTextures),T+=1,N},this.resetTextureUnits=function(){T=0},this.setTexture2D=C,this.setTexture2DArray=function(N,U){let X=i.get(N);N.version>0&&X.__version!==N.version?O(X,N,U):t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+U)},this.setTexture3D=function(N,U){let X=i.get(N);N.version>0&&X.__version!==N.version?O(X,N,U):t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+U)},this.setTextureCube=function(N,U){let X=i.get(N);N.version>0&&X.__version!==N.version?(function(V,k,G){if(k.image.length!==6)return;let L=B(V,k),H=k.source;t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+G);let Y=i.get(H);if(H.version!==Y.__version||L===!0){t.activeTexture(s.TEXTURE0+G);let ae=Ge.getPrimaries(Ge.workingColorSpace),$=k.colorSpace===ur?null:Ge.getPrimaries(k.colorSpace),ne=k.colorSpace===ur||ae===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,k.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,k.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ie=k.isCompressedTexture||k.image[0].isCompressedTexture,ce=k.image[0]&&k.image[0].isDataTexture,ge=[];for(let ye=0;ye<6;ye++)ge[ye]=ie||ce?ce?k.image[ye].image:k.image[ye]:y(k.image[ye],!0,n.maxCubemapSize),ge[ye]=le(k,ge[ye]);let me=ge[0],Me=r.convert(k.format,k.colorSpace),Ce=r.convert(k.type),He=x(k.internalFormat,Me,Ce,k.colorSpace),Oe=k.isVideoTexture!==!0,be=Y.__version===void 0||L===!0,Xe=H.dataReady,Ke,rt=E(k,me);if(I(s.TEXTURE_CUBE_MAP,k),ie){Oe&&be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,He,me.width,me.height);for(let ye=0;ye<6;ye++){Ke=ge[ye].mipmaps;for(let Fe=0;Fe<Ke.length;Fe++){let Ze=Ke[Fe];k.format!==bi?Me!==null?Oe?Xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,0,0,Ze.width,Ze.height,Me,Ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,He,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?Xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,0,0,Ze.width,Ze.height,Me,Ce,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,He,Ze.width,Ze.height,0,Me,Ce,Ze.data)}}}else{if(Ke=k.mipmaps,Oe&&be){Ke.length>0&&rt++;let ye=ue(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,He,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(ce){Oe?Xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ge[ye].width,ge[ye].height,Me,Ce,ge[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,He,ge[ye].width,ge[ye].height,0,Me,Ce,ge[ye].data);for(let Fe=0;Fe<Ke.length;Fe++){let Ze=Ke[Fe].image[ye].image;Oe?Xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,0,0,Ze.width,Ze.height,Me,Ce,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,He,Ze.width,Ze.height,0,Me,Ce,Ze.data)}}else{Oe?Xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Me,Ce,ge[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,He,Me,Ce,ge[ye]);for(let Fe=0;Fe<Ke.length;Fe++){let Ze=Ke[Fe];Oe?Xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,0,0,Me,Ce,Ze.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,He,Me,Ce,Ze.image[ye])}}}f(k)&&v(s.TEXTURE_CUBE_MAP),Y.__version=H.version,k.onUpdate&&k.onUpdate(k)}V.__version=k.version})(X,N,U):t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+U)},this.rebindTextures=function(N,U,X){let V=i.get(N);U!==void 0&&F(V.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&q(N)},this.setupRenderTarget=function(N){let U=N.texture,X=i.get(N),V=i.get(U);N.addEventListener("dispose",R);let k=N.textures,G=N.isWebGLCubeRenderTarget===!0,L=k.length>1;if(L||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=U.version,a.memory.textures++),G){X.__webglFramebuffer=[];for(let H=0;H<6;H++)if(U.mipmaps&&U.mipmaps.length>0){X.__webglFramebuffer[H]=[];for(let Y=0;Y<U.mipmaps.length;Y++)X.__webglFramebuffer[H][Y]=s.createFramebuffer()}else X.__webglFramebuffer[H]=s.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){X.__webglFramebuffer=[];for(let H=0;H<U.mipmaps.length;H++)X.__webglFramebuffer[H]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(L)for(let H=0,Y=k.length;H<Y;H++){let ae=i.get(k[H]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(N.samples>0&&ee(N)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let H=0;H<k.length;H++){let Y=k[H];X.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[H]);let ae=r.convert(Y.format,Y.colorSpace),$=r.convert(Y.type),ne=x(Y.internalFormat,ae,$,Y.colorSpace,N.isXRRenderTarget===!0),ie=j(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,ne,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+H,s.RENDERBUFFER,X.__webglColorRenderbuffer[H])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),W(X.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),I(s.TEXTURE_CUBE_MAP,U);for(let H=0;H<6;H++)if(U.mipmaps&&U.mipmaps.length>0)for(let Y=0;Y<U.mipmaps.length;Y++)F(X.__webglFramebuffer[H][Y],N,U,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,Y);else F(X.__webglFramebuffer[H],N,U,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);f(U)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){for(let H=0,Y=k.length;H<Y;H++){let ae=k[H],$=i.get(ae);t.bindTexture(s.TEXTURE_2D,$.__webglTexture),I(s.TEXTURE_2D,ae),F(X.__webglFramebuffer,N,ae,s.COLOR_ATTACHMENT0+H,s.TEXTURE_2D,0),f(ae)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let H=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(H=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(H,V.__webglTexture),I(H,U),U.mipmaps&&U.mipmaps.length>0)for(let Y=0;Y<U.mipmaps.length;Y++)F(X.__webglFramebuffer[Y],N,U,s.COLOR_ATTACHMENT0,H,Y);else F(X.__webglFramebuffer,N,U,s.COLOR_ATTACHMENT0,H,0);f(U)&&v(H),t.unbindTexture()}N.depthBuffer&&q(N)},this.updateRenderTargetMipmap=function(N){let U=N.textures;for(let X=0,V=U.length;X<V;X++){let k=U[X];if(f(k)){let G=m(N),L=i.get(k).__webglTexture;t.bindTexture(G,L),v(G),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(N){if(N.samples>0){if(ee(N)===!1){let U=N.textures,X=N.width,V=N.height,k=s.COLOR_BUFFER_BIT,G=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,L=i.get(N),H=U.length>1;if(H)for(let Y=0;Y<U.length;Y++)t.bindFramebuffer(s.FRAMEBUFFER,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let Y=0;Y<U.length;Y++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(k|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(k|=s.STENCIL_BUFFER_BIT)),H){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,L.__webglColorRenderbuffer[Y]);let ae=i.get(U[Y]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ae,0)}s.blitFramebuffer(0,0,X,V,0,0,X,V,k,s.NEAREST),l===!0&&(re.length=0,z.length=0,re.push(s.COLOR_ATTACHMENT0+Y),N.depthBuffer&&N.resolveDepthBuffer===!1&&(re.push(G),z.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),H)for(let Y=0;Y<U.length;Y++){t.bindFramebuffer(s.FRAMEBUFFER,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,L.__webglColorRenderbuffer[Y]);let ae=i.get(U[Y]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.TEXTURE_2D,ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let U=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[U])}}},this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=F,this.useMultisampledRTT=ee}function x0(s,e){return{convert:function(t,i=""){let n,r=Ge.getTransfer(i);if(t===nn)return s.UNSIGNED_BYTE;if(t===Jh)return s.UNSIGNED_SHORT_4_4_4_4;if(t===Kh)return s.UNSIGNED_SHORT_5_5_5_1;if(t===Md)return s.UNSIGNED_INT_5_9_9_9_REV;if(t===yd)return s.BYTE;if(t===_d)return s.SHORT;if(t===rs)return s.UNSIGNED_SHORT;if(t===Zh)return s.INT;if(t===An)return s.UNSIGNED_INT;if(t===Fi)return s.FLOAT;if(t===vs)return s.HALF_FLOAT;if(t===bd)return s.ALPHA;if(t===Sd)return s.RGB;if(t===bi)return s.RGBA;if(t===wd)return s.LUMINANCE;if(t===Td)return s.LUMINANCE_ALPHA;if(t===ss)return s.DEPTH_COMPONENT;if(t===yr)return s.DEPTH_STENCIL;if(t===Ed)return s.RED;if(t===Qh)return s.RED_INTEGER;if(t===Ad)return s.RG;if(t===ec)return s.RG_INTEGER;if(t===tc)return s.RGBA_INTEGER;if(t===Ma||t===ba||t===Sa||t===wa)if(r===qe){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===Ma)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===ba)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Sa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===wa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===Ma)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ba)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Sa)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===wa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===wl||t===Tl||t===El||t===Al){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===wl)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Tl)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===El)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Al)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Rl||t===Cl||t===Pl){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===Rl||t===Cl)return r===qe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===Pl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===Il||t===Ll||t===Ul||t===Dl||t===Nl||t===Ol||t===kl||t===Fl||t===Bl||t===zl||t===Hl||t===Vl||t===Gl||t===Wl){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===Il)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Ll)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Ul)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Dl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Nl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Ol)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===kl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Fl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Bl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===zl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Hl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Vl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Gl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Wl)return r===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Ta||t===Xl||t===jl){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===Ta)return r===qe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Xl)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===jl)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Rd||t===ql||t===$l||t===Yl){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===Ta)return n.COMPRESSED_RED_RGTC1_EXT;if(t===ql)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===$l)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Yl)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===xr?s.UNSIGNED_INT_24_8:s[t]!==void 0?s[t]:null}}}var dh=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},y0={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let f=t.getJointPose(y,i),v=this._getHandJoint(c,y);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=f.radius),v.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new Vt;e.properties.get(n).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Jt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new ct(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends rn{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new ph,f=t.getContextAttributes(),v=null,m=null,x=[],M=[],E=new he,w=null,R=new It;R.viewport=new je;let b=new It;b.viewport=new je;let T=[R,b],C=new dh,_=null,S=null;function A(z){let j=M.indexOf(z.inputSource);if(j===-1)return;let ee=x[j];ee!==void 0&&(ee.update(z.inputSource,z.frame,c||a),ee.dispatchEvent({type:z.type,data:z.inputSource}))}function I(){n.removeEventListener("select",A),n.removeEventListener("selectstart",A),n.removeEventListener("selectend",A),n.removeEventListener("squeeze",A),n.removeEventListener("squeezestart",A),n.removeEventListener("squeezeend",A),n.removeEventListener("end",I),n.removeEventListener("inputsourceschange",B);for(let z=0;z<x.length;z++){let j=M[z];j!==null&&(M[z]=null,x[z].disconnect(j))}_=null,S=null,y.reset(),e.setRenderTarget(v),p=null,d=null,u=null,n=null,m=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}function B(z){for(let j=0;j<z.removed.length;j++){let ee=z.removed[j],le=M.indexOf(ee);le>=0&&(M[le]=null,x[le].disconnect(ee))}for(let j=0;j<z.added.length;j++){let ee=z.added[j],le=M.indexOf(ee);if(le===-1){for(let N=0;N<x.length;N++){if(N>=M.length){M.push(ee),le=N;break}if(M[N]===null){M[N]=ee,le=N;break}}if(le===-1)break}let ue=x[le];ue&&ue.connect(ee)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=x[z];return j===void 0&&(j=new Qr,x[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=x[z];return j===void 0&&(j=new Qr,x[z]=j),j.getGripSpace()},this.getHand=function(z){let j=x[z];return j===void 0&&(j=new Qr,x[z]=j),j.getHandSpace()},this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",A),n.addEventListener("selectstart",A),n.addEventListener("selectend",A),n.addEventListener("squeeze",A),n.addEventListener("squeezestart",A),n.addEventListener("squeezeend",A),n.addEventListener("end",I),n.addEventListener("inputsourceschange",B),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),n.renderState.layers===void 0){let j={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,j),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new Hi(p.framebufferWidth,p.framebufferHeight,{format:bi,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let j=null,ee=null,le=null;f.depth&&(le=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=f.stencil?yr:ss,ee=f.stencil?xr:An);let ue={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(ue),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Hi(d.textureWidth,d.textureHeight,{format:bi,type:nn,depthTexture:new Oa(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),re.setContext(n),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let O=new P,F=new P;function W(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;let j=z.near,ee=z.far;y.texture!==null&&(y.depthNear>0&&(j=y.depthNear),y.depthFar>0&&(ee=y.depthFar)),C.near=b.near=R.near=j,C.far=b.far=R.far=ee,_===C.near&&S===C.far||(n.updateRenderState({depthNear:C.near,depthFar:C.far}),_=C.near,S=C.far),R.layers.mask=2|z.layers.mask,b.layers.mask=4|z.layers.mask,C.layers.mask=R.layers.mask|b.layers.mask;let le=z.parent,ue=C.cameras;W(C,le);for(let N=0;N<ue.length;N++)W(ue[N],le);ue.length===2?(function(N,U,X){O.setFromMatrixPosition(U.matrixWorld),F.setFromMatrixPosition(X.matrixWorld);let V=O.distanceTo(F),k=U.projectionMatrix.elements,G=X.projectionMatrix.elements,L=k[14]/(k[10]-1),H=k[14]/(k[10]+1),Y=(k[9]+1)/k[5],ae=(k[9]-1)/k[5],$=(k[8]-1)/k[0],ne=(G[8]+1)/G[0],ie=L*$,ce=L*ne,ge=V/(-$+ne),me=ge*-$;if(U.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(me),N.translateZ(ge),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),k[10]===-1)N.projectionMatrix.copy(U.projectionMatrix),N.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let Me=L+ge,Ce=H+ge,He=ie-me,Oe=ce+(V-me),be=Y*H/Ce*Me,Xe=ae*H/Ce*Me;N.projectionMatrix.makePerspective(He,Oe,be,Xe,Me,Ce),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}})(C,R,b):C.projectionMatrix.copy(R.projectionMatrix),(function(N,U,X){X===null?N.matrix.copy(U.matrixWorld):(N.matrix.copy(X.matrixWorld),N.matrix.invert(),N.matrix.multiply(U.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(U.projectionMatrix),N.projectionMatrixInverse.copy(U.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=2*Kl*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)})(z,C,le)},this.getCamera=function(){return C},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(C)};let q=null,re=new Ld;re.setAnimationLoop((function(z,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let ee=h.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let le=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,le=!0);for(let N=0;N<ee.length;N++){let U=ee[N],X=null;if(p!==null)X=p.getViewport(U);else{let k=u.getViewSubImage(d,U);X=k.viewport,N===0&&(e.setRenderTargetTextures(m,k.colorTexture,d.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(m))}let V=T[N];V===void 0&&(V=new It,V.layers.enable(N),V.viewport=new je,T[N]=V),V.matrix.fromArray(U.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(U.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(X.x,X.y,X.width,X.height),N===0&&(C.matrix.copy(V.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),le===!0&&C.cameras.push(V)}let ue=n.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let N=u.getDepthInformation(ee[0]);N&&N.isValid&&N.texture&&y.init(e,N,n.renderState)}}for(let ee=0;ee<x.length;ee++){let le=M[ee],ue=x[ee];le!==null&&ue!==void 0&&ue.update(le,j,c||a)}q&&q(z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null})),this.setAnimationLoop=function(z){q=z},this.dispose=function(){}}},bn=new Si,_0=new Ae;function M0(s,e){function t(n,r){n.matrixAutoUpdate===!0&&n.updateMatrix(),r.value.copy(n.matrix)}function i(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map,t(r.map,n.mapTransform)),r.alphaMap&&(n.alphaMap.value=r.alphaMap,t(r.alphaMap,n.alphaMapTransform)),r.bumpMap&&(n.bumpMap.value=r.bumpMap,t(r.bumpMap,n.bumpMapTransform),n.bumpScale.value=r.bumpScale,r.side===1&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,t(r.normalMap,n.normalMapTransform),n.normalScale.value.copy(r.normalScale),r.side===1&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,t(r.displacementMap,n.displacementMapTransform),n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,n.emissiveMapTransform)),r.specularMap&&(n.specularMap.value=r.specularMap,t(r.specularMap,n.specularMapTransform)),r.alphaTest>0&&(n.alphaTest.value=r.alphaTest);let a=e.get(r),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,bn.copy(l),bn.x*=-1,bn.y*=-1,bn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),n.envMapRotation.value.setFromMatrix4(_0.makeRotationFromEuler(bn)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=r.reflectivity,n.ior.value=r.ior,n.refractionRatio.value=r.refractionRatio),r.lightMap&&(n.lightMap.value=r.lightMap,n.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,n.lightMapTransform)),r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,r){r.color.getRGB(n.fogColor.value,Id(s)),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)},refreshMaterialUniforms:function(n,r,a,o,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(n,r):r.isMeshToonMaterial?(i(n,r),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(n,r)):r.isMeshPhongMaterial?(i(n,r),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(n,r)):r.isMeshStandardMaterial?(i(n,r),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(n,r),r.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(n,r,l)):r.isMeshMatcapMaterial?(i(n,r),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(n,r)):r.isMeshDepthMaterial?i(n,r):r.isMeshDistanceMaterial?(i(n,r),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(n,r)):r.isMeshNormalMaterial?i(n,r):r.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(n,r),r.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(n,r)):r.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,r,a,o):r.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,r):r.isShadowMaterial?(n.color.value.copy(r.color),n.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function b0(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,g){let y=u.value,f=d+"_"+p;if(g[f]===void 0)return g[f]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let v=g[f];if(typeof y=="number"||typeof y=="boolean"){if(v!==y)return g[f]=y,!0}else if(v.equals(y)===!1)return v.copy(y),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),s.deleteBuffer(n[d.id]),delete n[d.id],delete r[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&((function(f){let v=f.uniforms,m=0,x=16;for(let E=0,w=v.length;E<w;E++){let R=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,T=R.length;b<T;b++){let C=R[b],_=Array.isArray(C.value)?C.value:[C.value];for(let S=0,A=_.length;S<A;S++){let I=c(_[S]),B=m%x,O=B%I.boundary,F=B+O;m+=O,F!==0&&x-F<I.storage&&(m+=x-F),C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=m,m+=I.storage}}}let M=m%x;M>0&&(m+=x-M),f.__size=m,f.__cache={}})(u),p=(function(f){let v=(function(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=v;let m=s.createBuffer(),x=f.__size,M=f.usage;return s.bindBuffer(s.UNIFORM_BUFFER,m),s.bufferData(s.UNIFORM_BUFFER,x,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,m),m})(u),n[u.id]=p,u.addEventListener("dispose",h));let g=d.program;i.updateUBOMapping(u,g);let y=e.render.frame;r[u.id]!==y&&((function(f){let v=n[f.id],m=f.uniforms,x=f.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let M=0,E=m.length;M<E;M++){let w=Array.isArray(m[M])?m[M]:[m[M]];for(let R=0,b=w.length;R<b;R++){let T=w[R];if(l(T,M,R,x)===!0){let C=T.__offset,_=Array.isArray(T.value)?T.value:[T.value],S=0;for(let A=0;A<_.length;A++){let I=_[A],B=c(I);typeof I=="number"||typeof I=="boolean"?(T.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,C+S,T.__data)):I.isMatrix3?(T.__data[0]=I.elements[0],T.__data[1]=I.elements[1],T.__data[2]=I.elements[2],T.__data[3]=0,T.__data[4]=I.elements[3],T.__data[5]=I.elements[4],T.__data[6]=I.elements[5],T.__data[7]=0,T.__data[8]=I.elements[6],T.__data[9]=I.elements[7],T.__data[10]=I.elements[8],T.__data[11]=0):(I.toArray(T.__data,S),S+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)})(u),r[u.id]=y)},dispose:function(){for(let u in n)s.deleteBuffer(n[u]);a=[],n={},r={}}}}var ka=class{constructor(e={}){let{canvas:t=Lf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),y=new Int32Array(4),f=null,v=null,m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this.toneMapping=0,this.toneMappingExposure=1;let M=this,E=!1,w=0,R=0,b=null,T=-1,C=null,_=new je,S=new je,A=null,I=new we(0),B=0,O=t.width,F=t.height,W=1,q=null,re=null,z=new je(0,0,O,F),j=new je(0,0,O,F),ee=!1,le=new sn,ue=!1,N=!1,U=new Ae,X=new Ae,V=new P,k=new je,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},L=!1;function H(){return b===null?W:1}let Y,ae,$,ne,ie,ce,ge,me,Me,Ce,He,Oe,be,Xe,Ke,rt,ye,Fe,Ze,Wn,Us,ri,gi,dn,Z=i;function kr(D,J){return t.getContext(D,J)}try{let D={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Cc,!1),t.addEventListener("webglcontextrestored",Pc,!1),t.addEventListener("webglcontextcreationerror",Ic,!1),Z===null){let J="webgl2";if(Z=kr(J,D),Z===null)throw kr(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}function Rc(){Y=new nm(Z),Y.init(),ri=new x0(Z,Y),ae=new Qf(Z,Y,e,ri),$=new g0(Z,Y),ae.reverseDepthBuffer&&d&&$.buffers.depth.setReversed(!0),ne=new am(Z),ie=new a0,ce=new v0(Z,Y,$,ie,ae,ri,ne),ge=new tm(M),me=new im(M),Me=new $f(Z),gi=new Jf(Z,Me),Ce=new rm(Z,Me,ne,gi),He=new lm(Z,Ce,Me,ne),Ze=new om(Z,ae,ce),rt=new em(ie),Oe=new s0(M,ge,me,Y,ae,gi,rt),be=new M0(M,ie),Xe=new l0,Ke=new p0(Y),Fe=new Zf(M,ge,me,$,He,p,l),ye=new f0(M,He,ae),dn=new b0(Z,ne,ae,$),Wn=new Kf(Z,Y,ne),Us=new sm(Z,Y,ne),ne.programs=Oe.programs,M.capabilities=ae,M.extensions=Y,M.properties=ie,M.renderLists=Xe,M.shadowMap=ye,M.state=$,M.info=ne}Rc();let Mt=new fh(M,Z);function Cc(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Pc(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let D=ne.autoReset,J=ye.enabled,Q=ye.autoUpdate,se=ye.needsUpdate,K=ye.type;Rc(),ne.autoReset=D,ye.enabled=J,ye.autoUpdate=Q,ye.needsUpdate=se,ye.type=K}function Ic(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Lc(D){let J=D.target;J.removeEventListener("dispose",Lc),(function(Q){(function(se){let K=ie.get(se).programs;K!==void 0&&(K.forEach((function(de){Oe.releaseProgram(de)})),se.isShaderMaterial&&Oe.releaseShaderCache(se))})(Q),ie.remove(Q)})(J)}function Uc(D,J,Q){D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=1,D.needsUpdate=!0,Ns(D,J,Q),D.side=0,D.needsUpdate=!0,Ns(D,J,Q),D.side=2):Ns(D,J,Q)}this.xr=Mt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let D=Y.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Y.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(O,F,!1))},this.getSize=function(D){return D.set(O,F)},this.setSize=function(D,J,Q=!0){Mt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(O=D,F=J,t.width=Math.floor(D*W),t.height=Math.floor(J*W),Q===!0&&(t.style.width=D+"px",t.style.height=J+"px"),this.setViewport(0,0,D,J))},this.getDrawingBufferSize=function(D){return D.set(O*W,F*W).floor()},this.setDrawingBufferSize=function(D,J,Q){O=D,F=J,W=Q,t.width=Math.floor(D*Q),t.height=Math.floor(J*Q),this.setViewport(0,0,D,J)},this.getCurrentViewport=function(D){return D.copy(_)},this.getViewport=function(D){return D.copy(z)},this.setViewport=function(D,J,Q,se){D.isVector4?z.set(D.x,D.y,D.z,D.w):z.set(D,J,Q,se),$.viewport(_.copy(z).multiplyScalar(W).round())},this.getScissor=function(D){return D.copy(j)},this.setScissor=function(D,J,Q,se){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,J,Q,se),$.scissor(S.copy(j).multiplyScalar(W).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(D){$.setScissorTest(ee=D)},this.setOpaqueSort=function(D){q=D},this.setTransparentSort=function(D){re=D},this.getClearColor=function(D){return D.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(D=!0,J=!0,Q=!0){let se=0;if(D){let K=!1;if(b!==null){let de=b.texture.format;K=de===tc||de===ec||de===Qh}if(K){let de=b.texture.type,ve=de===nn||de===An||de===rs||de===xr||de===Jh||de===Kh,_e=Fe.getClearColor(),Te=Fe.getClearAlpha(),Ie=_e.r,Ue=_e.g,Ee=_e.b;ve?(g[0]=Ie,g[1]=Ue,g[2]=Ee,g[3]=Te,Z.clearBufferuiv(Z.COLOR,0,g)):(y[0]=Ie,y[1]=Ue,y[2]=Ee,y[3]=Te,Z.clearBufferiv(Z.COLOR,0,y))}else se|=Z.COLOR_BUFFER_BIT}J&&(se|=Z.DEPTH_BUFFER_BIT),Q&&(se|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Cc,!1),t.removeEventListener("webglcontextrestored",Pc,!1),t.removeEventListener("webglcontextcreationerror",Ic,!1),Xe.dispose(),Ke.dispose(),ie.dispose(),ge.dispose(),me.dispose(),He.dispose(),gi.dispose(),dn.dispose(),Oe.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Dc),Mt.removeEventListener("sessionend",Nc),pn.stop()},this.renderBufferDirect=function(D,J,Q,se,K,de){J===null&&(J=G);let ve=K.isMesh&&K.matrixWorld.determinant()<0,_e=(function(ze,Ut,Et,Ne,Pe){Ut.isScene!==!0&&(Ut=G),ce.resetTextureUnits();let si=Ut.fog,Eo=Ne.isMeshStandardMaterial?Ut.environment:null,Fr=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Er,Xn=(Ne.isMeshStandardMaterial?me:ge).get(Ne.envMap||Eo),Ao=Ne.vertexColors===!0&&!!Et.attributes.color&&Et.attributes.color.itemSize===4,Ro=!!Et.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),Co=!!Et.morphAttributes.position,qi=!!Et.morphAttributes.normal,$p=!!Et.morphAttributes.color,Hc=0;Ne.toneMapped&&(b!==null&&b.isXRRenderTarget!==!0||(Hc=M.toneMapping));let Vc=Et.morphAttributes.position||Et.morphAttributes.normal||Et.morphAttributes.color,Yp=Vc!==void 0?Vc.length:0,Be=ie.get(Ne),Zp=v.state.lights;if(ue===!0&&(N===!0||ze!==C)){let jt=ze===C&&Ne.id===T;rt.setState(Ne,ze,jt)}let ai=!1;Ne.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==Zp.state.version||Be.outputColorSpace!==Fr||Pe.isBatchedMesh&&Be.batching===!1?ai=!0:Pe.isBatchedMesh||Be.batching!==!0?Pe.isBatchedMesh&&Be.batchingColor===!0&&Pe.colorTexture===null||Pe.isBatchedMesh&&Be.batchingColor===!1&&Pe.colorTexture!==null||Pe.isInstancedMesh&&Be.instancing===!1?ai=!0:Pe.isInstancedMesh||Be.instancing!==!0?Pe.isSkinnedMesh&&Be.skinning===!1?ai=!0:Pe.isSkinnedMesh||Be.skinning!==!0?Pe.isInstancedMesh&&Be.instancingColor===!0&&Pe.instanceColor===null||Pe.isInstancedMesh&&Be.instancingColor===!1&&Pe.instanceColor!==null||Pe.isInstancedMesh&&Be.instancingMorph===!0&&Pe.morphTexture===null||Pe.isInstancedMesh&&Be.instancingMorph===!1&&Pe.morphTexture!==null||Be.envMap!==Xn||Ne.fog===!0&&Be.fog!==si?ai=!0:Be.numClippingPlanes===void 0||Be.numClippingPlanes===rt.numPlanes&&Be.numIntersection===rt.numIntersection?(Be.vertexAlphas!==Ao||Be.vertexTangents!==Ro||Be.morphTargets!==Co||Be.morphNormals!==qi||Be.morphColors!==$p||Be.toneMapping!==Hc||Be.morphTargetsCount!==Yp)&&(ai=!0):ai=!0:ai=!0:ai=!0:ai=!0:(ai=!0,Be.__version=Ne.version);let fn=Be.currentProgram;ai===!0&&(fn=Ns(Ne,Ut,Pe));let Gc=!1,Br=!1,Po=!1,ut=fn.getUniforms(),$i=Be.uniforms;if($.useProgram(fn.program)&&(Gc=!0,Br=!0,Po=!0),Ne.id!==T&&(T=Ne.id,Br=!0),Gc||C!==ze){$.buffers.depth.getReversed()?(U.copy(ze.projectionMatrix),(function(mn){let it=mn.elements;it[2]=.5*it[2]+.5*it[3],it[6]=.5*it[6]+.5*it[7],it[10]=.5*it[10]+.5*it[11],it[14]=.5*it[14]+.5*it[15]})(U),(function(mn){let it=mn.elements;it[11]===-1?(it[10]=-it[10]-1,it[14]=-it[14]):(it[10]=-it[10],it[14]=1-it[14])})(U),ut.setValue(Z,"projectionMatrix",U)):ut.setValue(Z,"projectionMatrix",ze.projectionMatrix),ut.setValue(Z,"viewMatrix",ze.matrixWorldInverse);let jt=ut.map.cameraPosition;jt!==void 0&&jt.setValue(Z,V.setFromMatrixPosition(ze.matrixWorld)),ae.logarithmicDepthBuffer&&ut.setValue(Z,"logDepthBufFC",2/(Math.log(ze.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&ut.setValue(Z,"isOrthographic",ze.isOrthographicCamera===!0),C!==ze&&(C=ze,Br=!0,Po=!0)}if(Pe.isSkinnedMesh){ut.setOptional(Z,Pe,"bindMatrix"),ut.setOptional(Z,Pe,"bindMatrixInverse");let jt=Pe.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),ut.setValue(Z,"boneTexture",jt.boneTexture,ce))}Pe.isBatchedMesh&&(ut.setOptional(Z,Pe,"batchingTexture"),ut.setValue(Z,"batchingTexture",Pe._matricesTexture,ce),ut.setOptional(Z,Pe,"batchingIdTexture"),ut.setValue(Z,"batchingIdTexture",Pe._indirectTexture,ce),ut.setOptional(Z,Pe,"batchingColorTexture"),Pe._colorsTexture!==null&&ut.setValue(Z,"batchingColorTexture",Pe._colorsTexture,ce));let Io=Et.morphAttributes;Io.position===void 0&&Io.normal===void 0&&Io.color===void 0||Ze.update(Pe,Et,fn),(Br||Be.receiveShadow!==Pe.receiveShadow)&&(Be.receiveShadow=Pe.receiveShadow,ut.setValue(Z,"receiveShadow",Pe.receiveShadow)),Ne.isMeshGouraudMaterial&&Ne.envMap!==null&&($i.envMap.value=Xn,$i.flipEnvMap.value=Xn.isCubeTexture&&Xn.isRenderTargetTexture===!1?-1:1),Ne.isMeshStandardMaterial&&Ne.envMap===null&&Ut.environment!==null&&($i.envMapIntensity.value=Ut.environmentIntensity),Br&&(ut.setValue(Z,"toneMappingExposure",M.toneMappingExposure),Be.needsLights&&(oi=Po,(vi=$i).ambientLightColor.needsUpdate=oi,vi.lightProbe.needsUpdate=oi,vi.directionalLights.needsUpdate=oi,vi.directionalLightShadows.needsUpdate=oi,vi.pointLights.needsUpdate=oi,vi.pointLightShadows.needsUpdate=oi,vi.spotLights.needsUpdate=oi,vi.spotLightShadows.needsUpdate=oi,vi.rectAreaLights.needsUpdate=oi,vi.hemisphereLights.needsUpdate=oi),si&&Ne.fog===!0&&be.refreshFogUniforms($i,si),be.refreshMaterialUniforms($i,Ne,W,F,v.state.transmissionRenderTarget[ze.id]),mr.upload(Z,Bc(Be),$i,ce));var vi,oi;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(mr.upload(Z,Bc(Be),$i,ce),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&ut.setValue(Z,"center",Pe.center),ut.setValue(Z,"modelViewMatrix",Pe.modelViewMatrix),ut.setValue(Z,"normalMatrix",Pe.normalMatrix),ut.setValue(Z,"modelMatrix",Pe.matrixWorld),Ne.isShaderMaterial||Ne.isRawShaderMaterial){let jt=Ne.uniformsGroups;for(let mn=0,it=jt.length;mn<it;mn++){let Wc=jt[mn];dn.update(Wc,fn),dn.bind(Wc,fn)}}return fn})(D,J,Q,se,K);$.setMaterial(se,ve);let Te=Q.index,Ie=1;if(se.wireframe===!0){if(Te=Ce.getWireframeAttribute(Q),Te===void 0)return;Ie=2}let Ue=Q.drawRange,Ee=Q.attributes.position,ke=Ue.start*Ie,ot=(Ue.start+Ue.count)*Ie;de!==null&&(ke=Math.max(ke,de.start*Ie),ot=Math.min(ot,(de.start+de.count)*Ie)),Te!==null?(ke=Math.max(ke,0),ot=Math.min(ot,Te.count)):Ee!=null&&(ke=Math.max(ke,0),ot=Math.min(ot,Ee.count));let Qe=ot-ke;if(Qe<0||Qe===1/0)return;let xt;gi.setup(K,se,_e,Q,Te);let et=Wn;if(Te!==null&&(xt=Me.get(Te),et=Us,et.setIndex(xt)),K.isMesh)se.wireframe===!0?($.setLineWidth(se.wireframeLinewidth*H()),et.setMode(Z.LINES)):et.setMode(Z.TRIANGLES);else if(K.isLine){let ze=se.linewidth;ze===void 0&&(ze=1),$.setLineWidth(ze*H()),K.isLineSegments?et.setMode(Z.LINES):K.isLineLoop?et.setMode(Z.LINE_LOOP):et.setMode(Z.LINE_STRIP)}else K.isPoints?et.setMode(Z.POINTS):K.isSprite&&et.setMode(Z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)et.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let ze=K._multiDrawStarts,Ut=K._multiDrawCounts,Et=K._multiDrawCount,Ne=Te?Me.get(Te).bytesPerElement:1,Pe=ie.get(se).currentProgram.getUniforms();for(let si=0;si<Et;si++)Pe.setValue(Z,"_gl_DrawID",si),et.render(ze[si]/Ne,Ut[si])}else if(K.isInstancedMesh)et.renderInstances(ke,Qe,K.count);else if(Q.isInstancedBufferGeometry){let ze=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ut=Math.min(Q.instanceCount,ze);et.renderInstances(ke,Qe,Ut)}else et.render(ke,Qe)},this.compile=function(D,J,Q=null){Q===null&&(Q=D),v=Ke.get(Q),v.init(J),x.push(v),Q.traverseVisible((function(K){K.isLight&&K.layers.test(J.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))})),D!==Q&&D.traverseVisible((function(K){K.isLight&&K.layers.test(J.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))})),v.setupLights();let se=new Set;return D.traverse((function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let de=K.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){let _e=de[ve];Uc(_e,Q,K),se.add(_e)}else Uc(de,Q,K),se.add(de)})),x.pop(),v=null,se},this.compileAsync=function(D,J,Q=null){let se=this.compile(D,J,Q);return new Promise((K=>{function de(){se.forEach((function(ve){ie.get(ve).currentProgram.isReady()&&se.delete(ve)})),se.size!==0?setTimeout(de,10):K(D)}Y.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)}))};let wo=null;function Dc(){pn.stop()}function Nc(){pn.start()}let pn=new Ld;function To(D,J,Q,se){if(D.visible===!1)return;if(D.layers.test(J.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(J);else if(D.isLight)v.pushLight(D),D.castShadow&&v.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||le.intersectsSprite(D)){se&&k.setFromMatrixPosition(D.matrixWorld).applyMatrix4(X);let de=He.update(D),ve=D.material;ve.visible&&f.push(D,de,ve,Q,k.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||le.intersectsObject(D))){let de=He.update(D),ve=D.material;if(se&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),k.copy(D.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),k.copy(de.boundingSphere.center)),k.applyMatrix4(D.matrixWorld).applyMatrix4(X)),Array.isArray(ve)){let _e=de.groups;for(let Te=0,Ie=_e.length;Te<Ie;Te++){let Ue=_e[Te],Ee=ve[Ue.materialIndex];Ee&&Ee.visible&&f.push(D,de,Ee,Q,k.z,Ue)}}else ve.visible&&f.push(D,de,ve,Q,k.z,null)}}let K=D.children;for(let de=0,ve=K.length;de<ve;de++)To(K[de],J,Q,se)}function Oc(D,J,Q,se){let K=D.opaque,de=D.transmissive,ve=D.transparent;v.setupLightsView(Q),ue===!0&&rt.setGlobalState(M.clippingPlanes,Q),se&&$.viewport(_.copy(se)),K.length>0&&Ds(K,J,Q),de.length>0&&Ds(de,J,Q),ve.length>0&&Ds(ve,J,Q),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function kc(D,J,Q,se){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[se.id]===void 0&&(v.state.transmissionRenderTarget[se.id]=new Hi(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?vs:nn,minFilter:dr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));let K=v.state.transmissionRenderTarget[se.id],de=se.viewport||_;K.setSize(de.z,de.w);let ve=M.getRenderTarget();M.setRenderTarget(K),M.getClearColor(I),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear(),L&&Fe.render(Q);let _e=M.toneMapping;M.toneMapping=0;let Te=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),v.setupLightsView(se),ue===!0&&rt.setGlobalState(M.clippingPlanes,se),Ds(D,Q,se),ce.updateMultisampleRenderTarget(K),ce.updateRenderTargetMipmap(K),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ue=0,Ee=J.length;Ue<Ee;Ue++){let ke=J[Ue],ot=ke.object,Qe=ke.geometry,xt=ke.material,et=ke.group;if(xt.side===2&&ot.layers.test(se.layers)){let ze=xt.side;xt.side=1,xt.needsUpdate=!0,Fc(ot,Q,se,Qe,xt,et),xt.side=ze,xt.needsUpdate=!0,Ie=!0}}Ie===!0&&(ce.updateMultisampleRenderTarget(K),ce.updateRenderTargetMipmap(K))}M.setRenderTarget(ve),M.setClearColor(I,B),Te!==void 0&&(se.viewport=Te),M.toneMapping=_e}function Ds(D,J,Q){let se=J.isScene===!0?J.overrideMaterial:null;for(let K=0,de=D.length;K<de;K++){let ve=D[K],_e=ve.object,Te=ve.geometry,Ie=se===null?ve.material:se,Ue=ve.group;_e.layers.test(Q.layers)&&Fc(_e,J,Q,Te,Ie,Ue)}}function Fc(D,J,Q,se,K,de){D.onBeforeRender(M,J,Q,se,K,de),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),K.onBeforeRender(M,J,Q,se,D,de),K.transparent===!0&&K.side===2&&K.forceSinglePass===!1?(K.side=1,K.needsUpdate=!0,M.renderBufferDirect(Q,J,se,K,D,de),K.side=0,K.needsUpdate=!0,M.renderBufferDirect(Q,J,se,K,D,de),K.side=2):M.renderBufferDirect(Q,J,se,K,D,de),D.onAfterRender(M,J,Q,se,K,de)}function Ns(D,J,Q){J.isScene!==!0&&(J=G);let se=ie.get(D),K=v.state.lights,de=v.state.shadowsArray,ve=K.state.version,_e=Oe.getParameters(D,K.state,de,J,Q),Te=Oe.getProgramCacheKey(_e),Ie=se.programs;se.environment=D.isMeshStandardMaterial?J.environment:null,se.fog=J.fog,se.envMap=(D.isMeshStandardMaterial?me:ge).get(D.envMap||se.environment),se.envMapRotation=se.environment!==null&&D.envMap===null?J.environmentRotation:D.envMapRotation,Ie===void 0&&(D.addEventListener("dispose",Lc),Ie=new Map,se.programs=Ie);let Ue=Ie.get(Te);if(Ue!==void 0){if(se.currentProgram===Ue&&se.lightsStateVersion===ve)return zc(D,_e),Ue}else _e.uniforms=Oe.getUniforms(D),D.onBeforeCompile(_e,M),Ue=Oe.acquireProgram(_e,Te),Ie.set(Te,Ue),se.uniforms=_e.uniforms;let Ee=se.uniforms;return(D.isShaderMaterial||D.isRawShaderMaterial)&&D.clipping!==!0||(Ee.clippingPlanes=rt.uniform),zc(D,_e),se.needsLights=(function(ke){return ke.isMeshLambertMaterial||ke.isMeshToonMaterial||ke.isMeshPhongMaterial||ke.isMeshStandardMaterial||ke.isShadowMaterial||ke.isShaderMaterial&&ke.lights===!0})(D),se.lightsStateVersion=ve,se.needsLights&&(Ee.ambientLightColor.value=K.state.ambient,Ee.lightProbe.value=K.state.probe,Ee.directionalLights.value=K.state.directional,Ee.directionalLightShadows.value=K.state.directionalShadow,Ee.spotLights.value=K.state.spot,Ee.spotLightShadows.value=K.state.spotShadow,Ee.rectAreaLights.value=K.state.rectArea,Ee.ltc_1.value=K.state.rectAreaLTC1,Ee.ltc_2.value=K.state.rectAreaLTC2,Ee.pointLights.value=K.state.point,Ee.pointLightShadows.value=K.state.pointShadow,Ee.hemisphereLights.value=K.state.hemi,Ee.directionalShadowMap.value=K.state.directionalShadowMap,Ee.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ee.spotShadowMap.value=K.state.spotShadowMap,Ee.spotLightMatrix.value=K.state.spotLightMatrix,Ee.spotLightMap.value=K.state.spotLightMap,Ee.pointShadowMap.value=K.state.pointShadowMap,Ee.pointShadowMatrix.value=K.state.pointShadowMatrix),se.currentProgram=Ue,se.uniformsList=null,Ue}function Bc(D){if(D.uniformsList===null){let J=D.currentProgram.getUniforms();D.uniformsList=mr.seqWithValue(J.seq,D.uniforms)}return D.uniformsList}function zc(D,J){let Q=ie.get(D);Q.outputColorSpace=J.outputColorSpace,Q.batching=J.batching,Q.batchingColor=J.batchingColor,Q.instancing=J.instancing,Q.instancingColor=J.instancingColor,Q.instancingMorph=J.instancingMorph,Q.skinning=J.skinning,Q.morphTargets=J.morphTargets,Q.morphNormals=J.morphNormals,Q.morphColors=J.morphColors,Q.morphTargetsCount=J.morphTargetsCount,Q.numClippingPlanes=J.numClippingPlanes,Q.numIntersection=J.numClipIntersection,Q.vertexAlphas=J.vertexAlphas,Q.vertexTangents=J.vertexTangents,Q.toneMapping=J.toneMapping}pn.setAnimationLoop((function(D){wo&&wo(D)})),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(D){wo=D,Mt.setAnimationLoop(D),D===null?pn.stop():pn.start()},Mt.addEventListener("sessionstart",Dc),Mt.addEventListener("sessionend",Nc),this.render=function(D,J){if(J!==void 0&&J.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(J),J=Mt.getCamera()),D.isScene===!0&&D.onBeforeRender(M,D,J,b),v=Ke.get(D,x.length),v.init(J),x.push(v),X.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),le.setFromProjectionMatrix(X),N=this.localClippingEnabled,ue=rt.init(this.clippingPlanes,N),f=Xe.get(D,m.length),f.init(),m.push(f),Mt.enabled===!0&&Mt.isPresenting===!0){let de=M.xr.getDepthSensingMesh();de!==null&&To(de,J,-1/0,M.sortObjects)}To(D,J,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(q,re),L=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,L&&Fe.addToRenderList(f,D),this.info.render.frame++,ue===!0&&rt.beginShadows();let Q=v.state.shadowsArray;ye.render(Q,D,J),ue===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=f.opaque,K=f.transmissive;if(v.setupLights(),J.isArrayCamera){let de=J.cameras;if(K.length>0)for(let ve=0,_e=de.length;ve<_e;ve++)kc(se,K,D,de[ve]);L&&Fe.render(D);for(let ve=0,_e=de.length;ve<_e;ve++){let Te=de[ve];Oc(f,D,Te,Te.viewport)}}else K.length>0&&kc(se,K,D,J),L&&Fe.render(D),Oc(f,D,J);b!==null&&(ce.updateMultisampleRenderTarget(b),ce.updateRenderTargetMipmap(b)),D.isScene===!0&&D.onAfterRender(M,D,J),gi.resetDefaultState(),T=-1,C=null,x.pop(),x.length>0?(v=x[x.length-1],ue===!0&&rt.setGlobalState(M.clippingPlanes,v.state.camera)):v=null,m.pop(),f=m.length>0?m[m.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(D,J,Q){ie.get(D.texture).__webglTexture=J,ie.get(D.depthTexture).__webglTexture=Q;let se=ie.get(D);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=Q===void 0,se.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,J){let Q=ie.get(D);Q.__webglFramebuffer=J,Q.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(D,J=0,Q=0){b=D,w=J,R=Q;let se=!0,K=null,de=!1,ve=!1;if(D){let _e=ie.get(D);if(_e.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(Z.FRAMEBUFFER,null),se=!1;else if(_e.__webglFramebuffer===void 0)ce.setupRenderTarget(D);else if(_e.__hasExternalTextures)ce.rebindTextures(D,ie.get(D.texture).__webglTexture,ie.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Ue=D.depthTexture;if(_e.__boundDepthTexture!==Ue){if(Ue!==null&&ie.has(Ue)&&(D.width!==Ue.image.width||D.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(D)}}let Te=D.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);let Ie=ie.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(K=Array.isArray(Ie[J])?Ie[J][Q]:Ie[J],de=!0):K=D.samples>0&&ce.useMultisampledRTT(D)===!1?ie.get(D).__webglMultisampledFramebuffer:Array.isArray(Ie)?Ie[Q]:Ie,_.copy(D.viewport),S.copy(D.scissor),A=D.scissorTest}else _.copy(z).multiplyScalar(W).floor(),S.copy(j).multiplyScalar(W).floor(),A=ee;if($.bindFramebuffer(Z.FRAMEBUFFER,K)&&se&&$.drawBuffers(D,K),$.viewport(_),$.scissor(S),$.setScissorTest(A),de){let _e=ie.get(D.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e.__webglTexture,Q)}else if(ve){let _e=ie.get(D.texture),Te=J||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,_e.__webglTexture,Q||0,Te)}T=-1},this.readRenderTargetPixels=function(D,J,Q,se,K,de,ve){if(!D||!D.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ie.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ve!==void 0&&(_e=_e[ve]),_e){$.bindFramebuffer(Z.FRAMEBUFFER,_e);try{let Te=D.texture,Ie=Te.format,Ue=Te.type;if(!ae.textureFormatReadable(Ie))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ue))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");J>=0&&J<=D.width-se&&Q>=0&&Q<=D.height-K&&Z.readPixels(J,Q,se,K,ri.convert(Ie),ri.convert(Ue),de)}finally{let Te=b!==null?ie.get(b).__webglFramebuffer:null;$.bindFramebuffer(Z.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(D,J,Q,se,K,de,ve){if(!D||!D.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ie.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ve!==void 0&&(_e=_e[ve]),_e){let Te=D.texture,Ie=Te.format,Ue=Te.type;if(!ae.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=D.width-se&&Q>=0&&Q<=D.height-K){$.bindFramebuffer(Z.FRAMEBUFFER,_e);let Ee=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ee),Z.bufferData(Z.PIXEL_PACK_BUFFER,de.byteLength,Z.STREAM_READ),Z.readPixels(J,Q,se,K,ri.convert(Ie),ri.convert(Ue),0);let ke=b!==null?ie.get(b).__webglFramebuffer:null;$.bindFramebuffer(Z.FRAMEBUFFER,ke);let ot=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await(function(Qe,xt,et){return new Promise((function(ze,Ut){setTimeout((function Et(){switch(Qe.clientWaitSync(xt,Qe.SYNC_FLUSH_COMMANDS_BIT,0)){case Qe.WAIT_FAILED:Ut();break;case Qe.TIMEOUT_EXPIRED:setTimeout(Et,et);break;default:ze()}}),et)}))})(Z,ot,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ee),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,de),Z.deleteBuffer(Ee),Z.deleteSync(ot),de}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,J=null,Q=0){D.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,D=arguments[1]);let se=Math.pow(2,-Q),K=Math.floor(D.image.width*se),de=Math.floor(D.image.height*se),ve=J!==null?J.x:0,_e=J!==null?J.y:0;ce.setTexture2D(D,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,Q,0,0,ve,_e,K,de),$.unbindTexture()},this.copyTextureToTexture=function(D,J,Q=null,se=null,K=0){let de,ve,_e,Te,Ie,Ue,Ee,ke,ot;D.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,D=arguments[1],J=arguments[2],K=arguments[3]||0,Q=null);let Qe=D.isCompressedTexture?D.mipmaps[K]:D.image;Q!==null?(de=Q.max.x-Q.min.x,ve=Q.max.y-Q.min.y,_e=Q.isBox3?Q.max.z-Q.min.z:1,Te=Q.min.x,Ie=Q.min.y,Ue=Q.isBox3?Q.min.z:0):(de=Qe.width,ve=Qe.height,_e=Qe.depth||1,Te=0,Ie=0,Ue=0),se!==null?(Ee=se.x,ke=se.y,ot=se.z):(Ee=0,ke=0,ot=0);let xt=ri.convert(J.format),et=ri.convert(J.type),ze;J.isData3DTexture?(ce.setTexture3D(J,0),ze=Z.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ce.setTexture2DArray(J,0),ze=Z.TEXTURE_2D_ARRAY):(ce.setTexture2D(J,0),ze=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,J.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,J.unpackAlignment);let Ut=Z.getParameter(Z.UNPACK_ROW_LENGTH),Et=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Ne=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Pe=Z.getParameter(Z.UNPACK_SKIP_ROWS),si=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Qe.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Qe.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Te),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Ie),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ue);let Eo=D.isDataArrayTexture||D.isData3DTexture,Fr=J.isDataArrayTexture||J.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){let Xn=ie.get(D),Ao=ie.get(J),Ro=ie.get(Xn.__renderTarget),Co=ie.get(Ao.__renderTarget);$.bindFramebuffer(Z.READ_FRAMEBUFFER,Ro.__webglFramebuffer),$.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Co.__webglFramebuffer);for(let qi=0;qi<_e;qi++)Eo&&Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ie.get(D).__webglTexture,K,Ue+qi),D.isDepthTexture?(Fr&&Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ie.get(J).__webglTexture,K,ot+qi),Z.blitFramebuffer(Te,Ie,de,ve,Ee,ke,de,ve,Z.DEPTH_BUFFER_BIT,Z.NEAREST)):Fr?Z.copyTexSubImage3D(ze,K,Ee,ke,ot+qi,Te,Ie,de,ve):Z.copyTexSubImage2D(ze,K,Ee,ke,ot+qi,Te,Ie,de,ve);$.bindFramebuffer(Z.READ_FRAMEBUFFER,null),$.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Fr?D.isDataTexture||D.isData3DTexture?Z.texSubImage3D(ze,K,Ee,ke,ot,de,ve,_e,xt,et,Qe.data):J.isCompressedArrayTexture?Z.compressedTexSubImage3D(ze,K,Ee,ke,ot,de,ve,_e,xt,Qe.data):Z.texSubImage3D(ze,K,Ee,ke,ot,de,ve,_e,xt,et,Qe):D.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,K,Ee,ke,de,ve,xt,et,Qe.data):D.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,K,Ee,ke,Qe.width,Qe.height,xt,Qe.data):Z.texSubImage2D(Z.TEXTURE_2D,K,Ee,ke,de,ve,xt,et,Qe);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Ut),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Et),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ne),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Pe),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,si),K===0&&J.generateMipmaps&&Z.generateMipmap(ze),$.unbindTexture()},this.copyTextureToTexture3D=function(D,J,Q=null,se=null,K=0){return D.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,se=arguments[1]||null,D=arguments[2],J=arguments[3],K=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,J,Q,se,K)},this.initRenderTarget=function(D){ie.get(D).__webglFramebuffer===void 0&&ce.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ce.setTextureCube(D,0):D.isData3DTexture?ce.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ce.setTexture2DArray(D,0):ce.setTexture2D(D,0),$.unbindTexture()},this.resetState=function(){w=0,R=0,b=null,$.reset(),gi.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var Fa=class s{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},mh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jl,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dt=new P,Ba=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$e(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ls=class extends Vi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},or,$r=new P,lr=new P,hr=new P,cr=new he,Yr=new he,kd=new Ae,ha=new P,Zr=new P,ca=new P,td=new he,ul=new he,id=new he,za=class extends dt{constructor(e=new ls){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new Je;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mh(t,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new Ba(i,3,0,!1)),or.setAttribute("uv",new Ba(i,2,3,!1))}this.geometry=or,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),kd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-hr.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;ua(ha.set(-.5,-.5,0),hr,a,lr,n,r),ua(Zr.set(.5,-.5,0),hr,a,lr,n,r),ua(ca.set(.5,.5,0),hr,a,lr,n,r),td.set(0,0),ul.set(1,0),id.set(1,1);let o=e.ray.intersectTriangle(ha,Zr,ca,!1,$r);if(o===null&&(ua(Zr.set(-.5,.5,0),hr,a,lr,n,r),ul.set(0,1),o=e.ray.intersectTriangle(ha,ca,Zr,!1,$r),o===null))return;let l=e.ray.origin.distanceTo($r);l<e.near||l>e.far||t.push({distance:l,point:$r.clone(),uv:Oi.getInterpolation($r,ha,Zr,ca,td,ul,id,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ua(s,e,t,i,n,r){cr.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Yr.x=r*cr.x-n*cr.y,Yr.y=n*cr.x+r*cr.y):Yr.copy(cr),s.copy(e),s.x+=Yr.x,s.y+=Yr.y,s.applyMatrix4(kd)}var Tg=new P,Eg=new P;var Ag=new P,Rg=new je,Cg=new je,Pg=new P,Ig=new Ae,Lg=new P,Ug=new Zt,Dg=new Ae,Ng=new Rn;var Og=new Ae,kg=new Ae;var Ha=class extends at{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fg=new Ae,Bg=new Ae;var zg=new Yt,Hg=new Ae,Vg=new xe,Gg=new Zt;var gh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},Wg=new Ae,Xg=new we(1,1,1),jg=new sn,qg=new Yt,$g=new Zt,Yg=new P,Zg=new P,Jg=new P,Kg=new gh,Qg=new xe;var ev=new P,tv=new P,iv=new Ae,nv=new Rn,rv=new Zt,sv=new P,av=new P;var ov=new P,lv=new P;var hs=class extends Vi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nd=new Ae,vh=new Rn,da=new Zt,pa=new P,Va=class extends dt{constructor(e=new Je,t=new hs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(n),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;nd.copy(n).invert(),vh.copy(e.ray).applyMatrix4(nd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);pa.fromBufferAttribute(h,p),rd(pa,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)pa.fromBufferAttribute(h,u),rd(pa,u,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function rd(s,e,t,i,n,r,a){let o=vh.distanceSqToPoint(s);if(o<t){let l=new P;vh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Lt=class extends Vt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,r=i.length,a;a=t||e*i[r-1];let o,l=0,c=r-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(r-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new he:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,n=[],r=[],a=[],o=new P,l=new Ae;for(let p=0;p<=e;p++){let g=p/e;n[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(St(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(n[p],r[p])}if(t===!0){let p=Math.acos(St(r[0].dot(r[e]),-1,1));p/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},cs=class extends Kt{constructor(e=0,t=0,i=1,n=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let i=t,n=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=a?0:n),this.aClockwise!==!0||a||(r===n?r=-n:r-=n);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xh=class extends cs{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,n(a,o,d,p)},calc:function(r){let a=r*r;return s+e*r+t*a+i*(a*r)}}}var fa=new P,dl=new nc,pl=new nc,fl=new nc,yh=class extends Kt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new P){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1),this.closed||c>0?o=n[(c-1)%r]:(fa.subVectors(n[0],n[1]).add(n[0]),o=fa);let u=n[c%r],d=n[(c+1)%r];if(this.closed||c+2<r?l=n[(c+2)%r]:(fa.subVectors(n[r-1],n[r-2]).add(n[r-1]),l=fa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);y<1e-4&&(y=1),g<1e-4&&(g=y),f<1e-4&&(f=y),dl.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,g,y,f),pl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,g,y,f),fl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,g,y,f)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),pl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),fl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(dl.calc(h),pl.calc(h),fl.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sd(s,e,t,i,n){let r=.5*(i-e),a=.5*(n-t),o=s*s;return(2*t-2*i+r+a)*(s*o)+(-3*t+3*i-2*r-a)*o+r*s+t}function es(s,e,t,i){return(function(n,r){let a=1-n;return a*a*r})(s,e)+(function(n,r){return 2*(1-n)*n*r})(s,t)+(function(n,r){return n*n*r})(s,i)}function ts(s,e,t,i,n){return(function(r,a){let o=1-r;return o*o*o*a})(s,e)+(function(r,a){let o=1-r;return 3*o*o*r*a})(s,t)+(function(r,a){return 3*(1-r)*r*r*a})(s,i)+(function(r,a){return r*r*r*a})(s,n)}var Ga=class extends Kt{constructor(e=new he,t=new he,i=new he,n=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new he){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ts(e,n.x,r.x,a.x,o.x),ts(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_h=class extends Kt{constructor(e=new P,t=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new P){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ts(e,n.x,r.x,a.x,o.x),ts(e,n.y,r.y,a.y,o.y),ts(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wa=class extends Kt{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mh=class extends Kt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Kt{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(es(e,n.x,r.x,a.x),es(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends Kt{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(es(e,n.x,r.x,a.x),es(e,n.y,r.y,a.y),es(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends Kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(sd(o,l.x,c.x,h.x,u.x),sd(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new he().fromArray(n))}return this}},qa=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:yh,CubicBezierCurve:Ga,CubicBezierCurve3:_h,EllipseCurve:cs,LineCurve:Wa,LineCurve3:Mh,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:ja,SplineCurve:wr}),bh=class extends Kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qa[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new qa[n.type]().fromJSON(n))}return this}},us=class extends bh{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Wa(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Xa(this.currentPoint.clone(),new he(e,t),new he(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){let o=new Ga(this.currentPoint.clone(),new he(e,t),new he(i,n),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new wr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){let c=new cs(e,t,i,n,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fi=class s extends Je{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=St(n,0,2*Math.PI);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,d=new he,p=new P,g=new P,y=new P,f=0,v=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:f=e[m+1].x-e[m].x,v=e[m+1].y-e[m].y,p.x=1*v,p.y=-f,p.z=0*v,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:f=e[m+1].x-e[m].x,v=e[m+1].y-e[m].y,p.x=1*v,p.y=-f,p.z=0*v,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let m=0;m<=t;m++){let x=i+m*h*n,M=Math.sin(x),E=Math.cos(x);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*M,u.y=e[w].y,u.z=e[w].x*E,a.push(u.x,u.y,u.z),d.x=m/t,d.y=w/(e.length-1),o.push(d.x,d.y);let R=l[3*w+0]*M,b=l[3*w+1],T=l[3*w+0]*E;c.push(R,b,T)}}for(let m=0;m<t;m++)for(let x=0;x<e.length-1;x++){let M=x+m*e.length,E=M,w=M+e.length,R=M+e.length+1,b=M+1;r.push(E,w,b),r.push(R,b,w)}this.setIndex(r),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},ds=class s extends fi{constructor(e=1,t=1,i=4,n=8){let r=new us;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},wi=class s extends Je{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ot=class s extends Je{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],f=i/2,v=0;function m(x){let M=g,E=new he,w=new P,R=0,b=x===!0?e:t,T=x===!0?1:-1;for(let _=1;_<=n;_++)u.push(0,f*T,0),d.push(0,T,0),p.push(.5,.5),g++;let C=g;for(let _=0;_<=n;_++){let S=_/n*l+o,A=Math.cos(S),I=Math.sin(S);w.x=b*I,w.y=f*T,w.z=b*A,u.push(w.x,w.y,w.z),d.push(0,T,0),E.x=.5*A+.5,E.y=.5*I*T+.5,p.push(E.x,E.y),g++}for(let _=0;_<n;_++){let S=M+_,A=C+_;x===!0?h.push(A,A+1,S):h.push(A+1,A,S),R+=3}c.addGroup(v,R,x===!0?1:2),v+=R}(function(){let x=new P,M=new P,E=0,w=(t-e)/i;for(let R=0;R<=r;R++){let b=[],T=R/r,C=T*(t-e)+e;for(let _=0;_<=n;_++){let S=_/n,A=S*l+o,I=Math.sin(A),B=Math.cos(A);M.x=C*I,M.y=-T*i+f,M.z=C*B,u.push(M.x,M.y,M.z),x.set(I,w,B).normalize(),d.push(x.x,x.y,x.z),p.push(S,1-T),b.push(g++)}y.push(b)}for(let R=0;R<n;R++)for(let b=0;b<r;b++){let T=y[b][R],C=y[b+1][R],_=y[b+1][R+1],S=y[b][R+1];(e>0||b!==0)&&(h.push(T,C,S),E+=3),(t>0||b!==r-1)&&(h.push(C,_,S),E+=3)}c.addGroup(v,E,0),v+=E})(),a===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sh=class s extends Ot{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cn=class s extends Je{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];function o(d,p,g,y){let f=y+1,v=[];for(let m=0;m<=f;m++){v[m]=[];let x=d.clone().lerp(g,m/f),M=p.clone().lerp(g,m/f),E=f-m;for(let w=0;w<=E;w++)v[m][w]=w===0&&m===f?x:x.clone().lerp(M,w/E)}for(let m=0;m<f;m++)for(let x=0;x<2*(f-m)-1;x++){let M=Math.floor(x/2);x%2==0?(l(v[m][M+1]),l(v[m+1][M]),l(v[m][M])):(l(v[m][M+1]),l(v[m+1][M+1]),l(v[m+1][M]))}}function l(d){r.push(d.x,d.y,d.z)}function c(d,p){let g=3*d;p.x=e[g+0],p.y=e[g+1],p.z=e[g+2]}function h(d,p,g,y){y<0&&d.x===1&&(a[p]=d.x-1),g.x===0&&g.z===0&&(a[p]=y/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new P,g=new P,y=new P;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],g),c(t[f+2],y),o(p,g,y,d)})(n),(function(d){let p=new P;for(let g=0;g<r.length;g+=3)p.x=r[g+0],p.y=r[g+1],p.z=r[g+2],p.normalize().multiplyScalar(d),r[g+0]=p.x,r[g+1]=p.y,r[g+2]=p.z})(i),(function(){let d=new P;for(let g=0;g<r.length;g+=3){d.x=r[g+0],d.y=r[g+1],d.z=r[g+2];let y=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(y,1-f)}var p;(function(){let g=new P,y=new P,f=new P,v=new P,m=new he,x=new he,M=new he;for(let E=0,w=0;E<r.length;E+=9,w+=6){g.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),f.set(r[E+6],r[E+7],r[E+8]),m.set(a[w+0],a[w+1]),x.set(a[w+2],a[w+3]),M.set(a[w+4],a[w+5]),v.copy(g).add(y).add(f).divideScalar(3);let R=u(v);h(m,w+0,g,R),h(x,w+2,y,R),h(M,w+4,f,R)}})(),(function(){for(let g=0;g<a.length;g+=6){let y=a[g+0],f=a[g+2],v=a[g+4],m=Math.max(y,f,v),x=Math.min(y,f,v);m>.9&&x<.1&&(y<.2&&(a[g+0]+=1),f<.2&&(a[g+2]+=1),v<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},wh=class s extends Cn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ma=new P,ga=new P,ml=new P,va=new Oi,Th=class extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(Ea*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:f,c:v}=va;if(y.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),v.fromBufferAttribute(o,c[2]),va.getNormal(ml),u[0]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,u[1]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[2]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let m=0;m<3;m++){let x=(m+1)%3,M=u[m],E=u[x],w=va[h[m]],R=va[h[x]],b=`${M}_${E}`,T=`${E}_${M}`;T in d&&d[T]?(ml.dot(d[T].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(R.x,R.y,R.z)),d[T]=null):b in d||(d[b]={index0:c[m],index1:c[x],normal:ml.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:f}=d[g];ma.fromBufferAttribute(o,y),ga.fromBufferAttribute(o,f),p.push(ma.x,ma.y,ma.z),p.push(ga.x,ga.y,ga.z)}this.setAttribute("position",new Re(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},$a=class extends us{constructor(e){super(e),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new us().fromJSON(n))}return this}},S0=function(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=ad(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(i&&(r=(function(g,y,f,v){let m=[],x,M,E,w,R;for(x=0,M=y.length;x<M;x++)E=y[x]*v,w=x<M-1?y[x+1]*v:g.length,R=ad(g,E,w,v,!1),R===R.next&&(R.steiner=!0),m.push(I0(R));for(m.sort(R0),x=0;x<m.length;x++)f=C0(m[x],f);return f})(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<n;g+=t)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return ps(r,a,t,o,l,p,0),a};function ad(s,e,t,i,n){let r,a;if(n===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(s,e,t,i)>0)for(r=e;r<t;r+=i)a=od(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=od(r,s[r],s[r+1],a);return a&&no(a,a.next)&&(ms(a),a=a.next),a}function Pn(s,e){if(!s)return s;e||(e=s);let t,i=s;do if(t=!1,i.steiner||!no(i,i.next)&&st(i.prev,i,i.next)!==0)i=i.next;else{if(ms(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function ps(s,e,t,i,n,r,a){if(!s)return;!a&&r&&(function(h,u,d,p){let g=h;do g.z===0&&(g.z=Eh(g.x,g.y,u,d,p)),g.prevZ=g.prev,g.nextZ=g.next,g=g.next;while(g!==h);g.prevZ.nextZ=null,g.prevZ=null,(function(y){let f,v,m,x,M,E,w,R,b=1;do{for(v=y,y=null,M=null,E=0;v;){for(E++,m=v,w=0,f=0;f<b&&(w++,m=m.nextZ,m);f++);for(R=b;w>0||R>0&&m;)w!==0&&(R===0||!m||v.z<=m.z)?(x=v,v=v.nextZ,w--):(x=m,m=m.nextZ,R--),M?M.nextZ=x:y=x,x.prevZ=M,M=x;v=m}M.nextZ=null,b*=2}while(E>1)})(g)})(s,i,n,r);let o,l,c=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,r?T0(s,i,n,r):w0(s))e.push(o.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),ms(s),s=l.next,c=l.next;else if((s=l)===c){a?a===1?ps(s=E0(Pn(s),e,t),e,t,i,n,r,2):a===2&&A0(s,e,t,i,n,r):ps(Pn(s),e,t,i,n,r,1);break}}function w0(s){let e=s.prev,t=s,i=s.next;if(st(e,t,i)>=0)return!1;let n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<r?n<a?n:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=n>r?n>a?n:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&pr(n,o,r,l,a,c,g.x,g.y)&&st(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function T0(s,e,t,i){let n=s.prev,r=s,a=s.next;if(st(n,r,a)>=0)return!1;let o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,v=Eh(p,g,e,t,i),m=Eh(y,f,e,t,i),x=s.prevZ,M=s.nextZ;for(;x&&x.z>=v&&M&&M.z<=m;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=f&&x!==n&&x!==a&&pr(o,h,l,u,c,d,x.x,x.y)&&st(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=y&&M.y>=g&&M.y<=f&&M!==n&&M!==a&&pr(o,h,l,u,c,d,M.x,M.y)&&st(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=v;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=f&&x!==n&&x!==a&&pr(o,h,l,u,c,d,x.x,x.y)&&st(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=m;){if(M.x>=p&&M.x<=y&&M.y>=g&&M.y<=f&&M!==n&&M!==a&&pr(o,h,l,u,c,d,M.x,M.y)&&st(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function E0(s,e,t){let i=s;do{let n=i.prev,r=i.next.next;!no(n,r)&&Fd(n,i,i.next,r)&&fs(n,r)&&fs(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),ms(i),ms(i.next),i=s=r),i=i.next}while(i!==s);return Pn(i)}function A0(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&L0(a,o)){let l=Bd(a,o);return a=Pn(a,a.next),l=Pn(l,l.next),ps(a,e,t,i,n,r,0),void ps(l,e,t,i,n,r,0)}o=o.next}a=a.next}while(a!==s)}function R0(s,e){return s.x-e.x}function C0(s,e){let t=(function(n,r){let a,o=r,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==r);if(!a)return null;let u=a,d=a.x,p=a.y,g,y=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&pr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(g=Math.abs(h-o.y)/(c-o.x),fs(o,n)&&(g<y||g===y&&(o.x>a.x||o.x===a.x&&P0(a,o)))&&(a=o,y=g)),o=o.next;while(o!==u);return a})(s,e);if(!t)return e;let i=Bd(t,s);return Pn(i,i.next),Pn(t,t.next)}function P0(s,e){return st(s.prev,s,e.prev)<0&&st(e.next,s,s.next)<0}function Eh(s,e,t,i,n){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=(s-t)*n|0)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function I0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function pr(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function L0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Fd(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(s,e)&&(fs(s,e)&&fs(e,s)&&(function(t,i){let n=t,r=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==t);return r})(s,e)&&(st(s.prev,s,e.prev)||st(s,e.prev,e))||no(s,e)&&st(s.prev,s,s.next)>0&&st(e.prev,e,e.next)>0)}function st(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function no(s,e){return s.x===e.x&&s.y===e.y}function Fd(s,e,t,i){let n=ya(st(s,e,t)),r=ya(st(s,e,i)),a=ya(st(t,i,s)),o=ya(st(t,i,e));return n!==r&&a!==o||!(n!==0||!xa(s,t,e))||!(r!==0||!xa(s,i,e))||!(a!==0||!xa(t,s,i))||!(o!==0||!xa(t,e,i))}function xa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ya(s){return s>0?1:s<0?-1:0}function fs(s,e){return st(s.prev,s,s.next)<0?st(s,e,s.next)>=0&&st(s,s.prev,e)>=0:st(s,e,s.prev)<0||st(s,s.next,e)<0}function Bd(s,e){let t=new Ah(s.i,s.x,s.y),i=new Ah(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function od(s,e,t,i){let n=new Ah(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ms(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ah(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var tn=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return .5*i}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];ld(e),hd(i,e);let a=e.length;t.forEach(ld);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,hd(i,t[l]);let o=S0(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ld(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function hd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Rh=class s extends Je{constructor(e=new $a([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:U0,x,M,E,w,R,b=!1;v&&(x=v.getSpacedPoints(h),b=!0,d=!1,M=v.computeFrenetFrames(h,!1),E=new P,w=new P,R=new P),d||(f=0,p=0,g=0,y=0);let T=o.extractPoints(c),C=T.shape,_=T.holes;if(!tn.isClockWise(C)){C=C.reverse();for(let V=0,k=_.length;V<k;V++){let G=_[V];tn.isClockWise(G)&&(_[V]=G.reverse())}}let S=tn.triangulateShape(C,_),A=C;for(let V=0,k=_.length;V<k;V++){let G=_[V];C=C.concat(G)}function I(V,k,G){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(k,G)}let B=C.length,O=S.length;function F(V,k,G){let L,H,Y,ae=V.x-k.x,$=V.y-k.y,ne=G.x-V.x,ie=G.y-V.y,ce=ae*ae+$*$,ge=ae*ie-$*ne;if(Math.abs(ge)>Number.EPSILON){let me=Math.sqrt(ce),Me=Math.sqrt(ne*ne+ie*ie),Ce=k.x-$/me,He=k.y+ae/me,Oe=((G.x-ie/Me-Ce)*ie-(G.y+ne/Me-He)*ne)/(ae*ie-$*ne);L=Ce+ae*Oe-V.x,H=He+$*Oe-V.y;let be=L*L+H*H;if(be<=2)return new he(L,H);Y=Math.sqrt(be/2)}else{let me=!1;ae>Number.EPSILON?ne>Number.EPSILON&&(me=!0):ae<-Number.EPSILON?ne<-Number.EPSILON&&(me=!0):Math.sign($)===Math.sign(ie)&&(me=!0),me?(L=-$,H=ae,Y=Math.sqrt(ce)):(L=ae,H=$,Y=Math.sqrt(ce/2))}return new he(L/Y,H/Y)}let W=[];for(let V=0,k=A.length,G=k-1,L=V+1;V<k;V++,G++,L++)G===k&&(G=0),L===k&&(L=0),W[V]=F(A[V],A[G],A[L]);let q=[],re,z=W.concat();for(let V=0,k=_.length;V<k;V++){let G=_[V];re=[];for(let L=0,H=G.length,Y=H-1,ae=L+1;L<H;L++,Y++,ae++)Y===H&&(Y=0),ae===H&&(ae=0),re[L]=F(G[L],G[Y],G[ae]);q.push(re),z=z.concat(re)}for(let V=0;V<f;V++){let k=V/f,G=p*Math.cos(k*Math.PI/2),L=g*Math.sin(k*Math.PI/2)+y;for(let H=0,Y=A.length;H<Y;H++){let ae=I(A[H],W[H],L);le(ae.x,ae.y,-G)}for(let H=0,Y=_.length;H<Y;H++){let ae=_[H];re=q[H];for(let $=0,ne=ae.length;$<ne;$++){let ie=I(ae[$],re[$],L);le(ie.x,ie.y,-G)}}}let j=g+y;for(let V=0;V<B;V++){let k=d?I(C[V],z[V],j):C[V];b?(w.copy(M.normals[0]).multiplyScalar(k.x),E.copy(M.binormals[0]).multiplyScalar(k.y),R.copy(x[0]).add(w).add(E),le(R.x,R.y,R.z)):le(k.x,k.y,0)}for(let V=1;V<=h;V++)for(let k=0;k<B;k++){let G=d?I(C[k],z[k],j):C[k];b?(w.copy(M.normals[V]).multiplyScalar(G.x),E.copy(M.binormals[V]).multiplyScalar(G.y),R.copy(x[V]).add(w).add(E),le(R.x,R.y,R.z)):le(G.x,G.y,u/h*V)}for(let V=f-1;V>=0;V--){let k=V/f,G=p*Math.cos(k*Math.PI/2),L=g*Math.sin(k*Math.PI/2)+y;for(let H=0,Y=A.length;H<Y;H++){let ae=I(A[H],W[H],L);le(ae.x,ae.y,u+G)}for(let H=0,Y=_.length;H<Y;H++){let ae=_[H];re=q[H];for(let $=0,ne=ae.length;$<ne;$++){let ie=I(ae[$],re[$],L);b?le(ie.x,ie.y+x[h-1].y,x[h-1].x+G):le(ie.x,ie.y,u+G)}}}function ee(V,k){let G=V.length;for(;--G>=0;){let L=G,H=G-1;H<0&&(H=V.length-1);for(let Y=0,ae=h+2*f;Y<ae;Y++){let $=B*Y,ne=B*(Y+1);N(k+L+$,k+H+$,k+H+ne,k+L+ne)}}}function le(V,k,G){l.push(V),l.push(k),l.push(G)}function ue(V,k,G){U(V),U(k),U(G);let L=n.length/3,H=m.generateTopUV(i,n,L-3,L-2,L-1);X(H[0]),X(H[1]),X(H[2])}function N(V,k,G,L){U(V),U(k),U(L),U(k),U(G),U(L);let H=n.length/3,Y=m.generateSideWallUV(i,n,H-6,H-3,H-2,H-1);X(Y[0]),X(Y[1]),X(Y[3]),X(Y[1]),X(Y[2]),X(Y[3])}function U(V){n.push(l[3*V+0]),n.push(l[3*V+1]),n.push(l[3*V+2])}function X(V){r.push(V.x),r.push(V.y)}(function(){let V=n.length/3;if(d){let k=0,G=B*k;for(let L=0;L<O;L++){let H=S[L];ue(H[2]+G,H[1]+G,H[0]+G)}k=h+2*f,G=B*k;for(let L=0;L<O;L++){let H=S[L];ue(H[0]+G,H[1]+G,H[2]+G)}}else{for(let k=0;k<O;k++){let G=S[k];ue(G[2],G[1],G[0])}for(let k=0;k<O;k++){let G=S[k];ue(G[0]+B*h,G[1]+B*h,G[2]+B*h)}}i.addGroup(V,n.length/3-V,0)})(),(function(){let V=n.length/3,k=0;ee(A,k),k+=A.length;for(let G=0,L=_.length;G<L;G++){let H=_[G];ee(H,k),k+=H.length}i.addGroup(V,n.length/3-V,1)})()}this.setAttribute("position",new Re(n,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new qa[n.type]().fromJSON(n)),new s(i,e.options)}},U0={generateTopUV:function(s,e,t,i,n){let r=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new he(r,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(s,e,t,i,n,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],g=e[3*n+2],y=e[3*r],f=e[3*r+1],v=e[3*r+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(d,1-g),new he(y,1-v)]:[new he(o,1-l),new he(h,1-u),new he(p,1-g),new he(f,1-v)]}},Ch=class s extends Cn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ph=class s extends Cn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ih=class s extends Je{constructor(e=.5,t=1,i=32,n=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new P,g=new he;for(let y=0;y<=n;y++){for(let f=0;f<=i;f++){let v=r+f/i*a;p.x=u*Math.cos(v),p.y=u*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<n;y++){let f=y*(i+1);for(let v=0;v<i;v++){let m=v+f,x=m,M=m+i+1,E=m+i+2,w=m+1;o.push(x,M,w),o.push(M,E,w)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Lh=class s extends Je{constructor(e=new $a([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=n.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;tn.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,v=g.length;f<v;f++){let m=g[f];tn.isClockWise(m)===!0&&(g[f]=m.reverse())}let y=tn.triangulateShape(p,g);for(let f=0,v=g.length;f<v;f++){let m=g[f];p=p.concat(m)}for(let f=0,v=p.length;f<v;f++){let m=p[f];n.push(m.x,m.y,0),r.push(0,0,1),a.push(m.x,m.y)}for(let f=0,v=y.length;f<v;f++){let m=y[f],x=m[0]+u,M=m[1]+u,E=m[2]+u;i.push(x,M,E),l+=3}}this.setIndex(i),this.setAttribute("position",new Re(n,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,r=t.length;n<r;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let a=t[e.shapes[n]];i.push(a)}return new s(i,e.curveSegments)}},Qt=class s extends Je{constructor(e=1,t=32,i=16,n=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,p=[],g=[],y=[],f=[];for(let v=0;v<=i;v++){let m=[],x=v/i,M=0;v===0&&a===0?M=.5/t:v===i&&l===Math.PI&&(M=-.5/t);for(let E=0;E<=t;E++){let w=E/t;u.x=-e*Math.cos(n+w*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(n+w*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),f.push(w+M,1-x),m.push(c++)}h.push(m)}for(let v=0;v<i;v++)for(let m=0;m<t;m++){let x=h[v][m+1],M=h[v][m],E=h[v+1][m],w=h[v+1][m+1];(v!==0||a>0)&&p.push(x,M,w),(v!==i-1||l<Math.PI)&&p.push(M,E,w)}this.setIndex(p),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Uh=class s extends Cn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Gt=class s extends Je{constructor(e=1,t=.4,i=12,n=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){let y=g/n*r,f=p/i*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(y),u.y=(e+t*Math.cos(f))*Math.sin(y),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){let y=(n+1)*p+g-1,f=(n+1)*(p-1)+g-1,v=(n+1)*(p-1)+g,m=(n+1)*p+g;a.push(y,f,m),a.push(f,v,m)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Dh=class s extends Je{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new P,d=new P,p=new P,g=new P,y=new P,f=new P,v=new P;for(let x=0;x<=i;++x){let M=x/i*r*Math.PI*2;m(M,r,a,e,p),m(M+.01,r,a,e,g),f.subVectors(g,p),v.addVectors(g,p),y.crossVectors(f,v),v.crossVectors(y,f),y.normalize(),v.normalize();for(let E=0;E<=n;++E){let w=E/n*Math.PI*2,R=-t*Math.cos(w),b=t*Math.sin(w);u.x=p.x+(R*v.x+b*y.x),u.y=p.y+(R*v.y+b*y.y),u.z=p.z+(R*v.z+b*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/i),h.push(E/n)}}for(let x=1;x<=i;x++)for(let M=1;M<=n;M++){let E=(n+1)*(x-1)+(M-1),w=(n+1)*x+(M-1),R=(n+1)*x+M,b=(n+1)*(x-1)+M;o.push(E,w,b),o.push(w,R,b)}function m(x,M,E,w,R){let b=Math.cos(x),T=Math.sin(x),C=E/M*x,_=Math.cos(C);R.x=w*(2+_)*.5*b,R.y=w*(2+_)*T*.5,R.z=w*Math.sin(C)*.5}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Nh=class s extends Je{constructor(e=new ja(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new he,h=new P,u=[],d=[],p=[],g=[];function y(f){h=e.getPointAt(f/t,h);let v=a.normals[f],m=a.binormals[f];for(let x=0;x<=n;x++){let M=x/n*Math.PI*2,E=Math.sin(M),w=-Math.cos(M);l.x=w*v.x+E*m.x,l.y=w*v.y+E*m.y,l.z=w*v.z+E*m.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)y(f);y(r===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let v=0;v<=n;v++)c.x=f/t,c.y=v/n,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let v=1;v<=n;v++){let m=(n+1)*(f-1)+(v-1),x=(n+1)*f+(v-1),M=(n+1)*f+v,E=(n+1)*(f-1)+v;g.push(m,x,E),g.push(x,M,E)}})()})(),this.setIndex(g),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new qa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Oh=class extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new P,r=new P;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,g=d+u.count;p<g;p+=3)for(let y=0;y<3;y++){let f=o.getX(p+y),v=o.getX(p+(y+1)%3);n.fromBufferAttribute(a,f),r.fromBufferAttribute(a,v),cd(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),cd(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function cd(s,e,t){let i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var hv=Object.freeze({__proto__:null,BoxGeometry:gt,CapsuleGeometry:ds,CircleGeometry:wi,ConeGeometry:Sh,CylinderGeometry:Ot,DodecahedronGeometry:wh,EdgesGeometry:Th,ExtrudeGeometry:Rh,IcosahedronGeometry:Ch,LatheGeometry:fi,OctahedronGeometry:Ph,PlaneGeometry:ct,PolyhedronGeometry:Cn,RingGeometry:Ih,ShapeGeometry:Lh,SphereGeometry:Qt,TetrahedronGeometry:Uh,TorusGeometry:Gt,TorusKnotGeometry:Dh,TubeGeometry:Nh,WireframeGeometry:Oh});var Ye=class extends Vi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},an=class extends Ye{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function _a(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function D0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Tr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=r)break t;{let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kh=class extends Tr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ou,endingEnd:ou}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case lu:r=e,o=2*t-i;break;case hu:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lu:a=e,l=2*i-t;break;case hu:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),y=g*g,f=y*g,v=-d*f+2*d*y-d*g,m=(1+d)*f+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-p)*f+(1.5+p)*y+.5*g,M=p*f-p*y;for(let E=0;E!==o;++E)r[E]=v*a[h+E]+m*a[c+E]+x*a[l+E]+M*a[u+E];return r}},Fh=class extends Tr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Bh=class extends Tr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},pi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Aa:t=this.InterpolantFactoryMethodDiscrete;break;case Zl:t=this.InterpolantFactoryMethodLinear;break;case ko:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Zl;case this.InterpolantFactoryMethodSmooth:return ko}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&D0(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ko,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let g=t[h+p];if(g!==t[u+p]||g!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};pi.prototype.TimeBufferType=Float32Array,pi.prototype.ValueBufferType=Float32Array,pi.prototype.DefaultInterpolation=Zl;var Tn=class extends pi{constructor(e,t,i){super(e,t,i)}};Tn.prototype.ValueTypeName="bool",Tn.prototype.ValueBufferType=Array,Tn.prototype.DefaultInterpolation=Aa,Tn.prototype.InterpolantFactoryMethodLinear=void 0,Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var zh=class extends pi{};zh.prototype.ValueTypeName="color";var Hh=class extends pi{};Hh.prototype.ValueTypeName="number";var Vh=class extends Tr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)$t.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ya=class extends pi{InterpolantFactoryMethodLinear(e){return new Vh(this.times,this.values,this.getValueSize(),e)}};Ya.prototype.ValueTypeName="quaternion",Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var En=class extends pi{constructor(e,t,i){super(e,t,i)}};En.prototype.ValueTypeName="string",En.prototype.ValueBufferType=Array,En.prototype.DefaultInterpolation=Aa,En.prototype.InterpolantFactoryMethodLinear=void 0,En.prototype.InterpolantFactoryMethodSmooth=void 0;var Gh=class extends pi{};Gh.prototype.ValueTypeName="vector";var Wh=class{constructor(e,t,i){let n=this,r,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},N0=new Wh,Xh=class{constructor(e){this.manager=e!==void 0?e:N0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(n,r){i.load(e,n,t,r)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Xh.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Za=class extends gs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gl=new Ae,ud=new P,dd=new P,Ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sn,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var pd=new Ae,Jr=new P,vl=new P,jh=class extends Ja{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Jr),vl.copy(i.position),vl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(vl),i.updateMatrixWorld(),n.makeTranslation(-Jr.x,-Jr.y,-Jr.z),pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd)}},In=class extends gs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new jh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},qh=class extends Ja{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ka=class extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new qh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Qa=class extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var cv=new Ae,uv=new Ae,dv=new Ae;var pv=new P,fv=new $t,mv=new P,gv=new P;var vv=new P,xv=new $t,yv=new P,_v=new P;var rc="\\[\\]\\.:\\/",O0=new RegExp("["+rc+"]","g"),xl="[^"+rc+"]",k0="[^"+rc.replace("\\.","")+"]",F0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",xl)+/(WCOD+)?/.source.replace("WCOD",k0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl)+"$"),B0=["material","materials","bones","map"],nt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O0,"")}static parseTrackName(e){let t=F0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);B0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=class{constructor(s,e,t){let i=t||nt.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,i)}getValue(s,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(s,e)}setValue(s,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(s,e)}bind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray],nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mv=new Float32Array(1);var fd=new Ae,ei=class{constructor(e,t,i=0,n=1/0){this.ray=new Rn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fd),this}intersectObject(e,t=!0,i=[]){return $h(e,this,i,t),i.sort(md),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)$h(e[n],this,i,t);return i.sort(md),i}};function md(s,e){return s.distance-e.distance}function $h(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)$h(r[a],e,t,!0)}}var bv=new he;var Sv=new P,wv=new P;var Tv=new P;var Ev=new P,Av=new Ae,Rv=new Ae;var Cv=new P,Pv=new we,Iv=new we;var Lv=new P,Uv=new P,Dv=new P;var Nv=new P,Ov=new os;var kv=new Yt;var Fv=new P;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var sc={x:.86,z:.52},ac={x:.245,z:.172};var Ve=-.45,Vv=new P(0,Ve+.12,-2.72),tt=-2.8;function ys(s,e,t,i){let n=document.createElement("canvas");n.width=s,n.height=e,t(n.getContext("2d"),s,e);let r=new Lt(n);return r.colorSpace=lt,r.anisotropy=8,i&&(r.wrapS=r.wrapT=is,r.repeat.set(...i)),r}var so=s=>()=>(s=s*16807%2147483647)/2147483647;function Rr(s=5,e=[112,76,46]){return ys(1024,1024,t=>{let i=so(s);for(let n=0;n<5;n++){let r=n*205,a=i()*22-11;t.fillStyle=`rgb(${e[0]+a},${e[1]+a*.8},${e[2]+a*.6})`,t.fillRect(r,0,205,1024);for(let o=0;o<90;o++){let l=r+i()*205,c=4+i()*10,h=i()*6,u=.5+i()*2;t.strokeStyle=`rgba(${i()<.6?"48,26,12":"160,112,72"},${.06+i()*.14})`,t.lineWidth=u,t.beginPath();for(let d=0;d<=1024;d+=32)t.lineTo(l+Math.sin(d/170+h)*c,d);t.stroke()}t.fillStyle="rgba(24,12,5,.55)",t.fillRect(r,0,2.5,1024)}},[1,1])}var z0=()=>ys(512,512,s=>{let e=so(11);s.fillStyle="#3a2a22",s.fillRect(0,0,512,512);for(let t=0;t<16;t++)for(let i=-1;i<8;i++){let n=i*64+t%2*32,r=t*32,a=e()*34-17;s.fillStyle=`rgb(${112+a},${80+a*.7},${66+a*.6})`,s.fillRect(n+2,r+2,60,28);for(let o=0;o<14;o++)s.fillStyle=`rgba(${e()<.5?"30,14,8":"190,120,84"},${e()*.16})`,s.fillRect(n+2+e()*56,r+2+e()*26,2+e()*8,1+e()*3)}},[1,1]),H0=()=>ys(1024,640,(s,e,t)=>{let i=["#5f1f20","#1f2b40","#a5854f","#b9ab8c","#3a5040","#83432a"];s.fillStyle=i[0],s.fillRect(0,0,e,t);let n=(a,o,l,c,h)=>{s.fillStyle=h;for(let u=0;u<c;u++){let d=l*(c-u),p=l;s.fillRect(a-d,o-(u+1)*p,d*2,p),s.fillRect(a-d,o+u*p,d*2,p)}};s.fillStyle=i[1],s.fillRect(34,34,e-68,t-68),s.fillStyle=i[0],s.fillRect(84,84,e-168,t-168);for(let a=60;a<e-40;a+=48)for(let o of[59,t-59])n(a,o,6,3,i[(a/48|0)%2?2:3]);for(let a=108;a<t-90;a+=48)for(let o of[59,e-59])n(o,a,6,3,i[(a/48|0)%2?2:3]);for(let a=0;a<3;a++){let o=e*(.24+a*.26);[[12,i[1]],[10,i[2]],[8,i[5]],[6,i[3]],[4,i[4]],[2,i[2]]].forEach(([l,c])=>n(o,t/2,14,l,c))}for(let a=0;a<4;a++)for(let o of[128,t-128])n(e*(.11+a*.26),o,7,4,i[a%2?2:4]);let r=so(3);for(let a=0;a<t;a+=2)s.fillStyle=`rgba(0,0,0,${.03+r()*.09})`,s.fillRect(0,a,e,1)}),zd=`
float h2(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n2(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
`,ro=class{constructor(e,t){this.group=new ht,e.add(this.group);let i=C=>new Ye({roughness:.85,fog:!1,...C}),n=(C,_,S,A,I,B,O,F=!1)=>{let W=new xe(new gt(C,_,S),O);return W.position.set(A,I,B),W.castShadow=F,W.receiveShadow=!0,this.group.add(W),W},r=Rr(17,[84,56,36]);r.repeat.set(5,5);let a=new xe(new ct(10,8),i({map:r,roughness:.55}));a.rotation.x=-Math.PI/2,a.position.set(0,Ve,0),this.group.add(a);let o=new xe(new ct(10,4),i({color:"#5a4636",roughness:.95}));o.position.set(0,Ve+2,tt),this.group.add(o);let l=i({color:"#3a2819"});for(let C of[-1,1])n(4.2,.62,.03,C*2.75,Ve+.31,tt+.015,l),n(4.2,.03,.05,C*2.75,Ve+.635,tt+.025,l);let c=Rr();c.repeat.set(1.3,1.3);let h=i({map:c,roughness:.5,envMap:t,envMapIntensity:.25,fog:!0}),u=i({color:"#3c2413",roughness:.6}),d=sc.x*2+.1,p=sc.z*2+.1,g=new xe(new ct(d,p),h);g.rotation.x=-Math.PI/2,g.position.y=-5e-4,g.receiveShadow=!0,this.group.add(g),n(d+.012,.045,p+.012,0,-.0235,0,u);for(let C of[-1,1])for(let _ of[-1,1])n(.05,-Ve,.05,C*(d/2-.07),Ve/2-.02,_*(p/2-.07),u);let y=new xe(new ct(ac.x*2,ac.z*2),i({map:ys(1024,720,(C,_,S)=>{C.fillStyle="#2b3a30",C.fillRect(0,0,_,S);let A=so(9);for(let I=0;I<5200;I++)C.fillStyle=`rgba(${A()<.5?"0,0,0":"150,190,160"},${A()*.05})`,C.beginPath(),C.arc(A()*_,A()*S,1+A()*4,0,7),C.fill();C.strokeStyle="#b08d46",C.lineWidth=4,C.strokeRect(22,22,_-44,S-44),C.lineWidth=1.5,C.strokeRect(31,31,_-62,S-62)}),roughness:.62,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,fog:!0}));y.rotation.x=-Math.PI/2,y.position.y=0,y.receiveShadow=!0,this.group.add(y),this.pad=y;let f=new xe(new ct(1.7,.8),i({map:H0(),roughness:1}));f.rotation.x=-Math.PI/2,f.position.set(0,Ve+.004,-1.86),this.group.add(f);let v=z0(),m=i({map:v}),x=i({map:v,color:"#4a3a32"}),M=i({color:"#8d8175",roughness:.8}),E=i({color:"#4d301a",roughness:.6});n(.3,.86,.26,-.5,Ve+.43,tt+.13,m),n(.3,.86,.26,.5,Ve+.43,tt+.13,m),n(.7,.24,.26,0,Ve+.74,tt+.13,m),n(1.44,.06,.36,0,Ve+.89,tt+.17,E),n(1.1,2.4,.16,0,Ve+2.12,tt+.08,m),n(1.4,.05,.56,0,Ve+.025,tt+.28,M),n(.72,.62,.01,0,Ve+.31,tt+.012,x),n(.7,.02,.26,0,Ve+.06,tt+.13,x);let w=new Ye({color:"#c79a45",metalness:.9,roughness:.3,envMap:t,fog:!1}),R=new xe(new Ot(.07,.07,.04,32).rotateX(Math.PI/2),E);R.position.set(0,Ve+.995,tt+.17),this.group.add(R);let b=new xe(new wi(.058,32),i({color:"#efe6d2"}));b.position.set(0,Ve+.995,tt+.192),this.group.add(b);let T=C=>{let _=new dt,S=new xe(new ct(.005,C).translate(0,C/2,0),i({color:"#2a1c12"}));return S.position.z=.002,_.add(S),_.position.copy(b.position),this.group.add(_),_};this.hands=[T(.032),T(.047)],this.flames=[];for(let C of[-.5,.5]){let _=new xe(new fi([[.001,0],[.04,0],[.04,.008],[.012,.02],[.009,.1],[.02,.11],[.02,.118],[.001,.118]].map(([A,I])=>new he(A,I)),20),w);_.position.set(C,Ve+.92,tt+.17),this.group.add(_);let S=new xe(new Ot(.011,.012,.12,14),i({color:"#f0e6d0",roughness:.6}));S.position.set(C,Ve+1.1,tt+.17),this.group.add(S)}this.logs(i),this.fire(),this.light=new In("#ff9a55",0,6,.75),this.light.position.set(0,Ve+.5,tt+.7),e.add(this.light),this.lit=!0,this.heat=1,this.t=0,this.flicker=1,this.body=[this.group.children.find(C=>C.material===x),...this.flames]}logs(e){let t=e({color:"#2a1a10",roughness:1});this.glow={value:1},this.time={value:0},t.onBeforeCompile=a=>{Object.assign(a.uniforms,{uGlow:this.glow,uTime:this.time}),a.vertexShader=a.vertexShader.replace("void main() {",`varying vec3 vAt;
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
vAt = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("void main() {",`varying vec3 vAt; uniform float uGlow, uTime; ${zd}void main() {`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float c = fbm(vAt.xy * 34.0 + vAt.zx * 21.0); float e = smoothstep(0.56, 0.74, c) * (0.6 + 0.4 * sin(uTime * 1.7 + c * 30.0)) + 0.35 * smoothstep(0.02, -0.04, vAt.y - ${(Ve+.12).toFixed(3)});
          totalEmissiveRadiance += vec3(1.0, 0.27, 0.04) * e * uGlow * 0.6; }`)};let i=(a,o,l,c,h,u,d)=>{let p=new xe(new Ot(o,o*1.08,a,14).rotateZ(Math.PI/2),t);p.position.set(l,c,h),p.rotation.set(0,u,d),this.group.add(p)},n=Ve+.1;i(.44,.035,-.01,n,tt+.2,.05,0),i(.42,.032,.02,n,tt+.1,-.08,0),i(.4,.03,0,n+.055,tt+.15,.35,.12),i(.33,.026,.03,n+.09,tt+.14,-.5,-.2);let r=new xe(new Qt(.27,24,8,0,Math.PI*2,0,Math.PI/2),e({color:"#3a322c",roughness:1}));r.scale.set(1,.1,.38),r.position.set(0,Ve+.065,tt+.15),this.group.add(r)}fire(){this.uni={uTime:this.time,uHeat:{value:1}};let e=i=>new Jt({transparent:!0,depthWrite:!1,blending:Ln,side:Ti,uniforms:{...this.uni,uSeed:{value:i}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime, uHeat, uSeed; ${zd}
        void main() {
          vec2 p = vec2((vUv.x - 0.5) * 2.0, vUv.y);
          float t = uTime * 1.25 + uSeed * 13.0;
          // (drawn sideways by the air, more the higher)
          p.x += (fbm(vec2(p.x * 1.4 + uSeed, p.y * 1.8 - t * 1.1)) - 0.47) * 1.0 * p.y;
          float tongues = fbm(vec2(p.x * 4.6 + uSeed * 5.0, p.y * 2.1 - t * 1.7));
          float tall = (0.5 + 0.55 * n2(vec2(p.x * 2.6 + uSeed * 3.0, t * 0.6))) * uHeat * (1.0 - 0.55 * p.x * p.x);
          float up = p.y / max(tall, 0.05), side = abs(p.x) / (0.92 - 0.5 * up);
          float f = (1.0 - smoothstep(0.35, 1.0, side)) * (1.15 - up) - (0.62 - tongues) * (0.5 + 1.5 * up);
          f = smoothstep(0.05, 0.85, f) * smoothstep(0.0, 0.06, p.y) * step(up, 1.4);
          vec3 c = mix(vec3(0.75, 0.07, 0.005), vec3(1.0, 0.36, 0.05), smoothstep(0.05, 0.45, f));
          c = mix(c, vec3(1.0, 0.8, 0.36), smoothstep(0.45, 0.95, f));
          gl_FragColor = vec4(c, smoothstep(0.0, 0.5, f) * 0.5 * uHeat);
          #include <colorspace_fragment>
        }`});for(let[i,n,r,a,o]of[[.2,.5,.46,1,0],[.15,.56,.52,2.3,0],[.1,.5,.48,4.1,0],[.15,.4,.4,6.2,.6],[.15,.4,.4,8.4,-.6]]){let l=new xe(new ct(n,r).translate(0,r/2,0),e(a));l.position.set(0,Ve+.075,tt+i),l.rotation.y=o,l.renderOrder=2,this.group.add(l),this.flames.push(l)}let t=new xe(new ct(2.6,1.5).rotateX(-Math.PI/2),new mt({map:ys(128,128,i=>{let n=i.createRadialGradient(64,20,0,64,20,64);n.addColorStop(0,"rgba(255,150,60,.55)"),n.addColorStop(1,"rgba(255,90,20,0)"),i.fillStyle=n,i.fillRect(0,0,128,128)}),transparent:!0,blending:Ln,depthWrite:!1,fog:!1}));t.position.set(0,Ve+.008,tt+.95),t.renderOrder=1,t.raycast=()=>{},this.group.add(t),this.halo=t}hit(e){let t=new ei(e.origin,e.direction),i=t.intersectObjects(this.body)[0];return i?i.distance:null}poke(e){if(!this.lit){this.lit=!0;return}this.gust=1;for(let t of[-.1,0,.1])e.puff(t,Ve+.2,tt+.18,14,{color:"#ffb04a",speed:.09,rise:.42,up:-.05,life:1.4,wide:.1})}update(e,t,i,n){this.t+=e,this.time.value=this.t%1e3,this.gust=Math.max(0,(this.gust||0)-e*.7),this.heat+=((this.lit?1:0)-this.heat)*(1-Math.exp(-e*1.4));let r=Math.sin(this.t*9.1)*.4+Math.sin(this.t*5.3+1)*.6+Math.sin(this.t*14.7+2)*.3;this.flicker+=(1+r*.12+(Math.random()-.5)*.14-this.flicker)*(1-Math.exp(-e*14));let a=this.heat*(1+this.gust*.35);this.uni.uHeat.value=a,this.glow.value=.12+.88*this.heat,this.light.intensity=(t?1.9:1.25)*a*this.flicker,this.halo.material.opacity=.3*a*this.flicker;for(let o of this.flames)o.visible=this.heat>.02;n&&this.heat>.5&&Math.random()<e*5&&i.puff((Math.random()-.5)*.24,Ve+.2,tt+.2,1,{color:"#ffa640",speed:.05,rise:.4,up:.02,life:1.6,wide:.05}),n&&!((this.tick=(this.tick||0)+1)%60)&&this.clock(),this.set||(this.set=!0,this.clock())}clock(){let e=new Date,t=e.getMinutes()+e.getSeconds()/60;this.hands[0].rotation.z=-(e.getHours()%12+t/60)*(Math.PI/6),this.hands[1].rotation.z=-t*(Math.PI/30)}};function Hd(s){let e=new Sr,t=a=>new mt({color:a,side:Ti});e.add(new xe(new gt(10,6,10),new mt({color:"#2a1d13",side:Yh})));let i=(a,o,l,c,h,u,d)=>{let p=t(l);p.color.multiplyScalar(c);let g=new xe(new ct(a,o),p);g.position.set(h,u,d),g.lookAt(0,0,0),e.add(g)};i(1.2,2,"#dfe9ff",5,-4,1.6,1.5),i(1.2,2,"#dfe9ff",5,-4,1.6,3),i(1.4,1.4,"#ffe3b0",9,.6,2.9,-.6),i(1.6,1,"#ff7a2a",5,0,-.6,-4.5),i(8,8,"#3a2718",1,0,-2.8,.01);let n=new br(s),r=n.fromScene(e,.03).texture;return n.dispose(),e.traverse(a=>{a.geometry&&(a.geometry.dispose(),a.material.dispose())}),r}var oc=.004166666666666667,ao=class{constructor({n:e=18,depth:t=1.6,hz:i=2.6,damping:n=2.2,viscosity:r=.03,rim:a=.42}={}){this.n=e,this.dx=2/e,this.rim=a,this.damping=n,this.viscosity=r;let o=Math.tanh(1.841*t),l=2*Math.PI*i;this.g=l*l/(1.841*o),this.H=o/1.841;let c=e*e;this.h=new Float64Array(c),this.mask=new Uint8Array(c),this.u=new Float64Array((e+1)*e),this.v=new Float64Array(e*(e+1)),this.openU=new Uint8Array(this.u.length),this.openV=new Uint8Array(this.v.length),this.u2=new Float64Array(this.u.length),this.v2=new Float64Array(this.v.length),this.cells=0;for(let h=0;h<e;h++)for(let u=0;u<e;u++){let d=-1+(u+.5)*this.dx,p=-1+(h+.5)*this.dx;d*d+p*p<1&&(this.mask[h*e+u]=1,this.cells++)}for(let h=0;h<e;h++)for(let u=1;u<e;u++)this.openU[h*(e+1)+u]=this.mask[h*e+u]&this.mask[h*e+u-1];for(let h=1;h<e;h++)for(let u=0;u<e;u++)this.openV[h*e+u]=this.mask[h*e+u]&this.mask[(h-1)*e+u];this.lost=0,this.left=0,this.calm=!0}step(e,t=0,i=0,n=0){if((t||i||n)&&(this.calm=!1),this.calm)return[];this.left=Math.min(this.left+e,.1);let r=[];for(;this.left>=oc;)this.left-=oc,this.sub(oc,t,i,n,r);return!t&&!i&&!n&&this.energy()<4e-5&&Math.abs(this.lost)<.001&&(this.calm=!0,this.u.fill(0),this.v.fill(0),this.h.fill(0),this.lost=0),r}sub(e,t,i,n,r){let{n:a,dx:o,h:l,u:c,v:h,openU:u,openV:d,mask:p,u2:g,v2:y,H:f}=this,v=this.g*Math.max(.15,Math.min(2.5,1+n)),m=Math.exp(-this.damping*e),x=this.viscosity*e/(o*o),M=a+1;for(let T=0;T<a;T++)for(let C=1;C<a;C++){let _=T*M+C;if(!u[_]){g[_]=0;continue}let S=T>0&&u[_-M]?c[_-M]:c[_],A=T<a-1&&u[_+M]?c[_+M]:c[_];g[_]=(c[_]+x*(c[_-1]+c[_+1]+S+A-4*c[_])-e*(v*(l[T*a+C]-l[T*a+C-1])/o+t))*m}for(let T=1;T<a;T++)for(let C=0;C<a;C++){let _=T*a+C;if(!d[_]){y[_]=0;continue}let S=C>0&&d[_-1]?h[_-1]:h[_],A=C<a-1&&d[_+1]?h[_+1]:h[_];y[_]=(h[_]+x*(h[_-a]+h[_+a]+S+A-4*h[_])-e*(v*(l[_]-l[_-a])/o+i))*m}this.u=g,this.u2=c,this.v=y,this.v2=h;let E=e/o,w=.24,R=(T,C,_)=>{let S=T>0?C:_,A=f+l[S];return Math.max(-w*A,Math.min(w*A,E*T*A))},b=this.dh=this.dh||new Float64Array(a*a);b.fill(0);for(let T=0;T<a;T++)for(let C=1;C<a;C++){let _=T*M+C;if(!u[_])continue;let S=T*a+C-1,A=R(g[_],S,S+1);b[S]-=A,b[S+1]+=A}for(let T=1;T<a;T++)for(let C=0;C<a;C++){let _=T*a+C;if(!d[_])continue;let S=_-a,A=R(y[_],S,_);b[S]-=A,b[_]+=A}for(let T=0;T<l.length;T++)if(p[T]&&(l[T]+=b[T],l[T]>this.rim)){let C=-1+(T%a+.5)*o,_=-1+(Math.floor(T/a)+.5)*o,S=Math.hypot(C,_);S>.72&&(r.push({x:C/S,z:_/S,amount:l[T]-this.rim}),this.lost+=l[T]-this.rim,l[T]=this.rim)}if(this.lost>0){let T=Math.min(this.lost,this.cells*.05*e);this.lost-=T;for(let C=0;C<l.length;C++)p[C]&&(l[C]+=T/this.cells)}}drop(e,t,i,n=.3){let{n:r,dx:a,h:o,mask:l,H:c}=this,h=0,u=new Float64Array(o.length);for(let d=0;d<o.length;d++)if(l[d]){let p=-1+(d%r+.5)*a-e,g=-1+(Math.floor(d/r)+.5)*a-t,y=(p*p+g*g)/(n*n);u[d]=i*Math.exp(-y)*(1-y),h+=u[d]}for(let d=0;d<o.length;d++)l[d]&&(o[d]=Math.max(-.9*c,o[d]-u[d]+h/this.cells));this.calm=!1}energy(){let e=0,{h:t,u:i,v:n,g:r,H:a}=this;for(let o=0;o<t.length;o++)this.mask[o]&&(e+=r*t[o]*t[o]);for(let o of i)e+=a*o*o;for(let o of n)e+=a*o*o;return e/(this.cells*r)}volume(){let e=0;for(let t=0;t<this.h.length;t++)this.mask[t]&&(e+=this.h[t]);return e+this.lost}at(e,t){let{n:i,dx:n,h:r,mask:a}=this,o=Math.hypot(e,t),l=o>.93?.93/o:1,c=(e*l+1)/n-.5,h=(t*l+1)/n-.5,u=Math.floor(c),d=Math.floor(h),p=0,g=0;for(let y=0;y<2;y++)for(let f=0;f<2;f++){let v=u+f,m=d+y;if(v<0||m<0||v>=i||m>=i||!a[m*i+v])continue;let x=(f?c-u:1-c+u)*(y?h-d:1-h+d)+1e-6;p+=r[m*i+v]*x,g+=x}return g?p/g:0}},oo=class{constructor(e,{scale:t=.085,most:i=.42}={}){this.g=e,this.scale=t,this.most=i,this.p=null,this.v=[0,0,0],this.s=[0,0,0]}move(e,t){let i=[0,0,0];if(!this.p||t<=0)return this.p=e,{ax:0,az:0,lift:0};let n=1-Math.exp(-t/.05),r=Math.hypot(e[0]-this.p[0],e[1]-this.p[1],e[2]-this.p[2])>60;for(let h=0;h<3;h++){let u=r?0:(e[h]-this.p[h])/t,d=this.s[h]+(u-this.s[h])*n;i[h]=(d-this.s[h])/t*this.scale,this.s[h]=d}this.p=e;let a=this.most*this.g,o=Math.hypot(i[0],i[2]),l=o>0?a*Math.tanh(o/a)/o:0,c=this.g*.002;return{ax:o<c?0:i[0]*l,az:o<c?0:i[2]*l,lift:Math.abs(i[1])<c?0:.8*Math.tanh(i[1]/this.g)}}};var lc=null;function V0(){if(lc)return lc;let s=96,e=document.createElement("canvas");e.width=e.height=s;let t=e.getContext("2d",{willReadFrequently:!0}),i=t.createImageData(s,s),n=(a,o)=>{let l=Math.sin(a*127.1+o*311.7)*43758.5453;return l-Math.floor(l)},r=(a,o)=>{let l=Math.floor(a),c=Math.floor(o),h=a-l,u=o-c,d=h*h*(3-2*h),p=u*u*(3-2*u);return(n(l,c)*(1-d)+n(l+1,c)*d)*(1-p)+(n(l,c+1)*(1-d)+n(l+1,c+1)*d)*p};for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=o/s*2-1,c=a/s*2-1,h=Math.min(1,Math.hypot(l,c)),u=r(l*1.6+5,c*1.6+9),d=.55*r(l*2.6+u*2,c*2.2+u)+.3*r(l*5.2+u*3,c*4.6)+.15*r(l*11,c*10),p=Math.max(0,1-h*h)**1.6*Math.max(0,d*1.9-.42);i.data.set([255,255,255,Math.round(255*Math.min(1,p))],(a*s+o)*4)}return t.putImageData(i,0,0),lc=new Lt(e)}var Cr=class{constructor(e,t,{wide:i=.045,rise:n=.5,count:r=13,size:a=.12}={}){Object.assign(this,{y:t,wide:i,rise:n,size:a,strength:1}),this.puffs=Array.from({length:r},(o,l)=>{let c=new za(new ls({map:V0(),color:"#fff6ea",transparent:!0,opacity:0,depthWrite:!1,fog:!1}));c.renderOrder=5,c.raycast=()=>{},e.add(c);let h={s:c,age:l/r};return this.born(h),h})}born(e){let t=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*this.wide;Object.assign(e,{off:[Math.cos(t)*i,Math.sin(t)*i],lag:[0,0],turn:Math.random()*6.28,spin:(Math.random()-.5)*1.6,life:2.2+Math.random()*1.6})}update(e,t=0,i=0){for(let n of this.puffs){n.age+=e/n.life,n.age>=1&&(n.age%=1,this.born(n)),n.lag[0]=Math.max(-.7,Math.min(.7,n.lag[0]-t)),n.lag[1]=Math.max(-.7,Math.min(.7,n.lag[1]-i));let r=n.age,a=.05*r*r,o=n.s;o.position.set(n.off[0]*(1-r*.6)+Math.sin(n.turn+r*6)*a+n.lag[0],this.y+r*this.rise,n.off[1]*(1-r*.6)+Math.cos(n.turn*1.3+r*5)*a+n.lag[1]),o.scale.set(this.size*(.6+r*1.5),this.size*(.8+r*2.1),1),o.material.rotation=n.turn+r*n.spin,o.material.opacity=.34*this.strength*Math.sin(Math.PI*r**.7)*(1-.35*r)}}};var G0=[[.06,0],[.084,.01],[.1,.042],[.104,.082],[.094,.126],[.075,.168],[.065,.204],[.067,.236],[.08,.28],[.098,.324],[.113,.368]],W0=new wr(G0.map(([s,e])=>new he(s,e))),bs=W0.getPoints(60),_s=.25,X0=.006,Ms=.026,cc=.312,Un=.017,hc=.364,Ss=s=>{let e=1;for(;e<bs.length-1&&bs[e].y<s;)e++;let t=bs[e-1],i=bs[e],n=Math.max(0,Math.min(1,(s-t.y)/(i.y-t.y||1)));return t.x+(i.x-t.x)*n-X0},j0=Ss(cc),mi=56,ws=16,Pr=9,q0=5,Vd=s=>s*s*(3-2*s);function $0(s){let e=mi+1,t=e*(ws+1)+1+mi*Pr,i=new Float32Array(t*3),n=[];for(let h=0;h<ws;h++)for(let u=0;u<mi;u++){let d=h*e+u;n.push(d,d+e,d+1,d+1,d+e,d+e+1)}let r=e*(ws+1),a=(h,u)=>r+1+(h-1)*mi+u%mi;for(let h=0;h<mi;h++)n.push(r,a(1,h+1),a(1,h));for(let h=1;h<Pr;h++)for(let u=0;u<mi;u++)n.push(a(h,u),a(h,u+1),a(h+1,u),a(h,u+1),a(h+1,u+1),a(h+1,u));let o=new Je;o.setAttribute("position",new at(i,3).setUsage(xs)),o.setIndex(n);let l=new an({color:"#7a1604",roughness:.1,specularIntensity:.6,envMap:s,envMapIntensity:.6,side:Ti});l.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("void main() {",`varying vec3 vTea, vUp;
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
vTea = position; vUp = objectNormal;`),h.fragmentShader=h.fragmentShader.replace("void main() {",`varying vec3 vTea, vUp;
void main() {`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
    { float face = abs(dot(normalize(vViewPosition), normal));
      float way = 0.02 + 0.21 * face * smoothstep(0.0, 0.1, length(vTea.xz) * 0.35 + (0.33 - vTea.y) * 0.5);
      // (from above: down to the bottom, at the edge only as far as the glass)
      float above = smoothstep(0.6, 0.9, abs(normalize(vUp).y)) * step(0.08, vTea.y);
      way = mix(way, 0.035 + 0.17 * (1.0 - smoothstep(0.35, 1.0, length(vTea.xz) / 0.088)), above);
      vec3 through = exp(-vec3(4.6, 18.0, 52.0) * (way + 0.016));
      diffuseColor.rgb = mix(diffuseColor.rgb, through, 0.45);
      totalEmissiveRadiance += through * vec3(0.42, 0.32, 0.26) * (0.3 + 0.7 * pow(1.0 - face, 1.5)); }`)};let c=new xe(o,l);return c.castShadow=!0,c.frustumCulled=!1,c}function Y0(){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d");for(let[n,r,a,o]of[[64,64,60,.5],[70,70,26,.75],[60,74,12,.6]]){let l=e.createRadialGradient(n,r,0,n,r,a);l.addColorStop(0,`rgba(255,150,60,${o})`),l.addColorStop(.45,`rgba(214,84,18,${o*.5})`),l.addColorStop(1,"rgba(150,30,0,0)"),e.fillStyle=l,e.fillRect(0,0,128,128)}e.strokeStyle="rgba(255,214,150,.75)",e.lineWidth=2.2,e.filter="blur(1.5px)",e.beginPath(),e.arc(66,66,34,.2,1.9),e.stroke(),e.beginPath(),e.arc(58,60,22,.1,1.6),e.stroke();let t=new Lt(s);t.colorSpace=lt;let i=new xe(new ct(.3,.3).rotateX(-Math.PI/2),new mt({map:t,transparent:!0,blending:Ln,depthWrite:!1,opacity:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return i.renderOrder=1,i.raycast=()=>{},i}var Ts=class{constructor(e,t,i,n,r=0){this.scene=e,this.home=new P(i,0,n);let a=this.group=new ht,o=this.cup=new ht;a.position.copy(this.home),a.scale.setScalar(_s),a.rotation.y=r,e.add(a),a.add(o);let l=v=>new an({envMap:t,...v}),c=(v,m,x=0,M=0,E=0,w=a)=>{let R=new xe(v,m);return R.position.set(x,M,E),R.castShadow=R.receiveShadow=!0,w.add(R),R},h=l({color:"#f6f2ea",roughness:.28,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:.5});c(new fi([[.001,0],[.1,0],[.16,.012],[.205,.034],[.21,.04],[.2,.038],[.15,.022],[.1,.016],[.001,.016]].map(([v,m])=>new he(v,m)),64),h);for(let[v,m,x,M,E]of[[.188,.0345,.0045,"#a3201c",0],[.173,.0298,.0016,"#d9a441",.8],[.205,.0392,.0022,"#d9a441",.8]])c(new Gt(v,x,6,72).rotateX(Math.PI/2),l({color:M,roughness:.3,metalness:E}),0,m).castShadow=!1;let u=new an({color:"#f4fbff",roughness:.02,metalness:0,clearcoat:1,clearcoatRoughness:.02,envMap:t,envMapIntensity:1.5,transparent:!0,side:Ti,depthWrite:!1});u.onBeforeCompile=v=>{v.fragmentShader=v.fragmentShader.replace("#include <opaque_fragment>",`diffuseColor.a = mix(0.05, 0.8, pow(1.0 - abs(dot(normalize(vViewPosition), normal)), 2.4));
#include <opaque_fragment>`)};let d=c(new fi([new he(.001,0),...bs],64),u,0,Un,0,o);d.renderOrder=3,d.castShadow=!1;let p=l({color:"#ffffff",roughness:.05,clearcoat:1,transparent:!0,opacity:.7,depthWrite:!1});for(let[v,m,x]of[[.1115,.368,.0036],[.07,.006,.0046]]){let M=c(new Gt(v,x,8,64).rotateX(Math.PI/2),p,0,Un+m,0,o);M.renderOrder=4,M.castShadow=!1}let g=l({color:"#dfe5ea",metalness:1,roughness:.16,envMapIntensity:1.2});c(new ds(.0062,.16,4,8),g,.02,.041,.152).rotation.set(0,.1,Math.PI/2-.05),c(new Qt(.024,16,10),g,-.085,.039,.145).scale.set(1.5,.4,.9);let f=l({color:"#ffffff",roughness:.85,envMapIntensity:.2});for(let[v,m,x]of[[.145,.045,.3],[.15,-.03,.9]])c(new gt(.036,.024,.026),f,v,.034,m).rotation.y=x;this.sim=new ao({rim:.5,n:20}),this.carry=new oo(this.sim.g),this.tea=$0(t),this.tea.position.y=Un,o.add(this.tea),this.spot=Y0(),this.spot.position.set(.11,.044,.1),a.add(this.spot),this.steam=new Cr(a,Un+cc+.03),this.drops=[],this.bead=new Qt(.0027,8,6),this.stream=new xe(new Ot(.009,.006,1,10,1,!0).translate(0,.5,0),this.tea.material),this.stream.visible=!1,a.add(this.stream),this.left=1,this.shown=-1,this.lift=0,this.held=null,this.sip=-1,this.filling=-1,this.was=this.home.clone(),this.lean=[0,0],this.P=new P,this.pour(),this.body=new xe(new Ot(.23,.23,.42,12),new mt({visible:!1})),this.body.position.y=.21,a.add(this.body)}get level(){return Ms+.03+(cc-Ms-.03)*this.left}pour(){let e=this.tea,t=this.sim,i=this.level,n=Ss(i),r=e.geometry.attributes.position,a=r.array,o=Ms+.008,l=(h,u)=>Math.max(o,Math.min(hc,i+t.at(h,u)*n)),c=0;for(let h=0;h<=ws;h++)for(let u=0;u<=mi;u++){let d=u/mi*Math.PI*2,p=Math.cos(d),g=Math.sin(d),y=Ms+(l(p,g)-Ms)*(h/ws),f=Math.max(.001,Ss(y));a[c++]=p*f,a[c++]=y,a[c++]=g*f}a[c++]=0,a[c++]=l(0,0),a[c++]=0;for(let h=1;h<=Pr;h++)for(let u=0;u<mi;u++){let d=u/mi*Math.PI*2,p=h/Pr,g=Math.cos(d),y=Math.sin(d),f=l(g*p,y*p),v=h===Pr?l(g,y):f,m=Ss(l(g,y))*p;a[c++]=g*m,a[c++]=v+(h===Pr?.002:0),a[c++]=y*m}r.needsUpdate=!0,e.geometry.computeVertexNormals(),this.shown=this.left}hit(e){let t=new ei(e.origin,e.direction);this.body.updateWorldMatrix(!0,!1),this.body.material.visible=!0;let i=t.intersectObject(this.body)[0];return this.body.material.visible=!1,i?i.distance:null}hold(e,t){this.held=this.held||new P,this.held.set(e,0,t)}drop(e,t){this.held=null,this.home.set(e,0,t)}drink(){return this.held||this.sip>=0||this.filling>=0?null:this.left<.08?(this.filling=0,"pour"):(this.sip=0,"sip")}jolt(e=1){this.sim.drop((Math.random()-.5)*.8,(Math.random()-.5)*.8,.02*e,.4)}update(e){let t=this.group,i=this.sim,n=this.held?1:0,r=0;if(this.sip>=0){this.sip+=e/1.9;let m=this.sip,x=m<.3?Vd(m/.3):m>.72?Vd(Math.max(0,(1-m)/.28)):1;r=m>.3&&m<.72?Math.sin((m-.3)/.42*Math.PI):0,r>0&&(this.left=Math.max(0,this.left-e/(1.9*.42)/q0)),this.cup.position.set(0,x*.42,x*.3),m>=1&&(this.sip=-1,this.cup.position.set(0,0,0),this.left<.02&&(this.left=0))}if(this.filling>=0){this.filling+=e/2.6;let m=this.filling>.06&&this.filling<.94;if(this.stream.visible=m,m){let x=Un+this.level;this.stream.position.set(0,x,0),this.stream.scale.y=1.6,this.left=Math.min(1,this.left+e/(2.6*.88)),Math.random()<e*22&&i.drop((Math.random()-.5)*.25,(Math.random()-.5)*.25,.05,.25)}this.filling>=1&&(this.filling=-1,this.left=1)}this.lift+=(n-this.lift)*(1-Math.exp(-e*10));let a=this.held||this.home,o=1-Math.exp(-e*16);t.position.x+=(a.x-t.position.x)*o,t.position.z+=(a.z-t.position.z)*o,t.position.y=this.lift*.02;let l=r*.75,c=Math.cos(t.rotation.y),h=Math.sin(t.rotation.y);this.cup.rotation.set(l,0,0),this.cup.getWorldPosition(this.P);let u=j0*_s,d=this.carry.move([this.P.x/u,this.P.y/u,this.P.z/u],e),p=i.calm,g=l>.01?i.g*Math.tan(Math.min(.5,l*.62)):0;i.rim=Math.max(.2,(hc-this.level)/Ss(this.level));let y=i.step(e,d.ax*c-d.az*h,d.ax*h+d.az*c-g,d.lift);(!p||!i.calm||this.shown!==this.left)&&this.pour();let f=(t.position.x-this.was.x)/_s,v=(t.position.z-this.was.z)/_s;if(this.was.copy(t.position),this.steam.y=Un+this.level+.03,this.steam.strength+=((this.left>.06?.45+.55*this.left:0)-this.steam.strength)*(1-Math.exp(-e*2)),this.steam.update(e,f*c-v*h,f*h+v*c),this.spot.material.opacity=(.22+.45*this.left)*(1-.6*this.lift)*(1+2.5*i.at(.4,.3))*this.glow,this.spot.position.x=.11+i.at(.6,0)*.08,this.spot.position.z=.1+i.at(0,.6)*.08,y.length&&this.left>.7){y.sort((m,x)=>x.amount-m.amount);for(let m of y.slice(0,2))if(this.drops.length<14){let x=new xe(this.bead,this.tea.material),M=.09+Math.random()*.1;x.position.set(this.P.x+(m.x*c+m.z*h)*.028,this.P.y+(Un+hc)*_s,this.P.z+(-m.x*h+m.z*c)*.028),x.userData.v=[(m.x*c+m.z*h)*M,.12+Math.random()*.12,(-m.x*h+m.z*c)*M],x.scale.setScalar(.6+Math.random()*.7),this.scene.add(x),this.drops.push(x)}}for(let m=this.drops.length-1;m>=0;m--){let x=this.drops[m],M=x.userData.v;if(x.userData.wet){x.userData.wet-=e,x.material.opacity=Math.min(.8,x.userData.wet*.2),x.userData.wet<=0&&(this.scene.remove(x),x.material.dispose(),this.drops.splice(m,1));continue}M[1]-=2.2*e,x.position.x+=M[0]*e,x.position.y+=M[1]*e,x.position.z+=M[2]*e,x.position.y<.001&&(x.position.y=6e-4,x.scale.set(x.scale.x*2,.12,x.scale.z*1.8),x.material=new Ye({color:"#4a1a06",roughness:.15,transparent:!0}),x.userData.wet=14)}}};Ts.prototype.glow=1;var Es=[[1e-4,.0045],[.0165,.0045],[.0175,0],[.0205,8e-4],[.0235,.008],[.028,.024],[.031,.04],[.0325,.051],[.033,.0535]],ho=[[.031,.0525],[.0305,.045],[.028,.03],[.0235,.014],[.018,.0085],[1e-4,.0075]],Gd=.012,Z0=.0455,J0=4,uc=s=>s*s*(3-2*s),lo=(s,e=48)=>new fi(s.map(([t,i])=>new he(t,i)),e),K0=s=>{for(let e=1;e<ho.length;e++){let[t,i]=ho[e-1],[n,r]=ho[e];if(s<=i&&s>=r)return n+(t-n)*(s-r)/(i-r||1)}return .018};function Q0(){let e=document.createElement("canvas");e.width=e.height=512;let t=e.getContext("2d"),i=512/2,n=t.createRadialGradient(i,i,0,i,i,i);n.addColorStop(0,"#9a6b45"),n.addColorStop(.62,"#8c5d39"),n.addColorStop(.86,"#6f4527"),n.addColorStop(.97,"#3e2414"),n.addColorStop(1,"#2a170c"),t.fillStyle=n,t.fillRect(0,0,512,512);let r=7,a=()=>(r=r*16807%2147483647)/2147483647;for(let l=0;l<5200;l++){let c=a()*6.283,h=Math.sqrt(a())*i*.94,u=i+Math.cos(c)*h,d=i+Math.sin(c)*h,p=.6+a()*a()*(h>i*.75?3.4:1.8);t.fillStyle=a()<.55?`rgba(196,150,108,${.25+a()*.35})`:`rgba(70,40,20,${.2+a()*.3})`,t.beginPath(),t.arc(u,d,p,0,6.283),t.fill()}let o=new Lt(e);return o.colorSpace=lt,o.anisotropy=4,o}function eg(s,e,t,i){let n=new gt(s,e,t,6,6,6),r=n.attributes.position,a=new P,o=new P,l=[s/2-i,e/2-i,t/2-i];for(let c=0;c<r.count;c++)a.fromBufferAttribute(r,c),o.set(Math.max(-l[0],Math.min(l[0],a.x)),Math.max(-l[1],Math.min(l[1],a.y)),Math.max(-l[2],Math.min(l[2],a.z))),a.sub(o).normalize().multiplyScalar(i).add(o),r.setXYZ(c,a.x,a.y,a.z);return n.computeVertexNormals(),n}var As=class{constructor(e,t,i,n,r=0){this.scene=e,this.home=new P(i,0,n);let a=this.group=new ht,o=this.cup=new ht;a.position.copy(this.home),a.rotation.y=r,e.add(a),a.add(o);let l=x=>new an({envMap:t,...x}),c=(x,M,E=a)=>{let w=new xe(x,M);return w.castShadow=w.receiveShadow=!0,E.add(w),w},h=l({color:"#f7f3ec",roughness:.26,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:.5}),u=l({color:"#a3201c",roughness:.3}),d=l({color:"#e3b453",roughness:.25,metalness:.6,envMapIntensity:1.2});c(lo([[1e-4,0],[.03,0],[.045,.004],[.058,.0095],[.0605,.011],[.058,.0108],[.044,.0062],[.026,.0046],[1e-4,.0046]],64),h);for(let[x,M,E,w]of[[.0545,.0094,.0012,u],[.0603,.0108,7e-4,d]])c(new Gt(x,E,6,64).rotateX(Math.PI/2),w).position.y=M;let p=.0047,g=c(lo(Es),h,o);g.position.y=p;let y=c(lo(ho),l({color:"#efe8dc",roughness:.3,side:Ti}),o);y.position.y=p;let f=(x,M,E)=>{let w=[];for(let b=0;b<=6;b++){let T=x+(M-x)*b/6,C=1;for(;C<Es.length-1&&Es[C][1]<T;)C++;let[_,S]=Es[C-1],[A,I]=Es[C];w.push([_+(A-_)*(T-S)/(I-S||1)+25e-5,T])}let R=c(lo(w,56),E,o);R.position.y=p,R.castShadow=!1};c(new Gt(.0321,.0011,8,64).rotateX(Math.PI/2),h,o).position.y=p+.0532,f(.0505,.0528,d),f(.0355,.046,u),f(.0335,.0348,d);let v=c(new Gt(.0105,.0026,10,28,Math.PI*1.1),h,o);v.position.set(.028,p+.027,0),v.rotation.z=-Math.PI*.55,this.grounds=c(new wi(.018,32).rotateX(-Math.PI/2),l({color:"#2a170b",roughness:.95,side:Ti}),o),this.grounds.position.y=p+.0082,this.top=c(new wi(1,48).rotateX(-Math.PI/2),l({map:Q0(),roughness:.55,transparent:!0}),o),this.top.castShadow=!1;let m=l({color:"#f4d3da",roughness:1,sheen:1,sheenColor:"#ffffff",sheenRoughness:.9,envMapIntensity:.15});for(let[x,M,E,w]of[[-.039,.022,.5,.011],[-.026,.038,-.3,.0105]]){let R=c(eg(.0135,w,.0135,.0022),m);R.position.set(x,.0047+w/2+3e-4,M),R.rotation.y=E}this.steam=new Cr(a,.06,{wide:.012,rise:.09,count:9,size:.03}),this.left=1,this.lift=0,this.held=null,this.sip=-1,this.filling=-1,this.wobble=0,this.t=0,this.body=new xe(new Ot(.06,.06,.07,12),new mt({visible:!1})),this.body.position.y=.035,a.add(this.body),this.seat=p,this.show()}get level(){return Gd+(Z0-Gd)*this.left}show(){let e=this.level,t=K0(e);this.top.position.y=this.seat+e,this.top.scale.set(t,1,t),this.top.material.opacity=this.left>.02?1:0,this.top.visible=this.left>.02,this.top.material.color.setScalar(.35+.65*Math.min(1,this.left*1.6))}hit(e){let t=new ei(e.origin,e.direction);this.body.updateWorldMatrix(!0,!1),this.body.material.visible=!0;let i=t.intersectObject(this.body)[0];return this.body.material.visible=!1,i?i.distance:null}hold(e,t){this.held=this.held||new P,this.held.set(e,0,t)}drop(e,t){this.held=null,this.home.set(e,0,t)}drink(){return this.held||this.sip>=0||this.filling>=0?null:this.left<.05?(this.filling=0,"pour"):(this.sip=0,"sip")}jolt(e=1){this.wobble=Math.min(1,this.wobble+.5*e)}update(e){let t=this.group;this.t+=e;let i=0;if(this.sip>=0){this.sip+=e/1.9;let h=this.sip,u=h<.3?uc(h/.3):h>.72?uc(Math.max(0,(1-h)/.28)):1;i=h>.3&&h<.72?Math.sin((h-.3)/.42*Math.PI):0,i>0&&(this.left=Math.max(0,this.left-e/(1.9*.42)/J0)),this.cup.position.set(0,u*.1,u*.075),h>=1&&(this.sip=-1,this.cup.position.set(0,0,0),this.left<.03&&(this.left=0))}this.filling>=0&&(this.filling+=e/2.2,this.left=Math.min(1,uc(Math.min(1,this.filling))),this.filling>=1&&(this.filling=-1,this.left=1)),this.cup.rotation.set(i*.7,0,Math.sin(this.t*19)*.004*this.wobble),this.wobble=Math.max(0,this.wobble-e*1.5),this.lift+=((this.held?1:0)-this.lift)*(1-Math.exp(-e*10));let n=this.held||this.home,r=1-Math.exp(-e*16),a=(n.x-t.position.x)*r,o=(n.z-t.position.z)*r;t.position.x+=a,t.position.z+=o,t.position.y=this.lift*.02,this.show();let l=Math.cos(t.rotation.y),c=Math.sin(t.rotation.y);this.steam.y=this.seat+this.level+.008,this.steam.strength+=((this.left>.05?.4+.4*this.left:0)-this.steam.strength)*(1-Math.exp(-e*2)),this.steam.update(e,-(a*l-o*c),-(a*c+o*l))}};As.prototype.glow=1;var Wd=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,dc={night:{value:0},time:{value:0},fire:{value:1},pen:{value:new P(9,9,0)},wave:{value:new P(9,9,9)}};function Xd(s){Wd||(dc.time.value=(dc.time.value+s)%2e3,dc.wave.value.z+=s)}var Gi=260,co=class{constructor(e){this.p=new Float32Array(Gi*3),this.c=new Float32Array(Gi*3),this.v=new Float32Array(Gi*3),this.age=new Float32Array(Gi).fill(9),this.life=new Float32Array(Gi).fill(1),this.up=new Float32Array(Gi),this.hue=Array.from({length:Gi},()=>new we);let t=new Je;t.setAttribute("position",this.pa=new at(this.p,3).setUsage(xs)),t.setAttribute("color",this.ca=new at(this.c,3).setUsage(xs)),this.o=new Va(t,new hs({size:.0016,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ln,fog:!1})),this.o.frustumCulled=!1,this.o.renderOrder=6,this.o.visible=!1,this.o.raycast=()=>{},e.add(this.o),this.next=0,this.any=0}puff(e,t,i,n,{color:r="#ffd98a",speed:a=.05,rise:o=.04,up:l=-.12,life:c=.8,wide:h=.001}={}){if(!Wd){for(let u=0;u<n;u++){let d=this.next=(this.next+1)%Gi,p=Math.random()*6.283,g=a*(.3+Math.random());this.p.set([e+(Math.random()-.5)*h,t,i+(Math.random()-.5)*h],d*3),this.v.set([Math.cos(p)*g,o*(.4+Math.random()),Math.sin(p)*g],d*3),this.age[d]=0,this.life[d]=c*(.5+Math.random()*.8),this.up[d]=l,this.hue[d].set(r)}this.any=2.5,this.o.visible=!0}}update(e){if(this.o.visible){if(this.any-=e,this.any<0){this.o.visible=!1;return}for(let t=0;t<Gi;t++){let i=t*3,n=(this.age[t]+=e)/this.life[t];if(n>=1){this.c[i]=this.c[i+1]=this.c[i+2]=0;continue}let r=Math.exp(-e*2.5);for(let l=0;l<3;l++)this.v[i+l]*=r,this.p[i+l]+=this.v[i+l]*e;this.v[i+1]+=this.up[t]*e;let a=(1-n)*(.55+.45*Math.sin(this.age[t]*40+t)),o=this.hue[t];this.c[i]=o.r*a,this.c[i+1]=o.g*a,this.c[i+2]=o.b*a}this.pa.needsUpdate=this.ca.needsUpdate=!0}}};var pc=(s,e,t)=>Math.max(e,Math.min(t,s)),Dn=new P(-1.55,Ve,-2.62),Ir=new P(1.5,Ve,-2.5),uo=class{constructor(e){this.canvas=e,this.touch=matchMedia("(pointer: coarse)").matches;let t=this.renderer=new ka({canvas:e,antialias:!0,powerPreference:"high-performance"});t.toneMapping=vd,t.shadowMap.enabled=!0,t.shadowMap.type=gd,this.scene=new Sr,this.scene.background=new we("#1d140d"),this.scene.fog=new Fa("#1d140d",2.8,7.5),this.camera=new It(32,1,.02,16),this.env=Hd(t),this.sky=new Za("#fff4e2","#6b4c33",1.75),this.scene.add(this.sky);let i=this.key=new Ka("#fff0d6",1.6);i.position.set(-.5,1.2,-.45),i.castShadow=!0,i.shadow.mapSize.set(this.touch?2048:3072,this.touch?2048:3072),i.shadow.radius=5,i.shadow.bias=-4e-4,i.shadow.normalBias=.002,Object.assign(i.shadow.camera,{left:-.98,right:.98,top:.75,bottom:-.75,near:.2,far:2.6}),this.scene.add(i),this.lamp=new In("#ffe9c4",0,5,1.2),this.scene.add(this.lamp),this.pianoLamp=new In("#ffe2b0",1.1,2.6,1.4),this.pianoLamp.position.set(Ir.x-.3,.95,Ir.z+.7),this.scene.add(this.pianoLamp),this.hearth=new ro(this.scene,this.env),this.hearth.pad.visible=!1,this.dust=new co(this.scene),this.teas=[new Ts(this.scene,this.env,.74,-.36,.4),new As(this.scene,this.env,-.76,.38,-.3)],this.at="desk",this.reading=null,this.pose=null,this.from=null,this.way=1,this.pan={x:0,y:0},this.panGoal={x:0,y:0},this.zoom=1,this.zoomGoal=1,this.frustum=new sn,this.hearthBox=new Yt(new P(-.8,Ve,-2.8),new P(.8,.6,-1.5)),this.resize(),addEventListener("resize",()=>this.resize())}resize(){let e=innerWidth,t=innerHeight,i=this.touch?3e6:9e6,n=Math.min(devicePixelRatio||1,2);e*t*n*n>i&&(n=Math.sqrt(i/(e*t))),this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}go(e,t=null){this.at=e,this.reading=t,this.panGoal={x:0,y:0},this.zoomGoal=1}perPixel(){let e=this.pose?this.pose.P.distanceTo(this.pose.L):2;return 2*Math.tan(this.camera.fov*Math.PI/360)*e/innerHeight}panBy(e,t){let i=this.perPixel(),n=this.panGoal;n.x+=e*i,n.y+=t*i;let r=this.at==="read"&&this.reading?{x:this.reading.w/2,y:this.reading.h/2}:this.at==="desk"?{x:.9,y:.6}:{x:.8,y:.6};n.x=pc(n.x,-r.x,r.x),n.y=pc(n.y,-r.y,r.y)}zoomBy(e,t,i){let n=this.zoomGoal;this.zoomGoal=pc(this.zoomGoal*e,this.at==="read"?.2:.35,this.at==="read"?1.15:1.6);let r=1-this.zoomGoal/n;if((this.at==="read"||this.at==="desk")&&t!==void 0){let a=this.ray(t,i).ray;if(a.direction.y>-1e-5)return;let o=-a.origin.y/a.direction.y,l=a.origin.x+a.direction.x*o,c=a.origin.z+a.direction.z*o,h=this.pose?this.pose.L:new P;this.panGoal.x+=(l-h.x)*r,this.panGoal.y+=(c-h.z)*r}}target(){let e=this.pan,t=this.zoom,i=this.base();if(this.at==="shelf"||this.at==="piano"||this.at==="room"){let n=new P(e.x,-e.y,0);i.L.add(n),i.P.add(n)}else{let n=new P(e.x,0,e.y);i.L.add(n),i.P.add(n)}return i.P.sub(i.L).multiplyScalar(t).add(i.L),i}base(){let e=(o,l,c)=>new P(o,l,c),t=Math.tan(this.camera.fov*Math.PI/360),i=this.camera.aspect,n=o=>o/(t*i);if(this.at==="shelf"){let o=e(Dn.x,Dn.y+1.3,Dn.z),l=Math.max(.6/t,n(.6));return{P:e(o.x+.05,o.y+.05,o.z+l),L:o,up:e(0,1,0)}}if(this.at==="piano"){let o=e(Ir.x,.32,Ir.z+.33),l=Math.max(.55/t,n(.7));return{P:o.clone().addScaledVector(e(-.05,.62,.78).normalize(),l),L:o,up:e(0,1,0)}}if(this.at==="room"){let o=e(0,.1,-1.4);return{P:e(0,.95,2.2),L:o,up:e(0,1,0)}}if(this.at==="read"&&this.reading){let o=this.reading,l=o.center,c=o.w/2+.01,h=o.h/2+.01,u=Math.max(h/t,c/(t*i));return{P:e(l.x,u,l.z+1e-4),L:e(l.x,0,l.z),up:e(0,0,-1)}}let r=e(0,-.05,-.05),a=Math.max(2.1,n(.92));return{P:r.clone().addScaledVector(e(0,.62,.79).normalize(),a),L:r,up:e(0,1,0)}}place(e,t=e){let i=1-Math.exp(-Math.min(.1,t)*14);this.pan.x+=(this.panGoal.x-this.pan.x)*i,this.pan.y+=(this.panGoal.y-this.pan.y)*i,this.zoom+=(this.zoomGoal-this.zoom)*i;let n=this.target();if(this.going!==this.at+(this.reading?this.reading.name:"")&&(this.from=this.pose,this.going=this.at+(this.reading?this.reading.name:""),this.way=this.from?0:1),this.way=Math.min(1,this.way+Math.min(.25,t)/1),this.way<1&&this.from){let r=this.way*this.way*(3-2*this.way);n.P.lerpVectors(this.from.P,n.P,r),n.L.lerpVectors(this.from.L,n.L,r),n.up.lerpVectors(this.from.up,n.up,r).normalize()}this.pose=n,this.camera.position.copy(n.P),this.camera.up.copy(n.up),this.camera.lookAt(n.L),this.camera.updateMatrixWorld(),this.lamp.position.set(Dn.x+.6,1.4,Dn.z+1.2),this.lamp.intensity+=((this.at==="shelf"?3.4:.9)-this.lamp.intensity)*(1-Math.exp(-e*4))}get seesFire(){return this.frustum.intersectsBox(this.hearthBox)}live(e){Xd(e),this.frustum.setFromProjectionMatrix(new Ae().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse));let t=this.seesFire;this.hearth.update(e,!1,this.dust,t),this.pet&&(this.pet.group.visible=t,t&&this.pet.update(e));for(let i of this.teas)i.update(e);this.dust.update(e)}ray(e,t){let i=new ei;return i.setFromCamera(new he(e/innerWidth*2-1,1-t/innerHeight*2),this.camera),i}render(){this.renderer.render(this.scene,this.camera)}};var jd=["#6e2a24","#24405e","#2f5a3a","#6a5124","#4a2d5c","#7a3e1c","#2a4f55","#5a2b3c"];function tg(s,e,t,i,n){let r=document.createElement("canvas");r.width=128,r.height=Math.round(128*n/i);let a=r.getContext("2d");a.fillStyle=t,a.fillRect(0,0,r.width,r.height),a.fillStyle="rgba(0,0,0,.25)",a.fillRect(0,0,8,r.height),a.fillRect(r.width-8,0,8,r.height),a.strokeStyle="#d8b56a",a.lineWidth=3;for(let l of[26,34,r.height-34,r.height-26])a.beginPath(),a.moveTo(10,l),a.lineTo(r.width-10,l),a.stroke();a.save(),a.translate(r.width/2,r.height/2),a.rotate(-Math.PI/2),a.fillStyle="#ecd59a",a.textAlign="center",a.textBaseline="middle",a.font=`600 ${Math.round(r.width*.3)}px Georgia, serif`,a.fillText(s,0,-r.width*.13,r.height-90),a.font=`${Math.round(r.width*.2)}px Georgia, serif`,a.fillText(e,0,r.width*.2,r.height-90),a.restore();let o=new Lt(r);return o.colorSpace=lt,o.anisotropy=8,o}var po=class{constructor(e){this.group=new ht,this.group.position.copy(Dn),e.add(this.group),this.books=[],this.picked=null;let t=Rr(23,[92,60,36]),i=new Ye({map:t,roughness:.6}),n=new Ye({color:"#2e1d10",roughness:.8}),r=(o,l,c,h,u,d,p=i)=>{let g=new xe(new gt(o,l,c),p);return g.position.set(h,u,d),g.castShadow=g.receiveShadow=!0,this.group.add(g),g};this.W=1,this.H=1.9;let a=.3;r(this.W,this.H,.02,0,this.H/2,-a/2,n);for(let o of[-this.W/2,this.W/2])r(.03,this.H,a,o,this.H/2,0);this.boards=[.05,.52,.99,1.46,1.88];for(let o of this.boards)r(this.W,.025,a,0,o,0)}fill(e){for(let r of this.books)this.group.remove(r.mesh),r.mesh.geometry.dispose();this.books=[];let t=14,i=.05,n=r=>Math.floor(r/t);e.forEach((r,a)=>{let o=n(a),l=.32+a*37%7*.012,c=-this.W/2+.06+a%t*(i+.012),h=this.boards[3-Math.min(3,o)]+.013+l/2,u=r.user?"#3b3b3b":jd[a%jd.length],d=tg(r.title,r.sub,u,i,l),p=new Ye({color:u,roughness:.7}),g=new Ye({color:"#efe6cf",roughness:.9}),y=new xe(new gt(i,l,.22),[p,p,g,g,new Ye({map:d,roughness:.6}),p]);y.position.set(c+i/2,h,.02),y.rotation.z=a*13%5===0?.03:0,y.castShadow=!0,y.userData.book=r,this.group.add(y),this.books.push({...r,mesh:y,home:y.position.clone()})})}hit(e){let t=e.intersectObjects(this.books.map(i=>i.mesh))[0];return t?t.object.userData.book:null}hover(e){for(let t of this.books)t.mesh.position.z+=((t.id===(e&&e.id)?.06:.02)-t.mesh.position.z)*.3}};var qd=[0,2,4,5,7,9,11],$d=21,Yd=108,fo=class{constructor(e,t){this.group=new ht,this.group.position.copy(Ir),e.add(this.group);let i=Rr(41,[52,30,18]);i.repeat.set(1.5,1.5);let n=new Ye({map:i,color:"#6b4a34",roughness:.35,envMap:t,envMapIntensity:.5}),r=new Ye({color:"#141010",roughness:.3,envMap:t,envMapIntensity:.6}),a=(f,v,m,x,M,E,w=n)=>{let R=new xe(new gt(f,v,m),w);return R.position.set(x,M,E),R.castShadow=R.receiveShadow=!0,this.group.add(R),R},o=1.48,l=.72,c=.34;a(o,1.26,c,0,.63,0),a(o+.02,.04,c+.04,0,1.28,.005);for(let f of[-o/2+.03,o/2-.03])a(.06,l+.06,.34,f,(l+.06)/2,c/2+.17),a(.05,.62,.05,f,.31,c/2+.3);a(o,.05,.3,0,l-.04,c/2+.15),a(o-.12,.09,.03,0,l+.05,c/2+.01,r),a(.58,.3,.012,0,l+.36,c/2+.02),a(.62,.02,.05,0,l+.21,c/2+.035);let h=new Ye({color:"#c79a45",metalness:.9,roughness:.3,envMap:t});for(let f of[-.42,.42]){let v=new xe(new Ot(.02,.012,.05,12),h);v.position.set(f,l+.5,c/2+.04),this.group.add(v)}this.keys=new Map;let u=[];for(let f=$d;f<=Yd;f++)qd.includes(f%12)&&u.push(f);let d=(o-.14)/u.length,p=new Ye({color:"#f3ecdc",roughness:.4}),g=new Ye({color:"#1a1614",roughness:.35}),y=-(o-.14)/2;for(let f=$d;f<=Yd;f++){let v=qd.includes(f%12),m=new dt,x,M;if(v){let E=u.indexOf(f);x=y+(E+.5)*d,M=new xe(new gt(d*.94,.022,.15).translate(0,0,.075),p.clone())}else{let E=u.indexOf(f-1);x=y+(E+1)*d,M=new xe(new gt(d*.58,.022,.095).translate(0,0,.0475),g.clone()),M.position.y=.016}M.castShadow=!0,M.userData.midi=f,m.position.set(x,l,c/2+.03),m.add(M),this.group.add(m),this.keys.set(f,{pivot:m,mesh:M,down:0,goal:0,white:v,base:M.material.color.clone(),tint:null})}this.meshes=[...this.keys.values()].map(f=>f.mesh)}press(e,t,i=null){let n=this.keys.get(e);n&&(n.goal=t?1:0,t&&(n.tint=i))}release(){for(let e of this.keys.values())e.goal=0}hit(e){let t=e.intersectObjects(this.meshes)[0];return t?t.object.userData.midi:null}update(e){for(let t of this.keys.values()){t.down+=(t.goal-t.down)*(1-Math.exp(-e*(t.goal?40:18))),t.pivot.rotation.x=t.down*.075;let i=t.mesh.material.color;i.copy(t.base),t.tint&&t.down>.02&&i.lerp(new we(t.tint),(t.white?.55:.75)*Math.min(1,t.down*1.5))}}};var Nn=class{constructor(e,t,i,n,r,a,o=0,l=[2048,1448]){this.name=t,this.w=i,this.h=n,this.center=new P(r,0,a),this.regions=[],this.canvas=document.createElement("canvas"),[this.canvas.width,this.canvas.height]=l,this.tex=new Lt(this.canvas),this.tex.colorSpace=lt,this.tex.anisotropy=8,this.mesh=new xe(new ct(i,n),new Ye({map:this.tex,emissiveMap:this.tex,emissive:"#ffffff",emissiveIntensity:.22,roughness:.92,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.mesh.rotation.x=-Math.PI/2,this.mesh.rotation.z=o,this.mesh.position.set(r,.0015,a),this.mesh.receiveShadow=!0,this.mesh.userData.sheet=this,e.add(this.mesh),this.cursor=new xe(new ct(.0022,n*.96),new mt({color:"#c0392b",transparent:!0,opacity:.85,depthWrite:!1})),this.cursor.rotation.x=-Math.PI/2,this.cursor.position.set(r,.003,a),this.cursor.visible=!1,this.cursor.renderOrder=3,e.add(this.cursor)}drawn(e){e.canvas!==this.canvas&&(this.canvas=e.canvas,this.tex.image=e.canvas),this.regions=e.regions,this.out=e,this.tex.needsUpdate=!0}at(e){let t=e.intersectObject(this.mesh)[0];return t?{x:t.uv.x*this.canvas.width,y:(1-t.uv.y)*this.canvas.height,dist:t.distance}:null}pick(e){let t=this.regions.filter(n=>e.x>=n.x&&e.x<=n.x+n.w&&e.y>=n.y&&e.y<=n.y+n.h),i={note:0,sound:1,span:1,time:2,timeline:2,matrix:2,moment:3};return t.sort((n,r)=>i[n.kind]-i[r.kind]||n.w*n.h-r.w*r.h)[0]||null}mark(e,t=0,i=this.canvas.height){if(e===null){this.cursor.visible=!1;return}let n=e/this.canvas.width-.5,r=(t+i/2)/this.canvas.height-.5;this.cursor.visible=!0,this.cursor.scale.y=i/this.canvas.height/.96,this.cursor.position.set(this.center.x+n*this.w,.003,this.center.z+r*this.h)}};var Lr=null,kt=null,Zd=null,Ur=null,Ai={ready:!1,failed:!1,progress:0,onChange:()=>{}};function ti(){return Lr||(Lr=new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),Ur=Lr.createGain(),Ur.gain.value=.8,Ur.connect(Lr.destination)),Lr}var mo=()=>ti().currentTime,Jd=s=>ti().decodeAudioData(s);function gc(){return ti(),Ur}async function On(){let s=ti();s.state==="suspended"&&await s.resume(),Zd||(Zd=ig().catch(e=>{console.warn("[sound] SoundFont synth unavailable:",e),Ai.failed=!0,Ai.onChange()}))}async function ig(){let s=ti(),e=new URL("./vendor/",import.meta.url),[{WorkletSynthesizer:t},i]=await Promise.all([import("./spessasynth_lib-QSZ7LEC6.js"),ng(new URL("sf/GeneralUserGS.sf3",e)),s.audioWorklet.addModule(new URL("spessasynth/spessasynth_processor.min.js",e))]).then(([r,a])=>[r,a]),n=new t(s);n.connect(Ur),await n.soundBankManager.addSoundBank(i,"main"),await n.isReady,kt=n,Ai.ready=!0,Ai.onChange()}async function ng(s){let e=await fetch(s);if(!e.ok)throw new Error(`${s}: ${e.status}`);let t=Number(e.headers.get("content-length"))||84e5,i=e.body.getReader(),n=[],r=0;for(;;){let{done:l,value:c}=await i.read();if(l)break;n.push(c),r+=c.length,Ai.progress=Math.min(1,r/t),Ai.onChange()}let a=new Uint8Array(r),o=0;for(let l of n)a.set(l,o),o+=l.length;return a.buffer}function kn(s,e){kt&&kt.programChange(s,e)}function Dr(s,e,t,i){if(kt){kt.noteOn(s,e,t,i!==void 0?{time:i}:void 0);return}ep(e,t,i??ti().currentTime,s)}function Fn(s,e,t){if(kt){kt.noteOff(s,e,t!==void 0?{time:t}:void 0);return}let i=on.get(`${s}:${e}`);if(i){let n=t??Lr.currentTime;i.g.gain.setTargetAtTime(0,n,.08),i.o.stop(n+.6),on.delete(`${s}:${e}`)}}var fc=[10,11,12,13,14,15],rg=0,mc=[];function Kd(s,e=0,t=84){let i=ti(),n=i.currentTime+.05;for(let{ch:r,key:a}of mc)Fn(r,a);mc=[];for(let r of fc)kn(r,e),kt&&kt.pitchWheelRange(r,2);for(let r of s)for(let a of r.pitches){let o=fc[rg++%fc.length],l=Math.round(a),c=a-l,h=n+r.t;if(kt)kt.pitchWheel(o,Math.max(0,Math.min(16383,Math.round(8192+c/2*8191))),{time:h}),kt.noteOn(o,l,t,{time:h}),kt.noteOff(o,l,{time:h+r.d}),mc.push({ch:o,key:l,at:h+r.d});else{ep(a,t,h,o);let u=`${o}:${a}`,d=on.get(u);d&&(d.g.gain.setTargetAtTime(0,h+r.d,.08),d.o.stop(h+r.d+.6),on.delete(u))}}return s.reduce((r,a)=>Math.max(r,a.t+a.d),0)}function Qd(){kt&&kt.stopAll(!0);for(let s of on.values())try{s.o.stop()}catch{}on.clear()}var on=new Map;function ep(s,e,t,i){let n=ti(),r=n.createOscillator(),a=n.createGain(),o=n.createBiquadFilter();r.type="triangle",r.frequency.value=440*2**((s-69)/12),o.type="lowpass",o.frequency.value=2400,a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(e/127*.22,t+.005),a.gain.setTargetAtTime(e/127*.08,t+.01,.4),r.connect(o).connect(a).connect(Ur),r.start(t);let l=`${i}:${s}`,c=on.get(l);if(c)try{c.o.stop(t)}catch{}on.set(l,{o:r,g:a})}var sg=.3,go=class{constructor(){this.s=null,this.ev=[],this.playing=!1,this.pos=0,this.rate=1,this.onEnd=()=>{},this.timer=null,this.recording=null,this.mode="notes"}load(e,t=null){this.stop(),this.s=e,this.recording=t,this.buffer=null,this.rev=null,this.stopAt=void 0,this.mode=t?"recording":"notes";let i=Jc(e),n=new Map,r=0;for(let a of e.parts)a.percussion?n.set(a.id,9):(r===9&&r++,n.set(a.id,r%16),r++);this.channels=n,this.ev=e.notes.map((a,o)=>({n:a,t:i[o].t,d:i[o].d,key:Yc(a.pitch),ch:n.get(a.part)??0,vel:Math.max(20,Math.min(127,a.vel||80))})).sort((a,o)=>a.t-o.t),this.length=Math.max(this.ev.reduce((a,o)=>Math.max(a,o.t+o.d),0),e.audio?e.audio.seconds:0),this.pos=0}async buffered(){return!this.buffer&&this.recording&&(this.buffer=await Jd(await this.recording.arrayBuffer())),this.buffer}get at(){return this.s?Zc(this.s,this.pos):0}seek(e){let t=this.playing;this.pause(),this.pos=Math.max(0,yi(this.s,{n:Math.round(e*960),d:960})),t&&this.play()}async play(){if(!this.s||this.playing||this.starting)return;this.starting=!0;try{await On()}finally{this.starting=!1}if(this.playing)return;this.programs(),this.pos>=this.length-.05&&(this.pos=0);let e=null;if(this.mode==="recording")try{e=await this.buffered()}catch(t){console.warn("[player] the recording would not decode:",t),this.mode="notes"}if(!this.playing){if(this.playing=!0,this.t0=mo()+.08,this.from=this.pos,e){let t=ti(),i=t.createBufferSource();i.buffer=e,i.playbackRate.value=this.rate,i.connect(gc()),i.start(this.t0,Math.min(this.pos,e.duration)),this.src=i}this.i=this.ev.findIndex(t=>t.t>=this.pos-1e-6),this.i<0&&(this.i=this.ev.length),this.timer=setInterval(()=>this.tick(),40),this.tick()}}programs(){if(this.s)for(let e of this.s.parts)kn(this.channels.get(e.id),e.program||0)}tick(){if(!this.playing)return;let e=mo(),t=this.from+(e-this.t0)*this.rate;this.pos=Math.max(this.from,t);let i=Math.min(t+sg*this.rate,this.stopAt??1/0);for(;this.i<this.ev.length&&this.ev[this.i].t<i;){let n=this.ev[this.i++],r=this.t0+(n.t-this.from)/this.rate,a=r+n.d/this.rate;this.src||(Dr(n.ch,n.key,n.vel,Math.max(e,r)),Fn(n.ch,n.key,Math.max(e+.02,a-.004)))}if(this.stopAt!==void 0&&t>=this.stopAt){let n=this.stopAt;this.stopAt=void 0,this.pause(),this.pos=n,this.onEnd();return}t>this.length+.5&&(this.pause(),this.pos=0,this.onEnd())}async stretch(e,t){this.pause(),this.seek(e),this.stopAt=this.pos+t,await this.play()}async scrubStart(e,t){if(this.pause(),this.scrubbing={follow:t,last:yi(this.s,{n:Math.round(e*960),d:960}),at:performance.now()},t){this.seek(e),this.stopAt=this.pos+.05,await this.play();return}if(await On(),this.programs(),this.mode==="recording")try{await this.buffered()}catch(i){console.warn("[player] the recording would not decode:",i)}}scrubTo(e){let t=this.scrubbing;if(!t)return;let i=yi(this.s,{n:Math.round(e*960),d:960}),n=t.last,r=performance.now(),a=Math.max(.016,(r-t.at)/1e3);if(t.follow){i>(this.stopAt??0)&&(this.stopAt=i),!this.playing&&i>this.pos+.05&&(this.stopAt=i,this.play()),t.last=i,t.at=r;return}if(Math.abs(i-n)<.005)return;t.last=i,t.at=r;let o=ti(),l=o.currentTime+.01,c=Math.max(.25,Math.min(4,Math.abs(i-n)/a));if(this.mode==="recording"&&this.buffer){let p=i<n,g=p?this.reversed():this.buffer,y=p?this.buffer.duration-n:n,f=Math.abs(i-n),v=o.createBufferSource(),m=o.createGain();v.buffer=g,v.playbackRate.value=c,m.gain.setValueAtTime(0,l),m.gain.linearRampToValueAtTime(1,l+.01),m.gain.setValueAtTime(1,l+f/c-.01),m.gain.linearRampToValueAtTime(0,l+f/c),v.connect(m).connect(gc()),v.start(l,Math.max(0,Math.min(g.duration,y)),f),this.pos=i;return}let h=Math.min(n,i),u=Math.max(n,i),d=this.ev.filter(p=>p.t>h&&p.t<=u);i<n&&d.reverse();for(let p of d){let g=l+Math.abs(p.t-n)/c;Dr(p.ch,p.key,p.vel,g),Fn(p.ch,p.key,g+Math.min(.3,p.d/c))}this.pos=i}scrubEnd(){let e=this.scrubbing;this.scrubbing=null,e&&!e.follow&&(this.stopAt=void 0)}reversed(){if(this.rev)return this.rev;let e=this.buffer,t=ti(),i=t.createBuffer(e.numberOfChannels,e.length,e.sampleRate);for(let n=0;n<e.numberOfChannels;n++){let r=e.getChannelData(n),a=i.getChannelData(n);for(let o=0,l=r.length;o<l;o++)a[o]=r[l-1-o]}return this.rev=i}pause(){if(this.playing&&(this.playing=!1,this.scrubbing||(this.stopAt=void 0),clearInterval(this.timer),Qd(),this.src)){try{this.src.stop()}catch{}this.src=null}}stop(){this.pause(),this.pos=0}sounding(){if(!this.playing)return[];let e=this.from+(mo()-this.t0)*this.rate,t=[];for(let i=Math.max(0,this.i-400);i<this.i;i++){let n=this.ev[i];n.t<=e&&e<n.t+n.d&&t.push(n)}return t}};var te={page:"#f7f2e6",line:"#4a4640",ink:"#2c2821",soft:"#8b8371",pencil:"#9b9284",faint:"#ddd3bd",rule:"#c9bd9f",accent:"#8f2f2a",blue:"#1f3f8f"},Bn={root:"#1f3f8f",chord:"#5a78bf",passing:"#2f7d4c",neighbour:"#b8741a",suspension:"#a8323a",appoggiatura:"#8a2f8a",other:"#8b8371",grace:"#a69c8a"},Rs={root:"root",chord:"chord tone",passing:"passing tone",neighbour:"neighbour tone",suspension:"suspension",appoggiatura:"appoggiatura",other:"other tone",grace:"grace note"},Se='Georgia, "Iowan Old Style", "Times New Roman", serif';function Nr(s,e=1){return s?`hsla(${((jn(s.tonic)*7%12+(s.mode==="minor"?3:0))%12*30+20)%360}, ${s.mode==="minor"?32:48}%, ${s.mode==="minor"?66:76}%, ${e})`:`rgba(200,190,170,${e})`}function ii(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,t}function Wt(s,e,t){s.fillStyle=te.page,s.fillRect(0,0,e,t);let i=7,n=()=>(i=i*16807%2147483647)/2147483647;for(let r=0;r<e*t/900;r++)s.fillStyle=`rgba(${n()<.5?"120,100,70":"255,255,255"},${n()*.05})`,s.fillRect(n()*e,n()*t,1+n()*2,1+n()*2)}function We(s,e,t,i,n,r,a=""){s.font=`${a} ${r}px ${Se}`;let o=s.measureText(e).width;if(o>n){let l=n/o;if(l<.6)return!1;s.font=`${a} ${Math.floor(r*l)}px ${Se}`}return s.fillText(e,t,i),!0}function ip(s,e,t){let i=s.getContext("2d"),n=s.width,r=s.height;return Wt(i,n,r),i.textAlign="center",i.textBaseline="middle",i.fillStyle=te.faint,i.font=`600 ${Math.round(r*.07)}px ${Se}`,i.fillText(e,n/2,r*.44),i.fillStyle=te.soft,i.font=`italic ${Math.round(r*.035)}px ${Se}`,i.fillText(t,n/2,r*.56),{canvas:s,regions:[]}}var Bt=(s,e)=>s.source!=="auto"||s.confidence>=(e[s.layer]??.9);var zn={w:2400,h:1697};function np(s,e,t,i={}){s=s||ii(zn.w,zn.h);let n=s.getContext("2d"),r=s.width,a=s.height,o=[];Wt(n,r,a);let l=90,c=230,h=e.bars,u=h.length;n.fillStyle=te.ink,n.textBaseline="alphabetic",n.textAlign="left",We(n,e.title||"Untitled",l,110,r-2*l-420,56,"600");let d=(t.form||[])[0];if(n.fillStyle=te.soft,We(n,[d?`${d.label}: ${d.data.letters}`:null,e.composer].filter(Boolean).join(" · "),l,165,r-2*l-420,30),n.textAlign="right",n.font=`26px ${Se}`,n.fillStyle=te.ink,n.fillText("ink: sure   pencil: a guess (touch it)",r-l,110),n.fillStyle=te.soft,n.fillText(`${u} bars · ${(t.key||[]).length} key areas · ${(t.phrase||[]).length} phrases`,r-l,155),!u)return{canvas:s,regions:o};let p=Math.min(8,Math.max(1,Math.ceil(u/14))),g=Math.ceil(u/p),y=(a-c-60)/p,f=(r-2*l)/g,v=oe(h[0].at),m=_=>_+1<u?oe(h[_+1].at):oe(h[_].at)+oe(h[_].dur),x=_=>{let S=h.findIndex((A,I)=>_<m(I)-1e-9);return S<0&&(S=u-1),Math.floor(S/g)},M=(_,S)=>{let A=S*g,I=A;for(;I+1<u&&I+1<A+g&&oe(h[I+1].at)<=_+1e-9;)I++;let B=oe(h[I].at),O=m(I)-B;return l+(I-A)*f+Math.max(0,Math.min(1,(_-B)/O))*f},E=_=>oe(h[_*g].at),w=_=>m(Math.min(u-1,(_+1)*g-1)),R=e.notes.filter(_=>!_.percussion).map(_=>zr(_.pitch)),b=Math.min(...R),T=Math.max(...R),C=(_,S)=>{let A=oe(_.start),I=oe(_.end);for(let B=x(A);B<=x(Math.max(A,I-1e-6));B++){let O=Math.max(A,E(B)),F=Math.min(I,w(B));F<=O||S(M(O,B),M(F,B)-M(O,B),B,O===A,F===I)}};for(let _=0;_<p&&_*g<u;_++){let S=c+_*y,A={phrase:S+y*.24,key:S+y*.28,harm:S+y*.42,contour:S+y*.6,num:S+y*.95};n.strokeStyle=te.rule,n.lineWidth=1.5,n.fillStyle=te.soft,n.font=`22px ${Se}`,n.textAlign="left";for(let O=_*g;O<Math.min(u,(_+1)*g);O++){let F=l+(O-_*g)*f;n.beginPath(),n.moveTo(F,A.key),n.lineTo(F,A.num-26),n.stroke(),(O===_*g||h[O].n%4===1||g<=16)&&n.fillText(String(h[O].n),F+3,A.num),o.push({x:F,y:A.key,w:f,h:A.num-A.key,kind:"time",t:oe(h[O].at),bar:h[O].n})}let I=y*.27,B=O=>A.contour+I*(1-(O-b)/Math.max(1,T-b));for(let[O,F,W]of[[q=>Math.max(...q),te.ink,2.2],[q=>Math.min(...q),te.soft,1.6]]){let q=new Map;for(let z of e.notes){if(z.percussion||z.grace)continue;let j=oe(z.onset);if(j<E(_)-1e-9||j>=w(_)-1e-9)continue;let ee=j.toFixed(5);q.set(ee,O([q.get(ee)??(O===Math.max?-1e9:1e9),zr(z.pitch)].filter(le=>Math.abs(le)<1e8)))}let re=[...q].map(([z,j])=>[Number(z),j]).sort((z,j)=>z[0]-j[0]);n.strokeStyle=F,n.lineWidth=W,n.beginPath(),re.forEach(([z,j],ee)=>ee?n.lineTo(M(z,_),B(j)):n.moveTo(M(z,_),B(j))),n.stroke()}}for(let _ of t.section||[])C(_,(S,A,I,B)=>{let O=c+I*y+y*.01,F=y*.13,W=_.data.color;if(n.fillStyle=W,n.globalAlpha=.2,n.fillRect(S+1,O,A-2,F),n.globalAlpha=1,n.fillStyle=W,n.fillRect(S+1,O,B?6:2,F),n.textAlign="left",n.textBaseline="middle",B||A>160){n.fillStyle=W;let q=We(n,_.label,S+14,O+F/2,Math.min(80,A-16),Math.min(34,F*.9),"700")?n.measureText(_.label).width:0;n.fillStyle=te.ink,_.data.role&&A>90&&We(n,_.data.role,S+26+q,O+F/2,A-40-q,Math.min(22,F*.6))}n.textBaseline="alphabetic",o.push({x:S,y:O,w:A,h:F,kind:"span",span:_})});for(let _ of t.key||[])C(_,(S,A,I,B)=>{let O=c+I*y+y*.28,F=y*.1,W=Bt(_,At);n.fillStyle=Nr(_.data.key,W?.95:.45),n.fillRect(S,O,A,F),W||(n.strokeStyle=te.pencil,n.setLineDash([6,5]),n.strokeRect(S+1,O+1,A-2,F-2),n.setLineDash([])),_.source==="pinned"&&(n.fillStyle=te.accent,n.beginPath(),n.arc(S+10,O+10,6,0,7),n.fill()),n.fillStyle=te.ink,n.textAlign="left",n.textBaseline="middle",(B||A>120)&&We(n,`${qn(_.data.key)}${_.data.key.mode==="minor"?" minor":" major"}${W?"":" ?"}`,S+18,O+F/2,A-24,Math.min(30,F*.7),"600"),n.textBaseline="alphabetic",o.push({x:S,y:O,w:A,h:F,kind:"span",span:_})});for(let _ of t.harmony||[])_.data.none||C(_,(S,A,I,B)=>{if(!B)return;let O=c+I*y+y*.42,F=y*.14,W=Bt(_,At);n.fillStyle=W?te.ink:te.pencil,n.textAlign="left",n.textBaseline="middle",A>14&&We(n,_.label+(W?"":"?"),S+2,O+F/2,Math.max(10,A-3),Math.min(26,F*.55),W?"600":"")||n.fillRect(S+1,O+F*.45,2,F*.1),n.textBaseline="alphabetic",o.push({x:S,y:O,w:Math.max(6,A),h:F,kind:"span",span:_})});for(let _ of t.phrase||[])C(_,(S,A,I,B,O)=>{let F=c+I*y+y*.24,W=y*.03,q=Bt(_,At);n.strokeStyle=q?te.ink:te.pencil,n.lineWidth=2.5,q||n.setLineDash([8,6]),n.beginPath(),n.moveTo(S+3,F+(B?W:0)),n.lineTo(S+3,F),n.lineTo(S+A-3,F),O&&n.lineTo(S+A-3,F+W),n.stroke(),n.setLineDash([]),o.push({x:S,y:F-10,w:A,h:W+14,kind:"span",span:_})});for(let _ of t.cadence||[]){let S=oe(_.start),A=x(S),I=M(S,A),B=c+A*y+y*.24,O=Bt(_,At);n.fillStyle=_.label==="HC"?"#8a5a1a":te.accent,n.globalAlpha=O?1:.55,n.beginPath(),n.moveTo(I,B+2),n.lineTo(I+10,B-13),n.lineTo(I-10,B-13),n.closePath(),n.fill(),n.font=`600 21px ${Se}`,n.textAlign="center",n.fillText(_.label+(O?"":"?"),I,B-17),n.globalAlpha=1,o.push({x:I-26,y:B-40,w:52,h:44,kind:"span",span:_})}return{canvas:s,regions:o,xOf:M,rowOf:x,top:c,rh:y}}var Hn={w:3600,h:1e3},Ft=120,ln=30,hn=130,cn=660,Cs=hn+cn+12,vo=Cs+92,rp=vo+70;function sp(s,e){return e!=="degree"?zr(s.pitch):s.pitch.octave*7+Uo.indexOf(s.pitch.step)+s.pitch.alter/5*.3}function ap(s,e,t,i,n){s=s||ii(Hn.w,Hn.h);let r=s.getContext("2d"),a=s.width,o=[],l=n.axis||"chromatic";Wt(r,a,s.height);let c=e.bars,h=oe(c.at(-1).at)+oe(c.at(-1).dur),u=Math.max(0,Math.min(c.length-1,n.bar||0)),d=oe(c[u].at);n.t!==void 0&&(d=Math.max(0,Math.min(h-1e-6,n.t)),u=Math.max(0,c.findIndex((_,S)=>S+1>=c.length||oe(c[S+1].at)>d+1e-9)));let p=oe(c[u].dur),g=Math.min(h+p*.25,d+p*(n.bars||4)),y=Math.min(c.length,c.findIndex(_=>oe(_.at)>=g-1e-9)<0?c.length:c.findIndex(_=>oe(_.at)>=g-1e-9)),f=_=>Ft+(_-d)/(g-d)*(a-Ft-ln),v=e.notes.filter(_=>!_.percussion&&oe(_.onset)<g-1e-9&&oe(_.onset)+oe(_.dur)>d+1e-9),m=e.notes.filter(_=>!_.percussion).map(_=>sp(_,l)),x=Math.floor(Math.min(...m))-1,M=Math.ceil(Math.max(...m))+1,E=cn/Math.max(12,M-x),w=_=>hn+cn-(_-x+1)*E,R=_=>{let S=Qc(t.key||[],{n:Math.round(_*960),d:960});return S&&S.data.key};r.font=`20px ${Se}`,r.textAlign="right",r.textBaseline="middle";for(let _=x;_<=M;_++){let S=w(_)+E/2;if(l==="degree"){let A=R(d),I=A?Uo.indexOf($c(A.tonic,4).step):0,B=((_-I)%7+7)%7;r.strokeStyle=B===0?te.line:B===4?te.rule:te.faint,r.lineWidth=B===0?2:1,r.beginPath(),r.moveTo(Ft,S),r.lineTo(a-ln,S),r.stroke(),(B===0||B===4)&&(r.fillStyle=B===0?te.ink:te.soft,r.font=`${B===0?"600 ":""}24px ${Se}`,r.fillText(B===0?"1 (tonic)":"5",Ft-12,S))}else{let A=(_%12+12)%12;[1,3,6,8,10].includes(A)&&(r.fillStyle="rgba(160,140,110,.08)",r.fillRect(Ft,w(_),a-Ft-ln,E)),A===0&&(r.strokeStyle=te.rule,r.lineWidth=1.5,r.beginPath(),r.moveTo(Ft,w(_)+E),r.lineTo(a-ln,w(_)+E),r.stroke(),r.fillStyle=te.soft,r.fillText(`C${Math.floor(_/12)-1}`,Ft-12,w(_)+E/2))}}for(let _=u;_<y;_++){let S=c[_],A=Math.max(Ft,f(oe(S.at))),I=e.meter.reduce((O,F)=>oe(F.at)<=oe(S.at)?F:O,e.meter[0]),B=I.den>=8&&I.num%3===0?I.num/3:I.num;r.strokeStyle=te.line,r.lineWidth=2,r.beginPath(),r.moveTo(A,hn-6),r.lineTo(A,hn+cn),r.stroke(),r.strokeStyle=te.faint,r.lineWidth=1;for(let O=1;O<B;O++){let F=f(oe(S.at)+oe(S.dur)*O/B);r.beginPath(),r.moveTo(F,hn),r.lineTo(F,hn+cn),r.stroke()}r.fillStyle=te.soft,r.font=`24px ${Se}`,r.textAlign="left",r.textBaseline="alphabetic",r.fillText(String(S.n),A+6,rp),o.push({x:A,y:rp-30,w:f(_+1<c.length?oe(c[_+1].at):g)-A,h:40,kind:"time",t:oe(S.at),bar:S.n})}for(let _ of v){let S=Math.max(Ft,f(oe(_.onset))),A=Math.min(a-ln,f(oe(_.onset)+Math.max(oe(_.dur),1/64))),I=w(sp(_,l)),B=i?i[_.id]:"other",O=Math.max(6,E*(l==="degree"?.86:.92)),F=Bn[B]||Bn.other;r.fillStyle=F,r.globalAlpha=_.grace?.7:.92;let W=Math.min(8,O/2),q=Math.max(_.grace?10:6,A-S-2);r.beginPath(),r.roundRect(S+1,I+(E-O)/2,q,O,W),r.fill(),r.globalAlpha=1,B==="root"&&(r.strokeStyle="#0d1f4a",r.lineWidth=3,r.stroke()),l==="degree"&&_.pitch.alter&&(r.fillStyle=te.page,r.font=`600 ${Math.round(O*.8)}px ${Se}`,r.textAlign="left",r.textBaseline="middle",r.fillText(_.pitch.alter>0?"♯":"♭",S+6,I+E/2)),o.push({x:S,y:I+(E-O)/2,w:q,h:O,kind:"note",note:_,fn:B})}let b=_=>oe(_.end)>d+1e-9&&oe(_.start)<g-1e-9,T=_=>[Math.max(Ft,f(oe(_.start))),Math.min(a-ln,f(oe(_.end)))];for(let _ of(t.harmony||[]).filter(b)){if(_.data.none)continue;let[S,A]=T(_),I=Bt(_,At);r.strokeStyle=te.faint,r.lineWidth=1,r.strokeRect(S+1,Cs,A-S-2,76),r.fillStyle=I?te.ink:te.pencil,r.textAlign="left",r.textBaseline="middle",(oe(_.start)>=d-1e-9||A-S>120)&&We(r,_.label+(I?"":"?"),S+10,Cs+38,A-S-14,40,I?"600":""),_.source==="pinned"&&(r.fillStyle=te.accent,r.beginPath(),r.arc(A-12,Cs+12,6,0,7),r.fill()),o.push({x:S,y:Cs,w:A-S,h:76,kind:"span",span:_})}for(let _ of(t.key||[]).filter(b)){let[S,A]=T(_),I=Bt(_,At);r.fillStyle=Nr(_.data.key,I?.95:.45),r.fillRect(S,vo,A-S,46),r.fillStyle=te.ink,r.textAlign="left",r.textBaseline="middle",We(r,`${qn(_.data.key)} ${_.data.key.mode}${I?"":" ?"}`,S+12,vo+23,A-S-16,28,"600"),o.push({x:S,y:vo,w:A-S,h:46,kind:"span",span:_})}for(let _ of(t.section||[]).filter(b)){let[S,A]=T(_),I=_.data.color;r.fillStyle=I,r.globalAlpha=.2,r.fillRect(S+1,4,A-S-2,40),r.globalAlpha=1,r.fillRect(S+1,4,oe(_.start)>=d-1e-9?8:2,40),r.textAlign="left",r.textBaseline="middle",r.fillStyle=I;let B=We(r,_.label,S+18,25,90,34,"700")?r.measureText(_.label).width:0;r.fillStyle=te.ink,_.data.role&&We(r,`${_.data.role} · bars ${_.data.bars[0]}–${_.data.bars[1]}`,S+32+B,25,A-S-50-B,24),r.textBaseline="alphabetic",o.push({x:S,y:4,w:A-S,h:40,kind:"span",span:_})}for(let _ of(t.phrase||[]).filter(b)){let[S,A]=T(_),I=Bt(_,At),B=58;r.strokeStyle=I?te.ink:te.pencil,r.lineWidth=3,I||r.setLineDash([10,7]),r.beginPath(),r.moveTo(S+4,B+(oe(_.start)>=d?26:0)),r.lineTo(S+4,B),r.lineTo(A-4,B),oe(_.end)<=g+1e-9&&r.lineTo(A-4,B+26),r.stroke(),r.setLineDash([]),r.fillStyle=te.soft,r.font=`italic 24px ${Se}`,r.textAlign="left",r.textBaseline="alphabetic",oe(_.start)>=d-1e-9&&r.fillText(_.label,S+14,B+30),o.push({x:S,y:B-10,w:A-S,h:44,kind:"span",span:_})}for(let _ of(t.cadence||[]).filter(S=>oe(S.start)>=d-1e-9&&oe(S.start)<g)){let S=f(oe(_.start)),A=Bt(_,At);r.globalAlpha=A?1:.55,r.fillStyle=_.label==="HC"?"#8a5a1a":te.accent,r.font=`600 28px ${Se}`,r.textAlign="center",r.textBaseline="alphabetic",r.fillText(_.label+(A?"":"?"),S,118),r.fillRect(S-1.5,122,3,cn+8),r.globalAlpha=1,o.push({x:S-40,y:92,w:80,h:34,kind:"span",span:_})}return o.push({x:Ft,y:hn,w:a-Ft-ln,h:cn,kind:"moment"}),{canvas:s,regions:o,xOf:f,tAt:_=>d+(_-Ft)/(a-Ft-ln)*(g-d),t0:d,t1:g,b0:u,b1:y,top:hn,notesH:cn}}var Vn={w:2400,h:1697},xo=(s,e)=>{let t=parseInt(s.slice(1),16);return`rgba(${t>>16},${t>>8&255},${t&255},${e})`};function op(s,e,t,i={}){s=s||ii(Vn.w,Vn.h);let n=s.getContext("2d"),r=s.width,a=s.height,o=[];Wt(n,r,a);let l=90,c=(t.form||[])[0],h=t.section||[];if(n.textBaseline="alphabetic",n.textAlign="left",n.fillStyle=te.ink,We(n,e.title||"Untitled",l,100,r-2*l,48,"600"),n.fillStyle=te.soft,We(n,e.composer||"",l,146,r-2*l,28),!c||!h.length)return n.fillStyle=te.soft,n.font=`italic 36px ${Se}`,n.fillText("The structure is being heard…",l,260),{canvas:s,regions:o};let u=Bt(c,At);n.fillStyle=u?te.accent:te.pencil,n.font=`600 84px ${Se}`,n.fillText(c.label+(u?"":" ?"),l,250);let d=n.measureText(c.label+(u?"":" ?")).width;o.push({x:l,y:175,w:d,h:95,kind:"span",span:c}),n.fillStyle=te.soft,n.font=`28px ${Se}`,n.fillText(`${u?"sure":"a guess"} (${Math.round(c.confidence*100)}%)${c.alternatives.length?` · or ${c.alternatives.map(O=>O.label).join(", or ")}`:""} · touch it for why`,l+d+30,240,r-l-(l+d+30)),n.fillStyle=te.ink,n.font=`600 46px ${Se}`,n.fillText(c.data.letters,l,318,r-2*l);let p=oe(e.bars[0].at),g=oe(h.at(-1).end),y=O=>l+(O-p)/(g-p)*(r-2*l),f=360,v=640,m=650,x=170,M=m+x+14,E=[];for(let O of h){let F=O.data.part;F&&E.length&&E.at(-1).p===F?E.at(-1).end=O.end:E.push({p:F,start:O.start,end:O.end})}for(let O of E)if(O.p){let F=y(oe(O.start))+4,W=y(oe(O.end))-4;n.strokeStyle=te.ink,n.lineWidth=3,n.beginPath(),n.moveTo(F,f+26),n.lineTo(F,f),n.lineTo(W,f),n.lineTo(W,f+26),n.stroke(),n.fillStyle=te.ink,n.textAlign="center",We(n,O.p,(F+W)/2,f-12,W-F,34,"600"),n.textAlign="left"}let w=new Map;for(let O of h)w.has(O.data.letter)||w.set(O.data.letter,O);for(let O of h){let F=w.get(O.data.letter);if(F===O)continue;let W=(y(oe(F.start))+y(oe(F.end)))/2,q=(y(oe(O.start))+y(oe(O.end)))/2,re=(q-W)/2,z=Math.min(v-f-70,re*.9);n.strokeStyle=xo(O.data.color,O.data.prime?.55:.85),n.lineWidth=O.data.prime?5:8,O.data.prime&&n.setLineDash([14,9]),n.beginPath(),n.moveTo(W,v),n.bezierCurveTo(W,v-z*1.33,q,v-z*1.33,q,v),n.stroke(),n.setLineDash([])}for(let O of h){let F=y(oe(O.start)),W=y(oe(O.end)),q=W-F,re=O.data.color,z=Bt(O,At);n.fillStyle=xo(re,.22),n.fillRect(F+2,m,q-4,x),n.fillStyle=re,n.fillRect(F+2,m,q-4,12),n.strokeStyle=xo(re,.9),n.lineWidth=2.5,z||n.setLineDash([10,7]),n.strokeRect(F+2,m,q-4,x),n.setLineDash([]),n.fillStyle=re,n.textAlign="center",We(n,O.label,F+q/2,m+88,q-10,Math.min(78,q*.8),"700"),n.fillStyle=te.ink,O.data.role&&We(n,O.data.role.split(": ").pop(),F+q/2,m+128,q-10,24),n.fillStyle=te.soft,We(n,`${O.data.bars[0]}–${O.data.bars[1]}`,F+q/2,m+158,q-10,22),n.textAlign="left",O.data.ends&&(n.fillStyle=O.data.ends==="HC"?"#8a5a1a":te.accent,n.font=`600 22px ${Se}`,n.textAlign="right",n.fillText(O.data.ends,W-8,m+40),n.textAlign="left"),O.source==="pinned"&&(n.fillStyle=te.accent,n.beginPath(),n.arc(F+16,m+30,7,0,7),n.fill()),o.push({x:F,y:m,w:q,h:x,kind:"span",span:O})}for(let O of t.key||[]){let F=y(oe(O.start)),W=y(oe(O.end)),q=Bt(O,At);n.fillStyle=Nr(O.data.key,q?.95:.45),n.fillRect(F,M,W-F,44),n.fillStyle=te.ink,n.textBaseline="middle",We(n,qn(O.data.key),F+8,M+22,W-F-12,26,"600"),n.textBaseline="alphabetic",o.push({x:F,y:M,w:W-F,h:44,kind:"span",span:O})}o.push({x:l,y:M+46,w:r-2*l,h:30,kind:"timeline",X:y,t0:p,t1:g}),n.fillStyle=te.soft,n.font=`22px ${Se}`,n.fillText("key",l-60,M+30);let R=t.matrix,b=M+110,T=a-b-60,C=r-l-T;if(R&&R.length){let O=R.length,F=T/O,W=n.createImageData(Math.ceil(T),Math.ceil(T));for(let q=0;q<W.height;q++)for(let re=0;re<W.width;re++){let z=R[Math.min(O-1,Math.floor(q/F))][Math.min(O-1,Math.floor(re/F))],j=(q*W.width+re)*4,ee=1-Math.max(0,Math.min(1,(z-.3)/.7));W.data[j]=40+207*ee,W.data[j+1]=34+208*ee,W.data[j+2]=30+200*ee,W.data[j+3]=255}n.putImageData(W,C,b);for(let q of h){let re=e.bars.findIndex(z=>oe(z.at)>=oe(q.start)-1e-9);re<=0||(n.strokeStyle=xo(q.data.color,.9),n.lineWidth=2,n.beginPath(),n.moveTo(C+re*F,b),n.lineTo(C+re*F,b+T),n.moveTo(C,b+re*F),n.lineTo(C+T,b+re*F),n.stroke())}n.fillStyle=te.soft,n.font=`22px ${Se}`,n.fillText("bar by bar: how alike (dark = alike)",C,b-12),o.push({x:C,y:b,w:T,h:T,kind:"matrix",n:O,cell:F,x0:C,y0:b})}let _=l,S=C-l-50,A=h.length,I=Math.min(46,(T+20)/(A+1));n.fillStyle=te.soft,n.font=`600 ${Math.round(I*.5)}px ${Se}`;let B=[0,.09,.42,.56,.86];return["","part","bars","keys","ends"].forEach((O,F)=>n.fillText(O,_+B[F]*S,b)),h.forEach((O,F)=>{let W=b+(F+1)*I;n.fillStyle=O.data.color,n.font=`700 ${Math.round(I*.62)}px ${Se}`,n.fillText(O.label,_,W),n.fillStyle=te.ink,n.font=`${Math.round(I*.5)}px ${Se}`,We(n,O.data.role||"—",_+B[1]*S,W,(B[2]-B[1])*S-10,Math.round(I*.5)),We(n,`${O.data.bars[0]}–${O.data.bars[1]}`,_+B[2]*S,W,(B[3]-B[2])*S-10,Math.round(I*.5)),We(n,(O.data.keys||[]).map(q=>q.replace(" major","").replace(" minor","m")).join(" → ")||"—",_+B[3]*S,W,(B[4]-B[3])*S-10,Math.round(I*.5)),We(n,O.data.ends||"—",_+B[4]*S,W,(1-B[4])*S,Math.round(I*.5)),o.push({x:_,y:W-I*.75,w:S,h:I,kind:"span",span:O})}),{canvas:s,regions:o,X:y,cursorY:m,cursorH:x+58}}var ag=[0,2,4,5,7,9,11],og=[0,2,3,5,7,8,11];function lg(s,e,t=s,i=1.6){let n=jn(s),r=jn(t),a=(Do[e]||Do.M).map(c=>(n+c)%12),o=48+r,l=a.filter((c,h)=>!(c===r&&h===a.indexOf(r))).map(c=>{let h=o+(c-r+12)%12;return h<=o+2?h+12:h}).sort((c,h)=>c-h);return[{t:0,d:i,pitches:[o,...l]}]}function hg(s){let e=jn(s.tonic),t=s.mode==="minor"?og:ag,i=60+(e>6?e-12:e),n=[];[...t,12].forEach((a,o)=>n.push({t:o*.24,d:.26,pitches:[i+a]}));let r=s.mode==="minor"?[0,3,7]:[0,4,7];return n.push({t:8*.24+.1,d:1.4,pitches:[i-12,...r.map(a=>i+a)]}),n}var lp=s=>69+s/100;function cg(s,e,t=.3){let i=tu[s];if(!i)return[];let n=[...i.scale].sort((h,u)=>h-u),r=i.forms||[],a=n.filter(h=>!r.some(([u])=>u===h)),o=n.filter(h=>!r.some(([,u])=>u===h)),l=[...a.filter(h=>h<53),53,...o.filter(h=>h<53).reverse()],c=l.map((h,u)=>({t:u*t,d:t*1.1,pitches:[lp(e+h*zs)]}));return c.at(-1).d=1.2,c}function ug(s,e,t=.32){let i=(eu[s]||[])[0];if(!i)return[];let n=[0];for(let o of i)n.push(n.at(-1)+o);let r=[...n,...n.slice(0,-1).reverse()],a=r.map((o,l)=>({t:l*t,d:t*1.1,pitches:[lp(e+o*zs)]}));return a.at(-1).d=1,a}var Ps=(s,e=.9)=>[{t:0,d:e,pitches:[s]}];function vc(s,e,t={}){if(!e)return null;if(s==="harmony"&&!e.none&&e.root!==void 0)return lg(e.root,e.type,e.bass??e.root);if(s==="key"&&e.key)return hg(e.key);if(s==="makam"){let i=t.makamInfo;if(!i)return null;if(e.whole||e.makam)return cg(e.makam||i.makam,i.karar);if(e.cesni){let n=i.perdes.filter(l=>l.name===e.on).sort((l,c)=>c.seconds-l.seconds)[0],r=No(i.kararPerde),a=No(e.on),o=n?n.cents:r&&a?i.karar+(a.commas-r.commas)*zs:null;return o===null?null:ug(e.cesni,o)}}return null}var hp=s=>Ps(Hr(s));var dg=1200/53,dp=(s,e)=>Math.abs(s.off)>=.5?[{t:0,d:.8,pitches:[69+s.cents/100]},{t:.9,d:.8,pitches:[69+(e+(s.rel-s.off)*dg)/100]}]:Ps(69+s.cents/100),pp=s=>`${s.name}${Math.abs(s.off)>=.5?`: as played, then where AEU writes it (${s.off>0?"+":""}${s.off.toFixed(1)} commas off)`:""}`,cp={Uşşak:28,Hüseynî:28,Bûselik:200,Rast:120,Çârgâh:160,Segâh:300,Kürdî:250,Hicâz:0,Sabâ:330},Is=(s,e=1)=>s in cp?`hsla(${cp[s]}, 45%, 62%, ${e})`:`rgba(160,150,130,${e})`,up={çarpma:"#b3261e",trill:"#8a2f8a",glide:"#1f5f9f",vibrato:"#2f7d4c"},xc=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`,wt=4;function fp(s,e,t,i,n={}){s=s||ii(3600,1e3);let r=s.getContext("2d"),a=s.width,o=s.height,l=[],c=e.line,h=t.makamInfo;Wt(r,a,o);let u=250,d=30,p=120,g=640,y=p+g+24,f=y+92,v=e.audio.seconds,m=Math.max(4,(n.bars||4)*wt),x=Math.max(0,Math.min(v-1,(n.t||0)*wt)),M=Math.min(v+.5,x+m),E=z=>u+(z-x)/(M-x)*(a-u-d),w=z=>E(z*wt),R=Math.max(0,Math.floor(x/c.hop)),b=Math.min(c.cents.length,Math.ceil(M/c.hop)),T=1/0,C=-1/0;for(let z=R;z<b;z++){let j=c.cents[z];j===j&&(T=Math.min(T,j),C=Math.max(C,j))}T<C||(T=h.karar-100,C=h.karar+1200);let _=(T+C)/2,S=Math.max(650,(C-T)/2+80);T=_-S,C=_+S;let A=z=>p+g-(z-T)/(C-T)*g;r.textAlign="right",r.textBaseline="middle";let I=new Set(h.perdes.filter(z=>!h.perdes.some(j=>j!==z&&j.name===z.name&&j.seconds>z.seconds))),B=-1/0;for(let z of[...h.perdes].sort((j,ee)=>ee.cents-j.cents)){if(z.cents<T||z.cents>C||!I.has(z))continue;let j=A(z.cents),ee=Math.abs(z.rel)<1||Math.abs(z.rel-53)<1,le=h.gucluler.includes(z.name);r.strokeStyle=ee?te.accent:le?te.blue:te.faint,r.lineWidth=ee||le?2.5:1.2,r.beginPath(),r.moveTo(u,j),r.lineTo(a-d,j),r.stroke(),!(j-B<40&&!ee&&!le)&&(B=j,r.fillStyle=ee?te.accent:le?te.blue:te.ink,r.font=`${ee||le?"600 ":""}26px ${Se}`,r.fillText(z.name+(z.degree?"":" ~"),u-14,j-8),r.fillStyle=te.soft,r.font=`18px ${Se}`,r.fillText(`${z.rel>=0?"+":""}${z.rel.toFixed(1)} k`,u-14,j+14),l.push({x:0,y:j-30,w:u-4,h:50,kind:"sound",events:dp(z,h.karar),prog:77,label:pp(z)}))}r.textAlign="left",r.textBaseline="alphabetic";for(let z=Math.ceil(x);z<=M;z++){let j=E(z);r.strokeStyle=z%5?"rgba(200,190,165,.35)":te.faint,r.lineWidth=1,r.beginPath(),r.moveTo(j,p-10),r.lineTo(j,p+g),r.stroke(),z%5===0&&(r.fillStyle=te.soft,r.font=`22px ${Se}`,r.fillText(xc(z),j+4,p-16))}l.push({x:u,y:p-50,w:a-u-d,h:44,kind:"timeline",t0:x/wt,t1:M/wt});let O=(t.makam||[]).filter(z=>!z.data.whole&&oe(z.end)*wt>x&&oe(z.start)*wt<M);for(let z of O){let j=Math.max(u,E(oe(z.start)*wt)),ee=Math.min(a-d,E(oe(z.end)*wt));r.fillStyle=Is(z.data.cesni,.07),r.fillRect(j,p,ee-j,g),r.fillStyle=Is(z.data.cesni,.55),r.fillRect(j+1,y,ee-j-2,58),r.fillStyle=te.ink,r.textBaseline="middle",We(r,`${z.label}${z.source==="pinned"?" •":" ?"}`,j+10,y+29,ee-j-16,28,"600"),r.textBaseline="alphabetic",l.push({x:j,y,w:ee-j,h:58,kind:"span",span:z})}for(let z=0;z<c.notes.length;z++){let j=c.notes[z];if(j.t+j.d<x||j.t>M)continue;let ee=Math.max(u,E(j.t)),le=Math.min(a-d,E(j.t+j.d)),ue=A(j.cents);r.fillStyle=j.vibrato?"rgba(47,125,76,.22)":"rgba(120,105,80,.18)",r.beginPath(),r.roundRect(ee,ue-13,Math.max(4,le-ee),26,10),r.fill(),l.push({x:ee,y:ue-13,w:Math.max(4,le-ee),h:26,kind:"note",note:e.notes[z]||null,line:j,fn:"other"})}r.strokeStyle=te.ink,r.lineWidth=2.2,r.beginPath();let F=!1,W=NaN;for(let z=R;z<b;z++){let j=c.cents[z];if(j!==j||j<T||j>C){F=!1;continue}let ee=E(z*c.hop),le=A(j);F&&Math.abs(j-W)<250?r.lineTo(ee,le):r.moveTo(ee,le),F=!0,W=j}r.stroke(),r.textAlign="center";for(let z of t.ornament||[]){let j=z.data,ee=j.t;if(ee+j.d<x||ee>M)continue;let le=E(ee),ue=E(ee+j.d),N=up[j.kind];if(r.fillStyle=N,r.strokeStyle=N,j.kind==="vibrato"){let U=c.notes.find(V=>Math.abs(V.t-ee)<1e-6);if(!U)continue;let X=A(U.cents)-32;r.lineWidth=2,r.beginPath();for(let V=le;V<=ue;V+=3){let k=(V-le)/Math.max(1,ue-le)*j.rate*j.d*2*Math.PI,G=X+6*Math.sin(k);V===le?r.moveTo(V,G):r.lineTo(V,G)}r.stroke(),ue-le>150&&(r.font=`18px ${Se}`,r.fillText(`${j.rate.toFixed(1)} Hz ±${j.extent.toFixed(0)}¢`,(le+ue)/2,X-14)),r.fillRect(le,f+30,Math.max(3,ue-le),6)}else if(j.kind==="glide")r.lineWidth=2.5,r.setLineDash([8,6]),r.beginPath(),r.moveTo(le,A(j.from)),r.lineTo(ue,A(j.to)),r.stroke(),r.setLineDash([]),r.font=`600 22px ${Se}`,r.fillText("gl",le,f+18);else{let U=A(j.cents),X=j.dir==="up";r.beginPath(),r.moveTo(le-9,U+(X?14:-14)),r.lineTo(le+9,U+(X?14:-14)),r.lineTo(le,U),r.closePath(),r.fill(),r.font=`600 22px ${Se}`,r.fillText(j.kind==="trill"?"tr":"ç",le,f+18),r.lineWidth=1,r.globalAlpha=.35,r.beginPath(),r.moveTo(le,U),r.lineTo(le,f-4),r.stroke(),r.globalAlpha=1}l.push({x:Math.min(le,ue)-10,y:f-6,w:Math.max(20,ue-le+20),h:46,kind:"span",span:z})}r.textAlign="left",r.font=`22px ${Se}`;let q=u;for(let[z,j]of[["çarpma","ç çarpma"],["trill","tr trill"],["glide","gl glide"],["vibrato","∿ vibrato"]])r.fillStyle=up[z],r.fillText(j,q,o-14),q+=170;return r.fillStyle=te.soft,r.fillText(`${t.makamInfo.makam} ? · karar ${t.makamInfo.kararPerde} at ${t.makamInfo.kararHz.toFixed(1)} Hz · pencil: heard, not checked`,q+30,o-14),l.push({x:u,y:p,w:a-u-d,h:g,kind:"moment"}),{canvas:s,regions:l,xOf:w,tAt:z=>(x+(z-u)/(a-u-d)*(M-x))/wt,t0:x/wt,t1:M/wt,top:p,notesH:g}}function mp(s,e,t){s=s||ii(2400,1697);let i=s.getContext("2d"),n=s.width,r=s.height,a=[],o=e.line,l=t.makamInfo,c=t.makam[0];Wt(i,n,r);let h=90,u=e.audio.seconds;i.textAlign="left",i.textBaseline="alphabetic",i.fillStyle=te.ink,We(i,e.title||"Untitled",h,100,n-2*h,48,"600"),i.fillStyle=te.pencil,i.font=`600 84px ${Se}`,i.fillText(`${l.makam} ?`,h,220),a.push({x:h,y:150,w:900,h:90,kind:"span",span:c}),i.fillStyle=te.soft,We(i,`karar ${l.kararPerde} (${l.kararHz.toFixed(1)} Hz) · güçlü ${l.gucluler.join(", ")} · seyir ${l.seyir} · ${xc(u)}`,h,272,n-2*h,30);let d=330,p=760,g=b=>h+b/u*(n-2*h-160),y=l.perdes.map(b=>b.cents),f=Math.min(...y)-60,v=Math.max(...y)+60,m=b=>d+p-(b-f)/(v-f)*p;i.textAlign="left",i.textBaseline="middle";let x=new Set(l.perdes.filter(b=>!l.perdes.some(T=>T!==b&&T.name===b.name&&T.seconds>b.seconds)));for(let b of l.perdes){if(!x.has(b))continue;let T=m(b.cents),C=Math.abs(b.rel)<1||Math.abs(b.rel-53)<1,_=l.gucluler.includes(b.name);i.strokeStyle=C?te.accent:_?te.blue:te.faint,i.lineWidth=C||_?2:1,i.beginPath(),i.moveTo(h,T),i.lineTo(g(u),T),i.stroke(),i.fillStyle=C?te.accent:_?te.blue:te.soft,i.font=`${C||_?"600 ":""}20px ${Se}`,i.fillText(b.name,g(u)+10,T)}for(let b of t.makam.slice(1)){let T=g(oe(b.start)*wt),C=g(oe(b.end)*wt);i.fillStyle=Is(b.data.cesni,.1),i.fillRect(T,d,C-T,p)}i.strokeStyle=te.ink,i.lineWidth=2,i.beginPath();let M=null;for(let b of o.notes){let T=g(b.t),C=g(b.t+b.d),_=m(b.cents);M&&b.t-M.e<.25?i.lineTo(T,_):i.moveTo(T,_),i.lineTo(C,_),M={e:b.t+b.d}}i.stroke();for(let b=0;b<=u;b+=30)i.fillStyle=te.soft,i.font=`20px ${Se}`,i.textBaseline="alphabetic",i.fillText(xc(b),g(b)+4,d+p+30);a.push({x:h,y:d,w:g(u)-h,h:p,kind:"timeline",t0:0,t1:u/wt});let E=d+p+50;for(let b of t.makam.slice(1)){let T=g(oe(b.start)*wt),C=g(oe(b.end)*wt);i.fillStyle=Is(b.data.cesni,.6),i.fillRect(T,E,Math.max(2,C-T-1),56),i.fillStyle=te.ink,i.textBaseline="middle",i.textAlign="left",C-T>40&&We(i,b.data.on,T+6,E+28,C-T-10,18),a.push({x:T,y:E,w:Math.max(4,C-T),h:56,kind:"span",span:b})}i.textBaseline="middle",i.textAlign="left";let w=h,R=r-50;for(let b of[...new Set(t.makam.slice(1).map(T=>T.data.cesni))])i.fillStyle=Is(b,.6),i.fillRect(w,R-14,28,28),i.fillStyle=te.ink,i.font=`22px ${Se}`,i.fillText(b,w+36,R),w+=60+i.measureText(b).width+20;return{canvas:s,regions:a,X:b=>g(b*wt),cursorY:d,cursorH:p}}function gp(s,e,t){s=s||ii(2400,1697);let i=s.getContext("2d"),n=s.width,r=s.height,a=[],o=t.makamInfo;Wt(i,n,r);let l=90;i.textAlign="left",i.textBaseline="alphabetic",i.fillStyle=te.ink,We(i,"Perdes, as played",l,100,n-2*l,48,"600"),i.fillStyle=te.soft,We(i,`commas (k, 22.6 cents) over the karar, ${o.kararPerde}; the dot where AEU writes the perde; the bar, how long it is held. Touch a perde to hear it.`,l,150,n-2*l,26);let c=[...o.perdes].sort((b,T)=>T.cents-b.cents),h=200,u=Math.min(70,(r-h-420)/c.length),d=760,p=900,g=Math.min(...c.map(b=>b.rel))-3,y=Math.max(...c.map(b=>b.rel))+3,f=b=>d+(b-g)/(y-g)*p,v=Math.max(...c.map(b=>b.seconds));c.forEach((b,T)=>{let C=h+T*u+u/2,_=Math.abs(b.rel)<1||Math.abs(b.rel-53)<1,S=o.gucluler.includes(b.name);i.fillStyle=_?te.accent:S?te.blue:te.ink,i.font=`${_||S?"600 ":""}30px ${Se}`,i.textBaseline="middle",i.fillText(b.name+(b.degree?"":" ~"),l,C),i.fillStyle=te.soft,i.font=`24px ${Se}`,i.fillText(`${b.rel>=0?"+":""}${b.rel.toFixed(1)} k · ${Math.round(b.rel*1200/53)}¢ · ${b.off>=0?"+":""}${b.off.toFixed(1)} k off`,l+300,C),i.strokeStyle=te.faint,i.lineWidth=1,i.beginPath(),i.moveTo(d,C),i.lineTo(d+p,C),i.stroke(),i.fillStyle=te.soft,i.beginPath(),i.arc(f(b.rel-b.off),C,7,0,7),i.fill(),i.fillStyle=_?te.accent:te.ink,i.beginPath(),i.arc(f(b.rel),C,11,0,7),i.fill(),i.fillStyle="rgba(31,63,143,.35)",i.fillRect(d+p+60,C-u*.3,b.seconds/v*400,u*.6),i.fillStyle=te.soft,i.font=`20px ${Se}`,i.fillText(`${b.seconds.toFixed(0)} s`,d+p+70+b.seconds/v*400,C),a.push({x:l,y:C-u/2,w:n-2*l,h:u,kind:"sound",events:dp(b,o.karar),prog:77,label:pp(b)})});let m=t.ornament||[],x=b=>m.filter(T=>T.label===b).length,M=m.filter(b=>b.label==="vibrato").map(b=>b.data),E=b=>{let T=[...b].sort((C,_)=>C-_);return T.length?T[T.length>>1]:0},w=m.filter(b=>b.label==="çarpma").map(b=>b.data),R=r-190;return i.textBaseline="alphabetic",i.fillStyle=te.ink,i.font=`600 34px ${Se}`,i.fillText("Ornaments",l,R),i.font=`26px ${Se}`,i.fillStyle=te.ink,i.fillText(`çarpma ${x("çarpma")} (${w.filter(b=>b.dir==="up").length} up, ${w.filter(b=>b.dir!=="up").length} down; ${w.filter(b=>b.atOnset).length} as a note begins; median ${Math.round(E(w.map(b=>b.d))*1e3)} ms) · trill ${x("trill")} · glide ${x("glide")}`,l,R+50),i.fillText(`vibrato on ${M.length} notes: median ${E(M.map(b=>b.rate)).toFixed(1)} swings a second, ±${E(M.map(b=>b.extent)).toFixed(0)} cents`,l,R+92),i.fillStyle=te.soft,i.font=`italic 22px ${Se}`,i.fillText("Heard from the recording, not checked against a transcription: pencil.",l,R+134),{canvas:s,regions:a}}var Gn={w:3600,h:1600},Rt=330,Wi=30,Xi=70,vp=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`,pg={tempo:["Tempo","beats a minute",!0,"The beat heard, beat by beat: 60 over the time between two beats. Checked against the MIDI of the owner's songs (beats F1 about 72% on the tune split, 68% held out); on some songs the beat is heard at half (or double) the tempo the MIDI counts."],pace:["Pace","notes a second",!0,"How many notes the line plays a second, over two seconds. A taksim has no beat: this is its rhythm."],rests:["Rests","",!0,"Where the line stops for 0.3 s or more, and how long."],beats:["Beats and bars","",!0,"The beats heard (thin) and the bar lines (thick), as on the roll."],drums:["Hits","",!1,"Struck sounds, in the percussive part of the sound (the spectrogram split into what is struck and what is held): drums, but a piano's hammers and plucked strings too. Against the owner's stems' drum MIDI, 58% F1 (precision 69%), 53% held out; on music with no drums it still finds them: about 220 a minute on rendered piano, 60 on bowed strings."],kick:["  low (kick?)","",!1,"Hits under 150 Hz: a kick, or a bass note struck. On rendered drums the kick is found at 45% F1."],snare:["  middle (snare?)","",!1,"Hits between 150 and 2500 Hz: a snare, or a struck note. On rendered drums the snare is found at 40% F1."],hat:["  high (hi-hat?)","",!1,"Hits over 5 kHz: a hi-hat or cymbal. On rendered drums the hi-hat is found at 87% F1."],density:["Onsets","a second",!0,"How many new sounds start each second (peaks of the onset envelope)."],groove:["Off the beat / swing","",!1,"Over each 8 beats: the share of onsets off the beat and its midpoint (syncopation, bar), and where the notes between two beats fall (swing: 0.50 straight, 0.67 a triplet swing). Read on the beats heard, which can be at half tempo or half a beat off."],pump:["Pumping","dB",!1,"How far the held part of the mix ducks just after each kick (sidechain compression), over each 5 s. Not checked against known pumping."],loud:["Loudness","dB",!0,"The level over 0.4 s, the sub-bass counting less (relative dB, not LUFS)."],punch:["Punch","dB",!0,"Peaks over the level of the last three seconds: high where hits stand out, low where the mix is squashed (compressed, limited). A held tone reads about 6 dB, struck notes 12 or more."],bright:["Brightness","Hz",!0,"The spectrum's centre of mass: it rises with cymbals and open filters, falls as a filter closes (a sweep shows as a slope)."],grit:["Grit","",!1,"How flattened the wave is, a fiftieth of a second at a time: clean sound has peaks well above its level (about 8 dB), a driven or clipped one has not (1–4 dB). Drawn so that up is grittier. Checked on renders driven on purpose; not on real effects. A simple clean tone reads low too (a sine 3 dB, a sawtooth 6): compare within a recording, not between. Not drawn for a solo line."],width:["Width","",!0,"How much of the sound differs between the two sides (side over side and middle): 0 mono, 0.5 two unrelated sides."],pan:["Pan","",!0,"Where the sound leans: left down, right up, the middle line centre."],alike:["Sides alike","",!0,"How alike the two sides are (correlation): 1 mono, 0 unrelated, below 0 out of phase (it would thin out on one speaker)."]};function xp(s,e,t,i,n={}){s=s||ii(Gn.w,Gn.h);let r=s.getContext("2d"),a=s.width,o=s.height,l=[],c=e.tracks;if(Wt(r,a,o),r.textBaseline="alphabetic",r.textAlign="left",!c)return r.fillStyle=te.soft,r.font=`italic 44px ${Se}`,r.fillText(n.hint||"Tracks are heard from recordings: this piece has none.",Rt,200),{canvas:s,regions:l};let h=i?i.t0:0,u=i?i.t1:1,d=_=>yi(e,li(Math.round(_*3840),3840)),p=d(h),g=Math.max(p+.5,d(u)),y=_=>Rt+(_-p)/(g-p)*(a-Rt-Wi),f=_=>y(d(_)),v=c.rhythm,m=c.mix,E=(!!e.line?["pace","rests","loud","punch","bright","width","pan","alike"]:["tempo","beats","drums","kick","snare","hat","density","groove","pump","loud","punch","bright","grit","width","pan","alike"]).filter(_=>!["width","pan","alike"].includes(_)||m[_]),w=E.indexOf("loud"),R=(o-Xi-60-40)/E.length;r.fillStyle=te.soft,r.font=`24px ${Se}`,r.fillText(`${vp(p)} – ${vp(g)}`,Rt,Xi-30),r.textAlign="right",r.fillText("ink: checked · pencil: read from the sound, unchecked",a-Wi,Xi-30),r.textAlign="left",l.push({x:Rt,y:Xi-60,w:a-Rt-Wi,h:40,kind:"timeline",t0:h,t1:u});let b=(_,S,A,I,B,O,F,W,q={})=>{let re=le=>I+B-6-(Math.max(O,Math.min(F,le))-O)/(F-O)*(B-12);q.mid!==void 0&&(r.strokeStyle=te.faint,r.lineWidth=1,r.beginPath(),r.moveTo(Rt,re(q.mid)),r.lineTo(a-Wi,re(q.mid)),r.stroke()),r.strokeStyle=W?te.ink:te.pencil,r.lineWidth=3,W||r.setLineDash([12,6]),r.beginPath();let z=!1,j=Math.max(0,Math.floor((p-A)/S)-1),ee=Math.min(_.length,Math.ceil((g-A)/S)+1);for(let le=j;le<ee;le++){let ue=_[le];if(ue==null||ue!==ue){z=!1;continue}let N=y(A+le*S),U=re(q.map?q.map(ue):ue);if(N<Rt||N>a-Wi){z=!1;continue}if(q.bars){r.fillStyle=W?"rgba(44,40,33,.55)":"rgba(155,146,132,.5)";let X=y(A+S)-y(A),V=Math.max(Rt,N-X/2+1),k=Math.min(a-Wi,N+X/2-1);k>V&&r.fillRect(V,U,k-V,I+B-6-U);continue}z?r.lineTo(N,U):r.moveTo(N,U),z=!0}r.stroke(),r.setLineDash([]),r.fillStyle=te.soft,r.font=`18px ${Se}`,r.textAlign="right",r.fillText(q.hiLabel??String(F),Rt-14,I+18),r.fillText(q.loLabel??String(O),Rt-14,I+B-6),r.textAlign="left"},T=(_,S,A,I,B=2)=>{r.strokeStyle=I?te.ink:te.pencil,r.lineWidth=B,r.beginPath();for(let O of _){if(O<p||O>g)continue;let F=y(O);r.moveTo(F,S+6),r.lineTo(F,S+A-6)}r.stroke()},C=(_,S,A)=>{let I=_.filter(F=>F!==null&&F===F).sort((F,W)=>F-W);if(!I.length)return[S,A];let B=I[Math.floor(I.length*.05)],O=I[Math.floor(I.length*.95)];return[Math.min(S,Math.floor(B-5)),Math.max(A,Math.ceil(O+5))]};return E.forEach((_,S)=>{let A=Xi+S*R+(S>=w?40:0),I=R-4,[B,O,F,W]=pg[_];if(r.fillStyle=S%2?"rgba(160,140,110,.05)":"rgba(160,140,110,.10)",r.fillRect(Rt,A,a-Rt-Wi,I),r.save(),r.beginPath(),r.rect(0,A,a-Wi,I),r.clip(),r.fillStyle=F?te.ink:te.pencil,r.font=`${F?"600 ":"italic "}26px ${Se}`,r.textBaseline="middle",We(r,B+(O?` (${O})`:""),16,A+I/2,Rt-90,26,F?"600":""),r.textBaseline="alphabetic",_==="tempo"){let[q,re]=C(v.tempo,60,140),z=ee=>A+I-6-(ee-q)/(re-q)*(I-12);r.strokeStyle=te.ink,r.lineWidth=3,r.beginPath();let j=!1;v.tempo.forEach((ee,le)=>{let ue=v.beats[le];if(ue<p-2||ue>g+2){j=!1;return}j?r.lineTo(y(ue),z(ee)):r.moveTo(y(ue),z(ee)),j=!0}),r.stroke(),r.fillStyle=te.soft,r.font=`18px ${Se}`,r.textAlign="right",r.fillText(String(re),Rt-14,A+18),r.fillText(String(q),Rt-14,A+I-6),r.textAlign="left"}if(_==="pace"&&b(v.pace,1,0,A,I,0,Math.max(4,Math.ceil(Math.max(...v.pace))),F,{bars:!0}),_==="rests"){r.fillStyle="rgba(31,63,143,.35)";for(let[q,re]of v.rests)q+re>p&&q<g&&r.fillRect(y(q),A+8,Math.max(2,y(q+re)-y(q)),I-16)}if(_==="beats"&&(T(v.beats,A,I,!0,1.5),T(e.bars.map(q=>yi(e,q.at)),A,I,!0,4)),_==="drums"&&T(v.hits.any,A,I,!0,3),_==="kick"&&T(v.hits.low,A,I,!1),_==="snare"&&T(v.hits.mid,A,I,!1),_==="hat"&&T(v.hits.high,A,I,!1),_==="density"&&b(v.density,1,.5,A,I,0,Math.max(6,Math.ceil(Math.max(...v.density))),F,{bars:!0}),_==="groove")for(let q of v.grid){let re=v.beats.findIndex(le=>Math.abs(le-q.t)<.002),z=re>=0?v.beats[Math.min(v.beats.length-1,re+8)]:q.t+4;if(z<p||q.t>g)continue;let j=Math.max(Rt,y(q.t)),ee=Math.min(a-Wi,y(z));q.sync!==null&&(r.fillStyle="rgba(155,146,132,.35)",r.fillRect(j+2,A+I-6-q.sync*(I-12),ee-j-4,q.sync*(I-12))),q.swing!==null&&ee-j>60&&(r.fillStyle=te.pencil,r.font=`italic 20px ${Se}`,r.fillText(`swing ${q.swing.toFixed(2)}`,j+8,A+24))}if(_==="pump"&&b(v.pump,5,2.5,A,I,0,6,F,{bars:!0}),_==="loud"){let[q,re]=C(m.loud,-40,-10);b(m.loud,m.step,m.step/2,A,I,Math.max(q,-60),re,F)}_==="punch"&&b(m.punch,m.step,m.step/2,A,I,0,24,F),_==="bright"&&b(m.bright,m.step,m.step/2,A,I,Math.log2(200),Math.log2(6e3),F,{map:q=>Math.log2(Math.max(1,q)),loLabel:"200",hiLabel:"6000"}),_==="grit"&&b(m.grit,m.step,m.step/2,A,I,0,8,F,{map:q=>9-q,loLabel:"clean",hiLabel:"gritty"}),_==="width"&&b(m.width,m.step,m.step/2,A,I,0,.6,F),_==="pan"&&b(m.pan,m.step,m.step/2,A,I,-1,1,F,{mid:0,loLabel:"L",hiLabel:"R"}),_==="alike"&&b(m.alike,m.step,m.step/2,A,I,-1,1,F,{mid:0}),r.restore(),l.push({x:0,y:A,w:a,h:I,kind:"span",span:{layer:"track",start:li(Math.round(h*3840),3840),end:li(Math.round(u*3840),3840),label:B.trim(),confidence:F?1:.5,alternatives:[],explanation:W,source:"auto",data:{lane:_}}})}),w>0&&(r.fillStyle=te.soft,r.font=`600 22px ${Se}`,r.fillText("HOW IT IS MADE",16,Xi+w*R+28)),r.fillStyle=te.soft,r.font=`600 22px ${Se}`,r.fillText("RHYTHM",16,Xi-30),{canvas:s,regions:l,xOf:f,t0:h,t1:u,top:Xi,notesH:o-Xi-60}}var Mp=Math.hypot;function bp(s,e,t,i){let[n,r,a]=i.a,[o,l,c]=i.b,h=o-n,u=l-r,d=c-a,p=s-n,g=e-r,y=t-a,f=h*h+u*u+d*d,v=f?Math.max(0,Math.min(1,(p*h+g*u+y*d)/f)):0,m=p-h*v,x=(g-u*v)/i.flat,M=y-d*v;return Math.sqrt(m*m+x*x+M*M)-(i.ra+(i.rb-i.ra)*v)}var ni=(s,e,t={})=>({a:s,b:s,ra:e,rb:e,k:.03,flat:1,part:"body",...t}),un=(s,e,t,i,n={})=>({a:s,b:e,ra:t,rb:i,k:.02,flat:1,part:"body",...n});function Ri(s,e,t,i){let n=1e3;for(let r of s){let a=bp(e,t,i,r),o=Math.max(r.k-Math.abs(n-a),0)/r.k;n=Math.min(n,a)-o*o*r.k*.25}return Math.max(n,-t)}function Sp(s,e,t,i){let n={},r=0;for(let a of s){let o=Math.exp(-Math.max(0,bp(e,t,i,a))/.011);n[a.part]=Math.max(n[a.part]||0,o)}for(let a in n)r+=n[a];for(let a in n)n[a]/=r;return n}function wp(...s){let e={pos:[],nor:[],idx:[]};for(let t of s){let i=e.pos.length/3;for(let n of t.pos)e.pos.push(n);for(let n of t.nor)e.nor.push(n);for(let n of t.idx)e.idx.push(n+i)}return e}function yc(s,e,t,i){let n=[0,1,2].map(v=>Math.ceil((t[v]-e[v])/i)+1),[r,a,o]=n,l=(v,m,x)=>(x*a+m)*r+v,c=new Float32Array(r*a*o),h=new Int32Array(r*a*o).fill(-1),u=5,d=i*u*.9+.004;for(let v=0;v<o;v+=u)for(let m=0;m<a;m+=u)for(let x=0;x<r;x+=u){let M=Ri(s,e[0]+(x+2)*i,e[1]+(m+2)*i,e[2]+(v+2)*i),E=Math.abs(M)>d;for(let w=v;w<Math.min(o,v+u);w++)for(let R=m;R<Math.min(a,m+u);R++)for(let b=x;b<Math.min(r,x+u);b++)c[l(b,R,w)]=E?M:Ri(s,e[0]+b*i,e[1]+R*i,e[2]+w*i)}let p=[],g=[],y=[];for(let v=0;v<o-1;v++)for(let m=0;m<a-1;m++)for(let x=0;x<r-1;x++){let M=0,E=0,w=0,R=0,b=0,T=[];for(let W=0;W<8;W++){let q=c[l(x+(W&1),m+(W>>1&1),v+(W>>2))];T.push(q),q<0&&(M|=1<<W)}if(M===0||M===255)continue;for(let W=0;W<8;W++)for(let q of[1,2,4]){if(W&q)continue;let re=T[W],z=T[W|q];if(re<0==z<0)continue;let j=re/(re-z);w+=(W&1)+(q===1?j:0),R+=(W>>1&1)+(q===2?j:0),b+=(W>>2)+(q===4?j:0),E++}let C=e[0]+(x+w/E)*i,_=e[1]+(m+R/E)*i,S=e[2]+(v+b/E)*i,A=i*.5,I=Ri(s,C+A,_,S)-Ri(s,C-A,_,S),B=Ri(s,C,_+A,S)-Ri(s,C,_-A,S),O=Ri(s,C,_,S+A)-Ri(s,C,_,S-A),F=Mp(I,B,O)||1;I/=F,B/=F,O/=F,h[l(x,m,v)]=p.length/3,p.push(C,_,S),g.push(I,B,O)}let f=(v,m,x,M,E)=>{v<0||m<0||x<0||M<0||(E?y.push(v,x,m,v,M,x):y.push(v,m,x,v,x,M))};for(let v=1;v<o-1;v++)for(let m=1;m<a-1;m++)for(let x=1;x<r-1;x++){let M=c[l(x,m,v)]<0;M!==c[l(x+1,m,v)]<0&&f(h[l(x,m-1,v-1)],h[l(x,m,v-1)],h[l(x,m,v)],h[l(x,m-1,v)],!M),M!==c[l(x,m+1,v)]<0&&f(h[l(x-1,m,v-1)],h[l(x-1,m,v)],h[l(x,m,v)],h[l(x,m,v-1)],!M),M!==c[l(x,m,v+1)]<0&&f(h[l(x-1,m-1,v)],h[l(x,m-1,v)],h[l(x,m,v)],h[l(x-1,m,v)],!M)}return{pos:p,nor:g,idx:y}}var ji=(s,e,t)=>[e*Math.cos(s*Math.PI/180),t,-e*Math.sin(s*Math.PI/180)];var Ci=(s,e,t=1)=>s.map((i,n)=>i+e[n]*t),yo=s=>{let e=Mp(...s)||1;return s.map(t=>t/e)},yp=(s,e)=>[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]];function _p(s,e,t){let i=0;for(let n=0;n<40&&Ri(s,...Ci(e,t,i))<0;n++)i+=.004;for(let n=0;n<12;n++){let r=.004/2**(n+1);i+=Ri(s,...Ci(e,t,i))<0?r:-r}return Ci(e,t,i)}function Tp(s){let e=s==="dog",t=e?1.28:1,i=(e?.118:.104)*t,n=[],r=e?[[205,.08],[160,.092],[115,.086],[70,.088],[25,.084],[-8,.068]]:[[205,.066],[165,.075],[120,.073],[75,.069],[30,.064],[-5,.054]];r.forEach(([f,v],m)=>{m&&n.push(un(ji(r[m-1][0],i,r[m-1][1]*t*.86),ji(f,i,v*t*.86),r[m-1][1]*t*.92,v*t*.92,{k:.03*t}))}),n.push(ni(ji(188,i*1.02,(e?.078:.07)*t),(e?.066:.06)*t,{k:.04}),ni(ji(8,i*1,(e?.062:.056)*t),(e?.056:.05)*t,{k:.04}),ni([0,.028*t,0],(e?.075:.07)*t,{k:.05,flat:.6}));let a=e?[.104*t,.078*t,.118*t]:[.08,.079,.1],o=yo(e?[-.62,-.3,.72]:[-.66,-.22,.72]),l=yo(yp([0,1,0],o)),c=yp(o,l),h=(f,v,m)=>Ci(Ci(Ci(a,o,f*t),l,v*t),c,m*t),u={part:"head",k:.012};if(n.push(un(ji(-5,i,.06*t),a,.05*t,.042*t,{k:.03,part:"neck"})),e){n.push(ni(a,.05*t,u),un(h(.02,0,-.006),h(.082,0,-.018),.036*t,.023*t,{...u,k:.02}),ni(h(.101,0,-.009),.0115*t,{part:"nose",k:.004}));for(let f of[-1,1])n.push(un(h(-.012,f*.044,.03),h(0,f*.06,-.034),.014*t,.022*t,{part:f<0?"ear0":"ear1",k:.008}),ni(h(.03,f*.018,.022),.014*t,{...u,k:.016}))}else{let f=[ni(a,.054,u),ni(h(.01,0,-.008),.043,{...u,k:.03,flat:.85}),ni(h(.039,0,-.017),.017,{...u,k:.016})];for(let x of[-1,1])f.push(ni(h(.042,x*.011,-.019),.012,{...u,k:.01}),ni(h(.014,x*.031,-.01),.027,{...u,k:.02}));let v=yo(Ci(o,c,.25)),m=_p(f,a,v);n.push(...f,ni(Ci(m,v,.0025),.0058,{part:"nose",k:.004}));for(let x of[-1,1])n.push(un(h(-.004,x*.03,.032),h(-.01,x*.043,.074),.022,.003,{part:x<0?"ear0":"ear1",k:.012,flat:1}))}for(let f of[0,1])n.push(un([.1*t,.026*t,(.09+f*.026)*t],[-.005*t,.019*t,(.128+f*.03)*t],.024*t,(e?.024:.019)*t,{part:"paw",k:.014}));n.push(un(ji(205,i*1.1,.03*t),ji(248,i*1.02,.02*t),.034*t,.02*t,{part:"paw",k:.02}));let d=(e?[[212,1.2],[228,1.42],[246,1.6],[262,1.72]]:[[210,1.2],[226,1.42],[244,1.54],[262,1.6],[280,1.6],[298,1.52]]).map(([f,v])=>ji(f,i*v,(e?.03:.022)*t));d.forEach((f,v)=>{if(v){let m=v/(d.length-1),x=(e?.027-.004*m:.021-.006*m)*t;n.push(un(d[v-1],f,x,x*.95,{part:m>.55?"tip":"tail",k:.014}))}});let p=new Set(["head","nose","ear0","ear1"]),g=n.find(f=>f.part==="nose");return{eyes:[-1,1].map(f=>{let v=yo(Ci(Ci(o,l,f*.43),c,.42));return{at:_p(n.filter(m=>m.part==="head"),a,v),out:v}}),list:n,nose:{at:g.a,r:g.ra},skull:n.filter(f=>p.has(f.part)),trunk:n.filter(f=>!p.has(f.part)),head:a,look:o,side:l,top:c,on:h,S:t,neck:ji(-2,i*.95,.06*t),tail:d[Math.floor(d.length/2)],lo:[-.28*t,-.03,-.25*t],hi:[.28*t,.2*t,.27*t]}}var fg=new P(.12,Ve+.006,-1.92),Xt=s=>Math.max(0,Math.min(1,s)),_c=s=>s*s*(3-2*s),mg={cat:{base:"#cf8547",dark:"#94542a",light:"#f6ead8",nose:"#e0938c",eye:"#a9c14e",fur:.0068},dog:{base:"#b98748",dark:"#8a5c2a",light:"#e3c590",nose:"#1c1512",eye:"#3a2412",fur:.015}},_o=class{constructor(e,t,i){this.scene=e,this.kind=t,this.awake=0,this.goal=0,this.t=Math.random()*20,this.ear=0,this.earAt=4;let n=this.body=Tp(t),r=mg[t],a=b=>new we(r[b]),o={base:a("base"),dark:a("dark"),light:a("light"),nose:a("nose")},l=yc(n.trunk,n.lo,n.hi,.0075*n.S),c=yc(n.skull,n.head.map(b=>b-.12*n.S),n.head.map(b=>b+.13*n.S),.006*n.S),h=wp(l,c),u=h.pos.length/3,d=l.pos.length/3,p=new Float32Array(u*3),g=new Float32Array(u*4),y=new Float32Array(u),f=new we;for(let b=0;b<u;b++){let[T,C,_]=h.pos.slice(b*3,b*3+3),S=Sp(b<d?n.trunk:n.skull,T,C,_),A=(S.head||0)+(S.nose||0)+(S.ear0||0)+(S.ear1||0),I=Math.atan2(-_,T),B=Math.hypot(T,_),O=t==="cat"?.8*_c(Xt(Math.sin(I*15+Math.sin(C*60)*.8+B*14)*1.1-.25)):.25*Xt(Math.sin(I*5+C*40));if(f.copy(o.base).lerp(o.dark,O*(A>.5?.35:.85)*Xt(C/(.05*n.S))),t==="cat"&&A>.5){let q=(T-n.head[0])*n.side[0]+(_-n.head[2])*n.side[2],re=C-n.head[1];f.lerp(o.dark,Xt(Math.sin(q*320)*1.5)*Xt(re/.03)*.7)}f.lerp(o.light,Xt((S.paw||0)*.9+(S.tip||0)*(t==="cat"?.25:.5)+Xt(1-C/(.03*n.S))*.5));let F=A*Xt(1.6-Math.hypot(...n.on(t==="dog"?.07:.046,0,-.024).map((q,re)=>q-[T,C,_][re]))/((t==="dog"?.024:.03)*n.S));f.lerp(o.light,F*.85);let W=b<d?0:Xt(3-2.1*(Math.hypot(...n.nose.at.map((q,re)=>q-[T,C,_][re]))/n.nose.r));f.lerp(o.nose,W),t==="dog"&&f.lerp(o.dark,((S.ear0||0)+(S.ear1||0))*.55),p.set([f.r,f.g,f.b],b*3),g.set([b<d?.5*(S.neck||0)*Xt(1-Math.hypot(T-n.head[0],C-n.head[1],_-n.head[2])/(.075*n.S)):1,S.tip||0,S.ear0||0,S.ear1||0],b*4),y[b]=(1-W)*(1-(t==="cat"?.72:.55)*Xt(A))*(1-.35*(S.paw||0))}let v=new Qa;v.setAttribute("position",new Re(h.pos,3)),v.setAttribute("normal",new Re(h.nor,3)),v.setAttribute("color",new at(p,3)),v.setAttribute("aPart",new at(g,4)),v.setAttribute("aBare",new at(y,1)),v.setAttribute("aLayer",new Ha(Float32Array.from({length:i},(b,T)=>T/(i-1)),1)),v.setIndex(h.idx),v.instanceCount=i,this.u={uBreath:{value:0},uHead:{value:new Ae},uTip:{value:0},uEar:{value:new he},uFur:{value:r.fur}};let m=new Ye({vertexColors:!0,roughness:.95,fog:!1});m.onBeforeCompile=b=>{Object.assign(b.uniforms,this.u),b.vertexShader=b.vertexShader.replace("void main() {",`attribute float aLayer, aBare; attribute vec4 aPart; uniform float uBreath, uTip, uFur; uniform vec2 uEar; uniform mat4 uHead; varying vec3 vRest; varying float vLayer, vBare;
        void main() {`).replace("#include <beginnormal_vertex>","vec3 objectNormal = normalize(mix(normal, mat3(uHead) * normal, aPart.x));").replace("#include <begin_vertex>",`vRest = position; vLayer = aLayer; vBare = aBare;
        vec3 transformed = position;
        transformed += normal * uBreath * smoothstep(0.02, 0.09, position.y) * (1.0 - aPart.x);
        // (an ear's end goes back a little, the tail's goes up)
        transformed.x += (uEar.x * aPart.z + uEar.y * aPart.w) * 0.012; transformed.y -= (uEar.x * aPart.z + uEar.y * aPart.w) * 0.006;
        transformed += vec3(0.4, 1.0, 0.3) * aPart.y * uTip * 0.02;
        transformed = mix(transformed, (uHead * vec4(transformed, 1.0)).xyz, aPart.x);
        // the fur: longer layers droop, and lie along the body
        float l = aLayer * uFur * aBare;
        vec3 along = normalize(vec3(-position.z, 0.0, position.x) + 1e-4);
        transformed += normalize(objectNormal + (along * -0.55 + vec3(0.0, -0.5, 0.0)) * aLayer) * l;`),b.fragmentShader=b.fragmentShader.replace("void main() {",`varying vec3 vRest; varying float vLayer, vBare;
        float f3(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
        void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = vRest / ${t==="cat"?"0.0019":"0.0026"}, i = floor(c); float long_ = f3(i), soft = f3(floor(vRest / 0.011) + 9.0);
          if (vLayer > 0.01 && (vLayer > (0.25 + 0.75 * long_) * (0.8 + 0.2 * soft) || length(fract(c) - 0.5) > 0.78 - 0.5 * vLayer)) discard;
          if (vLayer > 0.1 && vBare < 0.15) discard;
          diffuseColor.rgb *= mix(1.0, (0.5 + 0.5 * vLayer) * (0.84 + 0.3 * long_), smoothstep(0.12, 0.45, vBare)); }  // (short fur: no deep shade between the hairs)`)},this.mesh=new xe(v,m),v.boundingSphere=new Zt(new P(0,.08,0),.4*n.S),this.group=new ht,this.group.position.copy(fg),this.group.rotation.y=-.15,this.group.add(this.mesh),this.eyes=new ht,this.lids=[],this.balls=[],this.group.add(this.eyes);let x=t==="cat";for(let[b,T]of[[0,-1],[1,1]]){let C=x?new P(...n.eyes[b].at):new P(...n.on(.047,T*.0215,.013)),_=C.clone().sub(new P(...n.head)).normalize();if(!x){let q=new xe(new Gt(.0085*n.S,.0012*n.S,6,14,Math.PI),new Ye({color:"#2a140a",roughness:1,fog:!1}));q.position.copy(C).addScaledVector(_,.0055),q.quaternion.setFromUnitVectors(new P(0,0,1),_),q.rotateZ(Math.PI),this.eyes.add(q),this.lids.push(q);let re=new xe(new Qt(.0074*n.S,14,10),new Ye({color:r.eye,roughness:.08,emissive:r.eye,emissiveIntensity:.25,fog:!1}));re.position.copy(C).addScaledVector(_,.0015),re.scale.setScalar(.001),this.eyes.add(re),this.balls.push(re);let z=new xe(new Qt(.0048*n.S,10,8),new mt({color:"#0a0604",fog:!1}));z.position.copy(_).multiplyScalar(.0063*n.S),z.scale.set(.95,1.1,.5),z.quaternion.setFromUnitVectors(new P(0,0,1),_),re.add(z);continue}let S=new P(...n.top),A=new P().crossVectors(S,_).normalize(),I=new P().crossVectors(_,A).normalize(),B=new $t().setFromRotationMatrix(new Ae().makeBasis(A,I,_)),O=new xe(new Gt(.0078,.001,6,16,2.3),new Ye({color:"#4a2a16",roughness:1,fog:!1}));O.position.copy(C).addScaledVector(_,.0016).addScaledVector(I,.0052),O.quaternion.copy(B),O.rotateZ(-Math.PI/2-1.15),this.eyes.add(O),this.lids.push(O);let F=new ht;F.position.copy(C).addScaledVector(_,.0034),F.quaternion.copy(B),F.scale.setScalar(.001),F.userData.flat=.94,this.eyes.add(F),this.balls.push(F);let W=(q,re,z,j=!0)=>{let ee=new xe(new wi(q,32),j?new mt({color:re,fog:!1}):new Ye({color:re,roughness:.35,fog:!1}));return ee.position.z=z,F.add(ee),ee};W(.0092,"#3a2210",0),W(.0082,r.eye,2e-4,!1),W(.0069,"#120a06",4e-4),W(.0022,"#fffdf4",6e-4).position.set(-.0024*T,.0026,6e-4),W(.0011,"#fffdf4",6e-4).position.set(.0022*T,-.0024,6e-4)}this.touch=new xe(new Qt(.2*n.S,12,8),new mt({visible:!1})),this.touch.scale.y=.7,this.group.add(this.touch);let M=document.createElement("canvas");M.width=M.height=64;let E=M.getContext("2d"),w=E.createRadialGradient(32,32,10,32,32,32);w.addColorStop(0,"rgba(0,0,0,.6)"),w.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=w,E.fillRect(0,0,64,64);let R=new xe(new ct(.56*n.S,.5*n.S).rotateX(-Math.PI/2),new mt({map:new Lt(M),transparent:!0,depthWrite:!1,fog:!1}));R.position.set(0,.001,.02),this.group.add(R),e.add(this.group),this.neck=new P(...n.neck).lerp(new P(...n.head),.72)}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&(e.geometry.dispose(),e.material.map&&e.material.map.dispose(),e.material.dispose())})}hit(e){let t=new ei(e.origin,e.direction);this.touch.updateWorldMatrix(!0,!1),this.touch.material.visible=!0;let i=t.intersectObject(this.touch)[0];return this.touch.material.visible=!1,i?i.distance:null}pat(){this.goal=1,this.until=this.t+4.5,this.ear=1}update(e){this.t+=e,this.goal&&this.t>this.until&&(this.goal=0),this.awake+=(this.goal-this.awake)*(1-Math.exp(-e*3.2)),this.u.uBreath.value=(.5+.5*Math.sin(this.t*(1.5+this.awake)))*.0055,this.t>this.earAt&&(this.earAt=this.t+3+Math.random()*7,this.ear=1,this.which=Math.random()<.5),this.ear=Math.max(0,this.ear-e*3.2);let t=Math.sin(this.ear*Math.PI*3)*this.ear;this.u.uEar.value.set(this.which?t:0,this.which?0:t),this.u.uTip.value=Math.max(0,Math.sin(this.t*.7)-.55)*2*Math.sin(this.t*4)+this.awake*Math.sin(this.t*(this.kind==="dog"?11:3))*.9;let i=_c(Xt(this.awake)),n=this.u.uHead.value,r=.6*i+Math.sin(this.t*.9)*.18*i;n.makeTranslation(this.neck.x,this.neck.y+.022*i,this.neck.z).multiply(new Ae().makeRotationY(r)).multiply(new Ae().makeRotationAxis(new P(...this.body.side),-.42*i+Math.sin(this.t*1.5)*.006)).multiply(new Ae().makeTranslation(-this.neck.x,-this.neck.y,-this.neck.z)),this.eyes.matrixAutoUpdate=!1,this.eyes.matrix.copy(n),this.eyes.matrixWorldNeedsUpdate=!0;let a=_c(Xt(this.awake*1.6-.3)),o=this.t%3.7<.14?.1:1;for(let l of this.lids)l.visible=a<.35;for(let l of this.balls)l.visible=a>.3,l.scale.set(1,Math.max(.05,a*o)*(l.userData.flat||1),1)}};var gg="musicroom",Mc="pieces";function vg(){return new Promise((s,e)=>{let t=indexedDB.open(gg,1);t.onupgradeneeded=()=>t.result.createObjectStore(Mc,{keyPath:"id"}),t.onsuccess=()=>s(t.result),t.onerror=()=>e(t.error)})}var Ap=async(s,e)=>{let t=await vg();return new Promise((i,n)=>{let r=t.transaction(Mc,s),a=e(r.objectStore(Mc));r.oncomplete=()=>i(a&&a.result),r.onerror=()=>n(r.error)})},Rp=()=>Ap("readonly",s=>s.getAll()).catch(()=>[]),bo=s=>Ap("readwrite",e=>e.put(s));var Mo=new Map,Cp=()=>{},Pp=s=>{Cp=s},Ep=!1;function Ip(s,e){if(Mo.has(s))return Mo.get(s);try{return JSON.parse(localStorage.getItem(s)||e)}catch{return JSON.parse(e)}}function Lp(s,e){Mo.set(s,e);try{return localStorage.setItem(s,JSON.stringify(e)),Mo.delete(s),!0}catch(t){return console.warn(`[store] not saved (${t.name}): ${s}`),Ep||(Ep=!0,Cp(t)),!1}}var So=s=>Ip(`musicroom.pins.${s}`,"[]"),bc=(s,e)=>Lp(`musicroom.pins.${s}`,e),Up=()=>Ip("musicroom.prefs","{}"),Ls=s=>Lp("musicroom.prefs",s);function Dp(s){let e=(i,n,r)=>{let a=i&240;a===144&&r>0?s(!0,n,r):(a===128||a===144&&r===0)&&s(!1,n,0)};window.musicRoomMidi=e;let t={kind:"none",inputs:[]};return navigator.requestMIDIAccess&&navigator.requestMIDIAccess().then(i=>{let n=()=>{t.inputs=[];for(let r of i.inputs.values())r.onmidimessage=a=>e(a.data[0],a.data[1],a.data[2]),t.inputs.push(r.name);t.kind=t.inputs.length?"web":"none"};i.onstatechange=n,n()}).catch(()=>{}),t}var Sc={a:0,w:1,s:2,e:3,d:4,f:5,t:6,g:7,y:8,h:9,u:10,j:11,k:12,o:13,l:14,p:15,";":16,"'":17};function Np(s,e){let t=4,i=new Set;addEventListener("keydown",n=>{if(!e()||n.metaKey||n.ctrlKey||n.altKey||n.target.closest("input,select,textarea"))return;let r=n.key.toLowerCase();if(r==="z"){t=Math.max(1,t-1);return}if(r==="x"){t=Math.min(7,t+1);return}!(r in Sc)||i.has(r)||(i.add(r),s(!0,12*(t+1)+Sc[r],90),n.preventDefault())}),addEventListener("keyup",n=>{let r=n.key.toLowerCase();i.has(r)&&(i.delete(r),s(!1,12*(t+1)+Sc[r],0))})}var Op=["Acoustic Grand Piano","Bright Piano","Electric Grand","Honky-tonk Piano","Electric Piano 1","Electric Piano 2","Harpsichord","Clavinet","Celesta","Glockenspiel","Music Box","Vibraphone","Marimba","Xylophone","Tubular Bells","Dulcimer","Drawbar Organ","Percussive Organ","Rock Organ","Church Organ","Reed Organ","Accordion","Harmonica","Tango Accordion","Nylon Guitar","Steel Guitar","Jazz Guitar","Clean Guitar","Muted Guitar","Overdrive Guitar","Distortion Guitar","Guitar Harmonics","Acoustic Bass","Fingered Bass","Picked Bass","Fretless Bass","Slap Bass 1","Slap Bass 2","Synth Bass 1","Synth Bass 2","Violin","Viola","Cello","Contrabass","Tremolo Strings","Pizzicato Strings","Harp","Timpani","Strings","Slow Strings","Synth Strings 1","Synth Strings 2","Choir Aahs","Voice Oohs","Synth Voice","Orchestra Hit","Trumpet","Trombone","Tuba","Muted Trumpet","French Horn","Brass Section","Synth Brass 1","Synth Brass 2","Soprano Sax","Alto Sax","Tenor Sax","Baritone Sax","Oboe","English Horn","Bassoon","Clarinet","Piccolo","Flute","Recorder","Pan Flute","Blown Bottle","Shakuhachi","Whistle","Ocarina","Square Lead","Saw Lead","Calliope Lead","Chiff Lead","Charang","Voice Lead","Fifths Lead","Bass Lead","New Age Pad","Warm Pad","Polysynth","Choir Pad","Bowed Pad","Metallic Pad","Halo Pad","Sweep Pad","Rain","Soundtrack","Crystal","Atmosphere","Brightness","Goblins","Echoes","Sci-fi","Sitar","Banjo","Shamisen","Koto","Kalimba","Bagpipe","Fiddle","Shanai","Tinkle Bell","Agogo","Steel Drums","Woodblock","Taiko Drum","Melodic Tom","Synth Drum","Reverse Cymbal","Fret Noise","Breath Noise","Seashore","Bird Tweet","Telephone","Helicopter","Applause","Gunshot"];function yg(s){let e=0;return{u8:()=>s[e++],u16:()=>s[e++]<<8|s[e++],u32:()=>(s[e++]<<24>>>0)+(s[e++]<<16)+(s[e++]<<8)+s[e++],vlq:()=>{let o=0,l;do l=s[e++],o=o<<7|l&127;while(l&128&&e<s.length);return o},str:o=>{let l="";for(let c=0;c<o;c++)l+=String.fromCharCode(s[e++]);return l},get p(){return e},set p(o){e=o},get end(){return e>=s.length}}}function _g(s){let e=s instanceof Uint8Array?s:new Uint8Array(s),t=yg(e);if(t.str(4)!=="MThd")throw new Error("not a MIDI file");let i=t.u32(),n=t.u16(),r=t.u16(),a=t.u16();if(t.p=8+i,a&32768)throw new Error("SMPTE-timed MIDI is not supported");let o=[];for(let l=0;l<r&&!t.end;l++){let c=t.str(4),h=t.u32(),u=t.p+h,d=[];if(c!=="MTrk"){t.p=u;continue}let p=0,g=0;for(;t.p<u;){p+=t.vlq();let y=e[t.p];if(y&128?(t.p++,y<240&&(g=y)):y=g,y===255){let f=t.u8(),v=t.vlq(),m=t.p;d.push({tick:p,meta:f,data:e.subarray(m,m+v)}),t.p=m+v}else if(y===240||y===247)t.p+=t.vlq();else{let f=y&240,v=y&15,m=t.u8(),x=f===192||f===208?0:t.u8();d.push({tick:p,kind:f,ch:v,a:m,c:x})}}t.p=u,o.push(d)}return{format:n,division:a,tracks:o}}function Mg(s,e){for(let t of[8,12,16,24,32,48,64,96]){let i=4*e/t,n=i*.12;if(s.filter(a=>{let o=a%i;return Math.min(o,i-o)<=n}).length>=s.length*.95)return t}return null}function Fp(s,e={}){let t=_g(s),i=t.division,n=[],r=[],a=[],o=new Map,l=[],c=m=>li(m,4*i);t.tracks.forEach((m,x)=>{let M=null,E=new Map,w=new Array(16).fill(0);for(let R of m)if(R.meta===81)n.push({at:c(R.tick),bpm:6e7/(R.data[0]<<16|R.data[1]<<8|R.data[2])});else if(R.meta===88)r.push({at:c(R.tick),num:R.data[0],den:2**R.data[1]});else if(R.meta===89)a.push({at:c(R.tick),fifths:R.data[0]<<24>>24,mode:R.data[1]?"minor":"major"});else if(R.meta===3)M=new TextDecoder().decode(R.data).trim();else if(R.kind===192)w[R.ch]=R.a;else if(R.kind===144&&R.c>0){let b=`${R.ch}:${R.a}`;E.has(b)||E.set(b,[]),E.get(b).push({tick:R.tick,vel:R.c})}else if(R.kind===128||R.kind===144&&R.c===0){let b=`${R.ch}:${R.a}`,T=E.get(b);if(!T||!T.length)continue;let C=T.shift(),_=`${x}:${R.ch}`;o.has(_)||o.set(_,{id:o.size,name:M||(R.ch===9?"Drums":Op[w[R.ch]]||`Track ${x+1}`),program:w[R.ch],channel:R.ch,percussion:R.ch===9}),l.push({part:o.get(_).id,midi:R.a,on:C.tick,off:Math.max(R.tick,C.tick+1),vel:C.vel,percussion:R.ch===9})}for(let R of o.values())R.name.startsWith("Track")&&M&&(R.name=M)}),l.sort((m,x)=>m.on-x.on||m.midi-x.midi);let h=Mg(l.map(m=>m.on),i),u=h?4*i/h:1,d=m=>h?Math.round(m/u)*u:m;n.sort((m,x)=>oe(m.at)-oe(x.at)),r.sort((m,x)=>oe(m.at)-oe(x.at)),n.length&&oe(n[0].at)>0&&n.unshift({at:xi,bpm:120});for(let m=a.length-1;m>=0;m--)Math.abs(a[m].fifths)>7&&a.splice(m,1);let p=n.length?n[0].bpm:120,g=l.filter(m=>!m.percussion),y=su(g.map(m=>({midi:m.midi,d:m.off-m.on})),a.length?a[0].fifths:null),f=0,v=l.map(m=>{let x=d(m.on),M=Math.max(x+(h?u/2:1),d(m.off)),E=m.percussion?0:y[f++];return{part:m.part,staff:1,voice:1,pitch:au(m.midi,E),onset:c(x),dur:c(M-x),grace:!1,vel:m.vel,off:(m.on-x)/i*(60/p),percussion:m.percussion}});return Bs({parts:[...o.values()],meter:r.length?kp(r):[],keys:a,tempo:n.length?kp(n):[{at:xi,bpm:120}],notes:v,...e,grid:h})}var kp=s=>{let e=new Map;for(let t of s)e.set(`${t.at.n}/${t.at.d}`,t);return[...e.values()]};var bg={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"},Bp=s=>s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi,(e,t)=>t[0]==="#"?String.fromCodePoint(t[1]==="x"||t[1]==="X"?parseInt(t.slice(2),16):Number(t.slice(1))):bg[t]??e);function zp(s){let e={name:"#root",attrs:{},children:[],text:""},t=[e],i=/<!--[\s\S]*?-->|<!\[CDATA\[([\s\S]*?)\]\]>|<\?[\s\S]*?\?>|<!DOCTYPE[\s\S]*?>|<(\/?)([\w:.-]+)((?:\s+[\w:.-]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>|([^<]+)/g,n;for(;n=i.exec(s);){let r=t.at(-1);if(n[1]!==void 0){r.text+=n[1];continue}if(n[3]){if(n[2]){t.length>1&&t.pop();continue}let a={name:n[3],attrs:{},children:[],text:""};for(let o of n[4].matchAll(/([\w:.-]+)\s*=\s*("([^"]*)"|'([^']*)')/g))a.attrs[o[1]]=Bp(o[3]??o[4]);r.children.push(a),n[5]||t.push(a);continue}n[6]!==void 0&&(r.text+=Bp(n[6]))}return e}var Or=(s,e)=>s?s.children.filter(t=>t.name===e):[],vt=(s,e)=>s&&s.children.find(t=>t.name===e)||null,pt=(s,e)=>{let t=e?vt(s,e):s;return t?t.text.trim():null};async function Hp(s){let e=s instanceof Uint8Array?s:new Uint8Array(s),t=new DataView(e.buffer,e.byteOffset,e.byteLength),i=e.length-22;for(;i>=0&&t.getUint32(i,!0)!==101010256;)i--;if(i<0)throw new Error("not a zip file");let n=t.getUint16(i+10,!0),r=t.getUint32(i+16,!0),a=new Map;for(let o=0;o<n&&t.getUint32(r,!0)===33639248;o++){let l=t.getUint16(r+10,!0),c=t.getUint32(r+20,!0),h=t.getUint16(r+28,!0),u=t.getUint16(r+30,!0),d=t.getUint16(r+32,!0),p=t.getUint32(r+42,!0),g=new TextDecoder().decode(e.subarray(r+46,r+46+h)),y=p+30+t.getUint16(p+26,!0)+t.getUint16(p+28,!0),f=e.subarray(y,y+c);a.set(g,{method:l,data:f}),r+=46+h+u+d}return{names:[...a.keys()],async read(o){let l=a.get(o);if(!l)return null;if(l.method===0)return l.data;if(l.method!==8)throw new Error(`zip method ${l.method} is not supported`);let c=new Blob([l.data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(c).arrayBuffer())}}}var Sg=s=>Number.isInteger(s)?s*jc:Math.round(s*53/12);async function Vp(s){let e=await Hp(s),t=r=>new TextDecoder().decode(r),i=await e.read("META-INF/container.xml"),n=null;if(i){let r=/full-path\s*=\s*"([^"]+)"/.exec(t(i));r&&(n=r[1])}if(n||(n=e.names.find(r=>/\.(xml|musicxml)$/i.test(r)&&!r.startsWith("META-INF"))),!n)throw new Error("no score in this .mxl");return t(await e.read(n))}function wc(s,e={}){let t=zp(s),i=vt(t,"score-partwise");if(!i)throw new Error(vt(t,"score-timewise")?"timewise MusicXML is not supported":"not a MusicXML score");let n=pt(vt(i,"work"),"work-title")||pt(i,"movement-title")||e.title,r=Or(vt(i,"identification"),"creator").find(p=>p.attrs.type==="composer"),a=vt(i,"part-list"),o=[],l=[],c=[],h=[],u=[],d=[];for(let p of Or(a,"score-part")){let g=Number(pt(vt(p,"midi-instrument"),"midi-program")||1)-1;o.push({id:o.length,xml:p.attrs.id,name:pt(p,"part-name")||`Part ${o.length+1}`,program:Math.max(0,g)})}return Or(i,"part").forEach((p,g)=>{let y=o.findIndex(b=>b.xml===p.attrs.id),f=y>=0?y:g;o[f]||(o[f]={id:f,name:`Part ${f+1}`,program:0});let v=1,m=xi,x=xi,M=xi,E={num:4,den:4},w=new Map,R=[];for(let b of Or(p,"measure")){x=m;let T=m,C=Number(b.attrs.number)||d.length+1,_={};for(let S of b.children)if(S.name==="barline"){let A=vt(S,"repeat"),I=pt(S,"bar-style");A&&A.attrs.direction==="forward"&&(_.repeatStart=!0),A&&A.attrs.direction==="backward"&&(_.repeatEnd=!0),(I==="light-light"||I==="light-heavy")&&(_.double=!0)}else if(S.name==="attributes"){vt(S,"divisions")&&(v=Number(pt(S,"divisions")));let A=vt(S,"time");A&&vt(A,"beats")&&(E={num:Number(pt(A,"beats").split("+").reduce((B,O)=>B+Number(O),0)),den:Number(pt(A,"beat-type"))},f===0&&c.push({at:m,...E}));let I=vt(S,"key");I&&vt(I,"fifths")&&f===0&&h.push({at:m,fifths:Number(pt(I,"fifths")),mode:pt(I,"mode")||void 0})}else if(S.name==="direction"||S.name==="sound"){let A=S.name==="sound"?S:vt(S,"sound");A&&A.attrs.tempo&&f===0&&u.push({at:m,bpm:Number(A.attrs.tempo)})}else if(S.name==="backup")m=ks(m,li(Number(pt(S,"duration")),4*v));else if(S.name==="forward")m=Os(m,li(Number(pt(S,"duration")),4*v)),T=Lo(T,m);else if(S.name==="note"){let A=!!vt(S,"chord"),I=!!vt(S,"grace"),B=!!vt(S,"rest"),O=I?xi:li(Number(pt(S,"duration")||0),4*v),F=A?M:m;if(A||(M=m),!B){let W=vt(S,"pitch")||vt(S,"unpitched");if(W){let q=W.name==="pitch",re=q?pt(W,"step"):pt(W,"display-step"),z=Number(q?pt(W,"octave"):pt(W,"display-octave")),j=Number(pt(W,"alter")||0),ee={part:f,staff:Number(pt(S,"staff")||1),voice:Number(pt(S,"voice")||1),pitch:qc(re,z,Sg(j)),onset:F,dur:O,grace:I,vel:80,percussion:!q},le=Or(S,"tie").map(N=>N.attrs.type),ue=`${ee.staff}:${ee.voice}:${re}${z}:${j}`;if(I)R.push(ee),ee.graceIndex=R.length,l.push(ee);else if(R.length&&(R.forEach((N,U)=>{N.onset=F,N.graceIndex=R.length-U}),R=[]),le.includes("stop")&&w.has(ue)){let N=w.get(ue);N.dur=Os(N.dur,O),le.includes("start")||w.delete(ue)}else l.push(ee),le.includes("start")&&w.set(ue,ee)}}!A&&!I&&(m=Os(m,O),T=Lo(T,m))}m=T,f===0&&d.push({n:C,at:x,dur:Xc(ks(m,x),xi)>0?ks(m,x):li(E.num,E.den),..._})}}),Bs({title:n,composer:r?r.text.trim():e.composer,parts:o,meter:c,keys:h,tempo:u.length?u:[{at:xi,bpm:100}],bars:d,notes:l,...e,...n?{title:n}:{}})}async function Gp(s,e){let t=e instanceof Uint8Array?e:new Uint8Array(e),i=String.fromCharCode(...t.subarray(0,4)),n=s.replace(/\.[^.]+$/,"").replace(/[_-]+/g," "),r={id:`user-${s}`,title:n,source:s,licence:"yours (kept in this browser)"};if(i==="MThd")return Fp(t,r);if(Hs(t,s))throw new Error(`${s}: a recording, to be decoded and heard (fromAudio), not read`);if(i==="PK")return wc(await Vp(t),r);let a=new TextDecoder().decode(t);if(/<score-(partwise|timewise)/.test(a.slice(0,4e3)))return wc(a,r);throw new Error(`${s}: not MIDI, MusicXML or a recording (modules come in slice 2)`)}async function Tc(s){let e=window.OfflineAudioContext||window.webkitOfflineAudioContext,i=await new e(1,1,iu).decodeAudioData(s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)),n=i.length,r=new Float32Array(n);for(let l=0;l<i.numberOfChannels;l++){let c=i.getChannelData(l);for(let h=0;h<n;h++)r[h]+=c[h]/i.numberOfChannels}let a=Float32Array.from(i.getChannelData(0)),o=i.numberOfChannels>1?Float32Array.from(i.getChannelData(1)):a;return{pcm:r,left:a,right:o,sr:i.sampleRate}}var Wp=(s,e,t)=>new Promise((i,n)=>{let r=new Worker(new URL("./hear-worker.js",import.meta.url),{type:"module"});r.onmessage=a=>{let o=a.data;o.progress!==void 0?t(o.progress,o.what):(r.terminate(),o.error?n(new Error(o.error)):i(o))},r.onerror=a=>{r.terminate(),n(new Error(a.message||"the listening Worker failed"))},r.postMessage(s,e)}),Xp=s=>[...new Set([s.pcm,s.left,s.right].filter(Boolean).map(e=>e.buffer))];async function jp(s,e,t=()=>{}){return(await Wp({pcm:s.pcm,left:s.left,right:s.right,sr:s.sr,meta:e},Xp(s),t)).packed}async function qp(s,e,t=()=>{}){return(await Wp({left:s.left,right:s.right,sr:s.sr,packed:e},Xp({left:s.left,right:s.right}),t)).tracks}var pe=s=>document.getElementById(s),Tt=(s,e=3200)=>{let t=document.createElement("div");return t.textContent=s,pe("toasts").append(t),e&&setTimeout(()=>t.remove(),e),t},Ec=s=>`${Math.round(s*100)}%`,Ac=class{constructor(){let e=this.view=new uo(pe("view"));this.shelf=new po(e.scene),this.piano=new fo(e.scene,e.env),this.form=new Nn(e.scene,"form",.56,.56*(Vn.h/Vn.w),-.31,-.13,0,[Vn.w,Vn.h]),this.map=new Nn(e.scene,"map",.42,.42*(zn.h/zn.w),.36,-.17,0,[zn.w,zn.h]),this.roll=new Nn(e.scene,"roll",1.12,1.12*(Hn.h/Hn.w),.02,.32,0,[Hn.w,Hn.h]),this.tracks=new Nn(e.scene,"tracks",.5,.5*(Gn.h/Gn.w),.02,-.445,0,[Gn.w,Gn.h]),this.sheets=[this.form,this.map,this.roll,this.tracks],this.blank("Take a book from the shelf"),this.player=new go,this.player.onEnd=()=>this.ui(),this.prefs={axis:"chromatic",bars:4,rate:100,...Up()},this.worker=new Worker(new URL("./analysis-worker.js",import.meta.url),{type:"module"}),this.worker.onmessage=i=>this.analysed(i.data),this.job=0,this.s=null,this.a=null,this.rollT=0,this.live=new Map,this.touches=new Map,setTimeout(()=>{e.pet=new _o(e.scene,"cat",e.touch?11:18),e.pet.update(.01)},300),this.bind(),this.books(),this.last=performance.now();let t=i=>{this.real=Math.max(0,(i-this.last)/1e3),this.frame(Math.min(.05,this.real)),this.last=Math.max(this.last,i),requestAnimationFrame(t)};requestAnimationFrame(t),Ai.onChange=()=>this.soundState(),Pp(()=>Tt("This browser would not keep your settings and pins (its storage for aykutkilic.github.io is full or refused). They hold until the page is closed.",7e3)),this.midi=Dp((i,n,r)=>this.key(i,n,r)),Np((i,n,r)=>this.key(i,n,r),()=>this.view.at==="piano")}async books(){try{let t=await fetch(new URL("./pieces/index.json",import.meta.url));this.index=t.ok?(await t.json()).books:[]}catch{this.index=[]}this.mine=await Rp();let e=this.index.map(t=>({id:t.id,title:t.id.replace("K","K. "),sub:t.title.replace(/^Sonata no\. \d+ in /,""),book:t}));for(let t of this.mine)e.push({id:t.id,title:t.title.slice(0,18),sub:"yours",user:!0,piece:t});if(this.shelf.fill(e),!this.s&&this.prefs.last&&!this.reopened){this.reopened=!0;let t=this.mine.find(n=>n.id===this.prefs.last),i=this.index.some(n=>n.movements.some(r=>r.id===this.prefs.last));t?this.open({id:t.id,packed:t.packed,recording:t.audio}):i&&this.open({id:this.prefs.last})}!this.index.length&&!this.mine.length&&Tt("The shelf is empty: add a MIDI, MusicXML or audio file")}take(e){if(e.piece){this.open({id:e.piece.id,packed:e.piece.packed,recording:e.piece.audio});return}let t=e.book,i=pe("book"),n=pe("movements");pe("bookTitle").textContent=`${t.composer}, ${t.title}`,n.replaceChildren(...t.movements.map(r=>{let a=document.createElement("li"),o=document.createElement("button");return o.textContent=`${r.title} · ${r.bars} bars`,o.onclick=()=>{i.close(),this.open({id:r.id})},a.append(o),a})),i.showModal()}async open({id:e,packed:t,recording:i=null}){this.player.stop(),this.card(null);try{if(!t){let n=await fetch(new URL(`./pieces/${e}.json`,import.meta.url));if(!n.ok)throw new Error(`${e}: ${n.status}`);t=await n.json()}}catch(n){Tt(`Could not open it: ${n.message}`);return}this.packed=t,this.s=ru(t),this.id=e,this.a=null,this.fns=null,this.rollT=0,this.prefs.last=e,Ls(this.prefs),this.blank("Listening to it…"),this.player.load(this.s,this.s.audio?i:null),this.player.rate=this.prefs.rate/100,pe("hearWrap").hidden=!this.player.recording,pe("hear").value=this.player.mode,pe("heading").textContent=this.s.title||e,pe("playBtn").disabled=!1,this.analyse(),this.tracksHint=null,this.s.audio&&!this.s.tracks&&this.fillTracks(e,i),this.go("read",this.form),this.ui()}async fillTracks(e,t){if(!t){this.tracksHint="This recording was heard before there were tracks, and its file is not kept: add it again to see them.";return}this.tracksHint="Listening for the tracks…";try{let i=await Tc(new Uint8Array(await t.arrayBuffer())),n=await qp(i,this.packed);if(this.id!==e)return;this.packed={...this.packed,tracks:n},this.s.tracks=n,this.tracksHint=null;let r=this.mine.find(a=>a.id===e);r&&(r.packed=this.packed,bo(r).catch(a=>console.warn(a))),this.drawRoll()}catch(i){console.warn(i),this.tracksHint=`The tracks could not be heard: ${i.message}`,this.drawRoll()}}blank(e){for(let[t,i]of[[this.form,"Form"],[this.map,"Map"],[this.roll,"Piano roll"],[this.tracks,"Tracks"]])t.drawn(ip(t.canvas,i,e))}analyse(){this.job++,this.t=performance.now(),this.worker.postMessage({id:this.job,packed:this.packed,pins:So(this.id)})}analysed(e){if(e.id===this.job){if(e.error){console.error(e.error),Tt("The analysis failed: see the console");return}if(this.a=e.a,this.fns=e.fns,console.log(`[analysis] ${this.id}: ${e.a.form[0]?e.a.form[0].label:"-"} (${e.a.form[0]?e.a.form[0].data.letters:""}), ${e.a.section.length} sections, ${e.a.key.length} keys, ${e.a.harmony.length} chords, ${e.a.cadence.length} cadences, ${e.a.phrase.length} phrases in ${e.ms.toFixed(0)} ms`),this.now(),this.draw(),this.sel){let t=this.find(this.sel);this.card(t)}}}draw(){if(!this.s||!this.a)return;let e=!!this.s.line;this.form.drawn((e?mp:op)(this.form.canvas,this.s,this.a)),this.map.drawn((e?gp:np)(this.map.canvas,this.s,this.a)),this.drawRoll()}drawRoll(){if(this.rollDirty=!1,!this.s||!this.a)return;this.roll.drawn((this.s.line?fp:ap)(this.roll.canvas,this.s,this.a,this.fns,{t:this.rollT,bars:Number(this.prefs.bars),axis:this.prefs.axis}));let e=this.roll.out;this.tracks.drawn(xp(this.tracks.canvas,this.s,this.a,e?{t0:e.t0,t1:e.t1}:null,{hint:this.tracksHint}))}scrollRoll(e){if(!this.s)return;let t=oe(this.s.bars.at(-1).at);e=Math.max(0,Math.min(t,e)),Math.abs(e-this.rollT)>1e-6&&(this.rollT=e,this.rollDirty=!0)}rollWindow(){let e=this.roll.out;return e?e.t1-e.t0:1}find(e){return(this.a[e.layer]||[]).find(t=>oe(t.start)===e.start)||null}now(){let e=pe("now");if(!this.a||!this.a.section){e.hidden=!0;return}let t=this.player.at,i=this.a.section.find(n=>oe(n.start)<=t+1e-9&&t<oe(n.end))||this.a.section[0];if(!i){e.hidden=!0;return}e.hidden=!1,e.style.borderColor=i.data.color,e.innerHTML=`<b style="color:${i.data.color}">${i.label}</b> ${i.data.role||""} <span>bars ${i.data.bars[0]}–${i.data.bars[1]}</span>`,e.onclick=()=>this.card(i)}hearIt(e,t=0){On().then(()=>Kd(e,t))}soundButton(e,t,i){let n=document.createElement("button");return n.className="sound",n.textContent="♪",n.title=i,n.onclick=r=>{r.stopPropagation(),this.hearIt(e,t==="makam"||t==="perde"?77:0)},n}card(e,t,i=!1){let n=pe("card");if(!e&&!t){n.hidden=!0,this.sel=null;return}if(n.hidden=!1,pe("cardSound").hidden=!0,t&&t.line){let u=t.line,d=this.a.makamInfo,p=d.perdes[u.held],g=Math.floor(u.t/60),y=(u.t%60).toFixed(1);pe("cardLayer").textContent="note",pe("cardTitle").textContent=p?p.name:`${Math.round(u.cents)} cents`,pe("cardSure").innerHTML='<b class="pencil">pencil</b>: heard, not checked',pe("cardWhy").textContent=`${g}:${y.padStart(4,"0")}, ${u.d.toFixed(2)} s; ${((u.cents-d.karar)/(1200/53)).toFixed(1)} commas over the karar${p&&Math.abs(p.off)>=.5?` (${p.off>0?"+":""}${p.off.toFixed(1)} from where AEU writes it)`:""}${u.vibrato?`; vibrato ${u.vibrato.rate.toFixed(1)} Hz, ±${u.vibrato.extent.toFixed(0)} cents`:""}.`,pe("cardAlts").replaceChildren(),pe("cardUnpin").hidden=!0,this.sel=null,this.titleSound(Ps(69+u.cents/100),"perde",i),pe("cardPlay").onclick=()=>{this.player.seek(u.t/4),this.player.playing||this.player.play().then(()=>{setTimeout(()=>{this.player.pause(),this.ui()},Math.max(400,u.d*1e3+300)),this.ui()})};return}if(t){let u=t.note,d=gn(this.s,u.onset);pe("cardLayer").textContent="note",pe("cardTitle").textContent=Fs(u.pitch),pe("cardSure").innerHTML=`<i style="display:inline-block;width:12px;height:12px;border-radius:3px;background:${Bn[t.fn]}"></i> ${Rs[t.fn]}`;let p=(this.a.harmony||[]).find(g=>oe(g.start)<=oe(u.onset)+1e-9&&oe(u.onset)<oe(g.end));pe("cardWhy").textContent=`bar ${d.bar}, beat ${d.beat.toFixed(d.beat%1?2:0)}${p?`, over ${p.label}`:""}.`,pe("cardAlts").replaceChildren(),pe("cardUnpin").hidden=!0,this.sel=null,this.titleSound(hp(u.pitch),"note",i),pe("cardPlay").onclick=()=>{On().then(()=>{kn(15,0),Dr(15,Math.round(12*(u.pitch.octave+1)+[0,2,4,5,7,9,11]["CDEFGAB".indexOf(u.pitch.step)]+u.pitch.alter/5),90),setTimeout(()=>Fn(15,Math.round(12*(u.pitch.octave+1)+[0,2,4,5,7,9,11]["CDEFGAB".indexOf(u.pitch.step)]+u.pitch.alter/5)),700)})};return}this.sel={layer:e.layer,start:oe(e.start)};let r=e.source!=="auto"||e.confidence>=(At[e.layer]??.9),a=gn(this.s,e.start),o=gn(this.s,e.end),l=u=>{let d=oe(u)*4;return`${Math.floor(d/60)}:${String(Math.floor(d%60)).padStart(2,"0")}`};pe("cardLayer").textContent=this.s.line?`${e.layer} · ${l(e.start)}–${l(e.end)}`:`${e.layer} · bars ${a.bar}–${o.beat>1.001?o.bar:Math.max(a.bar,o.bar-1)}`,pe("cardTitle").textContent=e.label;let c=vc(e.layer,e.data,this.a);c&&this.titleSound(c,e.layer,i),pe("cardSure").innerHTML=e.layer==="track"?r?'<b class="firm">ink</b>: checked against something (see below)':'<b class="pencil">pencil</b>: read from the sound, unchecked':(e.source==="pinned"?'<b class="firm">pinned by you</b>':r?`<b class="firm">ink</b>: sure (${Ec(e.confidence)})`:`<b class="pencil">pencil</b>: a guess (${Ec(e.confidence)})`)+(this.s.audio&&e.source==="auto"?" · heard from a recording":""),pe("cardWhy").textContent=e.explanation;let h=(e.alternatives||[]).filter(u=>u.data);if(pe("cardAlts").replaceChildren(...h.length?[Object.assign(document.createElement("p"),{textContent:"It could also be:",style:"margin:8px 0 2px;color:#8b8371"})]:[],...h.map(u=>{let d=document.createElement("div"),p=document.createElement("button"),g=vc(e.layer,{...e.data,...u.data,whole:!1},this.a);return d.className="alt",d.append(Object.assign(document.createElement("span"),{textContent:`${u.label} (${Ec(u.confidence)})`})),g&&d.append(this.soundButton(g,e.layer,`Hear ${u.label}`)),e.data&&e.data.whole||(p.textContent="Pin this",p.onclick=()=>this.pin(e,u),d.append(p)),d})),e.source==="auto"&&["key","harmony","makam"].includes(e.layer)&&!(e.data&&e.data.whole)){let u=document.createElement("button");u.textContent="Pin as it is",u.style.marginTop="6px",u.onclick=()=>this.pin(e,{label:e.label,data:e.data}),pe("cardAlts").append(u)}pe("cardUnpin").hidden=e.source!=="pinned",pe("cardUnpin").onclick=()=>this.unpin(e),pe("cardPlay").onclick=()=>{this.player.seek(oe(e.start)),this.player.play().then(()=>{let u=oe(e.end),d=setInterval(()=>{(!this.player.playing||this.player.at>=u)&&(this.player.pause(),clearInterval(d),this.ui())},50);this.ui()})}}titleSound(e,t,i){let n=pe("cardSound");n.hidden=!1,n.onclick=()=>this.hearIt(e,t==="makam"||t==="perde"?77:0),i&&n.onclick()}pin(e,t){let i={...e.data,...t.data},n=Kc(e.layer,e.start,e.end,t.label,{source:"pinned",data:i,explanation:`pinned by you (the analysis said ${e.label})`}),r=So(this.id).filter(a=>!(a.layer===n.layer&&oe(a.start)===oe(n.start)));r.push(n),bc(this.id,r),Tt(`Pinned: ${t.label}. The rest is heard again around it.`),this.analyse()}unpin(e){bc(this.id,So(this.id).filter(t=>!(t.layer===e.layer&&oe(t.start)===oe(e.start)))),Tt("Unpinned"),this.analyse()}key(e,t,i){On().then(()=>{kn(15,0),e?Dr(15,t,i):Fn(15,t)}),this.piano.press(t,e,e?"#d8b56a":null),e?this.live.set(t,!0):this.live.delete(t)}bind(){let e=this.view,t=pe("view"),i=null;t.addEventListener("pointerdown",a=>{if(t.setPointerCapture(a.pointerId),this.touches.set(a.pointerId,{x:a.clientX,y:a.clientY}),this.touches.size===2){i&&i.key!==void 0&&this.key(!1,i.key,0),i={pinch:!0,moved:!0};return}i={x:a.clientX,y:a.clientY,lx:a.clientX,ly:a.clientY,t:performance.now(),moved:!1};let o=e.ray(a.clientX,a.clientY);if(e.at==="piano"){let c=this.piano.hit(o);c!==null&&(i.key=c,this.key(!0,c,90))}let l=e.at==="read"&&e.reading===this.roll&&this.roll.out&&this.roll.out.tAt?this.under(o):null;l&&(l.kind==="moment"||l.kind==="note")&&(i.scrub={started:!1})}),t.addEventListener("pointermove",a=>{let o=e.ray(a.clientX,a.clientY),l=this.touches.get(a.pointerId);if(l&&this.touches.size===2){let[h,u]=[...this.touches.values()],d=Math.hypot(h.x-u.x,h.y-u.y),p=[(h.x+u.x)/2,(h.y+u.y)/2];this.touches.set(a.pointerId,{x:a.clientX,y:a.clientY});let[g,y]=[...this.touches.values()],f=Math.hypot(g.x-y.x,g.y-y.y),v=[(g.x+y.x)/2,(g.y+y.y)/2];d>10&&f>10&&e.zoomBy(d/f,v[0],v[1]),this.drag(p[0]-v[0],p[1]-v[1]);return}if(l&&this.touches.set(a.pointerId,{x:a.clientX,y:a.clientY}),i&&!i.pinch){if(Math.hypot(a.clientX-i.x,a.clientY-i.y)>8&&(i.moved=!0),i.moved&&i.scrub){let h=this.roll.at(o),u=h?this.roll.out.tAt(h.x):null;u!==null&&(i.scrub.started?this.player.scrubTo(u):(i.scrub.started=!0,this.player.scrubStart(u,a.shiftKey)))}else i.moved&&i.key===void 0&&this.drag(i.lx-a.clientX,i.ly-a.clientY);if(i.lx=a.clientX,i.ly=a.clientY,i.key!==void 0){let h=this.piano.hit(o);h!==i.key&&(this.key(!1,i.key,0),h!==null?(i.key=h,this.key(!0,h,90)):delete i.key)}}this.hover=e.at==="shelf"?this.shelf.hit(o):null;let c=a.pointerType==="mouse"&&!(i&&i.moved)?this.under(o):null;this.tip(c,a.clientX,a.clientY),t.style.cursor=i&&i.moved?i.scrub?"ew-resize":"grabbing":c&&c.kind==="moment"?"crosshair":this.hover||c||e.at==="desk"&&this.sheets.some(h=>h.at(o))||e.at==="piano"&&this.piano.hit(o)!==null?"pointer":"default"});let n=a=>{this.touches.delete(a.pointerId);let o=i;if(this.touches.size===0&&(i=null),!(!o||o.pinch)){if(o.key!==void 0){this.key(!1,o.key,0);return}if(o.scrub&&o.scrub.started){this.player.scrubEnd(),this.ui();return}o.moved||a.type==="pointercancel"||this.touch(e.ray(a.clientX,a.clientY))}};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("pointerleave",()=>this.tip(null)),t.addEventListener("wheel",a=>{a.preventDefault();let o=a.deltaMode!==0||a.deltaX===0&&Math.abs(a.deltaY)>=50&&Number.isInteger(a.deltaY);if(a.ctrlKey||o&&!(e.at==="read"&&(e.reading===this.roll||e.reading===this.tracks))){e.zoomBy(Math.exp(Math.max(-.5,Math.min(.5,a.deltaY*(a.ctrlKey?.01:.002)))),a.clientX,a.clientY);return}let l=a.deltaMode===1?30:1;if(o){this.scrollRoll(this.rollT+Math.sign(a.deltaY)*this.rollWindow()*.25);return}this.drag(a.deltaX*l,a.deltaY*l,!0)},{passive:!1});let r=1;t.addEventListener("gesturestart",a=>{a.preventDefault(),r=1}),t.addEventListener("gesturechange",a=>{a.preventDefault(),e.zoomBy(r/a.scale,innerWidth/2,innerHeight/2),r=a.scale}),addEventListener("keydown",a=>{a.target.closest("input,select,textarea,dialog")||(a.key==="Escape"&&(pe("card").hidden?e.at==="read"&&this.go("desk"):this.card(null)),a.key===" "&&e.at!=="piano"&&(a.preventDefault(),this.toggle()),e.at==="read"&&(e.reading===this.roll||e.reading===this.tracks)&&(a.key==="ArrowRight"||a.key==="ArrowLeft")&&this.step(a.key==="ArrowRight"?1:-1),a.key==="0"&&!a.target.closest("input")&&(e.panGoal={x:0,y:0},e.zoomGoal=1))}),pe("shelfBtn").onclick=()=>this.go("shelf"),pe("deskBtn").onclick=()=>this.go("desk"),pe("pianoBtn").onclick=()=>this.go("piano"),pe("formBtn").onclick=()=>this.go("read",this.form),pe("mapBtn").onclick=()=>this.go("read",this.map),pe("rollBtn").onclick=()=>this.go("read",this.roll),pe("tracksBtn").onclick=()=>this.go("read",this.tracks),pe("fitBtn").onclick=()=>{e.panGoal={x:0,y:0},e.zoomGoal=1},pe("playBtn").onclick=()=>this.toggle(),pe("rate").value=this.prefs.rate,pe("rateOut").textContent=`${this.prefs.rate}%`,pe("rate").oninput=()=>{this.prefs.rate=Number(pe("rate").value),pe("rateOut").textContent=`${this.prefs.rate}%`,Ls(this.prefs);let a=this.player.playing;this.player.pause(),this.player.rate=this.prefs.rate/100,a&&this.player.play()},pe("axis").value=this.prefs.axis,pe("span").value=String(this.prefs.bars),pe("axis").onchange=()=>{this.prefs.axis=pe("axis").value,Ls(this.prefs),this.drawRoll()},pe("span").onchange=()=>{this.prefs.bars=Number(pe("span").value),Ls(this.prefs),this.drawRoll()},pe("prevBars").onclick=()=>this.step(-1),pe("nextBars").onclick=()=>this.step(1),pe("legend").replaceChildren(...Object.entries(Rs).filter(([a])=>a!=="grace").map(([a,o])=>Object.assign(document.createElement("span"),{innerHTML:`<i style="background:${Bn[a]}"></i>${o}`}))),pe("cardX").onclick=()=>this.card(null);for(let a of document.querySelectorAll("dialog"))a.querySelector(".shut").onclick=()=>a.close();pe("addBtn").onclick=()=>pe("file").click(),pe("hear").onchange=()=>{let a=this.player.playing;this.player.pause(),this.player.mode=pe("hear").value,a&&this.player.play().then(()=>this.ui())},pe("file").onchange=()=>{for(let a of pe("file").files)this.add(a);pe("file").value=""},addEventListener("dragover",a=>{a.preventDefault(),pe("drop").hidden=!1}),addEventListener("dragleave",a=>{a.relatedTarget||(pe("drop").hidden=!0)}),addEventListener("drop",a=>{a.preventDefault(),pe("drop").hidden=!0;for(let o of a.dataTransfer.files)this.add(o)})}drag(e,t,i=!1){let n=this.view;if(n.at==="read"&&(n.reading===this.roll||n.reading===this.tracks)&&this.s){let r=this.rollWindow()/(innerWidth*.9);Math.abs(e)>=Math.abs(t)||n.zoomGoal>.95?this.scrollRoll(this.rollT+(Math.abs(e)>=Math.abs(t)?e:t)*r):n.panBy(0,t);return}n.panBy(e,t)}step(e){this.s&&this.scrollRoll(this.rollT+e*this.rollWindow()*.75)}touch(e){let t=this.view;if(t.at==="shelf"){let i=this.shelf.hit(e);i&&this.take(i);return}if(t.at==="desk"){for(let i of this.sheets)if(i.at(e))return this.go("read",i);return}if(t.at==="read"&&t.reading&&this.s&&this.a){let i=t.reading.at(e);if(!i)return this.go("desk");let n=t.reading.pick(i);if(!n){this.card(null);return}if(this.tip(null),n.kind==="span")this.jumps(n.span)&&this.jump(oe(n.span.start)),this.card(n.span,null,!0);else if(n.kind==="sound")this.hearIt(n.events,n.prog),Tt(n.label,1400);else if(n.kind==="note")this.jump(n.line?n.line.t/4:oe(n.note.onset)),this.card(null,n,!0);else if(n.kind==="moment")this.playMoment(t.reading.out.tAt(i.x));else if(n.kind==="time")this.jump(n.t);else if(n.kind==="timeline")this.jump(n.t0+(i.x-n.x)/n.w*(n.t1-n.t0));else if(n.kind==="matrix"){let r=Math.min(this.s.bars.length-1,Math.floor((i.x-n.x0)/n.cell)),a=Math.min(this.s.bars.length-1,Math.floor((i.y-n.y0)/n.cell));this.jump(oe(this.s.bars[r].at),!1),Tt(`Bars ${this.s.bars[a].n} and ${this.s.bars[r].n}: ${Math.round(this.a.matrix[a][r]*100)}% alike. Playing from bar ${this.s.bars[r].n}.`,2600)}}}under(e){let t=this.view;if(t.at==="desk"){let r=this.sheets.find(a=>a.at(e));return r?{kind:"sheet",sheet:r}:null}if(t.at!=="read"||!t.reading||!this.s||!this.a)return null;let i=t.reading.at(e);if(!i)return null;let n=t.reading.pick(i);return n?{...n,p:i}:null}placeOf(e){if(this.s.line){let i=e*4;return`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`}let t=gn(this.s,{n:Math.round(e*960),d:960});return`bar ${t.bar}${t.beat>1.01?`, beat ${t.beat.toFixed(t.beat%1?1:0)}`:""}`}rangeOf(e,t){if(this.s.line)return`${this.placeOf(e)}–${this.placeOf(t)}`;let i=gn(this.s,{n:Math.round(e*960),d:960}).bar,n=gn(this.s,{n:Math.max(Math.round(e*960),Math.round(t*960)-1),d:960}).bar;return i===n?`bar ${i}`:`bars ${i}–${n}`}tip(e,t,i){let n=pe("tip");if(!e){n.hidden=!0;return}let r=h=>String(h).replace(/[&<>]/g,u=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[u]),a=h=>{let u=String(h||"").match(/^[^.;]*[.;]?/),d=u?u[0]:"";return d.length>150?`${d.slice(0,147)}…`:d},o="";if(e.kind==="sheet")o=`<b>${{form:"Form",map:"Map",roll:"Roll",tracks:"Tracks"}[e.sheet.name]||e.sheet.name}</b><i>touch to read it</i>`;else if(e.kind==="span"){let h=e.span,u=h.source!=="auto"||h.confidence>=(At[h.layer]??.9),d=h.layer==="track"||h.data&&h.data.whole;o=`<b>${r(h.label)}</b> <span>${r(h.layer==="track"?"track":h.layer)}${d?"":` · ${r(this.rangeOf(oe(h.start),oe(h.end)))}`} · ${h.source==="pinned"?"pinned":u?"ink":"pencil"}</span>`,h.explanation&&(o+=`<p>${r(a(h.explanation))}</p>`),o+=`<i>${this.jumps(h)?"touch to go there, hear it and read why":"touch to read about it"}</i>`}else if(e.kind==="note"){let h=e.note,u=e.line,d=u&&this.a.makamInfo?this.a.makamInfo.perdes[u.held]:null;o=`<b>${r(u?d?d.name:`${Math.round(u.cents)} cents`:Fs(h.pitch))}</b> <span>note · ${r(this.placeOf(u?u.t/4:oe(h.onset)))}${u&&u.vibrato?` · vibrato ${u.vibrato.rate.toFixed(1)} Hz`:""}${e.fn&&e.fn!=="other"&&Rs[e.fn]?` · ${Rs[e.fn]}`:""}</span><i>touch to go there and hear it</i>`}else if(e.kind==="moment")o=this.momentTip(this.view.reading.out.tAt(e.p.x),r);else if(e.kind==="sound")o=`<b>${r(e.label)}</b><i>touch to hear it</i>`;else if(e.kind==="time")o=`<b>bar ${e.bar}</b><i>touch to go there</i>`;else if(e.kind==="timeline"){let h=e.t0+(e.p.x-e.x)/e.w*(e.t1-e.t0);o=`<b>${r(this.placeOf(h))}</b><i>touch to go there</i>`}else if(e.kind==="matrix"){let h=Math.min(this.s.bars.length-1,Math.floor((e.p.x-e.x0)/e.cell)),u=Math.min(this.s.bars.length-1,Math.floor((e.p.y-e.y0)/e.cell));o=`<b>bars ${this.s.bars[u].n} and ${this.s.bars[h].n}</b> <span>${Math.round(this.a.matrix[u][h]*100)}% alike</span><i>touch to go to bar ${this.s.bars[h].n}</i>`}if(!o){n.hidden=!0;return}n.innerHTML=o,n.hidden=!1;let l=n.offsetWidth,c=n.offsetHeight;n.style.left=`${Math.min(innerWidth-l-8,t+16)}px`,n.style.top=`${i+20+c>innerHeight?i-c-12:i+20}px`}momentTip(e,t){let i=h=>(this.a[h]||[]).find(u=>!(u.data&&u.data.whole)&&oe(u.start)<=e+1e-9&&e<oe(u.end)-1e-9),n=[],r=i("section"),a=i("key"),o=i("harmony"),l=i("makam");r&&n.push(`${r.label}${r.data&&r.data.role?` ${r.data.role}`:""}`),a&&n.push(a.label),o&&!(o.data&&o.data.none)&&n.push(o.label),this.s.line&&this.a.makam&&this.a.makam[0]&&n.push(this.a.makam[0].label),l&&n.push(l.label);let c="";if(this.s.line){let h=e*4,u=this.s.line.notes.find(g=>g.t<=h&&h<g.t+g.d),d=u&&this.a.makamInfo?this.a.makamInfo.perdes[u.held]:null,p=(this.a.ornament||[]).filter(g=>g.data.kind!=="vibrato"&&g.data.t<=h+.03&&h<g.data.t+g.data.d+.03).map(g=>g.label);c=u?`${d?d.name:`${Math.round(u.cents)} cents`}${u.vibrato?`, vibrato ${u.vibrato.rate.toFixed(1)} Hz ±${u.vibrato.extent.toFixed(0)}¢`:""}${p.length?`; ${p.join(", ")}`:""}`:"a rest"}else{let h=this.s.notes.filter(u=>!u.percussion&&oe(u.onset)<=e+1e-9&&e<oe(u.onset)+oe(u.dur)-1e-9).sort((u,d)=>Hr(d.pitch)-Hr(u.pitch));c=h.length?h.slice(0,8).map(u=>Fs(u.pitch)).join(" ")+(h.length>8?" …":""):"nothing"}return`<b>${t(this.placeOf(e))}</b>${n.length?` <span>${t(n.join(" · "))}</span>`:""}<p>${t(c)}</p><i>touch to hear this moment; drag to play what you trace (shift: at its own speed)</i>`}playMoment(e){let t=yi(this.s,{n:Math.round(e*960),d:960}),i=this.s.line?.8:yi(this.s,{n:Math.round((e+.25)*960),d:960})-t;this.player.stretch(e,Math.max(.5,Math.min(1.2,i))).then(()=>this.ui())}jumps(e){return e.layer!=="track"&&!(e.data&&e.data.whole)}jump(e,t=!0){if(!this.s)return;e=Math.max(0,e),this.player.seek(e);let i=this.s.bars,n=0;for(;n+1<i.length&&oe(i[n+1].at)<=e+1e-9;)n++;this.scrollRoll(oe(i[n].at)),this.now(),t&&Tt(`Here: ${this.placeOf(e)}`,1100)}go(e,t=null){if(e==="read"&&!this.s){Tt("Take a book from the shelf first");return}this.view.go(e,t),this.ui(),document.body.classList.toggle("reading",e==="read")}async add(e){try{let t=new Uint8Array(await e.arrayBuffer());if(Hs(t,e.name)){await this.addRecording(e,t);return}let i=await Gp(e.name,t),n=`user-${Date.now().toString(36)}`;i.id=n;let r={id:n,title:i.title||e.name,name:e.name,added:Date.now(),packed:nu(i)};await bo(r),Tt(`${r.title} is on the shelf (kept in this browser only)`),await this.books(),this.open({id:n,packed:r.packed})}catch(t){console.error(t),Tt(`${e.name}: ${t.message}`,5e3)}}async addRecording(e,t){let i=Tt(`Listening to ${e.name}…`,0),n=`user-${Date.now().toString(36)}`,r=performance.now();try{let a=await Tc(t),o=e.name.replace(/\.[^.]+$/,"").replace(/[_-]+/g," "),l=await jp(a,{id:n,title:o,source:e.name,licence:"yours (kept in this browser)"},(u,d)=>{i.textContent=`Listening to ${e.name}: ${d} (${Math.round(u*100)}%)`}),c={id:n,title:o,name:e.name,added:Date.now(),packed:l,audio:new Blob([t],{type:e.type||"audio/*"})},h=l.audio;console.log(`[audio] ${e.name}: ${h.seconds.toFixed(1)} s, ${h.bpm} a minute, ${h.meter} to a bar, ${h.heard} notes, tuning ${h.tuning} cents, heard in ${Math.round(performance.now()-r)} ms`);try{await bo(c),Tt(`${o} is on the shelf (kept in this browser only)`)}catch(u){console.warn(u),Tt(`${o} is heard, but this browser would not keep the recording (${u.name}): it is open until the page is closed`,7e3)}await this.books(),this.open({id:n,packed:l,recording:c.audio})}catch(a){console.error(a),Tt(`${e.name}: ${a.message}`,6e3)}finally{i.remove()}}toggle(){this.s&&(this.player.playing?this.player.pause():this.player.play().then(()=>this.ui()),this.ui())}soundState(){let e=Ai;e.ready&&!this.tuned?(this.tuned=!0,this.player.programs(),kn(15,0),Tt("The piano is tuned (GeneralUser GS)",1800)):e.failed&&Tt("Playing with a simple synth: the SoundFont could not be loaded"),this.ui()}ui(){let e=this.view,t=Ai;pe("playBtn").textContent=this.player.playing?"❚❚ Pause":"▶ Play",pe("playBtn").title=t.ready?"":t.failed?"a simple synth plays: the SoundFont could not be loaded":`the piano is being fetched (${Math.round(t.progress*100)}%); a simple synth plays meanwhile`,!t.ready&&!t.failed&&t.progress>0&&(pe("playBtn").textContent+=` · piano ${Math.round(t.progress*100)}%`);for(let[n,r]of[["shelfBtn",e.at==="shelf"],["deskBtn",e.at==="desk"],["pianoBtn",e.at==="piano"],["formBtn",e.at==="read"&&e.reading===this.form],["mapBtn",e.at==="read"&&e.reading===this.map],["rollBtn",e.at==="read"&&e.reading===this.roll],["tracksBtn",e.at==="read"&&e.reading===this.tracks]])pe(n).classList.toggle("on",r);pe("rollBar").hidden=!(e.at==="read"&&(e.reading===this.roll||e.reading===this.tracks));let i=!!(this.s&&this.s.line)||e.reading===this.tracks;pe("legend").hidden=i,pe("axis").parentElement.hidden=i}frame(e){let t=this.view;t.place(e,this.real||e),t.live(e),t.at==="shelf"&&this.shelf.hover(this.hover);let i=this.player.sounding(),n=new Map;for(let r of i)n.set(r.key,this.fns?Bn[this.fns[r.n.id]]:"#d8b56a");for(let[r,a]of n)this.piano.press(r,!0,a);for(let r of this.piano.keys.keys())!n.has(r)&&!this.live.has(r)&&this.piano.keys.get(r).goal&&this.piano.press(r,!1);if(this.piano.update(e),this.s&&this.a&&(this.player.playing||this.player.pos>0)){let r=this.player.at,a=this.roll.out;if(a){if(this.player.playing&&(r>=a.t1-1e-6||r<a.t0-1e-6)){let u=this.s.bars.findIndex((d,p)=>r<(p+1<this.s.bars.length?oe(this.s.bars[p+1].at):1/0));this.rollT=oe(this.s.bars[Math.max(0,u)].at),this.drawRoll()}let c=this.roll.out;this.roll.mark(r>=c.t0&&r<=c.t1?c.xOf(r):null,c.top,c.notesH);let h=this.tracks.out;h&&h.xOf&&this.tracks.mark(r>=h.t0&&r<=h.t1?h.xOf(r):null,h.top,h.notesH)}let o=this.map.out;if(o&&o.xOf){let c=o.rowOf(r);this.map.mark(o.xOf(r,c),o.top+c*o.rh,o.rh*.92)}let l=this.form.out;l&&l.X&&this.form.mark(l.X(r),l.cursorY,l.cursorH)}else for(let r of this.sheets)r.mark(null);this.rollDirty&&this.drawRoll(),this.player.playing&&(this.tick=(this.tick||0)+1)%15===0&&(this.ui(),this.now()),t.render()}};window.app=new Ac;
