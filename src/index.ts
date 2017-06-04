
const redirects = [
  {
    from: '*://*.destiny.gg/*/chat.css',
    to: './dgg/static/chat.css',
  },
  {
    from: '*://*.destiny.gg/*/chat.js',
    to: './dgg/static/chat.js',
  },
  {
    from: '*://*.destiny.gg/*/common.js',
    to: './dgg/static/common.js',
  },
];

redirects.forEach(({ from, to }) => {
  chrome.webRequest.onBeforeRequest.addListener(details => {
    console.log(details);
    console.log(`redirecting from "${from}" to "${to}"`);
    return {
      redirectUrl: chrome.extension.getURL(to),
    };
  }, {
    types: ['script', 'stylesheet'],
    urls: [from],
  }, ['blocking']);
});
