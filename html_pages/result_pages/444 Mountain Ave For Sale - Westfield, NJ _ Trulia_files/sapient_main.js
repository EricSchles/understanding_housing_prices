(function(){function e(){d()}function d(){head.load("sapient_util.js","https://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.1/TweenLite.min.js","https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TimelineLite.min.js","https://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.1/easing/EasePack.min.js","https://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.1/plugins/CSSPlugin.min.js",a)}function a(){console.log("DYNAMIC CONTENT INITIALIZED");var g={};g.content=[{}];g.content[0]._id=0;g.content[0].dynamic_properties='{"retina":false}';g.content[0].dependencies='{"c":"skin1.js"}';g.content[0].unit_css="";g.content[0].extra_content="";g.content[0].txt_copy1="<p>WHEN LIFE GETS COSTL<span class='move-left'>Y</span></p>";g.content[0].txt_copy2="<p>REFINANCE WITH CITI</p>";g.content[0].txt_copy3="<p>GET</p>";g.content[0].txt_copy5="<p>OFF YOUR R<span class='tighter'>A</span>TE WHEN<br>YOU APP<span class='tighter'>L</span>Y TOD<span class='tighter'>A</span>Y</p>";g.content[0].txt_cta1="Get Started";g.content[0].txt_replay="<p>Replay</p>";g.content[0].img_copy4={};g.content[0].img_copy4.Url="img_copy4.png";g.content[0].img_bg1={};g.content[0].img_bg1.Url="img_bg1.jpg";SapientUtil.dContent=g.content[0];SapientUtil.dProp=JSON.parse(SapientUtil.dContent.dynamic_properties);SapientUtil.dLibrary.fontContent=SapientUtil.getTXTContent();SapientUtil.dLibrary.fontExceptions=["%","&",":","/","?","#","@","®","=","!",";","’","'"];SapientUtil.init();c()}function f(){var j="["+SapientUtil.dContent.fonts+"]";var h=JSON.parse(j);var g=[];var i=SapientUtil.getFontCharacters();h.forEach(function(m,l){var k=m.c;if(i!=""){k+="&text="+i}g.push(k)});SapientUtil.loadFonts(g,c)}function c(){console.log("LOADING DEPENDENCIES");var j=SapientUtil.dContent;var i="["+SapientUtil.dContent.dependencies+"]";var g=JSON.parse(i);var h=[];g.forEach(function(m,l){var k=m.c;h.push(k)});head.load(h,b)}function b(){SapientUtil.dModule.skin.init()}e()}());