exports.id = "components_faculty_basic-info_personal-info_js-components_faculty_basic-info_work-experience_js";
exports.ids = ["components_faculty_basic-info_personal-info_js-components_faculty_basic-info_work-experience_js"];
exports.modules = {

/***/ "./components/faculty/basic-info/employment-form.js":
/*!**********************************************************!*\
  !*** ./components/faculty/basic-info/employment-form.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_faculty_basic_info_addEmployment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/faculty/basic-info/addEmployment */ "./services/faculty/basic-info/addEmployment.js");

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\basic-info\\employment-form.js";






class EmploymentForm extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    let WorkDetails = {
      employmentPositionId: "",
      startDate: "",
      endDate: ""
    };
    let positions = [];

    if (this.props.positionsList) {
      this.props.positionsList.forEach(key => {
        positions.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: key.employmentPositionId,
          children: key.position
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this));
      });
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
      initialValues: WorkDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let alert = document.getElementById("workexpalert");
        let res = await (0,_services_faculty_basic_info_addEmployment__WEBPACK_IMPORTED_MODULE_5__.default)(values, this.props.token, this.props.facultyId);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        $("#workexpalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#workexpalert").slideUp(500);
        });
        resetForm();
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/admin/' + this.props.facultyId, '/admin/' + this.props.facultyId);
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          className: "jsx-371132353"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-371132353"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "jsx-371132353",
          children: "Required"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-371132353" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Position[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Position "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              as: "select",
              className: "form-control",
              name: "employmentPositionId",
              id: "employmentPositionId",
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "0",
                className: "jsx-371132353",
                children: "-- SELECT POSITION --"
              }, "0", false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 37
              }, this), positions]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Status[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Status "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              as: "select",
              className: "form-control",
              name: "status",
              id: "status",
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "0",
                className: "jsx-371132353",
                children: "-- SELECT STATUS --"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Full-time",
                className: "jsx-371132353",
                children: "Full-time"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Part-time",
                className: "jsx-371132353",
                children: "Part-time"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Lecturer",
                className: "jsx-371132353",
                children: "Lecturer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 10
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Category[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Category "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              as: "select",
              className: "form-control",
              name: "category",
              id: "category",
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "0",
                className: "jsx-371132353",
                children: "-- SELECT CATEGORY --"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Permanent",
                className: "jsx-371132353",
                children: "Permanent"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Temporary",
                className: "jsx-371132353",
                children: "Temporary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 10
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-3",
            className: "jsx-371132353" + " " + "required-label",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "StartDateEmployment[]",
              className: "jsx-371132353",
              children: " Start Date *"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "startDate",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EndDateEmployment[]",
              className: "jsx-371132353",
              children: " End Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "endDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-371132353"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-371132353" + " " + "btn btn-primary col-md-12",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
          id: "371132353",
          children: "label.required-label.jsx-371132353:after{content:\"*\";color:#f00;}h6.jsx-371132353:before{content:\"* \";color:#f00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXGZhY3VsdHlcXGJhc2ljLWluZm9cXGVtcGxveW1lbnQtZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmUsQUFHZ0IsQUFJQyxZQUhGLENBSUEsVUFIWixDQUlBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXGZhY3VsdHlcXGJhc2ljLWluZm9cXGVtcGxveW1lbnQtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhZGRFbXBsb3ltZW50IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hZGRFbXBsb3ltZW50J1xyXG5cclxuY2xhc3MgRW1wbG95bWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBXb3JrRGV0YWlscyA9IHtcclxuXHRcdFx0ZW1wbG95bWVudFBvc2l0aW9uSWQ6IFwiXCIsXHJcblx0XHRcdHN0YXJ0RGF0ZTogXCJcIixcclxuXHRcdFx0ZW5kRGF0ZTogXCJcIlxyXG5cdFx0fVxyXG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXVxyXG5cclxuICAgICAgICBpZih0aGlzLnByb3BzLnBvc2l0aW9uc0xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3NpdGlvbnNMaXN0LmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSB7a2V5LmVtcGxveW1lbnRQb3NpdGlvbklkfT57a2V5LnBvc2l0aW9ufTwvb3B0aW9uPiAgICBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdHJldHVybihcclxuXHRcdFx0PEZvcm1pa1xyXG5cdFx0XHRcdGluaXRpYWxWYWx1ZXM9e1dvcmtEZXRhaWxzfVxyXG5cdFx0XHRcdG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7cmVzZXRGb3JtfSkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrZXhwYWxlcnRcIilcclxuXHRcdFx0XHRcdGxldCByZXMgPSBhd2FpdCBhZGRFbXBsb3ltZW50KHZhbHVlcywgdGhpcy5wcm9wcy50b2tlbiwgdGhpcy5wcm9wcy5mYWN1bHR5SWQpXHJcblx0XHRcdFx0XHRpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG5cdFx0XHRcdFx0XHRhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcblx0XHRcdFx0XHRcdGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuXHRcdFx0XHRcdFx0YWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuXHRcdFx0XHRcdFx0aWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQkKFwiI3dvcmtleHBhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0JChcIiN3b3JrZXhwYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJlc2V0Rm9ybSgpXHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluLycgKyB0aGlzLnByb3BzLmZhY3VsdHlJZCwgJy9hZG1pbi8nICsgdGhpcy5wcm9wcy5mYWN1bHR5SWQpXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdFx0XHRcdDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblx0XHRcdDxoNj5SZXF1aXJlZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUG9zaXRpb25bXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gUG9zaXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZW1wbG95bWVudFBvc2l0aW9uSWRcIiBpZCA9IFwiZW1wbG95bWVudFBvc2l0aW9uSWRcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIiBrZXkgPSBcIjBcIj4tLSBTRUxFQ1QgUE9TSVRJT04gLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc2l0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU3RhdHVzW11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IFN0YXR1cyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdGF0dXNcIiBpZCA9IFwic3RhdHVzXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+LS0gU0VMRUNUIFNUQVRVUyAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRnVsbC10aW1lXCI+RnVsbC10aW1lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJQYXJ0LXRpbWVcIj5QYXJ0LXRpbWU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkxlY3R1cmVyXCI+TGVjdHVyZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiQ2F0ZWdvcnlbXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gQ2F0ZWdvcnkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiY2F0ZWdvcnlcIiBpZCA9IFwiY2F0ZWdvcnlcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj4tLSBTRUxFQ1QgQ0FURUdPUlkgLS08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlBlcm1hbmVudFwiPlBlcm1hbmVudDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVGVtcG9yYXJ5XCI+VGVtcG9yYXJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlN0YXJ0RGF0ZUVtcGxveW1lbnRbXVwiPiBTdGFydCBEYXRlICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdGFydERhdGVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJFbmREYXRlRW1wbG95bWVudFtdXCI+IEVuZCBEYXRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVuZERhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBjb2wtbWQtMTJcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9PlN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRsYWJlbC5yZXF1aXJlZC1sYWJlbDphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIqXCI7XHJcblx0XHRcdGNvbG9yOiAjZjAwO1xyXG5cdFx0fVxyXG5cdFx0aDY6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OiBcIiogXCI7XHJcblx0XHRcdGNvbG9yOiAjZjAwO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9Gb3JtaWs+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95bWVudEZvcm07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\components\\\\faculty\\\\basic-info\\\\employment-form.js */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmploymentForm);

/***/ }),

/***/ "./components/faculty/basic-info/employment-history.js":
/*!*************************************************************!*\
  !*** ./components/faculty/basic-info/employment-history.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_faculty_basic_info_updateEmployment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/faculty/basic-info/updateEmployment */ "./services/faculty/basic-info/updateEmployment.js");
/* harmony import */ var _services_faculty_basic_info_deleteEmployment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/faculty/basic-info/deleteEmployment */ "./services/faculty/basic-info/deleteEmployment.js");

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\basic-info\\employment-history.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function EmploymentHistory(props) {
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
    employmentInfoId: 0,
    startDate: '',
    endDate: ''
  });
  let empInfoId;
  let content;

  if (props.children != null) {
    content = Object.keys(props.children.faculty_employment_infos).map(key => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].faculty_employment_position.position
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].startDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].endDate || 'Present'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "btn-grp",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#editEmployment",
              onClick: () => {
                empInfoId = props.children.faculty_employment_infos[key].employmentInfoId;
                setKey(props.children.faculty_employment_infos[key].employmentInfoId);
              },
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#deleteEmployment",
              onClick: () => {
                empInfoId = props.children.faculty_employment_infos[key].employmentInfoId;
              },
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }, this)]
      }, props.children.faculty_employment_infos[key].employmentInfoId, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this);
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colSpan: "5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }, this);
  }

  function setKey(x) {
    Object.keys(props.children.faculty_employment_infos).map(key => {
      if (props.children.faculty_employment_infos[key].employmentInfoId == x) {
        setData(props.children.faculty_employment_infos[key]);

        if (props.children.faculty_employment_infos[key].endDate == "" || props.children.faculty_employment_infos[key].endDate == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            endDate: ''
          }));
        }
      }
    });
  }

  function handleInputChange(id, event) {
    setData(_objectSpread(_objectSpread({}, currData), {}, {
      [id]: event.target.value
    }));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "alert alert-success",
      role: "alert",
      id: "employmentalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 7
            }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 28
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 6
          }, this), content]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "editEmployment",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editEmploymentLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "modal-title",
              id: "editEmploymentLabel",
              children: "Update Employment Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "aria-hidden": "true",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "startDate",
                    children: " Start Date "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 10
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "date",
                    className: "form-control",
                    name: "startDate",
                    defaultValue: currData.startDate,
                    onChange: e => handleInputChange("startDate", e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "endDate",
                    children: " End Date "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 10
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "date",
                    className: "form-control",
                    name: "endDate",
                    defaultValue: currData.endDate,
                    onChange: e => handleInputChange("endDate", e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: async () => {
                $('#editEmployment').modal('toggle');
                let alert = document.getElementById("employmentalert");
                let res = await (0,_services_faculty_basic_info_updateEmployment__WEBPACK_IMPORTED_MODULE_5__.default)(currData, props.token, props.facultyId);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#employmentalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#employmentalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/admin/' + props.facultyId);
              },
              children: "Save changes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "deleteEmployment",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteEmploymentLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "modal-title",
              id: "deleteEmploymentLabel",
              children: "Delete Employment Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "aria-hidden": "true",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this employment information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: async () => {
                let alert = document.getElementById("employmentalert");
                $('#deleteEmployment').modal('toggle');
                let res = await (0,_services_faculty_basic_info_deleteEmployment__WEBPACK_IMPORTED_MODULE_6__.default)(empInfoId, props.token, props.facultyId);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#employmentalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#employmentalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/admin/' + props.facultyId, '/admin/' + props.facultyId);
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EmploymentHistory);

/***/ }),

/***/ "./components/faculty/basic-info/personal-info-dependents.js":
/*!*******************************************************************!*\
  !*** ./components/faculty/basic-info/personal-info-dependents.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\basic-info\\personal-info-dependents.js";



 // import addDependent from '../../../services/faculty/basic-info/addDependent'

class PersonalInfoDependents extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor() {
    super();
    this.state = {
      duplicateForms: []
    };
  }

  clone() {
    this.state.duplicateForms.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3678425261",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        className: "jsx-3678425261"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 45
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-3678425261" + " " + "form-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-3678425261" + " " + "form-group col-md-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "DependentName[]",
            className: "jsx-3678425261",
            children: " Name "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "DependentName[]",
            placeholder: "Input name of dependent",
            className: "jsx-3678425261" + " " + "form-control"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-3678425261" + " " + "form-group col-md-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "DependentDateOfBirth[]",
            className: "jsx-3678425261",
            children: " Date of Birth "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "date",
            name: "DependentDateOfBirth[]",
            className: "jsx-3678425261" + " " + "form-control"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-3678425261" + " " + "form-group col-md-4 required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "DependentRelationship[]",
            className: "jsx-3678425261" + " " + "control-label",
            children: " Relationship to User "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "DependentRelationship[]",
            className: "jsx-3678425261" + " " + "form-control"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 18
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 51
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "3678425261",
        children: "hr.jsx-3678425261{border:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXGZhY3VsdHlcXGJhc2ljLWluZm9cXHBlcnNvbmFsLWluZm8tZGVwZW5kZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QndCLEFBR3dDLHVCQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFqaSBNYWdsYW5xdWVcXERlc2t0b3BcXGRwc20tcWEtcG9ydGFsXFxjb21wb25lbnRzXFxmYWN1bHR5XFxiYXNpYy1pbmZvXFxwZXJzb25hbC1pbmZvLWRlcGVuZGVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbi8vIGltcG9ydCBhZGREZXBlbmRlbnQgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZERlcGVuZGVudCdcclxuXHJcbmNsYXNzIFBlcnNvbmFsSW5mb0RlcGVuZGVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkdXBsaWNhdGVGb3JtczogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmR1cGxpY2F0ZUZvcm1zLnB1c2goPGRpdj48aHIgLz48ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlcGVuZGVudE5hbWVbXVwiPiBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIkRlcGVuZGVudE5hbWVbXVwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBuYW1lIG9mIGRlcGVuZGVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlcGVuZGVudERhdGVPZkJpcnRoW11cIj4gRGF0ZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJEZXBlbmRlbnREYXRlT2ZCaXJ0aFtdXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkRlcGVuZGVudFJlbGF0aW9uc2hpcFtdXCI+IFJlbGF0aW9uc2hpcCB0byBVc2VyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIkRlcGVuZGVudFJlbGF0aW9uc2hpcFtdXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBocntcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW1vdmUoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmR1cGxpY2F0ZUZvcm1zLnBvcCgpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgRGVwZW5kZW50RGV0YWlscyA9IHtcclxuICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgYmlydGhEYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICByZWxhdGlvbnNoaXA6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJidXR0b25cIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiIGlkID0gXCJBZGREZXBlbmRlbnRcIiBvbkNsaWNrID0geygpID0+IHRoaXMuY2xvbmUoKX0+IEFkZCBEZXBlbmRlbnQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLWRhbmdlclwiIGlkID0gXCJSZW1vdmVEZXBlbmRlbnRcIiBvbkNsaWNrID0geygpID0+IHRoaXMucmVtb3ZlKCl9PiBSZW1vdmUgYSBSb3cgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlcGVuZGVudE5hbWVbXVwiPiBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJuYW1lXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG5hbWUgb2YgZGVwZW5kZW50XCIgaWQgPSBcIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJEZXBlbmRlbnREYXRlT2ZCaXJ0aFtdXCI+IERhdGUgb2YgQmlydGggPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImJpcnRoRGF0ZVwiIGlkID0gXCJiaXJ0aERhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRGVwZW5kZW50UmVsYXRpb25zaGlwW11cIj4gUmVsYXRpb25zaGlwIHRvIFVzZXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJlbGF0aW9uc2hpcFwiIGlkID0gXCJyZWxhdGlvbnNoaXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkID0gXCJEZXBlbmRlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZHVwbGljYXRlRm9ybXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHR5cGUgPSBcInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIC8vICAgICAvLyApfVxyXG4gICAgICAgICAgICAvLyA8L0Zvcm1paz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbmFsSW5mb0RlcGVuZGVudHMiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\components\\\\faculty\\\\basic-info\\\\personal-info-dependents.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 40
    }, this));
    this.setState({});
  }

  remove() {
    this.state.duplicateForms.pop();
    this.setState({});
  }

  render() {
    let DependentDetails = {
      name: "",
      birthDate: "",
      relationship: ""
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "btn btn-primary",
            id: "AddDependent",
            onClick: () => this.clone(),
            children: " Add Dependent "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 37
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 33
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "btn btn-danger",
            id: "RemoveDependent",
            onClick: () => this.remove(),
            children: " Remove a Row "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 37
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "DependentName[]",
            children: " Name "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 37
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
            className: "form-control",
            type: "text",
            name: "name",
            placeholder: "Input name of dependent",
            id: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 33
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "DependentDateOfBirth[]",
            children: " Date of Birth "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 37
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
            type: "date",
            className: "form-control",
            name: "birthDate",
            id: "birthDate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 33
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-4 required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "control-label",
            htmlFor: "DependentRelationship[]",
            children: " Relationship to User "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 37
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
            className: "form-control",
            type: "text",
            name: "relationship",
            id: "relationship"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 34
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "Dependents",
        children: this.state.duplicateForms
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }, this) //             <button
    //                 type = "submit"
    //                 className = "btn btn-primary"
    //                 disabled = {isSubmitting}
    //             >
    //                 Submit
    //             </button>
    //         </Form>
    //     // )}
    // </Formik>
    ;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PersonalInfoDependents);

/***/ }),

