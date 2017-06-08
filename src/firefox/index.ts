// import '../common/setIntercepts';

console.log('meme loaded');

chrome.webRequest.onBeforeSendHeaders.addListener(
  (requestDetails) => {
    console.log("Redirecting: " + requestDetails.url);
    return {
      redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
    };
  },
  {urls:["*://*.destiny.gg/*"], types:["image"]},
  ["blocking"]
);
