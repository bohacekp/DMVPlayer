//DMVPlayer Copyright 2014 by ISD197 and Jared Poetter

//From another website
var isOpera = !!window.opera || navigator.userAgent.indexOf('Opera') >= 0;
// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !!window.chrome;                          // Chrome 1+
var isIE = /*@cc_on!@*/false;                            // At least IE6

//Debugging
//console.log('isFirefox: ' + isFirefox + '<br>'); 
//console.log('isChrome: ' + isChrome + '<br>');
//console.log('isSafari: ' + isSafari + '<br>');
//console.log('isOpera: ' + isOpera + '<br>');
//console.log('isIE: ' + isIE + '<br>');