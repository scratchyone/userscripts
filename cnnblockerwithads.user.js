// ==UserScript==
// @name         CNN Blocker
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Blocks useless content on CNN
// @author       Scratchyone
// @updateURL    https://www.scratchyone.com/userscripts/cnnblockerwithads.user.js
// @downloadURL  https://www.scratchyone.com/userscripts/cnnblockerwithads.user.js
// @match        https://www.cnn.com/
// @include      https://www.cnn.com/
// @grant        none
// ==/UserScript==

(function() {
  window.setInterval(function() {
    [].forEach.call(document.getElementsByTagName("ul"), function(item) {
      if (item.innerHTML.includes("Paid Partner")) {
        item.innerHTML = "";
      }
    });
    [].forEach.call(document.getElementsByTagName("h2"), function(item) {
      if (item.innerHTML.includes("Paid Partner")) {
        item.parentNode.parentNode.innerHTML = "";
      }
    });
    [].forEach.call(
      document.getElementsByClassName("ob-widget-header"),
      function(item) {
        if (item.innerHTML.includes("Paid Content")) {
          item.parentNode.innerHTML = "";
        }
      }
    );
    /*
    [].forEach.call(document.getElementsByClassName("jar"), function(item) {
      item.innerHTML = "";
    });
    [].forEach.call(document.getElementsByClassName("ad"), function(item) {
      item.innerHTML = "";
    });
    */
    console.log("Deleting Sponsored Content...");
  }, 1000);
})();
