!function(){function t(t,e,i){var n=i||"";try{n=t&&e in t?t[e]:n}catch(r){}return n}function e(t){return parseFloat(t,10)}function i(t){return t===+t&&t===(0|t)}function n(){try{oi=!!Ue.top.document}catch(t){}}function r(){Oe=oi&&ri?Ue.parent:Ue}function a(){si=Ue.$sf&&Ue.$sf.ext&&"function"==typeof Ue.$sf.ext[Se]||!1}function o(){try{ni=/((iPhone|iPod|iPad).*AppleWebKit(?!.*(Safari|CriOS)))/i.test(Ze)||"chrome"===ei&&(/wv\).* Chrome.* Mobile/i.test(Ze)||/Version\/\d*\.\d* (?:Chrome.* Mobile)?/i.test(Ze))||/(MSAppHost\/.*|WebView)/.test(Ze)}catch(t){}}function s(){Re=-1!==Ze.indexOf("Chrome/")?1:-1!==Ze.indexOf("Firefox/")?2:-1!==Ze.indexOf("; MSIE")?3:-1!==Ze.indexOf("Safari/")?4:-1!==Ze.indexOf("WebKit")?5:-1!==Ze.indexOf("Gecko")?6:7}function c(){"undefined"!=typeof qe.hidden?(je="hidden",Fe="visibilitychange"):"undefined"!=typeof qe.mozHidden?(je="mozHidden",Fe="mozvisibilitychange"):"undefined"!=typeof qe.webkitHidden?(je="webkitHidden",Fe="webkitvisibilitychange"):"undefined"!=typeof qe.msHidden&&(je="msHidden",Fe="msvisibilitychange")}function u(t){var i={width:0,height:0,valid:!0};try{var n=Ue.getComputedStyle&&Ue.getComputedStyle(t,Xt)||t.currentStyle;i.width=e(n.width)||0,i.height=e(n.height)||0}catch(r){i.width=0,i.height=0,i.valid=!1}return i}function l(t){var e=u(t);return e.width<=We||e.height<=He}function h(t,e){if(arguments.length>0&&i(t)&&i(e))Ye=t,Ne=e;else{var n,r;if(ai)try{n=qe.documentElement&&Math.max(qe.documentElement.clientWidth,qe.documentElement.scrollWidth)||Ue.frameElement&&Ue.frameElement.width||Xt,r=qe.documentElement&&Math.max(qe.documentElement.clientHeight,qe.documentElement.scrollHeight)||Ue.frameElement&&Ue.frameElement.height||Xt}catch(o){n=Ue.innerWidth||qe.body&&qe.body.clientWidth||Xt,r=Ue.innerHeight||qe.body&&qe.body.clientHeight||Xt}else{var a=u(Xe);n=a.width||Xt,r=a.height||Xt}Ye=n,Ne=r}$e=Ye*Ne>=Kt,ze=$e?qt:Gt}function m(t,e){if(_e=t,n(),r(),a(),o(),s(),c(),e)Xe=e;else if(ai){if(oi)try{Xe=Ue.frameElement}catch(f){Xe=Xt}else if(Xe=qe.body||Xt,l(Xe)){for(var i,u=Xe.getElementsByTagName("div"),h=0;h<u.length;h++)if(!l(u[h])){i=u[h];break}if(!i){var m=Xe.getElementsByTagName("video");for(h=0;h<m.length;h++)if(!l(m[h])){i=m[h];break}}i&&(Xe=i)}}else Xe=_e&&(_e.parentElement||_e.parentNode)||Xt;return _e!==Xt&&_e!==undefined&&Xe!==Xt&&Xe!==undefined}function f(t){var e,i="";if(t&&"string"==typeof t)try{e=t.match(/^https?:\/\/([-\w\.]*)(:\d+)?([\/\?#]|$)/),e&&e[1]&&(i=e[1])}catch(n){i=""}return i}function d(t,e){return Math.floor((e-t)/1e3)}function p(t,e,i){i=i||Ue,i.addEventListener?i.addEventListener(t,e):i.attachEvent&&i.attachEvent("on"+t,e)}function g(t,e,i){i=i||Ue,i.removeEventListener?i.removeEventListener(t,e):i.detachEvent&&i.detachEvent("on"+t,e)}function w(t,e){var i,n,r,a,o,s=t>te?t-te:0,c=e>te?e-te:0,u=[],l={};for(i=.5;i<ee;i+=1)for(r=Math.round(i*s/ee),n=.5;n<ee;n+=1)a=Math.round(n*c/ee),o=r+"_"+a,l[o]||(u.push(o),l[o]=1);return u}function v(t){var e,i;return t&&-1!==(e=t.indexOf("sek="))?(i=t.indexOf("&",e+"sek=".length),-1===i&&(i=t.length),t.substring(e+"sek=".length,i)):ie}function T(t){var e,i=(new Date).getTime(),n=d(t.scrollStartTime,i),r=Oe.scrollY-t.scrollStartY,a=Oe.document.body.clientHeight;a||(a=Oe.document.body.height),e=Math.round(Oe.scrollY/a*100),e>t.scd&&(t.scd=e),r>0?(t.scrolledDownPixels+=r,t.scrolledDownTime+=n):(t.scrolledUpPixels-=r,t.scrolledUpTime+=n),t.scrollStartTime=0}function y(t){var e=(new Date).getTime();t.scr=1,t.sct||(t.sct=d(ci,e)),t.scrollStartTime&&0!==t.scrollStartTime||(t.scrollStartTime=e,t.scrollStartY=Oe.scrollY),ui||clearTimeout(ui),ui=setTimeout(function(){T(t)},250)}function b(t){p("scroll",function(){y(t)},Oe)}function V(t){var e=(new Date).getTime();t.hov=1,t.tth||(t.tth=d(ci,e)),t.hoverStartTime=e}function C(t){var e=(new Date).getTime();d(t.hoverStartTime,e)>500&&(t.intt=1,t.intl=e,t.tti=d(ci,e))}function x(t){p("mouseover",function(){V(t)}),p("mouseout",function(){C(t)})}function I(t){var e=(new Date).getTime();qe[je]&&t.dwellStartTime>0?t.adt+=d(t.dwellStartTime,e):(t.foc=1,t.dwellStartTime=e)}function P(t){qe[je]||I(t),p(Fe,function(){I(t)},qe)}function k(){var t;t=Ue.onerror,Ue.onerror=function(e,i,n,r,a){return li.ae+=1,!!t&&t(e,i,n,r,a)}}function E(){ai&&x(li),P(li),(!ai||oi&&ri)&&b(li),k()}function S(){if(ai)for(var t=qe.getElementsByTagName("iframe"),e=0;e<t.length;e++)if(!l(t[e]))try{var i=t[e].contentDocument?t[e].contentDocument:t[e].contentWindow?t[e].contentWindow.document:t[e].document;i.getElementsByTagName("div")}catch(n){return!0}return!1}function A(t){var e="tp="+($e?"2":"1");return e+=":mt="+t.measurementBucket,e+=":iww="+(ni?"2":"1"),e+=":aif="+(S()?"1":"0"),e+=":iif="+(ai?"1":"0"),e+=":fns="+t.flashNotSupported}function D(t,e,i,n){return t.indexOf(e)>-1?t.replace(e,n):t+"&"+i+"="+n}function M(t,e,i,n,r,a,o){var s=(new Date).getTime();if(t)try{t=t.replace("%InViewPercentage%",r.getAverageInViewPercentage()),t=t.replace("{pctview}",r.getAverageInViewPercentage()),t=t.replace("%Viewable%",i?"1":"2"),t=t.replace("{initview}",i?"1":"2"),t=D(t,"%Measurable%","im",n?"1":"2"),t=t.replace("%MeasurementType%",e),t=D(t,"%Timestamp%","r",s),t=D(t,"%BucketId%","b",ke),t=D(t,"%AdditionalData%","ad","jv="+Ee+(o&&""!==o?":"+o:"")+":"+A(r)),a&&(t+="&"+a),_t(t)}catch(c){}}function W(t,e){return t.charCodeAt(e)}function H(t,e){return Ti.call(t,e)}function L(t,e,i){return Ti.call(t,e,i)}function B(t,e){var i=t[0],n=t[1],r=t[2],a=t[3];i=R(i,n,r,a,e[0],7,-680876936),a=R(a,i,n,r,e[1],Vi,-389564586),r=R(r,a,i,n,e[2],ki,606105819),n=R(n,r,a,i,e[3],Ai,-1044525330),i=R(i,n,r,a,e[4],7,-176418897),a=R(a,i,n,r,e[5],Vi,1200080426),r=R(r,a,i,n,e[6],ki,-1473231341),n=R(n,r,a,i,e[7],Ai,-45705983),i=R(i,n,r,a,e[8],7,1770035416),a=R(a,i,n,r,e[9],Vi,-1958414417),r=R(r,a,i,n,e[yi],ki,-42063),n=R(n,r,a,i,e[bi],Ai,-1990404162),i=R(i,n,r,a,e[Vi],7,1804603682),a=R(a,i,n,r,e[Ci],Vi,-40341101),r=R(r,a,i,n,e[xi],ki,-1502002290),n=R(n,r,a,i,e[Ii],Ai,1236535329),i=j(i,n,r,a,e[1],5,-165796510),a=j(a,i,n,r,e[6],9,-1069501632),r=j(r,a,i,n,e[bi],xi,643717713),n=j(n,r,a,i,e[0],Ei,-373897302),i=j(i,n,r,a,e[5],5,-701558691),a=j(a,i,n,r,e[yi],9,38016083),r=j(r,a,i,n,e[Ii],xi,-660478335),n=j(n,r,a,i,e[4],Ei,-405537848),i=j(i,n,r,a,e[9],5,568446438),a=j(a,i,n,r,e[xi],9,-1019803690),r=j(r,a,i,n,e[3],xi,-187363961),n=j(n,r,a,i,e[8],Ei,1163531501),i=j(i,n,r,a,e[Ci],5,-1444681467),a=j(a,i,n,r,e[2],9,-51403784),r=j(r,a,i,n,e[7],xi,1735328473),n=j(n,r,a,i,e[Vi],Ei,-1926607734),i=F(i,n,r,a,e[5],4,-378558),a=F(a,i,n,r,e[8],bi,-2022574463),r=F(r,a,i,n,e[bi],Pi,1839030562),n=F(n,r,a,i,e[xi],Di,-35309556),i=F(i,n,r,a,e[1],4,-1530992060),a=F(a,i,n,r,e[4],bi,1272893353),r=F(r,a,i,n,e[7],Pi,-155497632),n=F(n,r,a,i,e[yi],Di,-1094730640),i=F(i,n,r,a,e[Ci],4,681279174),a=F(a,i,n,r,e[0],bi,-358537222),r=F(r,a,i,n,e[3],Pi,-722521979),n=F(n,r,a,i,e[6],Di,76029189),i=F(i,n,r,a,e[9],4,-640364487),a=F(a,i,n,r,e[Vi],bi,-421815835),r=F(r,a,i,n,e[Ii],Pi,530742520),n=F(n,r,a,i,e[2],Di,-995338651),i=N(i,n,r,a,e[0],6,-198630844),a=N(a,i,n,r,e[7],yi,1126891415),r=N(r,a,i,n,e[xi],Ii,-1416354905),n=N(n,r,a,i,e[5],Si,-57434055),i=N(i,n,r,a,e[Vi],6,1700485571),a=N(a,i,n,r,e[3],yi,-1894986606),r=N(r,a,i,n,e[yi],Ii,-1051523),n=N(n,r,a,i,e[1],Si,-2054922799),i=N(i,n,r,a,e[8],6,1873313359),a=N(a,i,n,r,e[Ii],yi,-30611744),r=N(r,a,i,n,e[6],Ii,-1560198380),n=N(n,r,a,i,e[Ci],Si,1309151649),i=N(i,n,r,a,e[4],6,-145523070),a=N(a,i,n,r,e[bi],yi,-1120210379),r=N(r,a,i,n,e[2],Ii,718787259),n=N(n,r,a,i,e[9],Si,-343485551),t[0]=Li(i,t[0]),t[1]=Li(n,t[1]),t[2]=Li(r,t[2]),t[3]=Li(a,t[3])}function O(t,e,i,n,r,a){return e=Li(Li(e,t),Li(n,a)),Li(e<<r|e>>>Wi-r,i)}function R(t,e,i,n,r,a,o){return O(e&i|~e&n,t,e,r,a,o)}function j(t,e,i,n,r,a,o){return O(e&n|i&~n,t,e,r,a,o)}function F(t,e,i,n,r,a,o){return O(e^i^n,t,e,r,a,o)}function N(t,e,i,n,r,a,o){return O(i^(e|~n),t,e,r,a,o)}function Y(t){for(var e=t.length,i=[1732584193,-271733879,-1732584194,271733878],n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=Hi;r<=e;r+=Hi)B(i,$(L(t,r-Hi,r))),r+=Hi;for(t=H(t,r-Hi),r=0,e=t.length;r<e;r++)n[r>>2]|=W(t,r)<<(r%4<<3);if(n[r>>2]|=Oi<<(r%4<<3),r>55)for(B(i,n),r=0;r<Pi;r++)n[r]=0;return n[xi]=8*e,B(i,n),i}function $(t){var e,i=[];for(e=0;e<Hi;e+=4)i[e>>2]=W(t,e)+(W(t,e+1)<<8)+(W(t,e+2)<<Pi)+(W(t,e+3)<<Mi);return i}function z(t){return[mi[t>>4&Ri],mi[t>>0&Ri],mi[t>>Vi&Ri],mi[t>>8&Ri],mi[t>>Ei&Ri],mi[t>>Pi&Ri],mi[t>>Mi+4&Ri],mi[t>>Mi&Ri]].join("")}function _(t){for(var e=0,i=t.length;e<i;e++)t[e]=z(t[e]);return t.join("")}function X(t,e){return t+e&fi}function U(t,e){var i=(t&Bi)+(e&Bi);return(t>>Pi)+(e>>Pi)+(i>>Pi)<<Pi|i&Bi}function q(t){if(vi)throw new Error(pi);return""}function G(){return K(gi)===wi}function K(t){return _(Y(t))}function Q(){var t,e,i,n=0,r=0,a=0,o=[],s=/(r\-(.*)\.html)|(sf(.*?)\.js)/gi;try{t=Ue[fe],t&&typeof t[de]===ge&&(o=t[de](pe))}catch(c){o=[]}for(;e=o[r++];){try{i=e.name,a=e.transferSize}catch(c){i=ie,a=0}a&&a>0&&i&&-1===i.search(s)&&(n+=a)}return n}function J(){var t,e,i,n;try{n=qe.createElement("canvas")}catch(r){}return n&&n.getContext?(n.style.border="1px solid black",n.width=16,n.height=22,i=n.getContext("2d"),i[ce]=he,i.font="15px 'Arial'",i[ce]="alphabetic",i[ue]="#ffa",i.fillRect(1,1,15,20),i[ue]="#00a",i[le]("yj",2,15),i[ue]="rgba(100, 100, 100, 0.7)",i[le]("yj",4,17),t=n.toDataURL("image/png"),e=t.split(","),ji(2===e[se]?e[1]:t)):ji(ie)}function Z(t){var e,i,n="";try{if(i=Qe&&Qe.ancestorOrigins){if(e=i.length){n=f(i[e-1]);for(var r=0,a=f(i[0]);r<e-1&&n.length+(0===r?re:ne).length+a.length<=Le;r++,a=f(i[r]))n+=(0===r?re:ne)+a}t.sao=e||0}else t.sao=-1}catch(o){n="",t.sao=-1}return n}function tt(){var t,e,i=ie;try{for(e=Ke[ae][se],t=0;t<e;t++)i!==ie&&(i+=ne),i+=Ke[ae][t][oe]}catch(n){i=ie}return i}function et(){var t=ie;try{t=3===Re||"msie"===ei||"trident"===ei?nt():tt()}catch(e){t=ie}return ji(t)}function it(t){var e,i="";try{e=Ke[ae][t],e?i=e.name:(new Ue.ActiveXObject(t),i=t)}catch(n){i=ie}return i}function nt(){var t,e="",i="",n=["ShockwaveFlash.ShockwaveFlash","AcroPDF.PDF","PDF.PdfCtrl","QuickTime.QuickTime","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer","SWCtl.SWCtl","WMPlayer.OCX","AgControl.AgControl","Skype.Detection"],r=n.length;for(t=0;t<r;t++)""!==(i=it(n[t]))&&(""!==e&&(e+=ne),e+=i);return e}function rt(t,e){return e-t}function at(){var t,e=0,i=Ue.top;try{if(i==Ue)e=0;else for(t=Ue.parent,e++;i!=t;)t=t.parent,e++}catch(n){e=-1}return e}function ot(t,e){var i,n,r,a=[];for(i=qe.getElementsByTagName(t),n=0;n<i.length;n++)(r=i[n][Pe](e))&&a.push(r);return a}function st(t,e){var i,n,r,a=t.length,o=e.length;if(a!==o)return!1;for(i=0;i<a;i++){for(r=!1,n=0;n<o;n++)-1!==t[i].indexOf(e[n])&&(r=!0);if(!r)return!1}return!0}function ct(){var t,e,i=3,n=[],r=[],a=[],o=[],s=[],c=[];if(Ue&&Ue.performance&&Ue.performance.getEntriesByType&&"function"==typeof Ue.performance.getEntriesByType){for(n=ot("img","src"),a=ot("script","src"),s=ot("object","data"),t=Ue.performance.getEntriesByType("resource"),e=0;e<t.length;e++)"img"===t[e].initiatorType?r.push(t[e].name):"script"===t[e].initiatorType?o.push(t[e].name):"object"===t[e].initiatorType&&c.push(t[e].name);st(n,r)||(i=2),st(a,o)||(i=2),st(s,c)||(i=2),2!==i&&(i=1)}return i}function ut(t,e,i,n,r){var a="",o=(new Date).getTime();return a+="gm0="+i.inView100For0Sec,a+="&gm1="+i.inView100For1Sec,a+="&tivt="+i.lastTotalInViewTime,a+="&hov="+t.hov,a+="&tth="+t.tth,a+="&intt="+t.intt,a+="&intl="+t.intl,a+="&tti="+t.tti,a+="&st="+rt(ci,o),a+="&foc="+t.foc,qe&&!qe[je]&&(t.adt+=rt(t.dwellStartTime,o)),a+="&adt="+t.adt,a+="&scr="+t.scr,a+="&ph="+t.ph,a+="&scd="+t.scd,a+="&svd="+(t.scrolledDownTime>0?Math.round(t.scrolledDownPixels/t.scrolledDownTime):0),a+="&svu="+(t.scrolledUpTime>0?Math.round(t.scrolledUpPixels/t.scrolledUpTime):0),a+="&sct="+t.sct,a+="&mivp="+i.maxInViewPercentage,a+="&mivt="+i.maxInViewTime,a+="&ls="+i.measurementBucket,a+="&winl="+Fi(f(Qe)),a+="&winr="+Fi(f(qe&&qe.referrer)),a+="&lvl="+at(),a+="&atf=0",a+="&al="+ct(),a+="&ae="+t.ae,a+="&aw="+Q(),a+="&ao="+Z(t),a+="&sao="+t.sao,a+="&lang="+Fi(Je),a+="&sw="+(Ge?Ge.width:0),a+="&sh="+(Ge?Ge.height:0),a+="&tzo="+(new Date).getTimezoneOffset(),a+="&plgn="+Fi(et()),a+="&ci="+Fi(J()),a+="&b="+ke,a+="&ad=jv="+Ee+(r?":"+r:"")+":"+A(i),n&&(a+="&"+n),a}function lt(t,e,i,n,r){try{_t(Te+ut(t,e,i,n,r))}catch(a){}}function ht(t){var e={x:0,y:0};return t.x>=t.scrlX&&t.x+t.halfWidth<t.scrlX+t.viewportWidth?e.x=t.scrlX+t.viewportWidth-t.x:t.x+t.halfWidth>t.scrlX&&t.x+t.adWidth<=t.scrlX+t.viewportWidth?e.x=t.x+t.adWidth-t.scrlX:t.x<t.scrlX&&t.x+t.adWidth>t.scrlX+t.viewportWidth&&t.viewportWidth>=t.halfWidth&&(e.x=t.viewportWidth),t.y>=t.scrlY&&t.y+t.halfHeight<t.scrlY+t.viewportHeight?e.y=t.scrlY+t.viewportHeight-t.y:t.y+t.halfHeight>t.scrlY&&t.y+t.adHeight<=t.scrlY+t.viewportHeight?e.y=t.y+t.adHeight-t.scrlY:t.y<t.scrlY&&t.y+t.adHeight>t.scrlY+t.viewportHeight&&t.viewportHeight>=t.halfHeight&&(e.y=t.viewportHeight),e}function mt(t){return t.scrlX=0,t.scrlY=0,ht(t)}function ft(){1===Re||4===Re||5===Re||7===Re?Yi=ht:2!==Re&&3!==Re&&6!==Re||(Yi=mt)}function dt(t){var e,i=t.bcr,n=t.adWidth,r=t.adHeight,a=n&&r?n*r:0,o=Ue.parent,s=o.document,c=s.body,u={};return u.x=Math.round(i.left+c.scrollLeft),u.y=Math.round(i.top+c.scrollTop),u.adWidth=n,u.adHeight=r,u.halfWidth=Math.floor(n/2),u.halfHeight=Math.floor(r/2),u.viewportWidth=Math.max(s.documentElement.clientWidth,Ue.innerWidth||0),u.viewportHeight=Math.max(s.documentElement.clientHeight,Ue.innerHeight||0),u.scrlX=o.scrollX,u.scrlY=o.scrollY,e=Yi(u),e.x>n&&(e.x=n),e.y>r&&(e.y=r),a?Math.round(100*e.x*e.y/a):0}function pt(t,e){var i,n=e.split("_");return 2===n.length&&(i=qe.createElement("iframe"),i.style.cssText="width:"+te+"px;height:"+te+"px;left:"+n[0]+"px;top:"+n[1]+"px;position:absolute;background-color:transparent;",i.scrolling="no",i.allowtransparency="true",i.hidefocus="true",i.setAttribute("frameBorder","0"),i.id=e,t.lastMozPaintCounts[e]=0,t.paintCounts[e]=0,t.paintTimestamps[e]=0,t.lastPaintCounts[e]=0,t.lastPaintTimestamps[e]=0),i}function gt(t){var e;for(t.tags=w(Ye,Ne),t.numTag=t.tags.length,t.tagArray=[],e=0;e<t.numTag;e++)t.tagArray.push(pt(t,t.tags[e]));for(e=0;e<t.numTag;e++)qe.body.appendChild(t.tagArray[e])}function wt(t,e){var i=qe.getElementById(e);i&&(i.style.visibility=i.style.visibility===Jt?Zt:Jt)}function vt(t,e,i){var n,r;if(t.paintTimestamps[i]=e,e>t.lastPaintTimestamps[i]&&(r=qe.getElementById(i))){try{n=r.contentWindow,n.document||(n=Xt)}catch(a){n=Xt}n&&n.mozPaintCount>t.lastMozPaintCounts[i]&&(t.paintCounts[i]+=1,t.lastMozPaintCounts[i]=n.mozPaintCount)}}function Tt(t,e){var i=Ue.requestAnimationFrame||Ue.mozRequestAnimationFrame||Xt;wt(t,e),i&&i(function(i){vt(t,i,e)})}function yt(t){var e;for(e=0;e<t.numTag;e++)Tt(t,t.tags[e])}function bt(t){var e,i,n=0;for(e=0;e<t.numTag;e++)i=t.tags[e],t.paintTimestamps[i]>t.lastPaintTimestamps[i]&&(t.paintCounts[i]>t.lastPaintCounts[i]&&(n+=1),t.lastPaintCounts[i]=t.paintCounts[i],t.lastPaintTimestamps[i]=t.paintTimestamps[i]);return n}function Vt(t){var e=0,i=0;if(It(t))for(;e<t.numTag;e++)xt(t,e)&&i++;return i}function Ct(t){var e=null,i=qe.getElementById(t);if(i&&"OBJECT"===i.nodeName)if("undefined"!=typeof i.SetVariable)e=i;else{var n=i.getElementsByTagName(me)[0];n&&(e=n)}return e}function xt(t,e){var i,n=Ct("Darla"+e);return!(!n||!n.jsCallback)&&(i=t.minFlashPaintCalls[t.isCurrentlyInView?"fine":"coarse"],n.jsCallback("count")>i)}function It(t){var e,i;return t.tabVisibilityState!==undefined?t.tabVisibilityState:(e=t.currentTimestamp-t.previousTimestamp,i=t.isCurrentlyInView?t.fineTimeout:t.coarseTimeout,e/i<5)}function Pt(t){t.tabVisibilityState=!0,p(Fe,function(){t.tabVisibilityState=!qe[je]})}function kt(t,e){var i=qe.createElement("div"),n=qe.createElement("div"),r=t.split("_");return n.id=e,i.style.cssText="width: "+te+"px; height: "+te+"px; left: "+r[0]+"px; top: "+r[1]+"px; position: absolute; background-color: transparent; filter: alpha(opacity=10); opacity: 0.1;",i.classname="outer",i.appendChild(n),i}function Et(t){var e,i,n,r,a={},o=Qt+"playerProductInstall.swf",s={allowfullscreen:"false",allowscriptaccess:"always",bgcolor:"#ffffff",quality:"high",wmode:"transparent"};for(t.tags=w(Ye,Ne),t.numTag=t.tags.length,t.tagArray=[],e=0;e<t.numTag;e++)i="Darla"+e,n={align:"middle",id:i,name:i,style:"height: 1px; left: 50%; margin: -1px 0 0 -1px; position: absolute; top: 50%; width: 1px;"},r=kt(t.tags[e],i),t.tagArray.push(r),qe.body.appendChild(r),swfobject.embedSWF(Qt+"Darla.swf",i,1,1,"11.4.0",o,a,s,n);swfobject.createCSS("#flashContent","display: block; text-align: left;")}function St(t,e){var i=Ct("Darla0"),n=(new Date).getTime();i&&i.jsCallback?(clearInterval(St.hook),t.lastTimestamp=n,e()):n-St.time>=Be&&(clearInterval(St.hook),t.markFlashNotSupported(!0))}function At(t,e){var i,n=e.split("_");return 2===n.length&&(i=qe.createElement("iframe"),i.style.cssText="width:"+te+"px;height:"+te+"px;left:"+n[0]+"px;top:"+n[1]+"px;position:absolute;background-color:transparent;",i.scrolling="no",i.allowtransparency="true",i.hidefocus="true",i.setAttribute("frameBorder","0"),i.id=e,t.painted[e]=0),i}function Dt(t){var e;for(t.tags=w(Ye,Ne),t.numTag=t.tags.length,t.tagArray=[],e=0;e<t.numTag;e++)t.tagArray.push(At(t,t.tags[e]));for(e=0;e<t.numTag;e++)qe.body.appendChild(t.tagArray[e])}function Mt(t,e,i,n){if(en[t])try{var r=qe.createElement("script"),a=en[t];return a=a.replace(/\$\[(.*?)\]/g,function(t,r){return e[r]||i[r]||n[r]||""}),r.src=a,r.type="text/javascript",Xe.appendChild(r),!0}catch(o){}return!1}function Wt(t,e){if(t.vendorParams){t.vendorParams.publisherID=t.vendorParams.publisherID||t.publisherID;var i=t.vendor,n=t.vendorParams.publisherID,r={};return e[i]&&e[i][n]&&(r=e[i][n]),Mt(i,t.vendorParams,r,t)}return!1}function Ht(t,e){this.timeout=t,this.callback=e,this.timeoutRef=0}function Lt(){return"vd=0:na="+(fn?"1":"0")+":ed="+(ln?"1":"0")+":atpt="+(hn?"1":"0")+":tpv="+(mn||"")}function Bt(){return""}function Ot(){return"sek="+nn}function Rt(){cn||(rn.metViewableStandard(),M(sn,"2",rn.inView,rn.isMeasurable,rn,Bt(),Lt())),cn=!0}function jt(){un||(lt(li,sn,rn,Ot(),Lt()),rn.cleanup()),un=!0}function Ft(){Rt(),jt(),g(De,Ft)}function Nt(){Rt(),jt(),g(Me,Nt)}function Yt(t,e,i){if((sn=t&&t.beaconUrl)&&""!==sn){if(nn=t&&t.sek||v(sn),fn=t.isNative,ln=m(e,i),h(t.adWidth,t.adHeight),ln){for(var n=new Ht(Ut,Rt),r=0;r<on.length&&!on[r].prototype.canApplyMethod(t);r++);rn=new on[r]({adWidth:Ye,adHeight:Ne,inViewCallback:function(t){n.startTimer(t)},outOfViewCallback:function(t){n.stopTimer(t)}})}else rn=new tn({adWidth:Ye,adHeight:Ne,inViewCallback:function(){},outOfViewCallback:Rt});p(Ae,function(){h(),rn.reset()}),rn.init(),p(De,Ft),p(Me,Nt),hn=Wt(t,t.vendorPublisherParams),mn=t.vendor,E()}}function $t(t){if(!an){an=hi(Ie);try{t.setAttribute("id",an),t.id=an}catch(e){}if(t=qe.getElementById(an))return t}return null}function zt(){var t=100!==ke?qe.getElementById(be+"1_"+ke):null;if(t)return $t(t);if(t=qe.getElementById(ye+"1")){var e=parseFloat(t[Pe](Ve),10);if(e){e=0!==e?Math.floor(e/xe):0;for(var i=0,n=0;i<Ce.length;n+=Ce[i],i++)if(e<n+Ce[i]){t.setAttribute("id",be+"1_"+Ce[i]);var r=qe.getElementsByTagName("body")[0],a=qe.createElement("script");return a.setAttribute("src",Qt+"inside-"+Ce[i]+".js"),r.appendChild(a),""}}return $t(t)}return""}var _t,Xt=null,Ut=1e3,qt=30,Gt=50,Kt=242500,Qt="https://s.yimg.com/rq/iv/",Jt="hidden",Zt="visible",te=1,ee=5,ie="",ne="",re="",ae="plugins",oe="name",se="length",ce="textBaseline",ue="fillStyle",le="fillText",he="top",me="object",fe="performance",de="getEntriesByType",pe="resource",ge="function",we="data-ad-width",ve="data-ad-height",Te="https://beap-bc.yahoo.com/ym?",ye="x_vi_di",be="x_vi_di_exp",Ve="data-vwb",Ce=[1,5,20],xe=10,Ie="x_vi_di_processed",Pe="getAttribute",ke=20,Ee="1.0.145",Se="inViewPercentage",Ae="resize",De="unload",Me="beforeunload",We=20,He=20,Le=255,Be=5e3;_t=navigator.sendBeacon?function(t,e){navigator.sendBeacon(t,e)}:function(t,e){var i=new Image;e||(e=""),i.src=t+e};var Oe,Re,je,Fe,Ne,Ye,$e,ze,_e,Xe,Ue=window,qe=document,Ge=t(Ue,"screen",Xt),Ke=t(Ue,"navigator",Xt),Qe=t(Ue,"location",Xt),Je=t(Ke,"language",""),Ze=t(Ke,"userAgent",""),ti=Ze.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i),ei=RegExp.$1.toLowerCase(),ii=parseFloat(Ze.match(/version\/([\d]+)/i)&&RegExp.$1||ti&&ti[2]||""),ni=(Ze.match(/((ip)(hone|ad|od)|playbook|hp-tablet)/i)&&RegExp.$1.toLowerCase(),Ze.match(/(android|blackberry|bb10|macintosh|webos|windows)/i)&&RegExp.$1.toLowerCase(),!1),ri=!1,ai=!1,oi=!1,si=!1,ci=(new Date).getTime();!function(){try{var t=Ue.parent,e=Ue.top;ri=!(!e||!t||e!=t||e==Ue),ai=!(!t||!t||t==Ue)}catch(i){}}();var ui,li={w:0,h:0,mw:-1,mh:-1,bl:-1,bt:-1,ew:-1,eh:-1,ex:-1,ey:-1,vw:-1,vh:-1,sx:-1,sy:-1,ivp:-1,ivd:-1,pt:-1,mi:-1,b:-1,gm0:0,gm1:0,m:-1,tivt:0,hov:2,tth:0,intt:2,intl:0,tti:0,st:0,foc:2,adt:0,scr:2,scd:0,svd:0,svu:0,sct:0,mivp:0,mivt:0,ls:0,winl:"",winr:"",lvl:0,al:3,ae:0,bct:2,ph:-1,dwellStartTime:0,scrolledUpPixels:0,scrolledUpTime:0,scrolledDownPixels:0,scrolledDownTime:0,avoc:0,avoc_debug:0},hi=function(){function t(t){return Math.floor(Math.random()*(10*t))}function e(e){var a=n;n+=r,r=t(100);try{e=e&&String(e)}catch(o){e=""}return e=e||i,a=e+"_"+a}var i="$yinsideIV",n=(new Date).getTime()-t(1e5),r=t(100);return e}(),mi="0123456789abcdef".split(""),fi=4294967295,di=0,pi="MD5 module is broken",gi="hello",wi="5d41402abc4b2a76b9719d911017c592",vi=0,Ti=String.prototype.substring,yi=10,bi=11,Vi=12,Ci=13,xi=14,Ii=15,Pi=16,ki=17,Ei=20,Si=21,Ai=22,Di=23,Mi=24,Wi=32,Hi=64,Li=X,Bi=65535,Oi=128,Ri=Ii;G()?di=1:(Li=U,di=G()?1:0);var ji=di?K:q,Fi=encodeURIComponent,Ni=function(t){this.adWidth=t.adWidth,this.adHeight=t.adHeight,this.inViewCallback=t.inViewCallback,this.outOfViewCallback=t.outOfViewCallback,this.thresholdPercentage=t.thresholdPercentage||ze,this.inViewPercentage=0,this.inViewPercentages=[],this.maxInViewPercentage=0,this.inView=!1,this.isMeasurable=!0,this.isCurrentlyInView=!1,this.currentTimestamp=0,this.lastTimestamp=0,this.nextTimestamp=0,this.totalInViewTime=0,this.lastTotalInViewTime=0,this.maxInViewTime=0,this.totalInView100Time=0,this.inView100StartTime=0,this.lastInView100Timestamp=0,this.inView100For0Sec=0,this.inView100For1Sec=0,this.stopCallbacks=!1,this.adLoaded=t.adLoaded,this.playerId=t.playerId,this.adUnit=t.adUnit,this.adSizeChanged=t.adSizeChanged,this.adVideoComplete=t.adVideoComplete,this.flashNotSupported=0};Ni.prototype.beaconTimeout=Ut,Ni.prototype.measurementBucket="2",Ni.prototype.init=function(){this.registerInViewListener()},Ni.prototype.canApplyMethod=function(){return!1},Ni.prototype.registerInViewListener=function(){},Ni.prototype.inViewListenerCallback=function(t){this.currentEntry=t,this.currentTimestamp=t.time,this.updateInViewPercentages(t),this.isInView()&&!qe[je]?(this.updateTimestamps(),this.isCurrentlyInView,this.isCurrentlyInView=!0,this.stopCallbacks||this.inViewCallback(),this.isInView100()?this.updateTimestamps100():this.resetTimestamps100()):(this.isCurrentlyInView,this.resetTimestamps(),this.resetTimestamps100(),this.isCurrentlyInView=!1,this.inView=!1,this.stopCallbacks||this.outOfViewCallback())},Ni.prototype.metViewableStandard=function(){this.inView=this.isCurrentlyInView,this.stopCallbacks=!0,this.currentTimestamp=(new Date).getTime(),this.isCurrentlyInView?this.updateTimestamps():this.resetTimestamps(),this.lastTotalInViewTime=this.totalInViewTime},Ni.prototype.updateInViewPercentages=function(t){this.inViewPercentage=t.intersectionRatio,this.maxInViewPercentage<this.inViewPercentage&&(this.maxInViewPercentage=this.inViewPercentage),this.inViewPercentages.push(this.inViewPercentage)},Ni.prototype.updateTimestamps=function(){return this.lastTimestamp>0&&(this.totalInViewTime+=this.currentTimestamp-this.lastTimestamp,this.maxInViewTime<this.totalInViewTime&&(this.maxInViewTime=this.totalInViewTime),this.lastTotalInViewTime=this.totalInViewTime),this.lastTimestamp=this.currentTimestamp,this.lastTimestamp},Ni.prototype.isInView=function(){return this.inViewPercentage>=this.thresholdPercentage},Ni.prototype.isSufficientlyInView=function(){return this.totalInViewTime>=this.beaconTimeout},Ni.prototype.resetTimestamps=function(){this.updateTimestamps(),this.lastTimestamp=this.nextTimestamp=this.totalInViewTime=0,this.inViewPercentages=[]},Ni.prototype.updateTimestamps100=function(){this.inView100For0Sec=1,this.lastInView100Timestamp>0?this.totalInView100Time+=this.currentTimestamp-this.lastInView100Timestamp:this.inView100StartTime=this.currentTimestamp,this.lastInView100Timestamp=this.currentTimestamp,this.totalInView100Time>this.beaconTimeout&&(this.inView100For1Sec=1)},Ni.prototype.isInView100=function(){return this.inViewPercentage>99},Ni.prototype.resetTimestamps100=function(){this.lastInView100Timestamp=this.totalInView100Time=this.inView100StartTime=0},Ni.prototype.cleanup=function(){},Ni.prototype.reset=function(){},Ni.extend=function(){var t=function(e){t.parent.call(this,e)};t.prototype=Object.create!==undefined?Object.create(this.prototype):new this({}),t.prototype.constructor=t,t.parent=this,t.extend=this.extend;for(var e=0;e<arguments.length;e++){var i=arguments[e];undefined!==i.prototype&&(i=i.prototype);for(var n in i)i.hasOwnProperty(n)&&(t.prototype[n]=i[n])}return t},Ni.prototype.getAverageInViewPercentage=function(){var t,e=this.inViewPercentages.length,i=0;for(t=0;t<e;t++)i+=this.inViewPercentages[t];return e?Math.round(i/e):0};var Yi,$i=Ni.extend({fineTimeout:100,coarseTimeout:750,registerInViewListener:function(){var t=this;this.timeout=this.notInViewTimerWrapper(function(){t.fireInViewListenerCallback()})},fireInViewListenerCallback:function(){var t={intersectionRatio:this.getInViewPercentage(),time:(new Date).getTime()},e=this;this.inViewListenerCallback(t),this.timeout=this[this.isCurrentlyInView?"inViewTimerWrapper":"notInViewTimerWrapper"](function(){e.fireInViewListenerCallback()})},getInViewPercentage:function(){return 0},notInViewTimerWrapper:function(t){return setTimeout(t,this.coarseTimeout)},inViewTimerWrapper:function(t){return setTimeout(t,this.fineTimeout)},cleanup:function(){clearTimeout(this.timeout)},measurementBucket:"0"}),zi=$i.extend({init:function(){ft(),this.registerInViewListener()},getBoundingClientRect:function(){return Xe.getBoundingClientRect()},getInViewPercentage:function(){try{return dt({bcr:this.getBoundingClientRect(),adWidth:Ye,adHeight:Ne})}catch(t){}return 0}}),_i=zi.extend({canApplyMethod:function(){return!ni&&!ai},measurementBucket:"6"}),Xi=zi.extend({canApplyMethod:function(){return!ni&&oi&&ri},getBoundingClientRect:function(){var t=Xe.getBoundingClientRect(),e={left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width,height:t.height};try{if(Ue.frameElement!==Xe){var i=Ue.frameElement.getBoundingClientRect();e.left+=i.left,e.right+=i.left,e.top+=i.top,e.bottom+=i.top}}catch(n){}return e},measurementBucket:"2"}),Ui=$i.extend({coarseTimeout:100,canApplyMethod:function(){return!ni&&si},getInViewPercentage:function(){return Ue.$sf.ext[Se]()},measurementBucket:"1"}),qi=$i.extend({canApplyMethod:function(){return!ni&&"mozPaintCount"in Ue},init:function(){this.lastMozPaintCounts={},this.paintCounts={},this.paintTimestamps={},this.lastPaintCounts={},this.lastPaintTimestamps={},gt(this),yt(this),this.registerInViewListener()},getInViewPercentage:function(){var t=bt(this);return yt(this),this.numTag?100*t/this.numTag:0},notInViewTimerWrapper:function(t){var e=this;return setTimeout(function(){yt(e),e.timeout=setTimeout(t,.5*e.coarseTimeout)},.5*this.coarseTimeout)},inViewTimerWrapper:function(t){var e=this;return setTimeout(function(){yt(e),e.timeout=setTimeout(t,.5*e.fineTimeout)},.5*this.fineTimeout)},removeTags:function(){for(var t=0;t<this.numTag;t++)qe.body.removeChild(this.tagArray[t])},cleanup:function(){this.constructor.parent.prototype.cleanup.call(this),this.removeTags()},reset:function(){this.removeTags(),gt(this)},measurementBucket:"3"}),Gi=$i.extend({canApplyMethod:function(t){return!ni&&"safari"!==ei&&"14"!==t.publisherID},loadSwfObject:function(){var t,e,i=qe.getElementsByTagName("body")[0],n=this;i&&(e=qe.createElement("script"),e.setAttribute("src",Qt+"swfobject.js"),i.appendChild(e),t=setInterval(function(){"object"==typeof swfobject&&(clearInterval(t),Pt(n),swfobject.hasFlashPlayerVersion("9.0.0")?(Et(n),St.time=(new Date).getTime(),St.hook=setInterval(function(){St(n,function(){n.flashTagsLoaded=!0,n.registerInViewListener()})},100)):n.markFlashNotSupported())},100))},init:function(){this.minFlashPaintCalls={fine:1,coarse:Math.floor(this.coarseTimeout/100)},this.flashTagsLoaded=!1,this.loadSwfObject()},getInViewPercentage:function(){return 100*(Vt(this)||0)/this.numTag},isSufficientlyInView:function(){var t=this.beaconTimeout/this.fineTimeout/2;return this.isCurrentlyInView&&this.totalInViewTime>this.beaconTimeout&&this.inViewPercentages.length>t},inViewTimerWrapper:function(t){var e;return this.nextTimestamp&&0!==this.nextTimestamp||(this.nextTimestamp=this.currentTimestamp),this.nextTimestamp+=this.fineTimeout,e=this.nextTimestamp-this.currentTimestamp,e>this.fineTimeout&&(e=this.fineTimeout),e<0&&(e=this.fineTimeout/2),setTimeout(t,e)},removeTags:function(){for(var t=0;t<this.numTag;t++)swfobject.removeSWF("Darla"+t)},cleanup:function(){this.constructor.parent.prototype.cleanup.call(this),this.removeTags()},reset:function(){"object"!=typeof swfobject?this.loadSwfObject():(this.removeTags(),Et(this))},markFlashNotSupported:function(t){this.cleanup(),this.isMeasurable=!1,this.flashNotSupported=1+(t?1:0),this.stopCallbacks||(this.stopCallbacks=!0,this.outOfViewCallback(!0))},measurementBucket:"4"}),Ki=Ni.extend({canApplyMethod:function(){return!ni&&!si&&undefined!==Ue.IntersectionObserver},registerInViewListener:function(){for(var t=this,e=[],i=this.thresholdPercentage/100;i<1;i+=.05)e.push(i);e.push(1),this.io=new Ue.IntersectionObserver(function(e){for(var i,n=0;n<e.length;n++)if(e[n].target===Xe){i=e[n];break}i&&t.inViewListenerCallback({intersectionRatio:100*e[0].intersectionRatio,time:(new Date).getTime()})},{threshold:e}),this.io.observe(Xe)},cleanup:function(){this.io&&this.io.disconnect()},measurementBucket:"7"}),Qi=Ni.extend({canApplyMethod:function(){return ni&&undefined!==Ue.mraid},registerInViewListener:function(){var t=this;t.mraidVersion=Ue.mraid.getVersion&&Ue.mraid.getVersion(),"3.0"===t.mraidVersion?(this.viewableChangeEventListener=function(e){t.inViewListenerCallback({time:(new Date).getTime(),intersectionRatio:e})},Ue.mraid.addEventListener("exposureChange",this.viewableChangeEventListener)):(this.viewableChangeEventListener=function(){t.inViewListenerCallback({time:(new Date).getTime(),intersectionRatio:Ue.mraid.isViewable()?100:0})},Ue.mraid.addEventListener("viewableChange",this.viewableChangeEventListener))},cleanup:function(){"3.0"===this.mraidVersion?Ue.mraid.removeEventListener("exposureChange",this.viewableChangeEventListener):Ue.mraid.removeEventListener("viewableChange",this.viewableChangeEventListener)},measurementBucket:"8"}),Ji=Ni.extend({canApplyMethod:function(){return!ni&&!si&&undefined!==Ue.context&&undefined!==Ue.context.observeIntersection},registerInViewListener:function(){var t=this;t.cleanup=Ue.context.observeIntersection(function(e){e=e.sort(function(t,e){return t.time>e.time}),e.forEach(function(e){t.inViewListenerCallback({time:e.time,intersectionRatio:100*e.intersectionRatio})})})},measurementBucket:"9"}),Zi=$i.extend({canApplyMethod:function(){return!ni&&"requestAnimationFrame"in Ue&&"cancelAnimationFrame"in Ue&&"safari"===ei&&Number(ii)>=10},setupHandlerPerTag:function(t){var e=this.tagArray[t].contentWindow,i=this;e&&(e.prevTimestamp=(new Date).getTime(),e.animationFrameRequest&&(e.cancelAnimationFrame(e.animationFrameRequest),this.painted[t]=0),e.animationFrameRequest=e.requestAnimationFrame(function(){var n=(new Date).getTime()
;n-e.prevTimestamp<i.fineTimeout/2?i.painted[t]=1:i.painted[t]=0,e.prevTimestamp=n}))},setupHandlers:function(){for(var t=0;t<this.numTag;t++)this.setupHandlerPerTag(t)},init:function(){this.painted={},Dt(this),this.setupHandlers(),this.registerInViewListener()},getInViewPercentage:function(){for(var t=0,e=0;e<this.numTag;e++)t+=this.painted[e],this.painted[e]=0;return this.setupHandlers(),this.numTag?100*t/this.numTag:0},notInViewTimerWrapper:function(t){var e=this;return setTimeout(function(){e.setupHandlers(),e.timeout=setTimeout(t,.5*e.coarseTimeout)},.5*this.coarseTimeout)},inViewTimerWrapper:function(t){var e=this;return setTimeout(function(){e.setupHandlers(),e.timeout=setTimeout(t,.5*e.fineTimeout)},.5*this.fineTimeout)},removeTags:function(){for(var t=0;t<this.numTag;t++)qe.body.removeChild(this.tagArray[t])},cleanup:function(){this.constructor.parent.prototype.cleanup.call(this),this.removeTags()},reset:function(){this.removeTags(),Dt(this)},measurementBucket:"10"}),tn=Ni.extend({canApplyMethod:function(){return!0},init:function(){this.isMeasurable=!1;var t=this;setTimeout(function(){t.outOfViewCallback(!0)})},measurementBucket:"5"}),en={moat:"https://z.moatads.com/yahoodisplay873773666324/moatad.js#moatClientLevel1=Yahoo!&moatClientLevel2=$[campaignID]&moatClientLevel3=$[lineItemID]&moatClientLevel4=$[creativeID]&moatClientSlicer1=$[publisherID]&moatClientSlicer2=$[sitePlacementID]&zMoatAuctionID=$[auctionID]&zMoatAdReqDomain=$[adRequestDomainName]$[additionaParams]"};Ht.prototype.startTimer=function(t){var e=this;t?this.callback(t):this.timeoutRef||(this.timeoutRef=setTimeout(function(){e.callback(t)},this.timeout))},Ht.prototype.stopTimer=function(t){clearTimeout(this.timeoutRef),this.timeoutRef=0,t&&this.callback(t)};var nn,rn,an,on=[Qi,Ki,Ji,_i,Xi,Ui,qi,Zi,Gi,tn],sn="",cn=!1,un=!1,ln=!1,hn=!1,mn="",fn=!1,dn={};!function(){var t,e=Ue.YAHOO&&Ue.YAHOO.Viewability&&Ue.YAHOO.Viewability.Display&&Ue.YAHOO.Viewability.Display.data&&Ue.YAHOO.Viewability.Display.data.pop();if(e)t=qe.getElementById(e.view_id);else if(t=zt(),e={},t){e.beaconUrl=t.text||t.innerHTML||t.innerText||"";var i=Number(t[Pe](we)),n=Number(t[Pe](ve));i&&n&&(e.adWidth=i,e.adHeight=n)}e.isNative=!1,e.vendorPublisherParams=dn,Yt(e,t)}()}();
