[![Donate](https://img.shields.io/badge/-%E2%99%A5%20Donate-%23ff69b4)](https://hmlendea.go.ro/fund.html) [![Latest GitHub release](https://img.shields.io/github/v/release/hmlendea/geforcenow-electron)](https://github.com/hmlendea/geforcenow-electron/releases/latest)
<img align="right" width="100" height="100" src="https://raw.githubusercontent.com/hmlendea/geforcenow-electron/master/icon.png">

# About

GeForce NOW application written in Electron, wrapping around the GFN web browser implementation.

# Installation

[![Get it from the AUR](https://raw.githubusercontent.com/hmlendea/readme-assets/master/badges/stores/aur.png)](https://aur.archlinux.org/packages/geforcenow-electron/) [![Get it from the Snap Store](https://raw.githubusercontent.com/snapcore/snap-store-badges/master/EN/%5BEN%5D-snap-store-white.png)](https://snapcraft.io/geforcenow) [![Get it from FlatHub](https://raw.githubusercontent.com/hmlendea/readme-assets/master/badges/stores/flathub.png)](https://www.flathub.org/apps/details/io.github.hmlendea.geforcenow-electron)

## Manual Installation

 - Go to the [latest release](https://github.com/hmlendea/geforcenow-electron/releases/latest).
 - Download the specific file that best fits your disto.

# Usage

If you've installed it through your package manager, then it should already contain a launcher for it. Otherwise, run the `geforcenow` binary.

To toggle full-screen mode, use the `Super + F` keyboard shortcut.

# Building from source

## Requirements

You will need to install [npm](https://www.npmjs.com/), the Node.js package manager. On most distributions, the package is simply called `npm`.

## Cloning the source code

Once you have npm, clone the wrapper to a convenient location:

```
git clone https://github.com/hmlendea/geforcenow-electron.git
```

## Building

```
cd geforcenow-electron
npm install
npm start
```

On subsequent runs, `npm start` will be all that's required.

## Updating

Simply pull the latest version of master and install any changed dependencies:

```
cd geforcenow-electron
git checkout master
git pull
npm install
npm start
```
