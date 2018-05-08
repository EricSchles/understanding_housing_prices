(function(){var m,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={Aa:!0},ea={};try{ea.__proto__=da;ca=ea.Aa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.W=b.prototype}
var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ja(){ja=function(){};
ia.Symbol||(ia.Symbol=ka)}
var ka=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function la(){ja();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ma(this)}});
la=function(){}}
function ma(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function na(a){la();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a}
function oa(a){la();var b=a[Symbol.iterator];return b?b.call(a):ma(a)}
function pa(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ha(c,d,{configurable:!0,writable:!0,value:f})}}
pa("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
pa("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
pa("Array.from",function(a){return a?a:function(a,c,d){la();c=null!=c?c:function(a){return a};
var b=[],f=a[Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var g=0;g<f;g++)b.push(c.call(d,a[g]))}return b}});
function qa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
pa("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){ja();la();a=oa(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){qa(a,e)||ha(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(l){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!qa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};
b.prototype.get=function(a){return qa(a,e)?a[e][this.b]:void 0};
b.prototype.has=function(a){return qa(a,e)&&qa(a[e],this.b)};
b.prototype["delete"]=function(a){return qa(a,e)&&qa(a[e],this.b)?delete a[e][this.b]:!1};
return b});
pa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return na(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.g[c];if(d&&qa(a.g,c))for(var e=0;e<d.length;e++){var h=d[e];if(b!==b&&h.key!==h.key||b===h.key)return{id:c,list:d,index:e,F:h}}return{id:c,list:d,index:-1,F:void 0}}
function e(a){this.g={};this.b=b();this.size=0;if(a){a=oa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(oa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(u){return!1}}())return a;
ja();la();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.g[c.id]=[]);c.F?c.F.value=b:(c.F={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.F),this.b.previous.next=c.F,this.b.previous=c.F,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.F&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.g[a.id],a.F.previous.next=a.F.next,a.F.next.previous=a.F.previous,a.F.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).F};
e.prototype.get=function(a){return(a=d(this,a).F)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
pa("Set",function(a){function b(a){this.b=new Map;if(a){a=oa(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(oa([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ja();la();b.prototype.add=function(a){this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
var ra="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)qa(d,e)&&(a[e]=d[e])}return a};
pa("Object.assign",function(a){return a||ra});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var q=this;function r(a){return void 0!==a}
function t(a){return"string"==typeof a}
function v(a,b,c){a=a.split(".");c=c||q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&r(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var sa=/^[\w+/_-]+[=]{0,2}$/,ta=null;function w(a,b){for(var c=a.split("."),d=b||q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ua(){}
function va(a){a.la=void 0;a.ta=function(){return a.la?a.la:a.la=new a}}
function wa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function xa(a){return"array"==wa(a)}
function x(a){var b=wa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ya(a){return"function"==wa(a)}
function za(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Aa="closure_uid_"+(1E9*Math.random()>>>0),Ba=0;function Ca(a,b,c){return a.call.apply(a.bind,arguments)}
function Da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=Ca:y=Da;return y.apply(null,arguments)}
function Ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function A(a,b){function c(){}
c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.vb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function Fa(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ga(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],k=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var l=h^d&(f^h);var u=1518500249}else l=d^f^h,u=1859775393;else 60>c?(l=d&f|h&(d|f),u=2400959708):(l=d^f^h,u=3395469782);l=((a<<5|a>>>27)&4294967295)+l+k+u+b[c]&4294967295;k=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=l}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==l)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64;for(;d<c;)if(f[l++]=a[d++],p++,64==l)for(l=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64}
function d(){var a=[],d=8*p;56>l?c(h,56-l):c(h,64-(l-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,Ca:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Ha(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(Ha,Error);Ha.prototype.name="CustomError";function Ia(a){return a[a.length-1]}
var Ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=t(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},La=Array.prototype.some?function(a,b){Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=t(a)?a.split(""):a,e=0;e<c&&!(e in d&&b.call(void 0,d[e],e,a));e++);
},Ma=Array.prototype.every?function(a,b,c){Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d&&(!(f in e)||b.call(c,e[f],f,a));f++);
};
function Na(a,b){var c=Oa(a,b,void 0);return 0>c?null:t(a)?a.charAt(c):a[c]}
function Oa(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function Pa(a,b){return 0<=Ja(a,b)}
function Qa(a){return Array.prototype.concat.apply([],arguments)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(x(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ta(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ua(a,b){a.sort(b||Va)}
function Wa(a,b){var c=Va;Ua(a,function(a,e){return c(b(a),b(e))})}
function Va(a,b){return a>b?1:a<b?-1:0}
;function Xa(a,b,c){var d=[],e=[];if(1==(xa(c)?2:1))return e=[b,a],B(d,function(a){e.push(a)}),Ya(e.join(" "));
var f=[],g=[];B(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(a){e.push(a)});
a=Ya(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ya(a){var b=Ga();b.update(a);return b.Ca().toLowerCase()}
;var Za=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function $a(a){return decodeURIComponent(a.replace(/\+/g," "))}
function ab(a){if(!bb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(cb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(db,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(eb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(fb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(gb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(hb,"&#0;"));return a}
var cb=/&/g,db=/</g,eb=/>/g,fb=/"/g,gb=/'/g,hb=/\x00/g,bb=/[\x00&<>"']/;
function ib(a,b){for(var c=0,d=Za(String(a)).split("."),e=Za(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=jb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||jb(0==h[2].length,0==k[2].length)||jb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function jb(a,b){return a<b?-1:a>b?1:0}
function kb(a){var b=Number(a);return 0==b&&/^[\s\xa0]*$/.test(a)?NaN:b}
;function lb(a){this.b=a||{cookie:""}}
m=lb.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');r(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
m.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Za(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=r(this.get(a));this.set(a,"",0,b,c);return d};
m.N=function(){return mb(this).keys};
m.K=function(){return mb(this).values};
m.isEmpty=function(){return!this.b.cookie};
m.clear=function(){for(var a=mb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function mb(a){a=(a.b.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Za(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var nb=new lb("undefined"==typeof document?null:document);nb.g=3950;function ob(a){var b=Fa(String(q.location.href)),c=q.__OVERRIDE_SID;null==c&&(c=(new lb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?q.__SAPISID:q.__APISID,null==b&&(b=(new lb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(q.location.href);return d&&b&&c?[c,Xa(Fa(d),b,a||null)].join(" "):null}return null}
;function C(){this.g=this.g;this.A=this.A}
C.prototype.g=!1;C.prototype.dispose=function(){this.g||(this.g=!0,this.I())};
function pb(a,b){a.g?r(void 0)?b.call(void 0):b():(a.A||(a.A=[]),a.A.push(r(void 0)?y(b,void 0):b))}
C.prototype.I=function(){if(this.A)for(;this.A.length;)this.A.shift()()};
function qb(a){a&&"function"==typeof a.dispose&&a.dispose()}
function rb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];x(d)?rb.apply(null,d):qb(d)}}
;var D;a:{var sb=q.navigator;if(sb){var tb=sb.userAgent;if(tb){D=tb;break a}}D=""}function E(a){return-1!=D.indexOf(a)}
;function ub(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function vb(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}
function wb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function xb(a){var b=yb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function zb(a){for(var b in a)return!1;return!0}
function Ab(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function Bb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Cb.length;f++)c=Cb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Eb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")}
;function Gb(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function Hb(a,b){var c=Ib;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Jb=E("Opera"),G=E("Trident")||E("MSIE"),Kb=E("Edge"),Lb=Kb||G,Mb=E("Gecko")&&!(-1!=D.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),Nb=-1!=D.toLowerCase().indexOf("webkit")&&!E("Edge");function Ob(){var a=q.document;return a?a.documentMode:void 0}
var Pb;a:{var Qb="",Rb=function(){var a=D;if(Mb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kb)return/Edge\/([\d\.]+)/.exec(a);if(G)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nb)return/WebKit\/(\S+)/.exec(a);if(Jb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Rb&&(Qb=Rb?Rb[1]:"");if(G){var Sb=Ob();if(null!=Sb&&Sb>parseFloat(Qb)){Pb=String(Sb);break a}}Pb=Qb}var Tb=Pb,Ib={};function Ub(a){return Hb(a,function(){return 0<=ib(Tb,a)})}
var Vb;var Wb=q.document;Vb=Wb&&G?Ob()||("CSS1Compat"==Wb.compatMode?parseInt(Tb,10):5):void 0;function Xb(a,b){this.j=a;this.l=b;this.g=0;this.b=null}
Xb.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.j();return a};
function Yb(a,b){a.l(b);100>a.g&&(a.g++,b.next=a.b,a.b=b)}
;function Zb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function $b(a){q.setTimeout(function(){throw a;},0)}
var ac;
function bc(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=y(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(r(c.next)){c=c.next;var a=c.sa;c.sa=null;a()}};
return function(a){d.next={sa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}}
;function cc(){this.g=this.b=null}
var ec=new Xb(function(){return new dc},function(a){a.reset()});
cc.prototype.add=function(a,b){var c=ec.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};
cc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.g=null),a.next=null);return a};
function dc(){this.next=this.scope=this.b=null}
dc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
dc.prototype.reset=function(){this.next=this.scope=this.b=null};function fc(a,b){gc||hc();ic||(gc(),ic=!0);jc.add(a,b)}
var gc;function hc(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);gc=function(){a.then(kc)}}else gc=function(){var a=kc;
!ya(q.setImmediate)||q.Window&&q.Window.prototype&&!E("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(ac||(ac=bc()),ac(a)):q.setImmediate(a)}}
var ic=!1,jc=new cc;function kc(){for(var a;a=jc.remove();){try{a.b.call(a.scope)}catch(b){$b(b)}Yb(ec,a)}ic=!1}
;function lc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function mc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function H(a,b){this.b=0;this.o=void 0;this.l=this.g=this.j=null;this.m=this.A=!1;if(a!=ua)try{var c=this;a.call(b,function(a){nc(c,2,a)},function(a){nc(c,3,a)})}catch(d){nc(this,3,d)}}
function oc(){this.next=this.context=this.onRejected=this.g=this.b=null;this.j=!1}
oc.prototype.reset=function(){this.context=this.onRejected=this.g=this.b=null;this.j=!1};
var pc=new Xb(function(){return new oc},function(a){a.reset()});
function rc(a,b,c){var d=pc.get();d.g=a;d.onRejected=b;d.context=c;return d}
function sc(a){return new H(function(b,c){c(a)})}
H.prototype.then=function(a,b,c){return tc(this,ya(a)?a:null,ya(b)?b:null,c)};
lc(H);function uc(a,b){return tc(a,null,b,void 0)}
H.prototype.cancel=function(a){0==this.b&&fc(function(){var b=new vc(a);wc(this,b)},this)};
function wc(a,b){if(0==a.b)if(a.j){var c=a.j;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.j||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?wc(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):xc(c),yc(c,e,3,b)))}a.j=null}else nc(a,3,b)}
function zc(a,b){a.g||2!=a.b&&3!=a.b||Ac(a);a.l?a.l.next=b:a.g=b;a.l=b}
function tc(a,b,c,d){var e=rc(null,null,null);e.b=new H(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!r(e)&&b instanceof vc?g(b):a(e)}catch(l){g(l)}}:g});
e.b.j=a;zc(a,e);return e.b}
H.prototype.C=function(a){this.b=0;nc(this,2,a)};
H.prototype.D=function(a){this.b=0;nc(this,3,a)};
function nc(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.C,f=a.D;if(d instanceof H){zc(d,rc(e||ua,f||null,a));var g=!0}else if(mc(d))d.then(e,f,a),g=!0;else{if(za(d))try{var h=d.then;if(ya(h)){Bc(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.b=b,a.j=null,Ac(a),3!=b||c instanceof vc||Cc(a,c))}}
function Bc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ac(a){a.A||(a.A=!0,fc(a.B,a))}
function xc(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.l=null);return b}
H.prototype.B=function(){for(var a;a=xc(this);)yc(this,a,this.b,this.o);this.A=!1};
function yc(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.b)b.b.j=null,Dc(b,c,d);else try{b.j?b.g.call(b.context):Dc(b,c,d)}catch(e){Ec.call(null,e)}Yb(pc,b)}
function Dc(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Cc(a,b){a.m=!0;fc(function(){a.m&&Ec.call(null,b)})}
var Ec=$b;function vc(a){Ha.call(this,a)}
A(vc,Ha);vc.prototype.name="cancel";function Fc(a,b,c){C.call(this);this.b=a;this.m=b||0;this.j=c;this.l=y(this.Da,this)}
A(Fc,C);m=Fc.prototype;m.U=0;m.I=function(){Fc.W.I.call(this);this.isActive()&&q.clearTimeout(this.U);this.U=0;delete this.b;delete this.j};
m.start=function(a){this.isActive()&&q.clearTimeout(this.U);this.U=0;var b=this.l;a=r(a)?a:this.m;if(!ya(b))if(b&&"function"==typeof b.handleEvent)b=y(b.handleEvent,b);else throw Error("Invalid listener argument");this.U=2147483647<Number(a)?-1:q.setTimeout(b,a||0)};
m.isActive=function(){return 0!=this.U};
m.Da=function(){this.U=0;this.b&&this.b.call(this.j)};var Gc=E("Firefox"),Hc=Gb()||E("iPod"),Ic=E("iPad"),Jc=E("Android")&&!(Eb()||E("Firefox")||E("Opera")||E("Silk")),Kc=Eb(),Lc=E("Safari")&&!(Eb()||E("Coast")||E("Opera")||E("Edge")||E("Silk")||E("Android"))&&!(Gb()||E("iPad")||E("iPod"));var Mc=null,Nc=null;function Oc(){this.g=-1}
;function Pc(){this.g=64;this.b=[];this.A=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.g;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
A(Pc,Oc);Pc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.m=this.j=0};
function Qc(a,b,c){c||(c=0);var d=a.o;if(t(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],k=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):(f=c^g^h,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+k&4294967295}
Pc.prototype.update=function(a,b){if(null!=a){r(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.A,f=this.j;d<b;){if(0==f)for(;d<=c;)Qc(this,a,d),d+=this.g;if(t(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Qc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Qc(this,e);f=0;break}}this.j=f;this.m+=b}};
Pc.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.g-(this.j-56));for(var c=this.g-1;56<=c;c--)this.A[c]=b&255,b/=256;Qc(this,this.A);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};var Rc=!G||9<=Number(Vb);function Sc(){this.b="";this.g=Tc}
Sc.prototype.ba=!0;Sc.prototype.aa=function(){return this.b};
Sc.prototype.ka=!0;Sc.prototype.ia=function(){return 1};
var Tc={};function I(){this.b="";this.g=Uc}
I.prototype.ba=!0;I.prototype.aa=function(){return this.b};
I.prototype.ka=!0;I.prototype.ia=function(){return 1};
function Vc(a){if(a instanceof I&&a.constructor===I&&a.g===Uc)return a.b;wa(a);return"type_error:SafeUrl"}
var Wc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Uc={};function Xc(a){var b=new I;b.b=a;return b}
Xc("about:blank");function Yc(){this.b="";this.j=Zc;this.g=null}
Yc.prototype.ka=!0;Yc.prototype.ia=function(){return this.g};
Yc.prototype.ba=!0;Yc.prototype.aa=function(){return this.b};
var Zc={};function $c(a,b){var c=new Yc;c.b=a;c.g=b;return c}
$c("<!DOCTYPE html>",0);$c("",0);$c("<br>",0);function ad(a,b){if(b instanceof I)var c=b;else c=b,c instanceof I||(c=c.ba?c.aa():String(c),Wc.test(c)||(c="about:invalid#zClosurez"),c=Xc(c));a.href=Vc(c)}
function bd(a,b){if(b instanceof Sc&&b.constructor===Sc&&b.g===Tc)var c=b.b;else wa(b),c="type_error:TrustedResourceUrl";a.src=c;if(null===ta){a:{if((c=q.document.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&sa.test(c))break a;c=null}ta=c||""}if(c=ta)a.nonce=c}
;function cd(a,b){this.x=r(a)?a:0;this.y=r(b)?b:0}
cd.prototype.equals=function(a){return a instanceof cd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
cd.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
cd.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
cd.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function dd(a,b){this.width=a;this.height=b}
m=dd.prototype;m.Ba=function(){return this.width*this.height};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!this.Ba()};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ed(a,b){ub(b,function(b,d){b&&b.ba&&(b=b.aa());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:fd.hasOwnProperty(d)?a.setAttribute(fd[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var fd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function gd(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Rc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ab(g.name),'"');if(g.type){f.push(' type="',ab(g.type),'"');var h={};Db(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:xa(g)?f.className=g.join(" "):ed(f,g));2<d.length&&hd(e,f,d);return f}
function hd(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];!x(f)||za(f)&&0<f.nodeType?d(f):B(id(f)?Ra(f):f,d)}}
function jd(a){return G&&!Ub("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function kd(a){a=a.tabIndex;return"number"==typeof a&&0<=a&&32768>a}
function id(a){if(a&&"number"==typeof a.length){if(za(a))return"function"==typeof a.item||"string"==typeof a.item;if(ya(a))return"function"==typeof a.item}return!1}
function ld(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var md="StopIteration"in q?q.StopIteration:{message:"StopIteration",stack:""};function nd(){}
nd.prototype.next=function(){throw md;};
nd.prototype.P=function(){return this};
function od(a){if(a instanceof nd)return a;if("function"==typeof a.P)return a.P(!1);if(x(a)){var b=0,c=new nd;c.next=function(){for(;;){if(b>=a.length)throw md;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function pd(a,b){if(x(a))try{B(a,b,void 0)}catch(c){if(c!==md)throw c;}else{a=od(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==md)throw c;}}}
function qd(a){if(x(a))return Ra(a);a=od(a);var b=[];pd(a,function(a){b.push(a)});
return b}
;function rd(a,b){this.g={};this.b=[];this.l=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof rd)for(c=a.N(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=rd.prototype;m.K=function(){sd(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.g[this.b[b]]);return a};
m.N=function(){sd(this);return this.b.concat()};
m.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;var c=b||td;sd(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function td(a,b){return a===b}
m.isEmpty=function(){return 0==this.j};
m.clear=function(){this.g={};this.l=this.j=this.b.length=0};
m.remove=function(a){return ud(this.g,a)?(delete this.g[a],this.j--,this.l++,this.b.length>2*this.j&&sd(this),!0):!1};
function sd(a){if(a.j!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];ud(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.j!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],ud(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
m.get=function(a,b){return ud(this.g,a)?this.g[a]:b};
m.set=function(a,b){ud(this.g,a)||(this.j++,this.b.push(a),this.l++);this.g[a]=b};
m.forEach=function(a,b){for(var c=this.N(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.P=function(a){sd(this);var b=0,c=this.l,d=this,e=new nd;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw md;var e=d.b[b++];return a?e:d.g[e]};
return e};
function ud(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function vd(a){wd();var b=new Sc;b.b=a;return b}
var wd=ua;function xd(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function yd(a){a=String(a);if(xd(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function zd(a){var b=[];Ad(new Bd,a,b);return b.join("")}
function Bd(){}
function Ad(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(xa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ad(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Cd(d,c),c.push(":"),Ad(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Cd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Dd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ed=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Cd(a,b){b.push('"',a.replace(Ed,function(a){var b=Dd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Dd[a]=b);return b}),'"')}
;function Fd(a){if(q.JSON)try{return q.JSON.parse(a)}catch(b){}return yd(a)}
;function J(a){C.call(this);this.o=1;this.l=[];this.m=0;this.b=[];this.j={};this.B=!!a}
A(J,C);m=J.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.o=e+3;d.push(e);return e};
function Gd(a){var b=Hd,c=a.j.onClick;if(c){var d=a.b;(c=Na(c,function(a){return d[a+1]==b&&void 0==d[a+2]}))&&a.da(c)}}
m.da=function(a){var b=this.b[a];if(b){var c=this.j[b];if(0!=this.m)this.l.push(a),this.b[a+1]=ua;else{if(c){var d=Ja(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
m.ja=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Id(this.b[g+1],this.b[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.da(c)}}return 0!=e}return!1};
function Id(a,b,c){fc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(B(b,this.da,this),delete this.j[a])}else this.b.length=0,this.j={}};
m.I=function(){J.W.I.call(this);this.clear();this.l.length=0};function Jd(a){this.b=a}
Jd.prototype.set=function(a,b){r(b)?this.b.set(a,zd(b)):this.b.remove(a)};
Jd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Jd.prototype.remove=function(a){this.b.remove(a)};function Kd(a){this.b=a}
A(Kd,Jd);function Ld(a){this.data=a}
function Md(a){return!r(a)||a instanceof Ld?a:new Ld(a)}
Kd.prototype.set=function(a,b){Kd.W.set.call(this,a,Md(b))};
Kd.prototype.g=function(a){a=Kd.W.get.call(this,a);if(!r(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Kd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!r(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Nd(a){this.b=a}
A(Nd,Kd);Nd.prototype.set=function(a,b,c){if(b=Md(b)){if(c){if(c<z()){Nd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}Nd.W.set.call(this,a,b)};
Nd.prototype.g=function(a){var b=Nd.W.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())Nd.prototype.remove.call(this,a);else return b}};function Od(a){this.b=a}
A(Od,Nd);function Pd(){}
;function Qd(){}
A(Qd,Pd);Qd.prototype.clear=function(){var a=qd(this.P(!0)),b=this;B(a,function(a){b.remove(a)})};function Rd(a){this.b=a}
A(Rd,Qd);m=Rd.prototype;m.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.b.removeItem(a)};
m.P=function(a){var b=0,c=this.b,d=new nd;d.next=function(){if(b>=c.length)throw md;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
m.clear=function(){this.b.clear()};
m.key=function(a){return this.b.key(a)};function Sd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(Sd,Rd);function Td(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(Td,Rd);function Ud(a,b){this.g=a;this.b=null;if(G&&!(9<=Number(Vb))){Vd||(Vd=new rd);this.b=Vd.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Vd.set(a,this.b));try{this.b.load(this.g)}catch(c){this.b=null}}}
A(Ud,Qd);var Xd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Vd=null;function Yd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Xd[a]})}
m=Ud.prototype;m.isAvailable=function(){return!!this.b};
m.set=function(a,b){this.b.setAttribute(Yd(a),b);Zd(this)};
m.get=function(a){a=this.b.getAttribute(Yd(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.b.removeAttribute(Yd(a));Zd(this)};
m.P=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new nd;d.next=function(){if(b>=c.length)throw md;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
m.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Zd(this)};
function Zd(a){try{a.b.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function $d(a,b){this.g=a;this.b=b+"::"}
A($d,Qd);$d.prototype.set=function(a,b){this.g.set(this.b+a,b)};
$d.prototype.get=function(a){return this.g.get(this.b+a)};
$d.prototype.remove=function(a){this.g.remove(this.b+a)};
$d.prototype.P=function(a){var b=this.g.P(!0),c=this,d=new nd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.g.get(d)};
return d};function ae(a){if(a.K&&"function"==typeof a.K)return a.K();if(t(a))return a.split("");if(x(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}
function be(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(x(a)||t(a))B(a,b,c);else{if(a.N&&"function"==typeof a.N)var d=a.N();else if(a.K&&"function"==typeof a.K)d=void 0;else if(x(a)||t(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=wb(a);e=ae(a);f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;var ce=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function de(a){return a?decodeURI(a):a}
function K(a,b){return b.match(ce)[a]||null}
function ee(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?$a(f):"")}}
function fe(a,b,c){if(xa(b))for(var d=0;d<b.length;d++)fe(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ge(a){var b=[],c;for(c in a)fe(c,a[c],b);return b.join("&")}
function he(a,b){var c=ge(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function ie(a,b){this.g=this.o=this.j="";this.B=null;this.m=this.b="";this.A=!1;var c;a instanceof ie?(this.A=r(b)?b:a.A,je(this,a.j),this.o=a.o,this.g=a.g,ke(this,a.B),this.b=a.b,le(this,me(a.l)),this.m=a.m):a&&(c=String(a).match(ce))?(this.A=!!b,je(this,c[1]||"",!0),this.o=ne(c[2]||""),this.g=ne(c[3]||"",!0),ke(this,c[4]),this.b=ne(c[5]||"",!0),le(this,c[6]||"",!0),this.m=ne(c[7]||"")):(this.A=!!b,this.l=new oe(null,this.A))}
ie.prototype.toString=function(){var a=[],b=this.j;b&&a.push(pe(b,qe,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.o)&&a.push(pe(b,qe,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.b)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(pe(c,"/"==c.charAt(0)?re:se,!0));(c=this.l.toString())&&a.push("?",c);(c=this.m)&&a.push("#",pe(c,te));return a.join("")};
ie.prototype.resolve=function(a){var b=new ie(this),c=!!a.j;c?je(b,a.j):c=!!a.o;c?b.o=a.o:c=!!a.g;c?b.g=a.g:c=null!=a.B;var d=a.b;if(c)ke(b,a.B);else if(c=!!a.b){if("/"!=d.charAt(0))if(this.g&&!this.b)d="/"+d;else{var e=b.b.lastIndexOf("/");-1!=e&&(d=b.b.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.b=d:c=""!==a.l.toString();c?le(b,me(a.l)):c=!!a.m;c&&(b.m=a.m);return b};
function je(a,b,c){a.j=c?ne(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function ke(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null}
function le(a,b,c){b instanceof oe?(a.l=b,ue(a.l,a.A)):(c||(b=pe(b,ve)),a.l=new oe(b,a.A))}
function ne(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function pe(a,b,c){return t(a)?(a=encodeURI(a).replace(b,we),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function we(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var qe=/[#\/\?@]/g,se=/[#\?:]/g,re=/[#\?]/g,ve=/[#\?@]/g,te=/#/g;function oe(a,b){this.g=this.b=null;this.j=a||null;this.l=!!b}
function xe(a){a.b||(a.b=new rd,a.g=0,a.j&&ee(a.j,function(b,c){a.add($a(b),c)}))}
m=oe.prototype;m.add=function(a,b){xe(this);this.j=null;a=ye(this,a);var c=this.b.get(a);c||this.b.set(a,c=[]);c.push(b);this.g=this.g+1;return this};
m.remove=function(a){xe(this);a=ye(this,a);return ud(this.b.g,a)?(this.j=null,this.g=this.g-this.b.get(a).length,this.b.remove(a)):!1};
m.clear=function(){this.b=this.j=null;this.g=0};
m.isEmpty=function(){xe(this);return 0==this.g};
function ze(a,b){xe(a);b=ye(a,b);return ud(a.b.g,b)}
m.forEach=function(a,b){xe(this);this.b.forEach(function(c,d){B(c,function(c){a.call(b,c,d,this)},this)},this)};
m.N=function(){xe(this);for(var a=this.b.K(),b=this.b.N(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
m.K=function(a){xe(this);var b=[];if(t(a))ze(this,a)&&(b=Qa(b,this.b.get(ye(this,a))));else{a=this.b.K();for(var c=0;c<a.length;c++)b=Qa(b,a[c])}return b};
m.set=function(a,b){xe(this);this.j=null;a=ye(this,a);ze(this,a)&&(this.g=this.g-this.b.get(a).length);this.b.set(a,[b]);this.g=this.g+1;return this};
m.get=function(a,b){if(!a)return b;var c=this.K(a);return 0<c.length?String(c[0]):b};
m.toString=function(){if(this.j)return this.j;if(!this.b)return"";for(var a=[],b=this.b.N(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.K(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.j=a.join("&")};
function me(a){var b=new oe;b.j=a.j;a.b&&(b.b=new rd(a.b),b.g=a.g);return b}
function ye(a,b){var c=String(b);a.l&&(c=c.toLowerCase());return c}
function ue(a,b){b&&!a.l&&(xe(a),a.j=null,a.b.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),this.remove(c),0<a.length&&(this.j=null,this.b.set(ye(this,c),Ra(a)),this.g=this.g+a.length))},a));
a.l=b}
m.extend=function(a){for(var b=0;b<arguments.length;b++)be(arguments[b],function(a,b){this.add(b,a)},this)};function Ae(a){return(a=a.exec(D))?a[1]:""}
var Be=function(){if(Gc)return Ae(/Firefox\/([0-9.]+)/);if(G||Kb||Jb)return Tb;if(Kc)return Gb()||E("iPad")||E("iPod")?Ae(/CriOS\/([0-9.]+)/):Ae(/Chrome\/([0-9.]+)/);if(Lc&&!(Gb()||E("iPad")||E("iPod")))return Ae(/Version\/([0-9.]+)/);if(Hc||Ic){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(D);if(a)return a[1]+"."+a[2]}else if(Jc)return(a=Ae(/Android\s+([0-9.]+)/))?a:Ae(/Version\/([0-9.]+)/);return""}();var L=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Ce=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",Ce,void 0);function De(a){var b=arguments;if(1<b.length)Ce[b[0]]=b[1];else{b=b[0];for(var c in b)Ce[c]=b[c]}}
function M(a,b){return a in Ce?Ce[a]:b}
function Ee(a){return M(a,void 0)}
;z();function Fe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ge(b)}}:a}
function Ge(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,b,c,d,e):(f=M("ERRORS",[]),f.push([a,b,c,d,e]),De("ERRORS",f))}
;var He=r(XMLHttpRequest)?function(){return new XMLHttpRequest}:r(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ie(){if(!He)return null;var a=He();return"open"in a?a:null}
function Je(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ke(a,b){ya(a)&&(a=Fe(a));return window.setTimeout(a,b)}
;function Le(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=$a(e[0]||"");e=$a(e[1]||"");f in b?xa(b[f])?Sa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Me(a){"?"==a.charAt(0)&&(a=a.substr(1));return Le(a)}
function Ne(a){a=a.split(",");return a=a.map(function(a){return Me(a)})}
function Oe(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Me(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return he(a,e)+d}
;var Pe={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Qe=!1;
function Re(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(1,a),e=de(K(3,a));d&&e?(d=c,c=a.match(ce),d=d.match(ce),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?de(K(3,c))==e&&(Number(K(4,c))||null)==(Number(K(4,a))||null):!0;for(var f in Pe){if((e=d=M(Pe[f]))&&!(e=c)){e=f;var g=M("CORS_HEADER_WHITELIST")||{},h=de(K(3,a));e=h?(g=g[h])?Pa(g,e):!1:!0}e&&(b[f]=d)}return b}
function Se(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Te(a,b);var d=Ue(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&window.clearTimeout(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||q;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ma&&b.ma.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.xa&&0<b.timeout&&(f=Ke(function(){e||(e=!0,window.clearTimeout(f),b.xa.call(b.context||q))},b.timeout))}else Ve(a,b)}
function Ve(a,b){var c=b.format||"JSON";a=Te(a,b);var d=Ue(a,b),e=!1,f,g=We(a,function(a){if(!e){e=!0;f&&window.clearTimeout(f);var d=Je(a),g=null;if(d||400<=a.status&&500>a.status)g=Xe(c,a,b.wb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||q;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ma&&b.ma.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.ea&&0<b.timeout&&(f=Ke(function(){e||(e=!0,g.abort(),window.clearTimeout(f),b.ea.call(b.context||q,g))},b.timeout));
return g}
function Te(a,b){b.yb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME",void 0),d=b.Ra;d&&(d[c]&&delete d[c],a=Oe(a,d||{},!0));return a}
function Ue(a,b){var c=M("XSRF_FIELD_NAME",void 0),d=M("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.M,g=Ee("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.xb||de(K(3,a))&&!b.withCredentials&&de(K(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.M&&b.M[g]||(f||(f={}),f[c]=d);f&&t(e)&&(e=Me(e),Db(e,f),e=b.ya&&"JSON"==b.ya?JSON.stringify(e):ge(e));f=e||f&&!zb(f);!Qe&&f&&"POST"!=b.method&&(Qe=!0,Ge(Error("AJAX request with postData should use POST")));
return e}
function Xe(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ye(b):null)d={},B(b.getElementsByTagName("*"),function(a){d[a.tagName]=Ze(a)})}c&&$e(d);
return d}
function $e(a){if(za(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=$c(a[b],null);a[c]=d}else $e(a[b])}}
function Ye(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ze(a){var b="";B(a.childNodes,function(a){b+=a.nodeValue});
return b}
function We(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Fe(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ie();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Re(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var af={},bf=0;
function cf(a,b,c,d,e,f){f=f||{};f.name=c||M("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=bf)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params));d=w("window.location.href");if(t(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var h=a.lineNumber||a.line||"Not available"}catch(u){h="Not available",g=!0}try{var k=a.fileName||a.filename||a.sourceURL||q.$googDebugFname||d}catch(u){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(af[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=
e;h={Ra:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":f.name},M:{url:M("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);k&&(h.M.stack=k);for(var l in f)h.M["client."+l]=f[l];if(l=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var p in l)h.M[p]=l[p];Ve(M("ECATCHER_REPORT_HOST","")+"/error_204",h);af[a.message]=!0;bf++}}}
;var df=0;function ef(){var a=document,b;La(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],function(c){b=a[c];return!!b})}
v("ytDomDomGetNextId",w("ytDomDomGetNextId")||function(){return++df},void 0);var ff={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function gf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in ff||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=
null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.g=a.pageY}}
function hf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
gf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
gf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
gf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var yb=w("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",yb,void 0);var jf=w("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",jf,void 0);
function kf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return xb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=za(e[4])&&za(d)&&Ab(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function lf(a){a&&("string"==typeof a&&(a=[a]),B(a,function(a){if(a in yb){var b=yb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?mf()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete yb[a]}}))}
var mf=Zb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function N(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=kf(a,b,c,d);if(e)return e;e=++jf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new gf(d);if(!ld(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new gf(b);
b.currentTarget=a;return c.call(a,b)};
g=Fe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),mf()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);yb[e]=[a,b,c,g,d];return e}
;function nf(){var a=M("PLAYER_CONFIG",void 0)||{};this.url=a.url||"";this.args=a.args||Bb(of);this.assets=a.assets||{};this.attrs=a.attrs||Bb(pf);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var of={enablejsapi:1},pf={};function qf(a){return a?a.dataset?a.dataset[rf()]:a.getAttribute("data-loaded"):null}
var sf={};function rf(){return sf.loaded||(sf.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var tf=w("ytPubsubPubsubInstance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.da;J.prototype.publish=J.prototype.ja;J.prototype.clear=J.prototype.clear;v("ytPubsubPubsubInstance",tf,void 0);var uf=w("ytPubsubPubsubSubscribedKeys")||{};v("ytPubsubPubsubSubscribedKeys",uf,void 0);var vf=w("ytPubsubPubsubTopicToKeys")||{};v("ytPubsubPubsubTopicToKeys",vf,void 0);var wf=w("ytPubsubPubsubIsSynchronous")||{};v("ytPubsubPubsubIsSynchronous",wf,void 0);
function xf(a,b){var c=yf();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){uf[d]&&b.apply(window,c)};
try{wf[a]?f():Ke(f,0)}catch(g){Ge(g)}},void 0);
uf[d]=!0;vf[a]||(vf[a]=[]);vf[a].push(d)}}
function zf(a,b){var c=yf();c&&c.publish.apply(c,arguments)}
function Af(a){var b=yf();if(b)if(b.clear(a),a)Bf(a);else for(var c in vf)Bf(c)}
function yf(){return w("ytPubsubPubsubInstance")}
function Bf(a){vf[a]&&(a=vf[a],B(a,function(a){uf[a]&&delete uf[a]}),a.length=0)}
;var Cf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Df=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ef(a,b){var c=Ff(a),d=document.getElementById(c),e=d&&qf(d),f=d&&!e;e?b&&b():(b&&(xf(c,b),b[Aa]||(b[Aa]=++Ba)),f||(d=Gf(a,c,function(){if(!qf(d)){var a=d;a&&(a.dataset?a.dataset[rf()]="true":a.setAttribute("data-loaded","true"));zf(c);Ke(Ea(Af,c),0)}})))}
function Gf(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
bd(d,vd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Ff(a){var b=document.createElement("a");ad(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return"js-"+b}
;function Hf(a,b){var c=Bb(b),d;return uc(new H(function(b,f){c.onSuccess=function(a){Je(a)?b(a):f(new If("Request failed, status="+a.status,"net.badstatus",a))};
c.onError=function(a){f(new If("Unknown request error","net.unknown",a))};
c.ea=function(a){f(new If("Request timed out","net.timeout",a))};
d=Ve(a,c)}),function(a){a instanceof vc&&d.abort();
return sc(a)})}
function Jf(a,b){function c(e,f,g){return uc(e,function(e){return 0>=f||403===e.b.status?sc(new If("Request retried too many times","net.retryexhausted",e.b)):d(g).then(function(){return c(Hf(a,b),f-1,Math.pow(2,4-f+1)*g)})})}
function d(a){return new H(function(b){setTimeout(b,a)})}
return c(Hf(a,b),3,1E3)}
function If(a,b,c){Ha.call(this,a+", errorCode="+b);this.errorCode=b;this.b=c;this.name="PromiseAjaxError"}
n(If,Ha);function Kf(a){this.j=void 0===a?null:a;this.b=0;this.g=null}
Kf.prototype.then=function(a,b,c){return this.j?this.j.then(a,b,c):1===this.b&&a?(a=a.call(c,this.g),mc(a)||(b=new Kf,a=void 0===a?null:a,b.b=1,b.g=void 0===a?null:a,a=b),a):2===this.b&&b?(a=b.call(c,this.g),mc(a)||(b=new Kf,a=void 0===a?null:a,b.b=2,b.g=void 0===a?null:a,a=b),a):this};
lc(Kf);var Lf={pb:"red",tb:"white"};function Mf(){this.b=17;this.j=13E4;this.l=.5;this.m=this.g=!1}
;function Nf(a){var b=Of(),c=Pf();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if(!t(d))try{d=c.get(a)}catch(e){}if(!t(d))return null;try{d=JSON.parse(d,void 0)}catch(e){}return d}
var Pf=Zb(function(){var a=new Sd;return a.isAvailable()?new Od(a):null}),Of=Zb(function(){var a=new Td;
return a.isAvailable()?new Od(a):null});function Qf(){}
Qf.prototype.g=function(){};function Rf(a,b){this.l=b;this.b=Math.round(a*this.l);this.m=Array(this.b);for(var c=0;c<this.b;c++)this.m[c]=Infinity;c=Array(this.b);for(var d=0;d<this.b;d++)c[d]=d;this.j=0}
Rf.prototype.g=function(a,b){for(var c=Math.min(this.b,Math.max(1,Math.round(a*this.l)));c--;)this.m[this.j]=b,this.j=(this.j+1)%this.b};function Sf(a){this.policy=a;L();this.g=new Rf(4,1);this.j=new Rf(10,1);this.b=a.g?new Qf:new Rf(a.b,20);new Rf(5,1);new Rf(30,1);a=Nf("yt-player-bandwidth")||{};this.b.g(this.policy.l,0<a.byterate?a.byterate:this.policy.j);0<a.delay&&this.g.g(1,Math.min(+a.delay,2));0<a.stall&&this.j.g(1,+a.stall);L()}
;var Tf={Sa:"adunit",Wa:"detailpage",Xa:"editpage",Za:"embedded",fb:"leanback",nb:"previewpage",ob:"profilepage",sb:"unplugged"};function Uf(a,b){this.experimentIds=a?a.split(","):[];this.flags=Le(b||"");var c={};B(this.experimentIds,function(a){c[a]=!0});
this.experiments=c}
function O(a,b){return"true"==a.flags[b]}
;function Vf(a,b){this.sampleRate=a||0;this.spatialAudioType=b||0}
;function Wf(a,b,c,d){this.displayName=a;this.vssId=b;this.languageCode=c;this.kind=void 0===d?"":d}
;var Xf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};v("yt.msgs_",Xf,void 0);function Yf(a){var b=void 0===b?{}:b;a=(a=a in Xf?Xf[a]:void 0)||"";var c={},d;for(d in b)c.ha=d,a=a.replace(new RegExp("\\$"+c.ha,"gi"),function(a){return function(){return b[a.ha]}}(c)),c={ha:c.ha};
return a}
;var P={},Zf=(P.auto=0,P.tiny=144,P.light=144,P.small=240,P.medium=360,P.large=480,P.hd720=720,P.hd1080=1080,P.hd1440=1440,P.hd2160=2160,P.hd2880=2880,P.highres=4320,P);var $f="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");function ag(a,b,c,d,e,f,g,h,k){this.width=a;this.height=b;a:{var l=Math.max(a,b);a=Math.min(a,b);b=$f[0];for(var p=0;p<$f.length;p++){var u=$f[p],F=Zf[u];if(l>=1.3*Math.floor(16*F/9)||a>=1.3*F){l=b;break a}b=u}l="tiny"}this.quality=l;this.isAccelerated=!!f;this.fps=c||0;this.stereoLayout=!e||null!=d&&0!=d&&1!=d?0:e;this.projectionType=d?2==d&&2==e?3:d:0;(c=g)||(c=this.fps,d=this.projectionType,e=Zf[this.quality],c=0==e?Yf("YTP_AUTO"):e+(2==d||3==d||4==d?"s":"p")+(55<c?"60":49<c?"50":39<c?"48":""));
this.qualityLabel=c;this.b=h||"";this.primaries=k||""}
;function bg(a,b,c,d,e,f,g){this.id=a;this.containerType=0<=b.indexOf("/mp4")?1:0<=b.indexOf("/webm")?2:0<=b.indexOf("/x-flv")?3:0<=b.indexOf("/vtt")?4:0;this.mimeType=b;this.b=f||0;this.audio=void 0===c?null:c;this.video=void 0===d?null:d;this.captionTrack=void 0===g?null:g;this.g=void 0===e?null:e}
function cg(a){return 0<=a.indexOf("opus")||0<=a.indexOf("vorbis")||0<=a.indexOf("mp4a")}
function dg(a){return 0<=a.indexOf("vp9")||0<=a.indexOf("vp8")||0<=a.indexOf("avc1")||0<=a.indexOf("av1")}
;var eg=Hc||Ic;function R(a){var b=D;return b?0<=b.toLowerCase().indexOf(a):!1}
;function fg(){var a=w("yt.player.utils.videoElement_");a||(a=document.createElement("VIDEO"),v("yt.player.utils.videoElement_",a,void 0));return a}
;var gg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},hg;var ig=D;ig=ig.toLowerCase();if(-1!=ig.indexOf("android")){var jg=ig.match(/android\D*(\d\.\d)[^;|\)]*[;\)]/);if(jg)hg=parseFloat(jg[1]);else{var kg=ig.match("("+wb(gg).join("|")+")");hg=kg?gg[kg[0]]:0}}else hg=void 0;var lg=hg,mg=0<=lg;function ng(){this.b=!!w("cast.receiver.platform.canDisplayType");var a=w("cast.receiver.platform.getValue");!this.b&&a&&a("max-video-resolution-vpx")}
function og(){var a=R("google tv")&&R("chrome")&&!(0<=ib(Be,30)),b=R("cobalt")&&R("appletv");return R("android")&&R("chrome")&&!R("trident/")&&!R("edge/")&&!(0<=ib(Be,29))||a||b?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&HTMLMediaElement.prototype.webkitSourceAddId)}
;function S(){C.call(this);this.B=new J;pb(this,Ea(qb,this.B))}
A(S,C);S.prototype.subscribe=function(a,b,c){return this.g?0:this.B.subscribe(a,b,c)};
S.prototype.m=function(a,b){this.g||this.B.ja.apply(this.B,arguments)};function pg(){S.call(this);this.b={}}
n(pg,S);pg.prototype.add=function(a,b){if(!this.b[a]&&(b.b||b.g||b.j)){var c=this.b,d=b;Object.isFrozen&&!Object.isFrozen(b)&&(d=Object.create(b),Object.freeze(d));c[a]=d;this.m("vast_info_card_add",a)}};
pg.prototype.remove=function(a){var b=this.get(a);delete this.b[a];return b};
pg.prototype.get=function(a){return this.b[a]||null};
pg.prototype.isEmpty=function(){return zb(this.b)};function T(a,b){return void 0==b?a:"1"==b?!0:!1}
function qg(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a}
function U(a,b){return void 0==b?a:Number(b)}
function V(a,b){return void 0==b?a:b.toString()}
;var rg=/^http:\/\/0\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.l2gfe\.[a-z0-9_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?\/|^https?:\/\/((?:uytfe\.corp|dev-uytfe\.corp|uytfe\.sandbox)\.google\.com\/|([-\w]*www[-\w]*\.|[-\w]*web[-\w]*\.|[-\w]*canary[-\w]*\.|[-\w]*dev[-\w]*\.|[-\w]{1,3}\.)+youtube(education|-nocookie)?\.com\/|([A-Za-z0-9-]{1,63}\.)*(youtube\.googleapis\.com)(:[0-9]+)?\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.([a-z]{3}|i)\.corp\.google\.com(:[0-9]+)?\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.c\.googlers\.com(:[0-9]+)?\/|(docs|drive)\.google\.com\/(a\/[^/\\%]+\/|)|[A-Za-z0-9]+(-v6)?\.prod\.google\.com(:[0-9]+)?\/|m?web-ppg\.corp\.google\.com\/|play\.google\.com\/)/,
sg=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|c\.googlers\.com|docs\.google\.com|drive\.google\.com|prod\.google\.com|plus\.google\.com|mail\.google\.com|youtube\.com|youtube\-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,tg=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|c\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|plus\.google\.com|video\.google\.com|youtube\.com|ytimg\.com|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|s2\.googleusercontent\.com\/s2\/favicons\?|yt[3-4]\.ggpht\.com\/)/,
ug=/^https?:\/\/(googleads\.g\.doubleclick\.net\/(aclk|pagead\/conversion)|www\.google\.com\/(aclk|pagead\/conversion)|www\.googleadservices\.com\/(aclk|pagead\/(aclk|conversion))|www\.youtube\.com\/pagead\/conversion)/,vg=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|c\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|googlevideo\.com|play\.google\.com|prod\.google\.com|c\.lh3\.googleusercontent\.com|plus\.google\.com|mail\.google\.com|youtube\.com|xfx7\.com|yt\.akamaized\.net|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,
wg=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|2mdn\.net|googlesyndication\.com|corp\.google\.com|c\.googlers\.com|borg\.google\.com|googleads\.g\.doubleclick\.net|prod\.google\.com|static\.doubleclick\.net|static\.googleadsserving\.cn|studioapi\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|ytimg\.com)(:[0-9]+)?\/|lightbox-(demos|builder)\.appspot\.com\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/ytplayer)/,
xg=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|corp\.google\.com|c\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleads\.g\.doubleclick\.net|googleplex\.com|play\.google\.com|prod\.google\.com|photos\.google\.com|get\.google\.com|plus\.google\.com|spaces\.google\.com|books\.googleusercontent\.com|blogger\.com|mail\.google\.com|play\-books\-internal\-sandbox\.googleusercontent\.com|talkgadget\.google\.com|survey\.g\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|vevo\.com|jamboard\.google\.com|chat\.google\.com|meet\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|(www\.|encrypted\.)?google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/(search|webhp)\?|lightbox-(demos|builder)\.appspot\.com\/|s0\.2mdn\.net\/instream\/html5\/native\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris)/;function yg(a,b,c,d){!a&&(void 0===c?0:c)&&Ge(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b),"WARNING",void 0,void 0,void 0);return a}
function zg(a){return(a=rg.exec(a))?a[0]:""}
function Ag(a){var b=void 0===b?!1:b;return yg(tg.test(a),a,b,"Trusted Image URL")}
function Bg(a){var b=void 0===b?!1:b;yg(ug.test(a),a,b,"Trusted Promoted Video Domain URL")}
function Cg(a,b){b=void 0===b?!1:b;return yg(sg.test(a),a,b,"Captions URL")}
function Dg(a){a=new ie(a);je(a,document.location.protocol);a.g=document.location.hostname;document.location.port&&ke(a,document.location.port);return a.toString()}
function Eg(a){a=new ie(a);je(a,document.location.protocol);return a.toString()}
;var W=w("ytglobal.prefsUserPrefsPrefs_")||{};v("ytglobal.prefsUserPrefsPrefs_",W,void 0);function Fg(){this.b=M("ALT_PREF_COOKIE_NAME","PREF");var a=nb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(W[d]=c.toString())}}}
m=Fg.prototype;m.get=function(a,b){Gg(a);Hg(a);var c=void 0!==W[a]?W[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){Gg(a);Hg(a);if(null==b)throw Error("ExpectedNotNull");W[a]=b.toString()};
m.remove=function(a){Gg(a);Hg(a);delete W[a]};
m.save=function(){var a=this.b,b=[],c;for(c in W)b.push(c+"="+encodeURIComponent(String(W[c])));nb.set(""+a,b.join("&"),63072E3,"/","youtube.com",!1)};
m.clear=function(){for(var a in W)delete W[a]};
function Hg(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Gg(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
va(Fg);function Ig(a){this.L=a;this.b=null;this.m=0;this.B=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.D=N(window,"mousemove",y(this.H,this));a=y(this.C,this);ya(a)&&(a=Fe(a));this.J=window.setInterval(a,25)}
A(Ig,C);Ig.prototype.H=function(a){r(a.b)||hf(a);var b=a.b;r(a.g)||hf(a);this.b=new cd(b,a.g)};
Ig.prototype.C=function(){if(this.b){var a=L();if(0!=this.m){var b=this.B,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.L();this.o=d}this.m=a;this.B=this.b;this.l=(this.l+1)%4}};
Ig.prototype.I=function(){window.clearInterval(this.J);lf(this.D)};function Jg(){}
function Kg(a,b){Lg(a,1,b)}
;function Mg(){}
n(Mg,Jg);function Lg(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ke(a,c||0)}
function Ng(a){if(!isNaN(a)){var b=w("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
Mg.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
va(Mg);Mg.ta();var Og={};function Qg(){var a={},b=void 0===a.Ga?!0:a.Ga;a=void 0===a.Pa?!1:a.Pa;if(null==w("_lact",window)){var c=parseInt(M("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;v("_lact",c,window);v("_fact",c,window);-1==c&&Rg();N(document,"keydown",Rg);N(document,"keyup",Rg);N(document,"mousedown",Rg);N(document,"mouseup",Rg);b&&(a?N(window,"touchmove",function(){Sg("touchmove",200)},{passive:!0}):(N(window,"resize",function(){Sg("resize",200)}),N(window,"scroll",function(){Sg("scroll",200)})));
new Ig(function(){Sg("mouse",100)});
N(document,"touchstart",Rg,{passive:!0});N(document,"touchend",Rg,{passive:!0})}}
function Sg(a,b){Og[a]||(Og[a]=!0,Kg(function(){Rg();Og[a]=!1},b))}
function Rg(){null==w("_lact",window)&&Qg();var a=z();v("_lact",a,window);-1==w("_fact",window)&&v("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
;var Tg=z().toString();
function Ug(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Tg)for(a=1,b=0;b<Tg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Tg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Vg="blogger books docs google-live play chat picasaweb gmail jamboard".split(" ");
function Wg(a){C.call(this);a=Bb(a);this.experiments=new Uf(a.fexp,a.fflags);this.forcedExperiments=a.forced_experiments||null;try{var b=document.location.toString()}catch(f){b=""}this.o=b;(b=window.location.ancestorOrigins)&&Array.from(b);this.loaderUrl=(this.D=T(!1,a.is_embed))?V("",a.loaderUrl):this.o;this.H=xg.test(this.loaderUrl);b=this.loaderUrl;var c=void 0===c?!1:c;yg(wg.test(b),b,c,"Trusted Ad Domain URL");this.O=T(!1,a.forcenewui);this.protocol=0==this.o.indexOf("http:")?"http":"https";
this.baseYtUrl=zg(a.BASE_YT_URL||"")||zg(this.o)||this.protocol+"://www.youtube.com/";c=a.el;b="detailpage";"adunit"==c?b=this.D?"embedded":"detailpage":"embedded"==c||this.H?b=qg(b,c,Tf):c&&(b="embedded");this.j=b;Qg();c=null;b=a.ps;var d=Pa(Vg,b);!b||d&&!this.H||(c=b);this.playerStyle=c;this.S=(this.C=Pa(Vg,this.playerStyle))&&"play"!=this.playerStyle&&"jamboard"!=this.playerStyle;this.T=!this.S;c={};this.b=(c.c=a.c||"web",c.cver=a.cver||"html5",c.cplayer="UNIPLAYER",c);(this.L=T(!1,a.disableplaybackui))||
fg();this.l=T("blazer"==this.playerStyle,a.is_html5_mobile_device);this.l||(c=parseInt(z()/1E3,10),b=Fg.ta(),O(this.experiments,"block_desktop_background_playback_with_mobile_cookie")&&b&&b.get("dhmu",c.toString()));c=fg();try{c.muted=!c.muted}catch(f){}this.m=this.O||T(!("adunit"==this.j||"gvn"==this.playerStyle)&&"detailpage"!=this.j&&!this.C,a.showinfo);this.Z=T(!1,a.playsinline);c=this.l&&mg&&2.3>=lg;b=this.l;c=Hc&&!this.Z||R("nintendo wiiu")||R("nintendo 3ds")||!c&&T(b,a.use_native_controls)?
"3":"1";this.J="0"!=a.controls?c:"0";this.useTabletControls=this.l;this.color=qg("red",a.color,Lf);this.widgetReferrer=V("",a.widget_referrer);c=("detailpage"==this.j||"adunit"==this.j||"gvn"==this.playerStyle)&&"blazer"==this.playerStyle;(this.R=!T(!0,a.fs))||c||ef();this.loop=T(!1,a.loop);this.pageId=V("",a.pageid);this.mute=T(!1,a.mute);this.useMiniplayerUi=T(!1,a.use_miniplayer_ui);this.storeUserVolume=!this.mute&&T("0"!=this.J,a.store_user_volume);this.region=V("US",a.cr);this.hostLanguage=V("en",
a.host_language);this.deviceHasDisplay=T(!0,a.deviceHasDisplay);this.B=U(this.B,a.ismb);c=this.experiments.flags.html5_qoe_intercept;c&&c.toString()||!this.T||(c=a.vss_host||"s.youtube.com",O(this.experiments,"www_for_videostats")&&"s.youtube.com"==c&&Xg(this.baseYtUrl));c=a;for(var e in Yg)b=Yg[e],d=c[b],void 0!=d&&(this.b[b]=d);e=c.cl;!this.fa&&e&&(this.fa=+e);this.userAge=U(this.userAge,c.user_age);this.userDisplayImage=V(this.userDisplayImage,c.user_display_image);Ag(this.userDisplayImage)||(this.userDisplayImage=
"");this.userDisplayName=V(this.userDisplayName,c.user_display_name);this.userGender=V(this.userGender,c.user_gender);this.csiPageType=V(this.csiPageType,c.csi_page_type);this.ga=new pg;pb(this,Ea(qb,this.ga));new ng;e=new Mf;!O(this.experiments,"html5_tv_interface_check_killswitch")&&/^TVHTML5/.test(this.b.c)?c=!0:(c=this.b.cplatform,c=Kc&&R("crkey")&&O(this.experiments,"html5_tv_chromecast_check_killswitch")||"TV"==c);c&&(e.g=!0,e.l=.1);O(this.experiments,"html5_ewma_bandwidth_estimator")&&(e.g=
!0);this.B&&(e.j=this.B/8);e.b=parseFloat(this.experiments.flags.html5_bandwidth_window_size)||e.b;e.m=O(this.experiments,"html5_dont_predict_end_time_in_past");this.schedule=new Sf(e);this.enableSafetyMode=T(!1,a.enable_safety_mode);L();this.disableNativeContextMenu=T(!1,"docs"==this.playerStyle?a.disable_native_context_menu:void 0)}
n(Wg,C);Wg.prototype.getVideoUrl=function(a,b,c,d,e){b={list:b};c&&(e?b.time_continue=c:b.t=c);"gaming"==this.playerStyle?c="gaming.youtube.com":(c=Xg(this.baseYtUrl),c="www.youtube-nocookie.com"==c?"www.youtube.com":c);d&&"www.youtube.com"==c?d="https://youtu.be/"+a:"WEB_UNPLUGGED"==this.b.c?(d="https://"+c+"/fire",b.v=a):(d=this.protocol+"://"+c+"/watch",b.v=a,eg&&(a=w("yt.ads.biscotti.lastId_")||"")&&(b.ebc=a));return he(d,b)};
function Xg(a){var b=de(K(3,a));return(a=Number(K(4,a))||null)?b+":"+a:b}
var Yg={Ta:"cbrand",Ua:"cbr",Va:"cbrver",ab:"c",eb:"cver",cb:"ctheme",bb:"cplayer",hb:"cmodel",ib:"cnetwork",kb:"cos",lb:"cosver",mb:"cplatform"};var Zg=1;function $g(a){C.call(this);this.b={};this.m={};this.element=ah(this,a)}
n($g,C);
function ah(a,b,c){c=c||"svg"==b.G;if(c){var d=document.createElementNS("http://www.w3.org/2000/svg",b.G);Lb&&(b.X||(b.X={}),b.X.focusable="false")}else d=document.createElement(String(b.G));var e=b.ca;if(e){if(e=bh(a,d,"class",e))ch(a,d,"class",e),a.b[e]=d}else if(e=b.na){for(var f=0;f<e.length;f++)a.b[e[f]]=d;ch(a,d,"class",e.join(" "))}if(e=b.Y)for(var g=f=0;g<e.length;g++){var h=e[g];if(h)if(t(h))h=bh(a,d,"child",h),null!=h&&d.appendChild(document.createTextNode(String(h)));else if(h.element)d.appendChild(h.element);else{var k=
h;h=ah(a,k,c);d.appendChild(h);k.Ab&&(k="ytp-id-"+Zg++,h.id=k,h=document.createElementNS("http://www.w3.org/2000/svg","use"),h.setAttribute("class","ytp-svg-shadow"),h.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+k),k=f++,d.insertBefore(h,d.childNodes[k]||null))}}if(b=b.X){c=d;for(var l in b)e=b[l],null!=e&&ch(a,c,l,t(e)?bh(a,c,l,e):e)}return d}
function bh(a,b,c,d){return"{{"==d.substr(0,2)?(a.m[d]=[b,c],null):d}
$g.prototype.update=function(a){for(var b in a)this.updateValue(b,a[b])};
$g.prototype.updateValue=function(a,b){var c=this.m["{{"+a+"}}"];c&&ch(this,c[0],c[1],b)};
function ch(a,b,c,d){if("child"==c){for(;c=b.firstChild;)b.removeChild(c);if(!xa(d)||za(d)&&t(d.G))d=[d];c=d;d=[];for(var e=0;e<c.length;e++){var f=c[e];if(null!=f){var g=f.nodeType;if(1==g||3==g)d.push(f);else if(za(f)&&t(f.G))d.push(ah(a,f));else if(f.element)d.push(f.element);else if(t(f)&&-1!=f.indexOf("\n"))for(f=f.split("\n"),g=0;g<f.length;g++)0<g&&d.push(document.createElement("BR")),d.push(document.createTextNode(String(f[g])));else d.push(document.createTextNode(String(f)))}}for(a=0;a<d.length;a++)b.appendChild(d[a])}else"style"==
c?b.style.cssText=d?d:"":null===d?b.removeAttribute(c):b.setAttribute(c,d.toString())}
$g.prototype.I=function(){this.b={};this.m={};var a=this.element;a&&a.parentNode&&a.parentNode.removeChild(a);C.prototype.I.call(this)};function dh(a){$g.call(this,a);this.o="";this.j=!0;this.l=[]}
n(dh,$g);dh.prototype.show=function(){this.j||(this.element.style.display=this.o,this.j=!0)};
dh.prototype.hide=function(){this.j&&(this.element.style.display="none",this.j=!1)};
dh.prototype.focus=function(){var a=this.element;("A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!jd(a)||kd(a)):jd(a)&&kd(a))&&G&&(!ya(a.getBoundingClientRect)||G&&null==a.parentElement||a.getBoundingClientRect());this.element.focus()};
dh.prototype.I=function(){for(;this.l.length;){var a=this.l.pop();a.target.removeEventListener(a.type,a.listener)}$g.prototype.I.call(this)};function eh(a,b,c,d,e,f){this.duration=c;this.endTime=b+c;this.ingestionTime=d;this.b=a;this.sourceURL=e;this.startTime=b;this.range=f||null}
;function fh(){this.segments=[]}
fh.prototype.g=function(){return this.segments.length?this.segments[this.segments.length-1].b:-1};
fh.prototype.l=function(){return 0<this.segments.length};
function gh(a,b){if(b>a.g())a.segments=[];else{var c=Oa(a.segments,function(a){return a.b>=b},a);
0<c&&a.segments.splice(0,c)}}
;function hh(a,b,c){this.V=a;this.durationSecs=b;this.context=c}
;function ih(a,b){this.start=a;this.end=b;this.length=b-a+1}
function jh(a){a=a.split("-");return 2==a.length&&(a=new ih(parseInt(a[0],10),parseInt(a[1],10)),!isNaN(a.start)&&!isNaN(a.end)&&!isNaN(a.length)&&0<a.length)?a:null}
ih.prototype.toString=function(){return this.start+"-"+(null==this.end?"":this.end)};function kh(a){this.g=a;this.b={}}
kh.prototype.set=function(a,b){this.b[a]!==b&&(this.b[a]=b)};
kh.prototype.get=function(a){if(this.g){var b=this.g;var c=void 0===c?!1:c;if(!yg(vg.test(b),b,c,"Trusted Stream URL"))throw Error("Untrusted URL: "+this.g);b=this.g;c=b instanceof ie?new ie(b):new ie(b,void 0);var d=c.b;if(0==d.indexOf("/videoplayback"))d=d.substr(14);else if(0==d.indexOf("/api/manifest")){b=d.indexOf("/",12);var e=d.indexOf("/",b+1);d=0<b&&0<e?d.substr(e+1):""}else d="";b=this.b;d=d.split("/");e=0;d[0]||e++;for(var f={};e<d.length;e+=2)d[e]&&lh(f,d[e],d[e+1]);d=this.b=f;c=c.l.toString().split("&");
e={};for(f=0;f<c.length;f++){var g=c[f],h=g.indexOf("=");0<h?lh(e,g.substr(0,h),g.substr(h+1)):g&&(e[g]="")}for(var k in e)d[k]=e[k];k=this.b;for(var l in b)k[l]=b[l];"index.m3u8"==this.b.file&&delete this.b.file;this.g=""}return this.b[a]||null};
function lh(a,b,c){if("cmo"==b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c}
;function mh(){}
;function nh(a,b,c){this.index=null;this.info=b;this.initRange=c||null;this.resource=new mh}
;function oh(a,b,c,d,e){nh.call(this,a,b,d);this.index=e||new fh}
n(oh,nh);oh.prototype.update=function(a,b,c){b=this.index;if(0!=a.length)if(a=Ra(a),0==b.segments.length)b.segments=a;else{var d=b.segments.length?Ia(b.segments).endTime:0,e=a[0].b-b.g();if(1<e){var f=b.segments;if(!xa(f))for(var g=f.length-1;0<=g;g--)delete f[g];f.length=0}for(e=0<e?0:-e+1;e<a.length;e++)f=a[e],f.startTime=d,f.endTime=f.startTime+f.duration,d+=a[e].duration,b.segments.push(a[e])}gh(this.index,c)};function ph(a,b,c,d){this.b=a;this.V=b;this.durationSecs=c;this.g=d||NaN}
;function X(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName==c)){var d=a.getAttribute(b);if(d)return d}return""}
function qh(a,b){for(var c=a;c;c=c.parentNode){var d=c.getElementsByTagName(b);if(0<d.length)return d[0]}return null}
function rh(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*parseFloat(b[2]||0)+60*parseFloat(b[4]||0)+parseFloat(b[6]||0):parseFloat(a)}
function sh(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/)?a+"Z":a}
;function th(){this.b=[];this.g=null;this.m=0;this.l=[];this.j=!1;this.A=""}
th.prototype.update=function(a,b){var c=void 0;this.g&&(c=this.g);var d=new th,e=Array.from(a.getElementsByTagName("S"));if(e.length){var f=+X(a,"timescale")||1,g=(+e[0].getAttribute("t")||0)/f,h=+X(a,"startNumber")||0;var k=g;var l=+X(a,"presentationTimeOffset")||0;k=c?c.V+c.durationSecs:b?k-l/f:0;l=Date.parse(sh(X(a,"yt:segmentIngestTime")))/1E3;d.j="SegmentTemplate"==a.parentNode.tagName;d.j&&(d.A=X(a,"media"));var p=c?h-c.b:1;d.m=0<p?0:-p+1;e=oa(e);for(p=e.next();!p.done;p=e.next()){p=p.value;
for(var u=+p.getAttribute("d")/f,F=(+p.getAttribute("yt:sid")||0)/f,Pg=+p.getAttribute("r")||0,Wd=0;Wd<=Pg;Wd++)if(c&&h<=c.b)h++;else{var Q=new ph(h,k,u,l+F);d.b.push(Q);var qc=Q.V,Fb=p.getAttribute("yt:cuepointTimeOffset");Q=p.getAttribute("yt:cuepointDuration");Fb&&Q?(qc=+Fb/f+qc,Q=+Q/f,Fb=p.getAttribute("yt:cuepointContext")||null,Q=new hh(qc,Q,Fb)):Q=null;Q&&d.l.push(Q);h++;k+=u;g+=u;l+=u+F}}d.b.length&&(d.g=Ia(d.b))}this.m=d.m;this.g=d.g||this.g;Sa(this.b,d.b);Sa(this.l,d.l);this.j=d.j;this.A=
d.A};
function uh(a){var b=a.l;a.l=[];return b}
;function vh(){this.l=[];this.b=null;this.g={};this.j={}}
function wh(a,b,c){var d=[];b=Array.from(b.getElementsByTagName("SegmentTimeline"));b=oa(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.parentNode.parentNode,g=null;"Period"==f.nodeName?g=xh(a):"AdaptationSet"==f.nodeName?g=yh(a,f.attributes.id?f.attributes.id.value:f.attributes.mimetype.value):"Representation"==f.nodeName&&(g=zh(a,f.attributes.id.value));if(null==g)return;g.update(e,c);Sa(d,uh(g))}Wa(d,function(a){return a.V});
Sa(a.l,d)}
function Ah(a){a.b&&(a.b.b=[]);ub(a.g,function(a){a.b=[]});
ub(a.j,function(a){a.b=[]})}
function xh(a){a.b||(a.b=new th);return a.b}
function yh(a,b){a.g[b]||(a.g[b]=new th);return a.g[b]}
function zh(a,b){a.j[b]||(a.j[b]=new th);return a.j[b]}
;function Bh(){this.b=new Float64Array(128);this.j=new Float64Array(128)}
Bh.prototype.g=function(){return-1};
Bh.prototype.l=function(){return 0<=this.g()};
Bh.prototype.cap=function(a,b){if(1>this.b.length){var c=2*this.b.length;c+=2;var d=this.b;this.b=new Float64Array(c+1);var e=this.j;this.j=new Float64Array(c+1);for(c=0;1>c;c++)this.b[c]=d[c],this.j[c]=e[c]}this.j[0]=b;this.b[0]=a};function Ch(a,b,c,d,e,f){nh.call(this,a,b,c||void 0);this.indexRange=d;this.index=new Bh;this.lastModified=f}
n(Ch,nh);function Dh(a,b){return Eh(function(a,b){return Jf(a,b)},a,b)}
function Eh(a,b,c){return a(b,c).then(function(b){var d;b.responseType&&"text"!=b.responseType?"arraybuffer"==b.responseType&&(d=String.fromCharCode.apply(String,new Uint8Array(b.response))):d=b.responseText;return(d=!d||2048<d.length?"":0==d.indexOf("https://")?d:"")?Eh(a,d,c):b})}
;var Fh={sU:function(a,b){a.splice(0,b)},
Ya:function(a){a.reverse()},
Ji:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};
function Gh(a){a=a.split("");Fh.Ya(a,5);Fh.Ji(a,51);Fh.Ya(a,6);Fh.Ji(a,24);Fh.sU(a,3);Fh.Ji(a,70);Fh.Ya(a,72);return a.join("")}
;function Hh(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;S.call(this);this.J=this.duration=0;this.isLive=!1;this.D=L();this.l=Infinity;this.b={};this.L=a||"";this.o=0;this.j=null;this.R=!!b&&O(b,"html5_live_nonzero_first_segment_start_time");this.S=!!b&&O(b,"html5_live_self_init_segments");this.C=null;this.T=c;this.Z=!b||!O(b,"html5_manifest_without_credentials");this.H=!!b&&O(b,"disable_html5_manifest_namespace_redux");this.O=""}
n(Hh,S);function Ih(a){vb(a.b,function(a){return!!a.info.g})}
function Jh(a){return vb(a.b,function(a){return a.info.video?2==a.info.video.projectionType:!1})}
function Kh(a){return vb(a.b,function(a){return a.info.video?3==a.info.video.projectionType:!1})}
function Lh(a){return vb(a.b,function(a){return a.info.video?4==a.info.video.projectionType:!1})}
function Mh(a){return vb(a.b,function(a){return a.info.video?1==a.info.video.stereoLayout:!1})}
function Nh(a,b,c){c=void 0===c?0:c;var d=new Hh("",void 0,!1);d.duration=c||0;B(a,function(a){var c=Oh(a,b),e=jh(a.init),h=jh(a.index),k=parseInt(a.clen,10),l=Ph(a.url,a.sp,a.s);a=parseInt(a.lmt,10);l&&(c=new Ch(l,c,e,h,k,a),d.b[c.info.id]=c)});
return d}
function Oh(a,b){var c=a.type,d=Qh(a),e=null,f=null;dg(c)&&(e=(a.size||"640x360").split("x"),e=new ag(+e[0],+e[1],+a.fps,+a.projection_type,+a.stereo_layout,!!a.isAccelerated,a.quality_label,a.eotf,a.primaries),c=Rh(c,e));var g=null;cg(c)&&(g=new Vf(void 0,+a.spatial_audio_type));a.caption_display_name&&a.caption_vss_id&&a.caption_language_code&&(f=new Wf(a.caption_display_name,a.caption_vss_id,a.caption_language_code,a.caption_kind));var h=parseInt(a.bitrate,10)/8,k=null;b&&a.drm_families&&(k={},
B(a.drm_families.split(","),function(a){k[a]=b[a]}));
return new bg(d,c,g,e,k,h,f)}
function Qh(a){var b=a.itag,c=a.xtags;c&&(b=a.itag+";"+c);return b}
m=Hh.prototype;
m.Oa=function(a){var b=a.getElementsByTagName("Representation");if(0<a.getElementsByTagName("SegmentList").length||0<a.getElementsByTagName("SegmentTemplate").length){this.j||(this.j=new vh);wh(this.j,a,this.R);this.m("refresh");for(a=0;a<b.length;a++){var c=Sh(this,b[a]),d=this.isLive&&1==c.containerType&&this.S;if(!this.b[c.id]){var e=Ph(qh(b[a],"BaseURL").textContent),f=qh(b[a],"Initialization"),g=X(f,"sourceURL");f=jh(X(f,"range"));d&&(g="",f=void 0);this.b[c.id]=new oh(e,c,g,null===f?void 0:
f)}c=this.b[c.id];e=X(b[a],"id","AdaptationSet");e=""!=e?e:X(b[a],"mimetype","AdaptationSet");g=this.j;e=g.j[c.info.id]||g.g[e]||g.b||null;g=e.b;if(e.j)for(d=[],g=oa(g),f=g.next();!f.done;f=g.next()){f=f.value;for(var h=c.info.id,k=8*c.info.b,l=f.b,p=f.V,u=e.A.split("$$"),F=0;F<u.length;F++)u[F]=u[F].replace("$RepresentationID$",h),u[F]=u[F].replace("$Number$",l.toString()),u[F]=u[F].replace("$Bandwidth$",k.toString()),u[F]=u[F].replace("$Time$",p.toString());d.push(new eh(f.b,f.V,f.durationSecs,
f.g,u.join("$"),null))}else{e=Ta(qh(b[a],"SegmentList").getElementsByTagName("SegmentURL"),e.m);f=[];for(h=0;h<e.length;h++)f.push(Th(e[h],g[h],d));d=f}c.update(d,this.isLive,this.J)}Ah(this.j);return!0}this.duration=rh(X(a,"mediaPresentationDuration"));a:{for(a=0;a<b.length;a++){g=b[a];c=Sh(this,g);e=qh(g,"BaseURL");d=Ph(e.textContent);f=qh(g,"SegmentBase");g=jh(f.attributes.indexRange.value);f=jh(f.getElementsByTagName("Initialization")[0].attributes.range.value);e=parseInt(e.getAttribute(Uh(this,
"contentLength")),10);c=new Ch(d,c,f,g,e,NaN);if(!c){b=!1;break a}this.b[c.info.id]=c}b=!0}return b};
function Ph(a,b,c){b=void 0===b?"":b;c=void 0===c?"":c;var d=new kh(a);a.match(/https:\/\/yt.akamaized.net/)||d.set("alr","yes");c&&(b||(b="signature"),d.set(b,Gh(c)));return d}
function Sh(a,b){var c=X(b,"id");c=c.replace(":",";");"captions"==c&&(c=X(b,"lang"));var d=X(b,"mimeType"),e=X(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=parseInt(X(b,"bandwidth"),10)/8;qh(b,"BaseURL").getAttribute(Uh(a,"contentLength"));var f=null;if(dg(d)){f=parseInt(X(b,"width"),10);var g=parseInt(X(b,"height"),10),h=parseInt(X(b,"frameRate"),10),k=Vh(X(b,Uh(a,"projectionType")));a:switch(X(b,Uh(a,"stereoLayout"))){case "layout_left_right":var l=1;break a;case "layout_top_bottom":l=2;break a;default:l=
0}X(b,"video_level");f=new ag(f,g,h,k,l,void 0,void 0,void 0,void 0)}g=null;cg(d)&&(g=parseInt(X(b,"audioSamplingRate"),10),X(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"),h=Wh(X(b,Uh(a,"spatialAudioType"))),g=new Vf(g,h),X(b,"lang"),h=qh(b,"Role"))&&(h=X(h,"value")||"",null!==Xh&&h in Xh&&X(b,Uh(a,"langName")));k=null;if(h=qh(b,"ContentProtection"))if(R("cobalt"))if((k=h.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==k.value)for(k={},h=h.firstChild;null!=h;h=h.nextSibling)"yt:SystemURL"==
h.nodeName&&(k[h.attributes.type.value]=h.textContent.trim());else k=null;else if((k=h.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==k.textContent)for(k={},h=h.firstChild;null!=h;h=h.nextSibling)"SystemURL"==h.localName&&"http://youtube.com/yt/2012/10/10"==h.namespaceURI&&(k[h.attributes.type.textContent]=h.textContent.trim());else k=null;return new bg(c,d,g,f,k,e)}
function Vh(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}}
function Wh(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return 1;case "spatial_audio_type_ambisonics_quad":return 2;case "spatial_audio_type_foa_with_non_diegetic":return 3;default:return 0}}
function Yh(a,b){b=void 0===b?"":b;a.o=1;a.D=L();return uc(Dh(b||a.L,{format:"RAW",method:"GET",withCredentials:a.Z}).then(y(a.Ea,a)),y(a.Fa,a))}
m.Ea=function(a){if(this.g)return this;a=a.responseText;a=(new DOMParser).parseFromString(a,"text/xml").getElementsByTagName("MPD")[0];this.l=1E3*rh(X(a,"minimumUpdatePeriod"))||Infinity;if(!this.H){var b;a:{for(b=0;b<a.attributes.length;b++)if("http://youtube.com/yt/2012/10/10"==a.attributes[b].value){b=a.attributes[b].name.split(":")[1];break a}b=""}this.O=b}this.isLive=Infinity>this.l&&this.T;this.J=parseInt(X(a,Uh(this,"earliestMediaSequence")),10)||0;Date.parse(sh(X(a,Uh(this,"mpdResponseTime"))))&&
z();this.isLive&&0>=a.getElementsByTagName("SegmentTimeline").length||Ma(a.getElementsByTagName("Period"),this.Oa,this);this.o=2;this.m("loaded");Zh(this);return this};
m.Fa=function(a){this.o=3;this.m("loaderror");return sc(a.b)};
function Th(a,b,c){var d=a.getAttribute("media"),e=null;c||(a=a.getAttribute("mediaRange"),null!=a&&(0<=parseInt(a.split("-")[1],10)?e=jh(a):d=d+"?range="+a));return new eh(b.b,b.V,b.durationSecs,b.g,d,e)}
m.va=function(){if(1!=this.o&&!this.g){var a=he(this.L,{start_seq:$h(this).toString()});uc(Yh(this,a),function(){})}};
m.resume=function(){Zh(this)};
function Zh(a){var b=a.l;isFinite(b)&&(a.isLive&&L()-a.D>=a.l?a.va():(b=Math.max(0,a.D+b-L()),a.C||(a.C=new Fc(a.va,b,a),pb(a,Ea(qb,a.C))),a.C.start(b)))}
function $h(a){a=a.b;for(var b in a){var c=a[b].index;if(c&&c.l())return c.g()+1}return 0}
function Uh(a,b){return a.H?"yt:"+b:a.O+":"+b}
function Rh(a,b){null===ai&&(ai=window.MediaSource&&MediaSource.isTypeSupported&&MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16.09"')&&!MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99.99"'));if(!ai&&!bi||'video/webm; codecs="vp9"'!=a&&'video/webm; codecs="vp9.2"'!=a)return a;var c="00",d="08",e="01",f="01",g="01";'video/webm; codecs="vp9.2"'==a&&(c="02",d="10","bt2020"==b.primaries&&(g=e="09"),"smpte2084"==b.b&&(f="16"),"arib-std-b67"==b.b&&(f="18"));
return'video/webm; codecs="'+["vp09",c,"51",d,"01",e,f,g].join(".")+'"'}
var ai=null,bi=!1,Xh={commentary:1,alternate:2,dub:3,main:4};function ci(a){this.languageCode=a.languageCode;this.languageName=a.languageName||null;this.b=a.languageOriginal||null;this.id=a.id||null;this.isDefault=a.is_default||!1}
ci.prototype.toString=function(){return this.languageCode+"_"+this.languageName+"_"+this.b+"_"+this.id+"_"+this.isDefault};function di(a){a=void 0===a?{}:a;this.l=a.formats||"";this.b=a.format||1;if(1==this.b)for(var b=this.l.split(","),c=0;c<b.length;c++){var d=parseInt(b[c],10);isNaN(d)||(this.b=Math.max(d,this.b))}this.A=a.languageCode||"";this.o=a.languageName;this.m=a.kind||"";this.j=a.name;this.B=a.vss_id||"";this.isDefault=a.is_default;this.g=null;if(a=a.translationLanguage)this.g=new ci(a)}
di.prototype.toString=function(){var a=this.A+": ",b=this.o||"",c=[b];"asr"==this.m&&-1==b.indexOf("(")&&c.push(" ("+Yf("YTP_ASR_SETTINGS_LABEL")+")");this.j&&c.push(" - "+this.j);this.g&&c.push(" >> "+this.g.languageName);return a+c.join("")+" - "+this.B};
di.prototype.equals=function(a){return a?this.toString()==a.toString():!1};function ei(a,b){this.errorCode=a;this.details=b||{}}
;var fi={rb:"UNKNOWN",jb:"NORMAL",gb:"LOW",qb:"ULTRALOW"};var gi={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"};function hi(a){for(var b in gi){var c=b;Ag(a[c+"_webp"]||a[c])}}
function ii(a){if(a&&a.thumbnails){var b=null;a=oa(a.thumbnails);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.url;Ag(0==d.indexOf("//")?"https:"+d:d)&&(!b||b.width<c.width)&&(b=c)}}}
;function ji(a){return M("EXPERIMENT_FLAGS",{})[a]}
;var ki=Math.pow(2,16)-1,li={log_event:"events",log_interaction:"interactions"},mi=Object.create(null);mi.log_event="GENERIC_EVENT_LOGGING";mi.log_interaction="INTERACTION_LOGGING";var ni={},oi=0,Y=w("ytLoggingTransportLogPayloadsQueue_")||{};v("ytLoggingTransportLogPayloadsQueue_",Y,void 0);var pi=w("ytLoggingTransportTokensToCttTargetIds_")||{};v("ytLoggingTransportTokensToCttTargetIds_",pi,void 0);var qi=w("ytLoggingTransportDispatchedStats_")||{};v("ytLoggingTransportDispatchedStats_",qi,void 0);
v("ytytLoggingTransportCapturedTime_",w("ytLoggingTransportCapturedTime_")||{},void 0);
function ri(){window.clearTimeout(oi);if(!zb(Y)){for(var a in Y){var b=ni[a];if(b){var c=void 0,d=a,e=b,f=li[d],g=qi[d]||{};qi[d]=g;b=Math.round(L());for(c in Y[d]){var h=e.b;h={client:{hl:h.Ja,gl:h.Ia,clientName:h.Ha,clientVersion:h.innertubeContextClientVersion}};var k=window.devicePixelRatio;k&&1!=k&&(h.client.screenDensityFloat=String(k));M("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});h={context:h};h[f]=si(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=
h[f].length;if(k=pi[c])a:{var l=h,p=c;if(k.videoId)var u="VIDEO";else if(k.playlistId)u="PLAYLIST";else break a;l.credentialTransferTokenTargetId=k;l.context=l.context||{};l.context.user=l.context.user||{};l.context.user.credentialTransferTokens=[{token:p,scope:u}]}delete pi[c];k=h;k.requestTimeMs=b;(u=M("EVENT_ID",void 0))&&ji("enable_gel_web_client_event_id")&&(l=(M("BATCH_CLIENT_COUNTER",void 0)||0)+1,l>ki&&(l=1),De("BATCH_CLIENT_COUNTER",l),k.serializedClientEventId={serializedEventId:u,clientCounter:l});
ti(e,d,h,{retry:!0})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete Y[a]}}zb(Y)||ui()}}
function ui(){window.clearTimeout(oi);oi=Ke(ri,M("LOGGING_BATCH_TIMEOUT",1E4))}
function si(a,b){b=void 0===b?"":b;Y[a]=Y[a]||{};Y[a][b]=Y[a][b]||[];return Y[a][b]}
;function vi(a,b,c){var d,e=wi,f={};f.eventTimeMs=Math.round(c||L());f[a]=b;a=String;c?c=-1:(c=w("_lact",window),c=null==c?-1:Math.max(z()-c,0));f.context={lastActivityMs:a(c)};c="log_event";a=void 0;a=si(c);a.push(f);ni[c]=new e;a.length>=(Number(ji("web_logging_max_batch")||0)||20)?ri():ui()}
;function xi(a,b){var c={"X-Goog-Visitor-Id":M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return c;var d;a?d="Bearer "+w("gapi.auth.getToken")().ub:d=ob([]);d&&(c.Authorization=d,c["X-Goog-AuthUser"]=M("SESSION_INDEX",0));return c}
function yi(a){a=Object.assign({},a);delete a.Authorization;var b=ob();if(b){var c=new Pc;c.update(M("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();x(b);if(!Mc)for(Mc={},Nc={},c=0;65>c;c++)Mc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Nc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Nc;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,k=e+2<b.length,l=k?b[e+2]:0,p=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<
2|l>>6;l&=63;k||(l=64,g||(h=64));d.push(c[p],c[f],c[h],c[l])}a.hash=d.join("")}return a}
;function zi(){var a=new Sd;(a=a.isAvailable()?new $d(a,"yt.innertube"):null)||(a=new Ud("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new Nd(a):null;this.g=document.domain||window.location.hostname}
zi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(zd(b))}catch(f){return}else e=escape(b);b=this.g;nb.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
zi.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=nb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
zi.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.g;nb.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ai=new zi;function Bi(a,b,c,d){if(d)return null;d=Ai.get("nextId",!0)||1;var e=Ai.get("requests",!0)||{};e[d]={method:a,request:b,authState:yi(c),requestTime:Math.round(L())};Ai.set("nextId",d+1,86400,!0);Ai.set("requests",e,86400,!0);return d}
function Ci(a){var b=Ai.get("requests",!0)||{};delete b[a];Ai.set("requests",b,86400,!0)}
function Di(a){var b=Ai.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(L())-d.requestTime)){var e=d.authState,f=yi(xi(!1));Ab(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(L())),ti(a,d.method,e,{}));delete b[c]}}Ai.set("requests",b,86400,!0)}}
;function wi(a){var b=this;this.b=a||{innertubeApiKey:Ee("INNERTUBE_API_KEY"),innertubeApiVersion:Ee("INNERTUBE_API_VERSION"),Ha:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Ee("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ja:Ee("INNERTUBE_CONTEXT_HL"),Ia:Ee("INNERTUBE_CONTEXT_GL"),Ka:Ee("INNERTUBE_HOST_OVERRIDE")||"",La:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Lg(function(){Di(b)},0,5E3)}
function ti(a,b,c,d){!M("VISITOR_DATA")&&.01>Math.random()&&Ge(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",M:c,ya:"JSON",ea:function(){d.ea()},
xa:d.ea,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
wa:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
zb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Ka;g&&(f=g);g=a.b.La||!1;var h=xi(g,f);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,l;if(d.retry&&ji("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Bi(b,c,h,g))){var p=e.onSuccess,u=e.wa;e.onSuccess=function(a,b){Ci(l);p(a,b)};
c.wa=function(a,b){Ci(l);u(a,b)}}try{ji("use_fetch_for_op_xhr")?Se(k,e):(e.method="POST",e.M||(e.M={}),Ve(k,e))}catch(F){if("InvalidAccessError"==F)l&&(Ci(l),l=0),Ge(Error("An extension is blocking network request."),"WARNING");
else throw F;}l&&Lg(function(){Di(a)},0,5E3)}
;var Ei=w("ytLoggingLatencyUsageStats_")||{};v("ytLoggingLatencyUsageStats_",Ei,void 0);var Fi=0;function Gi(a){Ei[a]=Ei[a]||{count:0};var b=Ei[a];b.count++;b.time=L();Fi||(Fi=Lg(Hi,0,5E3));return 10<b.count?(11==b.count&&cf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function Hi(){var a=L(),b;for(b in Ei)6E4<a-Ei[b].time&&delete Ei[b];Fi=0}
;Ug();var Ii={},Ji=0;
function Ki(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&!R("cobalt")?a&&(a instanceof I||(a=a.ba?a.aa():String(a),Wc.test(a)||(a="about:invalid#zClosurez"),a=Xc(a)),b=Vc(a),"about:invalid#zClosurez"===b?a="":(b instanceof Yc?a=b:(a=null,b.ka&&(a=b.ia()),b=ab(b.ba?b.aa():String(b)),a=$c(b,a)),a instanceof Yc&&a.constructor===Yc&&a.j===Zc?a=a.b:(wa(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(zd(a)))),/^[\s\xa0]*$/.test(a)||(a=gd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',
style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?We(a,b,"POST",e,d):M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?We(a,b,"GET","",d):Li(a,b))}
function Li(a,b){var c=new Image,d=""+Ji++;Ii[d]=c;c.onload=c.onerror=function(){b&&Ii[d]&&b();delete Ii[d]};
c.src=a}
;function Mi(a,b){this.version=a;this.args=b}
;function Ni(a){this.topic=a}
Ni.prototype.toString=function(){return this.topic};var Oi=w("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.da;J.prototype.publish=J.prototype.ja;J.prototype.clear=J.prototype.clear;v("ytPubsub2Pubsub2Instance",Oi,void 0);v("ytPubsub2Pubsub2SubscribedKeys",w("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);v("ytPubsub2Pubsub2TopicToKeys",w("ytPubsub2Pubsub2TopicToKeys")||{},void 0);v("ytPubsub2Pubsub2IsAsync",w("ytPubsub2Pubsub2IsAsync")||{},void 0);
v("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Pi(a,b){var c=w("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var Qi=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Ri(){var a=M("TIMING_TICK_EXPIRATION");a||(a={},De("TIMING_TICK_EXPIRATION",a));return a}
function Si(){var a=Ri(),b;for(b in a)Ng(a[b]);De("TIMING_TICK_EXPIRATION",{})}
;function Ti(a,b){Mi.call(this,1,arguments)}
n(Ti,Mi);function Ui(a,b){Mi.call(this,1,arguments)}
n(Ui,Mi);var Vi=new Ni("aft-recorded"),Wi=new Ni("timing-sent");var Xi={vc:!0},Z={},Yi=(Z.ad_allowed="adTypesAllowed",Z.ad_at="adType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.csn="clientScreenNonce",Z.docid="videoId",Z.is_nav="isNavigation",Z.yt_lt="loadType",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.ncnp="webInfo.nonPreloadedNodeCount",Z.paused="playerInfo.isPausedOnLoad",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_ad_pr=
"prerollAllowed",Z.yt_red="isRedSubscriber",Z.st="serverTimeMs",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z),Zi="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),$i="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
aj=!1;function bj(a){cj(a);dj();ej(!1,a);a||(M("TIMING_ACTION")&&De("PREVIOUS_ACTION",M("TIMING_ACTION")),De("TIMING_ACTION",""))}
function fj(a,b,c){if(!b&&"_"!=a[0]){var d=a;Qi.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Qi.mark(d))}d=gj(c);var e=b||L();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=Ri();if(e=d[a])Ng(e),d[a]=0;hj(c)["tick_"+a]=b;c||b||L();ij()?(d=jj(c),"_start"==a?Gi("baseline_"+d)||vi("latencyActionBaselined",{clientActionNonce:d},b):Gi("tick_"+a+"_"+d)||vi("latencyActionTicked",{tickName:a,clientActionNonce:d},b),a=!0):a=!1;if(!a&&!w("yt.timing."+(c||"")+"pingSent_")&&
(b=Ee((c||"")+"TIMING_ACTION"),a=gj(c),w("ytglobal.timing"+(c||"")+"ready_")&&b&&a._start&&(b=kj(c))))if(ji("tighter_critical_section")&&!aj&&(Pi(Vi,new Ti(Math.round(b-a._start),c)),aj=!0),c)lj(c);else{b=!0;d=M("TIMING_WAIT",[]);if(d.length){e=0;for(var f=d.length;e<f;++e)if(!(d[e]in a)){b=!1;break}}b&&lj(c)}}
function mj(a){"_start"in gj("video_to_ad")&&fj(a,void 0,"video_to_ad")}
function nj(a){var b=oj(a).info.yt_lt="hot_bg";hj(a).info_yt_lt=b;if(ij())if("yt_lt"in Yi){var c=Yi.yt_lt;Pa($i,c)&&(b=!!b);if(ij()){var d={};c=c.split(".");for(var e=d,f=0;f<c.length-1;f++)e[c[f]]=e[c[f]]||{},e=e[c[f]];e[c[c.length-1]]=b;a=jj(a);b=Object.keys(d).join("");Gi("info_"+b+"_"+a)||(d.clientActionNonce=a,vi("latencyActionInfo",d,void 0))}}else Pa(Zi,"yt_lt")||Ge(Error("Unknown label yt_lt logged with GEL CSI."))}
function kj(a){var b=gj(a);if(b.aft)return b.aft;a=M((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
var dj=y(Qi.clearResourceTimings||Qi.webkitClearResourceTimings||Qi.mozClearResourceTimings||Qi.msClearResourceTimings||Qi.oClearResourceTimings||ua,Qi);function jj(a){var b=oj(a).nonce;b||(b=Ug(),oj(a).nonce=b);return b}
function gj(a){return oj(a).tick}
function hj(a){a=oj(a);"gel"in a||(a.gel={});return a.gel}
function oj(a){return w("ytcsi."+(a||"")+"data_")||cj(a)}
function cj(a){var b={tick:{},info:{}};v("ytcsi."+(a||"")+"data_",b,void 0);return b}
function ej(a,b){v("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function pj(a){var b=gj(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==oj(a).info.yt_pvis}
function ij(){return!!ji("csi_on_gel")}
function lj(a){Si();if(!ij()){var b=gj(a),c=oj(a).info,d=b._start;for(g in b)if(0==g.lastIndexOf("_",0)&&xa(b[g])){var e=g.slice(1);if(e in Xi){var f=Ka(b[g],function(a){return Math.round(a-d)});
c["all_"+e]=f.join()}delete b[g]}var g=!!c.ap;if(e=w("ytglobal.timingReportbuilder_")){if(b=e(b,c,a))qj(b,g),bj(a)}else{var h=M("CSI_SERVICE_NAME","youtube");e={v:2,s:h,action:M((a||"")+"TIMING_ACTION",void 0)};f=nj.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var k=window.location.protocol+w("ytplayer.config.assets.js");(k=Qi.getEntriesByName?Qi.getEntriesByName(k)[0]:null)?c.h5jse=Math.round(c.h5jse-k.responseEnd):delete c.h5jse}b.aft=kj(a);pj(a)&&"youtube"==h&&(nj(a),h=b.vc,k=b.pbs,delete b.aft,
c.aft=Math.round(k-h));for(var l in c)"_"!=l.charAt(0)&&(e[l]=c[l]);b.ps=L();c={};l=[];for(var p in b)"_"!=p.charAt(0)&&(h=Math.round(b[p]-d),c[p]=h,l.push(p+"."+h));e.rt=l.join(",");(b=w("ytdebug.logTiming"))&&b(e,c);qj(e,g,a);Pi(Wi,new Ui(c.aft+(f||0),a))}}}
function qj(a,b,c){if(ji("debug_csi_data")){var d=w("yt.timing.csiData");d||(d=[],v("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Ki(a,void 0,void 0,void 0,f)}catch(g){Ki(a,void 0,void 0,void 0,f)}}else Ki(a);ej(!0,c)}
;var rj;var sj=D,tj=sj.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!tj||2>tj.length)rj=void 0;else{var uj=sj.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);rj=uj&&6==uj.length?Number(uj[5].replace("_",".")):0}0<=rj&&0<=D.search("Safari")&&D.search("Version");function vj(a){if(a.simpleText)return a.simpleText;if(a.simpleText)a=document.createTextNode(a.simpleText);else{var b=[];if(a.runs)for(var c=0;c<a.runs.length;c++){var d=a.runs[c];d.text&&b.push(wj(d))}a=1==b.length?b[0]:gd("SPAN",null,b)}b=document.createElement("div");b.appendChild(a);return b.textContent}
function wj(a){var b=null,c=a.text;a.bold&&(b=gd("B",null,b||c));a.italics&&(b=gd("I",null,b||c));a.strikethrough&&(b=gd("STRIKE",null,b||c));a.navigationEndpoint&&a.navigationEndpoint.urlEndpoint&&(a=a.navigationEndpoint.urlEndpoint,b=gd("A",null,b||c),ad(b,a.url),"TARGET_NEW_WINDOW"==a.target&&(b.target="_blank"));return b||gd("SPAN",null,c)}
;var xj={0:"UNKNOWN",1:"OFF",2:"ON",3:"FORCED_ON"};
function yj(a){S.call(this);this.adModule=!1;this.adaptiveFormats="";this.oa=null;this.allowEmbed=!0;this.backgroundable=!1;this.relativeLoudness=NaN;this.watchAjaxToken=null;this.author="";this.Z=!1;this.clientScreenNonce=this.clientPlaybackNonce=this.channelBanner=this.channelPath="";this.enableCardioBeforePlayback=this.enableCardio=this.contentCheckOk=!1;this.endSeconds=0;this.isLowLatencyLiveStream=this.isLiveDefaultBroadcast=this.isLiveDestination=this.H=this.isListed=this.O=!1;this.latencyClass=
"UNKNOWN";this.isMdxPlayback=!1;this.mdxControlMode=null;this.isPharma=!1;this.reloadReason="";this.liveChunkReadahead=NaN;this.lengthSeconds=this.liveStartWalltime=0;this.playerParams=null;this.paygated=!1;this.j=[];this.profilePicture=void 0;this.racyCheckOk=!1;this.rootVeType=0;this.autonavState=1;this.startSeconds=0;this.spacecastModule=!1;this.T=this.suggestions=null;this.hlsFormats=this.ra=this.title="";this.ypcOfferButtonFormattedText=null;this.requiresPurchase=!1;this.clipStart=0;this.clipEnd=
Infinity;this.J=this.fa=0;this.captionTracks=[];this.L=[];this.captionTranslationLanguages=[];this.chapterMarkers=[];this.qa={};this.slotPosition=-1;this.breakType=0;this.pa=new Fc(this.Qa,5E3,this);pb(this,Ea(qb,this.pa));this.ga=0;this.b=null;this.defraggedFromSubfragments=this.hasSubfragmentedFmp4=!1;this.liveExperimentalContentId=NaN;this.S=[];this.R=[];this.isDni=!1;this.dniColor="";this.C={};this.keywords={};this.o={};zj(this,a)}
n(yj,S);
function Aj(a,b){b=b||{};var c={};c=a.b||{};var d=Bj(c);d?Eg(d.invideoUrl):(d=b.iv_invideo_url)&&Eg(d);a.isPharma=T(a.isPharma,b.is_pharma);a.author=V(a.author,b.author);(d=b.ttsurl)&&!Cg(d)&&(d=Dg(d),Cg(d,!0));if(c.captions&&c.captions.playerCaptionsTracklistRenderer)Cj(a,c.captions.playerCaptionsTracklistRenderer);else{d=b.caption_tracks;var e=b.caption_audio_tracks;d&&e&&(Dj(a,d),Ej(a,e),(d=b.caption_translation_languages)&&Fj(a,d))}a.channelPath=V(a.channelPath,b.channel_path);a.channelBanner=V(a.channelBanner,
b.channel_banner);c.chapterMarkers&&(a.chapterMarkers=c.chapterMarkers);a.clientPlaybackNonce=V(a.clientPlaybackNonce,b.cpn);a.subscribed=T(a.subscribed,b.subscribed);a.shortViewCount=V(a.shortViewCount,b.short_view_count_text);a.title=V(a.title,b.title);a.ypcPreview=V(a.ypcPreview,b.ypc_preview);a.ypcOrigin=V(a.ypcOrigin,b.ypc_origin);a.paygated=T(a.paygated,b.paygated);a.requiresPurchase=T(a.requiresPurchase,b.requires_purchase);if(c=b.keywords)a.keywords=Gj(c);if(c=b.rvs)a.suggestions=Ne(c);a.contentCheckOk=
T(a.contentCheckOk,"1"==b.cco);a.racyCheckOk=T(a.racyCheckOk,"1"==b.rco);a.oauthToken=V(a.oauthToken,b.oauth_token);a.visitorData=V(a.visitorData,b.visitor_data);(c=b.session_data)&&Le(c);(c=b.endscreen_autoplay_session_data)&&Le(c);B(Hj,function(a){a in b&&(this.C[a]=b[a])},a)}
function zj(a,b){b=b||{};var c=b.raw_player_response;if(!c){var d=b.player_response;d&&(c=Fd(d))}c&&(a.b=c);a.adQueryId=b.ad_query_id||null;a.adSafetyReason=b.encoded_ad_safety_reason||null;a.adIds=b.ad_id||null;a.adSystems=b.ad_sys||null;a.authKey=b.authkey;a.clientPlaybackNonce||(a.clientPlaybackNonce=b.cpn||Ug());a.enableCardio=T(a.enableCardio,b.enable_cardio);a.enableCardioBeforePlayback=T(a.enableCardioBeforePlayback,b.enable_cardio_before_playback);a.endSeconds=U(a.endSeconds,b.end||b.endSeconds);
a.H="1"==b.live_playback;a.isLiveDestination=T(a.isLiveDestination,b.is_live_destination);a.isLiveDefaultBroadcast="1"==b.live_default_broadcast;a.isLowLatencyLiveStream="1"==b.is_low_latency_live_stream;if(c=b.latency_class)a.latencyClass=qg("UNKNOWN",c,fi);a.isMdxPlayback=T(a.isMdxPlayback,b.mdx);if(c=b.mdx_control_mode)a.mdxControlMode=kb(c);a.reloadReason=V(a.reloadReason,b.reload_reason);a.cycToken=b.cyc||null;"1"==b.innertube_thumbnail&&a.b.videoDetails.thumbnail?ii(a.b.videoDetails.thumbnail):
hi(b);a.revocableUnlistedToken=b.revocable_unlisted_token;a.mdxEnvironment=V(a.mdxEnvironment,b.mdx_environment);a.playbackId=b.plid;a.eventId=b.eventid;a.osid=b.osid;a.videoMetadata=b.vm;a.playlistId=V(a.playlistId,b.list);if(c=b.remarketing_url)a.remarketingUrl=c;a.b&&a.b.playbackTracking&&a.b.playbackTracking.youtubeRemarketingUrl&&(a.youtubeRemarketingUrl=a.b.playbackTracking.youtubeRemarketingUrl.baseUrl);a.b&&a.b.playbackTracking&&a.b.playbackTracking.googleRemarketingUrl&&(a.googleRemarketingUrl=
a.b.playbackTracking.googleRemarketingUrl.baseUrl);if(c=b.ppv_remarketing_url)a.ppvRemarketingUrl=c;c=b.session_data;!a.za&&c&&(a.za=Le(c).feature);a.isFling=1==U(a.isFling?1:0,b.is_fling);a.vnd=U(a.vnd,b.vnd);a.slotPosition=U(a.slotPosition,b.slot_pos);a.breakType=b.break_type;a.videoId=b.docid||b.video_id||b.videoId||b.id||a.videoId;a.vssCredentialsToken=V(a.vssCredentialsToken,b.vss_credentials_token);a.heartbeatToken=V(a.heartbeatToken,b.heartbeat_token);a.heartbeatInterval=U(a.heartbeatInterval,
b.heartbeat_interval);a.heartbeatRetries=U(a.heartbeatRetries,b.heartbeat_retries);a.heartbeatSoftFail=T(a.heartbeatSoftFail,b.heartbeat_soft_fail);a.relativeLoudness=U(a.relativeLoudness,b.relative_loudness);a.isDni=T(!1,b.is_dni);a.dniColor=V("#cc181e",b.dni_color);if(b.ad3_module||b.ad_module)a.adModule=!0,"1"==b.ad_preroll&&a.j.push("ad");if(c=b.adaptive_fmts)a.adaptiveFormats=c;if(c=b.license_info)a.oa=Ij(c);if(c=b.allow_embed)a.allowEmbed="1"==c;if(c=b.backgroundable)a.backgroundable="1"==c;
"0"==b.dash&&(a.Z=!0);if(c=b.dashmpd){a.D=he(c,{cpn:a.clientPlaybackNonce});c=/\/(s|ss)\/([^/?]+)/;var e=c.exec(a.D);e&&(d="s"==e[1]?"signature":"sig",e=Gh(e[2]),a.D=a.D.replace(c,"/"+d+"/"+e))}if(c=b.drm_session_id)a.drmSessionId=c;c=b.end;void 0!=c&&(a.clipEnd=U(a.clipEnd,c));b.fair_play_cert&&window.atob&&(a.fairPlayCert=atob(b.fair_play_cert));if(c=b.fmt_list)a.fmtList=c;b.fresca_preroll&&a.j.push("fresca");b.heartbeat_preroll&&a.j.push("heartbeat");if(c=b.is_listed)a.isListed=T(a.isListed,c);
if(c=b.url_encoded_fmt_stream_map)a.ra=c;if(c=b.hls_formats)a.hlsFormats=c;if(c=b.hlsvp)a.hlsvp=c;if(c=b.length_seconds)a.lengthSeconds=t(c)?kb(c):c;if(c=b.live_chunk_readahead)a.liveChunkReadahead=U(a.liveChunkReadahead,c);if(c=b.live_start_walltime)a.liveStartWalltime=kb(c);if(c=b.player_params)a.playerParams=c;if(c=b.probe_url)a.probeUrl=Eg(he(c,{cpn:a.clientPlaybackNonce}));if(c=b.profile_picture)a.profilePicture=V(c,a.profilePicture);(c=b.pyv_billable_url)&&Bg(c);(c=b.pyv_conv_url)&&Bg(c);"1"==
b.spacecast_playback&&(a.j.push("spacecast"),a.spacecastModule=!0,a.qa.playback=!0);if(d=b.spacecast_addrs)a.spacecastModule=!0,c={},c.addresses=d.split(","),c.probe=!0,(d=b.spacecast_query_params)&&(c.applianceQueryParams=d),a.qa.init=c;0<a.startSeconds||(a.startSeconds=U(a.startSeconds,b.start||b.startSeconds));c=b.live_utc_start;null!=c&&(a.liveUtcStartSeconds=parseInt(c,10));c=b.start;void 0==c||"1"==b.resume||a.H||(a.clipStart=U(a.clipStart,c));if(c=b.url_encoded_third_party_media)a.T=Ne(c);
if(c=b.watch_ajax_token)a.watchAjaxToken=c;b.ypc_module&&a.j.push("ypc");b.ypc_clickwrap_module&&a.j.push("ypc_clickwrap");if(c=b.ypc_offer_button_formatted_text)c=Fd(c),a.ypcOfferButtonFormattedText=null!=c?c:null;B("baseUrl uid oeid ieid ppe engaged subscribed".split(" "),function(a){b[a]&&(this.o[a]=b[a])},a);
a.o.focEnabled=T(a.o.focEnabled,b.focEnabled);a.o.rmktEnabled=T(a.o.rmktEnabled,b.rmktEnabled);a.C=b;Aj(a,b);!og()||a.Z||Jj(a);(c=b.adpings)&&c&&Me(c);if(c=b.referrer)a.referrer=c;(c=b.multifeed_metadata_list)&&Ne(c);a.clientScreenNonce=V(a.clientScreenNonce,b.csn);a.rootVeType=U(a.rootVeType,b.root_ve_type);(c=b.fflags)&&Le(c);a.hasSubfragmentedFmp4=T(a.hasSubfragmentedFmp4,b.sfmp4);a.defraggedFromSubfragments=T(a.defraggedFromSubfragments,b.dfs);a.liveExperimentalContentId=U(a.liveExperimentalContentId,
b.live_experimental_content_id);if(a.b){if(c=a.b.videoDetails)if(c=c.videoId)a.videoId=c;(c=a.b.interstitialPods)&&c.forEach(function(b){var c=b.interstitials.map(function(a){return(a=a.playerVars)?Me(a):void 0});
switch(b.podConfig.playbackPlacement){case "INTERSTITIAL_PLAYBACK_PLACEMENT_PRE":a.S=a.S.concat(c);break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_POST":a.R=a.R.concat(c)}})}(a.S.length||a.R.length)&&a.j.push("yto")}
function Jj(a){if(a.adaptiveFormats&&!a.H){var b=Kj(a,a.adaptiveFormats);var c=a.oa,d=a.lengthSeconds;b=Nh(b,c,void 0===d?0:d);a.l=b;pb(a,Ea(qb,b));(a.l&&Kh(a.l)||a.l&&Jh(a.l)||a.l&&Mh(a.l)||a.l&&Lh(a.l))&&a.j.push("webgl");a.l.isLive||(a.H=!1);Ih(a.l)}}
function Lj(a){var b=Pa(a.j,"ypc");a.ypcPreview&&(b=!1);return!a.g&&!(!a.videoId&&!a.T)&&!a.O&&(!!(a.D||a.adaptiveFormats||a.ra||a.T||a.spacecastFormatMap||a.spacecastAdaptiveFormats||a.hlsvp)||Pa(a.j,"fresca")||Pa(a.j,"heartbeat")||b)}
m=yj.prototype;m.Qa=function(){var a={format:"RAW",method:"GET",withCredentials:!1};0<this.ga&&(a.timeout=this.ga);var b="";0<this.J&&(b=Oe(b,{playerretry:this.J},!1));Eh(Hf,b,a).then(Fe(this.Na),Fe(this.Ma),this);fj("vir");mj("vir");this.fa=L()};
m.Na=function(a){if(!this.g){var b=a.responseText;if(b){this.O=!1;var c=Me(b);"fail"==c.status?this.m("onStatusFail",c):(fj("virc"),mj("virc"),B(Mj,function(a){a in this.C&&(c[a]=this.C[a])},this),zj(this,c),Lj(this)?this.g||(this.O=!1,this.m("dataloaded",this.C)):this.m("dataloaderror",new ei("manifest.net.retryexhausted",{successButUnplayable:"1"})))}else this.ua(a)}};
m.Ma=function(a){this.ua(a.b)};
m.ua=function(a){if(!this.g){var b=a?a.status:-1;a=0<=this.J||400==b;var c=200<b?"manifest.net.badstatus":"manifest.net.connect",d=((L()-this.fa)/1E3).toFixed(3);b={backend:"gvi",rc:b,rt:d};a||(this.J++,this.pa.start());this.m("dataloaderror",new ei(c,b))}};
function Kj(a,b){var c=Ne(b),d={};B(c,function(a){var b=d[a.itag];b&&(a.width=b.width,a.height=b.height)},a);
return c}
function Ij(a){a=Ne(a);var b={};B(a,function(a){var c=a.family;a=a.url;c&&a&&(b[c]=a)});
return b}
function Dj(a,b){for(var c=Ne(b),d=0;d<c.length;d++){var e=c[d],f=e.u;Cg(f)&&a.captionTracks.push(new di({is_translateable:T(!1,e.t),languageCode:e.lc,languageName:e.n,url:f,vss_id:e.v,kind:e.k,format:3}))}}
function Ej(a,b){var c=Ne(b);a.L=[];B(c,function(a){var b={};r(a.aid)&&(b.audioTrackId=a.aid);var c=a.i;c&&(b.captionTrackIndices=Ka(c.split(","),function(a){return parseInt(a,10)}));
b.hasDefaultTrack=r(a.d);b.hasDefaultTrack&&(b.defaultCaptionTrackIndex=parseInt(a.d,10)||void 0);b.hasForcedTrack=r(a.f);b.hasForcedTrack&&(b.forcedCaptionTrackIndex=parseInt(a.f,10));b.visibility=xj[parseInt(a.v,10)]||"UNKNOWN";this.L.push(b)},a)}
function Fj(a,b){for(var c=Ne(b),d=0;d<c.length;d++){var e=c[d];a.captionTranslationLanguages.push(new ci({languageCode:e.lc,languageName:e.n}))}}
function Cj(a,b){a.captionTracks=[];b.captionTracks&&B(b.captionTracks,function(a){var b=a.baseUrl;Cg(b,!0)&&(a=new di({is_translateable:!!a.isTranslatable,languageCode:a.languageCode,languageName:a.name&&vj(a.name),url:b,vss_id:a.vssId,kind:a.kind,format:3}),this.captionTracks.push(a))},a);
a.L=b.audioTracks||[];a.captionTranslationLanguages=b.translationLanguages?Ka(b.translationLanguages,function(a){return new ci({languageCode:a.languageCode,languageName:vj(a.languageName)})}):[]}
m.isAd=function(){return!!this.adFormat};
var Mj="oauth_token ypc_buy_url ypc_full_video_message ypc_item_thumbnail ypc_item_title ypc_item_url ypc_module ypc_offer_button_text ypc_offer_button_formatted_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_offer_type ypc_overlay_timeout ypc_preview ypc_signin_message ypc_vid".split(" "),Hj="author cc_asr cc_load_policy iv_load_policy iv_new_window keywords oauth_token requires_purchase rvs subscribed title ttsurl ypc_buy_url ypc_full_video_length ypc_item_thumbnail ypc_item_title ypc_item_url ypc_offer_button_text ypc_offer_button_formatted_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_preview ypc_price_string ypc_video_rental_bar_text".split(" ");
function Bj(a){return a&&a.annotations&&(a=a.annotations[0],a.playerAnnotationsUrlsRenderer)?a.playerAnnotationsUrlsRenderer:null}
function Gj(a){var b={};B(a.split(","),function(a){var c=a.split("=");2==c.length?b[c[0]]=c[1]:b[a]=!0});
return b}
;var Nj;function Oj(a){dh.call(this,{G:"div",ca:"ytp-lightweight",Y:[{G:"div",ca:"ytp-gradient-top"},{G:"div",ca:"ytp-chrome-top",Y:[{G:"div",ca:"ytp-title",Y:[{G:"div",ca:"ytp-title-text",Y:[{G:"a",na:["ytp-title","ytp-title-link"],X:{target:"blank_",href:"{{url}}"},Y:["{{title}}"]}]}]}]},{G:"button",na:["ytp-large-play-button","ytp-button"],Y:[Nj?{G:"div",na:["ytp-icon","ytp-icon-large-play-button"]}:{G:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},Y:[{G:"path",ca:"ytp-large-play-button-bg",
X:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#212121","fill-opacity":"0.8"}},{G:"path",X:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]}]});Nj=!1;var b=new Wg(a.args||{});this.b["ytp-gradient-top"].style.display=b.m?"":"none";this.b["ytp-chrome-top"].style.display=
b.m?"":"none";this.b["ytp-title"].style.display=b.m?"":"none";b.m&&(a=new yj(a.args),this.updateValue("title",a.title||""),this.updateValue("url",b.getVideoUrl(a.videoId,a.playlistId)));b=this.b["ytp-title"];a=y(this.B,this);this.l.push({target:b,type:"click",listener:a});b.addEventListener("click",a)}
n(Oj,dh);Oj.prototype.B=function(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};function Pj(a,b,c){S.call(this);this.b=a;this.j=b;this.D=de(K(3,c));N(this.b,"click",y(this.C,this))}
A(Pj,S);Pj.prototype.C=function(){Ve("/get_player_token",{format:"RAW",method:"POST",M:{v:this.j,ref:this.D,w:this.b.clientWidth,h:this.b.clientHeight},context:this,onSuccess:this.o,onError:this.l})};
Pj.prototype.o=function(a){var b=this.j;a=a.responseText;var c=Nf("yt-player-two-stage-token")||{};r(a)?c[b]=a:delete c[b];b=c;a=z()+3E5;if((c=Pf())&&window.JSON){t(b)||(b=JSON.stringify(b,void 0));try{c.set("yt-player-two-stage-token",b,a)}catch(d){c.remove("yt-player-two-stage-token")}}this.l()};
Pj.prototype.l=function(){this.m("onClick",this.j)};
Pj.prototype.I=function(){var a=this.b,b;for(b in yb)yb[b][0]==a&&lf(b);this.b=null};function Qj(a,b){C.call(this);this.b=a;this.l=b;this.j(this.l.iurl,!0)}
A(Qj,C);Qj.prototype.j=function(a,b){G&&!Ub(10)?this.b.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+a+'", sizingMethod="scale")':b||(this.b.style.backgroundImage="url("+a+")")};
Qj.prototype.I=function(){this.b=null};var Rj=null,Sj=null,Tj=null,Uj=null;function Vj(){var a=Tj,b=window.document;b="CSS1Compat"==b.compatMode?b.documentElement:b.body;var c=new dd(b.clientWidth,b.clientHeight);var d=a.l;b=null;720<=c.height&&d.iurlmaxres?b=d.iurlmaxres:480<=c.height&&d.iurlsd?b=d.iurlsd:320<=c.height?b=d.iurlhq:180<=c.height&&(b=d.iurlmq);b&&(c=b,a=y(a.j,a,b,!1),b=new Image,b.onload=a,b.src=c)}
function Hd(){var a=Ee("EMBED_BINARY_URL"),b=Wj;if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Cf,""),c=c.replace(Df,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ef(a,b)}
function Wj(){De("LIGHTWEIGHT_AUTOPLAY",!0);Rj&&Rj.parentNode&&Rj.parentNode.removeChild(Rj);var a=Sj;a.g||Gd(a.B);rb(Sj,Tj);Uj.dispose();w("writeEmbed")()}
;v("writeLightweightEmbed",function(){var a,b;var c=document;Rj=t("lightweight-embed")?c.getElementById("lightweight-embed"):"lightweight-embed";c=document;if(c.getElementsByClassName)c=c.getElementsByClassName("yt-embed-thumbnail")[0];else if(c=document,c.querySelectorAll&&c.querySelector)c=c.querySelector(".yt-embed-thumbnail");else{if(c.querySelectorAll&&c.querySelector)c=c.querySelectorAll(".yt-embed-thumbnail");else if(c.getElementsByClassName){var d=c.getElementsByClassName("yt-embed-thumbnail");
c=d}else{d=c.getElementsByTagName("*");var e={};for(a=b=0;c=d[a];a++){var f=c.className;"function"==typeof f.split&&Pa(f.split(/\s+/),"yt-embed-thumbnail")&&(e[b++]=c)}e.length=b;c=e}c=c[0]||null}Tj=new Qj(c||null,M("THUMBNAIL_URLS"));Uj=new Oj(new nf);Rj.appendChild(Uj.element);Sj=new Pj(Uj.element,M("VIDEO_ID")||"",M("EURL"));Sj.subscribe("onClick",Hd);N(window,"load",Vj)},void 0);
v("yt.setConfig",De,void 0);v("yt.config.set",De,void 0);v("yt.logging.errors.log",cf,void 0);}).call(this);
