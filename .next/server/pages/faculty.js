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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\content.js";




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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\footer.js";


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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\header.js";



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
      children: ".navbar.jsx-3546386183{background-color:#910303;width:100%;}h2.jsx-3546386183,h5.jsx-3546386183{font-family:Georgia;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDYyxBQUc2QixBQUlMLG9CQUNULEtBSkQsTUFLWCxLQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcblx0bGV0IHJvbGVOYW1lID0gXCJcIlxyXG5cdHN3aXRjaChwcm9wcy5yb2xlKXtcclxuXHRcdGNhc2UgMTogXHJcblx0XHRcdHJvbGVOYW1lID0gXCJGYWN1bHR5XCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMjogXHJcblx0XHRcdHJvbGVOYW1lID0gXCJVbml0IEhlYWRcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAzOiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIkRlcGFydG1lbnQgQ2hhaXJcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDogXHJcblx0XHRcdHJvbGVOYW1lID0gXCJBZG1pbiBDbGVya1wiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cdFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9kcHNtLXNlYWwucG5nXCIgd2lkdGg9XCIxODZcIiBoZWlnaHQ9XCIxNTBcIiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIiBhbHQ9XCJEUFNNLVFBLVBvcnRhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHQ8aDI+IERQU00gUUEgUE9SVEFMIDwvaDI+XHJcblx0XHRcclxuXHRcdDxkaXYgY2xhc3NOYW1lID0gXCJtbC1hdXRvXCI+XHJcblx0XHRcdDxoNT4gQ3VycmVudGx5IExvZ2dlZCBJbjogPExpbmsgaHJlZiA9IFwiL3NldHRpbmdzL2NoYW5nZS1wYXNzd29yZFwiPjxhPiB7cHJvcHMubmFtZX0gKHtyb2xlTmFtZX0pIDwvYT48L0xpbms+IDwvaDU+XHJcblx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQubmF2YmFye1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTEwMzAzO1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0fVxyXG5cdFx0aDIsIGg1e1xyXG5cdFx0XHRmb250LWZhbWlseTogR2VvcmdpYTtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR9XHJcblx0YH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\components\\\\header.js */"
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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\layout.js";







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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\sidebar.js";






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
        children: "#menu.jsx-1836586042{background-color:#017823;}.list-group-item-success.jsx-1836586042{text-indent:20%;}#active.jsx-1836586042{background-color:#005919;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWMsQUFHZ0MsQUFHWixBQUdVLGdCQUYxQixTQUhBLEFBTVksV0FDWiIsImZpbGUiOiJDOlxcVXNlcnNcXG5pY2hvXFxEb2N1bWVudHNcXEdpdEh1YlxcZHBzbS1xYS1wb3J0YWwtUUFcXGNvbXBvbmVudHNcXHNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcihwcm9wcykgeyBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlQ29va2llKCkge1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZShcInVzZXJcIiwge3BhdGg6Jy8nfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZhY3VsdHkgPSB0cnVlXHJcbiAgICBsZXQgc3RhZmYgPSB0cnVlXHJcblxyXG4gICAgaWYocHJvcHMucm9sZSA9PSAxIHx8IHByb3BzLnJvbGUgPT0gMiB8fCBwcm9wcy5yb2xlID09IDMpIHtcclxuICAgICAgICBzdGFmZiA9IGZhbHNlXHJcbiAgICAgICAgaWYocHJvcHMucm9sZSA9PSAyIHx8IHByb3BzLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICBmYWN1bHR5ID0gZmFsc2VcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKFwiZmFsc2VcIilcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBcdHNldEFjdGl2ZSghaXNBY3RpdmUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiPlxyXG5cdCAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtaW5mbyBjb2wtMTIgZC1tZC1ub25lIHRleHQtY2VudGVyXCIgb25DbGljayA9IHtoYW5kbGVUb2dnbGV9PiBNYWluIE1lbnUgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSBcIm1lbnVcIiBjbGFzc05hbWUgPSB7aXNBY3RpdmUgPyBudWxsIDogXCJkLW5vbmUgZC1tZC1ibG9ja1wifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuXHRcdFx0PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5XCIgZGF0YS10b2dnbGUgPSBcImNvbGxhcHNlXCIgZGF0YS10YXJnZXQgPSBcIiNmYWN1bHR5TWVudVwiIGFyaWEtY29udHJvbHMgPSBcImZhY3VsdHlNZW51XCI+IEZhY3VsdHkgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9IFwiZmFjdWx0eU1lbnVcIiBjbGFzc05hbWUgPSBcImNvbGxhcHNlIHNob3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5XCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHlcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkRhc2hib2FyZDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2Jhc2ljLWluZm9cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9iYXNpYy1pbmZvXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5CYXNpYyBJbmZvcm1hdGlvbjwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2FjY29tcGxpc2htZW50XCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkFjY29tcGxpc2htZW50PC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvZmFjdWx0eS1sb2FkXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvZmFjdWx0eS1sb2FkXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExvYWQ8L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS92aWV3L2FsbFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS92aWV3L2FsbFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMaXN0PC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvYXBwcm92YWxcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2FwcHJvdmFsXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZW5kaW5nIEFwcHJvdmFscyAmbmJzcDt7cHJvcHMuYXBwcm92YWxMaXN0LmZhY3VsdHlDb3VudCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e3Byb3BzLmFwcHJvdmFsTGlzdC5mYWN1bHR5Q291bnR9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvYWRtaW5cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2FkbWluXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExpc3Q8L2E+PC9MaW5rPiB9XHJcblx0XHQgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiBwcm9wcy5yb2xlQXNzaWdubWVudCAmJiA8TGluayBocmVmID17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGUgQXNzaWdubWVudCAmbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj4hPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgIXByb3BzLnJvbGVBc3NpZ25tZW50ICYmIDxMaW5rIGhyZWYgPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZSBBc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tZGFuZ2VyXCIgb25DbGljaz17aGFuZGxlUmVtb3ZlQ29va2llfT5Mb2cgT3V0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0I21lbnUge1xyXG4gIFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxNzgyMztcclxuXHRcdFx0fVxyXG5cdFx0XHQubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3N7XHJcblx0XHRcdFx0dGV4dC1pbmRlbnQ6MjAlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCNhY3RpdmV7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNTkxOTtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHQ8L2Rpdj5cdFx0XHRcdFx0ICAgIFxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\components\\\\sidebar.js */"
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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\accomplishment-count\\accomplishment-count.js";





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
      children: "a.nav-item.jsx-298159374:focus{background-color:#78b6c2;}a.nav-item.jsx-298159374:hover{background-color:#78b6c2;}a.active.jsx-298159374{background-color:#78b6c2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGFjY29tcGxpc2htZW50LWNvdW50XFxhY2NvbXBsaXNobWVudC1jb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtTmMsQUFHNkIsQUFHQSxBQUdBLHlCQUx6QixBQUdBLEFBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcYWNjb21wbGlzaG1lbnQtY291bnRcXGFjY29tcGxpc2htZW50LWNvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjY29tcGxpc2htZW50QW5hbHl0aWNzVGFibGUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2FjY29tcGxpc2htZW50LWNvdW50L2FjY29tcGxpc2htZW50X2Rhc2hib2FyZF90YWJsZSdcclxuaW1wb3J0IEFjY29tcGxpc2htZW50RGFzaGJvYXJkR3JhcGggZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2FjY29tcGxpc2htZW50LWNvdW50L2FjY29tcGxpc2htZW50X2Rhc2hib2FyZF9ncmFwaCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIEFjY29tcGxpc2htZW50Q291bnQocHJvcHMpeyBcclxuXHRsZXQgYWNjb21wTGlzdCA9IHByb3BzLmNoaWxkcmVuXHJcbiAgICBcclxuICAgIGxldCBjaGVtUFNBQ291bnQgPSAwXHJcbiAgICBsZXQgY2hlbVRTQ291bnQgPSAwXHJcblx0bGV0IGNoZW1QdWJDb3VudCA9IDBcclxuXHRsZXQgY2hlbVJHQ291bnQgPSAwXHJcblx0XHJcblx0bGV0IG1jc3VQU0FDb3VudCA9IDBcclxuXHRsZXQgbWNzdVRTQ291bnQgPSAwXHJcblx0bGV0IG1jc3VQdWJDb3VudCA9IDBcclxuXHRsZXQgbWNzdVJHQ291bnQgPSAwXHJcblx0XHJcblx0bGV0IHA2R2VvUFNBQ291bnQgPSAwXHJcblx0bGV0IHA2R2VvVFNDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9QdWJDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9SR0NvdW50ID0gMFxyXG5cclxuXHRsZXQgdGFibGVEYXRhID0gW11cclxuXHJcblx0bGV0IHVuaXRJZFxyXG5cdGxldCBzdGFydERhdGVcclxuXHRsZXQgZW5kRGF0ZVxyXG5cclxuXHRpZihhY2NvbXBMaXN0ICE9IG51bGwpIHtcclxuXHRcdE9iamVjdC5rZXlzKGFjY29tcExpc3QpLm1hcChrZXkgPT4ge1xyXG5cdFx0ICBpZihhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSB7XHJcblx0XHRcdGNoZW1QU0FDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9wdWJsaWNfc2VydmljZXMubGVuZ3RoXHJcblx0XHRcdGNoZW1UU0NvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3RyYWluaW5nX3NlbWluYXJzLmxlbmd0aFxyXG5cdFx0XHRjaGVtUHViQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGlzaGVycy5sZW5ndGhcclxuXHRcdFx0Y2hlbVJHQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcmVzZWFyY2hlcnMubGVuZ3RoXHJcblx0XHQgIH1cclxuXHRcdCAgZWxzZSBpZihhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSB7XHJcblx0XHRcdG1jc3VQU0FDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9wdWJsaWNfc2VydmljZXMubGVuZ3RoXHJcblx0XHRcdG1jc3VUU0NvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3RyYWluaW5nX3NlbWluYXJzLmxlbmd0aFxyXG5cdFx0XHRtY3N1UHViQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGlzaGVycy5sZW5ndGhcclxuXHRcdFx0bWNzdVJHQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcmVzZWFyY2hlcnMubGVuZ3RoXHJcblx0XHQgIH1cclxuXHRcdCAgZWxzZSBpZihhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV91bml0LnVuaXRJZCA9PSAzKSB7XHJcblx0XHRcdHA2R2VvUFNBQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGljX3NlcnZpY2VzLmxlbmd0aFxyXG5cdFx0XHRwNkdlb1RTQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdHJhaW5pbmdfc2VtaW5hcnMubGVuZ3RoXHJcblx0XHRcdHA2R2VvUHViQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGlzaGVycy5sZW5ndGhcclxuXHRcdFx0cDZHZW9SR0NvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3Jlc2VhcmNoZXJzLmxlbmd0aFxyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICBpZihhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9wdWJsaWNfc2VydmljZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9wdWJsaWNfc2VydmljZXMuZm9yRWFjaChhc3luYyAoaSkgPT4ge1xyXG5cdFx0XHRcdGF3YWl0IHRhYmxlRGF0YS5wdXNoKHtcclxuXHRcdFx0XHRcdGNvbDE6IGFjY29tcExpc3Rba2V5XS5sYXN0TmFtZSArICcsICcgKyBhY2NvbXBMaXN0W2tleV0uZmlyc3ROYW1lLFxyXG5cdFx0XHRcdFx0Y29sMjogaS5wb3NpdGlvbiArICcgLSAnICsgaS5vcmdhbml6YXRpb24sXHJcblx0XHRcdFx0XHRjb2wzOiAnUHVibGljIFNlcnZpY2UnLFxyXG5cdFx0XHRcdFx0Y29sNDogaS5zdGFydERhdGUsXHJcblx0XHRcdFx0XHRjb2w1OiBpLmVuZERhdGVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICBpZihhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9wdWJsaXNoZXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0YWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcHVibGlzaGVycy5mb3JFYWNoKGFzeW5jIChpKSA9PiB7XHJcblx0XHRcdFx0YXdhaXQgdGFibGVEYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0Y29sMTogYWNjb21wTGlzdFtrZXldLmxhc3ROYW1lICsgJywgJyArIGFjY29tcExpc3Rba2V5XS5maXJzdE5hbWUsXHJcblx0XHRcdFx0XHRjb2wyOiBpLmZhY3VsdHlfcHVibGljYXRpb24udGl0bGUsXHJcblx0XHRcdFx0XHRjb2wzOiAnUHVibGljYXRpb24nLFxyXG5cdFx0XHRcdFx0Y29sNDogaS5mYWN1bHR5X3B1YmxpY2F0aW9uLnB1YmxpY2F0aW9uRGF0ZSxcclxuXHRcdFx0XHRcdGNvbDU6IGkuZmFjdWx0eV9wdWJsaWNhdGlvbi5wdWJsaWNhdGlvbkRhdGVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICBpZihhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV90cmFpbmluZ19zZW1pbmFycy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3RyYWluaW5nX3NlbWluYXJzLmZvckVhY2goYXN5bmMgKGkpID0+IHtcclxuXHRcdFx0XHRhd2FpdCB0YWJsZURhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRjb2wxOiBhY2NvbXBMaXN0W2tleV0ubGFzdE5hbWUgKyAnLCAnICsgYWNjb21wTGlzdFtrZXldLmZpcnN0TmFtZSxcclxuXHRcdFx0XHRcdGNvbDI6IGkucm9sZSArICcgLSAnICsgaS50aXRsZSxcclxuXHRcdFx0XHRcdGNvbDM6ICdUcmFpbmluZy9TZW1pbmFyJyxcclxuXHRcdFx0XHRcdGNvbDQ6IGkuZGF0ZUZyb20sXHJcblx0XHRcdFx0XHRjb2w1OiBpLmRhdGVUb1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHQgIH1cclxuXHJcblx0XHQgIGlmKGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3Jlc2VhcmNoZXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0YWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcmVzZWFyY2hlcnMuZm9yRWFjaChhc3luYyAoaSkgPT4ge1xyXG5cdFx0XHRcdGF3YWl0IHRhYmxlRGF0YS5wdXNoKHtcclxuXHRcdFx0XHRcdGNvbDE6IGFjY29tcExpc3Rba2V5XS5sYXN0TmFtZSArICcsICcgKyBhY2NvbXBMaXN0W2tleV0uZmlyc3ROYW1lLFxyXG5cdFx0XHRcdFx0Y29sMjogaS5mYWN1bHR5X3Jlc2VhcmNoX2dyYW50LnJlc2VhcmNoTmFtZSxcclxuXHRcdFx0XHRcdGNvbDM6ICdSZXNlYXJjaCBHcmFudCcsXHJcblx0XHRcdFx0XHRjb2w0OiBpLmZhY3VsdHlfcmVzZWFyY2hfZ3JhbnQuYWN0dWFsU3RhcnQsXHJcblx0XHRcdFx0XHRjb2w1OiBpLmZhY3VsdHlfcmVzZWFyY2hfZ3JhbnQuYWN0dWFsRW5kXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdCAgfVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBncmFwaERhdGEgPSBbXHJcblx0XHR7XHJcblx0XHQgIFwiQWNjb21wbGlzaG1lbnRUeXBlXCI6IFwiUHVibGljIFNlcnZpY2VcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VQU0FDb3VudCxcclxuXHRcdCAgXCJNQ1NVQ29sb3JcIjogXCJoc2woODgsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbVBTQUNvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgxMDIsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb1BTQUNvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDEyNywgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkFjY29tcGxpc2htZW50VHlwZVwiOiBcIlB1YmxpY2F0aW9uc1wiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdVB1YkNvdW50LFxyXG5cdFx0ICBcIk1DU1VDb2xvclwiOiBcImhzbCgxMDksIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbVB1YkNvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgxNTEsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb1B1YkNvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDE3NywgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkFjY29tcGxpc2htZW50VHlwZVwiOiBcIlJlc2VhcmNoIEdyYW50c1wiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdVJHQ291bnQsXHJcblx0XHQgIFwiaG90IGRvZ0NvbG9yXCI6IFwiaHNsKDY3LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1SR0NvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgyMTUsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb1JHQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMjQ0LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiQWNjb21wbGlzaG1lbnRUeXBlXCI6IFwiVHJhaW5pbmcvU2VtaW5hcnNcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VUU0NvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCgyMzQsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbVRTQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDMwMiwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvVFNDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxNzgsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fVxyXG5cdCAgXVxyXG5cclxuXHRpZihwcm9wcy5xdWVyeUxpc3QuYWNjb21wbGlzaG1lbnQgPT0gMSkge1xyXG5cdFx0dW5pdElkID0gcHJvcHMucXVlcnlMaXN0LnVuaXRJZFxyXG5cdFx0c3RhcnREYXRlID0gcHJvcHMucXVlcnlMaXN0LnN0YXJ0RGF0ZVxyXG5cdFx0ZW5kRGF0ZSA9IHByb3BzLnF1ZXJ5TGlzdC5lbmREYXRlXHJcblx0fVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGgzIGFsaWduID0gXCJjZW50ZXJcIj5BY2NvbXBsaXNobWVudCBDb3VudDwvaDM+XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDMgJiYgXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJEZXB0VW5pdFwiPiBEZXBhcnRtZW50IFVuaXQgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcIkRlcHRVbml0XCIgaWQ9XCJEZXB0VW5pdFwiIGRlZmF1bHRWYWx1ZT17dW5pdElkfT5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMFwiPkFsbDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+Q2hlbWlzdHJ5IFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPk1hdGhlbWF0aWNzIGFuZCBDb21wdXRpbmcgU2NpZW5jZXMgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIzXCI+UGh5c2ljcyBhbmQgR2VvbG9neSBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiU3RhcnRUaW1lUGVyaW9kXCI+IEZyb20gIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiU3RhcnRUaW1lUGVyaW9kXCIgaWQ9XCJTdGFydFRpbWVQZXJpb2RcIiBkZWZhdWx0VmFsdWU9e3N0YXJ0RGF0ZX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkVuZFRpbWVQZXJpb2RcIj4gVG8gPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJFbmRUaW1lUGVyaW9kXCIgaWQ9XCJFbmRUaW1lUGVyaW9kXCIgZGVmYXVsdFZhbHVlPXtlbmREYXRlfS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgdW5pdElkXHJcblxyXG5cdFx0XHRcdFx0XHRpZihwcm9wcy5yb2xlID09Mykge1xyXG5cdFx0XHRcdFx0XHRcdHVuaXRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEZXB0VW5pdCcpLnZhbHVlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGV0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTdGFydFRpbWVQZXJpb2QnKS52YWx1ZVxyXG5cdFx0XHRcdFx0XHRsZXQgZW5kRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFbmRUaW1lUGVyaW9kJykudmFsdWVcclxuXHJcblx0XHRcdFx0XHRcdGxldCB1cmwgPSAnL2ZhY3VsdHknXHJcblx0XHRcdFx0XHRcdGxldCBxdWVyeSA9IHtcclxuXHRcdFx0XHRcdFx0XHRhY2NvbXBsaXNobWVudDogMVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmKHVuaXRJZCAmJiB1bml0SWQgIT0gMCkgcXVlcnkudW5pdElkID0gdW5pdElkXHJcblx0XHRcdFx0XHRcdGlmKHN0YXJ0RGF0ZSkgcXVlcnkuc3RhcnREYXRlID0gc3RhcnREYXRlXHJcblx0XHRcdFx0XHRcdGlmKGVuZERhdGUpIHF1ZXJ5LmVuZERhdGUgPSBlbmREYXRlXHJcblxyXG5cdFx0XHRcdFx0XHRSb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0cGF0aG5hbWU6IHVybCxcclxuXHRcdFx0XHRcdFx0XHRxdWVyeVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fX0+IEZpbHRlcjwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxuYXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgbmF2LWZpbGwgbmF2LWp1c3RpZmllZFwiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZ3JhcGgtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2dyYXBoXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJncmFwaFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPk92ZXJ2aWV3PC9hPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cInRhYmxlLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiN0YWJsZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwidGFibGVcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5GdWxsIExpc3Q8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgaWQ9XCJuYXYtdGFiQ29udGVudFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwiZ3JhcGhcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJncmFwaC10YWJcIj48QWNjb21wbGlzaG1lbnREYXNoYm9hcmRHcmFwaCBkYXRhPXtncmFwaERhdGF9IC8+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJ0YWJsZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cInRhYmxlLXRhYlwiPjxBY2NvbXBsaXNobWVudEFuYWx5dGljc1RhYmxlIGRhdGE9e3RhYmxlRGF0YX0gLz48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0YS5uYXYtaXRlbTpmb2N1c3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdFx0YS5uYXYtaXRlbTpob3ZlcntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdFx0YS5hY3RpdmV7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29tcGxpc2htZW50Q291bnQiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\accomplishment-count\\\\accomplishment-count.js */"
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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\accomplishment-count\\accomplishment_dashboard_graph.js";
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


