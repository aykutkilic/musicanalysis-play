import{a as At,b as Bh,d as kh,g as Dn}from"./chunk-TCGC2X4W.js";import{a as Gh,b as Wh,c as Ps}from"./chunk-364VHHRO.js";import{A as Fh,C as zh,W as Hh,X as Vh,a as on,b as pi,c as Ts,d as As,e as Rh,f as _o,g as ce,h as Mo,i as Ch,j as Ph,k as Ih,n as Pr,o as Lh,q as Uh,s as Dh,t as Rs,x as Cs,y as Nh,z as Oh}from"./chunk-VOPJWMP6.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ed=2;var Tp=0,Nc=1,yi=2;var bn=2;var mn=100,Ap=101,Rp=102;var Cp=200,Pp=201,Ip=202,Lp=203,sl=204,al=205,Up=206,Dp=207,Np=208,Op=209,Fp=210,Bp=211,kp=212,zp=213,Hp=214,Vp=0,Gp=1,Wp=2,Xp=3,jp=4,qp=5,Yp=6,$p=7;var td=0;var id=300,nr=301,rr=302,ol=303,ll=304,Ga=306,Xr=1e3,jr=1001,cl=1002,si=1003,Zp=1004;var Is=1005;var Li=1006,So=1007;var Qn=1008;var Ji=1009,nd=1010,rd=1011,qr=1012,Oc=1013,xn=1014,Ui=1015,as=1016,Fc=1017,Bc=1018,sr=1020,sd=35902,ad=1021,od=1022,gi=1023,ld=1024,cd=1025,Yr=1026,ar=1027,hd=1028,kc=1029,ud=1030,zc=1031;var Hc=1033,ha=33776,ua=33777,da=33778,pa=33779,hl=35840,ul=35841,dl=35842,pl=35843,fl=36196,ml=37492,gl=37496,vl=37808,xl=37809,yl=37810,_l=37811,Ml=37812,Sl=37813,bl=37814,wl=37815,El=37816,Tl=37817,Al=37818,Rl=37819,Cl=37820,Pl=37821,fa=36492,Il=36494,Ll=36495,dd=36283,Ul=36284,Dl=36285,Nl=36286;var ga=2300,Ol=2301,bo=2302,Xh=2400,jh=2401,qh=2402;var Kn="",lt="srgb",pr="srgb-linear",Wa="linear",qe="srgb";var Nn=7680;var Jp=512,Kp=513,Qp=514,ef=515,tf=516,nf=517,rf=518,sf=519,Fl=35044,os=35048;var Yh="300 es",or=2e3,va=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ma=Math.PI/180,Bl=180/Math.PI;function Di(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Rt[255&r]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]+"-"+Rt[255&e]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[63&t|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[255&i]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function bt(r,e,t){return Math.max(e,Math.min(t,r))}function af(r,e){return(r%e+e)%e}function wo(r,e,t){return(1-t)*r+t*e}function mi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ye(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var ae=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class r{constructor(e,t,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],y=n[0],f=n[3],x=n[6],m=n[1],v=n[4],_=n[7],T=n[2],E=n[5],R=n[8];return s[0]=a*y+o*m+l*T,s[3]=a*f+o*v+l*E,s[6]=a*x+o*_+l*R,s[1]=c*y+h*m+u*T,s[4]=c*f+h*v+u*E,s[7]=c*x+h*_+u*R,s[2]=d*y+p*m+g*T,s[5]=d*f+p*v+g*E,s[8]=d*x+p*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=t*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(n*c-h*i)*y,e[2]=(o*i-n*a)*y,e[3]=d*y,e[4]=(h*t-n*l)*y,e[5]=(n*s-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Eo=new Le;function pd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function of(){let r=xa("canvas");return r.style.display="block",r}var $h={};function Hr(r){r in $h||($h[r]=!0,console.warn(r))}var Ge={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===qe&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===qe&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?Wa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ni(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function tr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Zh=[.64,.33,.3,.6,.15,.06],Jh=[.2126,.7152,.0722],Kh=[.3127,.329],Qh=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),On;Ge.define({[pr]:{primaries:Zh,whitePoint:Kh,transfer:Wa,toXYZ:Qh,fromXYZ:eu,luminanceCoefficients:Jh,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:Zh,whitePoint:Kh,transfer:qe,toXYZ:Qh,fromXYZ:eu,luminanceCoefficients:Jh,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}});var kl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{On===void 0&&(On=xa("canvas")),On.width=e.width,On.height=e.height;let i=On.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=On}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Ni(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Ni(t[i]/255)):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lf=0,ya=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(To(n[a].image)):s.push(To(n[a]))}else s=To(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function To(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cf=0,kt=class r extends Ki{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Di(),this.name="",this.source=new ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=id,kt.DEFAULT_ANISOTROPY=1;var je=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],f=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(p+1)/2,T=(x+1)/2,E=(h+d)/4,R=(u+y)/4,b=(g+f)/4;return v>_&&v>T?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=E/i,s=R/i):_>T?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=E/n,s=b/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=R/s,n=b/s),this.set(i,n,s,t),this}let m=Math.sqrt((f-g)*(f-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(f-g)/m,this.y=(u-y)/m,this.z=(d-h)/m,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zl=class extends Ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new kt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oi=class extends zl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends kt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=si,this.minFilter=si,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hl=class extends kt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=si,this.minFilter=si,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=g,void(e[t+3]=y);if(u!==y||l!==d||c!==p||h!==g){let f=1-o,x=l*d+c*p+h*g+u*y,m=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){let T=Math.sqrt(v),E=Math.atan2(T,x*m);f=Math.sin(f*E)/T,o=Math.sin(o*E)/T}let _=o*m;if(l=l*f+d*_,c=c*f+p*_,h=h*f+g*_,u=u*f+y*_,f===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),p=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ao=new C,tu=new Wt,Xt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(s,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ls.copy(i.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Us.subVectors(this.max,Ir),Fn.subVectors(e.a,Ir),Bn.subVectors(e.b,Ir),kn.subVectors(e.c,Ir),Wi.subVectors(Bn,Fn),Xi.subVectors(kn,Bn),ln.subVectors(Fn,kn);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ln.z,ln.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ln.z,0,-ln.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ln.y,ln.x,0];return!!Ro(t,Fn,Bn,kn,Us)&&(t=[1,0,0,0,1,0,0,0,1],!!Ro(t,Fn,Bn,kn,Us)&&(Ds.crossVectors(Wi,Xi),t=[Ds.x,Ds.y,Ds.z],Ro(t,Fn,Bn,kn,Us)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ii).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ei=[new C,new C,new C,new C,new C,new C,new C,new C],ii=new C,Ls=new Xt,Fn=new C,Bn=new C,kn=new C,Wi=new C,Xi=new C,ln=new C,Ir=new C,Us=new C,Ds=new C,cn=new C;function Ro(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){cn.fromArray(r,s);let o=n.x*Math.abs(cn.x)+n.y*Math.abs(cn.y)+n.z*Math.abs(cn.z),l=e.dot(cn),c=t.dot(cn),h=i.dot(cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var hf=new Xt,Lr=new C,Co=new C,jt=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):hf.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Lr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Co)),this.expandByPoint(Lr.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new C,Po=new C,Ns=new C,ji=new C,Io=new C,Os=new C,Lo=new C,yn=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Po.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(Po);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ns),o=ji.dot(this.direction),l=-ji.dot(Ns),c=ji.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Po).addScaledVector(Ns,d),p}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),n=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,n,s){Io.subVectors(t,e),Os.subVectors(i,e),Lo.crossVectors(Io,Os);let a,o=this.direction.dot(Lo);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ji.subVectors(this.origin,e);let l=a*this.direction.dot(Os.crossVectors(ji,Os));if(l<0)return null;let c=a*this.direction.dot(Io.cross(ji));if(c<0||l+c>o)return null;let h=-a*ji.dot(Lo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class r{constructor(e,t,i,n,s,a,o,l,c,h,u,d,p,g,y,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,p,g,y,f)}set(e,t,i,n,s,a,o,l,c,h,u,d,p,g,y,f){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=n,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=g,x[11]=y,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/zn.setFromMatrixColumn(e,0).length(),s=1/zn.setFromMatrixColumn(e,1).length(),a=1/zn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uf,e,df)}lookAt(e,t,i){let n=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),qi.crossVectors(i,Ft),qi.lengthSq()===0&&(Math.abs(i.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),qi.crossVectors(i,Ft)),qi.normalize(),Fs.crossVectors(Ft,qi),n[0]=qi.x,n[4]=Fs.x,n[8]=Ft.x,n[1]=qi.y,n[5]=Fs.y,n[9]=Ft.y,n[2]=qi.z,n[6]=Fs.z,n[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],y=i[6],f=i[10],x=i[14],m=i[3],v=i[7],_=i[11],T=i[15],E=n[0],R=n[4],b=n[8],A=n[12],S=n[1],M=n[5],w=n[9],D=n[13],O=n[2],X=n[6],N=n[10],V=n[14],W=n[3],Q=n[7],$=n[11],k=n[15];return s[0]=a*E+o*S+l*O+c*W,s[4]=a*R+o*M+l*X+c*Q,s[8]=a*b+o*w+l*N+c*$,s[12]=a*A+o*D+l*V+c*k,s[1]=h*E+u*S+d*O+p*W,s[5]=h*R+u*M+d*X+p*Q,s[9]=h*b+u*w+d*N+p*$,s[13]=h*A+u*D+d*V+p*k,s[2]=g*E+y*S+f*O+x*W,s[6]=g*R+y*M+f*X+x*Q,s[10]=g*b+y*w+f*N+x*$,s[14]=g*A+y*D+f*V+x*k,s[3]=m*E+v*S+_*O+T*W,s[7]=m*R+v*M+_*X+T*Q,s[11]=m*b+v*w+_*N+T*$,s[15]=m*A+v*D+_*V+T*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-n*a*p+n*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+e[15]*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],y=e[13],f=e[14],x=e[15],m=u*f*c-y*d*c+y*l*p-o*f*p-u*l*x+o*d*x,v=g*d*c-h*f*c-g*l*p+a*f*p+h*l*x-a*d*x,_=h*y*c-g*u*c+g*o*p-a*y*p-h*o*x+a*u*x,T=g*u*l-h*y*l-g*o*d+a*y*d+h*o*f-a*u*f,E=t*m+i*v+n*_+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=m*R,e[1]=(y*d*s-u*f*s-y*n*p+i*f*p+u*n*x-i*d*x)*R,e[2]=(o*f*s-y*l*s+y*n*c-i*f*c-o*n*x+i*l*x)*R,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*p-i*l*p)*R,e[4]=v*R,e[5]=(h*f*s-g*d*s+g*n*p-t*f*p-h*n*x+t*d*x)*R,e[6]=(g*l*s-a*f*s-g*n*c+t*f*c+a*n*x-t*l*x)*R,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*p+t*l*p)*R,e[8]=_*R,e[9]=(g*u*s-h*y*s-g*i*p+t*y*p+h*i*x-t*u*x)*R,e[10]=(a*y*s-g*o*s+g*i*c-t*y*c-a*i*x+t*o*x)*R,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*p-t*o*p)*R,e[12]=T*R,e[13]=(h*y*n-g*u*n+g*i*d-t*y*d-h*i*f+t*u*f)*R,e[14]=(g*o*n-a*y*n-g*i*l+t*y*l+a*i*f-t*o*f)*R,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,y=a*h,f=a*u,x=o*u,m=l*c,v=l*h,_=l*u,T=i.x,E=i.y,R=i.z;return n[0]=(1-(y+x))*T,n[1]=(p+_)*T,n[2]=(g-v)*T,n[3]=0,n[4]=(p-_)*E,n[5]=(1-(d+x))*E,n[6]=(f+m)*E,n[7]=0,n[8]=(g+v)*R,n[9]=(f-m)*R,n[10]=(1-(d+y))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=zn.set(n[0],n[1],n[2]).length(),a=zn.set(n[4],n[5],n[6]).length(),o=zn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],ni.copy(this);let l=1/s,c=1/a,h=1/o;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=c,ni.elements[5]*=c,ni.elements[6]*=c,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,g;if(o===or)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else{if(o!==va)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),g=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-s),d=(t+e)*c,p=(i+n)*h,g,y;if(o===or)g=(a+s)*u,y=-2*u;else{if(o!==va)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=s*u,y=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},zn=new C,ni=new Te,uf=new C(0,0,0),df=new C(1,1,1),qi=new C,Fs=new C,Ft=new C,iu=new Te,nu=new Wt,vi=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},pf=0,ru=new C,Hn=new Wt,Ai=new Te,Bs=new C,Ur=new C,ff=new C,mf=new Wt,su=new C(1,0,0),au=new C(0,1,0),ou=new C(0,0,1),lu={type:"added"},gf={type:"removed"},Vn={type:"childadded",child:null},Uo={type:"childremoved",child:null},dt=class r extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new C,t=new vi,i=new Wt,n=new C(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Te},normalMatrix:{value:new Le}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.premultiply(Hn),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bs.copy(e):Bs.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Ur,Bs,this.up):Ai.lookAt(Bs,Ur,this.up),this.quaternion.setFromRotationMatrix(Ai),n&&(Ai.extractRotation(n.matrixWorld),Hn.setFromRotationMatrix(Ai),this.quaternion.premultiply(Hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gf),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};dt.DEFAULT_UP=new C(0,1,0),dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new C,Ri=new C,Do=new C,Ci=new C,Gn=new C,Wn=new C,cu=new C,No=new C,Oo=new C,Fo=new C,Bo=new je,ko=new je,zo=new je,Ii=class r{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ri.subVectors(e,t),n.cross(ri);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){ri.subVectors(n,t),Ri.subVectors(i,t),Do.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(Ri),l=ri.dot(Do),c=Ri.dot(Ri),h=Ri.dot(Do),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ci)!==null&&Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return Bo.setScalar(0),ko.setScalar(0),zo.setScalar(0),Bo.fromBufferAttribute(e,t),ko.fromBufferAttribute(e,i),zo.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Bo,s.x),a.addScaledVector(ko,s.y),a.addScaledVector(zo,s.z),a}static isFrontFacing(e,t,i,n){return ri.subVectors(i,t),Ri.subVectors(e,t),ri.cross(Ri).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),.5*ri.cross(Ri).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Gn.subVectors(n,i),Wn.subVectors(s,i),No.subVectors(e,i);let l=Gn.dot(No),c=Wn.dot(No);if(l<=0&&c<=0)return t.copy(i);Oo.subVectors(e,n);let h=Gn.dot(Oo),u=Wn.dot(Oo);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Gn,a);Fo.subVectors(e,s);let p=Gn.dot(Fo),g=Wn.dot(Fo);if(g>=0&&p<=g)return t.copy(s);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Wn,o);let f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return cu.subVectors(s,n),o=(u-h)/(u-h+(p-g)),t.copy(n).addScaledVector(cu,o);let x=1/(f+y+d);return a=y*x,o=d*x,t.copy(i).addScaledVector(Gn,a).addScaledVector(Wn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Ho(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ge.workingColorSpace){if(e=af(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ho(a,s,e+1/3),this.g=Ho(a,s,e),this.b=Ho(a,s,e-1/3)}return Ge.toWorkingColorSpace(this,n),this}setStyle(e,t=lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let i=fd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Ge.fromWorkingColorSpace(Ct.copy(this),e),65536*Math.round(bt(255*Ct.r,0,255))+256*Math.round(bt(255*Ct.g,0,255))+Math.round(bt(255*Ct.b,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Ct.copy(this),t);let i=Ct.r,n=Ct.g,s=Ct.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=lt){Ge.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,i=Ct.g,n=Ct.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(ks);let i=wo(Yi.h,ks.h,t),n=wo(Yi.s,ks.s,t),s=wo(Yi.l,ks.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new be;be.NAMES=fd;var vf=0,Fi=class extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Di(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=al,this.blendEquation=mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nn,this.stencilZFail=Nn,this.stencilZPass=Nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==al&&(i.blendDst=this.blendDst),this.blendEquation!==mn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mt=class extends Fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},X0=xf();function xf(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var ft=new C,zs=new ae,at=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fl,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ye(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fl&&(e.usage=this.usage),e}};var Ma=class extends at{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sa=class extends at{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ae=class extends at{constructor(e,t,i){super(new Float32Array(e),t,i)}},yf=0,Gt=new Te,Vo=new dt,Xn=new C,Bt=new Xt,Dr=new Xt,St=new C,Je=class r extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?Sa:Ma)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(i,3))}else{for(let i=0,n=t.count;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new C,1/0);if(e){let i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Bt.min,Dr.min),Bt.expandByPoint(St),St.addVectors(Bt.max,Dr.max),Bt.expandByPoint(St)):(Bt.expandByPoint(Dr.min),Bt.expandByPoint(Dr.max))}Bt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(Xn.fromBufferAttribute(e,c),St.add(Xn)),n=Math.max(n,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new C,l[b]=new C;let c=new C,h=new C,u=new C,d=new ae,p=new ae,g=new ae,y=new C,f=new C;function x(b,A,S){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,S),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let M=1/(p.x*g.y-g.x*p.y);isFinite(M)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(M),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(M),o[b].add(y),o[A].add(y),o[S].add(y),l[b].add(f),l[A].add(f),l[S].add(f))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let b=0,A=m.length;b<A;++b){let S=m[b],M=S.start;for(let w=M,D=M+S.count;w<D;w+=3)x(e.getX(w+0),e.getX(w+1),e.getX(w+2))}let v=new C,_=new C,T=new C,E=new C;function R(b){T.fromBufferAttribute(n,b),E.copy(T);let A=o[b];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),_.crossVectors(E,A);let S=_.dot(l[b])<0?-1:1;a.setXYZW(b,v.x,v.y,v.z,S)}for(let b=0,A=m.length;b<A;++b){let S=m[b],M=S.start;for(let w=M,D=M+S.count;w<D;w+=3)R(e.getX(w+0)),R(e.getX(w+1)),R(e.getX(w+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new at(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,f=l.length;y<f;y++){p=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*h;for(let x=0;x<h;x++)d[g++]=c[p++]}return new at(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hu=new Te,hn=new yn,Hs=new jt,uu=new C,Vs=new C,Gs=new C,Ws=new C,Go=new C,Xs=new C,du=new C,js=new C,xe=class extends dt{constructor(e=new Je,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Go.fromBufferAttribute(u,e),a?Xs.addScaledVector(Go,h):Xs.addScaledVector(Go.sub(t),h))}t.add(Xs)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(s),hn.copy(e.ray).recast(e.near),Hs.containsPoint(hn.origin)===!1&&(hn.intersectSphere(Hs,uu)===null||hn.origin.distanceToSquared(uu)>(e.far-e.near)**2))return;hu.copy(s).invert(),hn.copy(e.ray).applyMatrix4(hu),i.boundingBox!==null&&hn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,hn)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let f=d[g],x=a[f.materialIndex];for(let m=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));m<v;m+=3)n=qs(this,x,e,i,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);g<y;g+=3)n=qs(this,a,e,i,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let f=d[g],x=a[f.materialIndex];for(let m=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));m<v;m+=3)n=qs(this,x,e,i,c,h,u,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);g<y;g+=3)n=qs(this,a,e,i,c,h,u,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}};function qs(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Vs),r.getVertexPosition(l,Gs),r.getVertexPosition(c,Ws);let h=(function(u,d,p,g,y,f,x,m){let v;if(v=d.side===1?g.intersectTriangle(x,f,y,!0,m):g.intersectTriangle(y,f,x,d.side===0,m),v===null)return null;js.copy(m),js.applyMatrix4(u.matrixWorld);let _=p.ray.origin.distanceTo(js);return _<p.near||_>p.far?null:{distance:_,point:js.clone(),object:u}})(r,e,t,i,Vs,Gs,Ws,du);if(h){let u=new C;Ii.getBarycoord(du,Vs,Gs,Ws,u),n&&(h.uv=Ii.getInterpolatedAttribute(n,o,l,c,u,new ae)),s&&(h.uv1=Ii.getInterpolatedAttribute(s,o,l,c,u,new ae)),a&&(h.normal=Ii.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Ii.getNormal(Vs,Gs,Ws,d.normal),h.face=d,h.barycoord=u}return h}var gt=class r extends Je{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function g(y,f,x,m,v,_,T,E,R,b,A){let S=_/R,M=T/b,w=_/2,D=T/2,O=E/2,X=R+1,N=b+1,V=0,W=0,Q=new C;for(let $=0;$<N;$++){let k=$*M-D;for(let K=0;K<X;K++){let te=K*S-w;Q[y]=te*m,Q[f]=k*v,Q[x]=O,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[f]=0,Q[x]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(K/R),u.push(1-$/b),V+=1}}for(let $=0;$<b;$++)for(let k=0;k<R;k++){let K=d+k+X*$,te=d+k+X*($+1),ue=d+(k+1)+X*($+1),pe=d+(k+1)+X*$;l.push(K,te,pe),l.push(te,ue,pe),W+=6}o.addGroup(p,W,A),p+=W,d+=V}g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function lr(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Dt(r){let e={};for(let t=0;t<r.length;t++){let i=lr(r[t]);for(let n in i)e[n]=i[n]}return e}function md(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var _f={clone:lr,merge:Dt},qt=class extends Fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Zr=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new C,pu=new ae,fu=new ae,Pt=class extends Zr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Bl*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ma*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Bl*Math.atan(Math.tan(.5*ma*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,pu,fu),t.subVectors(fu,pu)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ma*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jn=-90,Vl=class extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Pt(jn,1,e,t);n.layers=this.layers,this.add(n);let s=new Pt(jn,1,e,t);s.layers=this.layers,this.add(s);let a=new Pt(jn,1,e,t);a.layers=this.layers,this.add(a);let o=new Pt(jn,1,e,t);o.layers=this.layers,this.add(o);let l=new Pt(jn,1,e,t);l.layers=this.layers,this.add(l);let c=new Pt(jn,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===or)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==va)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ba=class extends kt{constructor(e,t,i,n,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:nr,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gl=class extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ba(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new gt(5,5,5),s=new qt({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new xe(n,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Li),new Vl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Wo=new C,Mf=new C,Sf=new Le,Pi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Wo.subVectors(i,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Wo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sf.getNormalMatrix(e),n=this.coplanarPoint(Wo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},un=new jt,Ys=new C,Qi=class{constructor(e=new Pi,t=new Pi,i=new Pi,n=new Pi,s=new Pi,a=new Pi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],g=n[9],y=n[10],f=n[11],x=n[12],m=n[13],v=n[14],_=n[15];if(i[0].setComponents(l-s,d-c,f-p,_-x).normalize(),i[1].setComponents(l+s,d+c,f+p,_+x).normalize(),i[2].setComponents(l+a,d+h,f+g,_+m).normalize(),i[3].setComponents(l-a,d-h,f-g,_-m).normalize(),i[4].setComponents(l-o,d-u,f-y,_-v).normalize(),t===or)i[5].setComponents(l+o,d+u,f+y,_+v).normalize();else{if(t!==va)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,y,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(e){return un.center.set(0,0,0),un.radius=.7071067811865476,un.applyMatrix4(e.matrixWorld),this.intersectsSphere(un)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ys.x=n.normal.x>0?e.max.x:e.min.x,Ys.y=n.normal.y>0?e.max.y:e.min.y,Ys.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gd(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bf(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var ht=class r extends Je{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],y=[],f=[];for(let x=0;x<h;x++){let m=x*d-a;for(let v=0;v<c;v++){let _=v*u-s;g.push(_,-m,0),y.push(0,0,1),f.push(v/o),f.push(1-x/l)}}for(let x=0;x<l;x++)for(let m=0;m<o;m++){let v=m+c*x,_=m+c*(x+1),T=m+1+c*(x+1),E=m+1+c*x;p.push(v,_,E),p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(y,3)),this.setAttribute("uv",new Ae(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},De={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},fe={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},fi={basic:{uniforms:Dt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Dt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new be(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Dt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Dt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Dt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new be(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Dt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Dt([fe.points,fe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Dt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Dt([fe.common,fe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Dt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Dt([fe.sprite,fe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Dt([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Dt([fe.lights,fe.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};fi.physical={uniforms:Dt([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var $s={r:0,b:0,g:0},dn=new vi,wf=new Te;function Ef(r,e,t,i,n,s,a){let o=new be(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function g(f){let x=f.isScene===!0?f.background:null;return x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x}function y(f,x){f.getRGB($s,md(r)),i.buffers.color.setClear($s.r,$s.g,$s.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(f,x=1){o.set(f),h=x,y(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,y(o,h)},render:function(f){let x=!1,m=g(f);m===null?y(o,h):m&&m.isColor&&(y(m,1),x=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(f,x){let m=g(x);m&&(m.isCubeTexture||m.mapping===Ga)?(c===void 0&&(c=new xe(new gt(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:lr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,_,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),dn.copy(x.backgroundRotation),dn.x*=-1,dn.y*=-1,dn.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(dn.y*=-1,dn.z*=-1),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wf.makeRotationFromEuler(dn)),c.material.toneMapped=Ge.getTransfer(m.colorSpace)!==qe,u===m&&d===m.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=m,d=m.version,p=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new xe(new ht(2,2),new qt({name:"BackgroundMaterial",uniforms:lr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(m.colorSpace)!==qe,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),u===m&&d===m.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=m,d=m.version,p=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}}}function Tf(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=c(null),s=n,a=!1;function o(x){return r.bindVertexArray(x)}function l(x){return r.deleteVertexArray(x)}function c(x){let m=[],v=[],_=[];for(let T=0;T<t;T++)m[T]=0,v[T]=0,_[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:v,attributeDivisors:_,object:x,attributes:{},index:null}}function h(){let x=s.newAttributes;for(let m=0,v=x.length;m<v;m++)x[m]=0}function u(x){d(x,0)}function d(x,m){let v=s.newAttributes,_=s.enabledAttributes,T=s.attributeDivisors;v[x]=1,_[x]===0&&(r.enableVertexAttribArray(x),_[x]=1),T[x]!==m&&(r.vertexAttribDivisor(x,m),T[x]=m)}function p(){let x=s.newAttributes,m=s.enabledAttributes;for(let v=0,_=m.length;v<_;v++)m[v]!==x[v]&&(r.disableVertexAttribArray(v),m[v]=0)}function g(x,m,v,_,T,E,R){R===!0?r.vertexAttribIPointer(x,m,v,T,E):r.vertexAttribPointer(x,m,v,_,T,E)}function y(){f(),a=!0,s!==n&&(s=n,o(s.object))}function f(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(x,m,v,_,T){let E=!1,R=(function(b,A,S){let M=S.wireframe===!0,w=i[b.id];w===void 0&&(w={},i[b.id]=w);let D=w[A.id];D===void 0&&(D={},w[A.id]=D);let O=D[M];return O===void 0&&(O=c(r.createVertexArray()),D[M]=O),O})(_,v,m);s!==R&&(s=R,o(s.object)),E=(function(b,A,S,M){let w=s.attributes,D=A.attributes,O=0,X=S.getAttributes();for(let N in X)if(X[N].location>=0){let V=w[N],W=D[N];if(W===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),V===void 0||V.attribute!==W||W&&V.data!==W.data)return!0;O++}return s.attributesNum!==O||s.index!==M})(x,_,v,T),E&&(function(b,A,S,M){let w={},D=A.attributes,O=0,X=S.getAttributes();for(let N in X)if(X[N].location>=0){let V=D[N];V===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(V=b.instanceColor));let W={};W.attribute=V,V&&V.data&&(W.data=V.data),w[N]=W,O++}s.attributes=w,s.attributesNum=O,s.index=M})(x,_,v,T),T!==null&&e.update(T,r.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,(function(b,A,S,M){h();let w=M.attributes,D=S.getAttributes(),O=A.defaultAttributeValues;for(let X in D){let N=D[X];if(N.location>=0){let V=w[X];if(V===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(V=b.instanceColor)),V!==void 0){let W=V.normalized,Q=V.itemSize,$=e.get(V);if($===void 0)continue;let k=$.buffer,K=$.type,te=$.bytesPerElement,ue=K===r.INT||K===r.UNSIGNED_INT||V.gpuType===Oc;if(V.isInterleavedBufferAttribute){let pe=V.data,U=pe.stride,L=V.offset;if(pe.isInstancedInterleavedBuffer){for(let H=0;H<N.locationSize;H++)d(N.location+H,pe.meshPerAttribute);b.isInstancedMesh!==!0&&M._maxInstanceCount===void 0&&(M._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let H=0;H<N.locationSize;H++)u(N.location+H);r.bindBuffer(r.ARRAY_BUFFER,k);for(let H=0;H<N.locationSize;H++)g(N.location+H,Q/N.locationSize,K,W,U*te,(L+Q/N.locationSize*H)*te,ue)}else{if(V.isInstancedBufferAttribute){for(let pe=0;pe<N.locationSize;pe++)d(N.location+pe,V.meshPerAttribute);b.isInstancedMesh!==!0&&M._maxInstanceCount===void 0&&(M._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let pe=0;pe<N.locationSize;pe++)u(N.location+pe);r.bindBuffer(r.ARRAY_BUFFER,k);for(let pe=0;pe<N.locationSize;pe++)g(N.location+pe,Q/N.locationSize,K,W,Q*te,Q/N.locationSize*pe*te,ue)}}else if(O!==void 0){let W=O[X];if(W!==void 0)switch(W.length){case 2:r.vertexAttrib2fv(N.location,W);break;case 3:r.vertexAttrib3fv(N.location,W);break;case 4:r.vertexAttrib4fv(N.location,W);break;default:r.vertexAttrib1fv(N.location,W)}}}}p()})(x,m,v,_),T!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))},reset:y,resetDefaultState:f,dispose:function(){y();for(let x in i){let m=i[x];for(let v in m){let _=m[v];for(let T in _)l(_[T].object),delete _[T];delete m[v]}delete i[x]}},releaseStatesOfGeometry:function(x){if(i[x.id]===void 0)return;let m=i[x.id];for(let v in m){let _=m[v];for(let T in _)l(_[T].object),delete _[T];delete m[v]}delete i[x.id]},releaseStatesOfProgram:function(x){for(let m in i){let v=i[m];if(v[x.id]===void 0)continue;let _=v[x.id];for(let T in _)l(_[T].object),delete _[T];delete v[x.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Af(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)n(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,i,1)}}}function Rf(r,e,t,i){let n;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(d){return d===gi||i.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Ji&&i.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Ui&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Cf(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Pi,o=new Le,l={value:null,needsUpdate:!1};function c(h,u,d,p){let g=h!==null?h.length:0,y=null;if(g!==0){if(y=l.value,p!==!0||y===null){let f=d+4*g,x=u.matrixWorldInverse;o.getNormalMatrix(x),(y===null||y.length<f)&&(y=new Float32Array(f));for(let m=0,v=d;m!==g;++m,v+=4)a.copy(h[m]).applyMatrix4(x,o),a.normal.toArray(y,v),y[v+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||n;return n=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,g=h.clipIntersection,y=h.clipShadows,f=r.get(h);if(!n||p===null||p.length===0||s&&!y)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let x=s?0:i,m=4*x,v=f.clippingState||null;l.value=v,v=c(p,u,m,d);for(let _=0;_!==m;++_)v[_]=t[_];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}}}function Pf(r){let e=new WeakMap;function t(n,s){return s===ol?n.mapping=nr:s===ll&&(n.mapping=rr),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===ol||s===ll){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Gl(a.height);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var wa=class extends Zr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mu=[.125,.215,.35,.446,.526,.582],Nr=20,Xo=new wa,gu=new be,jo=null,qo=0,Yo=0,$o=!1,fn=(1+Math.sqrt(5))/2,qn=1/fn,vu=[new C(-fn,qn,0),new C(fn,qn,0),new C(-qn,0,fn),new C(qn,0,fn),new C(0,fn,-qn),new C(0,fn,qn),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],cr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){jo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jo,qo,Yo),this._renderer.xr.enabled=$o,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:as,format:gi,colorSpace:pr,depthBuffer:!1},n=xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+mu.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let g=1/p;d>a-4?g=mu[d-a+4-1]:d===0&&(g=0),c.push(g);let y=1/(p-2),f=-y,x=1+y,m=[f,f,x,f,x,x,f,f,x,x,f,x],v=6,_=6,T=3,E=2,R=1,b=new Float32Array(T*_*v),A=new Float32Array(E*_*v),S=new Float32Array(R*_*v);for(let w=0;w<v;w++){let D=w%3*2/3-1,O=w>2?0:-1,X=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];b.set(X,T*_*w),A.set(m,E*_*w);let N=[w,w,w,w,w,w];S.set(N,R*_*w)}let M=new Je;M.setAttribute("position",new at(b,T)),M.setAttribute("uv",new at(A,E)),M.setAttribute("faceIndex",new at(S,R)),o.push(M),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Nr),h=new C(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new xe(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,i,n){let s=new Pt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(gu),l.toneMapping=0,l.autoClear=!1;let u=new mt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new xe(new gt,u),p=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(gu),p=!0);for(let y=0;y<6;y++){let f=y%3;f===0?(s.up.set(0,a[y],0),s.lookAt(o[y],0,0)):f===1?(s.up.set(0,0,a[y]),s.lookAt(0,o[y],0)):(s.up.set(0,a[y],0),s.lookAt(0,0,o[y]));let x=this._cubeSize;Zs(n,f*x,y>2?x:0,x,x),l.setRenderTarget(n),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===nr||e.mapping===rr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Zs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Xo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vu[(n-s-1)%vu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new xe(this._lodPlanes[n],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,g=s/p,y=isFinite(s)?1+Math.floor(3*g):Nr;y>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let f=[],x=0;for(let _=0;_<Nr;++_){let T=_/g,E=Math.exp(-T*T/2);f.push(E),_===0?x+=E:_<y&&(x+=2*E)}for(let _=0;_<f.length;_++)f[_]=f[_]/x;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:m}=this;u.dTheta.value=p,u.mipInt.value=m-i;let v=this._sizeLods[n];Zs(t,3*v*(n>m-4?n-m+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,Xo)}};function xu(r,e,t){let i=new Oi(r,e,t);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function yu(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function _u(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function If(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===ol||s===ll,o=s===nr||s===rr;if(a||o){let l=e.get(n),c=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return t===null&&(t=new cr(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),l.texture;if(l!==void 0)return l.texture;{let h=n.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new cr(r)),l=a?t.fromEquirectangular(n):t.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Lf(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Hr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Uf(r,e,t,i){let n={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,g=d.length;p<g;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete n[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let y=h.array;d=h.version;for(let f=0,x=y.length;f<x;f+=3){let m=y[f+0],v=y[f+1],_=y[f+2];c.push(m,v,v,_,_,m)}}else{if(u===void 0)return;{let y=u.array;d=u.version;for(let f=0,x=y.length/3-1;f<x;f+=3){let m=f+0,v=f+1,_=f+2;c.push(m,v,v,_,_,m)}}}let p=new(pd(c)?Sa:Ma)(c,1);p.version=d;let g=s.get(l);g&&e.remove(g),s.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,g=d.length;p<g;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Df(r,e,t){let i,n,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(i,l,n,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(i,l,n,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function Nf(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Of(r,e,t){let i=new WeakMap,n=new je;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let b=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],m=0;d===!0&&(m=1),p===!0&&(m=2),g===!0&&(m=3);let v=a.attributes.position.count*m,_=1;v>e.maxTextureSize&&(_=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*_*4*h),E=new _a(T,v,_,h);E.type=Ui,E.needsUpdate=!0;let R=4*m;for(let A=0;A<h;A++){let S=y[A],M=f[A],w=x[A],D=v*_*4*A;for(let O=0;O<S.count;O++){let X=O*R;d===!0&&(n.fromBufferAttribute(S,O),T[D+X+0]=n.x,T[D+X+1]=n.y,T[D+X+2]=n.z,T[D+X+3]=0),p===!0&&(n.fromBufferAttribute(M,O),T[D+X+4]=n.x,T[D+X+5]=n.y,T[D+X+6]=n.z,T[D+X+7]=0),g===!0&&(n.fromBufferAttribute(w,O),T[D+X+8]=n.x,T[D+X+9]=n.y,T[D+X+10]=n.z,T[D+X+11]=w.itemSize===4?n.w:1)}}u={count:h,texture:E,size:new ae(v,_)},i.set(a,u),a.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Ff(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}var Ea=class extends kt{constructor(e,t,i,n,s,a,o,l,c,h=1026){if(h!==Yr&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yr&&(i=xn),i===void 0&&h===ar&&(i=sr),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:si,this.minFilter=l!==void 0?l:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vd=new kt,Mu=new Ea(1,1),xd=new _a,yd=new Hl,_d=new ba,Su=[],bu=[],wu=new Float32Array(16),Eu=new Float32Array(9),Tu=new Float32Array(4);function fr(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Su[n];if(s===void 0&&(s=new Float32Array(n),Su[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function _t(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Xa(r,e){let t=bu[e];t===void 0&&(t=new Int32Array(e),bu[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Bf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),_t(t,e)}}function zf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),_t(t,e)}}function Hf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),_t(t,e)}}function Vf(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,i))return;Tu.set(i),r.uniformMatrix2fv(this.addr,!1,Tu),_t(t,i)}}function Gf(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,i))return;Eu.set(i),r.uniformMatrix3fv(this.addr,!1,Eu),_t(t,i)}}function Wf(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,i))return;wu.set(i),r.uniformMatrix4fv(this.addr,!1,wu),_t(t,i)}}function Xf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function jf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),_t(t,e)}}function qf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),_t(t,e)}}function Yf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),_t(t,e)}}function $f(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Zf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),_t(t,e)}}function Jf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),_t(t,e)}}function Kf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),_t(t,e)}}function Qf(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(Mu.compareFunction=515,s=Mu):s=vd,t.setTexture2D(e||s,n)}function em(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||yd,n)}function tm(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||_d,n)}function im(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||xd,n)}function nm(r,e){r.uniform1fv(this.addr,e)}function rm(r,e){let t=fr(e,this.size,2);r.uniform2fv(this.addr,t)}function sm(r,e){let t=fr(e,this.size,3);r.uniform3fv(this.addr,t)}function am(r,e){let t=fr(e,this.size,4);r.uniform4fv(this.addr,t)}function om(r,e){let t=fr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lm(r,e){let t=fr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cm(r,e){let t=fr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hm(r,e){r.uniform1iv(this.addr,e)}function um(r,e){r.uniform2iv(this.addr,e)}function dm(r,e){r.uniform3iv(this.addr,e)}function pm(r,e){r.uniform4iv(this.addr,e)}function fm(r,e){r.uniform1uiv(this.addr,e)}function mm(r,e){r.uniform2uiv(this.addr,e)}function gm(r,e){r.uniform3uiv(this.addr,e)}function vm(r,e){r.uniform4uiv(this.addr,e)}function xm(r,e,t){let i=this.cache,n=e.length,s=Xa(t,n);yt(i,s)||(r.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||vd,s[a])}function ym(r,e,t){let i=this.cache,n=e.length,s=Xa(t,n);yt(i,s)||(r.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||yd,s[a])}function _m(r,e,t){let i=this.cache,n=e.length,s=Xa(t,n);yt(i,s)||(r.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||_d,s[a])}function Mm(r,e,t){let i=this.cache,n=e.length,s=Xa(t,n);yt(i,s)||(r.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||xd,s[a])}var Wl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return Bf;case 35664:return kf;case 35665:return zf;case 35666:return Hf;case 35674:return Vf;case 35675:return Gf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return jf;case 35668:case 35672:return qf;case 35669:case 35673:return Yf;case 5125:return $f;case 36294:return Zf;case 36295:return Jf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return im}})(t.type)}},Xl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return nm;case 35664:return rm;case 35665:return sm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return fm;case 36294:return mm;case 36295:return gm;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return Mm}})(t.type)}},jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Zo=/(\w+)(\])?(\[|\.)?/g;function Au(r,e){r.seq.push(e),r.map[e.id]=e}function Sm(r,e,t){let i=r.name,n=i.length;for(Zo.lastIndex=0;;){let s=Zo.exec(i),a=Zo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){Au(t,c===void 0?new Wl(o,r,e):new Xl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new jl(o),Au(t,h)),t=h}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);Sm(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Ru(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var bm=0,Cu=new Le;function Pu(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let g=p+1;h.push(`${g===l?">":" "} ${g}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function wm(r,e){let t=(function(i){Ge._getMatrix(Cu,Ge.workingColorSpace,i);let n=`mat3( ${Cu.elements.map((s=>s.toFixed(4)))} )`;switch(Ge.getTransfer(i)){case Wa:return[n,"LinearTransferOETF"];case qe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Em(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Js=new C;function Tm(){return Ge.getLuminanceCoefficients(Js),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Js.x.toFixed(4)}, ${Js.y.toFixed(4)}, ${Js.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Or(r){return r!==""}function Iu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(r){return r.replace(Am,Cm)}var Rm=new Map;function Cm(r,e){let t=De[e];if(t===void 0){let i=Rm.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return ql(t)}var Pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(r){return r.replace(Pm,Im)}function Im(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Du(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lm(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(M){let w="SHADOWMAP_TYPE_BASIC";return M.shadowMapType===1?w="SHADOWMAP_TYPE_PCF":M.shadowMapType===2?w="SHADOWMAP_TYPE_PCF_SOFT":M.shadowMapType===3&&(w="SHADOWMAP_TYPE_VSM"),w})(t),c=(function(M){let w="ENVMAP_TYPE_CUBE";if(M.envMap)switch(M.envMapMode){case nr:case rr:w="ENVMAP_TYPE_CUBE";break;case Ga:w="ENVMAP_TYPE_CUBE_UV"}return w})(t),h=(function(M){let w="ENVMAP_MODE_REFLECTION";return M.envMap&&M.envMapMode===rr&&(w="ENVMAP_MODE_REFRACTION"),w})(t),u=(function(M){let w="ENVMAP_BLENDING_NONE";if(M.envMap)switch(M.combine){case 0:w="ENVMAP_BLENDING_MULTIPLY";break;case 1:w="ENVMAP_BLENDING_MIX";break;case 2:w="ENVMAP_BLENDING_ADD"}return w})(t),d=(function(M){let w=M.envMapCubeUVHeight;if(w===null)return null;let D=Math.log2(w)-2,O=1/w;return{texelWidth:1/(3*Math.max(Math.pow(2,D),112)),texelHeight:O,maxMip:D}})(t),p=(function(M){return[M.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",M.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)})(t),g=(function(M){let w=[];for(let D in M){let O=M[D];O!==!1&&w.push("#define "+D+" "+O)}return w.join(`
`)})(s),y=n.createProgram(),f,x,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),f.length>0&&(f+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),x.length>0&&(x+=`
`)):(f=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),x=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?De.tonemapping_pars_fragment:"",t.toneMapping!==0?Em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,wm("linearToOutputTexel",t.outputColorSpace),Tm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=ql(a),a=Iu(a,t),a=Lu(a,t),o=ql(o),o=Iu(o,t),o=Lu(o,t),a=Uu(a),o=Uu(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=m+f+a,_=m+x+o,T=Ru(n,n.VERTEX_SHADER,v),E=Ru(n,n.FRAGMENT_SHADER,_);function R(M){if(r.debug.checkShaderErrors){let w=n.getProgramInfoLog(y).trim(),D=n.getShaderInfoLog(T).trim(),O=n.getShaderInfoLog(E).trim(),X=!0,N=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,y,T,E);else{let V=Pu(n,T,"vertex"),W=Pu(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+w+`
`+V+`
`+W)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):D!==""&&O!==""||(N=!1);N&&(M.diagnostics={runnable:X,programLog:w,vertexShader:{log:D,prefix:f},fragmentShader:{log:O,prefix:x}})}n.deleteShader(T),n.deleteShader(E),b=new ir(n,y),A=(function(w,D){let O={},X=w.getProgramParameter(D,w.ACTIVE_ATTRIBUTES);for(let N=0;N<X;N++){let V=w.getActiveAttrib(D,N),W=V.name,Q=1;V.type===w.FLOAT_MAT2&&(Q=2),V.type===w.FLOAT_MAT3&&(Q=3),V.type===w.FLOAT_MAT4&&(Q=4),O[W]={type:V.type,location:w.getAttribLocation(D,W),locationSize:Q}}return O})(n,y)}let b,A;n.attachShader(y,T),n.attachShader(y,E),t.index0AttributeName!==void 0?n.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y),this.getUniforms=function(){return b===void 0&&R(this),b},this.getAttributes=function(){return A===void 0&&R(this),A};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(y,37297)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}var Um=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new $l(e),t.set(e,i)),i}},$l=class{constructor(e){this.id=Um++,this.code=e,this.usedTimes=0}};function Dm(r,e,t,i,n,s,a){let o=new $r,l=new Yl,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,x,m,v,_){let T=v.fog,E=_.geometry,R=f.isMeshStandardMaterial?v.environment:null,b=(f.isMeshStandardMaterial?t:e).get(f.envMap||R),A=b&&b.mapping===Ga?b.image.height:null,S=g[f.type];f.precision!==null&&(p=n.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let M=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,w=M!==void 0?M.length:0,D,O,X,N,V=0;if(E.morphAttributes.position!==void 0&&(V=1),E.morphAttributes.normal!==void 0&&(V=2),E.morphAttributes.color!==void 0&&(V=3),S){let Ar=fi[S];D=Ar.vertexShader,O=Ar.fragmentShader}else D=f.vertexShader,O=f.fragmentShader,l.update(f),X=l.getVertexShaderID(f),N=l.getFragmentShaderID(f);let W=r.getRenderTarget(),Q=r.state.buffers.depth.getReversed(),$=_.isInstancedMesh===!0,k=_.isBatchedMesh===!0,K=!!f.map,te=!!f.matcap,ue=!!b,pe=!!f.aoMap,U=!!f.lightMap,L=!!f.bumpMap,H=!!f.normalMap,G=!!f.displacementMap,F=!!f.emissiveMap,z=!!f.metalnessMap,P=!!f.roughnessMap,B=f.anisotropy>0,q=f.clearcoat>0,se=f.dispersion>0,j=f.iridescence>0,ne=f.sheen>0,ie=f.transmission>0,oe=B&&!!f.anisotropyMap,ge=q&&!!f.clearcoatMap,me=q&&!!f.clearcoatNormalMap,Me=q&&!!f.clearcoatRoughnessMap,Re=j&&!!f.iridescenceMap,He=j&&!!f.iridescenceThicknessMap,Oe=ne&&!!f.sheenColorMap,Se=ne&&!!f.sheenRoughnessMap,We=!!f.specularMap,Ke=!!f.specularColorMap,rt=!!f.specularIntensityMap,ye=ie&&!!f.transmissionMap,Be=ie&&!!f.thicknessMap,Ze=!!f.gradientMap,Ln=!!f.alphaMap,bs=f.alphaTest>0,Kt=!!f.alphaHash,ui=!!f.extensions,nn=0;f.toneMapped&&(W!==null&&W.isXRRenderTarget!==!0||(nn=r.toneMapping));let Y={shaderID:S,shaderType:f.type,shaderName:f.name,vertexShader:D,fragmentShader:O,defines:f.defines,customVertexShaderID:X,customFragmentShaderID:N,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:k,batchingColor:k&&_._colorsTexture!==null,instancing:$,instancingColor:$&&_.instanceColor!==null,instancingMorph:$&&_.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?r.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:pr,alphaToCoverage:!!f.alphaToCoverage,map:K,matcap:te,envMap:ue,envMapMode:ue&&b.mapping,envMapCubeUVHeight:A,aoMap:pe,lightMap:U,bumpMap:L,normalMap:H,displacementMap:d&&G,emissiveMap:F,normalMapObjectSpace:H&&f.normalMapType===1,normalMapTangentSpace:H&&f.normalMapType===0,metalnessMap:z,roughnessMap:P,anisotropy:B,anisotropyMap:oe,clearcoat:q,clearcoatMap:ge,clearcoatNormalMap:me,clearcoatRoughnessMap:Me,dispersion:se,iridescence:j,iridescenceMap:Re,iridescenceThicknessMap:He,sheen:ne,sheenColorMap:Oe,sheenRoughnessMap:Se,specularMap:We,specularColorMap:Ke,specularIntensityMap:rt,transmission:ie,transmissionMap:ye,thicknessMap:Be,gradientMap:Ze,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:Ln,alphaTest:bs,alphaHash:Kt,combine:f.combine,mapUv:K&&y(f.map.channel),aoMapUv:pe&&y(f.aoMap.channel),lightMapUv:U&&y(f.lightMap.channel),bumpMapUv:L&&y(f.bumpMap.channel),normalMapUv:H&&y(f.normalMap.channel),displacementMapUv:G&&y(f.displacementMap.channel),emissiveMapUv:F&&y(f.emissiveMap.channel),metalnessMapUv:z&&y(f.metalnessMap.channel),roughnessMapUv:P&&y(f.roughnessMap.channel),anisotropyMapUv:oe&&y(f.anisotropyMap.channel),clearcoatMapUv:ge&&y(f.clearcoatMap.channel),clearcoatNormalMapUv:me&&y(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&y(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&y(f.iridescenceMap.channel),iridescenceThicknessMapUv:He&&y(f.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&y(f.sheenColorMap.channel),sheenRoughnessMapUv:Se&&y(f.sheenRoughnessMap.channel),specularMapUv:We&&y(f.specularMap.channel),specularColorMapUv:Ke&&y(f.specularColorMap.channel),specularIntensityMapUv:rt&&y(f.specularIntensityMap.channel),transmissionMapUv:ye&&y(f.transmissionMap.channel),thicknessMapUv:Be&&y(f.thicknessMap.channel),alphaMapUv:Ln&&y(f.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(H||B),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!E.attributes.uv&&(K||Ln),fog:!!T,useFog:f.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Q,skinning:_.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:V,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&m.length>0,shadowMapType:r.shadowMap.type,toneMapping:nn,decodeVideoTexture:K&&f.map.isVideoTexture===!0&&Ge.getTransfer(f.map.colorSpace)===qe,decodeVideoTextureEmissive:F&&f.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(f.emissiveMap.colorSpace)===qe,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ui&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ui&&f.extensions.multiDraw===!0||k)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Y.vertexUv1s=c.has(1),Y.vertexUv2s=c.has(2),Y.vertexUv3s=c.has(3),c.clear(),Y},getProgramCacheKey:function(f){let x=[];if(f.shaderID?x.push(f.shaderID):(x.push(f.customVertexShaderID),x.push(f.customFragmentShaderID)),f.defines!==void 0)for(let m in f.defines)x.push(m),x.push(f.defines[m]);return f.isRawShaderMaterial===!1&&((function(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapCubeUVHeight),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.morphAttributeCount),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)})(x,f),(function(m,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),m.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),m.push(o.mask)})(x,f),x.push(r.outputColorSpace)),x.push(f.customProgramCacheKey),x.join()},getUniforms:function(f){let x=g[f.type],m;if(x){let v=fi[x];m=_f.clone(v.uniforms)}else m=f.uniforms;return m},acquireProgram:function(f,x){let m;for(let v=0,_=h.length;v<_;v++){let T=h[v];if(T.cacheKey===x){m=T,++m.usedTimes;break}}return m===void 0&&(m=new Lm(r,x,f,s),h.push(m)),m},releaseProgram:function(f){if(--f.usedTimes==0){let x=h.indexOf(f);h[x]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function Nm(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Om(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Nu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ou(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Om),i.length>1&&i.sort(o||Nu),n.length>1&&n.sort(o||Nu)}}}function Fm(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Ou,r.set(e,[n])):t>=i.length?(n=new Ou,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Bm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new be};break;case"SpotLight":t={position:new C,direction:new C,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new C,halfWidth:new C,halfHeight:new C}}return r[e.id]=t,t}}}var km=0;function zm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Hm(r){let e=new Bm,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new C);let n=new C,s=new Te,a=new Te;return{setup:function(o){let l=0,c=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let u=0,d=0,p=0,g=0,y=0,f=0,x=0,m=0,v=0,_=0,T=0;o.sort(zm);for(let R=0,b=o.length;R<b;R++){let A=o[R],S=A.color,M=A.intensity,w=A.distance,D=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)l+=S.r*M,c+=S.g*M,h+=S.b*M;else if(A.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(A.sh.coefficients[O],M);T++}else if(A.isDirectionalLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let X=A.shadow,N=t.get(A);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,i.directionalShadow[u]=N,i.directionalShadowMap[u]=D,i.directionalShadowMatrix[u]=A.shadow.matrix,f++}i.directional[u]=O,u++}else if(A.isSpotLight){let O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(S).multiplyScalar(M),O.distance=w,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,i.spot[p]=O;let X=A.shadow;if(A.map&&(i.spotLightMap[v]=A.map,v++,X.updateMatrices(A),A.castShadow&&_++),i.spotLightMatrix[p]=X.matrix,A.castShadow){let N=t.get(A);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,i.spotShadow[p]=N,i.spotShadowMap[p]=D,m++}p++}else if(A.isRectAreaLight){let O=e.get(A);O.color.copy(S).multiplyScalar(M),O.halfWidth.set(.5*A.width,0,0),O.halfHeight.set(0,.5*A.height,0),i.rectArea[g]=O,g++}else if(A.isPointLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){let X=A.shadow,N=t.get(A);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,N.shadowCameraNear=X.camera.near,N.shadowCameraFar=X.camera.far,i.pointShadow[d]=N,i.pointShadowMap[d]=D,i.pointShadowMatrix[d]=A.shadow.matrix,x++}i.point[d]=O,d++}else if(A.isHemisphereLight){let O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(M),O.groundColor.copy(A.groundColor).multiplyScalar(M),i.hemi[y]=O,y++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let E=i.hash;E.directionalLength===u&&E.pointLength===d&&E.spotLength===p&&E.rectAreaLength===g&&E.hemiLength===y&&E.numDirectionalShadows===f&&E.numPointShadows===x&&E.numSpotShadows===m&&E.numSpotMaps===v&&E.numLightProbes===T||(i.directional.length=u,i.spot.length=p,i.rectArea.length=g,i.point.length=d,i.hemi.length=y,i.directionalShadow.length=f,i.directionalShadowMap.length=f,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=m,i.spotShadowMap.length=m,i.directionalShadowMatrix.length=f,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=m+v-_,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=T,E.directionalLength=u,E.pointLength=d,E.spotLength=p,E.rectAreaLength=g,E.hemiLength=y,E.numDirectionalShadows=f,E.numPointShadows=x,E.numSpotShadows=m,E.numSpotMaps=v,E.numLightProbes=T,i.version=km++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,g=l.matrixWorldInverse;for(let y=0,f=o.length;y<f;y++){let x=o[y];if(x.isDirectionalLight){let m=i.directional[c];m.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),m.direction.sub(n),m.direction.transformDirection(g),c++}else if(x.isSpotLight){let m=i.spot[u];m.position.setFromMatrixPosition(x.matrixWorld),m.position.applyMatrix4(g),m.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),m.direction.sub(n),m.direction.transformDirection(g),u++}else if(x.isRectAreaLight){let m=i.rectArea[d];m.position.setFromMatrixPosition(x.matrixWorld),m.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),m.halfWidth.set(.5*x.width,0,0),m.halfHeight.set(0,.5*x.height,0),m.halfWidth.applyMatrix4(a),m.halfHeight.applyMatrix4(a),d++}else if(x.isPointLight){let m=i.point[h];m.position.setFromMatrixPosition(x.matrixWorld),m.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){let m=i.hemi[p];m.direction.setFromMatrixPosition(x.matrixWorld),m.direction.transformDirection(g),p++}}},state:i}}function Fu(r){let e=new Hm(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function Vm(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new Fu(r),e.set(t,[s])):i>=n.length?(s=new Fu(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var Zl=class extends Fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jl=class extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gm(r,e,t){let i=new Qi,n=new ae,s=new ae,a=new je,o=new Zl({depthPacking:3201}),l=new Jl,c={},h=t.maxTextureSize,u={[Tp]:1,[Nc]:0,[yi]:2},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new xe(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;function m(E,R){let b=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Oi(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(R,null,b,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(R,null,b,p,y,null)}function v(E,R,b,A){let S=null,M=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(M!==void 0)S=M;else if(S=b.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let w=S.uuid,D=R.uuid,O=c[w];O===void 0&&(O={},c[w]=O);let X=O[D];X===void 0&&(X=S.clone(),O[D]=X,R.addEventListener("dispose",T)),S=X}return S.visible=R.visible,S.wireframe=R.wireframe,S.side=A===3?R.shadowSide!==null?R.shadowSide:R.side:R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0&&(r.properties.get(S).light=b),S}function _(E,R,b,A,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===3)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let w=e.update(E),D=E.material;if(Array.isArray(D)){let O=w.groups;for(let X=0,N=O.length;X<N;X++){let V=O[X],W=D[V.materialIndex];if(W&&W.visible){let Q=v(E,W,A,S);E.onBeforeShadow(r,E,R,b,w,Q,V),r.renderBufferDirect(b,null,w,Q,E,V),E.onAfterShadow(r,E,R,b,w,Q,V)}}}else if(D.visible){let O=v(E,D,A,S);E.onBeforeShadow(r,E,R,b,w,O,null),r.renderBufferDirect(b,null,w,O,E,null),E.onAfterShadow(r,E,R,b,w,O,null)}}let M=E.children;for(let w=0,D=M.length;w<D;w++)_(M[w],R,b,A,S)}function T(E){E.target.removeEventListener("dispose",T);for(let R in c){let b=c[R],A=E.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}this.render=function(E,R,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let A=r.getRenderTarget(),S=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),w=r.state;w.setBlending(0),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let D=x!==3&&this.type===3,O=x===3&&this.type!==3;for(let X=0,N=E.length;X<N;X++){let V=E[X],W=V.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let Q=W.getFrameExtents();if(n.multiply(Q),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Q.x),n.x=s.x*Q.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Q.y),n.y=s.y*Q.y,W.mapSize.y=s.y)),W.map===null||D===!0||O===!0){let k=this.type!==3?{minFilter:si,magFilter:si}:{};W.map!==null&&W.map.dispose(),W.map=new Oi(n.x,n.y,k),W.map.texture.name=V.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();let $=W.getViewportCount();for(let k=0;k<$;k++){let K=W.getViewport(k);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),w.viewport(a),W.updateMatrices(V,k),i=W.getFrustum(),_(R,b,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===3&&m(W,b),W.needsUpdate=!1}x=this.type,f.needsUpdate=!1,r.setRenderTarget(A,S,M)}}var Wm={[Vp]:1,[Wp]:6,[jp]:7,[Xp]:5,[Gp]:0,[Yp]:2,[$p]:4,[qp]:3};function Xm(r,e){let t=new function(){let P=!1,B=new je,q=null,se=new je(0,0,0,0);return{setMask:function(j){q===j||P||(r.colorMask(j,j,j,j),q=j)},setLocked:function(j){P=j},setClear:function(j,ne,ie,oe,ge){ge===!0&&(j*=oe,ne*=oe,ie*=oe),B.set(j,ne,ie,oe),se.equals(B)===!1&&(r.clearColor(j,ne,ie,oe),se.copy(B))},reset:function(){P=!1,q=null,se.set(-1,0,0,0)}}},i=new function(){let P=!1,B=!1,q=null,se=null,j=null;return{setReversed:function(ne){if(B!==ne){let ie=e.get("EXT_clip_control");B?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);let oe=j;j=null,this.setClear(oe)}B=ne},getReversed:function(){return B},setTest:function(ne){ne?ue(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(ne){q===ne||P||(r.depthMask(ne),q=ne)},setFunc:function(ne){if(B&&(ne=Wm[ne]),se!==ne){switch(ne){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}se=ne}},setLocked:function(ne){P=ne},setClear:function(ne){j!==ne&&(B&&(ne=1-ne),r.clearDepth(ne),j=ne)},reset:function(){P=!1,q=null,se=null,j=null,B=!1}}},n=new function(){let P=!1,B=null,q=null,se=null,j=null,ne=null,ie=null,oe=null,ge=null;return{setTest:function(me){P||(me?ue(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(me){B===me||P||(r.stencilMask(me),B=me)},setFunc:function(me,Me,Re){q===me&&se===Me&&j===Re||(r.stencilFunc(me,Me,Re),q=me,se=Me,j=Re)},setOp:function(me,Me,Re){ne===me&&ie===Me&&oe===Re||(r.stencilOp(me,Me,Re),ne=me,ie=Me,oe=Re)},setLocked:function(me){P=me},setClear:function(me){ge!==me&&(r.clearStencil(me),ge=me)},reset:function(){P=!1,B=null,q=null,se=null,j=null,ne=null,ie=null,oe=null,ge=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,g=null,y=null,f=null,x=null,m=null,v=null,_=new be(0,0,0),T=0,E=!1,R=null,b=null,A=null,S=null,M=null,w=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,O=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(X)[1]),D=O>=1):X.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),D=O>=2);let N=null,V={},W=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),$=new je().fromArray(W),k=new je().fromArray(Q);function K(P,B,q,se){let j=new Uint8Array(4),ne=r.createTexture();r.bindTexture(P,ne),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ie=0;ie<q;ie++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(B,0,r.RGBA,1,1,se,0,r.RGBA,r.UNSIGNED_BYTE,j):r.texImage2D(B+ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,j);return ne}let te={};function ue(P){o[P]!==!0&&(r.enable(P),o[P]=!0)}function pe(P){o[P]!==!1&&(r.disable(P),o[P]=!1)}te[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),ue(r.DEPTH_TEST),i.setFunc(3),G(!1),F(1),ue(r.CULL_FACE),H(0);let U={[mn]:r.FUNC_ADD,[Ap]:r.FUNC_SUBTRACT,[Rp]:r.FUNC_REVERSE_SUBTRACT};U[103]=r.MIN,U[104]=r.MAX;let L={[Cp]:r.ZERO,[Pp]:r.ONE,[Ip]:r.SRC_COLOR,[sl]:r.SRC_ALPHA,[Fp]:r.SRC_ALPHA_SATURATE,[Np]:r.DST_COLOR,[Up]:r.DST_ALPHA,[Lp]:r.ONE_MINUS_SRC_COLOR,[al]:r.ONE_MINUS_SRC_ALPHA,[Op]:r.ONE_MINUS_DST_COLOR,[Dp]:r.ONE_MINUS_DST_ALPHA,[Bp]:r.CONSTANT_COLOR,[kp]:r.ONE_MINUS_CONSTANT_COLOR,[zp]:r.CONSTANT_ALPHA,[Hp]:r.ONE_MINUS_CONSTANT_ALPHA};function H(P,B,q,se,j,ne,ie,oe,ge,me){if(P!==0){if(d===!1&&(ue(r.BLEND),d=!0),P===5)j=j||B,ne=ne||q,ie=ie||se,B===g&&j===x||(r.blendEquationSeparate(U[B],U[j]),g=B,x=j),q===y&&se===f&&ne===m&&ie===v||(r.blendFuncSeparate(L[q],L[se],L[ne],L[ie]),y=q,f=se,m=ne,v=ie),oe.equals(_)!==!1&&ge===T||(r.blendColor(oe.r,oe.g,oe.b,ge),_.copy(oe),T=ge),p=P,E=!1;else if(P!==p||me!==E){if(g===mn&&x===mn||(r.blendEquation(r.FUNC_ADD),g=mn,x=mn),me)switch(P){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}else switch(P){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}y=null,f=null,m=null,v=null,_.set(0,0,0),T=0,p=P,E=me}}else d===!0&&(pe(r.BLEND),d=!1)}function G(P){R!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),R=P)}function F(P){P!==0?(ue(r.CULL_FACE),P!==b&&(P===1?r.cullFace(r.BACK):P===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),b=P}function z(P,B,q){P?(ue(r.POLYGON_OFFSET_FILL),S===B&&M===q||(r.polygonOffset(B,q),S=B,M=q)):pe(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:ue,disable:pe,bindFramebuffer:function(P,B){return l[P]!==B&&(r.bindFramebuffer(P,B),l[P]=B,P===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=B),P===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=B),!0)},drawBuffers:function(P,B){let q=h,se=!1;if(P){q=c.get(B),q===void 0&&(q=[],c.set(B,q));let j=P.textures;if(q.length!==j.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,ie=j.length;ne<ie;ne++)q[ne]=r.COLOR_ATTACHMENT0+ne;q.length=j.length,se=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,se=!0);se&&r.drawBuffers(q)},useProgram:function(P){return u!==P&&(r.useProgram(P),u=P,!0)},setBlending:H,setMaterial:function(P,B){P.side===2?pe(r.CULL_FACE):ue(r.CULL_FACE);let q=P.side===1;B&&(q=!q),G(q),P.blending===1&&P.transparent===!1?H(0):H(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),i.setFunc(P.depthFunc),i.setTest(P.depthTest),i.setMask(P.depthWrite),t.setMask(P.colorWrite);let se=P.stencilWrite;n.setTest(se),se&&(n.setMask(P.stencilWriteMask),n.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),n.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),z(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:G,setCullFace:F,setLineWidth:function(P){P!==A&&(D&&r.lineWidth(P),A=P)},setPolygonOffset:z,setScissorTest:function(P){P?ue(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)},activeTexture:function(P){P===void 0&&(P=r.TEXTURE0+w-1),N!==P&&(r.activeTexture(P),N=P)},bindTexture:function(P,B,q){q===void 0&&(q=N===null?r.TEXTURE0+w-1:N);let se=V[q];se===void 0&&(se={type:void 0,texture:void 0},V[q]=se),se.type===P&&se.texture===B||(N!==q&&(r.activeTexture(q),N=q),r.bindTexture(P,B||te[P]),se.type=P,se.texture=B)},unbindTexture:function(){let P=V[N];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},updateUBOMapping:function(P,B){let q=a.get(B);q===void 0&&(q=new WeakMap,a.set(B,q));let se=q.get(P);se===void 0&&(se=r.getUniformBlockIndex(B,P.name),q.set(P,se))},uniformBlockBinding:function(P,B){let q=a.get(B).get(P);s.get(B)!==q&&(r.uniformBlockBinding(B,q,P.__bindingPointIndex),s.set(B,q))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},scissor:function(P){$.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),$.copy(P))},viewport:function(P){k.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),k.copy(P))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},N=null,V={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,g=null,y=null,f=null,x=null,m=null,v=null,_=new be(0,0,0),T=0,E=!1,R=null,b=null,A=null,S=null,M=null,$.set(0,0,r.canvas.width,r.canvas.height),k.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function Bu(r,e,t,i){let n=(function(s){switch(s){case Ji:case nd:return{byteLength:1,components:1};case qr:case rd:case as:return{byteLength:2,components:1};case Fc:case Bc:return{byteLength:2,components:4};case xn:case Oc:case Ui:return{byteLength:4,components:1};case sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case ad:case ld:return r*e;case cd:return r*e*2;case hd:case kc:return r*e/n.components*n.byteLength;case ud:case zc:return r*e*2/n.components*n.byteLength;case od:return r*e*3/n.components*n.byteLength;case gi:case Hc:return r*e*4/n.components*n.byteLength;case ha:case ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ul:case pl:return Math.max(r,16)*Math.max(e,8)/4;case hl:case dl:return Math.max(r,8)*Math.max(e,8)/2;case fl:case ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gl:case vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case fa:case Il:case Ll:return Math.ceil(r/4)*Math.ceil(e/4)*16;case dd:case Ul:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Dl:case Nl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jm(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,L){return p?new OffscreenCanvas(U,L):xa("canvas")}function y(U,L,H){let G=1,F=pe(U);if((F.width>H||F.height>H)&&(G=H/Math.max(F.width,F.height)),G<1){if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let z=Math.floor(G*F.width),P=Math.floor(G*F.height);u===void 0&&(u=g(z,P));let B=L?g(z,P):u;return B.width=z,B.height=P,B.getContext("2d").drawImage(U,0,0,z,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+z+"x"+P+")."),B}return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),U}return U}function f(U){return U.generateMipmaps}function x(U){r.generateMipmap(U)}function m(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(U,L,H,G,F=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let z=L;if(L===r.RED&&(H===r.FLOAT&&(z=r.R32F),H===r.HALF_FLOAT&&(z=r.R16F),H===r.UNSIGNED_BYTE&&(z=r.R8)),L===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(z=r.R8UI),H===r.UNSIGNED_SHORT&&(z=r.R16UI),H===r.UNSIGNED_INT&&(z=r.R32UI),H===r.BYTE&&(z=r.R8I),H===r.SHORT&&(z=r.R16I),H===r.INT&&(z=r.R32I)),L===r.RG&&(H===r.FLOAT&&(z=r.RG32F),H===r.HALF_FLOAT&&(z=r.RG16F),H===r.UNSIGNED_BYTE&&(z=r.RG8)),L===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(z=r.RG8UI),H===r.UNSIGNED_SHORT&&(z=r.RG16UI),H===r.UNSIGNED_INT&&(z=r.RG32UI),H===r.BYTE&&(z=r.RG8I),H===r.SHORT&&(z=r.RG16I),H===r.INT&&(z=r.RG32I)),L===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(z=r.RGB8UI),H===r.UNSIGNED_SHORT&&(z=r.RGB16UI),H===r.UNSIGNED_INT&&(z=r.RGB32UI),H===r.BYTE&&(z=r.RGB8I),H===r.SHORT&&(z=r.RGB16I),H===r.INT&&(z=r.RGB32I)),L===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(z=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(z=r.RGBA16UI),H===r.UNSIGNED_INT&&(z=r.RGBA32UI),H===r.BYTE&&(z=r.RGBA8I),H===r.SHORT&&(z=r.RGBA16I),H===r.INT&&(z=r.RGBA32I)),L===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(z=r.RGB9_E5),L===r.RGBA){let P=F?Wa:Ge.getTransfer(G);H===r.FLOAT&&(z=r.RGBA32F),H===r.HALF_FLOAT&&(z=r.RGBA16F),H===r.UNSIGNED_BYTE&&(z=P===qe?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(z=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(z=r.RGB5_A1)}return z!==r.R16F&&z!==r.R32F&&z!==r.RG16F&&z!==r.RG32F&&z!==r.RGBA16F&&z!==r.RGBA32F||e.get("EXT_color_buffer_float"),z}function _(U,L){let H;return U?L===null||L===xn||L===sr?H=r.DEPTH24_STENCIL8:L===Ui?H=r.DEPTH32F_STENCIL8:L===qr&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===xn||L===sr?H=r.DEPTH_COMPONENT24:L===Ui?H=r.DEPTH_COMPONENT32F:L===qr&&(H=r.DEPTH_COMPONENT16),H}function T(U,L){return f(U)===!0||U.isFramebufferTexture&&U.minFilter!==si&&U.minFilter!==Li?Math.log2(Math.max(L.width,L.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?L.mipmaps.length:1}function E(U){let L=U.target;L.removeEventListener("dispose",E),(function(H){let G=i.get(H);if(G.__webglInit===void 0)return;let F=H.source,z=d.get(F);if(z){let P=z[G.__cacheKey];P.usedTimes--,P.usedTimes===0&&b(H),Object.keys(z).length===0&&d.delete(F)}i.remove(H)})(L),L.isVideoTexture&&h.delete(L)}function R(U){let L=U.target;L.removeEventListener("dispose",R),(function(H){let G=i.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),i.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(G.__webglFramebuffer[z]))for(let P=0;P<G.__webglFramebuffer[z].length;P++)r.deleteFramebuffer(G.__webglFramebuffer[z][P]);else r.deleteFramebuffer(G.__webglFramebuffer[z]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[z])}else{if(Array.isArray(G.__webglFramebuffer))for(let z=0;z<G.__webglFramebuffer.length;z++)r.deleteFramebuffer(G.__webglFramebuffer[z]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let z=0;z<G.__webglColorRenderbuffer.length;z++)G.__webglColorRenderbuffer[z]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[z]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}let F=H.textures;for(let z=0,P=F.length;z<P;z++){let B=i.get(F[z]);B.__webglTexture&&(r.deleteTexture(B.__webglTexture),a.memory.textures--),i.remove(F[z])}i.remove(H)})(L)}function b(U){let L=i.get(U);r.deleteTexture(L.__webglTexture);let H=U.source;delete d.get(H)[L.__cacheKey],a.memory.textures--}let A=0;function S(U,L){let H=i.get(U);if(U.isVideoTexture&&(function(G){let F=a.render.frame;h.get(G)!==F&&(h.set(G,F),G.update())})(U),U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){let G=U.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(G.complete!==!1)return void N(H,U,L);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+L)}let M={[Xr]:r.REPEAT,[jr]:r.CLAMP_TO_EDGE,[cl]:r.MIRRORED_REPEAT},w={[si]:r.NEAREST,[Zp]:r.NEAREST_MIPMAP_NEAREST,[Is]:r.NEAREST_MIPMAP_LINEAR,[Li]:r.LINEAR,[So]:r.LINEAR_MIPMAP_NEAREST,[Qn]:r.LINEAR_MIPMAP_LINEAR},D={[Jp]:r.NEVER,[sf]:r.ALWAYS,[Kp]:r.LESS,[ef]:r.LEQUAL,[Qp]:r.EQUAL,[rf]:r.GEQUAL,[tf]:r.GREATER,[nf]:r.NOTEQUAL};function O(U,L){if(L.type!==Ui||e.has("OES_texture_float_linear")!==!1||L.magFilter!==Li&&L.magFilter!==So&&L.magFilter!==Is&&L.magFilter!==Qn&&L.minFilter!==Li&&L.minFilter!==So&&L.minFilter!==Is&&L.minFilter!==Qn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,M[L.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,M[L.wrapT]),U!==r.TEXTURE_3D&&U!==r.TEXTURE_2D_ARRAY||r.texParameteri(U,r.TEXTURE_WRAP_R,M[L.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,w[L.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,w[L.minFilter]),L.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,D[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===si||L.minFilter!==Is&&L.minFilter!==Qn||L.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||i.get(L).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,n.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy}}}function X(U,L){let H=!1;U.__webglInit===void 0&&(U.__webglInit=!0,L.addEventListener("dispose",E));let G=L.source,F=d.get(G);F===void 0&&(F={},d.set(G,F));let z=(function(P){let B=[];return B.push(P.wrapS),B.push(P.wrapT),B.push(P.wrapR||0),B.push(P.magFilter),B.push(P.minFilter),B.push(P.anisotropy),B.push(P.internalFormat),B.push(P.format),B.push(P.type),B.push(P.generateMipmaps),B.push(P.premultiplyAlpha),B.push(P.flipY),B.push(P.unpackAlignment),B.push(P.colorSpace),B.join()})(L);if(z!==U.__cacheKey){F[z]===void 0&&(F[z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),F[z].usedTimes++;let P=F[U.__cacheKey];P!==void 0&&(F[U.__cacheKey].usedTimes--,P.usedTimes===0&&b(L)),U.__cacheKey=z,U.__webglTexture=F[z].texture}return H}function N(U,L,H){let G=r.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),L.isData3DTexture&&(G=r.TEXTURE_3D);let F=X(U,L),z=L.source;t.bindTexture(G,U.__webglTexture,r.TEXTURE0+H);let P=i.get(z);if(z.version!==P.__version||F===!0){t.activeTexture(r.TEXTURE0+H);let B=Ge.getPrimaries(Ge.workingColorSpace),q=L.colorSpace===Kn?null:Ge.getPrimaries(L.colorSpace),se=L.colorSpace===Kn||B===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let j=y(L.image,!1,n.maxTextureSize);j=ue(L,j);let ne=s.convert(L.format,L.colorSpace),ie=s.convert(L.type),oe,ge=v(L.internalFormat,ne,ie,L.colorSpace,L.isVideoTexture);O(G,L);let me=L.mipmaps,Me=L.isVideoTexture!==!0,Re=P.__version===void 0||F===!0,He=z.dataReady,Oe=T(L,j);if(L.isDepthTexture)ge=_(L.format===ar,L.type),Re&&(Me?t.texStorage2D(r.TEXTURE_2D,1,ge,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,ge,j.width,j.height,0,ne,ie,null));else if(L.isDataTexture)if(me.length>0){Me&&Re&&t.texStorage2D(r.TEXTURE_2D,Oe,ge,me[0].width,me[0].height);for(let Se=0,We=me.length;Se<We;Se++)oe=me[Se],Me?He&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,oe.width,oe.height,ne,ie,oe.data):t.texImage2D(r.TEXTURE_2D,Se,ge,oe.width,oe.height,0,ne,ie,oe.data);L.generateMipmaps=!1}else Me?(Re&&t.texStorage2D(r.TEXTURE_2D,Oe,ge,j.width,j.height),He&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,j.width,j.height,ne,ie,j.data)):t.texImage2D(r.TEXTURE_2D,0,ge,j.width,j.height,0,ne,ie,j.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Me&&Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,ge,me[0].width,me[0].height,j.depth);for(let Se=0,We=me.length;Se<We;Se++)if(oe=me[Se],L.format!==gi)if(ne!==null)if(Me){if(He)if(L.layerUpdates.size>0){let Ke=Bu(oe.width,oe.height,L.format,L.type);for(let rt of L.layerUpdates){let ye=oe.data.subarray(rt*Ke/oe.data.BYTES_PER_ELEMENT,(rt+1)*Ke/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,rt,oe.width,oe.height,1,ne,ye)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,oe.width,oe.height,j.depth,ne,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,ge,oe.width,oe.height,j.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?He&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,oe.width,oe.height,j.depth,ne,ie,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Se,ge,oe.width,oe.height,j.depth,0,ne,ie,oe.data)}else{Me&&Re&&t.texStorage2D(r.TEXTURE_2D,Oe,ge,me[0].width,me[0].height);for(let Se=0,We=me.length;Se<We;Se++)oe=me[Se],L.format!==gi?ne!==null?Me?He&&t.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,oe.width,oe.height,ne,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,Se,ge,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?He&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,oe.width,oe.height,ne,ie,oe.data):t.texImage2D(r.TEXTURE_2D,Se,ge,oe.width,oe.height,0,ne,ie,oe.data)}else if(L.isDataArrayTexture)if(Me){if(Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,ge,j.width,j.height,j.depth),He)if(L.layerUpdates.size>0){let Se=Bu(j.width,j.height,L.format,L.type);for(let We of L.layerUpdates){let Ke=j.data.subarray(We*Se/j.data.BYTES_PER_ELEMENT,(We+1)*Se/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,We,j.width,j.height,1,ne,ie,Ke)}L.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ne,ie,j.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,j.width,j.height,j.depth,0,ne,ie,j.data);else if(L.isData3DTexture)Me?(Re&&t.texStorage3D(r.TEXTURE_3D,Oe,ge,j.width,j.height,j.depth),He&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ne,ie,j.data)):t.texImage3D(r.TEXTURE_3D,0,ge,j.width,j.height,j.depth,0,ne,ie,j.data);else if(L.isFramebufferTexture){if(Re)if(Me)t.texStorage2D(r.TEXTURE_2D,Oe,ge,j.width,j.height);else{let Se=j.width,We=j.height;for(let Ke=0;Ke<Oe;Ke++)t.texImage2D(r.TEXTURE_2D,Ke,ge,Se,We,0,ne,ie,null),Se>>=1,We>>=1}}else if(me.length>0){if(Me&&Re){let Se=pe(me[0]);t.texStorage2D(r.TEXTURE_2D,Oe,ge,Se.width,Se.height)}for(let Se=0,We=me.length;Se<We;Se++)oe=me[Se],Me?He&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ne,ie,oe):t.texImage2D(r.TEXTURE_2D,Se,ge,ne,ie,oe);L.generateMipmaps=!1}else if(Me){if(Re){let Se=pe(j);t.texStorage2D(r.TEXTURE_2D,Oe,ge,Se.width,Se.height)}He&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne,ie,j)}else t.texImage2D(r.TEXTURE_2D,0,ge,ne,ie,j);f(L)&&x(G),P.__version=z.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function V(U,L,H,G,F,z){let P=s.convert(H.format,H.colorSpace),B=s.convert(H.type),q=v(H.internalFormat,P,B,H.colorSpace),se=i.get(L),j=i.get(H);if(j.__renderTarget=L,!se.__hasExternalTextures){let ne=Math.max(1,L.width>>z),ie=Math.max(1,L.height>>z);F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?t.texImage3D(F,z,q,ne,ie,L.depth,0,P,B,null):t.texImage2D(F,z,q,ne,ie,0,P,B,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),te(L)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,F,j.__webglTexture,0,K(L)):(F===r.TEXTURE_2D||F>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,F,j.__webglTexture,z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(U,L,H){if(r.bindRenderbuffer(r.RENDERBUFFER,U),L.depthBuffer){let G=L.depthTexture,F=G&&G.isDepthTexture?G.type:null,z=_(L.stencilBuffer,F),P=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,B=K(L);te(L)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B,z,L.width,L.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,B,z,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,z,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,P,r.RENDERBUFFER,U)}else{let G=L.textures;for(let F=0;F<G.length;F++){let z=G[F],P=s.convert(z.format,z.colorSpace),B=s.convert(z.type),q=v(z.internalFormat,P,B,z.colorSpace),se=K(L);H&&te(L)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,q,L.width,L.height):te(L)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,q,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,q,L.width,L.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Q(U){let L=i.get(U),H=U.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==U.depthTexture){let G=U.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),G){let F=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,G.removeEventListener("dispose",F)};G.addEventListener("dispose",F),L.__depthDisposeCallback=F}L.__boundDepthTexture=G}if(U.depthTexture&&!L.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");(function(G,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,G),!F.depthTexture||!F.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=i.get(F.depthTexture);z.__renderTarget=F,z.__webglTexture&&F.depthTexture.image.width===F.width&&F.depthTexture.image.height===F.height||(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),S(F.depthTexture,0);let P=z.__webglTexture,B=K(F);if(F.depthTexture.format===Yr)te(F)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,P,0,B):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,P,0);else{if(F.depthTexture.format!==ar)throw new Error("Unknown depthTexture format");te(F)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,P,0,B):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,P,0)}})(L.__webglFramebuffer,U)}else if(H){L.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer[G]),L.__webglDepthbuffer[G]===void 0)L.__webglDepthbuffer[G]=r.createRenderbuffer(),W(L.__webglDepthbuffer[G],U,!1);else{let F=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,z=L.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,z),r.framebufferRenderbuffer(r.FRAMEBUFFER,F,r.RENDERBUFFER,z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=r.createRenderbuffer(),W(L.__webglDepthbuffer,U,!1);else{let G=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=L.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,F),r.framebufferRenderbuffer(r.FRAMEBUFFER,G,r.RENDERBUFFER,F)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let $=[],k=[];function K(U){return Math.min(n.maxSamples,U.samples)}function te(U){let L=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function ue(U,L){let H=U.colorSpace,G=U.format,F=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||H!==pr&&H!==Kn&&(Ge.getTransfer(H)===qe?G===gi&&F===Ji||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),L}function pe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=function(){let U=A;return U>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+n.maxTextures),A+=1,U},this.resetTextureUnits=function(){A=0},this.setTexture2D=S,this.setTexture2DArray=function(U,L){let H=i.get(U);U.version>0&&H.__version!==U.version?N(H,U,L):t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+L)},this.setTexture3D=function(U,L){let H=i.get(U);U.version>0&&H.__version!==U.version?N(H,U,L):t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+L)},this.setTextureCube=function(U,L){let H=i.get(U);U.version>0&&H.__version!==U.version?(function(G,F,z){if(F.image.length!==6)return;let P=X(G,F),B=F.source;t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+z);let q=i.get(B);if(B.version!==q.__version||P===!0){t.activeTexture(r.TEXTURE0+z);let se=Ge.getPrimaries(Ge.workingColorSpace),j=F.colorSpace===Kn?null:Ge.getPrimaries(F.colorSpace),ne=F.colorSpace===Kn||se===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,F.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,F.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ie=F.isCompressedTexture||F.image[0].isCompressedTexture,oe=F.image[0]&&F.image[0].isDataTexture,ge=[];for(let ye=0;ye<6;ye++)ge[ye]=ie||oe?oe?F.image[ye].image:F.image[ye]:y(F.image[ye],!0,n.maxCubemapSize),ge[ye]=ue(F,ge[ye]);let me=ge[0],Me=s.convert(F.format,F.colorSpace),Re=s.convert(F.type),He=v(F.internalFormat,Me,Re,F.colorSpace),Oe=F.isVideoTexture!==!0,Se=q.__version===void 0||P===!0,We=B.dataReady,Ke,rt=T(F,me);if(O(r.TEXTURE_CUBE_MAP,F),ie){Oe&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,rt,He,me.width,me.height);for(let ye=0;ye<6;ye++){Ke=ge[ye].mipmaps;for(let Be=0;Be<Ke.length;Be++){let Ze=Ke[Be];F.format!==gi?Me!==null?Oe?We&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,0,0,Ze.width,Ze.height,Me,Ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,He,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,0,0,Ze.width,Ze.height,Me,Re,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,He,Ze.width,Ze.height,0,Me,Re,Ze.data)}}}else{if(Ke=F.mipmaps,Oe&&Se){Ke.length>0&&rt++;let ye=pe(ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,rt,He,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(oe){Oe?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ge[ye].width,ge[ye].height,Me,Re,ge[ye].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,He,ge[ye].width,ge[ye].height,0,Me,Re,ge[ye].data);for(let Be=0;Be<Ke.length;Be++){let Ze=Ke[Be].image[ye].image;Oe?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,0,0,Ze.width,Ze.height,Me,Re,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,He,Ze.width,Ze.height,0,Me,Re,Ze.data)}}else{Oe?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Me,Re,ge[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,He,Me,Re,ge[ye]);for(let Be=0;Be<Ke.length;Be++){let Ze=Ke[Be];Oe?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,0,0,Me,Re,Ze.image[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,He,Me,Re,Ze.image[ye])}}}f(F)&&x(r.TEXTURE_CUBE_MAP),q.__version=B.version,F.onUpdate&&F.onUpdate(F)}G.__version=F.version})(H,U,L):t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+L)},this.rebindTextures=function(U,L,H){let G=i.get(U);L!==void 0&&V(G.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Q(U)},this.setupRenderTarget=function(U){let L=U.texture,H=i.get(U),G=i.get(L);U.addEventListener("dispose",R);let F=U.textures,z=U.isWebGLCubeRenderTarget===!0,P=F.length>1;if(P||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=L.version,a.memory.textures++),z){H.__webglFramebuffer=[];for(let B=0;B<6;B++)if(L.mipmaps&&L.mipmaps.length>0){H.__webglFramebuffer[B]=[];for(let q=0;q<L.mipmaps.length;q++)H.__webglFramebuffer[B][q]=r.createFramebuffer()}else H.__webglFramebuffer[B]=r.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){H.__webglFramebuffer=[];for(let B=0;B<L.mipmaps.length;B++)H.__webglFramebuffer[B]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(P)for(let B=0,q=F.length;B<q;B++){let se=i.get(F[B]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),a.memory.textures++)}if(U.samples>0&&te(U)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let B=0;B<F.length;B++){let q=F[B];H.__webglColorRenderbuffer[B]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[B]);let se=s.convert(q.format,q.colorSpace),j=s.convert(q.type),ne=v(q.internalFormat,se,j,q.colorSpace,U.isXRRenderTarget===!0),ie=K(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,ne,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,H.__webglColorRenderbuffer[B])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),W(H.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(z){t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),O(r.TEXTURE_CUBE_MAP,L);for(let B=0;B<6;B++)if(L.mipmaps&&L.mipmaps.length>0)for(let q=0;q<L.mipmaps.length;q++)V(H.__webglFramebuffer[B][q],U,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+B,q);else V(H.__webglFramebuffer[B],U,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);f(L)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){for(let B=0,q=F.length;B<q;B++){let se=F[B],j=i.get(se);t.bindTexture(r.TEXTURE_2D,j.__webglTexture),O(r.TEXTURE_2D,se),V(H.__webglFramebuffer,U,se,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,0),f(se)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let B=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(B=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(B,G.__webglTexture),O(B,L),L.mipmaps&&L.mipmaps.length>0)for(let q=0;q<L.mipmaps.length;q++)V(H.__webglFramebuffer[q],U,L,r.COLOR_ATTACHMENT0,B,q);else V(H.__webglFramebuffer,U,L,r.COLOR_ATTACHMENT0,B,0);f(L)&&x(B),t.unbindTexture()}U.depthBuffer&&Q(U)},this.updateRenderTargetMipmap=function(U){let L=U.textures;for(let H=0,G=L.length;H<G;H++){let F=L[H];if(f(F)){let z=m(U),P=i.get(F).__webglTexture;t.bindTexture(z,P),x(z),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(U){if(U.samples>0){if(te(U)===!1){let L=U.textures,H=U.width,G=U.height,F=r.COLOR_BUFFER_BIT,z=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,P=i.get(U),B=L.length>1;if(B)for(let q=0;q<L.length;q++)t.bindFramebuffer(r.FRAMEBUFFER,P.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,P.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let q=0;q<L.length;q++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(F|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(F|=r.STENCIL_BUFFER_BIT)),B){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,P.__webglColorRenderbuffer[q]);let se=i.get(L[q]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,H,G,0,0,H,G,F,r.NEAREST),l===!0&&($.length=0,k.length=0,$.push(r.COLOR_ATTACHMENT0+q),U.depthBuffer&&U.resolveDepthBuffer===!1&&($.push(z),k.push(z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),B)for(let q=0;q<L.length;q++){t.bindFramebuffer(r.FRAMEBUFFER,P.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,P.__webglColorRenderbuffer[q]);let se=i.get(L[q]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,P.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let L=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[L])}}},this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=V,this.useMultisampledRTT=te}function qm(r,e){return{convert:function(t,i=""){let n,s=Ge.getTransfer(i);if(t===Ji)return r.UNSIGNED_BYTE;if(t===Fc)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Bc)return r.UNSIGNED_SHORT_5_5_5_1;if(t===sd)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===nd)return r.BYTE;if(t===rd)return r.SHORT;if(t===qr)return r.UNSIGNED_SHORT;if(t===Oc)return r.INT;if(t===xn)return r.UNSIGNED_INT;if(t===Ui)return r.FLOAT;if(t===as)return r.HALF_FLOAT;if(t===ad)return r.ALPHA;if(t===od)return r.RGB;if(t===gi)return r.RGBA;if(t===ld)return r.LUMINANCE;if(t===cd)return r.LUMINANCE_ALPHA;if(t===Yr)return r.DEPTH_COMPONENT;if(t===ar)return r.DEPTH_STENCIL;if(t===hd)return r.RED;if(t===kc)return r.RED_INTEGER;if(t===ud)return r.RG;if(t===zc)return r.RG_INTEGER;if(t===Hc)return r.RGBA_INTEGER;if(t===ha||t===ua||t===da||t===pa)if(s===qe){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===ha)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===ua)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===da)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===pa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===ha)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ua)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===da)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===pa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===hl||t===ul||t===dl||t===pl){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===hl)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===ul)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===dl)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===pl)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===fl||t===ml||t===gl){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===fl||t===ml)return s===qe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===gl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===vl||t===xl||t===yl||t===_l||t===Ml||t===Sl||t===bl||t===wl||t===El||t===Tl||t===Al||t===Rl||t===Cl||t===Pl){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===vl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===xl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===yl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===_l)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Ml)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Sl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===bl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===wl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===El)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Tl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Al)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Rl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Cl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Pl)return s===qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===fa||t===Il||t===Ll){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===fa)return s===qe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Il)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Ll)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===dd||t===Ul||t===Dl||t===Nl){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===fa)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Ul)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Dl)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Nl)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===sr?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Kl=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ym={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let f=t.getJointPose(y,i),x=this._getHandJoint(c,y);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=f.radius),x.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new kt;e.properties.get(n).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new qt({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new ht(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ec=class extends Ki{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new Ql,f=t.getContextAttributes(),x=null,m=null,v=[],_=[],T=new ae,E=null,R=new Pt;R.viewport=new je;let b=new Pt;b.viewport=new je;let A=[R,b],S=new Kl,M=null,w=null;function D(k){let K=_.indexOf(k.inputSource);if(K===-1)return;let te=v[K];te!==void 0&&(te.update(k.inputSource,k.frame,c||a),te.dispatchEvent({type:k.type,data:k.inputSource}))}function O(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",X);for(let k=0;k<v.length;k++){let K=_[k];K!==null&&(_[k]=null,v[k].disconnect(K))}M=null,w=null,y.reset(),e.setRenderTarget(x),p=null,d=null,u=null,n=null,m=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}function X(k){for(let K=0;K<k.removed.length;K++){let te=k.removed[K],ue=_.indexOf(te);ue>=0&&(_[ue]=null,v[ue].disconnect(te))}for(let K=0;K<k.added.length;K++){let te=k.added[K],ue=_.indexOf(te);if(ue===-1){for(let U=0;U<v.length;U++){if(U>=_.length){_.push(te),ue=U;break}if(_[U]===null){_[U]=te,ue=U;break}}if(ue===-1)break}let pe=v[ue];pe&&pe.connect(te)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=v[k];return K===void 0&&(K=new Vr,v[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=v[k];return K===void 0&&(K=new Vr,v[k]=K),K.getGripSpace()},this.getHand=function(k){let K=v[k];return K===void 0&&(K=new Vr,v[k]=K),K.getHandSpace()},this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(k){if(n=k,n!==null){if(x=e.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",O),n.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),n.renderState.layers===void 0){let K={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,K),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new Oi(p.framebufferWidth,p.framebufferHeight,{format:gi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let K=null,te=null,ue=null;f.depth&&(ue=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=f.stencil?ar:Yr,te=f.stencil?sr:xn);let pe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(pe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Oi(d.textureWidth,d.textureHeight,{format:gi,type:Ji,depthTexture:new Ea(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),$.setContext(n),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let N=new C,V=new C;function W(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(n===null)return;let K=k.near,te=k.far;y.texture!==null&&(y.depthNear>0&&(K=y.depthNear),y.depthFar>0&&(te=y.depthFar)),S.near=b.near=R.near=K,S.far=b.far=R.far=te,M===S.near&&w===S.far||(n.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,w=S.far),R.layers.mask=2|k.layers.mask,b.layers.mask=4|k.layers.mask,S.layers.mask=R.layers.mask|b.layers.mask;let ue=k.parent,pe=S.cameras;W(S,ue);for(let U=0;U<pe.length;U++)W(pe[U],ue);pe.length===2?(function(U,L,H){N.setFromMatrixPosition(L.matrixWorld),V.setFromMatrixPosition(H.matrixWorld);let G=N.distanceTo(V),F=L.projectionMatrix.elements,z=H.projectionMatrix.elements,P=F[14]/(F[10]-1),B=F[14]/(F[10]+1),q=(F[9]+1)/F[5],se=(F[9]-1)/F[5],j=(F[8]-1)/F[0],ne=(z[8]+1)/z[0],ie=P*j,oe=P*ne,ge=G/(-j+ne),me=ge*-j;if(L.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(me),U.translateZ(ge),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),F[10]===-1)U.projectionMatrix.copy(L.projectionMatrix),U.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let Me=P+ge,Re=B+ge,He=ie-me,Oe=oe+(G-me),Se=q*B/Re*Me,We=se*B/Re*Me;U.projectionMatrix.makePerspective(He,Oe,Se,We,Me,Re),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}})(S,R,b):S.projectionMatrix.copy(R.projectionMatrix),(function(U,L,H){H===null?U.matrix.copy(L.matrixWorld):(U.matrix.copy(H.matrixWorld),U.matrix.invert(),U.matrix.multiply(L.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(L.projectionMatrix),U.projectionMatrixInverse.copy(L.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=2*Bl*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)})(k,S,ue)},this.getCamera=function(){return S},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Q=null,$=new gd;$.setAnimationLoop((function(k,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let te=h.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let ue=!1;te.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let U=0;U<te.length;U++){let L=te[U],H=null;if(p!==null)H=p.getViewport(L);else{let F=u.getViewSubImage(d,L);H=F.viewport,U===0&&(e.setRenderTargetTextures(m,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(m))}let G=A[U];G===void 0&&(G=new Pt,G.layers.enable(U),G.viewport=new je,A[U]=G),G.matrix.fromArray(L.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(L.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(H.x,H.y,H.width,H.height),U===0&&(S.matrix.copy(G.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(G)}let pe=n.enabledFeatures;if(pe&&pe.includes("depth-sensing")){let U=u.getDepthInformation(te[0]);U&&U.isValid&&U.texture&&y.init(e,U,n.renderState)}}for(let te=0;te<v.length;te++){let ue=_[te],pe=v[te];ue!==null&&pe!==void 0&&pe.update(ue,K,c||a)}Q&&Q(k,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null})),this.setAnimationLoop=function(k){Q=k},this.dispose=function(){}}},pn=new vi,$m=new Te;function Zm(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===1&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===1&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,pn.copy(l),pn.x*=-1,pn.y*=-1,pn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(pn.y*=-1,pn.z*=-1),n.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(pn)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,md(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Jm(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,g){let y=u.value,f=d+"_"+p;if(g[f]===void 0)return g[f]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let x=g[f];if(typeof y=="number"||typeof y=="boolean"){if(x!==y)return g[f]=y,!0}else if(x.equals(y)===!1)return x.copy(y),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&((function(f){let x=f.uniforms,m=0,v=16;for(let T=0,E=x.length;T<E;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,A=R.length;b<A;b++){let S=R[b],M=Array.isArray(S.value)?S.value:[S.value];for(let w=0,D=M.length;w<D;w++){let O=c(M[w]),X=m%v,N=X%O.boundary,V=X+N;m+=N,V!==0&&v-V<O.storage&&(m+=v-V),S.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=m,m+=O.storage}}}let _=m%v;_>0&&(m+=v-_),f.__size=m,f.__cache={}})(u),p=(function(f){let x=(function(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=x;let m=r.createBuffer(),v=f.__size,_=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,m),r.bufferData(r.UNIFORM_BUFFER,v,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,m),m})(u),n[u.id]=p,u.addEventListener("dispose",h));let g=d.program;i.updateUBOMapping(u,g);let y=e.render.frame;s[u.id]!==y&&((function(f){let x=n[f.id],m=f.uniforms,v=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let _=0,T=m.length;_<T;_++){let E=Array.isArray(m[_])?m[_]:[m[_]];for(let R=0,b=E.length;R<b;R++){let A=E[R];if(l(A,_,R,v)===!0){let S=A.__offset,M=Array.isArray(A.value)?A.value:[A.value],w=0;for(let D=0;D<M.length;D++){let O=M[D],X=c(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,S+w,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,w),w+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=y)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var Ta=class{constructor(e={}){let{canvas:t=of(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),y=new Int32Array(4),f=null,x=null,m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this.toneMapping=0,this.toneMappingExposure=1;let _=this,T=!1,E=0,R=0,b=null,A=-1,S=null,M=new je,w=new je,D=null,O=new be(0),X=0,N=t.width,V=t.height,W=1,Q=null,$=null,k=new je(0,0,N,V),K=new je(0,0,N,V),te=!1,ue=new Qi,pe=!1,U=!1,L=new Te,H=new Te,G=new C,F=new je,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},P=!1;function B(){return b===null?W:1}let q,se,j,ne,ie,oe,ge,me,Me,Re,He,Oe,Se,We,Ke,rt,ye,Be,Ze,Ln,bs,Kt,ui,nn,Y=i;function Ar(I,Z){return t.getContext(I,Z)}try{let I={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",dh,!1),t.addEventListener("webglcontextrestored",ph,!1),t.addEventListener("webglcontextcreationerror",fh,!1),Y===null){let Z="webgl2";if(Y=Ar(Z,I),Y===null)throw Ar(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}function uh(){q=new Lf(Y),q.init(),Kt=new qm(Y,q),se=new Rf(Y,q,e,Kt),j=new Xm(Y,q),se.reverseDepthBuffer&&d&&j.buffers.depth.setReversed(!0),ne=new Nf(Y),ie=new Nm,oe=new jm(Y,q,j,ie,se,Kt,ne),ge=new Pf(_),me=new If(_),Me=new bf(Y),ui=new Tf(Y,Me),Re=new Uf(Y,Me,ne,ui),He=new Ff(Y,Re,Me,ne),Ze=new Of(Y,se,oe),rt=new Cf(ie),Oe=new Dm(_,ge,me,q,se,ui,rt),Se=new Zm(_,ie),We=new Fm,Ke=new Vm(q),Be=new Ef(_,ge,me,j,He,p,l),ye=new Gm(_,He,se),nn=new Jm(Y,ne,se,j),Ln=new Af(Y,q,ne),bs=new Df(Y,q,ne),ne.programs=Oe.programs,_.capabilities=se,_.extensions=q,_.properties=ie,_.renderLists=We,_.shadowMap=ye,_.state=j,_.info=ne}uh();let Mt=new ec(_,Y);function dh(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ph(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let I=ne.autoReset,Z=ye.enabled,ee=ye.autoUpdate,re=ye.needsUpdate,J=ye.type;uh(),ne.autoReset=I,ye.enabled=Z,ye.autoUpdate=ee,ye.needsUpdate=re,ye.type=J}function fh(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function mh(I){let Z=I.target;Z.removeEventListener("dispose",mh),(function(ee){(function(re){let J=ie.get(re).programs;J!==void 0&&(J.forEach((function(he){Oe.releaseProgram(he)})),re.isShaderMaterial&&Oe.releaseShaderCache(re))})(ee),ie.remove(ee)})(Z)}function gh(I,Z,ee){I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,Es(I,Z,ee),I.side=0,I.needsUpdate=!0,Es(I,Z,ee),I.side=2):Es(I,Z,ee)}this.xr=Mt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let I=q.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=q.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(I){I!==void 0&&(W=I,this.setSize(N,V,!1))},this.getSize=function(I){return I.set(N,V)},this.setSize=function(I,Z,ee=!0){Mt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(N=I,V=Z,t.width=Math.floor(I*W),t.height=Math.floor(Z*W),ee===!0&&(t.style.width=I+"px",t.style.height=Z+"px"),this.setViewport(0,0,I,Z))},this.getDrawingBufferSize=function(I){return I.set(N*W,V*W).floor()},this.setDrawingBufferSize=function(I,Z,ee){N=I,V=Z,W=ee,t.width=Math.floor(I*ee),t.height=Math.floor(Z*ee),this.setViewport(0,0,I,Z)},this.getCurrentViewport=function(I){return I.copy(M)},this.getViewport=function(I){return I.copy(k)},this.setViewport=function(I,Z,ee,re){I.isVector4?k.set(I.x,I.y,I.z,I.w):k.set(I,Z,ee,re),j.viewport(M.copy(k).multiplyScalar(W).round())},this.getScissor=function(I){return I.copy(K)},this.setScissor=function(I,Z,ee,re){I.isVector4?K.set(I.x,I.y,I.z,I.w):K.set(I,Z,ee,re),j.scissor(w.copy(K).multiplyScalar(W).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(I){j.setScissorTest(te=I)},this.setOpaqueSort=function(I){Q=I},this.setTransparentSort=function(I){$=I},this.getClearColor=function(I){return I.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(I=!0,Z=!0,ee=!0){let re=0;if(I){let J=!1;if(b!==null){let he=b.texture.format;J=he===Hc||he===zc||he===kc}if(J){let he=b.texture.type,ve=he===Ji||he===xn||he===qr||he===sr||he===Fc||he===Bc,_e=Be.getClearColor(),we=Be.getClearAlpha(),Ie=_e.r,Ue=_e.g,Ee=_e.b;ve?(g[0]=Ie,g[1]=Ue,g[2]=Ee,g[3]=we,Y.clearBufferuiv(Y.COLOR,0,g)):(y[0]=Ie,y[1]=Ue,y[2]=Ee,y[3]=we,Y.clearBufferiv(Y.COLOR,0,y))}else re|=Y.COLOR_BUFFER_BIT}Z&&(re|=Y.DEPTH_BUFFER_BIT),ee&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",dh,!1),t.removeEventListener("webglcontextrestored",ph,!1),t.removeEventListener("webglcontextcreationerror",fh,!1),We.dispose(),Ke.dispose(),ie.dispose(),ge.dispose(),me.dispose(),He.dispose(),ui.dispose(),nn.dispose(),Oe.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",vh),Mt.removeEventListener("sessionend",xh),rn.stop()},this.renderBufferDirect=function(I,Z,ee,re,J,he){Z===null&&(Z=z);let ve=J.isMesh&&J.matrixWorld.determinant()<0,_e=(function(ze,Lt,wt,Ne,Pe){Lt.isScene!==!0&&(Lt=z),oe.resetTextureUnits();let Qt=Lt.fog,fo=Ne.isMeshStandardMaterial?Lt.environment:null,Rr=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pr,Un=(Ne.isMeshStandardMaterial?me:ge).get(Ne.envMap||fo),mo=Ne.vertexColors===!0&&!!wt.attributes.color&&wt.attributes.color.itemSize===4,go=!!wt.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),vo=!!wt.morphAttributes.position,Vi=!!wt.morphAttributes.normal,bp=!!wt.morphAttributes.color,wh=0;Ne.toneMapped&&(b!==null&&b.isXRRenderTarget!==!0||(wh=_.toneMapping));let Eh=wt.morphAttributes.position||wt.morphAttributes.normal||wt.morphAttributes.color,wp=Eh!==void 0?Eh.length:0,ke=ie.get(Ne),Ep=x.state.lights;if(pe===!0&&(U===!0||ze!==S)){let Vt=ze===S&&Ne.id===A;rt.setState(Ne,ze,Vt)}let ei=!1;Ne.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==Ep.state.version||ke.outputColorSpace!==Rr||Pe.isBatchedMesh&&ke.batching===!1?ei=!0:Pe.isBatchedMesh||ke.batching!==!0?Pe.isBatchedMesh&&ke.batchingColor===!0&&Pe.colorTexture===null||Pe.isBatchedMesh&&ke.batchingColor===!1&&Pe.colorTexture!==null||Pe.isInstancedMesh&&ke.instancing===!1?ei=!0:Pe.isInstancedMesh||ke.instancing!==!0?Pe.isSkinnedMesh&&ke.skinning===!1?ei=!0:Pe.isSkinnedMesh||ke.skinning!==!0?Pe.isInstancedMesh&&ke.instancingColor===!0&&Pe.instanceColor===null||Pe.isInstancedMesh&&ke.instancingColor===!1&&Pe.instanceColor!==null||Pe.isInstancedMesh&&ke.instancingMorph===!0&&Pe.morphTexture===null||Pe.isInstancedMesh&&ke.instancingMorph===!1&&Pe.morphTexture!==null||ke.envMap!==Un||Ne.fog===!0&&ke.fog!==Qt?ei=!0:ke.numClippingPlanes===void 0||ke.numClippingPlanes===rt.numPlanes&&ke.numIntersection===rt.numIntersection?(ke.vertexAlphas!==mo||ke.vertexTangents!==go||ke.morphTargets!==vo||ke.morphNormals!==Vi||ke.morphColors!==bp||ke.toneMapping!==wh||ke.morphTargetsCount!==wp)&&(ei=!0):ei=!0:ei=!0:ei=!0:ei=!0:(ei=!0,ke.__version=Ne.version);let sn=ke.currentProgram;ei===!0&&(sn=Es(Ne,Lt,Pe));let Th=!1,Cr=!1,xo=!1,ut=sn.getUniforms(),Gi=ke.uniforms;if(j.useProgram(sn.program)&&(Th=!0,Cr=!0,xo=!0),Ne.id!==A&&(A=Ne.id,Cr=!0),Th||S!==ze){j.buffers.depth.getReversed()?(L.copy(ze.projectionMatrix),(function(an){let it=an.elements;it[2]=.5*it[2]+.5*it[3],it[6]=.5*it[6]+.5*it[7],it[10]=.5*it[10]+.5*it[11],it[14]=.5*it[14]+.5*it[15]})(L),(function(an){let it=an.elements;it[11]===-1?(it[10]=-it[10]-1,it[14]=-it[14]):(it[10]=-it[10],it[14]=1-it[14])})(L),ut.setValue(Y,"projectionMatrix",L)):ut.setValue(Y,"projectionMatrix",ze.projectionMatrix),ut.setValue(Y,"viewMatrix",ze.matrixWorldInverse);let Vt=ut.map.cameraPosition;Vt!==void 0&&Vt.setValue(Y,G.setFromMatrixPosition(ze.matrixWorld)),se.logarithmicDepthBuffer&&ut.setValue(Y,"logDepthBufFC",2/(Math.log(ze.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&ut.setValue(Y,"isOrthographic",ze.isOrthographicCamera===!0),S!==ze&&(S=ze,Cr=!0,xo=!0)}if(Pe.isSkinnedMesh){ut.setOptional(Y,Pe,"bindMatrix"),ut.setOptional(Y,Pe,"bindMatrixInverse");let Vt=Pe.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ut.setValue(Y,"boneTexture",Vt.boneTexture,oe))}Pe.isBatchedMesh&&(ut.setOptional(Y,Pe,"batchingTexture"),ut.setValue(Y,"batchingTexture",Pe._matricesTexture,oe),ut.setOptional(Y,Pe,"batchingIdTexture"),ut.setValue(Y,"batchingIdTexture",Pe._indirectTexture,oe),ut.setOptional(Y,Pe,"batchingColorTexture"),Pe._colorsTexture!==null&&ut.setValue(Y,"batchingColorTexture",Pe._colorsTexture,oe));let yo=wt.morphAttributes;yo.position===void 0&&yo.normal===void 0&&yo.color===void 0||Ze.update(Pe,wt,sn),(Cr||ke.receiveShadow!==Pe.receiveShadow)&&(ke.receiveShadow=Pe.receiveShadow,ut.setValue(Y,"receiveShadow",Pe.receiveShadow)),Ne.isMeshGouraudMaterial&&Ne.envMap!==null&&(Gi.envMap.value=Un,Gi.flipEnvMap.value=Un.isCubeTexture&&Un.isRenderTargetTexture===!1?-1:1),Ne.isMeshStandardMaterial&&Ne.envMap===null&&Lt.environment!==null&&(Gi.envMapIntensity.value=Lt.environmentIntensity),Cr&&(ut.setValue(Y,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&(ti=xo,(di=Gi).ambientLightColor.needsUpdate=ti,di.lightProbe.needsUpdate=ti,di.directionalLights.needsUpdate=ti,di.directionalLightShadows.needsUpdate=ti,di.pointLights.needsUpdate=ti,di.pointLightShadows.needsUpdate=ti,di.spotLights.needsUpdate=ti,di.spotLightShadows.needsUpdate=ti,di.rectAreaLights.needsUpdate=ti,di.hemisphereLights.needsUpdate=ti),Qt&&Ne.fog===!0&&Se.refreshFogUniforms(Gi,Qt),Se.refreshMaterialUniforms(Gi,Ne,W,V,x.state.transmissionRenderTarget[ze.id]),ir.upload(Y,Sh(ke),Gi,oe));var di,ti;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(ir.upload(Y,Sh(ke),Gi,oe),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&ut.setValue(Y,"center",Pe.center),ut.setValue(Y,"modelViewMatrix",Pe.modelViewMatrix),ut.setValue(Y,"normalMatrix",Pe.normalMatrix),ut.setValue(Y,"modelMatrix",Pe.matrixWorld),Ne.isShaderMaterial||Ne.isRawShaderMaterial){let Vt=Ne.uniformsGroups;for(let an=0,it=Vt.length;an<it;an++){let Ah=Vt[an];nn.update(Ah,sn),nn.bind(Ah,sn)}}return sn})(I,Z,ee,re,J);j.setMaterial(re,ve);let we=ee.index,Ie=1;if(re.wireframe===!0){if(we=Re.getWireframeAttribute(ee),we===void 0)return;Ie=2}let Ue=ee.drawRange,Ee=ee.attributes.position,Fe=Ue.start*Ie,ot=(Ue.start+Ue.count)*Ie;he!==null&&(Fe=Math.max(Fe,he.start*Ie),ot=Math.min(ot,(he.start+he.count)*Ie)),we!==null?(Fe=Math.max(Fe,0),ot=Math.min(ot,we.count)):Ee!=null&&(Fe=Math.max(Fe,0),ot=Math.min(ot,Ee.count));let Qe=ot-Fe;if(Qe<0||Qe===1/0)return;let xt;ui.setup(J,re,_e,ee,we);let et=Ln;if(we!==null&&(xt=Me.get(we),et=bs,et.setIndex(xt)),J.isMesh)re.wireframe===!0?(j.setLineWidth(re.wireframeLinewidth*B()),et.setMode(Y.LINES)):et.setMode(Y.TRIANGLES);else if(J.isLine){let ze=re.linewidth;ze===void 0&&(ze=1),j.setLineWidth(ze*B()),J.isLineSegments?et.setMode(Y.LINES):J.isLineLoop?et.setMode(Y.LINE_LOOP):et.setMode(Y.LINE_STRIP)}else J.isPoints?et.setMode(Y.POINTS):J.isSprite&&et.setMode(Y.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)et.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))et.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let ze=J._multiDrawStarts,Lt=J._multiDrawCounts,wt=J._multiDrawCount,Ne=we?Me.get(we).bytesPerElement:1,Pe=ie.get(re).currentProgram.getUniforms();for(let Qt=0;Qt<wt;Qt++)Pe.setValue(Y,"_gl_DrawID",Qt),et.render(ze[Qt]/Ne,Lt[Qt])}else if(J.isInstancedMesh)et.renderInstances(Fe,Qe,J.count);else if(ee.isInstancedBufferGeometry){let ze=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Lt=Math.min(ee.instanceCount,ze);et.renderInstances(Fe,Qe,Lt)}else et.render(Fe,Qe)},this.compile=function(I,Z,ee=null){ee===null&&(ee=I),x=Ke.get(ee),x.init(Z),v.push(x),ee.traverseVisible((function(J){J.isLight&&J.layers.test(Z.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))})),I!==ee&&I.traverseVisible((function(J){J.isLight&&J.layers.test(Z.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))})),x.setupLights();let re=new Set;return I.traverse((function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let he=J.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){let _e=he[ve];gh(_e,ee,J),re.add(_e)}else gh(he,ee,J),re.add(he)})),v.pop(),x=null,re},this.compileAsync=function(I,Z,ee=null){let re=this.compile(I,Z,ee);return new Promise((J=>{function he(){re.forEach((function(ve){ie.get(ve).currentProgram.isReady()&&re.delete(ve)})),re.size!==0?setTimeout(he,10):J(I)}q.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)}))};let uo=null;function vh(){rn.stop()}function xh(){rn.start()}let rn=new gd;function po(I,Z,ee,re){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)ee=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ue.intersectsSprite(I)){re&&F.setFromMatrixPosition(I.matrixWorld).applyMatrix4(H);let he=He.update(I),ve=I.material;ve.visible&&f.push(I,he,ve,ee,F.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ue.intersectsObject(I))){let he=He.update(I),ve=I.material;if(re&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),F.copy(I.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),F.copy(he.boundingSphere.center)),F.applyMatrix4(I.matrixWorld).applyMatrix4(H)),Array.isArray(ve)){let _e=he.groups;for(let we=0,Ie=_e.length;we<Ie;we++){let Ue=_e[we],Ee=ve[Ue.materialIndex];Ee&&Ee.visible&&f.push(I,he,Ee,ee,F.z,Ue)}}else ve.visible&&f.push(I,he,ve,ee,F.z,null)}}let J=I.children;for(let he=0,ve=J.length;he<ve;he++)po(J[he],Z,ee,re)}function yh(I,Z,ee,re){let J=I.opaque,he=I.transmissive,ve=I.transparent;x.setupLightsView(ee),pe===!0&&rt.setGlobalState(_.clippingPlanes,ee),re&&j.viewport(M.copy(re)),J.length>0&&ws(J,Z,ee),he.length>0&&ws(he,Z,ee),ve.length>0&&ws(ve,Z,ee),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function _h(I,Z,ee,re){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[re.id]===void 0&&(x.state.transmissionRenderTarget[re.id]=new Oi(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?as:Ji,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));let J=x.state.transmissionRenderTarget[re.id],he=re.viewport||M;J.setSize(he.z,he.w);let ve=_.getRenderTarget();_.setRenderTarget(J),_.getClearColor(O),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),P&&Be.render(ee);let _e=_.toneMapping;_.toneMapping=0;let we=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),x.setupLightsView(re),pe===!0&&rt.setGlobalState(_.clippingPlanes,re),ws(I,ee,re),oe.updateMultisampleRenderTarget(J),oe.updateRenderTargetMipmap(J),q.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ue=0,Ee=Z.length;Ue<Ee;Ue++){let Fe=Z[Ue],ot=Fe.object,Qe=Fe.geometry,xt=Fe.material,et=Fe.group;if(xt.side===2&&ot.layers.test(re.layers)){let ze=xt.side;xt.side=1,xt.needsUpdate=!0,Mh(ot,ee,re,Qe,xt,et),xt.side=ze,xt.needsUpdate=!0,Ie=!0}}Ie===!0&&(oe.updateMultisampleRenderTarget(J),oe.updateRenderTargetMipmap(J))}_.setRenderTarget(ve),_.setClearColor(O,X),we!==void 0&&(re.viewport=we),_.toneMapping=_e}function ws(I,Z,ee){let re=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,he=I.length;J<he;J++){let ve=I[J],_e=ve.object,we=ve.geometry,Ie=re===null?ve.material:re,Ue=ve.group;_e.layers.test(ee.layers)&&Mh(_e,Z,ee,we,Ie,Ue)}}function Mh(I,Z,ee,re,J,he){I.onBeforeRender(_,Z,ee,re,J,he),I.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),J.onBeforeRender(_,Z,ee,re,I,he),J.transparent===!0&&J.side===2&&J.forceSinglePass===!1?(J.side=1,J.needsUpdate=!0,_.renderBufferDirect(ee,Z,re,J,I,he),J.side=0,J.needsUpdate=!0,_.renderBufferDirect(ee,Z,re,J,I,he),J.side=2):_.renderBufferDirect(ee,Z,re,J,I,he),I.onAfterRender(_,Z,ee,re,J,he)}function Es(I,Z,ee){Z.isScene!==!0&&(Z=z);let re=ie.get(I),J=x.state.lights,he=x.state.shadowsArray,ve=J.state.version,_e=Oe.getParameters(I,J.state,he,Z,ee),we=Oe.getProgramCacheKey(_e),Ie=re.programs;re.environment=I.isMeshStandardMaterial?Z.environment:null,re.fog=Z.fog,re.envMap=(I.isMeshStandardMaterial?me:ge).get(I.envMap||re.environment),re.envMapRotation=re.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,Ie===void 0&&(I.addEventListener("dispose",mh),Ie=new Map,re.programs=Ie);let Ue=Ie.get(we);if(Ue!==void 0){if(re.currentProgram===Ue&&re.lightsStateVersion===ve)return bh(I,_e),Ue}else _e.uniforms=Oe.getUniforms(I),I.onBeforeCompile(_e,_),Ue=Oe.acquireProgram(_e,we),Ie.set(we,Ue),re.uniforms=_e.uniforms;let Ee=re.uniforms;return(I.isShaderMaterial||I.isRawShaderMaterial)&&I.clipping!==!0||(Ee.clippingPlanes=rt.uniform),bh(I,_e),re.needsLights=(function(Fe){return Fe.isMeshLambertMaterial||Fe.isMeshToonMaterial||Fe.isMeshPhongMaterial||Fe.isMeshStandardMaterial||Fe.isShadowMaterial||Fe.isShaderMaterial&&Fe.lights===!0})(I),re.lightsStateVersion=ve,re.needsLights&&(Ee.ambientLightColor.value=J.state.ambient,Ee.lightProbe.value=J.state.probe,Ee.directionalLights.value=J.state.directional,Ee.directionalLightShadows.value=J.state.directionalShadow,Ee.spotLights.value=J.state.spot,Ee.spotLightShadows.value=J.state.spotShadow,Ee.rectAreaLights.value=J.state.rectArea,Ee.ltc_1.value=J.state.rectAreaLTC1,Ee.ltc_2.value=J.state.rectAreaLTC2,Ee.pointLights.value=J.state.point,Ee.pointLightShadows.value=J.state.pointShadow,Ee.hemisphereLights.value=J.state.hemi,Ee.directionalShadowMap.value=J.state.directionalShadowMap,Ee.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ee.spotShadowMap.value=J.state.spotShadowMap,Ee.spotLightMatrix.value=J.state.spotLightMatrix,Ee.spotLightMap.value=J.state.spotLightMap,Ee.pointShadowMap.value=J.state.pointShadowMap,Ee.pointShadowMatrix.value=J.state.pointShadowMatrix),re.currentProgram=Ue,re.uniformsList=null,Ue}function Sh(I){if(I.uniformsList===null){let Z=I.currentProgram.getUniforms();I.uniformsList=ir.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function bh(I,Z){let ee=ie.get(I);ee.outputColorSpace=Z.outputColorSpace,ee.batching=Z.batching,ee.batchingColor=Z.batchingColor,ee.instancing=Z.instancing,ee.instancingColor=Z.instancingColor,ee.instancingMorph=Z.instancingMorph,ee.skinning=Z.skinning,ee.morphTargets=Z.morphTargets,ee.morphNormals=Z.morphNormals,ee.morphColors=Z.morphColors,ee.morphTargetsCount=Z.morphTargetsCount,ee.numClippingPlanes=Z.numClippingPlanes,ee.numIntersection=Z.numClipIntersection,ee.vertexAlphas=Z.vertexAlphas,ee.vertexTangents=Z.vertexTangents,ee.toneMapping=Z.toneMapping}rn.setAnimationLoop((function(I){uo&&uo(I)})),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(I){uo=I,Mt.setAnimationLoop(I),I===null?rn.stop():rn.start()},Mt.addEventListener("sessionstart",vh),Mt.addEventListener("sessionend",xh),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(T===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(Z),Z=Mt.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,Z,b),x=Ke.get(I,v.length),x.init(Z),v.push(x),H.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ue.setFromProjectionMatrix(H),U=this.localClippingEnabled,pe=rt.init(this.clippingPlanes,U),f=We.get(I,m.length),f.init(),m.push(f),Mt.enabled===!0&&Mt.isPresenting===!0){let he=_.xr.getDepthSensingMesh();he!==null&&po(he,Z,-1/0,_.sortObjects)}po(I,Z,0,_.sortObjects),f.finish(),_.sortObjects===!0&&f.sort(Q,$),P=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,P&&Be.addToRenderList(f,I),this.info.render.frame++,pe===!0&&rt.beginShadows();let ee=x.state.shadowsArray;ye.render(ee,I,Z),pe===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let re=f.opaque,J=f.transmissive;if(x.setupLights(),Z.isArrayCamera){let he=Z.cameras;if(J.length>0)for(let ve=0,_e=he.length;ve<_e;ve++)_h(re,J,I,he[ve]);P&&Be.render(I);for(let ve=0,_e=he.length;ve<_e;ve++){let we=he[ve];yh(f,I,we,we.viewport)}}else J.length>0&&_h(re,J,I,Z),P&&Be.render(I),yh(f,I,Z);b!==null&&(oe.updateMultisampleRenderTarget(b),oe.updateRenderTargetMipmap(b)),I.isScene===!0&&I.onAfterRender(_,I,Z),ui.resetDefaultState(),A=-1,S=null,v.pop(),v.length>0?(x=v[v.length-1],pe===!0&&rt.setGlobalState(_.clippingPlanes,x.state.camera)):x=null,m.pop(),f=m.length>0?m[m.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(I,Z,ee){ie.get(I.texture).__webglTexture=Z,ie.get(I.depthTexture).__webglTexture=ee;let re=ie.get(I);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ee===void 0,re.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Z){let ee=ie.get(I);ee.__webglFramebuffer=Z,ee.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(I,Z=0,ee=0){b=I,E=Z,R=ee;let re=!0,J=null,he=!1,ve=!1;if(I){let _e=ie.get(I);if(_e.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(Y.FRAMEBUFFER,null),re=!1;else if(_e.__webglFramebuffer===void 0)oe.setupRenderTarget(I);else if(_e.__hasExternalTextures)oe.rebindTextures(I,ie.get(I.texture).__webglTexture,ie.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ue=I.depthTexture;if(_e.__boundDepthTexture!==Ue){if(Ue!==null&&ie.has(Ue)&&(I.width!==Ue.image.width||I.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(I)}}let we=I.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);let Ie=ie.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(J=Array.isArray(Ie[Z])?Ie[Z][ee]:Ie[Z],he=!0):J=I.samples>0&&oe.useMultisampledRTT(I)===!1?ie.get(I).__webglMultisampledFramebuffer:Array.isArray(Ie)?Ie[ee]:Ie,M.copy(I.viewport),w.copy(I.scissor),D=I.scissorTest}else M.copy(k).multiplyScalar(W).floor(),w.copy(K).multiplyScalar(W).floor(),D=te;if(j.bindFramebuffer(Y.FRAMEBUFFER,J)&&re&&j.drawBuffers(I,J),j.viewport(M),j.scissor(w),j.setScissorTest(D),he){let _e=ie.get(I.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e.__webglTexture,ee)}else if(ve){let _e=ie.get(I.texture),we=Z||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,_e.__webglTexture,ee||0,we)}A=-1},this.readRenderTargetPixels=function(I,Z,ee,re,J,he,ve){if(!I||!I.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ve!==void 0&&(_e=_e[ve]),_e){j.bindFramebuffer(Y.FRAMEBUFFER,_e);try{let we=I.texture,Ie=we.format,Ue=we.type;if(!se.textureFormatReadable(Ie))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ue))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Z>=0&&Z<=I.width-re&&ee>=0&&ee<=I.height-J&&Y.readPixels(Z,ee,re,J,Kt.convert(Ie),Kt.convert(Ue),he)}finally{let we=b!==null?ie.get(b).__webglFramebuffer:null;j.bindFramebuffer(Y.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(I,Z,ee,re,J,he,ve){if(!I||!I.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ve!==void 0&&(_e=_e[ve]),_e){let we=I.texture,Ie=we.format,Ue=we.type;if(!se.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=I.width-re&&ee>=0&&ee<=I.height-J){j.bindFramebuffer(Y.FRAMEBUFFER,_e);let Ee=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ee),Y.bufferData(Y.PIXEL_PACK_BUFFER,he.byteLength,Y.STREAM_READ),Y.readPixels(Z,ee,re,J,Kt.convert(Ie),Kt.convert(Ue),0);let Fe=b!==null?ie.get(b).__webglFramebuffer:null;j.bindFramebuffer(Y.FRAMEBUFFER,Fe);let ot=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await(function(Qe,xt,et){return new Promise((function(ze,Lt){setTimeout((function wt(){switch(Qe.clientWaitSync(xt,Qe.SYNC_FLUSH_COMMANDS_BIT,0)){case Qe.WAIT_FAILED:Lt();break;case Qe.TIMEOUT_EXPIRED:setTimeout(wt,et);break;default:ze()}}),et)}))})(Y,ot,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ee),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,he),Y.deleteBuffer(Ee),Y.deleteSync(ot),he}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Z=null,ee=0){I.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,I=arguments[1]);let re=Math.pow(2,-ee),J=Math.floor(I.image.width*re),he=Math.floor(I.image.height*re),ve=Z!==null?Z.x:0,_e=Z!==null?Z.y:0;oe.setTexture2D(I,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ee,0,0,ve,_e,J,he),j.unbindTexture()},this.copyTextureToTexture=function(I,Z,ee=null,re=null,J=0){let he,ve,_e,we,Ie,Ue,Ee,Fe,ot;I.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,I=arguments[1],Z=arguments[2],J=arguments[3]||0,ee=null);let Qe=I.isCompressedTexture?I.mipmaps[J]:I.image;ee!==null?(he=ee.max.x-ee.min.x,ve=ee.max.y-ee.min.y,_e=ee.isBox3?ee.max.z-ee.min.z:1,we=ee.min.x,Ie=ee.min.y,Ue=ee.isBox3?ee.min.z:0):(he=Qe.width,ve=Qe.height,_e=Qe.depth||1,we=0,Ie=0,Ue=0),re!==null?(Ee=re.x,Fe=re.y,ot=re.z):(Ee=0,Fe=0,ot=0);let xt=Kt.convert(Z.format),et=Kt.convert(Z.type),ze;Z.isData3DTexture?(oe.setTexture3D(Z,0),ze=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),ze=Y.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),ze=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);let Lt=Y.getParameter(Y.UNPACK_ROW_LENGTH),wt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Ne=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Pe=Y.getParameter(Y.UNPACK_SKIP_ROWS),Qt=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Qe.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Qe.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,we),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ie),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ue);let fo=I.isDataArrayTexture||I.isData3DTexture,Rr=Z.isDataArrayTexture||Z.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let Un=ie.get(I),mo=ie.get(Z),go=ie.get(Un.__renderTarget),vo=ie.get(mo.__renderTarget);j.bindFramebuffer(Y.READ_FRAMEBUFFER,go.__webglFramebuffer),j.bindFramebuffer(Y.DRAW_FRAMEBUFFER,vo.__webglFramebuffer);for(let Vi=0;Vi<_e;Vi++)fo&&Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ie.get(I).__webglTexture,J,Ue+Vi),I.isDepthTexture?(Rr&&Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ie.get(Z).__webglTexture,J,ot+Vi),Y.blitFramebuffer(we,Ie,he,ve,Ee,Fe,he,ve,Y.DEPTH_BUFFER_BIT,Y.NEAREST)):Rr?Y.copyTexSubImage3D(ze,J,Ee,Fe,ot+Vi,we,Ie,he,ve):Y.copyTexSubImage2D(ze,J,Ee,Fe,ot+Vi,we,Ie,he,ve);j.bindFramebuffer(Y.READ_FRAMEBUFFER,null),j.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Rr?I.isDataTexture||I.isData3DTexture?Y.texSubImage3D(ze,J,Ee,Fe,ot,he,ve,_e,xt,et,Qe.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(ze,J,Ee,Fe,ot,he,ve,_e,xt,Qe.data):Y.texSubImage3D(ze,J,Ee,Fe,ot,he,ve,_e,xt,et,Qe):I.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,J,Ee,Fe,he,ve,xt,et,Qe.data):I.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,J,Ee,Fe,Qe.width,Qe.height,xt,Qe.data):Y.texSubImage2D(Y.TEXTURE_2D,J,Ee,Fe,he,ve,xt,et,Qe);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Lt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,wt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ne),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Pe),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Qt),J===0&&Z.generateMipmaps&&Y.generateMipmap(ze),j.unbindTexture()},this.copyTextureToTexture3D=function(I,Z,ee=null,re=null,J=0){return I.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,re=arguments[1]||null,I=arguments[2],Z=arguments[3],J=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Z,ee,re,J)},this.initRenderTarget=function(I){ie.get(I).__webglFramebuffer===void 0&&oe.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?oe.setTextureCube(I,0):I.isData3DTexture?oe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?oe.setTexture2DArray(I,0):oe.setTexture2D(I,0),j.unbindTexture()},this.resetState=function(){E=0,R=0,b=null,j.reset(),ui.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var Aa=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hr=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},tc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ut=new C,Ra=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jr=class extends Fi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yn,Fr=new C,$n=new C,Zn=new C,Jn=new ae,Br=new ae,Md=new Te,Ks=new C,kr=new C,Qs=new C,ku=new ae,Jo=new ae,zu=new ae,Ca=class extends dt{constructor(e=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",Yn===void 0){Yn=new Je;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tc(t,5);Yn.setIndex([0,1,2,0,2,3]),Yn.setAttribute("position",new Ra(i,3,0,!1)),Yn.setAttribute("uv",new Ra(i,2,3,!1))}this.geometry=Yn,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$n.setFromMatrixScale(this.matrixWorld),Md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$n.multiplyScalar(-Zn.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;ea(Ks.set(-.5,-.5,0),Zn,a,$n,n,s),ea(kr.set(.5,-.5,0),Zn,a,$n,n,s),ea(Qs.set(.5,.5,0),Zn,a,$n,n,s),ku.set(0,0),Jo.set(1,0),zu.set(1,1);let o=e.ray.intersectTriangle(Ks,kr,Qs,!1,Fr);if(o===null&&(ea(kr.set(-.5,.5,0),Zn,a,$n,n,s),Jo.set(0,1),o=e.ray.intersectTriangle(Ks,Qs,kr,!1,Fr),o===null))return;let l=e.ray.origin.distanceTo(Fr);l<e.near||l>e.far||t.push({distance:l,point:Fr.clone(),uv:Ii.getInterpolation(Fr,Ks,kr,Qs,ku,Jo,zu,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ea(r,e,t,i,n,s){Jn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Br.x=s*Jn.x-n*Jn.y,Br.y=n*Jn.x+s*Jn.y):Br.copy(Jn),r.copy(e),r.x+=Br.x,r.y+=Br.y,r.applyMatrix4(Md)}var j0=new C,q0=new C;var Y0=new C,$0=new je,Z0=new je,J0=new C,K0=new Te,Q0=new C,eg=new jt,tg=new Te,ig=new yn;var ng=new Te,rg=new Te;var Pa=class extends at{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sg=new Te,ag=new Te;var og=new Xt,lg=new Te,cg=new xe,hg=new jt;var ic=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},ug=new Te,dg=new be(1,1,1),pg=new Qi,fg=new Xt,mg=new jt,gg=new C,vg=new C,xg=new C,yg=new ic,_g=new xe;var Mg=new C,Sg=new C,bg=new Te,wg=new yn,Eg=new jt,Tg=new C,Ag=new C;var Rg=new C,Cg=new C;var Kr=class extends Fi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hu=new Te,nc=new yn,ta=new jt,ia=new C,Ia=class extends dt{constructor(e=new Je,t=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(n),ta.radius+=s,e.ray.intersectsSphere(ta)===!1)return;Hu.copy(n).invert(),nc.copy(e.ray).applyMatrix4(Hu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);ia.fromBufferAttribute(h,p),Vu(ia,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)ia.fromBufferAttribute(h,u),Vu(ia,u,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Vu(r,e,t,i,n,s,a){let o=nc.distanceSqToPoint(r);if(o<t){let l=new C;nc.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var It=class extends kt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new ae:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,n=[],s=[],a=[],o=new C,l=new Te;for(let p=0;p<=e;p++){let g=p/e;n[p]=this.getTangentAt(g,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(bt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(bt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Qr=class extends Yt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rc=class extends Qr{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,n(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var na=new C,Ko=new Gc,Qo=new Gc,el=new Gc,sc=class extends Yt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new C){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=n[(c-1)%s]:(na.subVectors(n[0],n[1]).add(n[0]),o=na);let u=n[c%s],d=n[(c+1)%s];if(this.closed||c+2<s?l=n[(c+2)%s]:(na.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=na),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);y<1e-4&&(y=1),g<1e-4&&(g=y),f<1e-4&&(f=y),Ko.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,g,y,f),Qo.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,g,y,f),el.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,g,y,f)}else this.curveType==="catmullrom"&&(Ko.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Qo.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),el.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Ko.calc(h),Qo.calc(h),el.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new C().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gu(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Gr(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function Wr(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var La=class extends Yt{constructor(e=new ae,t=new ae,i=new ae,n=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ae){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Wr(e,n.x,s.x,a.x,o.x),Wr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends Yt{constructor(e=new C,t=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Wr(e,n.x,s.x,a.x,o.x),Wr(e,n.y,s.y,a.y,o.y),Wr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends Yt{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oc=class extends Yt{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends Yt{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Gr(e,n.x,s.x,a.x),Gr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends Yt{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Gr(e,n.x,s.x,a.x),Gr(e,n.y,s.y,a.y),Gr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends Yt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Gu(o,l.x,c.x,h.x,u.x),Gu(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ae().fromArray(n))}return this}},Oa=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:sc,CubicBezierCurve:La,CubicBezierCurve3:ac,EllipseCurve:Qr,LineCurve:Ua,LineCurve3:oc,QuadraticBezierCurve:Da,QuadraticBezierCurve3:Na,SplineCurve:ur}),lc=class extends Yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oa[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Oa[n.type]().fromJSON(n))}return this}},es=class extends lc{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ua(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Da(this.currentPoint.clone(),new ae(e,t),new ae(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new La(this.currentPoint.clone(),new ae(e,t),new ae(i,n),new ae(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ur(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new Qr(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},oi=class r extends Je{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=bt(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new ae,p=new C,g=new C,y=new C,f=0,x=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:f=e[m+1].x-e[m].x,x=e[m+1].y-e[m].y,p.x=1*x,p.y=-f,p.z=0*x,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:f=e[m+1].x-e[m].x,x=e[m+1].y-e[m].y,p.x=1*x,p.y=-f,p.z=0*x,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let m=0;m<=t;m++){let v=i+m*h*n,_=Math.sin(v),T=Math.cos(v);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*T,a.push(u.x,u.y,u.z),d.x=m/t,d.y=E/(e.length-1),o.push(d.x,d.y);let R=l[3*E+0]*_,b=l[3*E+1],A=l[3*E+0]*T;c.push(R,b,A)}}for(let m=0;m<t;m++)for(let v=0;v<e.length-1;v++){let _=v+m*e.length,T=_,E=_+e.length,R=_+e.length+1,b=_+1;s.push(T,E,b),s.push(R,b,E)}this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},ts=class r extends oi{constructor(e=1,t=1,i=4,n=8){let s=new es;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},xi=class r extends Je{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new C,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nt=class r extends Je{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],p=[],g=0,y=[],f=i/2,x=0;function m(v){let _=g,T=new ae,E=new C,R=0,b=v===!0?e:t,A=v===!0?1:-1;for(let M=1;M<=n;M++)u.push(0,f*A,0),d.push(0,A,0),p.push(.5,.5),g++;let S=g;for(let M=0;M<=n;M++){let w=M/n*l+o,D=Math.cos(w),O=Math.sin(w);E.x=b*O,E.y=f*A,E.z=b*D,u.push(E.x,E.y,E.z),d.push(0,A,0),T.x=.5*D+.5,T.y=.5*O*A+.5,p.push(T.x,T.y),g++}for(let M=0;M<n;M++){let w=_+M,D=S+M;v===!0?h.push(D,D+1,w):h.push(D+1,D,w),R+=3}c.addGroup(x,R,v===!0?1:2),x+=R}(function(){let v=new C,_=new C,T=0,E=(t-e)/i;for(let R=0;R<=s;R++){let b=[],A=R/s,S=A*(t-e)+e;for(let M=0;M<=n;M++){let w=M/n,D=w*l+o,O=Math.sin(D),X=Math.cos(D);_.x=S*O,_.y=-A*i+f,_.z=S*X,u.push(_.x,_.y,_.z),v.set(O,E,X).normalize(),d.push(v.x,v.y,v.z),p.push(w,1-A),b.push(g++)}y.push(b)}for(let R=0;R<n;R++)for(let b=0;b<s;b++){let A=y[b][R],S=y[b+1][R],M=y[b+1][R+1],w=y[b][R+1];(e>0||b!==0)&&(h.push(A,S,w),T+=3),(t>0||b!==s-1)&&(h.push(S,M,w),T+=3)}c.addGroup(x,T,0),x+=T})(),a===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cc=class r extends Nt{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_n=class r extends Je{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(d,p,g,y){let f=y+1,x=[];for(let m=0;m<=f;m++){x[m]=[];let v=d.clone().lerp(g,m/f),_=p.clone().lerp(g,m/f),T=f-m;for(let E=0;E<=T;E++)x[m][E]=E===0&&m===f?v:v.clone().lerp(_,E/T)}for(let m=0;m<f;m++)for(let v=0;v<2*(f-m)-1;v++){let _=Math.floor(v/2);v%2==0?(l(x[m][_+1]),l(x[m+1][_]),l(x[m][_])):(l(x[m][_+1]),l(x[m+1][_+1]),l(x[m+1][_]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let g=3*d;p.x=e[g+0],p.y=e[g+1],p.z=e[g+2]}function h(d,p,g,y){y<0&&d.x===1&&(a[p]=d.x-1),g.x===0&&g.z===0&&(a[p]=y/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new C,g=new C,y=new C;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],g),c(t[f+2],y),o(p,g,y,d)})(n),(function(d){let p=new C;for(let g=0;g<s.length;g+=3)p.x=s[g+0],p.y=s[g+1],p.z=s[g+2],p.normalize().multiplyScalar(d),s[g+0]=p.x,s[g+1]=p.y,s[g+2]=p.z})(i),(function(){let d=new C;for(let g=0;g<s.length;g+=3){d.x=s[g+0],d.y=s[g+1],d.z=s[g+2];let y=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(y,1-f)}var p;(function(){let g=new C,y=new C,f=new C,x=new C,m=new ae,v=new ae,_=new ae;for(let T=0,E=0;T<s.length;T+=9,E+=6){g.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),f.set(s[T+6],s[T+7],s[T+8]),m.set(a[E+0],a[E+1]),v.set(a[E+2],a[E+3]),_.set(a[E+4],a[E+5]),x.copy(g).add(y).add(f).divideScalar(3);let R=u(x);h(m,E+0,g,R),h(v,E+2,y,R),h(_,E+4,f,R)}})(),(function(){for(let g=0;g<a.length;g+=6){let y=a[g+0],f=a[g+2],x=a[g+4],m=Math.max(y,f,x),v=Math.min(y,f,x);m>.9&&v<.1&&(y<.2&&(a[g+0]+=1),f<.2&&(a[g+2]+=1),x<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},hc=class r extends _n{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ra=new C,sa=new C,tl=new C,aa=new Ii,uc=class extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(ma*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:f,c:x}=aa;if(y.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),x.fromBufferAttribute(o,c[2]),aa.getNormal(tl),u[0]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,u[1]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[2]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let m=0;m<3;m++){let v=(m+1)%3,_=u[m],T=u[v],E=aa[h[m]],R=aa[h[v]],b=`${_}_${T}`,A=`${T}_${_}`;A in d&&d[A]?(tl.dot(d[A].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(R.x,R.y,R.z)),d[A]=null):b in d||(d[b]={index0:c[m],index1:c[v],normal:tl.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:f}=d[g];ra.fromBufferAttribute(o,y),sa.fromBufferAttribute(o,f),p.push(ra.x,ra.y,ra.z),p.push(sa.x,sa.y,sa.z)}this.setAttribute("position",new Ae(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Fa=class extends es{constructor(e){super(e),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new es().fromJSON(n))}return this}},Km=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Wu(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(i&&(s=(function(g,y,f,x){let m=[],v,_,T,E,R;for(v=0,_=y.length;v<_;v++)T=y[v]*x,E=v<_-1?y[v+1]*x:g.length,R=Wu(g,T,E,x,!1),R===R.next&&(R.steiner=!0),m.push(a0(R));for(m.sort(n0),v=0;v<m.length;v++)f=r0(m[v],f);return f})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let g=t;g<n;g+=t)u=r[g],d=r[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return is(s,a,t,o,l,p,0),a};function Wu(r,e,t,i,n){let s,a;if(n===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Xu(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Xu(s,r[s],r[s+1],a);return a&&ja(a,a.next)&&(rs(a),a=a.next),a}function Mn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!ja(i,i.next)&&st(i.prev,i,i.next)!==0)i=i.next;else{if(rs(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function is(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let g=h;do g.z===0&&(g.z=dc(g.x,g.y,u,d,p)),g.prevZ=g.prev,g.nextZ=g.next,g=g.next;while(g!==h);g.prevZ.nextZ=null,g.prevZ=null,(function(y){let f,x,m,v,_,T,E,R,b=1;do{for(x=y,y=null,_=null,T=0;x;){for(T++,m=x,E=0,f=0;f<b&&(E++,m=m.nextZ,m);f++);for(R=b;E>0||R>0&&m;)E!==0&&(R===0||!m||x.z<=m.z)?(v=x,x=x.nextZ,E--):(v=m,m=m.nextZ,R--),_?_.nextZ=v:y=v,v.prevZ=_,_=v;x=m}_.nextZ=null,b*=2}while(T>1)})(g)})(r,i,n,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?e0(r,i,n,s):Qm(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),rs(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?is(r=t0(Mn(r),e,t),e,t,i,n,s,2):a===2&&i0(r,e,t,i,n,s):is(Mn(r),e,t,i,n,s,1);break}}function Qm(r){let e=r.prev,t=r,i=r.next;if(st(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&er(n,o,s,l,a,c,g.x,g.y)&&st(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function e0(r,e,t,i){let n=r.prev,s=r,a=r.next;if(st(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,x=dc(p,g,e,t,i),m=dc(y,f,e,t,i),v=r.prevZ,_=r.nextZ;for(;v&&v.z>=x&&_&&_.z<=m;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=f&&v!==n&&v!==a&&er(o,h,l,u,c,d,v.x,v.y)&&st(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=y&&_.y>=g&&_.y<=f&&_!==n&&_!==a&&er(o,h,l,u,c,d,_.x,_.y)&&st(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=x;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=f&&v!==n&&v!==a&&er(o,h,l,u,c,d,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=m;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=f&&_!==n&&_!==a&&er(o,h,l,u,c,d,_.x,_.y)&&st(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function t0(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!ja(n,s)&&Sd(n,i,i.next,s)&&ns(n,s)&&ns(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),rs(i),rs(i.next),i=r=s),i=i.next}while(i!==r);return Mn(i)}function i0(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&o0(a,o)){let l=bd(a,o);return a=Mn(a,a.next),l=Mn(l,l.next),is(a,e,t,i,n,s,0),void is(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function n0(r,e){return r.x-e.x}function r0(r,e){let t=(function(n,s){let a,o=s,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,g,y=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&er(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(g=Math.abs(h-o.y)/(c-o.x),ns(o,n)&&(g<y||g===y&&(o.x>a.x||o.x===a.x&&s0(a,o)))&&(a=o,y=g)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let i=bd(t,r);return Mn(i,i.next),Mn(t,t.next)}function s0(r,e){return st(r.prev,r,e.prev)<0&&st(e.next,r,r.next)<0}function dc(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function a0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function er(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function o0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Sd(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(ns(r,e)&&ns(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(st(r.prev,r,e.prev)||st(r,e.prev,e))||ja(r,e)&&st(r.prev,r,r.next)>0&&st(e.prev,e,e.next)>0)}function st(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ja(r,e){return r.x===e.x&&r.y===e.y}function Sd(r,e,t,i){let n=la(st(r,e,t)),s=la(st(r,e,i)),a=la(st(t,i,r)),o=la(st(t,i,e));return n!==s&&a!==o||!(n!==0||!oa(r,t,e))||!(s!==0||!oa(r,i,e))||!(a!==0||!oa(t,r,i))||!(o!==0||!oa(t,e,i))}function oa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function la(r){return r>0?1:r<0?-1:0}function ns(r,e){return st(r.prev,r,r.next)<0?st(r,e,r.next)>=0&&st(r,r.prev,e)>=0:st(r,e,r.prev)<0||st(r,r.next,e)<0}function bd(r,e){let t=new pc(r.i,r.x,r.y),i=new pc(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Xu(r,e,t,i){let n=new pc(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function rs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function pc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Zi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];ju(e),qu(i,e);let a=e.length;t.forEach(ju);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,qu(i,t[l]);let o=Km(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function ju(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function qu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var fc=class r extends Je{constructor(e=new Fa([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:l0,v,_,T,E,R,b=!1;x&&(v=x.getSpacedPoints(h),b=!0,d=!1,_=x.computeFrenetFrames(h,!1),T=new C,E=new C,R=new C),d||(f=0,p=0,g=0,y=0);let A=o.extractPoints(c),S=A.shape,M=A.holes;if(!Zi.isClockWise(S)){S=S.reverse();for(let G=0,F=M.length;G<F;G++){let z=M[G];Zi.isClockWise(z)&&(M[G]=z.reverse())}}let w=Zi.triangulateShape(S,M),D=S;for(let G=0,F=M.length;G<F;G++){let z=M[G];S=S.concat(z)}function O(G,F,z){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(F,z)}let X=S.length,N=w.length;function V(G,F,z){let P,B,q,se=G.x-F.x,j=G.y-F.y,ne=z.x-G.x,ie=z.y-G.y,oe=se*se+j*j,ge=se*ie-j*ne;if(Math.abs(ge)>Number.EPSILON){let me=Math.sqrt(oe),Me=Math.sqrt(ne*ne+ie*ie),Re=F.x-j/me,He=F.y+se/me,Oe=((z.x-ie/Me-Re)*ie-(z.y+ne/Me-He)*ne)/(se*ie-j*ne);P=Re+se*Oe-G.x,B=He+j*Oe-G.y;let Se=P*P+B*B;if(Se<=2)return new ae(P,B);q=Math.sqrt(Se/2)}else{let me=!1;se>Number.EPSILON?ne>Number.EPSILON&&(me=!0):se<-Number.EPSILON?ne<-Number.EPSILON&&(me=!0):Math.sign(j)===Math.sign(ie)&&(me=!0),me?(P=-j,B=se,q=Math.sqrt(oe)):(P=se,B=j,q=Math.sqrt(oe/2))}return new ae(P/q,B/q)}let W=[];for(let G=0,F=D.length,z=F-1,P=G+1;G<F;G++,z++,P++)z===F&&(z=0),P===F&&(P=0),W[G]=V(D[G],D[z],D[P]);let Q=[],$,k=W.concat();for(let G=0,F=M.length;G<F;G++){let z=M[G];$=[];for(let P=0,B=z.length,q=B-1,se=P+1;P<B;P++,q++,se++)q===B&&(q=0),se===B&&(se=0),$[P]=V(z[P],z[q],z[se]);Q.push($),k=k.concat($)}for(let G=0;G<f;G++){let F=G/f,z=p*Math.cos(F*Math.PI/2),P=g*Math.sin(F*Math.PI/2)+y;for(let B=0,q=D.length;B<q;B++){let se=O(D[B],W[B],P);ue(se.x,se.y,-z)}for(let B=0,q=M.length;B<q;B++){let se=M[B];$=Q[B];for(let j=0,ne=se.length;j<ne;j++){let ie=O(se[j],$[j],P);ue(ie.x,ie.y,-z)}}}let K=g+y;for(let G=0;G<X;G++){let F=d?O(S[G],k[G],K):S[G];b?(E.copy(_.normals[0]).multiplyScalar(F.x),T.copy(_.binormals[0]).multiplyScalar(F.y),R.copy(v[0]).add(E).add(T),ue(R.x,R.y,R.z)):ue(F.x,F.y,0)}for(let G=1;G<=h;G++)for(let F=0;F<X;F++){let z=d?O(S[F],k[F],K):S[F];b?(E.copy(_.normals[G]).multiplyScalar(z.x),T.copy(_.binormals[G]).multiplyScalar(z.y),R.copy(v[G]).add(E).add(T),ue(R.x,R.y,R.z)):ue(z.x,z.y,u/h*G)}for(let G=f-1;G>=0;G--){let F=G/f,z=p*Math.cos(F*Math.PI/2),P=g*Math.sin(F*Math.PI/2)+y;for(let B=0,q=D.length;B<q;B++){let se=O(D[B],W[B],P);ue(se.x,se.y,u+z)}for(let B=0,q=M.length;B<q;B++){let se=M[B];$=Q[B];for(let j=0,ne=se.length;j<ne;j++){let ie=O(se[j],$[j],P);b?ue(ie.x,ie.y+v[h-1].y,v[h-1].x+z):ue(ie.x,ie.y,u+z)}}}function te(G,F){let z=G.length;for(;--z>=0;){let P=z,B=z-1;B<0&&(B=G.length-1);for(let q=0,se=h+2*f;q<se;q++){let j=X*q,ne=X*(q+1);U(F+P+j,F+B+j,F+B+ne,F+P+ne)}}}function ue(G,F,z){l.push(G),l.push(F),l.push(z)}function pe(G,F,z){L(G),L(F),L(z);let P=n.length/3,B=m.generateTopUV(i,n,P-3,P-2,P-1);H(B[0]),H(B[1]),H(B[2])}function U(G,F,z,P){L(G),L(F),L(P),L(F),L(z),L(P);let B=n.length/3,q=m.generateSideWallUV(i,n,B-6,B-3,B-2,B-1);H(q[0]),H(q[1]),H(q[3]),H(q[1]),H(q[2]),H(q[3])}function L(G){n.push(l[3*G+0]),n.push(l[3*G+1]),n.push(l[3*G+2])}function H(G){s.push(G.x),s.push(G.y)}(function(){let G=n.length/3;if(d){let F=0,z=X*F;for(let P=0;P<N;P++){let B=w[P];pe(B[2]+z,B[1]+z,B[0]+z)}F=h+2*f,z=X*F;for(let P=0;P<N;P++){let B=w[P];pe(B[0]+z,B[1]+z,B[2]+z)}}else{for(let F=0;F<N;F++){let z=w[F];pe(z[2],z[1],z[0])}for(let F=0;F<N;F++){let z=w[F];pe(z[0]+X*h,z[1]+X*h,z[2]+X*h)}}i.addGroup(G,n.length/3-G,0)})(),(function(){let G=n.length/3,F=0;te(D,F),F+=D.length;for(let z=0,P=M.length;z<P;z++){let B=M[z];te(B,F),F+=B.length}i.addGroup(G,n.length/3-G,1)})()}this.setAttribute("position",new Ae(n,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Oa[n.type]().fromJSON(n)),new r(i,e.options)}},l0={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new ae(s,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],g=e[3*n+2],y=e[3*s],f=e[3*s+1],x=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-u),new ae(d,1-g),new ae(y,1-x)]:[new ae(o,1-l),new ae(h,1-u),new ae(p,1-g),new ae(f,1-x)]}},mc=class r extends _n{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},gc=class r extends _n{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},vc=class r extends Je{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new C,g=new ae;for(let y=0;y<=n;y++){for(let f=0;f<=i;f++){let x=s+f/i*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<n;y++){let f=y*(i+1);for(let x=0;x<i;x++){let m=x+f,v=m,_=m+i+1,T=m+i+2,E=m+1;o.push(v,_,E),o.push(_,T,E)}}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},xc=class r extends Je{constructor(e=new Fa([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=n.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;Zi.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,x=g.length;f<x;f++){let m=g[f];Zi.isClockWise(m)===!0&&(g[f]=m.reverse())}let y=Zi.triangulateShape(p,g);for(let f=0,x=g.length;f<x;f++){let m=g[f];p=p.concat(m)}for(let f=0,x=p.length;f<x;f++){let m=p[f];n.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let f=0,x=y.length;f<x;f++){let m=y[f],v=m[0]+u,_=m[1]+u,T=m[2]+u;i.push(v,_,T),l+=3}}this.setIndex(i),this.setAttribute("position",new Ae(n,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},$t=class r extends Je{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,p=[],g=[],y=[],f=[];for(let x=0;x<=i;x++){let m=[],v=x/i,_=0;x===0&&a===0?_=.5/t:x===i&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(n+E*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(n+E*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),f.push(E+_,1-v),m.push(c++)}h.push(m)}for(let x=0;x<i;x++)for(let m=0;m<t;m++){let v=h[x][m+1],_=h[x][m],T=h[x+1][m],E=h[x+1][m+1];(x!==0||a>0)&&p.push(v,_,E),(x!==i-1||l<Math.PI)&&p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(y,3)),this.setAttribute("uv",new Ae(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},yc=class r extends _n{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},zt=class r extends Je{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){let y=g/n*s,f=p/i*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(y),u.y=(e+t*Math.cos(f))*Math.sin(y),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){let y=(n+1)*p+g-1,f=(n+1)*(p-1)+g-1,x=(n+1)*(p-1)+g,m=(n+1)*p+g;a.push(y,f,m),a.push(f,x,m)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},_c=class r extends Je{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new C,d=new C,p=new C,g=new C,y=new C,f=new C,x=new C;for(let v=0;v<=i;++v){let _=v/i*s*Math.PI*2;m(_,s,a,e,p),m(_+.01,s,a,e,g),f.subVectors(g,p),x.addVectors(g,p),y.crossVectors(f,x),x.crossVectors(y,f),y.normalize(),x.normalize();for(let T=0;T<=n;++T){let E=T/n*Math.PI*2,R=-t*Math.cos(E),b=t*Math.sin(E);u.x=p.x+(R*x.x+b*y.x),u.y=p.y+(R*x.y+b*y.y),u.z=p.z+(R*x.z+b*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(T/n)}}for(let v=1;v<=i;v++)for(let _=1;_<=n;_++){let T=(n+1)*(v-1)+(_-1),E=(n+1)*v+(_-1),R=(n+1)*v+_,b=(n+1)*(v-1)+_;o.push(T,E,b),o.push(E,R,b)}function m(v,_,T,E,R){let b=Math.cos(v),A=Math.sin(v),S=T/_*v,M=Math.cos(S);R.x=E*(2+M)*.5*b,R.y=E*(2+M)*A*.5,R.z=E*Math.sin(S)*.5}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Mc=class r extends Je{constructor(e=new Na(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new ae,h=new C,u=[],d=[],p=[],g=[];function y(f){h=e.getPointAt(f/t,h);let x=a.normals[f],m=a.binormals[f];for(let v=0;v<=n;v++){let _=v/n*Math.PI*2,T=Math.sin(_),E=-Math.cos(_);l.x=E*x.x+T*m.x,l.y=E*x.y+T*m.y,l.z=E*x.z+T*m.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)y(f);y(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let x=0;x<=n;x++)c.x=f/t,c.y=x/n,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let x=1;x<=n;x++){let m=(n+1)*(f-1)+(x-1),v=(n+1)*f+(x-1),_=(n+1)*f+x,T=(n+1)*(f-1)+x;g.push(m,v,T),g.push(v,_,T)}})()})(),this.setIndex(g),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Oa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Sc=class extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new C,s=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,g=d+u.count;p<g;p+=3)for(let y=0;y<3;y++){let f=o.getX(p+y),x=o.getX(p+(y+1)%3);n.fromBufferAttribute(a,f),s.fromBufferAttribute(a,x),Yu(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Yu(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Yu(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Pg=Object.freeze({__proto__:null,BoxGeometry:gt,CapsuleGeometry:ts,CircleGeometry:xi,ConeGeometry:cc,CylinderGeometry:Nt,DodecahedronGeometry:hc,EdgesGeometry:uc,ExtrudeGeometry:fc,IcosahedronGeometry:mc,LatheGeometry:oi,OctahedronGeometry:gc,PlaneGeometry:ht,PolyhedronGeometry:_n,RingGeometry:vc,ShapeGeometry:xc,SphereGeometry:$t,TetrahedronGeometry:yc,TorusGeometry:zt,TorusKnotGeometry:_c,TubeGeometry:Mc,WireframeGeometry:Sc});var $e=class extends Fi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},en=class extends $e{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ca(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function c0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var dr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bc=class extends dr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case jh:s=e,o=2*t-i;break;case qh:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:a=e,l=2*i-t;break;case qh:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),y=g*g,f=y*g,x=-d*f+2*d*y-d*g,m=(1+d)*f+(-1.5-2*d)*y+(-.5+d)*g+1,v=(-1-p)*f+(1.5+p)*y+.5*g,_=p*f-p*y;for(let T=0;T!==o;++T)s[T]=x*a[h+T]+m*a[c+T]+v*a[l+T]+_*a[u+T];return s}},wc=class extends dr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Ec=class extends dr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},ai=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ca(t,this.TimeBufferType),this.values=ca(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ca(e.times,Array),values:ca(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case Ol:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&c0(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===bo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let g=t[h+p];if(g!==t[u+p]||g!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ai.prototype.TimeBufferType=Float32Array,ai.prototype.ValueBufferType=Float32Array,ai.prototype.DefaultInterpolation=Ol;var gn=class extends ai{constructor(e,t,i){super(e,t,i)}};gn.prototype.ValueTypeName="bool",gn.prototype.ValueBufferType=Array,gn.prototype.DefaultInterpolation=ga,gn.prototype.InterpolantFactoryMethodLinear=void 0,gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends ai{};Tc.prototype.ValueTypeName="color";var Ac=class extends ai{};Ac.prototype.ValueTypeName="number";var Rc=class extends dr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ba=class extends ai{InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName="quaternion",Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var vn=class extends ai{constructor(e,t,i){super(e,t,i)}};vn.prototype.ValueTypeName="string",vn.prototype.ValueBufferType=Array,vn.prototype.DefaultInterpolation=ga,vn.prototype.InterpolantFactoryMethodLinear=void 0,vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends ai{};Cc.prototype.ValueTypeName="vector";var Pc=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},h0=new Pc,Ic=class{constructor(e){this.manager=e!==void 0?e:h0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(n,s){i.load(e,n,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var ss=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ka=class extends ss{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},il=new Te,$u=new C,Zu=new C,za=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ju=new Te,zr=new C,nl=new C,Lc=class extends za{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),i.position.copy(zr),nl.copy(i.position),nl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(nl),i.updateMatrixWorld(),n.makeTranslation(-zr.x,-zr.y,-zr.z),Ju.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}},Sn=class extends ss{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Lc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Uc=class extends za{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ha=class extends ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Uc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Va=class extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Ig=new Te,Lg=new Te,Ug=new Te;var Dg=new C,Ng=new Wt,Og=new C,Fg=new C;var Bg=new C,kg=new Wt,zg=new C,Hg=new C;var Wc="\\[\\]\\.:\\/",u0=new RegExp("["+Wc+"]","g"),rl="[^"+Wc+"]",d0="[^"+Wc.replace("\\.","")+"]",p0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",rl)+/(WCOD+)?/.source.replace("WCOD",d0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rl)+"$"),f0=["material","materials","bones","map"],nt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(e){let t=p0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);f0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=class{constructor(r,e,t){let i=t||nt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray],nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vg=new Float32Array(1);var Ku=new Te,Zt=class{constructor(e,t,i=0,n=1/0){this.ray=new yn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ku.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(e,t=!0,i=[]){return Dc(e,this,i,t),i.sort(Qu),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Dc(e[n],this,i,t);return i.sort(Qu),i}};function Qu(r,e){return r.distance-e.distance}function Dc(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Dc(s[a],e,t,!0)}}var Gg=new ae;var Wg=new C,Xg=new C;var jg=new C;var qg=new C,Yg=new Te,$g=new Te;var Zg=new C,Jg=new be,Kg=new be;var Qg=new C,ev=new C,tv=new C;var iv=new C,nv=new Zr;var rv=new Xt;var sv=new C;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Xc={x:.86,z:.52},jc={x:.245,z:.172};var Ve=-.45,cv=new C(0,Ve+.12,-2.72),tt=-2.8;function ls(r,e,t,i){let n=document.createElement("canvas");n.width=r,n.height=e,t(n.getContext("2d"),r,e);let s=new It(n);return s.colorSpace=lt,s.anisotropy=8,i&&(s.wrapS=s.wrapT=Xr,s.repeat.set(...i)),s}var Ya=r=>()=>(r=r*16807%2147483647)/2147483647;function mr(r=5,e=[112,76,46]){return ls(1024,1024,t=>{let i=Ya(r);for(let n=0;n<5;n++){let s=n*205,a=i()*22-11;t.fillStyle=`rgb(${e[0]+a},${e[1]+a*.8},${e[2]+a*.6})`,t.fillRect(s,0,205,1024);for(let o=0;o<90;o++){let l=s+i()*205,c=4+i()*10,h=i()*6,u=.5+i()*2;t.strokeStyle=`rgba(${i()<.6?"48,26,12":"160,112,72"},${.06+i()*.14})`,t.lineWidth=u,t.beginPath();for(let d=0;d<=1024;d+=32)t.lineTo(l+Math.sin(d/170+h)*c,d);t.stroke()}t.fillStyle="rgba(24,12,5,.55)",t.fillRect(s,0,2.5,1024)}},[1,1])}var m0=()=>ls(512,512,r=>{let e=Ya(11);r.fillStyle="#3a2a22",r.fillRect(0,0,512,512);for(let t=0;t<16;t++)for(let i=-1;i<8;i++){let n=i*64+t%2*32,s=t*32,a=e()*34-17;r.fillStyle=`rgb(${112+a},${80+a*.7},${66+a*.6})`,r.fillRect(n+2,s+2,60,28);for(let o=0;o<14;o++)r.fillStyle=`rgba(${e()<.5?"30,14,8":"190,120,84"},${e()*.16})`,r.fillRect(n+2+e()*56,s+2+e()*26,2+e()*8,1+e()*3)}},[1,1]),g0=()=>ls(1024,640,(r,e,t)=>{let i=["#5f1f20","#1f2b40","#a5854f","#b9ab8c","#3a5040","#83432a"];r.fillStyle=i[0],r.fillRect(0,0,e,t);let n=(a,o,l,c,h)=>{r.fillStyle=h;for(let u=0;u<c;u++){let d=l*(c-u),p=l;r.fillRect(a-d,o-(u+1)*p,d*2,p),r.fillRect(a-d,o+u*p,d*2,p)}};r.fillStyle=i[1],r.fillRect(34,34,e-68,t-68),r.fillStyle=i[0],r.fillRect(84,84,e-168,t-168);for(let a=60;a<e-40;a+=48)for(let o of[59,t-59])n(a,o,6,3,i[(a/48|0)%2?2:3]);for(let a=108;a<t-90;a+=48)for(let o of[59,e-59])n(o,a,6,3,i[(a/48|0)%2?2:3]);for(let a=0;a<3;a++){let o=e*(.24+a*.26);[[12,i[1]],[10,i[2]],[8,i[5]],[6,i[3]],[4,i[4]],[2,i[2]]].forEach(([l,c])=>n(o,t/2,14,l,c))}for(let a=0;a<4;a++)for(let o of[128,t-128])n(e*(.11+a*.26),o,7,4,i[a%2?2:4]);let s=Ya(3);for(let a=0;a<t;a+=2)r.fillStyle=`rgba(0,0,0,${.03+s()*.09})`,r.fillRect(0,a,e,1)}),wd=`
float h2(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n2(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
`,qa=class{constructor(e,t){this.group=new ct,e.add(this.group);let i=S=>new $e({roughness:.85,fog:!1,...S}),n=(S,M,w,D,O,X,N,V=!1)=>{let W=new xe(new gt(S,M,w),N);return W.position.set(D,O,X),W.castShadow=V,W.receiveShadow=!0,this.group.add(W),W},s=mr(17,[84,56,36]);s.repeat.set(5,5);let a=new xe(new ht(10,8),i({map:s,roughness:.55}));a.rotation.x=-Math.PI/2,a.position.set(0,Ve,0),this.group.add(a);let o=new xe(new ht(10,4),i({color:"#5a4636",roughness:.95}));o.position.set(0,Ve+2,tt),this.group.add(o);let l=i({color:"#3a2819"});for(let S of[-1,1])n(4.2,.62,.03,S*2.75,Ve+.31,tt+.015,l),n(4.2,.03,.05,S*2.75,Ve+.635,tt+.025,l);let c=mr();c.repeat.set(1.3,1.3);let h=i({map:c,roughness:.5,envMap:t,envMapIntensity:.25,fog:!0}),u=i({color:"#3c2413",roughness:.6}),d=Xc.x*2+.1,p=Xc.z*2+.1,g=new xe(new ht(d,p),h);g.rotation.x=-Math.PI/2,g.position.y=-5e-4,g.receiveShadow=!0,this.group.add(g),n(d+.012,.045,p+.012,0,-.0235,0,u);for(let S of[-1,1])for(let M of[-1,1])n(.05,-Ve,.05,S*(d/2-.07),Ve/2-.02,M*(p/2-.07),u);let y=new xe(new ht(jc.x*2,jc.z*2),i({map:ls(1024,720,(S,M,w)=>{S.fillStyle="#2b3a30",S.fillRect(0,0,M,w);let D=Ya(9);for(let O=0;O<5200;O++)S.fillStyle=`rgba(${D()<.5?"0,0,0":"150,190,160"},${D()*.05})`,S.beginPath(),S.arc(D()*M,D()*w,1+D()*4,0,7),S.fill();S.strokeStyle="#b08d46",S.lineWidth=4,S.strokeRect(22,22,M-44,w-44),S.lineWidth=1.5,S.strokeRect(31,31,M-62,w-62)}),roughness:.62,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,fog:!0}));y.rotation.x=-Math.PI/2,y.position.y=0,y.receiveShadow=!0,this.group.add(y),this.pad=y;let f=new xe(new ht(1.7,.8),i({map:g0(),roughness:1}));f.rotation.x=-Math.PI/2,f.position.set(0,Ve+.004,-1.86),this.group.add(f);let x=m0(),m=i({map:x}),v=i({map:x,color:"#4a3a32"}),_=i({color:"#8d8175",roughness:.8}),T=i({color:"#4d301a",roughness:.6});n(.3,.86,.26,-.5,Ve+.43,tt+.13,m),n(.3,.86,.26,.5,Ve+.43,tt+.13,m),n(.7,.24,.26,0,Ve+.74,tt+.13,m),n(1.44,.06,.36,0,Ve+.89,tt+.17,T),n(1.1,2.4,.16,0,Ve+2.12,tt+.08,m),n(1.4,.05,.56,0,Ve+.025,tt+.28,_),n(.72,.62,.01,0,Ve+.31,tt+.012,v),n(.7,.02,.26,0,Ve+.06,tt+.13,v);let E=new $e({color:"#c79a45",metalness:.9,roughness:.3,envMap:t,fog:!1}),R=new xe(new Nt(.07,.07,.04,32).rotateX(Math.PI/2),T);R.position.set(0,Ve+.995,tt+.17),this.group.add(R);let b=new xe(new xi(.058,32),i({color:"#efe6d2"}));b.position.set(0,Ve+.995,tt+.192),this.group.add(b);let A=S=>{let M=new dt,w=new xe(new ht(.005,S).translate(0,S/2,0),i({color:"#2a1c12"}));return w.position.z=.002,M.add(w),M.position.copy(b.position),this.group.add(M),M};this.hands=[A(.032),A(.047)],this.flames=[];for(let S of[-.5,.5]){let M=new xe(new oi([[.001,0],[.04,0],[.04,.008],[.012,.02],[.009,.1],[.02,.11],[.02,.118],[.001,.118]].map(([D,O])=>new ae(D,O)),20),E);M.position.set(S,Ve+.92,tt+.17),this.group.add(M);let w=new xe(new Nt(.011,.012,.12,14),i({color:"#f0e6d0",roughness:.6}));w.position.set(S,Ve+1.1,tt+.17),this.group.add(w)}this.logs(i),this.fire(),this.light=new Sn("#ff9a55",0,6,.75),this.light.position.set(0,Ve+.5,tt+.7),e.add(this.light),this.lit=!0,this.heat=1,this.t=0,this.flicker=1,this.body=[this.group.children.find(S=>S.material===v),...this.flames]}logs(e){let t=e({color:"#2a1a10",roughness:1});this.glow={value:1},this.time={value:0},t.onBeforeCompile=a=>{Object.assign(a.uniforms,{uGlow:this.glow,uTime:this.time}),a.vertexShader=a.vertexShader.replace("void main() {",`varying vec3 vAt;
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
vAt = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("void main() {",`varying vec3 vAt; uniform float uGlow, uTime; ${wd}void main() {`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float c = fbm(vAt.xy * 34.0 + vAt.zx * 21.0); float e = smoothstep(0.56, 0.74, c) * (0.6 + 0.4 * sin(uTime * 1.7 + c * 30.0)) + 0.35 * smoothstep(0.02, -0.04, vAt.y - ${(Ve+.12).toFixed(3)});
          totalEmissiveRadiance += vec3(1.0, 0.27, 0.04) * e * uGlow * 0.6; }`)};let i=(a,o,l,c,h,u,d)=>{let p=new xe(new Nt(o,o*1.08,a,14).rotateZ(Math.PI/2),t);p.position.set(l,c,h),p.rotation.set(0,u,d),this.group.add(p)},n=Ve+.1;i(.44,.035,-.01,n,tt+.2,.05,0),i(.42,.032,.02,n,tt+.1,-.08,0),i(.4,.03,0,n+.055,tt+.15,.35,.12),i(.33,.026,.03,n+.09,tt+.14,-.5,-.2);let s=new xe(new $t(.27,24,8,0,Math.PI*2,0,Math.PI/2),e({color:"#3a322c",roughness:1}));s.scale.set(1,.1,.38),s.position.set(0,Ve+.065,tt+.15),this.group.add(s)}fire(){this.uni={uTime:this.time,uHeat:{value:1}};let e=i=>new qt({transparent:!0,depthWrite:!1,blending:bn,side:yi,uniforms:{...this.uni,uSeed:{value:i}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime, uHeat, uSeed; ${wd}
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
        }`});for(let[i,n,s,a,o]of[[.2,.5,.46,1,0],[.15,.56,.52,2.3,0],[.1,.5,.48,4.1,0],[.15,.4,.4,6.2,.6],[.15,.4,.4,8.4,-.6]]){let l=new xe(new ht(n,s).translate(0,s/2,0),e(a));l.position.set(0,Ve+.075,tt+i),l.rotation.y=o,l.renderOrder=2,this.group.add(l),this.flames.push(l)}let t=new xe(new ht(2.6,1.5).rotateX(-Math.PI/2),new mt({map:ls(128,128,i=>{let n=i.createRadialGradient(64,20,0,64,20,64);n.addColorStop(0,"rgba(255,150,60,.55)"),n.addColorStop(1,"rgba(255,90,20,0)"),i.fillStyle=n,i.fillRect(0,0,128,128)}),transparent:!0,blending:bn,depthWrite:!1,fog:!1}));t.position.set(0,Ve+.008,tt+.95),t.renderOrder=1,t.raycast=()=>{},this.group.add(t),this.halo=t}hit(e){let t=new Zt(e.origin,e.direction),i=t.intersectObjects(this.body)[0];return i?i.distance:null}poke(e){if(!this.lit){this.lit=!0;return}this.gust=1;for(let t of[-.1,0,.1])e.puff(t,Ve+.2,tt+.18,14,{color:"#ffb04a",speed:.09,rise:.42,up:-.05,life:1.4,wide:.1})}update(e,t,i,n){this.t+=e,this.time.value=this.t%1e3,this.gust=Math.max(0,(this.gust||0)-e*.7),this.heat+=((this.lit?1:0)-this.heat)*(1-Math.exp(-e*1.4));let s=Math.sin(this.t*9.1)*.4+Math.sin(this.t*5.3+1)*.6+Math.sin(this.t*14.7+2)*.3;this.flicker+=(1+s*.12+(Math.random()-.5)*.14-this.flicker)*(1-Math.exp(-e*14));let a=this.heat*(1+this.gust*.35);this.uni.uHeat.value=a,this.glow.value=.12+.88*this.heat,this.light.intensity=(t?1.9:1.25)*a*this.flicker,this.halo.material.opacity=.3*a*this.flicker;for(let o of this.flames)o.visible=this.heat>.02;n&&this.heat>.5&&Math.random()<e*5&&i.puff((Math.random()-.5)*.24,Ve+.2,tt+.2,1,{color:"#ffa640",speed:.05,rise:.4,up:.02,life:1.6,wide:.05}),n&&!((this.tick=(this.tick||0)+1)%60)&&this.clock(),this.set||(this.set=!0,this.clock())}clock(){let e=new Date,t=e.getMinutes()+e.getSeconds()/60;this.hands[0].rotation.z=-(e.getHours()%12+t/60)*(Math.PI/6),this.hands[1].rotation.z=-t*(Math.PI/30)}};function Ed(r){let e=new hr,t=a=>new mt({color:a,side:yi});e.add(new xe(new gt(10,6,10),new mt({color:"#2a1d13",side:Nc})));let i=(a,o,l,c,h,u,d)=>{let p=t(l);p.color.multiplyScalar(c);let g=new xe(new ht(a,o),p);g.position.set(h,u,d),g.lookAt(0,0,0),e.add(g)};i(1.2,2,"#dfe9ff",5,-4,1.6,1.5),i(1.2,2,"#dfe9ff",5,-4,1.6,3),i(1.4,1.4,"#ffe3b0",9,.6,2.9,-.6),i(1.6,1,"#ff7a2a",5,0,-.6,-4.5),i(8,8,"#3a2718",1,0,-2.8,.01);let n=new cr(r),s=n.fromScene(e,.03).texture;return n.dispose(),e.traverse(a=>{a.geometry&&(a.geometry.dispose(),a.material.dispose())}),s}var qc=.004166666666666667,$a=class{constructor({n:e=18,depth:t=1.6,hz:i=2.6,damping:n=2.2,viscosity:s=.03,rim:a=.42}={}){this.n=e,this.dx=2/e,this.rim=a,this.damping=n,this.viscosity=s;let o=Math.tanh(1.841*t),l=2*Math.PI*i;this.g=l*l/(1.841*o),this.H=o/1.841;let c=e*e;this.h=new Float64Array(c),this.mask=new Uint8Array(c),this.u=new Float64Array((e+1)*e),this.v=new Float64Array(e*(e+1)),this.openU=new Uint8Array(this.u.length),this.openV=new Uint8Array(this.v.length),this.u2=new Float64Array(this.u.length),this.v2=new Float64Array(this.v.length),this.cells=0;for(let h=0;h<e;h++)for(let u=0;u<e;u++){let d=-1+(u+.5)*this.dx,p=-1+(h+.5)*this.dx;d*d+p*p<1&&(this.mask[h*e+u]=1,this.cells++)}for(let h=0;h<e;h++)for(let u=1;u<e;u++)this.openU[h*(e+1)+u]=this.mask[h*e+u]&this.mask[h*e+u-1];for(let h=1;h<e;h++)for(let u=0;u<e;u++)this.openV[h*e+u]=this.mask[h*e+u]&this.mask[(h-1)*e+u];this.lost=0,this.left=0,this.calm=!0}step(e,t=0,i=0,n=0){if((t||i||n)&&(this.calm=!1),this.calm)return[];this.left=Math.min(this.left+e,.1);let s=[];for(;this.left>=qc;)this.left-=qc,this.sub(qc,t,i,n,s);return!t&&!i&&!n&&this.energy()<4e-5&&Math.abs(this.lost)<.001&&(this.calm=!0,this.u.fill(0),this.v.fill(0),this.h.fill(0),this.lost=0),s}sub(e,t,i,n,s){let{n:a,dx:o,h:l,u:c,v:h,openU:u,openV:d,mask:p,u2:g,v2:y,H:f}=this,x=this.g*Math.max(.15,Math.min(2.5,1+n)),m=Math.exp(-this.damping*e),v=this.viscosity*e/(o*o),_=a+1;for(let A=0;A<a;A++)for(let S=1;S<a;S++){let M=A*_+S;if(!u[M]){g[M]=0;continue}let w=A>0&&u[M-_]?c[M-_]:c[M],D=A<a-1&&u[M+_]?c[M+_]:c[M];g[M]=(c[M]+v*(c[M-1]+c[M+1]+w+D-4*c[M])-e*(x*(l[A*a+S]-l[A*a+S-1])/o+t))*m}for(let A=1;A<a;A++)for(let S=0;S<a;S++){let M=A*a+S;if(!d[M]){y[M]=0;continue}let w=S>0&&d[M-1]?h[M-1]:h[M],D=S<a-1&&d[M+1]?h[M+1]:h[M];y[M]=(h[M]+v*(h[M-a]+h[M+a]+w+D-4*h[M])-e*(x*(l[M]-l[M-a])/o+i))*m}this.u=g,this.u2=c,this.v=y,this.v2=h;let T=e/o,E=.24,R=(A,S,M)=>{let w=A>0?S:M,D=f+l[w];return Math.max(-E*D,Math.min(E*D,T*A*D))},b=this.dh=this.dh||new Float64Array(a*a);b.fill(0);for(let A=0;A<a;A++)for(let S=1;S<a;S++){let M=A*_+S;if(!u[M])continue;let w=A*a+S-1,D=R(g[M],w,w+1);b[w]-=D,b[w+1]+=D}for(let A=1;A<a;A++)for(let S=0;S<a;S++){let M=A*a+S;if(!d[M])continue;let w=M-a,D=R(y[M],w,M);b[w]-=D,b[M]+=D}for(let A=0;A<l.length;A++)if(p[A]&&(l[A]+=b[A],l[A]>this.rim)){let S=-1+(A%a+.5)*o,M=-1+(Math.floor(A/a)+.5)*o,w=Math.hypot(S,M);w>.72&&(s.push({x:S/w,z:M/w,amount:l[A]-this.rim}),this.lost+=l[A]-this.rim,l[A]=this.rim)}if(this.lost>0){let A=Math.min(this.lost,this.cells*.05*e);this.lost-=A;for(let S=0;S<l.length;S++)p[S]&&(l[S]+=A/this.cells)}}drop(e,t,i,n=.3){let{n:s,dx:a,h:o,mask:l,H:c}=this,h=0,u=new Float64Array(o.length);for(let d=0;d<o.length;d++)if(l[d]){let p=-1+(d%s+.5)*a-e,g=-1+(Math.floor(d/s)+.5)*a-t,y=(p*p+g*g)/(n*n);u[d]=i*Math.exp(-y)*(1-y),h+=u[d]}for(let d=0;d<o.length;d++)l[d]&&(o[d]=Math.max(-.9*c,o[d]-u[d]+h/this.cells));this.calm=!1}energy(){let e=0,{h:t,u:i,v:n,g:s,H:a}=this;for(let o=0;o<t.length;o++)this.mask[o]&&(e+=s*t[o]*t[o]);for(let o of i)e+=a*o*o;for(let o of n)e+=a*o*o;return e/(this.cells*s)}volume(){let e=0;for(let t=0;t<this.h.length;t++)this.mask[t]&&(e+=this.h[t]);return e+this.lost}at(e,t){let{n:i,dx:n,h:s,mask:a}=this,o=Math.hypot(e,t),l=o>.93?.93/o:1,c=(e*l+1)/n-.5,h=(t*l+1)/n-.5,u=Math.floor(c),d=Math.floor(h),p=0,g=0;for(let y=0;y<2;y++)for(let f=0;f<2;f++){let x=u+f,m=d+y;if(x<0||m<0||x>=i||m>=i||!a[m*i+x])continue;let v=(f?c-u:1-c+u)*(y?h-d:1-h+d)+1e-6;p+=s[m*i+x]*v,g+=v}return g?p/g:0}},Za=class{constructor(e,{scale:t=.085,most:i=.42}={}){this.g=e,this.scale=t,this.most=i,this.p=null,this.v=[0,0,0],this.s=[0,0,0]}move(e,t){let i=[0,0,0];if(!this.p||t<=0)return this.p=e,{ax:0,az:0,lift:0};let n=1-Math.exp(-t/.05),s=Math.hypot(e[0]-this.p[0],e[1]-this.p[1],e[2]-this.p[2])>60;for(let h=0;h<3;h++){let u=s?0:(e[h]-this.p[h])/t,d=this.s[h]+(u-this.s[h])*n;i[h]=(d-this.s[h])/t*this.scale,this.s[h]=d}this.p=e;let a=this.most*this.g,o=Math.hypot(i[0],i[2]),l=o>0?a*Math.tanh(o/a)/o:0,c=this.g*.002;return{ax:o<c?0:i[0]*l,az:o<c?0:i[2]*l,lift:Math.abs(i[1])<c?0:.8*Math.tanh(i[1]/this.g)}}};var Yc=null;function v0(){if(Yc)return Yc;let r=96,e=document.createElement("canvas");e.width=e.height=r;let t=e.getContext("2d",{willReadFrequently:!0}),i=t.createImageData(r,r),n=(a,o)=>{let l=Math.sin(a*127.1+o*311.7)*43758.5453;return l-Math.floor(l)},s=(a,o)=>{let l=Math.floor(a),c=Math.floor(o),h=a-l,u=o-c,d=h*h*(3-2*h),p=u*u*(3-2*u);return(n(l,c)*(1-d)+n(l+1,c)*d)*(1-p)+(n(l,c+1)*(1-d)+n(l+1,c+1)*d)*p};for(let a=0;a<r;a++)for(let o=0;o<r;o++){let l=o/r*2-1,c=a/r*2-1,h=Math.min(1,Math.hypot(l,c)),u=s(l*1.6+5,c*1.6+9),d=.55*s(l*2.6+u*2,c*2.2+u)+.3*s(l*5.2+u*3,c*4.6)+.15*s(l*11,c*10),p=Math.max(0,1-h*h)**1.6*Math.max(0,d*1.9-.42);i.data.set([255,255,255,Math.round(255*Math.min(1,p))],(a*r+o)*4)}return t.putImageData(i,0,0),Yc=new It(e)}var gr=class{constructor(e,t,{wide:i=.045,rise:n=.5,count:s=13,size:a=.12}={}){Object.assign(this,{y:t,wide:i,rise:n,size:a,strength:1}),this.puffs=Array.from({length:s},(o,l)=>{let c=new Ca(new Jr({map:v0(),color:"#fff6ea",transparent:!0,opacity:0,depthWrite:!1,fog:!1}));c.renderOrder=5,c.raycast=()=>{},e.add(c);let h={s:c,age:l/s};return this.born(h),h})}born(e){let t=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*this.wide;Object.assign(e,{off:[Math.cos(t)*i,Math.sin(t)*i],lag:[0,0],turn:Math.random()*6.28,spin:(Math.random()-.5)*1.6,life:2.2+Math.random()*1.6})}update(e,t=0,i=0){for(let n of this.puffs){n.age+=e/n.life,n.age>=1&&(n.age%=1,this.born(n)),n.lag[0]=Math.max(-.7,Math.min(.7,n.lag[0]-t)),n.lag[1]=Math.max(-.7,Math.min(.7,n.lag[1]-i));let s=n.age,a=.05*s*s,o=n.s;o.position.set(n.off[0]*(1-s*.6)+Math.sin(n.turn+s*6)*a+n.lag[0],this.y+s*this.rise,n.off[1]*(1-s*.6)+Math.cos(n.turn*1.3+s*5)*a+n.lag[1]),o.scale.set(this.size*(.6+s*1.5),this.size*(.8+s*2.1),1),o.material.rotation=n.turn+s*n.spin,o.material.opacity=.34*this.strength*Math.sin(Math.PI*s**.7)*(1-.35*s)}}};var x0=[[.06,0],[.084,.01],[.1,.042],[.104,.082],[.094,.126],[.075,.168],[.065,.204],[.067,.236],[.08,.28],[.098,.324],[.113,.368]],y0=new ur(x0.map(([r,e])=>new ae(r,e))),us=y0.getPoints(60),cs=.25,_0=.006,hs=.026,Zc=.312,wn=.017,$c=.364,ds=r=>{let e=1;for(;e<us.length-1&&us[e].y<r;)e++;let t=us[e-1],i=us[e],n=Math.max(0,Math.min(1,(r-t.y)/(i.y-t.y||1)));return t.x+(i.x-t.x)*n-_0},M0=ds(Zc),li=56,ps=16,vr=9,S0=5,Td=r=>r*r*(3-2*r);function b0(r){let e=li+1,t=e*(ps+1)+1+li*vr,i=new Float32Array(t*3),n=[];for(let h=0;h<ps;h++)for(let u=0;u<li;u++){let d=h*e+u;n.push(d,d+e,d+1,d+1,d+e,d+e+1)}let s=e*(ps+1),a=(h,u)=>s+1+(h-1)*li+u%li;for(let h=0;h<li;h++)n.push(s,a(1,h+1),a(1,h));for(let h=1;h<vr;h++)for(let u=0;u<li;u++)n.push(a(h,u),a(h,u+1),a(h+1,u),a(h,u+1),a(h+1,u+1),a(h+1,u));let o=new Je;o.setAttribute("position",new at(i,3).setUsage(os)),o.setIndex(n);let l=new en({color:"#7a1604",roughness:.1,specularIntensity:.6,envMap:r,envMapIntensity:.6,side:yi});l.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("void main() {",`varying vec3 vTea, vUp;
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
      totalEmissiveRadiance += through * vec3(0.42, 0.32, 0.26) * (0.3 + 0.7 * pow(1.0 - face, 1.5)); }`)};let c=new xe(o,l);return c.castShadow=!0,c.frustumCulled=!1,c}function w0(){let r=document.createElement("canvas");r.width=r.height=128;let e=r.getContext("2d");for(let[n,s,a,o]of[[64,64,60,.5],[70,70,26,.75],[60,74,12,.6]]){let l=e.createRadialGradient(n,s,0,n,s,a);l.addColorStop(0,`rgba(255,150,60,${o})`),l.addColorStop(.45,`rgba(214,84,18,${o*.5})`),l.addColorStop(1,"rgba(150,30,0,0)"),e.fillStyle=l,e.fillRect(0,0,128,128)}e.strokeStyle="rgba(255,214,150,.75)",e.lineWidth=2.2,e.filter="blur(1.5px)",e.beginPath(),e.arc(66,66,34,.2,1.9),e.stroke(),e.beginPath(),e.arc(58,60,22,.1,1.6),e.stroke();let t=new It(r);t.colorSpace=lt;let i=new xe(new ht(.3,.3).rotateX(-Math.PI/2),new mt({map:t,transparent:!0,blending:bn,depthWrite:!1,opacity:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return i.renderOrder=1,i.raycast=()=>{},i}var fs=class{constructor(e,t,i,n,s=0){this.scene=e,this.home=new C(i,0,n);let a=this.group=new ct,o=this.cup=new ct;a.position.copy(this.home),a.scale.setScalar(cs),a.rotation.y=s,e.add(a),a.add(o);let l=x=>new en({envMap:t,...x}),c=(x,m,v=0,_=0,T=0,E=a)=>{let R=new xe(x,m);return R.position.set(v,_,T),R.castShadow=R.receiveShadow=!0,E.add(R),R},h=l({color:"#f6f2ea",roughness:.28,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:.5});c(new oi([[.001,0],[.1,0],[.16,.012],[.205,.034],[.21,.04],[.2,.038],[.15,.022],[.1,.016],[.001,.016]].map(([x,m])=>new ae(x,m)),64),h);for(let[x,m,v,_,T]of[[.188,.0345,.0045,"#a3201c",0],[.173,.0298,.0016,"#d9a441",.8],[.205,.0392,.0022,"#d9a441",.8]])c(new zt(x,v,6,72).rotateX(Math.PI/2),l({color:_,roughness:.3,metalness:T}),0,m).castShadow=!1;let u=new en({color:"#f4fbff",roughness:.02,metalness:0,clearcoat:1,clearcoatRoughness:.02,envMap:t,envMapIntensity:1.5,transparent:!0,side:yi,depthWrite:!1});u.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <opaque_fragment>",`diffuseColor.a = mix(0.05, 0.8, pow(1.0 - abs(dot(normalize(vViewPosition), normal)), 2.4));
#include <opaque_fragment>`)};let d=c(new oi([new ae(.001,0),...us],64),u,0,wn,0,o);d.renderOrder=3,d.castShadow=!1;let p=l({color:"#ffffff",roughness:.05,clearcoat:1,transparent:!0,opacity:.7,depthWrite:!1});for(let[x,m,v]of[[.1115,.368,.0036],[.07,.006,.0046]]){let _=c(new zt(x,v,8,64).rotateX(Math.PI/2),p,0,wn+m,0,o);_.renderOrder=4,_.castShadow=!1}let g=l({color:"#dfe5ea",metalness:1,roughness:.16,envMapIntensity:1.2});c(new ts(.0062,.16,4,8),g,.02,.041,.152).rotation.set(0,.1,Math.PI/2-.05),c(new $t(.024,16,10),g,-.085,.039,.145).scale.set(1.5,.4,.9);let f=l({color:"#ffffff",roughness:.85,envMapIntensity:.2});for(let[x,m,v]of[[.145,.045,.3],[.15,-.03,.9]])c(new gt(.036,.024,.026),f,x,.034,m).rotation.y=v;this.sim=new $a({rim:.5,n:20}),this.carry=new Za(this.sim.g),this.tea=b0(t),this.tea.position.y=wn,o.add(this.tea),this.spot=w0(),this.spot.position.set(.11,.044,.1),a.add(this.spot),this.steam=new gr(a,wn+Zc+.03),this.drops=[],this.bead=new $t(.0027,8,6),this.stream=new xe(new Nt(.009,.006,1,10,1,!0).translate(0,.5,0),this.tea.material),this.stream.visible=!1,a.add(this.stream),this.left=1,this.shown=-1,this.lift=0,this.held=null,this.sip=-1,this.filling=-1,this.was=this.home.clone(),this.lean=[0,0],this.P=new C,this.pour(),this.body=new xe(new Nt(.23,.23,.42,12),new mt({visible:!1})),this.body.position.y=.21,a.add(this.body)}get level(){return hs+.03+(Zc-hs-.03)*this.left}pour(){let e=this.tea,t=this.sim,i=this.level,n=ds(i),s=e.geometry.attributes.position,a=s.array,o=hs+.008,l=(h,u)=>Math.max(o,Math.min($c,i+t.at(h,u)*n)),c=0;for(let h=0;h<=ps;h++)for(let u=0;u<=li;u++){let d=u/li*Math.PI*2,p=Math.cos(d),g=Math.sin(d),y=hs+(l(p,g)-hs)*(h/ps),f=Math.max(.001,ds(y));a[c++]=p*f,a[c++]=y,a[c++]=g*f}a[c++]=0,a[c++]=l(0,0),a[c++]=0;for(let h=1;h<=vr;h++)for(let u=0;u<li;u++){let d=u/li*Math.PI*2,p=h/vr,g=Math.cos(d),y=Math.sin(d),f=l(g*p,y*p),x=h===vr?l(g,y):f,m=ds(l(g,y))*p;a[c++]=g*m,a[c++]=x+(h===vr?.002:0),a[c++]=y*m}s.needsUpdate=!0,e.geometry.computeVertexNormals(),this.shown=this.left}hit(e){let t=new Zt(e.origin,e.direction);this.body.updateWorldMatrix(!0,!1),this.body.material.visible=!0;let i=t.intersectObject(this.body)[0];return this.body.material.visible=!1,i?i.distance:null}hold(e,t){this.held=this.held||new C,this.held.set(e,0,t)}drop(e,t){this.held=null,this.home.set(e,0,t)}drink(){return this.held||this.sip>=0||this.filling>=0?null:this.left<.08?(this.filling=0,"pour"):(this.sip=0,"sip")}jolt(e=1){this.sim.drop((Math.random()-.5)*.8,(Math.random()-.5)*.8,.02*e,.4)}update(e){let t=this.group,i=this.sim,n=this.held?1:0,s=0;if(this.sip>=0){this.sip+=e/1.9;let m=this.sip,v=m<.3?Td(m/.3):m>.72?Td(Math.max(0,(1-m)/.28)):1;s=m>.3&&m<.72?Math.sin((m-.3)/.42*Math.PI):0,s>0&&(this.left=Math.max(0,this.left-e/(1.9*.42)/S0)),this.cup.position.set(0,v*.42,v*.3),m>=1&&(this.sip=-1,this.cup.position.set(0,0,0),this.left<.02&&(this.left=0))}if(this.filling>=0){this.filling+=e/2.6;let m=this.filling>.06&&this.filling<.94;if(this.stream.visible=m,m){let v=wn+this.level;this.stream.position.set(0,v,0),this.stream.scale.y=1.6,this.left=Math.min(1,this.left+e/(2.6*.88)),Math.random()<e*22&&i.drop((Math.random()-.5)*.25,(Math.random()-.5)*.25,.05,.25)}this.filling>=1&&(this.filling=-1,this.left=1)}this.lift+=(n-this.lift)*(1-Math.exp(-e*10));let a=this.held||this.home,o=1-Math.exp(-e*16);t.position.x+=(a.x-t.position.x)*o,t.position.z+=(a.z-t.position.z)*o,t.position.y=this.lift*.02;let l=s*.75,c=Math.cos(t.rotation.y),h=Math.sin(t.rotation.y);this.cup.rotation.set(l,0,0),this.cup.getWorldPosition(this.P);let u=M0*cs,d=this.carry.move([this.P.x/u,this.P.y/u,this.P.z/u],e),p=i.calm,g=l>.01?i.g*Math.tan(Math.min(.5,l*.62)):0;i.rim=Math.max(.2,($c-this.level)/ds(this.level));let y=i.step(e,d.ax*c-d.az*h,d.ax*h+d.az*c-g,d.lift);(!p||!i.calm||this.shown!==this.left)&&this.pour();let f=(t.position.x-this.was.x)/cs,x=(t.position.z-this.was.z)/cs;if(this.was.copy(t.position),this.steam.y=wn+this.level+.03,this.steam.strength+=((this.left>.06?.45+.55*this.left:0)-this.steam.strength)*(1-Math.exp(-e*2)),this.steam.update(e,f*c-x*h,f*h+x*c),this.spot.material.opacity=(.22+.45*this.left)*(1-.6*this.lift)*(1+2.5*i.at(.4,.3))*this.glow,this.spot.position.x=.11+i.at(.6,0)*.08,this.spot.position.z=.1+i.at(0,.6)*.08,y.length&&this.left>.7){y.sort((m,v)=>v.amount-m.amount);for(let m of y.slice(0,2))if(this.drops.length<14){let v=new xe(this.bead,this.tea.material),_=.09+Math.random()*.1;v.position.set(this.P.x+(m.x*c+m.z*h)*.028,this.P.y+(wn+$c)*cs,this.P.z+(-m.x*h+m.z*c)*.028),v.userData.v=[(m.x*c+m.z*h)*_,.12+Math.random()*.12,(-m.x*h+m.z*c)*_],v.scale.setScalar(.6+Math.random()*.7),this.scene.add(v),this.drops.push(v)}}for(let m=this.drops.length-1;m>=0;m--){let v=this.drops[m],_=v.userData.v;if(v.userData.wet){v.userData.wet-=e,v.material.opacity=Math.min(.8,v.userData.wet*.2),v.userData.wet<=0&&(this.scene.remove(v),v.material.dispose(),this.drops.splice(m,1));continue}_[1]-=2.2*e,v.position.x+=_[0]*e,v.position.y+=_[1]*e,v.position.z+=_[2]*e,v.position.y<.001&&(v.position.y=6e-4,v.scale.set(v.scale.x*2,.12,v.scale.z*1.8),v.material=new $e({color:"#4a1a06",roughness:.15,transparent:!0}),v.userData.wet=14)}}};fs.prototype.glow=1;var ms=[[1e-4,.0045],[.0165,.0045],[.0175,0],[.0205,8e-4],[.0235,.008],[.028,.024],[.031,.04],[.0325,.051],[.033,.0535]],Ka=[[.031,.0525],[.0305,.045],[.028,.03],[.0235,.014],[.018,.0085],[1e-4,.0075]],Ad=.012,E0=.0455,T0=4,Jc=r=>r*r*(3-2*r),Ja=(r,e=48)=>new oi(r.map(([t,i])=>new ae(t,i)),e),A0=r=>{for(let e=1;e<Ka.length;e++){let[t,i]=Ka[e-1],[n,s]=Ka[e];if(r<=i&&r>=s)return n+(t-n)*(r-s)/(i-s||1)}return .018};function R0(){let e=document.createElement("canvas");e.width=e.height=512;let t=e.getContext("2d"),i=512/2,n=t.createRadialGradient(i,i,0,i,i,i);n.addColorStop(0,"#9a6b45"),n.addColorStop(.62,"#8c5d39"),n.addColorStop(.86,"#6f4527"),n.addColorStop(.97,"#3e2414"),n.addColorStop(1,"#2a170c"),t.fillStyle=n,t.fillRect(0,0,512,512);let s=7,a=()=>(s=s*16807%2147483647)/2147483647;for(let l=0;l<5200;l++){let c=a()*6.283,h=Math.sqrt(a())*i*.94,u=i+Math.cos(c)*h,d=i+Math.sin(c)*h,p=.6+a()*a()*(h>i*.75?3.4:1.8);t.fillStyle=a()<.55?`rgba(196,150,108,${.25+a()*.35})`:`rgba(70,40,20,${.2+a()*.3})`,t.beginPath(),t.arc(u,d,p,0,6.283),t.fill()}let o=new It(e);return o.colorSpace=lt,o.anisotropy=4,o}function C0(r,e,t,i){let n=new gt(r,e,t,6,6,6),s=n.attributes.position,a=new C,o=new C,l=[r/2-i,e/2-i,t/2-i];for(let c=0;c<s.count;c++)a.fromBufferAttribute(s,c),o.set(Math.max(-l[0],Math.min(l[0],a.x)),Math.max(-l[1],Math.min(l[1],a.y)),Math.max(-l[2],Math.min(l[2],a.z))),a.sub(o).normalize().multiplyScalar(i).add(o),s.setXYZ(c,a.x,a.y,a.z);return n.computeVertexNormals(),n}var gs=class{constructor(e,t,i,n,s=0){this.scene=e,this.home=new C(i,0,n);let a=this.group=new ct,o=this.cup=new ct;a.position.copy(this.home),a.rotation.y=s,e.add(a),a.add(o);let l=v=>new en({envMap:t,...v}),c=(v,_,T=a)=>{let E=new xe(v,_);return E.castShadow=E.receiveShadow=!0,T.add(E),E},h=l({color:"#f7f3ec",roughness:.26,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:.5}),u=l({color:"#a3201c",roughness:.3}),d=l({color:"#e3b453",roughness:.25,metalness:.6,envMapIntensity:1.2});c(Ja([[1e-4,0],[.03,0],[.045,.004],[.058,.0095],[.0605,.011],[.058,.0108],[.044,.0062],[.026,.0046],[1e-4,.0046]],64),h);for(let[v,_,T,E]of[[.0545,.0094,.0012,u],[.0603,.0108,7e-4,d]])c(new zt(v,T,6,64).rotateX(Math.PI/2),E).position.y=_;let p=.0047,g=c(Ja(ms),h,o);g.position.y=p;let y=c(Ja(Ka),l({color:"#efe8dc",roughness:.3,side:yi}),o);y.position.y=p;let f=(v,_,T)=>{let E=[];for(let b=0;b<=6;b++){let A=v+(_-v)*b/6,S=1;for(;S<ms.length-1&&ms[S][1]<A;)S++;let[M,w]=ms[S-1],[D,O]=ms[S];E.push([M+(D-M)*(A-w)/(O-w||1)+25e-5,A])}let R=c(Ja(E,56),T,o);R.position.y=p,R.castShadow=!1};c(new zt(.0321,.0011,8,64).rotateX(Math.PI/2),h,o).position.y=p+.0532,f(.0505,.0528,d),f(.0355,.046,u),f(.0335,.0348,d);let x=c(new zt(.0105,.0026,10,28,Math.PI*1.1),h,o);x.position.set(.028,p+.027,0),x.rotation.z=-Math.PI*.55,this.grounds=c(new xi(.018,32).rotateX(-Math.PI/2),l({color:"#2a170b",roughness:.95,side:yi}),o),this.grounds.position.y=p+.0082,this.top=c(new xi(1,48).rotateX(-Math.PI/2),l({map:R0(),roughness:.55,transparent:!0}),o),this.top.castShadow=!1;let m=l({color:"#f4d3da",roughness:1,sheen:1,sheenColor:"#ffffff",sheenRoughness:.9,envMapIntensity:.15});for(let[v,_,T,E]of[[-.039,.022,.5,.011],[-.026,.038,-.3,.0105]]){let R=c(C0(.0135,E,.0135,.0022),m);R.position.set(v,.0047+E/2+3e-4,_),R.rotation.y=T}this.steam=new gr(a,.06,{wide:.012,rise:.09,count:9,size:.03}),this.left=1,this.lift=0,this.held=null,this.sip=-1,this.filling=-1,this.wobble=0,this.t=0,this.body=new xe(new Nt(.06,.06,.07,12),new mt({visible:!1})),this.body.position.y=.035,a.add(this.body),this.seat=p,this.show()}get level(){return Ad+(E0-Ad)*this.left}show(){let e=this.level,t=A0(e);this.top.position.y=this.seat+e,this.top.scale.set(t,1,t),this.top.material.opacity=this.left>.02?1:0,this.top.visible=this.left>.02,this.top.material.color.setScalar(.35+.65*Math.min(1,this.left*1.6))}hit(e){let t=new Zt(e.origin,e.direction);this.body.updateWorldMatrix(!0,!1),this.body.material.visible=!0;let i=t.intersectObject(this.body)[0];return this.body.material.visible=!1,i?i.distance:null}hold(e,t){this.held=this.held||new C,this.held.set(e,0,t)}drop(e,t){this.held=null,this.home.set(e,0,t)}drink(){return this.held||this.sip>=0||this.filling>=0?null:this.left<.05?(this.filling=0,"pour"):(this.sip=0,"sip")}jolt(e=1){this.wobble=Math.min(1,this.wobble+.5*e)}update(e){let t=this.group;this.t+=e;let i=0;if(this.sip>=0){this.sip+=e/1.9;let h=this.sip,u=h<.3?Jc(h/.3):h>.72?Jc(Math.max(0,(1-h)/.28)):1;i=h>.3&&h<.72?Math.sin((h-.3)/.42*Math.PI):0,i>0&&(this.left=Math.max(0,this.left-e/(1.9*.42)/T0)),this.cup.position.set(0,u*.1,u*.075),h>=1&&(this.sip=-1,this.cup.position.set(0,0,0),this.left<.03&&(this.left=0))}this.filling>=0&&(this.filling+=e/2.2,this.left=Math.min(1,Jc(Math.min(1,this.filling))),this.filling>=1&&(this.filling=-1,this.left=1)),this.cup.rotation.set(i*.7,0,Math.sin(this.t*19)*.004*this.wobble),this.wobble=Math.max(0,this.wobble-e*1.5),this.lift+=((this.held?1:0)-this.lift)*(1-Math.exp(-e*10));let n=this.held||this.home,s=1-Math.exp(-e*16),a=(n.x-t.position.x)*s,o=(n.z-t.position.z)*s;t.position.x+=a,t.position.z+=o,t.position.y=this.lift*.02,this.show();let l=Math.cos(t.rotation.y),c=Math.sin(t.rotation.y);this.steam.y=this.seat+this.level+.008,this.steam.strength+=((this.left>.05?.4+.4*this.left:0)-this.steam.strength)*(1-Math.exp(-e*2)),this.steam.update(e,-(a*l-o*c),-(a*c+o*l))}};gs.prototype.glow=1;var Rd=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Kc={night:{value:0},time:{value:0},fire:{value:1},pen:{value:new C(9,9,0)},wave:{value:new C(9,9,9)}};function Cd(r){Rd||(Kc.time.value=(Kc.time.value+r)%2e3,Kc.wave.value.z+=r)}var Bi=260,Qa=class{constructor(e){this.p=new Float32Array(Bi*3),this.c=new Float32Array(Bi*3),this.v=new Float32Array(Bi*3),this.age=new Float32Array(Bi).fill(9),this.life=new Float32Array(Bi).fill(1),this.up=new Float32Array(Bi),this.hue=Array.from({length:Bi},()=>new be);let t=new Je;t.setAttribute("position",this.pa=new at(this.p,3).setUsage(os)),t.setAttribute("color",this.ca=new at(this.c,3).setUsage(os)),this.o=new Ia(t,new Kr({size:.0016,vertexColors:!0,transparent:!0,depthWrite:!1,blending:bn,fog:!1})),this.o.frustumCulled=!1,this.o.renderOrder=6,this.o.visible=!1,this.o.raycast=()=>{},e.add(this.o),this.next=0,this.any=0}puff(e,t,i,n,{color:s="#ffd98a",speed:a=.05,rise:o=.04,up:l=-.12,life:c=.8,wide:h=.001}={}){if(!Rd){for(let u=0;u<n;u++){let d=this.next=(this.next+1)%Bi,p=Math.random()*6.283,g=a*(.3+Math.random());this.p.set([e+(Math.random()-.5)*h,t,i+(Math.random()-.5)*h],d*3),this.v.set([Math.cos(p)*g,o*(.4+Math.random()),Math.sin(p)*g],d*3),this.age[d]=0,this.life[d]=c*(.5+Math.random()*.8),this.up[d]=l,this.hue[d].set(s)}this.any=2.5,this.o.visible=!0}}update(e){if(this.o.visible){if(this.any-=e,this.any<0){this.o.visible=!1;return}for(let t=0;t<Bi;t++){let i=t*3,n=(this.age[t]+=e)/this.life[t];if(n>=1){this.c[i]=this.c[i+1]=this.c[i+2]=0;continue}let s=Math.exp(-e*2.5);for(let l=0;l<3;l++)this.v[i+l]*=s,this.p[i+l]+=this.v[i+l]*e;this.v[i+1]+=this.up[t]*e;let a=(1-n)*(.55+.45*Math.sin(this.age[t]*40+t)),o=this.hue[t];this.c[i]=o.r*a,this.c[i+1]=o.g*a,this.c[i+2]=o.b*a}this.pa.needsUpdate=this.ca.needsUpdate=!0}}};var Qc=(r,e,t)=>Math.max(e,Math.min(t,r)),En=new C(-1.55,Ve,-2.62),xr=new C(1.5,Ve,-2.5),eo=class{constructor(e){this.canvas=e,this.touch=matchMedia("(pointer: coarse)").matches;let t=this.renderer=new Ta({canvas:e,antialias:!0,powerPreference:"high-performance"});t.toneMapping=td,t.shadowMap.enabled=!0,t.shadowMap.type=ed,this.scene=new hr,this.scene.background=new be("#1d140d"),this.scene.fog=new Aa("#1d140d",2.8,7.5),this.camera=new Pt(32,1,.02,16),this.env=Ed(t),this.sky=new ka("#fff4e2","#6b4c33",1.75),this.scene.add(this.sky);let i=this.key=new Ha("#fff0d6",1.6);i.position.set(-.5,1.2,-.45),i.castShadow=!0,i.shadow.mapSize.set(this.touch?2048:3072,this.touch?2048:3072),i.shadow.radius=5,i.shadow.bias=-4e-4,i.shadow.normalBias=.002,Object.assign(i.shadow.camera,{left:-.98,right:.98,top:.75,bottom:-.75,near:.2,far:2.6}),this.scene.add(i),this.lamp=new Sn("#ffe9c4",0,5,1.2),this.scene.add(this.lamp),this.pianoLamp=new Sn("#ffe2b0",1.1,2.6,1.4),this.pianoLamp.position.set(xr.x-.3,.95,xr.z+.7),this.scene.add(this.pianoLamp),this.hearth=new qa(this.scene,this.env),this.hearth.pad.visible=!1,this.dust=new Qa(this.scene),this.teas=[new fs(this.scene,this.env,.74,-.36,.4),new gs(this.scene,this.env,-.76,.38,-.3)],this.at="desk",this.reading=null,this.pose=null,this.from=null,this.way=1,this.pan={x:0,y:0},this.panGoal={x:0,y:0},this.zoom=1,this.zoomGoal=1,this.frustum=new Qi,this.hearthBox=new Xt(new C(-.8,Ve,-2.8),new C(.8,.6,-1.5)),this.resize(),addEventListener("resize",()=>this.resize())}resize(){let e=innerWidth,t=innerHeight,i=this.touch?3e6:9e6,n=Math.min(devicePixelRatio||1,2);e*t*n*n>i&&(n=Math.sqrt(i/(e*t))),this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}go(e,t=null){this.at=e,this.reading=t,this.panGoal={x:0,y:0},this.zoomGoal=1}perPixel(){let e=this.pose?this.pose.P.distanceTo(this.pose.L):2;return 2*Math.tan(this.camera.fov*Math.PI/360)*e/innerHeight}panBy(e,t){let i=this.perPixel(),n=this.panGoal;n.x+=e*i,n.y+=t*i;let s=this.at==="read"&&this.reading?{x:this.reading.w/2,y:this.reading.h/2}:this.at==="desk"?{x:.9,y:.6}:{x:.8,y:.6};n.x=Qc(n.x,-s.x,s.x),n.y=Qc(n.y,-s.y,s.y)}zoomBy(e,t,i){let n=this.zoomGoal;this.zoomGoal=Qc(this.zoomGoal*e,this.at==="read"?.2:.35,this.at==="read"?1.15:1.6);let s=1-this.zoomGoal/n;if((this.at==="read"||this.at==="desk")&&t!==void 0){let a=this.ray(t,i).ray;if(a.direction.y>-1e-5)return;let o=-a.origin.y/a.direction.y,l=a.origin.x+a.direction.x*o,c=a.origin.z+a.direction.z*o,h=this.pose?this.pose.L:new C;this.panGoal.x+=(l-h.x)*s,this.panGoal.y+=(c-h.z)*s}}target(){let e=this.pan,t=this.zoom,i=this.base();if(this.at==="shelf"||this.at==="piano"||this.at==="room"){let n=new C(e.x,-e.y,0);i.L.add(n),i.P.add(n)}else{let n=new C(e.x,0,e.y);i.L.add(n),i.P.add(n)}return i.P.sub(i.L).multiplyScalar(t).add(i.L),i}base(){let e=(o,l,c)=>new C(o,l,c),t=Math.tan(this.camera.fov*Math.PI/360),i=this.camera.aspect,n=o=>o/(t*i);if(this.at==="shelf"){let o=e(En.x,En.y+1.3,En.z),l=Math.max(.6/t,n(.6));return{P:e(o.x+.05,o.y+.05,o.z+l),L:o,up:e(0,1,0)}}if(this.at==="piano"){let o=e(xr.x,.32,xr.z+.33),l=Math.max(.55/t,n(.7));return{P:o.clone().addScaledVector(e(-.05,.62,.78).normalize(),l),L:o,up:e(0,1,0)}}if(this.at==="room"){let o=e(0,.1,-1.4);return{P:e(0,.95,2.2),L:o,up:e(0,1,0)}}if(this.at==="read"&&this.reading){let o=this.reading,l=o.center,c=o.w/2+.01,h=o.h/2+.01,u=Math.max(h/t,c/(t*i));return{P:e(l.x,u,l.z+1e-4),L:e(l.x,0,l.z),up:e(0,0,-1)}}let s=e(0,-.05,-.05),a=Math.max(2.1,n(.92));return{P:s.clone().addScaledVector(e(0,.62,.79).normalize(),a),L:s,up:e(0,1,0)}}place(e,t=e){let i=1-Math.exp(-Math.min(.1,t)*14);this.pan.x+=(this.panGoal.x-this.pan.x)*i,this.pan.y+=(this.panGoal.y-this.pan.y)*i,this.zoom+=(this.zoomGoal-this.zoom)*i;let n=this.target();if(this.going!==this.at+(this.reading?this.reading.name:"")&&(this.from=this.pose,this.going=this.at+(this.reading?this.reading.name:""),this.way=this.from?0:1),this.way=Math.min(1,this.way+Math.min(.25,t)/1),this.way<1&&this.from){let s=this.way*this.way*(3-2*this.way);n.P.lerpVectors(this.from.P,n.P,s),n.L.lerpVectors(this.from.L,n.L,s),n.up.lerpVectors(this.from.up,n.up,s).normalize()}this.pose=n,this.camera.position.copy(n.P),this.camera.up.copy(n.up),this.camera.lookAt(n.L),this.camera.updateMatrixWorld(),this.lamp.position.set(En.x+.6,1.4,En.z+1.2),this.lamp.intensity+=((this.at==="shelf"?3.4:.9)-this.lamp.intensity)*(1-Math.exp(-e*4))}get seesFire(){return this.frustum.intersectsBox(this.hearthBox)}live(e){Cd(e),this.frustum.setFromProjectionMatrix(new Te().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse));let t=this.seesFire;this.hearth.update(e,!1,this.dust,t),this.pet&&(this.pet.group.visible=t,t&&this.pet.update(e));for(let i of this.teas)i.update(e);this.dust.update(e)}ray(e,t){let i=new Zt;return i.setFromCamera(new ae(e/innerWidth*2-1,1-t/innerHeight*2),this.camera),i}render(){this.renderer.render(this.scene,this.camera)}};var Pd=["#6e2a24","#24405e","#2f5a3a","#6a5124","#4a2d5c","#7a3e1c","#2a4f55","#5a2b3c"];function P0(r,e,t,i,n){let s=document.createElement("canvas");s.width=128,s.height=Math.round(128*n/i);let a=s.getContext("2d");a.fillStyle=t,a.fillRect(0,0,s.width,s.height),a.fillStyle="rgba(0,0,0,.25)",a.fillRect(0,0,8,s.height),a.fillRect(s.width-8,0,8,s.height),a.strokeStyle="#d8b56a",a.lineWidth=3;for(let l of[26,34,s.height-34,s.height-26])a.beginPath(),a.moveTo(10,l),a.lineTo(s.width-10,l),a.stroke();a.save(),a.translate(s.width/2,s.height/2),a.rotate(-Math.PI/2),a.fillStyle="#ecd59a",a.textAlign="center",a.textBaseline="middle",a.font=`600 ${Math.round(s.width*.3)}px Georgia, serif`,a.fillText(r,0,-s.width*.13,s.height-90),a.font=`${Math.round(s.width*.2)}px Georgia, serif`,a.fillText(e,0,s.width*.2,s.height-90),a.restore();let o=new It(s);return o.colorSpace=lt,o.anisotropy=8,o}var to=class{constructor(e){this.group=new ct,this.group.position.copy(En),e.add(this.group),this.books=[],this.picked=null;let t=mr(23,[92,60,36]),i=new $e({map:t,roughness:.6}),n=new $e({color:"#2e1d10",roughness:.8}),s=(o,l,c,h,u,d,p=i)=>{let g=new xe(new gt(o,l,c),p);return g.position.set(h,u,d),g.castShadow=g.receiveShadow=!0,this.group.add(g),g};this.W=1,this.H=1.9;let a=.3;s(this.W,this.H,.02,0,this.H/2,-a/2,n);for(let o of[-this.W/2,this.W/2])s(.03,this.H,a,o,this.H/2,0);this.boards=[.05,.52,.99,1.46,1.88];for(let o of this.boards)s(this.W,.025,a,0,o,0)}fill(e){for(let s of this.books)this.group.remove(s.mesh),s.mesh.geometry.dispose();this.books=[];let t=14,i=.05,n=s=>Math.floor(s/t);e.forEach((s,a)=>{let o=n(a),l=.32+a*37%7*.012,c=-this.W/2+.06+a%t*(i+.012),h=this.boards[3-Math.min(3,o)]+.013+l/2,u=s.user?"#3b3b3b":Pd[a%Pd.length],d=P0(s.title,s.sub,u,i,l),p=new $e({color:u,roughness:.7}),g=new $e({color:"#efe6cf",roughness:.9}),y=new xe(new gt(i,l,.22),[p,p,g,g,new $e({map:d,roughness:.6}),p]);y.position.set(c+i/2,h,.02),y.rotation.z=a*13%5===0?.03:0,y.castShadow=!0,y.userData.book=s,this.group.add(y),this.books.push({...s,mesh:y,home:y.position.clone()})})}hit(e){let t=e.intersectObjects(this.books.map(i=>i.mesh))[0];return t?t.object.userData.book:null}hover(e){for(let t of this.books)t.mesh.position.z+=((t.id===(e&&e.id)?.06:.02)-t.mesh.position.z)*.3}};var Id=[0,2,4,5,7,9,11],Ld=21,Ud=108,io=class{constructor(e,t){this.group=new ct,this.group.position.copy(xr),e.add(this.group);let i=mr(41,[52,30,18]);i.repeat.set(1.5,1.5);let n=new $e({map:i,color:"#6b4a34",roughness:.35,envMap:t,envMapIntensity:.5}),s=new $e({color:"#141010",roughness:.3,envMap:t,envMapIntensity:.6}),a=(f,x,m,v,_,T,E=n)=>{let R=new xe(new gt(f,x,m),E);return R.position.set(v,_,T),R.castShadow=R.receiveShadow=!0,this.group.add(R),R},o=1.48,l=.72,c=.34;a(o,1.26,c,0,.63,0),a(o+.02,.04,c+.04,0,1.28,.005);for(let f of[-o/2+.03,o/2-.03])a(.06,l+.06,.34,f,(l+.06)/2,c/2+.17),a(.05,.62,.05,f,.31,c/2+.3);a(o,.05,.3,0,l-.04,c/2+.15),a(o-.12,.09,.03,0,l+.05,c/2+.01,s),a(.58,.3,.012,0,l+.36,c/2+.02),a(.62,.02,.05,0,l+.21,c/2+.035);let h=new $e({color:"#c79a45",metalness:.9,roughness:.3,envMap:t});for(let f of[-.42,.42]){let x=new xe(new Nt(.02,.012,.05,12),h);x.position.set(f,l+.5,c/2+.04),this.group.add(x)}this.keys=new Map;let u=[];for(let f=Ld;f<=Ud;f++)Id.includes(f%12)&&u.push(f);let d=(o-.14)/u.length,p=new $e({color:"#f3ecdc",roughness:.4}),g=new $e({color:"#1a1614",roughness:.35}),y=-(o-.14)/2;for(let f=Ld;f<=Ud;f++){let x=Id.includes(f%12),m=new dt,v,_;if(x){let T=u.indexOf(f);v=y+(T+.5)*d,_=new xe(new gt(d*.94,.022,.15).translate(0,0,.075),p.clone())}else{let T=u.indexOf(f-1);v=y+(T+1)*d,_=new xe(new gt(d*.58,.022,.095).translate(0,0,.0475),g.clone()),_.position.y=.016}_.castShadow=!0,_.userData.midi=f,m.position.set(v,l,c/2+.03),m.add(_),this.group.add(m),this.keys.set(f,{pivot:m,mesh:_,down:0,goal:0,white:x,base:_.material.color.clone(),tint:null})}this.meshes=[...this.keys.values()].map(f=>f.mesh)}press(e,t,i=null){let n=this.keys.get(e);n&&(n.goal=t?1:0,t&&(n.tint=i))}release(){for(let e of this.keys.values())e.goal=0}hit(e){let t=e.intersectObjects(this.meshes)[0];return t?t.object.userData.midi:null}update(e){for(let t of this.keys.values()){t.down+=(t.goal-t.down)*(1-Math.exp(-e*(t.goal?40:18))),t.pivot.rotation.x=t.down*.075;let i=t.mesh.material.color;i.copy(t.base),t.tint&&t.down>.02&&i.lerp(new be(t.tint),(t.white?.55:.75)*Math.min(1,t.down*1.5))}}};var yr=class{constructor(e,t,i,n,s,a,o=0,l=[2048,1448]){this.name=t,this.w=i,this.h=n,this.center=new C(s,0,a),this.regions=[],this.canvas=document.createElement("canvas"),[this.canvas.width,this.canvas.height]=l,this.tex=new It(this.canvas),this.tex.colorSpace=lt,this.tex.anisotropy=8,this.mesh=new xe(new ht(i,n),new $e({map:this.tex,emissiveMap:this.tex,emissive:"#ffffff",emissiveIntensity:.22,roughness:.92,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.mesh.rotation.x=-Math.PI/2,this.mesh.rotation.z=o,this.mesh.position.set(s,.0015,a),this.mesh.receiveShadow=!0,this.mesh.userData.sheet=this,e.add(this.mesh),this.cursor=new xe(new ht(.0022,n*.96),new mt({color:"#c0392b",transparent:!0,opacity:.85,depthWrite:!1})),this.cursor.rotation.x=-Math.PI/2,this.cursor.position.set(s,.003,a),this.cursor.visible=!1,this.cursor.renderOrder=3,e.add(this.cursor)}drawn(e){e.canvas!==this.canvas&&(this.canvas=e.canvas,this.tex.image=e.canvas),this.regions=e.regions,this.out=e,this.tex.needsUpdate=!0}at(e){let t=e.intersectObject(this.mesh)[0];return t?{x:t.uv.x*this.canvas.width,y:(1-t.uv.y)*this.canvas.height,dist:t.distance}:null}pick(e){let t=this.regions.filter(n=>e.x>=n.x&&e.x<=n.x+n.w&&e.y>=n.y&&e.y<=n.y+n.h),i={note:0,span:1,time:2};return t.sort((n,s)=>i[n.kind]-i[s.kind]||n.w*n.h-s.w*s.h)[0]||null}mark(e,t=0,i=this.canvas.height){if(e===null){this.cursor.visible=!1;return}let n=e/this.canvas.width-.5,s=(t+i/2)/this.canvas.height-.5;this.cursor.visible=!0,this.cursor.scale.y=i/this.canvas.height/.96,this.cursor.position.set(this.center.x+n*this.w,.003,this.center.z+s*this.h)}};var _r=null,ki=null,Dd=null,Mr=null,Mi={ready:!1,failed:!1,progress:0,onChange:()=>{}};function zi(){return _r||(_r=new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),Mr=_r.createGain(),Mr.gain.value=.8,Mr.connect(_r.destination)),_r}var no=()=>zi().currentTime,Nd=r=>zi().decodeAudioData(r);function Od(){return zi(),Mr}async function vs(){let r=zi();r.state==="suspended"&&await r.resume(),Dd||(Dd=I0().catch(e=>{console.warn("[sound] SoundFont synth unavailable:",e),Mi.failed=!0,Mi.onChange()}))}async function I0(){let r=zi(),e=new URL("./vendor/",import.meta.url),[{WorkletSynthesizer:t},i]=await Promise.all([import("./spessasynth_lib-QSZ7LEC6.js"),L0(new URL("sf/GeneralUserGS.sf3",e)),r.audioWorklet.addModule(new URL("spessasynth/spessasynth_processor.min.js",e))]).then(([s,a])=>[s,a]),n=new t(r);n.connect(Mr),await n.soundBankManager.addSoundBank(i,"main"),await n.isReady,ki=n,Mi.ready=!0,Mi.onChange()}async function L0(r){let e=await fetch(r);if(!e.ok)throw new Error(`${r}: ${e.status}`);let t=Number(e.headers.get("content-length"))||84e5,i=e.body.getReader(),n=[],s=0;for(;;){let{done:l,value:c}=await i.read();if(l)break;n.push(c),s+=c.length,Mi.progress=Math.min(1,s/t),Mi.onChange()}let a=new Uint8Array(s),o=0;for(let l of n)a.set(l,o),o+=l.length;return a.buffer}function br(r,e){ki&&ki.programChange(r,e)}function xs(r,e,t,i){if(ki){ki.noteOn(r,e,t,i!==void 0?{time:i}:void 0);return}U0(e,t,i??zi().currentTime,r)}function ys(r,e,t){if(ki){ki.noteOff(r,e,t!==void 0?{time:t}:void 0);return}let i=Sr.get(`${r}:${e}`);if(i){let n=t??_r.currentTime;i.g.gain.setTargetAtTime(0,n,.08),i.o.stop(n+.6),Sr.delete(`${r}:${e}`)}}function Fd(){ki&&ki.stopAll(!0);for(let r of Sr.values())try{r.o.stop()}catch{}Sr.clear()}var Sr=new Map;function U0(r,e,t,i){let n=zi(),s=n.createOscillator(),a=n.createGain(),o=n.createBiquadFilter();s.type="triangle",s.frequency.value=440*2**((r-69)/12),o.type="lowpass",o.frequency.value=2400,a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(e/127*.22,t+.005),a.gain.setTargetAtTime(e/127*.08,t+.01,.4),s.connect(o).connect(a).connect(Mr),s.start(t);let l=`${i}:${r}`,c=Sr.get(l);if(c)try{c.o.stop(t)}catch{}Sr.set(l,{o:s,g:a})}var D0=.3,ro=class{constructor(){this.s=null,this.ev=[],this.playing=!1,this.pos=0,this.rate=1,this.onEnd=()=>{},this.timer=null,this.recording=null,this.mode="notes"}load(e,t=null){this.stop(),this.s=e,this.recording=t,this.buffer=null,this.mode=t?"recording":"notes";let i=Fh(e),n=new Map,s=0;for(let a of e.parts)a.percussion?n.set(a.id,9):(s===9&&s++,n.set(a.id,s%16),s++);this.channels=n,this.ev=e.notes.map((a,o)=>({n:a,t:i[o].t,d:i[o].d,key:Lh(a.pitch),ch:n.get(a.part)??0,vel:Math.max(20,Math.min(127,a.vel||80))})).sort((a,o)=>a.t-o.t),this.length=Math.max(this.ev.reduce((a,o)=>Math.max(a,o.t+o.d),0),e.audio?e.audio.seconds:0),this.pos=0}async buffered(){return!this.buffer&&this.recording&&(this.buffer=await Nd(await this.recording.arrayBuffer())),this.buffer}get at(){return this.s?Oh(this.s,this.pos):0}seek(e){let t=this.playing;this.pause(),this.pos=Math.max(0,Nh(this.s,{n:Math.round(e*960),d:960})),t&&this.play()}async play(){if(!this.s||this.playing||this.starting)return;this.starting=!0;try{await vs()}finally{this.starting=!1}if(this.playing)return;this.programs(),this.pos>=this.length-.05&&(this.pos=0);let e=null;if(this.mode==="recording")try{e=await this.buffered()}catch(t){console.warn("[player] the recording would not decode:",t),this.mode="notes"}if(!this.playing){if(this.playing=!0,this.t0=no()+.08,this.from=this.pos,e){let t=zi(),i=t.createBufferSource();i.buffer=e,i.playbackRate.value=this.rate,i.connect(Od()),i.start(this.t0,Math.min(this.pos,e.duration)),this.src=i}this.i=this.ev.findIndex(t=>t.t>=this.pos-1e-6),this.i<0&&(this.i=this.ev.length),this.timer=setInterval(()=>this.tick(),40),this.tick()}}programs(){if(this.s)for(let e of this.s.parts)br(this.channels.get(e.id),e.program||0)}tick(){if(!this.playing)return;let e=no(),t=this.from+(e-this.t0)*this.rate;this.pos=Math.max(this.from,t);let i=t+D0*this.rate;for(;this.i<this.ev.length&&this.ev[this.i].t<i;){let n=this.ev[this.i++],s=this.t0+(n.t-this.from)/this.rate,a=s+n.d/this.rate;this.src||(xs(n.ch,n.key,n.vel,Math.max(e,s)),ys(n.ch,n.key,Math.max(e+.02,a-.004)))}t>this.length+.5&&(this.pause(),this.pos=0,this.onEnd())}pause(){if(this.playing&&(this.playing=!1,clearInterval(this.timer),Fd(),this.src)){try{this.src.stop()}catch{}this.src=null}}stop(){this.pause(),this.pos=0}sounding(){if(!this.playing)return[];let e=this.from+(no()-this.t0)*this.rate,t=[];for(let i=Math.max(0,this.i-400);i<this.i;i++){let n=this.ev[i];n.t<=e&&e<n.t+n.d&&t.push(n)}return t}};var le={page:"#f7f2e6",line:"#4a4640",ink:"#2c2821",soft:"#8b8371",pencil:"#9b9284",faint:"#ddd3bd",rule:"#c9bd9f",accent:"#8f2f2a",blue:"#1f3f8f"},Tn={root:"#1f3f8f",chord:"#5a78bf",passing:"#2f7d4c",neighbour:"#b8741a",suspension:"#a8323a",appoggiatura:"#8a2f8a",other:"#8b8371",grace:"#a69c8a"},eh={root:"root",chord:"chord tone",passing:"passing tone",neighbour:"neighbour tone",suspension:"suspension",appoggiatura:"appoggiatura",other:"other tone",grace:"grace note"},Ce='Georgia, "Iowan Old Style", "Times New Roman", serif';function wr(r,e=1){return r?`hsla(${((Dh(r.tonic)*7%12+(r.mode==="minor"?3:0))%12*30+20)%360}, ${r.mode==="minor"?32:48}%, ${r.mode==="minor"?66:76}%, ${e})`:`rgba(200,190,170,${e})`}function Si(r,e){let t=document.createElement("canvas");return t.width=r,t.height=e,t}function ci(r,e,t){r.fillStyle=le.page,r.fillRect(0,0,e,t);let i=7,n=()=>(i=i*16807%2147483647)/2147483647;for(let s=0;s<e*t/900;s++)r.fillStyle=`rgba(${n()<.5?"120,100,70":"255,255,255"},${n()*.05})`,r.fillRect(n()*e,n()*t,1+n()*2,1+n()*2)}function Xe(r,e,t,i,n,s,a=""){r.font=`${a} ${s}px ${Ce}`;let o=r.measureText(e).width;if(o>n){let l=n/o;if(l<.6)return!1;r.font=`${a} ${Math.floor(s*l)}px ${Ce}`}return r.fillText(e,t,i),!0}function kd(r,e,t){let i=r.getContext("2d"),n=r.width,s=r.height;return ci(i,n,s),i.textAlign="center",i.textBaseline="middle",i.fillStyle=le.faint,i.font=`600 ${Math.round(s*.07)}px ${Ce}`,i.fillText(e,n/2,s*.44),i.fillStyle=le.soft,i.font=`italic ${Math.round(s*.035)}px ${Ce}`,i.fillText(t,n/2,s*.56),{canvas:r,regions:[]}}var Ot=(r,e)=>r.source!=="auto"||r.confidence>=(e[r.layer]??.9);var An={w:2400,h:1697};function zd(r,e,t,i={}){r=r||Si(An.w,An.h);let n=r.getContext("2d"),s=r.width,a=r.height,o=[];ci(n,s,a);let l=90,c=230,h=e.bars,u=h.length;n.fillStyle=le.ink,n.textBaseline="alphabetic",n.textAlign="left",Xe(n,e.title||"Untitled",l,110,s-2*l-420,56,"600");let d=(t.form||[])[0];if(n.fillStyle=le.soft,Xe(n,[d?`${d.label}: ${d.data.letters}`:null,e.composer].filter(Boolean).join(" · "),l,165,s-2*l-420,30),n.textAlign="right",n.font=`26px ${Ce}`,n.fillStyle=le.ink,n.fillText("ink: sure   pencil: a guess (touch it)",s-l,110),n.fillStyle=le.soft,n.fillText(`${u} bars · ${(t.key||[]).length} key areas · ${(t.phrase||[]).length} phrases`,s-l,155),!u)return{canvas:r,regions:o};let p=Math.min(8,Math.max(1,Math.ceil(u/14))),g=Math.ceil(u/p),y=(a-c-60)/p,f=(s-2*l)/g,x=ce(h[0].at),m=M=>M+1<u?ce(h[M+1].at):ce(h[M].at)+ce(h[M].dur),v=M=>{let w=h.findIndex((D,O)=>M<m(O)-1e-9);return w<0&&(w=u-1),Math.floor(w/g)},_=(M,w)=>{let D=w*g,O=D;for(;O+1<u&&O+1<D+g&&ce(h[O+1].at)<=M+1e-9;)O++;let X=ce(h[O].at),N=m(O)-X;return l+(O-D)*f+Math.max(0,Math.min(1,(M-X)/N))*f},T=M=>ce(h[M*g].at),E=M=>m(Math.min(u-1,(M+1)*g-1)),R=e.notes.filter(M=>!M.percussion).map(M=>Pr(M.pitch)),b=Math.min(...R),A=Math.max(...R),S=(M,w)=>{let D=ce(M.start),O=ce(M.end);for(let X=v(D);X<=v(Math.max(D,O-1e-6));X++){let N=Math.max(D,T(X)),V=Math.min(O,E(X));V<=N||w(_(N,X),_(V,X)-_(N,X),X,N===D,V===O)}};for(let M=0;M<p&&M*g<u;M++){let w=c+M*y,D={phrase:w+y*.24,key:w+y*.28,harm:w+y*.42,contour:w+y*.6,num:w+y*.95};n.strokeStyle=le.rule,n.lineWidth=1.5,n.fillStyle=le.soft,n.font=`22px ${Ce}`,n.textAlign="left";for(let N=M*g;N<Math.min(u,(M+1)*g);N++){let V=l+(N-M*g)*f;n.beginPath(),n.moveTo(V,D.key),n.lineTo(V,D.num-26),n.stroke(),(N===M*g||h[N].n%4===1||g<=16)&&n.fillText(String(h[N].n),V+3,D.num),o.push({x:V,y:D.key,w:f,h:D.num-D.key,kind:"time",t:ce(h[N].at),bar:h[N].n})}let O=y*.27,X=N=>D.contour+O*(1-(N-b)/Math.max(1,A-b));for(let[N,V,W]of[[Q=>Math.max(...Q),le.ink,2.2],[Q=>Math.min(...Q),le.soft,1.6]]){let Q=new Map;for(let k of e.notes){if(k.percussion||k.grace)continue;let K=ce(k.onset);if(K<T(M)-1e-9||K>=E(M)-1e-9)continue;let te=K.toFixed(5);Q.set(te,N([Q.get(te)??(N===Math.max?-1e9:1e9),Pr(k.pitch)].filter(ue=>Math.abs(ue)<1e8)))}let $=[...Q].map(([k,K])=>[Number(k),K]).sort((k,K)=>k[0]-K[0]);n.strokeStyle=V,n.lineWidth=W,n.beginPath(),$.forEach(([k,K],te)=>te?n.lineTo(_(k,M),X(K)):n.moveTo(_(k,M),X(K))),n.stroke()}}for(let M of t.section||[])S(M,(w,D,O,X)=>{let N=c+O*y+y*.01,V=y*.13,W=M.data.color;if(n.fillStyle=W,n.globalAlpha=.2,n.fillRect(w+1,N,D-2,V),n.globalAlpha=1,n.fillStyle=W,n.fillRect(w+1,N,X?6:2,V),n.textAlign="left",n.textBaseline="middle",X||D>160){n.fillStyle=W;let Q=Xe(n,M.label,w+14,N+V/2,Math.min(80,D-16),Math.min(34,V*.9),"700")?n.measureText(M.label).width:0;n.fillStyle=le.ink,M.data.role&&D>90&&Xe(n,M.data.role,w+26+Q,N+V/2,D-40-Q,Math.min(22,V*.6))}n.textBaseline="alphabetic",o.push({x:w,y:N,w:D,h:V,kind:"span",span:M})});for(let M of t.key||[])S(M,(w,D,O,X)=>{let N=c+O*y+y*.28,V=y*.1,W=Ot(M,At);n.fillStyle=wr(M.data.key,W?.95:.45),n.fillRect(w,N,D,V),W||(n.strokeStyle=le.pencil,n.setLineDash([6,5]),n.strokeRect(w+1,N+1,D-2,V-2),n.setLineDash([])),M.source==="pinned"&&(n.fillStyle=le.accent,n.beginPath(),n.arc(w+10,N+10,6,0,7),n.fill()),n.fillStyle=le.ink,n.textAlign="left",n.textBaseline="middle",(X||D>120)&&Xe(n,`${Dn(M.data.key)}${M.data.key.mode==="minor"?" minor":" major"}${W?"":" ?"}`,w+18,N+V/2,D-24,Math.min(30,V*.7),"600"),n.textBaseline="alphabetic",o.push({x:w,y:N,w:D,h:V,kind:"span",span:M})});for(let M of t.harmony||[])M.data.none||S(M,(w,D,O,X)=>{if(!X)return;let N=c+O*y+y*.42,V=y*.14,W=Ot(M,At);n.fillStyle=W?le.ink:le.pencil,n.textAlign="left",n.textBaseline="middle",D>14&&Xe(n,M.label+(W?"":"?"),w+2,N+V/2,Math.max(10,D-3),Math.min(26,V*.55),W?"600":"")||n.fillRect(w+1,N+V*.45,2,V*.1),n.textBaseline="alphabetic",o.push({x:w,y:N,w:Math.max(6,D),h:V,kind:"span",span:M})});for(let M of t.phrase||[])S(M,(w,D,O,X,N)=>{let V=c+O*y+y*.24,W=y*.03,Q=Ot(M,At);n.strokeStyle=Q?le.ink:le.pencil,n.lineWidth=2.5,Q||n.setLineDash([8,6]),n.beginPath(),n.moveTo(w+3,V+(X?W:0)),n.lineTo(w+3,V),n.lineTo(w+D-3,V),N&&n.lineTo(w+D-3,V+W),n.stroke(),n.setLineDash([]),o.push({x:w,y:V-10,w:D,h:W+14,kind:"span",span:M})});for(let M of t.cadence||[]){let w=ce(M.start),D=v(w),O=_(w,D),X=c+D*y+y*.24,N=Ot(M,At);n.fillStyle=M.label==="HC"?"#8a5a1a":le.accent,n.globalAlpha=N?1:.55,n.beginPath(),n.moveTo(O,X+2),n.lineTo(O+10,X-13),n.lineTo(O-10,X-13),n.closePath(),n.fill(),n.font=`600 21px ${Ce}`,n.textAlign="center",n.fillText(M.label+(N?"":"?"),O,X-17),n.globalAlpha=1,o.push({x:O-26,y:X-40,w:52,h:44,kind:"span",span:M})}return{canvas:r,regions:o,xOf:_,rowOf:v,top:c,rh:y}}var Pn={w:3600,h:1e3},hi=120,Er=30,Rn=130,Cn=660,_s=Rn+Cn+12,so=_s+92,Hd=so+70;function Vd(r,e){return e!=="degree"?Pr(r.pitch):r.pitch.octave*7+Mo.indexOf(r.pitch.step)+r.pitch.alter/5*.3}function Gd(r,e,t,i,n){r=r||Si(Pn.w,Pn.h);let s=r.getContext("2d"),a=r.width,o=[],l=n.axis||"chromatic";ci(s,a,r.height);let c=e.bars,h=ce(c.at(-1).at)+ce(c.at(-1).dur),u=Math.max(0,Math.min(c.length-1,n.bar||0)),d=ce(c[u].at);n.t!==void 0&&(d=Math.max(0,Math.min(h-1e-6,n.t)),u=Math.max(0,c.findIndex((S,M)=>M+1>=c.length||ce(c[M+1].at)>d+1e-9)));let p=ce(c[u].dur),g=Math.min(h+p*.25,d+p*(n.bars||4)),y=Math.min(c.length,c.findIndex(S=>ce(S.at)>=g-1e-9)<0?c.length:c.findIndex(S=>ce(S.at)>=g-1e-9)),f=S=>hi+(S-d)/(g-d)*(a-hi-Er),x=e.notes.filter(S=>!S.percussion&&ce(S.onset)<g-1e-9&&ce(S.onset)+ce(S.dur)>d+1e-9),m=e.notes.filter(S=>!S.percussion).map(S=>Vd(S,l)),v=Math.floor(Math.min(...m))-1,_=Math.ceil(Math.max(...m))+1,T=Cn/Math.max(12,_-v),E=S=>Rn+Cn-(S-v+1)*T,R=S=>{let M=kh(t.key||[],{n:Math.round(S*960),d:960});return M&&M.data.key};s.font=`20px ${Ce}`,s.textAlign="right",s.textBaseline="middle";for(let S=v;S<=_;S++){let M=E(S)+T/2;if(l==="degree"){let w=R(d),D=w?Mo.indexOf(Ih(w.tonic,4).step):0,O=((S-D)%7+7)%7;s.strokeStyle=O===0?le.line:O===4?le.rule:le.faint,s.lineWidth=O===0?2:1,s.beginPath(),s.moveTo(hi,M),s.lineTo(a-Er,M),s.stroke(),(O===0||O===4)&&(s.fillStyle=O===0?le.ink:le.soft,s.font=`${O===0?"600 ":""}24px ${Ce}`,s.fillText(O===0?"1 (tonic)":"5",hi-12,M))}else{let w=(S%12+12)%12;[1,3,6,8,10].includes(w)&&(s.fillStyle="rgba(160,140,110,.08)",s.fillRect(hi,E(S),a-hi-Er,T)),w===0&&(s.strokeStyle=le.rule,s.lineWidth=1.5,s.beginPath(),s.moveTo(hi,E(S)+T),s.lineTo(a-Er,E(S)+T),s.stroke(),s.fillStyle=le.soft,s.fillText(`C${Math.floor(S/12)-1}`,hi-12,E(S)+T/2))}}for(let S=u;S<y;S++){let M=c[S],w=Math.max(hi,f(ce(M.at))),D=e.meter.reduce((X,N)=>ce(N.at)<=ce(M.at)?N:X,e.meter[0]),O=D.den>=8&&D.num%3===0?D.num/3:D.num;s.strokeStyle=le.line,s.lineWidth=2,s.beginPath(),s.moveTo(w,Rn-6),s.lineTo(w,Rn+Cn),s.stroke(),s.strokeStyle=le.faint,s.lineWidth=1;for(let X=1;X<O;X++){let N=f(ce(M.at)+ce(M.dur)*X/O);s.beginPath(),s.moveTo(N,Rn),s.lineTo(N,Rn+Cn),s.stroke()}s.fillStyle=le.soft,s.font=`24px ${Ce}`,s.textAlign="left",s.textBaseline="alphabetic",s.fillText(String(M.n),w+6,Hd),o.push({x:w,y:Hd-30,w:f(S+1<c.length?ce(c[S+1].at):g)-w,h:40,kind:"time",t:ce(M.at),bar:M.n})}for(let S of x){let M=Math.max(hi,f(ce(S.onset))),w=Math.min(a-Er,f(ce(S.onset)+Math.max(ce(S.dur),1/64))),D=E(Vd(S,l)),O=i?i[S.id]:"other",X=Math.max(6,T*(l==="degree"?.86:.92)),N=Tn[O]||Tn.other;s.fillStyle=N,s.globalAlpha=S.grace?.7:.92;let V=Math.min(8,X/2),W=Math.max(S.grace?10:6,w-M-2);s.beginPath(),s.roundRect(M+1,D+(T-X)/2,W,X,V),s.fill(),s.globalAlpha=1,O==="root"&&(s.strokeStyle="#0d1f4a",s.lineWidth=3,s.stroke()),l==="degree"&&S.pitch.alter&&(s.fillStyle=le.page,s.font=`600 ${Math.round(X*.8)}px ${Ce}`,s.textAlign="left",s.textBaseline="middle",s.fillText(S.pitch.alter>0?"♯":"♭",M+6,D+T/2)),o.push({x:M,y:D+(T-X)/2,w:W,h:X,kind:"note",note:S,fn:O})}let b=S=>ce(S.end)>d+1e-9&&ce(S.start)<g-1e-9,A=S=>[Math.max(hi,f(ce(S.start))),Math.min(a-Er,f(ce(S.end)))];for(let S of(t.harmony||[]).filter(b)){if(S.data.none)continue;let[M,w]=A(S),D=Ot(S,At);s.strokeStyle=le.faint,s.lineWidth=1,s.strokeRect(M+1,_s,w-M-2,76),s.fillStyle=D?le.ink:le.pencil,s.textAlign="left",s.textBaseline="middle",(ce(S.start)>=d-1e-9||w-M>120)&&Xe(s,S.label+(D?"":"?"),M+10,_s+38,w-M-14,40,D?"600":""),S.source==="pinned"&&(s.fillStyle=le.accent,s.beginPath(),s.arc(w-12,_s+12,6,0,7),s.fill()),o.push({x:M,y:_s,w:w-M,h:76,kind:"span",span:S})}for(let S of(t.key||[]).filter(b)){let[M,w]=A(S),D=Ot(S,At);s.fillStyle=wr(S.data.key,D?.95:.45),s.fillRect(M,so,w-M,46),s.fillStyle=le.ink,s.textAlign="left",s.textBaseline="middle",Xe(s,`${Dn(S.data.key)} ${S.data.key.mode}${D?"":" ?"}`,M+12,so+23,w-M-16,28,"600"),o.push({x:M,y:so,w:w-M,h:46,kind:"span",span:S})}for(let S of(t.section||[]).filter(b)){let[M,w]=A(S),D=S.data.color;s.fillStyle=D,s.globalAlpha=.2,s.fillRect(M+1,4,w-M-2,40),s.globalAlpha=1,s.fillRect(M+1,4,ce(S.start)>=d-1e-9?8:2,40),s.textAlign="left",s.textBaseline="middle",s.fillStyle=D;let O=Xe(s,S.label,M+18,25,90,34,"700")?s.measureText(S.label).width:0;s.fillStyle=le.ink,S.data.role&&Xe(s,`${S.data.role} · bars ${S.data.bars[0]}–${S.data.bars[1]}`,M+32+O,25,w-M-50-O,24),s.textBaseline="alphabetic",o.push({x:M,y:4,w:w-M,h:40,kind:"span",span:S})}for(let S of(t.phrase||[]).filter(b)){let[M,w]=A(S),D=Ot(S,At),O=58;s.strokeStyle=D?le.ink:le.pencil,s.lineWidth=3,D||s.setLineDash([10,7]),s.beginPath(),s.moveTo(M+4,O+(ce(S.start)>=d?26:0)),s.lineTo(M+4,O),s.lineTo(w-4,O),ce(S.end)<=g+1e-9&&s.lineTo(w-4,O+26),s.stroke(),s.setLineDash([]),s.fillStyle=le.soft,s.font=`italic 24px ${Ce}`,s.textAlign="left",s.textBaseline="alphabetic",ce(S.start)>=d-1e-9&&s.fillText(S.label,M+14,O+30),o.push({x:M,y:O-10,w:w-M,h:44,kind:"span",span:S})}for(let S of(t.cadence||[]).filter(M=>ce(M.start)>=d-1e-9&&ce(M.start)<g)){let M=f(ce(S.start)),w=Ot(S,At);s.globalAlpha=w?1:.55,s.fillStyle=S.label==="HC"?"#8a5a1a":le.accent,s.font=`600 28px ${Ce}`,s.textAlign="center",s.textBaseline="alphabetic",s.fillText(S.label+(w?"":"?"),M,118),s.fillRect(M-1.5,122,3,Cn+8),s.globalAlpha=1,o.push({x:M-40,y:92,w:80,h:34,kind:"span",span:S})}return{canvas:r,regions:o,xOf:f,t0:d,t1:g,b0:u,b1:y,top:Rn,notesH:Cn}}var In={w:2400,h:1697},ao=(r,e)=>{let t=parseInt(r.slice(1),16);return`rgba(${t>>16},${t>>8&255},${t&255},${e})`};function Wd(r,e,t,i={}){r=r||Si(In.w,In.h);let n=r.getContext("2d"),s=r.width,a=r.height,o=[];ci(n,s,a);let l=90,c=(t.form||[])[0],h=t.section||[];if(n.textBaseline="alphabetic",n.textAlign="left",n.fillStyle=le.ink,Xe(n,e.title||"Untitled",l,100,s-2*l,48,"600"),n.fillStyle=le.soft,Xe(n,e.composer||"",l,146,s-2*l,28),!c||!h.length)return n.fillStyle=le.soft,n.font=`italic 36px ${Ce}`,n.fillText("The structure is being heard…",l,260),{canvas:r,regions:o};let u=Ot(c,At);n.fillStyle=u?le.accent:le.pencil,n.font=`600 84px ${Ce}`,n.fillText(c.label+(u?"":" ?"),l,250);let d=n.measureText(c.label+(u?"":" ?")).width;o.push({x:l,y:175,w:d,h:95,kind:"span",span:c}),n.fillStyle=le.soft,n.font=`28px ${Ce}`,n.fillText(`${u?"sure":"a guess"} (${Math.round(c.confidence*100)}%)${c.alternatives.length?` · or ${c.alternatives.map(N=>N.label).join(", or ")}`:""} · touch it for why`,l+d+30,240,s-l-(l+d+30)),n.fillStyle=le.ink,n.font=`600 46px ${Ce}`,n.fillText(c.data.letters,l,318,s-2*l);let p=ce(e.bars[0].at),g=ce(h.at(-1).end),y=N=>l+(N-p)/(g-p)*(s-2*l),f=360,x=640,m=650,v=170,_=m+v+14,T=[];for(let N of h){let V=N.data.part;V&&T.length&&T.at(-1).p===V?T.at(-1).end=N.end:T.push({p:V,start:N.start,end:N.end})}for(let N of T)if(N.p){let V=y(ce(N.start))+4,W=y(ce(N.end))-4;n.strokeStyle=le.ink,n.lineWidth=3,n.beginPath(),n.moveTo(V,f+26),n.lineTo(V,f),n.lineTo(W,f),n.lineTo(W,f+26),n.stroke(),n.fillStyle=le.ink,n.textAlign="center",Xe(n,N.p,(V+W)/2,f-12,W-V,34,"600"),n.textAlign="left"}let E=new Map;for(let N of h)E.has(N.data.letter)||E.set(N.data.letter,N);for(let N of h){let V=E.get(N.data.letter);if(V===N)continue;let W=(y(ce(V.start))+y(ce(V.end)))/2,Q=(y(ce(N.start))+y(ce(N.end)))/2,$=(Q-W)/2,k=Math.min(x-f-70,$*.9);n.strokeStyle=ao(N.data.color,N.data.prime?.55:.85),n.lineWidth=N.data.prime?5:8,N.data.prime&&n.setLineDash([14,9]),n.beginPath(),n.moveTo(W,x),n.bezierCurveTo(W,x-k*1.33,Q,x-k*1.33,Q,x),n.stroke(),n.setLineDash([])}for(let N of h){let V=y(ce(N.start)),W=y(ce(N.end)),Q=W-V,$=N.data.color,k=Ot(N,At);n.fillStyle=ao($,.22),n.fillRect(V+2,m,Q-4,v),n.fillStyle=$,n.fillRect(V+2,m,Q-4,12),n.strokeStyle=ao($,.9),n.lineWidth=2.5,k||n.setLineDash([10,7]),n.strokeRect(V+2,m,Q-4,v),n.setLineDash([]),n.fillStyle=$,n.textAlign="center",Xe(n,N.label,V+Q/2,m+88,Q-10,Math.min(78,Q*.8),"700"),n.fillStyle=le.ink,N.data.role&&Xe(n,N.data.role.split(": ").pop(),V+Q/2,m+128,Q-10,24),n.fillStyle=le.soft,Xe(n,`${N.data.bars[0]}–${N.data.bars[1]}`,V+Q/2,m+158,Q-10,22),n.textAlign="left",N.data.ends&&(n.fillStyle=N.data.ends==="HC"?"#8a5a1a":le.accent,n.font=`600 22px ${Ce}`,n.textAlign="right",n.fillText(N.data.ends,W-8,m+40),n.textAlign="left"),N.source==="pinned"&&(n.fillStyle=le.accent,n.beginPath(),n.arc(V+16,m+30,7,0,7),n.fill()),o.push({x:V,y:m,w:Q,h:v,kind:"span",span:N})}for(let N of t.key||[]){let V=y(ce(N.start)),W=y(ce(N.end)),Q=Ot(N,At);n.fillStyle=wr(N.data.key,Q?.95:.45),n.fillRect(V,_,W-V,44),n.fillStyle=le.ink,n.textBaseline="middle",Xe(n,Dn(N.data.key),V+8,_+22,W-V-12,26,"600"),n.textBaseline="alphabetic",o.push({x:V,y:_,w:W-V,h:44,kind:"span",span:N})}o.push({x:l,y:_+46,w:s-2*l,h:30,kind:"timeline",X:y,t0:p,t1:g}),n.fillStyle=le.soft,n.font=`22px ${Ce}`,n.fillText("key",l-60,_+30);let R=t.matrix,b=_+110,A=a-b-60,S=s-l-A;if(R&&R.length){let N=R.length,V=A/N,W=n.createImageData(Math.ceil(A),Math.ceil(A));for(let Q=0;Q<W.height;Q++)for(let $=0;$<W.width;$++){let k=R[Math.min(N-1,Math.floor(Q/V))][Math.min(N-1,Math.floor($/V))],K=(Q*W.width+$)*4,te=1-Math.max(0,Math.min(1,(k-.3)/.7));W.data[K]=40+207*te,W.data[K+1]=34+208*te,W.data[K+2]=30+200*te,W.data[K+3]=255}n.putImageData(W,S,b);for(let Q of h){let $=e.bars.findIndex(k=>ce(k.at)>=ce(Q.start)-1e-9);$<=0||(n.strokeStyle=ao(Q.data.color,.9),n.lineWidth=2,n.beginPath(),n.moveTo(S+$*V,b),n.lineTo(S+$*V,b+A),n.moveTo(S,b+$*V),n.lineTo(S+A,b+$*V),n.stroke())}n.fillStyle=le.soft,n.font=`22px ${Ce}`,n.fillText("bar by bar: how alike (dark = alike)",S,b-12),o.push({x:S,y:b,w:A,h:A,kind:"matrix",n:N,cell:V,x0:S,y0:b})}let M=l,w=S-l-50,D=h.length,O=Math.min(46,(A+20)/(D+1));n.fillStyle=le.soft,n.font=`600 ${Math.round(O*.5)}px ${Ce}`;let X=[0,.09,.42,.56,.86];return["","part","bars","keys","ends"].forEach((N,V)=>n.fillText(N,M+X[V]*w,b)),h.forEach((N,V)=>{let W=b+(V+1)*O;n.fillStyle=N.data.color,n.font=`700 ${Math.round(O*.62)}px ${Ce}`,n.fillText(N.label,M,W),n.fillStyle=le.ink,n.font=`${Math.round(O*.5)}px ${Ce}`,Xe(n,N.data.role||"—",M+X[1]*w,W,(X[2]-X[1])*w-10,Math.round(O*.5)),Xe(n,`${N.data.bars[0]}–${N.data.bars[1]}`,M+X[2]*w,W,(X[3]-X[2])*w-10,Math.round(O*.5)),Xe(n,(N.data.keys||[]).map(Q=>Q.replace(" major","").replace(" minor","m")).join(" → ")||"—",M+X[3]*w,W,(X[4]-X[3])*w-10,Math.round(O*.5)),Xe(n,N.data.ends||"—",M+X[4]*w,W,(1-X[4])*w,Math.round(O*.5)),o.push({x:M,y:W-O*.75,w,h:O,kind:"span",span:N})}),{canvas:r,regions:o,X:y,cursorY:m,cursorH:v+58}}var Xd={Uşşak:28,Hüseynî:28,Bûselik:200,Rast:120,Çârgâh:160,Segâh:300,Kürdî:250,Hicâz:0,Sabâ:330},Ms=(r,e=1)=>r in Xd?`hsla(${Xd[r]}, 45%, 62%, ${e})`:`rgba(160,150,130,${e})`,jd={çarpma:"#b3261e",trill:"#8a2f8a",glide:"#1f5f9f",vibrato:"#2f7d4c"},th=r=>`${Math.floor(r/60)}:${String(Math.floor(r%60)).padStart(2,"0")}`,Et=4;function qd(r,e,t,i,n={}){r=r||Si(3600,1e3);let s=r.getContext("2d"),a=r.width,o=r.height,l=[],c=e.line,h=t.makamInfo;ci(s,a,o);let u=250,d=30,p=120,g=640,y=p+g+24,f=y+92,x=e.audio.seconds,m=Math.max(4,(n.bars||4)*Et),v=Math.max(0,Math.min(x-1,(n.t||0)*Et)),_=Math.min(x+.5,v+m),T=$=>u+($-v)/(_-v)*(a-u-d),E=$=>T($*Et),R=Math.max(0,Math.floor(v/c.hop)),b=Math.min(c.cents.length,Math.ceil(_/c.hop)),A=1/0,S=-1/0;for(let $=R;$<b;$++){let k=c.cents[$];k===k&&(A=Math.min(A,k),S=Math.max(S,k))}A<S||(A=h.karar-100,S=h.karar+1200);let M=(A+S)/2,w=Math.max(650,(S-A)/2+80);A=M-w,S=M+w;let D=$=>p+g-($-A)/(S-A)*g;s.textAlign="right",s.textBaseline="middle";let O=new Set(h.perdes.filter($=>!h.perdes.some(k=>k!==$&&k.name===$.name&&k.seconds>$.seconds))),X=-1/0;for(let $ of[...h.perdes].sort((k,K)=>K.cents-k.cents)){if($.cents<A||$.cents>S||!O.has($))continue;let k=D($.cents),K=Math.abs($.rel)<1||Math.abs($.rel-53)<1,te=h.gucluler.includes($.name);s.strokeStyle=K?le.accent:te?le.blue:le.faint,s.lineWidth=K||te?2.5:1.2,s.beginPath(),s.moveTo(u,k),s.lineTo(a-d,k),s.stroke(),!(k-X<40&&!K&&!te)&&(X=k,s.fillStyle=K?le.accent:te?le.blue:le.ink,s.font=`${K||te?"600 ":""}26px ${Ce}`,s.fillText($.name+($.degree?"":" ~"),u-14,k-8),s.fillStyle=le.soft,s.font=`18px ${Ce}`,s.fillText(`${$.rel>=0?"+":""}${$.rel.toFixed(1)} k`,u-14,k+14))}s.textAlign="left",s.textBaseline="alphabetic";for(let $=Math.ceil(v);$<=_;$++){let k=T($);s.strokeStyle=$%5?"rgba(200,190,165,.35)":le.faint,s.lineWidth=1,s.beginPath(),s.moveTo(k,p-10),s.lineTo(k,p+g),s.stroke(),$%5===0&&(s.fillStyle=le.soft,s.font=`22px ${Ce}`,s.fillText(th($),k+4,p-16))}l.push({x:u,y:p-50,w:a-u-d,h:44,kind:"timeline",t0:v/Et,t1:_/Et});let N=(t.makam||[]).filter($=>!$.data.whole&&ce($.end)*Et>v&&ce($.start)*Et<_);for(let $ of N){let k=Math.max(u,T(ce($.start)*Et)),K=Math.min(a-d,T(ce($.end)*Et));s.fillStyle=Ms($.data.cesni,.07),s.fillRect(k,p,K-k,g),s.fillStyle=Ms($.data.cesni,.55),s.fillRect(k+1,y,K-k-2,58),s.fillStyle=le.ink,s.textBaseline="middle",Xe(s,`${$.label}${$.source==="pinned"?" •":" ?"}`,k+10,y+29,K-k-16,28,"600"),s.textBaseline="alphabetic",l.push({x:k,y,w:K-k,h:58,kind:"span",span:$})}for(let $=0;$<c.notes.length;$++){let k=c.notes[$];if(k.t+k.d<v||k.t>_)continue;let K=Math.max(u,T(k.t)),te=Math.min(a-d,T(k.t+k.d)),ue=D(k.cents);s.fillStyle=k.vibrato?"rgba(47,125,76,.22)":"rgba(120,105,80,.18)",s.beginPath(),s.roundRect(K,ue-13,Math.max(4,te-K),26,10),s.fill(),l.push({x:K,y:ue-13,w:Math.max(4,te-K),h:26,kind:"note",note:e.notes[$]||null,line:k,fn:"other"})}s.strokeStyle=le.ink,s.lineWidth=2.2,s.beginPath();let V=!1,W=NaN;for(let $=R;$<b;$++){let k=c.cents[$];if(k!==k||k<A||k>S){V=!1;continue}let K=T($*c.hop),te=D(k);V&&Math.abs(k-W)<250?s.lineTo(K,te):s.moveTo(K,te),V=!0,W=k}s.stroke(),s.textAlign="center";for(let $ of t.ornament||[]){let k=$.data,K=k.t;if(K+k.d<v||K>_)continue;let te=T(K),ue=T(K+k.d),pe=jd[k.kind];if(s.fillStyle=pe,s.strokeStyle=pe,k.kind==="vibrato"){let U=c.notes.find(H=>Math.abs(H.t-K)<1e-6);if(!U)continue;let L=D(U.cents)-32;s.lineWidth=2,s.beginPath();for(let H=te;H<=ue;H+=3){let G=(H-te)/Math.max(1,ue-te)*k.rate*k.d*2*Math.PI,F=L+6*Math.sin(G);H===te?s.moveTo(H,F):s.lineTo(H,F)}s.stroke(),ue-te>150&&(s.font=`18px ${Ce}`,s.fillText(`${k.rate.toFixed(1)} Hz ±${k.extent.toFixed(0)}¢`,(te+ue)/2,L-14)),s.fillRect(te,f+30,Math.max(3,ue-te),6)}else if(k.kind==="glide")s.lineWidth=2.5,s.setLineDash([8,6]),s.beginPath(),s.moveTo(te,D(k.from)),s.lineTo(ue,D(k.to)),s.stroke(),s.setLineDash([]),s.font=`600 22px ${Ce}`,s.fillText("gl",te,f+18);else{let U=D(k.cents),L=k.dir==="up";s.beginPath(),s.moveTo(te-9,U+(L?14:-14)),s.lineTo(te+9,U+(L?14:-14)),s.lineTo(te,U),s.closePath(),s.fill(),s.font=`600 22px ${Ce}`,s.fillText(k.kind==="trill"?"tr":"ç",te,f+18),s.lineWidth=1,s.globalAlpha=.35,s.beginPath(),s.moveTo(te,U),s.lineTo(te,f-4),s.stroke(),s.globalAlpha=1}l.push({x:Math.min(te,ue)-10,y:f-6,w:Math.max(20,ue-te+20),h:46,kind:"span",span:$})}s.textAlign="left",s.font=`22px ${Ce}`;let Q=u;for(let[$,k]of[["çarpma","ç çarpma"],["trill","tr trill"],["glide","gl glide"],["vibrato","∿ vibrato"]])s.fillStyle=jd[$],s.fillText(k,Q,o-14),Q+=170;return s.fillStyle=le.soft,s.fillText(`${t.makamInfo.makam} ? · karar ${t.makamInfo.kararPerde} at ${t.makamInfo.kararHz.toFixed(1)} Hz · pencil: heard, not checked`,Q+30,o-14),{canvas:r,regions:l,xOf:E,t0:v/Et,t1:_/Et,top:p,notesH:g}}function Yd(r,e,t){r=r||Si(2400,1697);let i=r.getContext("2d"),n=r.width,s=r.height,a=[],o=e.line,l=t.makamInfo,c=t.makam[0];ci(i,n,s);let h=90,u=e.audio.seconds;i.textAlign="left",i.textBaseline="alphabetic",i.fillStyle=le.ink,Xe(i,e.title||"Untitled",h,100,n-2*h,48,"600"),i.fillStyle=le.pencil,i.font=`600 84px ${Ce}`,i.fillText(`${l.makam} ?`,h,220),a.push({x:h,y:150,w:900,h:90,kind:"span",span:c}),i.fillStyle=le.soft,Xe(i,`karar ${l.kararPerde} (${l.kararHz.toFixed(1)} Hz) · güçlü ${l.gucluler.join(", ")} · seyir ${l.seyir} · ${th(u)}`,h,272,n-2*h,30);let d=330,p=760,g=b=>h+b/u*(n-2*h-160),y=l.perdes.map(b=>b.cents),f=Math.min(...y)-60,x=Math.max(...y)+60,m=b=>d+p-(b-f)/(x-f)*p;i.textAlign="left",i.textBaseline="middle";let v=new Set(l.perdes.filter(b=>!l.perdes.some(A=>A!==b&&A.name===b.name&&A.seconds>b.seconds)));for(let b of l.perdes){if(!v.has(b))continue;let A=m(b.cents),S=Math.abs(b.rel)<1||Math.abs(b.rel-53)<1,M=l.gucluler.includes(b.name);i.strokeStyle=S?le.accent:M?le.blue:le.faint,i.lineWidth=S||M?2:1,i.beginPath(),i.moveTo(h,A),i.lineTo(g(u),A),i.stroke(),i.fillStyle=S?le.accent:M?le.blue:le.soft,i.font=`${S||M?"600 ":""}20px ${Ce}`,i.fillText(b.name,g(u)+10,A)}for(let b of t.makam.slice(1)){let A=g(ce(b.start)*Et),S=g(ce(b.end)*Et);i.fillStyle=Ms(b.data.cesni,.1),i.fillRect(A,d,S-A,p)}i.strokeStyle=le.ink,i.lineWidth=2,i.beginPath();let _=null;for(let b of o.notes){let A=g(b.t),S=g(b.t+b.d),M=m(b.cents);_&&b.t-_.e<.25?i.lineTo(A,M):i.moveTo(A,M),i.lineTo(S,M),_={e:b.t+b.d}}i.stroke();for(let b=0;b<=u;b+=30)i.fillStyle=le.soft,i.font=`20px ${Ce}`,i.textBaseline="alphabetic",i.fillText(th(b),g(b)+4,d+p+30);a.push({x:h,y:d,w:g(u)-h,h:p,kind:"timeline",t0:0,t1:u/Et});let T=d+p+50;for(let b of t.makam.slice(1)){let A=g(ce(b.start)*Et),S=g(ce(b.end)*Et);i.fillStyle=Ms(b.data.cesni,.6),i.fillRect(A,T,Math.max(2,S-A-1),56),i.fillStyle=le.ink,i.textBaseline="middle",i.textAlign="left",S-A>40&&Xe(i,b.data.on,A+6,T+28,S-A-10,18),a.push({x:A,y:T,w:Math.max(4,S-A),h:56,kind:"span",span:b})}i.textBaseline="middle",i.textAlign="left";let E=h,R=s-50;for(let b of[...new Set(t.makam.slice(1).map(A=>A.data.cesni))])i.fillStyle=Ms(b,.6),i.fillRect(E,R-14,28,28),i.fillStyle=le.ink,i.font=`22px ${Ce}`,i.fillText(b,E+36,R),E+=60+i.measureText(b).width+20;return{canvas:r,regions:a,X:b=>g(b*Et),cursorY:d,cursorH:p}}function $d(r,e,t){r=r||Si(2400,1697);let i=r.getContext("2d"),n=r.width,s=r.height,a=[],o=t.makamInfo;ci(i,n,s);let l=90;i.textAlign="left",i.textBaseline="alphabetic",i.fillStyle=le.ink,Xe(i,"Perdes, as played",l,100,n-2*l,48,"600"),i.fillStyle=le.soft,Xe(i,`commas (k, 22.6 cents) over the karar, ${o.kararPerde}; the dot where AEU writes the perde; the bar, how long it is held`,l,150,n-2*l,26);let c=[...o.perdes].sort((b,A)=>A.cents-b.cents),h=200,u=Math.min(70,(s-h-420)/c.length),d=760,p=900,g=Math.min(...c.map(b=>b.rel))-3,y=Math.max(...c.map(b=>b.rel))+3,f=b=>d+(b-g)/(y-g)*p,x=Math.max(...c.map(b=>b.seconds));c.forEach((b,A)=>{let S=h+A*u+u/2,M=Math.abs(b.rel)<1||Math.abs(b.rel-53)<1,w=o.gucluler.includes(b.name);i.fillStyle=M?le.accent:w?le.blue:le.ink,i.font=`${M||w?"600 ":""}30px ${Ce}`,i.textBaseline="middle",i.fillText(b.name+(b.degree?"":" ~"),l,S),i.fillStyle=le.soft,i.font=`24px ${Ce}`,i.fillText(`${b.rel>=0?"+":""}${b.rel.toFixed(1)} k · ${Math.round(b.rel*1200/53)}¢ · ${b.off>=0?"+":""}${b.off.toFixed(1)} k off`,l+300,S),i.strokeStyle=le.faint,i.lineWidth=1,i.beginPath(),i.moveTo(d,S),i.lineTo(d+p,S),i.stroke(),i.fillStyle=le.soft,i.beginPath(),i.arc(f(b.rel-b.off),S,7,0,7),i.fill(),i.fillStyle=M?le.accent:le.ink,i.beginPath(),i.arc(f(b.rel),S,11,0,7),i.fill(),i.fillStyle="rgba(31,63,143,.35)",i.fillRect(d+p+60,S-u*.3,b.seconds/x*400,u*.6),i.fillStyle=le.soft,i.font=`20px ${Ce}`,i.fillText(`${b.seconds.toFixed(0)} s`,d+p+70+b.seconds/x*400,S)});let m=t.ornament||[],v=b=>m.filter(A=>A.label===b).length,_=m.filter(b=>b.label==="vibrato").map(b=>b.data),T=b=>{let A=[...b].sort((S,M)=>S-M);return A.length?A[A.length>>1]:0},E=m.filter(b=>b.label==="çarpma").map(b=>b.data),R=s-190;return i.textBaseline="alphabetic",i.fillStyle=le.ink,i.font=`600 34px ${Ce}`,i.fillText("Ornaments",l,R),i.font=`26px ${Ce}`,i.fillStyle=le.ink,i.fillText(`çarpma ${v("çarpma")} (${E.filter(b=>b.dir==="up").length} up, ${E.filter(b=>b.dir!=="up").length} down; ${E.filter(b=>b.atOnset).length} as a note begins; median ${Math.round(T(E.map(b=>b.d))*1e3)} ms) · trill ${v("trill")} · glide ${v("glide")}`,l,R+50),i.fillText(`vibrato on ${_.length} notes: median ${T(_.map(b=>b.rate)).toFixed(1)} swings a second, ±${T(_.map(b=>b.extent)).toFixed(0)} cents`,l,R+92),i.fillStyle=le.soft,i.font=`italic 22px ${Ce}`,i.fillText("Heard from the recording, not checked against a transcription: pencil.",l,R+134),{canvas:r,regions:a}}var Kd=Math.hypot;function Qd(r,e,t,i){let[n,s,a]=i.a,[o,l,c]=i.b,h=o-n,u=l-s,d=c-a,p=r-n,g=e-s,y=t-a,f=h*h+u*u+d*d,x=f?Math.max(0,Math.min(1,(p*h+g*u+y*d)/f)):0,m=p-h*x,v=(g-u*x)/i.flat,_=y-d*x;return Math.sqrt(m*m+v*v+_*_)-(i.ra+(i.rb-i.ra)*x)}var Jt=(r,e,t={})=>({a:r,b:r,ra:e,rb:e,k:.03,flat:1,part:"body",...t}),tn=(r,e,t,i,n={})=>({a:r,b:e,ra:t,rb:i,k:.02,flat:1,part:"body",...n});function bi(r,e,t,i){let n=1e3;for(let s of r){let a=Qd(e,t,i,s),o=Math.max(s.k-Math.abs(n-a),0)/s.k;n=Math.min(n,a)-o*o*s.k*.25}return Math.max(n,-t)}function ep(r,e,t,i){let n={},s=0;for(let a of r){let o=Math.exp(-Math.max(0,Qd(e,t,i,a))/.011);n[a.part]=Math.max(n[a.part]||0,o)}for(let a in n)s+=n[a];for(let a in n)n[a]/=s;return n}function tp(...r){let e={pos:[],nor:[],idx:[]};for(let t of r){let i=e.pos.length/3;for(let n of t.pos)e.pos.push(n);for(let n of t.nor)e.nor.push(n);for(let n of t.idx)e.idx.push(n+i)}return e}function ih(r,e,t,i){let n=[0,1,2].map(x=>Math.ceil((t[x]-e[x])/i)+1),[s,a,o]=n,l=(x,m,v)=>(v*a+m)*s+x,c=new Float32Array(s*a*o),h=new Int32Array(s*a*o).fill(-1),u=5,d=i*u*.9+.004;for(let x=0;x<o;x+=u)for(let m=0;m<a;m+=u)for(let v=0;v<s;v+=u){let _=bi(r,e[0]+(v+2)*i,e[1]+(m+2)*i,e[2]+(x+2)*i),T=Math.abs(_)>d;for(let E=x;E<Math.min(o,x+u);E++)for(let R=m;R<Math.min(a,m+u);R++)for(let b=v;b<Math.min(s,v+u);b++)c[l(b,R,E)]=T?_:bi(r,e[0]+b*i,e[1]+R*i,e[2]+E*i)}let p=[],g=[],y=[];for(let x=0;x<o-1;x++)for(let m=0;m<a-1;m++)for(let v=0;v<s-1;v++){let _=0,T=0,E=0,R=0,b=0,A=[];for(let W=0;W<8;W++){let Q=c[l(v+(W&1),m+(W>>1&1),x+(W>>2))];A.push(Q),Q<0&&(_|=1<<W)}if(_===0||_===255)continue;for(let W=0;W<8;W++)for(let Q of[1,2,4]){if(W&Q)continue;let $=A[W],k=A[W|Q];if($<0==k<0)continue;let K=$/($-k);E+=(W&1)+(Q===1?K:0),R+=(W>>1&1)+(Q===2?K:0),b+=(W>>2)+(Q===4?K:0),T++}let S=e[0]+(v+E/T)*i,M=e[1]+(m+R/T)*i,w=e[2]+(x+b/T)*i,D=i*.5,O=bi(r,S+D,M,w)-bi(r,S-D,M,w),X=bi(r,S,M+D,w)-bi(r,S,M-D,w),N=bi(r,S,M,w+D)-bi(r,S,M,w-D),V=Kd(O,X,N)||1;O/=V,X/=V,N/=V,h[l(v,m,x)]=p.length/3,p.push(S,M,w),g.push(O,X,N)}let f=(x,m,v,_,T)=>{x<0||m<0||v<0||_<0||(T?y.push(x,v,m,x,_,v):y.push(x,m,v,x,v,_))};for(let x=1;x<o-1;x++)for(let m=1;m<a-1;m++)for(let v=1;v<s-1;v++){let _=c[l(v,m,x)]<0;_!==c[l(v+1,m,x)]<0&&f(h[l(v,m-1,x-1)],h[l(v,m,x-1)],h[l(v,m,x)],h[l(v,m-1,x)],!_),_!==c[l(v,m+1,x)]<0&&f(h[l(v-1,m,x-1)],h[l(v-1,m,x)],h[l(v,m,x)],h[l(v,m,x-1)],!_),_!==c[l(v,m,x+1)]<0&&f(h[l(v-1,m-1,x)],h[l(v,m-1,x)],h[l(v,m,x)],h[l(v-1,m,x)],!_)}return{pos:p,nor:g,idx:y}}var Hi=(r,e,t)=>[e*Math.cos(r*Math.PI/180),t,-e*Math.sin(r*Math.PI/180)];var wi=(r,e,t=1)=>r.map((i,n)=>i+e[n]*t),oo=r=>{let e=Kd(...r)||1;return r.map(t=>t/e)},Zd=(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]];function Jd(r,e,t){let i=0;for(let n=0;n<40&&bi(r,...wi(e,t,i))<0;n++)i+=.004;for(let n=0;n<12;n++){let s=.004/2**(n+1);i+=bi(r,...wi(e,t,i))<0?s:-s}return wi(e,t,i)}function ip(r){let e=r==="dog",t=e?1.28:1,i=(e?.118:.104)*t,n=[],s=e?[[205,.08],[160,.092],[115,.086],[70,.088],[25,.084],[-8,.068]]:[[205,.066],[165,.075],[120,.073],[75,.069],[30,.064],[-5,.054]];s.forEach(([f,x],m)=>{m&&n.push(tn(Hi(s[m-1][0],i,s[m-1][1]*t*.86),Hi(f,i,x*t*.86),s[m-1][1]*t*.92,x*t*.92,{k:.03*t}))}),n.push(Jt(Hi(188,i*1.02,(e?.078:.07)*t),(e?.066:.06)*t,{k:.04}),Jt(Hi(8,i*1,(e?.062:.056)*t),(e?.056:.05)*t,{k:.04}),Jt([0,.028*t,0],(e?.075:.07)*t,{k:.05,flat:.6}));let a=e?[.104*t,.078*t,.118*t]:[.08,.079,.1],o=oo(e?[-.62,-.3,.72]:[-.66,-.22,.72]),l=oo(Zd([0,1,0],o)),c=Zd(o,l),h=(f,x,m)=>wi(wi(wi(a,o,f*t),l,x*t),c,m*t),u={part:"head",k:.012};if(n.push(tn(Hi(-5,i,.06*t),a,.05*t,.042*t,{k:.03,part:"neck"})),e){n.push(Jt(a,.05*t,u),tn(h(.02,0,-.006),h(.082,0,-.018),.036*t,.023*t,{...u,k:.02}),Jt(h(.101,0,-.009),.0115*t,{part:"nose",k:.004}));for(let f of[-1,1])n.push(tn(h(-.012,f*.044,.03),h(0,f*.06,-.034),.014*t,.022*t,{part:f<0?"ear0":"ear1",k:.008}),Jt(h(.03,f*.018,.022),.014*t,{...u,k:.016}))}else{let f=[Jt(a,.054,u),Jt(h(.01,0,-.008),.043,{...u,k:.03,flat:.85}),Jt(h(.039,0,-.017),.017,{...u,k:.016})];for(let v of[-1,1])f.push(Jt(h(.042,v*.011,-.019),.012,{...u,k:.01}),Jt(h(.014,v*.031,-.01),.027,{...u,k:.02}));let x=oo(wi(o,c,.25)),m=Jd(f,a,x);n.push(...f,Jt(wi(m,x,.0025),.0058,{part:"nose",k:.004}));for(let v of[-1,1])n.push(tn(h(-.004,v*.03,.032),h(-.01,v*.043,.074),.022,.003,{part:v<0?"ear0":"ear1",k:.012,flat:1}))}for(let f of[0,1])n.push(tn([.1*t,.026*t,(.09+f*.026)*t],[-.005*t,.019*t,(.128+f*.03)*t],.024*t,(e?.024:.019)*t,{part:"paw",k:.014}));n.push(tn(Hi(205,i*1.1,.03*t),Hi(248,i*1.02,.02*t),.034*t,.02*t,{part:"paw",k:.02}));let d=(e?[[212,1.2],[228,1.42],[246,1.6],[262,1.72]]:[[210,1.2],[226,1.42],[244,1.54],[262,1.6],[280,1.6],[298,1.52]]).map(([f,x])=>Hi(f,i*x,(e?.03:.022)*t));d.forEach((f,x)=>{if(x){let m=x/(d.length-1),v=(e?.027-.004*m:.021-.006*m)*t;n.push(tn(d[x-1],f,v,v*.95,{part:m>.55?"tip":"tail",k:.014}))}});let p=new Set(["head","nose","ear0","ear1"]),g=n.find(f=>f.part==="nose");return{eyes:[-1,1].map(f=>{let x=oo(wi(wi(o,l,f*.43),c,.42));return{at:Jd(n.filter(m=>m.part==="head"),a,x),out:x}}),list:n,nose:{at:g.a,r:g.ra},skull:n.filter(f=>p.has(f.part)),trunk:n.filter(f=>!p.has(f.part)),head:a,look:o,side:l,top:c,on:h,S:t,neck:Hi(-2,i*.95,.06*t),tail:d[Math.floor(d.length/2)],lo:[-.28*t,-.03,-.25*t],hi:[.28*t,.2*t,.27*t]}}var N0=new C(.12,Ve+.006,-1.92),Ht=r=>Math.max(0,Math.min(1,r)),nh=r=>r*r*(3-2*r),O0={cat:{base:"#cf8547",dark:"#94542a",light:"#f6ead8",nose:"#e0938c",eye:"#a9c14e",fur:.0068},dog:{base:"#b98748",dark:"#8a5c2a",light:"#e3c590",nose:"#1c1512",eye:"#3a2412",fur:.015}},lo=class{constructor(e,t,i){this.scene=e,this.kind=t,this.awake=0,this.goal=0,this.t=Math.random()*20,this.ear=0,this.earAt=4;let n=this.body=ip(t),s=O0[t],a=b=>new be(s[b]),o={base:a("base"),dark:a("dark"),light:a("light"),nose:a("nose")},l=ih(n.trunk,n.lo,n.hi,.0075*n.S),c=ih(n.skull,n.head.map(b=>b-.12*n.S),n.head.map(b=>b+.13*n.S),.006*n.S),h=tp(l,c),u=h.pos.length/3,d=l.pos.length/3,p=new Float32Array(u*3),g=new Float32Array(u*4),y=new Float32Array(u),f=new be;for(let b=0;b<u;b++){let[A,S,M]=h.pos.slice(b*3,b*3+3),w=ep(b<d?n.trunk:n.skull,A,S,M),D=(w.head||0)+(w.nose||0)+(w.ear0||0)+(w.ear1||0),O=Math.atan2(-M,A),X=Math.hypot(A,M),N=t==="cat"?.8*nh(Ht(Math.sin(O*15+Math.sin(S*60)*.8+X*14)*1.1-.25)):.25*Ht(Math.sin(O*5+S*40));if(f.copy(o.base).lerp(o.dark,N*(D>.5?.35:.85)*Ht(S/(.05*n.S))),t==="cat"&&D>.5){let Q=(A-n.head[0])*n.side[0]+(M-n.head[2])*n.side[2],$=S-n.head[1];f.lerp(o.dark,Ht(Math.sin(Q*320)*1.5)*Ht($/.03)*.7)}f.lerp(o.light,Ht((w.paw||0)*.9+(w.tip||0)*(t==="cat"?.25:.5)+Ht(1-S/(.03*n.S))*.5));let V=D*Ht(1.6-Math.hypot(...n.on(t==="dog"?.07:.046,0,-.024).map((Q,$)=>Q-[A,S,M][$]))/((t==="dog"?.024:.03)*n.S));f.lerp(o.light,V*.85);let W=b<d?0:Ht(3-2.1*(Math.hypot(...n.nose.at.map((Q,$)=>Q-[A,S,M][$]))/n.nose.r));f.lerp(o.nose,W),t==="dog"&&f.lerp(o.dark,((w.ear0||0)+(w.ear1||0))*.55),p.set([f.r,f.g,f.b],b*3),g.set([b<d?.5*(w.neck||0)*Ht(1-Math.hypot(A-n.head[0],S-n.head[1],M-n.head[2])/(.075*n.S)):1,w.tip||0,w.ear0||0,w.ear1||0],b*4),y[b]=(1-W)*(1-(t==="cat"?.72:.55)*Ht(D))*(1-.35*(w.paw||0))}let x=new Va;x.setAttribute("position",new Ae(h.pos,3)),x.setAttribute("normal",new Ae(h.nor,3)),x.setAttribute("color",new at(p,3)),x.setAttribute("aPart",new at(g,4)),x.setAttribute("aBare",new at(y,1)),x.setAttribute("aLayer",new Pa(Float32Array.from({length:i},(b,A)=>A/(i-1)),1)),x.setIndex(h.idx),x.instanceCount=i,this.u={uBreath:{value:0},uHead:{value:new Te},uTip:{value:0},uEar:{value:new ae},uFur:{value:s.fur}};let m=new $e({vertexColors:!0,roughness:.95,fog:!1});m.onBeforeCompile=b=>{Object.assign(b.uniforms,this.u),b.vertexShader=b.vertexShader.replace("void main() {",`attribute float aLayer, aBare; attribute vec4 aPart; uniform float uBreath, uTip, uFur; uniform vec2 uEar; uniform mat4 uHead; varying vec3 vRest; varying float vLayer, vBare;
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
          diffuseColor.rgb *= mix(1.0, (0.5 + 0.5 * vLayer) * (0.84 + 0.3 * long_), smoothstep(0.12, 0.45, vBare)); }  // (short fur: no deep shade between the hairs)`)},this.mesh=new xe(x,m),x.boundingSphere=new jt(new C(0,.08,0),.4*n.S),this.group=new ct,this.group.position.copy(N0),this.group.rotation.y=-.15,this.group.add(this.mesh),this.eyes=new ct,this.lids=[],this.balls=[],this.group.add(this.eyes);let v=t==="cat";for(let[b,A]of[[0,-1],[1,1]]){let S=v?new C(...n.eyes[b].at):new C(...n.on(.047,A*.0215,.013)),M=S.clone().sub(new C(...n.head)).normalize();if(!v){let Q=new xe(new zt(.0085*n.S,.0012*n.S,6,14,Math.PI),new $e({color:"#2a140a",roughness:1,fog:!1}));Q.position.copy(S).addScaledVector(M,.0055),Q.quaternion.setFromUnitVectors(new C(0,0,1),M),Q.rotateZ(Math.PI),this.eyes.add(Q),this.lids.push(Q);let $=new xe(new $t(.0074*n.S,14,10),new $e({color:s.eye,roughness:.08,emissive:s.eye,emissiveIntensity:.25,fog:!1}));$.position.copy(S).addScaledVector(M,.0015),$.scale.setScalar(.001),this.eyes.add($),this.balls.push($);let k=new xe(new $t(.0048*n.S,10,8),new mt({color:"#0a0604",fog:!1}));k.position.copy(M).multiplyScalar(.0063*n.S),k.scale.set(.95,1.1,.5),k.quaternion.setFromUnitVectors(new C(0,0,1),M),$.add(k);continue}let w=new C(...n.top),D=new C().crossVectors(w,M).normalize(),O=new C().crossVectors(M,D).normalize(),X=new Wt().setFromRotationMatrix(new Te().makeBasis(D,O,M)),N=new xe(new zt(.0078,.001,6,16,2.3),new $e({color:"#4a2a16",roughness:1,fog:!1}));N.position.copy(S).addScaledVector(M,.0016).addScaledVector(O,.0052),N.quaternion.copy(X),N.rotateZ(-Math.PI/2-1.15),this.eyes.add(N),this.lids.push(N);let V=new ct;V.position.copy(S).addScaledVector(M,.0034),V.quaternion.copy(X),V.scale.setScalar(.001),V.userData.flat=.94,this.eyes.add(V),this.balls.push(V);let W=(Q,$,k,K=!0)=>{let te=new xe(new xi(Q,32),K?new mt({color:$,fog:!1}):new $e({color:$,roughness:.35,fog:!1}));return te.position.z=k,V.add(te),te};W(.0092,"#3a2210",0),W(.0082,s.eye,2e-4,!1),W(.0069,"#120a06",4e-4),W(.0022,"#fffdf4",6e-4).position.set(-.0024*A,.0026,6e-4),W(.0011,"#fffdf4",6e-4).position.set(.0022*A,-.0024,6e-4)}this.touch=new xe(new $t(.2*n.S,12,8),new mt({visible:!1})),this.touch.scale.y=.7,this.group.add(this.touch);let _=document.createElement("canvas");_.width=_.height=64;let T=_.getContext("2d"),E=T.createRadialGradient(32,32,10,32,32,32);E.addColorStop(0,"rgba(0,0,0,.6)"),E.addColorStop(1,"rgba(0,0,0,0)"),T.fillStyle=E,T.fillRect(0,0,64,64);let R=new xe(new ht(.56*n.S,.5*n.S).rotateX(-Math.PI/2),new mt({map:new It(_),transparent:!0,depthWrite:!1,fog:!1}));R.position.set(0,.001,.02),this.group.add(R),e.add(this.group),this.neck=new C(...n.neck).lerp(new C(...n.head),.72)}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&(e.geometry.dispose(),e.material.map&&e.material.map.dispose(),e.material.dispose())})}hit(e){let t=new Zt(e.origin,e.direction);this.touch.updateWorldMatrix(!0,!1),this.touch.material.visible=!0;let i=t.intersectObject(this.touch)[0];return this.touch.material.visible=!1,i?i.distance:null}pat(){this.goal=1,this.until=this.t+4.5,this.ear=1}update(e){this.t+=e,this.goal&&this.t>this.until&&(this.goal=0),this.awake+=(this.goal-this.awake)*(1-Math.exp(-e*3.2)),this.u.uBreath.value=(.5+.5*Math.sin(this.t*(1.5+this.awake)))*.0055,this.t>this.earAt&&(this.earAt=this.t+3+Math.random()*7,this.ear=1,this.which=Math.random()<.5),this.ear=Math.max(0,this.ear-e*3.2);let t=Math.sin(this.ear*Math.PI*3)*this.ear;this.u.uEar.value.set(this.which?t:0,this.which?0:t),this.u.uTip.value=Math.max(0,Math.sin(this.t*.7)-.55)*2*Math.sin(this.t*4)+this.awake*Math.sin(this.t*(this.kind==="dog"?11:3))*.9;let i=nh(Ht(this.awake)),n=this.u.uHead.value,s=.6*i+Math.sin(this.t*.9)*.18*i;n.makeTranslation(this.neck.x,this.neck.y+.022*i,this.neck.z).multiply(new Te().makeRotationY(s)).multiply(new Te().makeRotationAxis(new C(...this.body.side),-.42*i+Math.sin(this.t*1.5)*.006)).multiply(new Te().makeTranslation(-this.neck.x,-this.neck.y,-this.neck.z)),this.eyes.matrixAutoUpdate=!1,this.eyes.matrix.copy(n),this.eyes.matrixWorldNeedsUpdate=!0;let a=nh(Ht(this.awake*1.6-.3)),o=this.t%3.7<.14?.1:1;for(let l of this.lids)l.visible=a<.35;for(let l of this.balls)l.visible=a>.3,l.scale.set(1,Math.max(.05,a*o)*(l.userData.flat||1),1)}};var F0="musicroom",rh="pieces";function B0(){return new Promise((r,e)=>{let t=indexedDB.open(F0,1);t.onupgradeneeded=()=>t.result.createObjectStore(rh,{keyPath:"id"}),t.onsuccess=()=>r(t.result),t.onerror=()=>e(t.error)})}var rp=async(r,e)=>{let t=await B0();return new Promise((i,n)=>{let s=t.transaction(rh,r),a=e(s.objectStore(rh));s.oncomplete=()=>i(a&&a.result),s.onerror=()=>n(s.error)})},sp=()=>rp("readonly",r=>r.getAll()).catch(()=>[]),sh=r=>rp("readwrite",e=>e.put(r));var co=new Map,ap=()=>{},op=r=>{ap=r},np=!1;function lp(r,e){if(co.has(r))return co.get(r);try{return JSON.parse(localStorage.getItem(r)||e)}catch{return JSON.parse(e)}}function cp(r,e){co.set(r,e);try{return localStorage.setItem(r,JSON.stringify(e)),co.delete(r),!0}catch(t){return console.warn(`[store] not saved (${t.name}): ${r}`),np||(np=!0,ap(t)),!1}}var ho=r=>lp(`musicroom.pins.${r}`,"[]"),ah=(r,e)=>cp(`musicroom.pins.${r}`,e),hp=()=>lp("musicroom.prefs","{}"),Ss=r=>cp("musicroom.prefs",r);function up(r){let e=(i,n,s)=>{let a=i&240;a===144&&s>0?r(!0,n,s):(a===128||a===144&&s===0)&&r(!1,n,0)};window.musicRoomMidi=e;let t={kind:"none",inputs:[]};return navigator.requestMIDIAccess&&navigator.requestMIDIAccess().then(i=>{let n=()=>{t.inputs=[];for(let s of i.inputs.values())s.onmidimessage=a=>e(a.data[0],a.data[1],a.data[2]),t.inputs.push(s.name);t.kind=t.inputs.length?"web":"none"};i.onstatechange=n,n()}).catch(()=>{}),t}var oh={a:0,w:1,s:2,e:3,d:4,f:5,t:6,g:7,y:8,h:9,u:10,j:11,k:12,o:13,l:14,p:15,";":16,"'":17};function dp(r,e){let t=4,i=new Set;addEventListener("keydown",n=>{if(!e()||n.metaKey||n.ctrlKey||n.altKey||n.target.closest("input,select,textarea"))return;let s=n.key.toLowerCase();if(s==="z"){t=Math.max(1,t-1);return}if(s==="x"){t=Math.min(7,t+1);return}!(s in oh)||i.has(s)||(i.add(s),r(!0,12*(t+1)+oh[s],90),n.preventDefault())}),addEventListener("keyup",n=>{let s=n.key.toLowerCase();i.has(s)&&(i.delete(s),r(!1,12*(t+1)+oh[s],0))})}var pp=["Acoustic Grand Piano","Bright Piano","Electric Grand","Honky-tonk Piano","Electric Piano 1","Electric Piano 2","Harpsichord","Clavinet","Celesta","Glockenspiel","Music Box","Vibraphone","Marimba","Xylophone","Tubular Bells","Dulcimer","Drawbar Organ","Percussive Organ","Rock Organ","Church Organ","Reed Organ","Accordion","Harmonica","Tango Accordion","Nylon Guitar","Steel Guitar","Jazz Guitar","Clean Guitar","Muted Guitar","Overdrive Guitar","Distortion Guitar","Guitar Harmonics","Acoustic Bass","Fingered Bass","Picked Bass","Fretless Bass","Slap Bass 1","Slap Bass 2","Synth Bass 1","Synth Bass 2","Violin","Viola","Cello","Contrabass","Tremolo Strings","Pizzicato Strings","Harp","Timpani","Strings","Slow Strings","Synth Strings 1","Synth Strings 2","Choir Aahs","Voice Oohs","Synth Voice","Orchestra Hit","Trumpet","Trombone","Tuba","Muted Trumpet","French Horn","Brass Section","Synth Brass 1","Synth Brass 2","Soprano Sax","Alto Sax","Tenor Sax","Baritone Sax","Oboe","English Horn","Bassoon","Clarinet","Piccolo","Flute","Recorder","Pan Flute","Blown Bottle","Shakuhachi","Whistle","Ocarina","Square Lead","Saw Lead","Calliope Lead","Chiff Lead","Charang","Voice Lead","Fifths Lead","Bass Lead","New Age Pad","Warm Pad","Polysynth","Choir Pad","Bowed Pad","Metallic Pad","Halo Pad","Sweep Pad","Rain","Soundtrack","Crystal","Atmosphere","Brightness","Goblins","Echoes","Sci-fi","Sitar","Banjo","Shamisen","Koto","Kalimba","Bagpipe","Fiddle","Shanai","Tinkle Bell","Agogo","Steel Drums","Woodblock","Taiko Drum","Melodic Tom","Synth Drum","Reverse Cymbal","Fret Noise","Breath Noise","Seashore","Bird Tweet","Telephone","Helicopter","Applause","Gunshot"];function z0(r){let e=0;return{u8:()=>r[e++],u16:()=>r[e++]<<8|r[e++],u32:()=>(r[e++]<<24>>>0)+(r[e++]<<16)+(r[e++]<<8)+r[e++],vlq:()=>{let o=0,l;do l=r[e++],o=o<<7|l&127;while(l&128&&e<r.length);return o},str:o=>{let l="";for(let c=0;c<o;c++)l+=String.fromCharCode(r[e++]);return l},get p(){return e},set p(o){e=o},get end(){return e>=r.length}}}function H0(r){let e=r instanceof Uint8Array?r:new Uint8Array(r),t=z0(e);if(t.str(4)!=="MThd")throw new Error("not a MIDI file");let i=t.u32(),n=t.u16(),s=t.u16(),a=t.u16();if(t.p=8+i,a&32768)throw new Error("SMPTE-timed MIDI is not supported");let o=[];for(let l=0;l<s&&!t.end;l++){let c=t.str(4),h=t.u32(),u=t.p+h,d=[];if(c!=="MTrk"){t.p=u;continue}let p=0,g=0;for(;t.p<u;){p+=t.vlq();let y=e[t.p];if(y&128?(t.p++,y<240&&(g=y)):y=g,y===255){let f=t.u8(),x=t.vlq(),m=t.p;d.push({tick:p,meta:f,data:e.subarray(m,m+x)}),t.p=m+x}else if(y===240||y===247)t.p+=t.vlq();else{let f=y&240,x=y&15,m=t.u8(),v=f===192||f===208?0:t.u8();d.push({tick:p,kind:f,ch:x,a:m,c:v})}}t.p=u,o.push(d)}return{format:n,division:a,tracks:o}}function V0(r,e){for(let t of[8,12,16,24,32,48,64,96]){let i=4*e/t,n=i*.12;if(r.filter(a=>{let o=a%i;return Math.min(o,i-o)<=n}).length>=r.length*.95)return t}return null}function mp(r,e={}){let t=H0(r),i=t.division,n=[],s=[],a=[],o=new Map,l=[],c=m=>on(m,4*i);t.tracks.forEach((m,v)=>{let _=null,T=new Map,E=new Array(16).fill(0);for(let R of m)if(R.meta===81)n.push({at:c(R.tick),bpm:6e7/(R.data[0]<<16|R.data[1]<<8|R.data[2])});else if(R.meta===88)s.push({at:c(R.tick),num:R.data[0],den:2**R.data[1]});else if(R.meta===89)a.push({at:c(R.tick),fifths:R.data[0]<<24>>24,mode:R.data[1]?"minor":"major"});else if(R.meta===3)_=new TextDecoder().decode(R.data).trim();else if(R.kind===192)E[R.ch]=R.a;else if(R.kind===144&&R.c>0){let b=`${R.ch}:${R.a}`;T.has(b)||T.set(b,[]),T.get(b).push({tick:R.tick,vel:R.c})}else if(R.kind===128||R.kind===144&&R.c===0){let b=`${R.ch}:${R.a}`,A=T.get(b);if(!A||!A.length)continue;let S=A.shift(),M=`${v}:${R.ch}`;o.has(M)||o.set(M,{id:o.size,name:_||(R.ch===9?"Drums":pp[E[R.ch]]||`Track ${v+1}`),program:E[R.ch],channel:R.ch,percussion:R.ch===9}),l.push({part:o.get(M).id,midi:R.a,on:S.tick,off:Math.max(R.tick,S.tick+1),vel:S.vel,percussion:R.ch===9})}for(let R of o.values())R.name.startsWith("Track")&&_&&(R.name=_)}),l.sort((m,v)=>m.on-v.on||m.midi-v.midi);let h=V0(l.map(m=>m.on),i),u=h?4*i/h:1,d=m=>h?Math.round(m/u)*u:m;n.sort((m,v)=>ce(m.at)-ce(v.at)),s.sort((m,v)=>ce(m.at)-ce(v.at)),n.length&&ce(n[0].at)>0&&n.unshift({at:pi,bpm:120});for(let m=a.length-1;m>=0;m--)Math.abs(a[m].fifths)>7&&a.splice(m,1);let p=n.length?n[0].bpm:120,g=l.filter(m=>!m.percussion),y=Gh(g.map(m=>({midi:m.midi,d:m.off-m.on})),a.length?a[0].fifths:null),f=0,x=l.map(m=>{let v=d(m.on),_=Math.max(v+(h?u/2:1),d(m.off)),T=m.percussion?0:y[f++];return{part:m.part,staff:1,voice:1,pitch:Wh(m.midi,T),onset:c(v),dur:c(_-v),grace:!1,vel:m.vel,off:(m.on-v)/i*(60/p),percussion:m.percussion}});return Rs({parts:[...o.values()],meter:s.length?fp(s):[],keys:a,tempo:n.length?fp(n):[{at:pi,bpm:120}],notes:x,...e,grid:h})}var fp=r=>{let e=new Map;for(let t of r)e.set(`${t.at.n}/${t.at.d}`,t);return[...e.values()]};var G0={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"},gp=r=>r.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi,(e,t)=>t[0]==="#"?String.fromCodePoint(t[1]==="x"||t[1]==="X"?parseInt(t.slice(2),16):Number(t.slice(1))):G0[t]??e);function vp(r){let e={name:"#root",attrs:{},children:[],text:""},t=[e],i=/<!--[\s\S]*?-->|<!\[CDATA\[([\s\S]*?)\]\]>|<\?[\s\S]*?\?>|<!DOCTYPE[\s\S]*?>|<(\/?)([\w:.-]+)((?:\s+[\w:.-]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>|([^<]+)/g,n;for(;n=i.exec(r);){let s=t.at(-1);if(n[1]!==void 0){s.text+=n[1];continue}if(n[3]){if(n[2]){t.length>1&&t.pop();continue}let a={name:n[3],attrs:{},children:[],text:""};for(let o of n[4].matchAll(/([\w:.-]+)\s*=\s*("([^"]*)"|'([^']*)')/g))a.attrs[o[1]]=gp(o[3]??o[4]);s.children.push(a),n[5]||t.push(a);continue}n[6]!==void 0&&(s.text+=gp(n[6]))}return e}var Tr=(r,e)=>r?r.children.filter(t=>t.name===e):[],vt=(r,e)=>r&&r.children.find(t=>t.name===e)||null,pt=(r,e)=>{let t=e?vt(r,e):r;return t?t.text.trim():null};async function xp(r){let e=r instanceof Uint8Array?r:new Uint8Array(r),t=new DataView(e.buffer,e.byteOffset,e.byteLength),i=e.length-22;for(;i>=0&&t.getUint32(i,!0)!==101010256;)i--;if(i<0)throw new Error("not a zip file");let n=t.getUint16(i+10,!0),s=t.getUint32(i+16,!0),a=new Map;for(let o=0;o<n&&t.getUint32(s,!0)===33639248;o++){let l=t.getUint16(s+10,!0),c=t.getUint32(s+20,!0),h=t.getUint16(s+28,!0),u=t.getUint16(s+30,!0),d=t.getUint16(s+32,!0),p=t.getUint32(s+42,!0),g=new TextDecoder().decode(e.subarray(s+46,s+46+h)),y=p+30+t.getUint16(p+26,!0)+t.getUint16(p+28,!0),f=e.subarray(y,y+c);a.set(g,{method:l,data:f}),s+=46+h+u+d}return{names:[...a.keys()],async read(o){let l=a.get(o);if(!l)return null;if(l.method===0)return l.data;if(l.method!==8)throw new Error(`zip method ${l.method} is not supported`);let c=new Blob([l.data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(c).arrayBuffer())}}}var W0=r=>Number.isInteger(r)?r*Ch:Math.round(r*53/12);async function yp(r){let e=await xp(r),t=s=>new TextDecoder().decode(s),i=await e.read("META-INF/container.xml"),n=null;if(i){let s=/full-path\s*=\s*"([^"]+)"/.exec(t(i));s&&(n=s[1])}if(n||(n=e.names.find(s=>/\.(xml|musicxml)$/i.test(s)&&!s.startsWith("META-INF"))),!n)throw new Error("no score in this .mxl");return t(await e.read(n))}function lh(r,e={}){let t=vp(r),i=vt(t,"score-partwise");if(!i)throw new Error(vt(t,"score-timewise")?"timewise MusicXML is not supported":"not a MusicXML score");let n=pt(vt(i,"work"),"work-title")||pt(i,"movement-title")||e.title,s=Tr(vt(i,"identification"),"creator").find(p=>p.attrs.type==="composer"),a=vt(i,"part-list"),o=[],l=[],c=[],h=[],u=[],d=[];for(let p of Tr(a,"score-part")){let g=Number(pt(vt(p,"midi-instrument"),"midi-program")||1)-1;o.push({id:o.length,xml:p.attrs.id,name:pt(p,"part-name")||`Part ${o.length+1}`,program:Math.max(0,g)})}return Tr(i,"part").forEach((p,g)=>{let y=o.findIndex(b=>b.xml===p.attrs.id),f=y>=0?y:g;o[f]||(o[f]={id:f,name:`Part ${f+1}`,program:0});let x=1,m=pi,v=pi,_=pi,T={num:4,den:4},E=new Map,R=[];for(let b of Tr(p,"measure")){v=m;let A=m,S=Number(b.attrs.number)||d.length+1,M={};for(let w of b.children)if(w.name==="barline"){let D=vt(w,"repeat"),O=pt(w,"bar-style");D&&D.attrs.direction==="forward"&&(M.repeatStart=!0),D&&D.attrs.direction==="backward"&&(M.repeatEnd=!0),(O==="light-light"||O==="light-heavy")&&(M.double=!0)}else if(w.name==="attributes"){vt(w,"divisions")&&(x=Number(pt(w,"divisions")));let D=vt(w,"time");D&&vt(D,"beats")&&(T={num:Number(pt(D,"beats").split("+").reduce((X,N)=>X+Number(N),0)),den:Number(pt(D,"beat-type"))},f===0&&c.push({at:m,...T}));let O=vt(w,"key");O&&vt(O,"fifths")&&f===0&&h.push({at:m,fifths:Number(pt(O,"fifths")),mode:pt(O,"mode")||void 0})}else if(w.name==="direction"||w.name==="sound"){let D=w.name==="sound"?w:vt(w,"sound");D&&D.attrs.tempo&&f===0&&u.push({at:m,bpm:Number(D.attrs.tempo)})}else if(w.name==="backup")m=As(m,on(Number(pt(w,"duration")),4*x));else if(w.name==="forward")m=Ts(m,on(Number(pt(w,"duration")),4*x)),A=_o(A,m);else if(w.name==="note"){let D=!!vt(w,"chord"),O=!!vt(w,"grace"),X=!!vt(w,"rest"),N=O?pi:on(Number(pt(w,"duration")||0),4*x),V=D?_:m;if(D||(_=m),!X){let W=vt(w,"pitch")||vt(w,"unpitched");if(W){let Q=W.name==="pitch",$=Q?pt(W,"step"):pt(W,"display-step"),k=Number(Q?pt(W,"octave"):pt(W,"display-octave")),K=Number(pt(W,"alter")||0),te={part:f,staff:Number(pt(w,"staff")||1),voice:Number(pt(w,"voice")||1),pitch:Ph($,k,W0(K)),onset:V,dur:N,grace:O,vel:80,percussion:!Q},ue=Tr(w,"tie").map(U=>U.attrs.type),pe=`${te.staff}:${te.voice}:${$}${k}:${K}`;if(O)R.push(te),te.graceIndex=R.length,l.push(te);else if(R.length&&(R.forEach((U,L)=>{U.onset=V,U.graceIndex=R.length-L}),R=[]),ue.includes("stop")&&E.has(pe)){let U=E.get(pe);U.dur=Ts(U.dur,N),ue.includes("start")||E.delete(pe)}else l.push(te),ue.includes("start")&&E.set(pe,te)}}!D&&!O&&(m=Ts(m,N),A=_o(A,m))}m=A,f===0&&d.push({n:S,at:v,dur:Rh(As(m,v),pi)>0?As(m,v):on(T.num,T.den),...M})}}),Rs({title:n,composer:s?s.text.trim():e.composer,parts:o,meter:c,keys:h,tempo:u.length?u:[{at:pi,bpm:100}],bars:d,notes:l,...e,...n?{title:n}:{}})}async function _p(r,e){let t=e instanceof Uint8Array?e:new Uint8Array(e),i=String.fromCharCode(...t.subarray(0,4)),n=r.replace(/\.[^.]+$/,"").replace(/[_-]+/g," "),s={id:`user-${r}`,title:n,source:r,licence:"yours (kept in this browser)"};if(i==="MThd")return mp(t,s);if(Ps(t,r))throw new Error(`${r}: a recording, to be decoded and heard (fromAudio), not read`);if(i==="PK")return lh(await yp(t),s);let a=new TextDecoder().decode(t);if(/<score-(partwise|timewise)/.test(a.slice(0,4e3)))return lh(a,s);throw new Error(`${r}: not MIDI, MusicXML or a recording (modules come in slice 2)`)}async function Mp(r){let e=window.OfflineAudioContext||window.webkitOfflineAudioContext,i=await new e(1,1,zh).decodeAudioData(r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)),n=i.length,s=new Float32Array(n);for(let a=0;a<i.numberOfChannels;a++){let o=i.getChannelData(a);for(let l=0;l<n;l++)s[l]+=o[l]/i.numberOfChannels}return{pcm:s,sr:i.sampleRate}}function Sp(r,e,t,i=()=>{}){return new Promise((n,s)=>{let a=new Worker(new URL("./hear-worker.js",import.meta.url),{type:"module"});a.onmessage=o=>{let l=o.data;l.progress!==void 0?i(l.progress,l.what):(a.terminate(),l.error?s(new Error(l.error)):n(l.packed))},a.onerror=o=>{a.terminate(),s(new Error(o.message||"the listening Worker failed"))},a.postMessage({pcm:r,sr:e,meta:t},[r.buffer])})}var de=r=>document.getElementById(r),Tt=(r,e=3200)=>{let t=document.createElement("div");return t.textContent=r,de("toasts").append(t),e&&setTimeout(()=>t.remove(),e),t},ch=r=>`${Math.round(r*100)}%`,hh=class{constructor(){let e=this.view=new eo(de("view"));this.shelf=new to(e.scene),this.piano=new io(e.scene,e.env),this.form=new yr(e.scene,"form",.56,.56*(In.h/In.w),-.31,-.13,0,[In.w,In.h]),this.map=new yr(e.scene,"map",.42,.42*(An.h/An.w),.36,-.17,0,[An.w,An.h]),this.roll=new yr(e.scene,"roll",1.12,1.12*(Pn.h/Pn.w),.02,.32,0,[Pn.w,Pn.h]),this.sheets=[this.form,this.map,this.roll],this.blank("Take a book from the shelf"),this.player=new ro,this.player.onEnd=()=>this.ui(),this.prefs={axis:"chromatic",bars:4,rate:100,...hp()},this.worker=new Worker(new URL("./analysis-worker.js",import.meta.url),{type:"module"}),this.worker.onmessage=i=>this.analysed(i.data),this.job=0,this.s=null,this.a=null,this.rollT=0,this.live=new Map,this.touches=new Map,setTimeout(()=>{e.pet=new lo(e.scene,"cat",e.touch?11:18),e.pet.update(.01)},300),this.bind(),this.books(),this.last=performance.now();let t=i=>{this.real=Math.max(0,(i-this.last)/1e3),this.frame(Math.min(.05,this.real)),this.last=Math.max(this.last,i),requestAnimationFrame(t)};requestAnimationFrame(t),Mi.onChange=()=>this.soundState(),op(()=>Tt("This browser would not keep your settings and pins (its storage for aykutkilic.github.io is full or refused). They hold until the page is closed.",7e3)),this.midi=up((i,n,s)=>this.key(i,n,s)),dp((i,n,s)=>this.key(i,n,s),()=>this.view.at==="piano")}async books(){try{let t=await fetch(new URL("./pieces/index.json",import.meta.url));this.index=t.ok?(await t.json()).books:[]}catch{this.index=[]}this.mine=await sp();let e=this.index.map(t=>({id:t.id,title:t.id.replace("K","K. "),sub:t.title.replace(/^Sonata no\. \d+ in /,""),book:t}));for(let t of this.mine)e.push({id:t.id,title:t.title.slice(0,18),sub:"yours",user:!0,piece:t});if(this.shelf.fill(e),!this.s&&this.prefs.last&&!this.reopened){this.reopened=!0;let t=this.mine.find(n=>n.id===this.prefs.last),i=this.index.some(n=>n.movements.some(s=>s.id===this.prefs.last));t?this.open({id:t.id,packed:t.packed,recording:t.audio}):i&&this.open({id:this.prefs.last})}!this.index.length&&!this.mine.length&&Tt("The shelf is empty: add a MIDI, MusicXML or audio file")}take(e){if(e.piece){this.open({id:e.piece.id,packed:e.piece.packed,recording:e.piece.audio});return}let t=e.book,i=de("book"),n=de("movements");de("bookTitle").textContent=`${t.composer}, ${t.title}`,n.replaceChildren(...t.movements.map(s=>{let a=document.createElement("li"),o=document.createElement("button");return o.textContent=`${s.title} · ${s.bars} bars`,o.onclick=()=>{i.close(),this.open({id:s.id})},a.append(o),a})),i.showModal()}async open({id:e,packed:t,recording:i=null}){this.player.stop(),this.card(null);try{if(!t){let n=await fetch(new URL(`./pieces/${e}.json`,import.meta.url));if(!n.ok)throw new Error(`${e}: ${n.status}`);t=await n.json()}}catch(n){Tt(`Could not open it: ${n.message}`);return}this.packed=t,this.s=Vh(t),this.id=e,this.a=null,this.fns=null,this.rollT=0,this.prefs.last=e,Ss(this.prefs),this.blank("Listening to it…"),this.player.load(this.s,this.s.audio?i:null),this.player.rate=this.prefs.rate/100,de("hearWrap").hidden=!this.player.recording,de("hear").value=this.player.mode,de("legend").hidden=!!this.s.line,de("axis").parentElement.hidden=!!this.s.line,de("heading").textContent=this.s.title||e,de("playBtn").disabled=!1,this.analyse(),this.go("read",this.form),this.ui()}blank(e){for(let[t,i]of[[this.form,"Form"],[this.map,"Map"],[this.roll,"Piano roll"]])t.drawn(kd(t.canvas,i,e))}analyse(){this.job++,this.t=performance.now(),this.worker.postMessage({id:this.job,packed:this.packed,pins:ho(this.id)})}analysed(e){if(e.id===this.job){if(e.error){console.error(e.error),Tt("The analysis failed: see the console");return}if(this.a=e.a,this.fns=e.fns,console.log(`[analysis] ${this.id}: ${e.a.form[0]?e.a.form[0].label:"-"} (${e.a.form[0]?e.a.form[0].data.letters:""}), ${e.a.section.length} sections, ${e.a.key.length} keys, ${e.a.harmony.length} chords, ${e.a.cadence.length} cadences, ${e.a.phrase.length} phrases in ${e.ms.toFixed(0)} ms`),this.now(),this.draw(),this.sel){let t=this.find(this.sel);this.card(t)}}}draw(){if(!this.s||!this.a)return;let e=!!this.s.line;this.form.drawn((e?Yd:Wd)(this.form.canvas,this.s,this.a)),this.map.drawn((e?$d:zd)(this.map.canvas,this.s,this.a)),this.drawRoll()}drawRoll(){this.rollDirty=!1,this.s&&this.a&&this.roll.drawn((this.s.line?qd:Gd)(this.roll.canvas,this.s,this.a,this.fns,{t:this.rollT,bars:Number(this.prefs.bars),axis:this.prefs.axis}))}scrollRoll(e){if(!this.s)return;let t=ce(this.s.bars.at(-1).at);e=Math.max(0,Math.min(t,e)),Math.abs(e-this.rollT)>1e-6&&(this.rollT=e,this.rollDirty=!0)}rollWindow(){let e=this.roll.out;return e?e.t1-e.t0:1}find(e){return(this.a[e.layer]||[]).find(t=>ce(t.start)===e.start)||null}now(){let e=de("now");if(!this.a||!this.a.section){e.hidden=!0;return}let t=this.player.at,i=this.a.section.find(n=>ce(n.start)<=t+1e-9&&t<ce(n.end))||this.a.section[0];if(!i){e.hidden=!0;return}e.hidden=!1,e.style.borderColor=i.data.color,e.innerHTML=`<b style="color:${i.data.color}">${i.label}</b> ${i.data.role||""} <span>bars ${i.data.bars[0]}–${i.data.bars[1]}</span>`,e.onclick=()=>this.card(i)}card(e,t){let i=de("card");if(!e&&!t){i.hidden=!0,this.sel=null;return}if(i.hidden=!1,t&&t.line){let c=t.line,h=this.a.makamInfo,u=h.perdes[c.held],d=Math.floor(c.t/60),p=(c.t%60).toFixed(1);de("cardLayer").textContent="note",de("cardTitle").textContent=u?u.name:`${Math.round(c.cents)} cents`,de("cardSure").innerHTML='<b class="pencil">pencil</b>: heard, not checked',de("cardWhy").textContent=`${d}:${p.padStart(4,"0")}, ${c.d.toFixed(2)} s; ${((c.cents-h.karar)/(1200/53)).toFixed(1)} commas over the karar${u&&Math.abs(u.off)>=.5?` (${u.off>0?"+":""}${u.off.toFixed(1)} from where AEU writes it)`:""}${c.vibrato?`; vibrato ${c.vibrato.rate.toFixed(1)} Hz, ±${c.vibrato.extent.toFixed(0)} cents`:""}.`,de("cardAlts").replaceChildren(),de("cardUnpin").hidden=!0,this.sel=null,de("cardPlay").onclick=()=>{this.player.seek(c.t/4),this.player.playing||this.player.play().then(()=>{setTimeout(()=>{this.player.pause(),this.ui()},Math.max(400,c.d*1e3+300)),this.ui()})};return}if(t){let c=t.note,h=Cs(this.s,c.onset);de("cardLayer").textContent="note",de("cardTitle").textContent=Uh(c.pitch),de("cardSure").innerHTML=`<i style="display:inline-block;width:12px;height:12px;border-radius:3px;background:${Tn[t.fn]}"></i> ${eh[t.fn]}`;let u=(this.a.harmony||[]).find(d=>ce(d.start)<=ce(c.onset)+1e-9&&ce(c.onset)<ce(d.end));de("cardWhy").textContent=`bar ${h.bar}, beat ${h.beat.toFixed(h.beat%1?2:0)}${u?`, over ${u.label}`:""}.`,de("cardAlts").replaceChildren(),de("cardUnpin").hidden=!0,this.sel=null,de("cardPlay").onclick=()=>{vs().then(()=>{br(15,0),xs(15,Math.round(12*(c.pitch.octave+1)+[0,2,4,5,7,9,11]["CDEFGAB".indexOf(c.pitch.step)]+c.pitch.alter/5),90),setTimeout(()=>ys(15,Math.round(12*(c.pitch.octave+1)+[0,2,4,5,7,9,11]["CDEFGAB".indexOf(c.pitch.step)]+c.pitch.alter/5)),700)})};return}this.sel={layer:e.layer,start:ce(e.start)};let n=e.source!=="auto"||e.confidence>=(At[e.layer]??.9),s=Cs(this.s,e.start),a=Cs(this.s,e.end),o=c=>{let h=ce(c)*4;return`${Math.floor(h/60)}:${String(Math.floor(h%60)).padStart(2,"0")}`};de("cardLayer").textContent=this.s.line?`${e.layer} · ${o(e.start)}–${o(e.end)}`:`${e.layer} · bars ${s.bar}–${a.beat>1.001?a.bar:Math.max(s.bar,a.bar-1)}`,de("cardTitle").textContent=e.label,de("cardSure").innerHTML=(e.source==="pinned"?'<b class="firm">pinned by you</b>':n?`<b class="firm">ink</b>: sure (${ch(e.confidence)})`:`<b class="pencil">pencil</b>: a guess (${ch(e.confidence)})`)+(this.s.audio&&e.source==="auto"?" · heard from a recording":""),de("cardWhy").textContent=e.explanation;let l=(e.alternatives||[]).filter(c=>c.data);if(de("cardAlts").replaceChildren(...l.length?[Object.assign(document.createElement("p"),{textContent:"It could also be:",style:"margin:8px 0 2px;color:#8b8371"})]:[],...l.map(c=>{let h=document.createElement("div"),u=document.createElement("button");return h.className="alt",h.append(Object.assign(document.createElement("span"),{textContent:`${c.label} (${ch(c.confidence)})`})),u.textContent="Pin this",u.onclick=()=>this.pin(e,c),h.append(u),h})),e.source==="auto"&&["key","harmony","makam"].includes(e.layer)&&!(e.data&&e.data.whole)){let c=document.createElement("button");c.textContent="Pin as it is",c.style.marginTop="6px",c.onclick=()=>this.pin(e,{label:e.label,data:e.data}),de("cardAlts").append(c)}de("cardUnpin").hidden=e.source!=="pinned",de("cardUnpin").onclick=()=>this.unpin(e),de("cardPlay").onclick=()=>{this.player.seek(ce(e.start)),this.player.play().then(()=>{let c=ce(e.end),h=setInterval(()=>{(!this.player.playing||this.player.at>=c)&&(this.player.pause(),clearInterval(h),this.ui())},50);this.ui()})}}pin(e,t){let i={...e.data,...t.data},n=Bh(e.layer,e.start,e.end,t.label,{source:"pinned",data:i,explanation:`pinned by you (the analysis said ${e.label})`}),s=ho(this.id).filter(a=>!(a.layer===n.layer&&ce(a.start)===ce(n.start)));s.push(n),ah(this.id,s),Tt(`Pinned: ${t.label}. The rest is heard again around it.`),this.analyse()}unpin(e){ah(this.id,ho(this.id).filter(t=>!(t.layer===e.layer&&ce(t.start)===ce(e.start)))),Tt("Unpinned"),this.analyse()}key(e,t,i){vs().then(()=>{br(15,0),e?xs(15,t,i):ys(15,t)}),this.piano.press(t,e,e?"#d8b56a":null),e?this.live.set(t,!0):this.live.delete(t)}bind(){let e=this.view,t=de("view"),i=null;t.addEventListener("pointerdown",a=>{if(t.setPointerCapture(a.pointerId),this.touches.set(a.pointerId,{x:a.clientX,y:a.clientY}),this.touches.size===2){i&&i.key!==void 0&&this.key(!1,i.key,0),i={pinch:!0,moved:!0};return}i={x:a.clientX,y:a.clientY,lx:a.clientX,ly:a.clientY,t:performance.now(),moved:!1};let o=e.ray(a.clientX,a.clientY);if(e.at==="piano"){let l=this.piano.hit(o);l!==null&&(i.key=l,this.key(!0,l,90))}}),t.addEventListener("pointermove",a=>{let o=e.ray(a.clientX,a.clientY),l=this.touches.get(a.pointerId);if(l&&this.touches.size===2){let[c,h]=[...this.touches.values()],u=Math.hypot(c.x-h.x,c.y-h.y),d=[(c.x+h.x)/2,(c.y+h.y)/2];this.touches.set(a.pointerId,{x:a.clientX,y:a.clientY});let[p,g]=[...this.touches.values()],y=Math.hypot(p.x-g.x,p.y-g.y),f=[(p.x+g.x)/2,(p.y+g.y)/2];u>10&&y>10&&e.zoomBy(u/y,f[0],f[1]),this.drag(d[0]-f[0],d[1]-f[1]);return}if(l&&this.touches.set(a.pointerId,{x:a.clientX,y:a.clientY}),i&&!i.pinch&&(Math.hypot(a.clientX-i.x,a.clientY-i.y)>8&&(i.moved=!0),i.moved&&i.key===void 0&&this.drag(i.lx-a.clientX,i.ly-a.clientY),i.lx=a.clientX,i.ly=a.clientY,i.key!==void 0)){let c=this.piano.hit(o);c!==i.key&&(this.key(!1,i.key,0),c!==null?(i.key=c,this.key(!0,c,90)):delete i.key)}this.hover=e.at==="shelf"?this.shelf.hit(o):null,t.style.cursor=i&&i.moved?"grabbing":this.hover||e.at==="desk"&&this.sheets.some(c=>c.at(o))||e.at==="piano"&&this.piano.hit(o)!==null?"pointer":"default"});let n=a=>{this.touches.delete(a.pointerId);let o=i;if(this.touches.size===0&&(i=null),!(!o||o.pinch)){if(o.key!==void 0){this.key(!1,o.key,0);return}o.moved||a.type==="pointercancel"||this.touch(e.ray(a.clientX,a.clientY))}};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("wheel",a=>{a.preventDefault();let o=a.deltaMode!==0||a.deltaX===0&&Math.abs(a.deltaY)>=50&&Number.isInteger(a.deltaY);if(a.ctrlKey||o&&!(e.at==="read"&&e.reading===this.roll)){e.zoomBy(Math.exp(Math.max(-.5,Math.min(.5,a.deltaY*(a.ctrlKey?.01:.002)))),a.clientX,a.clientY);return}let l=a.deltaMode===1?30:1;if(o){this.scrollRoll(this.rollT+Math.sign(a.deltaY)*this.rollWindow()*.25);return}this.drag(a.deltaX*l,a.deltaY*l,!0)},{passive:!1});let s=1;t.addEventListener("gesturestart",a=>{a.preventDefault(),s=1}),t.addEventListener("gesturechange",a=>{a.preventDefault(),e.zoomBy(s/a.scale,innerWidth/2,innerHeight/2),s=a.scale}),addEventListener("keydown",a=>{a.target.closest("input,select,textarea,dialog")||(a.key==="Escape"&&(de("card").hidden?e.at==="read"&&this.go("desk"):this.card(null)),a.key===" "&&e.at!=="piano"&&(a.preventDefault(),this.toggle()),e.at==="read"&&e.reading===this.roll&&(a.key==="ArrowRight"||a.key==="ArrowLeft")&&this.step(a.key==="ArrowRight"?1:-1),a.key==="0"&&!a.target.closest("input")&&(e.panGoal={x:0,y:0},e.zoomGoal=1))}),de("shelfBtn").onclick=()=>this.go("shelf"),de("deskBtn").onclick=()=>this.go("desk"),de("pianoBtn").onclick=()=>this.go("piano"),de("formBtn").onclick=()=>this.go("read",this.form),de("mapBtn").onclick=()=>this.go("read",this.map),de("rollBtn").onclick=()=>this.go("read",this.roll),de("fitBtn").onclick=()=>{e.panGoal={x:0,y:0},e.zoomGoal=1},de("playBtn").onclick=()=>this.toggle(),de("rate").value=this.prefs.rate,de("rateOut").textContent=`${this.prefs.rate}%`,de("rate").oninput=()=>{this.prefs.rate=Number(de("rate").value),de("rateOut").textContent=`${this.prefs.rate}%`,Ss(this.prefs);let a=this.player.playing;this.player.pause(),this.player.rate=this.prefs.rate/100,a&&this.player.play()},de("axis").value=this.prefs.axis,de("span").value=String(this.prefs.bars),de("axis").onchange=()=>{this.prefs.axis=de("axis").value,Ss(this.prefs),this.drawRoll()},de("span").onchange=()=>{this.prefs.bars=Number(de("span").value),Ss(this.prefs),this.drawRoll()},de("prevBars").onclick=()=>this.step(-1),de("nextBars").onclick=()=>this.step(1),de("legend").replaceChildren(...Object.entries(eh).filter(([a])=>a!=="grace").map(([a,o])=>Object.assign(document.createElement("span"),{innerHTML:`<i style="background:${Tn[a]}"></i>${o}`}))),de("cardX").onclick=()=>this.card(null);for(let a of document.querySelectorAll("dialog"))a.querySelector(".shut").onclick=()=>a.close();de("addBtn").onclick=()=>de("file").click(),de("hear").onchange=()=>{let a=this.player.playing;this.player.pause(),this.player.mode=de("hear").value,a&&this.player.play().then(()=>this.ui())},de("file").onchange=()=>{for(let a of de("file").files)this.add(a);de("file").value=""},addEventListener("dragover",a=>{a.preventDefault(),de("drop").hidden=!1}),addEventListener("dragleave",a=>{a.relatedTarget||(de("drop").hidden=!0)}),addEventListener("drop",a=>{a.preventDefault(),de("drop").hidden=!0;for(let o of a.dataTransfer.files)this.add(o)})}drag(e,t,i=!1){let n=this.view;if(n.at==="read"&&n.reading===this.roll&&this.s){let s=this.rollWindow()/(innerWidth*.9);Math.abs(e)>=Math.abs(t)||n.zoomGoal>.95?this.scrollRoll(this.rollT+(Math.abs(e)>=Math.abs(t)?e:t)*s):n.panBy(0,t);return}n.panBy(e,t)}step(e){this.s&&this.scrollRoll(this.rollT+e*this.rollWindow()*.75)}touch(e){let t=this.view;if(t.at==="shelf"){let i=this.shelf.hit(e);i&&this.take(i);return}if(t.at==="desk"){for(let i of this.sheets)if(i.at(e))return this.go("read",i);return}if(t.at==="read"&&t.reading&&this.s&&this.a){let i=t.reading.at(e);if(!i)return this.go("desk");let n=t.reading.pick(i);if(!n){this.card(null);return}if(n.kind==="span")this.card(n.span);else if(n.kind==="note")this.card(null,n);else if(n.kind==="time")this.player.seek(n.t),Tt(`From bar ${n.bar}`,1200),this.now();else if(n.kind==="timeline"){let s=n.t0+(i.x-n.x)/n.w*(n.t1-n.t0);this.player.seek(s),this.now()}else if(n.kind==="matrix"){let s=Math.min(this.s.bars.length-1,Math.floor((i.x-n.x0)/n.cell)),a=Math.min(this.s.bars.length-1,Math.floor((i.y-n.y0)/n.cell));this.player.seek(ce(this.s.bars[s].at)),this.now(),Tt(`Bars ${this.s.bars[a].n} and ${this.s.bars[s].n}: ${Math.round(this.a.matrix[a][s]*100)}% alike. Playing from bar ${this.s.bars[s].n}.`,2600)}}}go(e,t=null){if(e==="read"&&!this.s){Tt("Take a book from the shelf first");return}this.view.go(e,t),this.ui(),document.body.classList.toggle("reading",e==="read")}async add(e){try{let t=new Uint8Array(await e.arrayBuffer());if(Ps(t,e.name)){await this.addRecording(e,t);return}let i=await _p(e.name,t),n=`user-${Date.now().toString(36)}`;i.id=n;let s={id:n,title:i.title||e.name,name:e.name,added:Date.now(),packed:Hh(i)};await sh(s),Tt(`${s.title} is on the shelf (kept in this browser only)`),await this.books(),this.open({id:n,packed:s.packed})}catch(t){console.error(t),Tt(`${e.name}: ${t.message}`,5e3)}}async addRecording(e,t){let i=Tt(`Listening to ${e.name}…`,0),n=`user-${Date.now().toString(36)}`,s=performance.now();try{let{pcm:a,sr:o}=await Mp(t),l=e.name.replace(/\.[^.]+$/,"").replace(/[_-]+/g," "),c=await Sp(a,o,{id:n,title:l,source:e.name,licence:"yours (kept in this browser)"},(d,p)=>{i.textContent=`Listening to ${e.name}: ${p} (${Math.round(d*100)}%)`}),h={id:n,title:l,name:e.name,added:Date.now(),packed:c,audio:new Blob([t],{type:e.type||"audio/*"})},u=c.audio;console.log(`[audio] ${e.name}: ${u.seconds.toFixed(1)} s, ${u.bpm} a minute, ${u.meter} to a bar, ${u.heard} notes, tuning ${u.tuning} cents, heard in ${Math.round(performance.now()-s)} ms`);try{await sh(h),Tt(`${l} is on the shelf (kept in this browser only)`)}catch(d){console.warn(d),Tt(`${l} is heard, but this browser would not keep the recording (${d.name}): it is open until the page is closed`,7e3)}await this.books(),this.open({id:n,packed:c,recording:h.audio})}catch(a){console.error(a),Tt(`${e.name}: ${a.message}`,6e3)}finally{i.remove()}}toggle(){this.s&&(this.player.playing?this.player.pause():this.player.play().then(()=>this.ui()),this.ui())}soundState(){let e=Mi;e.ready&&!this.tuned?(this.tuned=!0,this.player.programs(),br(15,0),Tt("The piano is tuned (GeneralUser GS)",1800)):e.failed&&Tt("Playing with a simple synth: the SoundFont could not be loaded"),this.ui()}ui(){let e=this.view,t=Mi;de("playBtn").textContent=this.player.playing?"❚❚ Pause":"▶ Play",de("playBtn").title=t.ready?"":t.failed?"a simple synth plays: the SoundFont could not be loaded":`the piano is being fetched (${Math.round(t.progress*100)}%); a simple synth plays meanwhile`,!t.ready&&!t.failed&&t.progress>0&&(de("playBtn").textContent+=` · piano ${Math.round(t.progress*100)}%`);for(let[i,n]of[["shelfBtn",e.at==="shelf"],["deskBtn",e.at==="desk"],["pianoBtn",e.at==="piano"],["formBtn",e.at==="read"&&e.reading===this.form],["mapBtn",e.at==="read"&&e.reading===this.map],["rollBtn",e.at==="read"&&e.reading===this.roll]])de(i).classList.toggle("on",n);de("rollBar").hidden=!(e.at==="read"&&e.reading===this.roll)}frame(e){let t=this.view;t.place(e,this.real||e),t.live(e),t.at==="shelf"&&this.shelf.hover(this.hover);let i=this.player.sounding(),n=new Map;for(let s of i)n.set(s.key,this.fns?Tn[this.fns[s.n.id]]:"#d8b56a");for(let[s,a]of n)this.piano.press(s,!0,a);for(let s of this.piano.keys.keys())!n.has(s)&&!this.live.has(s)&&this.piano.keys.get(s).goal&&this.piano.press(s,!1);if(this.piano.update(e),this.s&&this.a&&(this.player.playing||this.player.pos>0)){let s=this.player.at,a=this.roll.out;if(a){if(this.player.playing&&(s>=a.t1-1e-6||s<a.t0-1e-6)){let h=this.s.bars.findIndex((u,d)=>s<(d+1<this.s.bars.length?ce(this.s.bars[d+1].at):1/0));this.rollT=ce(this.s.bars[Math.max(0,h)].at),this.drawRoll()}let c=this.roll.out;this.roll.mark(s>=c.t0&&s<=c.t1?c.xOf(s):null,c.top,c.notesH)}let o=this.map.out;if(o&&o.xOf){let c=o.rowOf(s);this.map.mark(o.xOf(s,c),o.top+c*o.rh,o.rh*.92)}let l=this.form.out;l&&l.X&&this.form.mark(l.X(s),l.cursorY,l.cursorH)}else for(let s of this.sheets)s.mark(null);this.rollDirty&&this.drawRoll(),this.player.playing&&(this.tick=(this.tick||0)+1)%15===0&&(this.ui(),this.now()),t.render()}};window.app=new hh;
