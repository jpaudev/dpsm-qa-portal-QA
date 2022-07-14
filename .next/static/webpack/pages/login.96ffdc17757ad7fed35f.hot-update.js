self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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





var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\login.js",
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
      _useCookies2 = (0,C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useCookies, 2),
      cookie = _useCookies2[0],
      setCookie = _useCookies2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "jsx-3678029609",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        className: "jsx-3678029609",
        children: "DPSM-QA-PORTAL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
        crossorigin: "anonymous",
        className: "jsx-3678029609"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "jsx-3678029609" + " " + "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        id: "panel1",
        className: "jsx-3678029609" + " " + "col-md-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "jsx-3678029609" + " " + "img",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: "/logo.png",
            style: {
              padding: "25%",
              height: "100%"
            },
            className: "jsx-3678029609" + " " + "logopic"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "jsx-3678029609" + " " + "col-md-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "jsx-3678029609" + " " + "login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "jsx-3678029609" + " " + "container",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "jsx-3678029609" + " " + "img",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "/user.png",
                id: "user",
                alt: "user",
                style: {
                  margin: "auto",
                  width: "150px",
                  height: "150px"
                },
                className: "jsx-3678029609"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
              className: "jsx-3678029609"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
              className: "jsx-3678029609",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
                className: "jsx-3678029609",
                children: "QUALITY ASSURANCE PORTAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
              className: "jsx-3678029609",
              children: "University of the Philippines Manila"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
              className: "jsx-3678029609"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              id: "login",
              className: "jsx-3678029609",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Formik, {
                initialValues: loginDetails,
                onSubmit: /*#__PURE__*/function () {
                  var _ref = (0,C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {
                    var token, tokenRes, role, alert;
                    return C_Users_nicho_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;
                            token = null;
                            _context.next = 4;
                            return axios__WEBPACK_IMPORTED_MODULE_8___default().post("http://localhost:3001/api" + "/login", {
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
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "jsx-3678029609" + " " + "login-form",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Form, {
                      action: "",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
                        type: "email",
                        placeholder: "UP Mail",
                        id: "username",
                        name: "username"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 17
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
                        type: "password",
                        placeholder: "Password",
                        id: "password",
                        name: "password"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 17
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
                        className: "jsx-3678029609"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 17
                      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
                        className: "jsx-3678029609"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 24
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                        className: "jsx-3678029609" + " " + "forget-pass",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                          href: "#",
                          className: "jsx-3678029609",
                          children: "Forgot Password"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 91,
                          columnNumber: 19
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 17
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {
                        className: "jsx-3678029609"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 17
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "jsx-3678029609" + " " + "test",
                        children: "Login"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 94,
                        columnNumber: 17
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 15
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 13
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 2
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default()), {
      id: "3678029609",
      children: "#panel1.jsx-3678029609{background-image:'/upm.jpg';background-size:cover;background-color:#800020;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxccGFnZXNcXGxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHYSxBQUdtQyw0QkFDTixzQkFDRyx5QkFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsLVFBXFxwYWdlc1xcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcclxuXHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBsZXQgbG9naW5EZXRhaWxzID0ge1xyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9XHJcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCJcclxuXHJcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSlcclxuICAgIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICA8SGVhZD5cclxuICAgIDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcbiAgICBcclxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRVZTVFFOMy9henByRzFBbm0zUURncEpMSW05TmFvMFl6MXp0Y1FUd0ZzcGQzeUQ2NVZvaGhwdXVDT21MQVNqQ1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxyXG4gPC9IZWFkPlxyXG4gXHJcbiA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBpZD1cInBhbmVsMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29waWNcIiBzdHlsZT17e3BhZGRpbmc6IFwiMjUlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyLnBuZ1wiIGlkPVwidXNlclwiIGFsdD1cInVzZXJcIiBzdHlsZT17e21hcmdpbjogXCJhdXRvXCIsIHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCIxNTBweFwifX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxoMj48Yj5RVUFMSVRZIEFTU1VSQU5DRSBQT1JUQUw8L2I+PC9oMj5cclxuICAgICAgICAgICAgPGg0PlVuaXZlcnNpdHkgb2YgdGhlIFBoaWxpcHBpbmVzIE1hbmlsYTwvaDQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9naW5cIj5cclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtsb2dpbkRldGFpbHN9XHJcbiAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW5SZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9sb2dpblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICB1cGVtYWlsOiBgJHt2YWx1ZXMudXNlcm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBgJHt2YWx1ZXMucGFzc3dvcmR9YFxyXG4gICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZih0b2tlblJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgIHNldENvb2tpZShcInVzZXJcIiwgdG9rZW5SZXMuZGF0YS5yZXN1bHQudG9rZW4sIHtcclxuICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIG1heEFnZTogMzYwMCwgLy8gRXhwaXJlcyBhZnRlciAxaHJcclxuICAgICAgICAgICAgICAgICAgICAgc2FtZVNpdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgdG9rZW4gPSBqd3QuZGVjb2RlKHRva2VuUmVzLmRhdGEucmVzdWx0LnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0b2tlbi5yb2xlXHJcbiAgICAgICAgICAgICAgICAgICBpZihyb2xlID09IDEpIHsgLy8gZmFjdWx0eSBcclxuICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb2xlID09IDIgfHwgcm9sZSA9PSAzKSB7IC8vIHVuaXQgaGVhZCBvciBkZXB0LiBjaGFpclxyXG4gICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHknKVxyXG4gICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHJvbGUgPT0gNSkgeyAvL2FkbWluXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbicpXHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnc29tZXRoaW5nIHdyb25nJylcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgIHZhbHVlcy51c2VybmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgdmFsdWVzLnBhc3N3b3JkPVwiXCJcclxuICAgICAgICAgICAgICAgICByZXR1cm4gZXJyXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgPnsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlVQIE1haWxcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9yZ2V0LXBhc3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Gb3Jnb3QgUGFzc3dvcmQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXN0XCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIDxzdHlsZSBqc3g+e2BcclxuICAgICNwYW5lbDF7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICcvdXBtLmpwZyc7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xyXG4gICAgfVxyXG5cdGB9PC9zdHlsZT5cclxuIDwvZGl2PlxyXG4gIFxyXG5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\pages\\\\login.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJsb2dpbkRldGFpbHMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwidXNlQ29va2llcyIsImNvb2tpZSIsInNldENvb2tpZSIsInBhZGRpbmciLCJoZWlnaHQiLCJtYXJnaW4iLCJ3aWR0aCIsInZhbHVlcyIsInRva2VuIiwiYXhpb3MiLCJwcm9jZXNzIiwidXBlbWFpbCIsInRva2VuUmVzIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJwYXRoIiwibWF4QWdlIiwic2FtZVNpdGUiLCJqd3QiLCJyb2xlIiwiUm91dGVyIiwid2luZG93IiwiYWxlcnQiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNwb25zZSIsImVycm9ycyIsIm1lc3NhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwidG91Y2hlZCIsImlzU3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDZixNQUFJQyxZQUFZLEdBQUc7QUFDakJDLFlBQVEsRUFBRSxFQURPO0FBRWpCQyxZQUFRLEVBQUU7QUFGTyxHQUFuQjtBQUlBLE1BQUlDLFlBQVksR0FBRyxFQUFuQjs7QUFMZSxvQkFPYUMseURBQVUsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQVB2QjtBQUFBO0FBQUEsTUFPUkMsTUFQUTtBQUFBLE1BT0FDLFNBUEE7O0FBUWIsc0JBQ0Y7QUFBQTtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBTSxZQUFJLEVBQUMseUVBQVg7QUFBcUYsV0FBRyxFQUFDLFlBQXpGO0FBQXNHLGlCQUFTLEVBQUMseUVBQWhIO0FBQTBMLG1CQUFXLEVBQUMsV0FBdE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQU9EO0FBQUEsMENBQWlCLEtBQWpCO0FBQUEsOEJBQ0s7QUFBMEIsVUFBRSxFQUFDLFFBQTdCO0FBQUEsNENBQWUsVUFBZjtBQUFBLCtCQUNFO0FBQUEsOENBQWUsS0FBZjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLFdBQVQ7QUFBeUMsaUJBQUssRUFBRTtBQUFDQyxxQkFBTyxFQUFFLEtBQVY7QUFBaUJDLG9CQUFNLEVBQUU7QUFBekIsYUFBaEQ7QUFBQSxnREFBK0I7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREwsZUFNSztBQUFBLDRDQUFlLFVBQWY7QUFBQSwrQkFDRTtBQUFBLDhDQUFlLE9BQWY7QUFBQSxpQ0FDRTtBQUFBLGdEQUFlLFdBQWY7QUFBQSxvQ0FDRTtBQUFBLGtEQUFlLEtBQWY7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUMsV0FBVDtBQUFxQixrQkFBRSxFQUFDLE1BQXhCO0FBQStCLG1CQUFHLEVBQUMsTUFBbkM7QUFBMEMscUJBQUssRUFBRTtBQUFDQyx3QkFBTSxFQUFFLE1BQVQ7QUFBaUJDLHVCQUFLLEVBQUUsT0FBeEI7QUFBaUNGLHdCQUFNLEVBQUU7QUFBekMsaUJBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBS0U7QUFBQTtBQUFBLHFDQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGLGVBUUU7QUFBSyxnQkFBRSxFQUFDLE9BQVI7QUFBQTtBQUFBLHFDQUNBLDhEQUFDLDBDQUFEO0FBQ0csNkJBQWEsRUFBRVIsWUFEbEI7QUFFRyx3QkFBUTtBQUFBLHFXQUFFLGlCQUFPVyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0pDLGlDQUhJLEdBR0ksSUFISjtBQUFBO0FBQUEsbUNBSWVDLGlEQUFBLENBQVdDLDJCQUFBLEdBQXNCLFFBQWpDLEVBQTJDO0FBQ2hFQyxxQ0FBTyxZQUFLSixNQUFNLENBQUNWLFFBQVosQ0FEeUQ7QUFFaEVDLHNDQUFRLFlBQUtTLE1BQU0sQ0FBQ1QsUUFBWjtBQUZ3RCw2QkFBM0MsQ0FKZjs7QUFBQTtBQUlGYyxvQ0FKRTs7QUFTUCxnQ0FBR0EsUUFBUSxDQUFDQyxJQUFULENBQWNDLE9BQWpCLEVBQTBCO0FBQ3pCWix1Q0FBUyxDQUFDLE1BQUQsRUFBU1UsUUFBUSxDQUFDQyxJQUFULENBQWNFLE1BQWQsQ0FBcUJQLEtBQTlCLEVBQXFDO0FBQzVDUSxvQ0FBSSxFQUFFLEdBRHNDO0FBRTVDQyxzQ0FBTSxFQUFFLElBRm9DO0FBRTlCO0FBQ2RDLHdDQUFRLEVBQUU7QUFIa0MsK0JBQXJDLENBQVQ7QUFLQVYsbUNBQUssR0FBR1csMkRBQUEsQ0FBV1AsUUFBUSxDQUFDQyxJQUFULENBQWNFLE1BQWQsQ0FBcUJQLEtBQWhDLENBQVI7QUFDSVksa0NBUHFCLEdBT2RaLEtBQUssQ0FBQ1ksSUFQUTs7QUFRekIsa0NBQUdBLElBQUksSUFBSSxDQUFYLEVBQWM7QUFBRTtBQUNkQyx1RkFBQSxDQUFZLHFCQUFaO0FBQ0QsK0JBRkQsTUFFTyxJQUFJRCxJQUFJLElBQUksQ0FBUixJQUFhQSxJQUFJLElBQUksQ0FBekIsRUFBNEI7QUFBRTtBQUNuQ0MsdUZBQUEsQ0FBWSxVQUFaO0FBQ0QsK0JBRk0sTUFFQSxJQUFHRCxJQUFJLElBQUksQ0FBWCxFQUFjO0FBQUU7QUFDdEJDLHVGQUFBLENBQVksUUFBWjtBQUNBO0FBQ0YsNkJBZkEsTUFlTTtBQUNMQyxvQ0FBTSxDQUFDQyxLQUFQLENBQWEsaUJBQWI7QUFDRDs7QUExQk87QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE0QlJDLG1DQUFPLENBQUNDLEtBQVIsQ0FBYyxZQUFJQyxRQUFKLENBQWFiLElBQWIsQ0FBa0JjLE1BQWxCLENBQXlCLENBQXpCLEVBQTRCQyxPQUExQztBQUNBN0Isd0NBQVksR0FBRyxZQUFJMkIsUUFBSixDQUFhYixJQUFiLENBQWtCYyxNQUFsQixDQUF5QixDQUF6QixFQUE0QkMsT0FBM0M7QUFDSUwsaUNBOUJJLEdBOEJJTSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0E5Qko7QUErQlJQLGlDQUFLLENBQUNRLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIscUJBQTVCO0FBQ0F4QixrQ0FBTSxDQUFDVixRQUFQLEdBQWdCLEVBQWhCO0FBQ0FVLGtDQUFNLENBQUNULFFBQVAsR0FBZ0IsRUFBaEI7QUFqQ1E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlg7QUFBQSwwQkF1Q0M7QUFBQSxzQkFBR1MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsc0JBQVdvQixNQUFYLFNBQVdBLE1BQVg7QUFBQSxzQkFBbUJLLE9BQW5CLFNBQW1CQSxPQUFuQjtBQUFBLHNCQUE0QkMsWUFBNUIsU0FBNEJBLFlBQTVCO0FBQUEsc0NBRUQ7QUFBQSx3REFBZSxZQUFmO0FBQUEsMkNBQ0UsOERBQUMsd0NBQUQ7QUFBTSw0QkFBTSxFQUFDLEVBQWI7QUFBQSw4Q0FFRSw4REFBQyx5Q0FBRDtBQUFPLDRCQUFJLEVBQUMsT0FBWjtBQUFvQixtQ0FBVyxFQUFDLFNBQWhDO0FBQTBDLDBCQUFFLEVBQUMsVUFBN0M7QUFBd0QsNEJBQUksRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGLGVBR0UsOERBQUMseUNBQUQ7QUFBTyw0QkFBSSxFQUFDLFVBQVo7QUFBdUIsbUNBQVcsRUFBQyxVQUFuQztBQUE4QywwQkFBRSxFQUFDLFVBQWpEO0FBQTRELDRCQUFJLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUpGLG9CQUlTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUpULGVBS0U7QUFBQSw0REFBZSxhQUFmO0FBQUEsK0NBQ0U7QUFBRyw4QkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTEYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFSRixlQVNFO0FBQXlCLDRCQUFJLEVBQUMsUUFBOUI7QUFBdUMsZ0NBQVEsRUFBRUEsWUFBakQ7QUFBQSw0REFBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGQztBQUFBO0FBdkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREU7QUFrR0Q7O0dBMUdNdEMsSztVQU9xQksscUQ7OztLQVByQkwsSztBQTRHUCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi45NmZmZGMxNzc1N2FkN2ZlZDM1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiXHJcblxyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgbGV0IGxvZ2luRGV0YWlscyA9IHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfVxyXG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiXHJcblxyXG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pXHJcbiAgICByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgPEhlYWQ+XHJcbiAgICA8dGl0bGU+RFBTTS1RQS1QT1JUQUw8L3RpdGxlPlxyXG4gICAgXHJcbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LUVWU1RRTjMvYXpwckcxQW5tM1FEZ3BKTEltOU5hbzBZejF6dGNRVHdGc3BkM3lENjVWb2hocHV1Q09tTEFTakNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cclxuIDwvSGVhZD5cclxuIFxyXG4gPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIgaWQ9XCJwYW5lbDFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJsb2dvcGljXCIgc3R5bGU9e3twYWRkaW5nOiBcIjI1JVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXNlci5wbmdcIiBpZD1cInVzZXJcIiBhbHQ9XCJ1c2VyXCIgc3R5bGU9e3ttYXJnaW46IFwiYXV0b1wiLCB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8aDI+PGI+UVVBTElUWSBBU1NVUkFOQ0UgUE9SVEFMPC9iPjwvaDI+XHJcbiAgICAgICAgICAgIDxoND5Vbml2ZXJzaXR5IG9mIHRoZSBQaGlsaXBwaW5lcyBNYW5pbGE8L2g0PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17bG9naW5EZXRhaWxzfVxyXG4gICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvbG9naW5cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgdXBlbWFpbDogYCR7dmFsdWVzLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogYCR7dmFsdWVzLnBhc3N3b3JkfWBcclxuICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgaWYodG9rZW5SZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJ1c2VyXCIsIHRva2VuUmVzLmRhdGEucmVzdWx0LnRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICBtYXhBZ2U6IDM2MDAsIC8vIEV4cGlyZXMgYWZ0ZXIgMWhyXHJcbiAgICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgIHRva2VuID0gand0LmRlY29kZSh0b2tlblJlcy5kYXRhLnJlc3VsdC50b2tlbilcclxuICAgICAgICAgICAgICAgICAgIGxldCByb2xlID0gdG9rZW4ucm9sZVxyXG4gICAgICAgICAgICAgICAgICAgaWYocm9sZSA9PSAxKSB7IC8vIGZhY3VsdHkgXHJcbiAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm9sZSA9PSAyIHx8IHJvbGUgPT0gMykgeyAvLyB1bml0IGhlYWQgb3IgZGVwdC4gY2hhaXJcclxuICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5JylcclxuICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyb2xlID09IDUpIHsgLy9hZG1pblxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4nKVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ3NvbWV0aGluZyB3cm9uZycpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICB2YWx1ZXMudXNlcm5hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgIHZhbHVlcy5wYXNzd29yZD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGVyclxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgID57KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJVUCBNYWlsXCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcmdldC1wYXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Rm9yZ290IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGVzdFwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gPC9kaXY+XHJcbiA8c3R5bGUganN4PntgXHJcbiAgICAjcGFuZWwxe1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAnL3VwbS5qcGcnO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDAyMDtcclxuICAgIH1cclxuXHRgfTwvc3R5bGU+XHJcbiA8L2Rpdj5cclxuICBcclxuXHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExvZ2luXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=