/***/ "./components/faculty/basic-info/personal-info.js":
/*!********************************************************!*\
  !*** ./components/faculty/basic-info/personal-info.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _personal_info_dependents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-info-dependents */ "./components/faculty/basic-info/personal-info-dependents.js");
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers */ "./helpers/index.js");
/* harmony import */ var _services_faculty_basic_info_updateFaculty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/faculty/basic-info/updateFaculty */ "./services/faculty/basic-info/updateFaculty.js");
/* harmony import */ var _services_admin_addFaculty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/admin/addFaculty */ "./services/admin/addFaculty.js");

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\basic-info\\personal-info.js";











function PersonalInfo(props) {
  console.log(props.hasDisabledFields);
  let FacultyDetails;
  let name;
  let dependents;
  let res;
  let positions = [];

  if (props.children != null) {
    FacultyDetails = {
      firstName: props.children.firstName,
      lastName: props.children.lastName,
      middleName: props.children.middleName,
      gender: props.children.gender,
      dateOfBirth: props.children.dateOfBirth,
      placeOfBirth: props.children.placeOfBirth,
      permanentAddress: props.children.permanentAddress,
      presentAddress: props.children.presentAddress,
      mobile: props.children.mobile,
      landline: props.children.landline,
      email: props.children.email,
      upemail: props.email,
      civilStatus: props.children.civilStatus,
      religion: props.children.religion,
      emergencyContactPerson: props.children.emergencyContactPerson,
      emergencyContactNumber: props.children.emergencyContactNumber,
      suffix: props.children.suffix || '',
      faculty_dependents: props.children.faculty_dependents,
      philosophy: props.children.teachingPhilosophy
    };
    name = props.children.lastName + ', ' + props.children.firstName;
    dependents = Object.keys(props.children.faculty_dependents).map(key => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-4 required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "control-label",
            htmlFor: "Dependent",
            children: " Name of Dependent "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "form-control",
            type: "text",
            name: "name",
            defaultValue: props.children.faculty_dependents[key].name,
            disabled: !props.editable,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-4 required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "control-label",
            htmlFor: "DependentDateOfBirth",
            children: " Date of Birth "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "form-control",
            type: "date",
            name: "birthDate",
            defaultValue: props.children.faculty_dependents[key].birthDate,
            disabled: !props.editable,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-4 required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "control-label",
            htmlFor: "DependentRelationship[]",
            children: " Relationship to User "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "form-control",
            type: "text",
            name: "relationship",
            defaultValue: props.children.faculty_dependents[key].relationship,
            disabled: !props.editable,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this);
    });
  } else {
    FacultyDetails = {
      clerk: '',
      firstName: '',
      lastName: '',
      middleName: '',
      gender: 'Male',
      dateOfBirth: '',
      placeOfBirth: '',
      permanentAddress: '',
      presentAddress: '',
      mobile: '',
      landline: '',
      email: '',
      civilStatus: 'single',
      religion: '',
      emergencyContactPerson: '',
      emergencyContactNumber: '',
      suffix: '',
      faculty_dependents: '',
      upemail: '',
      unit: '1',
      employmentPosition: '1',
      startDate: '',
      philosophy: '',
      status: '',
      category: ''
    };
    props.positions.forEach(key => {
      positions.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: key.employmentPositionId,
        children: key.position
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this));
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-2179700803",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      className: "jsx-2179700803",
      children: " Personal Information "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_7__.default, {
      unit: props.unit,
      position: props.position,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
      initialValues: FacultyDetails,
      onSubmit: async (values, token) => {
        if (props.role == 5) {
          res = await (0,_services_admin_addFaculty__WEBPACK_IMPORTED_MODULE_10__.default)(values, props.token);
        } else {
          res = await (0,_services_faculty_basic_info_updateFaculty__WEBPACK_IMPORTED_MODULE_9__.default)(values, props.token);
        }

        let alert = document.getElementById("alert");

        if (res.success == true) {
          alert.className = "alert alert-success";
          values.message = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) values.message = res.error[0].message;else values.message = res.message;
        }

        alert.setAttribute("style", "visibility: visible");
        $("#alert").fadeTo(5000, 500).slideUp(500, function () {
          $("#alert").slideUp(500);
        });

        if (props.role == 5) {
          next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/admin/faculty');

          if (res.success == true) {
            window.setTimeout(function () {
              window.location.href = "/admin";
            }, 5000);
          }
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/faculty/basic-info');
        }
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          role: "alert",
          id: "alert",
          className: "jsx-2179700803",
          children: values.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this), props.editable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "jsx-2179700803",
          children: "Required"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 40
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-2179700803"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "FirstName",
              className: "jsx-2179700803" + " " + "control-label",
              children: " First Name "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "firstName",
              defaultValue: FacultyDetails.firstName,
              disabled: !props.editable,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "MiddleName",
              className: "jsx-2179700803",
              children: " Middle Name "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "middleName",
              defaultValue: FacultyDetails.middleName,
              disabled: !props.editable
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "LastName",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Last Name "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "lastName",
              defaultValue: FacultyDetails.lastName,
              disabled: !props.editable,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Suffix",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Suffix "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "suffix",
              defaultValue: FacultyDetails.suffix,
              disabled: !props.editable
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Sex",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Sex (at birth) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              as: "select",
              className: "form-control",
              name: "gender",
              defaultValue: FacultyDetails.gender,
              disabled: props.hasDisabledFields,
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Male",
                className: "jsx-2179700803",
                children: "Male"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Female",
                className: "jsx-2179700803",
                children: "Female"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "DateOfBirth",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Date of Birth "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "date",
              name: "dateOfBirth",
              defaultValue: FacultyDetails.dateOfBirth,
              disabled: props.hasDisabledFields,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PlaceOfBirth",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Place of Birth "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "placeOfBirth",
              defaultValue: FacultyDetails.placeOfBirth,
              disabled: props.hasDisabledFields,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-2179700803"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-group required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "PresentAddress",
            className: "jsx-2179700803" + " " + "control-label",
            children: " Present Address "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
            className: "form-control",
            type: "text",
            name: "presentAddress",
            defaultValue: FacultyDetails.presentAddress,
            disabled: !props.editable,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-group required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "PermanentAddress",
            className: "jsx-2179700803" + " " + "control-label",
            children: " Permanent Address "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
            className: "form-control",
            type: "text",
            name: "permanentAddress",
            defaultValue: FacultyDetails.permanentAddress,
            disabled: !props.editable,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-6 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "CivilStatus",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Civil Status "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              as: "select",
              className: "form-control",
              name: "civilStatus",
              defaultValue: FacultyDetails.civilStatus,
              disabled: !props.editable,
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "single",
                className: "jsx-2179700803",
                children: "Single"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "married",
                className: "jsx-2179700803",
                children: "Married"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "separated",
                className: "jsx-2179700803",
                children: "Separated (Legally)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "divorced",
                className: "jsx-2179700803",
                children: "Divorced"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "widowed",
                className: "jsx-2179700803",
                children: "Widowed"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Religion",
              className: "jsx-2179700803",
              children: " Religion "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "religion",
              defaultValue: FacultyDetails.religion,
              disabled: !props.editable
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ContactNumber",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Contact Number (Landline) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "tel",
              name: "landline",
              pattern: "[0-9]{10}",
              defaultValue: FacultyDetails.landline,
              disabled: !props.editable
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ContactNumber",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Contact Number (Mobile) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "tel",
              name: "mobile",
              pattern: "[0]{1}[9]{1}[0-9]{9}",
              defaultValue: FacultyDetails.mobile,
              disabled: !props.editable,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EmailAddressAlt",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Personal E-mail Address "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "email",
              name: "email",
              defaultValue: FacultyDetails.email,
              disabled: !props.editable
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "UPEmail",
              className: "jsx-2179700803" + " " + "control-label",
              children: " UP E-mail "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "email",
              name: "upemail",
              defaultValue: FacultyDetails.email,
              disabled: "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-6 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EmergencyContact",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Emergency Contact "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "emergencyContactPerson",
              defaultValue: FacultyDetails.emergencyContactPerson,
              disabled: !props.editable,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-6 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EmergencyContactNumber",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Emergency Contact Number "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "tel",
              name: "emergencyContactNumber",
              pattern: "[0]{1}[9]{1}[0-9]{9}",
              defaultValue: FacultyDetails.emergencyContactNumber,
              disabled: !props.editable,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-12 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "philosophy",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Teaching Philosophy "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              component: "textarea",
              rows: 5,
              name: "philosophy",
              defaultValue: FacultyDetails.philosophy,
              disabled: !props.editable,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-2179700803"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 21
        }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "jsx-2179700803"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            className: "jsx-2179700803",
            children: "Employment Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "EmailAddressAlt",
                className: "jsx-2179700803" + " " + "control-label",
                children: " UP E-mail "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                className: "form-control",
                type: "email",
                name: "upemail",
                defaultValue: FacultyDetails.email,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "Unit",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Unit "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                as: "select",
                className: "form-control",
                name: "unit",
                defaultValue: FacultyDetails.unit,
                required: true,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "1",
                  className: "jsx-2179700803",
                  children: "Chemistry Unit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "2",
                  className: "jsx-2179700803",
                  children: "Mathematical and Computing Sciences Unit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "3",
                  className: "jsx-2179700803",
                  children: "Physics and Geology Unit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "Status",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Status "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                as: "select",
                className: "form-control",
                name: "status",
                defaultValue: FacultyDetails.status,
                required: true,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "Full-time",
                  className: "jsx-2179700803",
                  children: "Full-time"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "Part-time",
                  className: "jsx-2179700803",
                  children: "Part-time"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "Lecturer",
                  className: "jsx-2179700803",
                  children: "Lecturer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "Category",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Category "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                as: "select",
                className: "form-control",
                name: "category",
                defaultValue: FacultyDetails.category,
                required: true,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "Permanent",
                  className: "jsx-2179700803",
                  children: "Permanent"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "Temporary",
                  className: "jsx-2179700803",
                  children: "Temporary"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "EmploymentPosition",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Employment Position "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                as: "select",
                className: "form-control",
                name: "employmentPosition",
                defaultValue: FacultyDetails.employmentPosition,
                required: true,
                children: positions
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "StartDate",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Start Date "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 284,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                className: "form-control",
                type: "date",
                name: "startDate",
                defaultValue: FacultyDetails.StartDate,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 25
        }, this), props.editable && props.role != 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-2179700803" + " " + "btn btn-primary col-md-12",
          children: " Update "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 58
        }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-2179700803" + " " + "btn btn-primary col-md-12",
          children: " Add Faculty "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 40
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-2179700803"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2179700803",
      children: ".form-group.required.jsx-2179700803 .control-label.jsx-2179700803:after{content:\"*\";color:#f00;}h6.jsx-2179700803:before{content:\"* \";color:#f00;}#alert.jsx-2179700803{visibility:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXGZhY3VsdHlcXGJhc2ljLWluZm9cXHBlcnNvbmFsLWluZm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMFNvQixBQUc2QixBQUlDLEFBSUssWUFQUCxDQUlBLEtBSWYsS0FQQSxDQUlBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXGZhY3VsdHlcXGJhc2ljLWluZm9cXHBlcnNvbmFsLWluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFBlcnNvbmFsSW5mb0RlcGVuZGVudHMgZnJvbSAnLi9wZXJzb25hbC1pbmZvLWRlcGVuZGVudHMnXHJcbmltcG9ydCBOYW1lRGlzcGxheSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hbWUtZGlzcGxheSdcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnNcIlxyXG5cclxuaW1wb3J0IHVwZGF0ZUZhY3VsdHkgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL3VwZGF0ZUZhY3VsdHknXHJcbmltcG9ydCBhZGRGYWN1bHR5IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FkbWluL2FkZEZhY3VsdHknXHJcblxyXG5mdW5jdGlvbiBQZXJzb25hbEluZm8ocHJvcHMpIHsgY29uc29sZS5sb2cocHJvcHMuaGFzRGlzYWJsZWRGaWVsZHMpO1xyXG4gICAgbGV0IEZhY3VsdHlEZXRhaWxzXHJcbiAgICBsZXQgbmFtZVxyXG4gICAgbGV0IGRlcGVuZGVudHNcclxuICAgIGxldCByZXNcclxuICAgIGxldCBwb3NpdGlvbnMgPSBbXVxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgIEZhY3VsdHlEZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHByb3BzLmNoaWxkcmVuLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHByb3BzLmNoaWxkcmVuLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICBtaWRkbGVOYW1lOiBwcm9wcy5jaGlsZHJlbi5taWRkbGVOYW1lLFxyXG4gICAgICAgICAgICBnZW5kZXI6IHByb3BzLmNoaWxkcmVuLmdlbmRlcixcclxuICAgICAgICAgICAgZGF0ZU9mQmlydGg6IHByb3BzLmNoaWxkcmVuLmRhdGVPZkJpcnRoLFxyXG4gICAgICAgICAgICBwbGFjZU9mQmlydGg6IHByb3BzLmNoaWxkcmVuLnBsYWNlT2ZCaXJ0aCxcclxuICAgICAgICAgICAgcGVybWFuZW50QWRkcmVzczogcHJvcHMuY2hpbGRyZW4ucGVybWFuZW50QWRkcmVzcyxcclxuICAgICAgICAgICAgcHJlc2VudEFkZHJlc3M6IHByb3BzLmNoaWxkcmVuLnByZXNlbnRBZGRyZXNzLFxyXG4gICAgICAgICAgICBtb2JpbGU6IHByb3BzLmNoaWxkcmVuLm1vYmlsZSxcclxuICAgICAgICAgICAgbGFuZGxpbmU6IHByb3BzLmNoaWxkcmVuLmxhbmRsaW5lLFxyXG4gICAgICAgICAgICBlbWFpbDogcHJvcHMuY2hpbGRyZW4uZW1haWwsXHJcbiAgICAgICAgICAgIHVwZW1haWw6IHByb3BzLmVtYWlsLFxyXG4gICAgICAgICAgICBjaXZpbFN0YXR1czogcHJvcHMuY2hpbGRyZW4uY2l2aWxTdGF0dXMsXHJcbiAgICAgICAgICAgIHJlbGlnaW9uOiBwcm9wcy5jaGlsZHJlbi5yZWxpZ2lvbixcclxuICAgICAgICAgICAgZW1lcmdlbmN5Q29udGFjdFBlcnNvbjogcHJvcHMuY2hpbGRyZW4uZW1lcmdlbmN5Q29udGFjdFBlcnNvbixcclxuICAgICAgICAgICAgZW1lcmdlbmN5Q29udGFjdE51bWJlcjogcHJvcHMuY2hpbGRyZW4uZW1lcmdlbmN5Q29udGFjdE51bWJlcixcclxuICAgICAgICAgICAgc3VmZml4OiBwcm9wcy5jaGlsZHJlbi5zdWZmaXggfHwgJycsXHJcbiAgICAgICAgICAgIGZhY3VsdHlfZGVwZW5kZW50czogcHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9kZXBlbmRlbnRzLFxyXG4gICAgICAgICAgICBwaGlsb3NvcGh5OiBwcm9wcy5jaGlsZHJlbi50ZWFjaGluZ1BoaWxvc29waHlcclxuICAgICAgICB9XHJcbiAgICAgICAgbmFtZSA9IHByb3BzLmNoaWxkcmVuLmxhc3ROYW1lICsgJywgJyArIHByb3BzLmNoaWxkcmVuLmZpcnN0TmFtZVxyXG4gICAgICAgIGRlcGVuZGVudHMgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2RlcGVuZGVudHMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEZXBlbmRlbnRcIj4gTmFtZSBvZiBEZXBlbmRlbnQgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm5hbWVcIiBkZWZhdWx0VmFsdWUgPSB7IHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZGVwZW5kZW50c1trZXldLm5hbWUgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRGVwZW5kZW50RGF0ZU9mQmlydGhcIj4gRGF0ZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiYmlydGhEYXRlXCIgZGVmYXVsdFZhbHVlID0geyBwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2RlcGVuZGVudHNba2V5XS5iaXJ0aERhdGUgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRGVwZW5kZW50UmVsYXRpb25zaGlwW11cIj4gUmVsYXRpb25zaGlwIHRvIFVzZXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJlbGF0aW9uc2hpcFwiIGRlZmF1bHRWYWx1ZSA9IHsgcHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9kZXBlbmRlbnRzW2tleV0ucmVsYXRpb25zaGlwIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBGYWN1bHR5RGV0YWlscyA9IHtcclxuICAgICAgICAgICAgY2xlcms6ICcnLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIG1pZGRsZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICBnZW5kZXI6ICdNYWxlJyxcclxuICAgICAgICAgICAgZGF0ZU9mQmlydGg6ICcnLFxyXG4gICAgICAgICAgICBwbGFjZU9mQmlydGg6ICcnLFxyXG4gICAgICAgICAgICBwZXJtYW5lbnRBZGRyZXNzOiAnJyxcclxuICAgICAgICAgICAgcHJlc2VudEFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBtb2JpbGU6ICcnLFxyXG4gICAgICAgICAgICBsYW5kbGluZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgY2l2aWxTdGF0dXM6ICdzaW5nbGUnLFxyXG4gICAgICAgICAgICByZWxpZ2lvbjogJycsXHJcbiAgICAgICAgICAgIGVtZXJnZW5jeUNvbnRhY3RQZXJzb246ICcnLFxyXG4gICAgICAgICAgICBlbWVyZ2VuY3lDb250YWN0TnVtYmVyOiAnJyxcclxuICAgICAgICAgICAgc3VmZml4OiAnJyxcclxuICAgICAgICAgICAgZmFjdWx0eV9kZXBlbmRlbnRzOiAnJyxcclxuICAgICAgICAgICAgdXBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHVuaXQ6ICcxJyxcclxuICAgICAgICAgICAgZW1wbG95bWVudFBvc2l0aW9uOiAnMScsXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJycsXHJcbiAgICAgICAgICAgIHBoaWxvc29waHk6ICcnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3BzLnBvc2l0aW9ucy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IHtrZXkuZW1wbG95bWVudFBvc2l0aW9uSWR9PntrZXkucG9zaXRpb259PC9vcHRpb24+ICAgIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMiBhbGlnbiA9IFwiY2VudGVyXCI+IFBlcnNvbmFsIEluZm9ybWF0aW9uIDwvaDI+XHJcbiAgICAgICAgPE5hbWVEaXNwbGF5IHVuaXQgPSB7cHJvcHMudW5pdH0gcG9zaXRpb249e3Byb3BzLnBvc2l0aW9ufT57bmFtZX08L05hbWVEaXNwbGF5PlxyXG5cdFx0PEZvcm1pa1xyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtGYWN1bHR5RGV0YWlsc31cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHRva2VuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucm9sZSA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgYWRkRmFjdWx0eSh2YWx1ZXMsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCB1cGRhdGVGYWN1bHR5KHZhbHVlcywgcHJvcHMudG9rZW4pICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLm1lc3NhZ2UgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSB2YWx1ZXMubWVzc2FnZSA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB2YWx1ZXMubWVzc2FnZSA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5yb2xlID09IDUpIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vZmFjdWx0eScpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hZG1pblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycpIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIiBpZD1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZXMubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZWRpdGFibGUgJiYgPGg2PlJlcXVpcmVkPC9oNj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRmlyc3ROYW1lXCI+IEZpcnN0IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJmaXJzdE5hbWVcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmZpcnN0TmFtZSB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIk1pZGRsZU5hbWVcIj4gTWlkZGxlIE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJtaWRkbGVOYW1lXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5taWRkbGVOYW1lIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiTGFzdE5hbWVcIj4gTGFzdCBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibGFzdE5hbWVcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmxhc3ROYW1lIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiU3VmZml4XCI+IFN1ZmZpeCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInN1ZmZpeFwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuc3VmZml4IH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiU2V4XCI+IFNleCAoYXQgYmlydGgpIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZ2VuZGVyXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5nZW5kZXIgfSBkaXNhYmxlZD17cHJvcHMuaGFzRGlzYWJsZWRGaWVsZHN9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1hbGVcIj5NYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiRmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEYXRlT2ZCaXJ0aFwiPiBEYXRlIG9mIEJpcnRoIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiZGF0ZU9mQmlydGhcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmRhdGVPZkJpcnRoIH0gZGlzYWJsZWQ9e3Byb3BzLmhhc0Rpc2FibGVkRmllbGRzfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJQbGFjZU9mQmlydGhcIj4gUGxhY2Ugb2YgQmlydGggPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJwbGFjZU9mQmlydGhcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnBsYWNlT2ZCaXJ0aCB9IGRpc2FibGVkPXtwcm9wcy5oYXNEaXNhYmxlZEZpZWxkc30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIlByZXNlbnRBZGRyZXNzXCI+IFByZXNlbnQgQWRkcmVzcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicHJlc2VudEFkZHJlc3NcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnByZXNlbnRBZGRyZXNzIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiUGVybWFuZW50QWRkcmVzc1wiPiBQZXJtYW5lbnQgQWRkcmVzcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicGVybWFuZW50QWRkcmVzc1wiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMucGVybWFuZW50QWRkcmVzcyB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJDaXZpbFN0YXR1c1wiPiBDaXZpbCBTdGF0dXMgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJjaXZpbFN0YXR1c1wiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuY2l2aWxTdGF0dXMgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJzaW5nbGVcIj5TaW5nbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJtYXJyaWVkXCI+TWFycmllZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcInNlcGFyYXRlZFwiPlNlcGFyYXRlZCAoTGVnYWxseSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJkaXZvcmNlZFwiPkRpdm9yY2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwid2lkb3dlZFwiPldpZG93ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJSZWxpZ2lvblwiPiBSZWxpZ2lvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJyZWxpZ2lvblwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMucmVsaWdpb24gfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJDb250YWN0TnVtYmVyXCI+IENvbnRhY3QgTnVtYmVyIChMYW5kbGluZSkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRlbFwiIG5hbWUgPSBcImxhbmRsaW5lXCIgcGF0dGVybiA9IFwiWzAtOV17MTB9XCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5sYW5kbGluZSB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkNvbnRhY3ROdW1iZXJcIj4gQ29udGFjdCBOdW1iZXIgKE1vYmlsZSkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRlbFwiIG5hbWUgPSBcIm1vYmlsZVwiIHBhdHRlcm4gPSBcIlswXXsxfVs5XXsxfVswLTldezl9XCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5tb2JpbGUgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJFbWFpbEFkZHJlc3NBbHRcIj4gUGVyc29uYWwgRS1tYWlsIEFkZHJlc3MgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImVtYWlsXCIgbmFtZSA9IFwiZW1haWxcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmVtYWlsIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiVVBFbWFpbFwiPiBVUCBFLW1haWwgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImVtYWlsXCIgbmFtZSA9IFwidXBlbWFpbFwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1haWwgfSBkaXNhYmxlZD1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTYgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJFbWVyZ2VuY3lDb250YWN0XCI+IEVtZXJnZW5jeSBDb250YWN0IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZW1lcmdlbmN5Q29udGFjdFBlcnNvblwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1lcmdlbmN5Q29udGFjdFBlcnNvbiB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNiByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkVtZXJnZW5jeUNvbnRhY3ROdW1iZXJcIj4gRW1lcmdlbmN5IENvbnRhY3QgTnVtYmVyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZWxcIiBuYW1lID0gXCJlbWVyZ2VuY3lDb250YWN0TnVtYmVyXCIgcGF0dGVybiA9IFwiWzBdezF9WzldezF9WzAtOV17OX1cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmVtZXJnZW5jeUNvbnRhY3ROdW1iZXIgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTEyIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwicGhpbG9zb3BoeVwiPiBUZWFjaGluZyBQaGlsb3NvcGh5IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBjb21wb25lbnQgPSBcInRleHRhcmVhXCIgcm93cyA9IHs1fSBuYW1lID0gXCJwaGlsb3NvcGh5XCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5waGlsb3NvcGh5IH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPGg1IGFsaWduID0gXCJjZW50ZXJcIj4gRGVwZW5kZW50cyA8L2g1PiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKntkZXBlbmRlbnRzfSovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMucm9sZT09NSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5FbXBsb3ltZW50IEluZm88L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkVtYWlsQWRkcmVzc0FsdFwiPiBVUCBFLW1haWwgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZW1haWxcIiBuYW1lID0gXCJ1cGVtYWlsXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5lbWFpbCB9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiVW5pdFwiPiBVbml0IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJ1bml0XCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy51bml0IH0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCIxXCI+Q2hlbWlzdHJ5IFVuaXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIjJcIj5NYXRoZW1hdGljYWwgYW5kIENvbXB1dGluZyBTY2llbmNlcyBVbml0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCIzXCI+UGh5c2ljcyBhbmQgR2VvbG9neSBVbml0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiU3RhdHVzXCI+IFN0YXR1cyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwic3RhdHVzXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5zdGF0dXMgfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkZ1bGwtdGltZVwiPkZ1bGwtdGltZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiUGFydC10aW1lXCI+UGFydC10aW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJMZWN0dXJlclwiPkxlY3R1cmVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiQ2F0ZWdvcnlcIj4gQ2F0ZWdvcnkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImNhdGVnb3J5XCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5jYXRlZ29yeSB9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiUGVybWFuZW50XCI+UGVybWFuZW50PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJUZW1wb3JhcnlcIj5UZW1wb3Jhcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkVtcGxveW1lbnRQb3NpdGlvblwiPiBFbXBsb3ltZW50IFBvc2l0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJlbXBsb3ltZW50UG9zaXRpb25cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmVtcGxveW1lbnRQb3NpdGlvbiB9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc2l0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiU3RhcnREYXRlXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcInN0YXJ0RGF0ZVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuU3RhcnREYXRlIH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmVkaXRhYmxlICYmIHByb3BzLnJvbGUhPTUgJiYgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBjb2wtbWQtMTJcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9PiBVcGRhdGUgPC9idXR0b24+IH1cclxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLnJvbGU9PTUgJiYgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBjb2wtbWQtMTJcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9PiBBZGQgRmFjdWx0eSA8L2J1dHRvbj4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKnsgcHJvcHMuZmFjdWx0eUZsYWcgJiYgPFBlcnNvbmFsSW5mb0RlcGVuZGVudHMgLz4gfSovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAucmVxdWlyZWQgLmNvbnRyb2wtbGFiZWw6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIipcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg2OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiKiBcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNhbGVydCB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+ICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxJbmZvXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\components\\\\faculty\\\\basic-info\\\\personal-info.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PersonalInfo);

