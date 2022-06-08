self["webpackHotUpdate_N_E"]("pages/faculty",{

/***/ "./pages/faculty/index.js":
/*!********************************!*\
  !*** ./pages/faculty/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_unit_head_dashboard_accomplishment_count_accomplishment_count__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/unit-head/dashboard/accomplishment-count/accomplishment-count */ "./components/unit-head/dashboard/accomplishment-count/accomplishment-count.js");
/* harmony import */ var _components_unit_head_dashboard_employment_status_employment_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/unit-head/dashboard/employment-status/employment-status */ "./components/unit-head/dashboard/employment-status/employment-status.js");
/* harmony import */ var _components_unit_head_dashboard_degree_degree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/unit-head/dashboard/degree/degree */ "./components/unit-head/dashboard/degree/degree.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\pages\\faculty\\index.js";







function Dashboard(props) {
  if (props.data.role == 1) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      userId: props.data.userId,
      facultyId: props.data.facultyId,
      role: props.data.role,
      name: props.data.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
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
        className: "jsx-1611322769" + " " + "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-1611322769"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "jsx-1611322769" + " " + "btn btn-info",
          children: "Download All Faculty Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-1611322769"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: "jsx-1611322769",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "nav-tab",
            role: "tablist",
            className: "jsx-1611322769" + " " + "nav nav-tabs nav-fill nav-justified",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: "accomplishment-count-tab",
              "data-toggle": "tab",
              href: "#accomplishment-count",
              role: "tab",
              "aria-controls": "accomplishment-count",
              "aria-selected": "false",
              className: "jsx-1611322769" + " " + "nav-item nav-link",
              children: "Accomplishment Count"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: "employment-status-tab",
              "data-toggle": "tab",
              href: "#employment-status",
              role: "tab",
              "aria-controls": "employment-status",
              "aria-selected": "false",
              className: "jsx-1611322769" + " " + "nav-item nav-link",
              children: "Employment Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              id: "degree-tab",
              "data-toggle": "tab",
              href: "#degree",
              role: "tab",
              "aria-controls": "degree",
              "aria-selected": "false",
              className: "jsx-1611322769" + " " + "nav-item nav-link",
              children: "Attained Degrees"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 16
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 22
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "nav-tabContent",
          className: "jsx-1611322769" + " " + "tab-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "accomplishment-count",
            role: "tabpanel",
            "aria-labelledby": "accomplishment-count-tab",
            className: "jsx-1611322769" + " " + "tab-pane fade show active",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_accomplishment_count_accomplishment_count__WEBPACK_IMPORTED_MODULE_4__.default, {
              role: props.data.role,
              queryList: props.queryList,
              children: props.accompList
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 149
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "employment-status",
            role: "tabpanel",
            "aria-labelledby": "employment-status-tab",
            className: "jsx-1611322769" + " " + "tab-pane fade",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_employment_status_employment_status__WEBPACK_IMPORTED_MODULE_5__.default, {
              role: props.data.role,
              queryList: props.queryList,
              children: props.empList
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 131
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "degree",
            role: "tabpanel",
            "aria-labelledby": "degree-tab",
            className: "jsx-1611322769" + " " + "tab-pane fade",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unit_head_dashboard_degree_degree__WEBPACK_IMPORTED_MODULE_6__.default, {
              role: props.data.role,
              queryList: props.queryList,
              children: props.educList
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 97
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 8
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
          id: "1611322769",
          children: "a.nav-item.jsx-1611322769:focus{background-color:#78b6c2;}a.nav-item.jsx-1611322769:hover{background-color:#78b6c2;}a.active.jsx-1611322769{background-color:#78b6c2;}a#accomplishment-count-tab.active.jsx-1611322769{background-color:#78b6c2;}nav.jsx-1611322769{background-color:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXHBhZ2VzXFxmYWN1bHR5XFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2UsQUFHOEIsQUFHQSxBQUdBLEFBR0EsQUFHSCxzQkFDdEIsR0FaQSxBQUdBLEFBR0EsQUFHQSIsImZpbGUiOiJDOlxcVXNlcnNcXEFqaSBNYWdsYW5xdWVcXERlc2t0b3BcXGRwc20tcWEtcG9ydGFsXFxwYWdlc1xcZmFjdWx0eVxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBpc0V4cGlyZWQgfSBmcm9tIFwiLi4vLi4vaGVscGVyc1wiXHJcbmltcG9ydCBBY2NvbXBsaXNobWVudENvdW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5pdC1oZWFkL2Rhc2hib2FyZC9hY2NvbXBsaXNobWVudC1jb3VudC9hY2NvbXBsaXNobWVudC1jb3VudCdcclxuaW1wb3J0IEVtcGxveW1lbnRTdGF0dXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2VtcGxveW1lbnQtc3RhdHVzL2VtcGxveW1lbnQtc3RhdHVzJ1xyXG5pbXBvcnQgRGVncmVlQ291bnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2RlZ3JlZS9kZWdyZWUnXHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmQocHJvcHMpIHsgXHJcblx0aWYocHJvcHMuZGF0YS5yb2xlID09IDEpIHtcclxuXHRcdHJldHVybiAoPExheW91dCB1c2VySWQ9e3Byb3BzLmRhdGEudXNlcklkfSBmYWN1bHR5SWQ9e3Byb3BzLmRhdGEuZmFjdWx0eUlkfSByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IG5hbWU9e3Byb3BzLmRhdGEubmFtZX0gLz4pXHJcblx0fSBlbHNlIGlmKHByb3BzLmRhdGEucm9sZSA9PSAyIHx8IHByb3BzLmRhdGEucm9sZSA9PSAzKXsgXHJcblx0XHRyZXR1cm4gKFxyXG5cdCAgICAgICAgPExheW91dCB1c2VySWQ9e3Byb3BzLmRhdGEudXNlcklkfSBmYWN1bHR5SWQ9e3Byb3BzLmRhdGEuZmFjdWx0eUlkfSByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IG5hbWU9e3Byb3BzLmRhdGEubmFtZX0gYXBwcm92YWxMaXN0PXtwcm9wcy5hcHByb3ZhbExpc3R9IHJvbGVBc3NpZ25tZW50RmxhZz17cHJvcHMucm9sZUFzc2lnbm1lbnRGbGFnfSA+XHJcblxyXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSBcImJ0biBidG4taW5mb1wiPkRvd25sb2FkIEFsbCBGYWN1bHR5IEluZm9ybWF0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgbmF2LWZpbGwgbmF2LWp1c3RpZmllZFwiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiYWNjb21wbGlzaG1lbnQtY291bnQtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2FjY29tcGxpc2htZW50LWNvdW50XCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJhY2NvbXBsaXNobWVudC1jb3VudFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkFjY29tcGxpc2htZW50IENvdW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImVtcGxveW1lbnQtc3RhdHVzLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNlbXBsb3ltZW50LXN0YXR1c1wiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZW1wbG95bWVudC1zdGF0dXNcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5FbXBsb3ltZW50IFN0YXR1czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJkZWdyZWUtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2RlZ3JlZVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZGVncmVlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+QXR0YWluZWQgRGVncmVlczwvYT5cclxuICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIFx0XHQ8L25hdj5cclxuXHQgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJhY2NvbXBsaXNobWVudC1jb3VudFwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImFjY29tcGxpc2htZW50LWNvdW50LXRhYlwiPjxBY2NvbXBsaXNobWVudENvdW50IHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gcXVlcnlMaXN0PXtwcm9wcy5xdWVyeUxpc3R9Pntwcm9wcy5hY2NvbXBMaXN0fTwvQWNjb21wbGlzaG1lbnRDb3VudD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGVcIiBpZD1cImVtcGxveW1lbnQtc3RhdHVzXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZW1wbG95bWVudC1zdGF0dXMtdGFiXCI+PEVtcGxveW1lbnRTdGF0dXMgcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBxdWVyeUxpc3Q9e3Byb3BzLnF1ZXJ5TGlzdH0+e3Byb3BzLmVtcExpc3R9PC9FbXBsb3ltZW50U3RhdHVzPjwvZGl2PlxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGVcIiBpZD1cImRlZ3JlZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImRlZ3JlZS10YWJcIj48RGVncmVlQ291bnQgcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBxdWVyeUxpc3Q9e3Byb3BzLnF1ZXJ5TGlzdH0+e3Byb3BzLmVkdWNMaXN0fTwvRGVncmVlQ291bnQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0YS5uYXYtaXRlbTpmb2N1c3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YS5uYXYtaXRlbTpob3ZlcntcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YS5hY3RpdmV7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGEjYWNjb21wbGlzaG1lbnQtY291bnQtdGFiLmFjdGl2ZXtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmF2e1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojYWFhO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICA8L0xheW91dD5cclxuXHQgICAgKVx0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHsgXHJcbiAgICBjb25zdCB0b2tlbiA9IHBhcnNlQ29va2llcyhjb250ZXh0LnJlcSlcclxuICAgIGxldCBkYXRhXHJcbiAgICBsZXQgcGVyc29uYWxJbmZvXHJcbiAgICBsZXQgYXBwcm92YWxMaXN0XHJcbiAgICBsZXQgYWNjb21wTGlzdFxyXG4gICAgbGV0IGVtcExpc3RcclxuICAgIGxldCBlZHVjTGlzdFxyXG4gICAgbGV0IHJvbGVBc3NpZ25tZW50RmxhZyA9IGZhbHNlXHJcbiAgICBsZXQgcXVlcnlMaXN0XHJcblxyXG4gICAgaWYgKGNvbnRleHQucmVzKSB7XHJcbiAgICAgICAgaWYgKGlzRXhwaXJlZCh0b2tlbi51c2VyKSB8fCBPYmplY3Qua2V5cyh0b2tlbikubGVuZ3RoID09PSAwICYmIHRva2VuLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGp3dC5kZWNvZGUodG9rZW4udXNlcilcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGZhY3VsdHlJZCA9IGRhdGEuZmFjdWx0eUlkXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbi51c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHBlcnNvbmFsID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvLycgKyBmYWN1bHR5SWQsIGhlYWRlcilcclxuICAgICAgICAgICAgcGVyc29uYWxJbmZvID0gYXdhaXQgcGVyc29uYWwuanNvbigpXHJcblxyXG4gICAgICAgICAgICBsZXQgYXBwcm92YWxVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBmYWN1bHR5SWRcclxuICAgICAgICAgICAgbGV0IGFjY29tcFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvcmVwb3J0cy9hY2NvbXBsaXNobWVudCdcclxuICAgICAgICAgICAgbGV0IGVtcFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvcmVwb3J0cy9lbXBsb3ltZW50J1xyXG4gICAgICAgICAgICBsZXQgZWR1Y1VSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvcmVwb3J0cy9lZHVjYXRpb24nXHJcbiAgICAgICAgICAgIGxldCByb2xlQXNzaWdubWVudFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYmFzaWMtaW5mby91bml0L2Fzc2lnbm1lbnQnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkYXRhLnJvbGUgPT0gMiB8fCBkYXRhLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHByb3ZhbFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICByb2xlQXNzaWdubWVudFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb21wVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIGVtcFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICBlZHVjVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5hY2NvbXBsaXNobWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY29tcFVSTCArPSAnPydcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS51bml0SWQgJiYgY29udGV4dC5xdWVyeS51bml0SWQgIT0gMCkgYWNjb21wVVJMICs9ICd1bml0SWQ9JyArIGNvbnRleHQucXVlcnkudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZW1wbG95bWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcFVSTCArPSAnPydcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS51bml0SWQpIGVtcFVSTCArPSAndW5pdElkPScgKyBjb250ZXh0LnF1ZXJ5LnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmRlZ3JlZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkdWNVUkwgKz0gJz8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkudW5pdElkKSBlZHVjVVJMICs9ICd1bml0SWQ9JyArIGNvbnRleHQucXVlcnkudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuYWNjb21wbGlzaG1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuc3RhcnREYXRlKSBhY2NvbXBVUkwgKz0gJyZzdGFydERhdGU9JyArIGNvbnRleHQucXVlcnkuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5lbmREYXRlKSBhY2NvbXBVUkwgKz0gJyZlbmREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LmVuZERhdGVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmVtcGxveW1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuc3RhcnREYXRlKSBlbXBVUkwgKz0gJyZzdGFydERhdGU9JyArIGNvbnRleHQucXVlcnkuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5lbmREYXRlKSBlbXBVUkwgKz0gJyZlbmREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LmVuZERhdGVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmRlZ3JlZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5zdGFydERhdGUpIGVkdWNVUkwgKz0gJyZzdGFydERhdGU9JyArIGNvbnRleHQucXVlcnkuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5lbmREYXRlKSBlZHVjVVJMICs9ICcmZW5kRGF0ZT0nICsgY29udGV4dC5xdWVyeS5lbmREYXRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcHJvdmFsID0gYXdhaXQgZmV0Y2goYXBwcm92YWxVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGFwcHJvdmFsTGlzdCA9IGF3YWl0IGFwcHJvdmFsLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMaXN0ID0gYXBwcm92YWxMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjY29tcFJlcG9ydHMgPSBhd2FpdCBmZXRjaChhY2NvbXBVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGFjY29tcExpc3QgPSBhd2FpdCBhY2NvbXBSZXBvcnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgYWNjb21wTGlzdCA9IGFjY29tcExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1wUmVwb3J0cyA9IGF3YWl0IGZldGNoKGVtcFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgZW1wTGlzdCA9IGF3YWl0IGVtcFJlcG9ydHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICBlbXBMaXN0ID0gZW1wTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZHVjUmVwb3J0cyA9IGF3YWl0IGZldGNoKGVkdWNVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGVkdWNMaXN0ID0gYXdhaXQgZWR1Y1JlcG9ydHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICBlZHVjTGlzdCA9IGVkdWNMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGVBc3NpZ25tZW50cyA9IGF3YWl0IGZldGNoKHJvbGVBc3NpZ25tZW50VVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBsZXQgcm9sZUFzc2lnbm1lbnRMaXN0ID0gYXdhaXQgcm9sZUFzc2lnbm1lbnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRMaXN0ID0gcm9sZUFzc2lnbm1lbnRMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRhdGEucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocm9sZUFzc2lnbm1lbnRMaXN0ICYmIHJvbGVBc3NpZ25tZW50TGlzdC5hcHByb3ZlclJlbWFya3MgIT0gbnVsbCkgcm9sZUFzc2lnbm1lbnRGbGFnID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAzICYmIHJvbGVBc3NpZ25tZW50TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50RmxhZyA9IHRydWUgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnJvbGUgPT0gMSkgeyBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvZmFjdWx0eS9iYXNpYy1pbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWFuZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdG9rZW46IHRva2VuICYmIHRva2VuLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBwZXJzb25hbEluZm86IHBlcnNvbmFsSW5mby5yZXN1bHQsXHJcbiAgICAgICAgICAgIGFwcHJvdmFsTGlzdDogYXBwcm92YWxMaXN0LFxyXG4gICAgICAgICAgICBhY2NvbXBMaXN0OiBhY2NvbXBMaXN0LFxyXG4gICAgICAgICAgICBlbXBMaXN0LFxyXG4gICAgICAgICAgICBlZHVjTGlzdDogZWR1Y0xpc3QgfHwgbnVsbCxcclxuICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRGbGFnLFxyXG4gICAgICAgICAgICBxdWVyeUxpc3Q6IGNvbnRleHQucXVlcnlcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\pages\\\\faculty\\\\index.js */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }, this);
  }
}

_c = Dashboard;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

var _c;

$RefreshReg$(_c, "Dashboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmFjdWx0eS9pbmRleC5qcyJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJwcm9wcyIsImRhdGEiLCJyb2xlIiwidXNlcklkIiwiZmFjdWx0eUlkIiwibmFtZSIsImFwcHJvdmFsTGlzdCIsInJvbGVBc3NpZ25tZW50RmxhZyIsInF1ZXJ5TGlzdCIsImFjY29tcExpc3QiLCJlbXBMaXN0IiwiZWR1Y0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDekIsTUFBR0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsSUFBbUIsQ0FBdEIsRUFBeUI7QUFDeEIsd0JBQVEsOERBQUMsdURBQUQ7QUFBUSxZQUFNLEVBQUVGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxNQUEzQjtBQUFtQyxlQUFTLEVBQUVILEtBQUssQ0FBQ0MsSUFBTixDQUFXRyxTQUF6RDtBQUFvRSxVQUFJLEVBQUVKLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFyRjtBQUEyRixVQUFJLEVBQUVGLEtBQUssQ0FBQ0MsSUFBTixDQUFXSTtBQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVI7QUFDQSxHQUZELE1BRU8sSUFBR0wsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsSUFBbUIsQ0FBbkIsSUFBd0JGLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLElBQW1CLENBQTlDLEVBQWdEO0FBQ3RELHdCQUNPLDhEQUFDLHVEQUFEO0FBQVEsWUFBTSxFQUFFRixLQUFLLENBQUNDLElBQU4sQ0FBV0UsTUFBM0I7QUFBbUMsZUFBUyxFQUFFSCxLQUFLLENBQUNDLElBQU4sQ0FBV0csU0FBekQ7QUFBb0UsVUFBSSxFQUFFSixLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBckY7QUFBMkYsVUFBSSxFQUFFRixLQUFLLENB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QUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFA7QUF5Q0E7QUFDRDs7S0E5Q1FaLFM7O0FBMEtULCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZhY3VsdHkuMWRiNWJiNjU1NzM3ODg5OGZlMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIGlzRXhwaXJlZCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzXCJcclxuaW1wb3J0IEFjY29tcGxpc2htZW50Q291bnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91bml0LWhlYWQvZGFzaGJvYXJkL2FjY29tcGxpc2htZW50LWNvdW50L2FjY29tcGxpc2htZW50LWNvdW50J1xyXG5pbXBvcnQgRW1wbG95bWVudFN0YXR1cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZW1wbG95bWVudC1zdGF0dXMvZW1wbG95bWVudC1zdGF0dXMnXHJcbmltcG9ydCBEZWdyZWVDb3VudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VuaXQtaGVhZC9kYXNoYm9hcmQvZGVncmVlL2RlZ3JlZSdcclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZChwcm9wcykgeyBcclxuXHRpZihwcm9wcy5kYXRhLnJvbGUgPT0gMSkge1xyXG5cdFx0cmV0dXJuICg8TGF5b3V0IHVzZXJJZD17cHJvcHMuZGF0YS51c2VySWR9IGZhY3VsdHlJZD17cHJvcHMuZGF0YS5mYWN1bHR5SWR9IHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gbmFtZT17cHJvcHMuZGF0YS5uYW1lfSAvPilcclxuXHR9IGVsc2UgaWYocHJvcHMuZGF0YS5yb2xlID09IDIgfHwgcHJvcHMuZGF0YS5yb2xlID09IDMpeyBcclxuXHRcdHJldHVybiAoXHJcblx0ICAgICAgICA8TGF5b3V0IHVzZXJJZD17cHJvcHMuZGF0YS51c2VySWR9IGZhY3VsdHlJZD17cHJvcHMuZGF0YS5mYWN1bHR5SWR9IHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gbmFtZT17cHJvcHMuZGF0YS5uYW1lfSBhcHByb3ZhbExpc3Q9e3Byb3BzLmFwcHJvdmFsTGlzdH0gcm9sZUFzc2lnbm1lbnRGbGFnPXtwcm9wcy5yb2xlQXNzaWdubWVudEZsYWd9ID5cclxuXHJcblx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1pbmZvXCI+RG93bmxvYWQgQWxsIEZhY3VsdHkgSW5mb3JtYXRpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtZmlsbCBuYXYtanVzdGlmaWVkXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJhY2NvbXBsaXNobWVudC1jb3VudC10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjYWNjb21wbGlzaG1lbnQtY291bnRcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImFjY29tcGxpc2htZW50LWNvdW50XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+QWNjb21wbGlzaG1lbnQgQ291bnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZW1wbG95bWVudC1zdGF0dXMtdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2VtcGxveW1lbnQtc3RhdHVzXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJlbXBsb3ltZW50LXN0YXR1c1wiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkVtcGxveW1lbnQgU3RhdHVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cImRlZ3JlZS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjZGVncmVlXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJkZWdyZWVcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5BdHRhaW5lZCBEZWdyZWVzPC9hPlxyXG4gICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgXHRcdDwvbmF2PlxyXG5cdCAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cImFjY29tcGxpc2htZW50LWNvdW50XCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiYWNjb21wbGlzaG1lbnQtY291bnQtdGFiXCI+PEFjY29tcGxpc2htZW50Q291bnQgcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBxdWVyeUxpc3Q9e3Byb3BzLnF1ZXJ5TGlzdH0+e3Byb3BzLmFjY29tcExpc3R9PC9BY2NvbXBsaXNobWVudENvdW50PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZW1wbG95bWVudC1zdGF0dXNcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJlbXBsb3ltZW50LXN0YXR1cy10YWJcIj48RW1wbG95bWVudFN0YXR1cyByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IHF1ZXJ5TGlzdD17cHJvcHMucXVlcnlMaXN0fT57cHJvcHMuZW1wTGlzdH08L0VtcGxveW1lbnRTdGF0dXM+PC9kaXY+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZGVncmVlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVncmVlLXRhYlwiPjxEZWdyZWVDb3VudCByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IHF1ZXJ5TGlzdD17cHJvcHMucXVlcnlMaXN0fT57cHJvcHMuZWR1Y0xpc3R9PC9EZWdyZWVDb3VudD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRhLm5hdi1pdGVtOmZvY3Vze1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhLm5hdi1pdGVtOmhvdmVye1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhLmFjdGl2ZXtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YSNhY2NvbXBsaXNobWVudC1jb3VudC10YWIuYWN0aXZle1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRuYXZ7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiNhYWE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgIDwvTGF5b3V0PlxyXG5cdCAgICApXHRcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkgeyBcclxuICAgIGNvbnN0IHRva2VuID0gcGFyc2VDb29raWVzKGNvbnRleHQucmVxKVxyXG4gICAgbGV0IGRhdGFcclxuICAgIGxldCBwZXJzb25hbEluZm9cclxuICAgIGxldCBhcHByb3ZhbExpc3RcclxuICAgIGxldCBhY2NvbXBMaXN0XHJcbiAgICBsZXQgZW1wTGlzdFxyXG4gICAgbGV0IGVkdWNMaXN0XHJcbiAgICBsZXQgcm9sZUFzc2lnbm1lbnRGbGFnID0gZmFsc2VcclxuICAgIGxldCBxdWVyeUxpc3RcclxuXHJcbiAgICBpZiAoY29udGV4dC5yZXMpIHtcclxuICAgICAgICBpZiAoaXNFeHBpcmVkKHRva2VuLnVzZXIpIHx8IE9iamVjdC5rZXlzKHRva2VuKS5sZW5ndGggPT09IDAgJiYgdG9rZW4uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gand0LmRlY29kZSh0b2tlbi51c2VyKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZmFjdWx0eUlkID0gZGF0YS5mYWN1bHR5SWRcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuLnVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcGVyc29uYWwgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2Jhc2ljLWluZm8vJyArIGZhY3VsdHlJZCwgaGVhZGVyKVxyXG4gICAgICAgICAgICBwZXJzb25hbEluZm8gPSBhd2FpdCBwZXJzb25hbC5qc29uKClcclxuXHJcbiAgICAgICAgICAgIGxldCBhcHByb3ZhbFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYXBwcm92YWwvJyArIGZhY3VsdHlJZFxyXG4gICAgICAgICAgICBsZXQgYWNjb21wVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9yZXBvcnRzL2FjY29tcGxpc2htZW50J1xyXG4gICAgICAgICAgICBsZXQgZW1wVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9yZXBvcnRzL2VtcGxveW1lbnQnXHJcbiAgICAgICAgICAgIGxldCBlZHVjVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9yZXBvcnRzL2VkdWNhdGlvbidcclxuICAgICAgICAgICAgbGV0IHJvbGVBc3NpZ25tZW50VVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvL3VuaXQvYXNzaWdubWVudCdcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRhdGEucm9sZSA9PSAyIHx8IGRhdGEucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmFsVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50VVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhY2NvbXBVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgZW1wVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIGVkdWNVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5yb2xlID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmFjY29tcGxpc2htZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb21wVVJMICs9ICc/J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnVuaXRJZCAmJiBjb250ZXh0LnF1ZXJ5LnVuaXRJZCAhPSAwKSBhY2NvbXBVUkwgKz0gJ3VuaXRJZD0nICsgY29udGV4dC5xdWVyeS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29udGV4dC5xdWVyeS5lbXBsb3ltZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wVVJMICs9ICc/J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnVuaXRJZCkgZW1wVVJMICs9ICd1bml0SWQ9JyArIGNvbnRleHQucXVlcnkudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZGVncmVlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWR1Y1VSTCArPSAnPydcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS51bml0SWQpIGVkdWNVUkwgKz0gJ3VuaXRJZD0nICsgY29udGV4dC5xdWVyeS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5hY2NvbXBsaXNobWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5zdGFydERhdGUpIGFjY29tcFVSTCArPSAnJnN0YXJ0RGF0ZT0nICsgY29udGV4dC5xdWVyeS5zdGFydERhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmVuZERhdGUpIGFjY29tcFVSTCArPSAnJmVuZERhdGU9JyArIGNvbnRleHQucXVlcnkuZW5kRGF0ZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZW1wbG95bWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5zdGFydERhdGUpIGVtcFVSTCArPSAnJnN0YXJ0RGF0ZT0nICsgY29udGV4dC5xdWVyeS5zdGFydERhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmVuZERhdGUpIGVtcFVSTCArPSAnJmVuZERhdGU9JyArIGNvbnRleHQucXVlcnkuZW5kRGF0ZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZGVncmVlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZSkgZWR1Y1VSTCArPSAnJnN0YXJ0RGF0ZT0nICsgY29udGV4dC5xdWVyeS5zdGFydERhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmVuZERhdGUpIGVkdWNVUkwgKz0gJyZlbmREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LmVuZERhdGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwcm92YWwgPSBhd2FpdCBmZXRjaChhcHByb3ZhbFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMaXN0ID0gYXdhaXQgYXBwcm92YWwuanNvbigpXHJcbiAgICAgICAgICAgICAgICBhcHByb3ZhbExpc3QgPSBhcHByb3ZhbExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb21wUmVwb3J0cyA9IGF3YWl0IGZldGNoKGFjY29tcFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgYWNjb21wTGlzdCA9IGF3YWl0IGFjY29tcFJlcG9ydHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICBhY2NvbXBMaXN0ID0gYWNjb21wTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbXBSZXBvcnRzID0gYXdhaXQgZmV0Y2goZW1wVVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBlbXBMaXN0ID0gYXdhaXQgZW1wUmVwb3J0cy5qc29uKClcclxuICAgICAgICAgICAgICAgIGVtcExpc3QgPSBlbXBMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVkdWNSZXBvcnRzID0gYXdhaXQgZmV0Y2goZWR1Y1VSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgZWR1Y0xpc3QgPSBhd2FpdCBlZHVjUmVwb3J0cy5qc29uKClcclxuICAgICAgICAgICAgICAgIGVkdWNMaXN0ID0gZWR1Y0xpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZUFzc2lnbm1lbnRzID0gYXdhaXQgZmV0Y2gocm9sZUFzc2lnbm1lbnRVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGxldCByb2xlQXNzaWdubWVudExpc3QgPSBhd2FpdCByb2xlQXNzaWdubWVudHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICByb2xlQXNzaWdubWVudExpc3QgPSByb2xlQXNzaWdubWVudExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyb2xlQXNzaWdubWVudExpc3QgJiYgcm9sZUFzc2lnbm1lbnRMaXN0LmFwcHJvdmVyUmVtYXJrcyAhPSBudWxsKSByb2xlQXNzaWdubWVudEZsYWcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5yb2xlID09IDMgJiYgcm9sZUFzc2lnbm1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRGbGFnID0gdHJ1ZSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAxKSB7IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9mYWN1bHR5L2Jhc2ljLWluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4gJiYgdG9rZW4sXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIHBlcnNvbmFsSW5mbzogcGVyc29uYWxJbmZvLnJlc3VsdCxcclxuICAgICAgICAgICAgYXBwcm92YWxMaXN0OiBhcHByb3ZhbExpc3QsXHJcbiAgICAgICAgICAgIGFjY29tcExpc3Q6IGFjY29tcExpc3QsXHJcbiAgICAgICAgICAgIGVtcExpc3QsXHJcbiAgICAgICAgICAgIGVkdWNMaXN0OiBlZHVjTGlzdCB8fCBudWxsLFxyXG4gICAgICAgICAgICByb2xlQXNzaWdubWVudEZsYWcsXHJcbiAgICAgICAgICAgIHF1ZXJ5TGlzdDogY29udGV4dC5xdWVyeVxyXG4gICAgICAgIH1cclxuXHR9XHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=