self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_nicho_Documents_GitHub_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\nicho\\Documents\\GitHub\\dpsm-qa-portal\\pages\\login.js",
    _s = $RefreshSig$();










function Login() {
  _s();

  var loginDetails = {
    username: "",
    password: ""
  };
  var errorMessage = "";

  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies)(["user"]),
      _useCookies2 = (0,D_nicho_Documents_GitHub_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useCookies, 2),
      cookie = _useCookies2[0],
      setCookie = _useCookies2[1];

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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
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
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "jsx-3678029609",
                children: "Quality Assurance Portal"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "jsx-3678029609",
                children: "University of the Philippines Manila"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
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
                    lineNumber: 147,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "password",
                    placeholder: "Password",
                    className: "jsx-3678029609"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                    className: "jsx-3678029609"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 17
                  }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                    className: "jsx-3678029609"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 24
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    type: "submit",
                    className: "jsx-3678029609",
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
        id: "3678029609",
        children: "#panel1.jsx-3678029609{background-image:'/upm.jpg';background-size:cover;background-color:#800020;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsXFxwYWdlc1xcbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEphLEFBR21DLDRCQUNOLHNCQUNHLHlCQUMzQiIsImZpbGUiOiJEOlxcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbFxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiXHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBsZXQgbG9naW5EZXRhaWxzID0ge1xyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9XHJcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCJcclxuXHJcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSlcclxuICAgIHJldHVybiAoXHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGUgPSB7eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC4uL2tiYmx1ci5qcGcpXCIgfX0+XHJcblx0Ly8gXHQ8SGVhZD5cclxuICAvLyAgICAgICAgICAgICAgIDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcbiAgLy8gICAgICAgICAgICAgICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPiAqL31cclxuICAvLyAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAvLyAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy41LjEvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gIC8vICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNi4wL3VtZC9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgLy8gICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAvLyAgICAgICAgICAgPC9IZWFkPlxyXG5cdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwibG9nb1wiPlxyXG5cdC8vIFx0PGgzPiBEUFNNIFFBIFBPUlRBTCA8YnIgLz4gPGJyIC8+PC9oMz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8Y2VudGVyPjxpbWcgc3JjPVwiL2Rwc20tc2VhbC5wbmdcIiB3aWR0aD1cIjE0MlwiIGhlaWdodD1cIjExNVwiIGFsdD1cIkRQU00tUUEtUG9ydGFsXCIgLz48L2NlbnRlcj5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIDwvZGl2PlxyXG5cdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwibG9naW5cIj5cclxuICAvLyAgICAgICAgIDxGb3JtaWtcclxuICAvLyAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17bG9naW5EZXRhaWxzfVxyXG4gIC8vICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAvLyAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG51bGxcclxuICAvLyAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvbG9naW5cIiwge1xyXG4gIC8vICAgICAgICAgICAgICAgICB1cGVtYWlsOiBgJHt2YWx1ZXMudXNlcm5hbWV9YCxcclxuICAvLyAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGAke3ZhbHVlcy5wYXNzd29yZH1gXHJcbiAgLy8gICAgICAgICAgICAgICB9KVxyXG5cclxuICAvLyAgICAgICAgICAgICAgIGlmKHRva2VuUmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gIC8vICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJ1c2VyXCIsIHRva2VuUmVzLmRhdGEucmVzdWx0LnRva2VuLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbWF4QWdlOiAzNjAwLCAvLyBFeHBpcmVzIGFmdGVyIDFoclxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiB0cnVlLFxyXG4gIC8vICAgICAgICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAgICAgICB0b2tlbiA9IGp3dC5kZWNvZGUodG9rZW5SZXMuZGF0YS5yZXN1bHQudG9rZW4pXHJcbiAgLy8gICAgICAgICAgICAgICAgIGxldCByb2xlID0gdG9rZW4ucm9sZVxyXG4gIC8vICAgICAgICAgICAgICAgICBpZihyb2xlID09IDEpIHsgLy8gZmFjdWx0eSBcclxuICAvLyAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcbiAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm9sZSA9PSAyIHx8IHJvbGUgPT0gMykgeyAvLyB1bml0IGhlYWQgb3IgZGVwdC4gY2hhaXJcclxuICAvLyAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHknKVxyXG4gIC8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYocm9sZSA9PSA1KSB7IC8vYWRtaW5cclxuICAvLyAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluJylcclxuICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdzb21ldGhpbmcgd3JvbmcnKVxyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gIC8vICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZSlcclxuICAvLyAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5tZXNzYWdlXHJcbiAgLy8gICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcbiAgLy8gICAgICAgICAgICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcbiAgLy8gICAgICAgICAgICAgICB2YWx1ZXMudXNlcm5hbWU9XCJcIlxyXG4gIC8vICAgICAgICAgICAgICAgdmFsdWVzLnBhc3N3b3JkPVwiXCJcclxuICAvLyAgICAgICAgICAgICAgIHJldHVybiBlcnJcclxuICAvLyAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgIH19XHJcbiAgLy8gICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAvLyAgICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCJcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJhbGVydFwiPlxyXG4gIC8vICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxyXG4gIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+VVAgRW1haWw6PC9sYWJlbD5cclxuICAvLyAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAvLyAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gIC8vICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcblx0Ly8gXHQgICAgICAgICAgICA8YnIgLz5cclxuXHQvLyBcdDxMaW5rIGhyZWYgPSBcIi9mb3Jnb3QtcGFzc3dvcmRcIj48YSBocmVmID0gXCIjXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT48L0xpbms+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG4gIC8vICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gIC8vICAgICAgICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxyXG4gIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAvLyAgICAgICAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgLy8gICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAvLyAgICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvZmFjdWx0eVwiPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT1cIkxvZ2luXCI+PC9pbnB1dD48L0xpbms+Ki99XHJcbiAgLy8gICAgICAgICAgICAgPC9Gb3JtPlxyXG4gIC8vICAgICAgICAgICApfVxyXG4gIC8vICAgICAgICAgPC9Gb3JtaWs+XHJcblx0Ly8gPC9kaXY+XHJcblx0XHJcblx0Ly8gPHN0eWxlIGpzeD57YFxyXG5cdC8vIFx0LmQtZmxleHtcclxuXHQvLyBcdFx0bWluLWhlaWdodDogMTAwJTtcclxuICAvLyBcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDsgXHJcblxyXG4gIC8vIFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jbG9naW57XHJcblx0Ly8gXHRcdGJhY2tncm91bmQtY29sb3I6IzYwMDtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jbG9nb3tcclxuXHQvLyBcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxOTQyYjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdGxhYmVse1xyXG5cdC8vIFx0XHRjb2xvcjojZmZmO1xyXG5cdC8vIFx0fVxyXG4gIC8vICAgI2FsZXJ0IHtcclxuICAvLyAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC8vICAgfVxyXG5cdC8vIGB9PC9zdHlsZT5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gIDxIZWFkPlxyXG4gICAgPHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSAnL3N0eWxlLmNzcyc+PC9saW5rPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC1FVlNUUU4zL2F6cHJHMUFubTNRRGdwSkxJbTlOYW8wWXoxenRjUVR3RnNwZDN5RDY1Vm9oaHB1dUNPbUxBU2pDXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbiA8L0hlYWQ+XHJcbiBcclxuIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGlkPVwicGFuZWwxXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nb3BpY1wiIHN0eWxlPXt7cGFkZGluZzogXCIyNSVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDM+UXVhbGl0eSBBc3N1cmFuY2UgUG9ydGFsPC9oMz5cclxuICAgICAgICAgICAgPHA+VW5pdmVyc2l0eSBvZiB0aGUgUGhpbGlwcGluZXMgTWFuaWxhPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlVQIE1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIDxzdHlsZSBqc3g+e2BcclxuICAgICNwYW5lbDF7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICcvdXBtLmpwZyc7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xyXG4gICAgfVxyXG5cdGB9PC9zdHlsZT5cclxuIDwvZGl2PlxyXG4gIFxyXG5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl19 */\n/*@ sourceURL=D:\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal\\\\pages\\\\login.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 3
    }, this)
  );
}

