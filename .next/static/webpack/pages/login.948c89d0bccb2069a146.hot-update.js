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
      className: "jsx-2864726598",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          className: "jsx-2864726598",
          children: "DPSM-QA-PORTAL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "/style.css",
          className: "jsx-2864726598"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossorigin: "anonymous",
          className: "jsx-2864726598"
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
        className: "jsx-2864726598" + " " + "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "panel1",
          className: "jsx-2864726598" + " " + "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2864726598" + " " + "img",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/logo.png",
              className: "jsx-2864726598" + " " + "logopic"
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
          className: "jsx-2864726598" + " " + "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2864726598" + " " + "login",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-2864726598" + " " + "container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "jsx-2864726598",
                children: "Quality Assurance Portal"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "jsx-2864726598",
                children: "University of the Philippines Manila"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "jsx-2864726598" + " " + "login-form",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                  action: "",
                  className: "jsx-2864726598",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "email",
                    placeholder: "UP Mail",
                    className: "jsx-2864726598"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "password",
                    placeholder: "Password",
                    className: "jsx-2864726598"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                    className: "jsx-2864726598"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 17
                  }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                    className: "jsx-2864726598"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 24
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    type: "submit",
                    className: "jsx-2864726598",
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
        id: "2864726598",
        children: "#panel1.jsx-2864726598{background-image:'/upm.jpg';background-size:cover;background-color:#800020;}#panel1.jsx-2864726598>.logopic.jsx-2864726598{height:50%;width:auto;margin:auto;padding:25%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsXFxwYWdlc1xcbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEphLEFBR21DLEFBS2pCLFdBQ0EsV0FDQyxNQU5VLE1BT1YsWUFDZCxJQVAyQix5QkFDM0IiLCJmaWxlIjoiRDpcXG5pY2hvXFxEb2N1bWVudHNcXEdpdEh1YlxcZHBzbS1xYS1wb3J0YWxcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIlxyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgbGV0IGxvZ2luRGV0YWlscyA9IHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfVxyXG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiXHJcblxyXG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pXHJcbiAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlID0ge3sgYmFja2dyb3VuZEltYWdlOiBcInVybCguLi9rYmJsdXIuanBnKVwiIH19PlxyXG5cdC8vIFx0PEhlYWQ+XHJcbiAgLy8gICAgICAgICAgICAgICA8dGl0bGU+RFBTTS1RQS1QT1JUQUw8L3RpdGxlPlxyXG4gIC8vICAgICAgICAgICAgICAgey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz4gKi99XHJcbiAgLy8gICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNS4xL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAvLyAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTYuMC91bWQvcG9wcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gIC8vICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgLy8gICAgICAgICAgIDwvSGVhZD5cclxuXHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwianVtYm90cm9uXCIgaWQgPSBcImxvZ29cIj5cclxuXHQvLyBcdDxoMz4gRFBTTSBRQSBQT1JUQUwgPGJyIC8+IDxiciAvPjwvaDM+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGNlbnRlcj48aW1nIHNyYz1cIi9kcHNtLXNlYWwucG5nXCIgd2lkdGg9XCIxNDJcIiBoZWlnaHQ9XCIxMTVcIiBhbHQ9XCJEUFNNLVFBLVBvcnRhbFwiIC8+PC9jZW50ZXI+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyA8L2Rpdj5cclxuXHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwianVtYm90cm9uXCIgaWQgPSBcImxvZ2luXCI+XHJcbiAgLy8gICAgICAgICA8Rm9ybWlrXHJcbiAgLy8gICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2xvZ2luRGV0YWlsc31cclxuICAvLyAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAvLyAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgLy8gICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgLy8gICAgICAgICAgICAgICBjb25zdCB0b2tlblJlcyA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL2xvZ2luXCIsIHtcclxuICAvLyAgICAgICAgICAgICAgICAgdXBlbWFpbDogYCR7dmFsdWVzLnVzZXJuYW1lfWAsXHJcbiAgLy8gICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBgJHt2YWx1ZXMucGFzc3dvcmR9YFxyXG4gIC8vICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgLy8gICAgICAgICAgICAgICBpZih0b2tlblJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwidXNlclwiLCB0b2tlblJlcy5kYXRhLnJlc3VsdC50b2tlbiwge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIG1heEFnZTogMzYwMCwgLy8gRXhwaXJlcyBhZnRlciAxaHJcclxuICAvLyAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogdHJ1ZSxcclxuICAvLyAgICAgICAgICAgICAgICAgfSlcclxuICAvLyAgICAgICAgICAgICAgICAgdG9rZW4gPSBqd3QuZGVjb2RlKHRva2VuUmVzLmRhdGEucmVzdWx0LnRva2VuKVxyXG4gIC8vICAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRva2VuLnJvbGVcclxuICAvLyAgICAgICAgICAgICAgICAgaWYocm9sZSA9PSAxKSB7IC8vIGZhY3VsdHkgXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gIC8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvbGUgPT0gMiB8fCByb2xlID09IDMpIHsgLy8gdW5pdCBoZWFkIG9yIGRlcHQuIGNoYWlyXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5JylcclxuICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHJvbGUgPT0gNSkgeyAvL2FkbWluXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbicpXHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnc29tZXRoaW5nIHdyb25nJylcclxuICAvLyAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAvLyAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLm1lc3NhZ2UpXHJcbiAgLy8gICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZVxyXG4gIC8vICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG4gIC8vICAgICAgICAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG4gIC8vICAgICAgICAgICAgICAgdmFsdWVzLnVzZXJuYW1lPVwiXCJcclxuICAvLyAgICAgICAgICAgICAgIHZhbHVlcy5wYXNzd29yZD1cIlwiXHJcbiAgLy8gICAgICAgICAgICAgICByZXR1cm4gZXJyXHJcbiAgLy8gICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICB9fVxyXG4gIC8vICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgLy8gICAgICAgICAgICAgPEZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiIGlkPVwiYWxlcnRcIj5cclxuICAvLyAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cclxuICAvLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlVQIEVtYWlsOjwvbGFiZWw+XHJcbiAgLy8gICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgLy8gICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAvLyAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxyXG5cdC8vIFx0ICAgICAgICAgICAgPGJyIC8+XHJcblx0Ly8gXHQ8TGluayBocmVmID0gXCIvZm9yZ290LXBhc3N3b3JkXCI+PGEgaHJlZiA9IFwiI1wiPkZvcmdvdCBQYXNzd29yZD88L2E+PC9MaW5rPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8YnIgLz5cclxuICAvLyAgICAgICAgICAgICAgIDxidXR0b25cclxuICAvLyAgICAgICAgICAgICAgICAgdHlwZSA9IFwic3VibWl0XCJcclxuICAvLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIlxyXG4gIC8vICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9XHJcbiAgLy8gICAgICAgICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gIC8vICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgLy8gICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL2ZhY3VsdHlcIj48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9XCJMb2dpblwiPjwvaW5wdXQ+PC9MaW5rPiovfVxyXG4gIC8vICAgICAgICAgICAgIDwvRm9ybT5cclxuICAvLyAgICAgICAgICAgKX1cclxuICAvLyAgICAgICAgIDwvRm9ybWlrPlxyXG5cdC8vIDwvZGl2PlxyXG5cdFxyXG5cdC8vIDxzdHlsZSBqc3g+e2BcclxuXHQvLyBcdC5kLWZsZXh7XHJcblx0Ly8gXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgLy8gXHRcdFx0bWluLWhlaWdodDogMTAwdmg7IFxyXG5cclxuICAvLyBcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHQuanVtYm90cm9uI2xvZ2lue1xyXG5cdC8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM2MDA7XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHQuanVtYm90cm9uI2xvZ297XHJcblx0Ly8gXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMTk0MmI7XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHRsYWJlbHtcclxuXHQvLyBcdFx0Y29sb3I6I2ZmZjtcclxuXHQvLyBcdH1cclxuICAvLyAgICNhbGVydCB7XHJcbiAgLy8gICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvLyAgIH1cclxuXHQvLyBgfTwvc3R5bGU+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICA8SGVhZD5cclxuICAgIDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gJy9zdHlsZS5jc3MnPjwvbGluaz5cclxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRVZTVFFOMy9henByRzFBbm0zUURncEpMSW05TmFvMFl6MXp0Y1FUd0ZzcGQzeUQ2NVZvaGhwdXVDT21MQVNqQ1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxyXG4gPC9IZWFkPlxyXG4gXHJcbiA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBpZD1cInBhbmVsMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29waWNcIj48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDM+UXVhbGl0eSBBc3N1cmFuY2UgUG9ydGFsPC9oMz5cclxuICAgICAgICAgICAgPHA+VW5pdmVyc2l0eSBvZiB0aGUgUGhpbGlwcGluZXMgTWFuaWxhPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlVQIE1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIDxzdHlsZSBqc3g+e2BcclxuICAgICNwYW5lbDF7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICcvdXBtLmpwZyc7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xyXG4gICAgfVxyXG4gICAgI3BhbmVsMSA+IC5sb2dvcGlje1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcGFkZGluZzogMjUlO1xyXG4gICAgfVxyXG4gICAgXHJcblx0YH08L3N0eWxlPlxyXG4gPC9kaXY+XHJcbiAgXHJcblxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXX0= */\n/*@ sourceURL=D:\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal\\\\pages\\\\login.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJsb2dpbkRldGFpbHMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwidXNlQ29va2llcyIsImNvb2tpZSIsInNldENvb2tpZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQ2YsTUFBSUMsWUFBWSxHQUFHO0FBQ2pCQyxZQUFRLEVBQUUsRUFETztBQUVqQkMsWUFBUSxFQUFFO0FBRk8sR0FBbkI7QUFJQSxNQUFJQyxZQUFZLEdBQUcsRUFBbkI7O0FBTGUsb0JBT2FDLHdEQUFVLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FQdkI7QUFBQTtBQUFBLE1BT1JDLE1BUFE7QUFBQSxNQU9BQyxTQVBBOztBQVFiO0FBQUE7QUFDRjtBQUNEO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBRUE7QUFDQTtBQUNBO0FBQ0M7QUFFQTtBQUNBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUNBO0FBQ0E7QUFDRDtBQUNDO0FBQ0E7QUFBQTtBQUFBLDhCQUNBLDhEQUFDLGtEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sYUFBRyxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFFLFlBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBTSxjQUFJLEVBQUMseUVBQVg7QUFBcUYsYUFBRyxFQUFDLFlBQXpGO0FBQXNHLG1CQUFTLEVBQUMseUVBQWhIO0FBQTBMLHFCQUFXLEVBQUMsV0FBdE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFPRDtBQUFBLDRDQUFpQixLQUFqQjtBQUFBLGdDQUNLO0FBQTBCLFlBQUUsRUFBQyxRQUE3QjtBQUFBLDhDQUFlLFVBQWY7QUFBQSxpQ0FDRTtBQUFBLGdEQUFlLEtBQWY7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUMsV0FBVDtBQUFBLGtEQUErQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREwsZUFNSztBQUFBLDhDQUFlLFVBQWY7QUFBQSxpQ0FDRTtBQUFBLGdEQUFlLE9BQWY7QUFBQSxtQ0FDRTtBQUFBLGtEQUFlLFdBQWY7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFO0FBQUEsb0RBQWUsWUFBZjtBQUFBLHVDQUNFO0FBQU0sd0JBQU0sRUFBQyxFQUFiO0FBQUE7QUFBQSwwQ0FDRTtBQUFPLHdCQUFJLEVBQUMsT0FBWjtBQUFvQiwrQkFBVyxFQUFDLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBRUU7QUFBTyx3QkFBSSxFQUFDLFVBQVo7QUFBdUIsK0JBQVcsRUFBQyxVQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhGLG9CQUdTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhULGVBSUU7QUFBUSx3QkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTlHRTtBQThKRDs7R0F0S01QLEs7VUFPcUJLLG9EOzs7S0FQckJMLEs7QUF3S1AsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uOTQ4Yzg5ZDBiY2NiMjA2OWExNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIlxyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgbGV0IGxvZ2luRGV0YWlscyA9IHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfVxyXG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiXHJcblxyXG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pXHJcbiAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlID0ge3sgYmFja2dyb3VuZEltYWdlOiBcInVybCguLi9rYmJsdXIuanBnKVwiIH19PlxyXG5cdC8vIFx0PEhlYWQ+XHJcbiAgLy8gICAgICAgICAgICAgICA8dGl0bGU+RFBTTS1RQS1QT1JUQUw8L3RpdGxlPlxyXG4gIC8vICAgICAgICAgICAgICAgey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz4gKi99XHJcbiAgLy8gICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNS4xL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAvLyAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTYuMC91bWQvcG9wcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gIC8vICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgLy8gICAgICAgICAgIDwvSGVhZD5cclxuXHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwianVtYm90cm9uXCIgaWQgPSBcImxvZ29cIj5cclxuXHQvLyBcdDxoMz4gRFBTTSBRQSBQT1JUQUwgPGJyIC8+IDxiciAvPjwvaDM+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGNlbnRlcj48aW1nIHNyYz1cIi9kcHNtLXNlYWwucG5nXCIgd2lkdGg9XCIxNDJcIiBoZWlnaHQ9XCIxMTVcIiBhbHQ9XCJEUFNNLVFBLVBvcnRhbFwiIC8+PC9jZW50ZXI+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyBcdDxiciAvPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8YnIgLz5cclxuXHQvLyA8L2Rpdj5cclxuXHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwianVtYm90cm9uXCIgaWQgPSBcImxvZ2luXCI+XHJcbiAgLy8gICAgICAgICA8Rm9ybWlrXHJcbiAgLy8gICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2xvZ2luRGV0YWlsc31cclxuICAvLyAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAvLyAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgLy8gICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgLy8gICAgICAgICAgICAgICBjb25zdCB0b2tlblJlcyA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL2xvZ2luXCIsIHtcclxuICAvLyAgICAgICAgICAgICAgICAgdXBlbWFpbDogYCR7dmFsdWVzLnVzZXJuYW1lfWAsXHJcbiAgLy8gICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBgJHt2YWx1ZXMucGFzc3dvcmR9YFxyXG4gIC8vICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgLy8gICAgICAgICAgICAgICBpZih0b2tlblJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwidXNlclwiLCB0b2tlblJlcy5kYXRhLnJlc3VsdC50b2tlbiwge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIG1heEFnZTogMzYwMCwgLy8gRXhwaXJlcyBhZnRlciAxaHJcclxuICAvLyAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogdHJ1ZSxcclxuICAvLyAgICAgICAgICAgICAgICAgfSlcclxuICAvLyAgICAgICAgICAgICAgICAgdG9rZW4gPSBqd3QuZGVjb2RlKHRva2VuUmVzLmRhdGEucmVzdWx0LnRva2VuKVxyXG4gIC8vICAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRva2VuLnJvbGVcclxuICAvLyAgICAgICAgICAgICAgICAgaWYocm9sZSA9PSAxKSB7IC8vIGZhY3VsdHkgXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gIC8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvbGUgPT0gMiB8fCByb2xlID09IDMpIHsgLy8gdW5pdCBoZWFkIG9yIGRlcHQuIGNoYWlyXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5JylcclxuICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHJvbGUgPT0gNSkgeyAvL2FkbWluXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbicpXHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnc29tZXRoaW5nIHdyb25nJylcclxuICAvLyAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAvLyAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLm1lc3NhZ2UpXHJcbiAgLy8gICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZVxyXG4gIC8vICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG4gIC8vICAgICAgICAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG4gIC8vICAgICAgICAgICAgICAgdmFsdWVzLnVzZXJuYW1lPVwiXCJcclxuICAvLyAgICAgICAgICAgICAgIHZhbHVlcy5wYXNzd29yZD1cIlwiXHJcbiAgLy8gICAgICAgICAgICAgICByZXR1cm4gZXJyXHJcbiAgLy8gICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICB9fVxyXG4gIC8vICAgICAgICAgPlxyXG4gIC8vICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgLy8gICAgICAgICAgICAgPEZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiIGlkPVwiYWxlcnRcIj5cclxuICAvLyAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cclxuICAvLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlVQIEVtYWlsOjwvbGFiZWw+XHJcbiAgLy8gICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgLy8gICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAvLyAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxyXG5cdC8vIFx0ICAgICAgICAgICAgPGJyIC8+XHJcblx0Ly8gXHQ8TGluayBocmVmID0gXCIvZm9yZ290LXBhc3N3b3JkXCI+PGEgaHJlZiA9IFwiI1wiPkZvcmdvdCBQYXNzd29yZD88L2E+PC9MaW5rPlxyXG5cdC8vIFx0PGJyIC8+XHJcblx0Ly8gXHQ8YnIgLz5cclxuICAvLyAgICAgICAgICAgICAgIDxidXR0b25cclxuICAvLyAgICAgICAgICAgICAgICAgdHlwZSA9IFwic3VibWl0XCJcclxuICAvLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIlxyXG4gIC8vICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9XHJcbiAgLy8gICAgICAgICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gIC8vICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgLy8gICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL2ZhY3VsdHlcIj48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9XCJMb2dpblwiPjwvaW5wdXQ+PC9MaW5rPiovfVxyXG4gIC8vICAgICAgICAgICAgIDwvRm9ybT5cclxuICAvLyAgICAgICAgICAgKX1cclxuICAvLyAgICAgICAgIDwvRm9ybWlrPlxyXG5cdC8vIDwvZGl2PlxyXG5cdFxyXG5cdC8vIDxzdHlsZSBqc3g+e2BcclxuXHQvLyBcdC5kLWZsZXh7XHJcblx0Ly8gXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgLy8gXHRcdFx0bWluLWhlaWdodDogMTAwdmg7IFxyXG5cclxuICAvLyBcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHQuanVtYm90cm9uI2xvZ2lue1xyXG5cdC8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM2MDA7XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHQuanVtYm90cm9uI2xvZ297XHJcblx0Ly8gXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMTk0MmI7XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHRsYWJlbHtcclxuXHQvLyBcdFx0Y29sb3I6I2ZmZjtcclxuXHQvLyBcdH1cclxuICAvLyAgICNhbGVydCB7XHJcbiAgLy8gICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvLyAgIH1cclxuXHQvLyBgfTwvc3R5bGU+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICA8SGVhZD5cclxuICAgIDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gJy9zdHlsZS5jc3MnPjwvbGluaz5cclxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRVZTVFFOMy9henByRzFBbm0zUURncEpMSW05TmFvMFl6MXp0Y1FUd0ZzcGQzeUQ2NVZvaGhwdXVDT21MQVNqQ1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxyXG4gPC9IZWFkPlxyXG4gXHJcbiA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBpZD1cInBhbmVsMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29waWNcIj48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDM+UXVhbGl0eSBBc3N1cmFuY2UgUG9ydGFsPC9oMz5cclxuICAgICAgICAgICAgPHA+VW5pdmVyc2l0eSBvZiB0aGUgUGhpbGlwcGluZXMgTWFuaWxhPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlVQIE1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIDxzdHlsZSBqc3g+e2BcclxuICAgICNwYW5lbDF7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICcvdXBtLmpwZyc7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xyXG4gICAgfVxyXG4gICAgI3BhbmVsMSA+IC5sb2dvcGlje1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcGFkZGluZzogMjUlO1xyXG4gICAgfVxyXG4gICAgXHJcblx0YH08L3N0eWxlPlxyXG4gPC9kaXY+XHJcbiAgXHJcblxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXSwic291cmNlUm9vdCI6IiJ9