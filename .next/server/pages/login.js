(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\login.js";









function Login() {
  let loginDetails = {
    username: "",
    password: ""
  };
  let errorMessage = "";
  const [cookie, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_8__.useCookies)(["user"]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3678029609",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: "jsx-3678029609",
        children: "DPSM-QA-PORTAL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/style.css",
        className: "jsx-3678029609"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
        crossorigin: "anonymous",
        className: "jsx-3678029609"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3678029609" + " " + "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "panel1",
        className: "jsx-3678029609" + " " + "col-md-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-3678029609" + " " + "img",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/logo.png",
            style: {
              padding: "25%",
              height: "100%"
            },
            className: "jsx-3678029609" + " " + "logopic"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-3678029609" + " " + "col-md-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-3678029609" + " " + "login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-3678029609" + " " + "container",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-3678029609" + " " + "img",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
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
                lineNumber: 35,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
              className: "jsx-3678029609"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "jsx-3678029609",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "jsx-3678029609",
                children: "QUALITY ASSURANCE PORTAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              className: "jsx-3678029609",
              children: "University of the Philippines Manila"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
              className: "jsx-3678029609"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              id: "login",
              className: "jsx-3678029609",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
                initialValues: loginDetails,
                onSubmit: async values => {
                  try {
                    let token = null;
                    const tokenRes = await axios__WEBPACK_IMPORTED_MODULE_5___default().post("http://localhost:3001/api" + "/login", {
                      upemail: `${values.username}`,
                      password: `${values.password}`
                    });

                    if (tokenRes.data.success) {
                      setCookie("user", tokenRes.data.result.token, {
                        path: "/",
                        maxAge: 3600,
                        // Expires after 1hr
                        sameSite: true
                      });
                      token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default().decode(tokenRes.data.result.token);
                      let role = token.role;

                      if (role == 1) {
                        // faculty 
                        next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/faculty/basic-info');
                      } else if (role == 2 || role == 3) {
                        // unit head or dept. chair
                        next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/faculty');
                      } else if (role == 5) {//admin
                      }
                    } else {
                      window.alert('something wrong');
                    }
                  } catch (err) {
                    console.error(err.response.data.errors[0].message);
                    errorMessage = err.response.data.errors[0].message;
                    let alert = document.getElementById("alert");
                    alert.setAttribute("style", "visibility: visible");
                    values.username = "";
                    values.password = "";
                    return err;
                  }
                },
                children: ({
                  values,
                  errors,
                  touched,
                  isSubmitting
                }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "jsx-3678029609" + " " + "login-form",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
                    action: "",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                      type: "email",
                      placeholder: "UP Mail",
                      id: "username",
                      name: "username"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 17
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                      type: "password",
                      placeholder: "Password",
                      id: "password",
                      name: "password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 17
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                      className: "jsx-3678029609"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 17
                    }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                      className: "jsx-3678029609"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 24
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "jsx-3678029609" + " " + "forget-pass",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: "#",
                        className: "jsx-3678029609",
                        children: "Forgot Password"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 17
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                      className: "jsx-3678029609"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 17
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                      type: "submit",
                      disabled: isSubmitting,
                      className: "jsx-3678029609" + " " + "test",
                      children: "Login"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 17
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 2
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3678029609",
      children: "#panel1.jsx-3678029609{background-image:'/upm.jpg';background-size:cover;background-color:#800020;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxccGFnZXNcXGxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNHYSxBQUdtQyw0QkFDTixzQkFDRyx5QkFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsLVFBXFxwYWdlc1xcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGxldCBsb2dpbkRldGFpbHMgPSB7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH1cclxuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJcIlxyXG5cclxuICBjb25zdCBbY29va2llLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbXCJ1c2VyXCJdKVxyXG4gICAgcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gIDxIZWFkPlxyXG4gICAgPHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSAnL3N0eWxlLmNzcyc+PC9saW5rPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC1FVlNUUU4zL2F6cHJHMUFubTNRRGdwSkxJbTlOYW8wWXoxenRjUVR3RnNwZDN5RDY1Vm9oaHB1dUNPbUxBU2pDXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbiA8L0hlYWQ+XHJcbiBcclxuIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGlkPVwicGFuZWwxXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nb3BpY1wiIHN0eWxlPXt7cGFkZGluZzogXCIyNSVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIucG5nXCIgaWQ9XCJ1c2VyXCIgYWx0PVwidXNlclwiIHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgd2lkdGg6IFwiMTUwcHhcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGgyPjxiPlFVQUxJVFkgQVNTVVJBTkNFIFBPUlRBTDwvYj48L2gyPlxyXG4gICAgICAgICAgICA8aDQ+VW5pdmVyc2l0eSBvZiB0aGUgUGhpbGlwcGluZXMgTWFuaWxhPC9oND5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2xvZ2luRGV0YWlsc31cclxuICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG51bGxcclxuICAgICAgICAgICAgICAgICBjb25zdCB0b2tlblJlcyA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL2xvZ2luXCIsIHtcclxuICAgICAgICAgICAgICAgICAgIHVwZW1haWw6IGAke3ZhbHVlcy51c2VybmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGAke3ZhbHVlcy5wYXNzd29yZH1gXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmKHRva2VuUmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwidXNlclwiLCB0b2tlblJlcy5kYXRhLnJlc3VsdC50b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICAgICAgICAgICAgICAgbWF4QWdlOiAzNjAwLCAvLyBFeHBpcmVzIGFmdGVyIDFoclxyXG4gICAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICB0b2tlbiA9IGp3dC5kZWNvZGUodG9rZW5SZXMuZGF0YS5yZXN1bHQudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRva2VuLnJvbGVcclxuICAgICAgICAgICAgICAgICAgIGlmKHJvbGUgPT0gMSkgeyAvLyBmYWN1bHR5IFxyXG4gICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcbiAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvbGUgPT0gMiB8fCByb2xlID09IDMpIHsgLy8gdW5pdCBoZWFkIG9yIGRlcHQuIGNoYWlyXHJcbiAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eScpXHJcbiAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYocm9sZSA9PSA1KSB7IC8vYWRtaW5cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdzb21ldGhpbmcgd3JvbmcnKVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAgdmFsdWVzLnVzZXJuYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICB2YWx1ZXMucGFzc3dvcmQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgIHJldHVybiBlcnJcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfX1cclxuICAgICAgICAgICA+eyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiVVAgTWFpbFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JnZXQtcGFzc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZvcmdvdCBQYXNzd29yZDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRlc3RcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuIDwvZGl2PlxyXG4gPHN0eWxlIGpzeD57YFxyXG4gICAgI3BhbmVsMXtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogJy91cG0uanBnJztcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMjA7XHJcbiAgICB9XHJcblx0YH08L3N0eWxlPlxyXG4gPC9kaXY+XHJcbiAgXHJcblxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\pages\\\\login.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/login.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvaWdub3JlZHxDOlxcVXNlcnNcXG5pY2hvXFxEb2N1bWVudHNcXEdpdEh1YlxcZHBzbS1xYS1wb3J0YWwtUUFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJMb2dpbiIsImxvZ2luRGV0YWlscyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJjb29raWUiLCJzZXRDb29raWUiLCJ1c2VDb29raWVzIiwicGFkZGluZyIsImhlaWdodCIsIm1hcmdpbiIsIndpZHRoIiwidmFsdWVzIiwidG9rZW4iLCJ0b2tlblJlcyIsImF4aW9zIiwicHJvY2VzcyIsInVwZW1haWwiLCJkYXRhIiwic3VjY2VzcyIsInJlc3VsdCIsInBhdGgiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsImp3dCIsInJvbGUiLCJSb3V0ZXIiLCJ3aW5kb3ciLCJhbGVydCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwiZXJyb3JzIiwibWVzc2FnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZixNQUFJQyxZQUFZLEdBQUc7QUFDakJDLFlBQVEsRUFBRSxFQURPO0FBRWpCQyxZQUFRLEVBQUU7QUFGTyxHQUFuQjtBQUlBLE1BQUlDLFlBQVksR0FBRyxFQUFuQjtBQUVBLFFBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULElBQXNCQyx3REFBVSxDQUFDLENBQUMsTUFBRCxDQUFELENBQXRDO0FBQ0Usc0JBQ0Y7QUFBQTtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUUsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixl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Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGxldCBsb2dpbkRldGFpbHMgPSB7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH1cclxuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJcIlxyXG5cclxuICBjb25zdCBbY29va2llLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbXCJ1c2VyXCJdKVxyXG4gICAgcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gIDxIZWFkPlxyXG4gICAgPHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSAnL3N0eWxlLmNzcyc+PC9saW5rPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC1FVlNUUU4zL2F6cHJHMUFubTNRRGdwSkxJbTlOYW8wWXoxenRjUVR3RnNwZDN5RDY1Vm9oaHB1dUNPbUxBU2pDXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbiA8L0hlYWQ+XHJcbiBcclxuIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGlkPVwicGFuZWwxXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nb3BpY1wiIHN0eWxlPXt7cGFkZGluZzogXCIyNSVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIucG5nXCIgaWQ9XCJ1c2VyXCIgYWx0PVwidXNlclwiIHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgd2lkdGg6IFwiMTUwcHhcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGgyPjxiPlFVQUxJVFkgQVNTVVJBTkNFIFBPUlRBTDwvYj48L2gyPlxyXG4gICAgICAgICAgICA8aDQ+VW5pdmVyc2l0eSBvZiB0aGUgUGhpbGlwcGluZXMgTWFuaWxhPC9oND5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2xvZ2luRGV0YWlsc31cclxuICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG51bGxcclxuICAgICAgICAgICAgICAgICBjb25zdCB0b2tlblJlcyA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL2xvZ2luXCIsIHtcclxuICAgICAgICAgICAgICAgICAgIHVwZW1haWw6IGAke3ZhbHVlcy51c2VybmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGAke3ZhbHVlcy5wYXNzd29yZH1gXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmKHRva2VuUmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwidXNlclwiLCB0b2tlblJlcy5kYXRhLnJlc3VsdC50b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICAgICAgICAgICAgICAgbWF4QWdlOiAzNjAwLCAvLyBFeHBpcmVzIGFmdGVyIDFoclxyXG4gICAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICB0b2tlbiA9IGp3dC5kZWNvZGUodG9rZW5SZXMuZGF0YS5yZXN1bHQudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRva2VuLnJvbGVcclxuICAgICAgICAgICAgICAgICAgIGlmKHJvbGUgPT0gMSkgeyAvLyBmYWN1bHR5IFxyXG4gICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcbiAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvbGUgPT0gMiB8fCByb2xlID09IDMpIHsgLy8gdW5pdCBoZWFkIG9yIGRlcHQuIGNoYWlyXHJcbiAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eScpXHJcbiAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYocm9sZSA9PSA1KSB7IC8vYWRtaW5cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdzb21ldGhpbmcgd3JvbmcnKVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAgdmFsdWVzLnVzZXJuYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICB2YWx1ZXMucGFzc3dvcmQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgIHJldHVybiBlcnJcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfX1cclxuICAgICAgICAgICA+eyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiVVAgTWFpbFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JnZXQtcGFzc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZvcmdvdCBQYXNzd29yZDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRlc3RcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuIDwvZGl2PlxyXG4gPHN0eWxlIGpzeD57YFxyXG4gICAgI3BhbmVsMXtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogJy91cG0uanBnJztcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMjA7XHJcbiAgICB9XHJcblx0YH08L3N0eWxlPlxyXG4gPC9kaXY+XHJcbiAgXHJcblxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=