# BBDGG

An unofficial browser extension to add unofficial functionality to the destiny.gg chat.

### Requirements

1. Node >= 7.7.1
1. everything [here](https://github.com/destinygg/website#requirements)

### How it works

The extension redirects requests for the javascript that controls the chat to a [forked version](https://github.com/downthecrop/chat-gui) that implements the aforementioned unofficial functionality.

### How to build

1. Clone this repository
  1. `git clone https://github.com/downthecrop/bbdgg`
1. Initialize the destiny.gg website submodule in `./dgg`
  1. `git submodule init`
  1. `git submodule update`
  1. `cd dgg`
  1. `npm i`
  1. `cd ..`
1. Build
  1. `npm i`
  1. `npm run build`
1. Add to chrome by going to `chrome://extensions/` and checking the "Developer mode" checkbox, then loading the `./lib/chrome` folder as an unpacked extension.

The build script should bundle all extension code, build the forked dgg chat code, and assemble the files into a folder to be loaded into your browser. Firefox and Chrome extensions should be built in `lib/firefox` and `lib/chrome` respectively. Load these unpacked addons into your browser.

[Chrome instructions for loading an unpacked extension](https://developer.chrome.com/extensions/getstarted#unpacked)

[Firefox instructions for loading an unpacked extension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
