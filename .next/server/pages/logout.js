(function() {
var exports = {};
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 4368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const [cookie, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_0__.useCookies)(["user"]);
  res.removeHeader('Set-Cookie');
  removeCookie('user');
  res.writeHead(302, {
    Location: '/login'
  });
  res.end();
});

/***/ }),

/***/ 311:
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(4368));
module.exports = __webpack_exports__;

})();