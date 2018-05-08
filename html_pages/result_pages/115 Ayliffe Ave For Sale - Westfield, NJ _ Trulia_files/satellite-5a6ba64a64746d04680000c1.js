_satellite.pushAsyncScript(function(event, target, $variables){
  if (typeof(window._ENVIRONMENT) !== "undefined" && typeof(trulia.track) !== "undefined") {
  var wrapped_trulia_track = trulia.track;
  trulia.track = function(trackData) {
    if(typeof(trackData.events) !== "undefined" && typeof(trackData.eVars) !== "undefined"){
      if(typeof(trackData.eVars["31"]) !== "undefined" && typeof(trackData.events[0]) !== "undefined"){
        if((trackData.eVars["31"].indexOf("Property") !== -1 || trackData.eVars["31"].indexOf("bal") !== -1) && trackData.events[0] === 44){
          window.callDtmDirectRule('leadForSale');
        }
      }
    }
    return wrapped_trulia_track(trackData);
  }
}
});