/***/ }),

/***/ "./components/faculty/basic-info/work-exp-form.js":
/*!********************************************************!*\
  !*** ./components/faculty/basic-info/work-exp-form.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_faculty_basic_info_addWorkExp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/faculty/basic-info/addWorkExp */ "./services/faculty/basic-info/addWorkExp.js");

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\basic-info\\work-exp-form.js";






class WorkExpForm extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    let WorkDetails = {
      employerName: "",
      position: "",
      startDate: "",
      endDate: "",
      description: ""
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
      initialValues: WorkDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let alert = document.getElementById("workexpalert");
        let res = await (0,_services_faculty_basic_info_addWorkExp__WEBPACK_IMPORTED_MODULE_5__.default)(values, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        $("#workexpalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#workexpalert").slideUp(500);
        });
        resetForm();
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/basic-info', '/faculty/basic-info');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          className: "jsx-371132353"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-371132353"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "jsx-371132353",
          children: "Required"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-371132353" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EmployerWorkExperience[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Employer "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "employerName",
              placeholder: "Input name of employer",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PositionWorkExperience[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Title/Position "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "position",
              placeholder: "Input position",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "DescriptionWorkExperience[]",
              className: "jsx-371132353",
              children: " Description "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "description",
              placeholder: "Add Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-371132353" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "StartDateWorkExperience[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Start Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "startDate",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EndDateWorkExperience[]",
              className: "jsx-371132353",
              children: " End Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "endDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-371132353"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-371132353" + " " + "btn btn-primary col-md-12",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
          id: "371132353",
          children: "label.required-label.jsx-371132353:after{content:\"*\";color:#f00;}h6.jsx-371132353:before{content:\"* \";color:#f00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXGZhY3VsdHlcXGJhc2ljLWluZm9cXHdvcmstZXhwLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VrQixBQUdnQixBQUlDLFlBSEYsQ0FJQSxVQUhaLENBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBamkgTWFnbGFucXVlXFxEZXNrdG9wXFxkcHNtLXFhLXBvcnRhbFxcY29tcG9uZW50c1xcZmFjdWx0eVxcYmFzaWMtaW5mb1xcd29yay1leHAtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhZGRXb3JrRXhwIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hZGRXb3JrRXhwJ1xyXG5cclxuY2xhc3MgV29ya0V4cEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBXb3JrRGV0YWlscyA9IHtcclxuXHRcdFx0ZW1wbG95ZXJOYW1lOiBcIlwiLFxyXG5cdFx0XHRwb3NpdGlvbjogXCJcIixcclxuXHRcdFx0c3RhcnREYXRlOiBcIlwiLFxyXG5cdFx0XHRlbmREYXRlOiBcIlwiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogXCJcIlxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8Rm9ybWlrXHJcblx0XHRcdFx0aW5pdGlhbFZhbHVlcz17V29ya0RldGFpbHN9XHJcblx0XHRcdFx0b25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHtyZXNldEZvcm19KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtleHBhbGVydFwiKVxyXG5cdFx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IGFkZFdvcmtFeHAodmFsdWVzLCB0aGlzLnByb3BzLnRva2VuKVxyXG5cdFx0XHRcdFx0aWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuXHRcdFx0XHRcdFx0YWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG5cdFx0XHRcdFx0XHRhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcblx0XHRcdFx0XHRcdGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcblx0XHRcdFx0XHRcdGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0ZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JChcIiN3b3JrZXhwYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdCQoXCIjd29ya2V4cGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRyZXNldEZvcm0oKVxyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nLCAnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdFx0XHRcdDxGb3JtPlxyXG5cdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdDxoNj5SZXF1aXJlZDwvaDY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiRW1wbG95ZXJXb3JrRXhwZXJpZW5jZVtdXCIgY2xhc3NOYW1lID0gXCJyZXF1aXJlZC1sYWJlbFwiPiBFbXBsb3llciA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImVtcGxveWVyTmFtZVwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBuYW1lIG9mIGVtcGxveWVyXCIgcmVxdWlyZWQgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlBvc2l0aW9uV29ya0V4cGVyaWVuY2VbXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gVGl0bGUvUG9zaXRpb24gPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJwb3NpdGlvblwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBwb3NpdGlvblwiIHJlcXVpcmVkIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJEZXNjcmlwdGlvbldvcmtFeHBlcmllbmNlW11cIj4gRGVzY3JpcHRpb24gPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyID0gXCJBZGQgRGVzY3JpcHRpb25cIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJTdGFydERhdGVXb3JrRXhwZXJpZW5jZVtdXCIgY2xhc3NOYW1lID0gXCJyZXF1aXJlZC1sYWJlbFwiPiBTdGFydCBEYXRlIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwic3RhcnREYXRlXCIgcmVxdWlyZWQgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIkVuZERhdGVXb3JrRXhwZXJpZW5jZVtdXCI+IEVuZCBEYXRlIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZW5kRGF0ZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHR5cGUgPSBcInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgY29sLW1kLTEyXCJcclxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRTdWJtaXRcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdGxhYmVsLnJlcXVpcmVkLWxhYmVsOmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIipcIjtcclxuXHRcdFx0Y29sb3I6ICNmMDA7XHJcblx0XHR9XHJcblx0XHRoNjpiZWZvcmV7XHJcblx0XHRcdGNvbnRlbnQ6IFwiKiBcIjtcclxuXHRcdFx0Y29sb3I6ICNmMDA7XHJcblx0XHR9XHJcblx0YH08L3N0eWxlPlxyXG5cdFx0XHRcdFx0PC9Gb3JtPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvRm9ybWlrPlxyXG5cdFx0KVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtFeHBGb3JtO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\components\\\\faculty\\\\basic-info\\\\work-exp-form.js */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WorkExpForm);

/***/ }),

