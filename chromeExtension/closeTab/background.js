chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.includes("youtube")) {
      chrome.tabs.remove(tabId);
    }
  });