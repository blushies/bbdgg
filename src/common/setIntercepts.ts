
const redirects = [
  {
    from: '*://*.destiny.gg/*/chat.css',
    to: './dgg/chat.css',
  },
  {
    from: '*://*.destiny.gg/*/chat.js',
    to: './dgg/chat.js',
  },
  {
    from: '*://*.destiny.gg/*/common.js',
    to: './dgg/common.js',
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
