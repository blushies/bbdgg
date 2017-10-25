
const redirects = [
  {
    from: '*://*.destiny.gg/*/chat.css',
    to: './dgg/chat.css',
  },
  {
    from: '*://*.destiny.gg/*/chat.js',
    to: './dgg/chat.js',
  },
];

redirects.forEach(({ from, to }) => {
  chrome.webRequest.onBeforeRequest.addListener(details => {
    const redirect = {
      redirectUrl: chrome.extension.getURL(to),
    };
    console.log(`redirecting from "${from}" to "${to}"`, redirect);
    return redirect;
  }, {
    types: ['script', 'stylesheet'],
    urls: [from],
  }, ['blocking']);
});

function jstatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function jjson(response) {
  return response.json()
}


//Event listener for communication between chat.js and background page.
//this functions much like the old xhr and is used to avoid Content Security Policy issues.
//https://developer.chrome.com/extensions/runtime#event-onMessage
// **You are welcome to add more if statements below for the listener to watch**

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (request.backgroundPageRequest == "bdgg_overrustle_get_strims"){
      console.log("BBDGG Strims Request. Sending API request");
      //Fetch
      fetch('https://api.overrustle.com/api')
      .then(jstatus)
      .then(jjson)
      .then(function(data) {
        console.log('Request succeeded with JSON response', data);
        sendResponse(data);
      }).catch(function(error) {
        console.log('Request failed', error);
        sendResponse({error: true});
      });
    }
    else{
      console.log("Error: Unknown Message");
      sendResponse({error: true});
    }
    return true;
  }
);