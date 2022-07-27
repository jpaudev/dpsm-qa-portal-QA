(function() {
var exports = {};
exports.id = "pages/faculty";
exports.ids = ["pages/faculty"];
exports.modules = {

/***/ "./components/content.js":
/*!*******************************!*\
  !*** ./components/content.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\content.js";




function Content(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\footer.js";


function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-light bg-light",
    children: "\xA9 Copyright 2021 DPSM"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\header.js";



function Header(props) {
  let roleName = "";

  switch (props.role) {
    case 1:
      roleName = "Faculty";
      break;

    case 2:
      roleName = "Unit Head";
      break;

    case 3:
      roleName = "Department Chair";
      break;

    default:
      roleName = "Admin Clerk";
      break;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3546386183" + " " + "row",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "jsx-3546386183" + " " + "navbar navbar-expand-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-3546386183" + " " + "navbar-text",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "jsx-3546386183" + " " + "navbar-brand",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/dpsm-seal.png",
            width: "186",
            height: "150",
            alt: "DPSM-QA-Portal",
            className: "jsx-3546386183" + " " + "d-inline-block align-top"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "jsx-3546386183",
        children: " DPSM QA PORTAL "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-3546386183" + " " + "ml-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          className: "jsx-3546386183",
          children: [" Currently Logged In: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/settings/change-password",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "jsx-3546386183",
              children: [" ", props.name, " (", roleName, ") "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 71
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 30
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3546386183",
      children: ".navbar.jsx-3546386183{background-color:#910303;width:100%;}h2.jsx-3546386183,h5.jsx-3546386183{font-family:Georgia;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFxoZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNjLEFBRzZCLEFBSUwsb0JBQ1QsS0FKRCxNQUtYLEtBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxEZXJpY2tcXERlc2t0b3BcXOKggFxcQWNhZHNcXCgyMDIyKSBUaGlyZCBZZWFyIC0gTWlkeWVhciBPSlRcXENTIDE5MFxcZHBzbS1xYS1wb3J0YWwtUUFcXGNvbXBvbmVudHNcXGhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG5cdGxldCByb2xlTmFtZSA9IFwiXCJcclxuXHRzd2l0Y2gocHJvcHMucm9sZSl7XHJcblx0XHRjYXNlIDE6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiRmFjdWx0eVwiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDI6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiVW5pdCBIZWFkXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMzogXHJcblx0XHRcdHJvbGVOYW1lID0gXCJEZXBhcnRtZW50IENoYWlyXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiQWRtaW4gQ2xlcmtcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZHBzbS1zZWFsLnBuZ1wiIHdpZHRoPVwiMTg2XCIgaGVpZ2h0PVwiMTUwXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCIgYWx0PVwiRFBTTS1RQS1Qb3J0YWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0PGgyPiBEUFNNIFFBIFBPUlRBTCA8L2gyPlxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibWwtYXV0b1wiPlxyXG5cdFx0XHQ8aDU+IEN1cnJlbnRseSBMb2dnZWQgSW46IDxMaW5rIGhyZWYgPSBcIi9zZXR0aW5ncy9jaGFuZ2UtcGFzc3dvcmRcIj48YT4ge3Byb3BzLm5hbWV9ICh7cm9sZU5hbWV9KSA8L2E+PC9MaW5rPiA8L2g1PlxyXG5cdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0Lm5hdmJhcntcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzkxMDMwMztcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdH1cclxuXHRcdGgyLCBoNXtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdlb3JnaWE7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Derick\\\\Desktop\\\\\u2800\\\\Acads\\\\(2022) Third Year - Midyear OJT\\\\CS 190\\\\dpsm-qa-portal-QA\\\\components\\\\header.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content */ "./components/content.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\layout.js";







function Layout(props) {
  let approvalList;
  if (props.approvalList) approvalList = props.approvalList;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "DPSM-QA-PORTAL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: props.name,
      role: props.role
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      id: "layout_row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_3__.default, {
        role: props.role,
        approvalList: approvalList,
        facultyId: props.facultyId,
        roleAssignment: props.roleAssignmentFlag
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        id: "layout_content",
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\sidebar.js";






function Sidebar(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const [cookies, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies)(["user"]);

  function handleRemoveCookie() {
    removeCookie("user", {
      path: '/'
    });
  }

  let faculty = true;
  let staff = true;

  if (props.role == 1 || props.role == 2 || props.role == 3) {
    staff = false;

    if (props.role == 2 || props.role == 3) {
      faculty = false;
    }
  }

  const {
    0: isActive,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "sidebar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "alert alert-info col-12 d-md-none text-center",
      onClick: handleToggle,
      children: " Main Menu "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "menu",
      className: "jsx-1836586042" + " " + ((isActive ? null : "d-none d-md-block") || ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-1836586042" + " " + "list-group col-12",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "data-toggle": "collapse",
          "data-target": "#facultyMenu",
          "aria-controls": "facultyMenu",
          className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-secondary",
          children: " Faculty "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "facultyMenu",
          className: "jsx-1836586042" + " " + "collapse show",
          children: [!staff && !faculty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: {
              pathname: "/faculty"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: router.pathname === "/faculty" ? "active" : "inactive",
              className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-success",
              children: "Dashboard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 83
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 45
          }, this), !staff && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: {
              pathname: "/faculty/basic-info"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: router.pathname === "/faculty/basic-info" ? "active" : "inactive",
              className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-success",
              children: "Basic Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 82
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 33
          }, this), !staff && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: {
              pathname: "/faculty/accomplishment"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: router.pathname === "/faculty/accomplishment" ? "active" : "inactive",
              className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-success",
              children: "Accomplishment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 86
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 33
          }, this), !staff && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: {
              pathname: "/faculty/faculty-load"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: router.pathname === "/faculty/faculty-load" ? "active" : "inactive",
              className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-success",
              children: "Faculty Load"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 84
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 33
          }, this), !staff && !faculty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: {
              pathname: "/faculty/view/all"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: router.pathname === "/faculty/view/all" ? "active" : "inactive",
              className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-success ",
              children: "Faculty List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 92
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 45
          }, this), !staff && !faculty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: {
              pathname: "/faculty/approval"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: router.pathname === "/faculty/approval" ? "active" : "inactive",
              className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-success ",
              children: ["Pending Approvals \xA0", props.approvalList.facultyCount > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "jsx-1836586042" + " " + "badge badge-danger",
                children: props.approvalList.facultyCount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 93
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 45
          }, this), staff && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: {
              pathname: "/admin"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: router.pathname === "/admin" ? "active" : "inactive",
              className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-success ",
              children: "Faculty List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 68
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 32
          }, this), !staff && !faculty && props.roleAssignment && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: {
              pathname: "/faculty/role-assignment"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: router.pathname === "/faculty/role-assignment" ? "active" : "inactive",
              className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-success",
              children: ["Role Assignment \xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "jsx-1836586042" + " " + "badge badge-danger",
                children: "!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 51
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 63
          }, this), !staff && !faculty && !props.roleAssignment && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: {
              pathname: "/faculty/role-assignment"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: router.pathname === "/faculty/role-assignment" ? "active" : "inactive",
              className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-success",
              children: "Role Assignment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 70
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-1836586042" + " " + "list-group col-12",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            onClick: handleRemoveCookie,
            className: "jsx-1836586042" + " " + "list-group-item list-group-item-action list-group-item-danger",
            children: "Log Out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 41
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "1836586042",
        children: "#menu.jsx-1836586042{background-color:#017823;}.list-group-item-success.jsx-1836586042{text-indent:20%;}#active.jsx-1836586042{background-color:#005919;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFxzaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFYyxBQUdnQyxBQUdaLEFBR1UsZ0JBRjFCLFNBSEEsQUFNWSxXQUNaIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFxzaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIocHJvcHMpIHsgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWUsIHJlbW92ZUNvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUNvb2tpZSgpIHtcclxuICAgICAgICByZW1vdmVDb29raWUoXCJ1c2VyXCIsIHtwYXRoOicvJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmYWN1bHR5ID0gdHJ1ZVxyXG4gICAgbGV0IHN0YWZmID0gdHJ1ZVxyXG5cclxuICAgIGlmKHByb3BzLnJvbGUgPT0gMSB8fCBwcm9wcy5yb2xlID09IDIgfHwgcHJvcHMucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgc3RhZmYgPSBmYWxzZVxyXG4gICAgICAgIGlmKHByb3BzLnJvbGUgPT0gMiB8fCBwcm9wcy5yb2xlID09IDMpIHtcclxuICAgICAgICAgICAgZmFjdWx0eSA9IGZhbHNlXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcImZhbHNlXCIpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgXHRzZXRBY3RpdmUoIWlzQWN0aXZlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXJcIj5cclxuXHQgICAgPGRpdiBjbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWluZm8gY29sLTEyIGQtbWQtbm9uZSB0ZXh0LWNlbnRlclwiIG9uQ2xpY2sgPSB7aGFuZGxlVG9nZ2xlfT4gTWFpbiBNZW51IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJtZW51XCIgY2xhc3NOYW1lID0ge2lzQWN0aXZlID8gbnVsbCA6IFwiZC1ub25lIGQtbWQtYmxvY2tcIn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXNlY29uZGFyeVwiIGRhdGEtdG9nZ2xlID0gXCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0ID0gXCIjZmFjdWx0eU1lbnVcIiBhcmlhLWNvbnRyb2xzID0gXCJmYWN1bHR5TWVudVwiPiBGYWN1bHR5IDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSBcImZhY3VsdHlNZW51XCIgY2xhc3NOYW1lID0gXCJjb2xsYXBzZSBzaG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eVwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5EYXNoYm9hcmQ8L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9iYXNpYy1pbmZvXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYmFzaWMtaW5mb1wiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+QmFzaWMgSW5mb3JtYXRpb248L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9hY2NvbXBsaXNobWVudFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2FjY29tcGxpc2htZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5BY2NvbXBsaXNobWVudDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2ZhY3VsdHktbG9hZFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2ZhY3VsdHktbG9hZFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMb2FkPC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvdmlldy9hbGxcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvdmlldy9hbGxcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkZhY3VsdHkgTGlzdDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2FwcHJvdmFsXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9hcHByb3ZhbFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGluZyBBcHByb3ZhbHMgJm5ic3A7e3Byb3BzLmFwcHJvdmFsTGlzdC5mYWN1bHR5Q291bnQgPiAwICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntwcm9wcy5hcHByb3ZhbExpc3QuZmFjdWx0eUNvdW50fTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7IHN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2FkbWluXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hZG1pblwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMaXN0PC9hPjwvTGluaz4gfVxyXG5cdFx0ICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgcHJvcHMucm9sZUFzc2lnbm1lbnQgJiYgPExpbmsgaHJlZiA9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlIEFzc2lnbm1lbnQgJm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+ITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmICFwcm9wcy5yb2xlQXNzaWdubWVudCAmJiA8TGluayBocmVmID17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGUgQXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUNvb2tpZX0+TG9nIE91dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdCNtZW51IHtcclxuICBcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMTc4MjM7XHJcblx0XHRcdH1cclxuXHRcdFx0Lmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNze1xyXG5cdFx0XHRcdHRleHQtaW5kZW50OjIwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQjYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDU5MTk7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0PC9kaXY+XHRcdFx0XHRcdCAgICBcclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Derick\\\\Desktop\\\\\u2800\\\\Acads\\\\(2022) Third Year - Midyear OJT\\\\CS 190\\\\dpsm-qa-portal-QA\\\\components\\\\sidebar.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/unit-head/dashboard/accomplishment-count/accomplishment-count.js":
/*!*************************************************************************************!*\
  !*** ./components/unit-head/dashboard/accomplishment-count/accomplishment-count.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_unit_head_dashboard_accomplishment_count_accomplishment_dashboard_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_table */ "./components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_table.js");
/* harmony import */ var _components_unit_head_dashboard_accomplishment_count_accomplishment_dashboard_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_graph */ "./components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_graph.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\accomplishment-count\\accomplishment-count.js";





function AccomplishmentCount(props) {
  let accompList = props.children;
  let chemPSACount = 0;
  let chemTSCount = 0;
  let chemPubCount = 0;
  let chemRGCount = 0;
  let mcsuPSACount = 0;
  let mcsuTSCount = 0;
  let mcsuPubCount = 0;
  let mcsuRGCount = 0;
  let p6GeoPSACount = 0;
  let p6GeoTSCount = 0;
  let p6GeoPubCount = 0;
  let p6GeoRGCount = 0;
  let tableData = [];
  let unitId;
  let startDate;
  let endDate;

  if (accompList != null) {
    Object.keys(accompList).map(key => {
      if (accompList[key].faculty_unit.unitId == 1) {
        chemPSACount += accompList[key].faculty_public_services.length;
        chemTSCount += accompList[key].faculty_training_seminars.length;
        chemPubCount += accompList[key].faculty_publishers.length;
        chemRGCount += accompList[key].faculty_researchers.length;
      } else if (accompList[key].faculty_unit.unitId == 2) {
        mcsuPSACount += accompList[key].faculty_public_services.length;
        mcsuTSCount += accompList[key].faculty_training_seminars.length;
        mcsuPubCount += accompList[key].faculty_publishers.length;
        mcsuRGCount += accompList[key].faculty_researchers.length;
      } else if (accompList[key].faculty_unit.unitId == 3) {
        p6GeoPSACount += accompList[key].faculty_public_services.length;
        p6GeoTSCount += accompList[key].faculty_training_seminars.length;
        p6GeoPubCount += accompList[key].faculty_publishers.length;
        p6GeoRGCount += accompList[key].faculty_researchers.length;
      }

      if (accompList[key].faculty_public_services.length > 0) {
        accompList[key].faculty_public_services.forEach(async i => {
          await tableData.push({
            col1: accompList[key].lastName + ', ' + accompList[key].firstName,
            col2: i.position + ' - ' + i.organization,
            col3: 'Public Service',
            col4: i.startDate,
            col5: i.endDate
          });
        });
      }

      if (accompList[key].faculty_publishers.length > 0) {
        accompList[key].faculty_publishers.forEach(async i => {
          await tableData.push({
            col1: accompList[key].lastName + ', ' + accompList[key].firstName,
            col2: i.faculty_publication.title,
            col3: 'Publication',
            col4: i.faculty_publication.publicationDate,
            col5: i.faculty_publication.publicationDate
          });
        });
      }

      if (accompList[key].faculty_training_seminars.length > 0) {
        accompList[key].faculty_training_seminars.forEach(async i => {
          await tableData.push({
            col1: accompList[key].lastName + ', ' + accompList[key].firstName,
            col2: i.role + ' - ' + i.title,
            col3: 'Training/Seminar',
            col4: i.dateFrom,
            col5: i.dateTo
          });
        });
      }

      if (accompList[key].faculty_researchers.length > 0) {
        accompList[key].faculty_researchers.forEach(async i => {
          await tableData.push({
            col1: accompList[key].lastName + ', ' + accompList[key].firstName,
            col2: i.faculty_research_grant.researchName,
            col3: 'Research Grant',
            col4: i.faculty_research_grant.actualStart,
            col5: i.faculty_research_grant.actualEnd
          });
        });
      }
    });
  }

  const graphData = [{
    "AccomplishmentType": "Public Service",
    "MCSU": mcsuPSACount,
    "MCSUColor": "hsl(88, 70%, 50%)",
    "Chem": chemPSACount,
    "ChemColor": "hsl(102, 70%, 50%)",
    "Physics/Geology": p6GeoPSACount,
    "Physics/GeologyColor": "hsl(127, 70%, 50%)"
  }, {
    "AccomplishmentType": "Publications",
    "MCSU": mcsuPubCount,
    "MCSUColor": "hsl(109, 70%, 50%)",
    "Chem": chemPubCount,
    "ChemColor": "hsl(151, 70%, 50%)",
    "Physics/Geology": p6GeoPubCount,
    "Physics/GeologyColor": "hsl(177, 70%, 50%)"
  }, {
    "AccomplishmentType": "Research Grants",
    "MCSU": mcsuRGCount,
    "hot dogColor": "hsl(67, 70%, 50%)",
    "Chem": chemRGCount,
    "ChemColor": "hsl(215, 70%, 50%)",
    "Physics/Geology": p6GeoRGCount,
    "Physics/GeologyColor": "hsl(244, 70%, 50%)"
  }, {
    "AccomplishmentType": "Training/Seminars",
    "MCSU": mcsuTSCount,
    "hot dogColor": "hsl(234, 70%, 50%)",
    "Chem": chemTSCount,
    "ChemColor": "hsl(302, 70%, 50%)",
    "Physics/Geology": p6GeoTSCount,
    "Physics/GeologyColor": "hsl(178, 70%, 50%)"
  }];

  if (props.queryList.accomplishment == 1) {
    unitId = props.queryList.unitId;
    startDate = props.queryList.startDate;
    endDate = props.queryList.endDate;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-298159374",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-298159374"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      align: "center",
      className: "jsx-298159374",
      children: "Accomplishment Count"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-298159374" + " " + "form-row",
      children: [props.role == 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "DeptUnit",
          className: "jsx-298159374" + " " + "control-label",
          children: " Department Unit "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          name: "DeptUnit",
          id: "DeptUnit",
          defaultValue: unitId,
          className: "jsx-298159374" + " " + "form-control",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "0",
            className: "jsx-298159374",
            children: "All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "1",
            className: "jsx-298159374",
            children: "Chemistry Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "2",
            className: "jsx-298159374",
            children: "Mathematics and Computing Sciences Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "3",
            className: "jsx-298159374",
            children: "Physics and Geology Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 6
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "StartTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " From  "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "date",
          name: "StartTimePeriod",
          id: "StartTimePeriod",
          defaultValue: startDate,
          className: "jsx-298159374" + " " + "form-control"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "EndTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " To "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "date",
          name: "EndTimePeriod",
          id: "EndTimePeriod",
          defaultValue: endDate,
          className: "jsx-298159374" + " " + "form-control"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-298159374"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            let unitId;

            if (props.role == 3) {
              unitId = document.getElementById('DeptUnit').value;
            }

            let startDate = document.getElementById('StartTimePeriod').value;
            let endDate = document.getElementById('EndTimePeriod').value;
            let url = '/faculty';
            let query = {
              accomplishment: 1
            };
            if (unitId && unitId != 0) query.unitId = unitId;
            if (startDate) query.startDate = startDate;
            if (endDate) query.endDate = endDate;
            next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
              pathname: url,
              query
            });
          },
          className: "jsx-298159374" + " " + "btn btn-info",
          children: " Filter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "jsx-298159374",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-298159374" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          id: "graph-tab",
          "data-toggle": "tab",
          href: "#graph",
          role: "tab",
          "aria-controls": "graph",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          id: "table-tab",
          "data-toggle": "tab",
          href: "#table",
          role: "tab",
          "aria-controls": "table",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Full List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "nav-tabContent",
      className: "jsx-298159374" + " " + "tab-content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "graph",
        role: "tabpanel",
        "aria-labelledby": "graph-tab",
        className: "jsx-298159374" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_accomplishment_count_accomplishment_dashboard_graph__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: graphData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 103
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "table",
        role: "tabpanel",
        "aria-labelledby": "table-tab",
        className: "jsx-298159374" + " " + "tab-pane fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_accomplishment_count_accomplishment_dashboard_table__WEBPACK_IMPORTED_MODULE_2__.default, {
          data: tableData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 91
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "298159374",
      children: "a.nav-item.jsx-298159374:focus{background-color:#78b6c2;}a.nav-item.jsx-298159374:hover{background-color:#78b6c2;}a.active.jsx-298159374{background-color:#78b6c2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcYWNjb21wbGlzaG1lbnQtY291bnRcXGFjY29tcGxpc2htZW50LWNvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1OYyxBQUc2QixBQUdBLEFBR0EseUJBTHpCLEFBR0EsQUFHQSIsImZpbGUiOiJDOlxcVXNlcnNcXERlcmlja1xcRGVza3RvcFxc4qCAXFxBY2Fkc1xcKDIwMjIpIFRoaXJkIFllYXIgLSBNaWR5ZWFyIE9KVFxcQ1MgMTkwXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGFjY29tcGxpc2htZW50LWNvdW50XFxhY2NvbXBsaXNobWVudC1jb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY2NvbXBsaXNobWVudEFuYWx5dGljc1RhYmxlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9hY2NvbXBsaXNobWVudC1jb3VudC9hY2NvbXBsaXNobWVudF9kYXNoYm9hcmRfdGFibGUnXHJcbmltcG9ydCBBY2NvbXBsaXNobWVudERhc2hib2FyZEdyYXBoIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9hY2NvbXBsaXNobWVudC1jb3VudC9hY2NvbXBsaXNobWVudF9kYXNoYm9hcmRfZ3JhcGgnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBBY2NvbXBsaXNobWVudENvdW50KHByb3BzKXsgXHJcblx0bGV0IGFjY29tcExpc3QgPSBwcm9wcy5jaGlsZHJlblxyXG4gICAgXHJcbiAgICBsZXQgY2hlbVBTQUNvdW50ID0gMFxyXG4gICAgbGV0IGNoZW1UU0NvdW50ID0gMFxyXG5cdGxldCBjaGVtUHViQ291bnQgPSAwXHJcblx0bGV0IGNoZW1SR0NvdW50ID0gMFxyXG5cdFxyXG5cdGxldCBtY3N1UFNBQ291bnQgPSAwXHJcblx0bGV0IG1jc3VUU0NvdW50ID0gMFxyXG5cdGxldCBtY3N1UHViQ291bnQgPSAwXHJcblx0bGV0IG1jc3VSR0NvdW50ID0gMFxyXG5cdFxyXG5cdGxldCBwNkdlb1BTQUNvdW50ID0gMFxyXG5cdGxldCBwNkdlb1RTQ291bnQgPSAwXHJcblx0bGV0IHA2R2VvUHViQ291bnQgPSAwXHJcblx0bGV0IHA2R2VvUkdDb3VudCA9IDBcclxuXHJcblx0bGV0IHRhYmxlRGF0YSA9IFtdXHJcblxyXG5cdGxldCB1bml0SWRcclxuXHRsZXQgc3RhcnREYXRlXHJcblx0bGV0IGVuZERhdGVcclxuXHJcblx0aWYoYWNjb21wTGlzdCAhPSBudWxsKSB7XHJcblx0XHRPYmplY3Qua2V5cyhhY2NvbXBMaXN0KS5tYXAoa2V5ID0+IHtcclxuXHRcdCAgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkge1xyXG5cdFx0XHRjaGVtUFNBQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGljX3NlcnZpY2VzLmxlbmd0aFxyXG5cdFx0XHRjaGVtVFNDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV90cmFpbmluZ19zZW1pbmFycy5sZW5ndGhcclxuXHRcdFx0Y2hlbVB1YkNvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1Ymxpc2hlcnMubGVuZ3RoXHJcblx0XHRcdGNoZW1SR0NvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3Jlc2VhcmNoZXJzLmxlbmd0aFxyXG5cdFx0ICB9XHJcblx0XHQgIGVsc2UgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikge1xyXG5cdFx0XHRtY3N1UFNBQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGljX3NlcnZpY2VzLmxlbmd0aFxyXG5cdFx0XHRtY3N1VFNDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV90cmFpbmluZ19zZW1pbmFycy5sZW5ndGhcclxuXHRcdFx0bWNzdVB1YkNvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1Ymxpc2hlcnMubGVuZ3RoXHJcblx0XHRcdG1jc3VSR0NvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3Jlc2VhcmNoZXJzLmxlbmd0aFxyXG5cdFx0ICB9XHJcblx0XHQgIGVsc2UgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykge1xyXG5cdFx0XHRwNkdlb1BTQUNvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1YmxpY19zZXJ2aWNlcy5sZW5ndGhcclxuXHRcdFx0cDZHZW9UU0NvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3RyYWluaW5nX3NlbWluYXJzLmxlbmd0aFxyXG5cdFx0XHRwNkdlb1B1YkNvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1Ymxpc2hlcnMubGVuZ3RoXHJcblx0XHRcdHA2R2VvUkdDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9yZXNlYXJjaGVycy5sZW5ndGhcclxuXHRcdCAgfVxyXG5cclxuXHRcdCAgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGljX3NlcnZpY2VzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0YWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGljX3NlcnZpY2VzLmZvckVhY2goYXN5bmMgKGkpID0+IHtcclxuXHRcdFx0XHRhd2FpdCB0YWJsZURhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRjb2wxOiBhY2NvbXBMaXN0W2tleV0ubGFzdE5hbWUgKyAnLCAnICsgYWNjb21wTGlzdFtrZXldLmZpcnN0TmFtZSxcclxuXHRcdFx0XHRcdGNvbDI6IGkucG9zaXRpb24gKyAnIC0gJyArIGkub3JnYW5pemF0aW9uLFxyXG5cdFx0XHRcdFx0Y29sMzogJ1B1YmxpYyBTZXJ2aWNlJyxcclxuXHRcdFx0XHRcdGNvbDQ6IGkuc3RhcnREYXRlLFxyXG5cdFx0XHRcdFx0Y29sNTogaS5lbmREYXRlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdCAgfVxyXG5cclxuXHRcdCAgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGlzaGVycy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1Ymxpc2hlcnMuZm9yRWFjaChhc3luYyAoaSkgPT4ge1xyXG5cdFx0XHRcdGF3YWl0IHRhYmxlRGF0YS5wdXNoKHtcclxuXHRcdFx0XHRcdGNvbDE6IGFjY29tcExpc3Rba2V5XS5sYXN0TmFtZSArICcsICcgKyBhY2NvbXBMaXN0W2tleV0uZmlyc3ROYW1lLFxyXG5cdFx0XHRcdFx0Y29sMjogaS5mYWN1bHR5X3B1YmxpY2F0aW9uLnRpdGxlLFxyXG5cdFx0XHRcdFx0Y29sMzogJ1B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRcdGNvbDQ6IGkuZmFjdWx0eV9wdWJsaWNhdGlvbi5wdWJsaWNhdGlvbkRhdGUsXHJcblx0XHRcdFx0XHRjb2w1OiBpLmZhY3VsdHlfcHVibGljYXRpb24ucHVibGljYXRpb25EYXRlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdCAgfVxyXG5cclxuXHRcdCAgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdHJhaW5pbmdfc2VtaW5hcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV90cmFpbmluZ19zZW1pbmFycy5mb3JFYWNoKGFzeW5jIChpKSA9PiB7XHJcblx0XHRcdFx0YXdhaXQgdGFibGVEYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0Y29sMTogYWNjb21wTGlzdFtrZXldLmxhc3ROYW1lICsgJywgJyArIGFjY29tcExpc3Rba2V5XS5maXJzdE5hbWUsXHJcblx0XHRcdFx0XHRjb2wyOiBpLnJvbGUgKyAnIC0gJyArIGkudGl0bGUsXHJcblx0XHRcdFx0XHRjb2wzOiAnVHJhaW5pbmcvU2VtaW5hcicsXHJcblx0XHRcdFx0XHRjb2w0OiBpLmRhdGVGcm9tLFxyXG5cdFx0XHRcdFx0Y29sNTogaS5kYXRlVG9cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICBpZihhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9yZXNlYXJjaGVycy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3Jlc2VhcmNoZXJzLmZvckVhY2goYXN5bmMgKGkpID0+IHtcclxuXHRcdFx0XHRhd2FpdCB0YWJsZURhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRjb2wxOiBhY2NvbXBMaXN0W2tleV0ubGFzdE5hbWUgKyAnLCAnICsgYWNjb21wTGlzdFtrZXldLmZpcnN0TmFtZSxcclxuXHRcdFx0XHRcdGNvbDI6IGkuZmFjdWx0eV9yZXNlYXJjaF9ncmFudC5yZXNlYXJjaE5hbWUsXHJcblx0XHRcdFx0XHRjb2wzOiAnUmVzZWFyY2ggR3JhbnQnLFxyXG5cdFx0XHRcdFx0Y29sNDogaS5mYWN1bHR5X3Jlc2VhcmNoX2dyYW50LmFjdHVhbFN0YXJ0LFxyXG5cdFx0XHRcdFx0Y29sNTogaS5mYWN1bHR5X3Jlc2VhcmNoX2dyYW50LmFjdHVhbEVuZFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHQgIH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ3JhcGhEYXRhID0gW1xyXG5cdFx0e1xyXG5cdFx0ICBcIkFjY29tcGxpc2htZW50VHlwZVwiOiBcIlB1YmxpYyBTZXJ2aWNlXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1UFNBQ291bnQsXHJcblx0XHQgIFwiTUNTVUNvbG9yXCI6IFwiaHNsKDg4LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1QU0FDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMTAyLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9QU0FDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxMjcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJBY2NvbXBsaXNobWVudFR5cGVcIjogXCJQdWJsaWNhdGlvbnNcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VQdWJDb3VudCxcclxuXHRcdCAgXCJNQ1NVQ29sb3JcIjogXCJoc2woMTA5LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1QdWJDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMTUxLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9QdWJDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxNzcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJBY2NvbXBsaXNobWVudFR5cGVcIjogXCJSZXNlYXJjaCBHcmFudHNcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VSR0NvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCg2NywgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtUkdDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMjE1LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9SR0NvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDI0NCwgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkFjY29tcGxpc2htZW50VHlwZVwiOiBcIlRyYWluaW5nL1NlbWluYXJzXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1VFNDb3VudCxcclxuXHRcdCAgXCJob3QgZG9nQ29sb3JcIjogXCJoc2woMjM0LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1UU0NvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgzMDIsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb1RTQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTc4LCA3MCUsIDUwJSlcIixcclxuXHRcdH1cclxuXHQgIF1cclxuXHJcblx0aWYocHJvcHMucXVlcnlMaXN0LmFjY29tcGxpc2htZW50ID09IDEpIHtcclxuXHRcdHVuaXRJZCA9IHByb3BzLnF1ZXJ5TGlzdC51bml0SWRcclxuXHRcdHN0YXJ0RGF0ZSA9IHByb3BzLnF1ZXJ5TGlzdC5zdGFydERhdGVcclxuXHRcdGVuZERhdGUgPSBwcm9wcy5xdWVyeUxpc3QuZW5kRGF0ZVxyXG5cdH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxoMyBhbGlnbiA9IFwiY2VudGVyXCI+QWNjb21wbGlzaG1lbnQgQ291bnQ8L2gzPlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cHJvcHMucm9sZSA9PSAzICYmIFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRGVwdFVuaXRcIj4gRGVwYXJ0bWVudCBVbml0IDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJEZXB0VW5pdFwiIGlkPVwiRGVwdFVuaXRcIiBkZWZhdWx0VmFsdWU9e3VuaXRJZH0+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjBcIj5BbGw8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMVwiPkNoZW1pc3RyeSBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjJcIj5NYXRoZW1hdGljcyBhbmQgQ29tcHV0aW5nIFNjaWVuY2VzIFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiM1wiPlBoeXNpY3MgYW5kIEdlb2xvZ3kgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIlN0YXJ0VGltZVBlcmlvZFwiPiBGcm9tICA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcIlN0YXJ0VGltZVBlcmlvZFwiIGlkPVwiU3RhcnRUaW1lUGVyaW9kXCIgZGVmYXVsdFZhbHVlPXtzdGFydERhdGV9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJFbmRUaW1lUGVyaW9kXCI+IFRvIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiRW5kVGltZVBlcmlvZFwiIGlkPVwiRW5kVGltZVBlcmlvZFwiIGRlZmF1bHRWYWx1ZT17ZW5kRGF0ZX0vPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IHVuaXRJZFxyXG5cclxuXHRcdFx0XHRcdFx0aWYocHJvcHMucm9sZSA9PTMpIHtcclxuXHRcdFx0XHRcdFx0XHR1bml0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVwdFVuaXQnKS52YWx1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxldCBzdGFydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU3RhcnRUaW1lUGVyaW9kJykudmFsdWVcclxuXHRcdFx0XHRcdFx0bGV0IGVuZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRW5kVGltZVBlcmlvZCcpLnZhbHVlXHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gJy9mYWN1bHR5J1xyXG5cdFx0XHRcdFx0XHRsZXQgcXVlcnkgPSB7XHJcblx0XHRcdFx0XHRcdFx0YWNjb21wbGlzaG1lbnQ6IDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZih1bml0SWQgJiYgdW5pdElkICE9IDApIHF1ZXJ5LnVuaXRJZCA9IHVuaXRJZFxyXG5cdFx0XHRcdFx0XHRpZihzdGFydERhdGUpIHF1ZXJ5LnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVxyXG5cdFx0XHRcdFx0XHRpZihlbmREYXRlKSBxdWVyeS5lbmREYXRlID0gZW5kRGF0ZVxyXG5cclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdHBhdGhuYW1lOiB1cmwsXHJcblx0XHRcdFx0XHRcdFx0cXVlcnlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH19PiBGaWx0ZXI8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8bmF2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIG5hdi1maWxsIG5hdi1qdXN0aWZpZWRcIiBpZD1cIm5hdi10YWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImdyYXBoLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNncmFwaFwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZ3JhcGhcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5PdmVydmlldzwvYT5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJ0YWJsZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjdGFibGVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInRhYmxlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+RnVsbCBMaXN0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L25hdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cImdyYXBoXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZ3JhcGgtdGFiXCI+PEFjY29tcGxpc2htZW50RGFzaGJvYXJkR3JhcGggZGF0YT17Z3JhcGhEYXRhfSAvPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwidGFibGVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0YWJsZS10YWJcIj48QWNjb21wbGlzaG1lbnRBbmFseXRpY3NUYWJsZSBkYXRhPXt0YWJsZURhdGF9IC8+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdGEubmF2LWl0ZW06Zm9jdXN7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEubmF2LWl0ZW06aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEuYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvbXBsaXNobWVudENvdW50Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Derick\\\\Desktop\\\\\u2800\\\\Acads\\\\(2022) Third Year - Midyear OJT\\\\CS 190\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\accomplishment-count\\\\accomplishment-count.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AccomplishmentCount);

/***/ }),

