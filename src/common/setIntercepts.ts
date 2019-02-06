
const redirects = [
  {
    from: 'https://cdn.destiny.gg/chat.*.js',
    to: './dgg/chat.js',
  },
  {
    from: '*://*.destiny.gg/*/bbdgg.css',
    to: './dgg/emoticons/bbdgg.css',
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
