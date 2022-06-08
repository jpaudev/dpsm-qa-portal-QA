exports.id = "components_faculty_basic-info_education_js";
exports.ids = ["components_faculty_basic-info_education_js"];
exports.modules = {

/***/ "./components/faculty/basic-info/education-form.js":
/*!*********************************************************!*\
  !*** ./components/faculty/basic-info/education-form.js ***!
  \*********************************************************/
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
/* harmony import */ var _services_faculty_basic_info_addEducation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/faculty/basic-info/addEducation */ "./services/faculty/basic-info/addEducation.js");

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\basic-info\\education-form.js";






class EducationForm extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    let EducationDetails = {
      institutionSchool: "",
      degreeType: "",
      degreeCert: "",
      majorSpecialization: "",
      startDate: "",
      endDate: "",
      proof: ""
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
      initialValues: EducationDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let alert = document.getElementById("educalert");
        let form = document.getElementById('educForm');
        let formData = new FormData(form);
        let res = await (0,_services_faculty_basic_info_addEducation__WEBPACK_IMPORTED_MODULE_5__.default)(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        alert.setAttribute("style", "visibility: visible");
        $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#educalert").slideUp(500);
        });
        resetForm();
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/basic-info');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
        id: "educForm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          className: "jsx-371132353"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-371132353"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "jsx-371132353",
          children: "Required"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-371132353" + " " + "form-row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-12",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "SchoolEducationalHistory[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " School/Institution "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "institutionSchool",
              id: "institutionSchool",
              placeholder: "Input school",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-371132353" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-2 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "control-label",
              htmlFor: "DegreeType",
              className: "jsx-371132353" + " " + "required-label",
              children: " Degree Type "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              as: "select",
              className: "form-control",
              name: "degreeType",
              id: "degreeType",
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "AA",
                className: "jsx-371132353",
                children: "AA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "AS",
                className: "jsx-371132353",
                children: "AS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "BA",
                className: "jsx-371132353",
                children: "BA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "BS",
                className: "jsx-371132353",
                children: "BS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "MA",
                className: "jsx-371132353",
                children: "MA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "MS",
                className: "jsx-371132353",
                children: "MS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "MD",
                className: "jsx-371132353",
                children: "MD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "PhD",
                className: "jsx-371132353",
                children: "PhD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "DEng",
                className: "jsx-371132353",
                children: "DEng"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "DrPH",
                className: "jsx-371132353",
                children: "DrPH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "DegreeEducationalHistory[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Degree/Certification "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "degreeCert",
              id: "degreeCert",
              placeholder: "Input degree",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "MajorEducationalHistory[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Major/Specialization "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "majorSpecialization",
              id: "majorSpecialization",
              placeholder: "Input major",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-371132353" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "StartDateEducationalHistory[]",
              className: "jsx-371132353" + " " + "required-label",
              children: " Start Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "startDate",
              id: "startDate",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EndDateEducationalHistory[]",
              className: "jsx-371132353",
              children: " End Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "endDate",
              id: "endDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-371132353" + " " + "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ProofEducationalHistory[]",
              className: "jsx-371132353",
              children: " Proof "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 26
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-371132353"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-371132353" + " " + "btn btn-primary col-md-12",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
          id: "371132353",
          children: "label.required-label.jsx-371132353:after{content:\"*\";color:#f00;}h6.jsx-371132353:before{content:\"* \";color:#f00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWppIE1hZ2xhbnF1ZVxcRGVza3RvcFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXGZhY3VsdHlcXGJhc2ljLWluZm9cXGVkdWNhdGlvbi1mb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThHZSxBQUdnQixBQUlDLFlBSEYsQ0FJQSxVQUhaLENBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBamkgTWFnbGFucXVlXFxEZXNrdG9wXFxkcHNtLXFhLXBvcnRhbFxcY29tcG9uZW50c1xcZmFjdWx0eVxcYmFzaWMtaW5mb1xcZWR1Y2F0aW9uLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgYWRkRWR1Y2F0aW9uIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hZGRFZHVjYXRpb24nXHJcblxyXG5jbGFzcyBFZHVjYXRpb25Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBFZHVjYXRpb25EZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBpbnN0aXR1dGlvblNjaG9vbDogXCJcIixcclxuICAgICAgICAgICAgZGVncmVlVHlwZTogXCJcIixcclxuICAgICAgICAgICAgZGVncmVlQ2VydDogXCJcIixcclxuICAgICAgICAgICAgbWFqb3JTcGVjaWFsaXphdGlvbjogXCJcIixcclxuICAgICAgICAgICAgc3RhcnREYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBlbmREYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBwcm9vZjogXCJcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtFZHVjYXRpb25EZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHtyZXNldEZvcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZHVjYWxlcnRcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWR1Y0Zvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYWRkRWR1Y2F0aW9uKGZvcm1EYXRhLCB0aGlzLnByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2VkdWNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKVxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpZCA9IFwiZWR1Y0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+UmVxdWlyZWQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJTY2hvb2xFZHVjYXRpb25hbEhpc3RvcnlbXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gU2Nob29sL0luc3RpdHV0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImluc3RpdHV0aW9uU2Nob29sXCIgaWQgPVwiaW5zdGl0dXRpb25TY2hvb2xcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgc2Nob29sXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMiByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkRlZ3JlZVR5cGVcIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IERlZ3JlZSBUeXBlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJkZWdyZWVUeXBlXCIgaWQgPSBcImRlZ3JlZVR5cGVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkFBXCI+QUE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkFTXCI+QVM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkJBXCI+QkE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkJTXCI+QlM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1BXCI+TUE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1TXCI+TVM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1EXCI+TUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIlBoRFwiPlBoRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiREVuZ1wiPkRFbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkRyUEhcIj5EclBIPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlZ3JlZUVkdWNhdGlvbmFsSGlzdG9yeVtdXCIgY2xhc3NOYW1lID0gXCJyZXF1aXJlZC1sYWJlbFwiPiBEZWdyZWUvQ2VydGlmaWNhdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJkZWdyZWVDZXJ0XCIgaWQgPSBcImRlZ3JlZUNlcnRcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgZGVncmVlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIk1ham9yRWR1Y2F0aW9uYWxIaXN0b3J5W11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IE1ham9yL1NwZWNpYWxpemF0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm1ham9yU3BlY2lhbGl6YXRpb25cIiBpZCA9IFwibWFqb3JTcGVjaWFsaXphdGlvblwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBtYWpvclwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU3RhcnREYXRlRWR1Y2F0aW9uYWxIaXN0b3J5W11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInN0YXJ0RGF0ZVwiIGlkID0gXCJzdGFydERhdGVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJFbmREYXRlRWR1Y2F0aW9uYWxIaXN0b3J5W11cIj4gRW5kIERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVuZERhdGVcIiBpZCA9IFwiZW5kRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlByb29mRWR1Y2F0aW9uYWxIaXN0b3J5W11cIj4gUHJvb2YgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImZpbGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbC1maWxlXCIgbmFtZSA9IFwicHJvb2ZcIiBpZCA9IFwicHJvb2ZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRsYWJlbC5yZXF1aXJlZC1sYWJlbDphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIqXCI7XHJcblx0XHRcdGNvbG9yOiAjZjAwO1xyXG5cdFx0fVxyXG5cdFx0aDY6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OiBcIiogXCI7XHJcblx0XHRcdGNvbG9yOiAjZjAwO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfSAgXHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uRm9ybVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Aji Maglanque\\\\Desktop\\\\dpsm-qa-portal\\\\components\\\\faculty\\\\basic-info\\\\education-form.js */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EducationForm);

/***/ }),