/***/ "./components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_graph.js":
/*!***********************************************************************************************!*\
  !*** ./components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_graph.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/bar */ "@nivo/bar");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nivo_bar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\accomplishment-count\\accomplishment_dashboard_graph.js";
// install (please make sure versions match peerDependencies)
// npm install --save @nivo/bar

 // make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

class AccomplishmentDashboardGraph extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "graph",
      style: {
        height: 700
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nivo_bar__WEBPACK_IMPORTED_MODULE_1__.ResponsiveBar, {
        data: this.props.data,
        keys: ['MCSU', 'Chem', 'Physics/Geology'],
        indexBy: "AccomplishmentType",
        margin: {
          top: 50,
          right: 130,
          bottom: 50,
          left: 60
        },
        padding: 0.3,
        valueScale: {
          type: 'linear'
        },
        indexScale: {
          type: 'band',
          round: true
        },
        colors: {
          scheme: 'nivo'
        },
        borderColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        axisTop: null,
        axisRight: null,
        axisBottom: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Accomplishment Type',
          //label
          legendPosition: 'middle',
          legendOffset: 32
        },
        axisLeft: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Count',
          //label
          legendPosition: 'middle',
          legendOffset: -40,
          format: e => Math.floor(e) === e && e
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        legends: [{
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [{
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }]
        }],
        animate: true,
        motionStiffness: 90,
        motionDamping: 15
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AccomplishmentDashboardGraph);

/***/ }),

/***/ "./components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_table.js":
/*!***********************************************************************************************!*\
  !*** ./components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_table.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-table-to-excel */ "react-html-table-to-excel");
/* harmony import */ var react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\accomplishment-count\\accomplishment_dashboard_table.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // default search box filter

function DefaultColumnFilter({
  column: {
    filterValue,
    preFilteredRows,
    setFilter
  }
}) {
  const count = preFilteredRows.length;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    className: "form-control col-md-12",
    value: filterValue || '',
    onChange: e => {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: `Search ${count} records...`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
} // This is a custom filter UI for selecting
// a unique option from a list


function SelectColumnFilter({
  column: {
    filterValue,
    setFilter,
    preFilteredRows,
    id
  }
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
    className: "form-control col-md-12",
    value: filterValue,
    onChange: e => {
      setFilter(e.target.value || undefined);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: "",
      children: "All"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), options.map((option, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: option,
      children: option
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
} // the table markup


function Table({
  columns,
  data
}) {
  const defaultColumn = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => ({
    // Let's set up our default Filter UI
    Filter: DefaultColumnFilter
  }), []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      groupBy,
      expanded
    }
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_4__.useTable)({
    columns,
    data,
    defaultColumn,
    initialState: {
      pageIndex: 0
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_4__.useFilters, react_table__WEBPACK_IMPORTED_MODULE_4__.useGroupBy, react_table__WEBPACK_IMPORTED_MODULE_4__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_4__.useExpanded, react_table__WEBPACK_IMPORTED_MODULE_4__.usePagination);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3450710701",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-3450710701"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5___default()), {
      id: "test-table-xls-button",
      className: "btn btn-primary mb-2",
      table: "accomplishmentTable",
      filename: "accomplishment",
      buttonText: "Download as XLS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-3450710701"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      id: "accomplishmentTable",
      className: "jsx-3450710701" + " " + "table table-striped",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        className: "jsx-3450710701",
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          className: "jsx-3450710701",
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
            className: "jsx-3450710701",
            children: [column.render('Header'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "jsx-3450710701",
              children: column.isSorted ? column.isSortedDesc ? '▼' : '▲' : ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 4
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-3450710701",
              children: column.canFilter ? column.render('Filter') : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 5
            }, this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 16
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 12
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 8
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        className: "jsx-3450710701",
        children: page.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            className: "jsx-3450710701",
            children: row.cells.map(cell => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                style: {
                  background: cell.isGrouped ? '#0aff0082' : cell.isAggregated ? '#ffa50078' : cell.isPlaceholder ? '#ff000042' : 'white'
                },
                className: "jsx-3450710701",
                children: cell.isGrouped ?
                /*#__PURE__*/
                // If it's a grouped cell, add an expander and row count
                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                    className: "jsx-3450710701",
                    children: row.isExpanded ? '▼' : '►'
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 27
                  }, this), ' ', cell.render('Cell'), " (", row.subRows.length, ")"]
                }, void 0, true) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
                // renderer for cell
                cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                cell.render('Cell')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 21
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 8
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tfoot", {
        className: "jsx-3450710701",
        children: footerGroups.map(group => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, group.getFooterGroupProps()), {}, {
          className: "jsx-3450710701",
          children: group.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, column.getFooterProps()), {}, {
            className: "jsx-3450710701",
            children: [column.canGroupBy ?
            /*#__PURE__*/
            // If the column can be grouped, let's add a toggle
            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({}, column.getGroupByToggleProps()), {}, {
              className: "jsx-3450710701",
              children: column.isGrouped ? 'Click to Ungroup ' : 'Click to Group'
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 21
            }, this) : null, column.render('Footer')]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 15
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 2
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3450710701" + " " + "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-3450710701",
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: "jsx-3450710701",
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-3450710701",
        children: ["| Go to page:", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          defaultValue: pageIndex + 1,
          onChange: e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          },
          style: {
            width: '100px'
          },
          className: "jsx-3450710701"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        value: pageSize,
        onChange: e => {
          setPageSize(Number(e.target.value));
        },
        className: "jsx-3450710701",
        children: [10, 20, 30, 40, 50].map(pageSize => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: pageSize,
          className: "jsx-3450710701",
          children: ["Show ", pageSize]
        }, pageSize, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 6
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3450710701",
      children: "table.jsx-3450710701{display:block;overflow:x;white-space:nowrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcYWNjb21wbGlzaG1lbnQtY291bnRcXGFjY29tcGxpc2htZW50X2Rhc2hib2FyZF90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxT2tCLEFBR2tCLGNBQ0gsV0FDUSxtQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEZXJpY2tcXERlc2t0b3BcXOKggFxcQWNhZHNcXCgyMDIyKSBUaGlyZCBZZWFyIC0gTWlkeWVhciBPSlRcXENTIDE5MFxcZHBzbS1xYS1wb3J0YWwtUUFcXGNvbXBvbmVudHNcXHVuaXQtaGVhZFxcZGFzaGJvYXJkXFxhY2NvbXBsaXNobWVudC1jb3VudFxcYWNjb21wbGlzaG1lbnRfZGFzaGJvYXJkX3RhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCwgdXNlU29ydEJ5LCB1c2VGaWx0ZXJzLCB1c2VQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtdGFibGUnXHJcbmltcG9ydCBSZWFjdEhUTUxUYWJsZVRvRXhjZWwgZnJvbSAncmVhY3QtaHRtbC10YWJsZS10by1leGNlbCc7XHJcblxyXG4vLyBkZWZhdWx0IHNlYXJjaCBib3ggZmlsdGVyXHJcbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIgfSxcclxufSkge1xyXG4gIGNvbnN0IGNvdW50ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpIC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcclxuICAgICAgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtjb3VudH0gcmVjb3Jkcy4uLmB9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgZm9yIHNlbGVjdGluZ1xyXG4vLyBhIHVuaXF1ZSBvcHRpb24gZnJvbSBhIGxpc3RcclxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKVxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgb3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgLy8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcclxuICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VsZWN0PlxyXG4gIClcclxufVxyXG5cclxuLy8gdGhlIHRhYmxlIG1hcmt1cFxyXG5mdW5jdGlvbiBUYWJsZSAoe2NvbHVtbnMsIGRhdGF9KXtcclxuIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gTGV0J3Mgc2V0IHVwIG91ciBkZWZhdWx0IEZpbHRlciBVSVxyXG4gICAgICBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICAgY29uc3Qge1xyXG4gICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgIGZvb3Rlckdyb3VwcyxcclxuICAgICBwcmVwYXJlUm93LFxyXG4gICAgIHBhZ2UsXHJcbiAgICAgcm93cywgXHJcblxyXG4gICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgY2FuTmV4dFBhZ2UsXHJcbiAgICBwYWdlT3B0aW9ucyxcclxuICAgIHBhZ2VDb3VudCxcclxuICAgIGdvdG9QYWdlLFxyXG4gICAgbmV4dFBhZ2UsXHJcbiAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICBzZXRQYWdlU2l6ZSxcclxuICAgIHN0YXRlOiB7IHBhZ2VJbmRleCwgcGFnZVNpemUsIGdyb3VwQnksIGV4cGFuZGVkIH0sXHJcbiAgIH0gPSB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGEsIGRlZmF1bHRDb2x1bW4sIGluaXRpYWxTdGF0ZTogeyBwYWdlSW5kZXg6IDAgfSB9LCB1c2VGaWx0ZXJzLCB1c2VHcm91cEJ5LCB1c2VTb3J0QnksIHVzZUV4cGFuZGVkLCB1c2VQYWdpbmF0aW9uKVxyXG5cclxuIHJldHVybihcclxuPGRpdj5cclxuICAgIDxiciAvPlxyXG4gICAgPFJlYWN0SFRNTFRhYmxlVG9FeGNlbFxyXG5cdFx0XHRcdGlkPVwidGVzdC10YWJsZS14bHMtYnV0dG9uXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWItMlwiXHJcblx0XHRcdFx0dGFibGU9XCJhY2NvbXBsaXNobWVudFRhYmxlXCJcclxuXHRcdFx0XHRmaWxlbmFtZT1cImFjY29tcGxpc2htZW50XCJcclxuXHRcdFx0XHRidXR0b25UZXh0PVwiRG93bmxvYWQgYXMgWExTXCIvPlxyXG4gICAgPGJyIC8+XHJcbiAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIiB7Li4uZ2V0VGFibGVQcm9wcygpfSBpZD1cImFjY29tcGxpc2htZW50VGFibGVcIj5cclxuICAgICAgIDx0aGVhZD5cclxuICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICA8dGhcclxuXHRcdC8vIHNvcnRpbmcgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG5cdFx0IDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICfilrwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ+KWsidcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdCAgPGRpdj57Y29sdW1uLmNhbkZpbHRlciA/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpIDogbnVsbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICkpfVxyXG4gICAgICAgPC90aGVhZD5cclxuICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgIHtwYWdlLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXMsIGxldCdzIGNvbG9yIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2VsbCBkZXBlbmRpbmcgb24gd2hhdCB0eXBlIGl0IGlzIGdpdmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSB1c2VHcm91cEJ5IGhvb2tcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VsbC5pc0dyb3VwZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjMGFmZjAwODInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZmE1MDA3OCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZjAwMDA0MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn4pa8JyA6ICfilronfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcpfSAoe3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJylcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICA8L3Rib2R5PlxyXG5cdDx0Zm9vdD5cclxuICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChncm91cCA9PiAoXHJcbiAgICAgICAgICA8dHIgey4uLmdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgIHtncm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgIDx0ZCBcclxuXHRcdHsuLi5jb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoKX0+XHJcblx0XHR7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICdDbGljayB0byBVbmdyb3VwICcgOiAnQ2xpY2sgdG8gR3JvdXAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblx0XHRcclxuXHRcdHtjb2x1bW4ucmVuZGVyKCdGb290ZXInKX1cclxuXHQgICAgICA8L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGZvb3Q+XHJcbiAgICAgPC90YWJsZT5cclxuXHJcblx0XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7JzwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPj4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBQYWdleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0dGFibGV7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRvdmVyZmxvdzogeDtcclxuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcbjwvZGl2PlxyXG4gKVxyXG4gIFxyXG59XHJcbiBcclxuXHJcbi8vIGNvbmZpZ3VyZSBjb2x1bW5zLCBwb3B1bGF0ZSBjZWxscywgcmVuZGVyIHRhYmxlXHJcbiBmdW5jdGlvbiBBY2NvbXBsaXNobWVudEFuYWx5dGljc1RhYmxlKHByb3BzKSB7IFxyXG4gICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxyXG4gXHJcbiAgIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgICgpID0+IFtcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnTmFtZSBvZiBGYWN1bHR5JyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wxJywgLy8gYWNjZXNzb3IgaXMgdGhlIFwia2V5XCIgaW4gdGhlIGRhdGEsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IE5hbWVzYCxcclxuXHQgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdBY2NvbXBsaXNobWVudCcsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMicsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEFjY29tcGxpc2htZW50c2AsXHJcblx0IEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnQWNjb21wbGlzaG1lbnQgVHlwZScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMycsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnU3RhcnQgRGF0ZSAoY2xpY2sgdG8gc29ydCknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDQnLFxyXG5cdCBzb3J0Qnk6ICdkYXRldGltZScsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBkaXNhYmxlRmlsdGVyczogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnRW5kIERhdGUgKGNsaWNrIHRvIHNvcnQpJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2w1JyxcclxuXHQgc29ydEJ5OiAnZGF0ZXRpbWUnLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgZGlzYWJsZUZpbHRlcnM6IHRydWVcclxuICAgICAgIH1cclxuICAgICBdLFxyXG4gICAgIFtdXHJcbiAgIClcclxuIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPiBcclxuICAgKVxyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb21wbGlzaG1lbnRBbmFseXRpY3NUYWJsZVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Derick\\\\Desktop\\\\\u2800\\\\Acads\\\\(2022) Third Year - Midyear OJT\\\\CS 190\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\accomplishment-count\\\\accomplishment_dashboard_table.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 1
  }, this);
} // configure columns, populate cells, render table


function AccomplishmentAnalyticsTable(props) {
  const data = props.data;
  const columns = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => [{
    Header: 'Name of Faculty',
    Footer: '',
    accessor: 'col1',
    // accessor is the "key" in the data,
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Names`,
    Filter: DefaultColumnFilter,
    disableSortBy: true
  }, {
    Header: 'Accomplishment',
    Footer: '',
    accessor: 'col2',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Accomplishments`,
    Filter: DefaultColumnFilter,
    disableSortBy: true
  }, {
    Header: 'Accomplishment Type',
    Footer: '',
    accessor: 'col3',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: SelectColumnFilter,
    disableSortBy: true
  }, {
    Header: 'Start Date (click to sort)',
    Footer: '',
    accessor: 'col4',
    sortBy: 'datetime',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    disableFilters: true
  }, {
    Header: 'End Date (click to sort)',
    Footer: '',
    accessor: 'col5',
    sortBy: 'datetime',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    disableFilters: true
  }], []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
    columns: columns,
    data: data
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 299,
    columnNumber: 6
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AccomplishmentAnalyticsTable);

/***/ }),

/***/ "./components/unit-head/dashboard/degree/degree.js":
/*!*********************************************************!*\
  !*** ./components/unit-head/dashboard/degree/degree.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_unit_head_dashboard_degree_degree_dashboard_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/unit-head/dashboard/degree/degree_dashboard_table */ "./components/unit-head/dashboard/degree/degree_dashboard_table.js");
/* harmony import */ var _components_unit_head_dashboard_degree_degree_dashboard_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/unit-head/dashboard/degree/degree_dashboard_graph */ "./components/unit-head/dashboard/degree/degree_dashboard_graph.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\degree\\degree.js";





function DegreeCount(props) {
  let educList = props.children;
  let chemBSCount = 0;
  let chemMACount = 0;
  let chemPHDCount = 0;
  let chemOthersCount = 0;
  let mcsuBSCount = 0;
  let mcsuMACount = 0;
  let mcsuPHDCount = 0;
  let mcsuOthersCount = 0;
  let p6GeoBSCount = 0;
  let p6GeoMACount = 0;
  let p6GeoPHDCount = 0;
  let p6GeoOthersCount = 0;
  let tableData = [];

  if (educList) {
    educList.forEach(async e => {
      await e.faculty_education_infos.forEach(async i => {
        if (i.degreeType == 'BS' || i.degreeType == 'BA') {
          if (e.faculty_unit.unitId == 1) {
            chemBSCount++;
          } else if (e.faculty_unit.unitId == 2) {
            mcsuBSCount++;
          } else if (e.faculty_unit.unitId == 3) {
            p6GeoBSCount++;
          }
        } else if (i.degreeType == 'MA' || i.degreeType == 'MS') {
          if (e.faculty_unit.unitId == 1) {
            chemMACount++;
          } else if (e.faculty_unit.unitId == 2) {
            mcsuMACount++;
          } else if (e.faculty_unit.unitId == 3) {
            p6GeoMACount++;
          }
        } else if (i.degreeType == 'PhD') {
          if (e.faculty_unit.unitId == 1) {
            chemPHDCount++;
          } else if (e.faculty_unit.unitId == 2) {
            mcsuPHDCount++;
          } else if (e.faculty_unit.unitId == 3) {
            p6GeoPHDCount++;
          }
        } else {
          if (e.faculty_unit.unitId == 1) {
            chemOthersCount++;
          } else if (e.faculty_unit.unitId == 2) {
            mcsuOthersCount++;
          } else if (e.faculty_unit.unitId == 3) {
            p6GeoOthersCount++;
          }
        }

        await tableData.push({
          col1: e.lastName + ', ' + e.firstName,
          col2: i.degreeCert,
          col3: i.degreeType,
          col4: i.endDate
        });
      });
    });
  }

  const graphData = [{
    "DegreeAttained": "Bachelor's",
    "MCSU": mcsuBSCount,
    "MCSUColor": "hsl(88, 70%, 50%)",
    "Chem": chemBSCount,
    "ChemColor": "hsl(102, 70%, 50%)",
    "Physics/Geology": p6GeoBSCount,
    "Physics/GeologyColor": "hsl(127, 70%, 50%)"
  }, {
    "DegreeAttained": "Master's",
    "MCSU": mcsuMACount,
    "MCSUColor": "hsl(109, 70%, 50%)",
    "Chem": chemMACount,
    "ChemColor": "hsl(151, 70%, 50%)",
    "Physics/Geology": p6GeoMACount,
    "Physics/GeologyColor": "hsl(177, 70%, 50%)"
  }, {
    "DegreeAttained": "Doctorate",
    "MCSU": mcsuPHDCount,
    "hot dogColor": "hsl(67, 70%, 50%)",
    "Chem": chemPHDCount,
    "ChemColor": "hsl(215, 70%, 50%)",
    "Physics/Geology": p6GeoPHDCount,
    "Physics/GeologyColor": "hsl(244, 70%, 50%)"
  }, {
    "DegreeAttained": "Other",
    "MCSU": mcsuOthersCount,
    "hot dogColor": "hsl(234, 70%, 50%)",
    "Chem": chemOthersCount,
    "ChemColor": "hsl(302, 70%, 50%)",
    "Physics/Geology": p6GeoOthersCount,
    "Physics/GeologyColor": "hsl(178, 70%, 50%)"
  }];
  let unitId;
  let startDate;
  let endDate;

  if (props.queryList.degree == 1) {
    unitId = props.queryList.unitId;
    startDate = props.queryList.startDate;
    endDate = props.queryList.endDate;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-298159374",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-298159374"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      align: "center",
      className: "jsx-298159374",
      children: "Attained Degrees"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-298159374" + " " + "form-row",
      children: [props.role == 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "DegreeDeptUnit",
          className: "jsx-298159374" + " " + "control-label",
          children: " Department Unit "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          name: "DegreeDeptUnit",
          id: "DegreeDeptUnit",
          defaultValue: unitId,
          className: "jsx-298159374" + " " + "form-control",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "0",
            className: "jsx-298159374",
            children: "All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "1",
            className: "jsx-298159374",
            children: "Chemistry Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "2",
            className: "jsx-298159374",
            children: "Mathematics and Computing Sciences Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "3",
            className: "jsx-298159374",
            children: "Physics and Geology Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 6
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "DegreeStartTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " From  "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "date",
          name: "DegreeStartTimePeriod",
          id: "DegreeStartTimePeriod",
          defaultValue: startDate,
          className: "jsx-298159374" + " " + "form-control"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "DegreeEndTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " To "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "date",
          name: "DegreeEndTimePeriod",
          id: "DegreeEndTimePeriod",
          defaultValue: endDate,
          className: "jsx-298159374" + " " + "form-control"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-298159374"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            let unitId;
            if (props.role == 3) unitId = document.getElementById('DegreeDeptUnit').value;
            let startDate = document.getElementById('DegreeStartTimePeriod').value;
            let endDate = document.getElementById('DegreeEndTimePeriod').value;
            let url = '/faculty';
            let query = {
              degree: 1
            };
            if (unitId && unitId != 0) query.unitId = unitId;
            if (startDate) query.startDate = startDate;
            if (endDate) query.endDate = endDate;
            next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
              pathname: url,
              query
            });
          },
          className: "jsx-298159374" + " " + "btn btn-info",
          children: " Filter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "jsx-298159374",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-298159374" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          id: "degree-graph-tab",
          "data-toggle": "tab",
          href: "#degree-graph",
          role: "tab",
          "aria-controls": "degree-graph",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          id: "table-tab",
          "data-toggle": "tab",
          href: "#degree-table",
          role: "tab",
          "aria-controls": "degree-table",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Full List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "nav-tabContent",
      className: "jsx-298159374" + " " + "tab-content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "degree-graph",
        role: "tabpanel",
        "aria-labelledby": "degree-graph-tab",
        className: "jsx-298159374" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_degree_degree_dashboard_graph__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: graphData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 121
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "degree-table",
        role: "tabpanel",
        "aria-labelledby": "degree-table-tab",
        className: "jsx-298159374" + " " + "tab-pane fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_degree_degree_dashboard_table__WEBPACK_IMPORTED_MODULE_2__.default, {
          data: tableData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 109
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "298159374",
      children: "a.nav-item.jsx-298159374:focus{background-color:#78b6c2;}a.nav-item.jsx-298159374:hover{background-color:#78b6c2;}a.active.jsx-298159374{background-color:#78b6c2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcZGVncmVlXFxkZWdyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUxjLEFBRzZCLEFBR0EsQUFHQSx5QkFMekIsQUFHQSxBQUdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcZGVncmVlXFxkZWdyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVncmVlQW5hbHl0aWNzVGFibGUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2RlZ3JlZS9kZWdyZWVfZGFzaGJvYXJkX3RhYmxlJ1xyXG5pbXBvcnQgRGVncmVlRGFzaGJvYXJkR3JhcGggZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2RlZ3JlZS9kZWdyZWVfZGFzaGJvYXJkX2dyYXBoJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gRGVncmVlQ291bnQocHJvcHMpIHtcclxuXHRsZXQgZWR1Y0xpc3QgPSBwcm9wcy5jaGlsZHJlblxyXG5cclxuXHRsZXQgY2hlbUJTQ291bnQgPSAwXHJcblx0bGV0IGNoZW1NQUNvdW50ID0gMFxyXG5cdGxldCBjaGVtUEhEQ291bnQgPSAwXHJcblx0bGV0IGNoZW1PdGhlcnNDb3VudCA9IDBcclxuXHJcblx0bGV0IG1jc3VCU0NvdW50ID0gMFxyXG5cdGxldCBtY3N1TUFDb3VudCA9IDBcclxuXHRsZXQgbWNzdVBIRENvdW50ID0gMFxyXG5cdGxldCBtY3N1T3RoZXJzQ291bnQgPSAwXHJcblxyXG5cdGxldCBwNkdlb0JTQ291bnQgPSAwXHJcblx0bGV0IHA2R2VvTUFDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9QSERDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9PdGhlcnNDb3VudCA9IDBcclxuXHJcblx0bGV0IHRhYmxlRGF0YSA9IFtdXHJcblxyXG5cdGlmKGVkdWNMaXN0KSB7XHJcblx0XHRlZHVjTGlzdC5mb3JFYWNoKGFzeW5jIChlKSA9PiB7IFxyXG5cdFx0XHRhd2FpdCBlLmZhY3VsdHlfZWR1Y2F0aW9uX2luZm9zLmZvckVhY2goYXN5bmMgKGkpID0+IHsgXHJcblx0XHRcdFx0XHJcblx0XHJcblx0XHRcdFx0aWYoaS5kZWdyZWVUeXBlID09ICdCUycgfHwgaS5kZWdyZWVUeXBlID09ICdCQScpIHtcclxuXHRcdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGNoZW1CU0NvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikge1xyXG5cdFx0XHRcdFx0XHRtY3N1QlNDb3VudCsrXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHtcclxuXHRcdFx0XHRcdFx0cDZHZW9CU0NvdW50KytcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYoaS5kZWdyZWVUeXBlID09ICdNQScgfHwgaS5kZWdyZWVUeXBlID09ICdNUycpIHtcclxuXHRcdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGNoZW1NQUNvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikge1xyXG5cdFx0XHRcdFx0XHRtY3N1TUFDb3VudCsrXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHtcclxuXHRcdFx0XHRcdFx0cDZHZW9NQUNvdW50KytcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYoaS5kZWdyZWVUeXBlID09ICdQaEQnKSB7XHJcblx0XHRcdFx0XHRpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRjaGVtUEhEQ291bnQrK1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSB7XHJcblx0XHRcdFx0XHRcdG1jc3VQSERDb3VudCsrXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHtcclxuXHRcdFx0XHRcdFx0cDZHZW9QSERDb3VudCsrXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGNoZW1PdGhlcnNDb3VudCsrXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIHtcclxuXHRcdFx0XHRcdFx0bWNzdU90aGVyc0NvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykge1xyXG5cdFx0XHRcdFx0XHRwNkdlb090aGVyc0NvdW50KytcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHJcblx0XHRcdFx0YXdhaXQgdGFibGVEYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0Y29sMTogZS5sYXN0TmFtZSArICcsICcgKyBlLmZpcnN0TmFtZSxcclxuXHRcdFx0XHRcdGNvbDI6IGkuZGVncmVlQ2VydCxcclxuXHRcdFx0XHRcdCAgY29sMzogaS5kZWdyZWVUeXBlLFxyXG5cdFx0XHRcdFx0ICBjb2w0OiBpLmVuZERhdGVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdyYXBoRGF0YSA9IFtcclxuXHRcdHtcclxuXHRcdCAgXCJEZWdyZWVBdHRhaW5lZFwiOiBcIkJhY2hlbG9yJ3NcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VCU0NvdW50LFxyXG5cdFx0ICBcIk1DU1VDb2xvclwiOiBcImhzbCg4OCwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtQlNDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMTAyLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9CU0NvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDEyNywgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkRlZ3JlZUF0dGFpbmVkXCI6IFwiTWFzdGVyJ3NcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VNQUNvdW50LFxyXG5cdFx0ICBcIk1DU1VDb2xvclwiOiBcImhzbCgxMDksIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbU1BQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDE1MSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvTUFDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxNzcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJEZWdyZWVBdHRhaW5lZFwiOiBcIkRvY3RvcmF0ZVwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdVBIRENvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCg2NywgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtUEhEQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDIxNSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvUEhEQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMjQ0LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiRGVncmVlQXR0YWluZWRcIjogXCJPdGhlclwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdU90aGVyc0NvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCgyMzQsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbU90aGVyc0NvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgzMDIsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb090aGVyc0NvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDE3OCwgNzAlLCA1MCUpXCIsXHJcblx0XHR9XHJcblx0ICBdXHJcblxyXG5cdGxldCB1bml0SWRcclxuXHRsZXQgc3RhcnREYXRlXHJcblx0bGV0IGVuZERhdGVcclxuXHJcblx0aWYocHJvcHMucXVlcnlMaXN0LmRlZ3JlZSA9PSAxKSB7XHJcblx0XHR1bml0SWQgPSBwcm9wcy5xdWVyeUxpc3QudW5pdElkXHJcblx0XHRzdGFydERhdGUgPSBwcm9wcy5xdWVyeUxpc3Quc3RhcnREYXRlXHJcblx0XHRlbmREYXRlID0gcHJvcHMucXVlcnlMaXN0LmVuZERhdGVcclxuXHR9XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxoMyBhbGlnbiA9IFwiY2VudGVyXCI+QXR0YWluZWQgRGVncmVlczwvaDM+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDMgJiYgXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJEZWdyZWVEZXB0VW5pdFwiPiBEZXBhcnRtZW50IFVuaXQgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcIkRlZ3JlZURlcHRVbml0XCIgaWQ9XCJEZWdyZWVEZXB0VW5pdFwiIGRlZmF1bHRWYWx1ZT17dW5pdElkfT5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMFwiPkFsbDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+Q2hlbWlzdHJ5IFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPk1hdGhlbWF0aWNzIGFuZCBDb21wdXRpbmcgU2NpZW5jZXMgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIzXCI+UGh5c2ljcyBhbmQgR2VvbG9neSBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRGVncmVlU3RhcnRUaW1lUGVyaW9kXCI+IEZyb20gIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiRGVncmVlU3RhcnRUaW1lUGVyaW9kXCIgaWQ9XCJEZWdyZWVTdGFydFRpbWVQZXJpb2RcIiBkZWZhdWx0VmFsdWU9e3N0YXJ0RGF0ZX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkRlZ3JlZUVuZFRpbWVQZXJpb2RcIj4gVG8gPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJEZWdyZWVFbmRUaW1lUGVyaW9kXCIgaWQ9XCJEZWdyZWVFbmRUaW1lUGVyaW9kXCIgZGVmYXVsdFZhbHVlPXtlbmREYXRlfS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgdW5pdElkIFxyXG5cdFx0XHRcdFx0XHRpZihwcm9wcy5yb2xlID09IDMpIHVuaXRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEZWdyZWVEZXB0VW5pdCcpLnZhbHVlXHJcblx0XHRcdFx0XHRcdGxldCBzdGFydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVncmVlU3RhcnRUaW1lUGVyaW9kJykudmFsdWVcclxuXHRcdFx0XHRcdFx0bGV0IGVuZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVncmVlRW5kVGltZVBlcmlvZCcpLnZhbHVlXHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gJy9mYWN1bHR5J1xyXG5cdFx0XHRcdFx0XHRsZXQgcXVlcnkgPSB7XHJcblx0XHRcdFx0XHRcdFx0ZGVncmVlOiAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYodW5pdElkICYmIHVuaXRJZCAhPSAwKSBxdWVyeS51bml0SWQgPSB1bml0SWRcclxuXHRcdFx0XHRcdFx0aWYoc3RhcnREYXRlKSBxdWVyeS5zdGFydERhdGUgPSBzdGFydERhdGVcclxuXHRcdFx0XHRcdFx0aWYoZW5kRGF0ZSkgcXVlcnkuZW5kRGF0ZSA9IGVuZERhdGVcclxuXHJcblx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRwYXRobmFtZTogdXJsLFxyXG5cdFx0XHRcdFx0XHRcdHF1ZXJ5XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9fT4gRmlsdGVyPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PG5hdj5cclxuICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgbmF2LWZpbGwgbmF2LWp1c3RpZmllZFwiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZGVncmVlLWdyYXBoLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNkZWdyZWUtZ3JhcGhcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImRlZ3JlZS1ncmFwaFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPk92ZXJ2aWV3PC9hPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cInRhYmxlLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNkZWdyZWUtdGFibGVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImRlZ3JlZS10YWJsZVwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkZ1bGwgTGlzdDwvYT5cclxuICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8L25hdj5cclxuXHQgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XHJcblx0ICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwiZGVncmVlLWdyYXBoXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVncmVlLWdyYXBoLXRhYlwiPjxEZWdyZWVEYXNoYm9hcmRHcmFwaCBkYXRhPXtncmFwaERhdGF9IC8+PC9kaXY+XHJcblx0ICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZGVncmVlLXRhYmxlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVncmVlLXRhYmxlLXRhYlwiPjxEZWdyZWVBbmFseXRpY3NUYWJsZSBkYXRhPXt0YWJsZURhdGF9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRhLm5hdi1pdGVtOmZvY3Vze1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLm5hdi1pdGVtOmhvdmVye1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLmFjdGl2ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVncmVlQ291bnQiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Derick\\\\Desktop\\\\\u2800\\\\Acads\\\\(2022) Third Year - Midyear OJT\\\\CS 190\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\degree\\\\degree.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DegreeCount);