_s(Login, "rWtr2pzGlVObhxILlGDRXrEMlRk=", false, function () {
  return [react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJsb2dpbkRldGFpbHMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwidXNlQ29va2llcyIsImNvb2tpZSIsInNldENvb2tpZSIsInBhZGRpbmciLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUNmLE1BQUlDLFlBQVksR0FBRztBQUNqQkMsWUFBUSxFQUFFLEVBRE87QUFFakJDLFlBQVEsRUFBRTtBQUZPLEdBQW5CO0FBSUEsTUFBSUMsWUFBWSxHQUFHLEVBQW5COztBQUxlLG9CQU9hQyx3REFBVSxDQUFDLENBQUMsTUFBRCxDQUFELENBUHZCO0FBQUE7QUFBQSxNQU9SQyxNQVBRO0FBQUEsTUFPQUMsU0FQQTs7QUFRYjtBQUFBO0FBQ0Y7QUFDRDtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUVBO0FBQ0E7QUFDQTtBQUNDO0FBRUE7QUFDQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDQTtBQUNBO0FBQ0Q7QUFDQztBQUNBO0FBQUE7QUFBQSw4QkFDQSw4REFBQyxrREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLGFBQUcsRUFBQyxZQUFWO0FBQXVCLGNBQUksRUFBRSxZQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQU0sY0FBSSxFQUFDLHlFQUFYO0FBQXFGLGFBQUcsRUFBQyxZQUF6RjtBQUFzRyxtQkFBUyxFQUFDLHlFQUFoSDtBQUEwTCxxQkFBVyxFQUFDLFdBQXRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBT0Q7QUFBQSw0Q0FBaUIsS0FBakI7QUFBQSxnQ0FDSztBQUEwQixZQUFFLEVBQUMsUUFBN0I7QUFBQSw4Q0FBZSxVQUFmO0FBQUEsaUNBQ0U7QUFBQSxnREFBZSxLQUFmO0FBQUEsbUNBQ0U7QUFBSyxpQkFBRyxFQUFDLFdBQVQ7QUFBeUMsbUJBQUssRUFBRTtBQUFDQyx1QkFBTyxFQUFFLEtBQVY7QUFBaUJDLHNCQUFNLEVBQUU7QUFBekIsZUFBaEQ7QUFBQSxrREFBK0I7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURMLGVBTUs7QUFBQSw4Q0FBZSxVQUFmO0FBQUEsaUNBQ0U7QUFBQSxnREFBZSxPQUFmO0FBQUEsbUNBQ0U7QUFBQSxrREFBZSxXQUFmO0FBQUEsc0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRTtBQUFBLG9EQUFlLFlBQWY7QUFBQSx1Q0FDRTtBQUFNLHdCQUFNLEVBQUMsRUFBYjtBQUFBO0FBQUEsMENBQ0U7QUFBTyx3QkFBSSxFQUFDLE9BQVo7QUFBb0IsK0JBQVcsRUFBQyxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQU8sd0JBQUksRUFBQyxVQUFaO0FBQXVCLCtCQUFXLEVBQUMsVUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIRixvQkFHUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIVCxlQUlFO0FBQVEsd0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE5R0U7QUF1SkQ7O0dBL0pNVCxLO1VBT3FCSyxvRDs7O0tBUHJCTCxLO0FBaUtQLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjYxZTBjMjE5Yzg2ZmI2NTliNDNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGxldCBsb2dpbkRldGFpbHMgPSB7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH1cclxuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJcIlxyXG5cclxuICBjb25zdCBbY29va2llLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbXCJ1c2VyXCJdKVxyXG4gICAgcmV0dXJuIChcclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZSA9IHt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoLi4va2JibHVyLmpwZylcIiB9fT5cclxuXHQvLyBcdDxIZWFkPlxyXG4gIC8vICAgICAgICAgICAgICAgPHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuICAvLyAgICAgICAgICAgICAgIHsvKiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+ICovfVxyXG4gIC8vICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gIC8vICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjUuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgLy8gICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE2LjAvdW1kL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cclxuICAvLyAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gIC8vICAgICAgICAgICA8L0hlYWQ+XHJcblx0Ly8gPGRpdiBjbGFzc05hbWUgPSBcImp1bWJvdHJvblwiIGlkID0gXCJsb2dvXCI+XHJcblx0Ly8gXHQ8aDM+IERQU00gUUEgUE9SVEFMIDxiciAvPiA8YnIgLz48L2gzPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxjZW50ZXI+PGltZyBzcmM9XCIvZHBzbS1zZWFsLnBuZ1wiIHdpZHRoPVwiMTQyXCIgaGVpZ2h0PVwiMTE1XCIgYWx0PVwiRFBTTS1RQS1Qb3J0YWxcIiAvPjwvY2VudGVyPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gPC9kaXY+XHJcblx0Ly8gPGRpdiBjbGFzc05hbWUgPSBcImp1bWJvdHJvblwiIGlkID0gXCJsb2dpblwiPlxyXG4gIC8vICAgICAgICAgPEZvcm1pa1xyXG4gIC8vICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtsb2dpbkRldGFpbHN9XHJcbiAgLy8gICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gIC8vICAgICAgICAgICAgICAgbGV0IHRva2VuID0gbnVsbFxyXG4gIC8vICAgICAgICAgICAgICAgY29uc3QgdG9rZW5SZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9sb2dpblwiLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHVwZW1haWw6IGAke3ZhbHVlcy51c2VybmFtZX1gLFxyXG4gIC8vICAgICAgICAgICAgICAgICBwYXNzd29yZDogYCR7dmFsdWVzLnBhc3N3b3JkfWBcclxuICAvLyAgICAgICAgICAgICAgIH0pXHJcblxyXG4gIC8vICAgICAgICAgICAgICAgaWYodG9rZW5SZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHNldENvb2tpZShcInVzZXJcIiwgdG9rZW5SZXMuZGF0YS5yZXN1bHQudG9rZW4sIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcclxuICAvLyAgICAgICAgICAgICAgICAgICBtYXhBZ2U6IDM2MDAsIC8vIEV4cGlyZXMgYWZ0ZXIgMWhyXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgc2FtZVNpdGU6IHRydWUsXHJcbiAgLy8gICAgICAgICAgICAgICAgIH0pXHJcbiAgLy8gICAgICAgICAgICAgICAgIHRva2VuID0gand0LmRlY29kZSh0b2tlblJlcy5kYXRhLnJlc3VsdC50b2tlbilcclxuICAvLyAgICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0b2tlbi5yb2xlXHJcbiAgLy8gICAgICAgICAgICAgICAgIGlmKHJvbGUgPT0gMSkgeyAvLyBmYWN1bHR5IFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb2xlID09IDIgfHwgcm9sZSA9PSAzKSB7IC8vIHVuaXQgaGVhZCBvciBkZXB0LiBjaGFpclxyXG4gIC8vICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eScpXHJcbiAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyb2xlID09IDUpIHsgLy9hZG1pblxyXG4gIC8vICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4nKVxyXG4gIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ3NvbWV0aGluZyB3cm9uZycpXHJcbiAgLy8gICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgLy8gICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5tZXNzYWdlKVxyXG4gIC8vICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLm1lc3NhZ2VcclxuICAvLyAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuICAvLyAgICAgICAgICAgICAgIGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuICAvLyAgICAgICAgICAgICAgIHZhbHVlcy51c2VybmFtZT1cIlwiXHJcbiAgLy8gICAgICAgICAgICAgICB2YWx1ZXMucGFzc3dvcmQ9XCJcIlxyXG4gIC8vICAgICAgICAgICAgICAgcmV0dXJuIGVyclxyXG4gIC8vICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgfX1cclxuICAvLyAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gIC8vICAgICAgICAgICAgIDxGb3JtIGFjdGlvbj1cIlwiPlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiBpZD1cImFsZXJ0XCI+XHJcbiAgLy8gICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5VUCBFbWFpbDo8L2xhYmVsPlxyXG4gIC8vICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gIC8vICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgLy8gICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuXHQvLyBcdCAgICAgICAgICAgIDxiciAvPlxyXG5cdC8vIFx0PExpbmsgaHJlZiA9IFwiL2ZvcmdvdC1wYXNzd29yZFwiPjxhIGhyZWYgPSBcIiNcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPjwvTGluaz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGJyIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgLy8gICAgICAgICAgICAgICAgIHR5cGUgPSBcInN1Ym1pdFwiXHJcbiAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAvLyAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfVxyXG4gIC8vICAgICAgICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAvLyAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gIC8vICAgICAgICAgICAgICAgey8qPExpbmsgaHJlZj1cIi9mYWN1bHR5XCI+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPVwiTG9naW5cIj48L2lucHV0PjwvTGluaz4qL31cclxuICAvLyAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgLy8gICAgICAgICAgICl9XHJcbiAgLy8gICAgICAgICA8L0Zvcm1paz5cclxuXHQvLyA8L2Rpdj5cclxuXHRcclxuXHQvLyA8c3R5bGUganN4PntgXHJcblx0Ly8gXHQuZC1mbGV4e1xyXG5cdC8vIFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIC8vIFx0XHRcdG1pbi1oZWlnaHQ6IDEwMHZoOyBcclxuXHJcbiAgLy8gXHRcdFx0ZGlzcGxheTogZmxleDtcclxuICAvLyBcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC8vIFx0fVxyXG5cdC8vIFx0Lmp1bWJvdHJvbiNsb2dpbntcclxuXHQvLyBcdFx0YmFja2dyb3VuZC1jb2xvcjojNjAwO1xyXG5cdC8vIFx0fVxyXG5cdC8vIFx0Lmp1bWJvdHJvbiNsb2dve1xyXG5cdC8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDE5NDJiO1xyXG5cdC8vIFx0fVxyXG5cdC8vIFx0bGFiZWx7XHJcblx0Ly8gXHRcdGNvbG9yOiNmZmY7XHJcblx0Ly8gXHR9XHJcbiAgLy8gICAjYWxlcnQge1xyXG4gIC8vICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLy8gICB9XHJcblx0Ly8gYH08L3N0eWxlPlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgPEhlYWQ+XHJcbiAgICA8dGl0bGU+RFBTTS1RQS1QT1JUQUw8L3RpdGxlPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9ICcvc3R5bGUuY3NzJz48L2xpbms+XHJcbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LUVWU1RRTjMvYXpwckcxQW5tM1FEZ3BKTEltOU5hbzBZejF6dGNRVHdGc3BkM3lENjVWb2hocHV1Q09tTEFTakNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cclxuIDwvSGVhZD5cclxuIFxyXG4gPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIgaWQ9XCJwYW5lbDFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJsb2dvcGljXCIgc3R5bGU9e3twYWRkaW5nOiBcIjI1JVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMz5RdWFsaXR5IEFzc3VyYW5jZSBQb3J0YWw8L2gzPlxyXG4gICAgICAgICAgICA8cD5Vbml2ZXJzaXR5IG9mIHRoZSBQaGlsaXBwaW5lcyBNYW5pbGE8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiVVAgTWFpbFwiLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuIDwvZGl2PlxyXG4gPHN0eWxlIGpzeD57YFxyXG4gICAgI3BhbmVsMXtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogJy91cG0uanBnJztcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMjA7XHJcbiAgICB9XHJcblx0YH08L3N0eWxlPlxyXG4gPC9kaXY+XHJcbiAgXHJcblxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXSwic291cmNlUm9vdCI6IiJ9