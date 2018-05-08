_satellite.pushAsyncScript(function(event, target, $variables){
  if (typeof trulia !== "undefined") {
    window.bk_async = function() {
        if (trulia.page_name === "srp") {
            var bk_keys = ["bd","city","cnty","dma","hood","lot","pid","prange","price","proptp","sqft","sqftrange","state","user","yrblt","zip","oh","park","listtp","sid","adunitID3"];
            if ( typeof(trulia.srp) !== 'undefined'
                && typeof(trulia.srp.ads) !== 'undefined'
                && typeof(trulia.srp.ads.list) !== 'undefined'
                && typeof(trulia.srp.ads.list.keyVals) !== 'undefined' ) {
                var bk_values = trulia.srp.ads.list.keyVals;
            }
        } else if (typeof trulia.analytics !== "undefined"
                 && typeof trulia.analytics.data !== "undefined"
                 && typeof trulia.analytics.data.pageType !== "undefined"
                 && trulia.analytics.data.pageType === "pdp") {
            if (typeof(window.propertyWeb) !== 'undefined'
                && typeof(window.propertyWeb.INITIAL_ACTIONS) !== 'undefined' ) {
                  for (i=0; i < window.propertyWeb.INITIAL_ACTIONS.length; i++) {
                    if (window.propertyWeb.INITIAL_ACTIONS[i].data
                        && window.propertyWeb.INITIAL_ACTIONS[i].data.ads
                        && window.propertyWeb.INITIAL_ACTIONS[i].data.ads.adTargeting) {
                          var bk_keys = ["bd","city","cnty","dma","hood","lot","pid","prange","price","proptp","sqft","sqftrange","state","user","yrblt","zip","oh","park","listtp","sid"];
                          var bk_values = window.propertyWeb.INITIAL_ACTIONS[i].data.ads.adTargeting;
                    }
                  }
                }
            else if (typeof(trulia.ads_data) !== 'undefined'
                    && typeof(trulia.ads_data.page) !== 'undefined'
                    && typeof(trulia.ads_data.page.keyvals) !== 'undefined' ) {
                      var bk_full_key_values = trulia.ads_data.page.keyvals;
                    }
                  }

        if( typeof bk_keys !== 'undefined'
            && typeof bk_values !== 'undefined' ) {
            _satellite.notify('BlueKai tag', 4);
            for (i in bk_values) {
                if(bk_keys.indexOf(i) !== -1) {
                    bk_addPageCtx(i, bk_values[i])
                }
            }
            bk_addPageCtx("maloneid",trulia.analytics.data.maloneID)
            bk_addPageCtx("listingid",trulia.analytics.data.listingID)
        } else if( typeof bk_full_key_values !== 'undefined'){
          _satellite.notify('BlueKai Full tag', 4);
          for(i=0; i < bk_full_key_values.length; i++) {
            bk_addPageCtx(bk_full_key_values[i])
              }
            }
        bk_allow_multiple_calls = true;
        bk_use_multiple_iframes = true;
        BKTAG.doTag(26343, 4);
    };

    (function() {
      var scripts=document.getElementsByTagName('script')[0];
      var s=document.createElement('script');
      s.async = true;
      s.src = '//tags.bkrtx.com/js/bk-coretag.js';
      scripts.parentNode.insertBefore(s, scripts);
    }());
}

});
