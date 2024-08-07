chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({tasks: []}, function() {
      console.log("The task list is initialized.");
    });
  });
  