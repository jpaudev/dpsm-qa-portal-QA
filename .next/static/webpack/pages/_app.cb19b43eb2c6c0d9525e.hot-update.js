self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/nprogress.css */ "./styles/nprogress.css");
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_layout_height_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/layout-height.css */ "./styles/layout-height.css");
/* harmony import */ var _styles_layout_height_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_height_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_sidebar_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/sidebar-responsive.css */ "./styles/sidebar-responsive.css");
/* harmony import */ var _styles_sidebar_responsive_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_responsive_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 //nprogress module

 //styles of nprogress




 //Binding events. 

next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeStart', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();
});
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();
});
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();
});

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_8__.CookiesProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 6
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./style.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./style.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/style.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./style.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/style.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/style.css ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _upm_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upm.jpg */ "./styles/upm.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_upm_jpg__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Fonts */\r\n\r\n/* ROOT VARIABLES */\r\n#panel1{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover; \r\n}\r\n\r\na:link {\r\n    color: black;\r\n    background-color: transparent;\r\n    text-decoration: underline;\r\n}\r\n\r\n:root{\r\n    --color-primary: #7380ec;\r\n    --color-danger: #ff7782;\r\n    --color-success: #41f1b6;\r\n    --color-warning: #ffbb55;\r\n    --color-white: #fff;\r\n    --color-info-dark: #7d8da1;\r\n    --color-info-light: #dce1eb;\r\n    --color-dark: #363949;\r\n    --color-light: rgba(132,139,200,0.18);\r\n    --color-primary-variant: #111e88;\r\n    --color-dark-variant: #677483;\r\n    --color-background: #f6f6f9;\r\n\r\n\r\n    --card-border-radius: 2rem;\r\n    --border-radius-1: 0.4rem;\r\n    --border-radius-2: 0.8rem;\r\n    --border-radius-3: 1.2rem;\r\n\r\n    --card-padding: 1.8rem;\r\n    --padding-1: 1.2rem;\r\n\r\n    --box-shadow: 0 2rem 3 rem var(--color-light);\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    outline: 0;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    border: 0;\r\n    text-decoration: none;\r\n    list-style: none;\r\n}\r\n\r\nhtml{\r\n    font-size: 14px;\r\n}   \r\n\r\nbody{\r\n    font-family: 'Roboto', sans-serif;\r\n    overflow: hidden;\r\n}\r\n\r\nimg{\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.profile-photo{\r\n    width: 2.8rem;\r\n    height: 2.8rem;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n}\r\n\r\n.text-muted{\r\n    color: var(--color-info-dark);\r\n}\r\n\r\n\r\nform{\r\n    /*border: 3px solid #f1f1f1;*/\r\n}\r\n\r\ninput[type=email], input[type=password] {\r\n     width: 60%;\r\n     padding: 12px 20px;\r\n     margin: 8px 0;\r\n     display: inline-block;\r\n     border: 1px solid #000000;\r\n     border-radius: 20px;\r\n    }\r\n\r\nbutton {\r\n    padding: 14px 20px;\r\n    cursor: pointer;\r\n    width: 60%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #800020;\r\n}\r\n\r\n.container {\r\n    font-family: 'Roboto', sans-serif;\r\n    text-align: center;\r\n    padding: 15%;\r\n    margin: auto;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n.login{\r\n    padding-top: 20px;\r\n}\r\n\r\n.test{\r\n    border-radius: 20px;\r\n    color: #ffffff;\r\n    background-color: #800020;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 400px) {\r\n  span.psw {\r\n         display: block;\r\n        float: none;\r\n  }\r\n  .cancelbtn {\r\n         width: 100%;\r\n  }\r\n  \r\n  #panel1{\r\n        display: none;\r\n  }\r\n\r\n  /*#user{\r\n        display: none;\r\n  }*/\r\n}", "",{"version":3,"sources":["webpack://styles/style.css"],"names":[],"mappings":"AAAA,UAAU;;AAGV,mBAAmB;AACnB;IACI,yDAAgC;IAChC,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,0BAA0B;AAC9B;;AAEA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,wBAAwB;IACxB,wBAAwB;IACxB,mBAAmB;IACnB,0BAA0B;IAC1B,2BAA2B;IAC3B,qBAAqB;IACrB,qCAAqC;IACrC,gCAAgC;IAChC,6BAA6B;IAC7B,2BAA2B;;;IAG3B,0BAA0B;IAC1B,yBAAyB;IACzB,yBAAyB;IACzB,yBAAyB;;IAEzB,sBAAsB;IACtB,mBAAmB;;IAEnB,6CAA6C;AACjD;;AAEA;IACI,SAAS;IACT,UAAU;IACV,wBAAgB;OAAhB,qBAAgB;YAAhB,gBAAgB;IAChB,SAAS;IACT,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;AACjC;;;AAGA;IACI,6BAA6B;AACjC;;AAEA;KACK,UAAU;KACV,kBAAkB;KAClB,aAAa;KACb,qBAAqB;KACrB,yBAAyB;KACzB,mBAAmB;IACpB;;AAEJ;IACI,kBAAkB;IAClB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,yBAAyB;AAC7B;AACA,oEAAoE;AACpE;EACE;SACO,cAAc;QACf,WAAW;EACjB;EACA;SACO,WAAW;EAClB;;EAEA;QACM,aAAa;EACnB;;EAEA;;IAEE;AACJ","sourcesContent":["/* Fonts */\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n/* ROOT VARIABLES */\r\n#panel1{\r\n    background-image: url('upm.jpg');\r\n    background-size: cover; \r\n}\r\n\r\na:link {\r\n    color: black;\r\n    background-color: transparent;\r\n    text-decoration: underline;\r\n}\r\n\r\n:root{\r\n    --color-primary: #7380ec;\r\n    --color-danger: #ff7782;\r\n    --color-success: #41f1b6;\r\n    --color-warning: #ffbb55;\r\n    --color-white: #fff;\r\n    --color-info-dark: #7d8da1;\r\n    --color-info-light: #dce1eb;\r\n    --color-dark: #363949;\r\n    --color-light: rgba(132,139,200,0.18);\r\n    --color-primary-variant: #111e88;\r\n    --color-dark-variant: #677483;\r\n    --color-background: #f6f6f9;\r\n\r\n\r\n    --card-border-radius: 2rem;\r\n    --border-radius-1: 0.4rem;\r\n    --border-radius-2: 0.8rem;\r\n    --border-radius-3: 1.2rem;\r\n\r\n    --card-padding: 1.8rem;\r\n    --padding-1: 1.2rem;\r\n\r\n    --box-shadow: 0 2rem 3 rem var(--color-light);\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    outline: 0;\r\n    appearance: none;\r\n    border: 0;\r\n    text-decoration: none;\r\n    list-style: none;\r\n}\r\n\r\nhtml{\r\n    font-size: 14px;\r\n}   \r\n\r\nbody{\r\n    font-family: 'Roboto', sans-serif;\r\n    overflow: hidden;\r\n}\r\n\r\nimg{\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.profile-photo{\r\n    width: 2.8rem;\r\n    height: 2.8rem;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n}\r\n\r\n.text-muted{\r\n    color: var(--color-info-dark);\r\n}\r\n\r\n\r\nform{\r\n    /*border: 3px solid #f1f1f1;*/\r\n}\r\n\r\ninput[type=email], input[type=password] {\r\n     width: 60%;\r\n     padding: 12px 20px;\r\n     margin: 8px 0;\r\n     display: inline-block;\r\n     border: 1px solid #000000;\r\n     border-radius: 20px;\r\n    }\r\n\r\nbutton {\r\n    padding: 14px 20px;\r\n    cursor: pointer;\r\n    width: 60%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #800020;\r\n}\r\n\r\n.container {\r\n    font-family: 'Roboto', sans-serif;\r\n    text-align: center;\r\n    padding: 15%;\r\n    margin: auto;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n.login{\r\n    padding-top: 20px;\r\n}\r\n\r\n.test{\r\n    border-radius: 20px;\r\n    color: #ffffff;\r\n    background-color: #800020;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 400px) {\r\n  span.psw {\r\n         display: block;\r\n        float: none;\r\n  }\r\n  .cancelbtn {\r\n         width: 100%;\r\n  }\r\n  \r\n  #panel1{\r\n        display: none;\r\n  }\r\n\r\n  /*#user{\r\n        display: none;\r\n  }*/\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/getUrl.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/getUrl.js ***!
  \**************************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var e={91:function(e){e.exports=function(e,r){if(!r){r={}}e=e&&e.__esModule?e.default:e;if(typeof e!=="string"){return e}if(/^['"].*['"]$/.test(e)){e=e.slice(1,-1)}if(r.hash){e+=r.hash}if(/["'() \t\n]/.test(e)||r.needQuotes){return'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"')}return e}}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var n=true;try{e[t](_,_.exports,__nccwpck_require__);n=false}finally{if(n)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(91)}();

/***/ }),

/***/ "./styles/upm.jpg":
/*!************************!*\
  !*** ./styles/upm.jpg ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/upm.5dd5db0dc0d759a687d406306faae4a3.jpg");

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlLmNzcz9jMTEwIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvdXBtLmpwZyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUNtQzs7Q0FDRDs7QUFDbEM7QUFDQTtBQUNBO0NBR0E7O0FBQ0FBLDREQUFBLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1DLHNEQUFBLEVBQU47QUFBQSxDQUFyQztBQUNBRCw0REFBQSxDQUFpQixxQkFBakIsRUFBd0M7QUFBQSxTQUFNQyxxREFBQSxFQUFOO0FBQUEsQ0FBeEM7QUFDQUQsNERBQUEsQ0FBaUIsa0JBQWpCLEVBQXFDO0FBQUEsU0FBTUMscURBQUEsRUFBTjtBQUFBLENBQXJDOztBQUVBLFNBQVNDLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3JDLHNCQUNDLDhEQUFDLHlEQUFEO0FBQUEsMkJBQ0MsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBS0g7O0tBTlFGLEs7QUFPVCwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxVQUFVLG1CQUFPLENBQUMsb05BQXdH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QUFtQjtBQUN0d047QUFDQSwrREFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDVnZDLDBCQUEwQixhQUFhLE9BQU8sZUFBZSx3QkFBd0IsT0FBTyxLQUFLLDhCQUE4Qix3QkFBd0IsU0FBUywyQkFBMkIsZ0JBQWdCLFdBQVcsVUFBVSx3Q0FBd0MsaUVBQWlFLFlBQVksU0FBUyxnQ0FBZ0MsU0FBUyxvQkFBb0IsWUFBWSxZQUFZLFdBQVcsSUFBSSxzQ0FBc0MsUUFBUSxRQUFRLGlCQUFpQixpQkFBaUIsdUJBQXVCLFNBQVMsS0FBSywrQkFBK0IsRzs7Ozs7Ozs7Ozs7O0FDQTlsQiwrREFBZSxxQkFBdUIsMERBQTBELEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jYjE5YjQzZWIyYzZjMGQ5NTI1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJzsgLy9ucHJvZ3Jlc3MgbW9kdWxlXHJcbmltcG9ydCAnLi4vc3R5bGVzL25wcm9ncmVzcy5jc3MnOyAvL3N0eWxlcyBvZiBucHJvZ3Jlc3NcclxuaW1wb3J0ICcuLi9zdHlsZXMvbGF5b3V0LWhlaWdodC5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zaWRlYmFyLXJlc3BvbnNpdmUuY3NzJztcclxuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtY29va2llJ1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCJcclxuXHJcbi8vQmluZGluZyBldmVudHMuIFxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIFx0PENvb2tpZXNQcm92aWRlcj5cclxuICAgIFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICBcdDwvQ29va2llc1Byb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3N0eWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vdXBtLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGb250cyAqL1xcclxcblxcclxcbi8qIFJPT1QgVkFSSUFCTEVTICovXFxyXFxuI3BhbmVsMXtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxyXFxufVxcclxcblxcclxcbmE6bGluayB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjNzM4MGVjO1xcclxcbiAgICAtLWNvbG9yLWRhbmdlcjogI2ZmNzc4MjtcXHJcXG4gICAgLS1jb2xvci1zdWNjZXNzOiAjNDFmMWI2O1xcclxcbiAgICAtLWNvbG9yLXdhcm5pbmc6ICNmZmJiNTU7XFxyXFxuICAgIC0tY29sb3Itd2hpdGU6ICNmZmY7XFxyXFxuICAgIC0tY29sb3ItaW5mby1kYXJrOiAjN2Q4ZGExO1xcclxcbiAgICAtLWNvbG9yLWluZm8tbGlnaHQ6ICNkY2UxZWI7XFxyXFxuICAgIC0tY29sb3ItZGFyazogIzM2Mzk0OTtcXHJcXG4gICAgLS1jb2xvci1saWdodDogcmdiYSgxMzIsMTM5LDIwMCwwLjE4KTtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6ICMxMTFlODg7XFxyXFxuICAgIC0tY29sb3ItZGFyay12YXJpYW50OiAjNjc3NDgzO1xcclxcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6ICNmNmY2Zjk7XFxyXFxuXFxyXFxuXFxyXFxuICAgIC0tY2FyZC1ib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICAtLWJvcmRlci1yYWRpdXMtMTogMC40cmVtO1xcclxcbiAgICAtLWJvcmRlci1yYWRpdXMtMjogMC44cmVtO1xcclxcbiAgICAtLWJvcmRlci1yYWRpdXMtMzogMS4ycmVtO1xcclxcblxcclxcbiAgICAtLWNhcmQtcGFkZGluZzogMS44cmVtO1xcclxcbiAgICAtLXBhZGRpbmctMTogMS4ycmVtO1xcclxcblxcclxcbiAgICAtLWJveC1zaGFkb3c6IDAgMnJlbSAzIHJlbSB2YXIoLS1jb2xvci1saWdodCk7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59ICAgXFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbWd7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtcGhvdG97XFxyXFxuICAgIHdpZHRoOiAyLjhyZW07XFxyXFxuICAgIGhlaWdodDogMi44cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50ZXh0LW11dGVke1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaW5mby1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9ybXtcXHJcXG4gICAgLypib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxOyovXFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XFxyXFxuICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgcGFkZGluZzogMTJweCAyMHB4O1xcclxcbiAgICAgbWFyZ2luOiA4cHggMDtcXHJcXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxyXFxuICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbGJ0biB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMjA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTUlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbnNwYW4ucHN3IHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2lue1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3R7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xcclxcbn1cXHJcXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcclxcbiAgc3Bhbi5wc3cge1xcclxcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuY2FuY2VsYnRuIHtcXHJcXG4gICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI3BhbmVsMXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiN1c2Vye1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH0qL1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxVQUFVOztBQUdWLG1CQUFtQjtBQUNuQjtJQUNJLHlEQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsMkJBQTJCOzs7SUFHM0IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCOztJQUV6QixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHdCQUFnQjtPQUFoQixxQkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOzs7QUFHQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtLQUNLLFVBQVU7S0FDVixrQkFBa0I7S0FDbEIsYUFBYTtLQUNiLHFCQUFxQjtLQUNyQix5QkFBeUI7S0FDekIsbUJBQW1CO0lBQ3BCOztBQUVKO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0Esb0VBQW9FO0FBQ3BFO0VBQ0U7U0FDTyxjQUFjO1FBQ2YsV0FBVztFQUNqQjtFQUNBO1NBQ08sV0FBVztFQUNsQjs7RUFFQTtRQUNNLGFBQWE7RUFDbkI7O0VBRUE7O0lBRUU7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGb250cyAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vKiBST09UIFZBUklBQkxFUyAqL1xcclxcbiNwYW5lbDF7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgndXBtLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcXHJcXG59XFxyXFxuXFxyXFxuYTpsaW5rIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWNvbG9yLXByaW1hcnk6ICM3MzgwZWM7XFxyXFxuICAgIC0tY29sb3ItZGFuZ2VyOiAjZmY3NzgyO1xcclxcbiAgICAtLWNvbG9yLXN1Y2Nlc3M6ICM0MWYxYjY7XFxyXFxuICAgIC0tY29sb3Itd2FybmluZzogI2ZmYmI1NTtcXHJcXG4gICAgLS1jb2xvci13aGl0ZTogI2ZmZjtcXHJcXG4gICAgLS1jb2xvci1pbmZvLWRhcms6ICM3ZDhkYTE7XFxyXFxuICAgIC0tY29sb3ItaW5mby1saWdodDogI2RjZTFlYjtcXHJcXG4gICAgLS1jb2xvci1kYXJrOiAjMzYzOTQ5O1xcclxcbiAgICAtLWNvbG9yLWxpZ2h0OiByZ2JhKDEzMiwxMzksMjAwLDAuMTgpO1xcclxcbiAgICAtLWNvbG9yLXByaW1hcnktdmFyaWFudDogIzExMWU4ODtcXHJcXG4gICAgLS1jb2xvci1kYXJrLXZhcmlhbnQ6ICM2Nzc0ODM7XFxyXFxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogI2Y2ZjZmOTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgLS1jYXJkLWJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIC0tYm9yZGVyLXJhZGl1cy0xOiAwLjRyZW07XFxyXFxuICAgIC0tYm9yZGVyLXJhZGl1cy0yOiAwLjhyZW07XFxyXFxuICAgIC0tYm9yZGVyLXJhZGl1cy0zOiAxLjJyZW07XFxyXFxuXFxyXFxuICAgIC0tY2FyZC1wYWRkaW5nOiAxLjhyZW07XFxyXFxuICAgIC0tcGFkZGluZy0xOiAxLjJyZW07XFxyXFxuXFxyXFxuICAgIC0tYm94LXNoYWRvdzogMCAycmVtIDMgcmVtIHZhcigtLWNvbG9yLWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn0gICBcXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmltZ3tcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waG90b3tcXHJcXG4gICAgd2lkdGg6IDIuOHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjhyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtbXV0ZWR7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1pbmZvLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5mb3Jte1xcclxcbiAgICAvKmJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7Ki9cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcXHJcXG4gICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICAgICBtYXJnaW46IDhweCAwO1xcclxcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXHJcXG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsYnRuIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMThweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNSU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5wc3cge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW57XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMjA7XFxyXFxufVxcclxcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxyXFxuICBzcGFuLnBzdyB7XFxyXFxuICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5jYW5jZWxidG4ge1xcclxcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjcGFuZWwxe1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qI3VzZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfSovXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXs5MTpmdW5jdGlvbihlKXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxyKXtpZighcil7cj17fX1lPWUmJmUuX19lc01vZHVsZT9lLmRlZmF1bHQ6ZTtpZih0eXBlb2YgZSE9PVwic3RyaW5nXCIpe3JldHVybiBlfWlmKC9eWydcIl0uKlsnXCJdJC8udGVzdChlKSl7ZT1lLnNsaWNlKDEsLTEpfWlmKHIuaGFzaCl7ZSs9ci5oYXNofWlmKC9bXCInKCkgXFx0XFxuXS8udGVzdChlKXx8ci5uZWVkUXVvdGVzKXtyZXR1cm4nXCInLmNvbmNhdChlLnJlcGxhY2UoL1wiL2csJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLFwiXFxcXG5cIiksJ1wiJyl9cmV0dXJuIGV9fX07dmFyIHI9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyh0KXtpZihyW3RdKXtyZXR1cm4gclt0XS5leHBvcnRzfXZhciBfPXJbdF09e2V4cG9ydHM6e319O3ZhciBuPXRydWU7dHJ5e2VbdF0oXyxfLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7bj1mYWxzZX1maW5hbGx5e2lmKG4pZGVsZXRlIHJbdF19cmV0dXJuIF8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MSl9KCk7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS91cG0uNWRkNWRiMGRjMGQ3NTlhNjg3ZDQwNjMwNmZhYWU0YTMuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==