var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\accomplishment-count\\accomplishment_dashboard_table.js";


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
      children: "table.jsx-3450710701{display:block;overflow:x;white-space:nowrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGFjY29tcGxpc2htZW50LWNvdW50XFxhY2NvbXBsaXNobWVudF9kYXNoYm9hcmRfdGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU9rQixBQUdrQixjQUNILFdBQ1EsbUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGFjY29tcGxpc2htZW50LWNvdW50XFxhY2NvbXBsaXNobWVudF9kYXNoYm9hcmRfdGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkLCB1c2VTb3J0QnksIHVzZUZpbHRlcnMsIHVzZVBhZ2luYXRpb24gfSBmcm9tICdyZWFjdC10YWJsZSdcclxuaW1wb3J0IFJlYWN0SFRNTFRhYmxlVG9FeGNlbCBmcm9tICdyZWFjdC1odG1sLXRhYmxlLXRvLWV4Y2VsJztcclxuXHJcbi8vIGRlZmF1bHQgc2VhcmNoIGJveCBmaWx0ZXJcclxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciB9LFxyXG59KSB7XHJcbiAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCJcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCkgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxyXG4gICAgICB9fVxyXG4gICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCAke2NvdW50fSByZWNvcmRzLi4uYH1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSBmb3Igc2VsZWN0aW5nXHJcbi8vIGEgdW5pcXVlIG9wdGlvbiBmcm9tIGEgbGlzdFxyXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xyXG4gIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuICBjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldCgpXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICAvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgY29sLW1kLTEyXCJcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZClcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKVxyXG59XHJcblxyXG4vLyB0aGUgdGFibGUgbWFya3VwXHJcbmZ1bmN0aW9uIFRhYmxlICh7Y29sdW1ucywgZGF0YX0pe1xyXG4gY29uc3QgZGVmYXVsdENvbHVtbiA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBMZXQncyBzZXQgdXAgb3VyIGRlZmF1bHQgRmlsdGVyIFVJXHJcbiAgICAgIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gICBjb25zdCB7XHJcbiAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgICBoZWFkZXJHcm91cHMsXHJcbiAgICAgZm9vdGVyR3JvdXBzLFxyXG4gICAgIHByZXBhcmVSb3csXHJcbiAgICAgcGFnZSxcclxuICAgICByb3dzLCBcclxuXHJcbiAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICBjYW5OZXh0UGFnZSxcclxuICAgIHBhZ2VPcHRpb25zLFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgZ290b1BhZ2UsXHJcbiAgICBuZXh0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIHNldFBhZ2VTaXplLFxyXG4gICAgc3RhdGU6IHsgcGFnZUluZGV4LCBwYWdlU2l6ZSwgZ3JvdXBCeSwgZXhwYW5kZWQgfSxcclxuICAgfSA9IHVzZVRhYmxlKHsgY29sdW1ucywgZGF0YSwgZGVmYXVsdENvbHVtbiwgaW5pdGlhbFN0YXRlOiB7IHBhZ2VJbmRleDogMCB9IH0sIHVzZUZpbHRlcnMsIHVzZUdyb3VwQnksIHVzZVNvcnRCeSwgdXNlRXhwYW5kZWQsIHVzZVBhZ2luYXRpb24pXHJcblxyXG4gcmV0dXJuKFxyXG48ZGl2PlxyXG4gICAgPGJyIC8+XHJcbiAgICA8UmVhY3RIVE1MVGFibGVUb0V4Y2VsXHJcblx0XHRcdFx0aWQ9XCJ0ZXN0LXRhYmxlLXhscy1idXR0b25cIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtYi0yXCJcclxuXHRcdFx0XHR0YWJsZT1cImFjY29tcGxpc2htZW50VGFibGVcIlxyXG5cdFx0XHRcdGZpbGVuYW1lPVwiYWNjb21wbGlzaG1lbnRcIlxyXG5cdFx0XHRcdGJ1dHRvblRleHQ9XCJEb3dubG9hZCBhcyBYTFNcIi8+XHJcbiAgICA8YnIgLz5cclxuICAgPHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZFwiIHsuLi5nZXRUYWJsZVByb3BzKCl9IGlkPVwiYWNjb21wbGlzaG1lbnRUYWJsZVwiPlxyXG4gICAgICAgPHRoZWFkPlxyXG4gICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgIDx0aFxyXG5cdFx0Ly8gc29ydGluZyBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcblx0XHQgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ+KWvCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAn4payJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0ICA8ZGl2Pntjb2x1bW4uY2FuRmlsdGVyID8gY29sdW1uLnJlbmRlcignRmlsdGVyJykgOiBudWxsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgKSl9XHJcbiAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAge3BhZ2UubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBlZHVjYXRpb25hbCBwdXJwb3NlcywgbGV0J3MgY29sb3IgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjZWxsIGRlcGVuZGluZyBvbiB3aGF0IHR5cGUgaXQgaXMgZ2l2ZW5cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIHVzZUdyb3VwQnkgaG9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZWxsLmlzR3JvdXBlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyMwYWZmMDA4MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNBZ2dyZWdhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmYTUwMDc4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc1BsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmMDAwMDQyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NlbGwuaXNHcm91cGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGEgZ3JvdXBlZCBjZWxsLCBhZGQgYW4gZXhwYW5kZXIgYW5kIHJvdyBjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5yb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXNFeHBhbmRlZCA/ICfilrwnIDogJ+KWuid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJyl9ICh7cm93LnN1YlJvd3MubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc0FnZ3JlZ2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjZWxsIGlzIGFnZ3JlZ2F0ZWQsIHVzZSB0aGUgQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJlciBmb3IgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQWdncmVnYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc1BsYWNlaG9sZGVyID8gbnVsbCA6ICggLy8gRm9yIGNlbGxzIHdpdGggcmVwZWF0ZWQgdmFsdWVzLCByZW5kZXIgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGp1c3QgcmVuZGVyIHRoZSByZWd1bGFyIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0NlbGwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgIDwvdGJvZHk+XHJcblx0PHRmb290PlxyXG4gICAgICAgIHtmb290ZXJHcm91cHMubWFwKGdyb3VwID0+IChcclxuICAgICAgICAgIDx0ciB7Li4uZ3JvdXAuZ2V0Rm9vdGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAge2dyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgPHRkIFxyXG5cdFx0ey4uLmNvbHVtbi5nZXRGb290ZXJQcm9wcygpfT5cclxuXHRcdHtjb2x1bW4uY2FuR3JvdXBCeSA/IChcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGNhbiBiZSBncm91cGVkLCBsZXQncyBhZGQgYSB0b2dnbGVcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNHcm91cGVkID8gJ0NsaWNrIHRvIFVuZ3JvdXAgJyA6ICdDbGljayB0byBHcm91cCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHRcdFxyXG5cdFx0e2NvbHVtbi5yZW5kZXIoJ0Zvb3RlcicpfVxyXG5cdCAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApKX1cclxuICAgICAgPC90Zm9vdD5cclxuICAgICA8L3RhYmxlPlxyXG5cclxuXHRcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKDApfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7Jzw8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJldmlvdXNQYWdlKCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UocGFnZUNvdW50IC0gMSl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+Pid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFBhZ2V7JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAge3BhZ2VJbmRleCArIDF9IG9mIHtwYWdlT3B0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIHwgR28gdG8gcGFnZTp7JyAnfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhZ2VJbmRleCArIDF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwYWdlID0gZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC0gMSA6IDBcclxuICAgICAgICAgICAgICBnb3RvUGFnZShwYWdlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VTaXplKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtbMTAsIDIwLCAzMCwgNDAsIDUwXS5tYXAocGFnZVNpemUgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cGFnZVNpemV9IHZhbHVlPXtwYWdlU2l6ZX0+XHJcbiAgICAgICAgICAgICAgU2hvdyB7cGFnZVNpemV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblx0XHR0YWJsZXtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG92ZXJmbG93OiB4O1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuPC9kaXY+XHJcbiApXHJcbiAgXHJcbn1cclxuIFxyXG5cclxuLy8gY29uZmlndXJlIGNvbHVtbnMsIHBvcHVsYXRlIGNlbGxzLCByZW5kZXIgdGFibGVcclxuIGZ1bmN0aW9uIEFjY29tcGxpc2htZW50QW5hbHl0aWNzVGFibGUocHJvcHMpIHsgXHJcbiAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXHJcbiBcclxuICAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAgKCkgPT4gW1xyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdOYW1lIG9mIEZhY3VsdHknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDEnLCAvLyBhY2Nlc3NvciBpcyB0aGUgXCJrZXlcIiBpbiB0aGUgZGF0YSxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gTmFtZXNgLFxyXG5cdCBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ0FjY29tcGxpc2htZW50JyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wyJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gQWNjb21wbGlzaG1lbnRzYCxcclxuXHQgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdBY2NvbXBsaXNobWVudCBUeXBlJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wzJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdTdGFydCBEYXRlIChjbGljayB0byBzb3J0KScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sNCcsXHJcblx0IHNvcnRCeTogJ2RhdGV0aW1lJyxcclxuXHQgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcblx0IGRpc2FibGVGaWx0ZXJzOiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdFbmQgRGF0ZSAoY2xpY2sgdG8gc29ydCknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDUnLFxyXG5cdCBzb3J0Qnk6ICdkYXRldGltZScsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBkaXNhYmxlRmlsdGVyczogdHJ1ZVxyXG4gICAgICAgfVxyXG4gICAgIF0sXHJcbiAgICAgW11cclxuICAgKVxyXG4gXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9IC8+IFxyXG4gICApXHJcbiB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvbXBsaXNobWVudEFuYWx5dGljc1RhYmxlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\accomplishment-count\\\\accomplishment_dashboard_table.js */"
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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\degree\\degree.js";





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
      children: "a.nav-item.jsx-298159374:focus{background-color:#78b6c2;}a.nav-item.jsx-298159374:hover{background-color:#78b6c2;}a.active.jsx-298159374{background-color:#78b6c2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGRlZ3JlZVxcZGVncmVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlMYyxBQUc2QixBQUdBLEFBR0EseUJBTHpCLEFBR0EsQUFHQSIsImZpbGUiOiJDOlxcVXNlcnNcXG5pY2hvXFxEb2N1bWVudHNcXEdpdEh1YlxcZHBzbS1xYS1wb3J0YWwtUUFcXGNvbXBvbmVudHNcXHVuaXQtaGVhZFxcZGFzaGJvYXJkXFxkZWdyZWVcXGRlZ3JlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZWdyZWVBbmFseXRpY3NUYWJsZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZGVncmVlL2RlZ3JlZV9kYXNoYm9hcmRfdGFibGUnXHJcbmltcG9ydCBEZWdyZWVEYXNoYm9hcmRHcmFwaCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZGVncmVlL2RlZ3JlZV9kYXNoYm9hcmRfZ3JhcGgnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBEZWdyZWVDb3VudChwcm9wcykge1xyXG5cdGxldCBlZHVjTGlzdCA9IHByb3BzLmNoaWxkcmVuXHJcblxyXG5cdGxldCBjaGVtQlNDb3VudCA9IDBcclxuXHRsZXQgY2hlbU1BQ291bnQgPSAwXHJcblx0bGV0IGNoZW1QSERDb3VudCA9IDBcclxuXHRsZXQgY2hlbU90aGVyc0NvdW50ID0gMFxyXG5cclxuXHRsZXQgbWNzdUJTQ291bnQgPSAwXHJcblx0bGV0IG1jc3VNQUNvdW50ID0gMFxyXG5cdGxldCBtY3N1UEhEQ291bnQgPSAwXHJcblx0bGV0IG1jc3VPdGhlcnNDb3VudCA9IDBcclxuXHJcblx0bGV0IHA2R2VvQlNDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9NQUNvdW50ID0gMFxyXG5cdGxldCBwNkdlb1BIRENvdW50ID0gMFxyXG5cdGxldCBwNkdlb090aGVyc0NvdW50ID0gMFxyXG5cclxuXHRsZXQgdGFibGVEYXRhID0gW11cclxuXHJcblx0aWYoZWR1Y0xpc3QpIHtcclxuXHRcdGVkdWNMaXN0LmZvckVhY2goYXN5bmMgKGUpID0+IHsgXHJcblx0XHRcdGF3YWl0IGUuZmFjdWx0eV9lZHVjYXRpb25faW5mb3MuZm9yRWFjaChhc3luYyAoaSkgPT4geyBcclxuXHRcdFx0XHRcclxuXHRcclxuXHRcdFx0XHRpZihpLmRlZ3JlZVR5cGUgPT0gJ0JTJyB8fCBpLmRlZ3JlZVR5cGUgPT0gJ0JBJykge1xyXG5cdFx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIHtcclxuXHRcdFx0XHRcdFx0Y2hlbUJTQ291bnQrK1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSB7XHJcblx0XHRcdFx0XHRcdG1jc3VCU0NvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykge1xyXG5cdFx0XHRcdFx0XHRwNkdlb0JTQ291bnQrK1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZihpLmRlZ3JlZVR5cGUgPT0gJ01BJyB8fCBpLmRlZ3JlZVR5cGUgPT0gJ01TJykge1xyXG5cdFx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIHtcclxuXHRcdFx0XHRcdFx0Y2hlbU1BQ291bnQrK1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSB7XHJcblx0XHRcdFx0XHRcdG1jc3VNQUNvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykge1xyXG5cdFx0XHRcdFx0XHRwNkdlb01BQ291bnQrK1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZihpLmRlZ3JlZVR5cGUgPT0gJ1BoRCcpIHtcclxuXHRcdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGNoZW1QSERDb3VudCsrXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIHtcclxuXHRcdFx0XHRcdFx0bWNzdVBIRENvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykge1xyXG5cdFx0XHRcdFx0XHRwNkdlb1BIRENvdW50KytcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIHtcclxuXHRcdFx0XHRcdFx0Y2hlbU90aGVyc0NvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikge1xyXG5cdFx0XHRcdFx0XHRtY3N1T3RoZXJzQ291bnQrK1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAzKSB7XHJcblx0XHRcdFx0XHRcdHA2R2VvT3RoZXJzQ291bnQrK1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcclxuXHRcdFx0XHRhd2FpdCB0YWJsZURhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRjb2wxOiBlLmxhc3ROYW1lICsgJywgJyArIGUuZmlyc3ROYW1lLFxyXG5cdFx0XHRcdFx0Y29sMjogaS5kZWdyZWVDZXJ0LFxyXG5cdFx0XHRcdFx0ICBjb2wzOiBpLmRlZ3JlZVR5cGUsXHJcblx0XHRcdFx0XHQgIGNvbDQ6IGkuZW5kRGF0ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgZ3JhcGhEYXRhID0gW1xyXG5cdFx0e1xyXG5cdFx0ICBcIkRlZ3JlZUF0dGFpbmVkXCI6IFwiQmFjaGVsb3Inc1wiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdUJTQ291bnQsXHJcblx0XHQgIFwiTUNTVUNvbG9yXCI6IFwiaHNsKDg4LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1CU0NvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgxMDIsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb0JTQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTI3LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiRGVncmVlQXR0YWluZWRcIjogXCJNYXN0ZXInc1wiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdU1BQ291bnQsXHJcblx0XHQgIFwiTUNTVUNvbG9yXCI6IFwiaHNsKDEwOSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtTUFDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMTUxLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9NQUNvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDE3NywgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkRlZ3JlZUF0dGFpbmVkXCI6IFwiRG9jdG9yYXRlXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1UEhEQ291bnQsXHJcblx0XHQgIFwiaG90IGRvZ0NvbG9yXCI6IFwiaHNsKDY3LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJDaGVtXCI6IGNoZW1QSERDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMjE1LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9QSERDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgyNDQsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJEZWdyZWVBdHRhaW5lZFwiOiBcIk90aGVyXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1T3RoZXJzQ291bnQsXHJcblx0XHQgIFwiaG90IGRvZ0NvbG9yXCI6IFwiaHNsKDIzNCwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtT3RoZXJzQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDMwMiwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvT3RoZXJzQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTc4LCA3MCUsIDUwJSlcIixcclxuXHRcdH1cclxuXHQgIF1cclxuXHJcblx0bGV0IHVuaXRJZFxyXG5cdGxldCBzdGFydERhdGVcclxuXHRsZXQgZW5kRGF0ZVxyXG5cclxuXHRpZihwcm9wcy5xdWVyeUxpc3QuZGVncmVlID09IDEpIHtcclxuXHRcdHVuaXRJZCA9IHByb3BzLnF1ZXJ5TGlzdC51bml0SWRcclxuXHRcdHN0YXJ0RGF0ZSA9IHByb3BzLnF1ZXJ5TGlzdC5zdGFydERhdGVcclxuXHRcdGVuZERhdGUgPSBwcm9wcy5xdWVyeUxpc3QuZW5kRGF0ZVxyXG5cdH1cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGgzIGFsaWduID0gXCJjZW50ZXJcIj5BdHRhaW5lZCBEZWdyZWVzPC9oMz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gMyAmJiBcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkRlZ3JlZURlcHRVbml0XCI+IERlcGFydG1lbnQgVW5pdCA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiRGVncmVlRGVwdFVuaXRcIiBpZD1cIkRlZ3JlZURlcHRVbml0XCIgZGVmYXVsdFZhbHVlPXt1bml0SWR9PlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwXCI+QWxsPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj5DaGVtaXN0cnkgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyXCI+TWF0aGVtYXRpY3MgYW5kIENvbXB1dGluZyBTY2llbmNlcyBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIj5QaHlzaWNzIGFuZCBHZW9sb2d5IFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJEZWdyZWVTdGFydFRpbWVQZXJpb2RcIj4gRnJvbSAgPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJEZWdyZWVTdGFydFRpbWVQZXJpb2RcIiBpZD1cIkRlZ3JlZVN0YXJ0VGltZVBlcmlvZFwiIGRlZmF1bHRWYWx1ZT17c3RhcnREYXRlfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRGVncmVlRW5kVGltZVBlcmlvZFwiPiBUbyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcIkRlZ3JlZUVuZFRpbWVQZXJpb2RcIiBpZD1cIkRlZ3JlZUVuZFRpbWVQZXJpb2RcIiBkZWZhdWx0VmFsdWU9e2VuZERhdGV9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lID0gXCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCB1bml0SWQgXHJcblx0XHRcdFx0XHRcdGlmKHByb3BzLnJvbGUgPT0gMykgdW5pdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0RlZ3JlZURlcHRVbml0JykudmFsdWVcclxuXHRcdFx0XHRcdFx0bGV0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEZWdyZWVTdGFydFRpbWVQZXJpb2QnKS52YWx1ZVxyXG5cdFx0XHRcdFx0XHRsZXQgZW5kRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEZWdyZWVFbmRUaW1lUGVyaW9kJykudmFsdWVcclxuXHJcblx0XHRcdFx0XHRcdGxldCB1cmwgPSAnL2ZhY3VsdHknXHJcblx0XHRcdFx0XHRcdGxldCBxdWVyeSA9IHtcclxuXHRcdFx0XHRcdFx0XHRkZWdyZWU6IDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZih1bml0SWQgJiYgdW5pdElkICE9IDApIHF1ZXJ5LnVuaXRJZCA9IHVuaXRJZFxyXG5cdFx0XHRcdFx0XHRpZihzdGFydERhdGUpIHF1ZXJ5LnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVxyXG5cdFx0XHRcdFx0XHRpZihlbmREYXRlKSBxdWVyeS5lbmREYXRlID0gZW5kRGF0ZVxyXG5cclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdHBhdGhuYW1lOiB1cmwsXHJcblx0XHRcdFx0XHRcdFx0cXVlcnlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH19PiBGaWx0ZXI8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8bmF2PlxyXG4gICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtZmlsbCBuYXYtanVzdGlmaWVkXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJkZWdyZWUtZ3JhcGgtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2RlZ3JlZS1ncmFwaFwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZGVncmVlLWdyYXBoXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+T3ZlcnZpZXc8L2E+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwidGFibGUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2RlZ3JlZS10YWJsZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZGVncmVlLXRhYmxlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+RnVsbCBMaXN0PC9hPlxyXG4gICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDwvbmF2PlxyXG5cdCAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cclxuXHQgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJkZWdyZWUtZ3JhcGhcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJkZWdyZWUtZ3JhcGgtdGFiXCI+PERlZ3JlZURhc2hib2FyZEdyYXBoIGRhdGE9e2dyYXBoRGF0YX0gLz48L2Rpdj5cclxuXHQgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJkZWdyZWUtdGFibGVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJkZWdyZWUtdGFibGUtdGFiXCI+PERlZ3JlZUFuYWx5dGljc1RhYmxlIGRhdGE9e3RhYmxlRGF0YX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdGEubmF2LWl0ZW06Zm9jdXN7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEubmF2LWl0ZW06aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEuYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWdyZWVDb3VudCJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\degree\\\\degree.js */"
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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\degree\\degree_dashboard_graph.js";
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


