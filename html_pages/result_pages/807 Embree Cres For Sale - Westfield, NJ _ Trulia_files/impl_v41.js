(function(){var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ba={I:!0},ca={};try{ca.__proto__=ba;n=ca.I;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var da=m,u=this,ea=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},fa=function(a,b,c){return a.call.apply(a.bind,arguments)},ha=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},v=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
v=fa:v=ha;return v.apply(null,arguments)},ia=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};var w=function(a){w[" "](a);return a};w[" "]=function(){};var ja=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},x=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"==typeof a?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},ka=Array.prototype.reduce?function(a,b,c,d){d&&(b=v(b,d));return Array.prototype.reduce.call(a,
b,c)}:function(a,b,c,d){var e=c;ja(a,function(c,h){e=b.call(d,e,c,h,a)});return e},la=function(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};var z=function(){this.a="";this.b=ma},ma={};var A=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{w(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},na=function(a,b){b=b||u;for(var c=0;b&&40>c++&&!a(b);)a:{try{var d=b.parent;if(d&&d!=b){b=d;break a}}catch(e){}b=null}},oa=function(a,b){var c=a.createElement("script"),d=new z;d.a=b;c.src=d instanceof z&&d.constructor===z&&d.b===ma?d.a:"type_error:TrustedResourceUrl";(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(c,a)},B=function(a,
b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},pa=/https?:\/\/[^\/]+/,qa=function(a){return(a=pa.exec(a))&&a[0]||""},ra=/^([0-9.]+)px$/,C=function(a){return(a=ra.exec(a))?+a[1]:null},D=function(a){try{for(var b=null;b!=a;b=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!1;case "http:":return!1}}catch(c){}return!0};var E=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)};var sa=function(a,b,c){this.a=[];this.a[0]=c;this.a[1]=a;this.a[2]=b;this.b=this.a[3]=!1};var ta=/Trident|MSIE/,ua=/rv:11|Trident\/[78]/,va=function(){var a=(D(u)?"https:":"http:")+"//pagead2.googlesyndication.com/pagead/osd.js";u.google_osd_loaded||(oa(u.document,a),u.google_osd_loaded=!0)},xa=function(a,b){wa()?E(a,"readystatechange",function(c){a&&"complete"==a.readyState&&b(c)}):E(a,"load",b)},ya=function(){var a=u.google_osd_amcb;return"function"==ea(a)?a:null},wa=function(){var a=u.navigator;return(a=a&&a.userAgent)?ta.test(a)&&!ua.test(a):!1};var F=function(){this.b=0;this.a=[]},G=function(){var a=u.goog_osd_adp;return a&&"function"==ea(a.getOseId)?a:u.goog_osd_adp=new F};F.prototype.numBlocks=function(){return this.a.length};F.prototype.getOseId=function(){return this.b};F.prototype.getNewBlocks=function(a,b){za(this,a);b&&(u.google_osd_amcb=a)};F.prototype.setup=function(a){this.b=a};F.prototype.registerAdBlock=function(a,b,c){var d=new sa(a,b,c);ya()?d.a[3]=!0:xa(c,function(){d.a[3]=!0});this.a.push(d);za(this);va()};
var za=function(a,b){if(b=b||ya())for(var c=0;c<a.a.length;++c){var d=a.a[c];d.b||(b.apply(void 0,d.a),d.b=!0)}},H=["Goog_Common_getAdAdapterInstance"],I=u;H[0]in I||!I.execScript||I.execScript("var "+H[0]);for(var J;H.length&&(J=H.shift());)H.length||void 0===G?I[J]&&I[J]!==Object.prototype[J]?I=I[J]:I=I[J]={}:I[J]=G;w(F.prototype.getNewBlocks);w(F.prototype.getOseId);w(F.prototype.numBlocks);w(F.prototype.registerAdBlock);w(F.prototype.setup);var Aa=function(a,b){var c=a.ampInaboxIframes=a.ampInaboxIframes||[];b&&c.push(b);a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[];c.google_amp_listener_added||(c.google_amp_listener_added=!0,E(a,"message",function(c){var b;a.ampInaboxPendingMessages&&(b=/^amp-(\d{15,20})?/.exec(c.data))&&(a.ampInaboxPendingMessages.push(c),a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||oa(a.document,"https://cdn.ampproject.org/"+(b[1]?"rtv/"+b[1]+"/":"")+"amp4ads-host-v0.js"))}))};var Ba=!1,K=null,Ca=function(){this.b={};this.a={};for(var a=[],b=0,c=a.length;b<c;++b)this.a[a[b]]=""},Da=function(){if(null===K){K="";try{var a=u.top.location.hash;if(a){var b=a.match(/\bdeid=([\d,]+)/);K=b?b[1]:""}}catch(c){}}return K},L=function(a,b,c){""!=b&&(c?a.a.hasOwnProperty(c)&&(a.a[c]=b):a.b[b]=!0)},Ea=function(a){var b=[];B(a.b,function(a,d){b.push(d)});B(a.a,function(a){""!=a&&b.push(a)});return b};var M=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var Fa=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,Ga=function(a,b,c){this.b=a;this.a=b;this.c=c},Ha=function(a,b){this.url=a;this.A=!!b;this.depth=null},O=function(a){a=a||N();for(var b=new Ha(u.location.href,!1),c=null,d=a.length-1,e=d;0<=e;--e){var f=a[e];!c&&Fa.test(f.url)&&(c=f);if(f.url&&!f.A){b=f;break}}e=null;f=a.length&&a[d].url;0!=b.depth&&f&&(e=a[d]);return new Ga(b,e,c)},N=function(){var a=u,b=[],c=null;do{var d=a;if(A(d)){var e=d.location.href;c=d.document&&d.document.referrer||
null}else e=c,c=null;b.push(new Ha(e||""));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);a=0;for(d=b.length-1;a<=d;++a)b[a].depth=d-a;d=u;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.A=!0);return b};var Ia=function(a){u.google_image_requests||(u.google_image_requests=[]);var b=u.document.createElement("img");b.src=a;u.google_image_requests.push(b)};var P=function(a,b,c,d,e){this.m=c||4E3;this.b=a||"&";this.o=b||",$";this.f=void 0!==d?d:"trn";this.u=e||null;this.g=!1;this.c={};this.s=0;this.a=[]},Ja=function(a,b){var c={};c[a]=b;return[c]},La=function(a,b,c,d,e){var f=[];B(a,function(a,l){(a=Ka(a,b,c,d,e))&&f.push(l+"="+a)});return f.join(b)},Ka=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],h=0;h<a.length;h++)f.push(Ka(a[h],b,c,d+1,e));
return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(La(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},Q=function(a,b,c){a.a.push(b);a.c[b]=c},R=function(a,b,c,d){a.a.push(b);a.c[b]=Ja(c,d)},S=function(a,b,c,d,e){b=b+"//"+c+d;var f=Ma(a)-d.length-e.length;if(0>f)return"";a.a.sort(function(a,b){return a-b});d=null;c="";for(var h=0;h<a.a.length;h++)for(var l=a.a[h],k=a.c[l],t=0;t<k.length;t++){if(!f){d=null==d?l:d;break}var q=La(k[t],a.b,a.o);if(q){q=c+q;if(f>=
q.length){f-=q.length;b+=q;c=a.b;break}else a.g&&(c=f,q[c-1]==a.b&&--c,b+=q.substr(0,c),c=a.b,f=0);d=null==d?l:d}}h="";a.f&&null!=d&&(h=c+a.f+"="+(a.u||d));return b+h+e},Ma=function(a){if(!a.f)return a.m;var b=1,c;for(c in a.c)b=c.length>b?c.length:b;return a.m-a.f.length-b-a.b.length-1};var Na=function(a,b,c,d){if(Math.random()<(d||a.a))try{if(c instanceof P)var e=c;else e=new P,B(c,function(a,b){var c=e,d=c.s++;Q(c,d,Ja(b,a))});var f=S(e,a.f,a.b,a.c+b+"&","");f&&Ia(f)}catch(h){}};var T=u.performance,Pa=!!(T&&T.mark&&T.measure&&T.clearMarks),Qa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=Pa)a=Da(),a=!!a.indexOf&&0<=a.indexOf("1337");return a});var Ra=function(a,b,c,d){this.f=a;this.m=b;this.b=c;this.g=this.c;this.a=void 0===d?null:d},Ua=function(a,b){var c=Sa;try{if(c.a&&c.a.a){var d=c.a.start("dcm.renderAds".toString(),3);var e=a();c.a.b(d)}else e=a()}catch(h){a=c.b;try{d&&Qa()&&(T.clearMarks("goog_"+d.uniqueId+"_start"),T.clearMarks("goog_"+d.uniqueId+"_end"));var f=Ta(h);a=c.g.call(c,"dcm.renderAds",f,void 0,b)}catch(l){c.c(217,l)}if(!a)throw h;}return e};
Ra.prototype.c=function(a,b,c,d,e){e=e||this.m;try{var f=new P;f.g=!0;R(f,1,"context",a);b.error&&b.meta&&b.id||(b=Ta(b));b.msg&&R(f,2,"msg",b.msg.substring(0,512));b.file&&R(f,3,"file",b.file);0<b.line&&R(f,4,"line",b.line);var h=b.meta||{};if(d)try{d(h)}catch(k){}Q(f,5,[h]);var l=O();l.a&&R(f,6,"top",l.a.url||"");R(f,7,"url",l.b.url||"");Na(this.f,e,f,c)}catch(k){try{Na(this.f,e,{context:"ecmserr",rctx:a,msg:Va(k),url:l.b.url},c)}catch(t){}}return this.b};
var Ta=function(a){return new Wa(Va(a),a.fileName,a.lineNumber)},Va=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},Wa=function(a,b,c){M.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})},U=Wa;
U.prototype=aa(M.prototype);U.prototype.constructor=U;if(da)da(U,M);else for(var V in M)if("prototype"!=V)if(Object.defineProperties){var Xa=Object.getOwnPropertyDescriptor(M,V);Xa&&Object.defineProperty(U,V,Xa)}else U[V]=M[V];U.M=M.prototype;var Sa,Ya=D(u)?"https:":"http:";Sa=new Ra(new function(){this.f=Ya;this.b="pagead2.googlesyndication.com";this.c="/pagead/gen_204?id=";this.a=.01},"dcmads-err",!0);var W=function(a){Sa.b=!1;throw Error(a);};var Za={1:{H:"40004000",C:"40004001"}},$a={H:"40004006",C:"40004007"};Za[4]=$a;var ab={L:1,K:4},bb={1:1,4:4};var db=function(a){Ba=!1;var b=new Ca;for(d in ab)b.a[ab[d]]="";try{cb(b,a.dcmads&&a.dcmads.eids);var c=/.*#.*eids=([0-9,|]+)/.exec(a.location.href);c&&cb(b,c[1])}catch(l){}if(a=a.dcmads&&a.dcmads.expts&&a.dcmads.expts[1]){c=Za[1];var d=[];var e=0,f;for(f in c)d[e++]=c[f];if((f=bb[1])?b.a.hasOwnProperty(f)&&""==b.a[f]:1){c=(c=Da())?(c=c.match(new RegExp("\\b("+d.join("|")+")\\b")))?c[0]:null:null;if(c)var h=c;else if(Ba)h=null;else a:{if(!(1E-4>Math.random())&&(c=Math.random(),c<a)){try{h=new Uint32Array(1),
u.crypto.getRandomValues(h),c=h[0]/65536/65536}catch(l){c=Math.random()}h=d[Math.floor(c*d.length)];break a}h=null}h&&L(b,h,f)}}return b},cb=function(a,b){if(b&&b.split){b=b.split(",");for(var c=0;c<b.length;++c){var d=b[c].split("|");1<d.length?L(a,d[1],d[0]):L(a,d[0])}}};var X=function(a,b){this.a=a;this.depth=b},fb=function(a){var b=a||N();a=Math.max(b.length-1,0);var c=O(b);b=c.b;var d=c.a,e=c.c,f=[];c=function(a,b){return null==a?b:a};e&&f.push(new X([e.url,e.A?2:0],c(e.depth,1)));d&&d!=e&&f.push(new X([d.url,2],0));b.url&&b!=e&&f.push(new X([b.url,0],c(b.depth,a)));var h=x(f,function(a,b){return f.slice(0,f.length-b)});!b.url||(e||d)&&b!=e||(d=qa(b.url))&&h.push([new X([d,1],c(b.depth,a))]);h.push([]);return x(h,ia(eb,a))},gb=function(a){a=a||fb();return x(a,
function(a){var b={};b.dc_rfl=a;return b})},eb=function(a,b){var c=ka(b,function(a,b){return Math.max(a,b.depth)},-1),d=la(c+2);d[0]=a;ja(b,function(a){return d[a.depth+1]=a.a});return d};var hb=function(){this.o=this.m=null;this.u=[];this.f={};this.B=N();this.D=!1},ib=/^data-d[bc]m-.+/i,jb=/^https?%3A.+/i,kb=/N([0-9]+)\.[^\/]+\/B([0-9]+)\.([0-9]+)/,lb=/(%|[\\/]\.\.[\\/])/,mb=function(a){this.g=a;a=kb.exec(a);this.c=(this.a=!!a)?+a[1]:0;this.b=this.a?+a[2]:0;this.f=this.a?+a[3]:0},nb=function(a,b){b=new mb(b);b.a&&a.u.push(b)};var ob=function(a,b,c,d,e){try{for(var f=[],h,l=0;(h=c(a))&&a!=b&&100>++l;){for(var k=null,t=d(h),q=0,g=0;g<t.length;++g){if(t[g]==a){k=g-q;break}e(t[g])&&++q}if(null===k)return null;f.unshift(k);a=h}return f}catch(r){return null}},pb=function(a){return ob(a,a.top,function(a){try{return a.parent}catch(c){return null}},function(a){return a.frames},function(){return!1})},qb=function(a){return ob(a,document.documentElement,function(a){return a.parentElement},function(a){return a.children},function(a){return 8==
a.nodeType})};var rb=/^https?:\/\/d-\d+\.ampproject\.net/,sb=function(a,b){return"data-dcm-https-only"in b?"https:":"data-dcm-http-only"in b?"http:":"file:"==a.document.location.protocol?"http:":""},ub=function(a,b,c){for(var d=0;d<c.length;d++){var e=c[d];Q(a,e.l,tb(b,e.i,e.j,e.v))}},tb=function(a,b,c,d){a=a[b];if(null==a||!d&&0==a.length)return[];b={};b[c]=null!=d?d:a;return[b]},vb=function(a,b,c){a=a[b];if(!a)return[];a=String(a).toLowerCase();b={};if("1"==a||"true"==a)b[c]="1";return b[c]?[b]:[]},wb=function(a,
b){var c,d=!1,e=!1,f=0;na(function(b){try{a!=b&&b.google_osd_static_frame&&(f=b==a.top?2:1)}catch(l){}if(!A(b))return!1;b.mraid&&(d=!0);b.avid&&(e=!0);b.sdkjs&&(c=1);if(b.trackImpressionHelper||b.webviewDidAppear||b.webviewDidClose)c=2;if(b.fireGetImageCall||b["interface"]&&b["interface"].shouldOverlay)c=4;return!1},a);d&&Q(b,32,[{mrd:"1"}]);e&&Q(b,37,[{avd:"1"}]);c&&Q(b,33,[{asdk:c}]);f&&R(b,36,"osda",f)};var Y,xb,yb=/^(?:https?:)?\/\/ad\.doubleclick\.net(?:\/ddm)?\/ad[ij]\/(N[^;]+)/,zb=/(^| )dcmads( |$)/;w(G);
var Gb=function(a){var b=a.document,c=db(a);c=Ab(a,c);Bb(a,c);Cb(b);for(var d=b.getElementsByClassName?b.getElementsByClassName("dcmads"):b.getElementsByTagName("ins"),e,f=0;f<d.length;f++)b=d[f],Db(b)&&(b.getAttribute("data-dcm-processed")||e?nb(c,b.getAttribute("data-dcm-placement")):(e=b,e.setAttribute("data-dcm-processed","y")));if(!e){try{c.f.ifri=(a.frameElement&&a.frameElement.id||"").substr(0,25)}catch(l){}b=function(a){return[a.tagName,a.className,a.getAttribute("data-dcm-processed")?1:0]};
var h=[];for(f=0;f<d.length;++f)h.push(b(d[f]));c.f.pasd=h;a.document.getElementsByClassName&&(c.f.ecnl=a.document.getElementsByClassName("dcmads").length);c.f.etnl=a.document.getElementsByTagName("ins").length;(d=a.document.currentScript)&&d.parentElement&&(f=d.parentElement,f.outerHTML&&.05>Math.random()?(b=f.outerHTML,d=b.indexOf(d.src),c.f.pnoh=-1==d?"*":b.substr(Math.max(0,d-1E3),2E3)):c.f.pn=b(f));W("No ad ins element found")}Eb(a,c);Fb(a,e,c)},Eb=function(a,b){Hb(a.document.getElementsByTagName("script"),
b);Hb(a.document.getElementsByTagName("iframe"),b)},Hb=function(a,b){if(a)for(var c=0;c<a.length;++c){var d=a[c].src,e=yb.exec(d);e&&d&&-1==d.indexOf("dc_ver=")&&nb(b,e[1])}},Ab=function(a,b){var c=new hb;c.s=b;c.F=!!a.dcmads.version.experiment;c.G=a.dcmads.startTime||0;c.version="41."+(a.dcmads.version.loader||"?");return xb=c},Bb=function(a,b){b.c=a.goog_ddm_ps;if(!Ib(b.c)){b.c={};for(var c=[u.top],d=[],e=0,f;f=c[e++];){!A(f)||d.push(f);try{if(f.frames)for(var h=f.frames.length,l=0;l<h&&1024>c.length;++l)c.push(f.frames[l])}catch(k){}}for(c=
0;c<d.length;++c)if(e=d[c].goog_ddm_ps,Ib(e)){b.c.corr=e.corr;break}if(!Ib(b.c)){d="";for(c=0;10>c;++c)d+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_.!*'()"[Math.floor(70*Math.random())];b.c.corr=d}a.goog_ddm_ps=b.c}},Ib=function(a){var b=typeof a;return("object"==b&&null!=a||"function"==b)&&!!a.corr},Cb=function(a){a.body||(a.write('<b style="display:none;">_</b>'),a.body||W("Body element does not exist"))},Db=function(a){return a.getAttribute("data-dcm-placement")||a.getAttribute("data-dbm-deal")?
zb.test(a.className):!1},Fb=function(a,b,c){var d=b.attributes;c.a={};for(var e=0;e<d.length;e++){var f=d[e].name;if(ib.test(f)){var h=f.toLowerCase();f=0==h.indexOf("data-dcm-param-")?"data-dcm-param-"+f.substring(15):h}else f=null;f&&(h=d[e].value,h=null!=h?""+h:"","data-dcm-click-tracker"==f&&(h=jb.test(h)?decodeURIComponent(h):h),c.a[f]=h)}d=c.a["data-dcm-placement"];e=c.a["data-dbm-deal"];d||e||W("No placement or deal attribute");d&&e&&W("Only one of (data-dcm-placement, data-dbm-deal) should be set");
f=c.a["data-dcm-rendering-mode"];d?(c.b=1,lb.test(d)&&W("Invalid placement: "+d),c.m=new mb(d),c.g="script"==f?"script":"iframe"):(c.b=2,c.o=e,c.g="iframe"==f?"iframe":"script");c.J=b;d=b.style;e={};try{e=(u.getComputedStyle?u.getComputedStyle(b,null):b.currentStyle)||{}}catch(Oa){}if(f=C(d.width)||C(e.width))c.width=Math.round(f);if(d=C(d.height)||C(e.height))c.height=Math.round(d);"iframe"==c.g&&1==c.b&&A(u.top)&&(Y=Goog_Common_getAdAdapterInstance(),Y.setup(3),c.D=!0);d=new P(1==c.b?";":void 0);
e=c.a;f=e["data-dcm-click-tracker"];if(null==f)e=[];else{h=e["data-dcm-landing-page-escapes"]||"";""!=h&&"0"!=h&&"1"!=h&&"2"!=h&&(h="");var l={};l["click"+h]=f;null!=e["data-dcm-reverse-click-tracker"]&&(l.dcopt="rcl");e=[l]}Q(d,26,e);Q(d,34,[{crlt:c.c.corr}]);e=c.a;f=[];for(k in e)0==k.indexOf("data-dcm-param-")&&f.push(k);if(0==f.length)var k=[];else{h=[];f.sort();for(l=0;l<f.length;l++){if(0<h.length){k=void 0;var t=h[0],q={};for(k in t)q[k]=t[k];k=q}else k={};t=k;k=f[l];if(q=k.substring(15))t[q]=
e[k],h.unshift(t)}k=h}Q(d,19,k);a:{b:{k=u.context;if(!k)try{k=u.parent.context}catch(Oa){}try{if(k&&"pageViewId"in k&&"canonicalUrl"in k){var g=k;break b}}catch(Oa){}g=null}if(g)g=!0;else{g=c.B;for(k=0;k<g.length;k++)if(rb.test(g[k].url)){g=!0;break a}g=!1}}g&&Q(d,35,[{amp:"1"}]);g=A(a.top)?0:1;Q(d,31,[{xdt:g}]);g=Ea(c.s);g.length&&Q(d,4,[{dc_eid:g}]);Q(d,3,c.F?[{dc_rxp:"1"}]:[]);Q(d,2,[{dc_ver:c.version}]);(g=c.G)?(g=(new Date).getTime()-g,99999<g&&(g="M"),g=[{sttr:g}]):g=[];Q(d,38,g);wb(a,d);g=
u.devicePixelRatio;(g="number"==typeof g?+g.toFixed(3):null)&&R(d,13,"u_sd",g);(g=c.a["data-dcm-ssaid"])&&Q(d,23,[{pdid:g,pdidtype:"ssaid"}]);k=c.J;g=pb(a)||["?"];k=qb(k)||["?"];g=g.join(",")+":"+k.join(",");k=g.length;if(0==k)g=0;else{e=305419896;for(f=0;f<k;f++)e^=(e<<5)+(e>>2)+g.charCodeAt(f)&4294967295;g=0<e?e:4294967296+e}Q(d,24,[{dc_adk:g}]);ub(d,c.a,[{l:30,i:"data-dcm-app-id",j:"dc_msid"},{l:29,i:"data-dcm-publisher-url",j:"dc_ref"},{l:18,i:"data-dcm-keywords",j:"kw"},{l:22,i:"data-dcm-impression-exchange-id",
j:"pc"}]);2==c.b?g=!0:(g=sb(a,c.a),g=""==g?D(a):"https:"==g);g&&(Q(d,14,vb(c.a,"data-dcm-child-directed",1==c.b?"tfcd":"chd")),Q(d,16,vb(c.a,"data-dcm-limit-ad-tracking",1==c.b?"dc_lat":"lat")),Q(d,15,tb(c.a,"data-dcm-resettable-device-id","dc_rdid")));if(1==c.b){g=fb(c.B);Q(d,28,gb(g));g=c.a;k="";"data-dcm-http-only"in g&&(k+="h");"data-dcm-https-only"in g&&(k+="s");""==k&&(k="n");Q(d,40,[{prcl:k}]);Q(d,25,[{ord:("00000"+Math.floor(Math.random()*Math.pow(36,6)).toString(36)).slice(-6)}]);if(0==c.u.length)g=
null;else{g=c.m;k=[0,0,0,0];for(e=0;e<c.u.length;++e)f=c.u[e],f.a&&(f.c==g.c?f.b==g.b?f.f==g.f?++k[0]:++k[1]:++k[2]:++k[3]);g=[{plmts:k}]}g&&Q(d,39,g);g=c.a;if("data-dcm-multi-bottom-float"in g){var r="mtfBottomFloat";var p=g["data-dcm-multi-bottom-float"]}else"data-dcm-multi-left-float"in g?(r="mtfLeftFloat",p=g["data-dcm-multi-left-float"]):"data-dcm-multi-right-float"in g?(r="mtfRightFloat",p=g["data-dcm-multi-right-float"]):"data-dcm-multi-top-float"in g&&(r="mtfTopFloat",p=g["data-dcm-multi-top-float"]);
r&&p&&(p=p.split?p.split(","):p,g={},g[r]=p,Q(d,11,[g]));Q(d,5,c.width&&c.height?[{sz:c.width+"x"+c.height}]:[]);c.D&&R(d,12,"osdl","1");ub(d,c.a,[{l:20,i:"data-dcm-anonymous-inventory",j:"dcopt",v:"anid"},{l:8,i:"data-dcm-disable-iframe-breakout",j:"mtfIFrameRequest",v:"false"},{l:7,i:"data-dcm-dart-iframe-path",j:"mtfIFPath"},{l:17,i:"data-dcm-external-id",j:"dc_xid"},{l:27,i:"data-dcm-in-app",j:"dcapp",v:"1"},{l:6,i:"data-dcm-interstitial",j:"dcopt",v:"1_ist"},{l:9,i:"data-dcm-left-float",j:"mtfLeft"},
{l:10,i:"data-dcm-top-float",j:"mtfTop"},{l:21,i:"data-dcm-user-defined",j:"u"}])}else 2==c.b&&(Q(d,0,[{deal_id:c.o}]),r=O(c.B),Q(d,28,[{url:r.a?r.a.url:r.b.url}]),Q(d,1,[{output:"iframe"==c.g?"html":"js"}]),Q(d,5,[{w:c.width,h:c.height}]));p=2==c.b?S(d,"https:","bid.g.doubleclick.net","/xbbe/bid/xpub?",""):S(d,sb(a,c.a),"ad.doubleclick.net","/ddm/"+("script"==c.g?"adj":"adi")+"/"+c.m.g+";","?");if(1==c.b&&!yb.test(p))throw Error("Invalid tag URL: "+p);r=a.document;if("script"==c.g)if(c=c.s,c=c.a.hasOwnProperty(4)?
c.a[4]:"",p='<script src="'+p+'">\x3c/script>',c==$a.C){var y=Jb(r);b.appendChild(y);y.srcdoc=p}else 1<b.children.length||1==b.children.length&&"b"==b.children[0].tagName.toLowerCase()||(b.style.display="none"),r.write(p);else y=Jb(r),y.src=p,b.appendChild(y),Y&&Y.registerAdBlock(p,11,y);y&&Aa(a,y);b.style.textDecoration="none"},Jb=function(a){a=a.createElement("iframe");var b=a.style;b.width="100%";b.height="100%";b.border="0";b.margin="0";b.padding="0";a.marginWidth="0";a.marginHeight="0";a.scrolling=
"no";a.frameBorder=0;return a};var Z=window;Z.dcmads=Z.dcmads||{};Z.dcmads.version=Z.dcmads.version||{};(function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return Ua(function(){return Gb.apply(void 0,c)},a)}})(ia(function(a,b){var c=xb;c?(B(c.f,function(a,c){b[c]=a}),b.ver=c.version,b.rm=c.g||"",b.mode=c.b?c.b+"":"0",c.m?b.plcmt=c.m.g||"":c.o&&(b.deal=c.o||""),(a=c.s&&Ea(c.s))&&a.length&&(b.eids=a)):(b.ver="41."+(a.dcmads.version.loader||"?"),b.rm="",b.mode="0")},Z))(Z);}).call(this);