/***/ }),

/***/ "./components/unit-head/dashboard/degree/degree_dashboard_graph.js":
/*!*************************************************************************!*\
  !*** ./components/unit-head/dashboard/degree/degree_dashboard_graph.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/bar */ "@nivo/bar");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nivo_bar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\degree\\degree_dashboard_graph.js";
// install (please make sure versions match peerDependencies)
// npm install --save @nivo/bar

 // make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

class DegreeDashboardGraph extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "graph",
      style: {
        height: 700
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nivo_bar__WEBPACK_IMPORTED_MODULE_1__.ResponsiveBar, {
        data: this.props.data,
        keys: ['MCSU', 'Chem', 'Physics/Geology'],
        indexBy: "DegreeAttained",
        margin: {
          top: 50,
          right: 130,
          bottom: 50,
          left: 60
        },
        padding: 0.3,
        valueScale: {
          type: 'linear'
        },
        indexScale: {
          type: 'band',
          round: true
        },
        colors: {
          scheme: 'nivo'
        },
        borderColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        axisTop: null,
        axisRight: null,
        axisBottom: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Degree Attained',
          //label
          legendPosition: 'middle',
          legendOffset: 32
        },
        axisLeft: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Count',
          //label
          legendPosition: 'middle',
          legendOffset: -40,
          format: e => Math.floor(e) === e && e
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        legends: [{
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [{
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }]
        }],
        animate: true,
        motionStiffness: 90,
        motionDamping: 15
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DegreeDashboardGraph);

/***/ }),

/***/ "./components/unit-head/dashboard/degree/degree_dashboard_table.js":
/*!*************************************************************************!*\
  !*** ./components/unit-head/dashboard/degree/degree_dashboard_table.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-table-to-excel */ "react-html-table-to-excel");
/* harmony import */ var react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\degree\\degree_dashboard_table.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // default search box filter

function DefaultColumnFilter({
  column: {
    filterValue,
    preFilteredRows,
    setFilter
  }
}) {
  const count = preFilteredRows.length;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    className: "form-control col-md-12",
    value: filterValue || '',
    onChange: e => {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: `Search ${count} records...`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
} // This is a custom filter UI for selecting
// a unique option from a list


function SelectColumnFilter({
  column: {
    filterValue,
    setFilter,
    preFilteredRows,
    id
  }
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
    className: "form-control col-md-12",
    value: filterValue,
    onChange: e => {
      setFilter(e.target.value || undefined);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: "",
      children: "All"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), options.map((option, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: option,
      children: option
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
} // the table markup


function Table({
  columns,
  data
}) {
  const defaultColumn = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => ({
    // Let's set up our default Filter UI
    Filter: DefaultColumnFilter
  }), []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      groupBy,
      expanded
    }
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_4__.useTable)({
    columns,
    data,
    defaultColumn,
    initialState: {
      pageIndex: 0
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_4__.useFilters, react_table__WEBPACK_IMPORTED_MODULE_4__.useGroupBy, react_table__WEBPACK_IMPORTED_MODULE_4__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_4__.useExpanded, react_table__WEBPACK_IMPORTED_MODULE_4__.usePagination);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3450710701",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-3450710701"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5___default()), {
      id: "test-table-xls-button",
      className: "btn btn-primary mb-2",
      table: "degreeTable",
      filename: "degree",
      buttonText: "Download as XLS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-3450710701"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      id: "degreeTable",
      className: "jsx-3450710701" + " " + "table table-striped",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        className: "jsx-3450710701",
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          className: "jsx-3450710701",
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
            className: "jsx-3450710701",
            children: [column.render('Header'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "jsx-3450710701",
              children: column.isSorted ? column.isSortedDesc ? '▼' : '▲' : ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 4
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-3450710701",
              children: column.canFilter ? column.render('Filter') : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 5
            }, this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 16
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 12
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 8
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        className: "jsx-3450710701",
        children: page.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            className: "jsx-3450710701",
            children: row.cells.map(cell => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                style: {
                  background: cell.isGrouped ? '#0aff0082' : cell.isAggregated ? '#ffa50078' : cell.isPlaceholder ? '#ff000042' : 'white'
                },
                className: "jsx-3450710701",
                children: cell.isGrouped ?
                /*#__PURE__*/
                // If it's a grouped cell, add an expander and row count
                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                    className: "jsx-3450710701",
                    children: row.isExpanded ? '▼' : '►'
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 27
                  }, this), ' ', cell.render('Cell'), " (", row.subRows.length, ")"]
                }, void 0, true) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
                // renderer for cell
                cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                cell.render('Cell')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 21
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 8
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tfoot", {
        className: "jsx-3450710701",
        children: footerGroups.map(group => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, group.getFooterGroupProps()), {}, {
          className: "jsx-3450710701",
          children: group.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, column.getFooterProps()), {}, {
            className: "jsx-3450710701",
            children: [column.canGroupBy ?
            /*#__PURE__*/
            // If the column can be grouped, let's add a toggle
            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({}, column.getGroupByToggleProps()), {}, {
              className: "jsx-3450710701",
              children: column.isGrouped ? 'Click to Ungroup ' : 'Click to Group'
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 21
            }, this) : null, column.render('Footer')]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 15
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 2
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3450710701" + " " + "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-3450710701",
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: "jsx-3450710701",
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-3450710701",
        children: ["| Go to page:", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          defaultValue: pageIndex + 1,
          onChange: e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          },
          style: {
            width: '100px'
          },
          className: "jsx-3450710701"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        value: pageSize,
        onChange: e => {
          setPageSize(Number(e.target.value));
        },
        className: "jsx-3450710701",
        children: [10, 20, 30, 40, 50].map(pageSize => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: pageSize,
          className: "jsx-3450710701",
          children: ["Show ", pageSize]
        }, pageSize, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 6
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3450710701",
      children: "table.jsx-3450710701{display:block;overflow:x;white-space:nowrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcZGVncmVlXFxkZWdyZWVfZGFzaGJvYXJkX3RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFPa0IsQUFHa0IsY0FDSCxXQUNRLG1CQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXERlcmlja1xcRGVza3RvcFxc4qCAXFxBY2Fkc1xcKDIwMjIpIFRoaXJkIFllYXIgLSBNaWR5ZWFyIE9KVFxcQ1MgMTkwXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGRlZ3JlZVxcZGVncmVlX2Rhc2hib2FyZF90YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlR3JvdXBCeSwgdXNlRXhwYW5kZWQsIHVzZVNvcnRCeSwgdXNlRmlsdGVycywgdXNlUGFnaW5hdGlvbiB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xyXG5pbXBvcnQgUmVhY3RIVE1MVGFibGVUb0V4Y2VsIGZyb20gJ3JlYWN0LWh0bWwtdGFibGUtdG8tZXhjZWwnO1xyXG5cclxuLy8gZGVmYXVsdCBzZWFyY2ggYm94IGZpbHRlclxyXG5mdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyIH0sXHJcbn0pIHtcclxuICBjb25zdCBjb3VudCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGhcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBjb2wtbWQtMTJcIlxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgJyd9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKSAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XHJcbiAgICAgIH19XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtgU2VhcmNoICR7Y291bnR9IHJlY29yZHMuLi5gfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gZmlsdGVyIFVJIGZvciBzZWxlY3RpbmdcclxuLy8gYSB1bmlxdWUgb3B0aW9uIGZyb20gYSBsaXN0XHJcbmZ1bmN0aW9uIFNlbGVjdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWQgfSxcclxufSkge1xyXG4gIC8vIENhbGN1bGF0ZSB0aGUgb3B0aW9ucyBmb3IgZmlsdGVyaW5nXHJcbiAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgU2V0KClcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIG9wdGlvbnMuYWRkKHJvdy52YWx1ZXNbaWRdKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbLi4ub3B0aW9ucy52YWx1ZXMoKV1cclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4gIC8vIFJlbmRlciBhIG11bHRpLXNlbGVjdCBib3hcclxuICByZXR1cm4gKFxyXG4gICAgPHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBjb2wtbWQtMTJcIlxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXHJcbiAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAge29wdGlvbn1cclxuICAgICAgICA8L29wdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L3NlbGVjdD5cclxuICApXHJcbn1cclxuXHJcbi8vIHRoZSB0YWJsZSBtYXJrdXBcclxuZnVuY3Rpb24gVGFibGUgKHtjb2x1bW5zLCBkYXRhfSl7XHJcbiBjb25zdCBkZWZhdWx0Q29sdW1uID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIC8vIExldCdzIHNldCB1cCBvdXIgZGVmYXVsdCBGaWx0ZXIgVUlcclxuICAgICAgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gIClcclxuXHJcbiAgIGNvbnN0IHtcclxuICAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgIGhlYWRlckdyb3VwcyxcclxuICAgICBmb290ZXJHcm91cHMsXHJcbiAgICAgcHJlcGFyZVJvdyxcclxuICAgICBwYWdlLFxyXG4gICAgIHJvd3MsIFxyXG5cclxuICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgIGNhbk5leHRQYWdlLFxyXG4gICAgcGFnZU9wdGlvbnMsXHJcbiAgICBwYWdlQ291bnQsXHJcbiAgICBnb3RvUGFnZSxcclxuICAgIG5leHRQYWdlLFxyXG4gICAgcHJldmlvdXNQYWdlLFxyXG4gICAgc2V0UGFnZVNpemUsXHJcbiAgICBzdGF0ZTogeyBwYWdlSW5kZXgsIHBhZ2VTaXplLCBncm91cEJ5LCBleHBhbmRlZCB9LFxyXG4gICB9ID0gdXNlVGFibGUoeyBjb2x1bW5zLCBkYXRhLCBkZWZhdWx0Q29sdW1uLCBpbml0aWFsU3RhdGU6IHsgcGFnZUluZGV4OiAwIH0gfSwgdXNlRmlsdGVycywgdXNlR3JvdXBCeSwgdXNlU29ydEJ5LCB1c2VFeHBhbmRlZCwgdXNlUGFnaW5hdGlvbilcclxuXHJcbiByZXR1cm4oXHJcbjxkaXY+XHJcbiAgICA8YnIgLz5cclxuICAgIDxSZWFjdEhUTUxUYWJsZVRvRXhjZWxcclxuXHRcdFx0XHRpZD1cInRlc3QtdGFibGUteGxzLWJ1dHRvblwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1iLTJcIlxyXG5cdFx0XHRcdHRhYmxlPVwiZGVncmVlVGFibGVcIlxyXG5cdFx0XHRcdGZpbGVuYW1lPVwiZGVncmVlXCJcclxuXHRcdFx0XHRidXR0b25UZXh0PVwiRG93bmxvYWQgYXMgWExTXCIvPlxyXG4gICAgPGJyIC8+XHJcbiAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIiB7Li4uZ2V0VGFibGVQcm9wcygpfSBpZD1cImRlZ3JlZVRhYmxlXCI+XHJcbiAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgPHRoXHJcblx0XHQvLyBzb3J0aW5nIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuXHRcdCA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAn4pa8J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICfilrInXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHQgIDxkaXY+e2NvbHVtbi5jYW5GaWx0ZXIgPyBjb2x1bW4ucmVuZGVyKCdGaWx0ZXInKSA6IG51bGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICApKX1cclxuICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICB7cGFnZS5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGVkdWNhdGlvbmFsIHB1cnBvc2VzLCBsZXQncyBjb2xvciB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGNlbGwgZGVwZW5kaW5nIG9uIHdoYXQgdHlwZSBpdCBpcyBnaXZlblxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgdXNlR3JvdXBCeSBob29rXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbGwuaXNHcm91cGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIzBhZmYwMDgyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc0FnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjZmZhNTAwNzgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzUGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjZmYwMDAwNDInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5pc0dyb3VwZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBncm91cGVkIGNlbGwsIGFkZCBhbiBleHBhbmRlciBhbmQgcm93IGNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLnJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pc0V4cGFuZGVkID8gJ+KWvCcgOiAn4pa6J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnKX0gKHtyb3cuc3ViUm93cy5sZW5ndGh9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzQWdncmVnYXRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNlbGwgaXMgYWdncmVnYXRlZCwgdXNlIHRoZSBBZ2dyZWdhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlcmVyIGZvciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdBZ2dyZWdhdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzUGxhY2Vob2xkZXIgPyBudWxsIDogKCAvLyBGb3IgY2VsbHMgd2l0aCByZXBlYXRlZCB2YWx1ZXMsIHJlbmRlciBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwganVzdCByZW5kZXIgdGhlIHJlZ3VsYXIgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQ2VsbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgPC90Ym9keT5cclxuXHQ8dGZvb3Q+XHJcbiAgICAgICAge2Zvb3Rlckdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxyXG4gICAgICAgICAgPHRyIHsuLi5ncm91cC5nZXRGb290ZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICB7Z3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICA8dGQgXHJcblx0XHR7Li4uY29sdW1uLmdldEZvb3RlclByb3BzKCl9PlxyXG5cdFx0e2NvbHVtbi5jYW5Hcm91cEJ5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gY2FuIGJlIGdyb3VwZWQsIGxldCdzIGFkZCBhIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0R3JvdXBCeVRvZ2dsZVByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc0dyb3VwZWQgPyAnQ2xpY2sgdG8gVW5ncm91cCAnIDogJ0NsaWNrIHRvIEdyb3VwJ31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cdFx0XHJcblx0XHR7Y29sdW1uLnJlbmRlcignRm9vdGVyJyl9XHJcblx0ICAgICAgPC90ZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3Rmb290PlxyXG4gICAgIDwvdGFibGU+XHJcblxyXG5cdFxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPDwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV4dFBhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgUGFnZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuICAgICAgICAgIDwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgfCBHbyB0byBwYWdlOnsnICd9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFnZUluZGV4ICsgMX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLSAxIDogMFxyXG4gICAgICAgICAgICAgIGdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHRcdHRhYmxle1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0b3ZlcmZsb3c6IHg7XHJcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHR9XHJcblx0YH08L3N0eWxlPlxyXG48L2Rpdj5cclxuIClcclxuICBcclxufVxyXG4gXHJcblxyXG4vLyBjb25maWd1cmUgY29sdW1ucywgcG9wdWxhdGUgY2VsbHMsIHJlbmRlciB0YWJsZVxyXG4gZnVuY3Rpb24gRGVncmVlQW5hbHl0aWNzVGFibGUocHJvcHMpIHtcclxuICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFcclxuIFxyXG4gICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcclxuICAgICAoKSA9PiBbXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ05hbWUgb2YgRmFjdWx0eScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMScsIC8vIGFjY2Vzc29yIGlzIHRoZSBcImtleVwiIGluIHRoZSBkYXRhLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBOYW1lc2AsXHJcblx0IEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnRGVncmVlJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wyJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnRGVncmVlIFR5cGUnLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDMnLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ0RhdGUgRWFybmVkIChjbGljayB0byBzb3J0KScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sNCcsXHJcblx0IHNvcnRCeTogJ2RhdGV0aW1lJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IGRpc2FibGVGaWx0ZXJzOiB0cnVlXHJcbiAgICAgICB9XHJcbiAgICAgXSxcclxuICAgICBbXVxyXG4gICApXHJcbiBcclxuICAgcmV0dXJuIChcclxuICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz4gXHJcbiAgIClcclxuIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZ3JlZUFuYWx5dGljc1RhYmxlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Derick\\\\Desktop\\\\\u2800\\\\Acads\\\\(2022) Third Year - Midyear OJT\\\\CS 190\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\degree\\\\degree_dashboard_table.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 1
  }, this);
} // configure columns, populate cells, render table


