/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
chrome.runtime.sendMessage('From contentScript', function (response) {
    console.log(response);
});

/******/ })()
;
//# sourceMappingURL=contentScript.js.map