/***/ "./components/faculty/basic-info/education.js":
/*!****************************************************!*\
  !*** ./components/faculty/basic-info/education.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _education_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education-form */ "./components/faculty/basic-info/education-form.js");
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/faculty/downloadProof */ "./services/faculty/downloadProof.js");
/* harmony import */ var _services_faculty_basic_info_deleteEducation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/faculty/basic-info/deleteEducation */ "./services/faculty/basic-info/deleteEducation.js");
/* harmony import */ var _services_faculty_basic_info_updateEducation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/faculty/basic-info/updateEducation */ "./services/faculty/basic-info/updateEducation.js");
/* harmony import */ var _services_faculty_basic_info_approveEducation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/faculty/basic-info/approveEducation */ "./services/faculty/basic-info/approveEducation.js");

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\basic-info\\education.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function Education(props) {
  let deleteEduc = 0;
  let editEduc = 0;
  let approveEduc = 0;
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_5___default().useState({
    educInfoId: 0,
    institutionSchool: '',
    degreeType: '',
    degreeCert: '',
    majorSpecialization: '',
    startDate: '',
    endDate: ''
  });
  let content;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].degreeCert
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].degreeType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].majorSpecialization
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].institutionSchool
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].startDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: [props.children[key].endDate, !props.children[key].endDate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "Present"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 91
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: [props.children[key].proof && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "btn-grp",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: () => {
                let file = props.children[key].proof;
                (0,_services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_7__.default)(file, props.token);
              },
              children: "Download"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-info",
              href: "http://localhost:3001/" + props.children[key].proof,
              style: {
                color: 'white'
              },
              target: "_blank",
              children: "Preview"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 33
          }, this), !props.children[key].proof && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "None"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].approverRemarks || 'None'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, this), props.editable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "btn-grp",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#editEducation",
              onClick: () => {
                setEdit(props.children[key].educInfoId);
                setKey(editEduc);
              },
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#deleteEducation",
              onClick: () => {
                setDelete(props.children[key].educInfoId);
              },
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 29
        }, this), props.approver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "btn-grp",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#approveEducation",
              onClick: () => {
                setApprove(props.children[key].educInfoId);
              },
              children: "Approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#rejectEducation",
              onClick: () => {
                setApprove(props.children[key].educInfoId);
              },
              children: "Reject"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 29
        }, this)]
      }, props.children[key].educInfoId, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this);
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colSpan: "9",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }, this);
  }

  let res;

  function setEdit(id) {
    editEduc = id;
  }

  function setDelete(id) {
    deleteEduc = id;
  }

  function setApprove(id) {
    approveEduc = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].educInfoId == x) {
        setData(props.children[key]);

        if (props.children[key].endDate == "" || props.children[key].endDate == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            endDate: ''
          }));
        }

        if (props.children[key].proof) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            proof: props.children[key].proof
          }));
        } else {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            proof: 'None'
          }));
        }
      }
    });
  } // let message


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      children: " Educational History "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_3__.default, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "alert alert-success",
      role: "alert",
      id: "educalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Degree/Certification"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Degree Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Major/Specialization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Institution/School"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Approver Remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 29
            }, this), (props.editable || props.approver) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 69
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, this), content]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, this), props.editable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_education_form__WEBPACK_IMPORTED_MODULE_2__.default, {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "editEducation",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editEducationLabel",
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
              id: "editEducationLabel",
              children: "Update Education Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
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
                lineNumber: 169,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("educalert");
              let form = document.getElementById('editEducForm');
              let formData = new FormData(form);
              formData.append('educInfoId', currData.educInfoId);
              let res = await (0,_services_faculty_basic_info_updateEducation__WEBPACK_IMPORTED_MODULE_9__.default)(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#educalert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/basic-info', '/faculty/basic-info');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "editEducForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "SchoolEducationHistoryUpdate",
                      children: " School/Institution "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "institutionSchool",
                      id: "institutionSchool",
                      placeholder: "Input school",
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "DegreeEducationalHistoryUpdate",
                      children: " Degree Type "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      as: "select",
                      className: "form-control",
                      name: "degreeType",
                      id: "degreeType",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "AA",
                        children: "AA"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "AS",
                        children: "AS"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "BA",
                        children: "BA"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "BS",
                        children: "BS"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "MA",
                        children: "MA"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "MS",
                        children: "MS"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 216,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "MD",
                        children: "MD"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 217,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "PhD",
                        children: "PhD"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 218,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "DEng",
                        children: "DEng"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "DrPH",
                        children: "DrPH"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 220,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "DegreeEducationalHistoryUpdate",
                      children: " Degree/Certification "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "degreeCert",
                      id: "degreeCert",
                      placeholder: "Input degree"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "MajorEducationalHistoryUpdate",
                      children: " Major/Specialization "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "majorSpecialization",
                      id: "majorSpecialization",
                      placeholder: "Input major"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "StartDateEducationalHistoryUpdate",
                      children: " Start Date "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "date",
                      name: "startDate",
                      id: "startDate",
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 239,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "EndDateEducationalHistoryUpdate",
                      children: " End Date "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 244,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "date",
                      name: "endDate",
                      id: "endDate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "proof",
                      children: [" Add/Edit Proof [Uploaded: ", currData.proof, "] "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "proof",
                      id: "proof",
                      value: undefined
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 251,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  "data-dismiss": "modal",
                  children: "Close"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#editEducation').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "deleteEducation",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteEducationLabel",
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
              id: "deleteEducationLabel",
              children: "Delete Education Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
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
                lineNumber: 274,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this education information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 277,
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
              lineNumber: 282,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: async () => {
                let alert = document.getElementById("educalert");
                $('#deleteEducation').modal('toggle');
                let res = await (0,_services_faculty_basic_info_deleteEducation__WEBPACK_IMPORTED_MODULE_8__.default)(deleteEduc, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#educalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/basic-info', '/faculty/basic-info');
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "approveEducation",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveEducationLabel",
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
              id: "approveEducationLabel",
              children: "Approve Education Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
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
                lineNumber: 314,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to approve this education information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: async () => {
                let alert = document.getElementById("educalert");
                $('#approveEducation').modal('toggle');
                let formData = new FormData();
                formData.append('educInfoId', approveEduc);
                let res = await (0,_services_faculty_basic_info_approveEducation__WEBPACK_IMPORTED_MODULE_10__.default)(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#educalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
              },
              children: "Yes, approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "rejectEducation",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectEducationLabel",
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
              id: "rejectEducationLabel",
              children: "Reject Education Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 356,
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
                lineNumber: 358,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("educalert");
              $('#rejectEducation').modal('toggle');
              let form = document.getElementById('rejectEducForm');
              let formData = new FormData(form);
              formData.append('educInfoId', approveEduc);
              let res = await (0,_services_faculty_basic_info_approveEducation__WEBPACK_IMPORTED_MODULE_10__.default)(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#educalert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "rejectEducForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 393,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "RejectionRemarks",
                      children: " Reason/Remarks for Rejection "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 396,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "approverRemarks",
                      placeholder: "Input remarks",
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 397,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 395,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 394,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 392,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  "data-dismiss": "modal",
                  children: "Close"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 402,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#rejectEducation').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 403,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 401,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 391,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 361,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./components/name-display.js":
/*!************************************!*\
  !*** ./components/name-display.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\name-display.js";

function NameDisplay(props) {
  if (props.children != null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        align: "center",
        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("u", {
          children: props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 5,
          columnNumber: 27
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        align: "center",
        children: [" ", props.position, ", ", props.unit, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 4
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (NameDisplay);

/***/ }),

/***/ "./services/faculty/basic-info/addEducation.js":
/*!*****************************************************!*\
  !*** ./services/faculty/basic-info/addEducation.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addEducation; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function addEducation(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        if (formData.get('proof') == "") {
          formData.delete('proof');
        }

        if (formData.get('endDate') == "") {
          formData.delete('endDate');
        }

        formData.append('facultyId', facultyId);
        formData.append('status', 'Pending');
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'POST',
          url: "http://localhost:3001/api" + '/faculty/basic-info/add/education',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
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

/***/ "./services/faculty/basic-info/approveEducation.js":
/*!*********************************************************!*\
  !*** ./services/faculty/basic-info/approveEducation.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ approveEducation; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function approveEducation(formData, approveFlag, facultyId, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let status;

  if (approveFlag) {
    if (cookieData.role == 2) {
      status = 'Verified';
    } else if (cookieData.role == 3) {
      status = 'Approved';
    }
  } else {
    status = 'Rejected';
    formData.set('approverRemarks', cookieData.name + ': ' + formData.get('approverRemarks'));
  }

  formData.append('status', status);

  try {
    if (token) {
      try {
        let url = "http://localhost:3001/api" + '/faculty/basic-info/' + facultyId;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'PUT',
          url: url + '/education',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
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

/***/ "./services/faculty/basic-info/deleteEducation.js":
/*!********************************************************!*\
  !*** ./services/faculty/basic-info/deleteEducation.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deleteEducation; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function deleteEducation(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api" + "/faculty/basic-info/" + facultyId + "/education", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            educInfoId: `${data}`
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

/***/ "./services/faculty/basic-info/updateEducation.js":
/*!********************************************************!*\
  !*** ./services/faculty/basic-info/updateEducation.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateEducation; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function updateEducation(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = "http://localhost:3001/api" + '/faculty/basic-info/' + facultyId;

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      if (formData.get('endDate') == "") {
        formData.delete('endDate');
      }

      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'PUT',
        url: url + '/education',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } else {
      console.log(access.result.message);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ }),

/***/ "./services/faculty/downloadProof.js":
/*!*******************************************!*\
  !*** ./services/faculty/downloadProof.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ downloadProof; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function downloadProof(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          url: "http://localhost:3001/api" + `/download/${data}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          },
          responseType: 'blob'
        }).then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${data}`); //or any other extension

          document.body.appendChild(link);
          link.click();
        });
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL2VkdWNhdGlvbi1mb3JtLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vZWR1Y2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9uYW1lLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vYWRkRWR1Y2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FwcHJvdmVFZHVjYXRpb24uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vZGVsZXRlRWR1Y2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL3VwZGF0ZUVkdWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvZG93bmxvYWRQcm9vZi5qcyJdLCJuYW1lcyI6WyJFZHVjYXRpb25Gb3JtIiwiUmVhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiRWR1Y2F0aW9uRGV0YWlscyIsImluc3RpdHV0aW9uU2Nob29sIiwiZGVncmVlVHlwZSIsImRlZ3JlZUNlcnQiLCJtYWpvclNwZWNpYWxpemF0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInByb29mIiwidmFsdWVzIiwicmVzZXRGb3JtIiwiYWxlcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9ybSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJyZXMiLCJhZGRFZHVjYXRpb24iLCJ0b2tlbiIsInN1Y2Nlc3MiLCJjbGFzc05hbWUiLCJzdHlsZSIsImlubmVySFRNTCIsIm1lc3NhZ2UiLCJlcnJvciIsInNldEF0dHJpYnV0ZSIsIiQiLCJmYWRlVG8iLCJzbGlkZVVwIiwiUm91dGVyIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzU3VibWl0dGluZyIsIkVkdWNhdGlvbiIsImRlbGV0ZUVkdWMiLCJlZGl0RWR1YyIsImFwcHJvdmVFZHVjIiwiY3VyckRhdGEiLCJzZXREYXRhIiwiZWR1Y0luZm9JZCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJmaWxlIiwiZG93bmxvYWRQcm9vZiIsInByb2Nlc3MiLCJjb2xvciIsInN0YXR1cyIsImFwcHJvdmVyUmVtYXJrcyIsImVkaXRhYmxlIiwic2V0RWRpdCIsInNldEtleSIsInNldERlbGV0ZSIsImFwcHJvdmVyIiwic2V0QXBwcm92ZSIsImlkIiwieCIsInVuaXQiLCJwb3NpdGlvbiIsIm5hbWUiLCJ2aXNpYmlsaXR5IiwiYXBwZW5kIiwidXBkYXRlRWR1Y2F0aW9uIiwidW5kZWZpbmVkIiwibW9kYWwiLCJkZWxldGVFZHVjYXRpb24iLCJhcHByb3ZlRWR1Y2F0aW9uIiwiZmFjdWx0eUlkIiwiTmFtZURpc3BsYXkiLCJjb29raWVEYXRhIiwiand0IiwiZ2V0IiwiZGVsZXRlIiwicmVzcG9uc2UiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImVyciIsImNvbnNvbGUiLCJhcHByb3ZlRmxhZyIsInJvbGUiLCJzZXQiLCJsb2ciLCJhY2Nlc3MiLCJyZXN1bHQiLCJyZXNwb25zZVR5cGUiLCJ0aGVuIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQmxvYiIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtB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Q0ssS0FBTDtBQUNBLFNBWnNCLENBQXZCO0FBYUEsT0FkRCxDQWNFLE9BQU9uQixHQUFQLEVBQVk7QUFDYkMsZUFBTyxDQUFDNUQsS0FBUixDQUFjMkQsR0FBZDtBQUNBLGVBQU9BLEdBQVA7QUFDQTtBQUNEO0FBQ0QsR0FyQkQsQ0FxQkUsT0FBT0EsR0FBUCxFQUFZO0FBQ2JDLFdBQU8sQ0FBQzVELEtBQVIsQ0FBYzJELEdBQWQ7QUFDQSxXQUFPQSxHQUFQO0FBQ0E7QUFDRCxDIiwiZmlsZSI6ImNvbXBvbmVudHNfZmFjdWx0eV9iYXNpYy1pbmZvX2VkdWNhdGlvbl9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhZGRFZHVjYXRpb24gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZEVkdWNhdGlvbidcclxuXHJcbmNsYXNzIEVkdWNhdGlvbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IEVkdWNhdGlvbkRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgIGluc3RpdHV0aW9uU2Nob29sOiBcIlwiLFxyXG4gICAgICAgICAgICBkZWdyZWVUeXBlOiBcIlwiLFxyXG4gICAgICAgICAgICBkZWdyZWVDZXJ0OiBcIlwiLFxyXG4gICAgICAgICAgICBtYWpvclNwZWNpYWxpemF0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVuZERhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHByb29mOiBcIlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e0VkdWNhdGlvbkRldGFpbHN9XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywge3Jlc2V0Rm9ybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhbGVydFwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZHVjRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhZGRFZHVjYXRpb24oZm9ybURhdGEsIHRoaXMucHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZWR1Y2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2VkdWNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGlkID0gXCJlZHVjRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5SZXF1aXJlZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlNjaG9vbEVkdWNhdGlvbmFsSGlzdG9yeVtdXCIgY2xhc3NOYW1lID0gXCJyZXF1aXJlZC1sYWJlbFwiPiBTY2hvb2wvSW5zdGl0dXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiaW5zdGl0dXRpb25TY2hvb2xcIiBpZCA9XCJpbnN0aXR1dGlvblNjaG9vbFwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBzY2hvb2xcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRGVncmVlVHlwZVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gRGVncmVlIFR5cGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImRlZ3JlZVR5cGVcIiBpZCA9IFwiZGVncmVlVHlwZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiQUFcIj5BQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiQVNcIj5BUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiQkFcIj5CQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiQlNcIj5CUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiTUFcIj5NQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiTVNcIj5NUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiTURcIj5NRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiUGhEXCI+UGhEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJERW5nXCI+REVuZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiRHJQSFwiPkRyUEg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVncmVlRWR1Y2F0aW9uYWxIaXN0b3J5W11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IERlZ3JlZS9DZXJ0aWZpY2F0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImRlZ3JlZUNlcnRcIiBpZCA9IFwiZGVncmVlQ2VydFwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBkZWdyZWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiTWFqb3JFZHVjYXRpb25hbEhpc3RvcnlbXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gTWFqb3IvU3BlY2lhbGl6YXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibWFqb3JTcGVjaWFsaXphdGlvblwiIGlkID0gXCJtYWpvclNwZWNpYWxpemF0aW9uXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG1ham9yXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJTdGFydERhdGVFZHVjYXRpb25hbEhpc3RvcnlbXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gU3RhcnQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwic3RhcnREYXRlXCIgaWQgPSBcInN0YXJ0RGF0ZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkVuZERhdGVFZHVjYXRpb25hbEhpc3RvcnlbXVwiPiBFbmQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZW5kRGF0ZVwiIGlkID0gXCJlbmREYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUHJvb2ZFZHVjYXRpb25hbEhpc3RvcnlbXVwiPiBQcm9vZiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJwcm9vZlwiIGlkID0gXCJwcm9vZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBjb2wtbWQtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdGxhYmVsLnJlcXVpcmVkLWxhYmVsOmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIipcIjtcclxuXHRcdFx0Y29sb3I6ICNmMDA7XHJcblx0XHR9XHJcblx0XHRoNjpiZWZvcmV7XHJcblx0XHRcdGNvbnRlbnQ6IFwiKiBcIjtcclxuXHRcdFx0Y29sb3I6ICNmMDA7XHJcblx0XHR9XHJcblx0YH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9ICBcclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb25Gb3JtXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEVkdWNhdGlvbkZvcm0gZnJvbSAnLi9lZHVjYXRpb24tZm9ybSdcclxuaW1wb3J0IE5hbWVEaXNwbGF5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmFtZS1kaXNwbGF5J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXHJcblxyXG5pbXBvcnQgZG93bmxvYWRQcm9vZiBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Rvd25sb2FkUHJvb2YnXHJcbmltcG9ydCBkZWxldGVFZHVjYXRpb24gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2RlbGV0ZUVkdWNhdGlvbidcclxuaW1wb3J0IHVwZGF0ZUVkdWNhdGlvbiBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlRWR1Y2F0aW9uJ1xyXG5pbXBvcnQgYXBwcm92ZUVkdWNhdGlvbiBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vYXBwcm92ZUVkdWNhdGlvbidcclxuXHJcbmZ1bmN0aW9uIEVkdWNhdGlvbihwcm9wcykgeyBcclxuICAgIGxldCBkZWxldGVFZHVjID0gMFxyXG4gICAgbGV0IGVkaXRFZHVjID0gMFxyXG4gICAgbGV0IGFwcHJvdmVFZHVjID0gMFxyXG5cclxuICAgIGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgZWR1Y0luZm9JZDogMCxcclxuICAgICAgICBpbnN0aXR1dGlvblNjaG9vbDogJycsXHJcbiAgICAgICAgZGVncmVlVHlwZTonJyxcclxuICAgICAgICBkZWdyZWVDZXJ0OiAnJyxcclxuICAgICAgICBtYWpvclNwZWNpYWxpemF0aW9uOiAnJyxcclxuICAgICAgICBzdGFydERhdGU6ICcnLFxyXG4gICAgICAgIGVuZERhdGU6ICcnXHJcbiAgICB9KVxyXG4gICAgbGV0IGNvbnRlbnQgXHJcbiAgICBpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgY29udGVudCA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleSA9IHtwcm9wcy5jaGlsZHJlbltrZXldLmVkdWNJbmZvSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZGVncmVlQ2VydH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZGVncmVlVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0ubWFqb3JTcGVjaWFsaXphdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uaW5zdGl0dXRpb25TY2hvb2x9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnN0YXJ0RGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZW5kRGF0ZX17IXByb3BzLmNoaWxkcmVuW2tleV0uZW5kRGF0ZSAmJiA8ZGl2PlByZXNlbnQ8L2Rpdj59PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2YgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFByb29mKGZpbGUsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlVQTE9BRFNfVVJMICsgcHJvcHMuY2hpbGRyZW5ba2V5XS5wcm9vZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3sgY29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Tm9uZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5hcHByb3ZlclJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZWRpdGFibGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdEVkdWNhdGlvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQocHJvcHMuY2hpbGRyZW5ba2V5XS5lZHVjSW5mb0lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5KGVkaXRFZHVjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNkZWxldGVFZHVjYXRpb25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGUocHJvcHMuY2hpbGRyZW5ba2V5XS5lZHVjSW5mb0lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuYXBwcm92ZXIgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2FwcHJvdmVFZHVjYXRpb25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcHByb3ZlKHByb3BzLmNoaWxkcmVuW2tleV0uZWR1Y0luZm9JZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+QXBwcm92ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjcmVqZWN0RWR1Y2F0aW9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLmVkdWNJbmZvSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlJlamVjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29udGVudCA9IDx0ZCBjb2xTcGFuID0gXCI5XCI+PHAgYWxpZ24gPSBcImNlbnRlclwiPk5vIGRhdGEgYXZhaWxhYmxlITwvcD48L3RkPlxyXG4gICAgfVxyXG4gICAgbGV0IHJlc1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldEVkaXQoaWQpIHtcclxuICAgICAgICBlZGl0RWR1YyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlKGlkKSB7XHJcbiAgICAgICAgZGVsZXRlRWR1YyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QXBwcm92ZShpZCkge1xyXG4gICAgICAgIGFwcHJvdmVFZHVjID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRLZXkoeCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS5lZHVjSW5mb0lkID09IHgpIHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEocHJvcHMuY2hpbGRyZW5ba2V5XSlcclxuICAgICAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuW2tleV0uZW5kRGF0ZSA9PSBcIlwiIHx8IHByb3BzLmNoaWxkcmVuW2tleV0uZW5kRGF0ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShjdXJyRGF0YSA9PiAoey4uLmN1cnJEYXRhLCBlbmREYXRlOiAnJ30pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS5wcm9vZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoY3VyckRhdGEgPT4gKHsuLi5jdXJyRGF0YSwgcHJvb2Y6IHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2Z9KSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShjdXJyRGF0YSA9PiAoey4uLmN1cnJEYXRhLCBwcm9vZjogJ05vbmUnfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIGxldCBtZXNzYWdlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBhbGlnbiA9IFwiY2VudGVyXCI+IEVkdWNhdGlvbmFsIEhpc3RvcnkgPC9oMj5cclxuICAgICAgICAgICAgPE5hbWVEaXNwbGF5IHVuaXQgPSB7cHJvcHMudW5pdH0gcG9zaXRpb249e3Byb3BzLnBvc2l0aW9ufT57cHJvcHMubmFtZX08L05hbWVEaXNwbGF5PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiIGlkPVwiZWR1Y2FsZXJ0XCIgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGVncmVlL0NlcnRpZmljYXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlZ3JlZSBUeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWpvci9TcGVjaWFsaXphdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SW5zdGl0dXRpb24vU2Nob29sPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGFydCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbmQgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJvb2Y8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QXBwcm92ZXIgUmVtYXJrczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IChwcm9wcy5lZGl0YWJsZSB8fCBwcm9wcy5hcHByb3ZlcikgJiYgPHRoPkFjdGlvbjwvdGg+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7IHByb3BzLmVkaXRhYmxlICYmIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RWR1Y2F0aW9uRm9ybSB0b2tlbiA9IHsgcHJvcHMudG9rZW4gfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJlZGl0RWR1Y2F0aW9uXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJlZGl0RWR1Y2F0aW9uTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0RWR1Y2F0aW9uTGFiZWxcIj5VcGRhdGUgRWR1Y2F0aW9uIEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtjdXJyRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWR1Y2FsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRFZHVjRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZWR1Y0luZm9JZCcsIGN1cnJEYXRhLmVkdWNJbmZvSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgdXBkYXRlRWR1Y2F0aW9uKGZvcm1EYXRhLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycsICcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpZCA9IFwiZWRpdEVkdWNGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJTY2hvb2xFZHVjYXRpb25IaXN0b3J5VXBkYXRlXCI+IFNjaG9vbC9JbnN0aXR1dGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImluc3RpdHV0aW9uU2Nob29sXCIgaWQgPVwiaW5zdGl0dXRpb25TY2hvb2xcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgc2Nob29sXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVncmVlRWR1Y2F0aW9uYWxIaXN0b3J5VXBkYXRlXCI+IERlZ3JlZSBUeXBlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZGVncmVlVHlwZVwiIGlkID0gXCJkZWdyZWVUeXBlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkFBXCI+QUE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJBU1wiPkFTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiQkFcIj5CQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkJTXCI+QlM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJNQVwiPk1BPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiTVNcIj5NUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1EXCI+TUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJQaERcIj5QaEQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJERW5nXCI+REVuZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkRyUEhcIj5EclBIPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJEZWdyZWVFZHVjYXRpb25hbEhpc3RvcnlVcGRhdGVcIj4gRGVncmVlL0NlcnRpZmljYXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJkZWdyZWVDZXJ0XCIgaWQgPSBcImRlZ3JlZUNlcnRcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgZGVncmVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiTWFqb3JFZHVjYXRpb25hbEhpc3RvcnlVcGRhdGVcIj4gTWFqb3IvU3BlY2lhbGl6YXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJtYWpvclNwZWNpYWxpemF0aW9uXCIgaWQgPSBcIm1ham9yU3BlY2lhbGl6YXRpb25cIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgbWFqb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJTdGFydERhdGVFZHVjYXRpb25hbEhpc3RvcnlVcGRhdGVcIj4gU3RhcnQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcInN0YXJ0RGF0ZVwiIGlkID0gXCJzdGFydERhdGVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJFbmREYXRlRWR1Y2F0aW9uYWxIaXN0b3J5VXBkYXRlXCI+IEVuZCBEYXRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiZW5kRGF0ZVwiIGlkID0gXCJlbmREYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwicHJvb2ZcIiA+IEFkZC9FZGl0IFByb29mIFtVcGxvYWRlZDoge2N1cnJEYXRhLnByb29mfV0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJmaWxlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wtZmlsZVwiIG5hbWUgPSBcInByb29mXCIgaWQgPSBcInByb29mXCIgdmFsdWU9e3VuZGVmaW5lZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfSBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXRFZHVjYXRpb24nKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZGVsZXRlRWR1Y2F0aW9uXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJkZWxldGVFZHVjYXRpb25MYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImRlbGV0ZUVkdWNhdGlvbkxhYmVsXCI+RGVsZXRlIEVkdWNhdGlvbiBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGVkdWNhdGlvbiBpbmZvcm1hdGlvbj8gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5ObywgZG9uJ3QgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWR1Y2FsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZGVsZXRlRWR1Y2F0aW9uJykubW9kYWwoJ3RvZ2dsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBkZWxldGVFZHVjYXRpb24oZGVsZXRlRWR1YywgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZWR1Y2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZWR1Y2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nLCAnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiYXBwcm92ZUVkdWNhdGlvblwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiYXBwcm92ZUVkdWNhdGlvbkxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiYXBwcm92ZUVkdWNhdGlvbkxhYmVsXCI+QXBwcm92ZSBFZHVjYXRpb24gSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBhcHByb3ZlIHRoaXMgZWR1Y2F0aW9uIGluZm9ybWF0aW9uPyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPk5vLCBkb24ndCBhcHByb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2FwcHJvdmVFZHVjYXRpb24nKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VkdWNJbmZvSWQnLCBhcHByb3ZlRWR1YylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwcHJvdmVFZHVjYXRpb24oZm9ybURhdGEsIHRydWUsIHByb3BzLmZhY3VsdHlJZCwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2VkdWNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2VkdWNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkLCAnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+WWVzLCBhcHByb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cInJlamVjdEVkdWNhdGlvblwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwicmVqZWN0RWR1Y2F0aW9uTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJyZWplY3RFZHVjYXRpb25MYWJlbFwiPlJlamVjdCBFZHVjYXRpb24gSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2N1cnJEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZHVjYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWplY3RFZHVjYXRpb24nKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlamVjdEVkdWNGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlZHVjSW5mb0lkJywgYXBwcm92ZUVkdWMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcHByb3ZlRWR1Y2F0aW9uKGZvcm1EYXRhLCBmYWxzZSwgcHJvcHMuZmFjdWx0eUlkLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZWR1Y2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZWR1Y2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQsICcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGlkID0gXCJyZWplY3RFZHVjRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVqZWN0aW9uUmVtYXJrc1wiPiBSZWFzb24vUmVtYXJrcyBmb3IgUmVqZWN0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiYXBwcm92ZXJSZW1hcmtzXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHJlbWFya3NcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9IG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVqZWN0RWR1Y2F0aW9uJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb25cclxuIiwiZnVuY3Rpb24gTmFtZURpc3BsYXkocHJvcHMpe1xyXG5cdGlmKHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8aDMgYWxpZ24gPSBcImNlbnRlclwiPiA8dT57cHJvcHMuY2hpbGRyZW59PC91PiA8L2gzPlxyXG5cdFx0XHRcdDxoNSBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5wb3NpdGlvbn0sIHtwcm9wcy51bml0fSA8L2g1PlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IC8+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYW1lRGlzcGxheSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFkZEVkdWNhdGlvbihmb3JtRGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBsZXQgZmFjdWx0eUlkID0gY29va2llRGF0YS5mYWN1bHR5SWRcclxuXHR0cnkge1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYoZm9ybURhdGEuZ2V0KCdwcm9vZicpID09IFwiXCIpIHtcclxuXHRcdFx0XHRcdGZvcm1EYXRhLmRlbGV0ZSgncHJvb2YnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihmb3JtRGF0YS5nZXQoJ2VuZERhdGUnKSA9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ2VuZERhdGUnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ZhY3VsdHlJZCcsIGZhY3VsdHlJZClcclxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ3N0YXR1cycsICdQZW5kaW5nJylcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0XHQgICAgbWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ICAgIHVybDogcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZC9lZHVjYXRpb24nLFxyXG5cdFx0XHRcdCAgICBkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0XHQgICAgfSlcdFxyXG5cdFx0XHQgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlRWR1Y2F0aW9uKGZvcm1EYXRhLCBhcHByb3ZlRmxhZywgZmFjdWx0eUlkLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIFxyXG5cdGxldCBzdGF0dXNcclxuXHRpZihhcHByb3ZlRmxhZykge1xyXG5cdFx0aWYoY29va2llRGF0YS5yb2xlID09IDIpIHtcclxuXHRcdFx0c3RhdHVzID0gJ1ZlcmlmaWVkJ1xyXG5cdFx0fSBlbHNlIGlmKGNvb2tpZURhdGEucm9sZSA9PSAzKSB7XHJcblx0XHRcdHN0YXR1cyA9ICdBcHByb3ZlZCdcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0c3RhdHVzID0gJ1JlamVjdGVkJ1xyXG5cdFx0Zm9ybURhdGEuc2V0KCdhcHByb3ZlclJlbWFya3MnLCBjb29raWVEYXRhLm5hbWUgKyAnOiAnICsgZm9ybURhdGEuZ2V0KCdhcHByb3ZlclJlbWFya3MnKSlcclxuXHR9XHJcblx0Zm9ybURhdGEuYXBwZW5kKCdzdGF0dXMnLCBzdGF0dXMpXHJcblxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRsZXQgdXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvLycgKyBmYWN1bHR5SWQ7XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0XHRcdFx0dXJsOiB1cmwgKyAnL2VkdWNhdGlvbicsXHJcblx0XHRcdFx0XHRkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuXHRcdFx0XHR9KVx0XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSAgY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRWR1Y2F0aW9uKGRhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9mYWN1bHR5L2Jhc2ljLWluZm8vXCIgKyBmYWN1bHR5SWQgKyBcIi9lZHVjYXRpb25cIiwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0ZWR1Y0luZm9JZDogYCR7ZGF0YX1gXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9ICBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFZHVjYXRpb24oZm9ybURhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHQgICAgaWYgKHRva2VuKSB7XHJcblxyXG5cdCAgICAgICAgbGV0IHVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYmFzaWMtaW5mby8nICsgZmFjdWx0eUlkO1xyXG5cclxuXHRcdCAgICBpZihmb3JtRGF0YS5nZXQoJ3Byb29mJykgPT0gXCJcIikge1xyXG5cdFx0XHRcdGZvcm1EYXRhLmRlbGV0ZSgncHJvb2YnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGZvcm1EYXRhLmdldCgnZW5kRGF0ZScpID09IFwiXCIpIHtcclxuXHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ2VuZERhdGUnKVxyXG5cdFx0XHR9XHJcblx0XHQgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcblx0XHRcdCAgICBtZXRob2Q6ICdQVVQnLFxyXG5cdFx0XHQgICAgdXJsOiB1cmwgKyAnL2VkdWNhdGlvbicsXHJcblx0XHRcdCAgICBkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0ICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuXHRcdCAgICB9KVx0XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3MucmVzdWx0Lm1lc3NhZ2UpXHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkb3dubG9hZFByb29mKGRhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHRcdFx0dXJsOiBwcm9jZXNzLmVudi5BUElfVVJMICsgYC9kb3dubG9hZC8ke2RhdGF9YCxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH0sXHJcblx0XHRcdFx0XHRyZXNwb25zZVR5cGU6ICdibG9iJ1xyXG5cdFx0XHRcdH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKTtcclxuXHRcdFx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSB1cmw7XHJcblx0XHRcdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBgJHtkYXRhfWApOyAvL29yIGFueSBvdGhlciBleHRlbnNpb25cclxuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcblx0XHRcdFx0XHRsaW5rLmNsaWNrKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9