var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\degree\\degree_dashboard_table.js";


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
      children: "table.jsx-3450710701{display:block;overflow:x;white-space:nowrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGRlZ3JlZVxcZGVncmVlX2Rhc2hib2FyZF90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxT2tCLEFBR2tCLGNBQ0gsV0FDUSxtQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcZGVncmVlXFxkZWdyZWVfZGFzaGJvYXJkX3RhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCwgdXNlU29ydEJ5LCB1c2VGaWx0ZXJzLCB1c2VQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtdGFibGUnXHJcbmltcG9ydCBSZWFjdEhUTUxUYWJsZVRvRXhjZWwgZnJvbSAncmVhY3QtaHRtbC10YWJsZS10by1leGNlbCc7XHJcblxyXG4vLyBkZWZhdWx0IHNlYXJjaCBib3ggZmlsdGVyXHJcbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIgfSxcclxufSkge1xyXG4gIGNvbnN0IGNvdW50ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpIC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcclxuICAgICAgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtjb3VudH0gcmVjb3Jkcy4uLmB9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgZm9yIHNlbGVjdGluZ1xyXG4vLyBhIHVuaXF1ZSBvcHRpb24gZnJvbSBhIGxpc3RcclxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKVxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgb3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgLy8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcclxuICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VsZWN0PlxyXG4gIClcclxufVxyXG5cclxuLy8gdGhlIHRhYmxlIG1hcmt1cFxyXG5mdW5jdGlvbiBUYWJsZSAoe2NvbHVtbnMsIGRhdGF9KXtcclxuIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gTGV0J3Mgc2V0IHVwIG91ciBkZWZhdWx0IEZpbHRlciBVSVxyXG4gICAgICBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICAgY29uc3Qge1xyXG4gICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgIGZvb3Rlckdyb3VwcyxcclxuICAgICBwcmVwYXJlUm93LFxyXG4gICAgIHBhZ2UsXHJcbiAgICAgcm93cywgXHJcblxyXG4gICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgY2FuTmV4dFBhZ2UsXHJcbiAgICBwYWdlT3B0aW9ucyxcclxuICAgIHBhZ2VDb3VudCxcclxuICAgIGdvdG9QYWdlLFxyXG4gICAgbmV4dFBhZ2UsXHJcbiAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICBzZXRQYWdlU2l6ZSxcclxuICAgIHN0YXRlOiB7IHBhZ2VJbmRleCwgcGFnZVNpemUsIGdyb3VwQnksIGV4cGFuZGVkIH0sXHJcbiAgIH0gPSB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGEsIGRlZmF1bHRDb2x1bW4sIGluaXRpYWxTdGF0ZTogeyBwYWdlSW5kZXg6IDAgfSB9LCB1c2VGaWx0ZXJzLCB1c2VHcm91cEJ5LCB1c2VTb3J0QnksIHVzZUV4cGFuZGVkLCB1c2VQYWdpbmF0aW9uKVxyXG5cclxuIHJldHVybihcclxuPGRpdj5cclxuICAgIDxiciAvPlxyXG4gICAgPFJlYWN0SFRNTFRhYmxlVG9FeGNlbFxyXG5cdFx0XHRcdGlkPVwidGVzdC10YWJsZS14bHMtYnV0dG9uXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWItMlwiXHJcblx0XHRcdFx0dGFibGU9XCJkZWdyZWVUYWJsZVwiXHJcblx0XHRcdFx0ZmlsZW5hbWU9XCJkZWdyZWVcIlxyXG5cdFx0XHRcdGJ1dHRvblRleHQ9XCJEb3dubG9hZCBhcyBYTFNcIi8+XHJcbiAgICA8YnIgLz5cclxuICAgPHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZFwiIHsuLi5nZXRUYWJsZVByb3BzKCl9IGlkPVwiZGVncmVlVGFibGVcIj5cclxuICAgICAgIDx0aGVhZD5cclxuICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICA8dGhcclxuXHRcdC8vIHNvcnRpbmcgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG5cdFx0IDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICfilrwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ+KWsidcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdCAgPGRpdj57Y29sdW1uLmNhbkZpbHRlciA/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpIDogbnVsbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICkpfVxyXG4gICAgICAgPC90aGVhZD5cclxuICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgIHtwYWdlLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXMsIGxldCdzIGNvbG9yIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2VsbCBkZXBlbmRpbmcgb24gd2hhdCB0eXBlIGl0IGlzIGdpdmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSB1c2VHcm91cEJ5IGhvb2tcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VsbC5pc0dyb3VwZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjMGFmZjAwODInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZmE1MDA3OCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZjAwMDA0MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn4pa8JyA6ICfilronfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcpfSAoe3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJylcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICA8L3Rib2R5PlxyXG5cdDx0Zm9vdD5cclxuICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChncm91cCA9PiAoXHJcbiAgICAgICAgICA8dHIgey4uLmdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgIHtncm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgIDx0ZCBcclxuXHRcdHsuLi5jb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoKX0+XHJcblx0XHR7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICdDbGljayB0byBVbmdyb3VwICcgOiAnQ2xpY2sgdG8gR3JvdXAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblx0XHRcclxuXHRcdHtjb2x1bW4ucmVuZGVyKCdGb290ZXInKX1cclxuXHQgICAgICA8L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGZvb3Q+XHJcbiAgICAgPC90YWJsZT5cclxuXHJcblx0XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7JzwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPj4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBQYWdleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0dGFibGV7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRvdmVyZmxvdzogeDtcclxuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcbjwvZGl2PlxyXG4gKVxyXG4gIFxyXG59XHJcbiBcclxuXHJcbi8vIGNvbmZpZ3VyZSBjb2x1bW5zLCBwb3B1bGF0ZSBjZWxscywgcmVuZGVyIHRhYmxlXHJcbiBmdW5jdGlvbiBEZWdyZWVBbmFseXRpY3NUYWJsZShwcm9wcykge1xyXG4gICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxyXG4gXHJcbiAgIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgICgpID0+IFtcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnTmFtZSBvZiBGYWN1bHR5JyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wxJywgLy8gYWNjZXNzb3IgaXMgdGhlIFwia2V5XCIgaW4gdGhlIGRhdGEsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IE5hbWVzYCxcclxuXHQgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdEZWdyZWUnLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDInLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdEZWdyZWUgVHlwZScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMycsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnRGF0ZSBFYXJuZWQgKGNsaWNrIHRvIHNvcnQpJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2w0JyxcclxuXHQgc29ydEJ5OiAnZGF0ZXRpbWUnLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgZGlzYWJsZUZpbHRlcnM6IHRydWVcclxuICAgICAgIH1cclxuICAgICBdLFxyXG4gICAgIFtdXHJcbiAgIClcclxuIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPiBcclxuICAgKVxyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVncmVlQW5hbHl0aWNzVGFibGVcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\degree\\\\degree_dashboard_table.js */"
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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\employment-status\\employment-status.js";





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
      children: "a.nav-item.jsx-298159374:focus{background-color:#78b6c2;}a.nav-item.jsx-298159374:hover{background-color:#78b6c2;}a.active.jsx-298159374{background-color:#78b6c2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGVtcGxveW1lbnQtc3RhdHVzXFxlbXBsb3ltZW50LXN0YXR1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSmMsQUFHNkIsQUFHQSxBQUdBLHlCQUx6QixBQUdBLEFBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcZW1wbG95bWVudC1zdGF0dXNcXGVtcGxveW1lbnQtc3RhdHVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtcGxveW1lbnRBbmFseXRpY3NUYWJsZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudF9kYXNoYm9hcmRfdGFibGUnXHJcbmltcG9ydCBFbXBsb3ltZW50RGFzaGJvYXJkR3JhcGggZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2VtcGxveW1lbnQtc3RhdHVzL2VtcGxveW1lbnRfZGFzaGJvYXJkX2dyYXBoJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gRW1wbG95bWVudFN0YXR1cyhwcm9wcyl7XHJcblx0bGV0IGVtcExpc3QgPSBwcm9wcy5jaGlsZHJlblxyXG5cclxuXHRsZXQgY2hlbWZ0Q291bnQgPSAwXHJcblx0bGV0IGNoZW1wdENvdW50ID0gMFxyXG5cdGxldCBjaGVtbGVjQ291bnQgPSAwXHJcblxyXG5cdGxldCBtY3N1ZnRDb3VudCA9IDBcclxuXHRsZXQgbWNzdXB0Q291bnQgPSAwXHJcblx0bGV0IG1jc3VsZWNDb3VudCA9IDBcclxuXHJcblx0bGV0IHA2R2VvZnRDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9wdENvdW50ID0gMFxyXG5cdGxldCBwNkdlb2xlY0NvdW50ID0gMFxyXG5cclxuXHRsZXQgdGFibGVEYXRhID0gW11cclxuXHJcblx0bGV0IHVuaXRJZFxyXG5cdGxldCBzdGFydERhdGVcclxuXHRsZXQgZW5kRGF0ZVxyXG5cdFxyXG5cdGlmKGVtcExpc3QpIHtcclxuXHRcdGVtcExpc3QuZm9yRWFjaChhc3luYyAoZSkgPT4ge1xyXG5cdFx0XHRpZihlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGF0dXMgPT0gJ0Z1bGwtdGltZScpIHtcclxuXHRcdFx0XHRpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkgY2hlbWZ0Q291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIG1jc3VmdENvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAzKSBwNkdlb2Z0Q291bnQrK1xyXG5cdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhdHVzID09ICdMZWN0dXJlcicpIHtcclxuXHRcdFx0XHRpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkgY2hlbWxlY0NvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSBtY3N1bGVjQ291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHA2R2VvbGVjQ291bnQrK1xyXG5cdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhdHVzID09ICdQYXJ0LXRpbWUnKSB7XHJcblx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIGNoZW1wdENvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSBtY3N1cHRDb3VudCsrXHJcblx0XHRcdFx0ZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykgcDZHZW9wdENvdW50KytcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXdhaXQgdGFibGVEYXRhLnB1c2goe1xyXG5cdFx0XHRcdGNvbDE6IGUubGFzdE5hbWUgKyAnLCAnICsgZS5maXJzdE5hbWUsXHJcblx0XHRcdFx0Y29sMjogZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uZmFjdWx0eV9lbXBsb3ltZW50X3Bvc2l0aW9uLnBvc2l0aW9uLFxyXG5cdFx0XHRcdGNvbDM6IGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLnN0YXR1cyxcclxuXHRcdFx0XHRjb2w0OiBlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5jYXRlZ29yeSxcclxuXHRcdFx0XHRjb2w1OiBlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGFydERhdGVcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRjb25zdCBncmFwaERhdGEgPSBbXHJcblx0XHR7XHJcblx0XHQgIFwiRW1wbG95bWVudFN0YXR1c1wiOiBcIlBhcnQtdGltZVwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdXB0Q291bnQsXHJcblx0XHQgIFwiTUNTVUNvbG9yXCI6IFwiaHNsKDEwOSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtcHRDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMTUxLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9wdENvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDE3NywgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkVtcGxveW1lbnRTdGF0dXNcIjogXCJGdWxsLXRpbWVcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VmdENvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCg2NywgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtZnRDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMjE1LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9mdENvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDI0NCwgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkVtcGxveW1lbnRTdGF0dXNcIjogXCJMZWN0dXJlclwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdWxlY0NvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCgyMzQsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbWxlY0NvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgzMDIsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb2xlY0NvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDE3OCwgNzAlLCA1MCUpXCIsXHJcblx0XHR9XHJcblx0XVxyXG5cdFxyXG5cdGlmKHByb3BzLnF1ZXJ5TGlzdC5lbXBsb3ltZW50ID09IDEpIHtcclxuXHRcdHVuaXRJZCA9IHByb3BzLnF1ZXJ5TGlzdC51bml0SWRcclxuXHRcdHN0YXJ0RGF0ZSA9IHByb3BzLnF1ZXJ5TGlzdC5zdGFydERhdGVcclxuXHRcdGVuZERhdGUgPSBwcm9wcy5xdWVyeUxpc3QuZW5kRGF0ZVxyXG5cdH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxoMyBhbGlnbiA9IFwiY2VudGVyXCI+RW1wbG95bWVudCBTdGF0dXM8L2gzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDMgJiZcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkVtcERlcHRVbml0XCI+IERlcGFydG1lbnQgVW5pdCA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiRW1wRGVwdFVuaXRcIiBpZD1cIkVtcERlcHRVbml0XCIgZGVmYXVsdFZhbHVlPXt1bml0SWR9PlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwXCI+QWxsPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj5DaGVtaXN0cnkgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyXCI+TWF0aGVtYXRpY3MgYW5kIENvbXB1dGluZyBTY2llbmNlcyBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIj5QaHlzaWNzIGFuZCBHZW9sb2d5IFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkVtcFN0YXJ0VGltZVBlcmlvZFwiPiBGcm9tICA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcIkVtcFN0YXJ0VGltZVBlcmlvZFwiIGlkPVwiRW1wU3RhcnRUaW1lUGVyaW9kXCIgZGVmYXVsdFZhbHVlPXtzdGFydERhdGV9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJFbXBFbmRUaW1lUGVyaW9kXCI+IFRvIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiRW1wRW5kVGltZVBlcmlvZFwiIGlkPVwiRW1wRW5kVGltZVBlcmlvZFwiIGRlZmF1bHRWYWx1ZT17ZW5kRGF0ZX0vPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IHVuaXRJZCBcclxuXHRcdFx0XHRcdFx0aWYocHJvcHMucm9sZT09MykgdW5pdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VtcERlcHRVbml0JykudmFsdWVcclxuXHRcdFx0XHRcdFx0bGV0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFbXBTdGFydFRpbWVQZXJpb2QnKS52YWx1ZVxyXG5cdFx0XHRcdFx0XHRsZXQgZW5kRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFbXBFbmRUaW1lUGVyaW9kJykudmFsdWVcclxuXHJcblx0XHRcdFx0XHRcdGxldCB1cmwgPSAnL2ZhY3VsdHknXHJcblx0XHRcdFx0XHRcdGxldCBxdWVyeSA9IHtcclxuXHRcdFx0XHRcdFx0XHRlbXBsb3ltZW50OiAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYodW5pdElkICYmIHVuaXRJZCAhPSAwKSBxdWVyeS51bml0SWQgPSB1bml0SWRcclxuXHRcdFx0XHRcdFx0aWYoc3RhcnREYXRlKSBxdWVyeS5zdGFydERhdGUgPSBzdGFydERhdGVcclxuXHRcdFx0XHRcdFx0aWYoZW5kRGF0ZSkgcXVlcnkuZW5kRGF0ZSA9IGVuZERhdGVcclxuXHJcblx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRwYXRobmFtZTogdXJsLFxyXG5cdFx0XHRcdFx0XHRcdHF1ZXJ5XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9fT4gRmlsdGVyPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PG5hdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtZmlsbCBuYXYtanVzdGlmaWVkXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJlbXBsb3ltZW50LWdyYXBoLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNlbXBsb3ltZW50LWdyYXBoXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJlbXBsb3ltZW50LWdyYXBoXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+T3ZlcnZpZXc8L2E+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZW1wbG95bWVudC10YWJsZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjZW1wbG95bWVudC10YWJsZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZW1wbG95bWVudC10YWJsZVwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkZ1bGwgTGlzdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJlbXBsb3ltZW50LWdyYXBoXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZW1wbG95bWVudC1ncmFwaC10YWJcIj48RW1wbG95bWVudERhc2hib2FyZEdyYXBoIGRhdGE9e2dyYXBoRGF0YX0gLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGVcIiBpZD1cImVtcGxveW1lbnQtdGFibGVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJlbXBsb3ltZW50LXRhYmxlLXRhYlwiPjxFbXBsb3ltZW50QW5hbHl0aWNzVGFibGUgZGF0YT17dGFibGVEYXRhfSAvPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRhLm5hdi1pdGVtOmZvY3Vze1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLm5hdi1pdGVtOmhvdmVye1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLmFjdGl2ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95bWVudFN0YXR1cyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\employment-status\\\\employment-status.js */"
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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\employment-status\\employment_dashboard_graph.js";
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


