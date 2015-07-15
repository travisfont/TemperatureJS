var browser  = browser || {};
browser.isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
browser.isiPad = navigator.userAgent.match(/iPad/i) !== null;
browser.isiPhone = navigator.userAgent.match(/iPhone/i) !== null;