function DegreeAnalyticsTable(props) {
  const data = props.data;
  const columns = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => [{
    Header: 'Name of Faculty',
    Footer: '',
    accessor: 'col1',
    // accessor is the "key" in the data,
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Names`,
    Filter: DefaultColumnFilter,
    disableSortBy: true
  }, {
    Header: 'Degree',
    Footer: '',
    accessor: 'col2',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: DefaultColumnFilter,
    disableSortBy: true
  }, {
    Header: 'Degree Type',
    Footer: '',
    accessor: 'col3',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: SelectColumnFilter,
    disableSortBy: true
  }, {
    Header: 'Date Earned (click to sort)',
    Footer: '',
    accessor: 'col4',
    sortBy: 'datetime',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    disableFilters: true
  }], []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
    columns: columns,
    data: data
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 290,
    columnNumber: 6
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DegreeAnalyticsTable);

/***/ }),

/***/ "./components/unit-head/dashboard/employment-status/employment-status.js":
/*!*******************************************************************************!*\
  !*** ./components/unit-head/dashboard/employment-status/employment-status.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_unit_head_dashboard_employment_status_employment_dashboard_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/unit-head/dashboard/employment-status/employment_dashboard_table */ "./components/unit-head/dashboard/employment-status/employment_dashboard_table.js");
/* harmony import */ var _components_unit_head_dashboard_employment_status_employment_dashboard_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/unit-head/dashboard/employment-status/employment_dashboard_graph */ "./components/unit-head/dashboard/employment-status/employment_dashboard_graph.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\employment-status\\employment-status.js";





function EmploymentStatus(props) {
  let empList = props.children;
  let chemftCount = 0;
  let chemptCount = 0;
  let chemlecCount = 0;
  let mcsuftCount = 0;
  let mcsuptCount = 0;
  let mcsulecCount = 0;
  let p6GeoftCount = 0;
  let p6GeoptCount = 0;
  let p6GeolecCount = 0;
  let tableData = [];
  let unitId;
  let startDate;
  let endDate;

  if (empList) {
    empList.forEach(async e => {
      if (e.faculty_employment_infos[0].status == 'Full-time') {
        if (e.faculty_unit.unitId == 1) chemftCount++;else if (e.faculty_unit.unitId == 2) mcsuftCount++;else if (e.faculty_unit.unitId == 3) p6GeoftCount++;
      } else if (e.faculty_employment_infos[0].status == 'Lecturer') {
        if (e.faculty_unit.unitId == 1) chemlecCount++;else if (e.faculty_unit.unitId == 2) mcsulecCount++;else if (e.faculty_unit.unitId == 3) p6GeolecCount++;
      } else if (e.faculty_employment_infos[0].status == 'Part-time') {
        if (e.faculty_unit.unitId == 1) chemptCount++;else if (e.faculty_unit.unitId == 2) mcsuptCount++;else if (e.faculty_unit.unitId == 3) p6GeoptCount++;
      }

      await tableData.push({
        col1: e.lastName + ', ' + e.firstName,
        col2: e.faculty_employment_infos[0].faculty_employment_position.position,
        col3: e.faculty_employment_infos[0].status,
        col4: e.faculty_employment_infos[0].category,
        col5: e.faculty_employment_infos[0].startDate
      });
    });
  }

  const graphData = [{
    "EmploymentStatus": "Part-time",
    "MCSU": mcsuptCount,
    "MCSUColor": "hsl(109, 70%, 50%)",
    "Chem": chemptCount,
    "ChemColor": "hsl(151, 70%, 50%)",
    "Physics/Geology": p6GeoptCount,
    "Physics/GeologyColor": "hsl(177, 70%, 50%)"
  }, {
    "EmploymentStatus": "Full-time",
    "MCSU": mcsuftCount,
    "hot dogColor": "hsl(67, 70%, 50%)",
    "Chem": chemftCount,
    "ChemColor": "hsl(215, 70%, 50%)",
    "Physics/Geology": p6GeoftCount,
    "Physics/GeologyColor": "hsl(244, 70%, 50%)"
  }, {
    "EmploymentStatus": "Lecturer",
    "MCSU": mcsulecCount,
    "hot dogColor": "hsl(234, 70%, 50%)",
    "Chem": chemlecCount,
    "ChemColor": "hsl(302, 70%, 50%)",
    "Physics/Geology": p6GeolecCount,
    "Physics/GeologyColor": "hsl(178, 70%, 50%)"
  }];

  if (props.queryList.employment == 1) {
    unitId = props.queryList.unitId;
    startDate = props.queryList.startDate;
    endDate = props.queryList.endDate;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-298159374",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-298159374"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      align: "center",
      className: "jsx-298159374",
      children: "Employment Status"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-298159374" + " " + "form-row",
      children: [props.role == 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "EmpDeptUnit",
          className: "jsx-298159374" + " " + "control-label",
          children: " Department Unit "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          name: "EmpDeptUnit",
          id: "EmpDeptUnit",
          defaultValue: unitId,
          className: "jsx-298159374" + " " + "form-control",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "0",
            className: "jsx-298159374",
            children: "All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "1",
            className: "jsx-298159374",
            children: "Chemistry Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "2",
            className: "jsx-298159374",
            children: "Mathematics and Computing Sciences Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "3",
            className: "jsx-298159374",
            children: "Physics and Geology Unit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 6
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "EmpStartTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " From  "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "date",
          name: "EmpStartTimePeriod",
          id: "EmpStartTimePeriod",
          defaultValue: startDate,
          className: "jsx-298159374" + " " + "form-control"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "EmpEndTimePeriod",
          className: "jsx-298159374" + " " + "control-label",
          children: " To "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "date",
          name: "EmpEndTimePeriod",
          id: "EmpEndTimePeriod",
          defaultValue: endDate,
          className: "jsx-298159374" + " " + "form-control"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-298159374" + " " + "form-group col-md-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-298159374"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            let unitId;
            if (props.role == 3) unitId = document.getElementById('EmpDeptUnit').value;
            let startDate = document.getElementById('EmpStartTimePeriod').value;
            let endDate = document.getElementById('EmpEndTimePeriod').value;
            let url = '/faculty';
            let query = {
              employment: 1
            };
            if (unitId && unitId != 0) query.unitId = unitId;
            if (startDate) query.startDate = startDate;
            if (endDate) query.endDate = endDate;
            next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
              pathname: url,
              query
            });
          },
          className: "jsx-298159374" + " " + "btn btn-info",
          children: " Filter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "jsx-298159374",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-298159374" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          id: "employment-graph-tab",
          "data-toggle": "tab",
          href: "#employment-graph",
          role: "tab",
          "aria-controls": "employment-graph",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Overview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          id: "employment-table-tab",
          "data-toggle": "tab",
          href: "#employment-table",
          role: "tab",
          "aria-controls": "employment-table",
          "aria-selected": "false",
          className: "jsx-298159374" + " " + "nav-item nav-link",
          children: "Full List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "nav-tabContent",
      className: "jsx-298159374" + " " + "tab-content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "employment-graph",
        role: "tabpanel",
        "aria-labelledby": "employment-graph-tab",
        className: "jsx-298159374" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_employment_status_employment_dashboard_graph__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: graphData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 125
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "employment-table",
        role: "tabpanel",
        "aria-labelledby": "employment-table-tab",
        className: "jsx-298159374" + " " + "tab-pane fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_employment_status_employment_dashboard_table__WEBPACK_IMPORTED_MODULE_2__.default, {
          data: tableData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 113
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "298159374",
      children: "a.nav-item.jsx-298159374:focus{background-color:#78b6c2;}a.nav-item.jsx-298159374:hover{background-color:#78b6c2;}a.active.jsx-298159374{background-color:#78b6c2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcZW1wbG95bWVudC1zdGF0dXNcXGVtcGxveW1lbnQtc3RhdHVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFKYyxBQUc2QixBQUdBLEFBR0EseUJBTHpCLEFBR0EsQUFHQSIsImZpbGUiOiJDOlxcVXNlcnNcXERlcmlja1xcRGVza3RvcFxc4qCAXFxBY2Fkc1xcKDIwMjIpIFRoaXJkIFllYXIgLSBNaWR5ZWFyIE9KVFxcQ1MgMTkwXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGVtcGxveW1lbnQtc3RhdHVzXFxlbXBsb3ltZW50LXN0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbXBsb3ltZW50QW5hbHl0aWNzVGFibGUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2VtcGxveW1lbnQtc3RhdHVzL2VtcGxveW1lbnRfZGFzaGJvYXJkX3RhYmxlJ1xyXG5pbXBvcnQgRW1wbG95bWVudERhc2hib2FyZEdyYXBoIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9lbXBsb3ltZW50LXN0YXR1cy9lbXBsb3ltZW50X2Rhc2hib2FyZF9ncmFwaCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIEVtcGxveW1lbnRTdGF0dXMocHJvcHMpe1xyXG5cdGxldCBlbXBMaXN0ID0gcHJvcHMuY2hpbGRyZW5cclxuXHJcblx0bGV0IGNoZW1mdENvdW50ID0gMFxyXG5cdGxldCBjaGVtcHRDb3VudCA9IDBcclxuXHRsZXQgY2hlbWxlY0NvdW50ID0gMFxyXG5cclxuXHRsZXQgbWNzdWZ0Q291bnQgPSAwXHJcblx0bGV0IG1jc3VwdENvdW50ID0gMFxyXG5cdGxldCBtY3N1bGVjQ291bnQgPSAwXHJcblxyXG5cdGxldCBwNkdlb2Z0Q291bnQgPSAwXHJcblx0bGV0IHA2R2VvcHRDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9sZWNDb3VudCA9IDBcclxuXHJcblx0bGV0IHRhYmxlRGF0YSA9IFtdXHJcblxyXG5cdGxldCB1bml0SWRcclxuXHRsZXQgc3RhcnREYXRlXHJcblx0bGV0IGVuZERhdGVcclxuXHRcclxuXHRpZihlbXBMaXN0KSB7XHJcblx0XHRlbXBMaXN0LmZvckVhY2goYXN5bmMgKGUpID0+IHtcclxuXHRcdFx0aWYoZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhdHVzID09ICdGdWxsLXRpbWUnKSB7XHJcblx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIGNoZW1mdENvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSBtY3N1ZnRDb3VudCsrXHJcblx0XHRcdFx0ZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykgcDZHZW9mdENvdW50KytcclxuXHRcdFx0fSBlbHNlIGlmKGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLnN0YXR1cyA9PSAnTGVjdHVyZXInKSB7XHJcblx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIGNoZW1sZWNDb3VudCsrXHJcblx0XHRcdFx0ZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikgbWNzdWxlY0NvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAzKSBwNkdlb2xlY0NvdW50KytcclxuXHRcdFx0fSBlbHNlIGlmKGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLnN0YXR1cyA9PSAnUGFydC10aW1lJykge1xyXG5cdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSBjaGVtcHRDb3VudCsrXHJcblx0XHRcdFx0ZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikgbWNzdXB0Q291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHA2R2VvcHRDb3VudCsrXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGF3YWl0IHRhYmxlRGF0YS5wdXNoKHtcclxuXHRcdFx0XHRjb2wxOiBlLmxhc3ROYW1lICsgJywgJyArIGUuZmlyc3ROYW1lLFxyXG5cdFx0XHRcdGNvbDI6IGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLmZhY3VsdHlfZW1wbG95bWVudF9wb3NpdGlvbi5wb3NpdGlvbixcclxuXHRcdFx0XHRjb2wzOiBlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGF0dXMsXHJcblx0XHRcdFx0Y29sNDogZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uY2F0ZWdvcnksXHJcblx0XHRcdFx0Y29sNTogZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhcnREYXRlXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgZ3JhcGhEYXRhID0gW1xyXG5cdFx0e1xyXG5cdFx0ICBcIkVtcGxveW1lbnRTdGF0dXNcIjogXCJQYXJ0LXRpbWVcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VwdENvdW50LFxyXG5cdFx0ICBcIk1DU1VDb2xvclwiOiBcImhzbCgxMDksIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbXB0Q291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDE1MSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvcHRDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxNzcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJFbXBsb3ltZW50U3RhdHVzXCI6IFwiRnVsbC10aW1lXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1ZnRDb3VudCxcclxuXHRcdCAgXCJob3QgZG9nQ29sb3JcIjogXCJoc2woNjcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbWZ0Q291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDIxNSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvZnRDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgyNDQsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJFbXBsb3ltZW50U3RhdHVzXCI6IFwiTGVjdHVyZXJcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VsZWNDb3VudCxcclxuXHRcdCAgXCJob3QgZG9nQ29sb3JcIjogXCJoc2woMjM0LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1sZWNDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMzAyLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9sZWNDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxNzgsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fVxyXG5cdF1cclxuXHRcclxuXHRpZihwcm9wcy5xdWVyeUxpc3QuZW1wbG95bWVudCA9PSAxKSB7XHJcblx0XHR1bml0SWQgPSBwcm9wcy5xdWVyeUxpc3QudW5pdElkXHJcblx0XHRzdGFydERhdGUgPSBwcm9wcy5xdWVyeUxpc3Quc3RhcnREYXRlXHJcblx0XHRlbmREYXRlID0gcHJvcHMucXVlcnlMaXN0LmVuZERhdGVcclxuXHR9XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8aDMgYWxpZ24gPSBcImNlbnRlclwiPkVtcGxveW1lbnQgU3RhdHVzPC9oMz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cHJvcHMucm9sZSA9PSAzICYmXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJFbXBEZXB0VW5pdFwiPiBEZXBhcnRtZW50IFVuaXQgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcIkVtcERlcHRVbml0XCIgaWQ9XCJFbXBEZXB0VW5pdFwiIGRlZmF1bHRWYWx1ZT17dW5pdElkfT5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMFwiPkFsbDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+Q2hlbWlzdHJ5IFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPk1hdGhlbWF0aWNzIGFuZCBDb21wdXRpbmcgU2NpZW5jZXMgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIzXCI+UGh5c2ljcyBhbmQgR2VvbG9neSBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJFbXBTdGFydFRpbWVQZXJpb2RcIj4gRnJvbSAgPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJFbXBTdGFydFRpbWVQZXJpb2RcIiBpZD1cIkVtcFN0YXJ0VGltZVBlcmlvZFwiIGRlZmF1bHRWYWx1ZT17c3RhcnREYXRlfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRW1wRW5kVGltZVBlcmlvZFwiPiBUbyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcIkVtcEVuZFRpbWVQZXJpb2RcIiBpZD1cIkVtcEVuZFRpbWVQZXJpb2RcIiBkZWZhdWx0VmFsdWU9e2VuZERhdGV9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lID0gXCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCB1bml0SWQgXHJcblx0XHRcdFx0XHRcdGlmKHByb3BzLnJvbGU9PTMpIHVuaXRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFbXBEZXB0VW5pdCcpLnZhbHVlXHJcblx0XHRcdFx0XHRcdGxldCBzdGFydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRW1wU3RhcnRUaW1lUGVyaW9kJykudmFsdWVcclxuXHRcdFx0XHRcdFx0bGV0IGVuZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRW1wRW5kVGltZVBlcmlvZCcpLnZhbHVlXHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gJy9mYWN1bHR5J1xyXG5cdFx0XHRcdFx0XHRsZXQgcXVlcnkgPSB7XHJcblx0XHRcdFx0XHRcdFx0ZW1wbG95bWVudDogMVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmKHVuaXRJZCAmJiB1bml0SWQgIT0gMCkgcXVlcnkudW5pdElkID0gdW5pdElkXHJcblx0XHRcdFx0XHRcdGlmKHN0YXJ0RGF0ZSkgcXVlcnkuc3RhcnREYXRlID0gc3RhcnREYXRlXHJcblx0XHRcdFx0XHRcdGlmKGVuZERhdGUpIHF1ZXJ5LmVuZERhdGUgPSBlbmREYXRlXHJcblxyXG5cdFx0XHRcdFx0XHRSb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0cGF0aG5hbWU6IHVybCxcclxuXHRcdFx0XHRcdFx0XHRxdWVyeVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fX0+IEZpbHRlcjwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxuYXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgbmF2LWZpbGwgbmF2LWp1c3RpZmllZFwiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZW1wbG95bWVudC1ncmFwaC10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjZW1wbG95bWVudC1ncmFwaFwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZW1wbG95bWVudC1ncmFwaFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPk92ZXJ2aWV3PC9hPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImVtcGxveW1lbnQtdGFibGUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2VtcGxveW1lbnQtdGFibGVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImVtcGxveW1lbnQtdGFibGVcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5GdWxsIExpc3Q8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgaWQ9XCJuYXYtdGFiQ29udGVudFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwiZW1wbG95bWVudC1ncmFwaFwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImVtcGxveW1lbnQtZ3JhcGgtdGFiXCI+PEVtcGxveW1lbnREYXNoYm9hcmRHcmFwaCBkYXRhPXtncmFwaERhdGF9IC8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJlbXBsb3ltZW50LXRhYmxlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZW1wbG95bWVudC10YWJsZS10YWJcIj48RW1wbG95bWVudEFuYWx5dGljc1RhYmxlIGRhdGE9e3RhYmxlRGF0YX0gLz48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0YS5uYXYtaXRlbTpmb2N1c3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdFx0YS5uYXYtaXRlbTpob3ZlcntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdFx0YS5hY3RpdmV7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveW1lbnRTdGF0dXMiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Derick\\\\Desktop\\\\\u2800\\\\Acads\\\\(2022) Third Year - Midyear OJT\\\\CS 190\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\employment-status\\\\employment-status.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EmploymentStatus);

/***/ }),

/***/ "./components/unit-head/dashboard/employment-status/employment_dashboard_graph.js":
/*!****************************************************************************************!*\
  !*** ./components/unit-head/dashboard/employment-status/employment_dashboard_graph.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/bar */ "@nivo/bar");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nivo_bar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\employment-status\\employment_dashboard_graph.js";
// install (please make sure versions match peerDependencies)
// npm install --save @nivo/bar

 // make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

class EmploymentDashboardGraph extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "graph",
      style: {
        height: 700
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nivo_bar__WEBPACK_IMPORTED_MODULE_1__.ResponsiveBar, {
        data: this.props.data,
        keys: ['MCSU', 'Chem', 'Physics/Geology'],
        indexBy: "EmploymentStatus",
        margin: {
          top: 50,
          right: 130,
          bottom: 50,
          left: 60
        },
        padding: 0.3,
        valueScale: {
          type: 'linear'
        },
        indexScale: {
          type: 'band',
          round: true
        },
        colors: {
          scheme: 'nivo'
        },
        borderColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        axisTop: null,
        axisRight: null,
        axisBottom: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Employment Type/Employment Status',
          //label
          legendPosition: 'middle',
          legendOffset: 32
        },
        axisLeft: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Count',
          //label
          legendPosition: 'middle',
          legendOffset: -40,
          format: e => Math.floor(e) === e && e
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: {
          from: 'color',
          modifiers: [['darker', 1.6]]
        },
        legends: [{
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [{
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }]
        }],
        animate: true,
        motionStiffness: 90,
        motionDamping: 15
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmploymentDashboardGraph);

/***/ }),

/***/ "./components/unit-head/dashboard/employment-status/employment_dashboard_table.js":
/*!****************************************************************************************!*\
  !*** ./components/unit-head/dashboard/employment-status/employment_dashboard_table.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-table-to-excel */ "react-html-table-to-excel");
/* harmony import */ var react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\employment-status\\employment_dashboard_table.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // default search box filter

function DefaultColumnFilter({
  column: {
    filterValue,
    preFilteredRows,
    setFilter
  }
}) {
  const count = preFilteredRows.length;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    className: "form-control col-md-12",
    value: filterValue || '',
    onChange: e => {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: `Search ${count} records...`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
} // This is a custom filter UI for selecting
// a unique option from a list


function SelectColumnFilter({
  column: {
    filterValue,
    setFilter,
    preFilteredRows,
    id
  }
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
    className: "form-control col-md-12",
    value: filterValue,
    onChange: e => {
      setFilter(e.target.value || undefined);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: "",
      children: "All"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), options.map((option, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: option,
      children: option
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
} // the table markup


function Table({
  columns,
  data
}) {
  const defaultColumn = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => ({
    // Let's set up our default Filter UI
    Filter: DefaultColumnFilter
  }), []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      groupBy,
      expanded
    }
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_4__.useTable)({
    columns,
    data,
    defaultColumn,
    initialState: {
      pageIndex: 0
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_4__.useFilters, react_table__WEBPACK_IMPORTED_MODULE_4__.useGroupBy, react_table__WEBPACK_IMPORTED_MODULE_4__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_4__.useExpanded, react_table__WEBPACK_IMPORTED_MODULE_4__.usePagination);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3450710701",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-3450710701"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_html_table_to_excel__WEBPACK_IMPORTED_MODULE_5___default()), {
      id: "test-table-xls-button",
      className: "btn btn-primary mb-2",
      table: "employmentTable",
      filename: "employment",
      buttonText: "Download as XLS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-3450710701"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      id: "employmentTable",
      className: "jsx-3450710701" + " " + "table table-striped",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        className: "jsx-3450710701",
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          className: "jsx-3450710701",
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
            className: "jsx-3450710701",
            children: [column.render('Header'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "jsx-3450710701",
              children: column.isSorted ? column.isSortedDesc ? '▼' : '▲' : ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 4
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-3450710701",
              children: column.canFilter ? column.render('Filter') : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 5
            }, this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 16
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 12
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 8
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        className: "jsx-3450710701",
        children: page.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            className: "jsx-3450710701",
            children: row.cells.map(cell => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                style: {
                  background: cell.isGrouped ? '#0aff0082' : cell.isAggregated ? '#ffa50078' : cell.isPlaceholder ? '#ff000042' : 'white'
                },
                className: "jsx-3450710701",
                children: cell.isGrouped ?
                /*#__PURE__*/
                // If it's a grouped cell, add an expander and row count
                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                    className: "jsx-3450710701",
                    children: row.isExpanded ? '▼' : '►'
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 27
                  }, this), ' ', cell.render('Cell'), " (", row.subRows.length, ")"]
                }, void 0, true) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
                // renderer for cell
                cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                cell.render('Cell')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 21
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 8
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tfoot", {
        className: "jsx-3450710701",
        children: footerGroups.map(group => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, group.getFooterGroupProps()), {}, {
          className: "jsx-3450710701",
          children: group.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, column.getFooterProps()), {}, {
            className: "jsx-3450710701",
            children: [column.canGroupBy ?
            /*#__PURE__*/
            // If the column can be grouped, let's add a toggle
            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({}, column.getGroupByToggleProps()), {}, {
              className: "jsx-3450710701",
              children: column.isGrouped ? 'Click to Ungroup ' : 'Click to Group'
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 21
            }, this) : null, column.render('Footer')]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 15
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 2
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3450710701" + " " + "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        className: "jsx-3450710701",
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        className: "jsx-3450710701",
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-3450710701",
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: "jsx-3450710701",
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-3450710701",
        children: ["| Go to page:", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          defaultValue: pageIndex + 1,
          onChange: e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          },
          style: {
            width: '100px'
          },
          className: "jsx-3450710701"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        value: pageSize,
        onChange: e => {
          setPageSize(Number(e.target.value));
        },
        className: "jsx-3450710701",
        children: [10, 20, 30, 40, 50].map(pageSize => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: pageSize,
          className: "jsx-3450710701",
          children: ["Show ", pageSize]
        }, pageSize, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 6
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3450710701",
      children: "table.jsx-3450710701{display:block;overflow:x;white-space:nowrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcZW1wbG95bWVudC1zdGF0dXNcXGVtcGxveW1lbnRfZGFzaGJvYXJkX3RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFPa0IsQUFHa0IsY0FDSCxXQUNRLG1CQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXERlcmlja1xcRGVza3RvcFxc4qCAXFxBY2Fkc1xcKDIwMjIpIFRoaXJkIFllYXIgLSBNaWR5ZWFyIE9KVFxcQ1MgMTkwXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGVtcGxveW1lbnQtc3RhdHVzXFxlbXBsb3ltZW50X2Rhc2hib2FyZF90YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlR3JvdXBCeSwgdXNlRXhwYW5kZWQsIHVzZVNvcnRCeSwgdXNlRmlsdGVycywgdXNlUGFnaW5hdGlvbiB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xyXG5pbXBvcnQgUmVhY3RIVE1MVGFibGVUb0V4Y2VsIGZyb20gJ3JlYWN0LWh0bWwtdGFibGUtdG8tZXhjZWwnO1xyXG5cclxuLy8gZGVmYXVsdCBzZWFyY2ggYm94IGZpbHRlclxyXG5mdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyIH0sXHJcbn0pIHtcclxuICBjb25zdCBjb3VudCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGhcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBjb2wtbWQtMTJcIlxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgJyd9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKSAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XHJcbiAgICAgIH19XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtgU2VhcmNoICR7Y291bnR9IHJlY29yZHMuLi5gfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gZmlsdGVyIFVJIGZvciBzZWxlY3RpbmdcclxuLy8gYSB1bmlxdWUgb3B0aW9uIGZyb20gYSBsaXN0XHJcbmZ1bmN0aW9uIFNlbGVjdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWQgfSxcclxufSkge1xyXG4gIC8vIENhbGN1bGF0ZSB0aGUgb3B0aW9ucyBmb3IgZmlsdGVyaW5nXHJcbiAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgU2V0KClcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIG9wdGlvbnMuYWRkKHJvdy52YWx1ZXNbaWRdKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbLi4ub3B0aW9ucy52YWx1ZXMoKV1cclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4gIC8vIFJlbmRlciBhIG11bHRpLXNlbGVjdCBib3hcclxuICByZXR1cm4gKFxyXG4gICAgPHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBjb2wtbWQtMTJcIlxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXHJcbiAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAge29wdGlvbn1cclxuICAgICAgICA8L29wdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L3NlbGVjdD5cclxuICApXHJcbn1cclxuXHJcbi8vIHRoZSB0YWJsZSBtYXJrdXBcclxuZnVuY3Rpb24gVGFibGUgKHtjb2x1bW5zLCBkYXRhfSl7XHJcbiBjb25zdCBkZWZhdWx0Q29sdW1uID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIC8vIExldCdzIHNldCB1cCBvdXIgZGVmYXVsdCBGaWx0ZXIgVUlcclxuICAgICAgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gIClcclxuXHJcbiAgIGNvbnN0IHtcclxuICAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgIGhlYWRlckdyb3VwcyxcclxuICAgICBmb290ZXJHcm91cHMsXHJcbiAgICAgcHJlcGFyZVJvdyxcclxuICAgICBwYWdlLFxyXG4gICAgIHJvd3MsIFxyXG5cclxuICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgIGNhbk5leHRQYWdlLFxyXG4gICAgcGFnZU9wdGlvbnMsXHJcbiAgICBwYWdlQ291bnQsXHJcbiAgICBnb3RvUGFnZSxcclxuICAgIG5leHRQYWdlLFxyXG4gICAgcHJldmlvdXNQYWdlLFxyXG4gICAgc2V0UGFnZVNpemUsXHJcbiAgICBzdGF0ZTogeyBwYWdlSW5kZXgsIHBhZ2VTaXplLCBncm91cEJ5LCBleHBhbmRlZCB9LFxyXG4gICB9ID0gdXNlVGFibGUoeyBjb2x1bW5zLCBkYXRhLCBkZWZhdWx0Q29sdW1uLCBpbml0aWFsU3RhdGU6IHsgcGFnZUluZGV4OiAwIH0gfSwgdXNlRmlsdGVycywgdXNlR3JvdXBCeSwgdXNlU29ydEJ5LCB1c2VFeHBhbmRlZCwgdXNlUGFnaW5hdGlvbilcclxuXHJcbiByZXR1cm4oXHJcbjxkaXY+XHJcbiAgICA8YnIgLz5cclxuICAgIDxSZWFjdEhUTUxUYWJsZVRvRXhjZWxcclxuXHRcdFx0XHRpZD1cInRlc3QtdGFibGUteGxzLWJ1dHRvblwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1iLTJcIlxyXG5cdFx0XHRcdHRhYmxlPVwiZW1wbG95bWVudFRhYmxlXCJcclxuXHRcdFx0XHRmaWxlbmFtZT1cImVtcGxveW1lbnRcIlxyXG5cdFx0XHRcdGJ1dHRvblRleHQ9XCJEb3dubG9hZCBhcyBYTFNcIi8+XHJcbiAgICA8YnIgLz5cclxuICAgPHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZFwiIHsuLi5nZXRUYWJsZVByb3BzKCl9IGlkPVwiZW1wbG95bWVudFRhYmxlXCI+XHJcbiAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgPHRoXHJcblx0XHQvLyBzb3J0aW5nIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuXHRcdCA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAn4pa8J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICfilrInXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHQgIDxkaXY+e2NvbHVtbi5jYW5GaWx0ZXIgPyBjb2x1bW4ucmVuZGVyKCdGaWx0ZXInKSA6IG51bGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICApKX1cclxuICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICB7cGFnZS5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGVkdWNhdGlvbmFsIHB1cnBvc2VzLCBsZXQncyBjb2xvciB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGNlbGwgZGVwZW5kaW5nIG9uIHdoYXQgdHlwZSBpdCBpcyBnaXZlblxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgdXNlR3JvdXBCeSBob29rXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbGwuaXNHcm91cGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIzBhZmYwMDgyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc0FnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjZmZhNTAwNzgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzUGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjZmYwMDAwNDInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5pc0dyb3VwZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBncm91cGVkIGNlbGwsIGFkZCBhbiBleHBhbmRlciBhbmQgcm93IGNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLnJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pc0V4cGFuZGVkID8gJ+KWvCcgOiAn4pa6J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnKX0gKHtyb3cuc3ViUm93cy5sZW5ndGh9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzQWdncmVnYXRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNlbGwgaXMgYWdncmVnYXRlZCwgdXNlIHRoZSBBZ2dyZWdhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlcmVyIGZvciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdBZ2dyZWdhdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzUGxhY2Vob2xkZXIgPyBudWxsIDogKCAvLyBGb3IgY2VsbHMgd2l0aCByZXBlYXRlZCB2YWx1ZXMsIHJlbmRlciBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwganVzdCByZW5kZXIgdGhlIHJlZ3VsYXIgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQ2VsbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgPC90Ym9keT5cclxuXHQ8dGZvb3Q+XHJcbiAgICAgICAge2Zvb3Rlckdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxyXG4gICAgICAgICAgPHRyIHsuLi5ncm91cC5nZXRGb290ZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICB7Z3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICA8dGQgXHJcblx0XHR7Li4uY29sdW1uLmdldEZvb3RlclByb3BzKCl9PlxyXG5cdFx0e2NvbHVtbi5jYW5Hcm91cEJ5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gY2FuIGJlIGdyb3VwZWQsIGxldCdzIGFkZCBhIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0R3JvdXBCeVRvZ2dsZVByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc0dyb3VwZWQgPyAnQ2xpY2sgdG8gVW5ncm91cCAnIDogJ0NsaWNrIHRvIEdyb3VwJ31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cdFx0XHJcblx0XHR7Y29sdW1uLnJlbmRlcignRm9vdGVyJyl9XHJcblx0ICAgICAgPC90ZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3Rmb290PlxyXG4gICAgIDwvdGFibGU+XHJcblxyXG5cdFxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPDwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV4dFBhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgUGFnZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuICAgICAgICAgIDwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgfCBHbyB0byBwYWdlOnsnICd9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFnZUluZGV4ICsgMX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLSAxIDogMFxyXG4gICAgICAgICAgICAgIGdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHRcdHRhYmxle1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0b3ZlcmZsb3c6IHg7XHJcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHR9XHJcblx0YH08L3N0eWxlPlxyXG48L2Rpdj5cclxuIClcclxuICBcclxufVxyXG4gXHJcblxyXG4vLyBjb25maWd1cmUgY29sdW1ucywgcG9wdWxhdGUgY2VsbHMsIHJlbmRlciB0YWJsZVxyXG4gZnVuY3Rpb24gRW1wbG95bWVudEFuYWx5dGljc1RhYmxlKHByb3BzKSB7XHJcbiAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXHJcbiBcclxuICAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAgKCkgPT4gW1xyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdOYW1lIG9mIEZhY3VsdHknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDEnLCAvLyBhY2Nlc3NvciBpcyB0aGUgXCJrZXlcIiBpbiB0aGUgZGF0YSxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gTmFtZXNgLFxyXG5cdCBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ1Bvc2l0aW9uJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wyJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdTdGF0dXMnLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDMnLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ0NhdGVnb3J5JyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2w0JyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgIEhlYWRlcjogJ1N0YXJ0IERhdGUnLFxyXG4gIEZvb3RlcjogJycsXHJcbiAgICAgICAgYWNjZXNzb3I6ICdjb2w1JyxcclxuICBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG4gIGRpc2FibGVGaWx0ZXJzOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICAgXSxcclxuICAgICBbXVxyXG4gICApXHJcbiBcclxuICAgcmV0dXJuIChcclxuICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz4gXHJcbiAgIClcclxuIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveW1lbnRBbmFseXRpY3NUYWJsZVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Derick\\\\Desktop\\\\\u2800\\\\Acads\\\\(2022) Third Year - Midyear OJT\\\\CS 190\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\employment-status\\\\employment_dashboard_table.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 1
  }, this);
} // configure columns, populate cells, render table


function EmploymentAnalyticsTable(props) {
  const data = props.data;
  const columns = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => [{
    Header: 'Name of Faculty',
    Footer: '',
    accessor: 'col1',
    // accessor is the "key" in the data,
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Names`,
    Filter: DefaultColumnFilter,
    disableSortBy: true
  }, {
    Header: 'Position',
    Footer: '',
    accessor: 'col2',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: SelectColumnFilter,
    disableSortBy: true
  }, {
    Header: 'Status',
    Footer: '',
    accessor: 'col3',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: SelectColumnFilter,
    disableSortBy: true
  }, {
    Header: 'Category',
    Footer: '',
    accessor: 'col4',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    Filter: SelectColumnFilter,
    disableSortBy: true
  }, {
    Header: 'Start Date',
    Footer: '',
    accessor: 'col5',
    aggregate: 'count',
    Aggregated: ({
      value
    }) => `${value} Entries`,
    disableFilters: true
  }], []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
    columns: columns,
    data: data
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 298,
    columnNumber: 6
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EmploymentAnalyticsTable);

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseCookies": function() { return /* binding */ parseCookies; },
/* harmony export */   "isExpired": function() { return /* binding */ isExpired; }
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


function parseCookies(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req ? req.headers.cookie || "" : document.cookie);
} // check token if expired

function isExpired(user) {
  let decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(user);
  let now = new Date().getTime() / 1000;
  return decoded && decoded.exp < now;
}

/***/ }),

/***/ "./pages/faculty/index.js":
/*!********************************!*\
  !*** ./pages/faculty/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");
/* harmony import */ var _components_unit_head_dashboard_accomplishment_count_accomplishment_count__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/unit-head/dashboard/accomplishment-count/accomplishment-count */ "./components/unit-head/dashboard/accomplishment-count/accomplishment-count.js");
/* harmony import */ var _components_unit_head_dashboard_employment_status_employment_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/unit-head/dashboard/employment-status/employment-status */ "./components/unit-head/dashboard/employment-status/employment-status.js");
/* harmony import */ var _components_unit_head_dashboard_degree_degree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/unit-head/dashboard/degree/degree */ "./components/unit-head/dashboard/degree/degree.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Derick\\Desktop\\\u2800\\Acads\\(2022) Third Year - Midyear OJT\\CS 190\\dpsm-qa-portal-QA\\pages\\faculty\\index.js";










