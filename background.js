chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
//  chrome.browserAction.disable();
  chrome.tabs.executeScript(null, {file: "script.js"});
});
