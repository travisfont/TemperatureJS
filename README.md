# TemperatureJS

TemperatureJS (v0.0.1 Clausen), is a micro experimental framework in JavaScript design to contain strict data typing in modern (ES5) browsers. Compatible and extendible to most additional frameworks as extensions (aka plugins).

TemperatureJS helps improve by optimizing the payload delivered to browsers through it's module architecture. Only resources that are required to be loaded through the browser device will be requested when utilized by the application.
In addition the framework supports a special unique build in data type getter / setter environment to make application development stricter.

To use each package it must be loaded. TemperatureJS supports common functionalities from many of the packages.

Core Packages:

- jQuery
- Underscore.js
- Moment.js
- php.js
- SugarJS 
- CryptoJS
- lodash 4
- json2.js

----------------------------

Usage of packages:

```javascript
TJS.import('jQuery');          // loads jQuery package
TJS.import('Underscore', 1.8); // loads Underscore.js 1.8 package
```

Usage of libraries:

```javascript
TJS.import('Strings');   // loads string library
TJS.import('Ajax');      // loads ajax library
TJS.import('Constant');  // loads constant function
```

----------------------------

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | 3.6+ | 9+ | ??? | 6.1+ |