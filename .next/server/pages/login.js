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

var _jsxFileName = "D:\\nicho\\Documents\\GitHub\\dpsm-qa-portal\\pages\\login.js";









function Login() {
  let loginDetails = {
    username: "",
    password: ""
  };
  let errorMessage = "";
  const [cookie, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_8__.useCookies)(["user"]);
  return (
    /*#__PURE__*/
    //       <div className = "d-flex justify-content-center" style = {{ backgroundImage: "url(../kbblur.jpg)" }}>
    // 	<Head>
    //               <title>DPSM-QA-PORTAL</title>
    //               {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
    //               <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    //               <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    //               <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    //               <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    //           </Head>
    // <div className = "jumbotron" id = "logo">
    // 	<h3> DPSM QA PORTAL <br /> <br /></h3>
    // 	<br />
    // 	<br />
    // 	<center><img src="/dpsm-seal.png" width="142" height="115" alt="DPSM-QA-Portal" /></center>
    // 	<br />
    // 	<br />
    // 	<br />
    // 	<br />
    // </div>
    // <div className = "jumbotron" id = "login">
    //         <Formik
    //           initialValues={loginDetails}
    //           onSubmit={async (values) => {
    //             try {
    //               let token = null
    //               const tokenRes = await axios.post(process.env.API_URL + "/login", {
    //                 upemail: `${values.username}`,
    //                 password: `${values.password}`
    //               })
    //               if(tokenRes.data.success) {
    //                 setCookie("user", tokenRes.data.result.token, {
    //                   path: "/",
    //                   maxAge: 3600, // Expires after 1hr
    //                   sameSite: true,
    //                 })
    //                 token = jwt.decode(tokenRes.data.result.token)
    //                 let role = token.role
    //                 if(role == 1) { // faculty 
    //                   Router.push('/faculty/basic-info')
    //                 } else if (role == 2 || role == 3) { // unit head or dept. chair
    //                   Router.push('/faculty')
    //                 } else if(role == 5) { //admin
    //                   Router.push('/admin')
    //                 }
    //               } else {
    //                 window.alert('something wrong')
    //               }
    //             } catch (err) {
    //               console.error(err.response.data.errors[0].message)
    //               errorMessage = err.response.data.errors[0].message
    //               let alert = document.getElementById("alert")
    //               alert.setAttribute("style", "visibility: visible");
    //               values.username=""
    //               values.password=""
    //               return err
    //             }
    //           }}
    //         >
    //           {({ values, errors, touched, isSubmitting }) => (
    //             <Form action="">
    //               <div className="alert alert-danger" role="alert" id="alert">
    //                 {errorMessage}
    //               </div>
    //               <label htmlFor="email">UP Email:</label>
    //               <Field className = "form-control" type="text" id="username" name="username" />
    //               <label htmlFor="password">Password:</label>
    //               <Field className = "form-control" type="password" id="password" name="password" />
    // 	            <br />
    // 	<Link href = "/forgot-password"><a href = "#">Forgot Password?</a></Link>
    // 	<br />
    // 	<br />
    //               <button
    //                 type = "submit"
    //                 className = "btn btn-primary"
    //                 disabled = {isSubmitting}
    //               >
    //                 Submit
    //               </button>
    //               {/*<Link href="/faculty"><input type="submit" className = "btn btn-primary" value="Login"></input></Link>*/}
    //             </Form>
    //           )}
    //         </Formik>
    // </div>
    // <style jsx>{`
    // 	.d-flex{
    // 		min-height: 100%;
    // 			min-height: 100vh; 
    // 			display: flex;
    // 			align-items: center;
    // 	}
    // 	.jumbotron#login{
    // 		background-color:#600;
    // 	}
    // 	.jumbotron#logo{
    // 		background-color: #01942b;
    // 	}
    // 	label{
    // 		color:#fff;
    // 	}
    //   #alert {
    //     visibility: hidden;
    //   }
    // `}</style>
    //       </div>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3678029609",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          className: "jsx-3678029609",
          children: "DPSM-QA-PORTAL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "/style.css",
          className: "jsx-3678029609"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossorigin: "anonymous",
          className: "jsx-3678029609"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
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
              lineNumber: 137,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
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
                  lineNumber: 144,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                className: "jsx-3678029609"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "jsx-3678029609",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  className: "jsx-3678029609",
                  children: "QUALITY ASSURANCE PORTAL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                className: "jsx-3678029609",
                children: "University of the Philippines Manila"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                className: "jsx-3678029609"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "jsx-3678029609" + " " + "login-form",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                  action: "",
                  className: "jsx-3678029609",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "email",
                    placeholder: "UP Mail",
                    className: "jsx-3678029609"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "password",
                    placeholder: "Password",
                    className: "jsx-3678029609"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                    className: "jsx-3678029609"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 17
                  }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                    className: "jsx-3678029609"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 24
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "jsx-3678029609" + " " + "forget-pass",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      className: "jsx-3678029609",
                      children: "Forgot Password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                    className: "jsx-3678029609"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    type: "submit",
                    className: "jsx-3678029609" + " " + "test",
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 2
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "3678029609",
        children: "#panel1.jsx-3678029609{background-image:'/upm.jpg';background-size:cover;background-color:#800020;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsXFxwYWdlc1xcbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0thLEFBR21DLDRCQUNOLHNCQUNHLHlCQUMzQiIsImZpbGUiOiJEOlxcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbFxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiXHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBsZXQgbG9naW5EZXRhaWxzID0ge1xyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9XHJcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCJcclxuXHJcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSlcclxuICAgIHJldHVybiAoXHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGUgPSB7eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC4uL2tiYmx1ci5qcGcpXCIgfX0+XHJcblx0Ly8gXHQ8SGVhZD5cclxuICAvLyAgICAgICAgICAgICAgIDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcbiAgLy8gICAgICAgICAgICAgICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPiAqL31cclxuICAvLyAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAvLyAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy41LjEvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gIC8vICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNi4wL3VtZC9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgLy8gICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAvLyAgICAgICAgICAgPC9IZWFkPlxyXG5cdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwibG9nb1wiPlxyXG5cdC8vIFx0PGgzPiBEUFNNIFFBIFBPUlRBTCA8YnIgLz4gPGJyIC8+PC9oMz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8Y2VudGVyPjxpbWcgc3JjPVwiL2Rwc20tc2VhbC5wbmdcIiB3aWR0aD1cIjE0MlwiIGhlaWdodD1cIjExNVwiIGFsdD1cIkRQU00tUUEtUG9ydGFsXCIgLz48L2NlbnRlcj5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIDwvZGl2PlxyXG5cdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwibG9naW5cIj5cclxuICAvLyAgICAgICAgIDxGb3JtaWtcclxuICAvLyAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17bG9naW5EZXRhaWxzfVxyXG4gIC8vICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAvLyAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG51bGxcclxuICAvLyAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvbG9naW5cIiwge1xyXG4gIC8vICAgICAgICAgICAgICAgICB1cGVtYWlsOiBgJHt2YWx1ZXMudXNlcm5hbWV9YCxcclxuICAvLyAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGAke3ZhbHVlcy5wYXNzd29yZH1gXHJcbiAgLy8gICAgICAgICAgICAgICB9KVxyXG5cclxuICAvLyAgICAgICAgICAgICAgIGlmKHRva2VuUmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gIC8vICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJ1c2VyXCIsIHRva2VuUmVzLmRhdGEucmVzdWx0LnRva2VuLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbWF4QWdlOiAzNjAwLCAvLyBFeHBpcmVzIGFmdGVyIDFoclxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiB0cnVlLFxyXG4gIC8vICAgICAgICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAgICAgICB0b2tlbiA9IGp3dC5kZWNvZGUodG9rZW5SZXMuZGF0YS5yZXN1bHQudG9rZW4pXHJcbiAgLy8gICAgICAgICAgICAgICAgIGxldCByb2xlID0gdG9rZW4ucm9sZVxyXG4gIC8vICAgICAgICAgICAgICAgICBpZihyb2xlID09IDEpIHsgLy8gZmFjdWx0eSBcclxuICAvLyAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcbiAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm9sZSA9PSAyIHx8IHJvbGUgPT0gMykgeyAvLyB1bml0IGhlYWQgb3IgZGVwdC4gY2hhaXJcclxuICAvLyAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHknKVxyXG4gIC8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYocm9sZSA9PSA1KSB7IC8vYWRtaW5cclxuICAvLyAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluJylcclxuICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdzb21ldGhpbmcgd3JvbmcnKVxyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gIC8vICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZSlcclxuICAvLyAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5tZXNzYWdlXHJcbiAgLy8gICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcbiAgLy8gICAgICAgICAgICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcbiAgLy8gICAgICAgICAgICAgICB2YWx1ZXMudXNlcm5hbWU9XCJcIlxyXG4gIC8vICAgICAgICAgICAgICAgdmFsdWVzLnBhc3N3b3JkPVwiXCJcclxuICAvLyAgICAgICAgICAgICAgIHJldHVybiBlcnJcclxuICAvLyAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgIH19XHJcbiAgLy8gICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAvLyAgICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCJcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJhbGVydFwiPlxyXG4gIC8vICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxyXG4gIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+VVAgRW1haWw6PC9sYWJlbD5cclxuICAvLyAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAvLyAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gIC8vICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcblx0Ly8gXHQgICAgICAgICAgICA8YnIgLz5cclxuXHQvLyBcdDxMaW5rIGhyZWYgPSBcIi9mb3Jnb3QtcGFzc3dvcmRcIj48YSBocmVmID0gXCIjXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT48L0xpbms+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG4gIC8vICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gIC8vICAgICAgICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxyXG4gIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAvLyAgICAgICAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgLy8gICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAvLyAgICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvZmFjdWx0eVwiPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT1cIkxvZ2luXCI+PC9pbnB1dD48L0xpbms+Ki99XHJcbiAgLy8gICAgICAgICAgICAgPC9Gb3JtPlxyXG4gIC8vICAgICAgICAgICApfVxyXG4gIC8vICAgICAgICAgPC9Gb3JtaWs+XHJcblx0Ly8gPC9kaXY+XHJcblx0XHJcblx0Ly8gPHN0eWxlIGpzeD57YFxyXG5cdC8vIFx0LmQtZmxleHtcclxuXHQvLyBcdFx0bWluLWhlaWdodDogMTAwJTtcclxuICAvLyBcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDsgXHJcblxyXG4gIC8vIFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jbG9naW57XHJcblx0Ly8gXHRcdGJhY2tncm91bmQtY29sb3I6IzYwMDtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jbG9nb3tcclxuXHQvLyBcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxOTQyYjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdGxhYmVse1xyXG5cdC8vIFx0XHRjb2xvcjojZmZmO1xyXG5cdC8vIFx0fVxyXG4gIC8vICAgI2FsZXJ0IHtcclxuICAvLyAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC8vICAgfVxyXG5cdC8vIGB9PC9zdHlsZT5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gIDxIZWFkPlxyXG4gICAgPHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSAnL3N0eWxlLmNzcyc+PC9saW5rPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC1FVlNUUU4zL2F6cHJHMUFubTNRRGdwSkxJbTlOYW8wWXoxenRjUVR3RnNwZDN5RDY1Vm9oaHB1dUNPbUxBU2pDXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbiA8L0hlYWQ+XHJcbiBcclxuIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGlkPVwicGFuZWwxXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nb3BpY1wiIHN0eWxlPXt7cGFkZGluZzogXCIyNSVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIucG5nXCIgaWQ9XCJ1c2VyXCIgYWx0PVwidXNlclwiIHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgd2lkdGg6IFwiMTUwcHhcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGgyPjxiPlFVQUxJVFkgQVNTVVJBTkNFIFBPUlRBTDwvYj48L2gyPlxyXG4gICAgICAgICAgICA8aDQ+VW5pdmVyc2l0eSBvZiB0aGUgUGhpbGlwcGluZXMgTWFuaWxhPC9oND5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlVQIE1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcmdldC1wYXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Rm9yZ290IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGVzdFwiIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIDxzdHlsZSBqc3g+e2BcclxuICAgICNwYW5lbDF7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICcvdXBtLmpwZyc7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xyXG4gICAgfVxyXG5cdGB9PC9zdHlsZT5cclxuIDwvZGl2PlxyXG4gIFxyXG5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl19 */\n/*@ sourceURL=D:\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal\\\\pages\\\\login.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 3
    }, this)
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvaWdub3JlZHxEOlxcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkxvZ2luIiwibG9naW5EZXRhaWxzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVycm9yTWVzc2FnZSIsImNvb2tpZSIsInNldENvb2tpZSIsInVzZUNvb2tpZXMiLCJwYWRkaW5nIiwiaGVpZ2h0IiwibWFyZ2luIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNmLE1BQUlDLFlBQVksR0FBRztBQUNqQkMsWUFBUSxFQUFFLEVBRE87QUFFakJDLFlBQVEsRUFBRTtBQUZPLEdBQW5CO0FBSUEsTUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBRUEsUUFBTSxDQUFDQyxNQUFELEVBQVNDLFNBQVQsSUFBc0JDLHdEQUFVLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBdEM7QUFDRTtBQUFBO0FBQ0Y7QUFDRDtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUVBO0FBQ0E7QUFDQTtBQUNDO0FBRUE7QUFD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QUEsMEJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE5R0U7QUFpS0Q7O0FBRUQsK0RBQWVULEtBQWYsRTs7Ozs7Ozs7Ozs7QUNuTEYsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiXHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBsZXQgbG9naW5EZXRhaWxzID0ge1xyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9XHJcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCJcclxuXHJcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSlcclxuICAgIHJldHVybiAoXHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGUgPSB7eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC4uL2tiYmx1ci5qcGcpXCIgfX0+XHJcblx0Ly8gXHQ8SGVhZD5cclxuICAvLyAgICAgICAgICAgICAgIDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcbiAgLy8gICAgICAgICAgICAgICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPiAqL31cclxuICAvLyAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAvLyAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy41LjEvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gIC8vICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNi4wL3VtZC9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgLy8gICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAvLyAgICAgICAgICAgPC9IZWFkPlxyXG5cdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwibG9nb1wiPlxyXG5cdC8vIFx0PGgzPiBEUFNNIFFBIFBPUlRBTCA8YnIgLz4gPGJyIC8+PC9oMz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8Y2VudGVyPjxpbWcgc3JjPVwiL2Rwc20tc2VhbC5wbmdcIiB3aWR0aD1cIjE0MlwiIGhlaWdodD1cIjExNVwiIGFsdD1cIkRQU00tUUEtUG9ydGFsXCIgLz48L2NlbnRlcj5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIDwvZGl2PlxyXG5cdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwibG9naW5cIj5cclxuICAvLyAgICAgICAgIDxGb3JtaWtcclxuICAvLyAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17bG9naW5EZXRhaWxzfVxyXG4gIC8vICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAvLyAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG51bGxcclxuICAvLyAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvbG9naW5cIiwge1xyXG4gIC8vICAgICAgICAgICAgICAgICB1cGVtYWlsOiBgJHt2YWx1ZXMudXNlcm5hbWV9YCxcclxuICAvLyAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGAke3ZhbHVlcy5wYXNzd29yZH1gXHJcbiAgLy8gICAgICAgICAgICAgICB9KVxyXG5cclxuICAvLyAgICAgICAgICAgICAgIGlmKHRva2VuUmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gIC8vICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJ1c2VyXCIsIHRva2VuUmVzLmRhdGEucmVzdWx0LnRva2VuLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbWF4QWdlOiAzNjAwLCAvLyBFeHBpcmVzIGFmdGVyIDFoclxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiB0cnVlLFxyXG4gIC8vICAgICAgICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAgICAgICB0b2tlbiA9IGp3dC5kZWNvZGUodG9rZW5SZXMuZGF0YS5yZXN1bHQudG9rZW4pXHJcbiAgLy8gICAgICAgICAgICAgICAgIGxldCByb2xlID0gdG9rZW4ucm9sZVxyXG4gIC8vICAgICAgICAgICAgICAgICBpZihyb2xlID09IDEpIHsgLy8gZmFjdWx0eSBcclxuICAvLyAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcbiAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm9sZSA9PSAyIHx8IHJvbGUgPT0gMykgeyAvLyB1bml0IGhlYWQgb3IgZGVwdC4gY2hhaXJcclxuICAvLyAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHknKVxyXG4gIC8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYocm9sZSA9PSA1KSB7IC8vYWRtaW5cclxuICAvLyAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluJylcclxuICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdzb21ldGhpbmcgd3JvbmcnKVxyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gIC8vICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZSlcclxuICAvLyAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5tZXNzYWdlXHJcbiAgLy8gICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcbiAgLy8gICAgICAgICAgICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcbiAgLy8gICAgICAgICAgICAgICB2YWx1ZXMudXNlcm5hbWU9XCJcIlxyXG4gIC8vICAgICAgICAgICAgICAgdmFsdWVzLnBhc3N3b3JkPVwiXCJcclxuICAvLyAgICAgICAgICAgICAgIHJldHVybiBlcnJcclxuICAvLyAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgIH19XHJcbiAgLy8gICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAvLyAgICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCJcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJhbGVydFwiPlxyXG4gIC8vICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxyXG4gIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+VVAgRW1haWw6PC9sYWJlbD5cclxuICAvLyAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAvLyAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gIC8vICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcblx0Ly8gXHQgICAgICAgICAgICA8YnIgLz5cclxuXHQvLyBcdDxMaW5rIGhyZWYgPSBcIi9mb3Jnb3QtcGFzc3dvcmRcIj48YSBocmVmID0gXCIjXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT48L0xpbms+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG4gIC8vICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gIC8vICAgICAgICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxyXG4gIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAvLyAgICAgICAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgLy8gICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAvLyAgICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvZmFjdWx0eVwiPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT1cIkxvZ2luXCI+PC9pbnB1dD48L0xpbms+Ki99XHJcbiAgLy8gICAgICAgICAgICAgPC9Gb3JtPlxyXG4gIC8vICAgICAgICAgICApfVxyXG4gIC8vICAgICAgICAgPC9Gb3JtaWs+XHJcblx0Ly8gPC9kaXY+XHJcblx0XHJcblx0Ly8gPHN0eWxlIGpzeD57YFxyXG5cdC8vIFx0LmQtZmxleHtcclxuXHQvLyBcdFx0bWluLWhlaWdodDogMTAwJTtcclxuICAvLyBcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDsgXHJcblxyXG4gIC8vIFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jbG9naW57XHJcblx0Ly8gXHRcdGJhY2tncm91bmQtY29sb3I6IzYwMDtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jbG9nb3tcclxuXHQvLyBcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxOTQyYjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdGxhYmVse1xyXG5cdC8vIFx0XHRjb2xvcjojZmZmO1xyXG5cdC8vIFx0fVxyXG4gIC8vICAgI2FsZXJ0IHtcclxuICAvLyAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC8vICAgfVxyXG5cdC8vIGB9PC9zdHlsZT5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gIDxIZWFkPlxyXG4gICAgPHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSAnL3N0eWxlLmNzcyc+PC9saW5rPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC1FVlNUUU4zL2F6cHJHMUFubTNRRGdwSkxJbTlOYW8wWXoxenRjUVR3RnNwZDN5RDY1Vm9oaHB1dUNPbUxBU2pDXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbiA8L0hlYWQ+XHJcbiBcclxuIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGlkPVwicGFuZWwxXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nb3BpY1wiIHN0eWxlPXt7cGFkZGluZzogXCIyNSVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VzZXIucG5nXCIgaWQ9XCJ1c2VyXCIgYWx0PVwidXNlclwiIHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgd2lkdGg6IFwiMTUwcHhcIiwgaGVpZ2h0OiBcIjE1MHB4XCJ9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGgyPjxiPlFVQUxJVFkgQVNTVVJBTkNFIFBPUlRBTDwvYj48L2gyPlxyXG4gICAgICAgICAgICA8aDQ+VW5pdmVyc2l0eSBvZiB0aGUgUGhpbGlwcGluZXMgTWFuaWxhPC9oND5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlVQIE1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcmdldC1wYXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Rm9yZ290IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGVzdFwiIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIDxzdHlsZSBqc3g+e2BcclxuICAgICNwYW5lbDF7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICcvdXBtLmpwZyc7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xyXG4gICAgfVxyXG5cdGB9PC9zdHlsZT5cclxuIDwvZGl2PlxyXG4gIFxyXG5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9