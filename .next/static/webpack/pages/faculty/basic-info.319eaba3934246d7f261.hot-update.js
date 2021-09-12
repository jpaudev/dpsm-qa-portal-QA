self["webpackHotUpdate_N_E"]("pages/faculty/basic-info",{

/***/ "./pages/faculty/basic-info.js":
/*!*************************************!*\
  !*** ./pages/faculty/basic-info.js ***!
  \*************************************/
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
/* harmony import */ var _components_faculty_basic_info_personal_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/faculty/basic-info/personal-info */ "./components/faculty/basic-info/personal-info.js");
/* harmony import */ var _components_faculty_basic_info_education__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/faculty/basic-info/education */ "./components/faculty/basic-info/education.js");
/* harmony import */ var _components_faculty_basic_info_employment_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/faculty/basic-info/employment-history */ "./components/faculty/basic-info/employment-history.js");
/* harmony import */ var _components_faculty_basic_info_work_experience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/faculty/basic-info/work-experience */ "./components/faculty/basic-info/work-experience.js");
/* harmony import */ var _components_faculty_basic_info_teaching_philosophy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/faculty/basic-info/teaching-philosophy */ "./components/faculty/basic-info/teaching-philosophy.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\pages\\faculty\\basic-info.js";








function BasicInfo(props) {
  var educRejected = false;

  if (props.education) {
    props.education.every(function (e) {
      if (e.status == 'Rejected') {
        educRejected = true;
        return false;
      }

      return true;
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    userId: props.data.userId,
    facultyId: props.data.facultyId,
    role: props.data.role,
    name: props.name,
    approvalList: props.approvalList,
    roleAssignmentFlag: props.roleAssignmentFlag,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "jsx-3469655085",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "nav-tab",
        role: "tablist",
        className: "jsx-3469655085" + " " + "nav nav-tabs nav-fill nav-justified",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          id: "personal-info-tab",
          "data-toggle": "tab",
          "data-target": "#personal-info",
          href: "#personal-info",
          role: "tab",
          "aria-controls": "personal-info",
          "aria-selected": "true",
          className: "jsx-3469655085" + " " + "nav-item nav-link active",
          children: "Personal Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          id: "educ-tab",
          "data-toggle": "tab",
          "data-target": "#educ",
          href: "#educ",
          role: "tab",
          "aria-controls": "educ",
          "aria-selected": "false",
          className: "jsx-3469655085" + " " + "nav-item nav-link",
          children: ["Education \xA0", educRejected && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "jsx-3469655085" + " " + "badge badge-danger",
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 38
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          id: "work-exp-tab",
          "data-toggle": "tab",
          "data-target": "#work-exp",
          href: "#work-exp",
          role: "tab",
          "aria-controls": "work-exp",
          "aria-selected": "false",
          className: "jsx-3469655085" + " " + "nav-item nav-link",
          children: "Work Experience"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-3469655085"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
      className: "jsx-3469655085"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "nav-tabContent",
      className: "jsx-3469655085" + " " + "tab-content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "personal-info",
        role: "tabpanel",
        "aria-labelledby": "personal-info-tab",
        className: "jsx-3469655085" + " " + "tab-pane fade show active",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_faculty_basic_info_personal_info__WEBPACK_IMPORTED_MODULE_3__.default, {
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          employmentType: props.employmentType,
          facultyFlag: true,
          children: props.personalInfo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "educ",
        role: "tabpanel",
        "aria-labelledby": "educ-tab",
        className: "jsx-3469655085" + " " + "tab-pane fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_faculty_basic_info_education__WEBPACK_IMPORTED_MODULE_4__.default, {
          name: props.name,
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          employmentType: props.employmentType,
          facultyFlag: true,
          children: props.education
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "work-exp",
        role: "tabpanel",
        "aria-labelledby": "work-exp-tab",
        className: "jsx-3469655085" + " " + "tab-pane fade",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_faculty_basic_info_work_experience__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: props.name,
          token: props.token.user,
          unit: props.unit,
          position: props.position,
          employmentType: props.employmentType,
          employment: props.employment,
          children: props.workExperience
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3469655085",
      children: "a.nav-item.jsx-3469655085:focus{background-color:#78b6c2;}a.nav-item.jsx-3469655085:hover{background-color:#78b6c2;}a.active.jsx-3469655085{background-color:#78b6c2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxCb2RcXGRwc20tcWEtcG9ydGFsXFxwYWdlc1xcZmFjdWx0eVxcYmFzaWMtaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGEsQUFHNEIsQUFHQSxBQUdBLHlCQUx6QixBQUdBLEFBR0EiLCJmaWxlIjoiRDpcXEJvZFxcZHBzbS1xYS1wb3J0YWxcXHBhZ2VzXFxmYWN1bHR5XFxiYXNpYy1pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IFBlcnNvbmFsSW5mbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZhY3VsdHkvYmFzaWMtaW5mby9wZXJzb25hbC1pbmZvJ1xyXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL2VkdWNhdGlvbidcclxuaW1wb3J0IEVtcGxveW1lbnRIaXN0b3J5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL2VtcGxveW1lbnQtaGlzdG9yeSdcclxuaW1wb3J0IFdvcmtFeHBlcmllbmNlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL3dvcmstZXhwZXJpZW5jZSdcclxuaW1wb3J0IFRlYWNoaW5nUGhpbG9zb3BoeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZhY3VsdHkvYmFzaWMtaW5mby90ZWFjaGluZy1waGlsb3NvcGh5J1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIlxyXG5cclxuZnVuY3Rpb24gQmFzaWNJbmZvKHByb3BzKSB7IFxyXG4gICAgbGV0IGVkdWNSZWplY3RlZCA9IGZhbHNlXHJcbiAgICBpZihwcm9wcy5lZHVjYXRpb24pIHtcclxuICAgICAgICBwcm9wcy5lZHVjYXRpb24uZXZlcnkoKGUpID0+IHtcclxuICAgICAgICAgICAgaWYoZS5zdGF0dXMgPT0gJ1JlamVjdGVkJykge1xyXG4gICAgICAgICAgICAgICAgZWR1Y1JlamVjdGVkID0gdHJ1ZSBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHVzZXJJZD17cHJvcHMuZGF0YS51c2VySWR9IGZhY3VsdHlJZD17cHJvcHMuZGF0YS5mYWN1bHR5SWR9IHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gbmFtZT17cHJvcHMubmFtZX0gYXBwcm92YWxMaXN0PXtwcm9wcy5hcHByb3ZhbExpc3R9IHJvbGVBc3NpZ25tZW50RmxhZz17cHJvcHMucm9sZUFzc2lnbm1lbnRGbGFnfSA+XHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIG5hdi1maWxsIG5hdi1qdXN0aWZpZWRcIiBpZD1cIm5hdi10YWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmsgYWN0aXZlXCIgaWQ9XCJwZXJzb25hbC1pbmZvLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgZGF0YS10YXJnZXQ9XCIjcGVyc29uYWwtaW5mb1wiIGhyZWY9XCIjcGVyc29uYWwtaW5mb1wiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwicGVyc29uYWwtaW5mb1wiIGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCI+UGVyc29uYWwgSW5mb3JtYXRpb248L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGlkPVwiZWR1Yy10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGRhdGEtdGFyZ2V0PVwiI2VkdWNcIiBocmVmPVwiI2VkdWNcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cImVkdWNcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBFZHVjYXRpb24gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAge2VkdWNSZWplY3RlZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj4hPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJ3b3JrLWV4cC10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGRhdGEtdGFyZ2V0PVwiI3dvcmstZXhwXCIgaHJlZj1cIiN3b3JrLWV4cFwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwid29yay1leHBcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5Xb3JrIEV4cGVyaWVuY2U8L2E+XHJcblx0XHQgICAgIHsvKjxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJ0ZWFjaGluZy1waGlsb3NvcGh5LXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiN0ZWFjaGluZy1waGlsb3NvcGh5XCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJ0ZWFjaGluZy1waGlsb3NvcGh5XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+VGVhY2hpbmcgUGhpbG9zb3BoeTwvYT4qL30gICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblx0XHQ8YnIgLz5cclxuXHRcdDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgaWQ9XCJuYXYtdGFiQ29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cInBlcnNvbmFsLWluZm9cIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJwZXJzb25hbC1pbmZvLXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbmFsSW5mbyB0b2tlbiA9IHsgcHJvcHMudG9rZW4udXNlciB9IHVuaXQgPSB7cHJvcHMudW5pdH0gcG9zaXRpb249e3Byb3BzLnBvc2l0aW9ufSBlbXBsb3ltZW50VHlwZT17cHJvcHMuZW1wbG95bWVudFR5cGV9IGZhY3VsdHlGbGFnPXt0cnVlfT57IHByb3BzLnBlcnNvbmFsSW5mbyB9PC9QZXJzb25hbEluZm8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGVcIiBpZD1cImVkdWNcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJlZHVjLXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgPEVkdWNhdGlvbiBuYW1lID0geyBwcm9wcy5uYW1lIH0gdG9rZW4gPSB7IHByb3BzLnRva2VuLnVzZXIgfSB1bml0ID0ge3Byb3BzLnVuaXR9IHBvc2l0aW9uPXtwcm9wcy5wb3NpdGlvbn0gZW1wbG95bWVudFR5cGU9e3Byb3BzLmVtcGxveW1lbnRUeXBlfSBmYWN1bHR5RmxhZz17dHJ1ZX0+eyBwcm9wcy5lZHVjYXRpb24gfTwvRWR1Y2F0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGVcIiBpZD1cIndvcmstZXhwXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwid29yay1leHAtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICA8V29ya0V4cGVyaWVuY2UgbmFtZSA9IHsgcHJvcHMubmFtZSB9IHRva2VuID0geyBwcm9wcy50b2tlbi51c2VyIH0gdW5pdCA9IHtwcm9wcy51bml0fSBwb3NpdGlvbj17cHJvcHMucG9zaXRpb259IGVtcGxveW1lbnRUeXBlPXtwcm9wcy5lbXBsb3ltZW50VHlwZX0gZW1wbG95bWVudCA9IHsgcHJvcHMuZW1wbG95bWVudCB9PnsgcHJvcHMud29ya0V4cGVyaWVuY2UgfTwvV29ya0V4cGVyaWVuY2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0ICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInRlYWNoaW5nLXBoaWxvc29waHlcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0ZWFjaGluZy1waGlsb3NvcGh5LXRhYlwiPlxyXG5cdFx0PFRlYWNoaW5nUGhpbG9zb3BoeSAvPlxyXG5cdCAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0PHN0eWxlIGpzeD57YFxyXG5cdFx0YS5uYXYtaXRlbTpmb2N1c3tcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0fVxyXG5cdFx0YS5uYXYtaXRlbTpob3ZlcntcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0fVxyXG5cdFx0YS5hY3RpdmV7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6Izc4YjZjMjtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHRva2VuID0gcGFyc2VDb29raWVzKGNvbnRleHQucmVxKVxyXG5cclxuICAgIGxldCBwZXJzb25hbEluZm9cclxuICAgIGxldCBuYW1lXHJcbiAgICBsZXQgZW1wbG95bWVudFxyXG4gICAgbGV0IGVkdWNhdGlvblxyXG4gICAgbGV0IHdvcmtFeHBlcmllbmNlXHJcbiAgICBsZXQgZGF0YVxyXG4gICAgbGV0IHVuaXRcclxuICAgIGxldCBwb3NpdGlvblxyXG4gICAgbGV0IGVtcGxveW1lbnRUeXBlXHJcbiAgICBsZXQgYXBwcm92YWxMaXN0XHJcbiAgICBsZXQgcm9sZUFzc2lnbm1lbnRGbGFnID0gZmFsc2VcclxuXHJcbiAgICBpZiAoY29udGV4dC5yZXMpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModG9rZW4pLmxlbmd0aCA9PT0gMCAmJiB0b2tlbi5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGp3dC5kZWNvZGUodG9rZW4udXNlcilcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGZhY3VsdHlJZCA9IGRhdGEuZmFjdWx0eUlkXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9iYXNpYy1pbmZvLycgKyBmYWN1bHR5SWQ7XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbi51c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcGVyc29uYWwgPSBhd2FpdCBmZXRjaCh1cmwsIGhlYWRlcilcclxuICAgICAgICAgICAgcGVyc29uYWxJbmZvID0gYXdhaXQgcGVyc29uYWwuanNvbigpXHJcbiAgICAgICAgICAgIG5hbWUgPSBwZXJzb25hbEluZm8ucmVzdWx0Lmxhc3ROYW1lICsgJywgJyArIHBlcnNvbmFsSW5mby5yZXN1bHQuZmlyc3ROYW1lXHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbXBsb3kgPSBhd2FpdCBmZXRjaCh1cmwgKyAnL2VtcGxveW1lbnQnLCBoZWFkZXIpXHJcbiAgICAgICAgICAgIGVtcGxveW1lbnQgPSBhd2FpdCBlbXBsb3kuanNvbigpXHJcbiAgICAgICAgICAgIHVuaXQgPSBlbXBsb3ltZW50LnJlc3VsdC5mYWN1bHR5X3VuaXQudW5pdC51bml0XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gZW1wbG95bWVudC5yZXN1bHQuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLmZhY3VsdHlfZW1wbG95bWVudF9wb3NpdGlvbi5wb3NpdGlvblxyXG4gICAgICAgICAgICBlbXBsb3ltZW50VHlwZSA9IGVtcGxveW1lbnQucmVzdWx0LmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1swXS5mYWN1bHR5X2VtcGxveW1lbnRfcG9zaXRpb24uZW1wbG95bWVudFR5cGVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGVkdWMgPSBhd2FpdCBmZXRjaCh1cmwgKyAnL2VkdWNhdGlvbicsIGhlYWRlcilcclxuICAgICAgICAgICAgZWR1Y2F0aW9uID0gYXdhaXQgZWR1Yy5qc29uKClcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgd29yayA9IGF3YWl0IGZldGNoKHVybCArICcvd29yay1leHAnLCBoZWFkZXIpXHJcbiAgICAgICAgICAgIHdvcmtFeHBlcmllbmNlID0gYXdhaXQgd29yay5qc29uKClcclxuXHJcbiAgICAgICAgICAgIGxldCBhcHByb3ZhbFVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2ZhY3VsdHkvYXBwcm92YWwvJyArIGZhY3VsdHlJZFxyXG4gICAgICAgICAgICBsZXQgcm9sZUFzc2lnbm1lbnRVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9mYWN1bHR5L2Jhc2ljLWluZm8vdW5pdC9hc3NpZ25tZW50J1xyXG4gICAgICAgICAgICBpZihkYXRhLnJvbGUgPT0gMiB8fCBkYXRhLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHByb3ZhbFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICByb2xlQXNzaWdubWVudFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHByb3ZhbCA9IGF3YWl0IGZldGNoKGFwcHJvdmFsVVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBhcHByb3ZhbExpc3QgPSBhd2FpdCBhcHByb3ZhbC5qc29uKClcclxuICAgICAgICAgICAgICAgIGFwcHJvdmFsTGlzdCA9IGFwcHJvdmFsTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb2xlQXNzaWdubWVudHMgPSBhd2FpdCBmZXRjaChyb2xlQXNzaWdubWVudFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJvbGVBc3NpZ25tZW50TGlzdCA9IGF3YWl0IHJvbGVBc3NpZ25tZW50cy5qc29uKClcclxuICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50TGlzdCA9IHJvbGVBc3NpZ25tZW50TGlzdC5yZXN1bHRcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocm9sZUFzc2lnbm1lbnRMaXN0WzBdLmZhY3VsdHlfdW5pdF9hc3NpZ25tZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJvbGVBc3NpZ25tZW50TGlzdFswXS5mYWN1bHR5X3VuaXRfYXNzaWdubWVudC5hcHByb3ZlclJlbWFya3MgIT0gbnVsbCkgcm9sZUFzc2lnbm1lbnRGbGFnID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50TGlzdC5ldmVyeSgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlLmZhY3VsdHlfdW5pdF9hc3NpZ25tZW50ICE9IG51bGwgJiYgIWUuZmFjdWx0eV91bml0X2Fzc2lnbm1lbnQuYXBwcm92ZXJSZW1hcmtzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlQXNzaWdubWVudEZsYWcgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KSAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAxKSB7XHJcblx0XHRcdFx0YXBwcm92YWxMaXN0ID0gbnVsbFxyXG5cdFx0XHR9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4gJiYgdG9rZW4sXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHVuaXQsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBlbXBsb3ltZW50VHlwZSxcclxuICAgICAgICAgICAgcGVyc29uYWxJbmZvOiBwZXJzb25hbEluZm8ucmVzdWx0LFxyXG4gICAgICAgICAgICBlZHVjYXRpb246IGVkdWNhdGlvbi5yZXN1bHQsXHJcbiAgICAgICAgICAgIHdvcmtFeHBlcmllbmNlOiB3b3JrRXhwZXJpZW5jZS5yZXN1bHQsXHJcbiAgICAgICAgICAgIGVtcGxveW1lbnQ6IGVtcGxveW1lbnQucmVzdWx0LFxyXG4gICAgICAgICAgICBhcHByb3ZhbExpc3Q6IGFwcHJvdmFsTGlzdCxcclxuICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRGbGFnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNpY0luZm9cclxuIl19 */\n/*@ sourceURL=D:\\\\Bod\\\\dpsm-qa-portal\\\\pages\\\\faculty\\\\basic-info.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_c = BasicInfo;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (BasicInfo);

var _c;

$RefreshReg$(_c, "BasicInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmFjdWx0eS9iYXNpYy1pbmZvLmpzIl0sIm5hbWVzIjpbIkJhc2ljSW5mbyIsInByb3BzIiwiZWR1Y1JlamVjdGVkIiwiZWR1Y2F0aW9uIiwiZXZlcnkiLCJlIiwic3RhdHVzIiwiZGF0YSIsInVzZXJJZCIsImZhY3VsdHlJZCIsInJvbGUiLCJuYW1lIiwiYXBwcm92YWxMaXN0Iiwicm9sZUFzc2lnbm1lbnRGbGFnIiwidG9rZW4iLCJ1c2VyIiwidW5pdCIsInBvc2l0aW9uIiwiZW1wbG95bWVudFR5cGUiLCJwZXJzb25hbEluZm8iLCJlbXBsb3ltZW50Iiwid29ya0V4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN0QixNQUFJQyxZQUFZLEdBQUcsS0FBbkI7O0FBQ0EsTUFBR0QsS0FBSyxDQUFDRSxTQUFULEVBQW9CO0FBQ2hCRixTQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCLFVBQUNDLENBQUQsRUFBTztBQUN6QixVQUFHQSxDQUFDLENBQUNDLE1BQUYsSUFBWSxVQUFmLEVBQTJCO0FBQ3ZCSixvQkFBWSxHQUFHLElBQWY7QUFDQSxlQUFPLEtBQVA7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSCxLQU5EO0FBT0g7O0FBRUQsc0JBQ0ksOERBQUMsdURBQUQ7QUFBUSxVQUFNLEVBQUVELEtBQUssQ0FBQ00sSUFBTixDQUFXQyxNQUEzQjtBQUFtQyxhQUFTLEVBQUVQLEtBQUssQ0FBQ00sSUFBTixDQUFXRSxTQUF6RDtBQUFvRSxRQUFJLEVBQUVSLEtBQUssQ0FBQ00sSUFBTixDQUFXRyxJQUFyRjtBQUEyRixRQUFJLEVBQUVULEtBQUssQ0FBQ1UsSUFBdkc7QUFBNkcsZ0JBQVksRUFBRVYsS0FBSyxDQUFDVyxZQUFqSTtBQUErSSxz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QTdFO0FBQUEsNENBQWUsZUFBZjtBQUFBLCtCQUNLLDhEQUFDLG1GQUFEO0FBQWdCLGNBQUksRUFBS0YsS0FBSyxDQUFDVSxJQUEvQjtBQUFzQyxlQUFLLEVBQUtWLEtBQUssQ0FBQ2EsS0FBTixDQUFZQyxJQUE1RDtBQUFtRSxjQUFJLEVBQUlkLEtBQUssQ0FBQ2UsSUFBakY7QUFBdUYsa0JBQVEsRUFBRWYsS0FBSyxDQUFDZ0IsUUFBdkc7QUFBaUgsd0JBQWMsRUFBRWhCLEtBQUssQ0FBQ2lCLGNBQXZJO0FBQXVKLG9CQUFVLEVBQUtqQixLQUFLLENBQUNtQixVQUE1SztBQUFBLG9CQUEyTG5CLEtBQUssQ0FBQ29CO0FBQWpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQ0Q7O0tBdERNckIsUzs7QUFnS1QsK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmFjdWx0eS9iYXNpYy1pbmZvLjMxOWVhYmEzOTM0MjQ2ZDdmMjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgUGVyc29uYWxJbmZvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL3BlcnNvbmFsLWluZm8nXHJcbmltcG9ydCBFZHVjYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vZWR1Y2F0aW9uJ1xyXG5pbXBvcnQgRW1wbG95bWVudEhpc3RvcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vZW1wbG95bWVudC1oaXN0b3J5J1xyXG5pbXBvcnQgV29ya0V4cGVyaWVuY2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vd29yay1leHBlcmllbmNlJ1xyXG5pbXBvcnQgVGVhY2hpbmdQaGlsb3NvcGh5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL3RlYWNoaW5nLXBoaWxvc29waHknXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwiLi4vLi4vaGVscGVyc1wiXHJcblxyXG5mdW5jdGlvbiBCYXNpY0luZm8ocHJvcHMpIHsgXHJcbiAgICBsZXQgZWR1Y1JlamVjdGVkID0gZmFsc2VcclxuICAgIGlmKHByb3BzLmVkdWNhdGlvbikge1xyXG4gICAgICAgIHByb3BzLmVkdWNhdGlvbi5ldmVyeSgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihlLnN0YXR1cyA9PSAnUmVqZWN0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBlZHVjUmVqZWN0ZWQgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdXNlcklkPXtwcm9wcy5kYXRhLnVzZXJJZH0gZmFjdWx0eUlkPXtwcm9wcy5kYXRhLmZhY3VsdHlJZH0gcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBuYW1lPXtwcm9wcy5uYW1lfSBhcHByb3ZhbExpc3Q9e3Byb3BzLmFwcHJvdmFsTGlzdH0gcm9sZUFzc2lnbm1lbnRGbGFnPXtwcm9wcy5yb2xlQXNzaWdubWVudEZsYWd9ID5cclxuICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgbmF2LWZpbGwgbmF2LWp1c3RpZmllZFwiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGluayBhY3RpdmVcIiBpZD1cInBlcnNvbmFsLWluZm8tdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBkYXRhLXRhcmdldD1cIiNwZXJzb25hbC1pbmZvXCIgaHJlZj1cIiNwZXJzb25hbC1pbmZvXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJwZXJzb25hbC1pbmZvXCIgYXJpYS1zZWxlY3RlZD1cInRydWVcIj5QZXJzb25hbCBJbmZvcm1hdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaWQ9XCJlZHVjLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgZGF0YS10YXJnZXQ9XCIjZWR1Y1wiIGhyZWY9XCIjZWR1Y1wiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZWR1Y1wiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVkdWNhdGlvbiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICB7ZWR1Y1JlamVjdGVkICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPiE8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cIndvcmstZXhwLXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgZGF0YS10YXJnZXQ9XCIjd29yay1leHBcIiBocmVmPVwiI3dvcmstZXhwXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJ3b3JrLWV4cFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPldvcmsgRXhwZXJpZW5jZTwvYT5cclxuXHRcdCAgICAgey8qPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBpZD1cInRlYWNoaW5nLXBoaWxvc29waHktdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI3RlYWNoaW5nLXBoaWxvc29waHlcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInRlYWNoaW5nLXBoaWxvc29waHlcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5UZWFjaGluZyBQaGlsb3NvcGh5PC9hPiovfSAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHRcdDxiciAvPlxyXG5cdFx0PGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwicGVyc29uYWwtaW5mb1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cInBlcnNvbmFsLWluZm8tdGFiXCI+XHJcbiAgICAgICAgICAgICAgICA8UGVyc29uYWxJbmZvIHRva2VuID0geyBwcm9wcy50b2tlbi51c2VyIH0gdW5pdCA9IHtwcm9wcy51bml0fSBwb3NpdGlvbj17cHJvcHMucG9zaXRpb259IGVtcGxveW1lbnRUeXBlPXtwcm9wcy5lbXBsb3ltZW50VHlwZX0gZmFjdWx0eUZsYWc9e3RydWV9PnsgcHJvcHMucGVyc29uYWxJbmZvIH08L1BlcnNvbmFsSW5mbz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiZWR1Y1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImVkdWMtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICA8RWR1Y2F0aW9uIG5hbWUgPSB7IHByb3BzLm5hbWUgfSB0b2tlbiA9IHsgcHJvcHMudG9rZW4udXNlciB9IHVuaXQgPSB7cHJvcHMudW5pdH0gcG9zaXRpb249e3Byb3BzLnBvc2l0aW9ufSBlbXBsb3ltZW50VHlwZT17cHJvcHMuZW1wbG95bWVudFR5cGV9IGZhY3VsdHlGbGFnPXt0cnVlfT57IHByb3BzLmVkdWNhdGlvbiB9PC9FZHVjYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwid29yay1leHBcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJ3b3JrLWV4cC10YWJcIj5cclxuICAgICAgICAgICAgICAgIDxXb3JrRXhwZXJpZW5jZSBuYW1lID0geyBwcm9wcy5uYW1lIH0gdG9rZW4gPSB7IHByb3BzLnRva2VuLnVzZXIgfSB1bml0ID0ge3Byb3BzLnVuaXR9IHBvc2l0aW9uPXtwcm9wcy5wb3NpdGlvbn0gZW1wbG95bWVudFR5cGU9e3Byb3BzLmVtcGxveW1lbnRUeXBlfSBlbXBsb3ltZW50ID0geyBwcm9wcy5lbXBsb3ltZW50IH0+eyBwcm9wcy53b3JrRXhwZXJpZW5jZSB9PC9Xb3JrRXhwZXJpZW5jZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwidGVhY2hpbmctcGhpbG9zb3BoeVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cInRlYWNoaW5nLXBoaWxvc29waHktdGFiXCI+XHJcblx0XHQ8VGVhY2hpbmdQaGlsb3NvcGh5IC8+XHJcblx0ICAgIDwvZGl2PiovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHQ8c3R5bGUganN4PntgXHJcblx0XHRhLm5hdi1pdGVtOmZvY3Vze1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHR9XHJcblx0XHRhLm5hdi1pdGVtOmhvdmVye1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YzI7XHJcblx0XHR9XHJcblx0XHRhLmFjdGl2ZXtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjojNzhiNmMyO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBwYXJzZUNvb2tpZXMoY29udGV4dC5yZXEpXHJcblxyXG4gICAgbGV0IHBlcnNvbmFsSW5mb1xyXG4gICAgbGV0IG5hbWVcclxuICAgIGxldCBlbXBsb3ltZW50XHJcbiAgICBsZXQgZWR1Y2F0aW9uXHJcbiAgICBsZXQgd29ya0V4cGVyaWVuY2VcclxuICAgIGxldCBkYXRhXHJcbiAgICBsZXQgdW5pdFxyXG4gICAgbGV0IHBvc2l0aW9uXHJcbiAgICBsZXQgZW1wbG95bWVudFR5cGVcclxuICAgIGxldCBhcHByb3ZhbExpc3RcclxuICAgIGxldCByb2xlQXNzaWdubWVudEZsYWcgPSBmYWxzZVxyXG5cclxuICAgIGlmIChjb250ZXh0LnJlcykge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0b2tlbikubGVuZ3RoID09PSAwICYmIHRva2VuLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gand0LmRlY29kZSh0b2tlbi51c2VyKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZmFjdWx0eUlkID0gZGF0YS5mYWN1bHR5SWRcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9mYWN1bHR5L2Jhc2ljLWluZm8vJyArIGZhY3VsdHlJZDtcclxuICAgICAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuLnVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBwZXJzb25hbCA9IGF3YWl0IGZldGNoKHVybCwgaGVhZGVyKVxyXG4gICAgICAgICAgICBwZXJzb25hbEluZm8gPSBhd2FpdCBwZXJzb25hbC5qc29uKClcclxuICAgICAgICAgICAgbmFtZSA9IHBlcnNvbmFsSW5mby5yZXN1bHQubGFzdE5hbWUgKyAnLCAnICsgcGVyc29uYWxJbmZvLnJlc3VsdC5maXJzdE5hbWVcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVtcGxveSA9IGF3YWl0IGZldGNoKHVybCArICcvZW1wbG95bWVudCcsIGhlYWRlcilcclxuICAgICAgICAgICAgZW1wbG95bWVudCA9IGF3YWl0IGVtcGxveS5qc29uKClcclxuICAgICAgICAgICAgdW5pdCA9IGVtcGxveW1lbnQucmVzdWx0LmZhY3VsdHlfdW5pdC51bml0LnVuaXRcclxuICAgICAgICAgICAgcG9zaXRpb24gPSBlbXBsb3ltZW50LnJlc3VsdC5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3NbMF0uZmFjdWx0eV9lbXBsb3ltZW50X3Bvc2l0aW9uLnBvc2l0aW9uXHJcbiAgICAgICAgICAgIGVtcGxveW1lbnRUeXBlID0gZW1wbG95bWVudC5yZXN1bHQuZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zWzBdLmZhY3VsdHlfZW1wbG95bWVudF9wb3NpdGlvbi5lbXBsb3ltZW50VHlwZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZWR1YyA9IGF3YWl0IGZldGNoKHVybCArICcvZWR1Y2F0aW9uJywgaGVhZGVyKVxyXG4gICAgICAgICAgICBlZHVjYXRpb24gPSBhd2FpdCBlZHVjLmpzb24oKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB3b3JrID0gYXdhaXQgZmV0Y2godXJsICsgJy93b3JrLWV4cCcsIGhlYWRlcilcclxuICAgICAgICAgICAgd29ya0V4cGVyaWVuY2UgPSBhd2FpdCB3b3JrLmpzb24oKVxyXG5cclxuICAgICAgICAgICAgbGV0IGFwcHJvdmFsVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hcHByb3ZhbC8nICsgZmFjdWx0eUlkXHJcbiAgICAgICAgICAgIGxldCByb2xlQXNzaWdubWVudFVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2ZhY3VsdHkvYmFzaWMtaW5mby91bml0L2Fzc2lnbm1lbnQnXHJcbiAgICAgICAgICAgIGlmKGRhdGEucm9sZSA9PSAyIHx8IGRhdGEucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmFsVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50VVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcHJvdmFsID0gYXdhaXQgZmV0Y2goYXBwcm92YWxVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGFwcHJvdmFsTGlzdCA9IGF3YWl0IGFwcHJvdmFsLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMaXN0ID0gYXBwcm92YWxMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGVBc3NpZ25tZW50cyA9IGF3YWl0IGZldGNoKHJvbGVBc3NpZ25tZW50VVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBsZXQgcm9sZUFzc2lnbm1lbnRMaXN0ID0gYXdhaXQgcm9sZUFzc2lnbm1lbnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRMaXN0ID0gcm9sZUFzc2lnbm1lbnRMaXN0LnJlc3VsdFxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyb2xlQXNzaWdubWVudExpc3RbMF0uZmFjdWx0eV91bml0X2Fzc2lnbm1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocm9sZUFzc2lnbm1lbnRMaXN0WzBdLmZhY3VsdHlfdW5pdF9hc3NpZ25tZW50LmFwcHJvdmVyUmVtYXJrcyAhPSBudWxsKSByb2xlQXNzaWdubWVudEZsYWcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRMaXN0LmV2ZXJ5KChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUuZmFjdWx0eV91bml0X2Fzc2lnbm1lbnQgIT0gbnVsbCAmJiAhZS5mYWN1bHR5X3VuaXRfYXNzaWdubWVudC5hcHByb3ZlclJlbWFya3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50RmxhZyA9IHRydWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5yb2xlID09IDEpIHtcclxuXHRcdFx0XHRhcHByb3ZhbExpc3QgPSBudWxsXHJcblx0XHRcdH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbiAmJiB0b2tlbixcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdW5pdCxcclxuICAgICAgICAgICAgcG9zaXRpb24sXHJcbiAgICAgICAgICAgIGVtcGxveW1lbnRUeXBlLFxyXG4gICAgICAgICAgICBwZXJzb25hbEluZm86IHBlcnNvbmFsSW5mby5yZXN1bHQsXHJcbiAgICAgICAgICAgIGVkdWNhdGlvbjogZWR1Y2F0aW9uLnJlc3VsdCxcclxuICAgICAgICAgICAgd29ya0V4cGVyaWVuY2U6IHdvcmtFeHBlcmllbmNlLnJlc3VsdCxcclxuICAgICAgICAgICAgZW1wbG95bWVudDogZW1wbG95bWVudC5yZXN1bHQsXHJcbiAgICAgICAgICAgIGFwcHJvdmFsTGlzdDogYXBwcm92YWxMaXN0LFxyXG4gICAgICAgICAgICByb2xlQXNzaWdubWVudEZsYWdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljSW5mb1xyXG4iXSwic291cmNlUm9vdCI6IiJ9