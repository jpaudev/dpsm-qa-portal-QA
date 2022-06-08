exports.id = "components_layout_js-helpers_index_js";
exports.ids = ["components_layout_js-helpers_index_js"];
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

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\content.js";




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

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\footer.js";


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

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\header.js";



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
      children: ".navbar.jsx-3546386183{background-color:#910303;width:100%;}h2.jsx-3546386183,h5.jsx-3546386183{font-family:Georgia;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2MsQUFHNkIsQUFJTCxvQkFDVCxLQUpELE1BS1gsS0FKQSIsImZpbGUiOiJDOlxcVXNlcnNcXEFqaSBNYWdsYW5xdWVcXERlc2t0b3BcXGRwc20tcWEtcG9ydGFsXFxjb21wb25lbnRzXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuXHRsZXQgcm9sZU5hbWUgPSBcIlwiXHJcblx0c3dpdGNoKHByb3BzLnJvbGUpe1xyXG5cdFx0Y2FzZSAxOiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIkZhY3VsdHlcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAyOiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIlVuaXQgSGVhZFwiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDM6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiRGVwYXJ0bWVudCBDaGFpclwiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIkFkbWluIENsZXJrXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblx0XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Rwc20tc2VhbC5wbmdcIiB3aWR0aD1cIjE4NlwiIGhlaWdodD1cIjE1MFwiIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiIGFsdD1cIkRQU00tUUEtUG9ydGFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdDxoMj4gRFBTTSBRQSBQT1JUQUwgPC9oMj5cclxuXHRcdFxyXG5cdFx0PGRpdiBjbGFzc05hbWUgPSBcIm1sLWF1dG9cIj5cclxuXHRcdFx0PGg1PiBDdXJyZW50bHkgTG9nZ2VkIEluOiA8TGluayBocmVmID0gXCIvc2V0dGluZ3MvY2hhbmdlLXBhc3N3b3JkXCI+PGE+IHtwcm9wcy5uYW1lfSAoe3JvbGVOYW1lfSkgPC9hPjwvTGluaz4gPC9oNT5cclxuXHRcdDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdC5uYXZiYXJ7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM5MTAzMDM7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHR9XHJcblx0XHRoMiwgaDV7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\components\\\\header.js */"
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

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\layout.js";







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

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\sidebar.js";






