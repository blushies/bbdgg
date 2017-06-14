# BBDGG

An unofficial browser extension to add unofficial functionality to the destiny.gg chat.


### How it works

The extension redirects requests for the javascript that controls the chat to a [forked version](https://github.com/blushies/website) that implements the aforementioned unofficial functionality.

### How to build

1. Clone this repository
1. Initialize the destiny.gg website submodule in `./dgg`
1. `npm run build`

The build script should bundle all extension code, build the forked dgg chat code, and assemble the files into a folder to be loaded into your browser. Firefox and Chrome extensions should be built in `lib/firefox` and `lib/chrome` respectively. Load these unpacked addons into your browser.

[Chrome instructions for loading an unpacked extension](https://developer.chrome.com/extensions/getstarted#unpacked)

[Firefox instructions for loading an unpacked extension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)


Note that Firefox is currently not working.
