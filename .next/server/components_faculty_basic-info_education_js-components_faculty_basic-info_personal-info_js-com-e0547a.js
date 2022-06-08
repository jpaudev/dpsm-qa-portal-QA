exports.id = "components_faculty_basic-info_education_js-components_faculty_basic-info_personal-info_js-com-e0547a";
exports.ids = ["components_faculty_basic-info_education_js-components_faculty_basic-info_personal-info_js-com-e0547a"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL2VkdWNhdGlvbi1mb3JtLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vZWR1Y2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vZW1wbG95bWVudC1mb3JtLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vZW1wbG95bWVudC1oaXN0b3J5LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vcGVyc29uYWwtaW5mby1kZXBlbmRlbnRzLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vcGVyc29uYWwtaW5mby5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL3dvcmstZXhwLWZvcm0uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2ZhY3VsdHkvYmFzaWMtaW5mby93b3JrLWV4cGVyaWVuY2UuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL25hbWUtZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2FkbWluL2FkZEZhY3VsdHkuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vYWRkRWR1Y2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZEVtcGxveW1lbnQuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vYWRkV29ya0V4cC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hcHByb3ZlRWR1Y2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2RlbGV0ZUVkdWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9kZWxldGVFbXBsb3ltZW50LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2RlbGV0ZVdvcmtFeHAuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlRWR1Y2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL3VwZGF0ZUVtcGxveW1lbnQuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlRmFjdWx0eS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby91cGRhdGVXb3JrRXhwLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9kb3dubG9hZFByb29mLmpzIl0sIm5hbWVzIjpbIkVkdWNhdGlvbkZvcm0iLCJSZWFjdCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJFZHVjYXRpb25EZXRhaWxzIiwiaW5zdGl0dXRpb25TY2hvb2wiLCJkZWdyZWVUeXBlIiwiZGVncmVlQ2VydCIsIm1ham9yU3BlY2lhbGl6YXRpb24iLCJzdGFydERhdGUiLCJlbmREYXRlIiwicHJvb2YiLCJ2YWx1ZXMiLCJyZXNldEZvcm0iLCJhbGVydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JtIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInJlcyIsImFkZEVkdWNhdGlvbiIsInRva2VuIiwic3VjY2VzcyIsImNsYXNzTmFtZSIsInN0eWxlIiwiaW5uZXJIVE1MIiwibWVzc2FnZSIsImVycm9yIiwic2V0QXR0cmlidXRlIiwiJCIsImZhZGVUbyIsInNsaWRlVXAiLCJSb3V0ZXIiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIiwiRWR1Y2F0aW9uIiwiZGVsZXRlRWR1YyIsImVkaXRFZHVjIiwiYXBwcm92ZUVkdWMiLCJjdXJyRGF0YSIsInNldERhdGEiLCJlZHVjSW5mb0lkIiwiY29udGVudCIsImNoaWxkcmVuIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImZpbGUiLCJkb3dubG9hZFByb29mIiwicHJvY2VzcyIsImNvbG9yIiwic3RhdHVzIiwiYXBwcm92ZXJSZW1hcmtzIiwiZWRpdGFibGUiLCJzZXRFZGl0Iiwic2V0S2V5Iiwic2V0RGVsZXRlIiwiYXBwcm92ZXIiLCJzZXRBcHByb3ZlIiwiaWQiLCJ4IiwidW5pdCIsInBvc2l0aW9uIiwibmFtZSIsInZpc2liaWxpdHkiLCJhcHBlbmQiLCJ1cGRhdGVFZHVjYXRpb24iLCJ1bmRlZmluZWQiLCJtb2RhbCIsImRlbGV0ZUVkdWNhdGlvbiIsImFwcHJvdmVFZHVjYXRpb24iLCJmYWN1bHR5SWQiLCJFbXBsb3ltZW50Rm9ybSIsIldvcmtEZXRhaWxzIiwiZW1wbG95bWVudFBvc2l0aW9uSWQiLCJwb3NpdGlvbnMiLCJwb3NpdGlvbnNMaXN0IiwiZm9yRWFjaCIsInB1c2giLCJhZGRFbXBsb3ltZW50IiwiRW1wbG95bWVudEhpc3RvcnkiLCJlbXBsb3ltZW50SW5mb0lkIiwiZW1wSW5mb0lkIiwiZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zIiwiZmFjdWx0eV9lbXBsb3ltZW50X3Bvc2l0aW9uIiwiY2F0ZWdvcnkiLCJyb2xlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZSIsInVwZGF0ZUVtcGxveW1lbnQiLCJkZWxldGVFbXBsb3ltZW50IiwiUGVyc29uYWxJbmZvRGVwZW5kZW50cyIsInN0YXRlIiwiZHVwbGljYXRlRm9ybXMiLCJjbG9uZSIsInNldFN0YXRlIiwicmVtb3ZlIiwicG9wIiwiRGVwZW5kZW50RGV0YWlscyIsImJpcnRoRGF0ZSIsInJlbGF0aW9uc2hpcCIsIlBlcnNvbmFsSW5mbyIsImNvbnNvbGUiLCJsb2ciLCJoYXNEaXNhYmxlZEZpZWxkcyIsIkZhY3VsdHlEZXRhaWxzIiwiZGVwZW5kZW50cyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibWlkZGxlTmFtZSIsImdlbmRlciIsImRhdGVPZkJpcnRoIiwicGxhY2VPZkJpcnRoIiwicGVybWFuZW50QWRkcmVzcyIsInByZXNlbnRBZGRyZXNzIiwibW9iaWxlIiwibGFuZGxpbmUiLCJlbWFpbCIsInVwZW1haWwiLCJjaXZpbFN0YXR1cyIsInJlbGlnaW9uIiwiZW1lcmdlbmN5Q29udGFjdFBlcnNvbiIsImVtZXJnZW5jeUNvbnRhY3ROdW1iZXIiLCJzdWZmaXgiLCJmYWN1bHR5X2RlcGVuZGVudHMiLCJwaGlsb3NvcGh5IiwidGVhY2hpbmdQaGlsb3NvcGh5IiwiY2xlcmsiLCJlbXBsb3ltZW50UG9zaXRpb24iLCJhZGRGYWN1bHR5IiwidXBkYXRlRmFjdWx0eSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsImhyZWYiLCJTdGFydERhdGUiLCJXb3JrRXhwRm9ybSIsImVtcGxveWVyTmFtZSIsImRlc2NyaXB0aW9uIiwiYWRkV29ya0V4cCIsIldvcmtFeHBlcmllbmNlIiwiZGVsZXRlV29yayIsImVkaXRXb3JrIiwid29ya0V4cElkIiwiZW1wbG95bWVudCIsInVwZGF0ZVdvcmtFeHAiLCJkZWxldGVXb3JrRXhwIiwiTmFtZURpc3BsYXkiLCJkYXRhIiwiY29va2llRGF0YSIsImp3dCIsInVybCIsImhlYWRlciIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJheGlvcyIsImVyciIsImFjY2VzcyIsInJlc3VsdCIsImdldCIsImRlbGV0ZSIsIm1ldGhvZCIsIkF1dGhvcml6YXRpb24iLCJib2QiLCJhcHByb3ZlRmxhZyIsInNldCIsInJlc3BvbnNlVHlwZSIsInRoZW4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLGFBQU4sU0FBNEJDLHdEQUE1QixDQUEyQztBQUN2Q0MsYUFBVyxDQUFDQyxLQUFELEVBQU87QUFDZCxVQUFNQSxLQUFOO0FBQ0g7O0FBRURDLFFBQU0sR0FBRTtBQUNKLFFBQUlDLGdCQUFnQixHQUFHO0FBQ25CQyx1QkFBaUIsRUFBRSxFQURBO0FBRW5CQyxnQkFBVSxFQUFFLEVBRk87QUFHbkJDLGdCQUFVLEVBQUUsRUFITztBQUluQkMseUJBQW1CLEVBQUUsRUFKRjtBQUtuQkMsZUFBUyxFQUFFLEVBTFE7QUFNbkJDLGFBQU8sRUFBRSxFQU5VO0FBT25CQyxXQUFLLEVBQUU7QUFQWSxLQUF2QjtBQVVBLHdCQUNJLDhEQUFDLDBDQUFEO0FBQ0ksbUJBQWEsRUFBRVAsZ0JBRG5CO0FBRUksY0FBUSxFQUFFLE9BQU9RLE1BQVAsRUFBZTtBQUFDQztBQUFELE9BQWYsS0FBK0I7QUFDckMsWUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBWjtBQUVBLFlBQUlDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQVg7QUFDQSxZQUFJRSxRQUFRLEdBQUcsSUFBSUMsUUFBSixDQUFhRixJQUFiLENBQWY7QUFFQSxZQUFJRyxHQUFHLEdBQUcsTUFB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QUFZO0FBQ2J2RCxlQUFPLENBQUNoRixLQUFSLENBQWN1SSxHQUFkO0FBQ0EsZUFBT0EsR0FBUDtBQUNBO0FBQ0Q7QUFDRCxHQXJCRCxDQXFCRSxPQUFPQSxHQUFQLEVBQVk7QUFDYnZELFdBQU8sQ0FBQ2hGLEtBQVIsQ0FBY3VJLEdBQWQ7QUFDQSxXQUFPQSxHQUFQO0FBQ0E7QUFDRCxDIiwiZmlsZSI6ImNvbXBvbmVudHNfZmFjdWx0eV9iYXNpYy1pbmZvX2VkdWNhdGlvbl9qcy1jb21wb25lbnRzX2ZhY3VsdHlfYmFzaWMtaW5mb19wZXJzb25hbC1pbmZvX2pzLWNvbS1lMDU0N2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgYWRkRWR1Y2F0aW9uIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hZGRFZHVjYXRpb24nXHJcblxyXG5jbGFzcyBFZHVjYXRpb25Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBFZHVjYXRpb25EZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBpbnN0aXR1dGlvblNjaG9vbDogXCJcIixcclxuICAgICAgICAgICAgZGVncmVlVHlwZTogXCJcIixcclxuICAgICAgICAgICAgZGVncmVlQ2VydDogXCJcIixcclxuICAgICAgICAgICAgbWFqb3JTcGVjaWFsaXphdGlvbjogXCJcIixcclxuICAgICAgICAgICAgc3RhcnREYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBlbmREYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBwcm9vZjogXCJcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtFZHVjYXRpb25EZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHtyZXNldEZvcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZHVjYWxlcnRcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWR1Y0Zvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYWRkRWR1Y2F0aW9uKGZvcm1EYXRhLCB0aGlzLnByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2VkdWNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKVxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpZCA9IFwiZWR1Y0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+UmVxdWlyZWQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJTY2hvb2xFZHVjYXRpb25hbEhpc3RvcnlbXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gU2Nob29sL0luc3RpdHV0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImluc3RpdHV0aW9uU2Nob29sXCIgaWQgPVwiaW5zdGl0dXRpb25TY2hvb2xcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgc2Nob29sXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMiByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkRlZ3JlZVR5cGVcIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IERlZ3JlZSBUeXBlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJkZWdyZWVUeXBlXCIgaWQgPSBcImRlZ3JlZVR5cGVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkFBXCI+QUE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkFTXCI+QVM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkJBXCI+QkE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkJTXCI+QlM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1BXCI+TUE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1TXCI+TVM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1EXCI+TUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIlBoRFwiPlBoRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiREVuZ1wiPkRFbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkRyUEhcIj5EclBIPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlZ3JlZUVkdWNhdGlvbmFsSGlzdG9yeVtdXCIgY2xhc3NOYW1lID0gXCJyZXF1aXJlZC1sYWJlbFwiPiBEZWdyZWUvQ2VydGlmaWNhdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJkZWdyZWVDZXJ0XCIgaWQgPSBcImRlZ3JlZUNlcnRcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgZGVncmVlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIk1ham9yRWR1Y2F0aW9uYWxIaXN0b3J5W11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IE1ham9yL1NwZWNpYWxpemF0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm1ham9yU3BlY2lhbGl6YXRpb25cIiBpZCA9IFwibWFqb3JTcGVjaWFsaXphdGlvblwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBtYWpvclwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU3RhcnREYXRlRWR1Y2F0aW9uYWxIaXN0b3J5W11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInN0YXJ0RGF0ZVwiIGlkID0gXCJzdGFydERhdGVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJFbmREYXRlRWR1Y2F0aW9uYWxIaXN0b3J5W11cIj4gRW5kIERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVuZERhdGVcIiBpZCA9IFwiZW5kRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlByb29mRWR1Y2F0aW9uYWxIaXN0b3J5W11cIj4gUHJvb2YgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImZpbGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbC1maWxlXCIgbmFtZSA9IFwicHJvb2ZcIiBpZCA9IFwicHJvb2ZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRsYWJlbC5yZXF1aXJlZC1sYWJlbDphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIqXCI7XHJcblx0XHRcdGNvbG9yOiAjZjAwO1xyXG5cdFx0fVxyXG5cdFx0aDY6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OiBcIiogXCI7XHJcblx0XHRcdGNvbG9yOiAjZjAwO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfSAgXHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uRm9ybVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBFZHVjYXRpb25Gb3JtIGZyb20gJy4vZWR1Y2F0aW9uLWZvcm0nXHJcbmltcG9ydCBOYW1lRGlzcGxheSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hbWUtZGlzcGxheSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xyXG5cclxuaW1wb3J0IGRvd25sb2FkUHJvb2YgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9kb3dubG9hZFByb29mJ1xyXG5pbXBvcnQgZGVsZXRlRWR1Y2F0aW9uIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9kZWxldGVFZHVjYXRpb24nXHJcbmltcG9ydCB1cGRhdGVFZHVjYXRpb24gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL3VwZGF0ZUVkdWNhdGlvbidcclxuaW1wb3J0IGFwcHJvdmVFZHVjYXRpb24gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FwcHJvdmVFZHVjYXRpb24nXHJcblxyXG5mdW5jdGlvbiBFZHVjYXRpb24ocHJvcHMpIHsgXHJcbiAgICBsZXQgZGVsZXRlRWR1YyA9IDBcclxuICAgIGxldCBlZGl0RWR1YyA9IDBcclxuICAgIGxldCBhcHByb3ZlRWR1YyA9IDBcclxuXHJcbiAgICBjb25zdCBbY3VyckRhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGVkdWNJbmZvSWQ6IDAsXHJcbiAgICAgICAgaW5zdGl0dXRpb25TY2hvb2w6ICcnLFxyXG4gICAgICAgIGRlZ3JlZVR5cGU6JycsXHJcbiAgICAgICAgZGVncmVlQ2VydDogJycsXHJcbiAgICAgICAgbWFqb3JTcGVjaWFsaXphdGlvbjogJycsXHJcbiAgICAgICAgc3RhcnREYXRlOiAnJyxcclxuICAgICAgICBlbmREYXRlOiAnJ1xyXG4gICAgfSlcclxuICAgIGxldCBjb250ZW50IFxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXkgPSB7cHJvcHMuY2hpbGRyZW5ba2V5XS5lZHVjSW5mb0lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmRlZ3JlZUNlcnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmRlZ3JlZVR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLm1ham9yU3BlY2lhbGl6YXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmluc3RpdHV0aW9uU2Nob29sfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5zdGFydERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmVuZERhdGV9eyFwcm9wcy5jaGlsZHJlbltrZXldLmVuZERhdGUgJiYgPGRpdj5QcmVzZW50PC9kaXY+fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRQcm9vZihmaWxlLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5VUExPQURTX1VSTCArIHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2Z9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7IGNvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMuY2hpbGRyZW5ba2V5XS5wcm9vZiAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5vbmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYXBwcm92ZXJSZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmVkaXRhYmxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRFZHVjYXRpb25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHByb3BzLmNoaWxkcmVuW2tleV0uZWR1Y0luZm9JZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEtleShlZGl0RWR1YylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlRWR1Y2F0aW9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlKHByb3BzLmNoaWxkcmVuW2tleV0uZWR1Y0luZm9JZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmFwcHJvdmVyICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNhcHByb3ZlRWR1Y2F0aW9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLmVkdWNJbmZvSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFwcHJvdmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3JlamVjdEVkdWNhdGlvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFwcHJvdmUocHJvcHMuY2hpbGRyZW5ba2V5XS5lZHVjSW5mb0lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5SZWplY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnRlbnQgPSA8dGQgY29sU3BhbiA9IFwiOVwiPjxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBkYXRhIGF2YWlsYWJsZSE8L3A+PC90ZD5cclxuICAgIH1cclxuICAgIGxldCByZXNcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcbiAgICAgICAgZWRpdEVkdWMgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZShpZCkge1xyXG4gICAgICAgIGRlbGV0ZUVkdWMgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFwcHJvdmUoaWQpIHtcclxuICAgICAgICBhcHByb3ZlRWR1YyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0S2V5KHgpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuW2tleV0uZWR1Y0luZm9JZCA9PSB4KSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHByb3BzLmNoaWxkcmVuW2tleV0pXHJcbiAgICAgICAgICAgICAgICBpZihwcm9wcy5jaGlsZHJlbltrZXldLmVuZERhdGUgPT0gXCJcIiB8fCBwcm9wcy5jaGlsZHJlbltrZXldLmVuZERhdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoY3VyckRhdGEgPT4gKHsuLi5jdXJyRGF0YSwgZW5kRGF0ZTogJyd9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2YpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIHByb29mOiBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mfSkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoY3VyckRhdGEgPT4gKHsuLi5jdXJyRGF0YSwgcHJvb2Y6ICdOb25lJ30pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBsZXQgbWVzc2FnZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgYWxpZ24gPSBcImNlbnRlclwiPiBFZHVjYXRpb25hbCBIaXN0b3J5IDwvaDI+XHJcbiAgICAgICAgICAgIDxOYW1lRGlzcGxheSB1bml0ID0ge3Byb3BzLnVuaXR9IHBvc2l0aW9uPXtwcm9wcy5wb3NpdGlvbn0+e3Byb3BzLm5hbWV9PC9OYW1lRGlzcGxheT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIiBpZD1cImVkdWNhbGVydFwiIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlZ3JlZS9DZXJ0aWZpY2F0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EZWdyZWUgVHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFqb3IvU3BlY2lhbGl6YXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkluc3RpdHV0aW9uL1NjaG9vbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhcnQgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW5kIERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByb29mPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFwcHJvdmVyIFJlbWFya3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAocHJvcHMuZWRpdGFibGUgfHwgcHJvcHMuYXBwcm92ZXIpICYmIDx0aD5BY3Rpb248L3RoPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeyBwcm9wcy5lZGl0YWJsZSAmJiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVkdWNhdGlvbkZvcm0gdG9rZW4gPSB7IHByb3BzLnRva2VuIH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZWRpdEVkdWNhdGlvblwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZWRpdEVkdWNhdGlvbkxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZWRpdEVkdWNhdGlvbkxhYmVsXCI+VXBkYXRlIEVkdWNhdGlvbiBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Y3VyckRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RWR1Y0Zvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VkdWNJbmZvSWQnLCBjdXJyRGF0YS5lZHVjSW5mb0lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHVwZGF0ZUVkdWNhdGlvbihmb3JtRGF0YSwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZWR1Y2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZWR1Y2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nLCAnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gaWQgPSBcImVkaXRFZHVjRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU2Nob29sRWR1Y2F0aW9uSGlzdG9yeVVwZGF0ZVwiPiBTY2hvb2wvSW5zdGl0dXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJpbnN0aXR1dGlvblNjaG9vbFwiIGlkID1cImluc3RpdHV0aW9uU2Nob29sXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHNjaG9vbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlZ3JlZUVkdWNhdGlvbmFsSGlzdG9yeVVwZGF0ZVwiPiBEZWdyZWUgVHlwZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImRlZ3JlZVR5cGVcIiBpZCA9IFwiZGVncmVlVHlwZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJBQVwiPkFBPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiQVNcIj5BUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkJBXCI+QkE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJCU1wiPkJTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiTUFcIj5NQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1TXCI+TVM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJNRFwiPk1EPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiUGhEXCI+UGhEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiREVuZ1wiPkRFbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJEclBIXCI+RHJQSDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVncmVlRWR1Y2F0aW9uYWxIaXN0b3J5VXBkYXRlXCI+IERlZ3JlZS9DZXJ0aWZpY2F0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZGVncmVlQ2VydFwiIGlkID0gXCJkZWdyZWVDZXJ0XCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IGRlZ3JlZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIk1ham9yRWR1Y2F0aW9uYWxIaXN0b3J5VXBkYXRlXCI+IE1ham9yL1NwZWNpYWxpemF0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibWFqb3JTcGVjaWFsaXphdGlvblwiIGlkID0gXCJtYWpvclNwZWNpYWxpemF0aW9uXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG1ham9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU3RhcnREYXRlRWR1Y2F0aW9uYWxIaXN0b3J5VXBkYXRlXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJzdGFydERhdGVcIiBpZCA9IFwic3RhcnREYXRlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRW5kRGF0ZUVkdWNhdGlvbmFsSGlzdG9yeVVwZGF0ZVwiPiBFbmQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcImVuZERhdGVcIiBpZCA9IFwiZW5kRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcInByb29mXCIgPiBBZGQvRWRpdCBQcm9vZiBbVXBsb2FkZWQ6IHtjdXJyRGF0YS5wcm9vZn1dIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJwcm9vZlwiIGlkID0gXCJwcm9vZlwiIHZhbHVlPXt1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30gb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0RWR1Y2F0aW9uJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImRlbGV0ZUVkdWNhdGlvblwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVsZXRlRWR1Y2F0aW9uTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJkZWxldGVFZHVjYXRpb25MYWJlbFwiPkRlbGV0ZSBFZHVjYXRpb24gSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBlZHVjYXRpb24gaW5mb3JtYXRpb24/IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Tm8sIGRvbid0IGRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2RlbGV0ZUVkdWNhdGlvbicpLm1vZGFsKCd0b2dnbGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZGVsZXRlRWR1Y2F0aW9uKGRlbGV0ZUVkdWMsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2VkdWNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2VkdWNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9iYXNpYy1pbmZvJywgJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5ZZXMsIGRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImFwcHJvdmVFZHVjYXRpb25cIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImFwcHJvdmVFZHVjYXRpb25MYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImFwcHJvdmVFZHVjYXRpb25MYWJlbFwiPkFwcHJvdmUgRWR1Y2F0aW9uIEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gYXBwcm92ZSB0aGlzIGVkdWNhdGlvbiBpbmZvcm1hdGlvbj8gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5ObywgZG9uJ3QgYXBwcm92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2sgPSB7YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZHVjYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhcHByb3ZlRWR1Y2F0aW9uJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlZHVjSW5mb0lkJywgYXBwcm92ZUVkdWMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcHByb3ZlRWR1Y2F0aW9uKGZvcm1EYXRhLCB0cnVlLCBwcm9wcy5mYWN1bHR5SWQsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZCwgJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgYXBwcm92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJyZWplY3RFZHVjYXRpb25cIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cInJlamVjdEVkdWNhdGlvbkxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwicmVqZWN0RWR1Y2F0aW9uTGFiZWxcIj5SZWplY3QgRWR1Y2F0aW9uIEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtjdXJyRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWR1Y2FsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVqZWN0RWR1Y2F0aW9uJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWplY3RFZHVjRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZWR1Y0luZm9JZCcsIGFwcHJvdmVFZHVjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBwcm92ZUVkdWNhdGlvbihmb3JtRGF0YSwgZmFsc2UsIHByb3BzLmZhY3VsdHlJZCwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2VkdWNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2VkdWNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkLCAnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpZCA9IFwicmVqZWN0RWR1Y0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlamVjdGlvblJlbWFya3NcIj4gUmVhc29uL1JlbWFya3MgZm9yIFJlamVjdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImFwcHJvdmVyUmVtYXJrc1wiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCByZW1hcmtzXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfSBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlamVjdEVkdWNhdGlvbicpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhZGRFbXBsb3ltZW50IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hZGRFbXBsb3ltZW50J1xyXG5cclxuY2xhc3MgRW1wbG95bWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBXb3JrRGV0YWlscyA9IHtcclxuXHRcdFx0ZW1wbG95bWVudFBvc2l0aW9uSWQ6IFwiXCIsXHJcblx0XHRcdHN0YXJ0RGF0ZTogXCJcIixcclxuXHRcdFx0ZW5kRGF0ZTogXCJcIlxyXG5cdFx0fVxyXG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXVxyXG5cclxuICAgICAgICBpZih0aGlzLnByb3BzLnBvc2l0aW9uc0xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3NpdGlvbnNMaXN0LmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSB7a2V5LmVtcGxveW1lbnRQb3NpdGlvbklkfT57a2V5LnBvc2l0aW9ufTwvb3B0aW9uPiAgICBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdHJldHVybihcclxuXHRcdFx0PEZvcm1pa1xyXG5cdFx0XHRcdGluaXRpYWxWYWx1ZXM9e1dvcmtEZXRhaWxzfVxyXG5cdFx0XHRcdG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7cmVzZXRGb3JtfSkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrZXhwYWxlcnRcIilcclxuXHRcdFx0XHRcdGxldCByZXMgPSBhd2FpdCBhZGRFbXBsb3ltZW50KHZhbHVlcywgdGhpcy5wcm9wcy50b2tlbiwgdGhpcy5wcm9wcy5mYWN1bHR5SWQpXHJcblx0XHRcdFx0XHRpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG5cdFx0XHRcdFx0XHRhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcblx0XHRcdFx0XHRcdGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuXHRcdFx0XHRcdFx0YWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuXHRcdFx0XHRcdFx0aWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQkKFwiI3dvcmtleHBhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0JChcIiN3b3JrZXhwYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJlc2V0Rm9ybSgpXHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluLycgKyB0aGlzLnByb3BzLmZhY3VsdHlJZCwgJy9hZG1pbi8nICsgdGhpcy5wcm9wcy5mYWN1bHR5SWQpXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdFx0XHRcdDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblx0XHRcdDxoNj5SZXF1aXJlZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUG9zaXRpb25bXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gUG9zaXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZW1wbG95bWVudFBvc2l0aW9uSWRcIiBpZCA9IFwiZW1wbG95bWVudFBvc2l0aW9uSWRcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIiBrZXkgPSBcIjBcIj4tLSBTRUxFQ1QgUE9TSVRJT04gLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc2l0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU3RhdHVzW11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IFN0YXR1cyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdGF0dXNcIiBpZCA9IFwic3RhdHVzXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+LS0gU0VMRUNUIFNUQVRVUyAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRnVsbC10aW1lXCI+RnVsbC10aW1lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJQYXJ0LXRpbWVcIj5QYXJ0LXRpbWU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkxlY3R1cmVyXCI+TGVjdHVyZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiQ2F0ZWdvcnlbXVwiIGNsYXNzTmFtZSA9IFwicmVxdWlyZWQtbGFiZWxcIj4gQ2F0ZWdvcnkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiY2F0ZWdvcnlcIiBpZCA9IFwiY2F0ZWdvcnlcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj4tLSBTRUxFQ1QgQ0FURUdPUlkgLS08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlBlcm1hbmVudFwiPlBlcm1hbmVudDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVGVtcG9yYXJ5XCI+VGVtcG9yYXJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlN0YXJ0RGF0ZUVtcGxveW1lbnRbXVwiPiBTdGFydCBEYXRlICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdGFydERhdGVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJFbmREYXRlRW1wbG95bWVudFtdXCI+IEVuZCBEYXRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVuZERhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBjb2wtbWQtMTJcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9PlN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRsYWJlbC5yZXF1aXJlZC1sYWJlbDphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIqXCI7XHJcblx0XHRcdGNvbG9yOiAjZjAwO1xyXG5cdFx0fVxyXG5cdFx0aDY6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OiBcIiogXCI7XHJcblx0XHRcdGNvbG9yOiAjZjAwO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9Gb3JtaWs+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95bWVudEZvcm07XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHVwZGF0ZUVtcGxveW1lbnQgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL3VwZGF0ZUVtcGxveW1lbnQnXHJcbmltcG9ydCBkZWxldGVFbXBsb3ltZW50IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9kZWxldGVFbXBsb3ltZW50J1xyXG5cclxuZnVuY3Rpb24gRW1wbG95bWVudEhpc3RvcnkocHJvcHMpe1xyXG5cdGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1wbG95bWVudEluZm9JZDogMCxcclxuICAgICAgICBzdGFydERhdGU6ICcnLFxyXG4gICAgICAgIGVuZERhdGU6ICcnXHJcbiAgICB9KVxyXG5cdGxldCBlbXBJbmZvSWRcclxuXHRsZXQgY29udGVudFxyXG5cclxuXHRpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcblx0XHRjb250ZW50ID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8dHIga2V5ID0ge3Byb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVtcGxveW1lbnRJbmZvSWR9PlxyXG5cdFx0XHRcdFx0PHRkPntwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3Nba2V5XS5mYWN1bHR5X2VtcGxveW1lbnRfcG9zaXRpb24ucG9zaXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uY2F0ZWdvcnl9PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD57cHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uc3RhcnREYXRlfTwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+e3Byb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVuZERhdGUgfHwgJ1ByZXNlbnQnfTwvdGQ+XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJiBcclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdEVtcGxveW1lbnRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVtcEluZm9JZCA9IHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVtcGxveW1lbnRJbmZvSWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0S2V5KHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVtcGxveW1lbnRJbmZvSWQpXHJcblx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlRW1wbG95bWVudFwiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW1wSW5mb0lkID0gcHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uZW1wbG95bWVudEluZm9JZFxyXG5cdFx0XHRcdFx0XHRcdFx0fX0+RGVsZXRlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L3RkPiBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIHtcclxuICAgICAgICBjb250ZW50ID0gPHRkIGNvbFNwYW4gPSBcIjVcIj48cCBhbGlnbiA9IFwiY2VudGVyXCI+Tm8gZGF0YSBhdmFpbGFibGUhPC9wPjwvdGQ+XHJcbiAgICB9XHJcblxyXG5cdGZ1bmN0aW9uIHNldEtleSh4KSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uZW1wbG95bWVudEluZm9JZCA9PSB4KSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldKVxyXG4gICAgICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uZW5kRGF0ZSA9PSBcIlwiIHx8IHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVuZERhdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoY3VyckRhdGEgPT4gKHsuLi5jdXJyRGF0YSwgZW5kRGF0ZTogJyd9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGlkLCBldmVudCkge1xyXG4gICAgICAgIHNldERhdGEoey4uLmN1cnJEYXRhLCBbaWRdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiIGlkPVwiZW1wbG95bWVudGFsZXJ0XCIgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9fT48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1zbVwiPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPlBvc2l0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DYXRlZ29yeTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5TdGFydCBEYXRlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkVuZCBEYXRlPC90aD5cclxuXHRcdFx0XHRcdFx0eyBwcm9wcy5yb2xlID09IDUgJiYgPHRoPkFjdGlvbjwvdGg+IH1cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHR7Y29udGVudH1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZWRpdEVtcGxveW1lbnRcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImVkaXRFbXBsb3ltZW50TGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0RW1wbG95bWVudExhYmVsXCI+VXBkYXRlIEVtcGxveW1lbnQgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwic3RhcnREYXRlXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInN0YXJ0RGF0ZVwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEuc3RhcnREYXRlIH0gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwic3RhcnREYXRlXCIsIGUpfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcImVuZERhdGVcIj4gRW5kIERhdGUgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVuZERhdGVcIiBkZWZhdWx0VmFsdWUgPSB7IGN1cnJEYXRhLmVuZERhdGUgfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJlbmREYXRlXCIsIGUpfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0RW1wbG95bWVudCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1wbG95bWVudGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgdXBkYXRlRW1wbG95bWVudChjdXJyRGF0YSwgcHJvcHMudG9rZW4sIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZW1wbG95bWVudGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZW1wbG95bWVudGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZGVsZXRlRW1wbG95bWVudFwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVsZXRlRW1wbG95bWVudExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZGVsZXRlRW1wbG95bWVudExhYmVsXCI+RGVsZXRlIEVtcGxveW1lbnQgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBlbXBsb3ltZW50IGluZm9ybWF0aW9uPyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPk5vLCBkb24ndCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1wbG95bWVudGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZGVsZXRlRW1wbG95bWVudCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZGVsZXRlRW1wbG95bWVudChlbXBJbmZvSWQsIHByb3BzLnRva2VuLCBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZW1wbG95bWVudGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZW1wbG95bWVudGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi8nICsgcHJvcHMuZmFjdWx0eUlkLCAnL2FkbWluLycgKyBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveW1lbnRIaXN0b3J5XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuLy8gaW1wb3J0IGFkZERlcGVuZGVudCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vYWRkRGVwZW5kZW50J1xyXG5cclxuY2xhc3MgUGVyc29uYWxJbmZvRGVwZW5kZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGR1cGxpY2F0ZUZvcm1zOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZHVwbGljYXRlRm9ybXMucHVzaCg8ZGl2PjxociAvPjxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVwZW5kZW50TmFtZVtdXCI+IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiRGVwZW5kZW50TmFtZVtdXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG5hbWUgb2YgZGVwZW5kZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVwZW5kZW50RGF0ZU9mQmlydGhbXVwiPiBEYXRlIG9mIEJpcnRoIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcIkRlcGVuZGVudERhdGVPZkJpcnRoW11cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRGVwZW5kZW50UmVsYXRpb25zaGlwW11cIj4gUmVsYXRpb25zaGlwIHRvIFVzZXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiRGVwZW5kZW50UmVsYXRpb25zaGlwW11cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGhye1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbW92ZSgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZHVwbGljYXRlRm9ybXMucG9wKClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBEZXBlbmRlbnREZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBiaXJ0aERhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHJlbGF0aW9uc2hpcDogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQgPSBcIkFkZERlcGVuZGVudFwiIG9uQ2xpY2sgPSB7KCkgPT4gdGhpcy5jbG9uZSgpfT4gQWRkIERlcGVuZGVudCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJidXR0b25cIiBjbGFzc05hbWUgPSBcImJ0biBidG4tZGFuZ2VyXCIgaWQgPSBcIlJlbW92ZURlcGVuZGVudFwiIG9uQ2xpY2sgPSB7KCkgPT4gdGhpcy5yZW1vdmUoKX0+IFJlbW92ZSBhIFJvdyA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVwZW5kZW50TmFtZVtdXCI+IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm5hbWVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgbmFtZSBvZiBkZXBlbmRlbnRcIiBpZCA9IFwibmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlcGVuZGVudERhdGVPZkJpcnRoW11cIj4gRGF0ZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiYmlydGhEYXRlXCIgaWQgPSBcImJpcnRoRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEZXBlbmRlbnRSZWxhdGlvbnNoaXBbXVwiPiBSZWxhdGlvbnNoaXAgdG8gVXNlciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmVsYXRpb25zaGlwXCIgaWQgPSBcInJlbGF0aW9uc2hpcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQgPSBcIkRlcGVuZGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kdXBsaWNhdGVGb3Jtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdHlwZSA9IFwic3VibWl0XCJcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgLy8gICAgIC8vICl9XHJcbiAgICAgICAgICAgIC8vIDwvRm9ybWlrPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxJbmZvRGVwZW5kZW50cyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUGVyc29uYWxJbmZvRGVwZW5kZW50cyBmcm9tICcuL3BlcnNvbmFsLWluZm8tZGVwZW5kZW50cydcclxuaW1wb3J0IE5hbWVEaXNwbGF5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmFtZS1kaXNwbGF5J1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVyc1wiXHJcblxyXG5pbXBvcnQgdXBkYXRlRmFjdWx0eSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlRmFjdWx0eSdcclxuaW1wb3J0IGFkZEZhY3VsdHkgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWRtaW4vYWRkRmFjdWx0eSdcclxuXHJcbmZ1bmN0aW9uIFBlcnNvbmFsSW5mbyhwcm9wcykgeyBjb25zb2xlLmxvZyhwcm9wcy5oYXNEaXNhYmxlZEZpZWxkcyk7XHJcbiAgICBsZXQgRmFjdWx0eURldGFpbHNcclxuICAgIGxldCBuYW1lXHJcbiAgICBsZXQgZGVwZW5kZW50c1xyXG4gICAgbGV0IHJlc1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IFtdXHJcbiAgICBpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgRmFjdWx0eURldGFpbHMgPSB7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogcHJvcHMuY2hpbGRyZW4uZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogcHJvcHMuY2hpbGRyZW4ubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIG1pZGRsZU5hbWU6IHByb3BzLmNoaWxkcmVuLm1pZGRsZU5hbWUsXHJcbiAgICAgICAgICAgIGdlbmRlcjogcHJvcHMuY2hpbGRyZW4uZ2VuZGVyLFxyXG4gICAgICAgICAgICBkYXRlT2ZCaXJ0aDogcHJvcHMuY2hpbGRyZW4uZGF0ZU9mQmlydGgsXHJcbiAgICAgICAgICAgIHBsYWNlT2ZCaXJ0aDogcHJvcHMuY2hpbGRyZW4ucGxhY2VPZkJpcnRoLFxyXG4gICAgICAgICAgICBwZXJtYW5lbnRBZGRyZXNzOiBwcm9wcy5jaGlsZHJlbi5wZXJtYW5lbnRBZGRyZXNzLFxyXG4gICAgICAgICAgICBwcmVzZW50QWRkcmVzczogcHJvcHMuY2hpbGRyZW4ucHJlc2VudEFkZHJlc3MsXHJcbiAgICAgICAgICAgIG1vYmlsZTogcHJvcHMuY2hpbGRyZW4ubW9iaWxlLFxyXG4gICAgICAgICAgICBsYW5kbGluZTogcHJvcHMuY2hpbGRyZW4ubGFuZGxpbmUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBwcm9wcy5jaGlsZHJlbi5lbWFpbCxcclxuICAgICAgICAgICAgdXBlbWFpbDogcHJvcHMuZW1haWwsXHJcbiAgICAgICAgICAgIGNpdmlsU3RhdHVzOiBwcm9wcy5jaGlsZHJlbi5jaXZpbFN0YXR1cyxcclxuICAgICAgICAgICAgcmVsaWdpb246IHByb3BzLmNoaWxkcmVuLnJlbGlnaW9uLFxyXG4gICAgICAgICAgICBlbWVyZ2VuY3lDb250YWN0UGVyc29uOiBwcm9wcy5jaGlsZHJlbi5lbWVyZ2VuY3lDb250YWN0UGVyc29uLFxyXG4gICAgICAgICAgICBlbWVyZ2VuY3lDb250YWN0TnVtYmVyOiBwcm9wcy5jaGlsZHJlbi5lbWVyZ2VuY3lDb250YWN0TnVtYmVyLFxyXG4gICAgICAgICAgICBzdWZmaXg6IHByb3BzLmNoaWxkcmVuLnN1ZmZpeCB8fCAnJyxcclxuICAgICAgICAgICAgZmFjdWx0eV9kZXBlbmRlbnRzOiBwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2RlcGVuZGVudHMsXHJcbiAgICAgICAgICAgIHBoaWxvc29waHk6IHByb3BzLmNoaWxkcmVuLnRlYWNoaW5nUGhpbG9zb3BoeVxyXG4gICAgICAgIH1cclxuICAgICAgICBuYW1lID0gcHJvcHMuY2hpbGRyZW4ubGFzdE5hbWUgKyAnLCAnICsgcHJvcHMuY2hpbGRyZW4uZmlyc3ROYW1lXHJcbiAgICAgICAgZGVwZW5kZW50cyA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZGVwZW5kZW50cykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkRlcGVuZGVudFwiPiBOYW1lIG9mIERlcGVuZGVudCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibmFtZVwiIGRlZmF1bHRWYWx1ZSA9IHsgcHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9kZXBlbmRlbnRzW2tleV0ubmFtZSB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEZXBlbmRlbnREYXRlT2ZCaXJ0aFwiPiBEYXRlIG9mIEJpcnRoIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJiaXJ0aERhdGVcIiBkZWZhdWx0VmFsdWUgPSB7IHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZGVwZW5kZW50c1trZXldLmJpcnRoRGF0ZSB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEZXBlbmRlbnRSZWxhdGlvbnNoaXBbXVwiPiBSZWxhdGlvbnNoaXAgdG8gVXNlciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmVsYXRpb25zaGlwXCIgZGVmYXVsdFZhbHVlID0geyBwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2RlcGVuZGVudHNba2V5XS5yZWxhdGlvbnNoaXAgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEZhY3VsdHlEZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBjbGVyazogJycsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgbWlkZGxlTmFtZTogJycsXHJcbiAgICAgICAgICAgIGdlbmRlcjogJ01hbGUnLFxyXG4gICAgICAgICAgICBkYXRlT2ZCaXJ0aDogJycsXHJcbiAgICAgICAgICAgIHBsYWNlT2ZCaXJ0aDogJycsXHJcbiAgICAgICAgICAgIHBlcm1hbmVudEFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBwcmVzZW50QWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIG1vYmlsZTogJycsXHJcbiAgICAgICAgICAgIGxhbmRsaW5lOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBjaXZpbFN0YXR1czogJ3NpbmdsZScsXHJcbiAgICAgICAgICAgIHJlbGlnaW9uOiAnJyxcclxuICAgICAgICAgICAgZW1lcmdlbmN5Q29udGFjdFBlcnNvbjogJycsXHJcbiAgICAgICAgICAgIGVtZXJnZW5jeUNvbnRhY3ROdW1iZXI6ICcnLFxyXG4gICAgICAgICAgICBzdWZmaXg6ICcnLFxyXG4gICAgICAgICAgICBmYWN1bHR5X2RlcGVuZGVudHM6ICcnLFxyXG4gICAgICAgICAgICB1cGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgdW5pdDogJzEnLFxyXG4gICAgICAgICAgICBlbXBsb3ltZW50UG9zaXRpb246ICcxJyxcclxuICAgICAgICAgICAgc3RhcnREYXRlOiAnJyxcclxuICAgICAgICAgICAgcGhpbG9zb3BoeTogJycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvcHMucG9zaXRpb25zLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0ge2tleS5lbXBsb3ltZW50UG9zaXRpb25JZH0+e2tleS5wb3NpdGlvbn08L29wdGlvbj4gICAgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGFsaWduID0gXCJjZW50ZXJcIj4gUGVyc29uYWwgSW5mb3JtYXRpb24gPC9oMj5cclxuICAgICAgICA8TmFtZURpc3BsYXkgdW5pdCA9IHtwcm9wcy51bml0fSBwb3NpdGlvbj17cHJvcHMucG9zaXRpb259PntuYW1lfTwvTmFtZURpc3BsYXk+XHJcblx0XHQ8Rm9ybWlrXHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e0ZhY3VsdHlEZXRhaWxzfVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgdG9rZW4pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5yb2xlID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCBhZGRGYWN1bHR5KHZhbHVlcywgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IGF3YWl0IHVwZGF0ZUZhY3VsdHkodmFsdWVzLCBwcm9wcy50b2tlbikgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMubWVzc2FnZSA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIHZhbHVlcy5tZXNzYWdlID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHZhbHVlcy5tZXNzYWdlID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnJvbGUgPT0gNSkgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9mYWN1bHR5JylcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2FkbWluXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9iYXNpYy1pbmZvJykgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGlkPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5lZGl0YWJsZSAmJiA8aDY+UmVxdWlyZWQ8L2g2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJGaXJzdE5hbWVcIj4gRmlyc3QgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImZpcnN0TmFtZVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZmlyc3ROYW1lIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiTWlkZGxlTmFtZVwiPiBNaWRkbGUgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm1pZGRsZU5hbWVcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLm1pZGRsZU5hbWUgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJMYXN0TmFtZVwiPiBMYXN0IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJsYXN0TmFtZVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMubGFzdE5hbWUgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJTdWZmaXhcIj4gU3VmZml4IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwic3VmZml4XCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5zdWZmaXggfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJTZXhcIj4gU2V4IChhdCBiaXJ0aCkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJnZW5kZXJcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmdlbmRlciB9IGRpc2FibGVkPXtwcm9wcy5oYXNEaXNhYmxlZEZpZWxkc30gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiTWFsZVwiPk1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJGZW1hbGVcIj5GZW1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkRhdGVPZkJpcnRoXCI+IERhdGUgb2YgQmlydGggPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJkYXRlT2ZCaXJ0aFwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZGF0ZU9mQmlydGggfSBkaXNhYmxlZD17cHJvcHMuaGFzRGlzYWJsZWRGaWVsZHN9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIlBsYWNlT2ZCaXJ0aFwiPiBQbGFjZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInBsYWNlT2ZCaXJ0aFwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMucGxhY2VPZkJpcnRoIH0gZGlzYWJsZWQ9e3Byb3BzLmhhc0Rpc2FibGVkRmllbGRzfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiUHJlc2VudEFkZHJlc3NcIj4gUHJlc2VudCBBZGRyZXNzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJwcmVzZW50QWRkcmVzc1wiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMucHJlc2VudEFkZHJlc3MgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJQZXJtYW5lbnRBZGRyZXNzXCI+IFBlcm1hbmVudCBBZGRyZXNzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJwZXJtYW5lbnRBZGRyZXNzXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5wZXJtYW5lbnRBZGRyZXNzIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTYgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkNpdmlsU3RhdHVzXCI+IENpdmlsIFN0YXR1cyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImNpdmlsU3RhdHVzXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5jaXZpbFN0YXR1cyB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcInNpbmdsZVwiPlNpbmdsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIm1hcnJpZWRcIj5NYXJyaWVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwic2VwYXJhdGVkXCI+U2VwYXJhdGVkIChMZWdhbGx5KTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcImRpdm9yY2VkXCI+RGl2b3JjZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJ3aWRvd2VkXCI+V2lkb3dlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlbGlnaW9uXCI+IFJlbGlnaW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJlbGlnaW9uXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5yZWxpZ2lvbiB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkNvbnRhY3ROdW1iZXJcIj4gQ29udGFjdCBOdW1iZXIgKExhbmRsaW5lKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGVsXCIgbmFtZSA9IFwibGFuZGxpbmVcIiBwYXR0ZXJuID0gXCJbMC05XXsxMH1cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmxhbmRsaW5lIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiQ29udGFjdE51bWJlclwiPiBDb250YWN0IE51bWJlciAoTW9iaWxlKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGVsXCIgbmFtZSA9IFwibW9iaWxlXCIgcGF0dGVybiA9IFwiWzBdezF9WzldezF9WzAtOV17OX1cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLm1vYmlsZSB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkVtYWlsQWRkcmVzc0FsdFwiPiBQZXJzb25hbCBFLW1haWwgQWRkcmVzcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZW1haWxcIiBuYW1lID0gXCJlbWFpbFwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1haWwgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJVUEVtYWlsXCI+IFVQIEUtbWFpbCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZW1haWxcIiBuYW1lID0gXCJ1cGVtYWlsXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5lbWFpbCB9IGRpc2FibGVkPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNiByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkVtZXJnZW5jeUNvbnRhY3RcIj4gRW1lcmdlbmN5IENvbnRhY3QgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJlbWVyZ2VuY3lDb250YWN0UGVyc29uXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5lbWVyZ2VuY3lDb250YWN0UGVyc29uIH0gZGlzYWJsZWQ9eyFwcm9wcy5lZGl0YWJsZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1lcmdlbmN5Q29udGFjdE51bWJlclwiPiBFbWVyZ2VuY3kgQ29udGFjdCBOdW1iZXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRlbFwiIG5hbWUgPSBcImVtZXJnZW5jeUNvbnRhY3ROdW1iZXJcIiBwYXR0ZXJuID0gXCJbMF17MX1bOV17MX1bMC05XXs5fVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1lcmdlbmN5Q29udGFjdE51bWJlciB9IGRpc2FibGVkPXshcHJvcHMuZWRpdGFibGV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMTIgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJwaGlsb3NvcGh5XCI+IFRlYWNoaW5nIFBoaWxvc29waHkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIGNvbXBvbmVudCA9IFwidGV4dGFyZWFcIiByb3dzID0gezV9IG5hbWUgPSBcInBoaWxvc29waHlcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnBoaWxvc29waHkgfSBkaXNhYmxlZD17IXByb3BzLmVkaXRhYmxlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8aDUgYWxpZ24gPSBcImNlbnRlclwiPiBEZXBlbmRlbnRzIDwvaDU+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qe2RlcGVuZGVudHN9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5yb2xlPT01ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkVtcGxveW1lbnQgSW5mbzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1haWxBZGRyZXNzQWx0XCI+IFVQIEUtbWFpbCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJlbWFpbFwiIG5hbWUgPSBcInVwZW1haWxcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmVtYWlsIH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJVbml0XCI+IFVuaXQgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInVuaXRcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnVuaXQgfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIjFcIj5DaGVtaXN0cnkgVW5pdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiMlwiPk1hdGhlbWF0aWNhbCBhbmQgQ29tcHV0aW5nIFNjaWVuY2VzIFVuaXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIjNcIj5QaHlzaWNzIGFuZCBHZW9sb2d5IFVuaXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJTdGF0dXNcIj4gU3RhdHVzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdGF0dXNcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnN0YXR1cyB9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiRnVsbC10aW1lXCI+RnVsbC10aW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJQYXJ0LXRpbWVcIj5QYXJ0LXRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkxlY3R1cmVyXCI+TGVjdHVyZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJDYXRlZ29yeVwiPiBDYXRlZ29yeSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiY2F0ZWdvcnlcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmNhdGVnb3J5IH0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJQZXJtYW5lbnRcIj5QZXJtYW5lbnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIlRlbXBvcmFyeVwiPlRlbXBvcmFyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1wbG95bWVudFBvc2l0aW9uXCI+IEVtcGxveW1lbnQgUG9zaXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVtcGxveW1lbnRQb3NpdGlvblwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1wbG95bWVudFBvc2l0aW9uIH0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zaXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJTdGFydERhdGVcIj4gU3RhcnQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwic3RhcnREYXRlXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5TdGFydERhdGUgfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZWRpdGFibGUgJiYgcHJvcHMucm9sZSE9NSAmJiA8YnV0dG9uIHR5cGUgPSBcInN1Ym1pdFwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGNvbC1tZC0xMlwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30+IFVwZGF0ZSA8L2J1dHRvbj4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMucm9sZT09NSAmJiA8YnV0dG9uIHR5cGUgPSBcInN1Ym1pdFwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGNvbC1tZC0xMlwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30+IEFkZCBGYWN1bHR5IDwvYnV0dG9uPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qeyBwcm9wcy5mYWN1bHR5RmxhZyAmJiA8UGVyc29uYWxJbmZvRGVwZW5kZW50cyAvPiB9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuZm9ybS1ncm91cC5yZXF1aXJlZCAuY29udHJvbC1sYWJlbDphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCIqIFwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2FsZXJ0IHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb25hbEluZm9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IGFkZFdvcmtFeHAgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZFdvcmtFeHAnXHJcblxyXG5jbGFzcyBXb3JrRXhwRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0bGV0IFdvcmtEZXRhaWxzID0ge1xyXG5cdFx0XHRlbXBsb3llck5hbWU6IFwiXCIsXHJcblx0XHRcdHBvc2l0aW9uOiBcIlwiLFxyXG5cdFx0XHRzdGFydERhdGU6IFwiXCIsXHJcblx0XHRcdGVuZERhdGU6IFwiXCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBcIlwiXHJcblx0XHR9XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxGb3JtaWtcclxuXHRcdFx0XHRpbml0aWFsVmFsdWVzPXtXb3JrRGV0YWlsc31cclxuXHRcdFx0XHRvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywge3Jlc2V0Rm9ybX0pID0+IHtcclxuXHRcdFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya2V4cGFsZXJ0XCIpXHJcblx0XHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgYWRkV29ya0V4cCh2YWx1ZXMsIHRoaXMucHJvcHMudG9rZW4pXHJcblx0XHRcdFx0XHRpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG5cdFx0XHRcdFx0XHRhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcblx0XHRcdFx0XHRcdGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuXHRcdFx0XHRcdFx0YWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuXHRcdFx0XHRcdFx0aWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQkKFwiI3dvcmtleHBhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0JChcIiN3b3JrZXhwYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJlc2V0Rm9ybSgpXHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycsICcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG5cdFx0XHRcdFx0PEZvcm0+XHJcblx0XHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PGg2PlJlcXVpcmVkPC9oNj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJFbXBsb3llcldvcmtFeHBlcmllbmNlW11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IEVtcGxveWVyIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZW1wbG95ZXJOYW1lXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG5hbWUgb2YgZW1wbG95ZXJcIiByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUG9zaXRpb25Xb3JrRXhwZXJpZW5jZVtdXCIgY2xhc3NOYW1lID0gXCJyZXF1aXJlZC1sYWJlbFwiPiBUaXRsZS9Qb3NpdGlvbiA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInBvc2l0aW9uXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHBvc2l0aW9uXCIgcmVxdWlyZWQgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIkRlc2NyaXB0aW9uV29ya0V4cGVyaWVuY2VbXVwiPiBEZXNjcmlwdGlvbiA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXIgPSBcIkFkZCBEZXNjcmlwdGlvblwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlN0YXJ0RGF0ZVdvcmtFeHBlcmllbmNlW11cIiBjbGFzc05hbWUgPSBcInJlcXVpcmVkLWxhYmVsXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdGFydERhdGVcIiByZXF1aXJlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiRW5kRGF0ZVdvcmtFeHBlcmllbmNlW11cIj4gRW5kIERhdGUgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJlbmREYXRlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZSA9IFwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBjb2wtbWQtMTJcIlxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0bGFiZWwucmVxdWlyZWQtbGFiZWw6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiKlwiO1xyXG5cdFx0XHRjb2xvcjogI2YwMDtcclxuXHRcdH1cclxuXHRcdGg2OmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDogXCIqIFwiO1xyXG5cdFx0XHRjb2xvcjogI2YwMDtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcblx0XHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9Gb3JtaWs+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya0V4cEZvcm07XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFdvcmtFeHBGb3JtIGZyb20gJy4vd29yay1leHAtZm9ybSdcclxuaW1wb3J0IEVtcGxveW1lbnRIaXN0b3J5IGZyb20gJy4vZW1wbG95bWVudC1oaXN0b3J5J1xyXG5pbXBvcnQgRW1wbG95bWVudEZvcm0gZnJvbSAnLi9lbXBsb3ltZW50LWZvcm0nXHJcbmltcG9ydCBOYW1lRGlzcGxheSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hbWUtZGlzcGxheSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiXHJcblxyXG5pbXBvcnQgdXBkYXRlV29ya0V4cCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlV29ya0V4cCdcclxuaW1wb3J0IGRlbGV0ZVdvcmtFeHAgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2RlbGV0ZVdvcmtFeHAnXHJcblxyXG5mdW5jdGlvbiBXb3JrRXhwZXJpZW5jZShwcm9wcyl7XHJcbiAgICBjb25zdCBuYW1lID0gcHJvcHMubmFtZVxyXG4gICAgbGV0IGRlbGV0ZVdvcmsgPSAwXHJcbiAgICBsZXQgZWRpdFdvcmsgPSAwXHJcbiAgICBjb25zdCBbY3VyckRhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIHdvcmtFeHBJZDogMCxcclxuICAgICAgICBlbXBsb3llck5hbWU6ICcnLFxyXG4gICAgICAgIHBvc2l0aW9uOicnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogJycsXHJcbiAgICAgICAgZW5kRGF0ZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICB9KVxyXG4gICAgbGV0IGNvbnRlbnQgXHJcblxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuW2tleV0ud29ya0V4cElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleSA9IHtwcm9wcy5jaGlsZHJlbltrZXldLndvcmtFeHBJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5lbXBsb3llck5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnBvc2l0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5zdGFydERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmVuZERhdGV9eyFwcm9wcy5jaGlsZHJlbltrZXldLmVuZERhdGUgJiYgPGRpdj5QcmVzZW50PC9kaXY+fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmVkaXRhYmxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRXb3JrRXhwZXJpZW5jZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQocHJvcHMuY2hpbGRyZW5ba2V5XS53b3JrRXhwSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkoZWRpdFdvcmspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2RlbGV0ZVdvcmtFeHBlcmllbmNlXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlKHByb3BzLmNoaWxkcmVuW2tleV0ud29ya0V4cElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICk7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb250ZW50ID0gPHRkIGNvbFNwYW4gPSBcIjZcIj48cCBhbGlnbiA9IFwiY2VudGVyXCI+Tm8gZGF0YSBhdmFpbGFibGUhPC9wPjwvdGQ+XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RWRpdChpZCkge1xyXG4gICAgICAgIGVkaXRXb3JrID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXREZWxldGUoaWQpIHtcclxuICAgICAgICBkZWxldGVXb3JrID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRLZXkoeCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS53b3JrRXhwSWQgPT0geCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShwcm9wcy5jaGlsZHJlbltrZXldKVxyXG4gICAgICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS5lbmREYXRlID09IFwiXCIgfHwgcHJvcHMuY2hpbGRyZW5ba2V5XS5lbmREYXRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIGVuZERhdGU6ICcnfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShpZCwgZXZlbnQpIHtcclxuICAgICAgICBzZXREYXRhKHsuLi5jdXJyRGF0YSwgW2lkXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBhbGlnbiA9IFwiY2VudGVyXCI+IFdvcmsgRXhwZXJpZW5jZSA8L2gyPlxyXG4gICAgICAgICAgICA8TmFtZURpc3BsYXkgdW5pdCA9IHtwcm9wcy51bml0fSBwb3NpdGlvbj17cHJvcHMucG9zaXRpb259PntuYW1lfTwvTmFtZURpc3BsYXk+XHJcbiAgICAgICAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCIgaWQ9XCJ3b3JrZXhwYWxlcnRcIiBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIn19PjwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgYWxpZ24gPSBcImNlbnRlclwiPiBXaXRoaW4gVVAgTWFuaWxhIDwvaDU+XHJcbiAgICAgICAgICAgIDxFbXBsb3ltZW50SGlzdG9yeSByb2xlPXtwcm9wcy5yb2xlfSB0b2tlbj17cHJvcHMudG9rZW59IGZhY3VsdHlJZD17cHJvcHMuZmFjdWx0eUlkfT57cHJvcHMuZW1wbG95bWVudH08L0VtcGxveW1lbnRIaXN0b3J5PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGg1IGFsaWduID0gXCJjZW50ZXJcIj4gT3V0c2lkZSBVUCBNYW5pbGEgPC9oNT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXkgPSBcImhlYWRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbXBsb3llcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UG9zaXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXJ0IERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVuZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7IHByb3BzLmVkaXRhYmxlICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXb3JrRXhwRm9ybSB0b2tlbiA9IHsgcHJvcHMudG9rZW4gfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IHByb3BzLnJvbGUgPT0gNSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgYWxpZ24gPVwiY2VudGVyXCI+IEFkZCBGYWN1bHR5IEVtcGxveW1lbnQgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8RW1wbG95bWVudEZvcm0gdG9rZW49e3Byb3BzLnRva2VufSBmYWN1bHR5SWQ9e3Byb3BzLmZhY3VsdHlJZH0gcG9zaXRpb25zTGlzdD17cHJvcHMucG9zaXRpb25zTGlzdH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImVkaXRXb3JrRXhwZXJpZW5jZVwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZWRpdFdvcmtFeHBlcmllbmNlTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0V29ya0V4cGVyaWVuY2VMYWJlbFwiPlVwZGF0ZSBXb3JrIEV4cGVyaWVuY2UgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJFbXBsb3llcldvcmtFeHBlcmllbmNlVXBkYXRlXCI+IEVtcGxveWVyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIkVtcGxveWVyV29ya0V4cGVyaWVuY2VVcGRhdGVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgbmFtZSBvZiBlbXBsb3llclwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEuZW1wbG95ZXJOYW1lIH0gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwiZW1wbG95ZXJOYW1lXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlBvc2l0aW9uV29ya0V4cGVyaWVuY2VVcGRhdGVcIj4gVGl0bGUvUG9zaXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiUG9zaXRpb25Xb3JrRXhwZXJpZW5jZVVwZGF0ZVwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBwb3NpdGlvblwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEucG9zaXRpb24gfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJwb3NpdGlvblwiLCBlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU3RhcnREYXRlV29ya0V4cGVyaWVuY2VVcGRhdGVcIj4gU3RhcnQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJTdGFydERhdGVXb3JrRXhwZXJpZW5jZVVwZGF0ZVwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEuc3RhcnREYXRlIH0gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwic3RhcnREYXRlXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRW5kRGF0ZVdvcmtFeHBlcmllbmNlVXBkYXRlXCI+IEVuZCBEYXRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcIkVuZERhdGVXb3JrRXhwZXJpZW5jZVVwZGF0ZVwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEuZW5kRGF0ZSB9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcImVuZERhdGVcIiwgZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJEZXNjcmlwdGlvbldvcmtFeHBlcmllbmNlVXBkYXRlXCI+IERlc2NyaXB0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIkRlc2NyaXB0aW9uV29ya0V4cGVyaWVuY2VVcGRhdGVcIiBwbGFjZWhvbGRlciA9IFwiQWRkIERlc2NyaXB0aW9uXCIgZGVmYXVsdFZhbHVlID0geyBjdXJyRGF0YS5kZXNjcmlwdGlvbiB9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcImRlc2NyaXB0aW9uXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0V29ya0V4cGVyaWVuY2UnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtleHBhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHVwZGF0ZVdvcmtFeHAoY3VyckRhdGEsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN3b3JrZXhwYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN3b3JrZXhwYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJkZWxldGVXb3JrRXhwZXJpZW5jZVwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVsZXRlV29ya0V4cGVyaWVuY2VMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImRlbGV0ZVdvcmtFeHBlcmllbmNlTGFiZWxcIj5EZWxldGUgV29yayBFeHBlcmllbmNlIEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgd29yayBleHBlcmllbmNlIGluZm9ybWF0aW9uPyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPk5vLCBkb24ndCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNkZWxldGVXb3JrRXhwZXJpZW5jZScpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya2V4cGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZGVsZXRlV29ya0V4cChkZWxldGVXb3JrLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjd29ya2V4cGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjd29ya2V4cGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtFeHBlcmllbmNlXHJcbiIsImZ1bmN0aW9uIE5hbWVEaXNwbGF5KHByb3BzKXtcclxuXHRpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGgzIGFsaWduID0gXCJjZW50ZXJcIj4gPHU+e3Byb3BzLmNoaWxkcmVufTwvdT4gPC9oMz5cclxuXHRcdFx0XHQ8aDUgYWxpZ24gPSBcImNlbnRlclwiPiB7cHJvcHMucG9zaXRpb259LCB7cHJvcHMudW5pdH0gPC9oNT5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiAvPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmFtZURpc3BsYXkiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRGYWN1bHR5KGRhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG5cdFxyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1x0ICAgICAgXHJcblx0ICAgIFx0aWYoZGF0YS51bml0ID09IFwiXCIpIHtcclxuXHRcdFx0XHRkYXRhLnVuaXQgPSAxXHJcblx0XHRcdH1cclxuXHQgICAgXHRpZihkYXRhLmNhdGVnb3J5ID09IFwiXCIpIHtcclxuXHRcdFx0XHRkYXRhLmNhdGVnb3J5ID0gXCJQZXJtYW5lbnRcIlxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGRhdGEuc3RhdHVzID09IFwiXCIpIHtcclxuXHRcdFx0XHRkYXRhLnN0YXR1cyA9IFwiRnVsbC10aW1lXCJcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihkYXRhLmVtcGxveW1lbnRQb3NpdGlvbiA9PSBcIlwiKSB7XHJcblx0XHRcdFx0ZGF0YS5lbXBsb3ltZW50UG9zaXRpb24gPSAxXHJcblx0XHRcdH1cclxuXHQgICAgICAgIGxldCB1cmwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy91c2VyL2FkZCc7XHJcblx0XHQgICAgbGV0IGhlYWRlciA9IHtcclxuXHRcdCAgICAgICAgaGVhZGVyczoge1xyXG5cdFx0ICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfVxyXG5cdCAgICAgICAgdHJ5IHtcclxuXHQgICAgICAgIFx0bGV0IGJvZHkgPSB7XHJcblx0XHRcdFx0XHRcInJvbGVcIjogXCIxXCIsXHJcblx0XHRcdFx0XHRcInVwZW1haWxcIjogYCR7ZGF0YS51cGVtYWlsfWAsXHJcblx0XHRcdFx0XHRcInBhc3N3b3JkXCI6IFwicGFzc3dvcmRcIixcclxuXHRcdFx0XHRcdFwicGVyc29uYWxJbmZvXCI6IHtcclxuXHRcdFx0XHRcdFx0Zmlyc3ROYW1lOiBgJHtkYXRhLmZpcnN0TmFtZX1gLCBcclxuXHRcdFx0XHRcdFx0bGFzdE5hbWU6IGAke2RhdGEubGFzdE5hbWV9YCxcclxuXHRcdFx0XHRcdFx0bWlkZGxlTmFtZTogYCR7ZGF0YS5taWRkbGVOYW1lfWAsXHJcblx0XHRcdFx0XHRcdHN1ZmZpeDogYCR7ZGF0YS5zdWZmaXh9YCxcclxuXHRcdFx0XHRcdFx0Z2VuZGVyOiBgJHtkYXRhLmdlbmRlcn1gLFxyXG5cdFx0XHRcdFx0XHRkYXRlT2ZCaXJ0aDogYCR7ZGF0YS5kYXRlT2ZCaXJ0aH1gLFxyXG5cdFx0XHRcdFx0XHRwbGFjZU9mQmlydGg6IGAke2RhdGEucGxhY2VPZkJpcnRofWAsXHJcblx0XHRcdFx0XHRcdHBlcm1hbmVudEFkZHJlc3M6IGAke2RhdGEucGVybWFuZW50QWRkcmVzc31gLFxyXG5cdFx0XHRcdFx0XHRwcmVzZW50QWRkcmVzczogYCR7ZGF0YS5wcmVzZW50QWRkcmVzc31gLFxyXG5cdFx0XHRcdFx0XHRtb2JpbGU6IGAke2RhdGEubW9iaWxlfWAsXHJcblx0XHRcdFx0XHRcdGxhbmRsaW5lOiBgJHtkYXRhLmxhbmRsaW5lfWAsXHJcblx0XHRcdFx0XHRcdGVtYWlsOiBgJHtkYXRhLmVtYWlsfWAsXHJcblx0XHRcdFx0XHRcdGNpdmlsU3RhdHVzOiBgJHtkYXRhLmNpdmlsU3RhdHVzfWAsXHJcblx0XHRcdFx0XHRcdHJlbGlnaW9uOiBgJHtkYXRhLnJlbGlnaW9ufWAsXHJcblx0XHRcdFx0XHRcdGVtZXJnZW5jeUNvbnRhY3RQZXJzb246IGAke2RhdGEuZW1lcmdlbmN5Q29udGFjdFBlcnNvbn1gLFxyXG5cdFx0ICBcdFx0XHRcdGVtZXJnZW5jeUNvbnRhY3ROdW1iZXI6IGAke2RhdGEuZW1lcmdlbmN5Q29udGFjdE51bWJlcn1gLFxyXG5cdFx0XHRcdFx0XHR0ZWFjaGluZ1BoaWxvc29waHk6IGAke2RhdGEucGhpbG9zb3BoeX1gXHJcblx0XHQgIFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcInVuaXRJZFwiOiBgJHtkYXRhLnVuaXR9YCxcclxuXHRcdFx0XHRcdFwiZW1wbG95bWVudFBvc2l0aW9uSWRcIjogYCR7ZGF0YS5lbXBsb3ltZW50UG9zaXRpb259YCxcclxuXHRcdFx0XHRcdFwic3RhdHVzXCI6IGAke2RhdGEuc3RhdHVzfWAsXHJcblx0XHRcdFx0XHRcImNhdGVnb3J5XCI6IGAke2RhdGEuY2F0ZWdvcnl9YCxcclxuXHRcdFx0XHRcdFwic3RhcnREYXRlXCI6IGAke2RhdGEuc3RhcnREYXRlfWBcclxuXHRcdCAgXHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBib2R5KVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coYWNjZXNzLnJlc3VsdC5tZXNzYWdlKVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWRkRWR1Y2F0aW9uKGZvcm1EYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRpZihmb3JtRGF0YS5nZXQoJ3Byb29mJykgPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0Zm9ybURhdGEuZGVsZXRlKCdwcm9vZicpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGZvcm1EYXRhLmdldCgnZW5kRGF0ZScpID09IFwiXCIpIHtcclxuXHRcdFx0XHRcdGZvcm1EYXRhLmRlbGV0ZSgnZW5kRGF0ZScpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnZmFjdWx0eUlkJywgZmFjdWx0eUlkKVxyXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnc3RhdHVzJywgJ1BlbmRpbmcnKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHRcdCAgICBtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHQgICAgdXJsOiBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2Jhc2ljLWluZm8vYWRkL2VkdWNhdGlvbicsXHJcblx0XHRcdFx0ICAgIGRhdGE6IGZvcm1EYXRhLFxyXG5cdFx0XHRcdCAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9XHJcblx0XHRcdCAgICB9KVx0XHJcblx0XHRcdCAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFkZEVtcGxveW1lbnQoZGF0YSwgdG9rZW4sIGZhY3VsdHlJZCkge1xyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0bGV0IGJvZCA9IHtcclxuICAgICAgICAgICAgICAgIGZhY3VsdHlJZDogYCR7ZmFjdWx0eUlkfWAsXHJcbiAgICAgICAgICAgICAgICBlbXBsb3ltZW50UG9zaXRpb25JZDogYCR7ZGF0YS5lbXBsb3ltZW50UG9zaXRpb25JZH1gLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBgJHtkYXRhLnN0YXR1c31gLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBgJHtkYXRhLmNhdGVnb3J5fWAsXHJcblx0XHRcdFx0c3RhcnREYXRlOiBgJHtkYXRhLnN0YXJ0RGF0ZX1gXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0aWYoYCR7ZGF0YS5lbmREYXRlfWApIHtcclxuICAgICAgICAgICAgICAgIGJvZC5lbmREYXRlID0gYCR7ZGF0YS5lbmREYXRlfWBcclxuXHRcdFx0fVxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZC9lbXBsb3ltZW50XCIsIGJvZCwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRXb3JrRXhwKGRhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHRsZXQgYm9kID0gbnVsbFxyXG5cdFx0XHRpZihgJHtkYXRhLmVuZERhdGV9YCA9PSBcIlwiKSB7XHJcblx0XHRcdFx0Ym9kID0ge1xyXG5cdFx0XHRcdFx0ZmFjdWx0eUlkOiBgJHtmYWN1bHR5SWR9YCxcclxuXHRcdFx0XHRcdGVtcGxveWVyTmFtZTogYCR7ZGF0YS5lbXBsb3llck5hbWV9YCxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBgJHtkYXRhLnBvc2l0aW9ufWAsXHJcblx0XHRcdFx0XHRzdGFydERhdGU6IGAke2RhdGEuc3RhcnREYXRlfWAsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogYCR7ZGF0YS5kZXNjcmlwdGlvbn1gXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJvZCA9IHtcclxuXHRcdFx0XHRcdGZhY3VsdHlJZDogYCR7ZmFjdWx0eUlkfWAsXHJcblx0XHRcdFx0XHRlbXBsb3llck5hbWU6IGAke2RhdGEuZW1wbG95ZXJOYW1lfWAsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYCR7ZGF0YS5wb3NpdGlvbn1gLFxyXG5cdFx0XHRcdFx0c3RhcnREYXRlOiBgJHtkYXRhLnN0YXJ0RGF0ZX1gLFxyXG5cdFx0XHRcdFx0ZW5kRGF0ZTogYCR7ZGF0YS5lbmREYXRlfWAsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogYCR7ZGF0YS5kZXNjcmlwdGlvbn1gXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9mYWN1bHR5L2Jhc2ljLWluZm8vYWRkL3dvcmstZXhwXCIsIGJvZCwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlRWR1Y2F0aW9uKGZvcm1EYXRhLCBhcHByb3ZlRmxhZywgZmFjdWx0eUlkLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIFxyXG5cdGxldCBzdGF0dXNcclxuXHRpZihhcHByb3ZlRmxhZykge1xyXG5cdFx0aWYoY29va2llRGF0YS5yb2xlID09IDIpIHtcclxuXHRcdFx0c3RhdHVzID0gJ1ZlcmlmaWVkJ1xyXG5cdFx0fSBlbHNlIGlmKGNvb2tpZURhdGEucm9sZSA9PSAzKSB7XHJcblx0XHRcdHN0YXR1cyA9ICdBcHByb3ZlZCdcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0c3RhdHVzID0gJ1JlamVjdGVkJ1xyXG5cdFx0Zm9ybURhdGEuc2V0KCdhcHByb3ZlclJlbWFya3MnLCBjb29raWVEYXRhLm5hbWUgKyAnOiAnICsgZm9ybURhdGEuZ2V0KCdhcHByb3ZlclJlbWFya3MnKSlcclxuXHR9XHJcblx0Zm9ybURhdGEuYXBwZW5kKCdzdGF0dXMnLCBzdGF0dXMpXHJcblxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRsZXQgdXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvLycgKyBmYWN1bHR5SWQ7XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0XHRcdFx0dXJsOiB1cmwgKyAnL2VkdWNhdGlvbicsXHJcblx0XHRcdFx0XHRkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuXHRcdFx0XHR9KVx0XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSAgY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRWR1Y2F0aW9uKGRhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9mYWN1bHR5L2Jhc2ljLWluZm8vXCIgKyBmYWN1bHR5SWQgKyBcIi9lZHVjYXRpb25cIiwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0ZWR1Y0luZm9JZDogYCR7ZGF0YX1gXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9ICBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUVtcGxveW1lbnQoZGF0YSwgdG9rZW4sIGZhY3VsdHlJZCkgeyBcclxuXHR0cnkge1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL2ZhY3VsdHkvYmFzaWMtaW5mby9cIiArIGZhY3VsdHlJZCArIFwiL2VtcGxveW1lbnRcIiwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0ZW1wbG95bWVudEluZm9JZDogYCR7ZGF0YX1gXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9ICBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkZWxldGVXb3JrRXhwKGRhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9mYWN1bHR5L2Jhc2ljLWluZm8vXCIgKyBmYWN1bHR5SWQgKyBcIi93b3JrLWV4cFwiLCB7XHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHR3b3JrRXhwSWQ6IGAke2RhdGF9YFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSAgY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRWR1Y2F0aW9uKGZvcm1EYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1xyXG5cclxuXHQgICAgICAgIGxldCB1cmwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2Jhc2ljLWluZm8vJyArIGZhY3VsdHlJZDtcclxuXHJcblx0XHQgICAgaWYoZm9ybURhdGEuZ2V0KCdwcm9vZicpID09IFwiXCIpIHtcclxuXHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ3Byb29mJylcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihmb3JtRGF0YS5nZXQoJ2VuZERhdGUnKSA9PSBcIlwiKSB7XHJcblx0XHRcdFx0Zm9ybURhdGEuZGVsZXRlKCdlbmREYXRlJylcclxuXHRcdFx0fVxyXG5cdFx0ICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHQgICAgbWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0ICAgIHVybDogdXJsICsgJy9lZHVjYXRpb24nLFxyXG5cdFx0XHQgICAgZGF0YTogZm9ybURhdGEsXHJcblx0XHRcdCAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9XHJcblx0XHQgICAgfSlcdFxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coYWNjZXNzLnJlc3VsdC5tZXNzYWdlKVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRW1wbG95bWVudChkYXRhLCB0b2tlbiwgZmFjdWx0eUlkKSB7XHJcblx0dHJ5IHtcclxuXHQgICAgaWYgKHRva2VuKSB7XHJcblx0ICAgICAgICBsZXQgdXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvLycgKyBmYWN1bHR5SWQ7XHJcblx0XHQgICAgbGV0IGJvZCA9IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveW1lbnRJbmZvSWQ6IGAke2RhdGEuZW1wbG95bWVudEluZm9JZH1gLFxyXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlOiBgJHtkYXRhLnN0YXJ0RGF0ZX1gXHJcbiAgICAgICAgICAgIH1cclxuXHRcdCAgICBpZihkYXRhLmVuZERhdGUgPT0gXCJcIiB8fCBkYXRhLmVuZERhdGUgPT0gbnVsbCkgXHJcblx0XHQgICAgXHRib2QuZW5kRGF0ZSA9IG51bGxcclxuICAgICAgICAgICAgZWxzZSBib2QuZW5kRGF0ZSA9IGAke2RhdGEuZW5kRGF0ZX1gXHJcblx0ICAgICAgICB0cnkgeyBcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dCh1cmwgKyBcIi9lbXBsb3ltZW50XCIsIGJvZCwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3MucmVzdWx0Lm1lc3NhZ2UpXHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGYWN1bHR5KGRhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHQgICAgaWYgKHRva2VuKSB7XHQgICAgICBcclxuXHQgICAgICAgIGxldCB1cmwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2Jhc2ljLWluZm8vJyArIGZhY3VsdHlJZDtcclxuXHRcdCAgICBcclxuXHQgICAgICAgIHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQodXJsICsgXCIvcGVyc29uYWxcIiwge1xyXG5cdFx0XHRcdFx0Zmlyc3ROYW1lOiBgJHtkYXRhLmZpcnN0TmFtZX1gLCBcclxuXHRcdFx0XHRcdGxhc3ROYW1lOiBgJHtkYXRhLmxhc3ROYW1lfWAsXHJcblx0XHRcdFx0XHRtaWRkbGVOYW1lOiBgJHtkYXRhLm1pZGRsZU5hbWV9YCxcclxuXHRcdFx0XHRcdHN1ZmZpeDogYCR7ZGF0YS5zdWZmaXh9YCxcclxuXHRcdFx0XHRcdHBlcm1hbmVudEFkZHJlc3M6IGAke2RhdGEucGVybWFuZW50QWRkcmVzc31gLFxyXG5cdFx0XHRcdFx0cHJlc2VudEFkZHJlc3M6IGAke2RhdGEucHJlc2VudEFkZHJlc3N9YCxcclxuXHRcdFx0XHRcdG1vYmlsZTogYCR7ZGF0YS5tb2JpbGV9YCxcclxuXHRcdFx0XHRcdGxhbmRsaW5lOiBgJHtkYXRhLmxhbmRsaW5lfWAsXHJcblx0XHRcdFx0XHRlbWFpbDogYCR7ZGF0YS5lbWFpbH1gLFxyXG5cdFx0XHRcdFx0Y2l2aWxTdGF0dXM6IGAke2RhdGEuY2l2aWxTdGF0dXN9YCxcclxuXHRcdFx0XHRcdHJlbGlnaW9uOiBgJHtkYXRhLnJlbGlnaW9ufWAsXHJcblx0XHRcdFx0XHRlbWVyZ2VuY3lDb250YWN0UGVyc29uOiBgJHtkYXRhLmVtZXJnZW5jeUNvbnRhY3RQZXJzb259YCxcclxuXHQgIFx0XHRcdFx0ZW1lcmdlbmN5Q29udGFjdE51bWJlcjogYCR7ZGF0YS5lbWVyZ2VuY3lDb250YWN0TnVtYmVyfWAsXHJcblx0XHRcdFx0XHR0ZWFjaGluZ1BoaWxvc29waHk6IGAke2RhdGEucGhpbG9zb3BoeX1gLFxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHRcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3MucmVzdWx0Lm1lc3NhZ2UpXHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXb3JrRXhwKGRhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHQgICAgaWYgKHRva2VuKSB7XHJcblx0ICAgICAgICBsZXQgdXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvLycgKyBmYWN1bHR5SWQ7XHJcblx0XHQgICAgbGV0IGJvZCA9IG51bGxcclxuXHRcdCAgICBpZihkYXRhLmVuZERhdGUgPT0gXCJcIiB8fCBkYXRhLmVuZERhdGUgPT0gbnVsbCkge1xyXG5cdFx0ICAgIFx0Ym9kID0ge1xyXG5cdFx0ICAgIFx0XHR3b3JrRXhwSWQ6IGAke2RhdGEud29ya0V4cElkfWAsXHJcblx0XHRcdFx0XHRlbXBsb3llck5hbWU6IGAke2RhdGEuZW1wbG95ZXJOYW1lfWAsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYCR7ZGF0YS5wb3NpdGlvbn1gLFxyXG5cdFx0XHRcdFx0c3RhcnREYXRlOiBgJHtkYXRhLnN0YXJ0RGF0ZX1gLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IGAke2RhdGEuZGVzY3JpcHRpb259YFxyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIH0gZWxzZSB7XHJcblx0XHQgICAgXHRib2QgPSB7XHJcblx0XHQgICAgXHRcdHdvcmtFeHBJZDogYCR7ZGF0YS53b3JrRXhwSWR9YCxcclxuXHRcdFx0XHRcdGVtcGxveWVyTmFtZTogYCR7ZGF0YS5lbXBsb3llck5hbWV9YCxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBgJHtkYXRhLnBvc2l0aW9ufWAsXHJcblx0XHRcdFx0XHRzdGFydERhdGU6IGAke2RhdGEuc3RhcnREYXRlfWAsXHJcblx0XHRcdFx0XHRlbmREYXRlOiBgJHtkYXRhLmVuZERhdGV9YCxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBgJHtkYXRhLmRlc2NyaXB0aW9ufWBcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICB9XHJcblx0XHQgICAgXHJcblx0ICAgICAgICB0cnkgeyBcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dCh1cmwgKyBcIi93b3JrLWV4cFwiLCBib2QsIHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coYWNjZXNzLnJlc3VsdC5tZXNzYWdlKVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRQcm9vZihkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0XHRcdHVybDogcHJvY2Vzcy5lbnYuQVBJX1VSTCArIGAvZG93bmxvYWQvJHtkYXRhfWAsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRcdFx0aGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9LFxyXG5cdFx0XHRcdFx0cmVzcG9uc2VUeXBlOiAnYmxvYidcclxuXHRcdFx0XHR9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XHJcblx0XHRcdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdFx0XHRcdFx0bGluay5ocmVmID0gdXJsO1xyXG5cdFx0XHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgYCR7ZGF0YX1gKTsgLy9vciBhbnkgb3RoZXIgZXh0ZW5zaW9uXHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG5cdFx0XHRcdFx0bGluay5jbGljaygpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==