// adblock.js

(function () {
  var adBlockDetected = false;

  // Check if ad is blocked
  var testAd = document.createElement('div');
  testAd.innerHTML = '&nbsp;';
  testAd.className = 'adsbox';
  document.body.appendChild(testAd);

  // Check if ad is displayed
  window.setTimeout(function () {
    if (testAd.offsetHeight === 0) {
      adBlockDetected = true;
    }
    document.body.removeChild(testAd);

    // Trigger event
    if (adBlockDetected) {
      var event = new CustomEvent('adblockdetected');
      document.dispatchEvent(event);
    }
  }, 100);

  // Expose API
  window.adblock = {
    onDetected: function (callback) {
      document.addEventListener('adblockdetected', callback);
    }
  };
})();
