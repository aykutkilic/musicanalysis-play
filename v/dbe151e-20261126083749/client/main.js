import{A as Ph,C as Ft,D as Ih,F as Lh,I as Ss,M as Uh,N as Dh,a as nn,b as xi,c as ys,d as _s,e as xh,f as fo,g as me,h as mo,i as Mh,j as Sh,k as bh,l as wh,n as xr,o as Eh,q as Th,s as Ah,t as xs,x as Ms,y as Rh,z as Ch}from"./chunk-SYZLBRZQ.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Wu=2;var ip=0,Cc=1,pi=2;var _n=2;var un=100,np=101,rp=102;var sp=200,ap=201,op=202,lp=203,Qo=204,el=205,cp=206,hp=207,up=208,dp=209,pp=210,fp=211,mp=212,gp=213,vp=214,yp=0,_p=1,xp=2,Mp=3,Sp=4,bp=5,wp=6,Ep=7;var Xu=0;var ju=300,Jn=301,Kn=302,tl=303,il=304,Na=306,Nr=1e3,Or=1001,nl=1002,ti=1003,Tp=1004;var bs=1005;var Ri=1006,go=1007;var qn=1008;var ji=1009,qu=1010,Yu=1011,Br=1012,Pc=1013,fn=1014,Ci=1015,$r=1016,Ic=1017,Lc=1018,Qn=1020,Zu=35902,$u=1021,Ju=1022,hi=1023,Ku=1024,Qu=1025,Fr=1026,er=1027,ed=1028,Uc=1029,td=1030,Dc=1031;var Nc=1033,ia=33776,na=33777,ra=33778,sa=33779,rl=35840,sl=35841,al=35842,ol=35843,ll=36196,cl=37492,hl=37496,ul=37808,dl=37809,pl=37810,fl=37811,ml=37812,gl=37813,vl=37814,yl=37815,_l=37816,xl=37817,Ml=37818,Sl=37819,bl=37820,wl=37821,aa=36492,El=36494,Tl=36495,id=36283,Al=36284,Rl=36285,Cl=36286;var la=2300,Pl=2301,vo=2302,Nh=2400,Oh=2401,Bh=2402;var jn="",at="srgb",or="srgb-linear",Oa="linear",Xe="srgb";var Cn=7680;var Ap=512,Rp=513,Cp=514,Pp=515,Ip=516,Lp=517,Up=518,Dp=519,Il=35044,Jr=35048;var Fh="300 es",tr=2e3,ca=2001,qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var oa=Math.PI/180,Ll=180/Math.PI;function Pi(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(bt[255&r]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[255&e]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[63&t|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[255&i]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function Np(r,e){return(r%e+e)%e}function yo(r,e,t){return(1-t)*r+t*e}function ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var ne=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pe=class r{constructor(e,t,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=n[0],f=n[3],y=n[6],m=n[1],v=n[4],x=n[7],I=n[2],E=n[5],A=n[8];return s[0]=a*_+o*m+l*I,s[3]=a*f+o*v+l*E,s[6]=a*y+o*x+l*A,s[1]=c*_+h*m+u*I,s[4]=c*f+h*v+u*E,s[7]=c*y+h*x+u*A,s[2]=d*_+p*m+g*I,s[5]=d*f+p*v+g*E,s[8]=d*y+p*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=t*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*a)*_,e[3]=d*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_o.makeScale(e,t)),this}rotate(e){return this.premultiply(_o.makeRotation(-e)),this}translate(e,t){return this.premultiply(_o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_o=new Pe;function nd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ha(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Op(){let r=ha("canvas");return r.style.display="block",r}var kh={};function Ir(r){r in kh||(kh[r]=!0,console.warn(r))}var Ve={enabled:!0,workingColorSpace:or,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===Xe&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Xe&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?Oa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ii(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Zn(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var zh=[.64,.33,.3,.6,.15,.06],Hh=[.2126,.7152,.0722],Vh=[.3127,.329],Gh=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Pn;Ve.define({[or]:{primaries:zh,whitePoint:Vh,transfer:Oa,toXYZ:Gh,fromXYZ:Wh,luminanceCoefficients:Hh,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:zh,whitePoint:Vh,transfer:Xe,toXYZ:Gh,fromXYZ:Wh,luminanceCoefficients:Hh,outputColorSpaceConfig:{drawingBufferColorSpace:at}}});var Ul=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pn===void 0&&(Pn=ha("canvas")),Pn.width=e.width,Pn.height=e.height;let i=Pn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ha("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Ii(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Ii(t[i]/255)):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bp=0,ua=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(xo(n[a].image)):s.push(xo(n[a]))}else s=xo(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function xo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ul.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fp=0,Ut=class r extends qi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Pi(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nr:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Nr:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=ju,Ut.DEFAULT_ANISOTROPY=1;var We=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],f=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(p+1)/2,I=(y+1)/2,E=(h+d)/4,A=(u+_)/4,S=(g+f)/4;return v>x&&v>I?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=E/i,s=A/i):x>I?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=E/n,s=S/n):I<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(I),i=A/s,n=S/s),this.set(i,n,s,t),this}let m=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(f-g)/m,this.y=(u-_)/m,this.z=(d-h)/m,this.w=Math.acos((c+p+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Ut(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ua(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Li=class extends Dl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},da=class extends Ut{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nl=class extends Ut{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=g,void(e[t+3]=_);if(u!==_||l!==d||c!==p||h!==g){let f=1-o,y=l*d+c*p+h*g+u*_,m=y>=0?1:-1,v=1-y*y;if(v>Number.EPSILON){let I=Math.sqrt(v),E=Math.atan2(I,y*m);f=Math.sin(f*E)/I,o=Math.sin(o*E)/I}let x=o*m;if(l=l*f+d*x,c=c*f+p*x,h=h*f+g*x,u=u*f+_*x,f===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),p=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mo=new T,Xh=new zt,Ht=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ws.copy(i.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Es.subVectors(this.max,Mr),In.subVectors(e.a,Mr),Ln.subVectors(e.b,Mr),Un.subVectors(e.c,Mr),ki.subVectors(Ln,In),zi.subVectors(Un,Ln),rn.subVectors(In,Un);let t=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-rn.z,rn.y,ki.z,0,-ki.x,zi.z,0,-zi.x,rn.z,0,-rn.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-rn.y,rn.x,0];return!!So(t,In,Ln,Un,Es)&&(t=[1,0,0,0,1,0,0,0,1],!!So(t,In,Ln,Un,Es)&&(Ts.crossVectors(ki,zi),t=[Ts.x,Ts.y,Ts.z],So(t,In,Ln,Un,Es)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Kt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new T,new T,new T,new T,new T,new T,new T,new T],Kt=new T,ws=new Ht,In=new T,Ln=new T,Un=new T,ki=new T,zi=new T,rn=new T,Mr=new T,Es=new T,Ts=new T,sn=new T;function So(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){sn.fromArray(r,s);let o=n.x*Math.abs(sn.x)+n.y*Math.abs(sn.y)+n.z*Math.abs(sn.z),l=e.dot(sn),c=t.dot(sn),h=i.dot(sn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kp=new Ht,Sr=new T,bo=new T,Vt=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):kp.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Sr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(bo)),this.expandByPoint(Sr.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new T,wo=new T,As=new T,Hi=new T,Eo=new T,Rs=new T,To=new T,mn=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){wo.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(wo);let s=.5*e.distanceTo(t),a=-this.direction.dot(As),o=Hi.dot(this.direction),l=-Hi.dot(As),c=Hi.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(wo).addScaledVector(As,d),p}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),n=Si.dot(Si)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,n,s){Eo.subVectors(t,e),Rs.subVectors(i,e),To.crossVectors(Eo,Rs);let a,o=this.direction.dot(To);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Hi.subVectors(this.origin,e);let l=a*this.direction.dot(Rs.crossVectors(Hi,Rs));if(l<0)return null;let c=a*this.direction.dot(Eo.cross(Hi));if(c<0||l+c>o)return null;let h=-a*Hi.dot(To);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class r{constructor(e,t,i,n,s,a,o,l,c,h,u,d,p,g,_,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,p,g,_,f)}set(e,t,i,n,s,a,o,l,c,h,u,d,p,g,_,f){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=n,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=p,y[7]=g,y[11]=_,y[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Dn.setFromMatrixColumn(e,0).length(),s=1/Dn.setFromMatrixColumn(e,1).length(),a=1/Dn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Hp)}lookAt(e,t,i){let n=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Vi.crossVectors(i,It),Vi.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Vi.crossVectors(i,It)),Vi.normalize(),Cs.crossVectors(It,Vi),n[0]=Vi.x,n[4]=Cs.x,n[8]=It.x,n[1]=Vi.y,n[5]=Cs.y,n[9]=It.y,n[2]=Vi.z,n[6]=Cs.z,n[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],f=i[10],y=i[14],m=i[3],v=i[7],x=i[11],I=i[15],E=n[0],A=n[4],S=n[8],w=n[12],M=n[1],b=n[5],P=n[9],N=n[13],B=n[2],G=n[6],W=n[10],$=n[14],q=n[3],oe=n[7],ae=n[11],J=n[15];return s[0]=a*E+o*M+l*B+c*q,s[4]=a*A+o*b+l*G+c*oe,s[8]=a*S+o*P+l*W+c*ae,s[12]=a*w+o*N+l*$+c*J,s[1]=h*E+u*M+d*B+p*q,s[5]=h*A+u*b+d*G+p*oe,s[9]=h*S+u*P+d*W+p*ae,s[13]=h*w+u*N+d*$+p*J,s[2]=g*E+_*M+f*B+y*q,s[6]=g*A+_*b+f*G+y*oe,s[10]=g*S+_*P+f*W+y*ae,s[14]=g*w+_*N+f*$+y*J,s[3]=m*E+v*M+x*B+I*q,s[7]=m*A+v*b+x*G+I*oe,s[11]=m*S+v*P+x*W+I*ae,s[15]=m*w+v*N+x*$+I*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-n*a*p+n*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+e[15]*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],f=e[14],y=e[15],m=u*f*c-_*d*c+_*l*p-o*f*p-u*l*y+o*d*y,v=g*d*c-h*f*c-g*l*p+a*f*p+h*l*y-a*d*y,x=h*_*c-g*u*c+g*o*p-a*_*p-h*o*y+a*u*y,I=g*u*l-h*_*l-g*o*d+a*_*d+h*o*f-a*u*f,E=t*m+i*v+n*x+s*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=m*A,e[1]=(_*d*s-u*f*s-_*n*p+i*f*p+u*n*y-i*d*y)*A,e[2]=(o*f*s-_*l*s+_*n*c-i*f*c-o*n*y+i*l*y)*A,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*p-i*l*p)*A,e[4]=v*A,e[5]=(h*f*s-g*d*s+g*n*p-t*f*p-h*n*y+t*d*y)*A,e[6]=(g*l*s-a*f*s-g*n*c+t*f*c+a*n*y-t*l*y)*A,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*p+t*l*p)*A,e[8]=x*A,e[9]=(g*u*s-h*_*s-g*i*p+t*_*p+h*i*y-t*u*y)*A,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*y+t*o*y)*A,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*p-t*o*p)*A,e[12]=I*A,e[13]=(h*_*n-g*u*n+g*i*d-t*_*d-h*i*f+t*u*f)*A,e[14]=(g*o*n-a*_*n-g*i*l+t*_*l+a*i*f-t*o*f)*A,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*A,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,_=a*h,f=a*u,y=o*u,m=l*c,v=l*h,x=l*u,I=i.x,E=i.y,A=i.z;return n[0]=(1-(_+y))*I,n[1]=(p+x)*I,n[2]=(g-v)*I,n[3]=0,n[4]=(p-x)*E,n[5]=(1-(d+y))*E,n[6]=(f+m)*E,n[7]=0,n[8]=(g+v)*A,n[9]=(f-m)*A,n[10]=(1-(d+_))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Dn.set(n[0],n[1],n[2]).length(),a=Dn.set(n[4],n[5],n[6]).length(),o=Dn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Qt.copy(this);let l=1/s,c=1/a,h=1/o;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=c,Qt.elements[5]*=c,Qt.elements[6]*=c,Qt.elements[8]*=h,Qt.elements[9]*=h,Qt.elements[10]*=h,t.setFromRotationMatrix(Qt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,g;if(o===tr)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else{if(o!==ca)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),g=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-s),d=(t+e)*c,p=(i+n)*h,g,_;if(o===tr)g=(a+s)*u,_=-2*u;else{if(o!==ca)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=s*u,_=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Dn=new T,Qt=new Ee,zp=new T(0,0,0),Hp=new T(1,1,1),Vi=new T,Cs=new T,It=new T,jh=new Ee,qh=new zt,ui=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},Vp=0,Yh=new T,Nn=new zt,bi=new Ee,Ps=new T,br=new T,Gp=new T,Wp=new zt,Zh=new T(1,0,0),$h=new T(0,1,0),Jh=new T(0,0,1),Kh={type:"added"},Xp={type:"removed"},On={type:"childadded",child:null},Ao={type:"childremoved",child:null},ht=class r extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new T,t=new ui,i=new zt,n=new T(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Pe}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ps.copy(e):Ps.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(br,Ps,this.up):bi.lookAt(Ps,br,this.up),this.quaternion.setFromRotationMatrix(bi),n&&(bi.extractRotation(n.matrixWorld),Nn.setFromRotationMatrix(bi),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kh),On.child=e,this.dispatchEvent(On),On.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xp),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kh),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};ht.DEFAULT_UP=new T(0,1,0),ht.DEFAULT_MATRIX_AUTO_UPDATE=!0,ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new T,wi=new T,Ro=new T,Ei=new T,Bn=new T,Fn=new T,Qh=new T,Co=new T,Po=new T,Io=new T,Lo=new We,Uo=new We,Do=new We,Ai=class r{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ei.subVectors(e,t),n.cross(ei);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){ei.subVectors(n,t),wi.subVectors(i,t),Ro.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(wi),l=ei.dot(Ro),c=wi.dot(wi),h=wi.dot(Ro),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ei)!==null&&Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return Lo.setScalar(0),Uo.setScalar(0),Do.setScalar(0),Lo.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,i),Do.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Lo,s.x),a.addScaledVector(Uo,s.y),a.addScaledVector(Do,s.z),a}static isFrontFacing(e,t,i,n){return ei.subVectors(i,t),wi.subVectors(e,t),ei.cross(wi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),.5*ei.cross(wi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Bn.subVectors(n,i),Fn.subVectors(s,i),Co.subVectors(e,i);let l=Bn.dot(Co),c=Fn.dot(Co);if(l<=0&&c<=0)return t.copy(i);Po.subVectors(e,n);let h=Bn.dot(Po),u=Fn.dot(Po);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Bn,a);Io.subVectors(e,s);let p=Bn.dot(Io),g=Fn.dot(Io);if(g>=0&&p<=g)return t.copy(s);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Fn,o);let f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Qh.subVectors(s,n),o=(u-h)/(u-h+(p-g)),t.copy(n).addScaledVector(Qh,o);let y=1/(f+_+d);return a=_*y,o=d*y,t.copy(i).addScaledVector(Bn,a).addScaledVector(Fn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Is={h:0,s:0,l:0};function No(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=Np(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=No(a,s,e+1/3),this.g=No(a,s,e),this.b=No(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,n),this}setStyle(e,t=at){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let i=rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Ve.fromWorkingColorSpace(wt.copy(this),e),65536*Math.round(Mt(255*wt.r,0,255))+256*Math.round(Mt(255*wt.g,0,255))+Math.round(Mt(255*wt.b,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(wt.copy(this),t);let i=wt.r,n=wt.g,s=wt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=at){Ve.fromWorkingColorSpace(wt.copy(this),e);let t=wt.r,i=wt.g,n=wt.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Is);let i=yo(Gi.h,Is.h,t),n=yo(Gi.s,Is.s,t),s=yo(Gi.l,Is.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new Se;Se.NAMES=rd;var jp=0,Ui=class extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Pi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=el,this.blendEquation=un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cn,this.stencilZFail=Cn,this.stencilZPass=Cn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qo&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},dt=class extends Ui{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},S0=qp();function qp(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var ut=new T,Ls=new ne,rt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Il,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),e}};var pa=class extends rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var fa=class extends rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Te=class extends rt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Yp=0,kt=new Ee,Oo=new ht,kn=new T,Lt=new Ht,wr=new Ht,xt=new T,Ze=class r extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?fa:pa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Pe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(i,3))}else{for(let i=0,n=t.count;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(e){let i=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Lt.min,wr.min),Lt.expandByPoint(xt),xt.addVectors(Lt.max,wr.max),Lt.expandByPoint(xt)):(Lt.expandByPoint(wr.min),Lt.expandByPoint(wr.max))}Lt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xt.fromBufferAttribute(o,c),l&&(kn.fromBufferAttribute(e,c),xt.add(kn)),n=Math.max(n,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new T,l[S]=new T;let c=new T,h=new T,u=new T,d=new ne,p=new ne,g=new ne,_=new T,f=new T;function y(S,w,M){c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,M),d.fromBufferAttribute(s,S),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(b),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(b),o[S].add(_),o[w].add(_),o[M].add(_),l[S].add(f),l[w].add(f),l[M].add(f))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let S=0,w=m.length;S<w;++S){let M=m[S],b=M.start;for(let P=b,N=b+M.count;P<N;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new T,x=new T,I=new T,E=new T;function A(S){I.fromBufferAttribute(n,S),E.copy(I);let w=o[S];v.copy(w),v.sub(I.multiplyScalar(I.dot(w))).normalize(),x.crossVectors(E,w);let M=x.dot(l[S])<0?-1:1;a.setXYZW(S,v.x,v.y,v.z,M)}for(let S=0,w=m.length;S<w;++S){let M=m[S],b=M.start;for(let P=b,N=b+M.count;P<N;P+=3)A(e.getX(P+0)),A(e.getX(P+1)),A(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new T,s=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let _=0,f=l.length;_<f;_++){p=o.isInterleavedBufferAttribute?l[_]*o.data.stride+o.offset:l[_]*h;for(let y=0;y<h;y++)d[g++]=c[p++]}return new rt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eu=new Ee,an=new mn,Us=new Vt,tu=new T,Ds=new T,Ns=new T,Os=new T,Bo=new T,Bs=new T,iu=new T,Fs=new T,ge=class extends ht{constructor(e=new Ze,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Bo.fromBufferAttribute(u,e),a?Bs.addScaledVector(Bo,h):Bs.addScaledVector(Bo.sub(t),h))}t.add(Bs)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(s),an.copy(e.ray).recast(e.near),Us.containsPoint(an.origin)===!1&&(an.intersectSphere(Us,tu)===null||an.origin.distanceToSquared(tu)>(e.far-e.near)**2))return;eu.copy(s).invert(),an.copy(e.ray).applyMatrix4(eu),i.boundingBox!==null&&an.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,an)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let f=d[g],y=a[f.materialIndex];for(let m=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));m<v;m+=3)n=ks(this,y,e,i,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);g<_;g+=3)n=ks(this,a,e,i,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let f=d[g],y=a[f.materialIndex];for(let m=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));m<v;m+=3)n=ks(this,y,e,i,c,h,u,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);g<_;g+=3)n=ks(this,a,e,i,c,h,u,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}};function ks(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Ds),r.getVertexPosition(l,Ns),r.getVertexPosition(c,Os);let h=(function(u,d,p,g,_,f,y,m){let v;if(v=d.side===1?g.intersectTriangle(y,f,_,!0,m):g.intersectTriangle(_,f,y,d.side===0,m),v===null)return null;Fs.copy(m),Fs.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo(Fs);return x<p.near||x>p.far?null:{distance:x,point:Fs.clone(),object:u}})(r,e,t,i,Ds,Ns,Os,iu);if(h){let u=new T;Ai.getBarycoord(iu,Ds,Ns,Os,u),n&&(h.uv=Ai.getInterpolatedAttribute(n,o,l,c,u,new ne)),s&&(h.uv1=Ai.getInterpolatedAttribute(s,o,l,c,u,new ne)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new T,materialIndex:0};Ai.getNormal(Ds,Ns,Os,d.normal),h.face=d,h.barycoord=u}return h}var pt=class r extends Ze{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function g(_,f,y,m,v,x,I,E,A,S,w){let M=x/A,b=I/S,P=x/2,N=I/2,B=E/2,G=A+1,W=S+1,$=0,q=0,oe=new T;for(let ae=0;ae<W;ae++){let J=ae*b-N;for(let ie=0;ie<G;ie++){let he=ie*M-P;oe[_]=he*m,oe[f]=J*v,oe[y]=B,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[f]=0,oe[y]=E>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(ie/A),u.push(1-ae/S),$+=1}}for(let ae=0;ae<S;ae++)for(let J=0;J<A;J++){let ie=d+J+G*ae,he=d+J+G*(ae+1),pe=d+(J+1)+G*(ae+1),le=d+(J+1)+G*ae;l.push(ie,he,le),l.push(he,pe,le),q+=6}o.addGroup(p,q,w),p+=q,d+=$}g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ir(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Ct(r){let e={};for(let t=0;t<r.length;t++){let i=ir(r[t]);for(let n in i)e[n]=i[n]}return e}function sd(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var Zp={clone:ir,merge:Ct},Gt=class extends Ui{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},zr=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new T,nu=new ne,ru=new ne,Et=class extends zr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ll*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*oa*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ll*Math.atan(Math.tan(.5*oa*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,nu,ru),t.subVectors(ru,nu)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*oa*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zn=-90,Ol=class extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Et(zn,1,e,t);n.layers=this.layers,this.add(n);let s=new Et(zn,1,e,t);s.layers=this.layers,this.add(s);let a=new Et(zn,1,e,t);a.layers=this.layers,this.add(a);let o=new Et(zn,1,e,t);o.layers=this.layers,this.add(o);let l=new Et(zn,1,e,t);l.layers=this.layers,this.add(l);let c=new Et(zn,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===tr)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==ca)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ma=class extends Ut{constructor(e,t,i,n,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Jn,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bl=class extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ma(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new pt(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new ge(n,s),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Ri),new Ol(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Fo=new T,$p=new T,Jp=new Pe,Ti=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Fo.subVectors(i,t).cross($p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Fo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Jp.getNormalMatrix(e),n=this.coplanarPoint(Fo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},on=new Vt,zs=new T,Yi=class{constructor(e=new Ti,t=new Ti,i=new Ti,n=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],g=n[9],_=n[10],f=n[11],y=n[12],m=n[13],v=n[14],x=n[15];if(i[0].setComponents(l-s,d-c,f-p,x-y).normalize(),i[1].setComponents(l+s,d+c,f+p,x+y).normalize(),i[2].setComponents(l+a,d+h,f+g,x+m).normalize(),i[3].setComponents(l-a,d-h,f-g,x-m).normalize(),i[4].setComponents(l-o,d-u,f-_,x-v).normalize(),t===tr)i[5].setComponents(l+o,d+u,f+_,x+v).normalize();else{if(t!==ca)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,_,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),on.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),on.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(on)}intersectsSprite(e){return on.center.set(0,0,0),on.radius=.7071067811865476,on.applyMatrix4(e.matrixWorld),this.intersectsSphere(on)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(zs.x=n.normal.x>0?e.max.x:e.min.x,zs.y=n.normal.y>0?e.max.y:e.min.y,zs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ad(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Kp(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var lt=class r extends Ze{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],f=[];for(let y=0;y<h;y++){let m=y*d-a;for(let v=0;v<c;v++){let x=v*u-s;g.push(x,-m,0),_.push(0,0,1),f.push(v/o),f.push(1-y/l)}}for(let y=0;y<l;y++)for(let m=0;m<o;m++){let v=m+c*y,x=m+c*(y+1),I=m+1+c*(y+1),E=m+1+c*y;p.push(v,x,E),p.push(x,I,E)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Le={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ce={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},li={basic:{uniforms:Ct([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ct([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ct([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ct([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ct([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ct([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ct([ce.points,ce.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ct([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ct([ce.common,ce.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ct([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ct([ce.sprite,ce.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ct([ce.common,ce.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ct([ce.lights,ce.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};li.physical={uniforms:Ct([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var Hs={r:0,b:0,g:0},ln=new ui,Qp=new Ee;function ef(r,e,t,i,n,s,a){let o=new Se(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function g(f){let y=f.isScene===!0?f.background:null;return y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y}function _(f,y){f.getRGB(Hs,sd(r)),i.buffers.color.setClear(Hs.r,Hs.g,Hs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(f,y=1){o.set(f),h=y,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,_(o,h)},render:function(f){let y=!1,m=g(f);m===null?_(o,h):m&&m.isColor&&(_(m,1),y=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(f,y){let m=g(y);m&&(m.isCubeTexture||m.mapping===Na)?(c===void 0&&(c=new ge(new pt(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:ir(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,x,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ln.copy(y.backgroundRotation),ln.x*=-1,ln.y*=-1,ln.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(ln.y*=-1,ln.z*=-1),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(ln)),c.material.toneMapped=Ve.getTransfer(m.colorSpace)!==Xe,u===m&&d===m.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=m,d=m.version,p=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new ge(new lt(2,2),new Gt({name:"BackgroundMaterial",uniforms:ir(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(m.colorSpace)!==Xe,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),u===m&&d===m.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=m,d=m.version,p=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}}}function tf(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=c(null),s=n,a=!1;function o(y){return r.bindVertexArray(y)}function l(y){return r.deleteVertexArray(y)}function c(y){let m=[],v=[],x=[];for(let I=0;I<t;I++)m[I]=0,v[I]=0,x[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:v,attributeDivisors:x,object:y,attributes:{},index:null}}function h(){let y=s.newAttributes;for(let m=0,v=y.length;m<v;m++)y[m]=0}function u(y){d(y,0)}function d(y,m){let v=s.newAttributes,x=s.enabledAttributes,I=s.attributeDivisors;v[y]=1,x[y]===0&&(r.enableVertexAttribArray(y),x[y]=1),I[y]!==m&&(r.vertexAttribDivisor(y,m),I[y]=m)}function p(){let y=s.newAttributes,m=s.enabledAttributes;for(let v=0,x=m.length;v<x;v++)m[v]!==y[v]&&(r.disableVertexAttribArray(v),m[v]=0)}function g(y,m,v,x,I,E,A){A===!0?r.vertexAttribIPointer(y,m,v,I,E):r.vertexAttribPointer(y,m,v,x,I,E)}function _(){f(),a=!0,s!==n&&(s=n,o(s.object))}function f(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(y,m,v,x,I){let E=!1,A=(function(S,w,M){let b=M.wireframe===!0,P=i[S.id];P===void 0&&(P={},i[S.id]=P);let N=P[w.id];N===void 0&&(N={},P[w.id]=N);let B=N[b];return B===void 0&&(B=c(r.createVertexArray()),N[b]=B),B})(x,v,m);s!==A&&(s=A,o(s.object)),E=(function(S,w,M,b){let P=s.attributes,N=w.attributes,B=0,G=M.getAttributes();for(let W in G)if(G[W].location>=0){let $=P[W],q=N[W];if(q===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),$===void 0||$.attribute!==q||q&&$.data!==q.data)return!0;B++}return s.attributesNum!==B||s.index!==b})(y,x,v,I),E&&(function(S,w,M,b){let P={},N=w.attributes,B=0,G=M.getAttributes();for(let W in G)if(G[W].location>=0){let $=N[W];$===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&($=S.instanceColor));let q={};q.attribute=$,$&&$.data&&(q.data=$.data),P[W]=q,B++}s.attributes=P,s.attributesNum=B,s.index=b})(y,x,v,I),I!==null&&e.update(I,r.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,(function(S,w,M,b){h();let P=b.attributes,N=M.getAttributes(),B=w.defaultAttributeValues;for(let G in N){let W=N[G];if(W.location>=0){let $=P[G];if($===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){let q=$.normalized,oe=$.itemSize,ae=e.get($);if(ae===void 0)continue;let J=ae.buffer,ie=ae.type,he=ae.bytesPerElement,pe=ie===r.INT||ie===r.UNSIGNED_INT||$.gpuType===Pc;if($.isInterleavedBufferAttribute){let le=$.data,U=le.stride,L=$.offset;if(le.isInstancedInterleavedBuffer){for(let z=0;z<W.locationSize;z++)d(W.location+z,le.meshPerAttribute);S.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let z=0;z<W.locationSize;z++)u(W.location+z);r.bindBuffer(r.ARRAY_BUFFER,J);for(let z=0;z<W.locationSize;z++)g(W.location+z,oe/W.locationSize,ie,q,U*he,(L+oe/W.locationSize*z)*he,pe)}else{if($.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)d(W.location+le,$.meshPerAttribute);S.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<W.locationSize;le++)u(W.location+le);r.bindBuffer(r.ARRAY_BUFFER,J);for(let le=0;le<W.locationSize;le++)g(W.location+le,oe/W.locationSize,ie,q,oe*he,oe/W.locationSize*le*he,pe)}}else if(B!==void 0){let q=B[G];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(W.location,q);break;case 3:r.vertexAttrib3fv(W.location,q);break;case 4:r.vertexAttrib4fv(W.location,q);break;default:r.vertexAttrib1fv(W.location,q)}}}}p()})(y,m,v,x),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))},reset:_,resetDefaultState:f,dispose:function(){_();for(let y in i){let m=i[y];for(let v in m){let x=m[v];for(let I in x)l(x[I].object),delete x[I];delete m[v]}delete i[y]}},releaseStatesOfGeometry:function(y){if(i[y.id]===void 0)return;let m=i[y.id];for(let v in m){let x=m[v];for(let I in x)l(x[I].object),delete x[I];delete m[v]}delete i[y.id]},releaseStatesOfProgram:function(y){for(let m in i){let v=i[m];if(v[y.id]===void 0)continue;let x=v[y.id];for(let I in x)l(x[I].object),delete x[I];delete v[y.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function nf(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)n(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,i,1)}}}function rf(r,e,t,i){let n;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(d){return d===hi||i.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===$r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==ji&&i.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Ci&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function sf(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Ti,o=new Pe,l={value:null,needsUpdate:!1};function c(h,u,d,p){let g=h!==null?h.length:0,_=null;if(g!==0){if(_=l.value,p!==!0||_===null){let f=d+4*g,y=u.matrixWorldInverse;o.getNormalMatrix(y),(_===null||_.length<f)&&(_=new Float32Array(f));for(let m=0,v=d;m!==g;++m,v+=4)a.copy(h[m]).applyMatrix4(y,o),a.normal.toArray(_,v),_[v+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||n;return n=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,g=h.clipIntersection,_=h.clipShadows,f=r.get(h);if(!n||p===null||p.length===0||s&&!_)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let y=s?0:i,m=4*y,v=f.clippingState||null;l.value=v,v=c(p,u,m,d);for(let x=0;x!==m;++x)v[x]=t[x];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}}}function af(r){let e=new WeakMap;function t(n,s){return s===tl?n.mapping=Jn:s===il&&(n.mapping=Kn),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===tl||s===il){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Bl(a.height);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var ga=class extends zr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},su=[.125,.215,.35,.446,.526,.582],Er=20,ko=new ga,au=new Se,zo=null,Ho=0,Vo=0,Go=!1,hn=(1+Math.sqrt(5))/2,Hn=1/hn,ou=[new T(-hn,Hn,0),new T(hn,Hn,0),new T(-Hn,0,hn),new T(Hn,0,hn),new T(0,hn,-Hn),new T(0,hn,Hn),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],nr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){zo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zo,Ho,Vo),this._renderer.xr.enabled=Go,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===Kn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:$r,format:hi,colorSpace:or,depthBuffer:!1},n=lu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+su.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let g=1/p;d>a-4?g=su[d-a+4-1]:d===0&&(g=0),c.push(g);let _=1/(p-2),f=-_,y=1+_,m=[f,f,y,f,y,y,f,f,y,y,f,y],v=6,x=6,I=3,E=2,A=1,S=new Float32Array(I*x*v),w=new Float32Array(E*x*v),M=new Float32Array(A*x*v);for(let P=0;P<v;P++){let N=P%3*2/3-1,B=P>2?0:-1,G=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];S.set(G,I*x*P),w.set(m,E*x*P);let W=[P,P,P,P,P,P];M.set(W,A*x*P)}let b=new Ze;b.setAttribute("position",new rt(S,I)),b.setAttribute("uv",new rt(w,E)),b.setAttribute("faceIndex",new rt(M,A)),o.push(b),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Er),h=new T(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,i,n){let s=new Et(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(au),l.toneMapping=0,l.autoClear=!1;let u=new dt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new ge(new pt,u),p=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(au),p=!0);for(let _=0;_<6;_++){let f=_%3;f===0?(s.up.set(0,a[_],0),s.lookAt(o[_],0,0)):f===1?(s.up.set(0,0,a[_]),s.lookAt(0,o[_],0)):(s.up.set(0,a[_],0),s.lookAt(0,0,o[_]));let y=this._cubeSize;Vs(n,f*y,_>2?y:0,y,y),l.setRenderTarget(n),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Jn||e.mapping===Kn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Vs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,ko)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ou[(n-s-1)%ou.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new ge(this._lodPlanes[n],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,g=s/p,_=isFinite(s)?1+Math.floor(3*g):Er;_>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let f=[],y=0;for(let x=0;x<Er;++x){let I=x/g,E=Math.exp(-I*I/2);f.push(E),x===0?y+=E:x<_&&(y+=2*E)}for(let x=0;x<f.length;x++)f[x]=f[x]/y;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:m}=this;u.dTheta.value=p,u.mipInt.value=m-i;let v=this._sizeLods[n];Vs(t,3*v*(n>m-4?n-m+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,ko)}};function lu(r,e,t){let i=new Li(r,e,t);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function cu(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function hu(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function of(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===tl||s===il,o=s===Jn||s===Kn;if(a||o){let l=e.get(n),c=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return t===null&&(t=new nr(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),l.texture;if(l!==void 0)return l.texture;{let h=n.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new nr(r)),l=a?t.fromEquirectangular(n):t.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function lf(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function cf(r,e,t,i){let n={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,g=d.length;p<g;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete n[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let f=0,y=_.length;f<y;f+=3){let m=_[f+0],v=_[f+1],x=_[f+2];c.push(m,v,v,x,x,m)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let f=0,y=_.length/3-1;f<y;f+=3){let m=f+0,v=f+1,x=f+2;c.push(m,v,v,x,x,m)}}}let p=new(nd(c)?fa:pa)(c,1);p.version=d;let g=s.get(l);g&&e.remove(g),s.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,g=d.length;p<g;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function hf(r,e,t){let i,n,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(i,l,n,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(i,l,n,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function uf(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function df(r,e,t){let i=new WeakMap,n=new We;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let S=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],m=0;d===!0&&(m=1),p===!0&&(m=2),g===!0&&(m=3);let v=a.attributes.position.count*m,x=1;v>e.maxTextureSize&&(x=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let I=new Float32Array(v*x*4*h),E=new da(I,v,x,h);E.type=Ci,E.needsUpdate=!0;let A=4*m;for(let w=0;w<h;w++){let M=_[w],b=f[w],P=y[w],N=v*x*4*w;for(let B=0;B<M.count;B++){let G=B*A;d===!0&&(n.fromBufferAttribute(M,B),I[N+G+0]=n.x,I[N+G+1]=n.y,I[N+G+2]=n.z,I[N+G+3]=0),p===!0&&(n.fromBufferAttribute(b,B),I[N+G+4]=n.x,I[N+G+5]=n.y,I[N+G+6]=n.z,I[N+G+7]=0),g===!0&&(n.fromBufferAttribute(P,B),I[N+G+8]=n.x,I[N+G+9]=n.y,I[N+G+10]=n.z,I[N+G+11]=P.itemSize===4?n.w:1)}}u={count:h,texture:E,size:new ne(v,x)},i.set(a,u),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function pf(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}var va=class extends Ut{constructor(e,t,i,n,s,a,o,l,c,h=1026){if(h!==Fr&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fr&&(i=fn),i===void 0&&h===er&&(i=Qn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ti,this.minFilter=l!==void 0?l:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},od=new Ut,uu=new va(1,1),ld=new da,cd=new Nl,hd=new ma,du=[],pu=[],fu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function lr(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=du[n];if(s===void 0&&(s=new Float32Array(n),du[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function gt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function vt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ba(r,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function ff(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2fv(this.addr,e),vt(t,e)}}function gf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;r.uniform3fv(this.addr,e),vt(t,e)}}function vf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4fv(this.addr,e),vt(t,e)}}function yf(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;gu.set(i),r.uniformMatrix2fv(this.addr,!1,gu),vt(t,i)}}function _f(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;mu.set(i),r.uniformMatrix3fv(this.addr,!1,mu),vt(t,i)}}function xf(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;fu.set(i),r.uniformMatrix4fv(this.addr,!1,fu),vt(t,i)}}function Mf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Sf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2iv(this.addr,e),vt(t,e)}}function bf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;r.uniform3iv(this.addr,e),vt(t,e)}}function wf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4iv(this.addr,e),vt(t,e)}}function Ef(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Tf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2uiv(this.addr,e),vt(t,e)}}function Af(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;r.uniform3uiv(this.addr,e),vt(t,e)}}function Rf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4uiv(this.addr,e),vt(t,e)}}function Cf(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(uu.compareFunction=515,s=uu):s=od,t.setTexture2D(e||s,n)}function Pf(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||cd,n)}function If(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||hd,n)}function Lf(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||ld,n)}function Uf(r,e){r.uniform1fv(this.addr,e)}function Df(r,e){let t=lr(e,this.size,2);r.uniform2fv(this.addr,t)}function Nf(r,e){let t=lr(e,this.size,3);r.uniform3fv(this.addr,t)}function Of(r,e){let t=lr(e,this.size,4);r.uniform4fv(this.addr,t)}function Bf(r,e){let t=lr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ff(r,e){let t=lr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function kf(r,e){let t=lr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function zf(r,e){r.uniform1iv(this.addr,e)}function Hf(r,e){r.uniform2iv(this.addr,e)}function Vf(r,e){r.uniform3iv(this.addr,e)}function Gf(r,e){r.uniform4iv(this.addr,e)}function Wf(r,e){r.uniform1uiv(this.addr,e)}function Xf(r,e){r.uniform2uiv(this.addr,e)}function jf(r,e){r.uniform3uiv(this.addr,e)}function qf(r,e){r.uniform4uiv(this.addr,e)}function Yf(r,e,t){let i=this.cache,n=e.length,s=Ba(t,n);gt(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||od,s[a])}function Zf(r,e,t){let i=this.cache,n=e.length,s=Ba(t,n);gt(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||cd,s[a])}function $f(r,e,t){let i=this.cache,n=e.length,s=Ba(t,n);gt(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||hd,s[a])}function Jf(r,e,t){let i=this.cache,n=e.length,s=Ba(t,n);gt(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||ld,s[a])}var Fl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return ff;case 35664:return mf;case 35665:return gf;case 35666:return vf;case 35674:return yf;case 35675:return _f;case 35676:return xf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return bf;case 35669:case 35673:return wf;case 5125:return Ef;case 36294:return Tf;case 36295:return Af;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return Lf}})(t.type)}},kl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return Uf;case 35664:return Df;case 35665:return Nf;case 35666:return Of;case 35674:return Bf;case 35675:return Ff;case 35676:return kf;case 5124:case 35670:return zf;case 35667:case 35671:return Hf;case 35668:case 35672:return Vf;case 35669:case 35673:return Gf;case 5125:return Wf;case 36294:return Xf;case 36295:return jf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return Jf}})(t.type)}},zl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Wo=/(\w+)(\])?(\[|\.)?/g;function vu(r,e){r.seq.push(e),r.map[e.id]=e}function Kf(r,e,t){let i=r.name,n=i.length;for(Wo.lastIndex=0;;){let s=Wo.exec(i),a=Wo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){vu(t,c===void 0?new Fl(o,r,e):new kl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new zl(o),vu(t,h)),t=h}}}var $n=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);Kf(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function yu(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Qf=0,_u=new Pe;function xu(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let g=p+1;h.push(`${g===l?">":" "} ${g}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function em(r,e){let t=(function(i){Ve._getMatrix(_u,Ve.workingColorSpace,i);let n=`mat3( ${_u.elements.map((s=>s.toFixed(4)))} )`;switch(Ve.getTransfer(i)){case Oa:return[n,"LinearTransferOETF"];case Xe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tm(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gs=new T;function im(){return Ve.getLuminanceCoefficients(Gs),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Gs.x.toFixed(4)}, ${Gs.y.toFixed(4)}, ${Gs.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tr(r){return r!==""}function Mu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(r){return r.replace(nm,sm)}var rm=new Map;function sm(r,e){let t=Le[e];if(t===void 0){let i=rm.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Hl(t)}var am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(r){return r.replace(am,om)}function om(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function wu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function lm(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(b){let P="SHADOWMAP_TYPE_BASIC";return b.shadowMapType===1?P="SHADOWMAP_TYPE_PCF":b.shadowMapType===2?P="SHADOWMAP_TYPE_PCF_SOFT":b.shadowMapType===3&&(P="SHADOWMAP_TYPE_VSM"),P})(t),c=(function(b){let P="ENVMAP_TYPE_CUBE";if(b.envMap)switch(b.envMapMode){case Jn:case Kn:P="ENVMAP_TYPE_CUBE";break;case Na:P="ENVMAP_TYPE_CUBE_UV"}return P})(t),h=(function(b){let P="ENVMAP_MODE_REFLECTION";return b.envMap&&b.envMapMode===Kn&&(P="ENVMAP_MODE_REFRACTION"),P})(t),u=(function(b){let P="ENVMAP_BLENDING_NONE";if(b.envMap)switch(b.combine){case 0:P="ENVMAP_BLENDING_MULTIPLY";break;case 1:P="ENVMAP_BLENDING_MIX";break;case 2:P="ENVMAP_BLENDING_ADD"}return P})(t),d=(function(b){let P=b.envMapCubeUVHeight;if(P===null)return null;let N=Math.log2(P)-2,B=1/P;return{texelWidth:1/(3*Math.max(Math.pow(2,N),112)),texelHeight:B,maxMip:N}})(t),p=(function(b){return[b.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",b.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)})(t),g=(function(b){let P=[];for(let N in b){let B=b[N];B!==!1&&P.push("#define "+N+" "+B)}return P.join(`
`)})(s),_=n.createProgram(),f,y,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),f.length>0&&(f+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),y.length>0&&(y+=`
`)):(f=[wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),y=[wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Le.tonemapping_pars_fragment:"",t.toneMapping!==0?tm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,em("linearToOutputTexel",t.outputColorSpace),im(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=Hl(a),a=Mu(a,t),a=Su(a,t),o=Hl(o),o=Mu(o,t),o=Su(o,t),a=bu(a),o=bu(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=m+f+a,x=m+y+o,I=yu(n,n.VERTEX_SHADER,v),E=yu(n,n.FRAGMENT_SHADER,x);function A(b){if(r.debug.checkShaderErrors){let P=n.getProgramInfoLog(_).trim(),N=n.getShaderInfoLog(I).trim(),B=n.getShaderInfoLog(E).trim(),G=!0,W=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,I,E);else{let $=xu(n,I,"vertex"),q=xu(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+P+`
`+$+`
`+q)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):N!==""&&B!==""||(W=!1);W&&(b.diagnostics={runnable:G,programLog:P,vertexShader:{log:N,prefix:f},fragmentShader:{log:B,prefix:y}})}n.deleteShader(I),n.deleteShader(E),S=new $n(n,_),w=(function(P,N){let B={},G=P.getProgramParameter(N,P.ACTIVE_ATTRIBUTES);for(let W=0;W<G;W++){let $=P.getActiveAttrib(N,W),q=$.name,oe=1;$.type===P.FLOAT_MAT2&&(oe=2),$.type===P.FLOAT_MAT3&&(oe=3),$.type===P.FLOAT_MAT4&&(oe=4),B[q]={type:$.type,location:P.getAttribLocation(N,q),locationSize:oe}}return B})(n,_)}let S,w;n.attachShader(_,I),n.attachShader(_,E),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_),this.getUniforms=function(){return S===void 0&&A(this),S},this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(_,37297)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=E,this}var cm=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gl(e),t.set(e,i)),i}},Gl=class{constructor(e){this.id=cm++,this.code=e,this.usedTimes=0}};function hm(r,e,t,i,n,s,a){let o=new kr,l=new Vl,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,y,m,v,x){let I=v.fog,E=x.geometry,A=f.isMeshStandardMaterial?v.environment:null,S=(f.isMeshStandardMaterial?t:e).get(f.envMap||A),w=S&&S.mapping===Na?S.image.height:null,M=g[f.type];f.precision!==null&&(p=n.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let b=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,P=b!==void 0?b.length:0,N,B,G,W,$=0;if(E.morphAttributes.position!==void 0&&($=1),E.morphAttributes.normal!==void 0&&($=2),E.morphAttributes.color!==void 0&&($=3),M){let vr=li[M];N=vr.vertexShader,B=vr.fragmentShader}else N=f.vertexShader,B=f.fragmentShader,l.update(f),G=l.getVertexShaderID(f),W=l.getFragmentShaderID(f);let q=r.getRenderTarget(),oe=r.state.buffers.depth.getReversed(),ae=x.isInstancedMesh===!0,J=x.isBatchedMesh===!0,ie=!!f.map,he=!!f.matcap,pe=!!S,le=!!f.aoMap,U=!!f.lightMap,L=!!f.bumpMap,z=!!f.normalMap,k=!!f.displacementMap,D=!!f.emissiveMap,F=!!f.metalnessMap,R=!!f.roughnessMap,O=f.anisotropy>0,V=f.clearcoat>0,te=f.dispersion>0,H=f.iridescence>0,Q=f.sheen>0,K=f.transmission>0,re=O&&!!f.anisotropyMap,de=V&&!!f.clearcoatMap,ue=V&&!!f.clearcoatNormalMap,xe=V&&!!f.clearcoatRoughnessMap,Ae=H&&!!f.iridescenceMap,ze=H&&!!f.iridescenceThicknessMap,Ne=Q&&!!f.sheenColorMap,Me=Q&&!!f.sheenRoughnessMap,Ge=!!f.specularMap,$e=!!f.specularColorMap,it=!!f.specularIntensityMap,ye=K&&!!f.transmissionMap,Be=K&&!!f.thicknessMap,Ye=!!f.gradientMap,An=!!f.alphaMap,ms=f.alphaTest>0,Yt=!!f.alphaHash,ai=!!f.extensions,Ki=0;f.toneMapped&&(q!==null&&q.isXRRenderTarget!==!0||(Ki=r.toneMapping));let X={shaderID:M,shaderType:f.type,shaderName:f.name,vertexShader:N,fragmentShader:B,defines:f.defines,customVertexShaderID:G,customFragmentShaderID:W,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:J,batchingColor:J&&x._colorsTexture!==null,instancing:ae,instancingColor:ae&&x.instanceColor!==null,instancingMorph:ae&&x.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?r.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:or,alphaToCoverage:!!f.alphaToCoverage,map:ie,matcap:he,envMap:pe,envMapMode:pe&&S.mapping,envMapCubeUVHeight:w,aoMap:le,lightMap:U,bumpMap:L,normalMap:z,displacementMap:d&&k,emissiveMap:D,normalMapObjectSpace:z&&f.normalMapType===1,normalMapTangentSpace:z&&f.normalMapType===0,metalnessMap:F,roughnessMap:R,anisotropy:O,anisotropyMap:re,clearcoat:V,clearcoatMap:de,clearcoatNormalMap:ue,clearcoatRoughnessMap:xe,dispersion:te,iridescence:H,iridescenceMap:Ae,iridescenceThicknessMap:ze,sheen:Q,sheenColorMap:Ne,sheenRoughnessMap:Me,specularMap:Ge,specularColorMap:$e,specularIntensityMap:it,transmission:K,transmissionMap:ye,thicknessMap:Be,gradientMap:Ye,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:An,alphaTest:ms,alphaHash:Yt,combine:f.combine,mapUv:ie&&_(f.map.channel),aoMapUv:le&&_(f.aoMap.channel),lightMapUv:U&&_(f.lightMap.channel),bumpMapUv:L&&_(f.bumpMap.channel),normalMapUv:z&&_(f.normalMap.channel),displacementMapUv:k&&_(f.displacementMap.channel),emissiveMapUv:D&&_(f.emissiveMap.channel),metalnessMapUv:F&&_(f.metalnessMap.channel),roughnessMapUv:R&&_(f.roughnessMap.channel),anisotropyMapUv:re&&_(f.anisotropyMap.channel),clearcoatMapUv:de&&_(f.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(f.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(f.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(f.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(f.sheenRoughnessMap.channel),specularMapUv:Ge&&_(f.specularMap.channel),specularColorMapUv:$e&&_(f.specularColorMap.channel),specularIntensityMapUv:it&&_(f.specularIntensityMap.channel),transmissionMapUv:ye&&_(f.transmissionMap.channel),thicknessMapUv:Be&&_(f.thicknessMap.channel),alphaMapUv:An&&_(f.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(z||O),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!E.attributes.uv&&(ie||An),fog:!!I,useFog:f.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:oe,skinning:x.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:$,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&m.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ki,decodeVideoTexture:ie&&f.map.isVideoTexture===!0&&Ve.getTransfer(f.map.colorSpace)===Xe,decodeVideoTextureEmissive:D&&f.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(f.emissiveMap.colorSpace)===Xe,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ai&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ai&&f.extensions.multiDraw===!0||J)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return X.vertexUv1s=c.has(1),X.vertexUv2s=c.has(2),X.vertexUv3s=c.has(3),c.clear(),X},getProgramCacheKey:function(f){let y=[];if(f.shaderID?y.push(f.shaderID):(y.push(f.customVertexShaderID),y.push(f.customFragmentShaderID)),f.defines!==void 0)for(let m in f.defines)y.push(m),y.push(f.defines[m]);return f.isRawShaderMaterial===!1&&((function(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapCubeUVHeight),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.morphAttributeCount),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)})(y,f),(function(m,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),m.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),m.push(o.mask)})(y,f),y.push(r.outputColorSpace)),y.push(f.customProgramCacheKey),y.join()},getUniforms:function(f){let y=g[f.type],m;if(y){let v=li[y];m=Zp.clone(v.uniforms)}else m=f.uniforms;return m},acquireProgram:function(f,y){let m;for(let v=0,x=h.length;v<x;v++){let I=h[v];if(I.cacheKey===y){m=I,++m.usedTimes;break}}return m===void 0&&(m=new lm(r,y,f,s),h.push(m)),m},releaseProgram:function(f){if(--f.usedTimes==0){let y=h.indexOf(f);h[y]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function um(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function dm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Eu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Tu(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||dm),i.length>1&&i.sort(o||Eu),n.length>1&&n.sort(o||Eu)}}}function pm(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Tu,r.set(e,[n])):t>=i.length?(n=new Tu,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function fm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Se};break;case"SpotLight":t={position:new T,direction:new T,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new T,halfWidth:new T,halfHeight:new T}}return r[e.id]=t,t}}}var mm=0;function gm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vm(r){let e=new fm,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new T);let n=new T,s=new Ee,a=new Ee;return{setup:function(o){let l=0,c=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let u=0,d=0,p=0,g=0,_=0,f=0,y=0,m=0,v=0,x=0,I=0;o.sort(gm);for(let A=0,S=o.length;A<S;A++){let w=o[A],M=w.color,b=w.intensity,P=w.distance,N=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)l+=M.r*b,c+=M.g*b,h+=M.b*b;else if(w.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(w.sh.coefficients[B],b);I++}else if(w.isDirectionalLight){let B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let G=w.shadow,W=t.get(w);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,i.directionalShadow[u]=W,i.directionalShadowMap[u]=N,i.directionalShadowMatrix[u]=w.shadow.matrix,f++}i.directional[u]=B,u++}else if(w.isSpotLight){let B=e.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(M).multiplyScalar(b),B.distance=P,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,i.spot[p]=B;let G=w.shadow;if(w.map&&(i.spotLightMap[v]=w.map,v++,G.updateMatrices(w),w.castShadow&&x++),i.spotLightMatrix[p]=G.matrix,w.castShadow){let W=t.get(w);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,i.spotShadow[p]=W,i.spotShadowMap[p]=N,m++}p++}else if(w.isRectAreaLight){let B=e.get(w);B.color.copy(M).multiplyScalar(b),B.halfWidth.set(.5*w.width,0,0),B.halfHeight.set(0,.5*w.height,0),i.rectArea[g]=B,g++}else if(w.isPointLight){let B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){let G=w.shadow,W=t.get(w);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,i.pointShadow[d]=W,i.pointShadowMap[d]=N,i.pointShadowMatrix[d]=w.shadow.matrix,y++}i.point[d]=B,d++}else if(w.isHemisphereLight){let B=e.get(w);B.skyColor.copy(w.color).multiplyScalar(b),B.groundColor.copy(w.groundColor).multiplyScalar(b),i.hemi[_]=B,_++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let E=i.hash;E.directionalLength===u&&E.pointLength===d&&E.spotLength===p&&E.rectAreaLength===g&&E.hemiLength===_&&E.numDirectionalShadows===f&&E.numPointShadows===y&&E.numSpotShadows===m&&E.numSpotMaps===v&&E.numLightProbes===I||(i.directional.length=u,i.spot.length=p,i.rectArea.length=g,i.point.length=d,i.hemi.length=_,i.directionalShadow.length=f,i.directionalShadowMap.length=f,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=m,i.spotShadowMap.length=m,i.directionalShadowMatrix.length=f,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=m+v-x,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=I,E.directionalLength=u,E.pointLength=d,E.spotLength=p,E.rectAreaLength=g,E.hemiLength=_,E.numDirectionalShadows=f,E.numPointShadows=y,E.numSpotShadows=m,E.numSpotMaps=v,E.numLightProbes=I,i.version=mm++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,g=l.matrixWorldInverse;for(let _=0,f=o.length;_<f;_++){let y=o[_];if(y.isDirectionalLight){let m=i.directional[c];m.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),m.direction.sub(n),m.direction.transformDirection(g),c++}else if(y.isSpotLight){let m=i.spot[u];m.position.setFromMatrixPosition(y.matrixWorld),m.position.applyMatrix4(g),m.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),m.direction.sub(n),m.direction.transformDirection(g),u++}else if(y.isRectAreaLight){let m=i.rectArea[d];m.position.setFromMatrixPosition(y.matrixWorld),m.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),m.halfWidth.set(.5*y.width,0,0),m.halfHeight.set(0,.5*y.height,0),m.halfWidth.applyMatrix4(a),m.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){let m=i.point[h];m.position.setFromMatrixPosition(y.matrixWorld),m.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){let m=i.hemi[p];m.direction.setFromMatrixPosition(y.matrixWorld),m.direction.transformDirection(g),p++}}},state:i}}function Au(r){let e=new vm(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function ym(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new Au(r),e.set(t,[s])):i>=n.length?(s=new Au(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var Wl=class extends Ui{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xl=class extends Ui{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _m(r,e,t){let i=new Yi,n=new ne,s=new ne,a=new We,o=new Wl({depthPacking:3201}),l=new Xl,c={},h=t.maxTextureSize,u={[ip]:1,[Cc]:0,[pi]:2},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ze;g.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ge(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;function m(E,A){let S=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Li(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,S,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,S,p,_,null)}function v(E,A,S,w){let M=null,b=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)M=b;else if(M=S.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let P=M.uuid,N=A.uuid,B=c[P];B===void 0&&(B={},c[P]=B);let G=B[N];G===void 0&&(G=M.clone(),B[N]=G,A.addEventListener("dispose",I)),M=G}return M.visible=A.visible,M.wireframe=A.wireframe,M.side=w===3?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,S.isPointLight===!0&&M.isMeshDistanceMaterial===!0&&(r.properties.get(M).light=S),M}function x(E,A,S,w,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===3)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let P=e.update(E),N=E.material;if(Array.isArray(N)){let B=P.groups;for(let G=0,W=B.length;G<W;G++){let $=B[G],q=N[$.materialIndex];if(q&&q.visible){let oe=v(E,q,w,M);E.onBeforeShadow(r,E,A,S,P,oe,$),r.renderBufferDirect(S,null,P,oe,E,$),E.onAfterShadow(r,E,A,S,P,oe,$)}}}else if(N.visible){let B=v(E,N,w,M);E.onBeforeShadow(r,E,A,S,P,B,null),r.renderBufferDirect(S,null,P,B,E,null),E.onAfterShadow(r,E,A,S,P,B,null)}}let b=E.children;for(let P=0,N=b.length;P<N;P++)x(b[P],A,S,w,M)}function I(E){E.target.removeEventListener("dispose",I);for(let A in c){let S=c[A],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}this.render=function(E,A,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let w=r.getRenderTarget(),M=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),P=r.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=y!==3&&this.type===3,B=y===3&&this.type!==3;for(let G=0,W=E.length;G<W;G++){let $=E[G],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);let oe=q.getFrameExtents();if(n.multiply(oe),s.copy(q.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/oe.x),n.x=s.x*oe.x,q.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/oe.y),n.y=s.y*oe.y,q.mapSize.y=s.y)),q.map===null||N===!0||B===!0){let J=this.type!==3?{minFilter:ti,magFilter:ti}:{};q.map!==null&&q.map.dispose(),q.map=new Li(n.x,n.y,J),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();let ae=q.getViewportCount();for(let J=0;J<ae;J++){let ie=q.getViewport(J);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),P.viewport(a),q.updateMatrices($,J),i=q.getFrustum(),x(A,S,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===3&&m(q,S),q.needsUpdate=!1}y=this.type,f.needsUpdate=!1,r.setRenderTarget(w,M,b)}}var xm={[yp]:1,[xp]:6,[Sp]:7,[Mp]:5,[_p]:0,[wp]:2,[Ep]:4,[bp]:3};function Mm(r,e){let t=new function(){let R=!1,O=new We,V=null,te=new We(0,0,0,0);return{setMask:function(H){V===H||R||(r.colorMask(H,H,H,H),V=H)},setLocked:function(H){R=H},setClear:function(H,Q,K,re,de){de===!0&&(H*=re,Q*=re,K*=re),O.set(H,Q,K,re),te.equals(O)===!1&&(r.clearColor(H,Q,K,re),te.copy(O))},reset:function(){R=!1,V=null,te.set(-1,0,0,0)}}},i=new function(){let R=!1,O=!1,V=null,te=null,H=null;return{setReversed:function(Q){if(O!==Q){let K=e.get("EXT_clip_control");O?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT);let re=H;H=null,this.setClear(re)}O=Q},getReversed:function(){return O},setTest:function(Q){Q?pe(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(Q){V===Q||R||(r.depthMask(Q),V=Q)},setFunc:function(Q){if(O&&(Q=xm[Q]),te!==Q){switch(Q){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}te=Q}},setLocked:function(Q){R=Q},setClear:function(Q){H!==Q&&(O&&(Q=1-Q),r.clearDepth(Q),H=Q)},reset:function(){R=!1,V=null,te=null,H=null,O=!1}}},n=new function(){let R=!1,O=null,V=null,te=null,H=null,Q=null,K=null,re=null,de=null;return{setTest:function(ue){R||(ue?pe(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(ue){O===ue||R||(r.stencilMask(ue),O=ue)},setFunc:function(ue,xe,Ae){V===ue&&te===xe&&H===Ae||(r.stencilFunc(ue,xe,Ae),V=ue,te=xe,H=Ae)},setOp:function(ue,xe,Ae){Q===ue&&K===xe&&re===Ae||(r.stencilOp(ue,xe,Ae),Q=ue,K=xe,re=Ae)},setLocked:function(ue){R=ue},setClear:function(ue){de!==ue&&(r.clearStencil(ue),de=ue)},reset:function(){R=!1,O=null,V=null,te=null,H=null,Q=null,K=null,re=null,de=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,g=null,_=null,f=null,y=null,m=null,v=null,x=new Se(0,0,0),I=0,E=!1,A=null,S=null,w=null,M=null,b=null,P=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,B=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=B>=2);let W=null,$={},q=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),ae=new We().fromArray(q),J=new We().fromArray(oe);function ie(R,O,V,te){let H=new Uint8Array(4),Q=r.createTexture();r.bindTexture(R,Q),r.texParameteri(R,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(R,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let K=0;K<V;K++)R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY?r.texImage3D(O,0,r.RGBA,1,1,te,0,r.RGBA,r.UNSIGNED_BYTE,H):r.texImage2D(O+K,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,H);return Q}let he={};function pe(R){o[R]!==!0&&(r.enable(R),o[R]=!0)}function le(R){o[R]!==!1&&(r.disable(R),o[R]=!1)}he[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),pe(r.DEPTH_TEST),i.setFunc(3),k(!1),D(1),pe(r.CULL_FACE),z(0);let U={[un]:r.FUNC_ADD,[np]:r.FUNC_SUBTRACT,[rp]:r.FUNC_REVERSE_SUBTRACT};U[103]=r.MIN,U[104]=r.MAX;let L={[sp]:r.ZERO,[ap]:r.ONE,[op]:r.SRC_COLOR,[Qo]:r.SRC_ALPHA,[pp]:r.SRC_ALPHA_SATURATE,[up]:r.DST_COLOR,[cp]:r.DST_ALPHA,[lp]:r.ONE_MINUS_SRC_COLOR,[el]:r.ONE_MINUS_SRC_ALPHA,[dp]:r.ONE_MINUS_DST_COLOR,[hp]:r.ONE_MINUS_DST_ALPHA,[fp]:r.CONSTANT_COLOR,[mp]:r.ONE_MINUS_CONSTANT_COLOR,[gp]:r.CONSTANT_ALPHA,[vp]:r.ONE_MINUS_CONSTANT_ALPHA};function z(R,O,V,te,H,Q,K,re,de,ue){if(R!==0){if(d===!1&&(pe(r.BLEND),d=!0),R===5)H=H||O,Q=Q||V,K=K||te,O===g&&H===y||(r.blendEquationSeparate(U[O],U[H]),g=O,y=H),V===_&&te===f&&Q===m&&K===v||(r.blendFuncSeparate(L[V],L[te],L[Q],L[K]),_=V,f=te,m=Q,v=K),re.equals(x)!==!1&&de===I||(r.blendColor(re.r,re.g,re.b,de),x.copy(re),I=de),p=R,E=!1;else if(R!==p||ue!==E){if(g===un&&y===un||(r.blendEquation(r.FUNC_ADD),g=un,y=un),ue)switch(R){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R)}else switch(R){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R)}_=null,f=null,m=null,v=null,x.set(0,0,0),I=0,p=R,E=ue}}else d===!0&&(le(r.BLEND),d=!1)}function k(R){A!==R&&(R?r.frontFace(r.CW):r.frontFace(r.CCW),A=R)}function D(R){R!==0?(pe(r.CULL_FACE),R!==S&&(R===1?r.cullFace(r.BACK):R===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),S=R}function F(R,O,V){R?(pe(r.POLYGON_OFFSET_FILL),M===O&&b===V||(r.polygonOffset(O,V),M=O,b=V)):le(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:pe,disable:le,bindFramebuffer:function(R,O){return l[R]!==O&&(r.bindFramebuffer(R,O),l[R]=O,R===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=O),R===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=O),!0)},drawBuffers:function(R,O){let V=h,te=!1;if(R){V=c.get(O),V===void 0&&(V=[],c.set(O,V));let H=R.textures;if(V.length!==H.length||V[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,K=H.length;Q<K;Q++)V[Q]=r.COLOR_ATTACHMENT0+Q;V.length=H.length,te=!0}}else V[0]!==r.BACK&&(V[0]=r.BACK,te=!0);te&&r.drawBuffers(V)},useProgram:function(R){return u!==R&&(r.useProgram(R),u=R,!0)},setBlending:z,setMaterial:function(R,O){R.side===2?le(r.CULL_FACE):pe(r.CULL_FACE);let V=R.side===1;O&&(V=!V),k(V),R.blending===1&&R.transparent===!1?z(0):z(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),i.setFunc(R.depthFunc),i.setTest(R.depthTest),i.setMask(R.depthWrite),t.setMask(R.colorWrite);let te=R.stencilWrite;n.setTest(te),te&&(n.setMask(R.stencilWriteMask),n.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),n.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),F(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:k,setCullFace:D,setLineWidth:function(R){R!==w&&(N&&r.lineWidth(R),w=R)},setPolygonOffset:F,setScissorTest:function(R){R?pe(r.SCISSOR_TEST):le(r.SCISSOR_TEST)},activeTexture:function(R){R===void 0&&(R=r.TEXTURE0+P-1),W!==R&&(r.activeTexture(R),W=R)},bindTexture:function(R,O,V){V===void 0&&(V=W===null?r.TEXTURE0+P-1:W);let te=$[V];te===void 0&&(te={type:void 0,texture:void 0},$[V]=te),te.type===R&&te.texture===O||(W!==V&&(r.activeTexture(V),W=V),r.bindTexture(R,O||he[R]),te.type=R,te.texture=O)},unbindTexture:function(){let R=$[W];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},updateUBOMapping:function(R,O){let V=a.get(O);V===void 0&&(V=new WeakMap,a.set(O,V));let te=V.get(R);te===void 0&&(te=r.getUniformBlockIndex(O,R.name),V.set(R,te))},uniformBlockBinding:function(R,O){let V=a.get(O).get(R);s.get(O)!==V&&(r.uniformBlockBinding(O,V,R.__bindingPointIndex),s.set(O,V))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},scissor:function(R){ae.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),ae.copy(R))},viewport:function(R){J.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),J.copy(R))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},W=null,$={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,g=null,_=null,f=null,y=null,m=null,v=null,x=new Se(0,0,0),I=0,E=!1,A=null,S=null,w=null,M=null,b=null,ae.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function Ru(r,e,t,i){let n=(function(s){switch(s){case ji:case qu:return{byteLength:1,components:1};case Br:case Yu:case $r:return{byteLength:2,components:1};case Ic:case Lc:return{byteLength:2,components:4};case fn:case Pc:case Ci:return{byteLength:4,components:1};case Zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case $u:case Ku:return r*e;case Qu:return r*e*2;case ed:case Uc:return r*e/n.components*n.byteLength;case td:case Dc:return r*e*2/n.components*n.byteLength;case Ju:return r*e*3/n.components*n.byteLength;case hi:case Nc:return r*e*4/n.components*n.byteLength;case ia:case na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ra:case sa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sl:case ol:return Math.max(r,16)*Math.max(e,8)/4;case rl:case al:return Math.max(r,8)*Math.max(e,8)/2;case ll:case cl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hl:case ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _l:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case aa:case El:case Tl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case id:case Al:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Rl:case Cl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sm(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,L){return p?new OffscreenCanvas(U,L):ha("canvas")}function _(U,L,z){let k=1,D=le(U);if((D.width>z||D.height>z)&&(k=z/Math.max(D.width,D.height)),k<1){if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let F=Math.floor(k*D.width),R=Math.floor(k*D.height);u===void 0&&(u=g(F,R));let O=L?g(F,R):u;return O.width=F,O.height=R,O.getContext("2d").drawImage(U,0,0,F,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+F+"x"+R+")."),O}return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),U}return U}function f(U){return U.generateMipmaps}function y(U){r.generateMipmap(U)}function m(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(U,L,z,k,D=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let F=L;if(L===r.RED&&(z===r.FLOAT&&(F=r.R32F),z===r.HALF_FLOAT&&(F=r.R16F),z===r.UNSIGNED_BYTE&&(F=r.R8)),L===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(F=r.R8UI),z===r.UNSIGNED_SHORT&&(F=r.R16UI),z===r.UNSIGNED_INT&&(F=r.R32UI),z===r.BYTE&&(F=r.R8I),z===r.SHORT&&(F=r.R16I),z===r.INT&&(F=r.R32I)),L===r.RG&&(z===r.FLOAT&&(F=r.RG32F),z===r.HALF_FLOAT&&(F=r.RG16F),z===r.UNSIGNED_BYTE&&(F=r.RG8)),L===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(F=r.RG8UI),z===r.UNSIGNED_SHORT&&(F=r.RG16UI),z===r.UNSIGNED_INT&&(F=r.RG32UI),z===r.BYTE&&(F=r.RG8I),z===r.SHORT&&(F=r.RG16I),z===r.INT&&(F=r.RG32I)),L===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(F=r.RGB8UI),z===r.UNSIGNED_SHORT&&(F=r.RGB16UI),z===r.UNSIGNED_INT&&(F=r.RGB32UI),z===r.BYTE&&(F=r.RGB8I),z===r.SHORT&&(F=r.RGB16I),z===r.INT&&(F=r.RGB32I)),L===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(F=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(F=r.RGBA16UI),z===r.UNSIGNED_INT&&(F=r.RGBA32UI),z===r.BYTE&&(F=r.RGBA8I),z===r.SHORT&&(F=r.RGBA16I),z===r.INT&&(F=r.RGBA32I)),L===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(F=r.RGB9_E5),L===r.RGBA){let R=D?Oa:Ve.getTransfer(k);z===r.FLOAT&&(F=r.RGBA32F),z===r.HALF_FLOAT&&(F=r.RGBA16F),z===r.UNSIGNED_BYTE&&(F=R===Xe?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(F=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(F=r.RGB5_A1)}return F!==r.R16F&&F!==r.R32F&&F!==r.RG16F&&F!==r.RG32F&&F!==r.RGBA16F&&F!==r.RGBA32F||e.get("EXT_color_buffer_float"),F}function x(U,L){let z;return U?L===null||L===fn||L===Qn?z=r.DEPTH24_STENCIL8:L===Ci?z=r.DEPTH32F_STENCIL8:L===Br&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===fn||L===Qn?z=r.DEPTH_COMPONENT24:L===Ci?z=r.DEPTH_COMPONENT32F:L===Br&&(z=r.DEPTH_COMPONENT16),z}function I(U,L){return f(U)===!0||U.isFramebufferTexture&&U.minFilter!==ti&&U.minFilter!==Ri?Math.log2(Math.max(L.width,L.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?L.mipmaps.length:1}function E(U){let L=U.target;L.removeEventListener("dispose",E),(function(z){let k=i.get(z);if(k.__webglInit===void 0)return;let D=z.source,F=d.get(D);if(F){let R=F[k.__cacheKey];R.usedTimes--,R.usedTimes===0&&S(z),Object.keys(F).length===0&&d.delete(D)}i.remove(z)})(L),L.isVideoTexture&&h.delete(L)}function A(U){let L=U.target;L.removeEventListener("dispose",A),(function(z){let k=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(k.__webglFramebuffer[F]))for(let R=0;R<k.__webglFramebuffer[F].length;R++)r.deleteFramebuffer(k.__webglFramebuffer[F][R]);else r.deleteFramebuffer(k.__webglFramebuffer[F]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[F])}else{if(Array.isArray(k.__webglFramebuffer))for(let F=0;F<k.__webglFramebuffer.length;F++)r.deleteFramebuffer(k.__webglFramebuffer[F]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let F=0;F<k.__webglColorRenderbuffer.length;F++)k.__webglColorRenderbuffer[F]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[F]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let D=z.textures;for(let F=0,R=D.length;F<R;F++){let O=i.get(D[F]);O.__webglTexture&&(r.deleteTexture(O.__webglTexture),a.memory.textures--),i.remove(D[F])}i.remove(z)})(L)}function S(U){let L=i.get(U);r.deleteTexture(L.__webglTexture);let z=U.source;delete d.get(z)[L.__cacheKey],a.memory.textures--}let w=0;function M(U,L){let z=i.get(U);if(U.isVideoTexture&&(function(k){let D=a.render.frame;h.get(k)!==D&&(h.set(k,D),k.update())})(U),U.isRenderTargetTexture===!1&&U.version>0&&z.__version!==U.version){let k=U.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(k.complete!==!1)return void W(z,U,L);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+L)}let b={[Nr]:r.REPEAT,[Or]:r.CLAMP_TO_EDGE,[nl]:r.MIRRORED_REPEAT},P={[ti]:r.NEAREST,[Tp]:r.NEAREST_MIPMAP_NEAREST,[bs]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[go]:r.LINEAR_MIPMAP_NEAREST,[qn]:r.LINEAR_MIPMAP_LINEAR},N={[Ap]:r.NEVER,[Dp]:r.ALWAYS,[Rp]:r.LESS,[Pp]:r.LEQUAL,[Cp]:r.EQUAL,[Up]:r.GEQUAL,[Ip]:r.GREATER,[Lp]:r.NOTEQUAL};function B(U,L){if(L.type!==Ci||e.has("OES_texture_float_linear")!==!1||L.magFilter!==Ri&&L.magFilter!==go&&L.magFilter!==bs&&L.magFilter!==qn&&L.minFilter!==Ri&&L.minFilter!==go&&L.minFilter!==bs&&L.minFilter!==qn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,b[L.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,b[L.wrapT]),U!==r.TEXTURE_3D&&U!==r.TEXTURE_2D_ARRAY||r.texParameteri(U,r.TEXTURE_WRAP_R,b[L.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,P[L.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,P[L.minFilter]),L.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,N[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===ti||L.minFilter!==bs&&L.minFilter!==qn||L.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||i.get(L).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,n.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy}}}function G(U,L){let z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,L.addEventListener("dispose",E));let k=L.source,D=d.get(k);D===void 0&&(D={},d.set(k,D));let F=(function(R){let O=[];return O.push(R.wrapS),O.push(R.wrapT),O.push(R.wrapR||0),O.push(R.magFilter),O.push(R.minFilter),O.push(R.anisotropy),O.push(R.internalFormat),O.push(R.format),O.push(R.type),O.push(R.generateMipmaps),O.push(R.premultiplyAlpha),O.push(R.flipY),O.push(R.unpackAlignment),O.push(R.colorSpace),O.join()})(L);if(F!==U.__cacheKey){D[F]===void 0&&(D[F]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),D[F].usedTimes++;let R=D[U.__cacheKey];R!==void 0&&(D[U.__cacheKey].usedTimes--,R.usedTimes===0&&S(L)),U.__cacheKey=F,U.__webglTexture=D[F].texture}return z}function W(U,L,z){let k=r.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(k=r.TEXTURE_2D_ARRAY),L.isData3DTexture&&(k=r.TEXTURE_3D);let D=G(U,L),F=L.source;t.bindTexture(k,U.__webglTexture,r.TEXTURE0+z);let R=i.get(F);if(F.version!==R.__version||D===!0){t.activeTexture(r.TEXTURE0+z);let O=Ve.getPrimaries(Ve.workingColorSpace),V=L.colorSpace===jn?null:Ve.getPrimaries(L.colorSpace),te=L.colorSpace===jn||O===V?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let H=_(L.image,!1,n.maxTextureSize);H=pe(L,H);let Q=s.convert(L.format,L.colorSpace),K=s.convert(L.type),re,de=v(L.internalFormat,Q,K,L.colorSpace,L.isVideoTexture);B(k,L);let ue=L.mipmaps,xe=L.isVideoTexture!==!0,Ae=R.__version===void 0||D===!0,ze=F.dataReady,Ne=I(L,H);if(L.isDepthTexture)de=x(L.format===er,L.type),Ae&&(xe?t.texStorage2D(r.TEXTURE_2D,1,de,H.width,H.height):t.texImage2D(r.TEXTURE_2D,0,de,H.width,H.height,0,Q,K,null));else if(L.isDataTexture)if(ue.length>0){xe&&Ae&&t.texStorage2D(r.TEXTURE_2D,Ne,de,ue[0].width,ue[0].height);for(let Me=0,Ge=ue.length;Me<Ge;Me++)re=ue[Me],xe?ze&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,re.width,re.height,Q,K,re.data):t.texImage2D(r.TEXTURE_2D,Me,de,re.width,re.height,0,Q,K,re.data);L.generateMipmaps=!1}else xe?(Ae&&t.texStorage2D(r.TEXTURE_2D,Ne,de,H.width,H.height),ze&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,H.width,H.height,Q,K,H.data)):t.texImage2D(r.TEXTURE_2D,0,de,H.width,H.height,0,Q,K,H.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){xe&&Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,de,ue[0].width,ue[0].height,H.depth);for(let Me=0,Ge=ue.length;Me<Ge;Me++)if(re=ue[Me],L.format!==hi)if(Q!==null)if(xe){if(ze)if(L.layerUpdates.size>0){let $e=Ru(re.width,re.height,L.format,L.type);for(let it of L.layerUpdates){let ye=re.data.subarray(it*$e/re.data.BYTES_PER_ELEMENT,(it+1)*$e/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,it,re.width,re.height,1,Q,ye)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,re.width,re.height,H.depth,Q,re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,de,re.width,re.height,H.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?ze&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,re.width,re.height,H.depth,Q,K,re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Me,de,re.width,re.height,H.depth,0,Q,K,re.data)}else{xe&&Ae&&t.texStorage2D(r.TEXTURE_2D,Ne,de,ue[0].width,ue[0].height);for(let Me=0,Ge=ue.length;Me<Ge;Me++)re=ue[Me],L.format!==hi?Q!==null?xe?ze&&t.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,re.width,re.height,Q,re.data):t.compressedTexImage2D(r.TEXTURE_2D,Me,de,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?ze&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,re.width,re.height,Q,K,re.data):t.texImage2D(r.TEXTURE_2D,Me,de,re.width,re.height,0,Q,K,re.data)}else if(L.isDataArrayTexture)if(xe){if(Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,de,H.width,H.height,H.depth),ze)if(L.layerUpdates.size>0){let Me=Ru(H.width,H.height,L.format,L.type);for(let Ge of L.layerUpdates){let $e=H.data.subarray(Ge*Me/H.data.BYTES_PER_ELEMENT,(Ge+1)*Me/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ge,H.width,H.height,1,Q,K,$e)}L.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,Q,K,H.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,H.width,H.height,H.depth,0,Q,K,H.data);else if(L.isData3DTexture)xe?(Ae&&t.texStorage3D(r.TEXTURE_3D,Ne,de,H.width,H.height,H.depth),ze&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,Q,K,H.data)):t.texImage3D(r.TEXTURE_3D,0,de,H.width,H.height,H.depth,0,Q,K,H.data);else if(L.isFramebufferTexture){if(Ae)if(xe)t.texStorage2D(r.TEXTURE_2D,Ne,de,H.width,H.height);else{let Me=H.width,Ge=H.height;for(let $e=0;$e<Ne;$e++)t.texImage2D(r.TEXTURE_2D,$e,de,Me,Ge,0,Q,K,null),Me>>=1,Ge>>=1}}else if(ue.length>0){if(xe&&Ae){let Me=le(ue[0]);t.texStorage2D(r.TEXTURE_2D,Ne,de,Me.width,Me.height)}for(let Me=0,Ge=ue.length;Me<Ge;Me++)re=ue[Me],xe?ze&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Q,K,re):t.texImage2D(r.TEXTURE_2D,Me,de,Q,K,re);L.generateMipmaps=!1}else if(xe){if(Ae){let Me=le(H);t.texStorage2D(r.TEXTURE_2D,Ne,de,Me.width,Me.height)}ze&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q,K,H)}else t.texImage2D(r.TEXTURE_2D,0,de,Q,K,H);f(L)&&y(k),R.__version=F.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function $(U,L,z,k,D,F){let R=s.convert(z.format,z.colorSpace),O=s.convert(z.type),V=v(z.internalFormat,R,O,z.colorSpace),te=i.get(L),H=i.get(z);if(H.__renderTarget=L,!te.__hasExternalTextures){let Q=Math.max(1,L.width>>F),K=Math.max(1,L.height>>F);D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?t.texImage3D(D,F,V,Q,K,L.depth,0,R,O,null):t.texImage2D(D,F,V,Q,K,0,R,O,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),he(L)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,D,H.__webglTexture,0,ie(L)):(D===r.TEXTURE_2D||D>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,k,D,H.__webglTexture,F),t.bindFramebuffer(r.FRAMEBUFFER,null)}function q(U,L,z){if(r.bindRenderbuffer(r.RENDERBUFFER,U),L.depthBuffer){let k=L.depthTexture,D=k&&k.isDepthTexture?k.type:null,F=x(L.stencilBuffer,D),R=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,O=ie(L);he(L)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O,F,L.width,L.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,O,F,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,F,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,R,r.RENDERBUFFER,U)}else{let k=L.textures;for(let D=0;D<k.length;D++){let F=k[D],R=s.convert(F.format,F.colorSpace),O=s.convert(F.type),V=v(F.internalFormat,R,O,F.colorSpace),te=ie(L);z&&he(L)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,V,L.width,L.height):he(L)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,V,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,V,L.width,L.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(U){let L=i.get(U),z=U.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==U.depthTexture){let k=U.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),k){let D=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,k.removeEventListener("dispose",D)};k.addEventListener("dispose",D),L.__depthDisposeCallback=D}L.__boundDepthTexture=k}if(U.depthTexture&&!L.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");(function(k,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,k),!D.depthTexture||!D.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=i.get(D.depthTexture);F.__renderTarget=D,F.__webglTexture&&D.depthTexture.image.width===D.width&&D.depthTexture.image.height===D.height||(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),M(D.depthTexture,0);let R=F.__webglTexture,O=ie(D);if(D.depthTexture.format===Fr)he(D)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,R,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,R,0);else{if(D.depthTexture.format!==er)throw new Error("Unknown depthTexture format");he(D)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,R,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,R,0)}})(L.__webglFramebuffer,U)}else if(z){L.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer[k]),L.__webglDepthbuffer[k]===void 0)L.__webglDepthbuffer[k]=r.createRenderbuffer(),q(L.__webglDepthbuffer[k],U,!1);else{let D=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=L.__webglDepthbuffer[k];r.bindRenderbuffer(r.RENDERBUFFER,F),r.framebufferRenderbuffer(r.FRAMEBUFFER,D,r.RENDERBUFFER,F)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=r.createRenderbuffer(),q(L.__webglDepthbuffer,U,!1);else{let k=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,D=L.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,D),r.framebufferRenderbuffer(r.FRAMEBUFFER,k,r.RENDERBUFFER,D)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let ae=[],J=[];function ie(U){return Math.min(n.maxSamples,U.samples)}function he(U){let L=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function pe(U,L){let z=U.colorSpace,k=U.format,D=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||z!==or&&z!==jn&&(Ve.getTransfer(z)===Xe?k===hi&&D===ji||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),L}function le(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=function(){let U=w;return U>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+n.maxTextures),w+=1,U},this.resetTextureUnits=function(){w=0},this.setTexture2D=M,this.setTexture2DArray=function(U,L){let z=i.get(U);U.version>0&&z.__version!==U.version?W(z,U,L):t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+L)},this.setTexture3D=function(U,L){let z=i.get(U);U.version>0&&z.__version!==U.version?W(z,U,L):t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+L)},this.setTextureCube=function(U,L){let z=i.get(U);U.version>0&&z.__version!==U.version?(function(k,D,F){if(D.image.length!==6)return;let R=G(k,D),O=D.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+F);let V=i.get(O);if(O.version!==V.__version||R===!0){t.activeTexture(r.TEXTURE0+F);let te=Ve.getPrimaries(Ve.workingColorSpace),H=D.colorSpace===jn?null:Ve.getPrimaries(D.colorSpace),Q=D.colorSpace===jn||te===H?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let K=D.isCompressedTexture||D.image[0].isCompressedTexture,re=D.image[0]&&D.image[0].isDataTexture,de=[];for(let ye=0;ye<6;ye++)de[ye]=K||re?re?D.image[ye].image:D.image[ye]:_(D.image[ye],!0,n.maxCubemapSize),de[ye]=pe(D,de[ye]);let ue=de[0],xe=s.convert(D.format,D.colorSpace),Ae=s.convert(D.type),ze=v(D.internalFormat,xe,Ae,D.colorSpace),Ne=D.isVideoTexture!==!0,Me=V.__version===void 0||R===!0,Ge=O.dataReady,$e,it=I(D,ue);if(B(r.TEXTURE_CUBE_MAP,D),K){Ne&&Me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,it,ze,ue.width,ue.height);for(let ye=0;ye<6;ye++){$e=de[ye].mipmaps;for(let Be=0;Be<$e.length;Be++){let Ye=$e[Be];D.format!==hi?xe!==null?Ne?Ge&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,0,0,Ye.width,Ye.height,xe,Ye.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,ze,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?Ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,0,0,Ye.width,Ye.height,xe,Ae,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,ze,Ye.width,Ye.height,0,xe,Ae,Ye.data)}}}else{if($e=D.mipmaps,Ne&&Me){$e.length>0&&it++;let ye=le(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,it,ze,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(re){Ne?Ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,de[ye].width,de[ye].height,xe,Ae,de[ye].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ze,de[ye].width,de[ye].height,0,xe,Ae,de[ye].data);for(let Be=0;Be<$e.length;Be++){let Ye=$e[Be].image[ye].image;Ne?Ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,0,0,Ye.width,Ye.height,xe,Ae,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,ze,Ye.width,Ye.height,0,xe,Ae,Ye.data)}}else{Ne?Ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,xe,Ae,de[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ze,xe,Ae,de[ye]);for(let Be=0;Be<$e.length;Be++){let Ye=$e[Be];Ne?Ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,0,0,xe,Ae,Ye.image[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,ze,xe,Ae,Ye.image[ye])}}}f(D)&&y(r.TEXTURE_CUBE_MAP),V.__version=O.version,D.onUpdate&&D.onUpdate(D)}k.__version=D.version})(z,U,L):t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+L)},this.rebindTextures=function(U,L,z){let k=i.get(U);L!==void 0&&$(k.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&oe(U)},this.setupRenderTarget=function(U){let L=U.texture,z=i.get(U),k=i.get(L);U.addEventListener("dispose",A);let D=U.textures,F=U.isWebGLCubeRenderTarget===!0,R=D.length>1;if(R||(k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture()),k.__version=L.version,a.memory.textures++),F){z.__webglFramebuffer=[];for(let O=0;O<6;O++)if(L.mipmaps&&L.mipmaps.length>0){z.__webglFramebuffer[O]=[];for(let V=0;V<L.mipmaps.length;V++)z.__webglFramebuffer[O][V]=r.createFramebuffer()}else z.__webglFramebuffer[O]=r.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){z.__webglFramebuffer=[];for(let O=0;O<L.mipmaps.length;O++)z.__webglFramebuffer[O]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(R)for(let O=0,V=D.length;O<V;O++){let te=i.get(D[O]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),a.memory.textures++)}if(U.samples>0&&he(U)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let O=0;O<D.length;O++){let V=D[O];z.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[O]);let te=s.convert(V.format,V.colorSpace),H=s.convert(V.type),Q=v(V.internalFormat,te,H,V.colorSpace,U.isXRRenderTarget===!0),K=ie(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,Q,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,z.__webglColorRenderbuffer[O])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),q(z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(F){t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture),B(r.TEXTURE_CUBE_MAP,L);for(let O=0;O<6;O++)if(L.mipmaps&&L.mipmaps.length>0)for(let V=0;V<L.mipmaps.length;V++)$(z.__webglFramebuffer[O][V],U,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+O,V);else $(z.__webglFramebuffer[O],U,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);f(L)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(R){for(let O=0,V=D.length;O<V;O++){let te=D[O],H=i.get(te);t.bindTexture(r.TEXTURE_2D,H.__webglTexture),B(r.TEXTURE_2D,te),$(z.__webglFramebuffer,U,te,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,0),f(te)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let O=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(O=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(O,k.__webglTexture),B(O,L),L.mipmaps&&L.mipmaps.length>0)for(let V=0;V<L.mipmaps.length;V++)$(z.__webglFramebuffer[V],U,L,r.COLOR_ATTACHMENT0,O,V);else $(z.__webglFramebuffer,U,L,r.COLOR_ATTACHMENT0,O,0);f(L)&&y(O),t.unbindTexture()}U.depthBuffer&&oe(U)},this.updateRenderTargetMipmap=function(U){let L=U.textures;for(let z=0,k=L.length;z<k;z++){let D=L[z];if(f(D)){let F=m(U),R=i.get(D).__webglTexture;t.bindTexture(F,R),y(F),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(U){if(U.samples>0){if(he(U)===!1){let L=U.textures,z=U.width,k=U.height,D=r.COLOR_BUFFER_BIT,F=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,R=i.get(U),O=L.length>1;if(O)for(let V=0;V<L.length;V++)t.bindFramebuffer(r.FRAMEBUFFER,R.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,R.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,R.__webglFramebuffer);for(let V=0;V<L.length;V++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(D|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(D|=r.STENCIL_BUFFER_BIT)),O){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,R.__webglColorRenderbuffer[V]);let te=i.get(L[V]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,z,k,0,0,z,k,D,r.NEAREST),l===!0&&(ae.length=0,J.length=0,ae.push(r.COLOR_ATTACHMENT0+V),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(F),J.push(F),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,J)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),O)for(let V=0;V<L.length;V++){t.bindFramebuffer(r.FRAMEBUFFER,R.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,R.__webglColorRenderbuffer[V]);let te=i.get(L[V]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,R.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let L=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[L])}}},this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=$,this.useMultisampledRTT=he}function bm(r,e){return{convert:function(t,i=""){let n,s=Ve.getTransfer(i);if(t===ji)return r.UNSIGNED_BYTE;if(t===Ic)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Lc)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Zu)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===qu)return r.BYTE;if(t===Yu)return r.SHORT;if(t===Br)return r.UNSIGNED_SHORT;if(t===Pc)return r.INT;if(t===fn)return r.UNSIGNED_INT;if(t===Ci)return r.FLOAT;if(t===$r)return r.HALF_FLOAT;if(t===$u)return r.ALPHA;if(t===Ju)return r.RGB;if(t===hi)return r.RGBA;if(t===Ku)return r.LUMINANCE;if(t===Qu)return r.LUMINANCE_ALPHA;if(t===Fr)return r.DEPTH_COMPONENT;if(t===er)return r.DEPTH_STENCIL;if(t===ed)return r.RED;if(t===Uc)return r.RED_INTEGER;if(t===td)return r.RG;if(t===Dc)return r.RG_INTEGER;if(t===Nc)return r.RGBA_INTEGER;if(t===ia||t===na||t===ra||t===sa)if(s===Xe){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===ia)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===na)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ra)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===sa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===ia)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===na)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ra)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===sa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===rl||t===sl||t===al||t===ol){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===rl)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===sl)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===al)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===ol)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===ll||t===cl||t===hl){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===ll||t===cl)return s===Xe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===hl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===ul||t===dl||t===pl||t===fl||t===ml||t===gl||t===vl||t===yl||t===_l||t===xl||t===Ml||t===Sl||t===bl||t===wl){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===ul)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===dl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===pl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===fl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===ml)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===gl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===vl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===yl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===_l)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===xl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Ml)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Sl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===bl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===wl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===aa||t===El||t===Tl){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===aa)return s===Xe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===El)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Tl)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===id||t===Al||t===Rl||t===Cl){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===aa)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Al)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Rl)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Cl)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Qn?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var jl=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ot=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},wm={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,i),y=this._getHandJoint(c,_);f!==null&&(y.matrix.fromArray(f.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=f.radius),y.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new Ut;e.properties.get(n).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Gt({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new lt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yl=class extends qi{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,_=new ql,f=t.getContextAttributes(),y=null,m=null,v=[],x=[],I=new ne,E=null,A=new Et;A.viewport=new We;let S=new Et;S.viewport=new We;let w=[A,S],M=new jl,b=null,P=null;function N(J){let ie=x.indexOf(J.inputSource);if(ie===-1)return;let he=v[ie];he!==void 0&&(he.update(J.inputSource,J.frame,c||a),he.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",G);for(let J=0;J<v.length;J++){let ie=x[J];ie!==null&&(x[J]=null,v[J].disconnect(ie))}b=null,P=null,_.reset(),e.setRenderTarget(y),p=null,d=null,u=null,n=null,m=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}function G(J){for(let ie=0;ie<J.removed.length;ie++){let he=J.removed[ie],pe=x.indexOf(he);pe>=0&&(x[pe]=null,v[pe].disconnect(he))}for(let ie=0;ie<J.added.length;ie++){let he=J.added[ie],pe=x.indexOf(he);if(pe===-1){for(let U=0;U<v.length;U++){if(U>=x.length){x.push(he),pe=U;break}if(x[U]===null){x[U]=he,pe=U;break}}if(pe===-1)break}let le=v[pe];le&&le.connect(he)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=v[J];return ie===void 0&&(ie=new Lr,v[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=v[J];return ie===void 0&&(ie=new Lr,v[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=v[J];return ie===void 0&&(ie=new Lr,v[J]=ie),ie.getHandSpace()},this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",B),n.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),n.renderState.layers===void 0){let ie={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,ie),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new Li(p.framebufferWidth,p.framebufferHeight,{format:hi,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let ie=null,he=null,pe=null;f.depth&&(pe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=f.stencil?er:Fr,he=f.stencil?Qn:fn);let le={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(le),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Li(d.textureWidth,d.textureHeight,{format:hi,type:ji,depthTexture:new va(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ae.setContext(n),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let W=new T,$=new T;function q(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let ie=J.near,he=J.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(he=_.depthFar)),M.near=S.near=A.near=ie,M.far=S.far=A.far=he,b===M.near&&P===M.far||(n.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,P=M.far),A.layers.mask=2|J.layers.mask,S.layers.mask=4|J.layers.mask,M.layers.mask=A.layers.mask|S.layers.mask;let pe=J.parent,le=M.cameras;q(M,pe);for(let U=0;U<le.length;U++)q(le[U],pe);le.length===2?(function(U,L,z){W.setFromMatrixPosition(L.matrixWorld),$.setFromMatrixPosition(z.matrixWorld);let k=W.distanceTo($),D=L.projectionMatrix.elements,F=z.projectionMatrix.elements,R=D[14]/(D[10]-1),O=D[14]/(D[10]+1),V=(D[9]+1)/D[5],te=(D[9]-1)/D[5],H=(D[8]-1)/D[0],Q=(F[8]+1)/F[0],K=R*H,re=R*Q,de=k/(-H+Q),ue=de*-H;if(L.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ue),U.translateZ(de),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),D[10]===-1)U.projectionMatrix.copy(L.projectionMatrix),U.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let xe=R+de,Ae=O+de,ze=K-ue,Ne=re+(k-ue),Me=V*O/Ae*xe,Ge=te*O/Ae*xe;U.projectionMatrix.makePerspective(ze,Ne,Me,Ge,xe,Ae),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}})(M,A,S):M.projectionMatrix.copy(A.projectionMatrix),(function(U,L,z){z===null?U.matrix.copy(L.matrixWorld):(U.matrix.copy(z.matrixWorld),U.matrix.invert(),U.matrix.multiply(L.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(L.projectionMatrix),U.projectionMatrixInverse.copy(L.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=2*Ll*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)})(J,M,pe)},this.getCamera=function(){return M},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let oe=null,ae=new ad;ae.setAnimationLoop((function(J,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){let he=h.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let pe=!1;he.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let U=0;U<he.length;U++){let L=he[U],z=null;if(p!==null)z=p.getViewport(L);else{let D=u.getViewSubImage(d,L);z=D.viewport,U===0&&(e.setRenderTargetTextures(m,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(m))}let k=w[U];k===void 0&&(k=new Et,k.layers.enable(U),k.viewport=new We,w[U]=k),k.matrix.fromArray(L.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(L.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(z.x,z.y,z.width,z.height),U===0&&(M.matrix.copy(k.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(k)}let le=n.enabledFeatures;if(le&&le.includes("depth-sensing")){let U=u.getDepthInformation(he[0]);U&&U.isValid&&U.texture&&_.init(e,U,n.renderState)}}for(let he=0;he<v.length;he++){let pe=x[he],le=v[he];pe!==null&&le!==void 0&&le.update(pe,ie,c||a)}oe&&oe(J,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null})),this.setAnimationLoop=function(J){oe=J},this.dispose=function(){}}},cn=new ui,Em=new Ee;function Tm(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===1&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===1&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,cn.copy(l),cn.x*=-1,cn.y*=-1,cn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),n.envMapRotation.value.setFromMatrix4(Em.makeRotationFromEuler(cn)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,sd(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Am(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,g){let _=u.value,f=d+"_"+p;if(g[f]===void 0)return g[f]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let y=g[f];if(typeof _=="number"||typeof _=="boolean"){if(y!==_)return g[f]=_,!0}else if(y.equals(_)===!1)return y.copy(_),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&((function(f){let y=f.uniforms,m=0,v=16;for(let I=0,E=y.length;I<E;I++){let A=Array.isArray(y[I])?y[I]:[y[I]];for(let S=0,w=A.length;S<w;S++){let M=A[S],b=Array.isArray(M.value)?M.value:[M.value];for(let P=0,N=b.length;P<N;P++){let B=c(b[P]),G=m%v,W=G%B.boundary,$=G+W;m+=W,$!==0&&v-$<B.storage&&(m+=v-$),M.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=m,m+=B.storage}}}let x=m%v;x>0&&(m+=v-x),f.__size=m,f.__cache={}})(u),p=(function(f){let y=(function(){for(let I=0;I<o;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=y;let m=r.createBuffer(),v=f.__size,x=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,m),r.bufferData(r.UNIFORM_BUFFER,v,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,m),m})(u),n[u.id]=p,u.addEventListener("dispose",h));let g=d.program;i.updateUBOMapping(u,g);let _=e.render.frame;s[u.id]!==_&&((function(f){let y=n[f.id],m=f.uniforms,v=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let x=0,I=m.length;x<I;x++){let E=Array.isArray(m[x])?m[x]:[m[x]];for(let A=0,S=E.length;A<S;A++){let w=E[A];if(l(w,x,A,v)===!0){let M=w.__offset,b=Array.isArray(w.value)?w.value:[w.value],P=0;for(let N=0;N<b.length;N++){let B=b[N],G=c(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,M+P,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,P),P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,M,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var ya=class{constructor(e={}){let{canvas:t=Op(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),_=new Int32Array(4),f=null,y=null,m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this.toneMapping=0,this.toneMappingExposure=1;let x=this,I=!1,E=0,A=0,S=null,w=-1,M=null,b=new We,P=new We,N=null,B=new Se(0),G=0,W=t.width,$=t.height,q=1,oe=null,ae=null,J=new We(0,0,W,$),ie=new We(0,0,W,$),he=!1,pe=new Yi,le=!1,U=!1,L=new Ee,z=new Ee,k=new T,D=new We,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},R=!1;function O(){return S===null?q:1}let V,te,H,Q,K,re,de,ue,xe,Ae,ze,Ne,Me,Ge,$e,it,ye,Be,Ye,An,ms,Yt,ai,Ki,X=i;function vr(C,j){return t.getContext(C,j)}try{let C={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",rh,!1),t.addEventListener("webglcontextrestored",sh,!1),t.addEventListener("webglcontextcreationerror",ah,!1),X===null){let j="webgl2";if(X=vr(j,C),X===null)throw vr(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}function nh(){V=new lf(X),V.init(),Yt=new bm(X,V),te=new rf(X,V,e,Yt),H=new Mm(X,V),te.reverseDepthBuffer&&d&&H.buffers.depth.setReversed(!0),Q=new uf(X),K=new um,re=new Sm(X,V,H,K,te,Yt,Q),de=new af(x),ue=new of(x),xe=new Kp(X),ai=new tf(X,xe),Ae=new cf(X,xe,Q,ai),ze=new pf(X,Ae,xe,Q),Ye=new df(X,te,re),it=new sf(K),Ne=new hm(x,de,ue,V,te,ai,it),Me=new Tm(x,K),Ge=new pm,$e=new ym(V),Be=new ef(x,de,ue,H,ze,p,l),ye=new _m(x,ze,te),Ki=new Am(X,Q,te,H),An=new nf(X,V,Q),ms=new hf(X,V,Q),Q.programs=Ne.programs,x.capabilities=te,x.extensions=V,x.properties=K,x.renderLists=Ge,x.shadowMap=ye,x.state=H,x.info=Q}nh();let _t=new Yl(x,X);function rh(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function sh(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let C=Q.autoReset,j=ye.enabled,Z=ye.autoUpdate,ee=ye.needsUpdate,Y=ye.type;nh(),Q.autoReset=C,ye.enabled=j,ye.autoUpdate=Z,ye.needsUpdate=ee,ye.type=Y}function ah(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oh(C){let j=C.target;j.removeEventListener("dispose",oh),(function(Z){(function(ee){let Y=K.get(ee).programs;Y!==void 0&&(Y.forEach((function(se){Ne.releaseProgram(se)})),ee.isShaderMaterial&&Ne.releaseShaderCache(ee))})(Z),K.remove(Z)})(j)}function lh(C,j,Z){C.transparent===!0&&C.side===2&&C.forceSinglePass===!1?(C.side=1,C.needsUpdate=!0,vs(C,j,Z),C.side=0,C.needsUpdate=!0,vs(C,j,Z),C.side=2):vs(C,j,Z)}this.xr=_t,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=V.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=V.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(W,$,!1))},this.getSize=function(C){return C.set(W,$)},this.setSize=function(C,j,Z=!0){_t.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(W=C,$=j,t.width=Math.floor(C*q),t.height=Math.floor(j*q),Z===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j))},this.getDrawingBufferSize=function(C){return C.set(W*q,$*q).floor()},this.setDrawingBufferSize=function(C,j,Z){W=C,$=j,q=Z,t.width=Math.floor(C*Z),t.height=Math.floor(j*Z),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,j,Z,ee){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,j,Z,ee),H.viewport(b.copy(J).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,j,Z,ee){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,j,Z,ee),H.scissor(P.copy(ie).multiplyScalar(q).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(C){H.setScissorTest(he=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){ae=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(C=!0,j=!0,Z=!0){let ee=0;if(C){let Y=!1;if(S!==null){let se=S.texture.format;Y=se===Nc||se===Dc||se===Uc}if(Y){let se=S.texture.type,fe=se===ji||se===fn||se===Br||se===Qn||se===Ic||se===Lc,_e=Be.getClearColor(),be=Be.getClearAlpha(),Ce=_e.r,Ie=_e.g,we=_e.b;fe?(g[0]=Ce,g[1]=Ie,g[2]=we,g[3]=be,X.clearBufferuiv(X.COLOR,0,g)):(_[0]=Ce,_[1]=Ie,_[2]=we,_[3]=be,X.clearBufferiv(X.COLOR,0,_))}else ee|=X.COLOR_BUFFER_BIT}j&&(ee|=X.DEPTH_BUFFER_BIT),Z&&(ee|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rh,!1),t.removeEventListener("webglcontextrestored",sh,!1),t.removeEventListener("webglcontextcreationerror",ah,!1),Ge.dispose(),$e.dispose(),K.dispose(),de.dispose(),ue.dispose(),ze.dispose(),ai.dispose(),Ki.dispose(),Ne.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",ch),_t.removeEventListener("sessionend",hh),Qi.stop()},this.renderBufferDirect=function(C,j,Z,ee,Y,se){j===null&&(j=F);let fe=Y.isMesh&&Y.matrixWorld.determinant()<0,_e=(function(ke,At,St,De,Re){At.isScene!==!0&&(At=F),re.resetTextureUnits();let Zt=At.fog,oo=De.isMeshStandardMaterial?At.environment:null,yr=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:or,Rn=(De.isMeshStandardMaterial?ue:de).get(De.envMap||oo),lo=De.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,co=!!St.attributes.tangent&&(!!De.normalMap||De.anisotropy>0),ho=!!St.morphAttributes.position,Bi=!!St.morphAttributes.normal,Qd=!!St.morphAttributes.color,gh=0;De.toneMapped&&(S!==null&&S.isXRRenderTarget!==!0||(gh=x.toneMapping));let vh=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,ep=vh!==void 0?vh.length:0,Fe=K.get(De),tp=y.state.lights;if(le===!0&&(U===!0||ke!==M)){let Bt=ke===M&&De.id===w;it.setState(De,ke,Bt)}let $t=!1;De.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==tp.state.version||Fe.outputColorSpace!==yr||Re.isBatchedMesh&&Fe.batching===!1?$t=!0:Re.isBatchedMesh||Fe.batching!==!0?Re.isBatchedMesh&&Fe.batchingColor===!0&&Re.colorTexture===null||Re.isBatchedMesh&&Fe.batchingColor===!1&&Re.colorTexture!==null||Re.isInstancedMesh&&Fe.instancing===!1?$t=!0:Re.isInstancedMesh||Fe.instancing!==!0?Re.isSkinnedMesh&&Fe.skinning===!1?$t=!0:Re.isSkinnedMesh||Fe.skinning!==!0?Re.isInstancedMesh&&Fe.instancingColor===!0&&Re.instanceColor===null||Re.isInstancedMesh&&Fe.instancingColor===!1&&Re.instanceColor!==null||Re.isInstancedMesh&&Fe.instancingMorph===!0&&Re.morphTexture===null||Re.isInstancedMesh&&Fe.instancingMorph===!1&&Re.morphTexture!==null||Fe.envMap!==Rn||De.fog===!0&&Fe.fog!==Zt?$t=!0:Fe.numClippingPlanes===void 0||Fe.numClippingPlanes===it.numPlanes&&Fe.numIntersection===it.numIntersection?(Fe.vertexAlphas!==lo||Fe.vertexTangents!==co||Fe.morphTargets!==ho||Fe.morphNormals!==Bi||Fe.morphColors!==Qd||Fe.toneMapping!==gh||Fe.morphTargetsCount!==ep)&&($t=!0):$t=!0:$t=!0:$t=!0:$t=!0:($t=!0,Fe.__version=De.version);let en=Fe.currentProgram;$t===!0&&(en=vs(De,At,Re));let yh=!1,_r=!1,uo=!1,ct=en.getUniforms(),Fi=Fe.uniforms;if(H.useProgram(en.program)&&(yh=!0,_r=!0,uo=!0),De.id!==w&&(w=De.id,_r=!0),yh||M!==ke){H.buffers.depth.getReversed()?(L.copy(ke.projectionMatrix),(function(tn){let et=tn.elements;et[2]=.5*et[2]+.5*et[3],et[6]=.5*et[6]+.5*et[7],et[10]=.5*et[10]+.5*et[11],et[14]=.5*et[14]+.5*et[15]})(L),(function(tn){let et=tn.elements;et[11]===-1?(et[10]=-et[10]-1,et[14]=-et[14]):(et[10]=-et[10],et[14]=1-et[14])})(L),ct.setValue(X,"projectionMatrix",L)):ct.setValue(X,"projectionMatrix",ke.projectionMatrix),ct.setValue(X,"viewMatrix",ke.matrixWorldInverse);let Bt=ct.map.cameraPosition;Bt!==void 0&&Bt.setValue(X,k.setFromMatrixPosition(ke.matrixWorld)),te.logarithmicDepthBuffer&&ct.setValue(X,"logDepthBufFC",2/(Math.log(ke.far+1)/Math.LN2)),(De.isMeshPhongMaterial||De.isMeshToonMaterial||De.isMeshLambertMaterial||De.isMeshBasicMaterial||De.isMeshStandardMaterial||De.isShaderMaterial)&&ct.setValue(X,"isOrthographic",ke.isOrthographicCamera===!0),M!==ke&&(M=ke,_r=!0,uo=!0)}if(Re.isSkinnedMesh){ct.setOptional(X,Re,"bindMatrix"),ct.setOptional(X,Re,"bindMatrixInverse");let Bt=Re.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ct.setValue(X,"boneTexture",Bt.boneTexture,re))}Re.isBatchedMesh&&(ct.setOptional(X,Re,"batchingTexture"),ct.setValue(X,"batchingTexture",Re._matricesTexture,re),ct.setOptional(X,Re,"batchingIdTexture"),ct.setValue(X,"batchingIdTexture",Re._indirectTexture,re),ct.setOptional(X,Re,"batchingColorTexture"),Re._colorsTexture!==null&&ct.setValue(X,"batchingColorTexture",Re._colorsTexture,re));let po=St.morphAttributes;po.position===void 0&&po.normal===void 0&&po.color===void 0||Ye.update(Re,St,en),(_r||Fe.receiveShadow!==Re.receiveShadow)&&(Fe.receiveShadow=Re.receiveShadow,ct.setValue(X,"receiveShadow",Re.receiveShadow)),De.isMeshGouraudMaterial&&De.envMap!==null&&(Fi.envMap.value=Rn,Fi.flipEnvMap.value=Rn.isCubeTexture&&Rn.isRenderTargetTexture===!1?-1:1),De.isMeshStandardMaterial&&De.envMap===null&&At.environment!==null&&(Fi.envMapIntensity.value=At.environmentIntensity),_r&&(ct.setValue(X,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&(Jt=uo,(oi=Fi).ambientLightColor.needsUpdate=Jt,oi.lightProbe.needsUpdate=Jt,oi.directionalLights.needsUpdate=Jt,oi.directionalLightShadows.needsUpdate=Jt,oi.pointLights.needsUpdate=Jt,oi.pointLightShadows.needsUpdate=Jt,oi.spotLights.needsUpdate=Jt,oi.spotLightShadows.needsUpdate=Jt,oi.rectAreaLights.needsUpdate=Jt,oi.hemisphereLights.needsUpdate=Jt),Zt&&De.fog===!0&&Me.refreshFogUniforms(Fi,Zt),Me.refreshMaterialUniforms(Fi,De,q,$,y.state.transmissionRenderTarget[ke.id]),$n.upload(X,fh(Fe),Fi,re));var oi,Jt;if(De.isShaderMaterial&&De.uniformsNeedUpdate===!0&&($n.upload(X,fh(Fe),Fi,re),De.uniformsNeedUpdate=!1),De.isSpriteMaterial&&ct.setValue(X,"center",Re.center),ct.setValue(X,"modelViewMatrix",Re.modelViewMatrix),ct.setValue(X,"normalMatrix",Re.normalMatrix),ct.setValue(X,"modelMatrix",Re.matrixWorld),De.isShaderMaterial||De.isRawShaderMaterial){let Bt=De.uniformsGroups;for(let tn=0,et=Bt.length;tn<et;tn++){let _h=Bt[tn];Ki.update(_h,en),Ki.bind(_h,en)}}return en})(C,j,Z,ee,Y);H.setMaterial(ee,fe);let be=Z.index,Ce=1;if(ee.wireframe===!0){if(be=Ae.getWireframeAttribute(Z),be===void 0)return;Ce=2}let Ie=Z.drawRange,we=Z.attributes.position,Oe=Ie.start*Ce,st=(Ie.start+Ie.count)*Ce;se!==null&&(Oe=Math.max(Oe,se.start*Ce),st=Math.min(st,(se.start+se.count)*Ce)),be!==null?(Oe=Math.max(Oe,0),st=Math.min(st,be.count)):we!=null&&(Oe=Math.max(Oe,0),st=Math.min(st,we.count));let Je=st-Oe;if(Je<0||Je===1/0)return;let mt;ai.setup(Y,ee,_e,Z,be);let Ke=An;if(be!==null&&(mt=xe.get(be),Ke=ms,Ke.setIndex(mt)),Y.isMesh)ee.wireframe===!0?(H.setLineWidth(ee.wireframeLinewidth*O()),Ke.setMode(X.LINES)):Ke.setMode(X.TRIANGLES);else if(Y.isLine){let ke=ee.linewidth;ke===void 0&&(ke=1),H.setLineWidth(ke*O()),Y.isLineSegments?Ke.setMode(X.LINES):Y.isLineLoop?Ke.setMode(X.LINE_LOOP):Ke.setMode(X.LINE_STRIP)}else Y.isPoints?Ke.setMode(X.POINTS):Y.isSprite&&Ke.setMode(X.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ke.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))Ke.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let ke=Y._multiDrawStarts,At=Y._multiDrawCounts,St=Y._multiDrawCount,De=be?xe.get(be).bytesPerElement:1,Re=K.get(ee).currentProgram.getUniforms();for(let Zt=0;Zt<St;Zt++)Re.setValue(X,"_gl_DrawID",Zt),Ke.render(ke[Zt]/De,At[Zt])}else if(Y.isInstancedMesh)Ke.renderInstances(Oe,Je,Y.count);else if(Z.isInstancedBufferGeometry){let ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,At=Math.min(Z.instanceCount,ke);Ke.renderInstances(Oe,Je,At)}else Ke.render(Oe,Je)},this.compile=function(C,j,Z=null){Z===null&&(Z=C),y=$e.get(Z),y.init(j),v.push(y),Z.traverseVisible((function(Y){Y.isLight&&Y.layers.test(j.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))})),C!==Z&&C.traverseVisible((function(Y){Y.isLight&&Y.layers.test(j.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))})),y.setupLights();let ee=new Set;return C.traverse((function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let se=Y.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){let _e=se[fe];lh(_e,Z,Y),ee.add(_e)}else lh(se,Z,Y),ee.add(se)})),v.pop(),y=null,ee},this.compileAsync=function(C,j,Z=null){let ee=this.compile(C,j,Z);return new Promise((Y=>{function se(){ee.forEach((function(fe){K.get(fe).currentProgram.isReady()&&ee.delete(fe)})),ee.size!==0?setTimeout(se,10):Y(C)}V.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)}))};let so=null;function ch(){Qi.stop()}function hh(){Qi.start()}let Qi=new ad;function ao(C,j,Z,ee){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||pe.intersectsSprite(C)){ee&&D.setFromMatrixPosition(C.matrixWorld).applyMatrix4(z);let se=ze.update(C),fe=C.material;fe.visible&&f.push(C,se,fe,Z,D.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||pe.intersectsObject(C))){let se=ze.update(C),fe=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),D.copy(C.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),D.copy(se.boundingSphere.center)),D.applyMatrix4(C.matrixWorld).applyMatrix4(z)),Array.isArray(fe)){let _e=se.groups;for(let be=0,Ce=_e.length;be<Ce;be++){let Ie=_e[be],we=fe[Ie.materialIndex];we&&we.visible&&f.push(C,se,we,Z,D.z,Ie)}}else fe.visible&&f.push(C,se,fe,Z,D.z,null)}}let Y=C.children;for(let se=0,fe=Y.length;se<fe;se++)ao(Y[se],j,Z,ee)}function uh(C,j,Z,ee){let Y=C.opaque,se=C.transmissive,fe=C.transparent;y.setupLightsView(Z),le===!0&&it.setGlobalState(x.clippingPlanes,Z),ee&&H.viewport(b.copy(ee)),Y.length>0&&gs(Y,j,Z),se.length>0&&gs(se,j,Z),fe.length>0&&gs(fe,j,Z),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function dh(C,j,Z,ee){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ee.id]===void 0&&(y.state.transmissionRenderTarget[ee.id]=new Li(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?$r:ji,minFilter:qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));let Y=y.state.transmissionRenderTarget[ee.id],se=ee.viewport||b;Y.setSize(se.z,se.w);let fe=x.getRenderTarget();x.setRenderTarget(Y),x.getClearColor(B),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),R&&Be.render(Z);let _e=x.toneMapping;x.toneMapping=0;let be=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),le===!0&&it.setGlobalState(x.clippingPlanes,ee),gs(C,Z,ee),re.updateMultisampleRenderTarget(Y),re.updateRenderTargetMipmap(Y),V.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ie=0,we=j.length;Ie<we;Ie++){let Oe=j[Ie],st=Oe.object,Je=Oe.geometry,mt=Oe.material,Ke=Oe.group;if(mt.side===2&&st.layers.test(ee.layers)){let ke=mt.side;mt.side=1,mt.needsUpdate=!0,ph(st,Z,ee,Je,mt,Ke),mt.side=ke,mt.needsUpdate=!0,Ce=!0}}Ce===!0&&(re.updateMultisampleRenderTarget(Y),re.updateRenderTargetMipmap(Y))}x.setRenderTarget(fe),x.setClearColor(B,G),be!==void 0&&(ee.viewport=be),x.toneMapping=_e}function gs(C,j,Z){let ee=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,se=C.length;Y<se;Y++){let fe=C[Y],_e=fe.object,be=fe.geometry,Ce=ee===null?fe.material:ee,Ie=fe.group;_e.layers.test(Z.layers)&&ph(_e,j,Z,be,Ce,Ie)}}function ph(C,j,Z,ee,Y,se){C.onBeforeRender(x,j,Z,ee,Y,se),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(x,j,Z,ee,C,se),Y.transparent===!0&&Y.side===2&&Y.forceSinglePass===!1?(Y.side=1,Y.needsUpdate=!0,x.renderBufferDirect(Z,j,ee,Y,C,se),Y.side=0,Y.needsUpdate=!0,x.renderBufferDirect(Z,j,ee,Y,C,se),Y.side=2):x.renderBufferDirect(Z,j,ee,Y,C,se),C.onAfterRender(x,j,Z,ee,Y,se)}function vs(C,j,Z){j.isScene!==!0&&(j=F);let ee=K.get(C),Y=y.state.lights,se=y.state.shadowsArray,fe=Y.state.version,_e=Ne.getParameters(C,Y.state,se,j,Z),be=Ne.getProgramCacheKey(_e),Ce=ee.programs;ee.environment=C.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(C.isMeshStandardMaterial?ue:de).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Ce===void 0&&(C.addEventListener("dispose",oh),Ce=new Map,ee.programs=Ce);let Ie=Ce.get(be);if(Ie!==void 0){if(ee.currentProgram===Ie&&ee.lightsStateVersion===fe)return mh(C,_e),Ie}else _e.uniforms=Ne.getUniforms(C),C.onBeforeCompile(_e,x),Ie=Ne.acquireProgram(_e,be),Ce.set(be,Ie),ee.uniforms=_e.uniforms;let we=ee.uniforms;return(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(we.clippingPlanes=it.uniform),mh(C,_e),ee.needsLights=(function(Oe){return Oe.isMeshLambertMaterial||Oe.isMeshToonMaterial||Oe.isMeshPhongMaterial||Oe.isMeshStandardMaterial||Oe.isShadowMaterial||Oe.isShaderMaterial&&Oe.lights===!0})(C),ee.lightsStateVersion=fe,ee.needsLights&&(we.ambientLightColor.value=Y.state.ambient,we.lightProbe.value=Y.state.probe,we.directionalLights.value=Y.state.directional,we.directionalLightShadows.value=Y.state.directionalShadow,we.spotLights.value=Y.state.spot,we.spotLightShadows.value=Y.state.spotShadow,we.rectAreaLights.value=Y.state.rectArea,we.ltc_1.value=Y.state.rectAreaLTC1,we.ltc_2.value=Y.state.rectAreaLTC2,we.pointLights.value=Y.state.point,we.pointLightShadows.value=Y.state.pointShadow,we.hemisphereLights.value=Y.state.hemi,we.directionalShadowMap.value=Y.state.directionalShadowMap,we.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,we.spotShadowMap.value=Y.state.spotShadowMap,we.spotLightMatrix.value=Y.state.spotLightMatrix,we.spotLightMap.value=Y.state.spotLightMap,we.pointShadowMap.value=Y.state.pointShadowMap,we.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=Ie,ee.uniformsList=null,Ie}function fh(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=$n.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function mh(C,j){let Z=K.get(C);Z.outputColorSpace=j.outputColorSpace,Z.batching=j.batching,Z.batchingColor=j.batchingColor,Z.instancing=j.instancing,Z.instancingColor=j.instancingColor,Z.instancingMorph=j.instancingMorph,Z.skinning=j.skinning,Z.morphTargets=j.morphTargets,Z.morphNormals=j.morphNormals,Z.morphColors=j.morphColors,Z.morphTargetsCount=j.morphTargetsCount,Z.numClippingPlanes=j.numClippingPlanes,Z.numIntersection=j.numClipIntersection,Z.vertexAlphas=j.vertexAlphas,Z.vertexTangents=j.vertexTangents,Z.toneMapping=j.toneMapping}Qi.setAnimationLoop((function(C){so&&so(C)})),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(C){so=C,_t.setAnimationLoop(C),C===null?Qi.stop():Qi.start()},_t.addEventListener("sessionstart",ch),_t.addEventListener("sessionend",hh),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(j),j=_t.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,j,S),y=$e.get(C,v.length),y.init(j),v.push(y),z.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),pe.setFromProjectionMatrix(z),U=this.localClippingEnabled,le=it.init(this.clippingPlanes,U),f=Ge.get(C,m.length),f.init(),m.push(f),_t.enabled===!0&&_t.isPresenting===!0){let se=x.xr.getDepthSensingMesh();se!==null&&ao(se,j,-1/0,x.sortObjects)}ao(C,j,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(oe,ae),R=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,R&&Be.addToRenderList(f,C),this.info.render.frame++,le===!0&&it.beginShadows();let Z=y.state.shadowsArray;ye.render(Z,C,j),le===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=f.opaque,Y=f.transmissive;if(y.setupLights(),j.isArrayCamera){let se=j.cameras;if(Y.length>0)for(let fe=0,_e=se.length;fe<_e;fe++)dh(ee,Y,C,se[fe]);R&&Be.render(C);for(let fe=0,_e=se.length;fe<_e;fe++){let be=se[fe];uh(f,C,be,be.viewport)}}else Y.length>0&&dh(ee,Y,C,j),R&&Be.render(C),uh(f,C,j);S!==null&&(re.updateMultisampleRenderTarget(S),re.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(x,C,j),ai.resetDefaultState(),w=-1,M=null,v.pop(),v.length>0?(y=v[v.length-1],le===!0&&it.setGlobalState(x.clippingPlanes,y.state.camera)):y=null,m.pop(),f=m.length>0?m[m.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,j,Z){K.get(C.texture).__webglTexture=j,K.get(C.depthTexture).__webglTexture=Z;let ee=K.get(C);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Z===void 0,ee.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){let Z=K.get(C);Z.__webglFramebuffer=j,Z.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,Z=0){S=C,E=j,A=Z;let ee=!0,Y=null,se=!1,fe=!1;if(C){let _e=K.get(C);if(_e.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(X.FRAMEBUFFER,null),ee=!1;else if(_e.__webglFramebuffer===void 0)re.setupRenderTarget(C);else if(_e.__hasExternalTextures)re.rebindTextures(C,K.get(C.texture).__webglTexture,K.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ie=C.depthTexture;if(_e.__boundDepthTexture!==Ie){if(Ie!==null&&K.has(Ie)&&(C.width!==Ie.image.width||C.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(C)}}let be=C.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(fe=!0);let Ce=K.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Y=Array.isArray(Ce[j])?Ce[j][Z]:Ce[j],se=!0):Y=C.samples>0&&re.useMultisampledRTT(C)===!1?K.get(C).__webglMultisampledFramebuffer:Array.isArray(Ce)?Ce[Z]:Ce,b.copy(C.viewport),P.copy(C.scissor),N=C.scissorTest}else b.copy(J).multiplyScalar(q).floor(),P.copy(ie).multiplyScalar(q).floor(),N=he;if(H.bindFramebuffer(X.FRAMEBUFFER,Y)&&ee&&H.drawBuffers(C,Y),H.viewport(b),H.scissor(P),H.setScissorTest(N),se){let _e=K.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e.__webglTexture,Z)}else if(fe){let _e=K.get(C.texture),be=j||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,_e.__webglTexture,Z||0,be)}w=-1},this.readRenderTargetPixels=function(C,j,Z,ee,Y,se,fe){if(!C||!C.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){H.bindFramebuffer(X.FRAMEBUFFER,_e);try{let be=C.texture,Ce=be.format,Ie=be.type;if(!te.textureFormatReadable(Ce))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ie))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");j>=0&&j<=C.width-ee&&Z>=0&&Z<=C.height-Y&&X.readPixels(j,Z,ee,Y,Yt.convert(Ce),Yt.convert(Ie),se)}finally{let be=S!==null?K.get(S).__webglFramebuffer:null;H.bindFramebuffer(X.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(C,j,Z,ee,Y,se,fe){if(!C||!C.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){let be=C.texture,Ce=be.format,Ie=be.type;if(!te.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-ee&&Z>=0&&Z<=C.height-Y){H.bindFramebuffer(X.FRAMEBUFFER,_e);let we=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,we),X.bufferData(X.PIXEL_PACK_BUFFER,se.byteLength,X.STREAM_READ),X.readPixels(j,Z,ee,Y,Yt.convert(Ce),Yt.convert(Ie),0);let Oe=S!==null?K.get(S).__webglFramebuffer:null;H.bindFramebuffer(X.FRAMEBUFFER,Oe);let st=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await(function(Je,mt,Ke){return new Promise((function(ke,At){setTimeout((function St(){switch(Je.clientWaitSync(mt,Je.SYNC_FLUSH_COMMANDS_BIT,0)){case Je.WAIT_FAILED:At();break;case Je.TIMEOUT_EXPIRED:setTimeout(St,Ke);break;default:ke()}}),Ke)}))})(X,st,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,we),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,se),X.deleteBuffer(we),X.deleteSync(st),se}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,Z=0){C.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);let ee=Math.pow(2,-Z),Y=Math.floor(C.image.width*ee),se=Math.floor(C.image.height*ee),fe=j!==null?j.x:0,_e=j!==null?j.y:0;re.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,fe,_e,Y,se),H.unbindTexture()},this.copyTextureToTexture=function(C,j,Z=null,ee=null,Y=0){let se,fe,_e,be,Ce,Ie,we,Oe,st;C.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,C=arguments[1],j=arguments[2],Y=arguments[3]||0,Z=null);let Je=C.isCompressedTexture?C.mipmaps[Y]:C.image;Z!==null?(se=Z.max.x-Z.min.x,fe=Z.max.y-Z.min.y,_e=Z.isBox3?Z.max.z-Z.min.z:1,be=Z.min.x,Ce=Z.min.y,Ie=Z.isBox3?Z.min.z:0):(se=Je.width,fe=Je.height,_e=Je.depth||1,be=0,Ce=0,Ie=0),ee!==null?(we=ee.x,Oe=ee.y,st=ee.z):(we=0,Oe=0,st=0);let mt=Yt.convert(j.format),Ke=Yt.convert(j.type),ke;j.isData3DTexture?(re.setTexture3D(j,0),ke=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(re.setTexture2DArray(j,0),ke=X.TEXTURE_2D_ARRAY):(re.setTexture2D(j,0),ke=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);let At=X.getParameter(X.UNPACK_ROW_LENGTH),St=X.getParameter(X.UNPACK_IMAGE_HEIGHT),De=X.getParameter(X.UNPACK_SKIP_PIXELS),Re=X.getParameter(X.UNPACK_SKIP_ROWS),Zt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Je.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Je.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,be),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ce),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ie);let oo=C.isDataArrayTexture||C.isData3DTexture,yr=j.isDataArrayTexture||j.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let Rn=K.get(C),lo=K.get(j),co=K.get(Rn.__renderTarget),ho=K.get(lo.__renderTarget);H.bindFramebuffer(X.READ_FRAMEBUFFER,co.__webglFramebuffer),H.bindFramebuffer(X.DRAW_FRAMEBUFFER,ho.__webglFramebuffer);for(let Bi=0;Bi<_e;Bi++)oo&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,K.get(C).__webglTexture,Y,Ie+Bi),C.isDepthTexture?(yr&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,K.get(j).__webglTexture,Y,st+Bi),X.blitFramebuffer(be,Ce,se,fe,we,Oe,se,fe,X.DEPTH_BUFFER_BIT,X.NEAREST)):yr?X.copyTexSubImage3D(ke,Y,we,Oe,st+Bi,be,Ce,se,fe):X.copyTexSubImage2D(ke,Y,we,Oe,st+Bi,be,Ce,se,fe);H.bindFramebuffer(X.READ_FRAMEBUFFER,null),H.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else yr?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(ke,Y,we,Oe,st,se,fe,_e,mt,Ke,Je.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(ke,Y,we,Oe,st,se,fe,_e,mt,Je.data):X.texSubImage3D(ke,Y,we,Oe,st,se,fe,_e,mt,Ke,Je):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,we,Oe,se,fe,mt,Ke,Je.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,we,Oe,Je.width,Je.height,mt,Je.data):X.texSubImage2D(X.TEXTURE_2D,Y,we,Oe,se,fe,mt,Ke,Je);X.pixelStorei(X.UNPACK_ROW_LENGTH,At),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,St),X.pixelStorei(X.UNPACK_SKIP_PIXELS,De),X.pixelStorei(X.UNPACK_SKIP_ROWS,Re),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Zt),Y===0&&j.generateMipmaps&&X.generateMipmap(ke),H.unbindTexture()},this.copyTextureToTexture3D=function(C,j,Z=null,ee=null,Y=0){return C.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,ee=arguments[1]||null,C=arguments[2],j=arguments[3],Y=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,Z,ee,Y)},this.initRenderTarget=function(C){K.get(C).__webglFramebuffer===void 0&&re.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?re.setTextureCube(C,0):C.isData3DTexture?re.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?re.setTexture2DArray(C,0):re.setTexture2D(C,0),H.unbindTexture()},this.resetState=function(){E=0,A=0,S=null,H.reset(),ai.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}};var _a=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rr=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Il,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rt=new T,xa=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hr=class extends Ui{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vn,Ar=new T,Gn=new T,Wn=new T,Xn=new ne,Rr=new ne,ud=new Ee,Ws=new T,Cr=new T,Xs=new T,Cu=new ne,Xo=new ne,Pu=new ne,Ma=class extends ht{constructor(e=new Hr){if(super(),this.isSprite=!0,this.type="Sprite",Vn===void 0){Vn=new Ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zl(t,5);Vn.setIndex([0,1,2,0,2,3]),Vn.setAttribute("position",new xa(i,3,0,!1)),Vn.setAttribute("uv",new xa(i,2,3,!1))}this.geometry=Vn,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gn.setFromMatrixScale(this.matrixWorld),ud.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gn.multiplyScalar(-Wn.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;js(Ws.set(-.5,-.5,0),Wn,a,Gn,n,s),js(Cr.set(.5,-.5,0),Wn,a,Gn,n,s),js(Xs.set(.5,.5,0),Wn,a,Gn,n,s),Cu.set(0,0),Xo.set(1,0),Pu.set(1,1);let o=e.ray.intersectTriangle(Ws,Cr,Xs,!1,Ar);if(o===null&&(js(Cr.set(-.5,.5,0),Wn,a,Gn,n,s),Xo.set(0,1),o=e.ray.intersectTriangle(Ws,Xs,Cr,!1,Ar),o===null))return;let l=e.ray.origin.distanceTo(Ar);l<e.near||l>e.far||t.push({distance:l,point:Ar.clone(),uv:Ai.getInterpolation(Ar,Ws,Cr,Xs,Cu,Xo,Pu,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function js(r,e,t,i,n,s){Xn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Rr.x=s*Xn.x-n*Xn.y,Rr.y=n*Xn.x+s*Xn.y):Rr.copy(Xn),r.copy(e),r.x+=Rr.x,r.y+=Rr.y,r.applyMatrix4(ud)}var b0=new T,w0=new T;var E0=new T,T0=new We,A0=new We,R0=new T,C0=new Ee,P0=new T,I0=new Vt,L0=new Ee,U0=new mn;var D0=new Ee,N0=new Ee;var Sa=class extends rt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},O0=new Ee,B0=new Ee;var F0=new Ht,k0=new Ee,z0=new ge,H0=new Vt;var $l=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},V0=new Ee,G0=new Se(1,1,1),W0=new Yi,X0=new Ht,j0=new Vt,q0=new T,Y0=new T,Z0=new T,$0=new $l,J0=new ge;var K0=new T,Q0=new T,eg=new Ee,tg=new mn,ig=new Vt,ng=new T,rg=new T;var sg=new T,ag=new T;var Vr=class extends Ui{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Iu=new Ee,Jl=new mn,qs=new Vt,Ys=new T,ba=class extends ht{constructor(e=new Ze,t=new Vr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(n),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;Iu.copy(n).invert(),Jl.copy(e.ray).applyMatrix4(Iu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Ys.fromBufferAttribute(h,p),Lu(Ys,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Ys.fromBufferAttribute(h,u),Lu(Ys,u,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Lu(r,e,t,i,n,s,a){let o=Jl.distanceSqToPoint(r);if(o<t){let l=new T;Jl.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Tt=class extends Ut{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new ne:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new T,n=[],s=[],a=[],o=new T,l=new Ee;for(let p=0;p<=e;p++){let g=p/e;n[p]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Mt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(Mt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gr=class extends Wt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Kl=class extends Gr{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bc(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,n(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var Zs=new T,jo=new Bc,qo=new Bc,Yo=new Bc,Ql=class extends Wt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new T){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=n[(c-1)%s]:(Zs.subVectors(n[0],n[1]).add(n[0]),o=Zs);let u=n[c%s],d=n[(c+1)%s];if(this.closed||c+2<s?l=n[(c+2)%s]:(Zs.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=Zs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),jo.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,g,_,f),qo.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,g,_,f),Yo.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,g,_,f)}else this.curveType==="catmullrom"&&(jo.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),qo.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Yo.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(jo.calc(h),qo.calc(h),Yo.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new T().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uu(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Ur(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function Dr(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var wa=class extends Wt{constructor(e=new ne,t=new ne,i=new ne,n=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Dr(e,n.x,s.x,a.x,o.x),Dr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends Wt{constructor(e=new T,t=new T,i=new T,n=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Dr(e,n.x,s.x,a.x,o.x),Dr(e,n.y,s.y,a.y,o.y),Dr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends Wt{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Wt{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends Wt{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Ur(e,n.x,s.x,a.x),Ur(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends Wt{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Ur(e,n.x,s.x,a.x),Ur(e,n.y,s.y,a.y),Ur(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sr=class extends Wt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Uu(o,l.x,c.x,h.x,u.x),Uu(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ne().fromArray(n))}return this}},Ra=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:Ql,CubicBezierCurve:wa,CubicBezierCurve3:ec,EllipseCurve:Gr,LineCurve:Ea,LineCurve3:tc,QuadraticBezierCurve:Ta,QuadraticBezierCurve3:Aa,SplineCurve:sr}),ic=class extends Wt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ra[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Ra[n.type]().fromJSON(n))}return this}},Wr=class extends ic{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ea(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Ta(this.currentPoint.clone(),new ne(e,t),new ne(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new wa(this.currentPoint.clone(),new ne(e,t),new ne(i,n),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new sr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new Gr(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ni=class r extends Ze{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Mt(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,d=new ne,p=new T,g=new T,_=new T,f=0,y=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:f=e[m+1].x-e[m].x,y=e[m+1].y-e[m].y,p.x=1*y,p.y=-f,p.z=0*y,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:f=e[m+1].x-e[m].x,y=e[m+1].y-e[m].y,p.x=1*y,p.y=-f,p.z=0*y,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let m=0;m<=t;m++){let v=i+m*h*n,x=Math.sin(v),I=Math.cos(v);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*x,u.y=e[E].y,u.z=e[E].x*I,a.push(u.x,u.y,u.z),d.x=m/t,d.y=E/(e.length-1),o.push(d.x,d.y);let A=l[3*E+0]*x,S=l[3*E+1],w=l[3*E+0]*I;c.push(A,S,w)}}for(let m=0;m<t;m++)for(let v=0;v<e.length-1;v++){let x=v+m*e.length,I=x,E=x+e.length,A=x+e.length+1,S=x+1;s.push(I,E,S),s.push(A,S,E)}this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Xr=class r extends ni{constructor(e=1,t=1,i=4,n=8){let s=new Wr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},di=class r extends Ze{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new T,h=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pt=class r extends Ze{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],p=[],g=0,_=[],f=i/2,y=0;function m(v){let x=g,I=new ne,E=new T,A=0,S=v===!0?e:t,w=v===!0?1:-1;for(let b=1;b<=n;b++)u.push(0,f*w,0),d.push(0,w,0),p.push(.5,.5),g++;let M=g;for(let b=0;b<=n;b++){let P=b/n*l+o,N=Math.cos(P),B=Math.sin(P);E.x=S*B,E.y=f*w,E.z=S*N,u.push(E.x,E.y,E.z),d.push(0,w,0),I.x=.5*N+.5,I.y=.5*B*w+.5,p.push(I.x,I.y),g++}for(let b=0;b<n;b++){let P=x+b,N=M+b;v===!0?h.push(N,N+1,P):h.push(N+1,N,P),A+=3}c.addGroup(y,A,v===!0?1:2),y+=A}(function(){let v=new T,x=new T,I=0,E=(t-e)/i;for(let A=0;A<=s;A++){let S=[],w=A/s,M=w*(t-e)+e;for(let b=0;b<=n;b++){let P=b/n,N=P*l+o,B=Math.sin(N),G=Math.cos(N);x.x=M*B,x.y=-w*i+f,x.z=M*G,u.push(x.x,x.y,x.z),v.set(B,E,G).normalize(),d.push(v.x,v.y,v.z),p.push(P,1-w),S.push(g++)}_.push(S)}for(let A=0;A<n;A++)for(let S=0;S<s;S++){let w=_[S][A],M=_[S+1][A],b=_[S+1][A+1],P=_[S][A+1];(e>0||S!==0)&&(h.push(w,M,P),I+=3),(t>0||S!==s-1)&&(h.push(M,b,P),I+=3)}c.addGroup(y,I,0),y+=I})(),a===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nc=class r extends Pt{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gn=class r extends Ze{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(d,p,g,_){let f=_+1,y=[];for(let m=0;m<=f;m++){y[m]=[];let v=d.clone().lerp(g,m/f),x=p.clone().lerp(g,m/f),I=f-m;for(let E=0;E<=I;E++)y[m][E]=E===0&&m===f?v:v.clone().lerp(x,E/I)}for(let m=0;m<f;m++)for(let v=0;v<2*(f-m)-1;v++){let x=Math.floor(v/2);v%2==0?(l(y[m][x+1]),l(y[m+1][x]),l(y[m][x])):(l(y[m][x+1]),l(y[m+1][x+1]),l(y[m+1][x]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let g=3*d;p.x=e[g+0],p.y=e[g+1],p.z=e[g+2]}function h(d,p,g,_){_<0&&d.x===1&&(a[p]=d.x-1),g.x===0&&g.z===0&&(a[p]=_/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new T,g=new T,_=new T;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],g),c(t[f+2],_),o(p,g,_,d)})(n),(function(d){let p=new T;for(let g=0;g<s.length;g+=3)p.x=s[g+0],p.y=s[g+1],p.z=s[g+2],p.normalize().multiplyScalar(d),s[g+0]=p.x,s[g+1]=p.y,s[g+2]=p.z})(i),(function(){let d=new T;for(let g=0;g<s.length;g+=3){d.x=s[g+0],d.y=s[g+1],d.z=s[g+2];let _=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(_,1-f)}var p;(function(){let g=new T,_=new T,f=new T,y=new T,m=new ne,v=new ne,x=new ne;for(let I=0,E=0;I<s.length;I+=9,E+=6){g.set(s[I+0],s[I+1],s[I+2]),_.set(s[I+3],s[I+4],s[I+5]),f.set(s[I+6],s[I+7],s[I+8]),m.set(a[E+0],a[E+1]),v.set(a[E+2],a[E+3]),x.set(a[E+4],a[E+5]),y.copy(g).add(_).add(f).divideScalar(3);let A=u(y);h(m,E+0,g,A),h(v,E+2,_,A),h(x,E+4,f,A)}})(),(function(){for(let g=0;g<a.length;g+=6){let _=a[g+0],f=a[g+2],y=a[g+4],m=Math.max(_,f,y),v=Math.min(_,f,y);m>.9&&v<.1&&(_<.2&&(a[g+0]+=1),f<.2&&(a[g+2]+=1),y<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},rc=class r extends gn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},$s=new T,Js=new T,Zo=new T,Ks=new Ai,sc=class extends Ze{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(oa*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:f,c:y}=Ks;if(_.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),Ks.getNormal(Zo),u[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,u[1]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[2]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let m=0;m<3;m++){let v=(m+1)%3,x=u[m],I=u[v],E=Ks[h[m]],A=Ks[h[v]],S=`${x}_${I}`,w=`${I}_${x}`;w in d&&d[w]?(Zo.dot(d[w].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(A.x,A.y,A.z)),d[w]=null):S in d||(d[S]={index0:c[m],index1:c[v],normal:Zo.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:f}=d[g];$s.fromBufferAttribute(o,_),Js.fromBufferAttribute(o,f),p.push($s.x,$s.y,$s.z),p.push(Js.x,Js.y,Js.z)}this.setAttribute("position",new Te(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ca=class extends Wr{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Wr().fromJSON(n))}return this}},Rm=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Du(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(i&&(s=(function(g,_,f,y){let m=[],v,x,I,E,A;for(v=0,x=_.length;v<x;v++)I=_[v]*y,E=v<x-1?_[v+1]*y:g.length,A=Du(g,I,E,y,!1),A===A.next&&(A.steiner=!0),m.push(Om(A));for(m.sort(Um),v=0;v<m.length;v++)f=Dm(m[v],f);return f})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let g=t;g<n;g+=t)u=r[g],d=r[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return jr(s,a,t,o,l,p,0),a};function Du(r,e,t,i,n){let s,a;if(n===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Nu(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Nu(s,r[s],r[s+1],a);return a&&Fa(a,a.next)&&(Yr(a),a=a.next),a}function vn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Fa(i,i.next)&&nt(i.prev,i,i.next)!==0)i=i.next;else{if(Yr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function jr(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let g=h;do g.z===0&&(g.z=ac(g.x,g.y,u,d,p)),g.prevZ=g.prev,g.nextZ=g.next,g=g.next;while(g!==h);g.prevZ.nextZ=null,g.prevZ=null,(function(_){let f,y,m,v,x,I,E,A,S=1;do{for(y=_,_=null,x=null,I=0;y;){for(I++,m=y,E=0,f=0;f<S&&(E++,m=m.nextZ,m);f++);for(A=S;E>0||A>0&&m;)E!==0&&(A===0||!m||y.z<=m.z)?(v=y,y=y.nextZ,E--):(v=m,m=m.nextZ,A--),x?x.nextZ=v:_=v,v.prevZ=x,x=v;y=m}x.nextZ=null,S*=2}while(I>1)})(g)})(r,i,n,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Pm(r,i,n,s):Cm(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Yr(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?jr(r=Im(vn(r),e,t),e,t,i,n,s,2):a===2&&Lm(r,e,t,i,n,s):jr(vn(r),e,t,i,n,s,1);break}}function Cm(r){let e=r.prev,t=r,i=r.next;if(nt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Yn(n,o,s,l,a,c,g.x,g.y)&&nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pm(r,e,t,i){let n=r.prev,s=r,a=r.next;if(nt(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,y=ac(p,g,e,t,i),m=ac(_,f,e,t,i),v=r.prevZ,x=r.nextZ;for(;v&&v.z>=y&&x&&x.z<=m;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=f&&v!==n&&v!==a&&Yn(o,h,l,u,c,d,v.x,v.y)&&nt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=f&&x!==n&&x!==a&&Yn(o,h,l,u,c,d,x.x,x.y)&&nt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=f&&v!==n&&v!==a&&Yn(o,h,l,u,c,d,v.x,v.y)&&nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=m;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=f&&x!==n&&x!==a&&Yn(o,h,l,u,c,d,x.x,x.y)&&nt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Im(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!Fa(n,s)&&dd(n,i,i.next,s)&&qr(n,s)&&qr(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Yr(i),Yr(i.next),i=r=s),i=i.next}while(i!==r);return vn(i)}function Lm(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bm(a,o)){let l=pd(a,o);return a=vn(a,a.next),l=vn(l,l.next),jr(a,e,t,i,n,s,0),void jr(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Um(r,e){return r.x-e.x}function Dm(r,e){let t=(function(n,s){let a,o=s,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,g,_=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Yn(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(g=Math.abs(h-o.y)/(c-o.x),qr(o,n)&&(g<_||g===_&&(o.x>a.x||o.x===a.x&&Nm(a,o)))&&(a=o,_=g)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let i=pd(t,r);return vn(i,i.next),vn(t,t.next)}function Nm(r,e){return nt(r.prev,r,e.prev)<0&&nt(e.next,r,r.next)<0}function ac(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Om(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Yn(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Bm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&dd(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(qr(r,e)&&qr(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(nt(r.prev,r,e.prev)||nt(r,e.prev,e))||Fa(r,e)&&nt(r.prev,r,r.next)>0&&nt(e.prev,e,e.next)>0)}function nt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Fa(r,e){return r.x===e.x&&r.y===e.y}function dd(r,e,t,i){let n=ea(nt(r,e,t)),s=ea(nt(r,e,i)),a=ea(nt(t,i,r)),o=ea(nt(t,i,e));return n!==s&&a!==o||!(n!==0||!Qs(r,t,e))||!(s!==0||!Qs(r,i,e))||!(a!==0||!Qs(t,r,i))||!(o!==0||!Qs(t,e,i))}function Qs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ea(r){return r>0?1:r<0?-1:0}function qr(r,e){return nt(r.prev,r,r.next)<0?nt(r,e,r.next)>=0&&nt(r,r.prev,e)>=0:nt(r,e,r.prev)<0||nt(r,r.next,e)<0}function pd(r,e){let t=new oc(r.i,r.x,r.y),i=new oc(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Nu(r,e,t,i){let n=new oc(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Yr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function oc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Xi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Ou(e),Bu(i,e);let a=e.length;t.forEach(Ou);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Bu(i,t[l]);let o=Rm(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Ou(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Bu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var lc=class r extends Ze{constructor(e=new Ca([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:Fm,v,x,I,E,A,S=!1;y&&(v=y.getSpacedPoints(h),S=!0,d=!1,x=y.computeFrenetFrames(h,!1),I=new T,E=new T,A=new T),d||(f=0,p=0,g=0,_=0);let w=o.extractPoints(c),M=w.shape,b=w.holes;if(!Xi.isClockWise(M)){M=M.reverse();for(let k=0,D=b.length;k<D;k++){let F=b[k];Xi.isClockWise(F)&&(b[k]=F.reverse())}}let P=Xi.triangulateShape(M,b),N=M;for(let k=0,D=b.length;k<D;k++){let F=b[k];M=M.concat(F)}function B(k,D,F){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(D,F)}let G=M.length,W=P.length;function $(k,D,F){let R,O,V,te=k.x-D.x,H=k.y-D.y,Q=F.x-k.x,K=F.y-k.y,re=te*te+H*H,de=te*K-H*Q;if(Math.abs(de)>Number.EPSILON){let ue=Math.sqrt(re),xe=Math.sqrt(Q*Q+K*K),Ae=D.x-H/ue,ze=D.y+te/ue,Ne=((F.x-K/xe-Ae)*K-(F.y+Q/xe-ze)*Q)/(te*K-H*Q);R=Ae+te*Ne-k.x,O=ze+H*Ne-k.y;let Me=R*R+O*O;if(Me<=2)return new ne(R,O);V=Math.sqrt(Me/2)}else{let ue=!1;te>Number.EPSILON?Q>Number.EPSILON&&(ue=!0):te<-Number.EPSILON?Q<-Number.EPSILON&&(ue=!0):Math.sign(H)===Math.sign(K)&&(ue=!0),ue?(R=-H,O=te,V=Math.sqrt(re)):(R=te,O=H,V=Math.sqrt(re/2))}return new ne(R/V,O/V)}let q=[];for(let k=0,D=N.length,F=D-1,R=k+1;k<D;k++,F++,R++)F===D&&(F=0),R===D&&(R=0),q[k]=$(N[k],N[F],N[R]);let oe=[],ae,J=q.concat();for(let k=0,D=b.length;k<D;k++){let F=b[k];ae=[];for(let R=0,O=F.length,V=O-1,te=R+1;R<O;R++,V++,te++)V===O&&(V=0),te===O&&(te=0),ae[R]=$(F[R],F[V],F[te]);oe.push(ae),J=J.concat(ae)}for(let k=0;k<f;k++){let D=k/f,F=p*Math.cos(D*Math.PI/2),R=g*Math.sin(D*Math.PI/2)+_;for(let O=0,V=N.length;O<V;O++){let te=B(N[O],q[O],R);pe(te.x,te.y,-F)}for(let O=0,V=b.length;O<V;O++){let te=b[O];ae=oe[O];for(let H=0,Q=te.length;H<Q;H++){let K=B(te[H],ae[H],R);pe(K.x,K.y,-F)}}}let ie=g+_;for(let k=0;k<G;k++){let D=d?B(M[k],J[k],ie):M[k];S?(E.copy(x.normals[0]).multiplyScalar(D.x),I.copy(x.binormals[0]).multiplyScalar(D.y),A.copy(v[0]).add(E).add(I),pe(A.x,A.y,A.z)):pe(D.x,D.y,0)}for(let k=1;k<=h;k++)for(let D=0;D<G;D++){let F=d?B(M[D],J[D],ie):M[D];S?(E.copy(x.normals[k]).multiplyScalar(F.x),I.copy(x.binormals[k]).multiplyScalar(F.y),A.copy(v[k]).add(E).add(I),pe(A.x,A.y,A.z)):pe(F.x,F.y,u/h*k)}for(let k=f-1;k>=0;k--){let D=k/f,F=p*Math.cos(D*Math.PI/2),R=g*Math.sin(D*Math.PI/2)+_;for(let O=0,V=N.length;O<V;O++){let te=B(N[O],q[O],R);pe(te.x,te.y,u+F)}for(let O=0,V=b.length;O<V;O++){let te=b[O];ae=oe[O];for(let H=0,Q=te.length;H<Q;H++){let K=B(te[H],ae[H],R);S?pe(K.x,K.y+v[h-1].y,v[h-1].x+F):pe(K.x,K.y,u+F)}}}function he(k,D){let F=k.length;for(;--F>=0;){let R=F,O=F-1;O<0&&(O=k.length-1);for(let V=0,te=h+2*f;V<te;V++){let H=G*V,Q=G*(V+1);U(D+R+H,D+O+H,D+O+Q,D+R+Q)}}}function pe(k,D,F){l.push(k),l.push(D),l.push(F)}function le(k,D,F){L(k),L(D),L(F);let R=n.length/3,O=m.generateTopUV(i,n,R-3,R-2,R-1);z(O[0]),z(O[1]),z(O[2])}function U(k,D,F,R){L(k),L(D),L(R),L(D),L(F),L(R);let O=n.length/3,V=m.generateSideWallUV(i,n,O-6,O-3,O-2,O-1);z(V[0]),z(V[1]),z(V[3]),z(V[1]),z(V[2]),z(V[3])}function L(k){n.push(l[3*k+0]),n.push(l[3*k+1]),n.push(l[3*k+2])}function z(k){s.push(k.x),s.push(k.y)}(function(){let k=n.length/3;if(d){let D=0,F=G*D;for(let R=0;R<W;R++){let O=P[R];le(O[2]+F,O[1]+F,O[0]+F)}D=h+2*f,F=G*D;for(let R=0;R<W;R++){let O=P[R];le(O[0]+F,O[1]+F,O[2]+F)}}else{for(let D=0;D<W;D++){let F=P[D];le(F[2],F[1],F[0])}for(let D=0;D<W;D++){let F=P[D];le(F[0]+G*h,F[1]+G*h,F[2]+G*h)}}i.addGroup(k,n.length/3-k,0)})(),(function(){let k=n.length/3,D=0;he(N,D),D+=N.length;for(let F=0,R=b.length;F<R;F++){let O=b[F];he(O,D),D+=O.length}i.addGroup(k,n.length/3-k,1)})()}this.setAttribute("position",new Te(n,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ra[n.type]().fromJSON(n)),new r(i,e.options)}},Fm={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new ne(s,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],g=e[3*n+2],_=e[3*s],f=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-u),new ne(d,1-g),new ne(_,1-y)]:[new ne(o,1-l),new ne(h,1-u),new ne(p,1-g),new ne(f,1-y)]}},cc=class r extends gn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},hc=class r extends gn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},uc=class r extends Ze{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new T,g=new ne;for(let _=0;_<=n;_++){for(let f=0;f<=i;f++){let y=s+f/i*a;p.x=u*Math.cos(y),p.y=u*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<n;_++){let f=_*(i+1);for(let y=0;y<i;y++){let m=y+f,v=m,x=m+i+1,I=m+i+2,E=m+1;o.push(v,x,E),o.push(x,I,E)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},dc=class r extends Ze{constructor(e=new Ca([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=n.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;Xi.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,y=g.length;f<y;f++){let m=g[f];Xi.isClockWise(m)===!0&&(g[f]=m.reverse())}let _=Xi.triangulateShape(p,g);for(let f=0,y=g.length;f<y;f++){let m=g[f];p=p.concat(m)}for(let f=0,y=p.length;f<y;f++){let m=p[f];n.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let f=0,y=_.length;f<y;f++){let m=_[f],v=m[0]+u,x=m[1]+u,I=m[2]+u;i.push(v,x,I),l+=3}}this.setIndex(i),this.setAttribute("position",new Te(n,3)),this.setAttribute("normal",new Te(s,3)),this.setAttribute("uv",new Te(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},Xt=class r extends Ze{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,p=[],g=[],_=[],f=[];for(let y=0;y<=i;y++){let m=[],v=y/i,x=0;y===0&&a===0?x=.5/t:y===i&&l===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){let E=I/t;u.x=-e*Math.cos(n+E*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(n+E*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(E+x,1-v),m.push(c++)}h.push(m)}for(let y=0;y<i;y++)for(let m=0;m<t;m++){let v=h[y][m+1],x=h[y][m],I=h[y+1][m],E=h[y+1][m+1];(y!==0||a>0)&&p.push(v,x,E),(y!==i-1||l<Math.PI)&&p.push(x,I,E)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},pc=class r extends gn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Dt=class r extends Ze{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){let _=g/n*s,f=p/i*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(_),u.y=(e+t*Math.cos(f))*Math.sin(_),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){let _=(n+1)*p+g-1,f=(n+1)*(p-1)+g-1,y=(n+1)*(p-1)+g,m=(n+1)*p+g;a.push(_,f,m),a.push(f,y,m)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},fc=class r extends Ze{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new T,d=new T,p=new T,g=new T,_=new T,f=new T,y=new T;for(let v=0;v<=i;++v){let x=v/i*s*Math.PI*2;m(x,s,a,e,p),m(x+.01,s,a,e,g),f.subVectors(g,p),y.addVectors(g,p),_.crossVectors(f,y),y.crossVectors(_,f),_.normalize(),y.normalize();for(let I=0;I<=n;++I){let E=I/n*Math.PI*2,A=-t*Math.cos(E),S=t*Math.sin(E);u.x=p.x+(A*y.x+S*_.x),u.y=p.y+(A*y.y+S*_.y),u.z=p.z+(A*y.z+S*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(I/n)}}for(let v=1;v<=i;v++)for(let x=1;x<=n;x++){let I=(n+1)*(v-1)+(x-1),E=(n+1)*v+(x-1),A=(n+1)*v+x,S=(n+1)*(v-1)+x;o.push(I,E,S),o.push(E,A,S)}function m(v,x,I,E,A){let S=Math.cos(v),w=Math.sin(v),M=I/x*v,b=Math.cos(M);A.x=E*(2+b)*.5*S,A.y=E*(2+b)*w*.5,A.z=E*Math.sin(M)*.5}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},mc=class r extends Ze{constructor(e=new Aa(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new ne,h=new T,u=[],d=[],p=[],g=[];function _(f){h=e.getPointAt(f/t,h);let y=a.normals[f],m=a.binormals[f];for(let v=0;v<=n;v++){let x=v/n*Math.PI*2,I=Math.sin(x),E=-Math.cos(x);l.x=E*y.x+I*m.x,l.y=E*y.y+I*m.y,l.z=E*y.z+I*m.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)_(f);_(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let y=0;y<=n;y++)c.x=f/t,c.y=y/n,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let y=1;y<=n;y++){let m=(n+1)*(f-1)+(y-1),v=(n+1)*f+(y-1),x=(n+1)*f+y,I=(n+1)*(f-1)+y;g.push(m,v,I),g.push(v,x,I)}})()})(),this.setIndex(g),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ra[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},gc=class extends Ze{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,g=d+u.count;p<g;p+=3)for(let _=0;_<3;_++){let f=o.getX(p+_),y=o.getX(p+(_+1)%3);n.fromBufferAttribute(a,f),s.fromBufferAttribute(a,y),Fu(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Fu(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Fu(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var og=Object.freeze({__proto__:null,BoxGeometry:pt,CapsuleGeometry:Xr,CircleGeometry:di,ConeGeometry:nc,CylinderGeometry:Pt,DodecahedronGeometry:rc,EdgesGeometry:sc,ExtrudeGeometry:lc,IcosahedronGeometry:cc,LatheGeometry:ni,OctahedronGeometry:hc,PlaneGeometry:lt,PolyhedronGeometry:gn,RingGeometry:uc,ShapeGeometry:dc,SphereGeometry:Xt,TetrahedronGeometry:pc,TorusGeometry:Dt,TorusKnotGeometry:fc,TubeGeometry:mc,WireframeGeometry:gc});var qe=class extends Ui{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zi=class extends qe{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ta(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function km(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var ar=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends ar{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oh:s=e,o=2*t-i;break;case Bh:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Oh:a=e,l=2*i-t;break;case Bh:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),_=g*g,f=_*g,y=-d*f+2*d*_-d*g,m=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-p)*f+(1.5+p)*_+.5*g,x=p*f-p*_;for(let I=0;I!==o;++I)s[I]=y*a[h+I]+m*a[c+I]+v*a[l+I]+x*a[u+I];return s}},yc=class extends ar{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},_c=class extends ar{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},ii=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case Pl:t=this.InterpolantFactoryMethodLinear;break;case vo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return Pl;case this.InterpolantFactoryMethodSmooth:return vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&km(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===vo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let g=t[h+p];if(g!==t[u+p]||g!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ii.prototype.TimeBufferType=Float32Array,ii.prototype.ValueBufferType=Float32Array,ii.prototype.DefaultInterpolation=Pl;var dn=class extends ii{constructor(e,t,i){super(e,t,i)}};dn.prototype.ValueTypeName="bool",dn.prototype.ValueBufferType=Array,dn.prototype.DefaultInterpolation=la,dn.prototype.InterpolantFactoryMethodLinear=void 0,dn.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends ii{};xc.prototype.ValueTypeName="color";var Mc=class extends ii{};Mc.prototype.ValueTypeName="number";var Sc=class extends ar{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)zt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Pa=class extends ii{InterpolantFactoryMethodLinear(e){return new Sc(this.times,this.values,this.getValueSize(),e)}};Pa.prototype.ValueTypeName="quaternion",Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var pn=class extends ii{constructor(e,t,i){super(e,t,i)}};pn.prototype.ValueTypeName="string",pn.prototype.ValueBufferType=Array,pn.prototype.DefaultInterpolation=la,pn.prototype.InterpolantFactoryMethodLinear=void 0,pn.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends ii{};bc.prototype.ValueTypeName="vector";var wc=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},zm=new wc,Ec=class{constructor(e){this.manager=e!==void 0?e:zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(n,s){i.load(e,n,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zr=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ia=class extends Zr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},$o=new Ee,ku=new T,zu=new T,La=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(ku),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),$o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Hu=new Ee,Pr=new T,Jo=new T,Tc=class extends La{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Pr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Pr),Jo.copy(i.position),Jo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jo),i.updateMatrixWorld(),n.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Hu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu)}},yn=class extends Zr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Tc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ac=class extends La{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ua=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Ac}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Da=class extends Ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var lg=new Ee,cg=new Ee,hg=new Ee;var ug=new T,dg=new zt,pg=new T,fg=new T;var mg=new T,gg=new zt,vg=new T,yg=new T;var Fc="\\[\\]\\.:\\/",Hm=new RegExp("["+Fc+"]","g"),Ko="[^"+Fc+"]",Vm="[^"+Fc.replace("\\.","")+"]",Gm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ko)+/(WCOD+)?/.source.replace("WCOD",Vm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko)+"$"),Wm=["material","materials","bones","map"],tt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hm,"")}static parseTrackName(e){let t=Gm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Wm.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=class{constructor(r,e,t){let i=t||tt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray],tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _g=new Float32Array(1);var Vu=new Ee,jt=class{constructor(e,t,i=0,n=1/0){this.ray=new mn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vu),this}intersectObject(e,t=!0,i=[]){return Rc(e,this,i,t),i.sort(Gu),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Rc(e[n],this,i,t);return i.sort(Gu),i}};function Gu(r,e){return r.distance-e.distance}function Rc(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Rc(s[a],e,t,!0)}}var xg=new ne;var Mg=new T,Sg=new T;var bg=new T;var wg=new T,Eg=new Ee,Tg=new Ee;var Ag=new T,Rg=new Se,Cg=new Se;var Pg=new T,Ig=new T,Lg=new T;var Ug=new T,Dg=new zr;var Ng=new Ht;var Og=new T;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var kc={x:.86,z:.52},zc={x:.245,z:.172};var He=-.45,zg=new T(0,He+.12,-2.72),Qe=-2.8;function Kr(r,e,t,i){let n=document.createElement("canvas");n.width=r,n.height=e,t(n.getContext("2d"),r,e);let s=new Tt(n);return s.colorSpace=at,s.anisotropy=8,i&&(s.wrapS=s.wrapT=Nr,s.repeat.set(...i)),s}var za=r=>()=>(r=r*16807%2147483647)/2147483647;function cr(r=5,e=[112,76,46]){return Kr(1024,1024,t=>{let i=za(r);for(let n=0;n<5;n++){let s=n*205,a=i()*22-11;t.fillStyle=`rgb(${e[0]+a},${e[1]+a*.8},${e[2]+a*.6})`,t.fillRect(s,0,205,1024);for(let o=0;o<90;o++){let l=s+i()*205,c=4+i()*10,h=i()*6,u=.5+i()*2;t.strokeStyle=`rgba(${i()<.6?"48,26,12":"160,112,72"},${.06+i()*.14})`,t.lineWidth=u,t.beginPath();for(let d=0;d<=1024;d+=32)t.lineTo(l+Math.sin(d/170+h)*c,d);t.stroke()}t.fillStyle="rgba(24,12,5,.55)",t.fillRect(s,0,2.5,1024)}},[1,1])}var Xm=()=>Kr(512,512,r=>{let e=za(11);r.fillStyle="#3a2a22",r.fillRect(0,0,512,512);for(let t=0;t<16;t++)for(let i=-1;i<8;i++){let n=i*64+t%2*32,s=t*32,a=e()*34-17;r.fillStyle=`rgb(${112+a},${80+a*.7},${66+a*.6})`,r.fillRect(n+2,s+2,60,28);for(let o=0;o<14;o++)r.fillStyle=`rgba(${e()<.5?"30,14,8":"190,120,84"},${e()*.16})`,r.fillRect(n+2+e()*56,s+2+e()*26,2+e()*8,1+e()*3)}},[1,1]),jm=()=>Kr(1024,640,(r,e,t)=>{let i=["#5f1f20","#1f2b40","#a5854f","#b9ab8c","#3a5040","#83432a"];r.fillStyle=i[0],r.fillRect(0,0,e,t);let n=(a,o,l,c,h)=>{r.fillStyle=h;for(let u=0;u<c;u++){let d=l*(c-u),p=l;r.fillRect(a-d,o-(u+1)*p,d*2,p),r.fillRect(a-d,o+u*p,d*2,p)}};r.fillStyle=i[1],r.fillRect(34,34,e-68,t-68),r.fillStyle=i[0],r.fillRect(84,84,e-168,t-168);for(let a=60;a<e-40;a+=48)for(let o of[59,t-59])n(a,o,6,3,i[(a/48|0)%2?2:3]);for(let a=108;a<t-90;a+=48)for(let o of[59,e-59])n(o,a,6,3,i[(a/48|0)%2?2:3]);for(let a=0;a<3;a++){let o=e*(.24+a*.26);[[12,i[1]],[10,i[2]],[8,i[5]],[6,i[3]],[4,i[4]],[2,i[2]]].forEach(([l,c])=>n(o,t/2,14,l,c))}for(let a=0;a<4;a++)for(let o of[128,t-128])n(e*(.11+a*.26),o,7,4,i[a%2?2:4]);let s=za(3);for(let a=0;a<t;a+=2)r.fillStyle=`rgba(0,0,0,${.03+s()*.09})`,r.fillRect(0,a,e,1)}),fd=`
float h2(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n2(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
`,ka=class{constructor(e,t){this.group=new ot,e.add(this.group);let i=M=>new qe({roughness:.85,fog:!1,...M}),n=(M,b,P,N,B,G,W,$=!1)=>{let q=new ge(new pt(M,b,P),W);return q.position.set(N,B,G),q.castShadow=$,q.receiveShadow=!0,this.group.add(q),q},s=cr(17,[84,56,36]);s.repeat.set(5,5);let a=new ge(new lt(10,8),i({map:s,roughness:.55}));a.rotation.x=-Math.PI/2,a.position.set(0,He,0),this.group.add(a);let o=new ge(new lt(10,4),i({color:"#5a4636",roughness:.95}));o.position.set(0,He+2,Qe),this.group.add(o);let l=i({color:"#3a2819"});for(let M of[-1,1])n(4.2,.62,.03,M*2.75,He+.31,Qe+.015,l),n(4.2,.03,.05,M*2.75,He+.635,Qe+.025,l);let c=cr();c.repeat.set(1.3,1.3);let h=i({map:c,roughness:.5,envMap:t,envMapIntensity:.25,fog:!0}),u=i({color:"#3c2413",roughness:.6}),d=kc.x*2+.1,p=kc.z*2+.1,g=new ge(new lt(d,p),h);g.rotation.x=-Math.PI/2,g.position.y=-5e-4,g.receiveShadow=!0,this.group.add(g),n(d+.012,.045,p+.012,0,-.0235,0,u);for(let M of[-1,1])for(let b of[-1,1])n(.05,-He,.05,M*(d/2-.07),He/2-.02,b*(p/2-.07),u);let _=new ge(new lt(zc.x*2,zc.z*2),i({map:Kr(1024,720,(M,b,P)=>{M.fillStyle="#2b3a30",M.fillRect(0,0,b,P);let N=za(9);for(let B=0;B<5200;B++)M.fillStyle=`rgba(${N()<.5?"0,0,0":"150,190,160"},${N()*.05})`,M.beginPath(),M.arc(N()*b,N()*P,1+N()*4,0,7),M.fill();M.strokeStyle="#b08d46",M.lineWidth=4,M.strokeRect(22,22,b-44,P-44),M.lineWidth=1.5,M.strokeRect(31,31,b-62,P-62)}),roughness:.62,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,fog:!0}));_.rotation.x=-Math.PI/2,_.position.y=0,_.receiveShadow=!0,this.group.add(_),this.pad=_;let f=new ge(new lt(1.7,.8),i({map:jm(),roughness:1}));f.rotation.x=-Math.PI/2,f.position.set(0,He+.004,-1.86),this.group.add(f);let y=Xm(),m=i({map:y}),v=i({map:y,color:"#4a3a32"}),x=i({color:"#8d8175",roughness:.8}),I=i({color:"#4d301a",roughness:.6});n(.3,.86,.26,-.5,He+.43,Qe+.13,m),n(.3,.86,.26,.5,He+.43,Qe+.13,m),n(.7,.24,.26,0,He+.74,Qe+.13,m),n(1.44,.06,.36,0,He+.89,Qe+.17,I),n(1.1,2.4,.16,0,He+2.12,Qe+.08,m),n(1.4,.05,.56,0,He+.025,Qe+.28,x),n(.72,.62,.01,0,He+.31,Qe+.012,v),n(.7,.02,.26,0,He+.06,Qe+.13,v);let E=new qe({color:"#c79a45",metalness:.9,roughness:.3,envMap:t,fog:!1}),A=new ge(new Pt(.07,.07,.04,32).rotateX(Math.PI/2),I);A.position.set(0,He+.995,Qe+.17),this.group.add(A);let S=new ge(new di(.058,32),i({color:"#efe6d2"}));S.position.set(0,He+.995,Qe+.192),this.group.add(S);let w=M=>{let b=new ht,P=new ge(new lt(.005,M).translate(0,M/2,0),i({color:"#2a1c12"}));return P.position.z=.002,b.add(P),b.position.copy(S.position),this.group.add(b),b};this.hands=[w(.032),w(.047)],this.flames=[];for(let M of[-.5,.5]){let b=new ge(new ni([[.001,0],[.04,0],[.04,.008],[.012,.02],[.009,.1],[.02,.11],[.02,.118],[.001,.118]].map(([N,B])=>new ne(N,B)),20),E);b.position.set(M,He+.92,Qe+.17),this.group.add(b);let P=new ge(new Pt(.011,.012,.12,14),i({color:"#f0e6d0",roughness:.6}));P.position.set(M,He+1.1,Qe+.17),this.group.add(P)}this.logs(i),this.fire(),this.light=new yn("#ff9a55",0,6,.75),this.light.position.set(0,He+.5,Qe+.7),e.add(this.light),this.lit=!0,this.heat=1,this.t=0,this.flicker=1,this.body=[this.group.children.find(M=>M.material===v),...this.flames]}logs(e){let t=e({color:"#2a1a10",roughness:1});this.glow={value:1},this.time={value:0},t.onBeforeCompile=a=>{Object.assign(a.uniforms,{uGlow:this.glow,uTime:this.time}),a.vertexShader=a.vertexShader.replace("void main() {",`varying vec3 vAt;
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
vAt = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("void main() {",`varying vec3 vAt; uniform float uGlow, uTime; ${fd}void main() {`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float c = fbm(vAt.xy * 34.0 + vAt.zx * 21.0); float e = smoothstep(0.56, 0.74, c) * (0.6 + 0.4 * sin(uTime * 1.7 + c * 30.0)) + 0.35 * smoothstep(0.02, -0.04, vAt.y - ${(He+.12).toFixed(3)});
          totalEmissiveRadiance += vec3(1.0, 0.27, 0.04) * e * uGlow * 0.6; }`)};let i=(a,o,l,c,h,u,d)=>{let p=new ge(new Pt(o,o*1.08,a,14).rotateZ(Math.PI/2),t);p.position.set(l,c,h),p.rotation.set(0,u,d),this.group.add(p)},n=He+.1;i(.44,.035,-.01,n,Qe+.2,.05,0),i(.42,.032,.02,n,Qe+.1,-.08,0),i(.4,.03,0,n+.055,Qe+.15,.35,.12),i(.33,.026,.03,n+.09,Qe+.14,-.5,-.2);let s=new ge(new Xt(.27,24,8,0,Math.PI*2,0,Math.PI/2),e({color:"#3a322c",roughness:1}));s.scale.set(1,.1,.38),s.position.set(0,He+.065,Qe+.15),this.group.add(s)}fire(){this.uni={uTime:this.time,uHeat:{value:1}};let e=i=>new Gt({transparent:!0,depthWrite:!1,blending:_n,side:pi,uniforms:{...this.uni,uSeed:{value:i}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime, uHeat, uSeed; ${fd}
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
        }`});for(let[i,n,s,a,o]of[[.2,.5,.46,1,0],[.15,.56,.52,2.3,0],[.1,.5,.48,4.1,0],[.15,.4,.4,6.2,.6],[.15,.4,.4,8.4,-.6]]){let l=new ge(new lt(n,s).translate(0,s/2,0),e(a));l.position.set(0,He+.075,Qe+i),l.rotation.y=o,l.renderOrder=2,this.group.add(l),this.flames.push(l)}let t=new ge(new lt(2.6,1.5).rotateX(-Math.PI/2),new dt({map:Kr(128,128,i=>{let n=i.createRadialGradient(64,20,0,64,20,64);n.addColorStop(0,"rgba(255,150,60,.55)"),n.addColorStop(1,"rgba(255,90,20,0)"),i.fillStyle=n,i.fillRect(0,0,128,128)}),transparent:!0,blending:_n,depthWrite:!1,fog:!1}));t.position.set(0,He+.008,Qe+.95),t.renderOrder=1,t.raycast=()=>{},this.group.add(t),this.halo=t}hit(e){let t=new jt(e.origin,e.direction),i=t.intersectObjects(this.body)[0];return i?i.distance:null}poke(e){if(!this.lit){this.lit=!0;return}this.gust=1;for(let t of[-.1,0,.1])e.puff(t,He+.2,Qe+.18,14,{color:"#ffb04a",speed:.09,rise:.42,up:-.05,life:1.4,wide:.1})}update(e,t,i,n){this.t+=e,this.time.value=this.t%1e3,this.gust=Math.max(0,(this.gust||0)-e*.7),this.heat+=((this.lit?1:0)-this.heat)*(1-Math.exp(-e*1.4));let s=Math.sin(this.t*9.1)*.4+Math.sin(this.t*5.3+1)*.6+Math.sin(this.t*14.7+2)*.3;this.flicker+=(1+s*.12+(Math.random()-.5)*.14-this.flicker)*(1-Math.exp(-e*14));let a=this.heat*(1+this.gust*.35);this.uni.uHeat.value=a,this.glow.value=.12+.88*this.heat,this.light.intensity=(t?1.9:1.25)*a*this.flicker,this.halo.material.opacity=.3*a*this.flicker;for(let o of this.flames)o.visible=this.heat>.02;n&&this.heat>.5&&Math.random()<e*5&&i.puff((Math.random()-.5)*.24,He+.2,Qe+.2,1,{color:"#ffa640",speed:.05,rise:.4,up:.02,life:1.6,wide:.05}),n&&!((this.tick=(this.tick||0)+1)%60)&&this.clock(),this.set||(this.set=!0,this.clock())}clock(){let e=new Date,t=e.getMinutes()+e.getSeconds()/60;this.hands[0].rotation.z=-(e.getHours()%12+t/60)*(Math.PI/6),this.hands[1].rotation.z=-t*(Math.PI/30)}};function md(r){let e=new rr,t=a=>new dt({color:a,side:pi});e.add(new ge(new pt(10,6,10),new dt({color:"#2a1d13",side:Cc})));let i=(a,o,l,c,h,u,d)=>{let p=t(l);p.color.multiplyScalar(c);let g=new ge(new lt(a,o),p);g.position.set(h,u,d),g.lookAt(0,0,0),e.add(g)};i(1.2,2,"#dfe9ff",5,-4,1.6,1.5),i(1.2,2,"#dfe9ff",5,-4,1.6,3),i(1.4,1.4,"#ffe3b0",9,.6,2.9,-.6),i(1.6,1,"#ff7a2a",5,0,-.6,-4.5),i(8,8,"#3a2718",1,0,-2.8,.01);let n=new nr(r),s=n.fromScene(e,.03).texture;return n.dispose(),e.traverse(a=>{a.geometry&&(a.geometry.dispose(),a.material.dispose())}),s}var Hc=.004166666666666667,Ha=class{constructor({n:e=18,depth:t=1.6,hz:i=2.6,damping:n=2.2,viscosity:s=.03,rim:a=.42}={}){this.n=e,this.dx=2/e,this.rim=a,this.damping=n,this.viscosity=s;let o=Math.tanh(1.841*t),l=2*Math.PI*i;this.g=l*l/(1.841*o),this.H=o/1.841;let c=e*e;this.h=new Float64Array(c),this.mask=new Uint8Array(c),this.u=new Float64Array((e+1)*e),this.v=new Float64Array(e*(e+1)),this.openU=new Uint8Array(this.u.length),this.openV=new Uint8Array(this.v.length),this.u2=new Float64Array(this.u.length),this.v2=new Float64Array(this.v.length),this.cells=0;for(let h=0;h<e;h++)for(let u=0;u<e;u++){let d=-1+(u+.5)*this.dx,p=-1+(h+.5)*this.dx;d*d+p*p<1&&(this.mask[h*e+u]=1,this.cells++)}for(let h=0;h<e;h++)for(let u=1;u<e;u++)this.openU[h*(e+1)+u]=this.mask[h*e+u]&this.mask[h*e+u-1];for(let h=1;h<e;h++)for(let u=0;u<e;u++)this.openV[h*e+u]=this.mask[h*e+u]&this.mask[(h-1)*e+u];this.lost=0,this.left=0,this.calm=!0}step(e,t=0,i=0,n=0){if((t||i||n)&&(this.calm=!1),this.calm)return[];this.left=Math.min(this.left+e,.1);let s=[];for(;this.left>=Hc;)this.left-=Hc,this.sub(Hc,t,i,n,s);return!t&&!i&&!n&&this.energy()<4e-5&&Math.abs(this.lost)<.001&&(this.calm=!0,this.u.fill(0),this.v.fill(0),this.h.fill(0),this.lost=0),s}sub(e,t,i,n,s){let{n:a,dx:o,h:l,u:c,v:h,openU:u,openV:d,mask:p,u2:g,v2:_,H:f}=this,y=this.g*Math.max(.15,Math.min(2.5,1+n)),m=Math.exp(-this.damping*e),v=this.viscosity*e/(o*o),x=a+1;for(let w=0;w<a;w++)for(let M=1;M<a;M++){let b=w*x+M;if(!u[b]){g[b]=0;continue}let P=w>0&&u[b-x]?c[b-x]:c[b],N=w<a-1&&u[b+x]?c[b+x]:c[b];g[b]=(c[b]+v*(c[b-1]+c[b+1]+P+N-4*c[b])-e*(y*(l[w*a+M]-l[w*a+M-1])/o+t))*m}for(let w=1;w<a;w++)for(let M=0;M<a;M++){let b=w*a+M;if(!d[b]){_[b]=0;continue}let P=M>0&&d[b-1]?h[b-1]:h[b],N=M<a-1&&d[b+1]?h[b+1]:h[b];_[b]=(h[b]+v*(h[b-a]+h[b+a]+P+N-4*h[b])-e*(y*(l[b]-l[b-a])/o+i))*m}this.u=g,this.u2=c,this.v=_,this.v2=h;let I=e/o,E=.24,A=(w,M,b)=>{let P=w>0?M:b,N=f+l[P];return Math.max(-E*N,Math.min(E*N,I*w*N))},S=this.dh=this.dh||new Float64Array(a*a);S.fill(0);for(let w=0;w<a;w++)for(let M=1;M<a;M++){let b=w*x+M;if(!u[b])continue;let P=w*a+M-1,N=A(g[b],P,P+1);S[P]-=N,S[P+1]+=N}for(let w=1;w<a;w++)for(let M=0;M<a;M++){let b=w*a+M;if(!d[b])continue;let P=b-a,N=A(_[b],P,b);S[P]-=N,S[b]+=N}for(let w=0;w<l.length;w++)if(p[w]&&(l[w]+=S[w],l[w]>this.rim)){let M=-1+(w%a+.5)*o,b=-1+(Math.floor(w/a)+.5)*o,P=Math.hypot(M,b);P>.72&&(s.push({x:M/P,z:b/P,amount:l[w]-this.rim}),this.lost+=l[w]-this.rim,l[w]=this.rim)}if(this.lost>0){let w=Math.min(this.lost,this.cells*.05*e);this.lost-=w;for(let M=0;M<l.length;M++)p[M]&&(l[M]+=w/this.cells)}}drop(e,t,i,n=.3){let{n:s,dx:a,h:o,mask:l,H:c}=this,h=0,u=new Float64Array(o.length);for(let d=0;d<o.length;d++)if(l[d]){let p=-1+(d%s+.5)*a-e,g=-1+(Math.floor(d/s)+.5)*a-t,_=(p*p+g*g)/(n*n);u[d]=i*Math.exp(-_)*(1-_),h+=u[d]}for(let d=0;d<o.length;d++)l[d]&&(o[d]=Math.max(-.9*c,o[d]-u[d]+h/this.cells));this.calm=!1}energy(){let e=0,{h:t,u:i,v:n,g:s,H:a}=this;for(let o=0;o<t.length;o++)this.mask[o]&&(e+=s*t[o]*t[o]);for(let o of i)e+=a*o*o;for(let o of n)e+=a*o*o;return e/(this.cells*s)}volume(){let e=0;for(let t=0;t<this.h.length;t++)this.mask[t]&&(e+=this.h[t]);return e+this.lost}at(e,t){let{n:i,dx:n,h:s,mask:a}=this,o=Math.hypot(e,t),l=o>.93?.93/o:1,c=(e*l+1)/n-.5,h=(t*l+1)/n-.5,u=Math.floor(c),d=Math.floor(h),p=0,g=0;for(let _=0;_<2;_++)for(let f=0;f<2;f++){let y=u+f,m=d+_;if(y<0||m<0||y>=i||m>=i||!a[m*i+y])continue;let v=(f?c-u:1-c+u)*(_?h-d:1-h+d)+1e-6;p+=s[m*i+y]*v,g+=v}return g?p/g:0}},Va=class{constructor(e,{scale:t=.085,most:i=.42}={}){this.g=e,this.scale=t,this.most=i,this.p=null,this.v=[0,0,0],this.s=[0,0,0]}move(e,t){let i=[0,0,0];if(!this.p||t<=0)return this.p=e,{ax:0,az:0,lift:0};let n=1-Math.exp(-t/.05),s=Math.hypot(e[0]-this.p[0],e[1]-this.p[1],e[2]-this.p[2])>60;for(let h=0;h<3;h++){let u=s?0:(e[h]-this.p[h])/t,d=this.s[h]+(u-this.s[h])*n;i[h]=(d-this.s[h])/t*this.scale,this.s[h]=d}this.p=e;let a=this.most*this.g,o=Math.hypot(i[0],i[2]),l=o>0?a*Math.tanh(o/a)/o:0,c=this.g*.002;return{ax:o<c?0:i[0]*l,az:o<c?0:i[2]*l,lift:Math.abs(i[1])<c?0:.8*Math.tanh(i[1]/this.g)}}};var Vc=null;function qm(){if(Vc)return Vc;let r=96,e=document.createElement("canvas");e.width=e.height=r;let t=e.getContext("2d",{willReadFrequently:!0}),i=t.createImageData(r,r),n=(a,o)=>{let l=Math.sin(a*127.1+o*311.7)*43758.5453;return l-Math.floor(l)},s=(a,o)=>{let l=Math.floor(a),c=Math.floor(o),h=a-l,u=o-c,d=h*h*(3-2*h),p=u*u*(3-2*u);return(n(l,c)*(1-d)+n(l+1,c)*d)*(1-p)+(n(l,c+1)*(1-d)+n(l+1,c+1)*d)*p};for(let a=0;a<r;a++)for(let o=0;o<r;o++){let l=o/r*2-1,c=a/r*2-1,h=Math.min(1,Math.hypot(l,c)),u=s(l*1.6+5,c*1.6+9),d=.55*s(l*2.6+u*2,c*2.2+u)+.3*s(l*5.2+u*3,c*4.6)+.15*s(l*11,c*10),p=Math.max(0,1-h*h)**1.6*Math.max(0,d*1.9-.42);i.data.set([255,255,255,Math.round(255*Math.min(1,p))],(a*r+o)*4)}return t.putImageData(i,0,0),Vc=new Tt(e)}var hr=class{constructor(e,t,{wide:i=.045,rise:n=.5,count:s=13,size:a=.12}={}){Object.assign(this,{y:t,wide:i,rise:n,size:a,strength:1}),this.puffs=Array.from({length:s},(o,l)=>{let c=new Ma(new Hr({map:qm(),color:"#fff6ea",transparent:!0,opacity:0,depthWrite:!1,fog:!1}));c.renderOrder=5,c.raycast=()=>{},e.add(c);let h={s:c,age:l/s};return this.born(h),h})}born(e){let t=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*this.wide;Object.assign(e,{off:[Math.cos(t)*i,Math.sin(t)*i],lag:[0,0],turn:Math.random()*6.28,spin:(Math.random()-.5)*1.6,life:2.2+Math.random()*1.6})}update(e,t=0,i=0){for(let n of this.puffs){n.age+=e/n.life,n.age>=1&&(n.age%=1,this.born(n)),n.lag[0]=Math.max(-.7,Math.min(.7,n.lag[0]-t)),n.lag[1]=Math.max(-.7,Math.min(.7,n.lag[1]-i));let s=n.age,a=.05*s*s,o=n.s;o.position.set(n.off[0]*(1-s*.6)+Math.sin(n.turn+s*6)*a+n.lag[0],this.y+s*this.rise,n.off[1]*(1-s*.6)+Math.cos(n.turn*1.3+s*5)*a+n.lag[1]),o.scale.set(this.size*(.6+s*1.5),this.size*(.8+s*2.1),1),o.material.rotation=n.turn+s*n.spin,o.material.opacity=.34*this.strength*Math.sin(Math.PI*s**.7)*(1-.35*s)}}};var Ym=[[.06,0],[.084,.01],[.1,.042],[.104,.082],[.094,.126],[.075,.168],[.065,.204],[.067,.236],[.08,.28],[.098,.324],[.113,.368]],Zm=new sr(Ym.map(([r,e])=>new ne(r,e))),ts=Zm.getPoints(60),Qr=.25,$m=.006,es=.026,Wc=.312,xn=.017,Gc=.364,is=r=>{let e=1;for(;e<ts.length-1&&ts[e].y<r;)e++;let t=ts[e-1],i=ts[e],n=Math.max(0,Math.min(1,(r-t.y)/(i.y-t.y||1)));return t.x+(i.x-t.x)*n-$m},Jm=is(Wc),ri=56,ns=16,ur=9,Km=5,gd=r=>r*r*(3-2*r);function Qm(r){let e=ri+1,t=e*(ns+1)+1+ri*ur,i=new Float32Array(t*3),n=[];for(let h=0;h<ns;h++)for(let u=0;u<ri;u++){let d=h*e+u;n.push(d,d+e,d+1,d+1,d+e,d+e+1)}let s=e*(ns+1),a=(h,u)=>s+1+(h-1)*ri+u%ri;for(let h=0;h<ri;h++)n.push(s,a(1,h+1),a(1,h));for(let h=1;h<ur;h++)for(let u=0;u<ri;u++)n.push(a(h,u),a(h,u+1),a(h+1,u),a(h,u+1),a(h+1,u+1),a(h+1,u));let o=new Ze;o.setAttribute("position",new rt(i,3).setUsage(Jr)),o.setIndex(n);let l=new Zi({color:"#7a1604",roughness:.1,specularIntensity:.6,envMap:r,envMapIntensity:.6,side:pi});l.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("void main() {",`varying vec3 vTea, vUp;
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
      totalEmissiveRadiance += through * vec3(0.42, 0.32, 0.26) * (0.3 + 0.7 * pow(1.0 - face, 1.5)); }`)};let c=new ge(o,l);return c.castShadow=!0,c.frustumCulled=!1,c}function e0(){let r=document.createElement("canvas");r.width=r.height=128;let e=r.getContext("2d");for(let[n,s,a,o]of[[64,64,60,.5],[70,70,26,.75],[60,74,12,.6]]){let l=e.createRadialGradient(n,s,0,n,s,a);l.addColorStop(0,`rgba(255,150,60,${o})`),l.addColorStop(.45,`rgba(214,84,18,${o*.5})`),l.addColorStop(1,"rgba(150,30,0,0)"),e.fillStyle=l,e.fillRect(0,0,128,128)}e.strokeStyle="rgba(255,214,150,.75)",e.lineWidth=2.2,e.filter="blur(1.5px)",e.beginPath(),e.arc(66,66,34,.2,1.9),e.stroke(),e.beginPath(),e.arc(58,60,22,.1,1.6),e.stroke();let t=new Tt(r);t.colorSpace=at;let i=new ge(new lt(.3,.3).rotateX(-Math.PI/2),new dt({map:t,transparent:!0,blending:_n,depthWrite:!1,opacity:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return i.renderOrder=1,i.raycast=()=>{},i}var rs=class{constructor(e,t,i,n,s=0){this.scene=e,this.home=new T(i,0,n);let a=this.group=new ot,o=this.cup=new ot;a.position.copy(this.home),a.scale.setScalar(Qr),a.rotation.y=s,e.add(a),a.add(o);let l=y=>new Zi({envMap:t,...y}),c=(y,m,v=0,x=0,I=0,E=a)=>{let A=new ge(y,m);return A.position.set(v,x,I),A.castShadow=A.receiveShadow=!0,E.add(A),A},h=l({color:"#f6f2ea",roughness:.28,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:.5});c(new ni([[.001,0],[.1,0],[.16,.012],[.205,.034],[.21,.04],[.2,.038],[.15,.022],[.1,.016],[.001,.016]].map(([y,m])=>new ne(y,m)),64),h);for(let[y,m,v,x,I]of[[.188,.0345,.0045,"#a3201c",0],[.173,.0298,.0016,"#d9a441",.8],[.205,.0392,.0022,"#d9a441",.8]])c(new Dt(y,v,6,72).rotateX(Math.PI/2),l({color:x,roughness:.3,metalness:I}),0,m).castShadow=!1;let u=new Zi({color:"#f4fbff",roughness:.02,metalness:0,clearcoat:1,clearcoatRoughness:.02,envMap:t,envMapIntensity:1.5,transparent:!0,side:pi,depthWrite:!1});u.onBeforeCompile=y=>{y.fragmentShader=y.fragmentShader.replace("#include <opaque_fragment>",`diffuseColor.a = mix(0.05, 0.8, pow(1.0 - abs(dot(normalize(vViewPosition), normal)), 2.4));
#include <opaque_fragment>`)};let d=c(new ni([new ne(.001,0),...ts],64),u,0,xn,0,o);d.renderOrder=3,d.castShadow=!1;let p=l({color:"#ffffff",roughness:.05,clearcoat:1,transparent:!0,opacity:.7,depthWrite:!1});for(let[y,m,v]of[[.1115,.368,.0036],[.07,.006,.0046]]){let x=c(new Dt(y,v,8,64).rotateX(Math.PI/2),p,0,xn+m,0,o);x.renderOrder=4,x.castShadow=!1}let g=l({color:"#dfe5ea",metalness:1,roughness:.16,envMapIntensity:1.2});c(new Xr(.0062,.16,4,8),g,.02,.041,.152).rotation.set(0,.1,Math.PI/2-.05),c(new Xt(.024,16,10),g,-.085,.039,.145).scale.set(1.5,.4,.9);let f=l({color:"#ffffff",roughness:.85,envMapIntensity:.2});for(let[y,m,v]of[[.145,.045,.3],[.15,-.03,.9]])c(new pt(.036,.024,.026),f,y,.034,m).rotation.y=v;this.sim=new Ha({rim:.5,n:20}),this.carry=new Va(this.sim.g),this.tea=Qm(t),this.tea.position.y=xn,o.add(this.tea),this.spot=e0(),this.spot.position.set(.11,.044,.1),a.add(this.spot),this.steam=new hr(a,xn+Wc+.03),this.drops=[],this.bead=new Xt(.0027,8,6),this.stream=new ge(new Pt(.009,.006,1,10,1,!0).translate(0,.5,0),this.tea.material),this.stream.visible=!1,a.add(this.stream),this.left=1,this.shown=-1,this.lift=0,this.held=null,this.sip=-1,this.filling=-1,this.was=this.home.clone(),this.lean=[0,0],this.P=new T,this.pour(),this.body=new ge(new Pt(.23,.23,.42,12),new dt({visible:!1})),this.body.position.y=.21,a.add(this.body)}get level(){return es+.03+(Wc-es-.03)*this.left}pour(){let e=this.tea,t=this.sim,i=this.level,n=is(i),s=e.geometry.attributes.position,a=s.array,o=es+.008,l=(h,u)=>Math.max(o,Math.min(Gc,i+t.at(h,u)*n)),c=0;for(let h=0;h<=ns;h++)for(let u=0;u<=ri;u++){let d=u/ri*Math.PI*2,p=Math.cos(d),g=Math.sin(d),_=es+(l(p,g)-es)*(h/ns),f=Math.max(.001,is(_));a[c++]=p*f,a[c++]=_,a[c++]=g*f}a[c++]=0,a[c++]=l(0,0),a[c++]=0;for(let h=1;h<=ur;h++)for(let u=0;u<ri;u++){let d=u/ri*Math.PI*2,p=h/ur,g=Math.cos(d),_=Math.sin(d),f=l(g*p,_*p),y=h===ur?l(g,_):f,m=is(l(g,_))*p;a[c++]=g*m,a[c++]=y+(h===ur?.002:0),a[c++]=_*m}s.needsUpdate=!0,e.geometry.computeVertexNormals(),this.shown=this.left}hit(e){let t=new jt(e.origin,e.direction);this.body.updateWorldMatrix(!0,!1),this.body.material.visible=!0;let i=t.intersectObject(this.body)[0];return this.body.material.visible=!1,i?i.distance:null}hold(e,t){this.held=this.held||new T,this.held.set(e,0,t)}drop(e,t){this.held=null,this.home.set(e,0,t)}drink(){return this.held||this.sip>=0||this.filling>=0?null:this.left<.08?(this.filling=0,"pour"):(this.sip=0,"sip")}jolt(e=1){this.sim.drop((Math.random()-.5)*.8,(Math.random()-.5)*.8,.02*e,.4)}update(e){let t=this.group,i=this.sim,n=this.held?1:0,s=0;if(this.sip>=0){this.sip+=e/1.9;let m=this.sip,v=m<.3?gd(m/.3):m>.72?gd(Math.max(0,(1-m)/.28)):1;s=m>.3&&m<.72?Math.sin((m-.3)/.42*Math.PI):0,s>0&&(this.left=Math.max(0,this.left-e/(1.9*.42)/Km)),this.cup.position.set(0,v*.42,v*.3),m>=1&&(this.sip=-1,this.cup.position.set(0,0,0),this.left<.02&&(this.left=0))}if(this.filling>=0){this.filling+=e/2.6;let m=this.filling>.06&&this.filling<.94;if(this.stream.visible=m,m){let v=xn+this.level;this.stream.position.set(0,v,0),this.stream.scale.y=1.6,this.left=Math.min(1,this.left+e/(2.6*.88)),Math.random()<e*22&&i.drop((Math.random()-.5)*.25,(Math.random()-.5)*.25,.05,.25)}this.filling>=1&&(this.filling=-1,this.left=1)}this.lift+=(n-this.lift)*(1-Math.exp(-e*10));let a=this.held||this.home,o=1-Math.exp(-e*16);t.position.x+=(a.x-t.position.x)*o,t.position.z+=(a.z-t.position.z)*o,t.position.y=this.lift*.02;let l=s*.75,c=Math.cos(t.rotation.y),h=Math.sin(t.rotation.y);this.cup.rotation.set(l,0,0),this.cup.getWorldPosition(this.P);let u=Jm*Qr,d=this.carry.move([this.P.x/u,this.P.y/u,this.P.z/u],e),p=i.calm,g=l>.01?i.g*Math.tan(Math.min(.5,l*.62)):0;i.rim=Math.max(.2,(Gc-this.level)/is(this.level));let _=i.step(e,d.ax*c-d.az*h,d.ax*h+d.az*c-g,d.lift);(!p||!i.calm||this.shown!==this.left)&&this.pour();let f=(t.position.x-this.was.x)/Qr,y=(t.position.z-this.was.z)/Qr;if(this.was.copy(t.position),this.steam.y=xn+this.level+.03,this.steam.strength+=((this.left>.06?.45+.55*this.left:0)-this.steam.strength)*(1-Math.exp(-e*2)),this.steam.update(e,f*c-y*h,f*h+y*c),this.spot.material.opacity=(.22+.45*this.left)*(1-.6*this.lift)*(1+2.5*i.at(.4,.3))*this.glow,this.spot.position.x=.11+i.at(.6,0)*.08,this.spot.position.z=.1+i.at(0,.6)*.08,_.length&&this.left>.7){_.sort((m,v)=>v.amount-m.amount);for(let m of _.slice(0,2))if(this.drops.length<14){let v=new ge(this.bead,this.tea.material),x=.09+Math.random()*.1;v.position.set(this.P.x+(m.x*c+m.z*h)*.028,this.P.y+(xn+Gc)*Qr,this.P.z+(-m.x*h+m.z*c)*.028),v.userData.v=[(m.x*c+m.z*h)*x,.12+Math.random()*.12,(-m.x*h+m.z*c)*x],v.scale.setScalar(.6+Math.random()*.7),this.scene.add(v),this.drops.push(v)}}for(let m=this.drops.length-1;m>=0;m--){let v=this.drops[m],x=v.userData.v;if(v.userData.wet){v.userData.wet-=e,v.material.opacity=Math.min(.8,v.userData.wet*.2),v.userData.wet<=0&&(this.scene.remove(v),v.material.dispose(),this.drops.splice(m,1));continue}x[1]-=2.2*e,v.position.x+=x[0]*e,v.position.y+=x[1]*e,v.position.z+=x[2]*e,v.position.y<.001&&(v.position.y=6e-4,v.scale.set(v.scale.x*2,.12,v.scale.z*1.8),v.material=new qe({color:"#4a1a06",roughness:.15,transparent:!0}),v.userData.wet=14)}}};rs.prototype.glow=1;var ss=[[1e-4,.0045],[.0165,.0045],[.0175,0],[.0205,8e-4],[.0235,.008],[.028,.024],[.031,.04],[.0325,.051],[.033,.0535]],Wa=[[.031,.0525],[.0305,.045],[.028,.03],[.0235,.014],[.018,.0085],[1e-4,.0075]],vd=.012,t0=.0455,i0=4,Xc=r=>r*r*(3-2*r),Ga=(r,e=48)=>new ni(r.map(([t,i])=>new ne(t,i)),e),n0=r=>{for(let e=1;e<Wa.length;e++){let[t,i]=Wa[e-1],[n,s]=Wa[e];if(r<=i&&r>=s)return n+(t-n)*(r-s)/(i-s||1)}return .018};function r0(){let e=document.createElement("canvas");e.width=e.height=512;let t=e.getContext("2d"),i=512/2,n=t.createRadialGradient(i,i,0,i,i,i);n.addColorStop(0,"#9a6b45"),n.addColorStop(.62,"#8c5d39"),n.addColorStop(.86,"#6f4527"),n.addColorStop(.97,"#3e2414"),n.addColorStop(1,"#2a170c"),t.fillStyle=n,t.fillRect(0,0,512,512);let s=7,a=()=>(s=s*16807%2147483647)/2147483647;for(let l=0;l<5200;l++){let c=a()*6.283,h=Math.sqrt(a())*i*.94,u=i+Math.cos(c)*h,d=i+Math.sin(c)*h,p=.6+a()*a()*(h>i*.75?3.4:1.8);t.fillStyle=a()<.55?`rgba(196,150,108,${.25+a()*.35})`:`rgba(70,40,20,${.2+a()*.3})`,t.beginPath(),t.arc(u,d,p,0,6.283),t.fill()}let o=new Tt(e);return o.colorSpace=at,o.anisotropy=4,o}function s0(r,e,t,i){let n=new pt(r,e,t,6,6,6),s=n.attributes.position,a=new T,o=new T,l=[r/2-i,e/2-i,t/2-i];for(let c=0;c<s.count;c++)a.fromBufferAttribute(s,c),o.set(Math.max(-l[0],Math.min(l[0],a.x)),Math.max(-l[1],Math.min(l[1],a.y)),Math.max(-l[2],Math.min(l[2],a.z))),a.sub(o).normalize().multiplyScalar(i).add(o),s.setXYZ(c,a.x,a.y,a.z);return n.computeVertexNormals(),n}var as=class{constructor(e,t,i,n,s=0){this.scene=e,this.home=new T(i,0,n);let a=this.group=new ot,o=this.cup=new ot;a.position.copy(this.home),a.rotation.y=s,e.add(a),a.add(o);let l=v=>new Zi({envMap:t,...v}),c=(v,x,I=a)=>{let E=new ge(v,x);return E.castShadow=E.receiveShadow=!0,I.add(E),E},h=l({color:"#f7f3ec",roughness:.26,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:.5}),u=l({color:"#a3201c",roughness:.3}),d=l({color:"#e3b453",roughness:.25,metalness:.6,envMapIntensity:1.2});c(Ga([[1e-4,0],[.03,0],[.045,.004],[.058,.0095],[.0605,.011],[.058,.0108],[.044,.0062],[.026,.0046],[1e-4,.0046]],64),h);for(let[v,x,I,E]of[[.0545,.0094,.0012,u],[.0603,.0108,7e-4,d]])c(new Dt(v,I,6,64).rotateX(Math.PI/2),E).position.y=x;let p=.0047,g=c(Ga(ss),h,o);g.position.y=p;let _=c(Ga(Wa),l({color:"#efe8dc",roughness:.3,side:pi}),o);_.position.y=p;let f=(v,x,I)=>{let E=[];for(let S=0;S<=6;S++){let w=v+(x-v)*S/6,M=1;for(;M<ss.length-1&&ss[M][1]<w;)M++;let[b,P]=ss[M-1],[N,B]=ss[M];E.push([b+(N-b)*(w-P)/(B-P||1)+25e-5,w])}let A=c(Ga(E,56),I,o);A.position.y=p,A.castShadow=!1};c(new Dt(.0321,.0011,8,64).rotateX(Math.PI/2),h,o).position.y=p+.0532,f(.0505,.0528,d),f(.0355,.046,u),f(.0335,.0348,d);let y=c(new Dt(.0105,.0026,10,28,Math.PI*1.1),h,o);y.position.set(.028,p+.027,0),y.rotation.z=-Math.PI*.55,this.grounds=c(new di(.018,32).rotateX(-Math.PI/2),l({color:"#2a170b",roughness:.95,side:pi}),o),this.grounds.position.y=p+.0082,this.top=c(new di(1,48).rotateX(-Math.PI/2),l({map:r0(),roughness:.55,transparent:!0}),o),this.top.castShadow=!1;let m=l({color:"#f4d3da",roughness:1,sheen:1,sheenColor:"#ffffff",sheenRoughness:.9,envMapIntensity:.15});for(let[v,x,I,E]of[[-.039,.022,.5,.011],[-.026,.038,-.3,.0105]]){let A=c(s0(.0135,E,.0135,.0022),m);A.position.set(v,.0047+E/2+3e-4,x),A.rotation.y=I}this.steam=new hr(a,.06,{wide:.012,rise:.09,count:9,size:.03}),this.left=1,this.lift=0,this.held=null,this.sip=-1,this.filling=-1,this.wobble=0,this.t=0,this.body=new ge(new Pt(.06,.06,.07,12),new dt({visible:!1})),this.body.position.y=.035,a.add(this.body),this.seat=p,this.show()}get level(){return vd+(t0-vd)*this.left}show(){let e=this.level,t=n0(e);this.top.position.y=this.seat+e,this.top.scale.set(t,1,t),this.top.material.opacity=this.left>.02?1:0,this.top.visible=this.left>.02,this.top.material.color.setScalar(.35+.65*Math.min(1,this.left*1.6))}hit(e){let t=new jt(e.origin,e.direction);this.body.updateWorldMatrix(!0,!1),this.body.material.visible=!0;let i=t.intersectObject(this.body)[0];return this.body.material.visible=!1,i?i.distance:null}hold(e,t){this.held=this.held||new T,this.held.set(e,0,t)}drop(e,t){this.held=null,this.home.set(e,0,t)}drink(){return this.held||this.sip>=0||this.filling>=0?null:this.left<.05?(this.filling=0,"pour"):(this.sip=0,"sip")}jolt(e=1){this.wobble=Math.min(1,this.wobble+.5*e)}update(e){let t=this.group;this.t+=e;let i=0;if(this.sip>=0){this.sip+=e/1.9;let h=this.sip,u=h<.3?Xc(h/.3):h>.72?Xc(Math.max(0,(1-h)/.28)):1;i=h>.3&&h<.72?Math.sin((h-.3)/.42*Math.PI):0,i>0&&(this.left=Math.max(0,this.left-e/(1.9*.42)/i0)),this.cup.position.set(0,u*.1,u*.075),h>=1&&(this.sip=-1,this.cup.position.set(0,0,0),this.left<.03&&(this.left=0))}this.filling>=0&&(this.filling+=e/2.2,this.left=Math.min(1,Xc(Math.min(1,this.filling))),this.filling>=1&&(this.filling=-1,this.left=1)),this.cup.rotation.set(i*.7,0,Math.sin(this.t*19)*.004*this.wobble),this.wobble=Math.max(0,this.wobble-e*1.5),this.lift+=((this.held?1:0)-this.lift)*(1-Math.exp(-e*10));let n=this.held||this.home,s=1-Math.exp(-e*16),a=(n.x-t.position.x)*s,o=(n.z-t.position.z)*s;t.position.x+=a,t.position.z+=o,t.position.y=this.lift*.02,this.show();let l=Math.cos(t.rotation.y),c=Math.sin(t.rotation.y);this.steam.y=this.seat+this.level+.008,this.steam.strength+=((this.left>.05?.4+.4*this.left:0)-this.steam.strength)*(1-Math.exp(-e*2)),this.steam.update(e,-(a*l-o*c),-(a*c+o*l))}};as.prototype.glow=1;var yd=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,jc={night:{value:0},time:{value:0},fire:{value:1},pen:{value:new T(9,9,0)},wave:{value:new T(9,9,9)}};function _d(r){yd||(jc.time.value=(jc.time.value+r)%2e3,jc.wave.value.z+=r)}var Di=260,Xa=class{constructor(e){this.p=new Float32Array(Di*3),this.c=new Float32Array(Di*3),this.v=new Float32Array(Di*3),this.age=new Float32Array(Di).fill(9),this.life=new Float32Array(Di).fill(1),this.up=new Float32Array(Di),this.hue=Array.from({length:Di},()=>new Se);let t=new Ze;t.setAttribute("position",this.pa=new rt(this.p,3).setUsage(Jr)),t.setAttribute("color",this.ca=new rt(this.c,3).setUsage(Jr)),this.o=new ba(t,new Vr({size:.0016,vertexColors:!0,transparent:!0,depthWrite:!1,blending:_n,fog:!1})),this.o.frustumCulled=!1,this.o.renderOrder=6,this.o.visible=!1,this.o.raycast=()=>{},e.add(this.o),this.next=0,this.any=0}puff(e,t,i,n,{color:s="#ffd98a",speed:a=.05,rise:o=.04,up:l=-.12,life:c=.8,wide:h=.001}={}){if(!yd){for(let u=0;u<n;u++){let d=this.next=(this.next+1)%Di,p=Math.random()*6.283,g=a*(.3+Math.random());this.p.set([e+(Math.random()-.5)*h,t,i+(Math.random()-.5)*h],d*3),this.v.set([Math.cos(p)*g,o*(.4+Math.random()),Math.sin(p)*g],d*3),this.age[d]=0,this.life[d]=c*(.5+Math.random()*.8),this.up[d]=l,this.hue[d].set(s)}this.any=2.5,this.o.visible=!0}}update(e){if(this.o.visible){if(this.any-=e,this.any<0){this.o.visible=!1;return}for(let t=0;t<Di;t++){let i=t*3,n=(this.age[t]+=e)/this.life[t];if(n>=1){this.c[i]=this.c[i+1]=this.c[i+2]=0;continue}let s=Math.exp(-e*2.5);for(let l=0;l<3;l++)this.v[i+l]*=s,this.p[i+l]+=this.v[i+l]*e;this.v[i+1]+=this.up[t]*e;let a=(1-n)*(.55+.45*Math.sin(this.age[t]*40+t)),o=this.hue[t];this.c[i]=o.r*a,this.c[i+1]=o.g*a,this.c[i+2]=o.b*a}this.pa.needsUpdate=this.ca.needsUpdate=!0}}};var Mn=new T(-1.55,He,-2.62),dr=new T(1.5,He,-2.5),ja=class{constructor(e){this.canvas=e,this.touch=matchMedia("(pointer: coarse)").matches;let t=this.renderer=new ya({canvas:e,antialias:!0,powerPreference:"high-performance"});t.toneMapping=Xu,t.shadowMap.enabled=!0,t.shadowMap.type=Wu,this.scene=new rr,this.scene.background=new Se("#1d140d"),this.scene.fog=new _a("#1d140d",2.8,7.5),this.camera=new Et(32,1,.02,16),this.env=md(t),this.sky=new Ia("#fff4e2","#6b4c33",1.75),this.scene.add(this.sky);let i=this.key=new Ua("#fff0d6",1.6);i.position.set(-.5,1.2,-.45),i.castShadow=!0,i.shadow.mapSize.set(this.touch?2048:3072,this.touch?2048:3072),i.shadow.radius=5,i.shadow.bias=-4e-4,i.shadow.normalBias=.002,Object.assign(i.shadow.camera,{left:-.98,right:.98,top:.75,bottom:-.75,near:.2,far:2.6}),this.scene.add(i),this.lamp=new yn("#ffe9c4",0,5,1.2),this.scene.add(this.lamp),this.pianoLamp=new yn("#ffe2b0",1.1,2.6,1.4),this.pianoLamp.position.set(dr.x-.3,.95,dr.z+.7),this.scene.add(this.pianoLamp),this.hearth=new ka(this.scene,this.env),this.hearth.pad.visible=!1,this.dust=new Xa(this.scene),this.teas=[new rs(this.scene,this.env,.74,-.36,.4),new as(this.scene,this.env,-.76,.38,-.3)],this.at="desk",this.reading=null,this.pose=null,this.from=null,this.way=1,this.frustum=new Yi,this.hearthBox=new Ht(new T(-.8,He,-2.8),new T(.8,.6,-1.5)),this.resize(),addEventListener("resize",()=>this.resize())}resize(){let e=innerWidth,t=innerHeight,i=this.touch?3e6:9e6,n=Math.min(devicePixelRatio||1,2);e*t*n*n>i&&(n=Math.sqrt(i/(e*t))),this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}go(e,t=null){this.at=e,this.reading=t}target(){let e=(o,l,c)=>new T(o,l,c),t=Math.tan(this.camera.fov*Math.PI/360),i=this.camera.aspect,n=o=>o/(t*i);if(this.at==="shelf"){let o=e(Mn.x,Mn.y+1.3,Mn.z),l=Math.max(.6/t,n(.6));return{P:e(o.x+.05,o.y+.05,o.z+l),L:o,up:e(0,1,0)}}if(this.at==="piano"){let o=e(dr.x,.32,dr.z+.33),l=Math.max(.55/t,n(.7));return{P:o.clone().addScaledVector(e(-.05,.62,.78).normalize(),l),L:o,up:e(0,1,0)}}if(this.at==="room"){let o=e(0,.1,-1.4);return{P:e(0,.95,2.2),L:o,up:e(0,1,0)}}if(this.at==="read"&&this.reading){let o=this.reading,l=o.center,c=o.w/2+.01,h=o.h/2+.01,u=Math.max(h/t,c/(t*i))*(o.zoom||1);return{P:e(l.x,u,l.z+1e-4),L:e(l.x,0,l.z),up:e(0,0,-1)}}let s=e(0,-.05,-.05),a=Math.max(2.1,n(.92));return{P:s.clone().addScaledVector(e(0,.62,.79).normalize(),a),L:s,up:e(0,1,0)}}place(e,t=e){let i=this.target();if(this.going!==this.at+(this.reading?this.reading.name:"")&&(this.from=this.pose,this.going=this.at+(this.reading?this.reading.name:""),this.way=this.from?0:1),this.way=Math.min(1,this.way+Math.min(.25,t)/1),this.way<1&&this.from){let n=this.way*this.way*(3-2*this.way);i.P.lerpVectors(this.from.P,i.P,n),i.L.lerpVectors(this.from.L,i.L,n),i.up.lerpVectors(this.from.up,i.up,n).normalize()}this.pose=i,this.camera.position.copy(i.P),this.camera.up.copy(i.up),this.camera.lookAt(i.L),this.camera.updateMatrixWorld(),this.lamp.position.set(Mn.x+.6,1.4,Mn.z+1.2),this.lamp.intensity+=((this.at==="shelf"?3.4:.9)-this.lamp.intensity)*(1-Math.exp(-e*4))}get seesFire(){return this.frustum.intersectsBox(this.hearthBox)}live(e){_d(e),this.frustum.setFromProjectionMatrix(new Ee().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse));let t=this.seesFire;this.hearth.update(e,!1,this.dust,t),this.pet&&(this.pet.group.visible=t,t&&this.pet.update(e));for(let i of this.teas)i.update(e);this.dust.update(e)}ray(e,t){let i=new jt;return i.setFromCamera(new ne(e/innerWidth*2-1,1-t/innerHeight*2),this.camera),i}render(){this.renderer.render(this.scene,this.camera)}};var xd=["#6e2a24","#24405e","#2f5a3a","#6a5124","#4a2d5c","#7a3e1c","#2a4f55","#5a2b3c"];function a0(r,e,t,i,n){let s=document.createElement("canvas");s.width=128,s.height=Math.round(128*n/i);let a=s.getContext("2d");a.fillStyle=t,a.fillRect(0,0,s.width,s.height),a.fillStyle="rgba(0,0,0,.25)",a.fillRect(0,0,8,s.height),a.fillRect(s.width-8,0,8,s.height),a.strokeStyle="#d8b56a",a.lineWidth=3;for(let l of[26,34,s.height-34,s.height-26])a.beginPath(),a.moveTo(10,l),a.lineTo(s.width-10,l),a.stroke();a.save(),a.translate(s.width/2,s.height/2),a.rotate(-Math.PI/2),a.fillStyle="#ecd59a",a.textAlign="center",a.textBaseline="middle",a.font=`600 ${Math.round(s.width*.3)}px Georgia, serif`,a.fillText(r,0,-s.width*.13,s.height-90),a.font=`${Math.round(s.width*.2)}px Georgia, serif`,a.fillText(e,0,s.width*.2,s.height-90),a.restore();let o=new Tt(s);return o.colorSpace=at,o.anisotropy=8,o}var qa=class{constructor(e){this.group=new ot,this.group.position.copy(Mn),e.add(this.group),this.books=[],this.picked=null;let t=cr(23,[92,60,36]),i=new qe({map:t,roughness:.6}),n=new qe({color:"#2e1d10",roughness:.8}),s=(o,l,c,h,u,d,p=i)=>{let g=new ge(new pt(o,l,c),p);return g.position.set(h,u,d),g.castShadow=g.receiveShadow=!0,this.group.add(g),g};this.W=1,this.H=1.9;let a=.3;s(this.W,this.H,.02,0,this.H/2,-a/2,n);for(let o of[-this.W/2,this.W/2])s(.03,this.H,a,o,this.H/2,0);this.boards=[.05,.52,.99,1.46,1.88];for(let o of this.boards)s(this.W,.025,a,0,o,0)}fill(e){for(let s of this.books)this.group.remove(s.mesh),s.mesh.geometry.dispose();this.books=[];let t=14,i=.05,n=s=>Math.floor(s/t);e.forEach((s,a)=>{let o=n(a),l=.32+a*37%7*.012,c=-this.W/2+.06+a%t*(i+.012),h=this.boards[3-Math.min(3,o)]+.013+l/2,u=s.user?"#3b3b3b":xd[a%xd.length],d=a0(s.title,s.sub,u,i,l),p=new qe({color:u,roughness:.7}),g=new qe({color:"#efe6cf",roughness:.9}),_=new ge(new pt(i,l,.22),[p,p,g,g,new qe({map:d,roughness:.6}),p]);_.position.set(c+i/2,h,.02),_.rotation.z=a*13%5===0?.03:0,_.castShadow=!0,_.userData.book=s,this.group.add(_),this.books.push({...s,mesh:_,home:_.position.clone()})})}hit(e){let t=e.intersectObjects(this.books.map(i=>i.mesh))[0];return t?t.object.userData.book:null}hover(e){for(let t of this.books)t.mesh.position.z+=((t.id===(e&&e.id)?.06:.02)-t.mesh.position.z)*.3}};var Md=[0,2,4,5,7,9,11],Sd=21,bd=108,Ya=class{constructor(e,t){this.group=new ot,this.group.position.copy(dr),e.add(this.group);let i=cr(41,[52,30,18]);i.repeat.set(1.5,1.5);let n=new qe({map:i,color:"#6b4a34",roughness:.35,envMap:t,envMapIntensity:.5}),s=new qe({color:"#141010",roughness:.3,envMap:t,envMapIntensity:.6}),a=(f,y,m,v,x,I,E=n)=>{let A=new ge(new pt(f,y,m),E);return A.position.set(v,x,I),A.castShadow=A.receiveShadow=!0,this.group.add(A),A},o=1.48,l=.72,c=.34;a(o,1.26,c,0,.63,0),a(o+.02,.04,c+.04,0,1.28,.005);for(let f of[-o/2+.03,o/2-.03])a(.06,l+.06,.34,f,(l+.06)/2,c/2+.17),a(.05,.62,.05,f,.31,c/2+.3);a(o,.05,.3,0,l-.04,c/2+.15),a(o-.12,.09,.03,0,l+.05,c/2+.01,s),a(.58,.3,.012,0,l+.36,c/2+.02),a(.62,.02,.05,0,l+.21,c/2+.035);let h=new qe({color:"#c79a45",metalness:.9,roughness:.3,envMap:t});for(let f of[-.42,.42]){let y=new ge(new Pt(.02,.012,.05,12),h);y.position.set(f,l+.5,c/2+.04),this.group.add(y)}this.keys=new Map;let u=[];for(let f=Sd;f<=bd;f++)Md.includes(f%12)&&u.push(f);let d=(o-.14)/u.length,p=new qe({color:"#f3ecdc",roughness:.4}),g=new qe({color:"#1a1614",roughness:.35}),_=-(o-.14)/2;for(let f=Sd;f<=bd;f++){let y=Md.includes(f%12),m=new ht,v,x;if(y){let I=u.indexOf(f);v=_+(I+.5)*d,x=new ge(new pt(d*.94,.022,.15).translate(0,0,.075),p.clone())}else{let I=u.indexOf(f-1);v=_+(I+1)*d,x=new ge(new pt(d*.58,.022,.095).translate(0,0,.0475),g.clone()),x.position.y=.016}x.castShadow=!0,x.userData.midi=f,m.position.set(v,l,c/2+.03),m.add(x),this.group.add(m),this.keys.set(f,{pivot:m,mesh:x,down:0,goal:0,white:y,base:x.material.color.clone(),tint:null})}this.meshes=[...this.keys.values()].map(f=>f.mesh)}press(e,t,i=null){let n=this.keys.get(e);n&&(n.goal=t?1:0,t&&(n.tint=i))}release(){for(let e of this.keys.values())e.goal=0}hit(e){let t=e.intersectObjects(this.meshes)[0];return t?t.object.userData.midi:null}update(e){for(let t of this.keys.values()){t.down+=(t.goal-t.down)*(1-Math.exp(-e*(t.goal?40:18))),t.pivot.rotation.x=t.down*.075;let i=t.mesh.material.color;i.copy(t.base),t.tint&&t.down>.02&&i.lerp(new Se(t.tint),(t.white?.55:.75)*Math.min(1,t.down*1.5))}}};var os=class{constructor(e,t,i,n,s,a,o=0,l=[2048,1448]){this.name=t,this.w=i,this.h=n,this.center=new T(s,0,a),this.regions=[],this.canvas=document.createElement("canvas"),[this.canvas.width,this.canvas.height]=l,this.tex=new Tt(this.canvas),this.tex.colorSpace=at,this.tex.anisotropy=16,this.mesh=new ge(new lt(i,n),new qe({map:this.tex,emissiveMap:this.tex,emissive:"#ffffff",emissiveIntensity:.22,roughness:.92,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.mesh.rotation.x=-Math.PI/2,this.mesh.rotation.z=o,this.mesh.position.set(s,.0015,a),this.mesh.receiveShadow=!0,this.mesh.userData.sheet=this,e.add(this.mesh),this.cursor=new ge(new lt(.0022,n*.96),new dt({color:"#c0392b",transparent:!0,opacity:.85,depthWrite:!1})),this.cursor.rotation.x=-Math.PI/2,this.cursor.position.set(s,.003,a),this.cursor.visible=!1,this.cursor.renderOrder=3,e.add(this.cursor)}drawn(e){e.canvas!==this.canvas&&(this.canvas=e.canvas,this.tex.image=e.canvas),this.regions=e.regions,this.out=e,this.tex.needsUpdate=!0}at(e){let t=e.intersectObject(this.mesh)[0];return t?{x:t.uv.x*this.canvas.width,y:(1-t.uv.y)*this.canvas.height,dist:t.distance}:null}pick(e){let t=this.regions.filter(n=>e.x>=n.x&&e.x<=n.x+n.w&&e.y>=n.y&&e.y<=n.y+n.h),i={note:0,span:1,time:2};return t.sort((n,s)=>i[n.kind]-i[s.kind]||n.w*n.h-s.w*s.h)[0]||null}mark(e,t=0,i=this.canvas.height){if(e===null){this.cursor.visible=!1;return}let n=e/this.canvas.width-.5,s=(t+i/2)/this.canvas.height-.5;this.cursor.visible=!0,this.cursor.scale.y=i/this.canvas.height/.96,this.cursor.position.set(this.center.x+n*this.w,.003,this.center.z+s*this.h)}};var pr=null,Ni=null,qc=null,ls=null,mi={ready:!1,failed:!1,progress:0,onChange:()=>{}};function cs(){return pr||(pr=new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),ls=pr.createGain(),ls.gain.value=.8,ls.connect(pr.destination)),pr}var Za=()=>cs().currentTime;async function hs(){let r=cs();return r.state==="suspended"&&await r.resume(),qc||(qc=o0().catch(e=>{console.warn("[sound] SoundFont synth unavailable:",e),mi.failed=!0,mi.onChange()})),qc}async function o0(){let r=cs(),e=new URL("./vendor/",import.meta.url),[{WorkletSynthesizer:t},i]=await Promise.all([import("./spessasynth_lib-QSZ7LEC6.js"),l0(new URL("sf/GeneralUserGS.sf3",e)),r.audioWorklet.addModule(new URL("spessasynth/spessasynth_processor.min.js",e))]).then(([s,a])=>[s,a]),n=new t(r);n.connect(ls),await n.soundBankManager.addSoundBank(i,"main"),await n.isReady,Ni=n,mi.ready=!0,mi.onChange()}async function l0(r){let e=await fetch(r);if(!e.ok)throw new Error(`${r}: ${e.status}`);let t=Number(e.headers.get("content-length"))||84e5,i=e.body.getReader(),n=[],s=0;for(;;){let{done:l,value:c}=await i.read();if(l)break;n.push(c),s+=c.length,mi.progress=Math.min(1,s/t),mi.onChange()}let a=new Uint8Array(s),o=0;for(let l of n)a.set(l,o),o+=l.length;return a.buffer}function us(r,e){Ni&&Ni.programChange(r,e)}function ds(r,e,t,i){if(Ni){Ni.noteOn(r,e,t,i!==void 0?{time:i}:void 0);return}c0(e,t,i??cs().currentTime,r)}function ps(r,e,t){if(Ni){Ni.noteOff(r,e,t!==void 0?{time:t}:void 0);return}let i=fr.get(`${r}:${e}`);if(i){let n=t??pr.currentTime;i.g.gain.setTargetAtTime(0,n,.08),i.o.stop(n+.6),fr.delete(`${r}:${e}`)}}function wd(){Ni&&Ni.stopAll(!0);for(let r of fr.values())try{r.o.stop()}catch{}fr.clear()}var fr=new Map;function c0(r,e,t,i){let n=cs(),s=n.createOscillator(),a=n.createGain(),o=n.createBiquadFilter();s.type="triangle",s.frequency.value=440*2**((r-69)/12),o.type="lowpass",o.frequency.value=2400,a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(e/127*.22,t+.005),a.gain.setTargetAtTime(e/127*.08,t+.01,.4),s.connect(o).connect(a).connect(ls),s.start(t);let l=`${i}:${r}`,c=fr.get(l);if(c)try{c.o.stop(t)}catch{}fr.set(l,{o:s,g:a})}var h0=.3,$a=class{constructor(){this.s=null,this.ev=[],this.playing=!1,this.pos=0,this.rate=1,this.onEnd=()=>{},this.timer=null}load(e){this.stop(),this.s=e;let t=Ph(e),i=new Map,n=0;for(let s of e.parts)s.percussion?i.set(s.id,9):(n===9&&n++,i.set(s.id,n%16),n++);this.channels=i,this.ev=e.notes.map((s,a)=>({n:s,t:t[a].t,d:t[a].d,key:Eh(s.pitch),ch:i.get(s.part)??0,vel:Math.max(20,Math.min(127,s.vel||80))})).sort((s,a)=>s.t-a.t),this.length=this.ev.reduce((s,a)=>Math.max(s,a.t+a.d),0),this.pos=0}get at(){return this.s?Ch(this.s,this.pos):0}seek(e){let t=this.playing;this.pause(),this.pos=Math.max(0,Rh(this.s,{n:Math.round(e*960),d:960})),t&&this.play()}async play(){if(!(!this.s||this.playing)){await hs();for(let e of this.s.parts)us(this.channels.get(e.id),e.program||0);this.pos>=this.length-.05&&(this.pos=0),this.playing=!0,this.t0=Za()+.08,this.from=this.pos,this.i=this.ev.findIndex(e=>e.t>=this.pos-1e-6),this.i<0&&(this.i=this.ev.length),this.timer=setInterval(()=>this.tick(),40),this.tick()}}tick(){if(!this.playing)return;let e=Za(),t=this.from+(e-this.t0)*this.rate;this.pos=Math.max(this.from,t);let i=t+h0*this.rate;for(;this.i<this.ev.length&&this.ev[this.i].t<i;){let n=this.ev[this.i++],s=this.t0+(n.t-this.from)/this.rate,a=s+n.d/this.rate;ds(n.ch,n.key,n.vel,Math.max(e,s)),ps(n.ch,n.key,Math.max(e+.02,a-.004))}t>this.length+.5&&(this.pause(),this.pos=0,this.onEnd())}pause(){this.playing&&(this.playing=!1,clearInterval(this.timer),wd())}stop(){this.pause(),this.pos=0}sounding(){if(!this.playing)return[];let e=this.from+(Za()-this.t0)*this.rate,t=[];for(let i=Math.max(0,this.i-400);i<this.i;i++){let n=this.ev[i];n.t<=e&&e<n.t+n.d&&t.push(n)}return t}};var Ue={page:"#f7f2e6",line:"#4a4640",ink:"#2c2821",soft:"#8b8371",pencil:"#9b9284",faint:"#ddd3bd",rule:"#c9bd9f",accent:"#8f2f2a",blue:"#1f3f8f"},Sn={root:"#1f3f8f",chord:"#5a78bf",passing:"#2f7d4c",neighbour:"#b8741a",suspension:"#a8323a",appoggiatura:"#8a2f8a",other:"#8b8371",grace:"#a69c8a"},Yc={root:"root",chord:"chord tone",passing:"passing tone",neighbour:"neighbour tone",suspension:"suspension",appoggiatura:"appoggiatura",other:"other tone",grace:"grace note"},Nt='Georgia, "Iowan Old Style", "Times New Roman", serif';function Ja(r,e=1){return r?`hsla(${((Ah(r.tonic)*7%12+(r.mode==="minor"?3:0))%12*30+20)%360}, ${r.mode==="minor"?32:48}%, ${r.mode==="minor"?66:76}%, ${e})`:`rgba(200,190,170,${e})`}function Ka(r,e){let t=document.createElement("canvas");return t.width=r,t.height=e,t}function Qa(r,e,t){r.fillStyle=Ue.page,r.fillRect(0,0,e,t);let i=7,n=()=>(i=i*16807%2147483647)/2147483647;for(let s=0;s<e*t/900;s++)r.fillStyle=`rgba(${n()<.5?"120,100,70":"255,255,255"},${n()*.05})`,r.fillRect(n()*e,n()*t,1+n()*2,1+n()*2)}function $i(r,e,t,i,n,s,a=""){r.font=`${a} ${s}px ${Nt}`;let o=r.measureText(e).width;if(o>n){let l=n/o;if(l<.6)return!1;r.font=`${a} ${Math.floor(s*l)}px ${Nt}`}return r.fillText(e,t,i),!0}var gi=(r,e)=>r.source!=="auto"||r.confidence>=(e[r.layer]??.9);var bn={w:2400,h:1697};function Td(r,e,t,i={}){r=r||Ka(bn.w,bn.h);let n=r.getContext("2d"),s=r.width,a=r.height,o=[];Qa(n,s,a);let l=90,c=230,h=e.bars,u=h.length;if(n.fillStyle=Ue.ink,n.textBaseline="alphabetic",n.textAlign="left",$i(n,e.title||"Untitled",l,110,s-2*l-420,56,"600"),n.fillStyle=Ue.soft,$i(n,[e.composer,e.source].filter(Boolean).join(" · "),l,165,s-2*l-420,30),n.textAlign="right",n.font=`26px ${Nt}`,n.fillStyle=Ue.ink,n.fillText("ink: sure   pencil: a guess (touch it)",s-l,110),n.fillStyle=Ue.soft,n.fillText(`${u} bars · ${(t.key||[]).length} key areas · ${(t.phrase||[]).length} phrases`,s-l,155),!u)return{canvas:r,regions:o};let d=Math.min(8,Math.max(1,Math.ceil(u/14))),p=Math.ceil(u/d),g=(a-c-60)/d,_=(s-2*l)/p,f=me(h[0].at),y=M=>M+1<u?me(h[M+1].at):me(h[M].at)+me(h[M].dur),m=M=>{let b=h.findIndex((P,N)=>M<y(N)-1e-9);return b<0&&(b=u-1),Math.floor(b/p)},v=(M,b)=>{let P=b*p,N=P;for(;N+1<u&&N+1<P+p&&me(h[N+1].at)<=M+1e-9;)N++;let B=me(h[N].at),G=y(N)-B;return l+(N-P)*_+Math.max(0,Math.min(1,(M-B)/G))*_},x=M=>me(h[M*p].at),I=M=>y(Math.min(u-1,(M+1)*p-1)),E=e.notes.filter(M=>!M.percussion).map(M=>xr(M.pitch)),A=Math.min(...E),S=Math.max(...E),w=(M,b)=>{let P=me(M.start),N=me(M.end);for(let B=m(P);B<=m(Math.max(P,N-1e-6));B++){let G=Math.max(P,x(B)),W=Math.min(N,I(B));W<=G||b(v(G,B),v(W,B)-v(G,B),B,G===P,W===N)}};for(let M=0;M<d&&M*p<u;M++){let b=c+M*g,P={phrase:b+g*.12,key:b+g*.2,harm:b+g*.36,contour:b+g*.56,num:b+g*.94};n.strokeStyle=Ue.rule,n.lineWidth=1.5,n.fillStyle=Ue.soft,n.font=`22px ${Nt}`,n.textAlign="left";for(let G=M*p;G<Math.min(u,(M+1)*p);G++){let W=l+(G-M*p)*_;n.beginPath(),n.moveTo(W,P.key),n.lineTo(W,P.num-26),n.stroke(),(G===M*p||h[G].n%4===1||p<=16)&&n.fillText(String(h[G].n),W+3,P.num),o.push({x:W,y:P.key,w:_,h:P.num-P.key,kind:"time",t:me(h[G].at),bar:h[G].n})}let N=g*.36,B=G=>P.contour+N*(1-(G-A)/Math.max(1,S-A));for(let[G,W,$]of[[q=>Math.max(...q),Ue.ink,2.2],[q=>Math.min(...q),Ue.soft,1.6]]){let q=new Map;for(let ae of e.notes){if(ae.percussion||ae.grace)continue;let J=me(ae.onset);if(J<x(M)-1e-9||J>=I(M)-1e-9)continue;let ie=J.toFixed(5);q.set(ie,G([q.get(ie)??(G===Math.max?-1e9:1e9),xr(ae.pitch)].filter(he=>Math.abs(he)<1e8)))}let oe=[...q].map(([ae,J])=>[Number(ae),J]).sort((ae,J)=>ae[0]-J[0]);n.strokeStyle=W,n.lineWidth=$,n.beginPath(),oe.forEach(([ae,J],ie)=>ie?n.lineTo(v(ae,M),B(J)):n.moveTo(v(ae,M),B(J))),n.stroke()}}for(let M of t.key||[])w(M,(b,P,N,B)=>{let G=c+N*g+g*.2,W=g*.12,$=gi(M,Ft);n.fillStyle=Ja(M.data.key,$?.95:.45),n.fillRect(b,G,P,W),$||(n.strokeStyle=Ue.pencil,n.setLineDash([6,5]),n.strokeRect(b+1,G+1,P-2,W-2),n.setLineDash([])),M.source==="pinned"&&(n.fillStyle=Ue.accent,n.beginPath(),n.arc(b+10,G+10,6,0,7),n.fill()),n.fillStyle=Ue.ink,n.textAlign="left",n.textBaseline="middle",(B||P>120)&&$i(n,`${Ss(M.data.key)}${M.data.key.mode==="minor"?" minor":" major"}${$?"":" ?"}`,b+18,G+W/2,P-24,Math.min(30,W*.7),"600"),n.textBaseline="alphabetic",o.push({x:b,y:G,w:P,h:W,kind:"span",span:M})});for(let M of t.harmony||[])M.data.none||w(M,(b,P,N,B)=>{if(!B)return;let G=c+N*g+g*.36,W=g*.16,$=gi(M,Ft);n.fillStyle=$?Ue.ink:Ue.pencil,n.textAlign="left",n.textBaseline="middle",P>14&&$i(n,M.label+($?"":"?"),b+2,G+W/2,Math.max(10,P-3),Math.min(26,W*.55),$?"600":"")||n.fillRect(b+1,G+W*.45,2,W*.1),n.textBaseline="alphabetic",o.push({x:b,y:G,w:Math.max(6,P),h:W,kind:"span",span:M})});for(let M of t.phrase||[])w(M,(b,P,N,B,G)=>{let W=c+N*g+g*.12,$=g*.06,q=gi(M,Ft);n.strokeStyle=q?Ue.ink:Ue.pencil,n.lineWidth=2.5,q||n.setLineDash([8,6]),n.beginPath(),n.moveTo(b+3,W+(B?$:0)),n.lineTo(b+3,W),n.lineTo(b+P-3,W),G&&n.lineTo(b+P-3,W+$),n.stroke(),n.setLineDash([]),o.push({x:b,y:W-10,w:P,h:$+14,kind:"span",span:M}),B&&(n.fillStyle=Ue.soft,n.font=`italic 20px ${Nt}`,n.textAlign="left",n.fillText(M.label,b+10,W+22))});for(let M of t.cadence||[]){let b=me(M.start),P=m(b),N=v(b,P),B=c+P*g+g*.12,G=gi(M,Ft);n.fillStyle=M.label==="HC"?"#8a5a1a":Ue.accent,n.globalAlpha=G?1:.55,n.beginPath(),n.moveTo(N,B+2),n.lineTo(N+10,B-13),n.lineTo(N-10,B-13),n.closePath(),n.fill(),n.font=`600 21px ${Nt}`,n.textAlign="center",n.fillText(M.label+(G?"":"?"),N,B-17),n.globalAlpha=1,o.push({x:N-26,y:B-40,w:52,h:44,kind:"span",span:M})}return{canvas:r,regions:o,xOf:v,rowOf:m,top:c,rh:g}}var Tn={w:3600,h:1e3},vi=120,mr=30,wn=110,En=680,fs=wn+En+12,eo=fs+92,Ad=eo+70;function Rd(r,e){return e!=="degree"?xr(r.pitch):r.pitch.octave*7+mo.indexOf(r.pitch.step)+r.pitch.alter/5*.3}function Cd(r,e,t,i,n){r=r||Ka(Tn.w,Tn.h);let s=r.getContext("2d"),a=r.width,o=[],l=n.axis||"chromatic";Qa(s,a,r.height);let c=e.bars,h=Math.max(0,Math.min(c.length-1,n.bar||0)),u=Math.min(c.length,h+(n.bars||4)),d=me(c[h].at),p=u<c.length?me(c[u].at):me(c.at(-1).at)+me(c.at(-1).dur),g=S=>vi+(S-d)/(p-d)*(a-vi-mr),_=e.notes.filter(S=>!S.percussion&&me(S.onset)<p-1e-9&&me(S.onset)+me(S.dur)>d+1e-9),f=e.notes.filter(S=>!S.percussion).map(S=>Rd(S,l)),y=Math.floor(Math.min(...f))-1,m=Math.ceil(Math.max(...f))+1,v=En/Math.max(12,m-y),x=S=>wn+En-(S-y+1)*v,I=S=>{let w=Lh(t.key||[],{n:Math.round(S*960),d:960});return w&&w.data.key};s.font=`20px ${Nt}`,s.textAlign="right",s.textBaseline="middle";for(let S=y;S<=m;S++){let w=x(S)+v/2;if(l==="degree"){let M=I(d),b=M?mo.indexOf(bh(M.tonic,4).step):0,P=((S-b)%7+7)%7;s.strokeStyle=P===0?Ue.line:P===4?Ue.rule:Ue.faint,s.lineWidth=P===0?2:1,s.beginPath(),s.moveTo(vi,w),s.lineTo(a-mr,w),s.stroke(),s.fillStyle=P===0?Ue.ink:Ue.soft,s.fillText(`${P+1}̂`,vi-12,w)}else{let M=(S%12+12)%12;[1,3,6,8,10].includes(M)&&(s.fillStyle="rgba(160,140,110,.08)",s.fillRect(vi,x(S),a-vi-mr,v)),M===0&&(s.strokeStyle=Ue.rule,s.lineWidth=1.5,s.beginPath(),s.moveTo(vi,x(S)+v),s.lineTo(a-mr,x(S)+v),s.stroke(),s.fillStyle=Ue.soft,s.fillText(`C${Math.floor(S/12)-1}`,vi-12,x(S)+v/2))}}for(let S=h;S<u;S++){let w=c[S],M=g(me(w.at)),b=e.meter.reduce((N,B)=>me(B.at)<=me(w.at)?B:N,e.meter[0]),P=b.den>=8&&b.num%3===0?b.num/3:b.num;s.strokeStyle=Ue.line,s.lineWidth=2,s.beginPath(),s.moveTo(M,wn-6),s.lineTo(M,wn+En),s.stroke(),s.strokeStyle=Ue.faint,s.lineWidth=1;for(let N=1;N<P;N++){let B=g(me(w.at)+me(w.dur)*N/P);s.beginPath(),s.moveTo(B,wn),s.lineTo(B,wn+En),s.stroke()}s.fillStyle=Ue.soft,s.font=`24px ${Nt}`,s.textAlign="left",s.textBaseline="alphabetic",s.fillText(String(w.n),M+6,Ad),o.push({x:M,y:Ad-30,w:g(S+1<c.length?me(c[S+1].at):p)-M,h:40,kind:"time",t:me(w.at),bar:w.n})}for(let S of _){let w=Math.max(vi,g(me(S.onset))),M=Math.min(a-mr,g(me(S.onset)+Math.max(me(S.dur),1/64))),b=x(Rd(S,l)),P=i?i[S.id]:"other",N=Math.max(6,v*(l==="degree"?.86:.92)),B=Sn[P]||Sn.other;s.fillStyle=B,s.globalAlpha=S.grace?.7:.92;let G=Math.min(8,N/2),W=Math.max(S.grace?10:6,M-w-2);s.beginPath(),s.roundRect(w+1,b+(v-N)/2,W,N,G),s.fill(),s.globalAlpha=1,P==="root"&&(s.strokeStyle="#0d1f4a",s.lineWidth=3,s.stroke()),l==="degree"&&S.pitch.alter&&(s.fillStyle=Ue.page,s.font=`600 ${Math.round(N*.8)}px ${Nt}`,s.textAlign="left",s.textBaseline="middle",s.fillText(S.pitch.alter>0?"♯":"♭",w+6,b+v/2)),o.push({x:w,y:b+(v-N)/2,w:W,h:N,kind:"note",note:S,fn:P})}let E=S=>me(S.end)>d+1e-9&&me(S.start)<p-1e-9,A=S=>[Math.max(vi,g(me(S.start))),Math.min(a-mr,g(me(S.end)))];for(let S of(t.harmony||[]).filter(E)){if(S.data.none)continue;let[w,M]=A(S),b=gi(S,Ft);s.strokeStyle=Ue.faint,s.lineWidth=1,s.strokeRect(w+1,fs,M-w-2,76),s.fillStyle=b?Ue.ink:Ue.pencil,s.textAlign="left",s.textBaseline="middle",(me(S.start)>=d-1e-9||M-w>120)&&$i(s,S.label+(b?"":"?"),w+10,fs+38,M-w-14,40,b?"600":""),S.source==="pinned"&&(s.fillStyle=Ue.accent,s.beginPath(),s.arc(M-12,fs+12,6,0,7),s.fill()),o.push({x:w,y:fs,w:M-w,h:76,kind:"span",span:S})}for(let S of(t.key||[]).filter(E)){let[w,M]=A(S),b=gi(S,Ft);s.fillStyle=Ja(S.data.key,b?.95:.45),s.fillRect(w,eo,M-w,46),s.fillStyle=Ue.ink,s.textAlign="left",s.textBaseline="middle",$i(s,`${Ss(S.data.key)} ${S.data.key.mode}${b?"":" ?"}`,w+12,eo+23,M-w-16,28,"600"),o.push({x:w,y:eo,w:M-w,h:46,kind:"span",span:S})}for(let S of(t.phrase||[]).filter(E)){let[w,M]=A(S),b=gi(S,Ft),P=40;s.strokeStyle=b?Ue.ink:Ue.pencil,s.lineWidth=3,b||s.setLineDash([10,7]),s.beginPath(),s.moveTo(w+4,P+(me(S.start)>=d?26:0)),s.lineTo(w+4,P),s.lineTo(M-4,P),me(S.end)<=p+1e-9&&s.lineTo(M-4,P+26),s.stroke(),s.setLineDash([]),s.fillStyle=Ue.soft,s.font=`italic 24px ${Nt}`,s.textAlign="left",s.textBaseline="alphabetic",me(S.start)>=d-1e-9&&s.fillText(S.label,w+14,P+30),o.push({x:w,y:P-10,w:M-w,h:44,kind:"span",span:S})}for(let S of(t.cadence||[]).filter(w=>me(w.start)>=d-1e-9&&me(w.start)<p)){let w=g(me(S.start)),M=gi(S,Ft);s.globalAlpha=M?1:.55,s.fillStyle=S.label==="HC"?"#8a5a1a":Ue.accent,s.font=`600 30px ${Nt}`,s.textAlign="center",s.textBaseline="alphabetic",s.fillText(S.label+(M?"":"?"),w,92),s.fillRect(w-1.5,96,3,En+14),s.globalAlpha=1,o.push({x:w-40,y:62,w:80,h:40,kind:"span",span:S})}return{canvas:r,regions:o,xOf:g,t0:d,t1:p,b0:h,b1:u,top:wn,notesH:En}}var Ld=Math.hypot;function Ud(r,e,t,i){let[n,s,a]=i.a,[o,l,c]=i.b,h=o-n,u=l-s,d=c-a,p=r-n,g=e-s,_=t-a,f=h*h+u*u+d*d,y=f?Math.max(0,Math.min(1,(p*h+g*u+_*d)/f)):0,m=p-h*y,v=(g-u*y)/i.flat,x=_-d*y;return Math.sqrt(m*m+v*v+x*x)-(i.ra+(i.rb-i.ra)*y)}var qt=(r,e,t={})=>({a:r,b:r,ra:e,rb:e,k:.03,flat:1,part:"body",...t}),Ji=(r,e,t,i,n={})=>({a:r,b:e,ra:t,rb:i,k:.02,flat:1,part:"body",...n});function yi(r,e,t,i){let n=1e3;for(let s of r){let a=Ud(e,t,i,s),o=Math.max(s.k-Math.abs(n-a),0)/s.k;n=Math.min(n,a)-o*o*s.k*.25}return Math.max(n,-t)}function Dd(r,e,t,i){let n={},s=0;for(let a of r){let o=Math.exp(-Math.max(0,Ud(e,t,i,a))/.011);n[a.part]=Math.max(n[a.part]||0,o)}for(let a in n)s+=n[a];for(let a in n)n[a]/=s;return n}function Nd(...r){let e={pos:[],nor:[],idx:[]};for(let t of r){let i=e.pos.length/3;for(let n of t.pos)e.pos.push(n);for(let n of t.nor)e.nor.push(n);for(let n of t.idx)e.idx.push(n+i)}return e}function Zc(r,e,t,i){let n=[0,1,2].map(y=>Math.ceil((t[y]-e[y])/i)+1),[s,a,o]=n,l=(y,m,v)=>(v*a+m)*s+y,c=new Float32Array(s*a*o),h=new Int32Array(s*a*o).fill(-1),u=5,d=i*u*.9+.004;for(let y=0;y<o;y+=u)for(let m=0;m<a;m+=u)for(let v=0;v<s;v+=u){let x=yi(r,e[0]+(v+2)*i,e[1]+(m+2)*i,e[2]+(y+2)*i),I=Math.abs(x)>d;for(let E=y;E<Math.min(o,y+u);E++)for(let A=m;A<Math.min(a,m+u);A++)for(let S=v;S<Math.min(s,v+u);S++)c[l(S,A,E)]=I?x:yi(r,e[0]+S*i,e[1]+A*i,e[2]+E*i)}let p=[],g=[],_=[];for(let y=0;y<o-1;y++)for(let m=0;m<a-1;m++)for(let v=0;v<s-1;v++){let x=0,I=0,E=0,A=0,S=0,w=[];for(let q=0;q<8;q++){let oe=c[l(v+(q&1),m+(q>>1&1),y+(q>>2))];w.push(oe),oe<0&&(x|=1<<q)}if(x===0||x===255)continue;for(let q=0;q<8;q++)for(let oe of[1,2,4]){if(q&oe)continue;let ae=w[q],J=w[q|oe];if(ae<0==J<0)continue;let ie=ae/(ae-J);E+=(q&1)+(oe===1?ie:0),A+=(q>>1&1)+(oe===2?ie:0),S+=(q>>2)+(oe===4?ie:0),I++}let M=e[0]+(v+E/I)*i,b=e[1]+(m+A/I)*i,P=e[2]+(y+S/I)*i,N=i*.5,B=yi(r,M+N,b,P)-yi(r,M-N,b,P),G=yi(r,M,b+N,P)-yi(r,M,b-N,P),W=yi(r,M,b,P+N)-yi(r,M,b,P-N),$=Ld(B,G,W)||1;B/=$,G/=$,W/=$,h[l(v,m,y)]=p.length/3,p.push(M,b,P),g.push(B,G,W)}let f=(y,m,v,x,I)=>{y<0||m<0||v<0||x<0||(I?_.push(y,v,m,y,x,v):_.push(y,m,v,y,v,x))};for(let y=1;y<o-1;y++)for(let m=1;m<a-1;m++)for(let v=1;v<s-1;v++){let x=c[l(v,m,y)]<0;x!==c[l(v+1,m,y)]<0&&f(h[l(v,m-1,y-1)],h[l(v,m,y-1)],h[l(v,m,y)],h[l(v,m-1,y)],!x),x!==c[l(v,m+1,y)]<0&&f(h[l(v-1,m,y-1)],h[l(v-1,m,y)],h[l(v,m,y)],h[l(v,m,y-1)],!x),x!==c[l(v,m,y+1)]<0&&f(h[l(v-1,m-1,y)],h[l(v,m-1,y)],h[l(v,m,y)],h[l(v-1,m,y)],!x)}return{pos:p,nor:g,idx:_}}var Oi=(r,e,t)=>[e*Math.cos(r*Math.PI/180),t,-e*Math.sin(r*Math.PI/180)];var _i=(r,e,t=1)=>r.map((i,n)=>i+e[n]*t),to=r=>{let e=Ld(...r)||1;return r.map(t=>t/e)},Pd=(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]];function Id(r,e,t){let i=0;for(let n=0;n<40&&yi(r,..._i(e,t,i))<0;n++)i+=.004;for(let n=0;n<12;n++){let s=.004/2**(n+1);i+=yi(r,..._i(e,t,i))<0?s:-s}return _i(e,t,i)}function Od(r){let e=r==="dog",t=e?1.28:1,i=(e?.118:.104)*t,n=[],s=e?[[205,.08],[160,.092],[115,.086],[70,.088],[25,.084],[-8,.068]]:[[205,.066],[165,.075],[120,.073],[75,.069],[30,.064],[-5,.054]];s.forEach(([f,y],m)=>{m&&n.push(Ji(Oi(s[m-1][0],i,s[m-1][1]*t*.86),Oi(f,i,y*t*.86),s[m-1][1]*t*.92,y*t*.92,{k:.03*t}))}),n.push(qt(Oi(188,i*1.02,(e?.078:.07)*t),(e?.066:.06)*t,{k:.04}),qt(Oi(8,i*1,(e?.062:.056)*t),(e?.056:.05)*t,{k:.04}),qt([0,.028*t,0],(e?.075:.07)*t,{k:.05,flat:.6}));let a=e?[.104*t,.078*t,.118*t]:[.08,.079,.1],o=to(e?[-.62,-.3,.72]:[-.66,-.22,.72]),l=to(Pd([0,1,0],o)),c=Pd(o,l),h=(f,y,m)=>_i(_i(_i(a,o,f*t),l,y*t),c,m*t),u={part:"head",k:.012};if(n.push(Ji(Oi(-5,i,.06*t),a,.05*t,.042*t,{k:.03,part:"neck"})),e){n.push(qt(a,.05*t,u),Ji(h(.02,0,-.006),h(.082,0,-.018),.036*t,.023*t,{...u,k:.02}),qt(h(.101,0,-.009),.0115*t,{part:"nose",k:.004}));for(let f of[-1,1])n.push(Ji(h(-.012,f*.044,.03),h(0,f*.06,-.034),.014*t,.022*t,{part:f<0?"ear0":"ear1",k:.008}),qt(h(.03,f*.018,.022),.014*t,{...u,k:.016}))}else{let f=[qt(a,.054,u),qt(h(.01,0,-.008),.043,{...u,k:.03,flat:.85}),qt(h(.039,0,-.017),.017,{...u,k:.016})];for(let v of[-1,1])f.push(qt(h(.042,v*.011,-.019),.012,{...u,k:.01}),qt(h(.014,v*.031,-.01),.027,{...u,k:.02}));let y=to(_i(o,c,.25)),m=Id(f,a,y);n.push(...f,qt(_i(m,y,.0025),.0058,{part:"nose",k:.004}));for(let v of[-1,1])n.push(Ji(h(-.004,v*.03,.032),h(-.01,v*.043,.074),.022,.003,{part:v<0?"ear0":"ear1",k:.012,flat:1}))}for(let f of[0,1])n.push(Ji([.1*t,.026*t,(.09+f*.026)*t],[-.005*t,.019*t,(.128+f*.03)*t],.024*t,(e?.024:.019)*t,{part:"paw",k:.014}));n.push(Ji(Oi(205,i*1.1,.03*t),Oi(248,i*1.02,.02*t),.034*t,.02*t,{part:"paw",k:.02}));let d=(e?[[212,1.2],[228,1.42],[246,1.6],[262,1.72]]:[[210,1.2],[226,1.42],[244,1.54],[262,1.6],[280,1.6],[298,1.52]]).map(([f,y])=>Oi(f,i*y,(e?.03:.022)*t));d.forEach((f,y)=>{if(y){let m=y/(d.length-1),v=(e?.027-.004*m:.021-.006*m)*t;n.push(Ji(d[y-1],f,v,v*.95,{part:m>.55?"tip":"tail",k:.014}))}});let p=new Set(["head","nose","ear0","ear1"]),g=n.find(f=>f.part==="nose");return{eyes:[-1,1].map(f=>{let y=to(_i(_i(o,l,f*.43),c,.42));return{at:Id(n.filter(m=>m.part==="head"),a,y),out:y}}),list:n,nose:{at:g.a,r:g.ra},skull:n.filter(f=>p.has(f.part)),trunk:n.filter(f=>!p.has(f.part)),head:a,look:o,side:l,top:c,on:h,S:t,neck:Oi(-2,i*.95,.06*t),tail:d[Math.floor(d.length/2)],lo:[-.28*t,-.03,-.25*t],hi:[.28*t,.2*t,.27*t]}}var u0=new T(.12,He+.006,-1.92),Ot=r=>Math.max(0,Math.min(1,r)),$c=r=>r*r*(3-2*r),d0={cat:{base:"#cf8547",dark:"#94542a",light:"#f6ead8",nose:"#e0938c",eye:"#a9c14e",fur:.0068},dog:{base:"#b98748",dark:"#8a5c2a",light:"#e3c590",nose:"#1c1512",eye:"#3a2412",fur:.015}},io=class{constructor(e,t,i){this.scene=e,this.kind=t,this.awake=0,this.goal=0,this.t=Math.random()*20,this.ear=0,this.earAt=4;let n=this.body=Od(t),s=d0[t],a=S=>new Se(s[S]),o={base:a("base"),dark:a("dark"),light:a("light"),nose:a("nose")},l=Zc(n.trunk,n.lo,n.hi,.0075*n.S),c=Zc(n.skull,n.head.map(S=>S-.12*n.S),n.head.map(S=>S+.13*n.S),.006*n.S),h=Nd(l,c),u=h.pos.length/3,d=l.pos.length/3,p=new Float32Array(u*3),g=new Float32Array(u*4),_=new Float32Array(u),f=new Se;for(let S=0;S<u;S++){let[w,M,b]=h.pos.slice(S*3,S*3+3),P=Dd(S<d?n.trunk:n.skull,w,M,b),N=(P.head||0)+(P.nose||0)+(P.ear0||0)+(P.ear1||0),B=Math.atan2(-b,w),G=Math.hypot(w,b),W=t==="cat"?.8*$c(Ot(Math.sin(B*15+Math.sin(M*60)*.8+G*14)*1.1-.25)):.25*Ot(Math.sin(B*5+M*40));if(f.copy(o.base).lerp(o.dark,W*(N>.5?.35:.85)*Ot(M/(.05*n.S))),t==="cat"&&N>.5){let oe=(w-n.head[0])*n.side[0]+(b-n.head[2])*n.side[2],ae=M-n.head[1];f.lerp(o.dark,Ot(Math.sin(oe*320)*1.5)*Ot(ae/.03)*.7)}f.lerp(o.light,Ot((P.paw||0)*.9+(P.tip||0)*(t==="cat"?.25:.5)+Ot(1-M/(.03*n.S))*.5));let $=N*Ot(1.6-Math.hypot(...n.on(t==="dog"?.07:.046,0,-.024).map((oe,ae)=>oe-[w,M,b][ae]))/((t==="dog"?.024:.03)*n.S));f.lerp(o.light,$*.85);let q=S<d?0:Ot(3-2.1*(Math.hypot(...n.nose.at.map((oe,ae)=>oe-[w,M,b][ae]))/n.nose.r));f.lerp(o.nose,q),t==="dog"&&f.lerp(o.dark,((P.ear0||0)+(P.ear1||0))*.55),p.set([f.r,f.g,f.b],S*3),g.set([S<d?.5*(P.neck||0)*Ot(1-Math.hypot(w-n.head[0],M-n.head[1],b-n.head[2])/(.075*n.S)):1,P.tip||0,P.ear0||0,P.ear1||0],S*4),_[S]=(1-q)*(1-(t==="cat"?.72:.55)*Ot(N))*(1-.35*(P.paw||0))}let y=new Da;y.setAttribute("position",new Te(h.pos,3)),y.setAttribute("normal",new Te(h.nor,3)),y.setAttribute("color",new rt(p,3)),y.setAttribute("aPart",new rt(g,4)),y.setAttribute("aBare",new rt(_,1)),y.setAttribute("aLayer",new Sa(Float32Array.from({length:i},(S,w)=>w/(i-1)),1)),y.setIndex(h.idx),y.instanceCount=i,this.u={uBreath:{value:0},uHead:{value:new Ee},uTip:{value:0},uEar:{value:new ne},uFur:{value:s.fur}};let m=new qe({vertexColors:!0,roughness:.95,fog:!1});m.onBeforeCompile=S=>{Object.assign(S.uniforms,this.u),S.vertexShader=S.vertexShader.replace("void main() {",`attribute float aLayer, aBare; attribute vec4 aPart; uniform float uBreath, uTip, uFur; uniform vec2 uEar; uniform mat4 uHead; varying vec3 vRest; varying float vLayer, vBare;
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
        transformed += normalize(objectNormal + (along * -0.55 + vec3(0.0, -0.5, 0.0)) * aLayer) * l;`),S.fragmentShader=S.fragmentShader.replace("void main() {",`varying vec3 vRest; varying float vLayer, vBare;
        float f3(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
        void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = vRest / ${t==="cat"?"0.0019":"0.0026"}, i = floor(c); float long_ = f3(i), soft = f3(floor(vRest / 0.011) + 9.0);
          if (vLayer > 0.01 && (vLayer > (0.25 + 0.75 * long_) * (0.8 + 0.2 * soft) || length(fract(c) - 0.5) > 0.78 - 0.5 * vLayer)) discard;
          if (vLayer > 0.1 && vBare < 0.15) discard;
          diffuseColor.rgb *= mix(1.0, (0.5 + 0.5 * vLayer) * (0.84 + 0.3 * long_), smoothstep(0.12, 0.45, vBare)); }  // (short fur: no deep shade between the hairs)`)},this.mesh=new ge(y,m),y.boundingSphere=new Vt(new T(0,.08,0),.4*n.S),this.group=new ot,this.group.position.copy(u0),this.group.rotation.y=-.15,this.group.add(this.mesh),this.eyes=new ot,this.lids=[],this.balls=[],this.group.add(this.eyes);let v=t==="cat";for(let[S,w]of[[0,-1],[1,1]]){let M=v?new T(...n.eyes[S].at):new T(...n.on(.047,w*.0215,.013)),b=M.clone().sub(new T(...n.head)).normalize();if(!v){let oe=new ge(new Dt(.0085*n.S,.0012*n.S,6,14,Math.PI),new qe({color:"#2a140a",roughness:1,fog:!1}));oe.position.copy(M).addScaledVector(b,.0055),oe.quaternion.setFromUnitVectors(new T(0,0,1),b),oe.rotateZ(Math.PI),this.eyes.add(oe),this.lids.push(oe);let ae=new ge(new Xt(.0074*n.S,14,10),new qe({color:s.eye,roughness:.08,emissive:s.eye,emissiveIntensity:.25,fog:!1}));ae.position.copy(M).addScaledVector(b,.0015),ae.scale.setScalar(.001),this.eyes.add(ae),this.balls.push(ae);let J=new ge(new Xt(.0048*n.S,10,8),new dt({color:"#0a0604",fog:!1}));J.position.copy(b).multiplyScalar(.0063*n.S),J.scale.set(.95,1.1,.5),J.quaternion.setFromUnitVectors(new T(0,0,1),b),ae.add(J);continue}let P=new T(...n.top),N=new T().crossVectors(P,b).normalize(),B=new T().crossVectors(b,N).normalize(),G=new zt().setFromRotationMatrix(new Ee().makeBasis(N,B,b)),W=new ge(new Dt(.0078,.001,6,16,2.3),new qe({color:"#4a2a16",roughness:1,fog:!1}));W.position.copy(M).addScaledVector(b,.0016).addScaledVector(B,.0052),W.quaternion.copy(G),W.rotateZ(-Math.PI/2-1.15),this.eyes.add(W),this.lids.push(W);let $=new ot;$.position.copy(M).addScaledVector(b,.0034),$.quaternion.copy(G),$.scale.setScalar(.001),$.userData.flat=.94,this.eyes.add($),this.balls.push($);let q=(oe,ae,J,ie=!0)=>{let he=new ge(new di(oe,32),ie?new dt({color:ae,fog:!1}):new qe({color:ae,roughness:.35,fog:!1}));return he.position.z=J,$.add(he),he};q(.0092,"#3a2210",0),q(.0082,s.eye,2e-4,!1),q(.0069,"#120a06",4e-4),q(.0022,"#fffdf4",6e-4).position.set(-.0024*w,.0026,6e-4),q(.0011,"#fffdf4",6e-4).position.set(.0022*w,-.0024,6e-4)}this.touch=new ge(new Xt(.2*n.S,12,8),new dt({visible:!1})),this.touch.scale.y=.7,this.group.add(this.touch);let x=document.createElement("canvas");x.width=x.height=64;let I=x.getContext("2d"),E=I.createRadialGradient(32,32,10,32,32,32);E.addColorStop(0,"rgba(0,0,0,.6)"),E.addColorStop(1,"rgba(0,0,0,0)"),I.fillStyle=E,I.fillRect(0,0,64,64);let A=new ge(new lt(.56*n.S,.5*n.S).rotateX(-Math.PI/2),new dt({map:new Tt(x),transparent:!0,depthWrite:!1,fog:!1}));A.position.set(0,.001,.02),this.group.add(A),e.add(this.group),this.neck=new T(...n.neck).lerp(new T(...n.head),.72)}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&(e.geometry.dispose(),e.material.map&&e.material.map.dispose(),e.material.dispose())})}hit(e){let t=new jt(e.origin,e.direction);this.touch.updateWorldMatrix(!0,!1),this.touch.material.visible=!0;let i=t.intersectObject(this.touch)[0];return this.touch.material.visible=!1,i?i.distance:null}pat(){this.goal=1,this.until=this.t+4.5,this.ear=1}update(e){this.t+=e,this.goal&&this.t>this.until&&(this.goal=0),this.awake+=(this.goal-this.awake)*(1-Math.exp(-e*3.2)),this.u.uBreath.value=(.5+.5*Math.sin(this.t*(1.5+this.awake)))*.0055,this.t>this.earAt&&(this.earAt=this.t+3+Math.random()*7,this.ear=1,this.which=Math.random()<.5),this.ear=Math.max(0,this.ear-e*3.2);let t=Math.sin(this.ear*Math.PI*3)*this.ear;this.u.uEar.value.set(this.which?t:0,this.which?0:t),this.u.uTip.value=Math.max(0,Math.sin(this.t*.7)-.55)*2*Math.sin(this.t*4)+this.awake*Math.sin(this.t*(this.kind==="dog"?11:3))*.9;let i=$c(Ot(this.awake)),n=this.u.uHead.value,s=.6*i+Math.sin(this.t*.9)*.18*i;n.makeTranslation(this.neck.x,this.neck.y+.022*i,this.neck.z).multiply(new Ee().makeRotationY(s)).multiply(new Ee().makeRotationAxis(new T(...this.body.side),-.42*i+Math.sin(this.t*1.5)*.006)).multiply(new Ee().makeTranslation(-this.neck.x,-this.neck.y,-this.neck.z)),this.eyes.matrixAutoUpdate=!1,this.eyes.matrix.copy(n),this.eyes.matrixWorldNeedsUpdate=!0;let a=$c(Ot(this.awake*1.6-.3)),o=this.t%3.7<.14?.1:1;for(let l of this.lids)l.visible=a<.35;for(let l of this.balls)l.visible=a>.3,l.scale.set(1,Math.max(.05,a*o)*(l.userData.flat||1),1)}};var p0="musicroom",Jc="pieces";function f0(){return new Promise((r,e)=>{let t=indexedDB.open(p0,1);t.onupgradeneeded=()=>t.result.createObjectStore(Jc,{keyPath:"id"}),t.onsuccess=()=>r(t.result),t.onerror=()=>e(t.error)})}var Bd=async(r,e)=>{let t=await f0();return new Promise((i,n)=>{let s=t.transaction(Jc,r),a=e(s.objectStore(Jc));s.oncomplete=()=>i(a&&a.result),s.onerror=()=>n(s.error)})},Fd=()=>Bd("readonly",r=>r.getAll()).catch(()=>[]),kd=r=>Bd("readwrite",e=>e.put(r));function no(r){try{return JSON.parse(localStorage.getItem(`musicroom.pins.${r}`)||"[]")}catch{return[]}}function Kc(r,e){localStorage.setItem(`musicroom.pins.${r}`,JSON.stringify(e))}function zd(){try{return JSON.parse(localStorage.getItem("musicroom.prefs")||"{}")}catch{return{}}}function ro(r){localStorage.setItem("musicroom.prefs",JSON.stringify(r))}function Hd(r){let e=(i,n,s)=>{let a=i&240;a===144&&s>0?r(!0,n,s):(a===128||a===144&&s===0)&&r(!1,n,0)};window.musicRoomMidi=e;let t={kind:"none",inputs:[]};return navigator.requestMIDIAccess&&navigator.requestMIDIAccess().then(i=>{let n=()=>{t.inputs=[];for(let s of i.inputs.values())s.onmidimessage=a=>e(a.data[0],a.data[1],a.data[2]),t.inputs.push(s.name);t.kind=t.inputs.length?"web":"none"};i.onstatechange=n,n()}).catch(()=>{}),t}var Qc={a:0,w:1,s:2,e:3,d:4,f:5,t:6,g:7,y:8,h:9,u:10,j:11,k:12,o:13,l:14,p:15,";":16,"'":17};function Vd(r,e){let t=4,i=new Set;addEventListener("keydown",n=>{if(!e()||n.metaKey||n.ctrlKey||n.altKey||n.target.closest("input,select,textarea"))return;let s=n.key.toLowerCase();if(s==="z"){t=Math.max(1,t-1);return}if(s==="x"){t=Math.min(7,t+1);return}!(s in Qc)||i.has(s)||(i.add(s),r(!0,12*(t+1)+Qc[s],90),n.preventDefault())}),addEventListener("keyup",n=>{let s=n.key.toLowerCase();i.has(s)&&(i.delete(s),r(!1,12*(t+1)+Qc[s],0))})}var g0=[6.35,2.23,3.48,2.33,4.38,4.09,2.52,5.19,2.39,3.66,2.29,2.88];function Gd(r,e=null,t=.9){let i;if(e!==null)i=e+1;else{let n=new Array(12).fill(0);for(let l of r)n[l.midi%12]+=l.d||1;let s=-1/0,a=0;for(let l=0;l<12;l++){let c=0;for(let h=0;h<12;h++)c+=n[(h+l)%12]*g0[h];c>s&&(s=c,a=l)}let o=a*7%12;i=(o>6?o-12:o)+1}return r.map(n=>{let s=n.midi%12*7%12,o=[s-12,s,s+12].reduce((l,c)=>Math.abs(c-i)<Math.abs(l-i)?c:l);return i=i*t+o*(1-t),o})}var Wd=(r,e)=>wh(e,r);var Xd=["Acoustic Grand Piano","Bright Piano","Electric Grand","Honky-tonk Piano","Electric Piano 1","Electric Piano 2","Harpsichord","Clavinet","Celesta","Glockenspiel","Music Box","Vibraphone","Marimba","Xylophone","Tubular Bells","Dulcimer","Drawbar Organ","Percussive Organ","Rock Organ","Church Organ","Reed Organ","Accordion","Harmonica","Tango Accordion","Nylon Guitar","Steel Guitar","Jazz Guitar","Clean Guitar","Muted Guitar","Overdrive Guitar","Distortion Guitar","Guitar Harmonics","Acoustic Bass","Fingered Bass","Picked Bass","Fretless Bass","Slap Bass 1","Slap Bass 2","Synth Bass 1","Synth Bass 2","Violin","Viola","Cello","Contrabass","Tremolo Strings","Pizzicato Strings","Harp","Timpani","Strings","Slow Strings","Synth Strings 1","Synth Strings 2","Choir Aahs","Voice Oohs","Synth Voice","Orchestra Hit","Trumpet","Trombone","Tuba","Muted Trumpet","French Horn","Brass Section","Synth Brass 1","Synth Brass 2","Soprano Sax","Alto Sax","Tenor Sax","Baritone Sax","Oboe","English Horn","Bassoon","Clarinet","Piccolo","Flute","Recorder","Pan Flute","Blown Bottle","Shakuhachi","Whistle","Ocarina","Square Lead","Saw Lead","Calliope Lead","Chiff Lead","Charang","Voice Lead","Fifths Lead","Bass Lead","New Age Pad","Warm Pad","Polysynth","Choir Pad","Bowed Pad","Metallic Pad","Halo Pad","Sweep Pad","Rain","Soundtrack","Crystal","Atmosphere","Brightness","Goblins","Echoes","Sci-fi","Sitar","Banjo","Shamisen","Koto","Kalimba","Bagpipe","Fiddle","Shanai","Tinkle Bell","Agogo","Steel Drums","Woodblock","Taiko Drum","Melodic Tom","Synth Drum","Reverse Cymbal","Fret Noise","Breath Noise","Seashore","Bird Tweet","Telephone","Helicopter","Applause","Gunshot"];function v0(r){let e=0;return{u8:()=>r[e++],u16:()=>r[e++]<<8|r[e++],u32:()=>(r[e++]<<24>>>0)+(r[e++]<<16)+(r[e++]<<8)+r[e++],vlq:()=>{let o=0,l;do l=r[e++],o=o<<7|l&127;while(l&128&&e<r.length);return o},str:o=>{let l="";for(let c=0;c<o;c++)l+=String.fromCharCode(r[e++]);return l},get p(){return e},set p(o){e=o},get end(){return e>=r.length}}}function y0(r){let e=r instanceof Uint8Array?r:new Uint8Array(r),t=v0(e);if(t.str(4)!=="MThd")throw new Error("not a MIDI file");let i=t.u32(),n=t.u16(),s=t.u16(),a=t.u16();if(t.p=8+i,a&32768)throw new Error("SMPTE-timed MIDI is not supported");let o=[];for(let l=0;l<s&&!t.end;l++){let c=t.str(4),h=t.u32(),u=t.p+h,d=[];if(c!=="MTrk"){t.p=u;continue}let p=0,g=0;for(;t.p<u;){p+=t.vlq();let _=e[t.p];if(_&128?(t.p++,_<240&&(g=_)):_=g,_===255){let f=t.u8(),y=t.vlq(),m=t.p;d.push({tick:p,meta:f,data:e.subarray(m,m+y)}),t.p=m+y}else if(_===240||_===247)t.p+=t.vlq();else{let f=_&240,y=_&15,m=t.u8(),v=f===192||f===208?0:t.u8();d.push({tick:p,kind:f,ch:y,a:m,c:v})}}t.p=u,o.push(d)}return{format:n,division:a,tracks:o}}function _0(r,e){for(let t of[8,12,16,24,32,48,64,96]){let i=4*e/t,n=i*.12;if(r.filter(a=>{let o=a%i;return Math.min(o,i-o)<=n}).length>=r.length*.95)return t}return null}function qd(r,e={}){let t=y0(r),i=t.division,n=[],s=[],a=[],o=new Map,l=[],c=m=>nn(m,4*i);t.tracks.forEach((m,v)=>{let x=null,I=new Map,E=new Array(16).fill(0);for(let A of m)if(A.meta===81)n.push({at:c(A.tick),bpm:6e7/(A.data[0]<<16|A.data[1]<<8|A.data[2])});else if(A.meta===88)s.push({at:c(A.tick),num:A.data[0],den:2**A.data[1]});else if(A.meta===89)a.push({at:c(A.tick),fifths:A.data[0]<<24>>24,mode:A.data[1]?"minor":"major"});else if(A.meta===3)x=new TextDecoder().decode(A.data).trim();else if(A.kind===192)E[A.ch]=A.a;else if(A.kind===144&&A.c>0){let S=`${A.ch}:${A.a}`;I.has(S)||I.set(S,[]),I.get(S).push({tick:A.tick,vel:A.c})}else if(A.kind===128||A.kind===144&&A.c===0){let S=`${A.ch}:${A.a}`,w=I.get(S);if(!w||!w.length)continue;let M=w.shift(),b=`${v}:${A.ch}`;o.has(b)||o.set(b,{id:o.size,name:x||(A.ch===9?"Drums":Xd[E[A.ch]]||`Track ${v+1}`),program:E[A.ch],channel:A.ch,percussion:A.ch===9}),l.push({part:o.get(b).id,midi:A.a,on:M.tick,off:Math.max(A.tick,M.tick+1),vel:M.vel,percussion:A.ch===9})}for(let A of o.values())A.name.startsWith("Track")&&x&&(A.name=x)}),l.sort((m,v)=>m.on-v.on||m.midi-v.midi);let h=_0(l.map(m=>m.on),i),u=h?4*i/h:1,d=m=>h?Math.round(m/u)*u:m;n.sort((m,v)=>me(m.at)-me(v.at)),s.sort((m,v)=>me(m.at)-me(v.at));let p=n.length?n[0].bpm:120,g=l.filter(m=>!m.percussion),_=Gd(g.map(m=>({midi:m.midi,d:m.off-m.on})),a.length?a[0].fifths:null),f=0,y=l.map(m=>{let v=d(m.on),x=Math.max(v+(h?u/2:1),d(m.off)),I=m.percussion?0:_[f++];return{part:m.part,staff:1,voice:1,pitch:Wd(m.midi,I),onset:c(v),dur:c(x-v),grace:!1,vel:m.vel,off:(m.on-v)/i*(60/p),percussion:m.percussion}});return xs({parts:[...o.values()],meter:s.length?jd(s):[],keys:a,tempo:n.length?jd(n):[{at:xi,bpm:120}],notes:y,...e,grid:h})}var jd=r=>{let e=new Map;for(let t of r)e.set(`${t.at.n}/${t.at.d}`,t);return[...e.values()]};var x0={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"},Yd=r=>r.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi,(e,t)=>t[0]==="#"?String.fromCodePoint(t[1]==="x"||t[1]==="X"?parseInt(t.slice(2),16):Number(t.slice(1))):x0[t]??e);function Zd(r){let e={name:"#root",attrs:{},children:[],text:""},t=[e],i=/<!--[\s\S]*?-->|<!\[CDATA\[([\s\S]*?)\]\]>|<\?[\s\S]*?\?>|<!DOCTYPE[\s\S]*?>|<(\/?)([\w:.-]+)((?:\s+[\w:.-]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>|([^<]+)/g,n;for(;n=i.exec(r);){let s=t.at(-1);if(n[1]!==void 0){s.text+=n[1];continue}if(n[3]){if(n[2]){t.length>1&&t.pop();continue}let a={name:n[3],attrs:{},children:[],text:""};for(let o of n[4].matchAll(/([\w:.-]+)\s*=\s*("([^"]*)"|'([^']*)')/g))a.attrs[o[1]]=Yd(o[3]??o[4]);s.children.push(a),n[5]||t.push(a);continue}n[6]!==void 0&&(s.text+=Yd(n[6]))}return e}var gr=(r,e)=>r?r.children.filter(t=>t.name===e):[],yt=(r,e)=>r&&r.children.find(t=>t.name===e)||null,ft=(r,e)=>{let t=e?yt(r,e):r;return t?t.text.trim():null};async function $d(r){let e=r instanceof Uint8Array?r:new Uint8Array(r),t=new DataView(e.buffer,e.byteOffset,e.byteLength),i=e.length-22;for(;i>=0&&t.getUint32(i,!0)!==101010256;)i--;if(i<0)throw new Error("not a zip file");let n=t.getUint16(i+10,!0),s=t.getUint32(i+16,!0),a=new Map;for(let o=0;o<n&&t.getUint32(s,!0)===33639248;o++){let l=t.getUint16(s+10,!0),c=t.getUint32(s+20,!0),h=t.getUint16(s+28,!0),u=t.getUint16(s+30,!0),d=t.getUint16(s+32,!0),p=t.getUint32(s+42,!0),g=new TextDecoder().decode(e.subarray(s+46,s+46+h)),_=p+30+t.getUint16(p+26,!0)+t.getUint16(p+28,!0),f=e.subarray(_,_+c);a.set(g,{method:l,data:f}),s+=46+h+u+d}return{names:[...a.keys()],async read(o){let l=a.get(o);if(!l)return null;if(l.method===0)return l.data;if(l.method!==8)throw new Error(`zip method ${l.method} is not supported`);let c=new Blob([l.data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(c).arrayBuffer())}}}var M0=r=>Number.isInteger(r)?r*Mh:Math.round(r*53/12);async function Jd(r){let e=await $d(r),t=s=>new TextDecoder().decode(s),i=await e.read("META-INF/container.xml"),n=null;if(i){let s=/full-path\s*=\s*"([^"]+)"/.exec(t(i));s&&(n=s[1])}if(n||(n=e.names.find(s=>/\.(xml|musicxml)$/i.test(s)&&!s.startsWith("META-INF"))),!n)throw new Error("no score in this .mxl");return t(await e.read(n))}function eh(r,e={}){let t=Zd(r),i=yt(t,"score-partwise");if(!i)throw new Error(yt(t,"score-timewise")?"timewise MusicXML is not supported":"not a MusicXML score");let n=ft(yt(i,"work"),"work-title")||ft(i,"movement-title")||e.title,s=gr(yt(i,"identification"),"creator").find(p=>p.attrs.type==="composer"),a=yt(i,"part-list"),o=[],l=[],c=[],h=[],u=[],d=[];for(let p of gr(a,"score-part")){let g=Number(ft(yt(p,"midi-instrument"),"midi-program")||1)-1;o.push({id:o.length,xml:p.attrs.id,name:ft(p,"part-name")||`Part ${o.length+1}`,program:Math.max(0,g)})}return gr(i,"part").forEach((p,g)=>{let _=o.findIndex(S=>S.xml===p.attrs.id),f=_>=0?_:g;o[f]||(o[f]={id:f,name:`Part ${f+1}`,program:0});let y=1,m=xi,v=xi,x=xi,I={num:4,den:4},E=new Map,A=[];for(let S of gr(p,"measure")){v=m;let w=m,M=Number(S.attrs.number)||d.length+1;for(let b of S.children)if(b.name==="attributes"){yt(b,"divisions")&&(y=Number(ft(b,"divisions")));let P=yt(b,"time");P&&yt(P,"beats")&&(I={num:Number(ft(P,"beats").split("+").reduce((B,G)=>B+Number(G),0)),den:Number(ft(P,"beat-type"))},f===0&&c.push({at:m,...I}));let N=yt(b,"key");N&&yt(N,"fifths")&&f===0&&h.push({at:m,fifths:Number(ft(N,"fifths")),mode:ft(N,"mode")||void 0})}else if(b.name==="direction"||b.name==="sound"){let P=b.name==="sound"?b:yt(b,"sound");P&&P.attrs.tempo&&f===0&&u.push({at:m,bpm:Number(P.attrs.tempo)})}else if(b.name==="backup")m=_s(m,nn(Number(ft(b,"duration")),4*y));else if(b.name==="forward")m=ys(m,nn(Number(ft(b,"duration")),4*y)),w=fo(w,m);else if(b.name==="note"){let P=!!yt(b,"chord"),N=!!yt(b,"grace"),B=!!yt(b,"rest"),G=N?xi:nn(Number(ft(b,"duration")||0),4*y),W=P?x:m;if(P||(x=m),!B){let $=yt(b,"pitch")||yt(b,"unpitched");if($){let q=$.name==="pitch",oe=q?ft($,"step"):ft($,"display-step"),ae=Number(q?ft($,"octave"):ft($,"display-octave")),J=Number(ft($,"alter")||0),ie={part:f,staff:Number(ft(b,"staff")||1),voice:Number(ft(b,"voice")||1),pitch:Sh(oe,ae,M0(J)),onset:W,dur:G,grace:N,vel:80,percussion:!q},he=gr(b,"tie").map(le=>le.attrs.type),pe=`${ie.staff}:${ie.voice}:${oe}${ae}:${J}`;if(N)A.push(ie),ie.graceIndex=A.length,l.push(ie);else if(A.length&&(A.forEach((le,U)=>{le.onset=W,le.graceIndex=A.length-U}),A=[]),he.includes("stop")&&E.has(pe)){let le=E.get(pe);le.dur=ys(le.dur,G),he.includes("start")||E.delete(pe)}else l.push(ie),he.includes("start")&&E.set(pe,ie)}}!P&&!N&&(m=ys(m,G),w=fo(w,m))}m=w,f===0&&d.push({n:M,at:v,dur:xh(_s(m,v),xi)>0?_s(m,v):nn(I.num,I.den)})}}),xs({title:n,composer:s?s.text.trim():e.composer,parts:o,meter:c,keys:h,tempo:u.length?u:[{at:xi,bpm:100}],bars:d,notes:l,...e,...n?{title:n}:{}})}async function Kd(r,e){let t=e instanceof Uint8Array?e:new Uint8Array(e),i=String.fromCharCode(...t.subarray(0,4)),n=r.replace(/\.[^.]+$/,"").replace(/[_-]+/g," "),s={id:`user-${r}`,title:n,source:r,licence:"yours (kept in this browser)"};if(i==="MThd")return qd(t,s);if(i==="PK")return eh(await Jd(t),s);let a=new TextDecoder().decode(t);if(/<score-(partwise|timewise)/.test(a.slice(0,4e3)))return eh(a,s);throw new Error(`${r}: not MIDI or MusicXML (modules come in slice 2)`)}var ve=r=>document.getElementById(r),si=(r,e=3200)=>{let t=document.createElement("div");t.textContent=r,ve("toasts").append(t),setTimeout(()=>t.remove(),e)},th=r=>`${Math.round(r*100)}%`,ih=class{constructor(){let e=this.view=new ja(ve("view"));this.shelf=new qa(e.scene),this.piano=new Ya(e.scene,e.env),this.map=new os(e.scene,"map",.5,.5*(bn.h/bn.w),-.36,-.1,0,[bn.w,bn.h]),this.roll=new os(e.scene,"roll",.92,.92*(Tn.h/Tn.w),.25,.26,0,[Tn.w,Tn.h]),this.player=new $a,this.player.onEnd=()=>this.ui(),this.prefs={axis:"chromatic",bars:4,rate:100,...zd()},this.worker=new Worker(new URL("./analysis-worker.js",import.meta.url),{type:"module"}),this.worker.onmessage=i=>this.analysed(i.data),this.job=0,this.s=null,this.a=null,this.rollBar=0,this.live=new Map,setTimeout(()=>{e.pet=new io(e.scene,"cat",e.touch?11:18),e.pet.update(.01)},300),this.bind(),this.books(),this.last=performance.now();let t=i=>{this.real=(i-this.last)/1e3,this.frame(Math.min(.05,this.real)),this.last=i,requestAnimationFrame(t)};requestAnimationFrame(t),mi.onChange=()=>this.soundState(),this.midi=Hd((i,n,s)=>this.key(i,n,s)),Vd((i,n,s)=>this.key(i,n,s),()=>this.view.at==="piano")}async books(){try{let t=await fetch(new URL("./pieces/index.json",import.meta.url));this.index=t.ok?(await t.json()).books:[]}catch{this.index=[]}this.mine=await Fd();let e=this.index.map(t=>({id:t.id,title:t.id.replace("K","K. "),sub:t.title.replace(/^Sonata no\. \d+ in /,""),book:t}));for(let t of this.mine)e.push({id:t.id,title:t.title.slice(0,18),sub:"yours",user:!0,piece:t});this.shelf.fill(e),!this.index.length&&!this.mine.length&&si("The shelf is empty: add a MIDI or MusicXML file")}take(e){if(e.piece){this.open({id:e.piece.id,packed:e.piece.packed});return}let t=e.book,i=ve("book"),n=ve("movements");ve("bookTitle").textContent=`${t.composer}, ${t.title}`,n.replaceChildren(...t.movements.map(s=>{let a=document.createElement("li"),o=document.createElement("button");return o.textContent=`${s.title} · ${s.bars} bars`,o.onclick=()=>{i.close(),this.open({id:s.id})},a.append(o),a})),i.showModal()}async open({id:e,packed:t}){this.player.stop(),this.card(null);try{if(!t){let i=await fetch(new URL(`./pieces/${e}.json`,import.meta.url));if(!i.ok)throw new Error(`${e}: ${i.status}`);t=await i.json()}}catch(i){si(`Could not open it: ${i.message}`);return}this.packed=t,this.s=Dh(t),this.id=e,this.a=null,this.fns=null,this.rollBar=0,this.player.load(this.s),this.player.rate=this.prefs.rate/100,ve("heading").textContent=this.s.title||e,ve("playBtn").disabled=!1,this.analyse(),this.view.go("desk"),this.ui()}analyse(){this.job++,this.t=performance.now(),this.worker.postMessage({id:this.job,packed:this.packed,pins:no(this.id)})}analysed(e){if(e.id===this.job){if(e.error){console.error(e.error),si("The analysis failed: see the console");return}if(this.a=e.a,this.fns=e.fns,console.log(`[analysis] ${this.id}: ${e.a.key.length} keys, ${e.a.harmony.length} chords, ${e.a.cadence.length} cadences, ${e.a.phrase.length} phrases in ${e.ms.toFixed(0)} ms`),this.draw(),this.sel){let t=this.find(this.sel);this.card(t)}}}draw(){!this.s||!this.a||(this.map.drawn(Td(this.map.canvas,this.s,this.a)),this.drawRoll())}drawRoll(){this.s&&this.a&&this.roll.drawn(Cd(this.roll.canvas,this.s,this.a,this.fns,{bar:this.rollBar,bars:Number(this.prefs.bars),axis:this.prefs.axis}))}find(e){return(this.a[e.layer]||[]).find(t=>me(t.start)===e.start)||null}card(e,t){let i=ve("card");if(!e&&!t){i.hidden=!0,this.sel=null;return}if(i.hidden=!1,t){let l=t.note,c=Ms(this.s,l.onset);ve("cardLayer").textContent="note",ve("cardTitle").textContent=Th(l.pitch),ve("cardSure").innerHTML=`<i style="display:inline-block;width:12px;height:12px;border-radius:3px;background:${Sn[t.fn]}"></i> ${Yc[t.fn]}`;let h=(this.a.harmony||[]).find(u=>me(u.start)<=me(l.onset)+1e-9&&me(l.onset)<me(u.end));ve("cardWhy").textContent=`bar ${c.bar}, beat ${c.beat.toFixed(c.beat%1?2:0)}${h?`, over ${h.label}`:""}.`,ve("cardAlts").replaceChildren(),ve("cardUnpin").hidden=!0,this.sel=null,ve("cardPlay").onclick=()=>{hs().then(()=>{us(15,0),ds(15,Math.round(12*(l.pitch.octave+1)+[0,2,4,5,7,9,11]["CDEFGAB".indexOf(l.pitch.step)]+l.pitch.alter/5),90),setTimeout(()=>ps(15,Math.round(12*(l.pitch.octave+1)+[0,2,4,5,7,9,11]["CDEFGAB".indexOf(l.pitch.step)]+l.pitch.alter/5)),700)})};return}this.sel={layer:e.layer,start:me(e.start)};let n=e.source!=="auto"||e.confidence>=(Ft[e.layer]??.9),s=Ms(this.s,e.start),a=Ms(this.s,e.end);ve("cardLayer").textContent=`${e.layer} · bars ${s.bar}–${a.beat>1.001?a.bar:Math.max(s.bar,a.bar-1)}`,ve("cardTitle").textContent=e.label,ve("cardSure").innerHTML=e.source==="pinned"?'<b class="firm">pinned by you</b>':n?`<b class="firm">ink</b>: sure (${th(e.confidence)})`:`<b class="pencil">pencil</b>: a guess (${th(e.confidence)})`,ve("cardWhy").textContent=e.explanation;let o=(e.alternatives||[]).filter(l=>l.data);if(ve("cardAlts").replaceChildren(...o.length?[Object.assign(document.createElement("p"),{textContent:"It could also be:",style:"margin:8px 0 2px;color:#8b8371"})]:[],...o.map(l=>{let c=document.createElement("div"),h=document.createElement("button");return c.className="alt",c.append(Object.assign(document.createElement("span"),{textContent:`${l.label} (${th(l.confidence)})`})),h.textContent="Pin this",h.onclick=()=>this.pin(e,l),c.append(h),c})),e.source==="auto"&&["key","harmony"].includes(e.layer)){let l=document.createElement("button");l.textContent="Pin as it is",l.style.marginTop="6px",l.onclick=()=>this.pin(e,{label:e.label,data:e.data}),ve("cardAlts").append(l)}ve("cardUnpin").hidden=e.source!=="pinned",ve("cardUnpin").onclick=()=>this.unpin(e),ve("cardPlay").onclick=()=>{this.player.seek(me(e.start)),this.player.play().then(()=>{let l=me(e.end),c=setInterval(()=>{(!this.player.playing||this.player.at>=l)&&(this.player.pause(),clearInterval(c),this.ui())},50);this.ui()})}}pin(e,t){let i={...e.data,...t.data},n=Ih(e.layer,e.start,e.end,t.label,{source:"pinned",data:i,explanation:`pinned by you (the analysis said ${e.label})`}),s=no(this.id).filter(a=>!(a.layer===n.layer&&me(a.start)===me(n.start)));s.push(n),Kc(this.id,s),si(`Pinned: ${t.label}. The rest is heard again around it.`),this.analyse()}unpin(e){Kc(this.id,no(this.id).filter(t=>!(t.layer===e.layer&&me(t.start)===me(e.start)))),si("Unpinned"),this.analyse()}key(e,t,i){hs().then(()=>{us(15,0),e?ds(15,t,i):ps(15,t)}),this.piano.press(t,e,e?"#d8b56a":null),e?this.live.set(t,!0):this.live.delete(t)}bind(){let e=this.view,t=ve("view"),i=null;t.addEventListener("pointerdown",n=>{t.setPointerCapture(n.pointerId),i={x:n.clientX,y:n.clientY,t:performance.now(),bar:this.rollBar,moved:!1};let s=e.ray(n.clientX,n.clientY);if(e.at==="piano"||e.at==="desk"){let a=this.piano.hit(s);a!==null&&e.at==="piano"&&(i.key=a,this.key(!0,a,90))}}),t.addEventListener("pointermove",n=>{let s=e.ray(n.clientX,n.clientY);if(i&&Math.hypot(n.clientX-i.x,n.clientY-i.y)>8&&(i.moved=!0),i&&i.moved&&e.at==="read"&&e.reading===this.roll&&this.s){let a=innerWidth/Number(this.prefs.bars),o=Math.max(0,Math.min(this.s.bars.length-1,i.bar-Math.round((n.clientX-i.x)/a)));o!==this.rollBar&&(this.rollBar=o,this.drawRoll())}if(i&&i.key!==void 0){let a=this.piano.hit(s);a!==i.key&&(this.key(!1,i.key,0),a!==null?(i.key=a,this.key(!0,a,90)):delete i.key)}this.hover=e.at==="shelf"?this.shelf.hit(s):null,t.style.cursor=this.hover||e.at==="desk"&&(this.map.at(s)||this.roll.at(s))||e.at==="piano"&&this.piano.hit(s)!==null?"pointer":"default"}),t.addEventListener("pointerup",n=>{let s=i;if(i=null,!!s){if(s.key!==void 0){this.key(!1,s.key,0);return}s.moved||this.touch(e.ray(n.clientX,n.clientY))}}),t.addEventListener("wheel",n=>{if(e.at==="read"&&e.reading===this.roll&&this.s){n.preventDefault();let s=Math.max(0,Math.min(this.s.bars.length-1,this.rollBar+Math.sign(n.deltaY+n.deltaX)));s!==this.rollBar&&(this.rollBar=s,this.drawRoll())}else e.at==="read"&&e.reading&&(n.preventDefault(),e.reading.zoom=Math.max(.35,Math.min(1,(e.reading.zoom||1)*(n.deltaY>0?1.08:.92))))},{passive:!1}),addEventListener("keydown",n=>{n.target.closest("input,select,textarea,dialog")||(n.key==="Escape"&&(ve("card").hidden?e.at==="read"&&this.go("desk"):this.card(null)),n.key===" "&&e.at!=="piano"&&(n.preventDefault(),this.toggle()),e.at==="read"&&e.reading===this.roll&&(n.key==="ArrowRight"||n.key==="ArrowLeft")&&this.step(n.key==="ArrowRight"?1:-1))}),ve("shelfBtn").onclick=()=>this.go("shelf"),ve("deskBtn").onclick=()=>this.go("desk"),ve("pianoBtn").onclick=()=>this.go("piano"),ve("mapBtn").onclick=()=>this.go("read",this.map),ve("rollBtn").onclick=()=>this.go("read",this.roll),ve("playBtn").onclick=()=>this.toggle(),ve("rate").value=this.prefs.rate,ve("rateOut").textContent=`${this.prefs.rate}%`,ve("rate").oninput=()=>{this.prefs.rate=Number(ve("rate").value),ve("rateOut").textContent=`${this.prefs.rate}%`,ro(this.prefs);let n=this.player.playing;this.player.pause(),this.player.rate=this.prefs.rate/100,n&&this.player.play()},ve("axis").value=this.prefs.axis,ve("span").value=String(this.prefs.bars),ve("axis").onchange=()=>{this.prefs.axis=ve("axis").value,ro(this.prefs),this.drawRoll()},ve("span").onchange=()=>{this.prefs.bars=Number(ve("span").value),ro(this.prefs),this.drawRoll()},ve("prevBars").onclick=()=>this.step(-1),ve("nextBars").onclick=()=>this.step(1),ve("legend").replaceChildren(...Object.entries(Yc).filter(([n])=>n!=="grace").map(([n,s])=>Object.assign(document.createElement("span"),{innerHTML:`<i style="background:${Sn[n]}"></i>${s}`}))),ve("cardX").onclick=()=>this.card(null);for(let n of document.querySelectorAll("dialog"))n.querySelector(".shut").onclick=()=>n.close();ve("addBtn").onclick=()=>ve("file").click(),ve("file").onchange=()=>{for(let n of ve("file").files)this.add(n);ve("file").value=""},addEventListener("dragover",n=>{n.preventDefault(),ve("drop").hidden=!1}),addEventListener("dragleave",n=>{n.relatedTarget||(ve("drop").hidden=!0)}),addEventListener("drop",n=>{n.preventDefault(),ve("drop").hidden=!0;for(let s of n.dataTransfer.files)this.add(s)})}step(e){if(!this.s)return;let t=Number(this.prefs.bars),i=Math.max(0,Math.min(this.s.bars.length-1,this.rollBar+e*Math.max(1,t-1)));i!==this.rollBar&&(this.rollBar=i,this.drawRoll())}touch(e){let t=this.view;if(t.at==="shelf"){let i=this.shelf.hit(e);i&&this.take(i);return}if(t.at==="desk")return this.roll.at(e)?this.go("read",this.roll):this.map.at(e)?this.go("read",this.map):void 0;if(t.at==="read"&&t.reading&&this.s&&this.a){let i=t.reading.at(e);if(!i)return this.go("desk");let n=t.reading.pick(i);if(!n){this.card(null);return}n.kind==="span"?this.card(n.span):n.kind==="note"?this.card(null,n):n.kind==="time"&&(this.player.seek(n.t),si(`From bar ${n.bar}`,1200))}}go(e,t=null){if(e==="read"&&!this.s){si("Take a book from the shelf first");return}this.view.go(e,t),this.ui(),document.body.classList.toggle("reading",e==="read")}async add(e){try{let t=new Uint8Array(await e.arrayBuffer()),i=await Kd(e.name,t),n=`user-${Date.now().toString(36)}`;i.id=n;let s={id:n,title:i.title||e.name,name:e.name,added:Date.now(),packed:Uh(i)};await kd(s),si(`${s.title} is on the shelf (kept in this browser only)`),await this.books(),this.open({id:n,packed:s.packed})}catch(t){console.error(t),si(`${e.name}: ${t.message}`,5e3)}}toggle(){this.s&&(this.player.playing?this.player.pause():this.player.play().then(()=>this.ui()),this.ui())}soundState(){let e=mi;e.ready?si("The piano is tuned (GeneralUser GS)",1800):e.failed&&si("Playing with a simple synth: the SoundFont could not be loaded"),this.ui()}ui(){let e=this.view,t=mi;ve("playBtn").textContent=this.player.playing?"❚❚ Pause":"▶ Play",this.player.playing&&!t.ready&&!t.failed&&(ve("playBtn").textContent=`❚❚ ${Math.round(t.progress*100)}%`);for(let[i,n]of[["shelfBtn",e.at==="shelf"],["deskBtn",e.at==="desk"],["pianoBtn",e.at==="piano"],["mapBtn",e.at==="read"&&e.reading===this.map],["rollBtn",e.at==="read"&&e.reading===this.roll]])ve(i).classList.toggle("on",n);ve("rollBar").hidden=!(e.at==="read"&&e.reading===this.roll)}frame(e){let t=this.view;t.place(e,this.real||e),t.live(e),t.at==="shelf"&&this.shelf.hover(this.hover);let i=this.player.sounding(),n=new Map;for(let s of i)n.set(s.key,this.fns?Sn[this.fns[s.n.id]]:"#d8b56a");for(let[s,a]of n)this.piano.press(s,!0,a);for(let s of this.piano.keys.keys())!n.has(s)&&!this.live.has(s)&&this.piano.keys.get(s).goal&&this.piano.press(s,!1);if(this.piano.update(e),this.s&&this.a&&(this.player.playing||this.player.pos>0)){let s=this.player.at,a=this.roll.out;if(a){if(this.player.playing&&(s>=a.t1-1e-6||s<a.t0-1e-6)){let c=this.s.bars.findIndex((h,u)=>s<(u+1<this.s.bars.length?me(this.s.bars[u+1].at):1/0));this.rollBar=Math.max(0,c),this.drawRoll()}let l=this.roll.out;this.roll.mark(s>=l.t0&&s<=l.t1?l.xOf(s):null,l.top,l.notesH)}let o=this.map.out;if(o&&o.xOf){let l=o.rowOf(s);this.map.mark(o.xOf(s,l),o.top+l*o.rh+o.rh*.18,o.rh*.8)}}else this.roll.mark(null),this.map.mark(null);this.player.playing&&(this.tick=(this.tick||0)+1)%15===0&&this.ui(),t.render()}};window.app=new ih;
