self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./services/admin/updateUser.js":
/*!**************************************!*\
  !*** ./services/admin/updateUser.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateUser; }
/* harmony export */ });
/* harmony import */ var C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



function updateUser(_x, _x2) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = (0,C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data, token) {
    var url, response;
    return C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!token) {
              _context.next = 8;
              break;
            }

            if (data.status == 'Active') data.remarks = '';
            url = 'https://api.dpsmqaportal.com/api/user/' + "".concat(data.userId);
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: 'PUT',
              url: url,
              data: {
                status: "".concat(data.status),
                remarks: "".concat(data.remarks)
              },
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            });

          case 6:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 8:
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _updateUser.apply(this, arguments);
}

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYWRtaW4vdXBkYXRlVXNlci5qcyJdLCJuYW1lcyI6WyJ1cGRhdGVVc2VyIiwiZGF0YSIsInRva2VuIiwic3RhdHVzIiwicmVtYXJrcyIsInVybCIsInVzZXJJZCIsImF4aW9zIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFlQSxVQUE5QjtBQUFBO0FBQUE7Ozs4VkFBZSxpQkFBMEJDLElBQTFCLEVBQWdDQyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxpQkFFSEEsS0FGRztBQUFBO0FBQUE7QUFBQTs7QUFHSCxnQkFBR0QsSUFBSSxDQUFDRSxNQUFMLElBQWUsUUFBbEIsRUFBNEJGLElBQUksQ0FBQ0csT0FBTCxHQUFlLEVBQWY7QUFDakNDLGVBSlEsR0FJRixxREFBOENKLElBQUksQ0FBQ0ssTUFBbkQsQ0FKRTtBQUFBO0FBQUEsbUJBS29CQyw0Q0FBSyxDQUFDO0FBQ3pCQyxvQkFBTSxFQUFFLEtBRGlCO0FBRXpCSCxpQkFBRyxFQUFFQSxHQUZvQjtBQUd6Qkosa0JBQUksRUFBRTtBQUNGRSxzQkFBTSxZQUFLRixJQUFJLENBQUNFLE1BQVYsQ0FESjtBQUVGQyx1QkFBTyxZQUFLSCxJQUFJLENBQUNHLE9BQVY7QUFGTCxlQUhtQjtBQU96QksscUJBQU8sRUFBRTtBQUFDLGdDQUFnQixrQkFBakI7QUFBcUNDLDZCQUFhLG1CQUFZUixLQUFaO0FBQWxEO0FBUGdCLGFBQUQsQ0FMekI7O0FBQUE7QUFLR1Msb0JBTEg7QUFBQSw2Q0FjSUEsUUFBUSxDQUFDVixJQWRiOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFrQmJXLG1CQUFPLENBQUNDLEtBQVI7QUFsQmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi4zZWE2NmZiNzYwZDExNjFlNGRmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKGRhdGEsIHRva2VuKSB7XHJcblx0dHJ5IHtcclxuICAgICAgICBpZiAodG9rZW4pIHsgXHJcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdBY3RpdmUnKSBkYXRhLnJlbWFya3MgPSAnJ1xyXG5cdFx0XHRsZXQgdXJsID0gJ2h0dHBzOi8vYXBpLmRwc21xYXBvcnRhbC5jb20vYXBpL3VzZXIvJyArIGAke2RhdGEudXNlcklkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogYCR7ZGF0YS5zdGF0dXN9YCxcclxuICAgICAgICAgICAgICAgICAgICByZW1hcmtzOiBgJHtkYXRhLnJlbWFya3N9YFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgXHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9