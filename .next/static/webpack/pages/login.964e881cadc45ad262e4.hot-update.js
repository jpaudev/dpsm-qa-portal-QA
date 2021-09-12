self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\pages\\login.js",
    _s = $RefreshSig$();










function Login() {
  _s();

  var _this = this;

  var loginDetails = {
    username: "",
    password: ""
  };
  var errorMessage = "";

  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_11__.useCookies)(["user"]),
      _useCookies2 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useCookies, 2),
      cookie = _useCookies2[0],
      setCookie = _useCookies2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    style: {
      backgroundImage: "url(../kbblur.jpg)"
    },
    className: "jsx-3143505194" + " " + "d-flex justify-content-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        className: "jsx-3143505194",
        children: "DPSM-QA-PORTAL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
        className: "jsx-3143505194"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
        className: "jsx-3143505194"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js",
        className: "jsx-3143505194"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
        className: "jsx-3143505194"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      id: "logo",
      className: "jsx-3143505194" + " " + "jumbotron",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        className: "jsx-3143505194",
        children: " DPSM QA PORTAL "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
        className: "jsx-3143505194"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
        className: "jsx-3143505194"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("center", {
        className: "jsx-3143505194",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/dpsm-seal.png",
          width: "142",
          height: "115",
          alt: "DPSM-QA-Portal",
          className: "jsx-3143505194"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
        className: "jsx-3143505194"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
        className: "jsx-3143505194"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 2
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      id: "login",
      className: "jsx-3143505194" + " " + "jumbotron",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Formik, {
        initialValues: loginDetails,
        onSubmit: /*#__PURE__*/function () {
          var _ref = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {
            var token, tokenRes, role, alert;
            return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    token = null;
                    _context.next = 4;
                    return axios__WEBPACK_IMPORTED_MODULE_8___default().post("https://api.dpsmqaportal.com/api/login", {
                      upemail: "".concat(values.username),
                      password: "".concat(values.password)
                    });

                  case 4:
                    tokenRes = _context.sent;

                    if (tokenRes.data.success) {
                      setCookie("user", tokenRes.data.result.token, {
                        path: "/",
                        maxAge: 3600,
                        // Expires after 1hr
                        sameSite: true
                      });
                      token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_10___default().decode(tokenRes.data.result.token);
                      role = token.role;

                      if (role == 1) {
                        // faculty 
                        next_router__WEBPACK_IMPORTED_MODULE_9___default().push('/faculty/basic-info');
                      } else if (role == 2 || role == 3) {
                        // unit head or dept. chair
                        next_router__WEBPACK_IMPORTED_MODULE_9___default().push('/faculty');
                      } else if (role == 5) {
                        //admin
                        next_router__WEBPACK_IMPORTED_MODULE_9___default().push('/admin');
                      }
                    } else {
                      window.alert('something wrong');
                    }

                    _context.next = 17;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);
                    console.error(_context.t0.response.data.errors[0].message);
                    errorMessage = _context.t0.response.data.errors[0].message;
                    alert = document.getElementById("alert");
                    alert.setAttribute("style", "visibility: visible");
                    values.username = "";
                    values.password = "";
                    return _context.abrupt("return", _context.t0);

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 8]]);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(),
        children: function children(_ref2) {
          var values = _ref2.values,
              errors = _ref2.errors,
              touched = _ref2.touched,
              isSubmitting = _ref2.isSubmitting;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Form, {
            action: "",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              role: "alert",
              id: "alert",
              className: "jsx-3143505194" + " " + "alert alert-danger",
              children: errorMessage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
              htmlFor: "email",
              className: "jsx-3143505194",
              children: "UP Email:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
              className: "form-control",
              type: "text",
              id: "username",
              name: "username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
              htmlFor: "password",
              className: "jsx-3143505194",
              children: "Password:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
              className: "form-control",
              type: "password",
              id: "password",
              name: "password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
              className: "jsx-3143505194"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "#",
              "data-toggle": "modal",
              "data-target": "#forgot-password",
              className: "jsx-3143505194",
              children: "Forgot Password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 3
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
              className: "jsx-3143505194"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 3
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
              className: "jsx-3143505194"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 3
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
              type: "submit",
              disabled: isSubmitting,
              className: "jsx-3143505194" + " " + "btn btn-primary",
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 2
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      id: "forgot-password",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "forgotPasswordLabel",
      "aria-hidden": "true",
      className: "jsx-3143505194" + " " + "modal fade",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        role: "document",
        className: "jsx-3143505194" + " " + "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "jsx-3143505194" + " " + "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "jsx-3143505194" + " " + "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
              id: "forgotPasswordLabel",
              className: "jsx-3143505194" + " " + "modal-title",
              children: "Forgot Password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
              type: "button",
              "data-dismiss": "modal",
              "aria-label": "Close",
              className: "jsx-3143505194" + " " + "close",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                "aria-hidden": "true",
                className: "jsx-3143505194",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "jsx-3143505194" + " " + "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "jsx-3143505194",
              children: " Input the UP Mail account associated with your account for the DPSM QA Portal here. Clicking 'submit' will send an email containing your login credentials for this application "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 4
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              className: "jsx-3143505194",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {
                className: "jsx-3143505194"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "jsx-3143505194" + " " + "form-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "jsx-3143505194" + " " + "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    htmlFor: "recovery-email",
                    id: "recovery-email",
                    className: "jsx-3143505194",
                    children: " UP Mail Account "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
                    type: "email",
                    name: "recovery-email",
                    placeholder: "Input UP Mail account",
                    required: true,
                    className: "jsx-3143505194" + " " + "form-control col-md-12"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "jsx-3143505194" + " " + "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
              type: "button",
              "data-dismiss": "modal",
              className: "jsx-3143505194" + " " + "btn btn-secondary",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
              type: "button",
              className: "jsx-3143505194" + " " + "btn btn-primary",
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 2
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default()), {
      id: "3143505194",
      children: ".d-flex.jsx-3143505194{min-height:100%;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.jumbotron#login.jsx-3143505194{background-color:#600;}.jumbotron#logo.jsx-3143505194{background-color:#01942b;}label.jsx-3143505194{color:#fff;}#alert.jsx-3143505194{visibility:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSWEsQUFHb0IsQUFPSyxBQUdJLEFBR2YsQUFHVyxXQUZ0QixLQWJvQixFQWdCbEIsSUFURixHQUdBLFFBUmdCLDBFQUNNLDZGQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXEFqaSBNYWdsYW5xdWVcXERlc2t0b3BcXGRwc20tcWEtcG9ydGFsXFxwYWdlc1xcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGxldCBsb2dpbkRldGFpbHMgPSB7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH1cclxuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJcIlxyXG5cclxuICBjb25zdCBbY29va2llLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbXCJ1c2VyXCJdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZSA9IHt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoLi4va2JibHVyLmpwZylcIiB9fT5cclxuXHRcdDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjUuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE2LjAvdW1kL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblx0PGRpdiBjbGFzc05hbWUgPSBcImp1bWJvdHJvblwiIGlkID0gXCJsb2dvXCI+XHJcblx0XHQ8aDM+IERQU00gUUEgUE9SVEFMIDwvaDM+XHJcblx0XHQ8YnIgLz5cclxuXHRcdDxiciAvPlxyXG5cdFx0PGNlbnRlcj48aW1nIHNyYz1cIi9kcHNtLXNlYWwucG5nXCIgd2lkdGg9XCIxNDJcIiBoZWlnaHQ9XCIxMTVcIiBhbHQ9XCJEUFNNLVFBLVBvcnRhbFwiIC8+PC9jZW50ZXI+XHJcblx0XHQ8YnIgLz5cclxuXHRcdDxiciAvPlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwibG9naW5cIj5cclxuICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17bG9naW5EZXRhaWxzfVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG51bGxcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVzID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHBzOi8vYXBpLmRwc21xYXBvcnRhbC5jb20vYXBpL2xvZ2luXCIsIHtcclxuICAgICAgICAgICAgICAgICAgdXBlbWFpbDogYCR7dmFsdWVzLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBgJHt2YWx1ZXMucGFzc3dvcmR9YFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0b2tlblJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwidXNlclwiLCB0b2tlblJlcy5kYXRhLnJlc3VsdC50b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEFnZTogMzYwMCwgLy8gRXhwaXJlcyBhZnRlciAxaHJcclxuICAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgdG9rZW4gPSBqd3QuZGVjb2RlKHRva2VuUmVzLmRhdGEucmVzdWx0LnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRva2VuLnJvbGVcclxuICAgICAgICAgICAgICAgICAgaWYocm9sZSA9PSAxKSB7IC8vIGZhY3VsdHkgXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvbGUgPT0gMiB8fCByb2xlID09IDMpIHsgLy8gdW5pdCBoZWFkIG9yIGRlcHQuIGNoYWlyXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5JylcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHJvbGUgPT0gNSkgeyAvL2FkbWluXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbicpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnc29tZXRoaW5nIHdyb25nJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLlswXS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLlswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMudXNlcm5hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWVzLnBhc3N3b3JkPVwiXCJcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+VVAgRW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcblx0XHQgICAgICAgICAgICA8YnIgLz5cclxuXHRcdDxhIGhyZWYgPSBcIiNcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZm9yZ290LXBhc3N3b3JkXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT5cclxuXHRcdDxiciAvPlxyXG5cdFx0PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgey8qPExpbmsgaHJlZj1cIi9mYWN1bHR5XCI+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPVwiTG9naW5cIj48L2lucHV0PjwvTGluaz4qL31cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm1paz5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJmb3Jnb3QtcGFzc3dvcmRcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImZvcmdvdFBhc3N3b3JkTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJmb3Jnb3RQYXNzd29yZExhYmVsXCI+Rm9yZ290IFBhc3N3b3JkPzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcblx0XHRcdDxwPiBJbnB1dCB0aGUgVVAgTWFpbCBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCB5b3VyIGFjY291bnQgZm9yIHRoZSBEUFNNIFFBIFBvcnRhbCBoZXJlLiBDbGlja2luZyAnc3VibWl0JyB3aWxsIHNlbmQgYW4gZW1haWwgY29udGFpbmluZyB5b3VyIGxvZ2luIGNyZWRlbnRpYWxzXHJcblx0XHRcdGZvciB0aGlzIGFwcGxpY2F0aW9uIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJyZWNvdmVyeS1lbWFpbFwiIGlkID0gXCJyZWNvdmVyeS1lbWFpbFwiPiBVUCBNYWlsIEFjY291bnQgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImVtYWlsXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCIgbmFtZSA9IFwicmVjb3ZlcnktZW1haWxcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgVVAgTWFpbCBhY2NvdW50XCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFxyXG5cdDxzdHlsZSBqc3g+e2BcclxuXHRcdC5kLWZsZXh7XHJcblx0XHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgXHRcdFx0bWluLWhlaWdodDogMTAwdmg7IFxyXG5cclxuICBcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG4gIFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0XHQuanVtYm90cm9uI2xvZ2lue1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM2MDA7XHJcblx0XHR9XHJcblx0XHQuanVtYm90cm9uI2xvZ297XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMTk0MmI7XHJcblx0XHR9XHJcblx0XHRsYWJlbHtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdH1cclxuICAgICNhbGVydCB7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHRgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExvZ2luXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\pages\\\\login.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(Login, "rWtr2pzGlVObhxILlGDRXrEMlRk=", false, function () {
  return [react_cookie__WEBPACK_IMPORTED_MODULE_11__.useCookies];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJsb2dpbkRldGFpbHMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwidXNlQ29va2llcyIsImNvb2tpZSIsInNldENvb2tpZSIsImJhY2tncm91bmRJbWFnZSIsInZhbHVlcyIsInRva2VuIiwiYXhpb3MiLCJ1cGVtYWlsIiwidG9rZW5SZXMiLCJkYXRhIiwic3VjY2VzcyIsInJlc3VsdCIsInBhdGgiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsImp3dCIsInJvbGUiLCJSb3V0ZXIiLCJ3aW5kb3ciLCJhbGVydCIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwiZXJyb3JzIiwibWVzc2FnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUNmLE1BQUlDLFlBQVksR0FBRztBQUNqQkMsWUFBUSxFQUFFLEVBRE87QUFFakJDLFlBQVEsRUFBRTtBQUZPLEdBQW5CO0FBSUEsTUFBSUMsWUFBWSxHQUFHLEVBQW5COztBQUxlLG9CQU9hQyx5REFBVSxDQUFDLENBQUMsTUFBRCxDQUFELENBUHZCO0FBQUE7QUFBQSxNQU9SQyxNQVBRO0FBQUEsTUFPQUMsU0FQQTs7QUFRYixzQkFDSTtBQUFpRCxTQUFLLEVBQUk7QUFBRUMscUJBQWUsRUFBRTtBQUFuQixLQUExRDtBQUFBLHdDQUFpQiwrQkFBakI7QUFBQSw0QkFDTiw4REFBQyxrREFBRDtBQUFBLDhCQUNjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEZCxlQUdjO0FBQU0sV0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyRk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEySUQ7O0dBbkpNbEMsSztVQU9xQksscUQ7OztLQVByQkwsSztBQXFKUCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi45NjRlODgxY2FkYzQ1YWQyNjJlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiXHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBsZXQgbG9naW5EZXRhaWxzID0ge1xyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9XHJcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCJcclxuXHJcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGUgPSB7eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC4uL2tiYmx1ci5qcGcpXCIgfX0+XHJcblx0XHQ8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy41LjEvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNi4wL3VtZC9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cdDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwibG9nb1wiPlxyXG5cdFx0PGgzPiBEUFNNIFFBIFBPUlRBTCA8L2gzPlxyXG5cdFx0PGJyIC8+XHJcblx0XHQ8YnIgLz5cclxuXHRcdDxjZW50ZXI+PGltZyBzcmM9XCIvZHBzbS1zZWFsLnBuZ1wiIHdpZHRoPVwiMTQyXCIgaGVpZ2h0PVwiMTE1XCIgYWx0PVwiRFBTTS1RQS1Qb3J0YWxcIiAvPjwvY2VudGVyPlxyXG5cdFx0PGJyIC8+XHJcblx0XHQ8YnIgLz5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzTmFtZSA9IFwianVtYm90cm9uXCIgaWQgPSBcImxvZ2luXCI+XHJcbiAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2xvZ2luRGV0YWlsc31cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlblJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL2FwaS5kcHNtcWFwb3J0YWwuY29tL2FwaS9sb2dpblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgIHVwZW1haWw6IGAke3ZhbHVlcy51c2VybmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZDogYCR7dmFsdWVzLnBhc3N3b3JkfWBcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgaWYodG9rZW5SZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldENvb2tpZShcInVzZXJcIiwgdG9rZW5SZXMuZGF0YS5yZXN1bHQudG9rZW4sIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhBZ2U6IDM2MDAsIC8vIEV4cGlyZXMgYWZ0ZXIgMWhyXHJcbiAgICAgICAgICAgICAgICAgICAgc2FtZVNpdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIHRva2VuID0gand0LmRlY29kZSh0b2tlblJlcy5kYXRhLnJlc3VsdC50b2tlbilcclxuICAgICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0b2tlbi5yb2xlXHJcbiAgICAgICAgICAgICAgICAgIGlmKHJvbGUgPT0gMSkgeyAvLyBmYWN1bHR5IFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb2xlID09IDIgfHwgcm9sZSA9PSAzKSB7IC8vIHVuaXQgaGVhZCBvciBkZXB0LiBjaGFpclxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eScpXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyb2xlID09IDUpIHsgLy9hZG1pblxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4nKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ3NvbWV0aGluZyB3cm9uZycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5bMF0ubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5bMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLnVzZXJuYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlcy5wYXNzd29yZD1cIlwiXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiIGlkPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlVQIEVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxyXG5cdFx0ICAgICAgICAgICAgPGJyIC8+XHJcblx0XHQ8YSBocmVmID0gXCIjXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2ZvcmdvdC1wYXNzd29yZFwiPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcblx0XHQ8YnIgLz5cclxuXHRcdDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvZmFjdWx0eVwiPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT1cIkxvZ2luXCI+PC9pbnB1dD48L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtaWs+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZm9yZ290LXBhc3N3b3JkXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJmb3Jnb3RQYXNzd29yZExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZm9yZ290UGFzc3dvcmRMYWJlbFwiPkZvcmdvdCBQYXNzd29yZD88L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG5cdFx0XHQ8cD4gSW5wdXQgdGhlIFVQIE1haWwgYWNjb3VudCBhc3NvY2lhdGVkIHdpdGggeW91ciBhY2NvdW50IGZvciB0aGUgRFBTTSBRQSBQb3J0YWwgaGVyZS4gQ2xpY2tpbmcgJ3N1Ym1pdCcgd2lsbCBzZW5kIGFuIGVtYWlsIGNvbnRhaW5pbmcgeW91ciBsb2dpbiBjcmVkZW50aWFsc1xyXG5cdFx0XHRmb3IgdGhpcyBhcHBsaWNhdGlvbiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwicmVjb3ZlcnktZW1haWxcIiBpZCA9IFwicmVjb3ZlcnktZW1haWxcIj4gVVAgTWFpbCBBY2NvdW50IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJlbWFpbFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiIG5hbWUgPSBcInJlY292ZXJ5LWVtYWlsXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IFVQIE1haWwgYWNjb3VudFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHRcclxuXHQ8c3R5bGUganN4PntgXHJcblx0XHQuZC1mbGV4e1xyXG5cdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIFx0XHRcdG1pbi1oZWlnaHQ6IDEwMHZoOyBcclxuXHJcbiAgXHRcdFx0ZGlzcGxheTogZmxleDtcclxuICBcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0fVxyXG5cdFx0Lmp1bWJvdHJvbiNsb2dpbntcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNjAwO1xyXG5cdFx0fVxyXG5cdFx0Lmp1bWJvdHJvbiNsb2dve1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDE5NDJiO1xyXG5cdFx0fVxyXG5cdFx0bGFiZWx7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHR9XHJcbiAgICAjYWxlcnQge1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcblx0YH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXSwic291cmNlUm9vdCI6IiJ9