/***/ "./components/faculty/basic-info/work-experience.js":
/*!**********************************************************!*\
  !*** ./components/faculty/basic-info/work-experience.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _work_exp_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-exp-form */ "./components/faculty/basic-info/work-exp-form.js");
/* harmony import */ var _employment_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employment-history */ "./components/faculty/basic-info/employment-history.js");
/* harmony import */ var _employment_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employment-form */ "./components/faculty/basic-info/employment-form.js");
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_faculty_basic_info_updateWorkExp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/faculty/basic-info/updateWorkExp */ "./services/faculty/basic-info/updateWorkExp.js");
/* harmony import */ var _services_faculty_basic_info_deleteWorkExp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/faculty/basic-info/deleteWorkExp */ "./services/faculty/basic-info/deleteWorkExp.js");

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\basic-info\\work-experience.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function WorkExperience(props) {
  const name = props.name;
  let deleteWork = 0;
  let editWork = 0;
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_7___default().useState({
    workExpId: 0,
    employerName: '',
    position: '',
    startDate: '',
    endDate: '',
    description: ''
  });
  let content;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      if (props.children[key].workExpId != null) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].employerName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].position
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].startDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.children[key].endDate, !props.children[key].endDate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "Present"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 91
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this), props.editable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editWorkExperience",
                onClick: () => {
                  setEdit(props.children[key].workExpId);
                  setKey(editWork);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteWorkExperience",
                onClick: () => {
                  setDelete(props.children[key].workExpId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, this)]
        }, props.children[key].workExpId, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this);
      }
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colSpan: "6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }, this);
  }

  function setEdit(id) {
    editWork = id;
  }

  function setDelete(id) {
    deleteWork = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].workExpId == x) {
        setData(props.children[key]);

        if (props.children[key].endDate == "" || props.children[key].endDate == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            endDate: ''
          }));
        }
      }
    });
  }

  function handleInputChange(id, event) {
    setData(_objectSpread(_objectSpread({}, currData), {}, {
      [id]: event.target.value
    }));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      children: " Work Experience "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_5__.default, {
      unit: props.unit,
      position: props.position,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      role: "alert",
      id: "workexpalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
      align: "center",
      children: " Within UP Manila "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_employment_history__WEBPACK_IMPORTED_MODULE_3__.default, {
      role: props.role,
      token: props.token,
      facultyId: props.facultyId,
      children: props.employment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
      align: "center",
      children: " Outside UP Manila "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Employer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, this)]
          }, "headers", true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this), content]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this), props.editable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_work_exp_form__WEBPACK_IMPORTED_MODULE_2__.default, {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        align: "center",
        children: " Add Faculty Employment "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_employment_form__WEBPACK_IMPORTED_MODULE_4__.default, {
        token: props.token,
        facultyId: props.facultyId,
        positionsList: props.positionsList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "editWorkExperience",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editWorkExperienceLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "modal-title",
              id: "editWorkExperienceLabel",
              children: "Update Work Experience Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "aria-hidden": "true",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "EmployerWorkExperienceUpdate",
                    children: " Employer "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    className: "form-control",
                    type: "text",
                    name: "EmployerWorkExperienceUpdate",
                    placeholder: "Input name of employer",
                    defaultValue: currData.employerName,
                    onChange: e => handleInputChange("employerName", e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "PositionWorkExperienceUpdate",
                    children: " Title/Position "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    className: "form-control",
                    type: "text",
                    name: "PositionWorkExperienceUpdate",
                    placeholder: "Input position",
                    defaultValue: currData.position,
                    onChange: e => handleInputChange("position", e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "StartDateWorkExperienceUpdate",
                    children: " Start Date "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "date",
                    className: "form-control",
                    name: "StartDateWorkExperienceUpdate",
                    defaultValue: currData.startDate,
                    onChange: e => handleInputChange("startDate", e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "EndDateWorkExperienceUpdate",
                    children: " End Date "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "date",
                    className: "form-control",
                    name: "EndDateWorkExperienceUpdate",
                    defaultValue: currData.endDate,
                    onChange: e => handleInputChange("endDate", e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "DescriptionWorkExperienceUpdate",
                    children: " Description "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    className: "form-control",
                    type: "text",
                    name: "DescriptionWorkExperienceUpdate",
                    placeholder: "Add Description",
                    defaultValue: currData.description,
                    onChange: e => handleInputChange("description", e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: async () => {
                $('#editWorkExperience').modal('toggle');
                let alert = document.getElementById("workexpalert");
                let res = await (0,_services_faculty_basic_info_updateWorkExp__WEBPACK_IMPORTED_MODULE_9__.default)(currData, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#workexpalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#workexpalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/faculty/basic-info');
              },
              children: "Save changes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "deleteWorkExperience",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteWorkExperienceLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "modal-title",
              id: "deleteWorkExperienceLabel",
              children: "Delete Work Experience Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "aria-hidden": "true",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this work experience information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: async () => {
                $('#deleteWorkExperience').modal('toggle');
                let alert = document.getElementById("workexpalert");
                let res = await (0,_services_faculty_basic_info_deleteWorkExp__WEBPACK_IMPORTED_MODULE_10__.default)(deleteWork, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#workexpalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#workexpalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/faculty/basic-info');
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (WorkExperience);

/***/ }),

/***/ "./services/admin/addFaculty.js":
/*!**************************************!*\
  !*** ./services/admin/addFaculty.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addFaculty; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function addFaculty(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);

  try {
    if (token) {
      if (data.unit == "") {
        data.unit = 1;
      }

      if (data.category == "") {
        data.category = "Permanent";
      }

      if (data.status == "") {
        data.status = "Full-time";
      }

      if (data.employmentPosition == "") {
        data.employmentPosition = 1;
      }

      let url = "http://localhost:3001/api" + '/user/add';
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      try {
        let body = {
          "role": "1",
          "upemail": `${data.upemail}`,
          "password": "password",
          "personalInfo": {
            firstName: `${data.firstName}`,
            lastName: `${data.lastName}`,
            middleName: `${data.middleName}`,
            suffix: `${data.suffix}`,
            gender: `${data.gender}`,
            dateOfBirth: `${data.dateOfBirth}`,
            placeOfBirth: `${data.placeOfBirth}`,
            permanentAddress: `${data.permanentAddress}`,
            presentAddress: `${data.presentAddress}`,
            mobile: `${data.mobile}`,
            landline: `${data.landline}`,
            email: `${data.email}`,
            civilStatus: `${data.civilStatus}`,
            religion: `${data.religion}`,
            emergencyContactPerson: `${data.emergencyContactPerson}`,
            emergencyContactNumber: `${data.emergencyContactNumber}`,
            teachingPhilosophy: `${data.philosophy}`
          },
          "unitId": `${data.unit}`,
          "employmentPositionId": `${data.employmentPosition}`,
          "status": `${data.status}`,
          "category": `${data.category}`,
          "startDate": `${data.startDate}`
        };
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, body);
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ }),

/***/ "./services/faculty/basic-info/addEmployment.js":
/*!******************************************************!*\
  !*** ./services/faculty/basic-info/addEmployment.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addEmployment; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function addEmployment(data, token, facultyId) {
  try {
    if (token) {
      let bod = {
        facultyId: `${facultyId}`,
        employmentPositionId: `${data.employmentPositionId}`,
        status: `${data.status}`,
        category: `${data.category}`,
        startDate: `${data.startDate}`
      };

      if (`${data.endDate}`) {
        bod.endDate = `${data.endDate}`;
      }

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:3001/api" + "/faculty/basic-info/add/employment", bod, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ }),

/***/ "./services/faculty/basic-info/addWorkExp.js":
/*!***************************************************!*\
  !*** ./services/faculty/basic-info/addWorkExp.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addWorkExp; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function addWorkExp(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let bod = null;

      if (`${data.endDate}` == "") {
        bod = {
          facultyId: `${facultyId}`,
          employerName: `${data.employerName}`,
          position: `${data.position}`,
          startDate: `${data.startDate}`,
          description: `${data.description}`
        };
      } else {
        bod = {
          facultyId: `${facultyId}`,
          employerName: `${data.employerName}`,
          position: `${data.position}`,
          startDate: `${data.startDate}`,
          endDate: `${data.endDate}`,
          description: `${data.description}`
        };
      }

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:3001/api" + "/faculty/basic-info/add/work-exp", bod, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ }),

/***/ "./services/faculty/basic-info/deleteEmployment.js":
/*!*********************************************************!*\
  !*** ./services/faculty/basic-info/deleteEmployment.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deleteEmployment; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function deleteEmployment(data, token, facultyId) {
  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api" + "/faculty/basic-info/" + facultyId + "/employment", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            employmentInfoId: `${data}`
          }
        });
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ }),

/***/ "./services/faculty/basic-info/deleteWorkExp.js":
/*!******************************************************!*\
  !*** ./services/faculty/basic-info/deleteWorkExp.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deleteWorkExp; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function deleteWorkExp(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api" + "/faculty/basic-info/" + facultyId + "/work-exp", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            workExpId: `${data}`
          }
        });
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ }),

/***/ "./services/faculty/basic-info/updateEmployment.js":
/*!*********************************************************!*\
  !*** ./services/faculty/basic-info/updateEmployment.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateEmployment; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function updateEmployment(data, token, facultyId) {
  try {
    if (token) {
      let url = "http://localhost:3001/api" + '/faculty/basic-info/' + facultyId;
      let bod = {
        employmentInfoId: `${data.employmentInfoId}`,
        startDate: `${data.startDate}`
      };
      if (data.endDate == "" || data.endDate == null) bod.endDate = null;else bod.endDate = `${data.endDate}`;

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(url + "/employment", bod, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ }),

/***/ "./services/faculty/basic-info/updateFaculty.js":
/*!******************************************************!*\
  !*** ./services/faculty/basic-info/updateFaculty.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateFaculty; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function updateFaculty(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = "http://localhost:3001/api" + '/faculty/basic-info/' + facultyId;

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(url + "/personal", {
          firstName: `${data.firstName}`,
          lastName: `${data.lastName}`,
          middleName: `${data.middleName}`,
          suffix: `${data.suffix}`,
          permanentAddress: `${data.permanentAddress}`,
          presentAddress: `${data.presentAddress}`,
          mobile: `${data.mobile}`,
          landline: `${data.landline}`,
          email: `${data.email}`,
          civilStatus: `${data.civilStatus}`,
          religion: `${data.religion}`,
          emergencyContactPerson: `${data.emergencyContactPerson}`,
          emergencyContactNumber: `${data.emergencyContactNumber}`,
          teachingPhilosophy: `${data.philosophy}`
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ }),

/***/ "./services/faculty/basic-info/updateWorkExp.js":
/*!******************************************************!*\
  !*** ./services/faculty/basic-info/updateWorkExp.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateWorkExp; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function updateWorkExp(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = "http://localhost:3001/api" + '/faculty/basic-info/' + facultyId;
      let bod = null;

      if (data.endDate == "" || data.endDate == null) {
        bod = {
          workExpId: `${data.workExpId}`,
          employerName: `${data.employerName}`,
          position: `${data.position}`,
          startDate: `${data.startDate}`,
          description: `${data.description}`
        };
      } else {
        bod = {
          workExpId: `${data.workExpId}`,
          employerName: `${data.employerName}`,
          position: `${data.position}`,
          startDate: `${data.startDate}`,
          endDate: `${data.endDate}`,
          description: `${data.description}`
        };
      }

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(url + "/work-exp", bod, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (err) {
        console.error(err);
        return err;
      }
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL2VtcGxveW1lbnQtZm9ybS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL2VtcGxveW1lbnQtaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL3BlcnNvbmFsLWluZm8tZGVwZW5kZW50cy5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL3BlcnNvbmFsLWluZm8uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2ZhY3VsdHkvYmFzaWMtaW5mby93b3JrLWV4cC1mb3JtLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vd29yay1leHBlcmllbmNlLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvYWRtaW4vYWRkRmFjdWx0eS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hZGRFbXBsb3ltZW50LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZFdvcmtFeHAuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vZGVsZXRlRW1wbG95bWVudC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9kZWxldGVXb3JrRXhwLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL3VwZGF0ZUVtcGxveW1lbnQuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlRmFjdWx0eS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby91cGRhdGVXb3JrRXhwLmpzIl0sIm5hbWVzIjpbIkVtcGxveW1lbnRGb3JtIiwiUmVhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiV29ya0RldGFpbHMiLCJlbXBsb3ltZW50UG9zaXRpb25JZCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJwb3NpdGlvbnMiLCJwb3NpdGlvbnNMaXN0IiwiZm9yRWFjaCIsImtleSIsInB1c2giLCJwb3NpdGlvbiIsInZhbHVlcyIsInJlc2V0Rm9ybSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlcyIsImFkZEVtcGxveW1lbnQiLCJ0b2tlbiIsImZhY3VsdHlJZCIsInN1Y2Nlc3MiLCJjbGFzc05hbWUiLCJzdHlsZSIsImlubmVySFRNTCIsIm1lc3NhZ2UiLCJlcnJvciIsIiQiLCJmYWRlVG8iLCJzbGlkZVVwIiwiUm91dGVyIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzU3VibWl0dGluZyIsIkVtcGxveW1lbnRIaXN0b3J5IiwiY3VyckRhdGEiLCJzZXREYXRhIiwiZW1wbG95bWVudEluZm9JZCIsImVtcEluZm9JZCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsIk9iamVjdCIsImtleXMiLCJmYWN1bHR5X2VtcGxveW1lbnRfaW5mb3MiLCJtYXAiLCJmYWN1bHR5X2VtcGxveW1lbnRfcG9zaXRpb24iLCJzdGF0dXMiLCJjYXRlZ29yeSIsInJvbGUiLCJzZXRLZXkiLCJ4IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJpZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ2aXNpYmlsaXR5IiwiZSIsIm1vZGFsIiwidXBkYXRlRW1wbG95bWVudCIsImRlbGV0ZUVtcGxveW1lbnQiLCJQZXJzb25hbEluZm9EZXBlbmRlbnRzIiwic3RhdGUiLCJkdXBsaWNhdGVGb3JtcyIsImNsb25lIiwic2V0U3RhdGUiLCJyZW1vdmUiLCJwb3AiLCJEZXBlbmRlbnREZXRhaWxzIiwibmFtZSIsImJpcnRoRGF0ZSIsInJlbGF0aW9uc2hpcCIsIlBlcnNvbmFsSW5mbyIsImNvbnNvbGUiLCJsb2ciLCJoYXNEaXNhYmxlZEZpZWxkcyIsIkZhY3VsdHlEZXRhaWxzIiwiZGVwZW5kZW50cyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibWlkZGxlTmFtZSIsImdlbmRlciIsImRhdGVPZkJpcnRoIiwicGxhY2VPZkJpcnRoIiwicGVybWFuZW50QWRkcmVzcyIsInByZXNlbnRBZGRyZXNzIiwibW9iaWxlIiwibGFuZGxpbmUiLCJlbWFpbCIsInVwZW1haWwiLCJjaXZpbFN0YXR1cyIsInJlbGlnaW9uIiwiZW1lcmdlbmN5Q29udGFjdFBlcnNvbiIsImVtZXJnZW5jeUNvbnRhY3ROdW1iZXIiLCJzdWZmaXgiLCJmYWN1bHR5X2RlcGVuZGVudHMiLCJwaGlsb3NvcGh5IiwidGVhY2hpbmdQaGlsb3NvcGh5IiwiZWRpdGFibGUiLCJjbGVyayIsInVuaXQiLCJlbXBsb3ltZW50UG9zaXRpb24iLCJhZGRGYWN1bHR5IiwidXBkYXRlRmFjdWx0eSIsInNldEF0dHJpYnV0ZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsImhyZWYiLCJTdGFydERhdGUiLCJXb3JrRXhwRm9ybSIsImVtcGxveWVyTmFtZSIsImRlc2NyaXB0aW9uIiwiYWRkV29ya0V4cCIsIldvcmtFeHBlcmllbmNlIiwiZGVsZXRlV29yayIsImVkaXRXb3JrIiwid29ya0V4cElkIiwic2V0RWRpdCIsInNldERlbGV0ZSIsImVtcGxveW1lbnQiLCJ1cGRhdGVXb3JrRXhwIiwiZGVsZXRlV29ya0V4cCIsImRhdGEiLCJjb29raWVEYXRhIiwiand0IiwidXJsIiwicHJvY2VzcyIsImhlYWRlciIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJheGlvcyIsImVyciIsImFjY2VzcyIsInJlc3VsdCIsImJvZCIsIkF1dGhvcml6YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsY0FBTixTQUE2QkMsd0RBQTdCLENBQTRDO0FBQzNDQyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUNqQixVQUFNQSxLQUFOO0FBQ0E7O0FBRURDLFFBQU0sR0FBRTtBQUNQLFFBQUlDLFdBQVcsR0FBRztBQUNqQkMsMEJBQW9CLEVBQUUsRUFETDtBQUVqQkMsZUFBUyxFQUFFLEVBRk07QUFHakJDLGFBQU8sRUFBRTtBQUhRLEtBQWxCO0FBS00sUUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUVBLFFBQUcsS0FBS04sS0FBTCxDQUFXTyxhQUFkLEVBQTZCO0FBQ3pCLFdBQUtQLEtBQUwsQ0FBV08sYUFBWCxDQUF5QkMsT0FBekIsQ0FBaUNDLEdBQUcsSUFBSTtBQUNwQ0gsaUJBQVMsQ0FBQ0ksSUFBVixlQUNJO0FBQVEsZUFBSyxFQUFJRCxHQUFHLENBQUNOLG9CQUFyQjtBQUFBLG9CQUE0Q00sR0FBRyxDQUFDRTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBR0gsT0FKRDtBQUtIOztBQUVQLHdCQUNDLDhEQUFDLDBDQUFEO0FBQ0MsbUJBQWEsRUFBRVQsV0FEaEI7QUFFQyxjQUFRLEVBQUUsT0FBT1UsTUFBUCxFQUFlO0FBQUNDO0FBQUQsT0FBZixLQUErQjtBQUN4QyxZQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFaO0FBQ0EsWUFBSUMsR0FBRyxHQUFHLE1BQU1DLG1GQUFhLENBQUNOLE1BQUQsRUFBUyxLQUFLWixLQUFMLENBQVdtQixLQUFwQixFQUEyQixLQUFLbkIsS0FBTCxDQUFXb0IsU0FBdEMsQ0FBN0I7O0FBQ0EsWUFBR0gsR0FBRyxDQUFDSSxPQUFKLElBQWUsSUFBbEIsRUFBd0I7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WCxXQUFZO0FBTnpCLFNBQU47QUFRQTs7QUFFRSxVQUFJO0FBQ1QsY0FBTW1CLFFBQVEsR0FBRyxNQUFNQyxnREFBQSxDQUFVTixHQUFHLEdBQUcsV0FBaEIsRUFBNkJVLEdBQTdCLEVBQWtDO0FBQ3hEUCxpQkFBTyxFQUFFO0FBQ1JRLHlCQUFhLEVBQUcsVUFBU3RILEtBQU07QUFEdkI7QUFEK0MsU0FBbEMsQ0FBdkI7QUFLQSxlQUFPZ0gsUUFBUSxDQUFDUixJQUFoQjtBQUNBLE9BUEssQ0FPSixPQUFPVSxHQUFQLEVBQVk7QUFDYjVELGVBQU8sQ0FBQy9DLEtBQVIsQ0FBYzJHLEdBQWQ7QUFDQSxlQUFPQSxHQUFQO0FBQ0E7QUFDRSxLQWpDRCxNQWlDTztBQUNINUQsYUFBTyxDQUFDQyxHQUFSLENBQVk0RCxNQUFNLENBQUNDLE1BQVAsQ0FBYzlHLE9BQTFCO0FBQ047QUFDRCxHQXJDRCxDQXFDRSxPQUFPNEcsR0FBUCxFQUFZO0FBQ2I1RCxXQUFPLENBQUMvQyxLQUFSLENBQWMyRyxHQUFkO0FBQ0EsV0FBT0EsR0FBUDtBQUNBO0FBQ0QsQyIsImZpbGUiOiJjb21wb25lbnRzX2ZhY3VsdHlfYmFzaWMtaW5mb19wZXJzb25hbC1pbmZvX2pzLWNvbXBvbmVudHNfZmFjdWx0eV9iYXNpYy1pbmZvX3dvcmstZXhwZXJpZW5jZV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhZGRFbXBsb3ltZW50IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hZGRFbXBsb3ltZW50J1xyXG5cclxuY2xhc3MgRW1wbG95bWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBXb3JrRGV0YWlscyA9IHtcclxuXHRcdFx0ZW1wbG95bWVudFBvc2l0aW9uSWQ6IFwiXCIsXHJcblx0XHRcdHN0YXJ0RGF0ZTogXCJcIixcclxuXHRcdFx0ZW5kRGF0ZTogXCJcIlxyXG5cdFx0fVxyXG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXVxyXG5cclxuICAgICAgICBpZih0aGlzLnByb3BzLnBvc2l0aW9uc0xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3NpdGlvbnNMaXN0LmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSB7a2V5LmVtcGxveW1lbnRQb3NpdGlvbklkfT57a2V5LnBvc2l0aW9ufTwvb3B0aW9uPiAgICBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdHJldHVybihcclxuXHRcdFx0PEZvcm1pa1xyXG5cdFx0XHRcdGluaXRpYWxWYWx1ZXM9e1dvcmtEZXRhaWxzfVxyXG5cdFx0XHRcdG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7cmVzZXRGb3JtfSkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrZXhwYWxlcnRcIilcclxuXHRcdFx0XHRcdGxldCByZXMgPSBhd2FpdCBhZGRFbXBsb3ltZW50KHZhbHVlcywgdGhpcy5wcm9wcy50b2tlbiwgdGhpcy5wcm9wcy5mYWN1bHR5SWQpXHJcblx0XHRcdFx0XHRpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG5cdFx0XHRcdFx0XHRhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcblx0XHRcdFx0XHRcdGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuXHRcdFx0XHRcdFx0YWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuXHRcdFx0XHRcdFx0aWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQkKFwiI3dvcmtleHBhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0JChcIiN3b3JrZXhwYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJlc2V0Rm9ybSgpXHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluLycgKyB0aGlzLnByb3BzLmZhY3VsdHlJZCwgJy9hZG1pbi8nICsgdGhpcy5wcm9wcy5mYWN1bHR5SWQpXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdFx0XHRcdDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblx0XHRcdDxoNj5SZXF1aXJlZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUG9zaXRpb25bXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gUG9zaXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZW1wbG95bWVudFBvc2l0aW9uSWRcIiBpZCA9IFwiZW1wbG95bWVudFBvc2l0aW9uSWRcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIiBrZXkgPSBcIjBcIj4tLSBTRUxFQ1QgUE9TSVRJT04gLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc2l0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU3RhdHVzW11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IFN0YXR1cyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdGF0dXNcIiBpZCA9IFwic3RhdHVzXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+LS0gU0VMRUNUIFNUQVRVUyAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRnVsbC10aW1lXCI+RnVsbC10aW1lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJQYXJ0LXRpbWVcIj5QYXJ0LXRpbWU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkxlY3R1cmVyXCI+TGVjdHVyZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiQ2F0ZWdvcnlbXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gQ2F0ZWdvcnkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiY2F0ZWdvcnlcIiBpZCA9IFwiY2F0ZWdvcnlcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj4tLSBTRUxFQ1QgQ0FURUdPUlkgLS08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlBlcm1hbmVudFwiPlBlcm1hbmVudDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVGVtcG9yYXJ5XCI+VGVtcG9yYXJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlN0YXJ0RGF0ZUVtcGxveW1lbnRbXVwiPiBTdGFydCBEYXRlICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdGFydERhdGVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJFbmREYXRlRW1wbG95bWVudFtdXCI+IEVuZCBEYXRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVuZERhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBjb2wtbWQtMTJcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9PlN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRsYWJlbC5yZXF1aXJlZC1sYWJlbDphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIqXCI7XHJcblx0XHRcdGNvbG9yOiAjZjAwO1xyXG5cdFx0fVxyXG5cdFx0aDY6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OiBcIiogXCI7XHJcblx0XHRcdGNvbG9yOiAjZjAwO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9Gb3JtaWs+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95bWVudEZvcm07XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHVwZGF0ZUVtcGxveW1lbnQgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL3VwZGF0ZUVtcGxveW1lbnQnXHJcbmltcG9ydCBkZWxldGVFbXBsb3ltZW50IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9kZWxldGVFbXBsb3ltZW50J1xyXG5cclxuZnVuY3Rpb24gRW1wbG95bWVudEhpc3RvcnkocHJvcHMpe1xyXG5cdGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1wbG95bWVudEluZm9JZDogMCxcclxuICAgICAgICBzdGFydERhdGU6ICcnLFxyXG4gICAgICAgIGVuZERhdGU6ICcnXHJcbiAgICB9KVxyXG5cdGxldCBlbXBJbmZvSWRcclxuXHRsZXQgY29udGVudFxyXG5cclxuXHRpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcblx0XHRjb250ZW50ID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8dHIga2V5ID0ge3Byb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVtcGxveW1lbnRJbmZvSWR9PlxyXG5cdFx0XHRcdFx0PHRkPntwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3Nba2V5XS5mYWN1bHR5X2VtcGxveW1lbnRfcG9zaXRpb24ucG9zaXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uY2F0ZWdvcnl9PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD57cHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uc3RhcnREYXRlfTwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+e3Byb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVuZERhdGUgfHwgJ1ByZXNlbnQnfTwvdGQ+XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJiBcclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdEVtcGxveW1lbnRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVtcEluZm9JZCA9IHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVtcGxveW1lbnRJbmZvSWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0S2V5KHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVtcGxveW1lbnRJbmZvSWQpXHJcblx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlRW1wbG95bWVudFwiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW1wSW5mb0lkID0gcHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uZW1wbG95bWVudEluZm9JZFxyXG5cdFx0XHRcdFx0XHRcdFx0fX0+RGVsZXRlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L3RkPiBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIHtcclxuICAgICAgICBjb250ZW50ID0gPHRkIGNvbFNwYW4gPSBcIjVcIj48cCBhbGlnbiA9IFwiY2VudGVyXCI+Tm8gZGF0YSBhdmFpbGFibGUhPC9wPjwvdGQ+XHJcbiAgICB9XHJcblxyXG5cdGZ1bmN0aW9uIHNldEtleSh4KSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uZW1wbG95bWVudEluZm9JZCA9PSB4KSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldKVxyXG4gICAgICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uZW5kRGF0ZSA9PSBcIlwiIHx8IHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVuZERhdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoY3VyckRhdGEgPT4gKHsuLi5jdXJyRGF0YSwgZW5kRGF0ZTogJyd9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGlkLCBldmVudCkge1xyXG4gICAgICAgIHNldERhdGEoey4uLmN1cnJEYXRhLCBbaWRdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiIGlkPVwiZW1wbG95bWVudGFsZXJ0XCIgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9fT48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1zbVwiPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPlBvc2l0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DYXRlZ29yeTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5TdGFydCBEYXRlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkVuZCBEYXRlPC90aD5cclxuXHRcdFx0XHRcdFx0eyBwcm9wcy5yb2xlID09IDUgJiYgPHRoPkFjdGlvbjwvdGg+IH1cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHR7Y29udGVudH1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZWRpdEVtcGxveW1lbnRcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImVkaXRFbXBsb3ltZW50TGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0RW1wbG95bWVudExhYmVsXCI+VXBkYXRlIEVtcGxveW1lbnQgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwic3RhcnREYXRlXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInN0YXJ0RGF0ZVwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEuc3RhcnREYXRlIH0gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwic3RhcnREYXRlXCIsIGUpfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcImVuZERhdGVcIj4gRW5kIERhdGUgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVuZERhdGVcIiBkZWZhdWx0VmFsdWUgPSB7IGN1cnJEYXRhLmVuZERhdGUgfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJlbmREYXRlXCIsIGUpfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0RW1wbG95bWVudCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1wbG95bWVudGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgdXBkYXRlRW1wbG95bWVudChjdXJyRGF0YSwgcHJvcHMudG9rZW4sIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZW1wbG95bWVudGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZW1wbG95bWVudGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZGVsZXRlRW1wbG95bWVudFwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVsZXRlRW1wbG95bWVudExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZGVsZXRlRW1wbG95bWVudExhYmVsXCI+RGVsZXRlIEVtcGxveW1lbnQgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBlbXBsb3ltZW50IGluZm9ybWF0aW9uPyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPk5vLCBkb24ndCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1wbG95bWVudGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZGVsZXRlRW1wbG95bWVudCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZGVsZXRlRW1wbG95bWVudChlbXBJbmZvSWQsIHByb3BzLnRva2VuLCBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZW1wbG95bWVudGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZW1wbG95bWVudGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi8nICsgcHJvcHMuZmFjdWx0eUlkLCAnL2FkbWluLycgKyBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveW1lbnRIaXN0b3J5XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuLy8gaW1wb3J0IGFkZERlcGVuZGVudCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vYWRkRGVwZW5kZW50J1xyXG5cclxuY2xhc3MgUGVyc29uYWxJbmZvRGVwZW5kZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGR1cGxpY2F0ZUZvcm1zOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZHVwbGljYXRlRm9ybXMucHVzaCg8ZGl2PjxociAvPjxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVwZW5kZW50TmFtZVtdXCI+IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiRGVwZW5kZW50TmFtZVtdXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG5hbWUgb2YgZGVwZW5kZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVwZW5kZW50RGF0ZU9mQmlydGhbXVwiPiBEYXRlIG9mIEJpcnRoIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcIkRlcGVuZGVudERhdGVPZkJpcnRoW11cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRGVwZW5kZW50UmVsYXRpb25zaGlwW11cIj4gUmVsYXRpb25zaGlwIHRvIFVzZXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiRGVwZW5kZW50UmVsYXRpb25zaGlwW11cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGhye1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbW92ZSgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZHVwbGljYXRlRm9ybXMucG9wKClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBEZXBlbmRlbnREZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBiaXJ0aERhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHJlbGF0aW9uc2hpcDogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQgPSBcIkFkZERlcGVuZGVudFwiIG9uQ2xpY2sgPSB7KCkgPT4gdGhpcy5jbG9uZSgpfT4gQWRkIERlcGVuZGVudCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJidXR0b25cIiBjbGFzc05hbWUgPSBcImJ0biBidG4tZGFuZ2VyXCIgaWQgPSBcIlJlbW92ZURlcGVuZGVudFwiIG9uQ2xpY2sgPSB7KCkgPT4gdGhpcy5yZW1vdmUoKX0+IFJlbW92ZSBhIFJvdyA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVwZW5kZW50TmFtZVtdXCI+IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm5hbWVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgbmFtZSBvZiBkZXBlbmRlbnRcIiBpZCA9IFwibmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlcGVuZGVudERhdGVPZkJpcnRoW11cIj4gRGF0ZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiYmlydGhEYXRlXCIgaWQgPSBcImJpcnRoRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEZXBlbmRlbnRSZWxhdGlvbnNoaXBbXVwiPiBSZWxhdGlvbnNoaXAgdG8gVXNlciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmVsYXRpb25zaGlwXCIgaWQgPSBcInJlbGF0aW9uc2hpcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQgPSBcIkRlcGVuZGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kdXBsaWNhdGVGb3Jtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdHlwZSA9IFwic3VibWl0XCJcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgLy8gICAgIC8vICl9XHJcbiAgICAgICAgICAgIC8vIDwvRm9ybWlrPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxJbmZvRGVwZW5kZW50cyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUGVyc29uYWxJbmZvRGVwZW5kZW50cyBmcm9tICcuL3BlcnNvbmFsLWluZm8tZGVwZW5kZW50cydcclxuaW1wb3J0IE5hbWVEaXNwbGF5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmFtZS1kaXNwbGF5J1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVyc1wiXHJcblxyXG5pbXBvcnQgdXBkYXRlRmFjdWx0eSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlRmFjdWx0eSdcclxuaW1wb3J0IGFkZEZhY3VsdHkgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWRtaW4vYWRkRmFjdWx0eSdcclxuXHJcbmZ1bmN0aW9uIFBlcnNvbmFsSW5mbyhwcm9wcykgeyBjb25zb2xlLmxvZyhwcm9wcy5oYXNEaXNhYmxlZEZpZWxkcyk7XHJcbiAgICBsZXQgRmFjdWx0eURldGFpbHNcclxuICAgIGxldCBuYW1lXHJcbiAgICBsZXQgZGVwZW5kZW50c1xyXG4gICAgbGV0IHJlc1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IFtdXHJcbiAgICBpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgRmFjdWx0eURldGFpbHMgPSB7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogcHJvcHMuY2hpbGRyZW4uZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogcHJvcHMuY2hpbGRyZW4ubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIG1pZGRsZU5hbWU6IHByb3BzLmNoaWxkcmVuLm1pZGRsZU5hbWUsXHJcbiAgICAgICAgICAgIGdlbmRlcjogcHJvcHMuY2hpbGRyZW4uZ2VuZGVyLFxyXG4gICAgICAgICAgICBkYXRlT2ZCaXJ0aDogcHJvcHMuY2hpbGRyZW4uZGF0ZU9mQmlydGgsXHJcbiAgICAgICAgICAgIHBsYWNlT2ZCaXJ0aDogcHJvcHMuY2hpbGRyZW4ucGxhY2VPZkJpcnRoLFxyXG4gICAgICAgICAgICBwZXJtYW5lbnRBZGRyZXNzOiBwcm9wcy5jaGlsZHJlbi5wZXJtYW5lbnRBZGRyZXNzLFxyXG4gICAgICAgICAgICBwcmVzZW50QWRkcmVzczogcHJvcHMuY2hpbGRyZW4ucHJlc2VudEFkZHJlc3MsXHJcbiAgICAgICAgICAgIG1vYmlsZTogcHJvcHMuY2hpbGRyZW4ubW9iaWxlLFxyXG4gICAgICAgICAgICBsYW5kbGluZTogcHJvcHMuY2hpbGRyZW4ubGFuZGxpbmUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBwcm9wcy5jaGlsZHJlbi5lbWFpbCxcclxuICAgICAgICAgICAgdXBlbWFpbDogcHJvcHMuZW1haWwsXHJcbiAgICAgICAgICAgIGNpdmlsU3RhdHVzOiBwcm9wcy5jaGlsZHJlbi5jaXZpbFN0YXR1cyxcclxuICAgICAgICAgICAgcmVsaWdpb246IHByb3BzLmNoaWxkcmVuLnJlbGlnaW9uLFxyXG4gICAgICAgICAgICBlbWVyZ2VuY3lDb250YWN0UGVyc29uOiBwcm9wcy5jaGlsZHJlbi5lbWVyZ2VuY3lDb250YWN0UGVyc29uLFxyXG4gICAgICAgICAgICBlbWVyZ2VuY3lDb250YWN0TnVtYmVyOiBwcm9wcy5jaGlsZHJlbi5lbWVyZ2VuY3lDb250YWN0TnVtYmVyLFxyXG4gICAgICAgICAgICBzdWZmaXg6IHByb3BzLmNoaWxkcmVuLnN1ZmZpeCB8fCAnJyxcclxuICAgICAgICAgICAgZmFjdWx0eV9kZXBlbmRlbnRzOiBwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2RlcGVuZGVudHMsXHJcbiAgICAgICAgICAgIHBoaWxvc29waHk6IHByb3BzLmNoaWxkcmVuLnRlYWNoaW5nUGhpbG9zb3BoeVxyXG4gICAgICAgIH1cclxuICAgICAgICBuYW1lID0gcHJvcHMuY2hpbGRyZW4ubGFzdE5hbWUgKyAnLCAnICsgcHJvcHMuY2hpbGRyZW4uZmlyc3ROYW1lXHJcbiAgICAgICAgZGVwZW5kZW50cyA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZGVwZW5kZW50cykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkRlcGVuZGVudFwiPiBOYW1lIG9mIERlcGVuZGVudCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibmFtZVwiIGRlZmF1bHRWYWx1ZSA9IHsgcHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9kZXBlbmRlbnRzW2tleV0ubmFtZSB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEZXBlbmRlbnREYXRlT2ZCaXJ0aFwiPiBEYXRlIG9mIEJpcnRoIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJiaXJ0aERhdGVcIiBkZWZhdWx0VmFsdWUgPSB7IHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZGVwZW5kZW50c1trZXldLmJpcnRoRGF0ZSB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEZXBlbmRlbnRSZWxhdGlvbnNoaXBbXVwiPiBSZWxhdGlvbnNoaXAgdG8gVXNlciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmVsYXRpb25zaGlwXCIgZGVmYXVsdFZhbHVlID0geyBwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2RlcGVuZGVudHNba2V5XS5yZWxhdGlvbnNoaXAgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEZhY3VsdHlEZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBjbGVyazogJycsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgbWlkZGxlTmFtZTogJycsXHJcbiAgICAgICAgICAgIGdlbmRlcjogJ01hbGUnLFxyXG4gICAgICAgICAgICBkYXRlT2ZCaXJ0aDogJycsXHJcbiAgICAgICAgICAgIHBsYWNlT2ZCaXJ0aDogJycsXHJcbiAgICAgICAgICAgIHBlcm1hbmVudEFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBwcmVzZW50QWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIG1vYmlsZTogJycsXHJcbiAgICAgICAgICAgIGxhbmRsaW5lOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBjaXZpbFN0YXR1czogJ3NpbmdsZScsXHJcbiAgICAgICAgICAgIHJlbGlnaW9uOiAnJyxcclxuICAgICAgICAgICAgZW1lcmdlbmN5Q29udGFjdFBlcnNvbjogJycsXHJcbiAgICAgICAgICAgIGVtZXJnZW5jeUNvbnRhY3ROdW1iZXI6ICcnLFxyXG4gICAgICAgICAgICBzdWZmaXg6ICcnLFxyXG4gICAgICAgICAgICBmYWN1bHR5X2RlcGVuZGVudHM6ICcnLFxyXG4gICAgICAgICAgICB1cGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgdW5pdDogJzEnLFxyXG4gICAgICAgICAgICBlbXBsb3ltZW50UG9zaXRpb246ICcxJyxcclxuICAgICAgICAgICAgc3RhcnREYXRlOiAnJyxcclxuICAgICAgICAgICAgcGhpbG9zb3BoeTogJycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvcHMucG9zaXRpb25zLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0ge2tleS5lbXBsb3ltZW50UG9zaXRpb25JZH0+e2tleS5wb3NpdGlvbn08L29wdGlvbj4gICAgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGFsaWduID0gXCJjZW50ZXJcIj4gUGVyc29uYWwgSW5mb3JtYXRpb24gPC9oMj5cclxuICAgICAgICA8TmFtZURpc3BsYXkgdW5pdCA9IHtwcm9wcy51bml0fSBwb3NpdGlvbj17cHJvcHMucG9zaXRpb259PntuYW1lfTwvTmFtZURpc3BsYXk+XHJcblx0XHQ8Rm9ybWlrXHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e0ZhY3VsdHlEZXRhaWxzfVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgdG9rZW4pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5yb2xlID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCBhZGRGYWN1bHR5KHZhbHVlcywgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IGF3YWl0IHVwZGF0ZUZhY3VsdHkodmFsdWVzLCBwcm9wcy50b2tlbikgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMubWVzc2FnZSA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIHZhbHVlcy5tZXNzYWdlID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHZhbHVlcy5tZXNzYWdlID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnJvbGUgPT0gNSkgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9mYWN1bHR5JylcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2FkbWluXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9iYXNpYy1pbmZvJykgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGlkPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5lZGl0YWJsZSAmJiA8aDY+UmVxdWlyZWQ8L2g2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJGaXJzdE5hbWVcIj4gRmlyc3QgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImZpcnN0TmFtZVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZmlyc3ROYW1lIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiTWlkZGxlTmFtZVwiPiBNaWRkbGUgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm1pZGRsZU5hbWVcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLm1pZGRsZU5hbWUgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJMYXN0TmFtZVwiPiBMYXN0IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJsYXN0TmFtZVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMubGFzdE5hbWUgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJTdWZmaXhcIj4gU3VmZml4IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwic3VmZml4XCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5zdWZmaXggfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJTZXhcIj4gU2V4IChhdCBiaXJ0aCkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJnZW5kZXJcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmdlbmRlciB9IGRpc2FibGVkPXtwcm9wcy5oYXNEaXNhYmxlZEZpZWxkc30gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiTWFsZVwiPk1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJGZW1hbGVcIj5GZW1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkRhdGVPZkJpcnRoXCI+IERhdGUgb2YgQmlydGggPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJkYXRlT2ZCaXJ0aFwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZGF0ZU9mQmlydGggfSBkaXNhYmxlZD17cHJvcHMuaGFzRGlzYWJsZWRGaWVsZHN9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIlBsYWNlT2ZCaXJ0aFwiPiBQbGFjZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInBsYWNlT2ZCaXJ0aFwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMucGxhY2VPZkJpcnRoIH0gZGlzYWJsZWQ9e3Byb3BzLmhhc0Rpc2FibGVkRmllbGRzfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiUHJlc2VudEFkZHJlc3NcIj4gUHJlc2VudCBBZGRyZXNzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJwcmVzZW50QWRkcmVzc1wiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMucHJlc2VudEFkZHJlc3MgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJQZXJtYW5lbnRBZGRyZXNzXCI+IFBlcm1hbmVudCBBZGRyZXNzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJwZXJtYW5lbnRBZGRyZXNzXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5wZXJtYW5lbnRBZGRyZXNzIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTYgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkNpdmlsU3RhdHVzXCI+IENpdmlsIFN0YXR1cyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImNpdmlsU3RhdHVzXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5jaXZpbFN0YXR1cyB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcInNpbmdsZVwiPlNpbmdsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIm1hcnJpZWRcIj5NYXJyaWVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwic2VwYXJhdGVkXCI+U2VwYXJhdGVkIChMZWdhbGx5KTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcImRpdm9yY2VkXCI+RGl2b3JjZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJ3aWRvd2VkXCI+V2lkb3dlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlbGlnaW9uXCI+IFJlbGlnaW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJlbGlnaW9uXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5yZWxpZ2lvbiB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkNvbnRhY3ROdW1iZXJcIj4gQ29udGFjdCBOdW1iZXIgKExhbmRsaW5lKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGVsXCIgbmFtZSA9IFwibGFuZGxpbmVcIiBwYXR0ZXJuID0gXCJbMC05XXsxMH1cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmxhbmRsaW5lIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiQ29udGFjdE51bWJlclwiPiBDb250YWN0IE51bWJlciAoTW9iaWxlKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGVsXCIgbmFtZSA9IFwibW9iaWxlXCIgcGF0dGVybiA9IFwiWzBdezF9WzldezF9WzAtOV17OX1cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLm1vYmlsZSB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkVtYWlsQWRkcmVzc0FsdFwiPiBQZXJzb25hbCBFLW1haWwgQWRkcmVzcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZW1haWxcIiBuYW1lID0gXCJlbWFpbFwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1haWwgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJVUEVtYWlsXCI+IFVQIEUtbWFpbCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZW1haWxcIiBuYW1lID0gXCJ1cGVtYWlsXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5lbWFpbCB9IGRpc2FibGVkPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNiByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkVtZXJnZW5jeUNvbnRhY3RcIj4gRW1lcmdlbmN5IENvbnRhY3QgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJlbWVyZ2VuY3lDb250YWN0UGVyc29uXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5lbWVyZ2VuY3lDb250YWN0UGVyc29uIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1lcmdlbmN5Q29udGFjdE51bWJlclwiPiBFbWVyZ2VuY3kgQ29udGFjdCBOdW1iZXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRlbFwiIG5hbWUgPSBcImVtZXJnZW5jeUNvbnRhY3ROdW1iZXJcIiBwYXR0ZXJuID0gXCJbMF17MX1bOV17MX1bMC05XXs5fVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1lcmdlbmN5Q29udGFjdE51bWJlciB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMTIgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJwaGlsb3NvcGh5XCI+IFRlYWNoaW5nIFBoaWxvc29waHkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIGNvbXBvbmVudCA9IFwidGV4dGFyZWFcIiByb3dzID0gezV9IG5hbWUgPSBcInBoaWxvc29waHlcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnBoaWxvc29waHkgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8aDUgYWxpZ24gPSBcImNlbnRlclwiPiBEZXBlbmRlbnRzIDwvaDU+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qe2RlcGVuZGVudHN9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5yb2xlPT01ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkVtcGxveW1lbnQgSW5mbzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1haWxBZGRyZXNzQWx0XCI+IFVQIEUtbWFpbCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJlbWFpbFwiIG5hbWUgPSBcInVwZW1haWxcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmVtYWlsIH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJVbml0XCI+IFVuaXQgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInVuaXRcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnVuaXQgfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIjFcIj5DaGVtaXN0cnkgVW5pdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiMlwiPk1hdGhlbWF0aWNhbCBhbmQgQ29tcHV0aW5nIFNjaWVuY2VzIFVuaXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIjNcIj5QaHlzaWNzIGFuZCBHZW9sb2d5IFVuaXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJTdGF0dXNcIj4gU3RhdHVzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdGF0dXNcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnN0YXR1cyB9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiRnVsbC10aW1lXCI+RnVsbC10aW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJQYXJ0LXRpbWVcIj5QYXJ0LXRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkxlY3R1cmVyXCI+TGVjdHVyZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJDYXRlZ29yeVwiPiBDYXRlZ29yeSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiY2F0ZWdvcnlcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmNhdGVnb3J5IH0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJQZXJtYW5lbnRcIj5QZXJtYW5lbnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIlRlbXBvcmFyeVwiPlRlbXBvcmFyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1wbG95bWVudFBvc2l0aW9uXCI+IEVtcGxveW1lbnQgUG9zaXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVtcGxveW1lbnRQb3NpdGlvblwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1wbG95bWVudFBvc2l0aW9uIH0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zaXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJTdGFydERhdGVcIj4gU3RhcnQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwic3RhcnREYXRlXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5TdGFydERhdGUgfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZWRpdGFibGUgJiYgcHJvcHMucm9sZSE9NSAmJiA8YnV0dG9uIHR5cGUgPSBcInN1Ym1pdFwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGNvbC1tZC0xMlwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30+IFVwZGF0ZSA8L2J1dHRvbj4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMucm9sZT09NSAmJiA8YnV0dG9uIHR5cGUgPSBcInN1Ym1pdFwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGNvbC1tZC0xMlwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30+IEFkZCBGYWN1bHR5IDwvYnV0dG9uPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qeyBwcm9wcy5mYWN1bHR5RmxhZyAmJiA8UGVyc29uYWxJbmZvRGVwZW5kZW50cyAvPiB9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuZm9ybS1ncm91cC5yZXF1aXJlZCAuY29udHJvbC1sYWJlbDphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCIqIFwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2FsZXJ0IHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb25hbEluZm9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IGFkZFdvcmtFeHAgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZFdvcmtFeHAnXHJcblxyXG5jbGFzcyBXb3JrRXhwRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0bGV0IFdvcmtEZXRhaWxzID0ge1xyXG5cdFx0XHRlbXBsb3llck5hbWU6IFwiXCIsXHJcblx0XHRcdHBvc2l0aW9uOiBcIlwiLFxyXG5cdFx0XHRzdGFydERhdGU6IFwiXCIsXHJcblx0XHRcdGVuZERhdGU6IFwiXCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBcIlwiXHJcblx0XHR9XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxGb3JtaWtcclxuXHRcdFx0XHRpbml0aWFsVmFsdWVzPXtXb3JrRGV0YWlsc31cclxuXHRcdFx0XHRvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywge3Jlc2V0Rm9ybX0pID0+IHtcclxuXHRcdFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya2V4cGFsZXJ0XCIpXHJcblx0XHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgYWRkV29ya0V4cCh2YWx1ZXMsIHRoaXMucHJvcHMudG9rZW4pXHJcblx0XHRcdFx0XHRpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG5cdFx0XHRcdFx0XHRhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcblx0XHRcdFx0XHRcdGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuXHRcdFx0XHRcdFx0YWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuXHRcdFx0XHRcdFx0aWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQkKFwiI3dvcmtleHBhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0JChcIiN3b3JrZXhwYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJlc2V0Rm9ybSgpXHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycsICcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG5cdFx0XHRcdFx0PEZvcm0+XHJcblx0XHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PGg2PlJlcXVpcmVkPC9oNj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJFbXBsb3llcldvcmtFeHBlcmllbmNlW11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IEVtcGxveWVyIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZW1wbG95ZXJOYW1lXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG5hbWUgb2YgZW1wbG95ZXJcIiByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUG9zaXRpb25Xb3JrRXhwZXJpZW5jZVtdXCIgY2xhc3NOYW1lID0gXCJyZXF1aXJlZC1sYWJlbFwiPiBUaXRsZS9Qb3NpdGlvbiA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInBvc2l0aW9uXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHBvc2l0aW9uXCIgcmVxdWlyZWQgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIkRlc2NyaXB0aW9uV29ya0V4cGVyaWVuY2VbXVwiPiBEZXNjcmlwdGlvbiA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXIgPSBcIkFkZCBEZXNjcmlwdGlvblwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlN0YXJ0RGF0ZVdvcmtFeHBlcmllbmNlW11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdGFydERhdGVcIiByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiRW5kRGF0ZVdvcmtFeHBlcmllbmNlW11cIj4gRW5kIERhdGUgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJlbmREYXRlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZSA9IFwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBjb2wtbWQtMTJcIlxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0bGFiZWwucmVxdWlyZWQtbGFiZWw6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiKlwiO1xyXG5cdFx0XHRjb2xvcjogI2YwMDtcclxuXHRcdH1cclxuXHRcdGg2OmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDogXCIqIFwiO1xyXG5cdFx0XHRjb2xvcjogI2YwMDtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcblx0XHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9Gb3JtaWs+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya0V4cEZvcm07XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFdvcmtFeHBGb3JtIGZyb20gJy4vd29yay1leHAtZm9ybSdcclxuaW1wb3J0IEVtcGxveW1lbnRIaXN0b3J5IGZyb20gJy4vZW1wbG95bWVudC1oaXN0b3J5J1xyXG5pbXBvcnQgRW1wbG95bWVudEZvcm0gZnJvbSAnLi9lbXBsb3ltZW50LWZvcm0nXHJcbmltcG9ydCBOYW1lRGlzcGxheSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hbWUtZGlzcGxheSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiXHJcblxyXG5pbXBvcnQgdXBkYXRlV29ya0V4cCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlV29ya0V4cCdcclxuaW1wb3J0IGRlbGV0ZVdvcmtFeHAgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2RlbGV0ZVdvcmtFeHAnXHJcblxyXG5mdW5jdGlvbiBXb3JrRXhwZXJpZW5jZShwcm9wcyl7XHJcbiAgICBjb25zdCBuYW1lID0gcHJvcHMubmFtZVxyXG4gICAgbGV0IGRlbGV0ZVdvcmsgPSAwXHJcbiAgICBsZXQgZWRpdFdvcmsgPSAwXHJcbiAgICBjb25zdCBbY3VyckRhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIHdvcmtFeHBJZDogMCxcclxuICAgICAgICBlbXBsb3llck5hbWU6ICcnLFxyXG4gICAgICAgIHBvc2l0aW9uOicnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogJycsXHJcbiAgICAgICAgZW5kRGF0ZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICB9KVxyXG4gICAgbGV0IGNvbnRlbnQgXHJcblxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuW2tleV0ud29ya0V4cElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleSA9IHtwcm9wcy5jaGlsZHJlbltrZXldLndvcmtFeHBJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5lbXBsb3llck5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnBvc2l0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5zdGFydERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmVuZERhdGV9eyFwcm9wcy5jaGlsZHJlbltrZXldLmVuZERhdGUgJiYgPGRpdj5QcmVzZW50PC9kaXY+fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmVkaXRhYmxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRXb3JrRXhwZXJpZW5jZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQocHJvcHMuY2hpbGRyZW5ba2V5XS53b3JrRXhwSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkoZWRpdFdvcmspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2RlbGV0ZVdvcmtFeHBlcmllbmNlXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlKHByb3BzLmNoaWxkcmVuW2tleV0ud29ya0V4cElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICk7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb250ZW50ID0gPHRkIGNvbFNwYW4gPSBcIjZcIj48cCBhbGlnbiA9IFwiY2VudGVyXCI+Tm8gZGF0YSBhdmFpbGFibGUhPC9wPjwvdGQ+XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RWRpdChpZCkge1xyXG4gICAgICAgIGVkaXRXb3JrID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXREZWxldGUoaWQpIHtcclxuICAgICAgICBkZWxldGVXb3JrID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRLZXkoeCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS53b3JrRXhwSWQgPT0geCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShwcm9wcy5jaGlsZHJlbltrZXldKVxyXG4gICAgICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS5lbmREYXRlID09IFwiXCIgfHwgcHJvcHMuY2hpbGRyZW5ba2V5XS5lbmREYXRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIGVuZERhdGU6ICcnfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShpZCwgZXZlbnQpIHtcclxuICAgICAgICBzZXREYXRhKHsuLi5jdXJyRGF0YSwgW2lkXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBhbGlnbiA9IFwiY2VudGVyXCI+IFdvcmsgRXhwZXJpZW5jZSA8L2gyPlxyXG4gICAgICAgICAgICA8TmFtZURpc3BsYXkgdW5pdCA9IHtwcm9wcy51bml0fSBwb3NpdGlvbj17cHJvcHMucG9zaXRpb259PntuYW1lfTwvTmFtZURpc3BsYXk+XHJcbiAgICAgICAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCIgaWQ9XCJ3b3JrZXhwYWxlcnRcIiBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIn19PjwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgYWxpZ24gPSBcImNlbnRlclwiPiBXaXRoaW4gVVAgTWFuaWxhIDwvaDU+XHJcbiAgICAgICAgICAgIDxFbXBsb3ltZW50SGlzdG9yeSByb2xlPXtwcm9wcy5yb2xlfSB0b2tlbj17cHJvcHMudG9rZW59IGZhY3VsdHlJZD17cHJvcHMuZmFjdWx0eUlkfT57cHJvcHMuZW1wbG95bWVudH08L0VtcGxveW1lbnRIaXN0b3J5PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGg1IGFsaWduID0gXCJjZW50ZXJcIj4gT3V0c2lkZSBVUCBNYW5pbGEgPC9oNT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXkgPSBcImhlYWRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbXBsb3llcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UG9zaXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXJ0IERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVuZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7IHByb3BzLmVkaXRhYmxlICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXb3JrRXhwRm9ybSB0b2tlbiA9IHsgcHJvcHMudG9rZW4gfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IHByb3BzLnJvbGUgPT0gNSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgYWxpZ24gPVwiY2VudGVyXCI+IEFkZCBGYWN1bHR5IEVtcGxveW1lbnQgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8RW1wbG95bWVudEZvcm0gdG9rZW49e3Byb3BzLnRva2VufSBmYWN1bHR5SWQ9e3Byb3BzLmZhY3VsdHlJZH0gcG9zaXRpb25zTGlzdD17cHJvcHMucG9zaXRpb25zTGlzdH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImVkaXRXb3JrRXhwZXJpZW5jZVwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZWRpdFdvcmtFeHBlcmllbmNlTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0V29ya0V4cGVyaWVuY2VMYWJlbFwiPlVwZGF0ZSBXb3JrIEV4cGVyaWVuY2UgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJFbXBsb3llcldvcmtFeHBlcmllbmNlVXBkYXRlXCI+IEVtcGxveWVyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIkVtcGxveWVyV29ya0V4cGVyaWVuY2VVcGRhdGVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgbmFtZSBvZiBlbXBsb3llclwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEuZW1wbG95ZXJOYW1lIH0gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwiZW1wbG95ZXJOYW1lXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlBvc2l0aW9uV29ya0V4cGVyaWVuY2VVcGRhdGVcIj4gVGl0bGUvUG9zaXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiUG9zaXRpb25Xb3JrRXhwZXJpZW5jZVVwZGF0ZVwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBwb3NpdGlvblwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEucG9zaXRpb24gfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJwb3NpdGlvblwiLCBlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU3RhcnREYXRlV29ya0V4cGVyaWVuY2VVcGRhdGVcIj4gU3RhcnQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJTdGFydERhdGVXb3JrRXhwZXJpZW5jZVVwZGF0ZVwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEuc3RhcnREYXRlIH0gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwic3RhcnREYXRlXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRW5kRGF0ZVdvcmtFeHBlcmllbmNlVXBkYXRlXCI+IEVuZCBEYXRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcIkVuZERhdGVXb3JrRXhwZXJpZW5jZVVwZGF0ZVwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEuZW5kRGF0ZSB9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcImVuZERhdGVcIiwgZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJEZXNjcmlwdGlvbldvcmtFeHBlcmllbmNlVXBkYXRlXCI+IERlc2NyaXB0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIkRlc2NyaXB0aW9uV29ya0V4cGVyaWVuY2VVcGRhdGVcIiBwbGFjZWhvbGRlciA9IFwiQWRkIERlc2NyaXB0aW9uXCIgZGVmYXVsdFZhbHVlID0geyBjdXJyRGF0YS5kZXNjcmlwdGlvbiB9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcImRlc2NyaXB0aW9uXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0V29ya0V4cGVyaWVuY2UnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtleHBhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHVwZGF0ZVdvcmtFeHAoY3VyckRhdGEsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN3b3JrZXhwYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN3b3JrZXhwYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJkZWxldGVXb3JrRXhwZXJpZW5jZVwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVsZXRlV29ya0V4cGVyaWVuY2VMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImRlbGV0ZVdvcmtFeHBlcmllbmNlTGFiZWxcIj5EZWxldGUgV29yayBFeHBlcmllbmNlIEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgd29yayBleHBlcmllbmNlIGluZm9ybWF0aW9uPyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPk5vLCBkb24ndCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNkZWxldGVXb3JrRXhwZXJpZW5jZScpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya2V4cGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZGVsZXRlV29ya0V4cChkZWxldGVXb3JrLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjd29ya2V4cGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjd29ya2V4cGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtFeHBlcmllbmNlXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFkZEZhY3VsdHkoZGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcblx0XHJcblx0dHJ5IHtcclxuXHQgICAgaWYgKHRva2VuKSB7XHQgICAgICBcclxuXHQgICAgXHRpZihkYXRhLnVuaXQgPT0gXCJcIikge1xyXG5cdFx0XHRcdGRhdGEudW5pdCA9IDFcclxuXHRcdFx0fVxyXG5cdCAgICBcdGlmKGRhdGEuY2F0ZWdvcnkgPT0gXCJcIikge1xyXG5cdFx0XHRcdGRhdGEuY2F0ZWdvcnkgPSBcIlBlcm1hbmVudFwiXHJcblx0XHRcdH1cclxuXHRcdFx0aWYoZGF0YS5zdGF0dXMgPT0gXCJcIikge1xyXG5cdFx0XHRcdGRhdGEuc3RhdHVzID0gXCJGdWxsLXRpbWVcIlxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGRhdGEuZW1wbG95bWVudFBvc2l0aW9uID09IFwiXCIpIHtcclxuXHRcdFx0XHRkYXRhLmVtcGxveW1lbnRQb3NpdGlvbiA9IDFcclxuXHRcdFx0fVxyXG5cdCAgICAgICAgbGV0IHVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL3VzZXIvYWRkJztcclxuXHRcdCAgICBsZXQgaGVhZGVyID0ge1xyXG5cdFx0ICAgICAgICBoZWFkZXJzOiB7XHJcblx0XHQgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9XHJcblx0ICAgICAgICB0cnkge1xyXG5cdCAgICAgICAgXHRsZXQgYm9keSA9IHtcclxuXHRcdFx0XHRcdFwicm9sZVwiOiBcIjFcIixcclxuXHRcdFx0XHRcdFwidXBlbWFpbFwiOiBgJHtkYXRhLnVwZW1haWx9YCxcclxuXHRcdFx0XHRcdFwicGFzc3dvcmRcIjogXCJwYXNzd29yZFwiLFxyXG5cdFx0XHRcdFx0XCJwZXJzb25hbEluZm9cIjoge1xyXG5cdFx0XHRcdFx0XHRmaXJzdE5hbWU6IGAke2RhdGEuZmlyc3ROYW1lfWAsIFxyXG5cdFx0XHRcdFx0XHRsYXN0TmFtZTogYCR7ZGF0YS5sYXN0TmFtZX1gLFxyXG5cdFx0XHRcdFx0XHRtaWRkbGVOYW1lOiBgJHtkYXRhLm1pZGRsZU5hbWV9YCxcclxuXHRcdFx0XHRcdFx0c3VmZml4OiBgJHtkYXRhLnN1ZmZpeH1gLFxyXG5cdFx0XHRcdFx0XHRnZW5kZXI6IGAke2RhdGEuZ2VuZGVyfWAsXHJcblx0XHRcdFx0XHRcdGRhdGVPZkJpcnRoOiBgJHtkYXRhLmRhdGVPZkJpcnRofWAsXHJcblx0XHRcdFx0XHRcdHBsYWNlT2ZCaXJ0aDogYCR7ZGF0YS5wbGFjZU9mQmlydGh9YCxcclxuXHRcdFx0XHRcdFx0cGVybWFuZW50QWRkcmVzczogYCR7ZGF0YS5wZXJtYW5lbnRBZGRyZXNzfWAsXHJcblx0XHRcdFx0XHRcdHByZXNlbnRBZGRyZXNzOiBgJHtkYXRhLnByZXNlbnRBZGRyZXNzfWAsXHJcblx0XHRcdFx0XHRcdG1vYmlsZTogYCR7ZGF0YS5tb2JpbGV9YCxcclxuXHRcdFx0XHRcdFx0bGFuZGxpbmU6IGAke2RhdGEubGFuZGxpbmV9YCxcclxuXHRcdFx0XHRcdFx0ZW1haWw6IGAke2RhdGEuZW1haWx9YCxcclxuXHRcdFx0XHRcdFx0Y2l2aWxTdGF0dXM6IGAke2RhdGEuY2l2aWxTdGF0dXN9YCxcclxuXHRcdFx0XHRcdFx0cmVsaWdpb246IGAke2RhdGEucmVsaWdpb259YCxcclxuXHRcdFx0XHRcdFx0ZW1lcmdlbmN5Q29udGFjdFBlcnNvbjogYCR7ZGF0YS5lbWVyZ2VuY3lDb250YWN0UGVyc29ufWAsXHJcblx0XHQgIFx0XHRcdFx0ZW1lcmdlbmN5Q29udGFjdE51bWJlcjogYCR7ZGF0YS5lbWVyZ2VuY3lDb250YWN0TnVtYmVyfWAsXHJcblx0XHRcdFx0XHRcdHRlYWNoaW5nUGhpbG9zb3BoeTogYCR7ZGF0YS5waGlsb3NvcGh5fWBcclxuXHRcdCAgXHRcdFx0fSxcclxuXHRcdFx0XHRcdFwidW5pdElkXCI6IGAke2RhdGEudW5pdH1gLFxyXG5cdFx0XHRcdFx0XCJlbXBsb3ltZW50UG9zaXRpb25JZFwiOiBgJHtkYXRhLmVtcGxveW1lbnRQb3NpdGlvbn1gLFxyXG5cdFx0XHRcdFx0XCJzdGF0dXNcIjogYCR7ZGF0YS5zdGF0dXN9YCxcclxuXHRcdFx0XHRcdFwiY2F0ZWdvcnlcIjogYCR7ZGF0YS5jYXRlZ29yeX1gLFxyXG5cdFx0XHRcdFx0XCJzdGFydERhdGVcIjogYCR7ZGF0YS5zdGFydERhdGV9YFxyXG5cdFx0ICBcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGJvZHkpXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3MucmVzdWx0Lm1lc3NhZ2UpXHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRFbXBsb3ltZW50KGRhdGEsIHRva2VuLCBmYWN1bHR5SWQpIHtcclxuXHR0cnkge1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdGxldCBib2QgPSB7XHJcbiAgICAgICAgICAgICAgICBmYWN1bHR5SWQ6IGAke2ZhY3VsdHlJZH1gLFxyXG4gICAgICAgICAgICAgICAgZW1wbG95bWVudFBvc2l0aW9uSWQ6IGAke2RhdGEuZW1wbG95bWVudFBvc2l0aW9uSWR9YCxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogYCR7ZGF0YS5zdGF0dXN9YCxcclxuXHRcdFx0XHRjYXRlZ29yeTogYCR7ZGF0YS5jYXRlZ29yeX1gLFxyXG5cdFx0XHRcdHN0YXJ0RGF0ZTogYCR7ZGF0YS5zdGFydERhdGV9YFxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdGlmKGAke2RhdGEuZW5kRGF0ZX1gKSB7XHJcbiAgICAgICAgICAgICAgICBib2QuZW5kRGF0ZSA9IGAke2RhdGEuZW5kRGF0ZX1gXHJcblx0XHRcdH1cclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL2ZhY3VsdHkvYmFzaWMtaW5mby9hZGQvZW1wbG95bWVudFwiLCBib2QsIHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWRkV29ya0V4cChkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0bGV0IGJvZCA9IG51bGxcclxuXHRcdFx0aWYoYCR7ZGF0YS5lbmREYXRlfWAgPT0gXCJcIikge1xyXG5cdFx0XHRcdGJvZCA9IHtcclxuXHRcdFx0XHRcdGZhY3VsdHlJZDogYCR7ZmFjdWx0eUlkfWAsXHJcblx0XHRcdFx0XHRlbXBsb3llck5hbWU6IGAke2RhdGEuZW1wbG95ZXJOYW1lfWAsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYCR7ZGF0YS5wb3NpdGlvbn1gLFxyXG5cdFx0XHRcdFx0c3RhcnREYXRlOiBgJHtkYXRhLnN0YXJ0RGF0ZX1gLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IGAke2RhdGEuZGVzY3JpcHRpb259YFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRib2QgPSB7XHJcblx0XHRcdFx0XHRmYWN1bHR5SWQ6IGAke2ZhY3VsdHlJZH1gLFxyXG5cdFx0XHRcdFx0ZW1wbG95ZXJOYW1lOiBgJHtkYXRhLmVtcGxveWVyTmFtZX1gLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IGAke2RhdGEucG9zaXRpb259YCxcclxuXHRcdFx0XHRcdHN0YXJ0RGF0ZTogYCR7ZGF0YS5zdGFydERhdGV9YCxcclxuXHRcdFx0XHRcdGVuZERhdGU6IGAke2RhdGEuZW5kRGF0ZX1gLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IGAke2RhdGEuZGVzY3JpcHRpb259YFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZC93b3JrLWV4cFwiLCBib2QsIHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3ltZW50KGRhdGEsIHRva2VuLCBmYWN1bHR5SWQpIHsgXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9mYWN1bHR5L2Jhc2ljLWluZm8vXCIgKyBmYWN1bHR5SWQgKyBcIi9lbXBsb3ltZW50XCIsIHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGVtcGxveW1lbnRJbmZvSWQ6IGAke2RhdGF9YFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSAgY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlV29ya0V4cChkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvZmFjdWx0eS9iYXNpYy1pbmZvL1wiICsgZmFjdWx0eUlkICsgXCIvd29yay1leHBcIiwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0d29ya0V4cElkOiBgJHtkYXRhfWBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gIGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtcGxveW1lbnQoZGF0YSwgdG9rZW4sIGZhY3VsdHlJZCkge1xyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1xyXG5cdCAgICAgICAgbGV0IHVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYmFzaWMtaW5mby8nICsgZmFjdWx0eUlkO1xyXG5cdFx0ICAgIGxldCBib2QgPSB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3ltZW50SW5mb0lkOiBgJHtkYXRhLmVtcGxveW1lbnRJbmZvSWR9YCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogYCR7ZGF0YS5zdGFydERhdGV9YFxyXG4gICAgICAgICAgICB9XHJcblx0XHQgICAgaWYoZGF0YS5lbmREYXRlID09IFwiXCIgfHwgZGF0YS5lbmREYXRlID09IG51bGwpIFxyXG5cdFx0ICAgIFx0Ym9kLmVuZERhdGUgPSBudWxsXHJcbiAgICAgICAgICAgIGVsc2UgYm9kLmVuZERhdGUgPSBgJHtkYXRhLmVuZERhdGV9YFxyXG5cdCAgICAgICAgdHJ5IHsgXHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQodXJsICsgXCIvZW1wbG95bWVudFwiLCBib2QsIHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coYWNjZXNzLnJlc3VsdC5tZXNzYWdlKVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmFjdWx0eShkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1x0ICAgICAgXHJcblx0ICAgICAgICBsZXQgdXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvLycgKyBmYWN1bHR5SWQ7XHJcblx0XHQgICAgXHJcblx0ICAgICAgICB0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KHVybCArIFwiL3BlcnNvbmFsXCIsIHtcclxuXHRcdFx0XHRcdGZpcnN0TmFtZTogYCR7ZGF0YS5maXJzdE5hbWV9YCwgXHJcblx0XHRcdFx0XHRsYXN0TmFtZTogYCR7ZGF0YS5sYXN0TmFtZX1gLFxyXG5cdFx0XHRcdFx0bWlkZGxlTmFtZTogYCR7ZGF0YS5taWRkbGVOYW1lfWAsXHJcblx0XHRcdFx0XHRzdWZmaXg6IGAke2RhdGEuc3VmZml4fWAsXHJcblx0XHRcdFx0XHRwZXJtYW5lbnRBZGRyZXNzOiBgJHtkYXRhLnBlcm1hbmVudEFkZHJlc3N9YCxcclxuXHRcdFx0XHRcdHByZXNlbnRBZGRyZXNzOiBgJHtkYXRhLnByZXNlbnRBZGRyZXNzfWAsXHJcblx0XHRcdFx0XHRtb2JpbGU6IGAke2RhdGEubW9iaWxlfWAsXHJcblx0XHRcdFx0XHRsYW5kbGluZTogYCR7ZGF0YS5sYW5kbGluZX1gLFxyXG5cdFx0XHRcdFx0ZW1haWw6IGAke2RhdGEuZW1haWx9YCxcclxuXHRcdFx0XHRcdGNpdmlsU3RhdHVzOiBgJHtkYXRhLmNpdmlsU3RhdHVzfWAsXHJcblx0XHRcdFx0XHRyZWxpZ2lvbjogYCR7ZGF0YS5yZWxpZ2lvbn1gLFxyXG5cdFx0XHRcdFx0ZW1lcmdlbmN5Q29udGFjdFBlcnNvbjogYCR7ZGF0YS5lbWVyZ2VuY3lDb250YWN0UGVyc29ufWAsXHJcblx0ICBcdFx0XHRcdGVtZXJnZW5jeUNvbnRhY3ROdW1iZXI6IGAke2RhdGEuZW1lcmdlbmN5Q29udGFjdE51bWJlcn1gLFxyXG5cdFx0XHRcdFx0dGVhY2hpbmdQaGlsb3NvcGh5OiBgJHtkYXRhLnBoaWxvc29waHl9YCxcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVx0XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coYWNjZXNzLnJlc3VsdC5tZXNzYWdlKVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV29ya0V4cChkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1xyXG5cdCAgICAgICAgbGV0IHVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYmFzaWMtaW5mby8nICsgZmFjdWx0eUlkO1xyXG5cdFx0ICAgIGxldCBib2QgPSBudWxsXHJcblx0XHQgICAgaWYoZGF0YS5lbmREYXRlID09IFwiXCIgfHwgZGF0YS5lbmREYXRlID09IG51bGwpIHtcclxuXHRcdCAgICBcdGJvZCA9IHtcclxuXHRcdCAgICBcdFx0d29ya0V4cElkOiBgJHtkYXRhLndvcmtFeHBJZH1gLFxyXG5cdFx0XHRcdFx0ZW1wbG95ZXJOYW1lOiBgJHtkYXRhLmVtcGxveWVyTmFtZX1gLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IGAke2RhdGEucG9zaXRpb259YCxcclxuXHRcdFx0XHRcdHN0YXJ0RGF0ZTogYCR7ZGF0YS5zdGFydERhdGV9YCxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBgJHtkYXRhLmRlc2NyaXB0aW9ufWBcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0ICAgIFx0Ym9kID0ge1xyXG5cdFx0ICAgIFx0XHR3b3JrRXhwSWQ6IGAke2RhdGEud29ya0V4cElkfWAsXHJcblx0XHRcdFx0XHRlbXBsb3llck5hbWU6IGAke2RhdGEuZW1wbG95ZXJOYW1lfWAsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYCR7ZGF0YS5wb3NpdGlvbn1gLFxyXG5cdFx0XHRcdFx0c3RhcnREYXRlOiBgJHtkYXRhLnN0YXJ0RGF0ZX1gLFxyXG5cdFx0XHRcdFx0ZW5kRGF0ZTogYCR7ZGF0YS5lbmREYXRlfWAsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogYCR7ZGF0YS5kZXNjcmlwdGlvbn1gXHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIFxyXG5cdCAgICAgICAgdHJ5IHsgXHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQodXJsICsgXCIvd29yay1leHBcIiwgYm9kLCB7XHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzcy5yZXN1bHQubWVzc2FnZSlcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=