var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\unit-head\\dashboard\\employment-status\\employment_dashboard_table.js";


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
      children: "table.jsx-3450710701{display:block;overflow:x;white-space:nowrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxcY29tcG9uZW50c1xcdW5pdC1oZWFkXFxkYXNoYm9hcmRcXGVtcGxveW1lbnQtc3RhdHVzXFxlbXBsb3ltZW50X2Rhc2hib2FyZF90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxT2tCLEFBR2tCLGNBQ0gsV0FDUSxtQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsLVFBXFxjb21wb25lbnRzXFx1bml0LWhlYWRcXGRhc2hib2FyZFxcZW1wbG95bWVudC1zdGF0dXNcXGVtcGxveW1lbnRfZGFzaGJvYXJkX3RhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCwgdXNlU29ydEJ5LCB1c2VGaWx0ZXJzLCB1c2VQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtdGFibGUnXHJcbmltcG9ydCBSZWFjdEhUTUxUYWJsZVRvRXhjZWwgZnJvbSAncmVhY3QtaHRtbC10YWJsZS10by1leGNlbCc7XHJcblxyXG4vLyBkZWZhdWx0IHNlYXJjaCBib3ggZmlsdGVyXHJcbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIgfSxcclxufSkge1xyXG4gIGNvbnN0IGNvdW50ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpIC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcclxuICAgICAgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtjb3VudH0gcmVjb3Jkcy4uLmB9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgZm9yIHNlbGVjdGluZ1xyXG4vLyBhIHVuaXF1ZSBvcHRpb24gZnJvbSBhIGxpc3RcclxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKVxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgb3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgLy8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcclxuICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VsZWN0PlxyXG4gIClcclxufVxyXG5cclxuLy8gdGhlIHRhYmxlIG1hcmt1cFxyXG5mdW5jdGlvbiBUYWJsZSAoe2NvbHVtbnMsIGRhdGF9KXtcclxuIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gTGV0J3Mgc2V0IHVwIG91ciBkZWZhdWx0IEZpbHRlciBVSVxyXG4gICAgICBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICAgY29uc3Qge1xyXG4gICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgIGZvb3Rlckdyb3VwcyxcclxuICAgICBwcmVwYXJlUm93LFxyXG4gICAgIHBhZ2UsXHJcbiAgICAgcm93cywgXHJcblxyXG4gICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgY2FuTmV4dFBhZ2UsXHJcbiAgICBwYWdlT3B0aW9ucyxcclxuICAgIHBhZ2VDb3VudCxcclxuICAgIGdvdG9QYWdlLFxyXG4gICAgbmV4dFBhZ2UsXHJcbiAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICBzZXRQYWdlU2l6ZSxcclxuICAgIHN0YXRlOiB7IHBhZ2VJbmRleCwgcGFnZVNpemUsIGdyb3VwQnksIGV4cGFuZGVkIH0sXHJcbiAgIH0gPSB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGEsIGRlZmF1bHRDb2x1bW4sIGluaXRpYWxTdGF0ZTogeyBwYWdlSW5kZXg6IDAgfSB9LCB1c2VGaWx0ZXJzLCB1c2VHcm91cEJ5LCB1c2VTb3J0QnksIHVzZUV4cGFuZGVkLCB1c2VQYWdpbmF0aW9uKVxyXG5cclxuIHJldHVybihcclxuPGRpdj5cclxuICAgIDxiciAvPlxyXG4gICAgPFJlYWN0SFRNTFRhYmxlVG9FeGNlbFxyXG5cdFx0XHRcdGlkPVwidGVzdC10YWJsZS14bHMtYnV0dG9uXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWItMlwiXHJcblx0XHRcdFx0dGFibGU9XCJlbXBsb3ltZW50VGFibGVcIlxyXG5cdFx0XHRcdGZpbGVuYW1lPVwiZW1wbG95bWVudFwiXHJcblx0XHRcdFx0YnV0dG9uVGV4dD1cIkRvd25sb2FkIGFzIFhMU1wiLz5cclxuICAgIDxiciAvPlxyXG4gICA8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCIgey4uLmdldFRhYmxlUHJvcHMoKX0gaWQ9XCJlbXBsb3ltZW50VGFibGVcIj5cclxuICAgICAgIDx0aGVhZD5cclxuICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICA8dGhcclxuXHRcdC8vIHNvcnRpbmcgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG5cdFx0IDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICfilrwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ+KWsidcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdCAgPGRpdj57Y29sdW1uLmNhbkZpbHRlciA/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpIDogbnVsbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICkpfVxyXG4gICAgICAgPC90aGVhZD5cclxuICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgIHtwYWdlLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXMsIGxldCdzIGNvbG9yIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2VsbCBkZXBlbmRpbmcgb24gd2hhdCB0eXBlIGl0IGlzIGdpdmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSB1c2VHcm91cEJ5IGhvb2tcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VsbC5pc0dyb3VwZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjMGFmZjAwODInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZmE1MDA3OCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZjAwMDA0MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn4pa8JyA6ICfilronfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcpfSAoe3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJylcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICA8L3Rib2R5PlxyXG5cdDx0Zm9vdD5cclxuICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChncm91cCA9PiAoXHJcbiAgICAgICAgICA8dHIgey4uLmdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgIHtncm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgIDx0ZCBcclxuXHRcdHsuLi5jb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoKX0+XHJcblx0XHR7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICdDbGljayB0byBVbmdyb3VwICcgOiAnQ2xpY2sgdG8gR3JvdXAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblx0XHRcclxuXHRcdHtjb2x1bW4ucmVuZGVyKCdGb290ZXInKX1cclxuXHQgICAgICA8L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGZvb3Q+XHJcbiAgICAgPC90YWJsZT5cclxuXHJcblx0XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7JzwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPj4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBQYWdleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0dGFibGV7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRvdmVyZmxvdzogeDtcclxuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcbjwvZGl2PlxyXG4gKVxyXG4gIFxyXG59XHJcbiBcclxuXHJcbi8vIGNvbmZpZ3VyZSBjb2x1bW5zLCBwb3B1bGF0ZSBjZWxscywgcmVuZGVyIHRhYmxlXHJcbiBmdW5jdGlvbiBFbXBsb3ltZW50QW5hbHl0aWNzVGFibGUocHJvcHMpIHtcclxuICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFcclxuIFxyXG4gICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcclxuICAgICAoKSA9PiBbXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ05hbWUgb2YgRmFjdWx0eScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMScsIC8vIGFjY2Vzc29yIGlzIHRoZSBcImtleVwiIGluIHRoZSBkYXRhLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBOYW1lc2AsXHJcblx0IEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnUG9zaXRpb24nLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDInLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ1N0YXR1cycsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMycsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnQ2F0ZWdvcnknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDQnLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiAnU3RhcnQgRGF0ZScsXHJcbiAgRm9vdGVyOiAnJyxcclxuICAgICAgICBhY2Nlc3NvcjogJ2NvbDUnLFxyXG4gIGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcbiAgZGlzYWJsZUZpbHRlcnM6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICBdLFxyXG4gICAgIFtdXHJcbiAgIClcclxuIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPiBcclxuICAgKVxyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95bWVudEFuYWx5dGljc1RhYmxlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\components\\\\unit-head\\\\dashboard\\\\employment-status\\\\employment_dashboard_table.js */"
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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\faculty\\index.js";










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
          children: "a.nav-item.jsx-1330585230{color:#000;}a.nav-item.jsx-1330585230:focus{background-color:#78b6c2;}a.nav-item.jsx-1330585230:hover{background-color:#78b6c2;}a.active.jsx-1330585230{background-color:#78b6c2;}a#accomplishment-count-tab.active.jsx-1330585230{background-color:#78b6c2;}nav.jsx-1330585230{background-color:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxccGFnZXNcXGZhY3VsdHlcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDZSxBQUdnQixBQUdjLEFBR0EsQUFHQSxBQUdBLEFBR0gsV0FkdEIsV0FlQSxHQVpBLEFBR0EsQUFHQSxBQUdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxccGFnZXNcXGZhY3VsdHlcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcywgaXNFeHBpcmVkIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIlxyXG5pbXBvcnQgQWNjb21wbGlzaG1lbnRDb3VudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvYWNjb21wbGlzaG1lbnQtY291bnQvYWNjb21wbGlzaG1lbnQtY291bnQnXHJcbmltcG9ydCBFbXBsb3ltZW50U3RhdHVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9lbXBsb3ltZW50LXN0YXR1cy9lbXBsb3ltZW50LXN0YXR1cydcclxuaW1wb3J0IERlZ3JlZUNvdW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9kZWdyZWUvZGVncmVlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmQocHJvcHMpIHsgXHJcblx0aWYocHJvcHMuZGF0YS5yb2xlID09IDEpIHtcclxuXHRcdHJldHVybiAoPExheW91dCB1c2VySWQ9e3Byb3BzLmRhdGEudXNlcklkfSBmYWN1bHR5SWQ9e3Byb3BzLmRhdGEuZmFjdWx0eUlkfSByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IG5hbWU9e3Byb3BzLmRhdGEubmFtZX0gLz4pXHJcblx0fSBlbHNlIGlmKHByb3BzLmRhdGEucm9sZSA9PSAyIHx8IHByb3BzLmRhdGEucm9sZSA9PSAzKXsgXHJcblx0XHRyZXR1cm4gKFxyXG5cdCAgICAgICAgPExheW91dCB1c2VySWQ9e3Byb3BzLmRhdGEudXNlcklkfSBmYWN1bHR5SWQ9e3Byb3BzLmRhdGEuZmFjdWx0eUlkfSByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IG5hbWU9e3Byb3BzLmRhdGEubmFtZX0gYXBwcm92YWxMaXN0PXtwcm9wcy5hcHByb3ZhbExpc3R9IHJvbGVBc3NpZ25tZW50RmxhZz17cHJvcHMucm9sZUFzc2lnbm1lbnRGbGFnfSA+XHJcblxyXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IHt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2dlbmVyYXRlLXJlcG9ydHNcIn19PjxidXR0b24gY2xhc3NOYW1lID0gXCJidG4gYnRuLWluZm9cIj5Eb3dubG9hZCBBbGwgRmFjdWx0eSBJbmZvcm1hdGlvbjwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtZmlsbCBuYXYtanVzdGlmaWVkXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJhY2NvbXBsaXNobWVudC1jb3VudC10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjYWNjb21wbGlzaG1lbnQtY291bnRcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImFjY29tcGxpc2htZW50LWNvdW50XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+QWNjb21wbGlzaG1lbnQgQ291bnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZW1wbG95bWVudC1zdGF0dXMtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2VtcGxveW1lbnQtc3RhdHVzXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJlbXBsb3ltZW50LXN0YXR1c1wiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkVtcGxveW1lbnQgU3RhdHVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImRlZ3JlZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjZGVncmVlXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJkZWdyZWVcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5BdHRhaW5lZCBEZWdyZWVzPC9hPlxyXG4gICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDwvbmF2PlxyXG5cdCAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cImFjY29tcGxpc2htZW50LWNvdW50XCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiYWNjb21wbGlzaG1lbnQtY291bnQtdGFiXCI+PEFjY29tcGxpc2htZW50Q291bnQgcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBxdWVyeUxpc3Q9e3Byb3BzLnF1ZXJ5TGlzdH0+e3Byb3BzLmFjY29tcExpc3R9PC9BY2NvbXBsaXNobWVudENvdW50PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZW1wbG95bWVudC1zdGF0dXNcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJlbXBsb3ltZW50LXN0YXR1cy10YWJcIj48RW1wbG95bWVudFN0YXR1cyByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IHF1ZXJ5TGlzdD17cHJvcHMucXVlcnlMaXN0fT57cHJvcHMuZW1wTGlzdH08L0VtcGxveW1lbnRTdGF0dXM+PC9kaXY+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZGVncmVlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVncmVlLXRhYlwiPjxEZWdyZWVDb3VudCByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IHF1ZXJ5TGlzdD17cHJvcHMucXVlcnlMaXN0fT57cHJvcHMuZWR1Y0xpc3R9PC9EZWdyZWVDb3VudD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRhLm5hdi1pdGVte1xyXG5cdFx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YS5uYXYtaXRlbTpmb2N1c3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YS5uYXYtaXRlbTpob3ZlcntcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YS5hY3RpdmV7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGEjYWNjb21wbGlzaG1lbnQtY291bnQtdGFiLmFjdGl2ZXtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmF2e1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojYWFhO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICA8L0xheW91dD5cclxuXHQgICAgKVx0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHsgXHJcbiAgICBjb25zdCB0b2tlbiA9IHBhcnNlQ29va2llcyhjb250ZXh0LnJlcSlcclxuICAgIGxldCBkYXRhXHJcbiAgICBsZXQgcGVyc29uYWxJbmZvXHJcbiAgICBsZXQgYXBwcm92YWxMaXN0XHJcbiAgICBsZXQgYWNjb21wTGlzdFxyXG4gICAgbGV0IGVtcExpc3RcclxuICAgIGxldCBlZHVjTGlzdFxyXG4gICAgbGV0IHJvbGVBc3NpZ25tZW50RmxhZyA9IGZhbHNlXHJcbiAgICBsZXQgcXVlcnlMaXN0XHJcblxyXG4gICAgaWYgKGNvbnRleHQucmVzKSB7XHJcbiAgICAgICAgaWYgKGlzRXhwaXJlZCh0b2tlbi51c2VyKSB8fCBPYmplY3Qua2V5cyh0b2tlbikubGVuZ3RoID09PSAwICYmIHRva2VuLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGp3dC5kZWNvZGUodG9rZW4udXNlcilcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGZhY3VsdHlJZCA9IGRhdGEuZmFjdWx0eUlkXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbi51c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHBlcnNvbmFsID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvLycgKyBmYWN1bHR5SWQsIGhlYWRlcilcclxuICAgICAgICAgICAgcGVyc29uYWxJbmZvID0gYXdhaXQgcGVyc29uYWwuanNvbigpXHJcblxyXG4gICAgICAgICAgICBsZXQgYXBwcm92YWxVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBmYWN1bHR5SWRcclxuICAgICAgICAgICAgbGV0IGFjY29tcFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvcmVwb3J0cy9hY2NvbXBsaXNobWVudCdcclxuICAgICAgICAgICAgbGV0IGVtcFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvcmVwb3J0cy9lbXBsb3ltZW50J1xyXG4gICAgICAgICAgICBsZXQgZWR1Y1VSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvcmVwb3J0cy9lZHVjYXRpb24nXHJcbiAgICAgICAgICAgIGxldCByb2xlQXNzaWdubWVudFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYmFzaWMtaW5mby91bml0L2Fzc2lnbm1lbnQnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkYXRhLnJvbGUgPT0gMiB8fCBkYXRhLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHByb3ZhbFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICByb2xlQXNzaWdubWVudFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb21wVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIGVtcFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICBlZHVjVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5hY2NvbXBsaXNobWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY29tcFVSTCArPSAnPydcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS51bml0SWQgJiYgY29udGV4dC5xdWVyeS51bml0SWQgIT0gMCkgYWNjb21wVVJMICs9ICd1bml0SWQ9JyArIGNvbnRleHQucXVlcnkudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZW1wbG95bWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcFVSTCArPSAnPydcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS51bml0SWQpIGVtcFVSTCArPSAndW5pdElkPScgKyBjb250ZXh0LnF1ZXJ5LnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmRlZ3JlZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkdWNVUkwgKz0gJz8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkudW5pdElkKSBlZHVjVVJMICs9ICd1bml0SWQ9JyArIGNvbnRleHQucXVlcnkudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuYWNjb21wbGlzaG1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuc3RhcnREYXRlKSBhY2NvbXBVUkwgKz0gJyZzdGFydERhdGU9JyArIGNvbnRleHQucXVlcnkuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5lbmREYXRlKSBhY2NvbXBVUkwgKz0gJyZlbmREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LmVuZERhdGVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmVtcGxveW1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuc3RhcnREYXRlKSBlbXBVUkwgKz0gJyZzdGFydERhdGU9JyArIGNvbnRleHQucXVlcnkuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5lbmREYXRlKSBlbXBVUkwgKz0gJyZlbmREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LmVuZERhdGVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmRlZ3JlZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5zdGFydERhdGUpIGVkdWNVUkwgKz0gJyZzdGFydERhdGU9JyArIGNvbnRleHQucXVlcnkuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5lbmREYXRlKSBlZHVjVVJMICs9ICcmZW5kRGF0ZT0nICsgY29udGV4dC5xdWVyeS5lbmREYXRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcHJvdmFsID0gYXdhaXQgZmV0Y2goYXBwcm92YWxVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGFwcHJvdmFsTGlzdCA9IGF3YWl0IGFwcHJvdmFsLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMaXN0ID0gYXBwcm92YWxMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjY29tcFJlcG9ydHMgPSBhd2FpdCBmZXRjaChhY2NvbXBVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGFjY29tcExpc3QgPSBhd2FpdCBhY2NvbXBSZXBvcnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgYWNjb21wTGlzdCA9IGFjY29tcExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1wUmVwb3J0cyA9IGF3YWl0IGZldGNoKGVtcFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgZW1wTGlzdCA9IGF3YWl0IGVtcFJlcG9ydHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICBlbXBMaXN0ID0gZW1wTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZHVjUmVwb3J0cyA9IGF3YWl0IGZldGNoKGVkdWNVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGVkdWNMaXN0ID0gYXdhaXQgZWR1Y1JlcG9ydHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICBlZHVjTGlzdCA9IGVkdWNMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGVBc3NpZ25tZW50cyA9IGF3YWl0IGZldGNoKHJvbGVBc3NpZ25tZW50VVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBsZXQgcm9sZUFzc2lnbm1lbnRMaXN0ID0gYXdhaXQgcm9sZUFzc2lnbm1lbnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRMaXN0ID0gcm9sZUFzc2lnbm1lbnRMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRhdGEucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocm9sZUFzc2lnbm1lbnRMaXN0ICYmIHJvbGVBc3NpZ25tZW50TGlzdC5hcHByb3ZlclJlbWFya3MgIT0gbnVsbCkgcm9sZUFzc2lnbm1lbnRGbGFnID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAzICYmIHJvbGVBc3NpZ25tZW50TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50RmxhZyA9IHRydWUgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnJvbGUgPT0gMSkgeyBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvZmFjdWx0eS9iYXNpYy1pbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWFuZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdG9rZW46IHRva2VuICYmIHRva2VuLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBwZXJzb25hbEluZm86IHBlcnNvbmFsSW5mby5yZXN1bHQsXHJcbiAgICAgICAgICAgIGFwcHJvdmFsTGlzdDogYXBwcm92YWxMaXN0LFxyXG4gICAgICAgICAgICBhY2NvbXBMaXN0OiBhY2NvbXBMaXN0LFxyXG4gICAgICAgICAgICBlbXBMaXN0LFxyXG4gICAgICAgICAgICBlZHVjTGlzdDogZWR1Y0xpc3QgfHwgbnVsbCxcclxuICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRGbGFnLFxyXG4gICAgICAgICAgICBxdWVyeUxpc3Q6IGNvbnRleHQucXVlcnlcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\pages\\\\faculty\\\\index.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9hY2NvbXBsaXNobWVudC1jb3VudC9hY2NvbXBsaXNobWVudC1jb3VudC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9hY2NvbXBsaXNobWVudC1jb3VudC9hY2NvbXBsaXNobWVudF9kYXNoYm9hcmRfZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvYWNjb21wbGlzaG1lbnQtY291bnQvYWNjb21wbGlzaG1lbnRfZGFzaGJvYXJkX3RhYmxlLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2RlZ3JlZS9kZWdyZWUuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZGVncmVlL2RlZ3JlZV9kYXNoYm9hcmRfZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZGVncmVlL2RlZ3JlZV9kYXNoYm9hcmRfdGFibGUuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudC1zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudF9kYXNoYm9hcmRfZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudF9kYXNoYm9hcmRfdGFibGUuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vcGFnZXMvZmFjdWx0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIkBuaXZvL2JhclwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwiY29va2llXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0LWh0bWwtdGFibGUtdG8tZXhjZWxcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC10YWJsZVwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvaWdub3JlZHxDOlxcVXNlcnNcXG5pY2hvXFxEb2N1bWVudHNcXEdpdEh1YlxcZHBzbS1xYS1wb3J0YWwtUUFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDb250ZW50IiwicHJvcHMiLCJjaGlsZHJlbiIsIkZvb3RlciIsIkhlYWRlciIsInJvbGVOYW1lIiwicm9sZSIsIm5hbWUiLCJMYXlvdXQiLCJhcHByb3ZhbExpc3QiLCJmYWN1bHR5SWQiLCJyb2xlQXNzaWdubWVudEZsYWciLCJTaWRlYmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsInVzZUNvb2tpZXMiLCJoYW5kbGVSZW1vdmVDb29raWUiLCJwYXRoIiwiZmFjdWx0eSIsInN0YWZmIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VTdGF0ZSIsImhhbmRsZVRvZ2dsZSIsInBhdGhuYW1lIiwiZmFjdWx0eUNvdW50Iiwicm9sZUFzc2lnbm1lbnQiLCJBY2NvbXBsaXNobWVudENvdW50IiwiYWNjb21wTGlzdCIsImNoZW1QU0FDb3VudCIsImNoZW1UU0NvdW50IiwiY2hlbVB1YkNvdW50IiwiY2hlbVJHQ291bnQiLCJtY3N1UFNBQ291bnQiLCJtY3N1VFNDb3VudCIsIm1jc3VQdWJDb3VudCIsIm1jc3VSR0NvdW50IiwicDZHZW9QU0FDb3VudCIsInA2R2VvVFNDb3VudCIsInA2R2VvUHViQ291bnQiLCJwNkdlb1JHQ291bnQiLCJ0YWJsZURhdGEiLCJ1bml0SWQiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImZhY3VsdHlfdW5pdCIsImZhY3VsdHlfcHVibGljX3NlcnZpY2VzIiwibGVuZ3RoIiwiZmFjdWx0eV90cmFpbmluZ19zZW1pbmFycyIsImZhY3VsdHlfcHVibGlzaGVycyIsImZhY3VsdHlfcmVzZWFyY2hlcnMiLCJmb3JFYWNoIiwiaSIsInB1c2giLCJjb2wxIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJjb2wyIiwicG9zaXRpb24iLCJvcmdhbml6YXRpb24iLCJjb2wzIiwiY29sNCIsImNvbDUiLCJmYWN1bHR5X3B1YmxpY2F0aW9uIiwidGl0bGUiLCJwdWJsaWNhdGlvbkRhdGUiLCJkYXRlRnJvbSIsImRhdGVUbyIsImZhY3VsdHlfcmVzZWFyY2hfZ3JhbnQiLCJyZXNlYXJjaE5hbWUiLCJhY3R1YWxTdGFydCIsImFjdHVhbEVuZCIsImdyYXBoRGF0YSIsInF1ZXJ5TGlzdCIsImFjY29tcGxpc2htZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwidXJsIiwicXVlcnkiLCJSb3V0ZXIiLCJBY2NvbXBsaXNobWVudERhc2hib2FyZEdyYXBoIiwiUmVhY3QiLCJyZW5kZXIiLCJoZWlnaHQiLCJkYXRhIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwidHlwZSIsInJvdW5kIiwic2NoZW1lIiwiZnJvbSIsIm1vZGlmaWVycyIsInRpY2tTaXplIiwidGlja1BhZGRpbmciLCJ0aWNrUm90YXRpb24iLCJsZWdlbmQiLCJsZWdlbmRQb3NpdGlvbiIsImxlZ2VuZE9mZnNldCIsImZvcm1hdCIsImUiLCJNYXRoIiwiZmxvb3IiLCJkYXRhRnJvbSIsImFuY2hvciIsImRpcmVjdGlvbiIsImp1c3RpZnkiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsIml0ZW1zU3BhY2luZyIsIml0ZW1XaWR0aCIsIml0ZW1IZWlnaHQiLCJpdGVtRGlyZWN0aW9uIiwiaXRlbU9wYWNpdHkiLCJzeW1ib2xTaXplIiwiZWZmZWN0cyIsIm9uIiwic3R5bGUiLCJEZWZhdWx0Q29sdW1uRmlsdGVyIiwiY29sdW1uIiwiZmlsdGVyVmFsdWUiLCJwcmVGaWx0ZXJlZFJvd3MiLCJzZXRGaWx0ZXIiLCJjb3VudCIsInRhcmdldCIsInVuZGVmaW5lZCIsIlNlbGVjdENvbHVtbkZpbHRlciIsImlkIiwib3B0aW9ucyIsIlNldCIsInJvdyIsImFkZCIsInZhbHVlcyIsIm9wdGlvbiIsIlRhYmxlIiwiY29sdW1ucyIsImRlZmF1bHRDb2x1bW4iLCJGaWx0ZXIiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJmb290ZXJHcm91cHMiLCJwcmVwYXJlUm93IiwicGFnZSIsInJvd3MiLCJjYW5QcmV2aW91c1BhZ2UiLCJjYW5OZXh0UGFnZSIsInBhZ2VPcHRpb25zIiwicGFnZUNvdW50IiwiZ290b1BhZ2UiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsInNldFBhZ2VTaXplIiwic3RhdGUiLCJwYWdlSW5kZXgiLCJwYWdlU2l6ZSIsImdyb3VwQnkiLCJleHBhbmRlZCIsInVzZVRhYmxlIiwiaW5pdGlhbFN0YXRlIiwidXNlRmlsdGVycyIsInVzZUdyb3VwQnkiLCJ1c2VTb3J0QnkiLCJ1c2VFeHBhbmRlZCIsInVzZVBhZ2luYXRpb24iLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiZ2V0SGVhZGVyUHJvcHMiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwiY2FuRmlsdGVyIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJiYWNrZ3JvdW5kIiwiaXNHcm91cGVkIiwiaXNBZ2dyZWdhdGVkIiwiaXNQbGFjZWhvbGRlciIsImdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMiLCJpc0V4cGFuZGVkIiwic3ViUm93cyIsImdyb3VwIiwiZ2V0Rm9vdGVyR3JvdXBQcm9wcyIsImdldEZvb3RlclByb3BzIiwiY2FuR3JvdXBCeSIsImdldEdyb3VwQnlUb2dnbGVQcm9wcyIsIk51bWJlciIsIndpZHRoIiwiQWNjb21wbGlzaG1lbnRBbmFseXRpY3NUYWJsZSIsImFjY2Vzc29yIiwiYWdncmVnYXRlIiwiQWdncmVnYXRlZCIsImRpc2FibGVTb3J0QnkiLCJzb3J0QnkiLCJkaXNhYmxlRmlsdGVycyIsIkRlZ3JlZUNvdW50IiwiZWR1Y0xpc3QiLCJjaGVtQlNDb3VudCIsImNoZW1NQUNvdW50IiwiY2hlbVBIRENvdW50IiwiY2hlbU90aGVyc0NvdW50IiwibWNzdUJTQ291bnQiLCJtY3N1TUFDb3VudCIsIm1jc3VQSERDb3VudCIsIm1jc3VPdGhlcnNDb3VudCIsInA2R2VvQlNDb3VudCIsInA2R2VvTUFDb3VudCIsInA2R2VvUEhEQ291bnQiLCJwNkdlb090aGVyc0NvdW50IiwiZmFjdWx0eV9lZHVjYXRpb25faW5mb3MiLCJkZWdyZWVUeXBlIiwiZGVncmVlQ2VydCIsImRlZ3JlZSIsIkRlZ3JlZURhc2hib2FyZEdyYXBoIiwiRGVncmVlQW5hbHl0aWNzVGFibGUiLCJFbXBsb3ltZW50U3RhdHVzIiwiZW1wTGlzdCIsImNoZW1mdENvdW50IiwiY2hlbXB0Q291bnQiLCJjaGVtbGVjQ291bnQiLCJtY3N1ZnRDb3VudCIsIm1jc3VwdENvdW50IiwibWNzdWxlY0NvdW50IiwicDZHZW9mdENvdW50IiwicDZHZW9wdENvdW50IiwicDZHZW9sZWNDb3VudCIsImZhY3VsdHlfZW1wbG95bWVudF9pbmZvcyIsInN0YXR1cyIsImZhY3VsdHlfZW1wbG95bWVudF9wb3NpdGlvbiIsImNhdGVnb3J5IiwiZW1wbG95bWVudCIsIkVtcGxveW1lbnREYXNoYm9hcmRHcmFwaCIsIkVtcGxveW1lbnRBbmFseXRpY3NUYWJsZSIsInBhcnNlQ29va2llcyIsInJlcSIsImNvb2tpZSIsImlzRXhwaXJlZCIsInVzZXIiLCJkZWNvZGVkIiwiand0Iiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJleHAiLCJEYXNoYm9hcmQiLCJ1c2VySWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwidG9rZW4iLCJwZXJzb25hbEluZm8iLCJyZXMiLCJjb25zdHJ1Y3RvciIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJoZWFkZXIiLCJwZXJzb25hbCIsImZldGNoIiwicHJvY2VzcyIsImpzb24iLCJhcHByb3ZhbFVSTCIsImFjY29tcFVSTCIsImVtcFVSTCIsImVkdWNVUkwiLCJyb2xlQXNzaWdubWVudFVSTCIsImFwcHJvdmFsIiwicmVzdWx0IiwiYWNjb21wUmVwb3J0cyIsImVtcFJlcG9ydHMiLCJlZHVjUmVwb3J0cyIsInJvbGVBc3NpZ25tZW50cyIsInJvbGVBc3NpZ25tZW50TGlzdCIsImFwcHJvdmVyUmVtYXJrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBdUI7QUFDdEIsc0JBQ0M7QUFBQSwyQkFDQztBQUFLLFdBQUssRUFBRyxLQUFiO0FBQUEsOEJBQ1MsOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURULGVBRWE7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLG9CQUNNQSxLQUFLLENBQUNDO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFDSHpRLFNBQUssRUFBRTtBQUNIbVEsV0FBSyxFQUFFQSxLQUFLLElBQUlBLEtBRGI7QUFFSHhLLFVBRkc7QUFHSHlLLGtCQUFZLEVBQUVBLFlBQVksQ0FBQ2lCLE1BSHhCO0FBSUg3USxrQkFBWSxFQUFFQSxZQUpYO0FBS0hzQixnQkFBVSxFQUFFQSxVQUxUO0FBTUhxTSxhQU5HO0FBT0hwQixjQUFRLEVBQUVBLFFBQVEsSUFBSSxJQVBuQjtBQVFIck0sd0JBUkc7QUFTSHFFLGVBQVMsRUFBRW1MLE9BQU8sQ0FBQzdLO0FBVGhCO0FBREosR0FBUDtBQWFIO0FBRUQsK0RBQWUwSyxTQUFmLEU7Ozs7Ozs7Ozs7O0FDdExBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9mYWN1bHR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcicgXHJcblxyXG5mdW5jdGlvbiBDb250ZW50KHByb3BzKXtcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzID0gXCJyb3dcIj5cclxuICAgICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAmY29weTsgQ29weXJpZ2h0IDIwMjEgRFBTTVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuXHRsZXQgcm9sZU5hbWUgPSBcIlwiXHJcblx0c3dpdGNoKHByb3BzLnJvbGUpe1xyXG5cdFx0Y2FzZSAxOiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIkZhY3VsdHlcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAyOiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIlVuaXQgSGVhZFwiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDM6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiRGVwYXJ0bWVudCBDaGFpclwiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIkFkbWluIENsZXJrXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblx0XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Rwc20tc2VhbC5wbmdcIiB3aWR0aD1cIjE4NlwiIGhlaWdodD1cIjE1MFwiIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiIGFsdD1cIkRQU00tUUEtUG9ydGFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdDxoMj4gRFBTTSBRQSBQT1JUQUwgPC9oMj5cclxuXHRcdFxyXG5cdFx0PGRpdiBjbGFzc05hbWUgPSBcIm1sLWF1dG9cIj5cclxuXHRcdFx0PGg1PiBDdXJyZW50bHkgTG9nZ2VkIEluOiA8TGluayBocmVmID0gXCIvc2V0dGluZ3MvY2hhbmdlLXBhc3N3b3JkXCI+PGE+IHtwcm9wcy5uYW1lfSAoe3JvbGVOYW1lfSkgPC9hPjwvTGluaz4gPC9oNT5cclxuXHRcdDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdC5uYXZiYXJ7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM5MTAzMDM7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHR9XHJcblx0XHRoMiwgaDV7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInXHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudCdcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG4gICAgbGV0IGFwcHJvdmFsTGlzdFxyXG4gICAgaWYocHJvcHMuYXBwcm92YWxMaXN0KSBhcHByb3ZhbExpc3QgPSBwcm9wcy5hcHByb3ZhbExpc3RcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtaWNvbnNAMS40LjEvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy41LjEvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNi4wL3VtZC9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyIG5hbWU9eyBwcm9wcy5uYW1lIH0gcm9sZT17cHJvcHMucm9sZX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCIgaWQgPSBcImxheW91dF9yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHJvbGUgPSB7cHJvcHMucm9sZX0gYXBwcm92YWxMaXN0PXthcHByb3ZhbExpc3R9IGZhY3VsdHlJZCA9IHtwcm9wcy5mYWN1bHR5SWR9IHJvbGVBc3NpZ25tZW50PXtwcm9wcy5yb2xlQXNzaWdubWVudEZsYWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBpZCA9IFwibGF5b3V0X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIocHJvcHMpIHsgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWUsIHJlbW92ZUNvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUNvb2tpZSgpIHtcclxuICAgICAgICByZW1vdmVDb29raWUoXCJ1c2VyXCIsIHtwYXRoOicvJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmYWN1bHR5ID0gdHJ1ZVxyXG4gICAgbGV0IHN0YWZmID0gdHJ1ZVxyXG5cclxuICAgIGlmKHByb3BzLnJvbGUgPT0gMSB8fCBwcm9wcy5yb2xlID09IDIgfHwgcHJvcHMucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgc3RhZmYgPSBmYWxzZVxyXG4gICAgICAgIGlmKHByb3BzLnJvbGUgPT0gMiB8fCBwcm9wcy5yb2xlID09IDMpIHtcclxuICAgICAgICAgICAgZmFjdWx0eSA9IGZhbHNlXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcImZhbHNlXCIpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgXHRzZXRBY3RpdmUoIWlzQWN0aXZlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXJcIj5cclxuXHQgICAgPGRpdiBjbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWluZm8gY29sLTEyIGQtbWQtbm9uZSB0ZXh0LWNlbnRlclwiIG9uQ2xpY2sgPSB7aGFuZGxlVG9nZ2xlfT4gTWFpbiBNZW51IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJtZW51XCIgY2xhc3NOYW1lID0ge2lzQWN0aXZlID8gbnVsbCA6IFwiZC1ub25lIGQtbWQtYmxvY2tcIn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXNlY29uZGFyeVwiIGRhdGEtdG9nZ2xlID0gXCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0ID0gXCIjZmFjdWx0eU1lbnVcIiBhcmlhLWNvbnRyb2xzID0gXCJmYWN1bHR5TWVudVwiPiBGYWN1bHR5IDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSBcImZhY3VsdHlNZW51XCIgY2xhc3NOYW1lID0gXCJjb2xsYXBzZSBzaG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eVwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5EYXNoYm9hcmQ8L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9iYXNpYy1pbmZvXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYmFzaWMtaW5mb1wiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+QmFzaWMgSW5mb3JtYXRpb248L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9hY2NvbXBsaXNobWVudFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2FjY29tcGxpc2htZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5BY2NvbXBsaXNobWVudDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2ZhY3VsdHktbG9hZFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2ZhY3VsdHktbG9hZFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMb2FkPC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvdmlldy9hbGxcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvdmlldy9hbGxcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkZhY3VsdHkgTGlzdDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2FwcHJvdmFsXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9hcHByb3ZhbFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGluZyBBcHByb3ZhbHMgJm5ic3A7e3Byb3BzLmFwcHJvdmFsTGlzdC5mYWN1bHR5Q291bnQgPiAwICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntwcm9wcy5hcHByb3ZhbExpc3QuZmFjdWx0eUNvdW50fTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7IHN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2FkbWluXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hZG1pblwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMaXN0PC9hPjwvTGluaz4gfVxyXG5cdFx0ICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgcHJvcHMucm9sZUFzc2lnbm1lbnQgJiYgPExpbmsgaHJlZiA9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlIEFzc2lnbm1lbnQgJm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+ITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmICFwcm9wcy5yb2xlQXNzaWdubWVudCAmJiA8TGluayBocmVmID17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGUgQXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUNvb2tpZX0+TG9nIE91dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdCNtZW51IHtcclxuICBcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMTc4MjM7XHJcblx0XHRcdH1cclxuXHRcdFx0Lmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNze1xyXG5cdFx0XHRcdHRleHQtaW5kZW50OjIwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQjYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDU5MTk7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0PC9kaXY+XHRcdFx0XHRcdCAgICBcclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iLCJpbXBvcnQgQWNjb21wbGlzaG1lbnRBbmFseXRpY3NUYWJsZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvYWNjb21wbGlzaG1lbnQtY291bnQvYWNjb21wbGlzaG1lbnRfZGFzaGJvYXJkX3RhYmxlJ1xyXG5pbXBvcnQgQWNjb21wbGlzaG1lbnREYXNoYm9hcmRHcmFwaCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvYWNjb21wbGlzaG1lbnQtY291bnQvYWNjb21wbGlzaG1lbnRfZGFzaGJvYXJkX2dyYXBoJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gQWNjb21wbGlzaG1lbnRDb3VudChwcm9wcyl7IFxyXG5cdGxldCBhY2NvbXBMaXN0ID0gcHJvcHMuY2hpbGRyZW5cclxuICAgIFxyXG4gICAgbGV0IGNoZW1QU0FDb3VudCA9IDBcclxuICAgIGxldCBjaGVtVFNDb3VudCA9IDBcclxuXHRsZXQgY2hlbVB1YkNvdW50ID0gMFxyXG5cdGxldCBjaGVtUkdDb3VudCA9IDBcclxuXHRcclxuXHRsZXQgbWNzdVBTQUNvdW50ID0gMFxyXG5cdGxldCBtY3N1VFNDb3VudCA9IDBcclxuXHRsZXQgbWNzdVB1YkNvdW50ID0gMFxyXG5cdGxldCBtY3N1UkdDb3VudCA9IDBcclxuXHRcclxuXHRsZXQgcDZHZW9QU0FDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9UU0NvdW50ID0gMFxyXG5cdGxldCBwNkdlb1B1YkNvdW50ID0gMFxyXG5cdGxldCBwNkdlb1JHQ291bnQgPSAwXHJcblxyXG5cdGxldCB0YWJsZURhdGEgPSBbXVxyXG5cclxuXHRsZXQgdW5pdElkXHJcblx0bGV0IHN0YXJ0RGF0ZVxyXG5cdGxldCBlbmREYXRlXHJcblxyXG5cdGlmKGFjY29tcExpc3QgIT0gbnVsbCkge1xyXG5cdFx0T2JqZWN0LmtleXMoYWNjb21wTGlzdCkubWFwKGtleSA9PiB7XHJcblx0XHQgIGlmKGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIHtcclxuXHRcdFx0Y2hlbVBTQUNvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1YmxpY19zZXJ2aWNlcy5sZW5ndGhcclxuXHRcdFx0Y2hlbVRTQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdHJhaW5pbmdfc2VtaW5hcnMubGVuZ3RoXHJcblx0XHRcdGNoZW1QdWJDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9wdWJsaXNoZXJzLmxlbmd0aFxyXG5cdFx0XHRjaGVtUkdDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9yZXNlYXJjaGVycy5sZW5ndGhcclxuXHRcdCAgfVxyXG5cdFx0ICBlbHNlIGlmKGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIHtcclxuXHRcdFx0bWNzdVBTQUNvdW50ICs9IGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1YmxpY19zZXJ2aWNlcy5sZW5ndGhcclxuXHRcdFx0bWNzdVRTQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdHJhaW5pbmdfc2VtaW5hcnMubGVuZ3RoXHJcblx0XHRcdG1jc3VQdWJDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9wdWJsaXNoZXJzLmxlbmd0aFxyXG5cdFx0XHRtY3N1UkdDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9yZXNlYXJjaGVycy5sZW5ndGhcclxuXHRcdCAgfVxyXG5cdFx0ICBlbHNlIGlmKGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHtcclxuXHRcdFx0cDZHZW9QU0FDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9wdWJsaWNfc2VydmljZXMubGVuZ3RoXHJcblx0XHRcdHA2R2VvVFNDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV90cmFpbmluZ19zZW1pbmFycy5sZW5ndGhcclxuXHRcdFx0cDZHZW9QdWJDb3VudCArPSBhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9wdWJsaXNoZXJzLmxlbmd0aFxyXG5cdFx0XHRwNkdlb1JHQ291bnQgKz0gYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcmVzZWFyY2hlcnMubGVuZ3RoXHJcblx0XHQgIH1cclxuXHJcblx0XHQgIGlmKGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1YmxpY19zZXJ2aWNlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1YmxpY19zZXJ2aWNlcy5mb3JFYWNoKGFzeW5jIChpKSA9PiB7XHJcblx0XHRcdFx0YXdhaXQgdGFibGVEYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0Y29sMTogYWNjb21wTGlzdFtrZXldLmxhc3ROYW1lICsgJywgJyArIGFjY29tcExpc3Rba2V5XS5maXJzdE5hbWUsXHJcblx0XHRcdFx0XHRjb2wyOiBpLnBvc2l0aW9uICsgJyAtICcgKyBpLm9yZ2FuaXphdGlvbixcclxuXHRcdFx0XHRcdGNvbDM6ICdQdWJsaWMgU2VydmljZScsXHJcblx0XHRcdFx0XHRjb2w0OiBpLnN0YXJ0RGF0ZSxcclxuXHRcdFx0XHRcdGNvbDU6IGkuZW5kRGF0ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHQgIH1cclxuXHJcblx0XHQgIGlmKGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3B1Ymxpc2hlcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9wdWJsaXNoZXJzLmZvckVhY2goYXN5bmMgKGkpID0+IHtcclxuXHRcdFx0XHRhd2FpdCB0YWJsZURhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRjb2wxOiBhY2NvbXBMaXN0W2tleV0ubGFzdE5hbWUgKyAnLCAnICsgYWNjb21wTGlzdFtrZXldLmZpcnN0TmFtZSxcclxuXHRcdFx0XHRcdGNvbDI6IGkuZmFjdWx0eV9wdWJsaWNhdGlvbi50aXRsZSxcclxuXHRcdFx0XHRcdGNvbDM6ICdQdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0XHRjb2w0OiBpLmZhY3VsdHlfcHVibGljYXRpb24ucHVibGljYXRpb25EYXRlLFxyXG5cdFx0XHRcdFx0Y29sNTogaS5mYWN1bHR5X3B1YmxpY2F0aW9uLnB1YmxpY2F0aW9uRGF0ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHQgIH1cclxuXHJcblx0XHQgIGlmKGFjY29tcExpc3Rba2V5XS5mYWN1bHR5X3RyYWluaW5nX3NlbWluYXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0YWNjb21wTGlzdFtrZXldLmZhY3VsdHlfdHJhaW5pbmdfc2VtaW5hcnMuZm9yRWFjaChhc3luYyAoaSkgPT4ge1xyXG5cdFx0XHRcdGF3YWl0IHRhYmxlRGF0YS5wdXNoKHtcclxuXHRcdFx0XHRcdGNvbDE6IGFjY29tcExpc3Rba2V5XS5sYXN0TmFtZSArICcsICcgKyBhY2NvbXBMaXN0W2tleV0uZmlyc3ROYW1lLFxyXG5cdFx0XHRcdFx0Y29sMjogaS5yb2xlICsgJyAtICcgKyBpLnRpdGxlLFxyXG5cdFx0XHRcdFx0Y29sMzogJ1RyYWluaW5nL1NlbWluYXInLFxyXG5cdFx0XHRcdFx0Y29sNDogaS5kYXRlRnJvbSxcclxuXHRcdFx0XHRcdGNvbDU6IGkuZGF0ZVRvXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdCAgfVxyXG5cclxuXHRcdCAgaWYoYWNjb21wTGlzdFtrZXldLmZhY3VsdHlfcmVzZWFyY2hlcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRhY2NvbXBMaXN0W2tleV0uZmFjdWx0eV9yZXNlYXJjaGVycy5mb3JFYWNoKGFzeW5jIChpKSA9PiB7XHJcblx0XHRcdFx0YXdhaXQgdGFibGVEYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0Y29sMTogYWNjb21wTGlzdFtrZXldLmxhc3ROYW1lICsgJywgJyArIGFjY29tcExpc3Rba2V5XS5maXJzdE5hbWUsXHJcblx0XHRcdFx0XHRjb2wyOiBpLmZhY3VsdHlfcmVzZWFyY2hfZ3JhbnQucmVzZWFyY2hOYW1lLFxyXG5cdFx0XHRcdFx0Y29sMzogJ1Jlc2VhcmNoIEdyYW50JyxcclxuXHRcdFx0XHRcdGNvbDQ6IGkuZmFjdWx0eV9yZXNlYXJjaF9ncmFudC5hY3R1YWxTdGFydCxcclxuXHRcdFx0XHRcdGNvbDU6IGkuZmFjdWx0eV9yZXNlYXJjaF9ncmFudC5hY3R1YWxFbmRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0ICB9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdyYXBoRGF0YSA9IFtcclxuXHRcdHtcclxuXHRcdCAgXCJBY2NvbXBsaXNobWVudFR5cGVcIjogXCJQdWJsaWMgU2VydmljZVwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdVBTQUNvdW50LFxyXG5cdFx0ICBcIk1DU1VDb2xvclwiOiBcImhzbCg4OCwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtUFNBQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDEwMiwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvUFNBQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTI3LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiQWNjb21wbGlzaG1lbnRUeXBlXCI6IFwiUHVibGljYXRpb25zXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1UHViQ291bnQsXHJcblx0XHQgIFwiTUNTVUNvbG9yXCI6IFwiaHNsKDEwOSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtUHViQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDE1MSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvUHViQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMTc3LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiQWNjb21wbGlzaG1lbnRUeXBlXCI6IFwiUmVzZWFyY2ggR3JhbnRzXCIsXHJcblx0XHQgIFwiTUNTVVwiOiBtY3N1UkdDb3VudCxcclxuXHRcdCAgXCJob3QgZG9nQ29sb3JcIjogXCJoc2woNjcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbVJHQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDIxNSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvUkdDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgyNDQsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJBY2NvbXBsaXNobWVudFR5cGVcIjogXCJUcmFpbmluZy9TZW1pbmFyc1wiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdVRTQ291bnQsXHJcblx0XHQgIFwiaG90IGRvZ0NvbG9yXCI6IFwiaHNsKDIzNCwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtVFNDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMzAyLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9UU0NvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDE3OCwgNzAlLCA1MCUpXCIsXHJcblx0XHR9XHJcblx0ICBdXHJcblxyXG5cdGlmKHByb3BzLnF1ZXJ5TGlzdC5hY2NvbXBsaXNobWVudCA9PSAxKSB7XHJcblx0XHR1bml0SWQgPSBwcm9wcy5xdWVyeUxpc3QudW5pdElkXHJcblx0XHRzdGFydERhdGUgPSBwcm9wcy5xdWVyeUxpc3Quc3RhcnREYXRlXHJcblx0XHRlbmREYXRlID0gcHJvcHMucXVlcnlMaXN0LmVuZERhdGVcclxuXHR9XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8aDMgYWxpZ24gPSBcImNlbnRlclwiPkFjY29tcGxpc2htZW50IENvdW50PC9oMz5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gMyAmJiBcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkRlcHRVbml0XCI+IERlcGFydG1lbnQgVW5pdCA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiRGVwdFVuaXRcIiBpZD1cIkRlcHRVbml0XCIgZGVmYXVsdFZhbHVlPXt1bml0SWR9PlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwXCI+QWxsPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj5DaGVtaXN0cnkgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyXCI+TWF0aGVtYXRpY3MgYW5kIENvbXB1dGluZyBTY2llbmNlcyBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIj5QaHlzaWNzIGFuZCBHZW9sb2d5IFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJTdGFydFRpbWVQZXJpb2RcIj4gRnJvbSAgPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJTdGFydFRpbWVQZXJpb2RcIiBpZD1cIlN0YXJ0VGltZVBlcmlvZFwiIGRlZmF1bHRWYWx1ZT17c3RhcnREYXRlfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRW5kVGltZVBlcmlvZFwiPiBUbyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcIkVuZFRpbWVQZXJpb2RcIiBpZD1cIkVuZFRpbWVQZXJpb2RcIiBkZWZhdWx0VmFsdWU9e2VuZERhdGV9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lID0gXCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCB1bml0SWRcclxuXHJcblx0XHRcdFx0XHRcdGlmKHByb3BzLnJvbGUgPT0zKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0RlcHRVbml0JykudmFsdWVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsZXQgc3RhcnREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1N0YXJ0VGltZVBlcmlvZCcpLnZhbHVlXHJcblx0XHRcdFx0XHRcdGxldCBlbmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VuZFRpbWVQZXJpb2QnKS52YWx1ZVxyXG5cclxuXHRcdFx0XHRcdFx0bGV0IHVybCA9ICcvZmFjdWx0eSdcclxuXHRcdFx0XHRcdFx0bGV0IHF1ZXJ5ID0ge1xyXG5cdFx0XHRcdFx0XHRcdGFjY29tcGxpc2htZW50OiAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYodW5pdElkICYmIHVuaXRJZCAhPSAwKSBxdWVyeS51bml0SWQgPSB1bml0SWRcclxuXHRcdFx0XHRcdFx0aWYoc3RhcnREYXRlKSBxdWVyeS5zdGFydERhdGUgPSBzdGFydERhdGVcclxuXHRcdFx0XHRcdFx0aWYoZW5kRGF0ZSkgcXVlcnkuZW5kRGF0ZSA9IGVuZERhdGVcclxuXHJcblx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRwYXRobmFtZTogdXJsLFxyXG5cdFx0XHRcdFx0XHRcdHF1ZXJ5XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9fT4gRmlsdGVyPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PG5hdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtZmlsbCBuYXYtanVzdGlmaWVkXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJncmFwaC10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjZ3JhcGhcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImdyYXBoXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+T3ZlcnZpZXc8L2E+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwidGFibGUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI3RhYmxlXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJ0YWJsZVwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkZ1bGwgTGlzdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJncmFwaFwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImdyYXBoLXRhYlwiPjxBY2NvbXBsaXNobWVudERhc2hib2FyZEdyYXBoIGRhdGE9e2dyYXBoRGF0YX0gLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInRhYmxlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGFibGUtdGFiXCI+PEFjY29tcGxpc2htZW50QW5hbHl0aWNzVGFibGUgZGF0YT17dGFibGVEYXRhfSAvPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRhLm5hdi1pdGVtOmZvY3Vze1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLm5hdi1pdGVtOmhvdmVye1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLmFjdGl2ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb21wbGlzaG1lbnRDb3VudCIsIi8vIGluc3RhbGwgKHBsZWFzZSBtYWtlIHN1cmUgdmVyc2lvbnMgbWF0Y2ggcGVlckRlcGVuZGVuY2llcylcclxuLy8gbnBtIGluc3RhbGwgLS1zYXZlIEBuaXZvL2JhclxyXG5pbXBvcnQgeyBSZXNwb25zaXZlQmFyIH0gZnJvbSAnQG5pdm8vYmFyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIG1ha2Ugc3VyZSBwYXJlbnQgY29udGFpbmVyIGhhdmUgYSBkZWZpbmVkIGhlaWdodCB3aGVuIHVzaW5nXHJcbi8vIHJlc3BvbnNpdmUgY29tcG9uZW50LCBvdGhlcndpc2UgaGVpZ2h0IHdpbGwgYmUgMCBhbmRcclxuLy8gbm8gY2hhcnQgd2lsbCBiZSByZW5kZXJlZC5cclxuLy8gd2Vic2l0ZSBleGFtcGxlcyBzaG93Y2FzZSBtYW55IHByb3BlcnRpZXMsXHJcbi8vIHlvdSdsbCBvZnRlbiB1c2UganVzdCBhIGZldyBvZiB0aGVtLlxyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgQWNjb21wbGlzaG1lbnREYXNoYm9hcmRHcmFwaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICByZW5kZXIoKXtcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGlkID0gXCJncmFwaFwiIHN0eWxlID0ge3toZWlnaHQ6IDcwMH19PlxyXG5cdFx0XHQ8UmVzcG9uc2l2ZUJhclxyXG4gICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YX1cclxuICAgICAgICBrZXlzPXtbICdNQ1NVJywgJ0NoZW0nLCAnUGh5c2ljcy9HZW9sb2d5JyBdfVxyXG4gICAgICAgIGluZGV4Qnk9J0FjY29tcGxpc2htZW50VHlwZSdcclxuICAgICAgICBtYXJnaW49e3sgdG9wOiA1MCwgcmlnaHQ6IDEzMCwgYm90dG9tOiA1MCwgbGVmdDogNjAgfX1cclxuICAgICAgICBwYWRkaW5nPXswLjN9XHJcbiAgICAgICAgdmFsdWVTY2FsZT17eyB0eXBlOiAnbGluZWFyJyB9fVxyXG4gICAgICAgIGluZGV4U2NhbGU9e3sgdHlwZTogJ2JhbmQnLCByb3VuZDogdHJ1ZSB9fVxyXG4gICAgICAgIGNvbG9ycz17eyBzY2hlbWU6ICduaXZvJyB9fVxyXG4gICAgICAgIGJvcmRlckNvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogWyBbICdkYXJrZXInLCAxLjYgXSBdIH19XHJcbiAgICAgICAgYXhpc1RvcD17bnVsbH1cclxuICAgICAgICBheGlzUmlnaHQ9e251bGx9XHJcbiAgICAgICAgYXhpc0JvdHRvbT17e1xyXG4gICAgICAgICAgICB0aWNrU2l6ZTogNSxcclxuICAgICAgICAgICAgdGlja1BhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgIHRpY2tSb3RhdGlvbjogMCxcclxuICAgICAgICAgICAgbGVnZW5kOiAnQWNjb21wbGlzaG1lbnQgVHlwZScsIC8vbGFiZWxcclxuICAgICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICBsZWdlbmRPZmZzZXQ6IDMyXHJcbiAgICAgICAgfX1cclxuICAgICAgICBheGlzTGVmdD17e1xyXG4gICAgICAgICAgICB0aWNrU2l6ZTogNSxcclxuICAgICAgICAgICAgdGlja1BhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgIHRpY2tSb3RhdGlvbjogMCxcclxuICAgICAgICAgICAgbGVnZW5kOiAnQ291bnQnLCAvL2xhYmVsXHJcbiAgICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgbGVnZW5kT2Zmc2V0OiAtNDAsXHJcblx0ICAgIGZvcm1hdDogZSA9PiBNYXRoLmZsb29yKGUpID09PSBlICYmIGVcclxuICAgICAgICB9fVxyXG4gICAgICAgIGxhYmVsU2tpcFdpZHRoPXsxMn1cclxuICAgICAgICBsYWJlbFNraXBIZWlnaHQ9ezEyfVxyXG4gICAgICAgIGxhYmVsVGV4dENvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogWyBbICdkYXJrZXInLCAxLjYgXSBdIH19XHJcbiAgICAgICAgbGVnZW5kcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhRnJvbTogJ2tleXMnLFxyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnYm90dG9tLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDEyMCxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDAsXHJcbiAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc6IDIsXHJcbiAgICAgICAgICAgICAgICBpdGVtV2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgIGl0ZW1IZWlnaHQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgaXRlbURpcmVjdGlvbjogJ2xlZnQtdG8tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgaXRlbU9wYWNpdHk6IDAuODUsXHJcbiAgICAgICAgICAgICAgICBzeW1ib2xTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgIGVmZmVjdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiAnaG92ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF19XHJcbiAgICAgICAgYW5pbWF0ZT17dHJ1ZX1cclxuICAgICAgICBtb3Rpb25TdGlmZm5lc3M9ezkwfVxyXG4gICAgICAgIG1vdGlvbkRhbXBpbmc9ezE1fVxyXG4gICAgLz5cclxuXHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29tcGxpc2htZW50RGFzaGJvYXJkR3JhcGhcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCwgdXNlU29ydEJ5LCB1c2VGaWx0ZXJzLCB1c2VQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtdGFibGUnXHJcbmltcG9ydCBSZWFjdEhUTUxUYWJsZVRvRXhjZWwgZnJvbSAncmVhY3QtaHRtbC10YWJsZS10by1leGNlbCc7XHJcblxyXG4vLyBkZWZhdWx0IHNlYXJjaCBib3ggZmlsdGVyXHJcbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIgfSxcclxufSkge1xyXG4gIGNvbnN0IGNvdW50ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpIC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcclxuICAgICAgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtjb3VudH0gcmVjb3Jkcy4uLmB9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgZm9yIHNlbGVjdGluZ1xyXG4vLyBhIHVuaXF1ZSBvcHRpb24gZnJvbSBhIGxpc3RcclxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKVxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgb3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgLy8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcclxuICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VsZWN0PlxyXG4gIClcclxufVxyXG5cclxuLy8gdGhlIHRhYmxlIG1hcmt1cFxyXG5mdW5jdGlvbiBUYWJsZSAoe2NvbHVtbnMsIGRhdGF9KXtcclxuIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gTGV0J3Mgc2V0IHVwIG91ciBkZWZhdWx0IEZpbHRlciBVSVxyXG4gICAgICBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICAgY29uc3Qge1xyXG4gICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgIGZvb3Rlckdyb3VwcyxcclxuICAgICBwcmVwYXJlUm93LFxyXG4gICAgIHBhZ2UsXHJcbiAgICAgcm93cywgXHJcblxyXG4gICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgY2FuTmV4dFBhZ2UsXHJcbiAgICBwYWdlT3B0aW9ucyxcclxuICAgIHBhZ2VDb3VudCxcclxuICAgIGdvdG9QYWdlLFxyXG4gICAgbmV4dFBhZ2UsXHJcbiAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICBzZXRQYWdlU2l6ZSxcclxuICAgIHN0YXRlOiB7IHBhZ2VJbmRleCwgcGFnZVNpemUsIGdyb3VwQnksIGV4cGFuZGVkIH0sXHJcbiAgIH0gPSB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGEsIGRlZmF1bHRDb2x1bW4sIGluaXRpYWxTdGF0ZTogeyBwYWdlSW5kZXg6IDAgfSB9LCB1c2VGaWx0ZXJzLCB1c2VHcm91cEJ5LCB1c2VTb3J0QnksIHVzZUV4cGFuZGVkLCB1c2VQYWdpbmF0aW9uKVxyXG5cclxuIHJldHVybihcclxuPGRpdj5cclxuICAgIDxiciAvPlxyXG4gICAgPFJlYWN0SFRNTFRhYmxlVG9FeGNlbFxyXG5cdFx0XHRcdGlkPVwidGVzdC10YWJsZS14bHMtYnV0dG9uXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWItMlwiXHJcblx0XHRcdFx0dGFibGU9XCJhY2NvbXBsaXNobWVudFRhYmxlXCJcclxuXHRcdFx0XHRmaWxlbmFtZT1cImFjY29tcGxpc2htZW50XCJcclxuXHRcdFx0XHRidXR0b25UZXh0PVwiRG93bmxvYWQgYXMgWExTXCIvPlxyXG4gICAgPGJyIC8+XHJcbiAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIiB7Li4uZ2V0VGFibGVQcm9wcygpfSBpZD1cImFjY29tcGxpc2htZW50VGFibGVcIj5cclxuICAgICAgIDx0aGVhZD5cclxuICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICA8dGhcclxuXHRcdC8vIHNvcnRpbmcgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG5cdFx0IDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICfilrwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ+KWsidcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdCAgPGRpdj57Y29sdW1uLmNhbkZpbHRlciA/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpIDogbnVsbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICkpfVxyXG4gICAgICAgPC90aGVhZD5cclxuICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgIHtwYWdlLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXMsIGxldCdzIGNvbG9yIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2VsbCBkZXBlbmRpbmcgb24gd2hhdCB0eXBlIGl0IGlzIGdpdmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSB1c2VHcm91cEJ5IGhvb2tcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VsbC5pc0dyb3VwZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjMGFmZjAwODInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZmE1MDA3OCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZjAwMDA0MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn4pa8JyA6ICfilronfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcpfSAoe3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJylcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICA8L3Rib2R5PlxyXG5cdDx0Zm9vdD5cclxuICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChncm91cCA9PiAoXHJcbiAgICAgICAgICA8dHIgey4uLmdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgIHtncm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgIDx0ZCBcclxuXHRcdHsuLi5jb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoKX0+XHJcblx0XHR7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICdDbGljayB0byBVbmdyb3VwICcgOiAnQ2xpY2sgdG8gR3JvdXAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblx0XHRcclxuXHRcdHtjb2x1bW4ucmVuZGVyKCdGb290ZXInKX1cclxuXHQgICAgICA8L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGZvb3Q+XHJcbiAgICAgPC90YWJsZT5cclxuXHJcblx0XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7JzwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPj4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBQYWdleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0dGFibGV7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRvdmVyZmxvdzogeDtcclxuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcbjwvZGl2PlxyXG4gKVxyXG4gIFxyXG59XHJcbiBcclxuXHJcbi8vIGNvbmZpZ3VyZSBjb2x1bW5zLCBwb3B1bGF0ZSBjZWxscywgcmVuZGVyIHRhYmxlXHJcbiBmdW5jdGlvbiBBY2NvbXBsaXNobWVudEFuYWx5dGljc1RhYmxlKHByb3BzKSB7IFxyXG4gICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxyXG4gXHJcbiAgIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgICgpID0+IFtcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnTmFtZSBvZiBGYWN1bHR5JyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wxJywgLy8gYWNjZXNzb3IgaXMgdGhlIFwia2V5XCIgaW4gdGhlIGRhdGEsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IE5hbWVzYCxcclxuXHQgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdBY2NvbXBsaXNobWVudCcsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMicsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEFjY29tcGxpc2htZW50c2AsXHJcblx0IEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnQWNjb21wbGlzaG1lbnQgVHlwZScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMycsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnU3RhcnQgRGF0ZSAoY2xpY2sgdG8gc29ydCknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDQnLFxyXG5cdCBzb3J0Qnk6ICdkYXRldGltZScsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBkaXNhYmxlRmlsdGVyczogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnRW5kIERhdGUgKGNsaWNrIHRvIHNvcnQpJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2w1JyxcclxuXHQgc29ydEJ5OiAnZGF0ZXRpbWUnLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgZGlzYWJsZUZpbHRlcnM6IHRydWVcclxuICAgICAgIH1cclxuICAgICBdLFxyXG4gICAgIFtdXHJcbiAgIClcclxuIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPiBcclxuICAgKVxyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb21wbGlzaG1lbnRBbmFseXRpY3NUYWJsZVxyXG4iLCJpbXBvcnQgRGVncmVlQW5hbHl0aWNzVGFibGUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2RlZ3JlZS9kZWdyZWVfZGFzaGJvYXJkX3RhYmxlJ1xyXG5pbXBvcnQgRGVncmVlRGFzaGJvYXJkR3JhcGggZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2RlZ3JlZS9kZWdyZWVfZGFzaGJvYXJkX2dyYXBoJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gRGVncmVlQ291bnQocHJvcHMpIHtcclxuXHRsZXQgZWR1Y0xpc3QgPSBwcm9wcy5jaGlsZHJlblxyXG5cclxuXHRsZXQgY2hlbUJTQ291bnQgPSAwXHJcblx0bGV0IGNoZW1NQUNvdW50ID0gMFxyXG5cdGxldCBjaGVtUEhEQ291bnQgPSAwXHJcblx0bGV0IGNoZW1PdGhlcnNDb3VudCA9IDBcclxuXHJcblx0bGV0IG1jc3VCU0NvdW50ID0gMFxyXG5cdGxldCBtY3N1TUFDb3VudCA9IDBcclxuXHRsZXQgbWNzdVBIRENvdW50ID0gMFxyXG5cdGxldCBtY3N1T3RoZXJzQ291bnQgPSAwXHJcblxyXG5cdGxldCBwNkdlb0JTQ291bnQgPSAwXHJcblx0bGV0IHA2R2VvTUFDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9QSERDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9PdGhlcnNDb3VudCA9IDBcclxuXHJcblx0bGV0IHRhYmxlRGF0YSA9IFtdXHJcblxyXG5cdGlmKGVkdWNMaXN0KSB7XHJcblx0XHRlZHVjTGlzdC5mb3JFYWNoKGFzeW5jIChlKSA9PiB7IFxyXG5cdFx0XHRhd2FpdCBlLmZhY3VsdHlfZWR1Y2F0aW9uX2luZm9zLmZvckVhY2goYXN5bmMgKGkpID0+IHsgXHJcblx0XHRcdFx0XHJcblx0XHJcblx0XHRcdFx0aWYoaS5kZWdyZWVUeXBlID09ICdCUycgfHwgaS5kZWdyZWVUeXBlID09ICdCQScpIHtcclxuXHRcdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGNoZW1CU0NvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikge1xyXG5cdFx0XHRcdFx0XHRtY3N1QlNDb3VudCsrXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHtcclxuXHRcdFx0XHRcdFx0cDZHZW9CU0NvdW50KytcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYoaS5kZWdyZWVUeXBlID09ICdNQScgfHwgaS5kZWdyZWVUeXBlID09ICdNUycpIHtcclxuXHRcdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGNoZW1NQUNvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMikge1xyXG5cdFx0XHRcdFx0XHRtY3N1TUFDb3VudCsrXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHtcclxuXHRcdFx0XHRcdFx0cDZHZW9NQUNvdW50KytcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYoaS5kZWdyZWVUeXBlID09ICdQaEQnKSB7XHJcblx0XHRcdFx0XHRpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRjaGVtUEhEQ291bnQrK1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSB7XHJcblx0XHRcdFx0XHRcdG1jc3VQSERDb3VudCsrXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHtcclxuXHRcdFx0XHRcdFx0cDZHZW9QSERDb3VudCsrXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGNoZW1PdGhlcnNDb3VudCsrXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIHtcclxuXHRcdFx0XHRcdFx0bWNzdU90aGVyc0NvdW50KytcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykge1xyXG5cdFx0XHRcdFx0XHRwNkdlb090aGVyc0NvdW50KytcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHJcblx0XHRcdFx0YXdhaXQgdGFibGVEYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0Y29sMTogZS5sYXN0TmFtZSArICcsICcgKyBlLmZpcnN0TmFtZSxcclxuXHRcdFx0XHRcdGNvbDI6IGkuZGVncmVlQ2VydCxcclxuXHRcdFx0XHRcdCAgY29sMzogaS5kZWdyZWVUeXBlLFxyXG5cdFx0XHRcdFx0ICBjb2w0OiBpLmVuZERhdGVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdyYXBoRGF0YSA9IFtcclxuXHRcdHtcclxuXHRcdCAgXCJEZWdyZWVBdHRhaW5lZFwiOiBcIkJhY2hlbG9yJ3NcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VCU0NvdW50LFxyXG5cdFx0ICBcIk1DU1VDb2xvclwiOiBcImhzbCg4OCwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtQlNDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMTAyLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9CU0NvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDEyNywgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkRlZ3JlZUF0dGFpbmVkXCI6IFwiTWFzdGVyJ3NcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VNQUNvdW50LFxyXG5cdFx0ICBcIk1DU1VDb2xvclwiOiBcImhzbCgxMDksIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbU1BQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDE1MSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvTUFDb3VudCxcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lDb2xvclwiOiBcImhzbCgxNzcsIDcwJSwgNTAlKVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgXCJEZWdyZWVBdHRhaW5lZFwiOiBcIkRvY3RvcmF0ZVwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdVBIRENvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCg2NywgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtUEhEQ291bnQsXHJcblx0XHQgIFwiQ2hlbUNvbG9yXCI6IFwiaHNsKDIxNSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5XCI6IHA2R2VvUEhEQ291bnQsXHJcblx0XHQgIFwiUGh5c2ljcy9HZW9sb2d5Q29sb3JcIjogXCJoc2woMjQ0LCA3MCUsIDUwJSlcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIFwiRGVncmVlQXR0YWluZWRcIjogXCJPdGhlclwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdU90aGVyc0NvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCgyMzQsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbU90aGVyc0NvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgzMDIsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb090aGVyc0NvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDE3OCwgNzAlLCA1MCUpXCIsXHJcblx0XHR9XHJcblx0ICBdXHJcblxyXG5cdGxldCB1bml0SWRcclxuXHRsZXQgc3RhcnREYXRlXHJcblx0bGV0IGVuZERhdGVcclxuXHJcblx0aWYocHJvcHMucXVlcnlMaXN0LmRlZ3JlZSA9PSAxKSB7XHJcblx0XHR1bml0SWQgPSBwcm9wcy5xdWVyeUxpc3QudW5pdElkXHJcblx0XHRzdGFydERhdGUgPSBwcm9wcy5xdWVyeUxpc3Quc3RhcnREYXRlXHJcblx0XHRlbmREYXRlID0gcHJvcHMucXVlcnlMaXN0LmVuZERhdGVcclxuXHR9XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxoMyBhbGlnbiA9IFwiY2VudGVyXCI+QXR0YWluZWQgRGVncmVlczwvaDM+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDMgJiYgXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJEZWdyZWVEZXB0VW5pdFwiPiBEZXBhcnRtZW50IFVuaXQgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcIkRlZ3JlZURlcHRVbml0XCIgaWQ9XCJEZWdyZWVEZXB0VW5pdFwiIGRlZmF1bHRWYWx1ZT17dW5pdElkfT5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMFwiPkFsbDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+Q2hlbWlzdHJ5IFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPk1hdGhlbWF0aWNzIGFuZCBDb21wdXRpbmcgU2NpZW5jZXMgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIzXCI+UGh5c2ljcyBhbmQgR2VvbG9neSBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRGVncmVlU3RhcnRUaW1lUGVyaW9kXCI+IEZyb20gIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiRGVncmVlU3RhcnRUaW1lUGVyaW9kXCIgaWQ9XCJEZWdyZWVTdGFydFRpbWVQZXJpb2RcIiBkZWZhdWx0VmFsdWU9e3N0YXJ0RGF0ZX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkRlZ3JlZUVuZFRpbWVQZXJpb2RcIj4gVG8gPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJEZWdyZWVFbmRUaW1lUGVyaW9kXCIgaWQ9XCJEZWdyZWVFbmRUaW1lUGVyaW9kXCIgZGVmYXVsdFZhbHVlPXtlbmREYXRlfS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgdW5pdElkIFxyXG5cdFx0XHRcdFx0XHRpZihwcm9wcy5yb2xlID09IDMpIHVuaXRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEZWdyZWVEZXB0VW5pdCcpLnZhbHVlXHJcblx0XHRcdFx0XHRcdGxldCBzdGFydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVncmVlU3RhcnRUaW1lUGVyaW9kJykudmFsdWVcclxuXHRcdFx0XHRcdFx0bGV0IGVuZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVncmVlRW5kVGltZVBlcmlvZCcpLnZhbHVlXHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gJy9mYWN1bHR5J1xyXG5cdFx0XHRcdFx0XHRsZXQgcXVlcnkgPSB7XHJcblx0XHRcdFx0XHRcdFx0ZGVncmVlOiAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYodW5pdElkICYmIHVuaXRJZCAhPSAwKSBxdWVyeS51bml0SWQgPSB1bml0SWRcclxuXHRcdFx0XHRcdFx0aWYoc3RhcnREYXRlKSBxdWVyeS5zdGFydERhdGUgPSBzdGFydERhdGVcclxuXHRcdFx0XHRcdFx0aWYoZW5kRGF0ZSkgcXVlcnkuZW5kRGF0ZSA9IGVuZERhdGVcclxuXHJcblx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRwYXRobmFtZTogdXJsLFxyXG5cdFx0XHRcdFx0XHRcdHF1ZXJ5XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9fT4gRmlsdGVyPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PG5hdj5cclxuICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgbmF2LWZpbGwgbmF2LWp1c3RpZmllZFwiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZGVncmVlLWdyYXBoLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNkZWdyZWUtZ3JhcGhcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImRlZ3JlZS1ncmFwaFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPk92ZXJ2aWV3PC9hPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cInRhYmxlLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNkZWdyZWUtdGFibGVcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImRlZ3JlZS10YWJsZVwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkZ1bGwgTGlzdDwvYT5cclxuICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8L25hdj5cclxuXHQgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XHJcblx0ICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwiZGVncmVlLWdyYXBoXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVncmVlLWdyYXBoLXRhYlwiPjxEZWdyZWVEYXNoYm9hcmRHcmFwaCBkYXRhPXtncmFwaERhdGF9IC8+PC9kaXY+XHJcblx0ICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZGVncmVlLXRhYmxlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVncmVlLXRhYmxlLXRhYlwiPjxEZWdyZWVBbmFseXRpY3NUYWJsZSBkYXRhPXt0YWJsZURhdGF9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRhLm5hdi1pdGVtOmZvY3Vze1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLm5hdi1pdGVtOmhvdmVye1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLmFjdGl2ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVncmVlQ291bnQiLCIvLyBpbnN0YWxsIChwbGVhc2UgbWFrZSBzdXJlIHZlcnNpb25zIG1hdGNoIHBlZXJEZXBlbmRlbmNpZXMpXHJcbi8vIG5wbSBpbnN0YWxsIC0tc2F2ZSBAbml2by9iYXJcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZUJhciB9IGZyb20gJ0BuaXZvL2JhcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4vLyBtYWtlIHN1cmUgcGFyZW50IGNvbnRhaW5lciBoYXZlIGEgZGVmaW5lZCBoZWlnaHQgd2hlbiB1c2luZ1xyXG4vLyByZXNwb25zaXZlIGNvbXBvbmVudCwgb3RoZXJ3aXNlIGhlaWdodCB3aWxsIGJlIDAgYW5kXHJcbi8vIG5vIGNoYXJ0IHdpbGwgYmUgcmVuZGVyZWQuXHJcbi8vIHdlYnNpdGUgZXhhbXBsZXMgc2hvd2Nhc2UgbWFueSBwcm9wZXJ0aWVzLFxyXG4vLyB5b3UnbGwgb2Z0ZW4gdXNlIGp1c3QgYSBmZXcgb2YgdGhlbS5cclxuXHJcbmNsYXNzIERlZ3JlZURhc2hib2FyZEdyYXBoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0PGRpdiBpZCA9IFwiZ3JhcGhcIiBzdHlsZSA9IHt7aGVpZ2h0OiA3MDB9fT5cclxuXHRcdFx0PFJlc3BvbnNpdmVCYXJcclxuICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGF9XHJcbiAgICAgICAga2V5cz17WyAnTUNTVScsICdDaGVtJywgJ1BoeXNpY3MvR2VvbG9neScgXX1cclxuICAgICAgICBpbmRleEJ5PSdEZWdyZWVBdHRhaW5lZCdcclxuICAgICAgICBtYXJnaW49e3sgdG9wOiA1MCwgcmlnaHQ6IDEzMCwgYm90dG9tOiA1MCwgbGVmdDogNjAgfX1cclxuICAgICAgICBwYWRkaW5nPXswLjN9XHJcbiAgICAgICAgdmFsdWVTY2FsZT17eyB0eXBlOiAnbGluZWFyJyB9fVxyXG4gICAgICAgIGluZGV4U2NhbGU9e3sgdHlwZTogJ2JhbmQnLCByb3VuZDogdHJ1ZSB9fVxyXG4gICAgICAgIGNvbG9ycz17eyBzY2hlbWU6ICduaXZvJyB9fVxyXG4gICAgICAgIGJvcmRlckNvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogWyBbICdkYXJrZXInLCAxLjYgXSBdIH19XHJcbiAgICAgICAgYXhpc1RvcD17bnVsbH1cclxuICAgICAgICBheGlzUmlnaHQ9e251bGx9XHJcbiAgICAgICAgYXhpc0JvdHRvbT17e1xyXG4gICAgICAgICAgICB0aWNrU2l6ZTogNSxcclxuICAgICAgICAgICAgdGlja1BhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgIHRpY2tSb3RhdGlvbjogMCxcclxuICAgICAgICAgICAgbGVnZW5kOiAnRGVncmVlIEF0dGFpbmVkJywgLy9sYWJlbFxyXG4gICAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZScsXHJcbiAgICAgICAgICAgIGxlZ2VuZE9mZnNldDogMzJcclxuICAgICAgICB9fVxyXG4gICAgICAgIGF4aXNMZWZ0PXt7XHJcbiAgICAgICAgICAgIHRpY2tTaXplOiA1LFxyXG4gICAgICAgICAgICB0aWNrUGFkZGluZzogNSxcclxuICAgICAgICAgICAgdGlja1JvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgICBsZWdlbmQ6ICdDb3VudCcsIC8vbGFiZWxcclxuICAgICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICBsZWdlbmRPZmZzZXQ6IC00MCxcclxuXHQgICAgZm9ybWF0OiBlID0+IE1hdGguZmxvb3IoZSkgPT09IGUgJiYgZVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbGFiZWxTa2lwV2lkdGg9ezEyfVxyXG4gICAgICAgIGxhYmVsU2tpcEhlaWdodD17MTJ9XHJcbiAgICAgICAgbGFiZWxUZXh0Q29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbIFsgJ2RhcmtlcicsIDEuNiBdIF0gfX1cclxuICAgICAgICBsZWdlbmRzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGFGcm9tOiAna2V5cycsXHJcbiAgICAgICAgICAgICAgICBhbmNob3I6ICdib3R0b20tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogMTIwLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogMCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zU3BhY2luZzogMixcclxuICAgICAgICAgICAgICAgIGl0ZW1XaWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgaXRlbUhlaWdodDogMjAsXHJcbiAgICAgICAgICAgICAgICBpdGVtRGlyZWN0aW9uOiAnbGVmdC10by1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICBpdGVtT3BhY2l0eTogMC44NSxcclxuICAgICAgICAgICAgICAgIHN5bWJvbFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgZWZmZWN0czogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb246ICdob3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtT3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXX1cclxuICAgICAgICBhbmltYXRlPXt0cnVlfVxyXG4gICAgICAgIG1vdGlvblN0aWZmbmVzcz17OTB9XHJcbiAgICAgICAgbW90aW9uRGFtcGluZz17MTV9XHJcbiAgICAvPlxyXG5cdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVncmVlRGFzaGJvYXJkR3JhcGhcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCwgdXNlU29ydEJ5LCB1c2VGaWx0ZXJzLCB1c2VQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtdGFibGUnXHJcbmltcG9ydCBSZWFjdEhUTUxUYWJsZVRvRXhjZWwgZnJvbSAncmVhY3QtaHRtbC10YWJsZS10by1leGNlbCc7XHJcblxyXG4vLyBkZWZhdWx0IHNlYXJjaCBib3ggZmlsdGVyXHJcbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIgfSxcclxufSkge1xyXG4gIGNvbnN0IGNvdW50ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpIC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcclxuICAgICAgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtjb3VudH0gcmVjb3Jkcy4uLmB9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgZm9yIHNlbGVjdGluZ1xyXG4vLyBhIHVuaXF1ZSBvcHRpb24gZnJvbSBhIGxpc3RcclxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKVxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgb3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgLy8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcclxuICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VsZWN0PlxyXG4gIClcclxufVxyXG5cclxuLy8gdGhlIHRhYmxlIG1hcmt1cFxyXG5mdW5jdGlvbiBUYWJsZSAoe2NvbHVtbnMsIGRhdGF9KXtcclxuIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gTGV0J3Mgc2V0IHVwIG91ciBkZWZhdWx0IEZpbHRlciBVSVxyXG4gICAgICBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICAgY29uc3Qge1xyXG4gICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgIGZvb3Rlckdyb3VwcyxcclxuICAgICBwcmVwYXJlUm93LFxyXG4gICAgIHBhZ2UsXHJcbiAgICAgcm93cywgXHJcblxyXG4gICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgY2FuTmV4dFBhZ2UsXHJcbiAgICBwYWdlT3B0aW9ucyxcclxuICAgIHBhZ2VDb3VudCxcclxuICAgIGdvdG9QYWdlLFxyXG4gICAgbmV4dFBhZ2UsXHJcbiAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICBzZXRQYWdlU2l6ZSxcclxuICAgIHN0YXRlOiB7IHBhZ2VJbmRleCwgcGFnZVNpemUsIGdyb3VwQnksIGV4cGFuZGVkIH0sXHJcbiAgIH0gPSB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGEsIGRlZmF1bHRDb2x1bW4sIGluaXRpYWxTdGF0ZTogeyBwYWdlSW5kZXg6IDAgfSB9LCB1c2VGaWx0ZXJzLCB1c2VHcm91cEJ5LCB1c2VTb3J0QnksIHVzZUV4cGFuZGVkLCB1c2VQYWdpbmF0aW9uKVxyXG5cclxuIHJldHVybihcclxuPGRpdj5cclxuICAgIDxiciAvPlxyXG4gICAgPFJlYWN0SFRNTFRhYmxlVG9FeGNlbFxyXG5cdFx0XHRcdGlkPVwidGVzdC10YWJsZS14bHMtYnV0dG9uXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWItMlwiXHJcblx0XHRcdFx0dGFibGU9XCJkZWdyZWVUYWJsZVwiXHJcblx0XHRcdFx0ZmlsZW5hbWU9XCJkZWdyZWVcIlxyXG5cdFx0XHRcdGJ1dHRvblRleHQ9XCJEb3dubG9hZCBhcyBYTFNcIi8+XHJcbiAgICA8YnIgLz5cclxuICAgPHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZFwiIHsuLi5nZXRUYWJsZVByb3BzKCl9IGlkPVwiZGVncmVlVGFibGVcIj5cclxuICAgICAgIDx0aGVhZD5cclxuICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICA8dGhcclxuXHRcdC8vIHNvcnRpbmcgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG5cdFx0IDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICfilrwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ+KWsidcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdCAgPGRpdj57Y29sdW1uLmNhbkZpbHRlciA/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpIDogbnVsbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICkpfVxyXG4gICAgICAgPC90aGVhZD5cclxuICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgIHtwYWdlLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXMsIGxldCdzIGNvbG9yIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2VsbCBkZXBlbmRpbmcgb24gd2hhdCB0eXBlIGl0IGlzIGdpdmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSB1c2VHcm91cEJ5IGhvb2tcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VsbC5pc0dyb3VwZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjMGFmZjAwODInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZmE1MDA3OCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZjAwMDA0MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn4pa8JyA6ICfilronfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcpfSAoe3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJylcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICA8L3Rib2R5PlxyXG5cdDx0Zm9vdD5cclxuICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChncm91cCA9PiAoXHJcbiAgICAgICAgICA8dHIgey4uLmdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgIHtncm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgIDx0ZCBcclxuXHRcdHsuLi5jb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoKX0+XHJcblx0XHR7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICdDbGljayB0byBVbmdyb3VwICcgOiAnQ2xpY2sgdG8gR3JvdXAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblx0XHRcclxuXHRcdHtjb2x1bW4ucmVuZGVyKCdGb290ZXInKX1cclxuXHQgICAgICA8L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGZvb3Q+XHJcbiAgICAgPC90YWJsZT5cclxuXHJcblx0XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7JzwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPj4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBQYWdleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0dGFibGV7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRvdmVyZmxvdzogeDtcclxuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcbjwvZGl2PlxyXG4gKVxyXG4gIFxyXG59XHJcbiBcclxuXHJcbi8vIGNvbmZpZ3VyZSBjb2x1bW5zLCBwb3B1bGF0ZSBjZWxscywgcmVuZGVyIHRhYmxlXHJcbiBmdW5jdGlvbiBEZWdyZWVBbmFseXRpY3NUYWJsZShwcm9wcykge1xyXG4gICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxyXG4gXHJcbiAgIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgICgpID0+IFtcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnTmFtZSBvZiBGYWN1bHR5JyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2wxJywgLy8gYWNjZXNzb3IgaXMgdGhlIFwia2V5XCIgaW4gdGhlIGRhdGEsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IE5hbWVzYCxcclxuXHQgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdEZWdyZWUnLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDInLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG5cdCBkaXNhYmxlU29ydEJ5OiB0cnVlXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBIZWFkZXI6ICdEZWdyZWUgVHlwZScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMycsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnRGF0ZSBFYXJuZWQgKGNsaWNrIHRvIHNvcnQpJyxcclxuXHQgRm9vdGVyOiAnJyxcclxuICAgICAgICAgYWNjZXNzb3I6ICdjb2w0JyxcclxuXHQgc29ydEJ5OiAnZGF0ZXRpbWUnLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgZGlzYWJsZUZpbHRlcnM6IHRydWVcclxuICAgICAgIH1cclxuICAgICBdLFxyXG4gICAgIFtdXHJcbiAgIClcclxuIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPiBcclxuICAgKVxyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVncmVlQW5hbHl0aWNzVGFibGVcclxuIiwiaW1wb3J0IEVtcGxveW1lbnRBbmFseXRpY3NUYWJsZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudF9kYXNoYm9hcmRfdGFibGUnXHJcbmltcG9ydCBFbXBsb3ltZW50RGFzaGJvYXJkR3JhcGggZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2VtcGxveW1lbnQtc3RhdHVzL2VtcGxveW1lbnRfZGFzaGJvYXJkX2dyYXBoJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gRW1wbG95bWVudFN0YXR1cyhwcm9wcyl7XHJcblx0bGV0IGVtcExpc3QgPSBwcm9wcy5jaGlsZHJlblxyXG5cclxuXHRsZXQgY2hlbWZ0Q291bnQgPSAwXHJcblx0bGV0IGNoZW1wdENvdW50ID0gMFxyXG5cdGxldCBjaGVtbGVjQ291bnQgPSAwXHJcblxyXG5cdGxldCBtY3N1ZnRDb3VudCA9IDBcclxuXHRsZXQgbWNzdXB0Q291bnQgPSAwXHJcblx0bGV0IG1jc3VsZWNDb3VudCA9IDBcclxuXHJcblx0bGV0IHA2R2VvZnRDb3VudCA9IDBcclxuXHRsZXQgcDZHZW9wdENvdW50ID0gMFxyXG5cdGxldCBwNkdlb2xlY0NvdW50ID0gMFxyXG5cclxuXHRsZXQgdGFibGVEYXRhID0gW11cclxuXHJcblx0bGV0IHVuaXRJZFxyXG5cdGxldCBzdGFydERhdGVcclxuXHRsZXQgZW5kRGF0ZVxyXG5cdFxyXG5cdGlmKGVtcExpc3QpIHtcclxuXHRcdGVtcExpc3QuZm9yRWFjaChhc3luYyAoZSkgPT4ge1xyXG5cdFx0XHRpZihlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGF0dXMgPT0gJ0Z1bGwtdGltZScpIHtcclxuXHRcdFx0XHRpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkgY2hlbWZ0Q291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDIpIG1jc3VmdENvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAzKSBwNkdlb2Z0Q291bnQrK1xyXG5cdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhdHVzID09ICdMZWN0dXJlcicpIHtcclxuXHRcdFx0XHRpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMSkgY2hlbWxlY0NvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSBtY3N1bGVjQ291bnQrK1xyXG5cdFx0XHRcdGVsc2UgaWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDMpIHA2R2VvbGVjQ291bnQrK1xyXG5cdFx0XHR9IGVsc2UgaWYoZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uc3RhdHVzID09ICdQYXJ0LXRpbWUnKSB7XHJcblx0XHRcdFx0aWYoZS5mYWN1bHR5X3VuaXQudW5pdElkID09IDEpIGNoZW1wdENvdW50KytcclxuXHRcdFx0XHRlbHNlIGlmKGUuZmFjdWx0eV91bml0LnVuaXRJZCA9PSAyKSBtY3N1cHRDb3VudCsrXHJcblx0XHRcdFx0ZWxzZSBpZihlLmZhY3VsdHlfdW5pdC51bml0SWQgPT0gMykgcDZHZW9wdENvdW50KytcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXdhaXQgdGFibGVEYXRhLnB1c2goe1xyXG5cdFx0XHRcdGNvbDE6IGUubGFzdE5hbWUgKyAnLCAnICsgZS5maXJzdE5hbWUsXHJcblx0XHRcdFx0Y29sMjogZS5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uZmFjdWx0eV9lbXBsb3ltZW50X3Bvc2l0aW9uLnBvc2l0aW9uLFxyXG5cdFx0XHRcdGNvbDM6IGUuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLnN0YXR1cyxcclxuXHRcdFx0XHRjb2w0OiBlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5jYXRlZ29yeSxcclxuXHRcdFx0XHRjb2w1OiBlLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5zdGFydERhdGVcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRjb25zdCBncmFwaERhdGEgPSBbXHJcblx0XHR7XHJcblx0XHQgIFwiRW1wbG95bWVudFN0YXR1c1wiOiBcIlBhcnQtdGltZVwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdXB0Q291bnQsXHJcblx0XHQgIFwiTUNTVUNvbG9yXCI6IFwiaHNsKDEwOSwgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtcHRDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMTUxLCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9wdENvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDE3NywgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkVtcGxveW1lbnRTdGF0dXNcIjogXCJGdWxsLXRpbWVcIixcclxuXHRcdCAgXCJNQ1NVXCI6IG1jc3VmdENvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCg2NywgNzAlLCA1MCUpXCIsXHJcblx0XHQgIFwiQ2hlbVwiOiBjaGVtZnRDb3VudCxcclxuXHRcdCAgXCJDaGVtQ29sb3JcIjogXCJoc2woMjE1LCA3MCUsIDUwJSlcIixcclxuXHRcdCAgXCJQaHlzaWNzL0dlb2xvZ3lcIjogcDZHZW9mdENvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDI0NCwgNzAlLCA1MCUpXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBcIkVtcGxveW1lbnRTdGF0dXNcIjogXCJMZWN0dXJlclwiLFxyXG5cdFx0ICBcIk1DU1VcIjogbWNzdWxlY0NvdW50LFxyXG5cdFx0ICBcImhvdCBkb2dDb2xvclwiOiBcImhzbCgyMzQsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIkNoZW1cIjogY2hlbWxlY0NvdW50LFxyXG5cdFx0ICBcIkNoZW1Db2xvclwiOiBcImhzbCgzMDIsIDcwJSwgNTAlKVwiLFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neVwiOiBwNkdlb2xlY0NvdW50LFxyXG5cdFx0ICBcIlBoeXNpY3MvR2VvbG9neUNvbG9yXCI6IFwiaHNsKDE3OCwgNzAlLCA1MCUpXCIsXHJcblx0XHR9XHJcblx0XVxyXG5cdFxyXG5cdGlmKHByb3BzLnF1ZXJ5TGlzdC5lbXBsb3ltZW50ID09IDEpIHtcclxuXHRcdHVuaXRJZCA9IHByb3BzLnF1ZXJ5TGlzdC51bml0SWRcclxuXHRcdHN0YXJ0RGF0ZSA9IHByb3BzLnF1ZXJ5TGlzdC5zdGFydERhdGVcclxuXHRcdGVuZERhdGUgPSBwcm9wcy5xdWVyeUxpc3QuZW5kRGF0ZVxyXG5cdH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxoMyBhbGlnbiA9IFwiY2VudGVyXCI+RW1wbG95bWVudCBTdGF0dXM8L2gzPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDMgJiZcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkVtcERlcHRVbml0XCI+IERlcGFydG1lbnQgVW5pdCA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiRW1wRGVwdFVuaXRcIiBpZD1cIkVtcERlcHRVbml0XCIgZGVmYXVsdFZhbHVlPXt1bml0SWR9PlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwXCI+QWxsPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj5DaGVtaXN0cnkgVW5pdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyXCI+TWF0aGVtYXRpY3MgYW5kIENvbXB1dGluZyBTY2llbmNlcyBVbml0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIj5QaHlzaWNzIGFuZCBHZW9sb2d5IFVuaXQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkVtcFN0YXJ0VGltZVBlcmlvZFwiPiBGcm9tICA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcIkVtcFN0YXJ0VGltZVBlcmlvZFwiIGlkPVwiRW1wU3RhcnRUaW1lUGVyaW9kXCIgZGVmYXVsdFZhbHVlPXtzdGFydERhdGV9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJFbXBFbmRUaW1lUGVyaW9kXCI+IFRvIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiRW1wRW5kVGltZVBlcmlvZFwiIGlkPVwiRW1wRW5kVGltZVBlcmlvZFwiIGRlZmF1bHRWYWx1ZT17ZW5kRGF0ZX0vPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IHVuaXRJZCBcclxuXHRcdFx0XHRcdFx0aWYocHJvcHMucm9sZT09MykgdW5pdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VtcERlcHRVbml0JykudmFsdWVcclxuXHRcdFx0XHRcdFx0bGV0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFbXBTdGFydFRpbWVQZXJpb2QnKS52YWx1ZVxyXG5cdFx0XHRcdFx0XHRsZXQgZW5kRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFbXBFbmRUaW1lUGVyaW9kJykudmFsdWVcclxuXHJcblx0XHRcdFx0XHRcdGxldCB1cmwgPSAnL2ZhY3VsdHknXHJcblx0XHRcdFx0XHRcdGxldCBxdWVyeSA9IHtcclxuXHRcdFx0XHRcdFx0XHRlbXBsb3ltZW50OiAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYodW5pdElkICYmIHVuaXRJZCAhPSAwKSBxdWVyeS51bml0SWQgPSB1bml0SWRcclxuXHRcdFx0XHRcdFx0aWYoc3RhcnREYXRlKSBxdWVyeS5zdGFydERhdGUgPSBzdGFydERhdGVcclxuXHRcdFx0XHRcdFx0aWYoZW5kRGF0ZSkgcXVlcnkuZW5kRGF0ZSA9IGVuZERhdGVcclxuXHJcblx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRwYXRobmFtZTogdXJsLFxyXG5cdFx0XHRcdFx0XHRcdHF1ZXJ5XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9fT4gRmlsdGVyPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PG5hdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtZmlsbCBuYXYtanVzdGlmaWVkXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJlbXBsb3ltZW50LWdyYXBoLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNlbXBsb3ltZW50LWdyYXBoXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJlbXBsb3ltZW50LWdyYXBoXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+T3ZlcnZpZXc8L2E+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZW1wbG95bWVudC10YWJsZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjZW1wbG95bWVudC10YWJsZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZW1wbG95bWVudC10YWJsZVwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkZ1bGwgTGlzdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJlbXBsb3ltZW50LWdyYXBoXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZW1wbG95bWVudC1ncmFwaC10YWJcIj48RW1wbG95bWVudERhc2hib2FyZEdyYXBoIGRhdGE9e2dyYXBoRGF0YX0gLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGVcIiBpZD1cImVtcGxveW1lbnQtdGFibGVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJlbXBsb3ltZW50LXRhYmxlLXRhYlwiPjxFbXBsb3ltZW50QW5hbHl0aWNzVGFibGUgZGF0YT17dGFibGVEYXRhfSAvPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRhLm5hdi1pdGVtOmZvY3Vze1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLm5hdi1pdGVtOmhvdmVye1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLmFjdGl2ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95bWVudFN0YXR1cyIsIi8vIGluc3RhbGwgKHBsZWFzZSBtYWtlIHN1cmUgdmVyc2lvbnMgbWF0Y2ggcGVlckRlcGVuZGVuY2llcylcclxuLy8gbnBtIGluc3RhbGwgLS1zYXZlIEBuaXZvL2JhclxyXG5pbXBvcnQgeyBSZXNwb25zaXZlQmFyIH0gZnJvbSAnQG5pdm8vYmFyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIG1ha2Ugc3VyZSBwYXJlbnQgY29udGFpbmVyIGhhdmUgYSBkZWZpbmVkIGhlaWdodCB3aGVuIHVzaW5nXHJcbi8vIHJlc3BvbnNpdmUgY29tcG9uZW50LCBvdGhlcndpc2UgaGVpZ2h0IHdpbGwgYmUgMCBhbmRcclxuLy8gbm8gY2hhcnQgd2lsbCBiZSByZW5kZXJlZC5cclxuLy8gd2Vic2l0ZSBleGFtcGxlcyBzaG93Y2FzZSBtYW55IHByb3BlcnRpZXMsXHJcbi8vIHlvdSdsbCBvZnRlbiB1c2UganVzdCBhIGZldyBvZiB0aGVtLlxyXG5cclxuY2xhc3MgRW1wbG95bWVudERhc2hib2FyZEdyYXBoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0PGRpdiBpZCA9IFwiZ3JhcGhcIiBzdHlsZSA9IHt7aGVpZ2h0OiA3MDB9fT5cclxuXHRcdFx0PFJlc3BvbnNpdmVCYXJcclxuICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGF9XHJcbiAgICAgICAga2V5cz17WyAnTUNTVScsICdDaGVtJywgJ1BoeXNpY3MvR2VvbG9neScgXX1cclxuICAgICAgICBpbmRleEJ5PSdFbXBsb3ltZW50U3RhdHVzJ1xyXG4gICAgICAgIG1hcmdpbj17eyB0b3A6IDUwLCByaWdodDogMTMwLCBib3R0b206IDUwLCBsZWZ0OiA2MCB9fVxyXG4gICAgICAgIHBhZGRpbmc9ezAuM31cclxuICAgICAgICB2YWx1ZVNjYWxlPXt7IHR5cGU6ICdsaW5lYXInIH19XHJcbiAgICAgICAgaW5kZXhTY2FsZT17eyB0eXBlOiAnYmFuZCcsIHJvdW5kOiB0cnVlIH19XHJcbiAgICAgICAgY29sb3JzPXt7IHNjaGVtZTogJ25pdm8nIH19XHJcbiAgICAgICAgYm9yZGVyQ29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbIFsgJ2RhcmtlcicsIDEuNiBdIF0gfX1cclxuICAgICAgICBheGlzVG9wPXtudWxsfVxyXG4gICAgICAgIGF4aXNSaWdodD17bnVsbH1cclxuICAgICAgICBheGlzQm90dG9tPXt7XHJcbiAgICAgICAgICAgIHRpY2tTaXplOiA1LFxyXG4gICAgICAgICAgICB0aWNrUGFkZGluZzogNSxcclxuICAgICAgICAgICAgdGlja1JvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgICBsZWdlbmQ6ICdFbXBsb3ltZW50IFR5cGUvRW1wbG95bWVudCBTdGF0dXMnLCAvL2xhYmVsXHJcbiAgICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgbGVnZW5kT2Zmc2V0OiAzMlxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXhpc0xlZnQ9e3tcclxuICAgICAgICAgICAgdGlja1NpemU6IDUsXHJcbiAgICAgICAgICAgIHRpY2tQYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICB0aWNrUm90YXRpb246IDAsXHJcbiAgICAgICAgICAgIGxlZ2VuZDogJ0NvdW50JywgLy9sYWJlbFxyXG4gICAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZScsXHJcbiAgICAgICAgICAgIGxlZ2VuZE9mZnNldDogLTQwLFxyXG5cdCAgICBmb3JtYXQ6IGUgPT4gTWF0aC5mbG9vcihlKSA9PT0gZSAmJiBlXHJcbiAgICAgICAgfX1cclxuICAgICAgICBsYWJlbFNraXBXaWR0aD17MTJ9XHJcbiAgICAgICAgbGFiZWxTa2lwSGVpZ2h0PXsxMn1cclxuICAgICAgICBsYWJlbFRleHRDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMS42IF0gXSB9fVxyXG4gICAgICAgIGxlZ2VuZHM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YUZyb206ICdrZXlzJyxcclxuICAgICAgICAgICAgICAgIGFuY2hvcjogJ2JvdHRvbS1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAxMjAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAwLFxyXG4gICAgICAgICAgICAgICAgaXRlbXNTcGFjaW5nOiAyLFxyXG4gICAgICAgICAgICAgICAgaXRlbVdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBpdGVtSGVpZ2h0OiAyMCxcclxuICAgICAgICAgICAgICAgIGl0ZW1EaXJlY3Rpb246ICdsZWZ0LXRvLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAwLjg1LFxyXG4gICAgICAgICAgICAgICAgc3ltYm9sU2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICBlZmZlY3RzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogJ2hvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdfVxyXG4gICAgICAgIGFuaW1hdGU9e3RydWV9XHJcbiAgICAgICAgbW90aW9uU3RpZmZuZXNzPXs5MH1cclxuICAgICAgICBtb3Rpb25EYW1waW5nPXsxNX1cclxuICAgIC8+XHJcblx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBsb3ltZW50RGFzaGJvYXJkR3JhcGhcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCwgdXNlU29ydEJ5LCB1c2VGaWx0ZXJzLCB1c2VQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtdGFibGUnXHJcbmltcG9ydCBSZWFjdEhUTUxUYWJsZVRvRXhjZWwgZnJvbSAncmVhY3QtaHRtbC10YWJsZS10by1leGNlbCc7XHJcblxyXG4vLyBkZWZhdWx0IHNlYXJjaCBib3ggZmlsdGVyXHJcbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIgfSxcclxufSkge1xyXG4gIGNvbnN0IGNvdW50ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpIC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcclxuICAgICAgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtjb3VudH0gcmVjb3Jkcy4uLmB9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgZm9yIHNlbGVjdGluZ1xyXG4vLyBhIHVuaXF1ZSBvcHRpb24gZnJvbSBhIGxpc3RcclxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKVxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgb3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgLy8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC0xMlwiXHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcclxuICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VsZWN0PlxyXG4gIClcclxufVxyXG5cclxuLy8gdGhlIHRhYmxlIG1hcmt1cFxyXG5mdW5jdGlvbiBUYWJsZSAoe2NvbHVtbnMsIGRhdGF9KXtcclxuIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gTGV0J3Mgc2V0IHVwIG91ciBkZWZhdWx0IEZpbHRlciBVSVxyXG4gICAgICBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICAgY29uc3Qge1xyXG4gICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgIGZvb3Rlckdyb3VwcyxcclxuICAgICBwcmVwYXJlUm93LFxyXG4gICAgIHBhZ2UsXHJcbiAgICAgcm93cywgXHJcblxyXG4gICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgY2FuTmV4dFBhZ2UsXHJcbiAgICBwYWdlT3B0aW9ucyxcclxuICAgIHBhZ2VDb3VudCxcclxuICAgIGdvdG9QYWdlLFxyXG4gICAgbmV4dFBhZ2UsXHJcbiAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICBzZXRQYWdlU2l6ZSxcclxuICAgIHN0YXRlOiB7IHBhZ2VJbmRleCwgcGFnZVNpemUsIGdyb3VwQnksIGV4cGFuZGVkIH0sXHJcbiAgIH0gPSB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGEsIGRlZmF1bHRDb2x1bW4sIGluaXRpYWxTdGF0ZTogeyBwYWdlSW5kZXg6IDAgfSB9LCB1c2VGaWx0ZXJzLCB1c2VHcm91cEJ5LCB1c2VTb3J0QnksIHVzZUV4cGFuZGVkLCB1c2VQYWdpbmF0aW9uKVxyXG5cclxuIHJldHVybihcclxuPGRpdj5cclxuICAgIDxiciAvPlxyXG4gICAgPFJlYWN0SFRNTFRhYmxlVG9FeGNlbFxyXG5cdFx0XHRcdGlkPVwidGVzdC10YWJsZS14bHMtYnV0dG9uXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWItMlwiXHJcblx0XHRcdFx0dGFibGU9XCJlbXBsb3ltZW50VGFibGVcIlxyXG5cdFx0XHRcdGZpbGVuYW1lPVwiZW1wbG95bWVudFwiXHJcblx0XHRcdFx0YnV0dG9uVGV4dD1cIkRvd25sb2FkIGFzIFhMU1wiLz5cclxuICAgIDxiciAvPlxyXG4gICA8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCIgey4uLmdldFRhYmxlUHJvcHMoKX0gaWQ9XCJlbXBsb3ltZW50VGFibGVcIj5cclxuICAgICAgIDx0aGVhZD5cclxuICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICA8dGhcclxuXHRcdC8vIHNvcnRpbmcgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG5cdFx0IDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICfilrwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ+KWsidcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdCAgPGRpdj57Y29sdW1uLmNhbkZpbHRlciA/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpIDogbnVsbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICkpfVxyXG4gICAgICAgPC90aGVhZD5cclxuICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgIHtwYWdlLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXMsIGxldCdzIGNvbG9yIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2VsbCBkZXBlbmRpbmcgb24gd2hhdCB0eXBlIGl0IGlzIGdpdmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSB1c2VHcm91cEJ5IGhvb2tcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VsbC5pc0dyb3VwZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjMGFmZjAwODInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZmE1MDA3OCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZjAwMDA0MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn4pa8JyA6ICfilronfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcpfSAoe3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJylcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICA8L3Rib2R5PlxyXG5cdDx0Zm9vdD5cclxuICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChncm91cCA9PiAoXHJcbiAgICAgICAgICA8dHIgey4uLmdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgIHtncm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgIDx0ZCBcclxuXHRcdHsuLi5jb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoKX0+XHJcblx0XHR7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICdDbGljayB0byBVbmdyb3VwICcgOiAnQ2xpY2sgdG8gR3JvdXAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblx0XHRcclxuXHRcdHtjb2x1bW4ucmVuZGVyKCdGb290ZXInKX1cclxuXHQgICAgICA8L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGZvb3Q+XHJcbiAgICAgPC90YWJsZT5cclxuXHJcblx0XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7JzwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPj4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBQYWdleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0dGFibGV7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRvdmVyZmxvdzogeDtcclxuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcbjwvZGl2PlxyXG4gKVxyXG4gIFxyXG59XHJcbiBcclxuXHJcbi8vIGNvbmZpZ3VyZSBjb2x1bW5zLCBwb3B1bGF0ZSBjZWxscywgcmVuZGVyIHRhYmxlXHJcbiBmdW5jdGlvbiBFbXBsb3ltZW50QW5hbHl0aWNzVGFibGUocHJvcHMpIHtcclxuICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFcclxuIFxyXG4gICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcclxuICAgICAoKSA9PiBbXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ05hbWUgb2YgRmFjdWx0eScsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMScsIC8vIGFjY2Vzc29yIGlzIHRoZSBcImtleVwiIGluIHRoZSBkYXRhLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBOYW1lc2AsXHJcblx0IEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnUG9zaXRpb24nLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDInLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIEhlYWRlcjogJ1N0YXR1cycsXHJcblx0IEZvb3RlcjogJycsXHJcbiAgICAgICAgIGFjY2Vzc29yOiAnY29sMycsXHJcblx0IGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IEVudHJpZXNgLFxyXG5cdCBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuXHQgZGlzYWJsZVNvcnRCeTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgSGVhZGVyOiAnQ2F0ZWdvcnknLFxyXG5cdCBGb290ZXI6ICcnLFxyXG4gICAgICAgICBhY2Nlc3NvcjogJ2NvbDQnLFxyXG5cdCBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBFbnRyaWVzYCxcclxuXHQgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcblx0IGRpc2FibGVTb3J0Qnk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiAnU3RhcnQgRGF0ZScsXHJcbiAgRm9vdGVyOiAnJyxcclxuICAgICAgICBhY2Nlc3NvcjogJ2NvbDUnLFxyXG4gIGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gRW50cmllc2AsXHJcbiAgZGlzYWJsZUZpbHRlcnM6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICBdLFxyXG4gICAgIFtdXHJcbiAgIClcclxuIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPiBcclxuICAgKVxyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95bWVudEFuYWx5dGljc1RhYmxlXHJcbiIsImltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29va2llcyhyZXEpIHtcclxuICByZXR1cm4gY29va2llLnBhcnNlKHJlcSA/IHJlcS5oZWFkZXJzLmNvb2tpZSB8fCBcIlwiIDogZG9jdW1lbnQuY29va2llKVxyXG59XHJcblxyXG4vLyBjaGVjayB0b2tlbiBpZiBleHBpcmVkXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0V4cGlyZWQodXNlcikge1xyXG4gIGxldCBkZWNvZGVkID0gand0LmRlY29kZSh1c2VyKVxyXG4gIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcclxuICByZXR1cm4gZGVjb2RlZCAmJiBkZWNvZGVkLmV4cCA8IG5vd1xyXG59IiwiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcywgaXNFeHBpcmVkIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIlxyXG5pbXBvcnQgQWNjb21wbGlzaG1lbnRDb3VudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvYWNjb21wbGlzaG1lbnQtY291bnQvYWNjb21wbGlzaG1lbnQtY291bnQnXHJcbmltcG9ydCBFbXBsb3ltZW50U3RhdHVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9lbXBsb3ltZW50LXN0YXR1cy9lbXBsb3ltZW50LXN0YXR1cydcclxuaW1wb3J0IERlZ3JlZUNvdW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9kZWdyZWUvZGVncmVlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmQocHJvcHMpIHsgXHJcblx0aWYocHJvcHMuZGF0YS5yb2xlID09IDEpIHtcclxuXHRcdHJldHVybiAoPExheW91dCB1c2VySWQ9e3Byb3BzLmRhdGEudXNlcklkfSBmYWN1bHR5SWQ9e3Byb3BzLmRhdGEuZmFjdWx0eUlkfSByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IG5hbWU9e3Byb3BzLmRhdGEubmFtZX0gLz4pXHJcblx0fSBlbHNlIGlmKHByb3BzLmRhdGEucm9sZSA9PSAyIHx8IHByb3BzLmRhdGEucm9sZSA9PSAzKXsgXHJcblx0XHRyZXR1cm4gKFxyXG5cdCAgICAgICAgPExheW91dCB1c2VySWQ9e3Byb3BzLmRhdGEudXNlcklkfSBmYWN1bHR5SWQ9e3Byb3BzLmRhdGEuZmFjdWx0eUlkfSByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IG5hbWU9e3Byb3BzLmRhdGEubmFtZX0gYXBwcm92YWxMaXN0PXtwcm9wcy5hcHByb3ZhbExpc3R9IHJvbGVBc3NpZ25tZW50RmxhZz17cHJvcHMucm9sZUFzc2lnbm1lbnRGbGFnfSA+XHJcblxyXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IHt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2dlbmVyYXRlLXJlcG9ydHNcIn19PjxidXR0b24gY2xhc3NOYW1lID0gXCJidG4gYnRuLWluZm9cIj5Eb3dubG9hZCBBbGwgRmFjdWx0eSBJbmZvcm1hdGlvbjwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtZmlsbCBuYXYtanVzdGlmaWVkXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJhY2NvbXBsaXNobWVudC1jb3VudC10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjYWNjb21wbGlzaG1lbnQtY291bnRcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImFjY29tcGxpc2htZW50LWNvdW50XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+QWNjb21wbGlzaG1lbnQgQ291bnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZW1wbG95bWVudC1zdGF0dXMtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2VtcGxveW1lbnQtc3RhdHVzXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJlbXBsb3ltZW50LXN0YXR1c1wiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkVtcGxveW1lbnQgU3RhdHVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImRlZ3JlZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjZGVncmVlXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJkZWdyZWVcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5BdHRhaW5lZCBEZWdyZWVzPC9hPlxyXG4gICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDwvbmF2PlxyXG5cdCAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cImFjY29tcGxpc2htZW50LWNvdW50XCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiYWNjb21wbGlzaG1lbnQtY291bnQtdGFiXCI+PEFjY29tcGxpc2htZW50Q291bnQgcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBxdWVyeUxpc3Q9e3Byb3BzLnF1ZXJ5TGlzdH0+e3Byb3BzLmFjY29tcExpc3R9PC9BY2NvbXBsaXNobWVudENvdW50PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZW1wbG95bWVudC1zdGF0dXNcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJlbXBsb3ltZW50LXN0YXR1cy10YWJcIj48RW1wbG95bWVudFN0YXR1cyByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IHF1ZXJ5TGlzdD17cHJvcHMucXVlcnlMaXN0fT57cHJvcHMuZW1wTGlzdH08L0VtcGxveW1lbnRTdGF0dXM+PC9kaXY+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZGVncmVlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVncmVlLXRhYlwiPjxEZWdyZWVDb3VudCByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IHF1ZXJ5TGlzdD17cHJvcHMucXVlcnlMaXN0fT57cHJvcHMuZWR1Y0xpc3R9PC9EZWdyZWVDb3VudD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRhLm5hdi1pdGVte1xyXG5cdFx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YS5uYXYtaXRlbTpmb2N1c3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YS5uYXYtaXRlbTpob3ZlcntcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YS5hY3RpdmV7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGEjYWNjb21wbGlzaG1lbnQtY291bnQtdGFiLmFjdGl2ZXtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmF2e1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojYWFhO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICA8L0xheW91dD5cclxuXHQgICAgKVx0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHsgXHJcbiAgICBjb25zdCB0b2tlbiA9IHBhcnNlQ29va2llcyhjb250ZXh0LnJlcSlcclxuICAgIGxldCBkYXRhXHJcbiAgICBsZXQgcGVyc29uYWxJbmZvXHJcbiAgICBsZXQgYXBwcm92YWxMaXN0XHJcbiAgICBsZXQgYWNjb21wTGlzdFxyXG4gICAgbGV0IGVtcExpc3RcclxuICAgIGxldCBlZHVjTGlzdFxyXG4gICAgbGV0IHJvbGVBc3NpZ25tZW50RmxhZyA9IGZhbHNlXHJcbiAgICBsZXQgcXVlcnlMaXN0XHJcblxyXG4gICAgaWYgKGNvbnRleHQucmVzKSB7XHJcbiAgICAgICAgaWYgKGlzRXhwaXJlZCh0b2tlbi51c2VyKSB8fCBPYmplY3Qua2V5cyh0b2tlbikubGVuZ3RoID09PSAwICYmIHRva2VuLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGp3dC5kZWNvZGUodG9rZW4udXNlcilcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGZhY3VsdHlJZCA9IGRhdGEuZmFjdWx0eUlkXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbi51c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHBlcnNvbmFsID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvLycgKyBmYWN1bHR5SWQsIGhlYWRlcilcclxuICAgICAgICAgICAgcGVyc29uYWxJbmZvID0gYXdhaXQgcGVyc29uYWwuanNvbigpXHJcblxyXG4gICAgICAgICAgICBsZXQgYXBwcm92YWxVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBmYWN1bHR5SWRcclxuICAgICAgICAgICAgbGV0IGFjY29tcFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvcmVwb3J0cy9hY2NvbXBsaXNobWVudCdcclxuICAgICAgICAgICAgbGV0IGVtcFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvcmVwb3J0cy9lbXBsb3ltZW50J1xyXG4gICAgICAgICAgICBsZXQgZWR1Y1VSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvcmVwb3J0cy9lZHVjYXRpb24nXHJcbiAgICAgICAgICAgIGxldCByb2xlQXNzaWdubWVudFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYmFzaWMtaW5mby91bml0L2Fzc2lnbm1lbnQnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkYXRhLnJvbGUgPT0gMiB8fCBkYXRhLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHByb3ZhbFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICByb2xlQXNzaWdubWVudFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb21wVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIGVtcFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICBlZHVjVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5hY2NvbXBsaXNobWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY29tcFVSTCArPSAnPydcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS51bml0SWQgJiYgY29udGV4dC5xdWVyeS51bml0SWQgIT0gMCkgYWNjb21wVVJMICs9ICd1bml0SWQ9JyArIGNvbnRleHQucXVlcnkudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZW1wbG95bWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcFVSTCArPSAnPydcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS51bml0SWQpIGVtcFVSTCArPSAndW5pdElkPScgKyBjb250ZXh0LnF1ZXJ5LnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmRlZ3JlZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkdWNVUkwgKz0gJz8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkudW5pdElkKSBlZHVjVVJMICs9ICd1bml0SWQ9JyArIGNvbnRleHQucXVlcnkudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuYWNjb21wbGlzaG1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuc3RhcnREYXRlKSBhY2NvbXBVUkwgKz0gJyZzdGFydERhdGU9JyArIGNvbnRleHQucXVlcnkuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5lbmREYXRlKSBhY2NvbXBVUkwgKz0gJyZlbmREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LmVuZERhdGVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmVtcGxveW1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuc3RhcnREYXRlKSBlbXBVUkwgKz0gJyZzdGFydERhdGU9JyArIGNvbnRleHQucXVlcnkuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5lbmREYXRlKSBlbXBVUkwgKz0gJyZlbmREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LmVuZERhdGVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmRlZ3JlZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5zdGFydERhdGUpIGVkdWNVUkwgKz0gJyZzdGFydERhdGU9JyArIGNvbnRleHQucXVlcnkuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5lbmREYXRlKSBlZHVjVVJMICs9ICcmZW5kRGF0ZT0nICsgY29udGV4dC5xdWVyeS5lbmREYXRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcHJvdmFsID0gYXdhaXQgZmV0Y2goYXBwcm92YWxVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGFwcHJvdmFsTGlzdCA9IGF3YWl0IGFwcHJvdmFsLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMaXN0ID0gYXBwcm92YWxMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjY29tcFJlcG9ydHMgPSBhd2FpdCBmZXRjaChhY2NvbXBVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGFjY29tcExpc3QgPSBhd2FpdCBhY2NvbXBSZXBvcnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgYWNjb21wTGlzdCA9IGFjY29tcExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1wUmVwb3J0cyA9IGF3YWl0IGZldGNoKGVtcFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgZW1wTGlzdCA9IGF3YWl0IGVtcFJlcG9ydHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICBlbXBMaXN0ID0gZW1wTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZHVjUmVwb3J0cyA9IGF3YWl0IGZldGNoKGVkdWNVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGVkdWNMaXN0ID0gYXdhaXQgZWR1Y1JlcG9ydHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICBlZHVjTGlzdCA9IGVkdWNMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGVBc3NpZ25tZW50cyA9IGF3YWl0IGZldGNoKHJvbGVBc3NpZ25tZW50VVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBsZXQgcm9sZUFzc2lnbm1lbnRMaXN0ID0gYXdhaXQgcm9sZUFzc2lnbm1lbnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRMaXN0ID0gcm9sZUFzc2lnbm1lbnRMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRhdGEucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocm9sZUFzc2lnbm1lbnRMaXN0ICYmIHJvbGVBc3NpZ25tZW50TGlzdC5hcHByb3ZlclJlbWFya3MgIT0gbnVsbCkgcm9sZUFzc2lnbm1lbnRGbGFnID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAzICYmIHJvbGVBc3NpZ25tZW50TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50RmxhZyA9IHRydWUgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnJvbGUgPT0gMSkgeyBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvZmFjdWx0eS9iYXNpYy1pbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWFuZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdG9rZW46IHRva2VuICYmIHRva2VuLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBwZXJzb25hbEluZm86IHBlcnNvbmFsSW5mby5yZXN1bHQsXHJcbiAgICAgICAgICAgIGFwcHJvdmFsTGlzdDogYXBwcm92YWxMaXN0LFxyXG4gICAgICAgICAgICBhY2NvbXBMaXN0OiBhY2NvbXBMaXN0LFxyXG4gICAgICAgICAgICBlbXBMaXN0LFxyXG4gICAgICAgICAgICBlZHVjTGlzdDogZWR1Y0xpc3QgfHwgbnVsbCxcclxuICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRGbGFnLFxyXG4gICAgICAgICAgICBxdWVyeUxpc3Q6IGNvbnRleHQucXVlcnlcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbml2by9iYXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1odG1sLXRhYmxlLXRvLWV4Y2VsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdGFibGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==