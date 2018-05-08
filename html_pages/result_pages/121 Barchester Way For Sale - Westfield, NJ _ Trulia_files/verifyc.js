setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'683eb63e15034f61a623edd78279a55b',
                comparisonItems:[{name : 'cmp', value : 12113019},{name : 'plmt', value : 12450162}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_1525781586238678');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var dvObj = $dvbsr;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("683eb63e15034f61a623edd78279a55b",false);$dvbsr.pubSub.subscribe('BeforeDecisionRender', '683eb63e15034f61a623edd78279a55b', 'wpdc', function() {try { var result = 0; var cur = window; var tryNum = 0; try {    while (!result && tryNum < 10) {        if (cur.maple != undefined) {            result = 1;            break;        }        if (cur == cur.parent)            break;        tryNum++;        cur = cur.parent;    } } catch (er) {}	if (result) {		$dvbsr.registerEventCall('683eb63e15034f61a623edd78279a55b', { dvp_maple: result});	}} catch (e) {}});


try{__tagObject_callback_203654923513({ImpressionID:"683eb63e15034f61a623edd78279a55b", ServerPublicDns:"tps601.doubleverify.com"});}catch(e){}
try{$dvbsr.pubSub.publish('BeforeDecisionRender', "683eb63e15034f61a623edd78279a55b");}catch(e){}
try{__verify_callback_203654923513({
ResultID:2,
Passback:"",
AdWidth:300,
AdHeight:250});}catch(e){}
try{$dvbsr.pubSub.publish('AfterDecisionRender', "683eb63e15034f61a623edd78279a55b");}catch(e){}