function Dashboard(props) {
  if (props.data.role == 1) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      userId: props.data.userId,
      facultyId: props.data.facultyId,
      role: props.data.role,
      name: props.data.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }, this);
  } else if (props.data.role == 2 || props.data.role == 3) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      userId: props.data.userId,
      facultyId: props.data.facultyId,
      role: props.data.role,
      name: props.data.name,
      approvalList: props.approvalList,
      roleAssignmentFlag: props.roleAssignmentFlag,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-1330585230" + " " + "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-1330585230"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
          href: {
            pathname: "/faculty/generate-reports"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "jsx-1330585230" + " " + "btn btn-info",
            children: "Download All Faculty Information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 81
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-1330585230"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: "jsx-1330585230",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "nav-tab",
            role: "tablist",
            className: "jsx-1330585230" + " " + "nav nav-tabs nav-fill nav-justified",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: "accomplishment-count-tab",
              "data-toggle": "tab",
              href: "#accomplishment-count",
              role: "tab",
              "aria-controls": "accomplishment-count",
              "aria-selected": "false",
              className: "jsx-1330585230" + " " + "nav-item nav-link",
              children: "Accomplishment Count"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: "employment-status-tab",
              "data-toggle": "tab",
              href: "#employment-status",
              role: "tab",
              "aria-controls": "employment-status",
              "aria-selected": "false",
              className: "jsx-1330585230" + " " + "nav-item nav-link",
              children: "Employment Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: "degree-tab",
              "data-toggle": "tab",
              href: "#degree",
              role: "tab",
              "aria-controls": "degree",
              "aria-selected": "false",
              className: "jsx-1330585230" + " " + "nav-item nav-link",
              children: "Attained Degrees"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 16
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 22
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "nav-tabContent",
          className: "jsx-1330585230" + " " + "tab-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "accomplishment-count",
            role: "tabpanel",
            "aria-labelledby": "accomplishment-count-tab",
            className: "jsx-1330585230" + " " + "tab-pane fade show active",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_accomplishment_count_accomplishment_count__WEBPACK_IMPORTED_MODULE_6__.default, {
              role: props.data.role,
              queryList: props.queryList,
              children: props.accompList
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 149
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "employment-status",
            role: "tabpanel",
            "aria-labelledby": "employment-status-tab",
            className: "jsx-1330585230" + " " + "tab-pane fade",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_employment_status_employment_status__WEBPACK_IMPORTED_MODULE_7__.default, {
              role: props.data.role,
              queryList: props.queryList,
              children: props.empList
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 131
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "degree",
            role: "tabpanel",
            "aria-labelledby": "degree-tab",
            className: "jsx-1330585230" + " " + "tab-pane fade",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_degree_degree__WEBPACK_IMPORTED_MODULE_8__.default, {
              role: props.data.role,
              queryList: props.queryList,
              children: props.educList
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 97
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 8
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
          id: "1330585230",
          children: "a.nav-item.jsx-1330585230{color:#000;}a.nav-item.jsx-1330585230:focus{background-color:#78b6c2;}a.nav-item.jsx-1330585230:hover{background-color:#78b6c2;}a.active.jsx-1330585230{background-color:#78b6c2;}a#accomplishment-count-tab.active.jsx-1330585230{background-color:#78b6c2;}nav.jsx-1330585230{background-color:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyaWNrXFxEZXNrdG9wXFzioIBcXEFjYWRzXFwoMjAyMikgVGhpcmQgWWVhciAtIE1pZHllYXIgT0pUXFxDUyAxOTBcXGRwc20tcWEtcG9ydGFsLVFBXFxwYWdlc1xcZmFjdWx0eVxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNlLEFBR2dCLEFBR2MsQUFHQSxBQUdBLEFBR0EsQUFHSCxXQWR0QixXQWVBLEdBWkEsQUFHQSxBQUdBLEFBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxEZXJpY2tcXERlc2t0b3BcXOKggFxcQWNhZHNcXCgyMDIyKSBUaGlyZCBZZWFyIC0gTWlkeWVhciBPSlRcXENTIDE5MFxcZHBzbS1xYS1wb3J0YWwtUUFcXHBhZ2VzXFxmYWN1bHR5XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIGlzRXhwaXJlZCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzXCJcclxuaW1wb3J0IEFjY29tcGxpc2htZW50Q291bnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2FjY29tcGxpc2htZW50LWNvdW50L2FjY29tcGxpc2htZW50LWNvdW50J1xyXG5pbXBvcnQgRW1wbG95bWVudFN0YXR1cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudC1zdGF0dXMnXHJcbmltcG9ydCBEZWdyZWVDb3VudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZGVncmVlL2RlZ3JlZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKHByb3BzKSB7IFxyXG5cdGlmKHByb3BzLmRhdGEucm9sZSA9PSAxKSB7XHJcblx0XHRyZXR1cm4gKDxMYXlvdXQgdXNlcklkPXtwcm9wcy5kYXRhLnVzZXJJZH0gZmFjdWx0eUlkPXtwcm9wcy5kYXRhLmZhY3VsdHlJZH0gcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBuYW1lPXtwcm9wcy5kYXRhLm5hbWV9IC8+KVxyXG5cdH0gZWxzZSBpZihwcm9wcy5kYXRhLnJvbGUgPT0gMiB8fCBwcm9wcy5kYXRhLnJvbGUgPT0gMyl7IFxyXG5cdFx0cmV0dXJuIChcclxuXHQgICAgICAgIDxMYXlvdXQgdXNlcklkPXtwcm9wcy5kYXRhLnVzZXJJZH0gZmFjdWx0eUlkPXtwcm9wcy5kYXRhLmZhY3VsdHlJZH0gcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBuYW1lPXtwcm9wcy5kYXRhLm5hbWV9IGFwcHJvdmFsTGlzdD17cHJvcHMuYXBwcm92YWxMaXN0fSByb2xlQXNzaWdubWVudEZsYWc9e3Byb3BzLnJvbGVBc3NpZ25tZW50RmxhZ30gPlxyXG5cclxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPSB7eyBwYXRobmFtZTogXCIvZmFjdWx0eS9nZW5lcmF0ZS1yZXBvcnRzXCJ9fT48YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1pbmZvXCI+RG93bmxvYWQgQWxsIEZhY3VsdHkgSW5mb3JtYXRpb248L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgbmF2LWZpbGwgbmF2LWp1c3RpZmllZFwiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiYWNjb21wbGlzaG1lbnQtY291bnQtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2FjY29tcGxpc2htZW50LWNvdW50XCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJhY2NvbXBsaXNobWVudC1jb3VudFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkFjY29tcGxpc2htZW50IENvdW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImVtcGxveW1lbnQtc3RhdHVzLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNlbXBsb3ltZW50LXN0YXR1c1wiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZW1wbG95bWVudC1zdGF0dXNcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5FbXBsb3ltZW50IFN0YXR1czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJkZWdyZWUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2RlZ3JlZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZGVncmVlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+QXR0YWluZWQgRGVncmVlczwvYT5cclxuICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8L25hdj5cclxuXHQgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJhY2NvbXBsaXNobWVudC1jb3VudFwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImFjY29tcGxpc2htZW50LWNvdW50LXRhYlwiPjxBY2NvbXBsaXNobWVudENvdW50IHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gcXVlcnlMaXN0PXtwcm9wcy5xdWVyeUxpc3R9Pntwcm9wcy5hY2NvbXBMaXN0fTwvQWNjb21wbGlzaG1lbnRDb3VudD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGVcIiBpZD1cImVtcGxveW1lbnQtc3RhdHVzXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZW1wbG95bWVudC1zdGF0dXMtdGFiXCI+PEVtcGxveW1lbnRTdGF0dXMgcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBxdWVyeUxpc3Q9e3Byb3BzLnF1ZXJ5TGlzdH0+e3Byb3BzLmVtcExpc3R9PC9FbXBsb3ltZW50U3RhdHVzPjwvZGl2PlxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGVcIiBpZD1cImRlZ3JlZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImRlZ3JlZS10YWJcIj48RGVncmVlQ291bnQgcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBxdWVyeUxpc3Q9e3Byb3BzLnF1ZXJ5TGlzdH0+e3Byb3BzLmVkdWNMaXN0fTwvRGVncmVlQ291bnQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0YS5uYXYtaXRlbXtcclxuXHRcdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGEubmF2LWl0ZW06Zm9jdXN7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGEubmF2LWl0ZW06aG92ZXJ7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGEuYWN0aXZle1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhI2FjY29tcGxpc2htZW50LWNvdW50LXRhYi5hY3RpdmV7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG5hdntcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6I2FhYTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9PC9zdHlsZT5cclxuXHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgPC9MYXlvdXQ+XHJcblx0ICAgIClcdFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7IFxyXG4gICAgY29uc3QgdG9rZW4gPSBwYXJzZUNvb2tpZXMoY29udGV4dC5yZXEpXHJcbiAgICBsZXQgZGF0YVxyXG4gICAgbGV0IHBlcnNvbmFsSW5mb1xyXG4gICAgbGV0IGFwcHJvdmFsTGlzdFxyXG4gICAgbGV0IGFjY29tcExpc3RcclxuICAgIGxldCBlbXBMaXN0XHJcbiAgICBsZXQgZWR1Y0xpc3RcclxuICAgIGxldCByb2xlQXNzaWdubWVudEZsYWcgPSBmYWxzZVxyXG4gICAgbGV0IHF1ZXJ5TGlzdFxyXG5cclxuICAgIGlmIChjb250ZXh0LnJlcykge1xyXG4gICAgICAgIGlmIChpc0V4cGlyZWQodG9rZW4udXNlcikgfHwgT2JqZWN0LmtleXModG9rZW4pLmxlbmd0aCA9PT0gMCAmJiB0b2tlbi5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBqd3QuZGVjb2RlKHRva2VuLnVzZXIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBmYWN1bHR5SWQgPSBkYXRhLmZhY3VsdHlJZFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW4udXNlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBwZXJzb25hbCA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYmFzaWMtaW5mby8nICsgZmFjdWx0eUlkLCBoZWFkZXIpXHJcbiAgICAgICAgICAgIHBlcnNvbmFsSW5mbyA9IGF3YWl0IHBlcnNvbmFsLmpzb24oKVxyXG5cclxuICAgICAgICAgICAgbGV0IGFwcHJvdmFsVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9hcHByb3ZhbC8nICsgZmFjdWx0eUlkXHJcbiAgICAgICAgICAgIGxldCBhY2NvbXBVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L3JlcG9ydHMvYWNjb21wbGlzaG1lbnQnXHJcbiAgICAgICAgICAgIGxldCBlbXBVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L3JlcG9ydHMvZW1wbG95bWVudCdcclxuICAgICAgICAgICAgbGV0IGVkdWNVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L3JlcG9ydHMvZWR1Y2F0aW9uJ1xyXG4gICAgICAgICAgICBsZXQgcm9sZUFzc2lnbm1lbnRVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2Jhc2ljLWluZm8vdW5pdC9hc3NpZ25tZW50J1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZGF0YS5yb2xlID09IDIgfHwgZGF0YS5yb2xlID09IDMpIHtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwcm92YWxVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFjY29tcFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICBlbXBVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgZWR1Y1VSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuYWNjb21wbGlzaG1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvbXBVUkwgKz0gJz8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkudW5pdElkICYmIGNvbnRleHQucXVlcnkudW5pdElkICE9IDApIGFjY29tcFVSTCArPSAndW5pdElkPScgKyBjb250ZXh0LnF1ZXJ5LnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmVtcGxveW1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBVUkwgKz0gJz8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkudW5pdElkKSBlbXBVUkwgKz0gJ3VuaXRJZD0nICsgY29udGV4dC5xdWVyeS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29udGV4dC5xdWVyeS5kZWdyZWUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZHVjVVJMICs9ICc/J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnVuaXRJZCkgZWR1Y1VSTCArPSAndW5pdElkPScgKyBjb250ZXh0LnF1ZXJ5LnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmFjY29tcGxpc2htZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZSkgYWNjb21wVVJMICs9ICcmc3RhcnREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuZW5kRGF0ZSkgYWNjb21wVVJMICs9ICcmZW5kRGF0ZT0nICsgY29udGV4dC5xdWVyeS5lbmREYXRlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29udGV4dC5xdWVyeS5lbXBsb3ltZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZSkgZW1wVVJMICs9ICcmc3RhcnREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuZW5kRGF0ZSkgZW1wVVJMICs9ICcmZW5kRGF0ZT0nICsgY29udGV4dC5xdWVyeS5lbmREYXRlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29udGV4dC5xdWVyeS5kZWdyZWUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuc3RhcnREYXRlKSBlZHVjVVJMICs9ICcmc3RhcnREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuZW5kRGF0ZSkgZWR1Y1VSTCArPSAnJmVuZERhdGU9JyArIGNvbnRleHQucXVlcnkuZW5kRGF0ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHByb3ZhbCA9IGF3YWl0IGZldGNoKGFwcHJvdmFsVVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBhcHByb3ZhbExpc3QgPSBhd2FpdCBhcHByb3ZhbC5qc29uKClcclxuICAgICAgICAgICAgICAgIGFwcHJvdmFsTGlzdCA9IGFwcHJvdmFsTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvbXBSZXBvcnRzID0gYXdhaXQgZmV0Y2goYWNjb21wVVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBhY2NvbXBMaXN0ID0gYXdhaXQgYWNjb21wUmVwb3J0cy5qc29uKClcclxuICAgICAgICAgICAgICAgIGFjY29tcExpc3QgPSBhY2NvbXBMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcFJlcG9ydHMgPSBhd2FpdCBmZXRjaChlbXBVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGVtcExpc3QgPSBhd2FpdCBlbXBSZXBvcnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgZW1wTGlzdCA9IGVtcExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWR1Y1JlcG9ydHMgPSBhd2FpdCBmZXRjaChlZHVjVVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBlZHVjTGlzdCA9IGF3YWl0IGVkdWNSZXBvcnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgZWR1Y0xpc3QgPSBlZHVjTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb2xlQXNzaWdubWVudHMgPSBhd2FpdCBmZXRjaChyb2xlQXNzaWdubWVudFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJvbGVBc3NpZ25tZW50TGlzdCA9IGF3YWl0IHJvbGVBc3NpZ25tZW50cy5qc29uKClcclxuICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50TGlzdCA9IHJvbGVBc3NpZ25tZW50TGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJvbGVBc3NpZ25tZW50TGlzdCAmJiByb2xlQXNzaWdubWVudExpc3QuYXBwcm92ZXJSZW1hcmtzICE9IG51bGwpIHJvbGVBc3NpZ25tZW50RmxhZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnJvbGUgPT0gMyAmJiByb2xlQXNzaWdubWVudExpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByb2xlQXNzaWdubWVudEZsYWcgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5yb2xlID09IDEpIHsgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL2ZhY3VsdHkvYmFzaWMtaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1hbmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbiAmJiB0b2tlbixcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgcGVyc29uYWxJbmZvOiBwZXJzb25hbEluZm8ucmVzdWx0LFxyXG4gICAgICAgICAgICBhcHByb3ZhbExpc3Q6IGFwcHJvdmFsTGlzdCxcclxuICAgICAgICAgICAgYWNjb21wTGlzdDogYWNjb21wTGlzdCxcclxuICAgICAgICAgICAgZW1wTGlzdCxcclxuICAgICAgICAgICAgZWR1Y0xpc3Q6IGVkdWNMaXN0IHx8IG51bGwsXHJcbiAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50RmxhZyxcclxuICAgICAgICAgICAgcXVlcnlMaXN0OiBjb250ZXh0LnF1ZXJ5XHJcbiAgICAgICAgfVxyXG5cdH1cclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Derick\\\\Desktop\\\\\u2800\\\\Acads\\\\(2022) Third Year - Midyear OJT\\\\CS 190\\\\dpsm-qa-portal-QA\\\\pages\\\\faculty\\\\index.js */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }, this);
  }
}

async function getServerSideProps(context) {
  const token = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(context.req);
  let data;
  let personalInfo;
  let approvalList;
  let accompList;
  let empList;
  let educList;
  let roleAssignmentFlag = false;
  let queryList;

  if (context.res) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.isExpired)(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    } else {
      data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().decode(token.user);
      let facultyId = data.facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token.user
        }
      };
      const personal = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId, header);
      personalInfo = await personal.json();
      let approvalURL = "http://localhost:3001/api" + '/faculty/approval/' + facultyId;
      let accompURL = "http://localhost:3001/api" + '/faculty/reports/accomplishment';
      let empURL = "http://localhost:3001/api" + '/faculty/reports/employment';
      let educURL = "http://localhost:3001/api" + '/faculty/reports/education';
      let roleAssignmentURL = "http://localhost:3001/api" + '/faculty/basic-info/unit/assignment';

      if (data.role == 2 || data.role == 3) {
        if (data.role == 2) {
          approvalURL += '?unitId=' + data.unitId;
          roleAssignmentURL += '?unitId=' + data.unitId;
          accompURL += '?unitId=' + data.unitId;
          empURL += '?unitId=' + data.unitId;
          educURL += '?unitId=' + data.unitId;
        } else if (data.role == 3) {
          if (context.query.accomplishment == 1) {
            accompURL += '?';
            if (context.query.unitId && context.query.unitId != 0) accompURL += 'unitId=' + context.query.unitId;
          } else if (context.query.employment == 1) {
            empURL += '?';
            if (context.query.unitId) empURL += 'unitId=' + context.query.unitId;
          } else if (context.query.degree == 1) {
            educURL += '?';
            if (context.query.unitId) educURL += 'unitId=' + context.query.unitId;
          }
        }

        if (context.query.accomplishment == 1) {
          if (context.query.startDate) accompURL += '&startDate=' + context.query.startDate;
          if (context.query.endDate) accompURL += '&endDate=' + context.query.endDate;
        } else if (context.query.employment == 1) {
          if (context.query.startDate) empURL += '&startDate=' + context.query.startDate;
          if (context.query.endDate) empURL += '&endDate=' + context.query.endDate;
        } else if (context.query.degree == 1) {
          if (context.query.startDate) educURL += '&startDate=' + context.query.startDate;
          if (context.query.endDate) educURL += '&endDate=' + context.query.endDate;
        }

        const approval = await fetch(approvalURL, header);
        approvalList = await approval.json();
        approvalList = approvalList.result;
        const accompReports = await fetch(accompURL, header);
        accompList = await accompReports.json();
        accompList = accompList.result;
        const empReports = await fetch(empURL, header);
        empList = await empReports.json();
        empList = empList.result;
        const educReports = await fetch(educURL, header);
        educList = await educReports.json();
        educList = educList.result;
        const roleAssignments = await fetch(roleAssignmentURL, header);
        let roleAssignmentList = await roleAssignments.json();
        roleAssignmentList = roleAssignmentList.result;

        if (data.role == 2) {
          if (roleAssignmentList && roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true;
        } else if (data.role == 3 && roleAssignmentList) {
          roleAssignmentFlag = true;
        }
      } else if (data.role == 1) {
        return {
          redirect: {
            destination: '/faculty/basic-info',
            permanent: true
          }
        };
      }
    }
  }

  return {
    props: {
      token: token && token,
      data,
      personalInfo: personalInfo.result,
      approvalList: approvalList,
      accompList: accompList,
      empList,
      educList: educList || null,
      roleAssignmentFlag,
      queryList: context.query
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "@nivo/bar":
/*!****************************!*\
  !*** external "@nivo/bar" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("@nivo/bar");;

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

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

/***/ "react-html-table-to-excel":
/*!********************************************!*\
  !*** external "react-html-table-to-excel" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-html-table-to-excel");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-table");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/faculty/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9hY2NvbXBsaXNobWVudC1jb3VudC9hY2NvbXBsaXNobWVudC1jb3VudC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9hY2NvbXBsaXNobWVudC1jb3VudC9hY2NvbXBsaXNobWVudF9kYXNoYm9hcmRfZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvYWNjb21wbGlzaG1lbnQtY291bnQvYWNjb21wbGlzaG1lbnRfZGFzaGJvYXJkX3RhYmxlLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2RlZ3JlZS9kZWdyZWUuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZGVncmVlL2RlZ3JlZV9kYXNoYm9hcmRfZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZGVncmVlL2RlZ3JlZV9kYXNoYm9hcmRfdGFibGUuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudC1zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudF9kYXNoYm9hcmRfZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudF9kYXNoYm9hcmRfdGFibGUuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vcGFnZXMvZmFjdWx0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIkBuaXZvL2JhclwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwiY29va2llXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0LWh0bWwtdGFibGUtdG8tZXhjZWxcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC10YWJsZVwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvaWdub3JlZHxDOlxcVXNlcnNcXERlcmlja1xcRGVza3RvcFxc4qCAXFxBY2Fkc1xcKDIwMjIpIFRoaXJkIFllYXIgLSBNaWR5ZWFyIE9KVFxcQ1MgMTkwXFxkcHNtLXFhLXBvcnRhbC1RQVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJwcm9wcyIsImNoaWxkcmVuIiwiRm9vdGVyIiwiSGVhZGVyIiwicm9sZU5hbWUiLCJyb2xlIiwibmFtZSIsIkxheW91dCIsImFwcHJvdmFsTGlzdCIsImZhY3VsdHlJZCIsInJvbGVBc3NpZ25tZW50RmxhZyIsIlNpZGViYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwidXNlQ29va2llcyIsImhhbmRsZVJlbW92ZUNvb2tpZSIsInBhdGgiLCJmYWN1bHR5Iiwic3RhZmYiLCJpc0FjdGl2ZSIsInNldEFjdGl2ZSIsInVzZVN0YXRlIiwiaGFuZGxlVG9nZ2xlIiwicGF0aG5hbWUiLCJmYWN1bHR5Q291bnQiLCJyb2xlQXNzaWdubWVudCIsIkFjY29tcGxpc2htZW50Q291bnQiLCJhY2NvbXBMaXN0IiwiY2hlbVBTQUNvdW50IiwiY2hlbVRTQ291bnQiLCJjaGVtUHViQ291bnQiLCJjaGVtUkdDb3VudCIsIm1jc3VQU0FDb3VudCIsIm1jc3VUU0NvdW50IiwibWNzdVB1YkNvdW50IiwibWNzdVJHQ291bnQiLCJwNkdlb1BTQUNvdW50IiwicDZHZW9UU0NvdW50IiwicDZHZW9QdWJDb3VudCIsInA2R2VvUkdDb3VudCIsInRhYmxlRGF0YSIsInVuaXRJZCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiZmFjdWx0eV91bml0IiwiZmFjdWx0eV9wdWJsaWNfc2VydmljZXMiLCJsZW5ndGgiLCJmYWN1bHR5X3RyYWluaW5nX3NlbWluYXJzIiwiZmFjdWx0eV9wdWJsaXNoZXJzIiwiZmFjdWx0eV9yZXNlYXJjaGVycyIsImZvckVhY2giLCJpIiwicHVzaCIsImNvbDEiLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsImNvbDIiLCJwb3NpdGlvbiIsIm9yZ2FuaXphdGlvbiIsImNvbDMiLCJjb2w0IiwiY29sNSIsImZhY3VsdHlfcHVibGljYXRpb24iLCJ0aXRsZSIsInB1YmxpY2F0aW9uRGF0ZSIsImRhdGVGcm9tIiwiZGF0ZVRvIiwiZmFjdWx0eV9yZXNlYXJjaF9ncmFudCIsInJlc2VhcmNoTmFtZSIsImFjdHVhbFN0YXJ0IiwiYWN0dWFsRW5kIiwiZ3JhcGhEYXRhIiwicXVlcnlMaXN0IiwiYWNjb21wbGlzaG1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJ1cmwiLCJxdWVyeSIsIlJvdXRlciIsIkFjY29tcGxpc2htZW50RGFzaGJvYXJkR3JhcGgiLCJSZWFjdCIsInJlbmRlciIsImhlaWdodCIsImRhdGEiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0eXBlIiwicm91bmQiLCJzY2hlbWUiLCJmcm9tIiwibW9kaWZpZXJzIiwidGlja1NpemUiLCJ0aWNrUGFkZGluZyIsInRpY2tSb3RhdGlvbiIsImxlZ2VuZCIsImxlZ2VuZFBvc2l0aW9uIiwibGVnZW5kT2Zmc2V0IiwiZm9ybWF0IiwiZSIsIk1hdGgiLCJmbG9vciIsImRhdGFGcm9tIiwiYW5jaG9yIiwiZGlyZWN0aW9uIiwianVzdGlmeSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwiaXRlbXNTcGFjaW5nIiwiaXRlbVdpZHRoIiwiaXRlbUhlaWdodCIsIml0ZW1EaXJlY3Rpb24iLCJpdGVtT3BhY2l0eSIsInN5bWJvbFNpemUiLCJlZmZlY3RzIiwib24iLCJzdHlsZSIsIkRlZmF1bHRDb2x1bW5GaWx0ZXIiLCJjb2x1bW4iLCJmaWx0ZXJWYWx1ZSIsInByZUZpbHRlcmVkUm93cyIsInNldEZpbHRlciIsImNvdW50IiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiU2VsZWN0Q29sdW1uRmlsdGVyIiwiaWQiLCJvcHRpb25zIiwiU2V0Iiwicm93IiwiYWRkIiwidmFsdWVzIiwib3B0aW9uIiwiVGFibGUiLCJjb2x1bW5zIiwiZGVmYXVsdENvbHVtbiIsIkZpbHRlciIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsImZvb3Rlckdyb3VwcyIsInByZXBhcmVSb3ciLCJwYWdlIiwicm93cyIsImNhblByZXZpb3VzUGFnZSIsImNhbk5leHRQYWdlIiwicGFnZU9wdGlvbnMiLCJwYWdlQ291bnQiLCJnb3RvUGFnZSIsIm5leHRQYWdlIiwicHJldmlvdXNQYWdlIiwic2V0UGFnZVNpemUiLCJzdGF0ZSIsInBhZ2VJbmRleCIsInBhZ2VTaXplIiwiZ3JvdXBCeSIsImV4cGFuZGVkIiwidXNlVGFibGUiLCJpbml0aWFsU3RhdGUiLCJ1c2VGaWx0ZXJzIiwidXNlR3JvdXBCeSIsInVzZVNvcnRCeSIsInVzZUV4cGFuZGVkIiwidXNlUGFnaW5hdGlvbiIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJnZXRIZWFkZXJQcm9wcyIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwiaXNTb3J0ZWQiLCJpc1NvcnRlZERlc2MiLCJjYW5GaWx0ZXIiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsImJhY2tncm91bmQiLCJpc0dyb3VwZWQiLCJpc0FnZ3JlZ2F0ZWQiLCJpc1BsYWNlaG9sZGVyIiwiZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyIsImlzRXhwYW5kZWQiLCJzdWJSb3dzIiwiZ3JvdXAiLCJnZXRGb290ZXJHcm91cFByb3BzIiwiZ2V0Rm9vdGVyUHJvcHMiLCJjYW5Hcm91cEJ5IiwiZ2V0R3JvdXBCeVRvZ2dsZVByb3BzIiwiTnVtYmVyIiwid2lkdGgiLCJBY2NvbXBsaXNobWVudEFuYWx5dGljc1RhYmxlIiwiYWNjZXNzb3IiLCJhZ2dyZWdhdGUiLCJBZ2dyZWdhdGVkIiwiZGlzYWJsZVNvcnRCeSIsInNvcnRCeSIsImRpc2FibGVGaWx0ZXJzIiwiRGVncmVlQ291bnQiLCJlZHVjTGlzdCIsImNoZW1CU0NvdW50IiwiY2hlbU1BQ291bnQiLCJjaGVtUEhEQ291bnQiLCJjaGVtT3RoZXJzQ291bnQiLCJtY3N1QlNDb3VudCIsIm1jc3VNQUNvdW50IiwibWNzdVBIRENvdW50IiwibWNzdU90aGVyc0NvdW50IiwicDZHZW9CU0NvdW50IiwicDZHZW9NQUNvdW50IiwicDZHZW9QSERDb3VudCIsInA2R2VvT3RoZXJzQ291bnQiLCJmYWN1bHR5X2VkdWNhdGlvbl9pbmZvcyIsImRlZ3JlZVR5cGUiLCJkZWdyZWVDZXJ0IiwiZGVncmVlIiwiRGVncmVlRGFzaGJvYXJkR3JhcGgiLCJEZWdyZWVBbmFseXRpY3NUYWJsZSIsIkVtcGxveW1lbnRTdGF0dXMiLCJlbXBMaXN0IiwiY2hlbWZ0Q291bnQiLCJjaGVtcHRDb3VudCIsImNoZW1sZWNDb3VudCIsIm1jc3VmdENvdW50IiwibWNzdXB0Q291bnQiLCJtY3N1bGVjQ291bnQiLCJwNkdlb2Z0Q291bnQiLCJwNkdlb3B0Q291bnQiLCJwNkdlb2xlY0NvdW50IiwiZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zIiwic3RhdHVzIiwiZmFjdWx0eV9lbXBsb3ltZW50X3Bvc2l0aW9uIiwiY2F0ZWdvcnkiLCJlbXBsb3ltZW50IiwiRW1wbG95bWVudERhc2hib2FyZEdyYXBoIiwiRW1wbG95bWVudEFuYWx5dGljc1RhYmxlIiwicGFyc2VDb29raWVzIiwicmVxIiwiY29va2llIiwiaXNFeHBpcmVkIiwidXNlciIsImRlY29kZWQiLCJqd3QiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImV4cCIsIkRhc2hib2FyZCIsInVzZXJJZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJ0b2tlbiIsInBlcnNvbmFsSW5mbyIsInJlcyIsImNvbnN0cnVjdG9yIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsImhlYWRlciIsInBlcnNvbmFsIiwiZmV0Y2giLCJwcm9jZXNzIiwianNvbiIsImFwcHJvdmFsVVJMIiwiYWNjb21wVVJMIiwiZW1wVVJMIiwiZWR1Y1VSTCIsInJvbGVBc3NpZ25tZW50VVJMIiwiYXBwcm92YWwiLCJyZXN1bHQiLCJhY2NvbXBSZXBvcnRzIiwiZW1wUmVwb3J0cyIsImVkdWNSZXBvcnRzIiwicm9sZUFzc2lnbm1lbnRzIiwicm9sZUFzc2lnbm1lbnRMaXN0IiwiYXBwcm92ZXJSZW1hcmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF1QjtBQUN0QixzQkFDQztBQUFBLDJCQUNDO0FBQUssV0FBSyxFQUFHLEtBQWI7QUFBQSw4QkFDUyw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFQsZUFFYTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsb0JBQ01BLEtBQUssQ0FBQ0M7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZiO0FBQUE7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QUU7QUFGTDtBQURQLFNBQVA7QUFNSDtBQUNKO0FBQ0o7O0FBRUQsU0FBTztBQUNIelEsU0FBSyxFQUFFO0FBQ0htUSxXQUFLLEVBQUVBLEtBQUssSUFBSUEsS0FEYjtBQUVIeEssVUFGRztBQUdIeUssa0JBQVksRUFBRUEsWUFBWSxDQUFDaUIsTUFIeEI7QUFJSDdRLGtCQUFZLEVBQUVBLFlBSlg7QUFLSHNCLGdCQUFVLEVBQUVBLFVBTFQ7QUFNSHFNLGFBTkc7QUFPSHBCLGNBQVEsRUFBRUEsUUFBUSxJQUFJLElBUG5CO0FBUUhyTSx3QkFSRztBQVNIcUUsZUFBUyxFQUFFbUwsT0FBTyxDQUFDN0s7QUFUaEI7QUFESixHQUFQO0FBYUg7QUFFRCwrREFBZTBLLFNBQWYsRTs7Ozs7Ozs7Ozs7QUN0TEEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2ZhY3VsdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJyBcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpe1xyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxkaXYgY2xhc3MgPSBcInJvd1wiPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICA8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICZjb3B5OyBDb3B5cmlnaHQgMjAyMSBEUFNNXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEZvb3RlciIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG5cdGxldCByb2xlTmFtZSA9IFwiXCJcclxuXHRzd2l0Y2gocHJvcHMucm9sZSl7XHJcblx0XHRjYXNlIDE6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiRmFjdWx0eVwiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDI6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiVW5pdCBIZWFkXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMzogXHJcblx0XHRcdHJvbGVOYW1lID0gXCJEZXBhcnRtZW50IENoYWlyXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiQWRtaW4gQ2xlcmtcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZHBzbS1zZWFsLnBuZ1wiIHdpZHRoPVwiMTg2XCIgaGVpZ2h0PVwiMTUwXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCIgYWx0PVwiRFBTTS1RQS1Qb3J0YWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0PGgyPiBEUFNNIFFBIFBPUlRBTCA8L2gyPlxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibWwtYXV0b1wiPlxyXG5cdFx0XHQ8aDU+IEN1cnJlbnRseSBMb2dnZWQgSW46IDxMaW5rIGhyZWYgPSBcIi9zZXR0aW5ncy9jaGFuZ2UtcGFzc3dvcmRcIj48YT4ge3Byb3BzLm5hbWV9ICh7cm9sZU5hbWV9KSA8L2E+PC9MaW5rPiA8L2g1PlxyXG5cdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0Lm5hdmJhcntcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzkxMDMwMztcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdH1cclxuXHRcdGgyLCBoNXtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdlb3JnaWE7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50J1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgICBsZXQgYXBwcm92YWxMaXN0XHJcbiAgICBpZihwcm9wcy5hcHByb3ZhbExpc3QpIGFwcHJvdmFsTGlzdCA9IHByb3BzLmFwcHJvdmFsTGlzdFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcC1pY29uc0AxLjQuMS9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjUuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE2LjAvdW1kL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgbmFtZT17IHByb3BzLm5hbWUgfSByb2xlPXtwcm9wcy5yb2xlfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIiBpZCA9IFwibGF5b3V0X3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgcm9sZSA9IHtwcm9wcy5yb2xlfSBhcHByb3ZhbExpc3Q9e2FwcHJvdmFsTGlzdH0gZmFjdWx0eUlkID0ge3Byb3BzLmZhY3VsdHlJZH0gcm9sZUFzc2lnbm1lbnQ9e3Byb3BzLnJvbGVBc3NpZ25tZW50RmxhZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIGlkID0gXCJsYXlvdXRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcihwcm9wcykgeyBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlQ29va2llKCkge1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZShcInVzZXJcIiwge3BhdGg6Jy8nfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZhY3VsdHkgPSB0cnVlXHJcbiAgICBsZXQgc3RhZmYgPSB0cnVlXHJcblxyXG4gICAgaWYocHJvcHMucm9sZSA9PSAxIHx8IHByb3BzLnJvbGUgPT0gMiB8fCBwcm9wcy5yb2xlID09IDMpIHtcclxuICAgICAgICBzdGFmZiA9IGZhbHNlXHJcbiAgICAgICAgaWYocHJvcHMucm9sZSA9PSAyIHx8IHByb3BzLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICBmYWN1bHR5ID0gZmFsc2VcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKFwiZmFsc2VcIilcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBcdHNldEFjdGl2ZSghaXNBY3RpdmUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiPlxyXG5cdCAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtaW5mbyBjb2wtMTIgZC1tZC1ub25lIHRleHQtY2VudGVyXCIgb25DbGljayA9IHtoYW5kbGVUb2dnbGV9PiBNYWluIE1lbnUgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSBcIm1lbnVcIiBjbGFzc05hbWUgPSB7aXNBY3RpdmUgPyBudWxsIDogXCJkLW5vbmUgZC1tZC1ibG9ja1wifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuXHRcdFx0PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5XCIgZGF0YS10b2dnbGUgPSBcImNvbGxhcHNlXCIgZGF0YS10YXJnZXQgPSBcIiNmYWN1bHR5TWVudVwiIGFyaWEtY29udHJvbHMgPSBcImZhY3VsdHlNZW51XCI+IEZhY3VsdHkgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9IFwiZmFjdWx0eU1lbnVcIiBjbGFzc05hbWUgPSBcImNvbGxhcHNlIHNob3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5XCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHlcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkRhc2hib2FyZDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2Jhc2ljLWluZm9cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9iYXNpYy1pbmZvXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5CYXNpYyBJbmZvcm1hdGlvbjwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2FjY29tcGxpc2htZW50XCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkFjY29tcGxpc2htZW50PC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvZmFjdWx0eS1sb2FkXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvZmFjdWx0eS1sb2FkXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExvYWQ8L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS92aWV3L2FsbFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS92aWV3L2FsbFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMaXN0PC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvYXBwcm92YWxcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2FwcHJvdmFsXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZW5kaW5nIEFwcHJvdmFscyAmbmJzcDt7cHJvcHMuYXBwcm92YWxMaXN0LmZhY3VsdHlDb3VudCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e3Byb3BzLmFwcHJvdmFsTGlzdC5mYWN1bHR5Q291bnR9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvYWRtaW5cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2FkbWluXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExpc3Q8L2E+PC9MaW5rPiB9XHJcblx0XHQgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiBwcm9wcy5yb2xlQXNzaWdubWVudCAmJiA8TGluayBocmVmID17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGUgQXNzaWdubWVudCAmbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj4hPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgIXByb3BzLnJvbGVBc3NpZ25tZW50ICYmIDxMaW5rIGhyZWYgPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZSBBc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tZGFuZ2VyXCIgb25DbGljaz17aGFuZGxlUmVtb3ZlQ29va2llfT5Mb2cgT3V0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0I21lbnUge1xyXG4gIFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxNzgyMztcclxuXHRcdFx0fVxyXG5cdFx0XHQubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3N7XHJcblx0XHRcdFx0dGV4dC1pbmRlbnQ6MjAlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCNhY3RpdmV7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNTkxOTtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHQ8L2Rpdj5cdFx0XHRcdFx0ICAgIFxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiIsImltcG9ydCBBY2NvbXBsaXNobWVudEFuYWx5dGljc1RhYmxlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9hY2NvbXBsaXNobWVudC1jb3VudC9hY2NvbXBsaXNobWVudF9kYXNoYm9hcmRfdGFibGUnXHJcbmltcG9ydCBBY2NvbXBsaXNobWVudERhc2hib2FyZEdyYXBoIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9hY2NvbXBsaXNobWVudC1jb3VudC9hY2NvbXBsaXNobWVudF9kYXNoYm9hcmRfZ3JhcGgnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBBY2NvbXBsaXNobWVudENvdW50KHByb3BzKXsgXHJcblx0bGV0IGFjY29tcExpc3QgPSBwcm9wcy5jaGlsZHJlblxyXG4gICAgXHJcbiAgICBsZXQgY2hlbVBTQUNvdW50ID0gMFxyXG4gICAgbGV0IGNoZW1UU0NvdW50ID0gMFxyXG5cdGxldCBjaGVtUHViQ291bnQgPSAwXHJcblx0bGV0IGNoZW1SR0NvdW50ID0gMFxyXG5cdFxyXG5cdGxldCBtY3N1UFNBQ291bnQgPSAwXHJcblx0bGV0IG1jc3VUU0NvdW50ID0gMFxyXG5cdGxldCBtY3N1UHViQ291bnQgPSAwXHJcblx0bGV0IG1jc3VSR0NvdW50ID0gMFxyXG5cdFxyXG5cdGxldCBwNkdlb1BTQUNvdW50ID0gMFxyXG5cdGxldCBwNkdlb1RTQ291bnQgPSAwXHJcblx0bGV0IHA2R2VvUHViQ291bnQgPSAwXHJcblx0bGV0IHA2R2VvUkdDb3VudCA9IDBcclxuXHJcblx0bGV0IHRhYmxlRGF0YSA9IFtdXHJcblxyXG5cdGxldCB1bml0SWRcclxuXHRsZXQgc3RhcnREYXRlXHJcblx0bGV0IGVuZERhdGVcclxuXHJcblx0aWYoYWNjb21wTGlzdCAhPSBudWxsKSB7XHJcblx0XHRPYmplY3Qua2V5cyhhY2NvbXBMaXN0KS5tYXAoa2V5ID0+IHtcclxuXHRcdCAgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkge1xyXG5cdFx0XHRjaGVtUFNBQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGljX3NlcnZpY2VzLmxlbmd0aFxyXG5cdFx0XHRjaGVtVFNDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV90cmFpbmluZ19zZW1pbmFycy5sZW5ndGhcclxuXHRcdFx0Y2hlbVB1YkNvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1Ymxpc2hlcnMubGVuZ3RoXHJcblx0XHRcdGNoZW1SR0NvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3Jlc2VhcmNoZXJzLmxlbmd0aFxyXG5cdFx0ICB9XHJcblx0XHQgIGVsc2UgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikge1xyXG5cdFx0XHRtY3N1UFNBQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGljX3NlcnZpY2VzLmxlbmd0aFxyXG5cdFx0XHRtY3N1VFNDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV90cmFpbmluZ19zZW1pbmFycy5sZW5ndGhcclxuXHRcdFx0bWNzdVB1YkNvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1Ymxpc2hlcnMubGVuZ3RoXHJcblx0XHRcdG1jc3VSR0NvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3Jlc2VhcmNoZXJzLmxlbmd0aFxyXG5cdFx0ICB9XHJcblx0XHQgIGVsc2UgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykge1xyXG5cdFx0XHRwNkdlb1BTQUNvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1YmxpY19zZXJ2aWNlcy5sZW5ndGhcclxuXHRcdFx0cDZHZW9UU0NvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3RyYWluaW5nX3NlbWluYXJzLmxlbmd0aFxyXG5cdFx0XHRwNkdlb1B1YkNvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1Ymxpc2hlcnMubGVuZ3RoXHJcblx0XHRcdHA2R2VvUkdDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9yZXNlYXJjaGVycy5sZW5ndGhcclxuXHRcdCAgfVxyXG5cclxuXHRcdCAgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGljX3NlcnZpY2VzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0YWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGljX3NlcnZpY2VzLmZvckVhY2goYXN5bmMgKGkpID0+IHtcclxuXHRcdFx0XHRhd2FpdCB0YWJsZURhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRjb2wxOiBhY2NvbXBMaXN0W2tleV0ubGFzdE5hbWUgKyAnLCAnICsgYWNjb21wTGlzdFtrZXldLmZpcnN0TmFtZSxcclxuXHRcdFx0XHRcdGNvbDI6IGkucG9zaXRpb24gKyAnIC0gJyArIGkub3JnYW5pemF0aW9uLFxyXG5cdFx0XHRcdFx0Y29sMzogJ1B1YmxpYyBTZXJ2aWNlJyxcclxuXHRcdFx0XHRcdGNvbDQ6IGkuc3RhcnREYXRlLFxyXG5cdFx0XHRcdFx0Y29sNTogaS5lbmREYXRlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdCAgfVxyXG5cclxuXHRcdCAgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGlzaGVycy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1Ymxpc2hlcnMuZm9yRWFjaChhc3luYyAoaSkgPT4ge1xyXG5cdFx0XHRcdGF3YWl0IHRhYmxlRGF0YS5wdXNoKHtcclxuXHRcdFx0XHRcdGNvbDE6IGFjY29tcExpc3Rba2V5XS5sYXN0TmFtZSArICcsICcgKyBhY2NvbXBMaXN0W2tleV0uZmlyc3ROYW1lLFxyXG5cdFx0XHRcdFx0Y29sMjogaS5mYWN1bHR5X3B1YmxpY2F0aW9uLnRpdGxlLFxyXG5cdFx0XHRcdFx0Y29sMzogJ1B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRcdGNvbDQ6IGkuZmFjdWx0eV9wdWJsaWNhdGlvbi5wdWJsaWNhdGlvbkRhdGUsXHJcblx0XHRcdFx0XHRjb2w1OiBpLmZhY3VsdHlfcHVibGljYXRpb24ucHVibGljYXRpb25EYXRlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdCAgfVxyXG5cclxuXHRcdCAgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdHJhaW5pbmdfc2VtaW5hcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV90cmFpbmluZ19zZW1pbmFycy5mb3JFYWNoKGFzeW5jIChpKSA9PiB7XHJcblx0XHRcdFx0YXdhaXQgdGFibGVEYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0Y29sMTogYWNjb21wTGlzdFtrZXldLmxhc3ROYW1lICsgJywgJyArIGFjY29tcExpc3Rba2V5XS5maXJzdE5hbWUsXHJcblx0XHRcdFx0XHRjb2wyOiBpLnJvbGUgKyAnIC0gJyArIGkudGl0bGUsXHJcblx0XHRcdFx0XHRjb2wzOiAnVHJhaW5pbmcvU2VtaW5hcicsXHJcblx0XHRcdFx0XHRjb2w0OiBpLmRhdGVGcm9tLFxyXG5cdFx0XHRcdFx0Y29sNTogaS5kYXRlVG9cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICBpZihhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9yZXNlYXJjaGVycy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3Jlc2VhcmNoZXJzLmZvckVhY2goYXN5bmMgKGkpID0+IHtcclxuXHRcdFx0XHRhd2FpdCB0YWJsZURhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRjb2wxOiBhY2NvbXBMaXN0W2tleV0ubGFzdE5hbWUgKyAnLCAnICsgYWNjb21wTGlzdFtrZXldLmZpcnN0TmFtZSxcclxuXHRcdFx0XHRcdGNvbDI6IGkuZmFjdWx0eV9yZXNlYXJjaF9ncmFudC5yZXNlYXJjaE5hbWUsXHJcblx0XHRcdFx0XHRjb2wzOiAnUmVzZWFyY2ggR3JhbnQnLFxyXG5cdFx0XHRcdFx0Y29sNDogaS5mYWN1bHR5X3Jlc2VhcmNoX2dyYW50LmFjdHVhbFN0YXJ0LFxyXG5cdFx0XHRcdFx0Y29sNTogaS5mYWN1bHR5X3Jlc2VhcmNoX2dyYW50LmFjdHVhbEVuZFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHQgIH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ3JhcGhEYXRhID0gW1xyXG5cdFx0e1xyXG5cdFx0ICBcIkFjY29tcGxpc2htZW50VHlwZVwiOiBcIlB1YmxpYyBTZXJ2aWNlXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1UFNBQ291bnQsXHJcblx0XHQgIFwiTUNTVUNvbG9yXCI6IFwiaHNsKDg4LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1QU0FDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMTAyLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9QU0FDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxMjcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJBY2NvbXBsaXNobWVudFR5cGVcIjogXCJQdWJsaWNhdGlvbnNcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VQdWJDb3VudCxcclxuXHRcdCAgXCJNQ1NVQ29sb3JcIjogXCJoc2woMTA5LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1QdWJDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMTUxLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9QdWJDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxNzcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJBY2NvbXBsaXNobWVudFR5cGVcIjogXCJSZXNlYXJjaCBHcmFudHNcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VSR0NvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCg2NywgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtUkdDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMjE1LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9SR0NvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDI0NCwgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkFjY29tcGxpc2htZW50VHlwZVwiOiBcIlRyYWluaW5nL1NlbWluYXJzXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1VFNDb3VudCxcclxuXHRcdCAgXCJob3QgZG9nQ29sb3JcIjogXCJoc2woMjM0LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1UU0NvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgzMDIsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb1RTQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTc4LCA3MCUsIDUwJSlcIixcclxuXHRcdH1cclxuXHQgIF1cclxuXHJcblx0aWYocHJvcHMucXVlcnlMaXN0LmFjY29tcGxpc2htZW50ID09IDEpIHtcclxuXHRcdHVuaXRJZCA9IHByb3BzLnF1ZXJ5TGlzdC51bml0SWRcclxuXHRcdHN0YXJ0RGF0ZSA9IHByb3BzLnF1ZXJ5TGlzdC5zdGFydERhdGVcclxuXHRcdGVuZERhdGUgPSBwcm9wcy5xdWVyeUxpc3QuZW5kRGF0ZVxyXG5cdH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxoMyBhbGlnbiA9IFwiY2VudGVyXCI+QWNjb21wbGlzaG1lbnQgQ291bnQ8L2gzPlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cHJvcHMucm9sZSA9PSAzICYmIFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRGVwdFVuaXRcIj4gRGVwYXJ0bWVudCBVbml0IDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJEZXB0VW5pdFwiIGlkPVwiRGVwdFVuaXRcIiBkZWZhdWx0VmFsdWU9e3VuaXRJZH0+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjBcIj5BbGw8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMVwiPkNoZW1pc3RyeSBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjJcIj5NYXRoZW1hdGljcyBhbmQgQ29tcHV0aW5nIFNjaWVuY2VzIFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiM1wiPlBoeXNpY3MgYW5kIEdlb2xvZ3kgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIlN0YXJ0VGltZVBlcmlvZFwiPiBGcm9tICA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcIlN0YXJ0VGltZVBlcmlvZFwiIGlkPVwiU3RhcnRUaW1lUGVyaW9kXCIgZGVmYXVsdFZhbHVlPXtzdGFydERhdGV9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJFbmRUaW1lUGVyaW9kXCI+IFRvIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiRW5kVGltZVBlcmlvZFwiIGlkPVwiRW5kVGltZVBlcmlvZFwiIGRlZmF1bHRWYWx1ZT17ZW5kRGF0ZX0vPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IHVuaXRJZFxyXG5cclxuXHRcdFx0XHRcdFx0aWYocHJvcHMucm9sZSA9PTMpIHtcclxuXHRcdFx0XHRcdFx0XHR1bml0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVwdFVuaXQnKS52YWx1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxldCBzdGFydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU3RhcnRUaW1lUGVyaW9kJykudmFsdWVcclxuXHRcdFx0XHRcdFx0bGV0IGVuZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRW5kVGltZVBlcmlvZCcpLnZhbHVlXHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gJy9mYWN1bHR5J1xyXG5cdFx0XHRcdFx0XHRsZXQgcXVlcnkgPSB7XHJcblx0XHRcdFx0XHRcdFx0YWNjb21wbGlzaG1lbnQ6IDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZih1bml0SWQgJiYgdW5pdElkICE9IDApIHF1ZXJ5LnVuaXRJZCA9IHVuaXRJZFxyXG5cdFx0XHRcdFx0XHRpZihzdGFydERhdGUpIHF1ZXJ5LnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVxyXG5cdFx0XHRcdFx0XHRpZihlbmREYXRlKSBxdWVyeS5lbmREYXRlID0gZW5kRGF0ZVxyXG5cclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdHBhdGhuYW1lOiB1cmwsXHJcblx0XHRcdFx0XHRcdFx0cXVlcnlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH19PiBGaWx0ZXI8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8bmF2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIG5hdi1maWxsIG5hdi1qdXN0aWZpZWRcIiBpZD1cIm5hdi10YWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImdyYXBoLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNncmFwaFwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZ3JhcGhcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5PdmVydmlldzwvYT5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJ0YWJsZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjdGFibGVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInRhYmxlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+RnVsbCBMaXN0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L25hdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cImdyYXBoXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZ3JhcGgtdGFiXCI+PEFjY29tcGxpc2htZW50RGFzaGJvYXJkR3JhcGggZGF0YT17Z3JhcGhEYXRhfSAvPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwidGFibGVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0YWJsZS10YWJcIj48QWNjb21wbGlzaG1lbnRBbmFseXRpY3NUYWJsZSBkYXRhPXt0YWJsZURhdGF9IC8+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdGEubmF2LWl0ZW06Zm9jdXN7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEubmF2LWl0ZW06aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEuYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvbXBsaXNobWVudENvdW50IiwiLy8gaW5zdGFsbCAocGxlYXNlIG1ha2Ugc3VyZSB2ZXJzaW9ucyBtYXRjaCBwZWVyRGVwZW5kZW5jaWVzKVxyXG4vLyBucG0gaW5zdGFsbCAtLXNhdmUgQG5pdm8vYmFyXHJcbmltcG9ydCB7IFJlc3BvbnNpdmVCYXIgfSBmcm9tICdAbml2by9iYXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gbWFrZSBzdXJlIHBhcmVudCBjb250YWluZXIgaGF2ZSBhIGRlZmluZWQgaGVpZ2h0IHdoZW4gdXNpbmdcclxuLy8gcmVzcG9uc2l2ZSBjb21wb25lbnQsIG90aGVyd2lzZSBoZWlnaHQgd2lsbCBiZSAwIGFuZFxyXG4vLyBubyBjaGFydCB3aWxsIGJlIHJlbmRlcmVkLlxyXG4vLyB3ZWJzaXRlIGV4YW1wbGVzIHNob3djYXNlIG1hbnkgcHJvcGVydGllcyxcclxuLy8geW91J2xsIG9mdGVuIHVzZSBqdXN0IGEgZmV3IG9mIHRoZW0uXHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBBY2NvbXBsaXNobWVudERhc2hib2FyZEdyYXBoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIHJlbmRlcigpe1xyXG5cdHJldHVybihcclxuXHRcdDxkaXYgaWQgPSBcImdyYXBoXCIgc3R5bGUgPSB7e2hlaWdodDogNzAwfX0+XHJcblx0XHRcdDxSZXNwb25zaXZlQmFyXHJcbiAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxyXG4gICAgICAgIGtleXM9e1sgJ01DU1UnLCAnQ2hlbScsICdQaHlzaWNzL0dlb2xvZ3knIF19XHJcbiAgICAgICAgaW5kZXhCeT0nQWNjb21wbGlzaG1lbnRUeXBlJ1xyXG4gICAgICAgIG1hcmdpbj17eyB0b3A6IDUwLCByaWdodDogMTMwLCBib3R0b206IDUwLCBsZWZ0OiA2MCB9fVxyXG4gICAgICAgIHBhZGRpbmc9ezAuM31cclxuICAgICAgICB2YWx1ZVNjYWxlPXt7IHR5cGU6ICdsaW5lYXInIH19XHJcbiAgICAgICAgaW5kZXhTY2FsZT17eyB0eXBlOiAnYmFuZCcsIHJvdW5kOiB0cnVlIH19XHJcbiAgICAgICAgY29sb3JzPXt7IHNjaGVtZTogJ25pdm8nIH19XHJcbiAgICAgICAgYm9yZGVyQ29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbIFsgJ2RhcmtlcicsIDEuNiBdIF0gfX1cclxuICAgICAgICBheGlzVG9wPXtudWxsfVxyXG4gICAgICAgIGF4aXNSaWdodD17bnVsbH1cclxuICAgICAgICBheGlzQm90dG9tPXt7XHJcbiAgICAgICAgICAgIHRpY2tTaXplOiA1LFxyXG4gICAgICAgICAgICB0aWNrUGFkZGluZzogNSxcclxuICAgICAgICAgICAgdGlja1JvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgICBsZWdlbmQ6ICdBY2NvbXBsaXNobWVudCBUeXBlJywgLy9sYWJlbFxyXG4gICAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZScsXHJcbiAgICAgICAgICAgIGxlZ2VuZE9mZnNldDogMzJcclxuICAgICAgICB9fVxyXG4gICAgICAgIGF4aXNMZWZ0PXt7XHJcbiAgICAgICAgICAgIHRpY2tTaXplOiA1LFxyXG4gICAgICAgICAgICB0aWNrUGFkZGluZzogNSxcclxuICAgICAgICAgICAgdGlja1JvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgICBsZWdlbmQ6ICdDb3VudCcsIC8vbGFiZWxcclxuICAgICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICBsZWdlbmRPZmZzZXQ6IC00MCxcclxuXHQgICAgZm9ybWF0OiBlID0+IE1hdGguZmxvb3IoZSkgPT09IGUgJiYgZVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbGFiZWxTa2lwV2lkdGg9ezEyfVxyXG4gICAgICAgIGxhYmVsU2tpcEhlaWdodD17MTJ9XHJcbiAgICAgICAgbGFiZWxUZXh0Q29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbIFsgJ2RhcmtlcicsIDEuNiBdIF0gfX1cclxuICAgICAgICBsZWdlbmRzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGFGcm9tOiAna2V5cycsXHJcbiAgICAgICAgICAgICAgICBhbmNob3I6ICdib3R0b20tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogMTIwLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogMCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zU3BhY2luZzogMixcclxuICAgICAgICAgICAgICAgIGl0ZW1XaWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgaXRlbUhlaWdodDogMjAsXHJcbiAgICAgICAgICAgICAgICBpdGVtRGlyZWN0aW9uOiAnbGVmdC10by1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICBpdGVtT3BhY2l0eTogMC44NSxcclxuICAgICAgICAgICAgICAgIHN5bWJvbFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgZWZmZWN0czogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb246ICdob3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtT3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXX1cclxuICAgICAgICBhbmltYXRlPXt0cnVlfVxyXG4gICAgICAgIG1vdGlvblN0aWZmbmVzcz17OTB9XHJcbiAgICAgICAgbW90aW9uRGFtcGluZz17MTV9XHJcbiAgICAvPlxyXG5cdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb21wbGlzaG1lbnREYXNoYm9hcmRHcmFwaFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkLCB1c2VTb3J0QnksIHVzZUZpbHRlcnMsIHVzZVBhZ2luYXRpb24gfSBmcm9tICdyZWFjdC10YWJsZSdcclxuaW1wb3J0IFJlYWN0SFRNTFRhYmxlVG9FeGNlbCBmcm9tICdyZWFjdC1odG1sLXRhYmxlLXRvLWV4Y2VsJztcclxuXHJcbi8vIGRlZmF1bHQgc2VhcmNoIGJveCBmaWx0ZXJcclxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciB9LFxyXG59KSB7XHJcbiAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCJcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCkgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxyXG4gICAgICB9fVxyXG4gICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCAke2NvdW50fSByZWNvcmRzLi4uYH1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSBmb3Igc2VsZWN0aW5nXHJcbi8vIGEgdW5pcXVlIG9wdGlvbiBmcm9tIGEgbGlzdFxyXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xyXG4gIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuICBjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldCgpXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICAvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCJcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZClcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKVxyXG59XHJcblxyXG4vLyB0aGUgdGFibGUgbWFya3VwXHJcbmZ1bmN0aW9uIFRhYmxlICh7Y29sdW1ucywgZGF0YX0pe1xyXG4gY29uc3QgZGVmYXVsdENvbHVtbiA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBMZXQncyBzZXQgdXAgb3VyIGRlZmF1bHQgRmlsdGVyIFVJXHJcbiAgICAgIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gICBjb25zdCB7XHJcbiAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgICBoZWFkZXJHcm91cHMsXHJcbiAgICAgZm9vdGVyR3JvdXBzLFxyXG4gICAgIHByZXBhcmVSb3csXHJcbiAgICAgcGFnZSxcclxuICAgICByb3dzLCBcclxuXHJcbiAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICBjYW5OZXh0UGFnZSxcclxuICAgIHBhZ2VPcHRpb25zLFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgZ290b1BhZ2UsXHJcbiAgICBuZXh0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIHNldFBhZ2VTaXplLFxyXG4gICAgc3RhdGU6IHsgcGFnZUluZGV4LCBwYWdlU2l6ZSwgZ3JvdXBCeSwgZXhwYW5kZWQgfSxcclxuICAgfSA9IHVzZVRhYmxlKHsgY29sdW1ucywgZGF0YSwgZGVmYXVsdENvbHVtbiwgaW5pdGlhbFN0YXRlOiB7IHBhZ2VJbmRleDogMCB9IH0sIHVzZUZpbHRlcnMsIHVzZUdyb3VwQnksIHVzZVNvcnRCeSwgdXNlRXhwYW5kZWQsIHVzZVBhZ2luYXRpb24pXHJcblxyXG4gcmV0dXJuKFxyXG48ZGl2PlxyXG4gICAgPGJyIC8+XHJcbiAgICA8UmVhY3RIVE1MVGFibGVUb0V4Y2VsXHJcblx0XHRcdFx0aWQ9XCJ0ZXN0LXRhYmxlLXhscy1idXR0b25cIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtYi0yXCJcclxuXHRcdFx0XHR0YWJsZT1cImFjY29tcGxpc2htZW50VGFibGVcIlxyXG5cdFx0XHRcdGZpbGVuYW1lPVwiYWNjb21wbGlzaG1lbnRcIlxyXG5cdFx0XHRcdGJ1dHRvblRleHQ9XCJEb3dubG9hZCBhcyBYTFNcIi8+XHJcbiAgICA8YnIgLz5cclxuICAgPHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZFwiIHsuLi5nZXRUYWJsZVByb3BzKCl9IGlkPVwiYWNjb21wbGlzaG1lbnRUYWJsZVwiPlxyXG4gICAgICAgPHRoZWFkPlxyXG4gICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgIDx0aFxyXG5cdFx0Ly8gc29ydGluZyBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcblx0XHQgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ+KWvCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAn4payJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0ICA8ZGl2Pntjb2x1bW4uY2FuRmlsdGVyID8gY29sdW1uLnJlbmRlcignRmlsdGVyJykgOiBudWxsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgKSl9XHJcbiAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAge3BhZ2UubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBlZHVjYXRpb25hbCBwdXJwb3NlcywgbGV0J3MgY29sb3IgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjZWxsIGRlcGVuZGluZyBvbiB3aGF0IHR5cGUgaXQgaXMgZ2l2ZW5cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIHVzZUdyb3VwQnkgaG9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZWxsLmlzR3JvdXBlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyMwYWZmMDA4MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNBZ2dyZWdhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmYTUwMDc4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc1BsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmMDAwMDQyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NlbGwuaXNHcm91cGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGEgZ3JvdXBlZCBjZWxsLCBhZGQgYW4gZXhwYW5kZXIgYW5kIHJvdyBjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5yb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXNFeHBhbmRlZCA/ICfilrwnIDogJ+KWuid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJyl9ICh7cm93LnN1YlJvd3MubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc0FnZ3JlZ2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjZWxsIGlzIGFnZ3JlZ2F0ZWQsIHVzZSB0aGUgQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJlciBmb3IgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQWdncmVnYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc1BsYWNlaG9sZGVyID8gbnVsbCA6ICggLy8gRm9yIGNlbGxzIHdpdGggcmVwZWF0ZWQgdmFsdWVzLCByZW5kZXIgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGp1c3QgcmVuZGVyIHRoZSByZWd1bGFyIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0NlbGwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgIDwvdGJvZHk+XHJcblx0PHRmb290PlxyXG4gICAgICAgIHtmb290ZXJHcm91cHMubWFwKGdyb3VwID0+IChcclxuICAgICAgICAgIDx0ciB7Li4uZ3JvdXAuZ2V0Rm9vdGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAge2dyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgPHRkIFxyXG5cdFx0ey4uLmNvbHVtbi5nZXRGb290ZXJQcm9wcygpfT5cclxuXHRcdHtjb2x1bW4uY2FuR3JvdXBCeSA/IChcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGNhbiBiZSBncm91cGVkLCBsZXQncyBhZGQgYSB0b2dnbGVcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNHcm91cGVkID8gJ0NsaWNrIHRvIFVuZ3JvdXAgJyA6ICdDbGljayB0byBHcm91cCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHRcdFxyXG5cdFx0e2NvbHVtbi5yZW5kZXIoJ0Zvb3RlcicpfVxyXG5cdCAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApKX1cclxuICAgICAgPC90Zm9vdD5cclxuICAgICA8L3RhYmxlPlxyXG5cclxuXHRcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKDApfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7Jzw8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJldmlvdXNQYWdlKCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UocGFnZUNvdW50IC0gMSl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+Pid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFBhZ2V7JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAge3BhZ2VJbmRleCArIDF9IG9mIHtwYWdlT3B0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIHwgR28gdG8gcGFnZTp7JyAnfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhZ2VJbmRleCArIDF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwYWdlID0gZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC0gMSA6IDBcclxuICAgICAgICAgICAgICBnb3RvUGFnZShwYWdlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VTaXplKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtbMTAsIDIwLCAzMCwgNDAsIDUwXS5tYXAocGFnZVNpemUgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cGFnZVNpemV9IHZhbHVlPXtwYWdlU2l6ZX0+XHJcbiAgICAgICAgICAgICAgU2hvdyB7cGFnZVNpemV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblx0XHR0YWJsZXtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG92ZXJmbG93OiB4O1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuPC9kaXY+XHJcbiApXHJcbiAgXHJcbn1cclxuIFxyXG5cclxuLy8gY29uZmlndXJlIGNvbHVtbnMsIHBvcHVsYXRlIGNlbGxzLCByZW5kZXIgdGFibGVcclxuIGZ1bmN0aW9uIEFjY29tcGxpc2htZW50QW5hbHl0aWNzVGFibGUocHJvcHMpIHsgXHJcbiAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXHJcbiBcclxuICAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAgKCkgPT4gW1xyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdOYW1lIG9mIEZhY3VsdHknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDEnLCAvLyBhY2Nlc3NvciBpcyB0aGUgXCJrZXlcIiBpbiB0aGUgZGF0YSxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gTmFtZXNgLFxyXG5cdCBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ0FjY29tcGxpc2htZW50JyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wyJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gQWNjb21wbGlzaG1lbnRzYCxcclxuXHQgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdBY2NvbXBsaXNobWVudCBUeXBlJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wzJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdTdGFydCBEYXRlIChjbGljayB0byBzb3J0KScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sNCcsXHJcblx0IHNvcnRCeTogJ2RhdGV0aW1lJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IGRpc2FibGVGaWx0ZXJzOiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdFbmQgRGF0ZSAoY2xpY2sgdG8gc29ydCknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDUnLFxyXG5cdCBzb3J0Qnk6ICdkYXRldGltZScsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBkaXNhYmxlRmlsdGVyczogdHJ1ZVxyXG4gICAgICAgfVxyXG4gICAgIF0sXHJcbiAgICAgW11cclxuICAgKVxyXG4gXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9IC8+IFxyXG4gICApXHJcbiB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvbXBsaXNobWVudEFuYWx5dGljc1RhYmxlXHJcbiIsImltcG9ydCBEZWdyZWVBbmFseXRpY3NUYWJsZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZGVncmVlL2RlZ3JlZV9kYXNoYm9hcmRfdGFibGUnXHJcbmltcG9ydCBEZWdyZWVEYXNoYm9hcmRHcmFwaCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZGVncmVlL2RlZ3JlZV9kYXNoYm9hcmRfZ3JhcGgnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBEZWdyZWVDb3VudChwcm9wcykge1xyXG5cdGxldCBlZHVjTGlzdCA9IHByb3BzLmNoaWxkcmVuXHJcblxyXG5cdGxldCBjaGVtQlNDb3VudCA9IDBcclxuXHRsZXQgY2hlbU1BQ291bnQgPSAwXHJcblx0bGV0IGNoZW1QSERDb3VudCA9IDBcclxuXHRsZXQgY2hlbU90aGVyc0NvdW50ID0gMFxyXG5cclxuXHRsZXQgbWNzdUJTQ291bnQgPSAwXHJcblx0bGV0IG1jc3VNQUNvdW50ID0gMFxyXG5cdGxldCBtY3N1UEhEQ291bnQgPSAwXHJcblx0bGV0IG1jc3VPdGhlcnNDb3VudCA9IDBcclxuXHJcblx0bGV0IHA2R2VvQlNDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9NQUNvdW50ID0gMFxyXG5cdGxldCBwNkdlb1BIRENvdW50ID0gMFxyXG5cdGxldCBwNkdlb090aGVyc0NvdW50ID0gMFxyXG5cclxuXHRsZXQgdGFibGVEYXRhID0gW11cclxuXHJcblx0aWYoZWR1Y0xpc3QpIHtcclxuXHRcdGVkdWNMaXN0LmZvckVhY2goYXN5bmMgKGUpID0+IHsgXHJcblx0XHRcdGF3YWl0IGUuZmFjdWx0eV9lZHVjYXRpb25faW5mb3MuZm9yRWFjaChhc3luYyAoaSkgPT4geyBcclxuXHRcdFx0XHRcclxuXHRcclxuXHRcdFx0XHRpZihpLmRlZ3JlZVR5cGUgPT0gJ0JTJyB8fCBpLmRlZ3JlZVR5cGUgPT0gJ0JBJykge1xyXG5cdFx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIHtcclxuXHRcdFx0XHRcdFx0Y2hlbUJTQ291bnQrK1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSB7XHJcblx0XHRcdFx0XHRcdG1jc3VCU0NvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykge1xyXG5cdFx0XHRcdFx0XHRwNkdlb0JTQ291bnQrK1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZihpLmRlZ3JlZVR5cGUgPT0gJ01BJyB8fCBpLmRlZ3JlZVR5cGUgPT0gJ01TJykge1xyXG5cdFx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIHtcclxuXHRcdFx0XHRcdFx0Y2hlbU1BQ291bnQrK1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSB7XHJcblx0XHRcdFx0XHRcdG1jc3VNQUNvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykge1xyXG5cdFx0XHRcdFx0XHRwNkdlb01BQ291bnQrK1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZihpLmRlZ3JlZVR5cGUgPT0gJ1BoRCcpIHtcclxuXHRcdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGNoZW1QSERDb3VudCsrXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIHtcclxuXHRcdFx0XHRcdFx0bWNzdVBIRENvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykge1xyXG5cdFx0XHRcdFx0XHRwNkdlb1BIRENvdW50KytcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIHtcclxuXHRcdFx0XHRcdFx0Y2hlbU90aGVyc0NvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikge1xyXG5cdFx0XHRcdFx0XHRtY3N1T3RoZXJzQ291bnQrK1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAzKSB7XHJcblx0XHRcdFx0XHRcdHA2R2VvT3RoZXJzQ291bnQrK1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcclxuXHRcdFx0XHRhd2FpdCB0YWJsZURhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRjb2wxOiBlLmxhc3ROYW1lICsgJywgJyArIGUuZmlyc3ROYW1lLFxyXG5cdFx0XHRcdFx0Y29sMjogaS5kZWdyZWVDZXJ0LFxyXG5cdFx0XHRcdFx0ICBjb2wzOiBpLmRlZ3JlZVR5cGUsXHJcblx0XHRcdFx0XHQgIGNvbDQ6IGkuZW5kRGF0ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgZ3JhcGhEYXRhID0gW1xyXG5cdFx0e1xyXG5cdFx0ICBcIkRlZ3JlZUF0dGFpbmVkXCI6IFwiQmFjaGVsb3Inc1wiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdUJTQ291bnQsXHJcblx0XHQgIFwiTUNTVUNvbG9yXCI6IFwiaHNsKDg4LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1CU0NvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgxMDIsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb0JTQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTI3LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiRGVncmVlQXR0YWluZWRcIjogXCJNYXN0ZXInc1wiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdU1BQ291bnQsXHJcblx0XHQgIFwiTUNTVUNvbG9yXCI6IFwiaHNsKDEwOSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtTUFDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMTUxLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9NQUNvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDE3NywgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkRlZ3JlZUF0dGFpbmVkXCI6IFwiRG9jdG9yYXRlXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1UEhEQ291bnQsXHJcblx0XHQgIFwiaG90IGRvZ0NvbG9yXCI6IFwiaHNsKDY3LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1QSERDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMjE1LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9QSERDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgyNDQsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJEZWdyZWVBdHRhaW5lZFwiOiBcIk90aGVyXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1T3RoZXJzQ291bnQsXHJcblx0XHQgIFwiaG90IGRvZ0NvbG9yXCI6IFwiaHNsKDIzNCwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtT3RoZXJzQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDMwMiwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvT3RoZXJzQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTc4LCA3MCUsIDUwJSlcIixcclxuXHRcdH1cclxuXHQgIF1cclxuXHJcblx0bGV0IHVuaXRJZFxyXG5cdGxldCBzdGFydERhdGVcclxuXHRsZXQgZW5kRGF0ZVxyXG5cclxuXHRpZihwcm9wcy5xdWVyeUxpc3QuZGVncmVlID09IDEpIHtcclxuXHRcdHVuaXRJZCA9IHByb3BzLnF1ZXJ5TGlzdC51bml0SWRcclxuXHRcdHN0YXJ0RGF0ZSA9IHByb3BzLnF1ZXJ5TGlzdC5zdGFydERhdGVcclxuXHRcdGVuZERhdGUgPSBwcm9wcy5xdWVyeUxpc3QuZW5kRGF0ZVxyXG5cdH1cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGgzIGFsaWduID0gXCJjZW50ZXJcIj5BdHRhaW5lZCBEZWdyZWVzPC9oMz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gMyAmJiBcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkRlZ3JlZURlcHRVbml0XCI+IERlcGFydG1lbnQgVW5pdCA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiRGVncmVlRGVwdFVuaXRcIiBpZD1cIkRlZ3JlZURlcHRVbml0XCIgZGVmYXVsdFZhbHVlPXt1bml0SWR9PlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwXCI+QWxsPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj5DaGVtaXN0cnkgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyXCI+TWF0aGVtYXRpY3MgYW5kIENvbXB1dGluZyBTY2llbmNlcyBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIj5QaHlzaWNzIGFuZCBHZW9sb2d5IFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJEZWdyZWVTdGFydFRpbWVQZXJpb2RcIj4gRnJvbSAgPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJEZWdyZWVTdGFydFRpbWVQZXJpb2RcIiBpZD1cIkRlZ3JlZVN0YXJ0VGltZVBlcmlvZFwiIGRlZmF1bHRWYWx1ZT17c3RhcnREYXRlfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRGVncmVlRW5kVGltZVBlcmlvZFwiPiBUbyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcIkRlZ3JlZUVuZFRpbWVQZXJpb2RcIiBpZD1cIkRlZ3JlZUVuZFRpbWVQZXJpb2RcIiBkZWZhdWx0VmFsdWU9e2VuZERhdGV9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lID0gXCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCB1bml0SWQgXHJcblx0XHRcdFx0XHRcdGlmKHByb3BzLnJvbGUgPT0gMykgdW5pdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0RlZ3JlZURlcHRVbml0JykudmFsdWVcclxuXHRcdFx0XHRcdFx0bGV0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEZWdyZWVTdGFydFRpbWVQZXJpb2QnKS52YWx1ZVxyXG5cdFx0XHRcdFx0XHRsZXQgZW5kRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEZWdyZWVFbmRUaW1lUGVyaW9kJykudmFsdWVcclxuXHJcblx0XHRcdFx0XHRcdGxldCB1cmwgPSAnL2ZhY3VsdHknXHJcblx0XHRcdFx0XHRcdGxldCBxdWVyeSA9IHtcclxuXHRcdFx0XHRcdFx0XHRkZWdyZWU6IDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZih1bml0SWQgJiYgdW5pdElkICE9IDApIHF1ZXJ5LnVuaXRJZCA9IHVuaXRJZFxyXG5cdFx0XHRcdFx0XHRpZihzdGFydERhdGUpIHF1ZXJ5LnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVxyXG5cdFx0XHRcdFx0XHRpZihlbmREYXRlKSBxdWVyeS5lbmREYXRlID0gZW5kRGF0ZVxyXG5cclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdHBhdGhuYW1lOiB1cmwsXHJcblx0XHRcdFx0XHRcdFx0cXVlcnlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH19PiBGaWx0ZXI8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8bmF2PlxyXG4gICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtZmlsbCBuYXYtanVzdGlmaWVkXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJkZWdyZWUtZ3JhcGgtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2RlZ3JlZS1ncmFwaFwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZGVncmVlLWdyYXBoXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+T3ZlcnZpZXc8L2E+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwidGFibGUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2RlZ3JlZS10YWJsZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZGVncmVlLXRhYmxlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+RnVsbCBMaXN0PC9hPlxyXG4gICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDwvbmF2PlxyXG5cdCAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cclxuXHQgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJkZWdyZWUtZ3JhcGhcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJkZWdyZWUtZ3JhcGgtdGFiXCI+PERlZ3JlZURhc2hib2FyZEdyYXBoIGRhdGE9e2dyYXBoRGF0YX0gLz48L2Rpdj5cclxuXHQgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJkZWdyZWUtdGFibGVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJkZWdyZWUtdGFibGUtdGFiXCI+PERlZ3JlZUFuYWx5dGljc1RhYmxlIGRhdGE9e3RhYmxlRGF0YX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdGEubmF2LWl0ZW06Zm9jdXN7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEubmF2LWl0ZW06aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEuYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWdyZWVDb3VudCIsIi8vIGluc3RhbGwgKHBsZWFzZSBtYWtlIHN1cmUgdmVyc2lvbnMgbWF0Y2ggcGVlckRlcGVuZGVuY2llcylcclxuLy8gbnBtIGluc3RhbGwgLS1zYXZlIEBuaXZvL2JhclxyXG5pbXBvcnQgeyBSZXNwb25zaXZlQmFyIH0gZnJvbSAnQG5pdm8vYmFyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIG1ha2Ugc3VyZSBwYXJlbnQgY29udGFpbmVyIGhhdmUgYSBkZWZpbmVkIGhlaWdodCB3aGVuIHVzaW5nXHJcbi8vIHJlc3BvbnNpdmUgY29tcG9uZW50LCBvdGhlcndpc2UgaGVpZ2h0IHdpbGwgYmUgMCBhbmRcclxuLy8gbm8gY2hhcnQgd2lsbCBiZSByZW5kZXJlZC5cclxuLy8gd2Vic2l0ZSBleGFtcGxlcyBzaG93Y2FzZSBtYW55IHByb3BlcnRpZXMsXHJcbi8vIHlvdSdsbCBvZnRlbiB1c2UganVzdCBhIGZldyBvZiB0aGVtLlxyXG5cclxuY2xhc3MgRGVncmVlRGFzaGJvYXJkR3JhcGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGlkID0gXCJncmFwaFwiIHN0eWxlID0ge3toZWlnaHQ6IDcwMH19PlxyXG5cdFx0XHQ8UmVzcG9uc2l2ZUJhclxyXG4gICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YX1cclxuICAgICAgICBrZXlzPXtbICdNQ1NVJywgJ0NoZW0nLCAnUGh5c2ljcy9HZW9sb2d5JyBdfVxyXG4gICAgICAgIGluZGV4Qnk9J0RlZ3JlZUF0dGFpbmVkJ1xyXG4gICAgICAgIG1hcmdpbj17eyB0b3A6IDUwLCByaWdodDogMTMwLCBib3R0b206IDUwLCBsZWZ0OiA2MCB9fVxyXG4gICAgICAgIHBhZGRpbmc9ezAuM31cclxuICAgICAgICB2YWx1ZVNjYWxlPXt7IHR5cGU6ICdsaW5lYXInIH19XHJcbiAgICAgICAgaW5kZXhTY2FsZT17eyB0eXBlOiAnYmFuZCcsIHJvdW5kOiB0cnVlIH19XHJcbiAgICAgICAgY29sb3JzPXt7IHNjaGVtZTogJ25pdm8nIH19XHJcbiAgICAgICAgYm9yZGVyQ29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbIFsgJ2RhcmtlcicsIDEuNiBdIF0gfX1cclxuICAgICAgICBheGlzVG9wPXtudWxsfVxyXG4gICAgICAgIGF4aXNSaWdodD17bnVsbH1cclxuICAgICAgICBheGlzQm90dG9tPXt7XHJcbiAgICAgICAgICAgIHRpY2tTaXplOiA1LFxyXG4gICAgICAgICAgICB0aWNrUGFkZGluZzogNSxcclxuICAgICAgICAgICAgdGlja1JvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgICBsZWdlbmQ6ICdEZWdyZWUgQXR0YWluZWQnLCAvL2xhYmVsXHJcbiAgICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgbGVnZW5kT2Zmc2V0OiAzMlxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXhpc0xlZnQ9e3tcclxuICAgICAgICAgICAgdGlja1NpemU6IDUsXHJcbiAgICAgICAgICAgIHRpY2tQYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICB0aWNrUm90YXRpb246IDAsXHJcbiAgICAgICAgICAgIGxlZ2VuZDogJ0NvdW50JywgLy9sYWJlbFxyXG4gICAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZScsXHJcbiAgICAgICAgICAgIGxlZ2VuZE9mZnNldDogLTQwLFxyXG5cdCAgICBmb3JtYXQ6IGUgPT4gTWF0aC5mbG9vcihlKSA9PT0gZSAmJiBlXHJcbiAgICAgICAgfX1cclxuICAgICAgICBsYWJlbFNraXBXaWR0aD17MTJ9XHJcbiAgICAgICAgbGFiZWxTa2lwSGVpZ2h0PXsxMn1cclxuICAgICAgICBsYWJlbFRleHRDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMS42IF0gXSB9fVxyXG4gICAgICAgIGxlZ2VuZHM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YUZyb206ICdrZXlzJyxcclxuICAgICAgICAgICAgICAgIGFuY2hvcjogJ2JvdHRvbS1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAxMjAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAwLFxyXG4gICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nOiAyLFxyXG4gICAgICAgICAgICAgICAgaXRlbVdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBpdGVtSGVpZ2h0OiAyMCxcclxuICAgICAgICAgICAgICAgIGl0ZW1EaXJlY3Rpb246ICdsZWZ0LXRvLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAwLjg1LFxyXG4gICAgICAgICAgICAgICAgc3ltYm9sU2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICBlZmZlY3RzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogJ2hvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdfVxyXG4gICAgICAgIGFuaW1hdGU9e3RydWV9XHJcbiAgICAgICAgbW90aW9uU3RpZmZuZXNzPXs5MH1cclxuICAgICAgICBtb3Rpb25EYW1waW5nPXsxNX1cclxuICAgIC8+XHJcblx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWdyZWVEYXNoYm9hcmRHcmFwaFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkLCB1c2VTb3J0QnksIHVzZUZpbHRlcnMsIHVzZVBhZ2luYXRpb24gfSBmcm9tICdyZWFjdC10YWJsZSdcclxuaW1wb3J0IFJlYWN0SFRNTFRhYmxlVG9FeGNlbCBmcm9tICdyZWFjdC1odG1sLXRhYmxlLXRvLWV4Y2VsJztcclxuXHJcbi8vIGRlZmF1bHQgc2VhcmNoIGJveCBmaWx0ZXJcclxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciB9LFxyXG59KSB7XHJcbiAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCJcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCkgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxyXG4gICAgICB9fVxyXG4gICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCAke2NvdW50fSByZWNvcmRzLi4uYH1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSBmb3Igc2VsZWN0aW5nXHJcbi8vIGEgdW5pcXVlIG9wdGlvbiBmcm9tIGEgbGlzdFxyXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xyXG4gIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuICBjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldCgpXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICAvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCJcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZClcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKVxyXG59XHJcblxyXG4vLyB0aGUgdGFibGUgbWFya3VwXHJcbmZ1bmN0aW9uIFRhYmxlICh7Y29sdW1ucywgZGF0YX0pe1xyXG4gY29uc3QgZGVmYXVsdENvbHVtbiA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBMZXQncyBzZXQgdXAgb3VyIGRlZmF1bHQgRmlsdGVyIFVJXHJcbiAgICAgIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gICBjb25zdCB7XHJcbiAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgICBoZWFkZXJHcm91cHMsXHJcbiAgICAgZm9vdGVyR3JvdXBzLFxyXG4gICAgIHByZXBhcmVSb3csXHJcbiAgICAgcGFnZSxcclxuICAgICByb3dzLCBcclxuXHJcbiAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICBjYW5OZXh0UGFnZSxcclxuICAgIHBhZ2VPcHRpb25zLFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgZ290b1BhZ2UsXHJcbiAgICBuZXh0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIHNldFBhZ2VTaXplLFxyXG4gICAgc3RhdGU6IHsgcGFnZUluZGV4LCBwYWdlU2l6ZSwgZ3JvdXBCeSwgZXhwYW5kZWQgfSxcclxuICAgfSA9IHVzZVRhYmxlKHsgY29sdW1ucywgZGF0YSwgZGVmYXVsdENvbHVtbiwgaW5pdGlhbFN0YXRlOiB7IHBhZ2VJbmRleDogMCB9IH0sIHVzZUZpbHRlcnMsIHVzZUdyb3VwQnksIHVzZVNvcnRCeSwgdXNlRXhwYW5kZWQsIHVzZVBhZ2luYXRpb24pXHJcblxyXG4gcmV0dXJuKFxyXG48ZGl2PlxyXG4gICAgPGJyIC8+XHJcbiAgICA8UmVhY3RIVE1MVGFibGVUb0V4Y2VsXHJcblx0XHRcdFx0aWQ9XCJ0ZXN0LXRhYmxlLXhscy1idXR0b25cIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtYi0yXCJcclxuXHRcdFx0XHR0YWJsZT1cImRlZ3JlZVRhYmxlXCJcclxuXHRcdFx0XHRmaWxlbmFtZT1cImRlZ3JlZVwiXHJcblx0XHRcdFx0YnV0dG9uVGV4dD1cIkRvd25sb2FkIGFzIFhMU1wiLz5cclxuICAgIDxiciAvPlxyXG4gICA8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCIgey4uLmdldFRhYmxlUHJvcHMoKX0gaWQ9XCJkZWdyZWVUYWJsZVwiPlxyXG4gICAgICAgPHRoZWFkPlxyXG4gICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgIDx0aFxyXG5cdFx0Ly8gc29ydGluZyBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcblx0XHQgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ+KWvCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAn4payJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0ICA8ZGl2Pntjb2x1bW4uY2FuRmlsdGVyID8gY29sdW1uLnJlbmRlcignRmlsdGVyJykgOiBudWxsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgKSl9XHJcbiAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAge3BhZ2UubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBlZHVjYXRpb25hbCBwdXJwb3NlcywgbGV0J3MgY29sb3IgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjZWxsIGRlcGVuZGluZyBvbiB3aGF0IHR5cGUgaXQgaXMgZ2l2ZW5cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIHVzZUdyb3VwQnkgaG9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZWxsLmlzR3JvdXBlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyMwYWZmMDA4MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNBZ2dyZWdhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmYTUwMDc4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc1BsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmMDAwMDQyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NlbGwuaXNHcm91cGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGEgZ3JvdXBlZCBjZWxsLCBhZGQgYW4gZXhwYW5kZXIgYW5kIHJvdyBjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5yb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXNFeHBhbmRlZCA/ICfilrwnIDogJ+KWuid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJyl9ICh7cm93LnN1YlJvd3MubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc0FnZ3JlZ2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjZWxsIGlzIGFnZ3JlZ2F0ZWQsIHVzZSB0aGUgQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJlciBmb3IgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQWdncmVnYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc1BsYWNlaG9sZGVyID8gbnVsbCA6ICggLy8gRm9yIGNlbGxzIHdpdGggcmVwZWF0ZWQgdmFsdWVzLCByZW5kZXIgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGp1c3QgcmVuZGVyIHRoZSByZWd1bGFyIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0NlbGwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgIDwvdGJvZHk+XHJcblx0PHRmb290PlxyXG4gICAgICAgIHtmb290ZXJHcm91cHMubWFwKGdyb3VwID0+IChcclxuICAgICAgICAgIDx0ciB7Li4uZ3JvdXAuZ2V0Rm9vdGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAge2dyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgPHRkIFxyXG5cdFx0ey4uLmNvbHVtbi5nZXRGb290ZXJQcm9wcygpfT5cclxuXHRcdHtjb2x1bW4uY2FuR3JvdXBCeSA/IChcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGNhbiBiZSBncm91cGVkLCBsZXQncyBhZGQgYSB0b2dnbGVcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNHcm91cGVkID8gJ0NsaWNrIHRvIFVuZ3JvdXAgJyA6ICdDbGljayB0byBHcm91cCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHRcdFxyXG5cdFx0e2NvbHVtbi5yZW5kZXIoJ0Zvb3RlcicpfVxyXG5cdCAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApKX1cclxuICAgICAgPC90Zm9vdD5cclxuICAgICA8L3RhYmxlPlxyXG5cclxuXHRcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKDApfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7Jzw8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJldmlvdXNQYWdlKCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UocGFnZUNvdW50IC0gMSl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+Pid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFBhZ2V7JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAge3BhZ2VJbmRleCArIDF9IG9mIHtwYWdlT3B0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIHwgR28gdG8gcGFnZTp7JyAnfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhZ2VJbmRleCArIDF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwYWdlID0gZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC0gMSA6IDBcclxuICAgICAgICAgICAgICBnb3RvUGFnZShwYWdlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VTaXplKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtbMTAsIDIwLCAzMCwgNDAsIDUwXS5tYXAocGFnZVNpemUgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cGFnZVNpemV9IHZhbHVlPXtwYWdlU2l6ZX0+XHJcbiAgICAgICAgICAgICAgU2hvdyB7cGFnZVNpemV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblx0XHR0YWJsZXtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG92ZXJmbG93OiB4O1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuPC9kaXY+XHJcbiApXHJcbiAgXHJcbn1cclxuIFxyXG5cclxuLy8gY29uZmlndXJlIGNvbHVtbnMsIHBvcHVsYXRlIGNlbGxzLCByZW5kZXIgdGFibGVcclxuIGZ1bmN0aW9uIERlZ3JlZUFuYWx5dGljc1RhYmxlKHByb3BzKSB7XHJcbiAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXHJcbiBcclxuICAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAgKCkgPT4gW1xyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdOYW1lIG9mIEZhY3VsdHknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDEnLCAvLyBhY2Nlc3NvciBpcyB0aGUgXCJrZXlcIiBpbiB0aGUgZGF0YSxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gTmFtZXNgLFxyXG5cdCBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ0RlZ3JlZScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMicsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ0RlZ3JlZSBUeXBlJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wzJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdEYXRlIEVhcm5lZCAoY2xpY2sgdG8gc29ydCknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDQnLFxyXG5cdCBzb3J0Qnk6ICdkYXRldGltZScsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBkaXNhYmxlRmlsdGVyczogdHJ1ZVxyXG4gICAgICAgfVxyXG4gICAgIF0sXHJcbiAgICAgW11cclxuICAgKVxyXG4gXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9IC8+IFxyXG4gICApXHJcbiB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWdyZWVBbmFseXRpY3NUYWJsZVxyXG4iLCJpbXBvcnQgRW1wbG95bWVudEFuYWx5dGljc1RhYmxlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9lbXBsb3ltZW50LXN0YXR1cy9lbXBsb3ltZW50X2Rhc2hib2FyZF90YWJsZSdcclxuaW1wb3J0IEVtcGxveW1lbnREYXNoYm9hcmRHcmFwaCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudF9kYXNoYm9hcmRfZ3JhcGgnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBFbXBsb3ltZW50U3RhdHVzKHByb3BzKXtcclxuXHRsZXQgZW1wTGlzdCA9IHByb3BzLmNoaWxkcmVuXHJcblxyXG5cdGxldCBjaGVtZnRDb3VudCA9IDBcclxuXHRsZXQgY2hlbXB0Q291bnQgPSAwXHJcblx0bGV0IGNoZW1sZWNDb3VudCA9IDBcclxuXHJcblx0bGV0IG1jc3VmdENvdW50ID0gMFxyXG5cdGxldCBtY3N1cHRDb3VudCA9IDBcclxuXHRsZXQgbWNzdWxlY0NvdW50ID0gMFxyXG5cclxuXHRsZXQgcDZHZW9mdENvdW50ID0gMFxyXG5cdGxldCBwNkdlb3B0Q291bnQgPSAwXHJcblx0bGV0IHA2R2VvbGVjQ291bnQgPSAwXHJcblxyXG5cdGxldCB0YWJsZURhdGEgPSBbXVxyXG5cclxuXHRsZXQgdW5pdElkXHJcblx0bGV0IHN0YXJ0RGF0ZVxyXG5cdGxldCBlbmREYXRlXHJcblx0XHJcblx0aWYoZW1wTGlzdCkge1xyXG5cdFx0ZW1wTGlzdC5mb3JFYWNoKGFzeW5jIChlKSA9PiB7XHJcblx0XHRcdGlmKGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLnN0YXR1cyA9PSAnRnVsbC10aW1lJykge1xyXG5cdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSBjaGVtZnRDb3VudCsrXHJcblx0XHRcdFx0ZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikgbWNzdWZ0Q291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHA2R2VvZnRDb3VudCsrXHJcblx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGF0dXMgPT0gJ0xlY3R1cmVyJykge1xyXG5cdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSBjaGVtbGVjQ291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIG1jc3VsZWNDb3VudCsrXHJcblx0XHRcdFx0ZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykgcDZHZW9sZWNDb3VudCsrXHJcblx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGF0dXMgPT0gJ1BhcnQtdGltZScpIHtcclxuXHRcdFx0XHRpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkgY2hlbXB0Q291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIG1jc3VwdENvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAzKSBwNkdlb3B0Q291bnQrK1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhd2FpdCB0YWJsZURhdGEucHVzaCh7XHJcblx0XHRcdFx0Y29sMTogZS5sYXN0TmFtZSArICcsICcgKyBlLmZpcnN0TmFtZSxcclxuXHRcdFx0XHRjb2wyOiBlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5mYWN1bHR5X2VtcGxveW1lbnRfcG9zaXRpb24ucG9zaXRpb24sXHJcblx0XHRcdFx0Y29sMzogZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhdHVzLFxyXG5cdFx0XHRcdGNvbDQ6IGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLmNhdGVnb3J5LFxyXG5cdFx0XHRcdGNvbDU6IGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLnN0YXJ0RGF0ZVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdyYXBoRGF0YSA9IFtcclxuXHRcdHtcclxuXHRcdCAgXCJFbXBsb3ltZW50U3RhdHVzXCI6IFwiUGFydC10aW1lXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1cHRDb3VudCxcclxuXHRcdCAgXCJNQ1NVQ29sb3JcIjogXCJoc2woMTA5LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1wdENvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgxNTEsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb3B0Q291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTc3LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiRW1wbG95bWVudFN0YXR1c1wiOiBcIkZ1bGwtdGltZVwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdWZ0Q291bnQsXHJcblx0XHQgIFwiaG90IGRvZ0NvbG9yXCI6IFwiaHNsKDY3LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1mdENvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgyMTUsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb2Z0Q291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMjQ0LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiRW1wbG95bWVudFN0YXR1c1wiOiBcIkxlY3R1cmVyXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1bGVjQ291bnQsXHJcblx0XHQgIFwiaG90IGRvZ0NvbG9yXCI6IFwiaHNsKDIzNCwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtbGVjQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDMwMiwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvbGVjQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTc4LCA3MCUsIDUwJSlcIixcclxuXHRcdH1cclxuXHRdXHJcblx0XHJcblx0aWYocHJvcHMucXVlcnlMaXN0LmVtcGxveW1lbnQgPT0gMSkge1xyXG5cdFx0dW5pdElkID0gcHJvcHMucXVlcnlMaXN0LnVuaXRJZFxyXG5cdFx0c3RhcnREYXRlID0gcHJvcHMucXVlcnlMaXN0LnN0YXJ0RGF0ZVxyXG5cdFx0ZW5kRGF0ZSA9IHByb3BzLnF1ZXJ5TGlzdC5lbmREYXRlXHJcblx0fVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGgzIGFsaWduID0gXCJjZW50ZXJcIj5FbXBsb3ltZW50IFN0YXR1czwvaDM+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gMyAmJlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRW1wRGVwdFVuaXRcIj4gRGVwYXJ0bWVudCBVbml0IDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJFbXBEZXB0VW5pdFwiIGlkPVwiRW1wRGVwdFVuaXRcIiBkZWZhdWx0VmFsdWU9e3VuaXRJZH0+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjBcIj5BbGw8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMVwiPkNoZW1pc3RyeSBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjJcIj5NYXRoZW1hdGljcyBhbmQgQ29tcHV0aW5nIFNjaWVuY2VzIFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiM1wiPlBoeXNpY3MgYW5kIEdlb2xvZ3kgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRW1wU3RhcnRUaW1lUGVyaW9kXCI+IEZyb20gIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiRW1wU3RhcnRUaW1lUGVyaW9kXCIgaWQ9XCJFbXBTdGFydFRpbWVQZXJpb2RcIiBkZWZhdWx0VmFsdWU9e3N0YXJ0RGF0ZX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkVtcEVuZFRpbWVQZXJpb2RcIj4gVG8gPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJFbXBFbmRUaW1lUGVyaW9kXCIgaWQ9XCJFbXBFbmRUaW1lUGVyaW9kXCIgZGVmYXVsdFZhbHVlPXtlbmREYXRlfS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgdW5pdElkIFxyXG5cdFx0XHRcdFx0XHRpZihwcm9wcy5yb2xlPT0zKSB1bml0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRW1wRGVwdFVuaXQnKS52YWx1ZVxyXG5cdFx0XHRcdFx0XHRsZXQgc3RhcnREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VtcFN0YXJ0VGltZVBlcmlvZCcpLnZhbHVlXHJcblx0XHRcdFx0XHRcdGxldCBlbmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VtcEVuZFRpbWVQZXJpb2QnKS52YWx1ZVxyXG5cclxuXHRcdFx0XHRcdFx0bGV0IHVybCA9ICcvZmFjdWx0eSdcclxuXHRcdFx0XHRcdFx0bGV0IHF1ZXJ5ID0ge1xyXG5cdFx0XHRcdFx0XHRcdGVtcGxveW1lbnQ6IDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZih1bml0SWQgJiYgdW5pdElkICE9IDApIHF1ZXJ5LnVuaXRJZCA9IHVuaXRJZFxyXG5cdFx0XHRcdFx0XHRpZihzdGFydERhdGUpIHF1ZXJ5LnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVxyXG5cdFx0XHRcdFx0XHRpZihlbmREYXRlKSBxdWVyeS5lbmREYXRlID0gZW5kRGF0ZVxyXG5cclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdHBhdGhuYW1lOiB1cmwsXHJcblx0XHRcdFx0XHRcdFx0cXVlcnlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH19PiBGaWx0ZXI8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8bmF2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIG5hdi1maWxsIG5hdi1qdXN0aWZpZWRcIiBpZD1cIm5hdi10YWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImVtcGxveW1lbnQtZ3JhcGgtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2VtcGxveW1lbnQtZ3JhcGhcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImVtcGxveW1lbnQtZ3JhcGhcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5PdmVydmlldzwvYT5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJlbXBsb3ltZW50LXRhYmxlLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNlbXBsb3ltZW50LXRhYmxlXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJlbXBsb3ltZW50LXRhYmxlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+RnVsbCBMaXN0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L25hdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cImVtcGxveW1lbnQtZ3JhcGhcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJlbXBsb3ltZW50LWdyYXBoLXRhYlwiPjxFbXBsb3ltZW50RGFzaGJvYXJkR3JhcGggZGF0YT17Z3JhcGhEYXRhfSAvPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZW1wbG95bWVudC10YWJsZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImVtcGxveW1lbnQtdGFibGUtdGFiXCI+PEVtcGxveW1lbnRBbmFseXRpY3NUYWJsZSBkYXRhPXt0YWJsZURhdGF9IC8+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdGEubmF2LWl0ZW06Zm9jdXN7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEubmF2LWl0ZW06aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEuYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBsb3ltZW50U3RhdHVzIiwiLy8gaW5zdGFsbCAocGxlYXNlIG1ha2Ugc3VyZSB2ZXJzaW9ucyBtYXRjaCBwZWVyRGVwZW5kZW5jaWVzKVxyXG4vLyBucG0gaW5zdGFsbCAtLXNhdmUgQG5pdm8vYmFyXHJcbmltcG9ydCB7IFJlc3BvbnNpdmVCYXIgfSBmcm9tICdAbml2by9iYXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gbWFrZSBzdXJlIHBhcmVudCBjb250YWluZXIgaGF2ZSBhIGRlZmluZWQgaGVpZ2h0IHdoZW4gdXNpbmdcclxuLy8gcmVzcG9uc2l2ZSBjb21wb25lbnQsIG90aGVyd2lzZSBoZWlnaHQgd2lsbCBiZSAwIGFuZFxyXG4vLyBubyBjaGFydCB3aWxsIGJlIHJlbmRlcmVkLlxyXG4vLyB3ZWJzaXRlIGV4YW1wbGVzIHNob3djYXNlIG1hbnkgcHJvcGVydGllcyxcclxuLy8geW91J2xsIG9mdGVuIHVzZSBqdXN0IGEgZmV3IG9mIHRoZW0uXHJcblxyXG5jbGFzcyBFbXBsb3ltZW50RGFzaGJvYXJkR3JhcGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGlkID0gXCJncmFwaFwiIHN0eWxlID0ge3toZWlnaHQ6IDcwMH19PlxyXG5cdFx0XHQ8UmVzcG9uc2l2ZUJhclxyXG4gICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YX1cclxuICAgICAgICBrZXlzPXtbICdNQ1NVJywgJ0NoZW0nLCAnUGh5c2ljcy9HZW9sb2d5JyBdfVxyXG4gICAgICAgIGluZGV4Qnk9J0VtcGxveW1lbnRTdGF0dXMnXHJcbiAgICAgICAgbWFyZ2luPXt7IHRvcDogNTAsIHJpZ2h0OiAxMzAsIGJvdHRvbTogNTAsIGxlZnQ6IDYwIH19XHJcbiAgICAgICAgcGFkZGluZz17MC4zfVxyXG4gICAgICAgIHZhbHVlU2NhbGU9e3sgdHlwZTogJ2xpbmVhcicgfX1cclxuICAgICAgICBpbmRleFNjYWxlPXt7IHR5cGU6ICdiYW5kJywgcm91bmQ6IHRydWUgfX1cclxuICAgICAgICBjb2xvcnM9e3sgc2NoZW1lOiAnbml2bycgfX1cclxuICAgICAgICBib3JkZXJDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMS42IF0gXSB9fVxyXG4gICAgICAgIGF4aXNUb3A9e251bGx9XHJcbiAgICAgICAgYXhpc1JpZ2h0PXtudWxsfVxyXG4gICAgICAgIGF4aXNCb3R0b209e3tcclxuICAgICAgICAgICAgdGlja1NpemU6IDUsXHJcbiAgICAgICAgICAgIHRpY2tQYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICB0aWNrUm90YXRpb246IDAsXHJcbiAgICAgICAgICAgIGxlZ2VuZDogJ0VtcGxveW1lbnQgVHlwZS9FbXBsb3ltZW50IFN0YXR1cycsIC8vbGFiZWxcclxuICAgICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICBsZWdlbmRPZmZzZXQ6IDMyXHJcbiAgICAgICAgfX1cclxuICAgICAgICBheGlzTGVmdD17e1xyXG4gICAgICAgICAgICB0aWNrU2l6ZTogNSxcclxuICAgICAgICAgICAgdGlja1BhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgIHRpY2tSb3RhdGlvbjogMCxcclxuICAgICAgICAgICAgbGVnZW5kOiAnQ291bnQnLCAvL2xhYmVsXHJcbiAgICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgbGVnZW5kT2Zmc2V0OiAtNDAsXHJcblx0ICAgIGZvcm1hdDogZSA9PiBNYXRoLmZsb29yKGUpID09PSBlICYmIGVcclxuICAgICAgICB9fVxyXG4gICAgICAgIGxhYmVsU2tpcFdpZHRoPXsxMn1cclxuICAgICAgICBsYWJlbFNraXBIZWlnaHQ9ezEyfVxyXG4gICAgICAgIGxhYmVsVGV4dENvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogWyBbICdkYXJrZXInLCAxLjYgXSBdIH19XHJcbiAgICAgICAgbGVnZW5kcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhRnJvbTogJ2tleXMnLFxyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnYm90dG9tLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDEyMCxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDAsXHJcbiAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc6IDIsXHJcbiAgICAgICAgICAgICAgICBpdGVtV2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgIGl0ZW1IZWlnaHQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgaXRlbURpcmVjdGlvbjogJ2xlZnQtdG8tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgaXRlbU9wYWNpdHk6IDAuODUsXHJcbiAgICAgICAgICAgICAgICBzeW1ib2xTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgIGVmZmVjdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiAnaG92ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF19XHJcbiAgICAgICAgYW5pbWF0ZT17dHJ1ZX1cclxuICAgICAgICBtb3Rpb25TdGlmZm5lc3M9ezkwfVxyXG4gICAgICAgIG1vdGlvbkRhbXBpbmc9ezE1fVxyXG4gICAgLz5cclxuXHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveW1lbnREYXNoYm9hcmRHcmFwaFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkLCB1c2VTb3J0QnksIHVzZUZpbHRlcnMsIHVzZVBhZ2luYXRpb24gfSBmcm9tICdyZWFjdC10YWJsZSdcclxuaW1wb3J0IFJlYWN0SFRNTFRhYmxlVG9FeGNlbCBmcm9tICdyZWFjdC1odG1sLXRhYmxlLXRvLWV4Y2VsJztcclxuXHJcbi8vIGRlZmF1bHQgc2VhcmNoIGJveCBmaWx0ZXJcclxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciB9LFxyXG59KSB7XHJcbiAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCJcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCkgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxyXG4gICAgICB9fVxyXG4gICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCAke2NvdW50fSByZWNvcmRzLi4uYH1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSBmb3Igc2VsZWN0aW5nXHJcbi8vIGEgdW5pcXVlIG9wdGlvbiBmcm9tIGEgbGlzdFxyXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xyXG4gIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuICBjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldCgpXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICAvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCJcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZClcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKVxyXG59XHJcblxyXG4vLyB0aGUgdGFibGUgbWFya3VwXHJcbmZ1bmN0aW9uIFRhYmxlICh7Y29sdW1ucywgZGF0YX0pe1xyXG4gY29uc3QgZGVmYXVsdENvbHVtbiA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBMZXQncyBzZXQgdXAgb3VyIGRlZmF1bHQgRmlsdGVyIFVJXHJcbiAgICAgIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gICBjb25zdCB7XHJcbiAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgICBoZWFkZXJHcm91cHMsXHJcbiAgICAgZm9vdGVyR3JvdXBzLFxyXG4gICAgIHByZXBhcmVSb3csXHJcbiAgICAgcGFnZSxcclxuICAgICByb3dzLCBcclxuXHJcbiAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICBjYW5OZXh0UGFnZSxcclxuICAgIHBhZ2VPcHRpb25zLFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgZ290b1BhZ2UsXHJcbiAgICBuZXh0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIHNldFBhZ2VTaXplLFxyXG4gICAgc3RhdGU6IHsgcGFnZUluZGV4LCBwYWdlU2l6ZSwgZ3JvdXBCeSwgZXhwYW5kZWQgfSxcclxuICAgfSA9IHVzZVRhYmxlKHsgY29sdW1ucywgZGF0YSwgZGVmYXVsdENvbHVtbiwgaW5pdGlhbFN0YXRlOiB7IHBhZ2VJbmRleDogMCB9IH0sIHVzZUZpbHRlcnMsIHVzZUdyb3VwQnksIHVzZVNvcnRCeSwgdXNlRXhwYW5kZWQsIHVzZVBhZ2luYXRpb24pXHJcblxyXG4gcmV0dXJuKFxyXG48ZGl2PlxyXG4gICAgPGJyIC8+XHJcbiAgICA8UmVhY3RIVE1MVGFibGVUb0V4Y2VsXHJcblx0XHRcdFx0aWQ9XCJ0ZXN0LXRhYmxlLXhscy1idXR0b25cIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtYi0yXCJcclxuXHRcdFx0XHR0YWJsZT1cImVtcGxveW1lbnRUYWJsZVwiXHJcblx0XHRcdFx0ZmlsZW5hbWU9XCJlbXBsb3ltZW50XCJcclxuXHRcdFx0XHRidXR0b25UZXh0PVwiRG93bmxvYWQgYXMgWExTXCIvPlxyXG4gICAgPGJyIC8+XHJcbiAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIiB7Li4uZ2V0VGFibGVQcm9wcygpfSBpZD1cImVtcGxveW1lbnRUYWJsZVwiPlxyXG4gICAgICAgPHRoZWFkPlxyXG4gICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgIDx0aFxyXG5cdFx0Ly8gc29ydGluZyBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcblx0XHQgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ+KWvCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAn4payJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0ICA8ZGl2Pntjb2x1bW4uY2FuRmlsdGVyID8gY29sdW1uLnJlbmRlcignRmlsdGVyJykgOiBudWxsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgKSl9XHJcbiAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAge3BhZ2UubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBlZHVjYXRpb25hbCBwdXJwb3NlcywgbGV0J3MgY29sb3IgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjZWxsIGRlcGVuZGluZyBvbiB3aGF0IHR5cGUgaXQgaXMgZ2l2ZW5cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIHVzZUdyb3VwQnkgaG9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZWxsLmlzR3JvdXBlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyMwYWZmMDA4MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNBZ2dyZWdhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmYTUwMDc4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc1BsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmMDAwMDQyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NlbGwuaXNHcm91cGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGEgZ3JvdXBlZCBjZWxsLCBhZGQgYW4gZXhwYW5kZXIgYW5kIHJvdyBjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5yb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXNFeHBhbmRlZCA/ICfilrwnIDogJ+KWuid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJyl9ICh7cm93LnN1YlJvd3MubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc0FnZ3JlZ2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjZWxsIGlzIGFnZ3JlZ2F0ZWQsIHVzZSB0aGUgQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJlciBmb3IgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQWdncmVnYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc1BsYWNlaG9sZGVyID8gbnVsbCA6ICggLy8gRm9yIGNlbGxzIHdpdGggcmVwZWF0ZWQgdmFsdWVzLCByZW5kZXIgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGp1c3QgcmVuZGVyIHRoZSByZWd1bGFyIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0NlbGwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgIDwvdGJvZHk+XHJcblx0PHRmb290PlxyXG4gICAgICAgIHtmb290ZXJHcm91cHMubWFwKGdyb3VwID0+IChcclxuICAgICAgICAgIDx0ciB7Li4uZ3JvdXAuZ2V0Rm9vdGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAge2dyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgPHRkIFxyXG5cdFx0ey4uLmNvbHVtbi5nZXRGb290ZXJQcm9wcygpfT5cclxuXHRcdHtjb2x1bW4uY2FuR3JvdXBCeSA/IChcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGNhbiBiZSBncm91cGVkLCBsZXQncyBhZGQgYSB0b2dnbGVcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNHcm91cGVkID8gJ0NsaWNrIHRvIFVuZ3JvdXAgJyA6ICdDbGljayB0byBHcm91cCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHRcdFxyXG5cdFx0e2NvbHVtbi5yZW5kZXIoJ0Zvb3RlcicpfVxyXG5cdCAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApKX1cclxuICAgICAgPC90Zm9vdD5cclxuICAgICA8L3RhYmxlPlxyXG5cclxuXHRcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKDApfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7Jzw8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJldmlvdXNQYWdlKCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UocGFnZUNvdW50IC0gMSl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+Pid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFBhZ2V7JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAge3BhZ2VJbmRleCArIDF9IG9mIHtwYWdlT3B0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIHwgR28gdG8gcGFnZTp7JyAnfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhZ2VJbmRleCArIDF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwYWdlID0gZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC0gMSA6IDBcclxuICAgICAgICAgICAgICBnb3RvUGFnZShwYWdlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VTaXplKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtbMTAsIDIwLCAzMCwgNDAsIDUwXS5tYXAocGFnZVNpemUgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cGFnZVNpemV9IHZhbHVlPXtwYWdlU2l6ZX0+XHJcbiAgICAgICAgICAgICAgU2hvdyB7cGFnZVNpemV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblx0XHR0YWJsZXtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG92ZXJmbG93OiB4O1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuPC9kaXY+XHJcbiApXHJcbiAgXHJcbn1cclxuIFxyXG5cclxuLy8gY29uZmlndXJlIGNvbHVtbnMsIHBvcHVsYXRlIGNlbGxzLCByZW5kZXIgdGFibGVcclxuIGZ1bmN0aW9uIEVtcGxveW1lbnRBbmFseXRpY3NUYWJsZShwcm9wcykge1xyXG4gICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxyXG4gXHJcbiAgIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgICgpID0+IFtcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnTmFtZSBvZiBGYWN1bHR5JyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wxJywgLy8gYWNjZXNzb3IgaXMgdGhlIFwia2V5XCIgaW4gdGhlIGRhdGEsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IE5hbWVzYCxcclxuXHQgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdQb3NpdGlvbicsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMicsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnU3RhdHVzJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wzJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdDYXRlZ29yeScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sNCcsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICBIZWFkZXI6ICdTdGFydCBEYXRlJyxcclxuICBGb290ZXI6ICcnLFxyXG4gICAgICAgIGFjY2Vzc29yOiAnY29sNScsXHJcbiAgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuICBkaXNhYmxlRmlsdGVyczogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgIF0sXHJcbiAgICAgW11cclxuICAgKVxyXG4gXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9IC8+IFxyXG4gICApXHJcbiB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBsb3ltZW50QW5hbHl0aWNzVGFibGVcclxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xyXG4gIHJldHVybiBjb29raWUucGFyc2UocmVxID8gcmVxLmhlYWRlcnMuY29va2llIHx8IFwiXCIgOiBkb2N1bWVudC5jb29raWUpXHJcbn1cclxuXHJcbi8vIGNoZWNrIHRva2VuIGlmIGV4cGlyZWRcclxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhwaXJlZCh1c2VyKSB7XHJcbiAgbGV0IGRlY29kZWQgPSBqd3QuZGVjb2RlKHVzZXIpXHJcbiAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMFxyXG4gIHJldHVybiBkZWNvZGVkICYmIGRlY29kZWQuZXhwIDwgbm93XHJcbn0iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBpc0V4cGlyZWQgfSBmcm9tIFwiLi4vLi4vaGVscGVyc1wiXHJcbmltcG9ydCBBY2NvbXBsaXNobWVudENvdW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9hY2NvbXBsaXNobWVudC1jb3VudC9hY2NvbXBsaXNobWVudC1jb3VudCdcclxuaW1wb3J0IEVtcGxveW1lbnRTdGF0dXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2VtcGxveW1lbnQtc3RhdHVzL2VtcGxveW1lbnQtc3RhdHVzJ1xyXG5pbXBvcnQgRGVncmVlQ291bnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2RlZ3JlZS9kZWdyZWUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZChwcm9wcykgeyBcclxuXHRpZihwcm9wcy5kYXRhLnJvbGUgPT0gMSkge1xyXG5cdFx0cmV0dXJuICg8TGF5b3V0IHVzZXJJZD17cHJvcHMuZGF0YS51c2VySWR9IGZhY3VsdHlJZD17cHJvcHMuZGF0YS5mYWN1bHR5SWR9IHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gbmFtZT17cHJvcHMuZGF0YS5uYW1lfSAvPilcclxuXHR9IGVsc2UgaWYocHJvcHMuZGF0YS5yb2xlID09IDIgfHwgcHJvcHMuZGF0YS5yb2xlID09IDMpeyBcclxuXHRcdHJldHVybiAoXHJcblx0ICAgICAgICA8TGF5b3V0IHVzZXJJZD17cHJvcHMuZGF0YS51c2VySWR9IGZhY3VsdHlJZD17cHJvcHMuZGF0YS5mYWN1bHR5SWR9IHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gbmFtZT17cHJvcHMuZGF0YS5uYW1lfSBhcHByb3ZhbExpc3Q9e3Byb3BzLmFwcHJvdmFsTGlzdH0gcm9sZUFzc2lnbm1lbnRGbGFnPXtwcm9wcy5yb2xlQXNzaWdubWVudEZsYWd9ID5cclxuXHJcblx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmID0ge3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvZ2VuZXJhdGUtcmVwb3J0c1wifX0+PGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ0biBidG4taW5mb1wiPkRvd25sb2FkIEFsbCBGYWN1bHR5IEluZm9ybWF0aW9uPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIG5hdi1maWxsIG5hdi1qdXN0aWZpZWRcIiBpZD1cIm5hdi10YWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImFjY29tcGxpc2htZW50LWNvdW50LXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNhY2NvbXBsaXNobWVudC1jb3VudFwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiYWNjb21wbGlzaG1lbnQtY291bnRcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5BY2NvbXBsaXNobWVudCBDb3VudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJlbXBsb3ltZW50LXN0YXR1cy10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjZW1wbG95bWVudC1zdGF0dXNcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImVtcGxveW1lbnQtc3RhdHVzXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+RW1wbG95bWVudCBTdGF0dXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZGVncmVlLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNkZWdyZWVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImRlZ3JlZVwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkF0dGFpbmVkIERlZ3JlZXM8L2E+XHJcbiAgICAgICAgICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICBcdFx0PC9uYXY+XHJcblx0ICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgaWQ9XCJuYXYtdGFiQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwiYWNjb21wbGlzaG1lbnQtY291bnRcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJhY2NvbXBsaXNobWVudC1jb3VudC10YWJcIj48QWNjb21wbGlzaG1lbnRDb3VudCByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IHF1ZXJ5TGlzdD17cHJvcHMucXVlcnlMaXN0fT57cHJvcHMuYWNjb21wTGlzdH08L0FjY29tcGxpc2htZW50Q291bnQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJlbXBsb3ltZW50LXN0YXR1c1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImVtcGxveW1lbnQtc3RhdHVzLXRhYlwiPjxFbXBsb3ltZW50U3RhdHVzIHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gcXVlcnlMaXN0PXtwcm9wcy5xdWVyeUxpc3R9Pntwcm9wcy5lbXBMaXN0fTwvRW1wbG95bWVudFN0YXR1cz48L2Rpdj5cclxuXHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJkZWdyZWVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJkZWdyZWUtdGFiXCI+PERlZ3JlZUNvdW50IHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gcXVlcnlMaXN0PXtwcm9wcy5xdWVyeUxpc3R9Pntwcm9wcy5lZHVjTGlzdH08L0RlZ3JlZUNvdW50PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdGEubmF2LWl0ZW17XHJcblx0XHRcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhLm5hdi1pdGVtOmZvY3Vze1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhLm5hdi1pdGVtOmhvdmVye1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhLmFjdGl2ZXtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YSNhY2NvbXBsaXNobWVudC1jb3VudC10YWIuYWN0aXZle1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRuYXZ7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiNhYWE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgIDwvTGF5b3V0PlxyXG5cdCAgICApXHRcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkgeyBcclxuICAgIGNvbnN0IHRva2VuID0gcGFyc2VDb29raWVzKGNvbnRleHQucmVxKVxyXG4gICAgbGV0IGRhdGFcclxuICAgIGxldCBwZXJzb25hbEluZm9cclxuICAgIGxldCBhcHByb3ZhbExpc3RcclxuICAgIGxldCBhY2NvbXBMaXN0XHJcbiAgICBsZXQgZW1wTGlzdFxyXG4gICAgbGV0IGVkdWNMaXN0XHJcbiAgICBsZXQgcm9sZUFzc2lnbm1lbnRGbGFnID0gZmFsc2VcclxuICAgIGxldCBxdWVyeUxpc3RcclxuXHJcbiAgICBpZiAoY29udGV4dC5yZXMpIHtcclxuICAgICAgICBpZiAoaXNFeHBpcmVkKHRva2VuLnVzZXIpIHx8IE9iamVjdC5rZXlzKHRva2VuKS5sZW5ndGggPT09IDAgJiYgdG9rZW4uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gand0LmRlY29kZSh0b2tlbi51c2VyKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZmFjdWx0eUlkID0gZGF0YS5mYWN1bHR5SWRcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuLnVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcGVyc29uYWwgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2Jhc2ljLWluZm8vJyArIGZhY3VsdHlJZCwgaGVhZGVyKVxyXG4gICAgICAgICAgICBwZXJzb25hbEluZm8gPSBhd2FpdCBwZXJzb25hbC5qc29uKClcclxuXHJcbiAgICAgICAgICAgIGxldCBhcHByb3ZhbFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYXBwcm92YWwvJyArIGZhY3VsdHlJZFxyXG4gICAgICAgICAgICBsZXQgYWNjb21wVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9yZXBvcnRzL2FjY29tcGxpc2htZW50J1xyXG4gICAgICAgICAgICBsZXQgZW1wVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9yZXBvcnRzL2VtcGxveW1lbnQnXHJcbiAgICAgICAgICAgIGxldCBlZHVjVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9yZXBvcnRzL2VkdWNhdGlvbidcclxuICAgICAgICAgICAgbGV0IHJvbGVBc3NpZ25tZW50VVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvL3VuaXQvYXNzaWdubWVudCdcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRhdGEucm9sZSA9PSAyIHx8IGRhdGEucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmFsVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50VVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhY2NvbXBVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgZW1wVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIGVkdWNVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5yb2xlID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmFjY29tcGxpc2htZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb21wVVJMICs9ICc/J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnVuaXRJZCAmJiBjb250ZXh0LnF1ZXJ5LnVuaXRJZCAhPSAwKSBhY2NvbXBVUkwgKz0gJ3VuaXRJZD0nICsgY29udGV4dC5xdWVyeS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29udGV4dC5xdWVyeS5lbXBsb3ltZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wVVJMICs9ICc/J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnVuaXRJZCkgZW1wVVJMICs9ICd1bml0SWQ9JyArIGNvbnRleHQucXVlcnkudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZGVncmVlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWR1Y1VSTCArPSAnPydcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS51bml0SWQpIGVkdWNVUkwgKz0gJ3VuaXRJZD0nICsgY29udGV4dC5xdWVyeS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5hY2NvbXBsaXNobWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5zdGFydERhdGUpIGFjY29tcFVSTCArPSAnJnN0YXJ0RGF0ZT0nICsgY29udGV4dC5xdWVyeS5zdGFydERhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmVuZERhdGUpIGFjY29tcFVSTCArPSAnJmVuZERhdGU9JyArIGNvbnRleHQucXVlcnkuZW5kRGF0ZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZW1wbG95bWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5zdGFydERhdGUpIGVtcFVSTCArPSAnJnN0YXJ0RGF0ZT0nICsgY29udGV4dC5xdWVyeS5zdGFydERhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmVuZERhdGUpIGVtcFVSTCArPSAnJmVuZERhdGU9JyArIGNvbnRleHQucXVlcnkuZW5kRGF0ZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZGVncmVlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZSkgZWR1Y1VSTCArPSAnJnN0YXJ0RGF0ZT0nICsgY29udGV4dC5xdWVyeS5zdGFydERhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmVuZERhdGUpIGVkdWNVUkwgKz0gJyZlbmREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LmVuZERhdGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwcm92YWwgPSBhd2FpdCBmZXRjaChhcHByb3ZhbFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMaXN0ID0gYXdhaXQgYXBwcm92YWwuanNvbigpXHJcbiAgICAgICAgICAgICAgICBhcHByb3ZhbExpc3QgPSBhcHByb3ZhbExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb21wUmVwb3J0cyA9IGF3YWl0IGZldGNoKGFjY29tcFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgYWNjb21wTGlzdCA9IGF3YWl0IGFjY29tcFJlcG9ydHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICBhY2NvbXBMaXN0ID0gYWNjb21wTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbXBSZXBvcnRzID0gYXdhaXQgZmV0Y2goZW1wVVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBlbXBMaXN0ID0gYXdhaXQgZW1wUmVwb3J0cy5qc29uKClcclxuICAgICAgICAgICAgICAgIGVtcExpc3QgPSBlbXBMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVkdWNSZXBvcnRzID0gYXdhaXQgZmV0Y2goZWR1Y1VSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgZWR1Y0xpc3QgPSBhd2FpdCBlZHVjUmVwb3J0cy5qc29uKClcclxuICAgICAgICAgICAgICAgIGVkdWNMaXN0ID0gZWR1Y0xpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZUFzc2lnbm1lbnRzID0gYXdhaXQgZmV0Y2gocm9sZUFzc2lnbm1lbnRVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGxldCByb2xlQXNzaWdubWVudExpc3QgPSBhd2FpdCByb2xlQXNzaWdubWVudHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICByb2xlQXNzaWdubWVudExpc3QgPSByb2xlQXNzaWdubWVudExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyb2xlQXNzaWdubWVudExpc3QgJiYgcm9sZUFzc2lnbm1lbnRMaXN0LmFwcHJvdmVyUmVtYXJrcyAhPSBudWxsKSByb2xlQXNzaWdubWVudEZsYWcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5yb2xlID09IDMgJiYgcm9sZUFzc2lnbm1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRGbGFnID0gdHJ1ZSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAxKSB7IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9mYWN1bHR5L2Jhc2ljLWluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4gJiYgdG9rZW4sXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIHBlcnNvbmFsSW5mbzogcGVyc29uYWxJbmZvLnJlc3VsdCxcclxuICAgICAgICAgICAgYXBwcm92YWxMaXN0OiBhcHByb3ZhbExpc3QsXHJcbiAgICAgICAgICAgIGFjY29tcExpc3Q6IGFjY29tcExpc3QsXHJcbiAgICAgICAgICAgIGVtcExpc3QsXHJcbiAgICAgICAgICAgIGVkdWNMaXN0OiBlZHVjTGlzdCB8fCBudWxsLFxyXG4gICAgICAgICAgICByb2xlQXNzaWdubWVudEZsYWcsXHJcbiAgICAgICAgICAgIHF1ZXJ5TGlzdDogY29udGV4dC5xdWVyeVxyXG4gICAgICAgIH1cclxuXHR9XHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuaXZvL2JhclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWh0bWwtdGFibGUtdG8tZXhjZWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10YWJsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9