// import '../common/setIntercepts';

console.log('meme loaded');
declare var browser: typeof chrome;

// chrome.webRequest.onBeforeSendHeaders.addListener(
//   (requestDetails) => {
//     console.log("Redirecting: " + requestDetails.url);
//     return {
//       redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
//     };
//   },
//   {urls:["*://*.destiny.gg/*"], types:["image"]},
//   ["blocking"]
// );

// match pattern for the URLs to redirect
var pattern = "*://*.destiny.gg/*";

// redirect function
// returns an object with a property `redirectURL`
// set to the new URL
function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
  };
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["image"]},
  ["blocking"]
);
