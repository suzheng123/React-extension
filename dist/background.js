/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    console.log(msg);
    console.log(sender);
    sendResponse('send from background');
});

/******/ })()
;
//# sourceMappingURL=background.js.map