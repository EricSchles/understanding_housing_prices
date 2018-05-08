/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

fbq.version="2.8.14";
fbq._releaseSegment = "stable";
fbq.pendingConfigs=["global_config"];
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});f.ensureModuleRegistered("SignalsFBEventsOptTrackingOptions",function(){return function(f,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";e.exports={AUTO_CONFIG_OPT_OUT:1<<0,AUTO_CONFIG:1<<1,CONFIG_LOADING:1<<2,SUPPORTS_DEFINE_PROPERTY:1<<3,SUPPORTS_SEND_BEACON:1<<4,HAS_INVALIDATED_PII:1<<5,SHOULD_PROXY:1<<6}})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsPlugin",function(){return function(f,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";function a(a){this.plugin=a;this.__fbEventsPlugin=1;return this}e.exports=a})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsProxyState",function(){return function(f,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=!1;e.exports={getShouldProxy:function(){return a},setShouldProxy:function(b){a=b}}})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEvents.plugins.opttracking",function(){return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var b=f.getFbeventsModules("SignalsFBEventsOptTrackingOptions"),c=f.getFbeventsModules("SignalsFBEventsPlugin"),d=f.getFbeventsModules("SignalsFBEventsProxyState"),g=!1;function h(){try{Object.defineProperty({},"test",{})}catch(a){return!1}return!0}function i(){return!!(a.navigator&&a.navigator.sendBeacon)}function j(a,b){return a?b:0}c=new c(function(a,c){if(g)return;var e={};a.on("pii_invalidated",function(a){a!=null&&(e[typeof a==="string"?a:a.id]=!0)});a.on("getCustomParameters",function(f){if(f==null)return{};var g=c.optIns,k=j(g.isOptedOut(f.id,"AutomaticSetup"),b.AUTO_CONFIG_OPT_OUT);g=j(g.isOptedIn(f.id,"AutomaticSetup"),b.AUTO_CONFIG);var l=j(a.disableConfigLoading!==!0,b.CONFIG_LOADING),m=j(h(),b.SUPPORTS_DEFINE_PROPERTY),n=j(i(),b.SUPPORTS_SEND_BEACON);f=j(f!=null&&e[f.id],b.HAS_INVALIDATED_PII);var o=j(d.getShouldProxy(),b.SHOULD_PROXY);k=k|g|l|m|n|f|o;return{o:k}});g=!0});c.OPTIONS=b;e.exports=c})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.opttracking");f.registerPlugin&&f.registerPlugin("fbevents.plugins.opttracking",e.exports);f.ensureModuleRegistered("fbevents.plugins.opttracking",function(){return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof a},h=function(){function a(a,b){var c=[],d=!0,e=!1,f=undefined;try{for(var a=a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),g;!(d=(g=a.next()).done);d=!0){c.push(g.value);if(b&&c.length===b)break}}catch(a){e=!0,f=a}finally{try{!d&&a["return"]&&a["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;else if((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(b))return a(b,c);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(a,d.key,d)}}return function(b,c,d){c&&a(b.prototype,c);d&&a(b,d);return b}}();function j(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}else return Array.from(a)}function k(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});f.ensureModuleRegistered("SignalsEventValidation",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsLogging");a.logError;var b=a.logUserError,c=/^[+-]?\d+(\.\d+)?$/,d="number",e="currency_code",g={AED:1,ARS:1,AUD:1,BOB:1,BRL:1,CAD:1,CHF:1,CLP:1,CNY:1,COP:1,CRC:1,CZK:1,DKK:1,EUR:1,GBP:1,GTQ:1,HKD:1,HNL:1,HUF:1,IDR:1,ILS:1,INR:1,ISK:1,JPY:1,KRW:1,MOP:1,MXN:1,MYR:1,NIO:1,NOK:1,NZD:1,PEN:1,PHP:1,PLN:1,PYG:1,QAR:1,RON:1,RUB:1,SAR:1,SEK:1,SGD:1,THB:1,TRY:1,TWD:1,USD:1,UYU:1,VEF:1,VND:1,ZAR:1};a={value:{type:d,isRequired:!0},currency:{type:e,isRequired:!0}};var h={PageView:{},ViewContent:{},Search:{},AddToCart:{},AddToWishlist:{},InitiateCheckout:{},PixelInitialized:{},AddPaymentInfo:{},Purchase:{validationSchema:a},Lead:{},CompleteRegistration:{},CustomEvent:{validationSchema:{event:{isRequired:!0}}}},i={agent:!0},j=Object.prototype.hasOwnProperty;function l(a,b,c){this.error=null,this.warnings=[],this.eventName=a,this.params=b||{},this.metadata=c}l.prototype.validateMetadata=function(){if(this.metadata){var a=this.metadata.toLowerCase(),b=i[a];if(!b)return this._error({type:"UNSUPPORTED_METADATA_ARGUMENT",metadata:a})}return this};l.prototype.validateEvent=function(){var a=this.eventName;if(!a)return this;var b=h[a];if(!b){this.warnings.push({type:"NONSTANDARD_EVENT",eventName:a});return this}b=b.validationSchema;for(var c in b)if(j.call(b,c)){var d=b[c];if(d){if(d.isRequired&&!j.call(this.params,c))return this._error({type:"REQUIRED_PARAM_MISSING",param:c,eventName:a});if(d.type&&typeof d.type==="string"&&!this._validateParam(c,d.type))return this._error({type:"INVALID_PARAM",param:c,eventName:a})}}return this};l.prototype._validateParam=function(a,b){var f=this.params[a];switch(b){case d:b=(typeof f==="string"||typeof f==="number")&&c.test(""+f);b&&Number(f)<0&&this.warnings.push({type:"NEGATIVE_EVENT_PARAM",param:a,eventName:this.eventName?this.eventName:"null"});return b;case e:return typeof f==="string"&&!!g[f.toUpperCase()]}return!0};l.prototype._error=function(a){this.error=a;return this};function m(a){return new l(null,null,a).validateMetadata()}function n(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return new l(a,b).validateEvent()}function o(a,c){a=new l(a,c).validateEvent();a.error&&b(a.error);if(a.warnings)for(var c=0;c<a.warnings.length;c++)b(a.warnings[c]);return a}k.exports={validateMetadata:m,validateEvent:n,validateEventAndLog:o}})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsEvents",function(){return function(g,h,j,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsLogging");a=a.logError;var b=f.getFbeventsModules("SignalsFBEventsUtils"),c=b.keys,d=0;b=function(){function b(){var a=this;k(this,b);this._listeners={};this.on=function(){return a._on.apply(a,arguments)};this.once=function(){return a._once.apply(a,arguments)};this.trigger=function(b){for(var c=arguments.length,d=Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];return a._trigger.apply(a,[b].concat(d))};this.unsubscribe=function(){return a._unsubscribe.apply(a,arguments)}}i(b,[{key:"_on",value:function(a,b){var c=this,e=d++;this._listeners[a]||(this._listeners[a]={});this._listeners[a][e.toString()]=b;return function(){c.unsubscribe(a,e.toString())}}},{key:"_once",value:function(a,b){var c=arguments,d=this.on(a,function(){d();return b.apply(null,c)});return d}},{key:"_trigger",value:function(b){var d=this;for(var e=arguments.length,f=Array(e>1?e-1:0),g=1;g<e;g++)f[g-1]=arguments[g];return!this._listeners[b]?[]:c(this._listeners[b]).map(function(c){try{return!d._listeners[b][c]?[]:d._listeners[b][c].apply(null,f)}catch(b){a(b)}return null})}},{key:"_unsubscribe",value:function(a,b){var d=this._listeners[a];d&&d[b]&&(delete d[b],c(d).length===0&&delete this._listeners[a])}}]);return b}();b=new b();e.exports=b})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsFBQ",function(){return function(g,h,i,k){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsEventValidation"),b=f.getFbeventsModules("SignalsFBEventsFireLock"),c=f.getFbeventsModules("SignalsFBEventsLogging"),d=f.getFbeventsModules("SignalsFBEventsOptIn"),g=f.getFbeventsModules("SignalsFBEventsPluginPath"),i=f.getFbeventsModules("SignalsFBEventsQE"),k=f.getFbeventsModules("SignalsFBEventsUtils"),l=f.getFbeventsModules("SignalsPixelEndpoint"),m=k.each,n=k.keys,o=k.map,p=k.some,q=c.logError,r=c.logUserError,s={AutomaticMatching:!0,Dwell:!0,FPCookie:!0,Interaction:!0,InferredEvents:!0,Microdata:!0,ProxyEndpoint:!0,Sessions:!0,TimeSpent:!0,IWL:!0,IWLBootstrapper:!0,GA2FBQ:!0};k=["InferredEvents","Microdata"];var t={AutomaticSetup:k},u={AutomaticMatching:["inferredevents","identity"],Dwell:["dwell"],FPCookie:["fpcookie"],InferredEvents:["inferredevents","identity"],Interaction:["interaction","timespent"],Microdata:["microdata","identity"],ProxyEndpoint:["proxy"],Sessions:["sessions"],TimeSpent:["timespent"],IWL:["iwl"],IWLBootstrapper:["iwlbootstrapper"],GA2FBQ:["ga2fbq"]};function v(a){return!!(s[a]||t[a])}function w(a,b,c){var d=g.get(),e="https://connect.facebook.net";typeof d.baseURL==="string"&&d.baseURL!==null&&(e=d.baseURL);e=e+"/signals/config/"+a+"?v="+b+"&r="+c;a=h.createElement("script");a.src=e;a.async=!0;d.scriptElement&&d.scriptElement.parentNode?d.scriptElement.parentNode.insertBefore(a,d.scriptElement):h.body&&h.body.firstChild&&h.body.insertBefore(a,h.body.firstChild)}c={VALID_FEATURES:s,optIn:function(a,b){var c=this,d=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;if(typeof b!=="string"||!v(b))throw new Error('Invalid Argument: "'+b+'" is not a valid opt-in feature');v(b)&&(this.optIns.optIn(a,b,d),m([b].concat(j(t[b]||[])),function(a){u[a]&&m(u[a],function(a){return c.fbq.loadPlugin(a)})}));return this},optOut:function(a,b){this.optIns.optOut(a,b);return this},consent:function(a){a=="revoke"?this.locks.lockConsent():a=="grant"?this.locks.unlockConsent():r({type:"INVALID_CONSENT_ACTION",action:a});return this},setUserProperties:function(a,b){this.ensurePixel(a);var c=this.getDefaultSendData(a,"UserProperties");c.customData=b;c.customParameters={es:"userProperties"};this.trackSingleSystem("user_properties",a,"UserProperties",b)},trackSingle:function(b,c,d){a.validateEventAndLog(c,d);return this.trackSingleCustom(b,c,d)},trackSingleCustom:function(a,b,c){a=typeof a==="string"?a:a.id;a=this.getDefaultSendData(a,b);a.customData=c;this.fire(a,!1);return this},trackSingleSystem:function(a,b,c,d){b=typeof b==="string"?b:b.id;b=this.getDefaultSendData(b,c);b.customData=d;b.customParameters={es:a};this.fire(b,!1);return this},enqueue:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];this.queue.append(b);return this},_validateSend:function(b,c){if(!b.eventName||!b.eventName.length)throw new Error("Event name not specified");if(!b.pixelId||!b.pixelId.length)throw new Error("PixelId not specified");b.set&&m(o(n(b.set),function(b){return a.validateMetadata(b)}),function(a){if(a.error)throw new Error(a.error);a.warnings.length&&m(a.warnings,r)});if(c){c=a.validateEvent(b.eventName,b.customData||{});if(c.error)throw new Error(c.error);c.warnings&&c.warnings.length&&m(c.warnings,r)}return this},fire:function(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;this._validateSend(a,b);if(a.userData&&n(a.userData).length>0&&!this.fbq.loadPlugin("identity")){this.enqueue("fire",a);return this}var c=this.fbq.getEventCustomParameters(this.getPixel(a.pixelId)),d=a.customParameters;d&&m(n(d),function(a){if(c.containsKey(a))throw new Error("Custom parameter "+a+" already specified.");else c.append(a,d[a])});l.sendEvent(a.pixelId,a.eventName,a.customData,c);return this},callMethod:function(a){var b=a[0];a=Array.prototype.slice.call(a,1);if(typeof this[b]==="function")try{this[b].apply(this,a)}catch(a){q(a)}else r({type:"INVALID_FBQ_METHOD",method:b})},getDefaultSendData:function(a,b){var c=this.getPixel(a);a={pixelId:a,eventName:b};c&&(c.userData&&(a.userData=c.userData),c.agent?a.set={agent:c.agent}:this.fbq.agent&&(a.set={agent:this.fbq.agent}));return a},getOptedInPixels:function(a){var b=this;return this.optIns.listPixelIds(a).map(function(a){return b.pixelsByID[a]})},ensurePixel:function(a){if(!Object.prototype.hasOwnProperty.call(this.pixelsByID,a))throw new Error('Pixel "'+a+'" not found')},getPixel:function(a){this.ensurePixel(a);return this.pixelsByID[a]},loadConfig:function(a){if(this.fbq.disableConfigLoading||Object.prototype.hasOwnProperty.call(this.configsLoaded,a))return;this.locks.lockConfig(a);(!this.fbq.pendingConfigs||p(this.fbq.pendingConfigs,function(b){return b===a})==!1)&&w(a,this.VERSION,this.RELEASE_SEGMENT)},setExperiments:function(a){this._defaultExperiments=new i(a)},getExperiments:function(){return this._defaultExperiments},configLoaded:function(a){this.configsLoaded[a]=!0,this.locks.releaseConfig(a),this.fbq.trigger("configLoaded",a)}};function x(a,c){var e=this;this.VERSION=a.version;this.RELEASE_SEGMENT=a._releaseSegment;this.pixelsByID=c;this.fbq=a;this.optIns=new d(t);this.configsLoaded={};this._defaultExperiments=new i([]);this.locks=b.global;m(a.pendingConfigs||[],function(a){return e.locks.lockConfig(a)})}x.prototype=c;e.exports=x})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsFireLock",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsUtils"),b=a.each,c=a.keys;function d(){this._locks={},this._callbacks=[]}d.prototype={lock:function(a){this._locks[a]=!0},release:function(a){Object.prototype.hasOwnProperty.call(this._locks,a)&&(delete this._locks[a],c(this._locks).length===0&&b(this._callbacks,function(b){return b(a)}))},onUnlocked:function(a){this._callbacks.push(a)},isLocked:function(){return c(this._locks).length>0}};d.global=new d();d.global.lockPlugin=function(a){this.lock("plugin:"+a)};d.global.releasePlugin=function(a){this.release("plugin:"+a)};d.global.lockConfig=function(a){this.lock("config:"+a)};d.global.releaseConfig=function(a){this.release("config:"+a)};d.global.lockConsent=function(){this.lock("consent")};d.global.unlockConsent=function(){this.release("consent")};k.exports=d})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsLogging",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsUtils"),b=a.sendPOST,c=a.isInstanceOf,d=f.getFbeventsModules("SignalsParamList"),e=!1;function h(){e=!0}var i=!0;function j(){i=!1}a="console";var l="warn",m=g[a]&&g[a][l]?g[a][l].bind(g[a]):function(){},n=!1;function o(){n=!0}function p(a){if(n)return;m("[Facebook Pixel] - "+a)}var q="Facebook Pixel Error",r=g.postMessage?g.postMessage.bind(g):function(){},s={};function t(a){switch(a.type){case"FBQ_NO_METHOD_NAME":return"You must provide an argument to fbq().";case"INVALID_FBQ_METHOD":var b=a.method;return"\"fbq('"+b+"', ...);\" is not a valid fbq command.";case"INVALID_PIXEL_ID":b=a.pixelID;return"Invalid PixelID: "+b+".";case"DUPLICATE_PIXEL_ID":b=a.pixelID;return"Duplicate Pixel ID: "+b+".";case"SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":b=a.metadataValue;var c=a.pixelID;return"Trying to set argument "+b+" for uninitialized Pixel ID "+c+".";case"CONFLICTING_VERSIONS":return"Multiple pixels with conflicting versions were detected on this page.";case"MULTIPLE_PIXELS":return"Multiple pixels were detected on this page.";case"UNSUPPORTED_METADATA_ARGUMENT":b=a.metadata;return"Unsupported metadata argument: "+b+".";case"REQUIRED_PARAM_MISSING":c=a.param;b=a.eventName;return"Required parameter '"+c+"' is missing for event '"+b+"'.";case"INVALID_PARAM":c=a.param;b=a.eventName;return"Parameter '"+c+"' is invalid for event '"+b+"'.";case"NONSTANDARD_EVENT":c=a.eventName;return"You are sending a non-standard event '"+c+"'. The preferred way to send these events is using trackCustom. See 'https://www.facebookmarketingdevelopers.com/pixels/up#sec-custom' for more information.";case"NEGATIVE_EVENT_PARAM":b=a.param;c=a.eventName;return"Parameter '"+b+"' is negative for event '"+c+"'.";case"PII_INVALID_TYPE":b=a.key_type;c=a.key_val;return"An invalid "+b+" was specified for '"+c+"'. This data will not be sent with any events for this Pixel.";case"INVALID_CONSENT_ACTION":b=a.action;return"\"fbq('"+b+"', ...);\" is not a valid fbq('consent', ...) action. Valid actions are 'await' and 'grant'.";default:w(new Error("INVALID_USER_ERROR - "+a.type+" - "+JSON.stringify(a)));return"Invalid User Error."}}function u(a,e){try{var f=Math.random(),h=g.fbq&&g.fbq._releaseSegment?g.fbq._releaseSegment:"unknown";if(i&&f<.01||h==="canary"){f=new d(null);f.append("p","pixel");f.append("v",g.fbq&&g.fbq.version?g.fbq.version:"unknown");f.append("e",a.toString());c(a,Error)&&(f.append("f",a.fileName),f.append("s",a.stackTrace||a.stack));f.append("ue",e?"1":"0");f.append("rs",h);b(f,"https://connect.facebook.net/log/error")}}catch(a){}}function v(a){var b=JSON.stringify(a);if(!Object.prototype.hasOwnProperty.call(s,b))s[b]=!0;else return;b=t(a);p(b);r({action:"FB_LOG",logType:q,logMessage:b},"*");u(new Error(b),!0)}function w(a){u(a,!1),e&&p(a.toString())}l={logError:w,logUserError:v,enableVerboseDebugLogging:h,disableAllLogging:o,disableSampling:j};k.exports=l})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsOptIn",function(){return function(g,h,i,k){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsUtils"),b=a.each,c=a.filter,d=a.keys,g=a.some;function h(a){b(d(a),function(b){if(g(a[b],function(b){return Object.prototype.hasOwnProperty.call(a,b)}))throw new Error("Circular subOpts are not allowed. "+b+" depends on another subOpt")})}function i(a){this._opts={},this._subOpts=a||{},h(this._subOpts)}i.prototype._getOpts=function(a){return[].concat(j(Object.prototype.hasOwnProperty.call(this._subOpts,a)?this._subOpts[a]:[]),[a])};i.prototype._setOpt=function(a,b,c){this._opts[b]||(this._opts[b]={}),this._opts[b][a]=c};i.prototype.optIn=function(a,c){var d=this,e=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;b(this._getOpts(c),function(b){var f=e==!0&&d.isOptedOut(a,c);f||d._setOpt(a,b,!0)});return this};i.prototype.optOut=function(a,c){var d=this;b(this._getOpts(c),function(b){return d._setOpt(a,b,!1)});return this};i.prototype.isOptedIn=function(a,b){return this._opts[b]&&this._opts[b][a]===!0};i.prototype.isOptedOut=function(a,b){return this._opts[b]&&this._opts[b][a]===!1};i.prototype.listPixelIds=function(a){var b=this;return this._opts[a]?c(d(this._opts[a]),function(c){return b._opts[a][c]}):[]};e.exports=i})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsPluginPath",function(){return function(f,g,h,i){var j={exports:{}};j.exports;(function(){"use strict";var a=/([/]en_US)?[/](fbevents|signals)([.]js|[/])/;function b(){var b=null,c=null,d=g.getElementsByTagName("script");for(var e=0;e<d.length&&!b;e++)if(d[e]&&d[e].src){var f=d[e].src.split(a);f.length>1&&(b=f[0],c=d[e])}return{baseURL:b,scriptElement:c}}var c=null;function d(){c||(c=b());return c}j.exports={get:d}})();return j.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsProxyState",function(){return function(f,g,h,i){var j={exports:{}};j.exports;(function(){"use strict";var a=!1;j.exports={getShouldProxy:function(){return a},setShouldProxy:function(b){a=b}}})();return j.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsQE",function(){return function(f,g,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=function(){return Math.random()};function b(c){var b=a();for(var d=0;d<c.length;d++){var e=c[d],f=e.passRate,g=h(e.range,2),i=g[0];g=g[1];if(f<0||f>1)throw new Error("passRate should be between 0 and 1 in "+e.name);if(b>=i&&b<g){i=a()<f;return{name:e.name,isInExperimentGroup:i,code:e.code+(i?"1":"0")}}}return null}function c(a){this._groups=a,this._result=null,this._hasRolled=!1}c.prototype={get:function(a){if(!this._hasRolled){var c=b(this._groups);c!=null&&(this._result=c);this._hasRolled=!0}if(!a)return this._result;return this._result!=null&&this._result.name===a?this._result:null}};k.exports=c})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsTelemetry",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsLogging"),b=f.getFbeventsModules("SignalsFBEventsUtils"),c=b.sendPOST,d=f.getFbeventsModules("SignalsParamList");b=.01;var e=Math.random(),h=g.fbq&&g.fbq._releaseSegment?g.fbq._releaseSegment:"unknown",i=e<b||h==="canary";function j(event){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;if(!i)return;try{var e=new d(null);e.append("v",g.fbq&&g.fbq.version?g.fbq.version:"unknown");e.append("rs",h);e.append("e",event);e.append("p",b);c(e,"https://connect.facebook.net/log/fbevents_telemetry/")}catch(b){a.logError(b)}}function l(){j("COALESCE_INIT")}function m(a){j("COALESCE_COMPLETE",a)}k.exports={logStartBatch:l,logEndBatch:m}})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsUtils",function(){return function(h,i,j,k){var e={exports:{}};e.exports;(function(){"use strict";f.getFbeventsModules("SignalsParamList");var a=f.getFbeventsModules("SignalsFBEventsProxyState"),b=Object.prototype.toString,c=!("addEventListener"in i);function d(a,b){return typeof b==="function"&&a instanceof b}function j(a){return Array.isArray?Array.isArray(a):b.call(a)==="[object Array]"}function k(a){return typeof a==="number"||typeof a==="string"&&/^\d+$/.test(a)}var l=Number.isInteger||function(a){return typeof a==="number"&&isFinite(a)&&Math.floor(a)===a};function m(a,b,d){b=c?"on"+b:b;var e=c?a.attachEvent:a.addEventListener,f=c?a.detachEvent:a.removeEventListener,g=function c(){f&&f.call(a,b,c,!1),d()};e&&e.call(a,b,g,!1)}var n=Object.prototype.hasOwnProperty,o=!{toString:null}.propertyIsEnumerable("toString"),p=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],q=p.length;function r(a){if(Object.keys)return Object.keys(a);if((typeof a==="undefined"?"undefined":g(a))!=="object"&&(typeof a!=="function"||a===null))throw new TypeError("Object.keys called on non-object");var b=[];for(var c in a)n.call(a,c)&&b.push(c);if(o)for(var d=0;d<q;d++)n.call(a,p[d])&&b.push(p[d]);return b}function s(a,b){if(Array.prototype.map)return Array.prototype.map.call(a,b);var c=void 0,d=void 0;if(a==null)throw new TypeError(" array is null or not defined");a=Object(a);var e=a.length>>>0;if(typeof b!=="function")throw new TypeError(b+" is not a function");c=new Array(e);d=0;while(d<e){var f;d in a&&(f=a[d],f=b.call(null,f,d,a),c[d]=f);d++}return c}function t(a){if(this==null)throw new TypeError("Array.prototype.some called on null or undefined");if(typeof a!=="function")throw new TypeError();var b=Object(this),c=b.length>>>0,d=arguments.length>=2?arguments[1]:void 0;for(var e=0;e<c;e++)if(e in b&&a.call(d,b[e],e,b))return!0;return!1}function u(a){return r(a).length===0}function v(a){if(this===void 0||this===null)throw new TypeError();var b=Object(this),c=b.length>>>0;if(typeof a!=="function")throw new TypeError();var d=[],e=arguments.length>=2?arguments[1]:void 0;for(var f=0;f<c;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d}function w(a){this.items=a==null?[]:a}w.prototype.has=function(a){return t.call(this.items,function(b){return b===a})};w.prototype.add=function(a){this.items.push(a)};function x(b,c){return c&&a.getShouldProxy()?c:b}function y(b,c,d){var e=b.toQueryString();e=x(c,d)+"?"+e;if(e.length<2048){var f=new Image();if(d){var g=a.getShouldProxy();f.onerror=function(){a.setShouldProxy(!0),g||y(b,c,d)}}f.src=e;return!0}return!1}function z(b,c,d){var e="fb"+Math.random().toString().replace(".",""),f=i.createElement("form");f.method="post";f.action=x(c,d);f.target=e;f.acceptCharset="utf-8";f.style.display="none";var g=!!(h.attachEvent&&!h.addEventListener);g=g?'<iframe name="'+e+'">':"iframe";var j=i.createElement(g);j.src="about:blank";j.id=e;j.name=e;f.appendChild(j);m(j,"load",function(){b.each(function(a,b){var c=i.createElement("input");c.name=decodeURIComponent(a);c.value=b;f.appendChild(c)}),m(j,"load",function(){f.parentNode&&f.parentNode.removeChild(f)}),f.submit()});if(d){var k=a.getShouldProxy();j.onerror=function(){a.setShouldProxy(!0),k||z(b,c,d)}}i.body.appendChild(f);return!0}function A(b,c,d){if(h.navigator&&h.navigator.sendBeacon){var e=h.navigator.sendBeacon(x(c,d),b.toFormData());if(d&&!e){e=a.getShouldProxy();a.setShouldProxy(!0);e||A(b,c,d)}return!0}return!1}function B(a){return a}j={isArray:j,isEmptyObject:u,isNumber:k,isInteger:l,isInstanceOf:d,keys:r,listenOnce:m,map:s,sendGET:y,sendPOST:z,sendBeacon:A,FBSet:w,each:function(a,b){s.call(this,a,b)},some:function(a,b){return t.call(a,b)},filter:function(a,b){return v.call(a,b)},castTo:B};e.exports=j})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsParamList",function(){return function(f,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a="deep",b="shallow";function c(a){if(typeof JSON==="undefined"||JSON===null||!JSON.stringify)return Object.prototype.toString.call(a);else return JSON.stringify(a)}function d(a){if(a===null||a===undefined)return!0;a=typeof a==="undefined"?"undefined":g(a);return a==="number"||a==="boolean"||a==="string"}function e(a){this._params=[],this._piiTranslator=a}e.prototype.containsKey=function(a){for(var b=0;b<this._params.length;b++)if(this._params[b].name===a)return!0;return!1};e.prototype.get=function(a){a=a;for(var b=0;b<this._params.length;b++)if(this._params[b].name===a)return this._params[b].value;return null};e.prototype.getAllParams=function(){return this._params};e.prototype.addRange=function(a){var b=this;a.each(function(a,c){return b._append(a,c)})};e.prototype.append=function(b,c,d){this._append(encodeURIComponent(b),c,a,d);return this};e.prototype.appendHash=function(b,c){for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&this._append(encodeURIComponent(d),b[d],a,c);return this};e.fromHash=function(a,b){return new e(b).appendHash(a)};e.prototype._append=function(b,e,f,g){d(e)?this._appendPrimitive(b,e,g):f===a?this._appendObject(b,e,g):this._appendPrimitive(b,c(e),g)};e.prototype._translateValue=function(a,b,c){if(typeof b==="boolean")return b?"true":"false";if(!c)return""+b;if(!this._piiTranslator)throw new Error();return this._piiTranslator(a,""+b)};e.prototype._appendPrimitive=function(a,b,c){if(b!=null){b=this._translateValue(a,b,c);b!=null&&this._params.push({name:a,value:b})}};e.prototype._appendObject=function(a,c,d){var e=null;for(var f in c)if(Object.prototype.hasOwnProperty.call(c,f)){var g=a+"["+encodeURIComponent(f)+"]";try{this._append(g,c[f],b,d)}catch(a){e==null&&(e=a)}}if(e!=null)throw e};e.prototype.each=function(a){for(var b=0;b<this._params.length;b++){var c=this._params[b],d=c.name;c=c.value;a(d,c)}};e.prototype.toQueryString=function(){var a=[];this.each(function(b,c){a.push(b+"="+encodeURIComponent(c))});return a.join("&")};e.prototype.toFormData=function(){var a=new FormData();this.each(function(b,c){a.append(b,c)});return a};k.exports=e})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsPixelEndpoint",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsEvents"),b=f.getFbeventsModules("SignalsFBEventsTelemetry"),c=f.getFbeventsModules("SignalsFBEventsUtils"),d=c.sendGET,e=c.sendPOST,j=c.sendBeacon,l=f.getFbeventsModules("SignalsParamList"),m=a.trigger,n={ENDPOINT:"https://www.facebook.com/tr/",PROXY_ENDPOINT:null},o=g.top!==g,p=!1;c=function(a){p=a};function q(a,b,c,d){a.append("id",b);a.append("ev",c);a.append("dl",i.href);a.append("rl",h.referrer);a.append("if",o);a.append("ts",new Date().valueOf());a.append("cd",d);a.append("sw",g.screen.width);a.append("sh",g.screen.height);return a}var r=0;function s(){var a=r;r=0;b.logEndBatch(a)}function t(a,c,f,g,h){h=new l(h);q(h,a,c,f);g&&h.addRange(g);r===0&&(b.logStartBatch(),setTimeout(s,0));r++;a=g&&g.containsKey("es")&&g.get("es")=="timespent";c=[h,n.ENDPOINT,n.PROXY_ENDPOINT];if((p||a)&&j.apply(undefined,c)){m("fired","BEACON",h,f);return}if(d.apply(undefined,c)){m("fired","GET",h,f);return}if(e.apply(undefined,c)){m("fired","POST",h,f);return}throw new Error("No working send method found for this fire.")}function u(a,b,c,d,e){if(g.navigator&&g.navigator.sendBeacon){e=new l(e);q(e,a,b,c);d&&e.addRange(d);j(e,n.ENDPOINT)}}k.exports={CONFIG:n,sendEvent:t,sendBeaconPII:u,setUseBeacon:c}})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("signalsFBEventsInjectMethod",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("signalsFBEventsMakeSafe");function b(b,c,d){var e=b[c],f=a(d);b[c]=function(){var a=e.apply(this,arguments);f.apply(this,arguments);return a}}k.exports=b})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("signalsFBEventsMakeSafe",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsLogging");a=a.logError;function b(b){return typeof b!=="function"?b:function(){try{return b.apply(this,arguments)}catch(b){a(b)}return undefined}}k.exports=b})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEvents",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=g.fbq;a.execStart=g.performance&&typeof g.performance.now==="function"?g.performance.now():null;var b=a.getFbeventsModules("SignalsParamList"),c=a.getFbeventsModules("SignalsPixelEndpoint"),d=a.getFbeventsModules("SignalsEvents"),e=a.getFbeventsModules("SignalsFBEventsUtils"),l=a.getFbeventsModules("SignalsFBEventsLogging"),m=a.getFbeventsModules("SignalsEventValidation"),n=a.getFbeventsModules("SignalsFBEventsFBQ"),o=a.getFbeventsModules("SignalsFBEventsPluginPath"),p=a.getFbeventsModules("SignalsFBEventsFireLock"),q=a.getFbeventsModules("signalsFBEventsInjectMethod"),r=a.getFbeventsModules("signalsFBEventsMakeSafe"),s=d.on,t=d.once,u=d.trigger,v=e.each;d=e.FBSet;var w=e.isArray,x=e.isInteger,y=e.isEmptyObject,z=e.isNumber,A=e.keys,B=l.logError,C=l.logUserError,D=p.global;function aa(b){return a.getFbeventsModules(b)}function ba(b){return a.fbIsModuleLoaded(b)}var E={},F=-1,ca=Array.prototype.slice,G=Object.prototype.hasOwnProperty,H=i.href,I=!1,J=!1,K=[],L={},M;h.referrer;var N={PageView:new d(),PixelInitialized:new d()},O=new n(a,L);function da(a){for(var b in a)G.call(a,b)&&(this[b]=a[b]);return this}function P(b){try{var c=ca.call(arguments);if(D.isLocked()&&c[0]!=="consent"){a.queue.push(arguments);return}var d=c.length===1&&w(c[0]);d&&(c=c[0]);typeof c[0]!=="string"&&C({type:"FBQ_NO_METHOD_NAME"});if(b.slice(0,6)==="report"){var e=b.slice(6);e==="CustomEvent"?(e=(c[1]||{}).event||e,c=["trackCustom",e].concat(c.slice(1))):c=["track",e].concat(c.slice(1))}b=c.shift();switch(b){case"addPixelId":I=!0;R.apply(this,c);break;case"init":J=!0;R.apply(this,c);break;case"set":Q.apply(this,c);break;case"track":if(z(c[0])){ha.apply(this,c);break}if(d){T.apply(this,c);break}ga.apply(this,c);break;case"trackCustom":T.apply(this,c);break;case"send":U.apply(this,c);break;case"on":s.apply(null,c);break;case"loadPlugin":Y(c[0]);break;default:O.callMethod(arguments);break}}catch(a){B(a)}}function Q(b){for(var d=arguments.length,e=Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];switch(b){case"endpoint":var g=e[0];if(typeof g!=="string")throw new Error("endpoint value must be a string");c.CONFIG.ENDPOINT=g;break;case"releaseSegment":var h=e[0];if(typeof h!=="string")throw new Error("releaseSegment value must be a string");a._releaseSegment=h;break;case"proxy":var i=e[0];if(c.CONFIG.PROXY_ENDPOINT)throw new Error("proxy has already been set");if(typeof i!=="string")throw new Error("endpoint value must be a string");c.CONFIG.PROXY_ENDPOINT=i;break;case"autoConfig":var j=e[0],k=e[1],l=j===!0||j==="true"?"optIn":"optOut";if(typeof k!=="string")throw new Error("Invalid pixelID supplied to set autoConfig.");O.callMethod([l,k,"AutomaticSetup"]);break;case"experiments":var m=e[0];O.setExperiments(m);break;default:var n=e[0],o=e[1];if(typeof b!=="string")throw new Error("The metadata setting provided in the 'set' call is invalid.");if(typeof n!=="string")throw new Error("The metadata value must be a string.");if(typeof o!=="string")throw new Error("Invalid pixelID supplied to set call.");fa(b,n,o);break}}a._initHandlers=[];a._initsDone={};var ea=function(a){return x(a)&&a>=0&&a<=Number.MAX_SAFE_INTEGER};function R(a,b,c){F=F===-1?Date.now():F;if(typeof a==="number")ea(a)||C({type:"INVALID_PIXEL_ID",pixelID:a.toString()}),a=a.toString();else if(typeof a==="string"){var d=/^[1-9][0-9]{0,25}$/;d.test(a)||C({type:"INVALID_PIXEL_ID",pixelID:a})}else if(a===undefined)C({type:"INVALID_PIXEL_ID",pixelID:"undefined"});else if(a===null)C({type:"INVALID_PIXEL_ID",pixelID:"null"});else{typeof a.toString==="function"?C({type:"INVALID_PIXEL_ID",pixelID:a.toString()}):C({type:"INVALID_PIXEL_ID",pixelID:"[no toString]"});return}if(G.call(L,a)){b&&y(L[a].userData)?(L[a].userData=b,Y("identity")):C({type:"DUPLICATE_PIXEL_ID",pixelID:a});return}d={agent:c?c.agent:null,id:a,userData:b||{},eventCount:0};K.push(d);L[a]=d;b!=null&&Y("identity");S();O.loadConfig(a)}function S(){for(var b=0;b<a._initHandlers.length;b++){var c=a._initHandlers[b];a._initsDone[b]||(a._initsDone[b]={});for(var d=0;d<K.length;d++){var e=K[d];a._initsDone[b][e.id]||(a._initsDone[b][e.id]=!0,c(e))}}}function fa(a,b,c){var d=m.validateMetadata(a);d.error&&B(d.error);if(d.warnings)for(var e=0;e<d.warnings.length;e++)C(d.warnings[e]);if(G.call(L,c)){for(var e=0,d=K.length;e<d;e++)if(K[e].id===c){K[e][a]=b;break}}else C({type:"SET_METADATA_ON_UNINITIALIZED_PIXEL_ID",metadataValue:b,pixelID:c})}function ga(a,b){b=b||{},m.validateEventAndLog(a,b),a==="CustomEvent"&&typeof b.event==="string"&&(a=b.event),T.call(this,a,b)}function T(a,b){for(var c=0,d=K.length;c<d;c++){var e=K[c];if(!(a==="PageView"&&this.allowDuplicatePageViews)&&Object.prototype.hasOwnProperty.call(N,a)&&N[a].has(e.id))continue;W(e,a,b);Object.prototype.hasOwnProperty.call(N,a)&&N[a].add(e.id)}}function ha(a,b){W(null,a,b)}function U(a,b){for(var c=0,d=K.length;c<d;c++)W(K[c],a,b)}function V(c){var d=new b(a.piiTranslator);try{d.append("ud",c&&c.userData||{},!0)}catch(a){u("pii_invalidated",c)}d.append("v",a.version);a._releaseSegment&&d.append("r",a._releaseSegment);d.append("a",c&&c.agent?c.agent:a.agent);c&&(d.append("ec",c.eventCount),c.eventCount++);c=u("getCustomParameters",c);v(c,function(a){return v(A(a),function(b){if(d.containsKey(b))throw new Error("Custom parameter "+b+" has already been specified.");else d.append(b,a[b])})});d.append("it",F);return d}function W(a,b,d){c.sendEvent(a?a.id:null,b,d,V(a))}function X(){while(a.queue.length&&!D.isLocked()){var b=a.queue.shift();P.apply(a,b)}}function ia(a){return"fbevents.plugins."+a}function Y(b){if(/^[a-zA-Z]\w+$/.test(b)===!1)throw new Error("Invalid plugin name: "+b);var c=ia(b);if(E[c])return!0;if(ba(c)){Z(c,aa(c));return!0}var d=o.get();if(d.baseURL&&d.scriptElement){b=d.baseURL+"/signals/plugins/"+b+".js?v="+a.version;if(!E[c]){D.lockPlugin(c);c=h.createElement("script");c.src=b;c.async=!0;d.scriptElement&&d.scriptElement.parentNode&&d.scriptElement.parentNode.insertBefore(c,d.scriptElement)}}return!1}function Z(b,c){if(Object.prototype.hasOwnProperty.call(E,b))return;G.call(c,"__fbEventsPlugin")&&c.__fbEventsPlugin===1&&(E[b]=c,E[b].plugin(a,O),u("pluginLoaded",b));D.releasePlugin(b)}D.onUnlocked(function(){X()});a.pixelId&&(I=!0,R(a.pixelId));(I&&J||g.fbq!==g._fbq)&&C({type:"CONFLICTING_VERSIONS"});K.length>1&&C({type:"MULTIPLE_PIXELS"});function ja(){if(a.disablePushState===!0)return;if(!j.pushState||!j.replaceState)return;var b=r(function(){M=H;H=i.href;if(H===M)return;var a=new da({allowDuplicatePageViews:!0});P.call(a,"trackCustom","PageView")});q(j,"pushState",b);q(j,"replaceState",b);g.addEventListener("popstate",b,!1)}t("fired",function(){return ja()});function ka(b){a._initHandlers.push(b),S()}function $(){return{pixelInitializationTime:F,pixels:K}}function la(a){a.instance=O,a.callMethod=P,a.loadPlugin=Y,a.registerPlugin=Z,a._initHandlers=[],a._initsDone={},a.on=s,a.once=t,a.send=U,a.trigger=u,a.getEventCustomParameters=V,a.addInitHandler=ka,a.getState=$,a.init=R,a.set=Q}la(g.fbq);X();k.exports={addInitHandler:function(b){a._initHandlers.push(b),S()},doExport:la,getState:$,getEventCustomParameters:V,sendEvent:W,loadPlugin:Y};u("execEnd");u("initialized",a)})();return k.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents");f.registerPlugin&&f.registerPlugin("fbevents",e.exports);f.ensureModuleRegistered("fbevents",function(){return e.exports})})()})(window,document,location,history);
fbq.registerPlugin("global_config", {__fbEventsPlugin: 1, plugin: function(fbq, instance) { fbq.loadPlugin("opttracking");
fbq.set("experiments", {"0":{"name":"beacon","range":[0,0.02],"code":"b","passRate":0.5},"1":{"name":"logDataLayer","range":[0.02,0.12],"code":"d","passRate":0.5}});instance.configLoaded("global_config"); }});