function Sidebar(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const [cookies, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies)(["user"]);

  function handleRemoveCookie() {
    removeCookie("user");
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
              lineNumber: 43,
              columnNumber: 92
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
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
                lineNumber: 46,
                columnNumber: 93
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
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
              lineNumber: 49,
              columnNumber: 68
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
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
                lineNumber: 52,
                columnNumber: 51
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
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
              lineNumber: 56,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
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
            lineNumber: 72,
            columnNumber: 41
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "1836586042",
        children: "#menu.jsx-1836586042{background-color:#017823;}.list-group-item-success.jsx-1836586042{text-indent:20%;}#active.jsx-1836586042{background-color:#005919;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVjLEFBR2dDLEFBR1osQUFHVSxnQkFGMUIsU0FIQSxBQU1ZLFdBQ1oiLCJmaWxlIjoiQzpcXFVzZXJzXFxBamkgTWFnbGFucXVlXFxEZXNrdG9wXFxkcHNtLXFhLXBvcnRhbFxcY29tcG9uZW50c1xcc2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKHByb3BzKSB7IFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBbY29va2llcywgc2V0Q29va2llLCByZW1vdmVDb29raWVdID0gdXNlQ29va2llcyhbXCJ1c2VyXCJdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVDb29raWUoKSB7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKFwidXNlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmFjdWx0eSA9IHRydWVcclxuICAgIGxldCBzdGFmZiA9IHRydWVcclxuXHJcbiAgICBpZihwcm9wcy5yb2xlID09IDEgfHwgcHJvcHMucm9sZSA9PSAyIHx8IHByb3BzLnJvbGUgPT0gMykge1xyXG4gICAgICAgIHN0YWZmID0gZmFsc2VcclxuICAgICAgICBpZihwcm9wcy5yb2xlID09IDIgfHwgcHJvcHMucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIGZhY3VsdHkgPSBmYWxzZVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoXCJmYWxzZVwiKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIFx0c2V0QWN0aXZlKCFpc0FjdGl2ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJzaWRlYmFyXCI+XHJcblx0ICAgIDxkaXYgY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1pbmZvIGNvbC0xMiBkLW1kLW5vbmUgdGV4dC1jZW50ZXJcIiBvbkNsaWNrID0ge2hhbmRsZVRvZ2dsZX0+IE1haW4gTWVudSA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZCA9IFwibWVudVwiIGNsYXNzTmFtZSA9IHtpc0FjdGl2ZSA/IG51bGwgOiBcImQtbm9uZSBkLW1kLWJsb2NrXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGNvbC0xMlwiPlxyXG5cdFx0XHQ8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zZWNvbmRhcnlcIiBkYXRhLXRvZ2dsZSA9IFwiY29sbGFwc2VcIiBkYXRhLXRhcmdldCA9IFwiI2ZhY3VsdHlNZW51XCIgYXJpYS1jb250cm9scyA9IFwiZmFjdWx0eU1lbnVcIj4gRmFjdWx0eSA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gXCJmYWN1bHR5TWVudVwiIGNsYXNzTmFtZSA9IFwiY29sbGFwc2Ugc2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHlcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eVwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RGFzaGJvYXJkPC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvYmFzaWMtaW5mb1wiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2Jhc2ljLWluZm9cIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkJhc2ljIEluZm9ybWF0aW9uPC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9hY2NvbXBsaXNobWVudFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+QWNjb21wbGlzaG1lbnQ8L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9mYWN1bHR5LWxvYWRcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9mYWN1bHR5LWxvYWRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkZhY3VsdHkgTG9hZDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7LyogIXN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvZXZhbHVhdGlvblwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9ldmFsdWF0aW9uXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5QZWVyIEV2YWx1YXRpb248L2E+PC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L3ZpZXcvYWxsXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L3ZpZXcvYWxsXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExpc3Q8L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9hcHByb3ZhbFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYXBwcm92YWxcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlbmRpbmcgQXBwcm92YWxzICZuYnNwO3twcm9wcy5hcHByb3ZhbExpc3QuZmFjdWx0eUNvdW50ID4gMCAmJiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57cHJvcHMuYXBwcm92YWxMaXN0LmZhY3VsdHlDb3VudH08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9hZG1pblwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWRtaW5cIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkZhY3VsdHkgTGlzdDwvYT48L0xpbms+IH1cclxuXHRcdCAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIHByb3BzLnJvbGVBc3NpZ25tZW50ICYmIDxMaW5rIGhyZWYgPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZSBBc3NpZ25tZW50ICZuYnNwOzxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPiE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiAhcHJvcHMucm9sZUFzc2lnbm1lbnQgJiYgPExpbmsgaHJlZiA9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlIEFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0dWRlbnRcIj48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zZWNvbmRhcnlcIj5TdHVkZW50PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWx1bW5pXCI+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5XCI+QWx1bW5pPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGVwYXJ0bWVudC1hY3Rpdml0aWVzXCI+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5XCI+RGVwYXJ0bWVudCBBY3Rpdml0aWVzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiovfVxyXG5cdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUNvb2tpZX0+TG9nIE91dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdCNtZW51IHtcclxuICBcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMTc4MjM7XHJcblx0XHRcdH1cclxuXHRcdFx0Lmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNze1xyXG5cdFx0XHRcdHRleHQtaW5kZW50OjIwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQjYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDU5MTk7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0PC9kaXY+XHRcdFx0XHRcdCAgICBcclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\components\\\\sidebar.js */"
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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvaWdub3JlZHxDOlxcVXNlcnNcXEFqaSBNYWdsYW5xdWVcXERlc2t0b3BcXGRwc20tcWEtcG9ydGFsXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ29udGVudCIsInByb3BzIiwiY2hpbGRyZW4iLCJGb290ZXIiLCJIZWFkZXIiLCJyb2xlTmFtZSIsInJvbGUiLCJuYW1lIiwiTGF5b3V0IiwiYXBwcm92YWxMaXN0IiwiZmFjdWx0eUlkIiwicm9sZUFzc2lnbm1lbnRGbGFnIiwiU2lkZWJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJ1c2VDb29raWVzIiwiaGFuZGxlUmVtb3ZlQ29va2llIiwiZmFjdWx0eSIsInN0YWZmIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VTdGF0ZSIsImhhbmRsZVRvZ2dsZSIsInBhdGhuYW1lIiwiZmFjdWx0eUNvdW50Iiwicm9sZUFzc2lnbm1lbnQiLCJwYXJzZUNvb2tpZXMiLCJyZXEiLCJjb29raWUiLCJoZWFkZXJzIiwiZG9jdW1lbnQiLCJpc0V4cGlyZWQiLCJ1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QkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQXFDRjtBQUFBLDRDQUFlLG1CQUFmO0FBQUEsK0JBQ1UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsUUFBWDtBQUFBLGlDQUFvQjtBQUErRSxtQkFBTyxFQUFFUCxrQkFBeEY7QUFBQSxnREFBZSwrREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJERDs7QUFFRCwrREFBZVAsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGRjtBQUNBO0FBRU8sU0FBU2lCLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQ2hDLFNBQU9DLG1EQUFBLENBQWFELEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxPQUFKLENBQVlELE1BQVosSUFBc0IsRUFBekIsR0FBOEJFLFFBQVEsQ0FBQ0YsTUFBdkQsQ0FBUDtBQUNELEMsQ0FFRDs7QUFDTyxTQUFTRyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUM5QixNQUFJQyxPQUFPLEdBQUdDLDBEQUFBLENBQVdGLElBQVgsQ0FBZDtBQUNBLE1BQUlHLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsSUFBakM7QUFDQSxTQUFPSixPQUFPLElBQUlBLE9BQU8sQ0FBQ0ssR0FBUixHQUFjSCxHQUFoQztBQUNELEM7Ozs7Ozs7Ozs7QUNaRCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfbGF5b3V0X2pzLWhlbHBlcnNfaW5kZXhfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJyBcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpe1xyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxkaXYgY2xhc3MgPSBcInJvd1wiPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICA8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICZjb3B5OyBDb3B5cmlnaHQgMjAyMSBEUFNNXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEZvb3RlciIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG5cdGxldCByb2xlTmFtZSA9IFwiXCJcclxuXHRzd2l0Y2gocHJvcHMucm9sZSl7XHJcblx0XHRjYXNlIDE6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiRmFjdWx0eVwiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDI6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiVW5pdCBIZWFkXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMzogXHJcblx0XHRcdHJvbGVOYW1lID0gXCJEZXBhcnRtZW50IENoYWlyXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiQWRtaW4gQ2xlcmtcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZHBzbS1zZWFsLnBuZ1wiIHdpZHRoPVwiMTg2XCIgaGVpZ2h0PVwiMTUwXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCIgYWx0PVwiRFBTTS1RQS1Qb3J0YWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0PGgyPiBEUFNNIFFBIFBPUlRBTCA8L2gyPlxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibWwtYXV0b1wiPlxyXG5cdFx0XHQ8aDU+IEN1cnJlbnRseSBMb2dnZWQgSW46IDxMaW5rIGhyZWYgPSBcIi9zZXR0aW5ncy9jaGFuZ2UtcGFzc3dvcmRcIj48YT4ge3Byb3BzLm5hbWV9ICh7cm9sZU5hbWV9KSA8L2E+PC9MaW5rPiA8L2g1PlxyXG5cdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0Lm5hdmJhcntcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzkxMDMwMztcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdH1cclxuXHRcdGgyLCBoNXtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdlb3JnaWE7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50J1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgICBsZXQgYXBwcm92YWxMaXN0XHJcbiAgICBpZihwcm9wcy5hcHByb3ZhbExpc3QpIGFwcHJvdmFsTGlzdCA9IHByb3BzLmFwcHJvdmFsTGlzdFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcC1pY29uc0AxLjQuMS9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjUuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE2LjAvdW1kL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgbmFtZT17IHByb3BzLm5hbWUgfSByb2xlPXtwcm9wcy5yb2xlfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIiBpZCA9IFwibGF5b3V0X3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgcm9sZSA9IHtwcm9wcy5yb2xlfSBhcHByb3ZhbExpc3Q9e2FwcHJvdmFsTGlzdH0gZmFjdWx0eUlkID0ge3Byb3BzLmZhY3VsdHlJZH0gcm9sZUFzc2lnbm1lbnQ9e3Byb3BzLnJvbGVBc3NpZ25tZW50RmxhZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIGlkID0gXCJsYXlvdXRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcihwcm9wcykgeyBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlQ29va2llKCkge1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZShcInVzZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZhY3VsdHkgPSB0cnVlXHJcbiAgICBsZXQgc3RhZmYgPSB0cnVlXHJcblxyXG4gICAgaWYocHJvcHMucm9sZSA9PSAxIHx8IHByb3BzLnJvbGUgPT0gMiB8fCBwcm9wcy5yb2xlID09IDMpIHtcclxuICAgICAgICBzdGFmZiA9IGZhbHNlXHJcbiAgICAgICAgaWYocHJvcHMucm9sZSA9PSAyIHx8IHByb3BzLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICBmYWN1bHR5ID0gZmFsc2VcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKFwiZmFsc2VcIilcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBcdHNldEFjdGl2ZSghaXNBY3RpdmUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiPlxyXG5cdCAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtaW5mbyBjb2wtMTIgZC1tZC1ub25lIHRleHQtY2VudGVyXCIgb25DbGljayA9IHtoYW5kbGVUb2dnbGV9PiBNYWluIE1lbnUgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSBcIm1lbnVcIiBjbGFzc05hbWUgPSB7aXNBY3RpdmUgPyBudWxsIDogXCJkLW5vbmUgZC1tZC1ibG9ja1wifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuXHRcdFx0PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5XCIgZGF0YS10b2dnbGUgPSBcImNvbGxhcHNlXCIgZGF0YS10YXJnZXQgPSBcIiNmYWN1bHR5TWVudVwiIGFyaWEtY29udHJvbHMgPSBcImZhY3VsdHlNZW51XCI+IEZhY3VsdHkgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9IFwiZmFjdWx0eU1lbnVcIiBjbGFzc05hbWUgPSBcImNvbGxhcHNlIHNob3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5XCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHlcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkRhc2hib2FyZDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2Jhc2ljLWluZm9cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9iYXNpYy1pbmZvXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5CYXNpYyBJbmZvcm1hdGlvbjwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2FjY29tcGxpc2htZW50XCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkFjY29tcGxpc2htZW50PC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvZmFjdWx0eS1sb2FkXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvZmFjdWx0eS1sb2FkXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExvYWQ8L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2V2YWx1YXRpb25cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvZXZhbHVhdGlvblwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+UGVlciBFdmFsdWF0aW9uPC9hPjwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS92aWV3L2FsbFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS92aWV3L2FsbFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMaXN0PC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvYXBwcm92YWxcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2FwcHJvdmFsXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZW5kaW5nIEFwcHJvdmFscyAmbmJzcDt7cHJvcHMuYXBwcm92YWxMaXN0LmZhY3VsdHlDb3VudCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e3Byb3BzLmFwcHJvdmFsTGlzdC5mYWN1bHR5Q291bnR9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvYWRtaW5cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2FkbWluXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExpc3Q8L2E+PC9MaW5rPiB9XHJcblx0XHQgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiBwcm9wcy5yb2xlQXNzaWdubWVudCAmJiA8TGluayBocmVmID17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGUgQXNzaWdubWVudCAmbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj4hPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgIXByb3BzLnJvbGVBc3NpZ25tZW50ICYmIDxMaW5rIGhyZWYgPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZSBBc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdHVkZW50XCI+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5XCI+U3R1ZGVudDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FsdW1uaVwiPjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXNlY29uZGFyeVwiPkFsdW1uaTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RlcGFydG1lbnQtYWN0aXZpdGllc1wiPjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXNlY29uZGFyeVwiPkRlcGFydG1lbnQgQWN0aXZpdGllczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4qL31cclxuXHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1kYW5nZXJcIiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVDb29raWV9PkxvZyBPdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHQjbWVudSB7XHJcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3ODIzO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc3tcclxuXHRcdFx0XHR0ZXh0LWluZGVudDoyMCU7XHJcblx0XHRcdH1cclxuXHRcdFx0I2FjdGl2ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1OTE5O1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHR9XHJcblx0XHRgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdDwvZGl2Plx0XHRcdFx0XHQgICAgXHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xyXG4gIHJldHVybiBjb29raWUucGFyc2UocmVxID8gcmVxLmhlYWRlcnMuY29va2llIHx8IFwiXCIgOiBkb2N1bWVudC5jb29raWUpXHJcbn1cclxuXHJcbi8vIGNoZWNrIHRva2VuIGlmIGV4cGlyZWRcclxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhwaXJlZCh1c2VyKSB7XHJcbiAgbGV0IGRlY29kZWQgPSBqd3QuZGVjb2RlKHVzZXIpXHJcbiAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMFxyXG4gIHJldHVybiBkZWNvZGVkICYmIGRlY29kZWQuZXhwIDwgbm93XHJcbn0iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9