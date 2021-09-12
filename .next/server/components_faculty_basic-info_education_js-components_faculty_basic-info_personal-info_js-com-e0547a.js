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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_faculty_basic_info_addEducation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/faculty/basic-info/addEducation */ "./services/faculty/basic-info/addEducation.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\basic-info\\education-form.js";





class EducationForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: EducationDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let alert = document.getElementById("educalert");
        let form = document.getElementById('educForm');
        let formData = new FormData(form);
        let res = await (0,_services_faculty_basic_info_addEducation__WEBPACK_IMPORTED_MODULE_4__.default)(formData, this.props.token);

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
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/faculty/basic-info');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
        id: "educForm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-12",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "SchoolEducationalHistory[]",
              children: " School/Institution "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "institutionSchool",
              id: "institutionSchool",
              placeholder: "Input school"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "DegreeEducationalHistory[]",
              children: " Degree/Certification "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "degreeCert",
              id: "degreeCert",
              placeholder: "Input degree"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "MajorEducationalHistory[]",
              children: " Major/Specialization "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "majorSpecialization",
              id: "majorSpecialization",
              placeholder: "Input major"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "control-label",
              htmlFor: "DegreeType",
              children: " Degree Type "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              as: "select",
              className: "form-control",
              name: "degreeType",
              id: "degreeType",
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "AA",
                children: "AA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "AS",
                children: "AS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "BA",
                children: "BA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "BS",
                children: "BS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "MA",
                children: "MA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "MS",
                children: "MS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "MD",
                children: "MD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "PhD",
                children: "PhD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "StartDateEducationalHistory[]",
              children: " Start Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "date",
              className: "form-control",
              name: "startDate",
              id: "startDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EndDateEducationalHistory[]",
              children: " End Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "date",
              className: "form-control",
              name: "endDate",
              id: "endDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ProofEducationalHistory[]",
              children: " Proof "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 26
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-primary",
          disabled: isSubmitting,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 25
        }, this)]
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

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\basic-info\\education.js";

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
          children: props.children[key].institutionSchool
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
          children: props.children[key].degreeCert
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].majorSpecialization
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
        }, this), props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
              lineNumber: 72,
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
              lineNumber: 76,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 29
        }, this), !props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
              lineNumber: 86,
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
              lineNumber: 89,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
      colspan: "9",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      }
    });
  } // let message


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      children: " Educational History "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_3__.default, {
      unit: props.unit,
      position: props.position,
      employmentType: props.employmentType,
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 132,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Institution/School"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Degree Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Degree/Certification"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Major/Specialization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Approver Remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 49
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, this), content]
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
    }, this), props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_education_form__WEBPACK_IMPORTED_MODULE_2__.default, {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
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
              lineNumber: 165,
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
                lineNumber: 167,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("educalert");
              let form = document.getElementById('editEducForm');
              let formData = new FormData(form);
              formData.append('educInfoId', currData.educInfoId);
              res = await (0,_services_faculty_basic_info_updateEducation__WEBPACK_IMPORTED_MODULE_9__.default)(formData, props.token);

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
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                      lineNumber: 224,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "degreeCert",
                      id: "degreeCert",
                      placeholder: "Input degree"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 225,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
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
                      lineNumber: 230,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "majorSpecialization",
                      id: "majorSpecialization",
                      placeholder: "Input major"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
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
                      lineNumber: 236,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "date",
                      name: "startDate",
                      id: "startDate",
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
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
                      lineNumber: 242,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "date",
                      name: "endDate",
                      id: "endDate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 243,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "StartDateEducationalHistoryUpdate",
                      children: " Add/Edit Proof "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 248,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "proof",
                      id: "proof",
                      value: undefined
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
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
                  lineNumber: 254,
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
                  lineNumber: 255,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
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
              lineNumber: 270,
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
                lineNumber: 272,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this education information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 275,
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
              lineNumber: 280,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
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
                  if (res.error) values.message = res.error[0].message;else values.message = res.message;
                }

                $("#educalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#educalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/basic-info', '/faculty/basic-info');
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
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
              lineNumber: 310,
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
                lineNumber: 312,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to approve this education information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 315,
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
              lineNumber: 320,
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
              lineNumber: 321,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 306,
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
              lineNumber: 354,
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
                lineNumber: 356,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 353,
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
                  lineNumber: 391,
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
                      lineNumber: 394,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "approverRemarks",
                      placeholder: "Input remarks",
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 395,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 393,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 392,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 390,
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
                  lineNumber: 400,
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
                  lineNumber: 401,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Education);

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

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\basic-info\\employment-history.js";


function EmploymentHistory(props) {
  let content = Object.keys(props.children.faculty_employment_infos).map(key => {
    if (props.children.faculty_employment_infos[key].faculty_employment_position.employmentType == 'ftt') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].faculty_employment_position.position
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: "Full-time (Temporary)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].startDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].endDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 6
        }, this)]
      }, props.children.faculty_employment_infos[key].employmentInfoId, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 5
      }, this);
    } else if (props.children.faculty_employment_infos[key].faculty_employment_position.employmentType == 'ftp') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].faculty_employment_position.position
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: "Full-time (Permanent)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].startDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].endDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, this)]
      }, props.children.faculty_employment_infos[key].employmentInfoId, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this);
    } else if (props.children.faculty_employment_infos[key].faculty_employment_position.employmentType == 'pt') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].faculty_employment_position.position
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: "Part-time"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].startDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children.faculty_employment_infos[key].endDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, this)]
      }, props.children.faculty_employment_infos[key].employmentInfoId, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, this);
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 6
          }, this), content]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\basic-info\\personal-info-dependents.js";



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
        children: "hr.jsx-3678425261{border:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxCb2RcXGRwc20tcWEtcG9ydGFsXFxjb21wb25lbnRzXFxmYWN1bHR5XFxiYXNpYy1pbmZvXFxwZXJzb25hbC1pbmZvLWRlcGVuZGVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJ3QixBQUd3Qyx1QkFDM0IiLCJmaWxlIjoiRDpcXEJvZFxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXGZhY3VsdHlcXGJhc2ljLWluZm9cXHBlcnNvbmFsLWluZm8tZGVwZW5kZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuLy8gaW1wb3J0IGFkZERlcGVuZGVudCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vYWRkRGVwZW5kZW50J1xyXG5cclxuY2xhc3MgUGVyc29uYWxJbmZvRGVwZW5kZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGR1cGxpY2F0ZUZvcm1zOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZHVwbGljYXRlRm9ybXMucHVzaCg8ZGl2PjxociAvPjxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVwZW5kZW50TmFtZVtdXCI+IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiRGVwZW5kZW50TmFtZVtdXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG5hbWUgb2YgZGVwZW5kZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVwZW5kZW50RGF0ZU9mQmlydGhbXVwiPiBEYXRlIG9mIEJpcnRoIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcIkRlcGVuZGVudERhdGVPZkJpcnRoW11cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRGVwZW5kZW50UmVsYXRpb25zaGlwW11cIj4gUmVsYXRpb25zaGlwIHRvIFVzZXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiRGVwZW5kZW50UmVsYXRpb25zaGlwW11cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGhye1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbW92ZSgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZHVwbGljYXRlRm9ybXMucG9wKClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBEZXBlbmRlbnREZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBiaXJ0aERhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHJlbGF0aW9uc2hpcDogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQgPSBcIkFkZERlcGVuZGVudFwiIG9uQ2xpY2sgPSB7KCkgPT4gdGhpcy5jbG9uZSgpfT4gQWRkIERlcGVuZGVudCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJidXR0b25cIiBjbGFzc05hbWUgPSBcImJ0biBidG4tZGFuZ2VyXCIgaWQgPSBcIlJlbW92ZURlcGVuZGVudFwiIG9uQ2xpY2sgPSB7KCkgPT4gdGhpcy5yZW1vdmUoKX0+IFJlbW92ZSBhIFJvdyA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVwZW5kZW50TmFtZVtdXCI+IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm5hbWVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgbmFtZSBvZiBkZXBlbmRlbnRcIiBpZCA9IFwibmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlcGVuZGVudERhdGVPZkJpcnRoW11cIj4gRGF0ZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiYmlydGhEYXRlXCIgaWQgPSBcImJpcnRoRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEZXBlbmRlbnRSZWxhdGlvbnNoaXBbXVwiPiBSZWxhdGlvbnNoaXAgdG8gVXNlciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmVsYXRpb25zaGlwXCIgaWQgPSBcInJlbGF0aW9uc2hpcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQgPSBcIkRlcGVuZGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kdXBsaWNhdGVGb3Jtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdHlwZSA9IFwic3VibWl0XCJcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgLy8gICAgIC8vICl9XHJcbiAgICAgICAgICAgIC8vIDwvRm9ybWlrPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxJbmZvRGVwZW5kZW50cyJdfQ== */\n/*@ sourceURL=D:\\\\Bod\\\\dpsm-qa-portal\\\\components\\\\faculty\\\\basic-info\\\\personal-info-dependents.js */"
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

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\basic-info\\personal-info.js";











function PersonalInfo(props) {
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
      civilStatus: props.children.civilStatus,
      religion: props.children.religion,
      emergencyContactPerson: props.children.emergencyContactPerson,
      emergencyContactNumber: props.children.emergencyContactNumber,
      suffix: props.children.suffix,
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
            lineNumber: 44,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "form-control",
            type: "text",
            name: "name",
            defaultValue: props.children.faculty_dependents[key].name,
            disabled: !props.facultyFlag && !props.clerkFlag,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-4 required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "control-label",
            htmlFor: "DependentDateOfBirth",
            children: " Date of Birth "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "form-control",
            type: "date",
            name: "birthDate",
            defaultValue: props.children.faculty_dependents[key].birthDate,
            disabled: !props.facultyFlag && !props.clerkFlag,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-4 required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "control-label",
            htmlFor: "DependentRelationship[]",
            children: " Relationship to User "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "form-control",
            type: "text",
            name: "relationship",
            defaultValue: props.children.faculty_dependents[key].relationship,
            disabled: !props.facultyFlag && !props.clerkFlag,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
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
      philosophy: ''
    };
    props.positions.forEach(key => {
      positions.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: key.employmentPositionId,
        children: key.position
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
      lineNumber: 94,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_7__.default, {
      unit: props.unit,
      position: props.position,
      employmentType: props.employmentType,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
      initialValues: FacultyDetails,
      onSubmit: async (values, token) => {
        if (props.clerkFlag) {
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

        if (props.clerkFlag) {
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
          lineNumber: 135,
          columnNumber: 21
        }, this), props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "jsx-2179700803",
          children: "Required"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 43
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-2179700803"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
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
              lineNumber: 142,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "firstName",
              defaultValue: FacultyDetails.firstName,
              disabled: !props.clerkFlag,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "MiddleName",
              className: "jsx-2179700803",
              children: " Middle Name "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "middleName",
              defaultValue: FacultyDetails.middleName,
              disabled: !props.facultyFlag && !props.clerkFlag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "LastName",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Last Name "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "lastName",
              defaultValue: FacultyDetails.lastName,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Suffix",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Suffix "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "suffix",
              defaultValue: FacultyDetails.suffix,
              disabled: !props.facultyFlag && !props.clerkFlag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
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
              lineNumber: 160,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              as: "select",
              className: "form-control",
              name: "gender",
              defaultValue: FacultyDetails.gender,
              disabled: !props.clerkFlag,
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Male",
                className: "jsx-2179700803",
                children: "Male"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Female",
                className: "jsx-2179700803",
                children: "Female"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "DateOfBirth",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Date of Birth "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "date",
              name: "dateOfBirth",
              defaultValue: FacultyDetails.dateOfBirth,
              disabled: !props.clerkFlag,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PlaceOfBirth",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Place of Birth "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "placeOfBirth",
              defaultValue: FacultyDetails.placeOfBirth,
              disabled: !props.clerkFlag,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-2179700803"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-group required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "PresentAddress",
            className: "jsx-2179700803" + " " + "control-label",
            children: " Present Address "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
            className: "form-control",
            type: "text",
            name: "presentAddress",
            defaultValue: FacultyDetails.presentAddress,
            disabled: !props.facultyFlag && !props.clerkFlag,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-group required",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "PermanentAddress",
            className: "jsx-2179700803" + " " + "control-label",
            children: " Permanent Address "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
            className: "form-control",
            type: "text",
            name: "permanentAddress",
            defaultValue: FacultyDetails.permanentAddress,
            disabled: !props.facultyFlag && !props.clerkFlag,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
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
              lineNumber: 186,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              as: "select",
              className: "form-control",
              name: "civilStatus",
              defaultValue: FacultyDetails.civilStatus,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "single",
                className: "jsx-2179700803",
                children: "Single"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "married",
                className: "jsx-2179700803",
                children: "Married"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "separated",
                className: "jsx-2179700803",
                children: "Separated (Legally)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "divorced",
                className: "jsx-2179700803",
                children: "Divorced"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "widowed",
                className: "jsx-2179700803",
                children: "Widowed"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Religion",
              className: "jsx-2179700803",
              children: " Religion "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "religion",
              defaultValue: FacultyDetails.religion,
              disabled: !props.facultyFlag && !props.clerkFlag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803" + " " + "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ContactNumber",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Contact Number (Landline) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "tel",
              name: "landline",
              pattern: "[0-9]{8}",
              defaultValue: FacultyDetails.landline,
              disabled: !props.facultyFlag && !props.clerkFlag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ContactNumber",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Contact Number (Mobile) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "tel",
              name: "mobile",
              pattern: "[0]{1}[9]{1}[0-9]{9}",
              defaultValue: FacultyDetails.mobile,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-4 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EmailAddressAlt",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Personal E-mail Address "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "email",
              name: "email",
              defaultValue: FacultyDetails.email,
              disabled: !props.facultyFlag && !props.clerkFlag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
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
              lineNumber: 216,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "text",
              name: "emergencyContactPerson",
              defaultValue: FacultyDetails.emergencyContactPerson,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-2179700803" + " " + "form-group col-md-6 required",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EmergencyContactNumber",
              className: "jsx-2179700803" + " " + "control-label",
              children: " Emergency Contact Number "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              type: "tel",
              name: "emergencyContactNumber",
              pattern: "[0]{1}[9]{1}[0-9]{9}",
              defaultValue: FacultyDetails.emergencyContactNumber,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 214,
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
              lineNumber: 226,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
              className: "form-control",
              component: "textarea",
              rows: 5,
              name: "philosophy",
              defaultValue: FacultyDetails.philosophy,
              disabled: !props.facultyFlag && !props.clerkFlag,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-2179700803"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }, this), props.clerkFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2179700803",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "jsx-2179700803"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            className: "jsx-2179700803",
            children: "Employment Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
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
                lineNumber: 240,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                className: "form-control",
                type: "email",
                name: "upemail",
                defaultValue: FacultyDetails.email,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "Unit",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Unit "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
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
                  lineNumber: 246,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "2",
                  className: "jsx-2179700803",
                  children: "Mathematical and Computing Sciences Unit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "3",
                  className: "jsx-2179700803",
                  children: "Physics and Geology Unit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "EmploymentPosition",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Employment Position "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
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
                lineNumber: 253,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-2179700803" + " " + "form-group col-md-3 required",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "StartDate",
                className: "jsx-2179700803" + " " + "control-label",
                children: " Start Date "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                className: "form-control",
                type: "date",
                name: "startDate",
                defaultValue: FacultyDetails.StartDate,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 25
        }, this), props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-2179700803" + " " + "btn btn-primary",
          children: " Update "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 44
        }, this), props.clerkFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-2179700803" + " " + "btn btn-primary",
          children: " Add Faculty "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 42
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-2179700803"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2179700803",
      children: ".form-group.required.jsx-2179700803 .control-label.jsx-2179700803:after{content:\"*\";color:#f00;}h6.jsx-2179700803:before{content:\"* \";color:#f00;}#alert.jsx-2179700803{visibility:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxCb2RcXGRwc20tcWEtcG9ydGFsXFxjb21wb25lbnRzXFxmYWN1bHR5XFxiYXNpYy1pbmZvXFxwZXJzb25hbC1pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStRb0IsQUFHNkIsQUFJQyxBQUlLLFlBUFAsQ0FJQSxLQUlmLEtBUEEsQ0FJQSIsImZpbGUiOiJEOlxcQm9kXFxkcHNtLXFhLXBvcnRhbFxcY29tcG9uZW50c1xcZmFjdWx0eVxcYmFzaWMtaW5mb1xccGVyc29uYWwtaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUGVyc29uYWxJbmZvRGVwZW5kZW50cyBmcm9tICcuL3BlcnNvbmFsLWluZm8tZGVwZW5kZW50cydcclxuaW1wb3J0IE5hbWVEaXNwbGF5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmFtZS1kaXNwbGF5J1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVyc1wiXHJcblxyXG5pbXBvcnQgdXBkYXRlRmFjdWx0eSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlRmFjdWx0eSdcclxuaW1wb3J0IGFkZEZhY3VsdHkgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWRtaW4vYWRkRmFjdWx0eSdcclxuXHJcbmZ1bmN0aW9uIFBlcnNvbmFsSW5mbyhwcm9wcykge1xyXG4gICAgbGV0IEZhY3VsdHlEZXRhaWxzXHJcbiAgICBsZXQgbmFtZVxyXG4gICAgbGV0IGRlcGVuZGVudHNcclxuICAgIGxldCByZXNcclxuICAgIGxldCBwb3NpdGlvbnMgPSBbXVxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgIEZhY3VsdHlEZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHByb3BzLmNoaWxkcmVuLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHByb3BzLmNoaWxkcmVuLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICBtaWRkbGVOYW1lOiBwcm9wcy5jaGlsZHJlbi5taWRkbGVOYW1lLFxyXG4gICAgICAgICAgICBnZW5kZXI6IHByb3BzLmNoaWxkcmVuLmdlbmRlcixcclxuICAgICAgICAgICAgZGF0ZU9mQmlydGg6IHByb3BzLmNoaWxkcmVuLmRhdGVPZkJpcnRoLFxyXG4gICAgICAgICAgICBwbGFjZU9mQmlydGg6IHByb3BzLmNoaWxkcmVuLnBsYWNlT2ZCaXJ0aCxcclxuICAgICAgICAgICAgcGVybWFuZW50QWRkcmVzczogcHJvcHMuY2hpbGRyZW4ucGVybWFuZW50QWRkcmVzcyxcclxuICAgICAgICAgICAgcHJlc2VudEFkZHJlc3M6IHByb3BzLmNoaWxkcmVuLnByZXNlbnRBZGRyZXNzLFxyXG4gICAgICAgICAgICBtb2JpbGU6IHByb3BzLmNoaWxkcmVuLm1vYmlsZSxcclxuICAgICAgICAgICAgbGFuZGxpbmU6IHByb3BzLmNoaWxkcmVuLmxhbmRsaW5lLFxyXG4gICAgICAgICAgICBlbWFpbDogcHJvcHMuY2hpbGRyZW4uZW1haWwsXHJcbiAgICAgICAgICAgIGNpdmlsU3RhdHVzOiBwcm9wcy5jaGlsZHJlbi5jaXZpbFN0YXR1cyxcclxuICAgICAgICAgICAgcmVsaWdpb246IHByb3BzLmNoaWxkcmVuLnJlbGlnaW9uLFxyXG4gICAgICAgICAgICBlbWVyZ2VuY3lDb250YWN0UGVyc29uOiBwcm9wcy5jaGlsZHJlbi5lbWVyZ2VuY3lDb250YWN0UGVyc29uLFxyXG4gICAgICAgICAgICBlbWVyZ2VuY3lDb250YWN0TnVtYmVyOiBwcm9wcy5jaGlsZHJlbi5lbWVyZ2VuY3lDb250YWN0TnVtYmVyLFxyXG4gICAgICAgICAgICBzdWZmaXg6IHByb3BzLmNoaWxkcmVuLnN1ZmZpeCxcclxuICAgICAgICAgICAgZmFjdWx0eV9kZXBlbmRlbnRzOiBwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2RlcGVuZGVudHMsXHJcbiAgICAgICAgICAgIHBoaWxvc29waHk6IHByb3BzLmNoaWxkcmVuLnRlYWNoaW5nUGhpbG9zb3BoeVxyXG4gICAgICAgIH1cclxuICAgICAgICBuYW1lID0gcHJvcHMuY2hpbGRyZW4ubGFzdE5hbWUgKyAnLCAnICsgcHJvcHMuY2hpbGRyZW4uZmlyc3ROYW1lXHJcbiAgICAgICAgZGVwZW5kZW50cyA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZGVwZW5kZW50cykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkRlcGVuZGVudFwiPiBOYW1lIG9mIERlcGVuZGVudCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibmFtZVwiIGRlZmF1bHRWYWx1ZSA9IHsgcHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9kZXBlbmRlbnRzW2tleV0ubmFtZSB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRGVwZW5kZW50RGF0ZU9mQmlydGhcIj4gRGF0ZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiYmlydGhEYXRlXCIgZGVmYXVsdFZhbHVlID0geyBwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2RlcGVuZGVudHNba2V5XS5iaXJ0aERhdGUgfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkRlcGVuZGVudFJlbGF0aW9uc2hpcFtdXCI+IFJlbGF0aW9uc2hpcCB0byBVc2VyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJyZWxhdGlvbnNoaXBcIiBkZWZhdWx0VmFsdWUgPSB7IHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZGVwZW5kZW50c1trZXldLnJlbGF0aW9uc2hpcCB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBGYWN1bHR5RGV0YWlscyA9IHtcclxuICAgICAgICAgICAgY2xlcms6ICcnLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIG1pZGRsZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICBnZW5kZXI6ICdNYWxlJyxcclxuICAgICAgICAgICAgZGF0ZU9mQmlydGg6ICcnLFxyXG4gICAgICAgICAgICBwbGFjZU9mQmlydGg6ICcnLFxyXG4gICAgICAgICAgICBwZXJtYW5lbnRBZGRyZXNzOiAnJyxcclxuICAgICAgICAgICAgcHJlc2VudEFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBtb2JpbGU6ICcnLFxyXG4gICAgICAgICAgICBsYW5kbGluZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgY2l2aWxTdGF0dXM6ICdzaW5nbGUnLFxyXG4gICAgICAgICAgICByZWxpZ2lvbjogJycsXHJcbiAgICAgICAgICAgIGVtZXJnZW5jeUNvbnRhY3RQZXJzb246ICcnLFxyXG4gICAgICAgICAgICBlbWVyZ2VuY3lDb250YWN0TnVtYmVyOiAnJyxcclxuICAgICAgICAgICAgc3VmZml4OiAnJyxcclxuICAgICAgICAgICAgZmFjdWx0eV9kZXBlbmRlbnRzOiAnJyxcclxuICAgICAgICAgICAgdXBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHVuaXQ6ICcxJyxcclxuICAgICAgICAgICAgZW1wbG95bWVudFBvc2l0aW9uOiAnMScsXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJycsXHJcbiAgICAgICAgICAgIHBoaWxvc29waHk6ICcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9wcy5wb3NpdGlvbnMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbnMucHVzaChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSB7a2V5LmVtcGxveW1lbnRQb3NpdGlvbklkfT57a2V5LnBvc2l0aW9ufTwvb3B0aW9uPiAgICBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aDIgYWxpZ24gPSBcImNlbnRlclwiPiBQZXJzb25hbCBJbmZvcm1hdGlvbiA8L2gyPlxyXG4gICAgICAgIDxOYW1lRGlzcGxheSB1bml0ID0ge3Byb3BzLnVuaXR9IHBvc2l0aW9uPXtwcm9wcy5wb3NpdGlvbn0gZW1wbG95bWVudFR5cGU9e3Byb3BzLmVtcGxveW1lbnRUeXBlfT57bmFtZX08L05hbWVEaXNwbGF5PlxyXG5cdFx0PEZvcm1pa1xyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtGYWN1bHR5RGV0YWlsc31cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHRva2VuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuY2xlcmtGbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgYWRkRmFjdWx0eSh2YWx1ZXMsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCB1cGRhdGVGYWN1bHR5KHZhbHVlcywgcHJvcHMudG9rZW4pICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLm1lc3NhZ2UgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSB2YWx1ZXMubWVzc2FnZSA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB2YWx1ZXMubWVzc2FnZSA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5jbGVya0ZsYWcpIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vZmFjdWx0eScpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hZG1pblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycpIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIiBpZD1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZXMubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZmFjdWx0eUZsYWcgJiYgPGg2PlJlcXVpcmVkPC9oNj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRmlyc3ROYW1lXCI+IEZpcnN0IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJmaXJzdE5hbWVcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmZpcnN0TmFtZSB9IGRpc2FibGVkPXshcHJvcHMuY2xlcmtGbGFnfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJNaWRkbGVOYW1lXCI+IE1pZGRsZSBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibWlkZGxlTmFtZVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMubWlkZGxlTmFtZSB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiTGFzdE5hbWVcIj4gTGFzdCBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibGFzdE5hbWVcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmxhc3ROYW1lIH0gZGlzYWJsZWQ9eyFwcm9wcy5mYWN1bHR5RmxhZyAmJiAhcHJvcHMuY2xlcmtGbGFnfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJTdWZmaXhcIj4gU3VmZml4IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwic3VmZml4XCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5zdWZmaXggfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIlNleFwiPiBTZXggKGF0IGJpcnRoKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImdlbmRlclwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZ2VuZGVyIH0gZGlzYWJsZWQ9eyFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1hbGVcIj5NYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiRmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEYXRlT2ZCaXJ0aFwiPiBEYXRlIG9mIEJpcnRoIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwiZGF0ZU9mQmlydGhcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmRhdGVPZkJpcnRoIH0gZGlzYWJsZWQ9eyFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIlBsYWNlT2ZCaXJ0aFwiPiBQbGFjZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInBsYWNlT2ZCaXJ0aFwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMucGxhY2VPZkJpcnRoIH0gZGlzYWJsZWQ9eyFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJQcmVzZW50QWRkcmVzc1wiPiBQcmVzZW50IEFkZHJlc3MgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInByZXNlbnRBZGRyZXNzXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5wcmVzZW50QWRkcmVzcyB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiUGVybWFuZW50QWRkcmVzc1wiPiBQZXJtYW5lbnQgQWRkcmVzcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicGVybWFuZW50QWRkcmVzc1wiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMucGVybWFuZW50QWRkcmVzcyB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTYgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID1cIkNpdmlsU3RhdHVzXCI+IENpdmlsIFN0YXR1cyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImNpdmlsU3RhdHVzXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5jaXZpbFN0YXR1cyB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwic2luZ2xlXCI+U2luZ2xlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwibWFycmllZFwiPk1hcnJpZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJzZXBhcmF0ZWRcIj5TZXBhcmF0ZWQgKExlZ2FsbHkpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiZGl2b3JjZWRcIj5EaXZvcmNlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIndpZG93ZWRcIj5XaWRvd2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVsaWdpb25cIj4gUmVsaWdpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmVsaWdpb25cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnJlbGlnaW9uIH0gZGlzYWJsZWQ9eyFwcm9wcy5mYWN1bHR5RmxhZyAmJiAhcHJvcHMuY2xlcmtGbGFnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJDb250YWN0TnVtYmVyXCI+IENvbnRhY3QgTnVtYmVyIChMYW5kbGluZSkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRlbFwiIG5hbWUgPSBcImxhbmRsaW5lXCIgcGF0dGVybiA9IFwiWzAtOV17OH1cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmxhbmRsaW5lIH0gZGlzYWJsZWQ9eyFwcm9wcy5mYWN1bHR5RmxhZyAmJiAhcHJvcHMuY2xlcmtGbGFnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJDb250YWN0TnVtYmVyXCI+IENvbnRhY3QgTnVtYmVyIChNb2JpbGUpIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZWxcIiBuYW1lID0gXCJtb2JpbGVcIiBwYXR0ZXJuID0gXCJbMF17MX1bOV17MX1bMC05XXs5fVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMubW9iaWxlIH0gZGlzYWJsZWQ9eyFwcm9wcy5mYWN1bHR5RmxhZyAmJiAhcHJvcHMuY2xlcmtGbGFnfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJFbWFpbEFkZHJlc3NBbHRcIj4gUGVyc29uYWwgRS1tYWlsIEFkZHJlc3MgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImVtYWlsXCIgbmFtZSA9IFwiZW1haWxcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmVtYWlsIH0gZGlzYWJsZWQ9eyFwcm9wcy5mYWN1bHR5RmxhZyAmJiAhcHJvcHMuY2xlcmtGbGFnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTYgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJFbWVyZ2VuY3lDb250YWN0XCI+IEVtZXJnZW5jeSBDb250YWN0IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZW1lcmdlbmN5Q29udGFjdFBlcnNvblwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1lcmdlbmN5Q29udGFjdFBlcnNvbiB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1lcmdlbmN5Q29udGFjdE51bWJlclwiPiBFbWVyZ2VuY3kgQ29udGFjdCBOdW1iZXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRlbFwiIG5hbWUgPSBcImVtZXJnZW5jeUNvbnRhY3ROdW1iZXJcIiBwYXR0ZXJuID0gXCJbMF17MX1bOV17MX1bMC05XXs5fVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1lcmdlbmN5Q29udGFjdE51bWJlciB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0xMiByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcInBoaWxvc29waHlcIj4gVGVhY2hpbmcgUGhpbG9zb3BoeSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgY29tcG9uZW50ID0gXCJ0ZXh0YXJlYVwiIHJvd3MgPSB7NX0gbmFtZSA9IFwicGhpbG9zb3BoeVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMucGhpbG9zb3BoeSB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPGg1IGFsaWduID0gXCJjZW50ZXJcIj4gRGVwZW5kZW50cyA8L2g1PiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKntkZXBlbmRlbnRzfSovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2xlcmtGbGFnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkVtcGxveW1lbnQgSW5mbzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1haWxBZGRyZXNzQWx0XCI+IFVQIEUtbWFpbCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJlbWFpbFwiIG5hbWUgPSBcInVwZW1haWxcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmVtYWlsIH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJVbml0XCI+IFVuaXQgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInVuaXRcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnVuaXQgfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIjFcIj5DaGVtaXN0cnkgVW5pdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiMlwiPk1hdGhlbWF0aWNhbCBhbmQgQ29tcHV0aW5nIFNjaWVuY2VzIFVuaXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIjNcIj5QaHlzaWNzIGFuZCBHZW9sb2d5IFVuaXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1wbG95bWVudFBvc2l0aW9uXCI+IEVtcGxveW1lbnQgUG9zaXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVtcGxveW1lbnRQb3NpdGlvblwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuZW1wbG95bWVudFBvc2l0aW9uIH0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zaXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJTdGFydERhdGVcIj4gU3RhcnQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwic3RhcnREYXRlXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5TdGFydERhdGUgfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5mYWN1bHR5RmxhZyAmJiA8YnV0dG9uIHR5cGUgPSBcInN1Ym1pdFwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfT4gVXBkYXRlIDwvYnV0dG9uPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jbGVya0ZsYWcgJiYgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30+IEFkZCBGYWN1bHR5IDwvYnV0dG9uPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qeyBwcm9wcy5mYWN1bHR5RmxhZyAmJiA8UGVyc29uYWxJbmZvRGVwZW5kZW50cyAvPiB9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuZm9ybS1ncm91cC5yZXF1aXJlZCAuY29udHJvbC1sYWJlbDphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCIqIFwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2FsZXJ0IHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb25hbEluZm9cclxuIl19 */\n/*@ sourceURL=D:\\\\Bod\\\\dpsm-qa-portal\\\\components\\\\faculty\\\\basic-info\\\\personal-info.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_faculty_basic_info_addWorkExp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/faculty/basic-info/addWorkExp */ "./services/faculty/basic-info/addWorkExp.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\basic-info\\work-exp-form.js";





class WorkExpForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: WorkDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let alert = document.getElementById("workexpalert");
        let res = await (0,_services_faculty_basic_info_addWorkExp__WEBPACK_IMPORTED_MODULE_4__.default)(values, this.props.token);

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
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/faculty/basic-info', '/faculty/basic-info');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EmployerWorkExperience[]",
              children: " Employer "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "employerName",
              placeholder: "Input name of employer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PositionWorkExperience[]",
              children: " Title/Position "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "position",
              placeholder: "Input position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "DescriptionWorkExperience[]",
              children: " Description "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "description",
              placeholder: "Add Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "StartDateWorkExperience[]",
              children: " Start Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "date",
              className: "form-control",
              name: "startDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "EndDateWorkExperience[]",
              children: " End Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "date",
              className: "form-control",
              name: "endDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-primary",
          disabled: isSubmitting,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 7
        }, this)]
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
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_faculty_basic_info_updateWorkExp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/faculty/basic-info/updateWorkExp */ "./services/faculty/basic-info/updateWorkExp.js");
/* harmony import */ var _services_faculty_basic_info_deleteWorkExp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/faculty/basic-info/deleteWorkExp */ "./services/faculty/basic-info/deleteWorkExp.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\basic-info\\work-experience.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function WorkExperience(props) {
  const name = props.name;
  let deleteWork = 0;
  let editWork = 0;
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_6___default().useState({
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
            lineNumber: 29,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].position
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].startDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.children[key].endDate, !props.children[key].endDate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "Present"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 91
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
                lineNumber: 38,
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
                lineNumber: 42,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, this)]
        }, props.children[key].workExpId, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this);
      }
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colspan: "6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 82,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_4__.default, {
      unit: props.unit,
      position: props.position,
      employmentType: props.employmentType,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      role: "alert",
      id: "workexpalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
      align: "center",
      children: " Within UP Manila "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_employment_history__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: props.employment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
      align: "center",
      children: " Outside UP Manila "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      className: "table table-striped table-sm",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Employer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Position"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Start Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "End Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 21
          }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Action"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 41
          }, this)]
        }, "headers", true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, this), content]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_work_exp_form__WEBPACK_IMPORTED_MODULE_2__.default, {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
              lineNumber: 113,
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
                lineNumber: 115,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
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
                    lineNumber: 123,
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
                    lineNumber: 124,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
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
                    lineNumber: 129,
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
                    lineNumber: 130,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
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
                    lineNumber: 135,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "date",
                    className: "form-control",
                    name: "StartDateWorkExperienceUpdate",
                    defaultValue: currData.startDate,
                    onChange: e => handleInputChange("startDate", e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
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
                    lineNumber: 141,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "date",
                    className: "form-control",
                    name: "EndDateWorkExperienceUpdate",
                    defaultValue: currData.endDate,
                    onChange: e => handleInputChange("endDate", e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
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
                    lineNumber: 147,
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
                    lineNumber: 148,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
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
              lineNumber: 154,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: async () => {
                $('#editWorkExperience').modal('toggle');
                let alert = document.getElementById("workexpalert");
                let res = await (0,_services_faculty_basic_info_updateWorkExp__WEBPACK_IMPORTED_MODULE_7__.default)(currData, props.token);

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
                next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/faculty/basic-info');
              },
              children: "Save changes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
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
              lineNumber: 183,
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
                lineNumber: 185,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this work experience information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
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
              lineNumber: 193,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: async () => {
                $('#deleteWorkExperience').modal('toggle');
                let alert = document.getElementById("workexpalert");
                let res = await (0,_services_faculty_basic_info_deleteWorkExp__WEBPACK_IMPORTED_MODULE_8__.default)(deleteWork, props.token);

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
                next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/faculty/basic-info');
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
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
      let url = 'http://localhost:3001/api/user/add';
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
          url: 'http://localhost:3001/api/faculty/basic-info/add/education',
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
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:3001/api/faculty/basic-info/add/work-exp", bod, {
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
  } else status = 'Rejected';

  formData.append('status', status);

  try {
    if (token) {
      try {
        let url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
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
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api/faculty/basic-info/" + facultyId + "/education", {
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
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api/faculty/basic-info/" + facultyId + "/work-exp", {
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
      let url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

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
      let url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(url + "/personal", {
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
      let url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL2VkdWNhdGlvbi1mb3JtLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vZWR1Y2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vZW1wbG95bWVudC1oaXN0b3J5LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vcGVyc29uYWwtaW5mby1kZXBlbmRlbnRzLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2Jhc2ljLWluZm8vcGVyc29uYWwtaW5mby5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9iYXNpYy1pbmZvL3dvcmstZXhwLWZvcm0uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2ZhY3VsdHkvYmFzaWMtaW5mby93b3JrLWV4cGVyaWVuY2UuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9hZG1pbi9hZGRGYWN1bHR5LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZEVkdWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hZGRXb3JrRXhwLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FwcHJvdmVFZHVjYXRpb24uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vZGVsZXRlRWR1Y2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2RlbGV0ZVdvcmtFeHAuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlRWR1Y2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL3VwZGF0ZUZhY3VsdHkuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vdXBkYXRlV29ya0V4cC5qcyJdLCJuYW1lcyI6WyJFZHVjYXRpb25Gb3JtIiwiUmVhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiRWR1Y2F0aW9uRGV0YWlscyIsImluc3RpdHV0aW9uU2Nob29sIiwiZGVncmVlVHlwZSIsImRlZ3JlZUNlcnQiLCJtYWpvclNwZWNpYWxpemF0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInByb29mIiwidmFsdWVzIiwicmVzZXRGb3JtIiwiYWxlcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9ybSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJyZXMiLCJhZGRFZHVjYXRpb24iLCJ0b2tlbiIsInN1Y2Nlc3MiLCJjbGFzc05hbWUiLCJzdHlsZSIsImlubmVySFRNTCIsIm1lc3NhZ2UiLCJlcnJvciIsInNldEF0dHJpYnV0ZSIsIiQiLCJmYWRlVG8iLCJzbGlkZVVwIiwiUm91dGVyIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzU3VibWl0dGluZyIsIkVkdWNhdGlvbiIsImRlbGV0ZUVkdWMiLCJlZGl0RWR1YyIsImFwcHJvdmVFZHVjIiwiY3VyckRhdGEiLCJzZXREYXRhIiwiZWR1Y0luZm9JZCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJmaWxlIiwiZG93bmxvYWRQcm9vZiIsImNvbG9yIiwic3RhdHVzIiwiYXBwcm92ZXJSZW1hcmtzIiwiZmFjdWx0eUZsYWciLCJ2aWV3RmxhZyIsInNldEVkaXQiLCJzZXRLZXkiLCJzZXREZWxldGUiLCJzZXRBcHByb3ZlIiwiaWQiLCJ4IiwidW5pdCIsInBvc2l0aW9uIiwiZW1wbG95bWVudFR5cGUiLCJuYW1lIiwidmlzaWJpbGl0eSIsImFwcGVuZCIsInVwZGF0ZUVkdWNhdGlvbiIsInVuZGVmaW5lZCIsIm1vZGFsIiwiZGVsZXRlRWR1Y2F0aW9uIiwiYXBwcm92ZUVkdWNhdGlvbiIsImZhY3VsdHlJZCIsIkVtcGxveW1lbnRIaXN0b3J5IiwiZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zIiwiZmFjdWx0eV9lbXBsb3ltZW50X3Bvc2l0aW9uIiwiZW1wbG95bWVudEluZm9JZCIsIlBlcnNvbmFsSW5mb0RlcGVuZGVudHMiLCJzdGF0ZSIsImR1cGxpY2F0ZUZvcm1zIiwiY2xvbmUiLCJwdXNoIiwic2V0U3RhdGUiLCJyZW1vdmUiLCJwb3AiLCJEZXBlbmRlbnREZXRhaWxzIiwiYmlydGhEYXRlIiwicmVsYXRpb25zaGlwIiwiUGVyc29uYWxJbmZvIiwiRmFjdWx0eURldGFpbHMiLCJkZXBlbmRlbnRzIiwicG9zaXRpb25zIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJtaWRkbGVOYW1lIiwiZ2VuZGVyIiwiZGF0ZU9mQmlydGgiLCJwbGFjZU9mQmlydGgiLCJwZXJtYW5lbnRBZGRyZXNzIiwicHJlc2VudEFkZHJlc3MiLCJtb2JpbGUiLCJsYW5kbGluZSIsImVtYWlsIiwiY2l2aWxTdGF0dXMiLCJyZWxpZ2lvbiIsImVtZXJnZW5jeUNvbnRhY3RQZXJzb24iLCJlbWVyZ2VuY3lDb250YWN0TnVtYmVyIiwic3VmZml4IiwiZmFjdWx0eV9kZXBlbmRlbnRzIiwicGhpbG9zb3BoeSIsInRlYWNoaW5nUGhpbG9zb3BoeSIsImNsZXJrRmxhZyIsImNsZXJrIiwidXBlbWFpbCIsImVtcGxveW1lbnRQb3NpdGlvbiIsImZvckVhY2giLCJlbXBsb3ltZW50UG9zaXRpb25JZCIsImFkZEZhY3VsdHkiLCJ1cGRhdGVGYWN1bHR5Iiwid2luZG93Iiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwiaHJlZiIsIlN0YXJ0RGF0ZSIsIldvcmtFeHBGb3JtIiwiV29ya0RldGFpbHMiLCJlbXBsb3llck5hbWUiLCJkZXNjcmlwdGlvbiIsImFkZFdvcmtFeHAiLCJXb3JrRXhwZXJpZW5jZSIsImRlbGV0ZVdvcmsiLCJlZGl0V29yayIsIndvcmtFeHBJZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtcGxveW1lbnQiLCJlIiwidXBkYXRlV29ya0V4cCIsImRlbGV0ZVdvcmtFeHAiLCJkYXRhIiwiY29va2llRGF0YSIsImp3dCIsInVybCIsImhlYWRlciIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJheGlvcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhY2Nlc3MiLCJyZXN1bHQiLCJnZXQiLCJkZWxldGUiLCJtZXRob2QiLCJBdXRob3JpemF0aW9uIiwiYm9kIiwiYXBwcm92ZUZsYWciLCJyb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLGFBQU4sU0FBNEJDLHdEQUE1QixDQUEyQztBQUN2Q0MsYUFBVyxDQUFDQyxLQUFELEVBQU87QUFDZCxVQUFNQSxLQUFOO0FBQ0g7O0FBRURDLFFBQU0sR0FBRTtBQUNKLFFBQUlDLGdCQUFnQixHQUFHO0FBQ25CQyx1QkFBaUIsRUFBRSxFQURBO0FBRW5CQyxnQkFBVSxFQUFFLEVBRk87QUFHbkJDLGdCQUFVLEVBQUUsRUFITztBQUluQkMseUJBQW1CLEVBQUUsRUFKRjtBQUtuQkMsZUFBUyxFQUFFLEVBTFE7QUFNbkJDLGFBQU8sRUFBRSxFQU5VO0FBT25CQyxXQUFLLEVBQUU7QUFQWSxLQUF2QjtBQVVBLHdCQUNJLDhEQUFDLDBDQUFEO0FBQ0ksbUJBQWEsRUFB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QUFTMUksS0FBTTtBQUR2QjtBQUQrQyxTQUFsQyxDQUF2QjtBQUtBLGVBQU9nSSxRQUFRLENBQUNQLElBQWhCO0FBQ0EsT0FQSyxDQU9KLE9BQU9TLEdBQVAsRUFBWTtBQUNiQyxlQUFPLENBQUM3SCxLQUFSLENBQWM0SCxHQUFkO0FBQ0EsZUFBT0EsR0FBUDtBQUNBO0FBQ0UsS0F0Q0QsTUFzQ087QUFDSEMsYUFBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjakksT0FBMUI7QUFDTjtBQUNELEdBMUNELENBMENFLE9BQU82SCxHQUFQLEVBQVk7QUFDYkMsV0FBTyxDQUFDN0gsS0FBUixDQUFjNEgsR0FBZDtBQUNBLFdBQU9BLEdBQVA7QUFDQTtBQUNELEMiLCJmaWxlIjoiY29tcG9uZW50c19mYWN1bHR5X2Jhc2ljLWluZm9fZWR1Y2F0aW9uX2pzLWNvbXBvbmVudHNfZmFjdWx0eV9iYXNpYy1pbmZvX3BlcnNvbmFsLWluZm9fanMtY29tLWUwNTQ3YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhZGRFZHVjYXRpb24gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZEVkdWNhdGlvbidcclxuXHJcbmNsYXNzIEVkdWNhdGlvbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IEVkdWNhdGlvbkRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgIGluc3RpdHV0aW9uU2Nob29sOiBcIlwiLFxyXG4gICAgICAgICAgICBkZWdyZWVUeXBlOiBcIlwiLFxyXG4gICAgICAgICAgICBkZWdyZWVDZXJ0OiBcIlwiLFxyXG4gICAgICAgICAgICBtYWpvclNwZWNpYWxpemF0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVuZERhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHByb29mOiBcIlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e0VkdWNhdGlvbkRldGFpbHN9XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywge3Jlc2V0Rm9ybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhbGVydFwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZHVjRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhZGRFZHVjYXRpb24oZm9ybURhdGEsIHRoaXMucHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZWR1Y2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2VkdWNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGlkID0gXCJlZHVjRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlNjaG9vbEVkdWNhdGlvbmFsSGlzdG9yeVtdXCI+IFNjaG9vbC9JbnN0aXR1dGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJpbnN0aXR1dGlvblNjaG9vbFwiIGlkID1cImluc3RpdHV0aW9uU2Nob29sXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHNjaG9vbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVncmVlRWR1Y2F0aW9uYWxIaXN0b3J5W11cIj4gRGVncmVlL0NlcnRpZmljYXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZGVncmVlQ2VydFwiIGlkID0gXCJkZWdyZWVDZXJ0XCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IGRlZ3JlZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJNYWpvckVkdWNhdGlvbmFsSGlzdG9yeVtdXCI+IE1ham9yL1NwZWNpYWxpemF0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm1ham9yU3BlY2lhbGl6YXRpb25cIiBpZCA9IFwibWFqb3JTcGVjaWFsaXphdGlvblwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBtYWpvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yIHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiRGVncmVlVHlwZVwiPiBEZWdyZWUgVHlwZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZGVncmVlVHlwZVwiIGlkID0gXCJkZWdyZWVUeXBlXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJBQVwiPkFBPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJBU1wiPkFTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJCQVwiPkJBPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJCU1wiPkJTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJNQVwiPk1BPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJNU1wiPk1TPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJNRFwiPk1EPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJQaERcIj5QaEQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU3RhcnREYXRlRWR1Y2F0aW9uYWxIaXN0b3J5W11cIj4gU3RhcnQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwic3RhcnREYXRlXCIgaWQgPSBcInN0YXJ0RGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkVuZERhdGVFZHVjYXRpb25hbEhpc3RvcnlbXVwiPiBFbmQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZW5kRGF0ZVwiIGlkID0gXCJlbmREYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUHJvb2ZFZHVjYXRpb25hbEhpc3RvcnlbXVwiPiBQcm9vZiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJwcm9vZlwiIGlkID0gXCJwcm9vZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvbkZvcm1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgRWR1Y2F0aW9uRm9ybSBmcm9tICcuL2VkdWNhdGlvbi1mb3JtJ1xyXG5pbXBvcnQgTmFtZURpc3BsYXkgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYW1lLWRpc3BsYXknXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuXHJcbmltcG9ydCBkb3dubG9hZFByb29mIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvZG93bmxvYWRQcm9vZidcclxuaW1wb3J0IGRlbGV0ZUVkdWNhdGlvbiBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Jhc2ljLWluZm8vZGVsZXRlRWR1Y2F0aW9uJ1xyXG5pbXBvcnQgdXBkYXRlRWR1Y2F0aW9uIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby91cGRhdGVFZHVjYXRpb24nXHJcbmltcG9ydCBhcHByb3ZlRWR1Y2F0aW9uIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hcHByb3ZlRWR1Y2F0aW9uJ1xyXG5cclxuZnVuY3Rpb24gRWR1Y2F0aW9uKHByb3BzKSB7IFxyXG4gICAgbGV0IGRlbGV0ZUVkdWMgPSAwXHJcbiAgICBsZXQgZWRpdEVkdWMgPSAwXHJcbiAgICBsZXQgYXBwcm92ZUVkdWMgPSAwXHJcblxyXG4gICAgY29uc3QgW2N1cnJEYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBlZHVjSW5mb0lkOiAwLFxyXG4gICAgICAgIGluc3RpdHV0aW9uU2Nob29sOiAnJyxcclxuICAgICAgICBkZWdyZWVUeXBlOicnLFxyXG4gICAgICAgIGRlZ3JlZUNlcnQ6ICcnLFxyXG4gICAgICAgIG1ham9yU3BlY2lhbGl6YXRpb246ICcnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogJycsXHJcbiAgICAgICAgZW5kRGF0ZTogJydcclxuICAgIH0pXHJcbiAgICBsZXQgY29udGVudCBcclxuICAgIGlmKHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuICAgICAgICBjb250ZW50ID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5ID0ge3Byb3BzLmNoaWxkcmVuLltrZXldLmVkdWNJbmZvSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uaW5zdGl0dXRpb25TY2hvb2x9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmRlZ3JlZVR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmRlZ3JlZUNlcnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLm1ham9yU3BlY2lhbGl6YXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnN0YXJ0RGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZW5kRGF0ZX17IXByb3BzLmNoaWxkcmVuW2tleV0uZW5kRGF0ZSAmJiA8ZGl2PlByZXNlbnQ8L2Rpdj59PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2YgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFByb29mKGZpbGUsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1wiaHR0cDovL2xvY2FsaG9zdDozMDAxL1wiICsgcHJvcHMuY2hpbGRyZW5ba2V5XS5wcm9vZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3sgY29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Tm9uZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5hcHByb3ZlclJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy52aWV3RmxhZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0RWR1Y2F0aW9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdChwcm9wcy5jaGlsZHJlbi5ba2V5XS5lZHVjSW5mb0lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5KGVkaXRFZHVjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNkZWxldGVFZHVjYXRpb25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGUocHJvcHMuY2hpbGRyZW4uW2tleV0uZWR1Y0luZm9JZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLnZpZXdGbGFnICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNhcHByb3ZlRWR1Y2F0aW9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLmVkdWNJbmZvSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFwcHJvdmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3JlamVjdEVkdWNhdGlvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFwcHJvdmUocHJvcHMuY2hpbGRyZW5ba2V5XS5lZHVjSW5mb0lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5SZWplY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnRlbnQgPSA8dGQgY29sc3BhbiA9IFwiOVwiPjxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBkYXRhIGF2YWlsYWJsZSE8L3A+PC90ZD5cclxuICAgIH1cclxuICAgIGxldCByZXNcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcbiAgICAgICAgZWRpdEVkdWMgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZShpZCkge1xyXG4gICAgICAgIGRlbGV0ZUVkdWMgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFwcHJvdmUoaWQpIHtcclxuICAgICAgICBhcHByb3ZlRWR1YyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0S2V5KHgpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuLltrZXldLmVkdWNJbmZvSWQgPT0geCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShwcm9wcy5jaGlsZHJlbi5ba2V5XSlcclxuICAgICAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuLltrZXldLmVuZERhdGUgPT0gXCJcIiB8fCBwcm9wcy5jaGlsZHJlbi5ba2V5XS5lbmREYXRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIGVuZERhdGU6ICcnfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIGxldCBtZXNzYWdlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBhbGlnbiA9IFwiY2VudGVyXCI+IEVkdWNhdGlvbmFsIEhpc3RvcnkgPC9oMj5cclxuICAgICAgICAgICAgPE5hbWVEaXNwbGF5IHVuaXQgPSB7cHJvcHMudW5pdH0gcG9zaXRpb249e3Byb3BzLnBvc2l0aW9ufSBlbXBsb3ltZW50VHlwZT17cHJvcHMuZW1wbG95bWVudFR5cGV9Pntwcm9wcy5uYW1lfTwvTmFtZURpc3BsYXk+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJlZHVjYWxlcnRcIiBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIn19PjwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JbnN0aXR1dGlvbi9TY2hvb2w8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlZ3JlZSBUeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EZWdyZWUvQ2VydGlmaWNhdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFqb3IvU3BlY2lhbGl6YXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXJ0IERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVuZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9vZjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BcHByb3ZlciBSZW1hcmtzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshcHJvcHMudmlld0ZsYWcgJiYgPHRoPkFjdGlvbjwvdGg+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgcHJvcHMuZmFjdWx0eUZsYWcgJiYgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFZHVjYXRpb25Gb3JtIHRva2VuID0geyBwcm9wcy50b2tlbiB9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImVkaXRFZHVjYXRpb25cIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImVkaXRFZHVjYXRpb25MYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImVkaXRFZHVjYXRpb25MYWJlbFwiPlVwZGF0ZSBFZHVjYXRpb24gSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2N1cnJEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZHVjYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEVkdWNGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlZHVjSW5mb0lkJywgY3VyckRhdGEuZWR1Y0luZm9JZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgdXBkYXRlRWR1Y2F0aW9uKGZvcm1EYXRhLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycsICcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpZCA9IFwiZWRpdEVkdWNGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJTY2hvb2xFZHVjYXRpb25IaXN0b3J5VXBkYXRlXCI+IFNjaG9vbC9JbnN0aXR1dGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImluc3RpdHV0aW9uU2Nob29sXCIgaWQgPVwiaW5zdGl0dXRpb25TY2hvb2xcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgc2Nob29sXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVncmVlRWR1Y2F0aW9uYWxIaXN0b3J5VXBkYXRlXCI+IERlZ3JlZSBUeXBlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZGVncmVlVHlwZVwiIGlkID0gXCJkZWdyZWVUeXBlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkFBXCI+QUE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJBU1wiPkFTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiQkFcIj5CQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkJTXCI+QlM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJNQVwiPk1BPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiTVNcIj5NUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1EXCI+TUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJQaERcIj5QaEQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlZ3JlZUVkdWNhdGlvbmFsSGlzdG9yeVVwZGF0ZVwiPiBEZWdyZWUvQ2VydGlmaWNhdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImRlZ3JlZUNlcnRcIiBpZCA9IFwiZGVncmVlQ2VydFwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBkZWdyZWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJNYWpvckVkdWNhdGlvbmFsSGlzdG9yeVVwZGF0ZVwiPiBNYWpvci9TcGVjaWFsaXphdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm1ham9yU3BlY2lhbGl6YXRpb25cIiBpZCA9IFwibWFqb3JTcGVjaWFsaXphdGlvblwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBtYWpvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlN0YXJ0RGF0ZUVkdWNhdGlvbmFsSGlzdG9yeVVwZGF0ZVwiPiBTdGFydCBEYXRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJkYXRlXCIgbmFtZSA9IFwic3RhcnREYXRlXCIgaWQgPSBcInN0YXJ0RGF0ZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkVuZERhdGVFZHVjYXRpb25hbEhpc3RvcnlVcGRhdGVcIj4gRW5kIERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImRhdGVcIiBuYW1lID0gXCJlbmREYXRlXCIgaWQgPSBcImVuZERhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJTdGFydERhdGVFZHVjYXRpb25hbEhpc3RvcnlVcGRhdGVcIj4gQWRkL0VkaXQgUHJvb2YgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJmaWxlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wtZmlsZVwiIG5hbWUgPSBcInByb29mXCIgaWQgPSBcInByb29mXCIgdmFsdWU9e3VuZGVmaW5lZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfSBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXRFZHVjYXRpb24nKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZGVsZXRlRWR1Y2F0aW9uXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJkZWxldGVFZHVjYXRpb25MYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImRlbGV0ZUVkdWNhdGlvbkxhYmVsXCI+RGVsZXRlIEVkdWNhdGlvbiBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGVkdWNhdGlvbiBpbmZvcm1hdGlvbj8gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5ObywgZG9uJ3QgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2RlbGV0ZUVkdWNhdGlvbicpLm1vZGFsKCd0b2dnbGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZGVsZXRlRWR1Y2F0aW9uKGRlbGV0ZUVkdWMsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIHZhbHVlcy5tZXNzYWdlID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZhbHVlcy5tZXNzYWdlID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYmFzaWMtaW5mbycsICcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+WWVzLCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJhcHByb3ZlRWR1Y2F0aW9uXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJhcHByb3ZlRWR1Y2F0aW9uTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJhcHByb3ZlRWR1Y2F0aW9uTGFiZWxcIj5BcHByb3ZlIEVkdWNhdGlvbiBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGFwcHJvdmUgdGhpcyBlZHVjYXRpb24gaW5mb3JtYXRpb24/IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Tm8sIGRvbid0IGFwcHJvdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWR1Y2FsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYXBwcm92ZUVkdWNhdGlvbicpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZWR1Y0luZm9JZCcsIGFwcHJvdmVFZHVjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBwcm92ZUVkdWNhdGlvbihmb3JtRGF0YSwgdHJ1ZSwgcHJvcHMuZmFjdWx0eUlkLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZWR1Y2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZWR1Y2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQsICcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5ZZXMsIGFwcHJvdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwicmVqZWN0RWR1Y2F0aW9uXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJyZWplY3RFZHVjYXRpb25MYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cInJlamVjdEVkdWNhdGlvbkxhYmVsXCI+UmVqZWN0IEVkdWNhdGlvbiBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Y3VyckRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlamVjdEVkdWNhdGlvbicpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVqZWN0RWR1Y0Zvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VkdWNJbmZvSWQnLCBhcHByb3ZlRWR1YylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwcHJvdmVFZHVjYXRpb24oZm9ybURhdGEsIGZhbHNlLCBwcm9wcy5mYWN1bHR5SWQsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNlZHVjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZCwgJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gaWQgPSBcInJlamVjdEVkdWNGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJSZWplY3Rpb25SZW1hcmtzXCI+IFJlYXNvbi9SZW1hcmtzIGZvciBSZWplY3Rpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJhcHByb3ZlclJlbWFya3NcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcmVtYXJrc1wiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30gb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWplY3RFZHVjYXRpb24nKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvblxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmZ1bmN0aW9uIEVtcGxveW1lbnRIaXN0b3J5KHByb3BzKXtcclxuXHRsZXQgY29udGVudCA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvcykubWFwKGtleSA9PiB7XHJcblx0XHRpZihwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3Nba2V5XS5mYWN1bHR5X2VtcGxveW1lbnRfcG9zaXRpb24uZW1wbG95bWVudFR5cGUgPT0gJ2Z0dCcpIHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8dHIga2V5ID0ge3Byb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVtcGxveW1lbnRJbmZvSWR9PlxyXG5cdFx0XHRcdFx0PHRkPntwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3Nba2V5XS5mYWN1bHR5X2VtcGxveW1lbnRfcG9zaXRpb24ucG9zaXRpb259PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD5GdWxsLXRpbWUgKFRlbXBvcmFyeSk8L3RkPlxyXG5cdFx0XHRcdFx0PHRkPntwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3Nba2V5XS5zdGFydERhdGV9PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD57cHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uZW5kRGF0ZX08L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2UgaWYocHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uZmFjdWx0eV9lbXBsb3ltZW50X3Bvc2l0aW9uLmVtcGxveW1lbnRUeXBlID09ICdmdHAnKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHRyIGtleSA9IHtwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3Nba2V5XS5lbXBsb3ltZW50SW5mb0lkfT5cclxuXHRcdFx0XHRcdDx0ZD57cHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uZmFjdWx0eV9lbXBsb3ltZW50X3Bvc2l0aW9uLnBvc2l0aW9ufTwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+RnVsbC10aW1lIChQZXJtYW5lbnQpPC90ZD5cclxuXHRcdFx0XHRcdDx0ZD57cHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uc3RhcnREYXRlfTwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+e3Byb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVuZERhdGV9PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSBlbHNlIGlmKHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmZhY3VsdHlfZW1wbG95bWVudF9wb3NpdGlvbi5lbXBsb3ltZW50VHlwZSA9PSAncHQnKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHRyIGtleSA9IHtwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2VtcGxveW1lbnRfaW5mb3Nba2V5XS5lbXBsb3ltZW50SW5mb0lkfT5cclxuXHRcdFx0XHRcdDx0ZD57cHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uZmFjdWx0eV9lbXBsb3ltZW50X3Bvc2l0aW9uLnBvc2l0aW9ufTwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+UGFydC10aW1lPC90ZD5cclxuXHRcdFx0XHRcdDx0ZD57cHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9lbXBsb3ltZW50X2luZm9zW2tleV0uc3RhcnREYXRlfTwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+e3Byb3BzLmNoaWxkcmVuLmZhY3VsdHlfZW1wbG95bWVudF9pbmZvc1trZXldLmVuZERhdGV9PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLXNtXCI+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UG9zaXRpb248L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+VHlwZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5TdGFydCBEYXRlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkVuZCBEYXRlPC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHR7Y29udGVudH1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95bWVudEhpc3RvcnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbi8vIGltcG9ydCBhZGREZXBlbmRlbnQgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZERlcGVuZGVudCdcclxuXHJcbmNsYXNzIFBlcnNvbmFsSW5mb0RlcGVuZGVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkdXBsaWNhdGVGb3JtczogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmR1cGxpY2F0ZUZvcm1zLnB1c2goPGRpdj48aHIgLz48ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlcGVuZGVudE5hbWVbXVwiPiBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIkRlcGVuZGVudE5hbWVbXVwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBuYW1lIG9mIGRlcGVuZGVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlcGVuZGVudERhdGVPZkJpcnRoW11cIj4gRGF0ZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJEZXBlbmRlbnREYXRlT2ZCaXJ0aFtdXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkRlcGVuZGVudFJlbGF0aW9uc2hpcFtdXCI+IFJlbGF0aW9uc2hpcCB0byBVc2VyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIkRlcGVuZGVudFJlbGF0aW9uc2hpcFtdXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBocntcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW1vdmUoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmR1cGxpY2F0ZUZvcm1zLnBvcCgpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgRGVwZW5kZW50RGV0YWlscyA9IHtcclxuICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgYmlydGhEYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICByZWxhdGlvbnNoaXA6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJidXR0b25cIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiIGlkID0gXCJBZGREZXBlbmRlbnRcIiBvbkNsaWNrID0geygpID0+IHRoaXMuY2xvbmUoKX0+IEFkZCBEZXBlbmRlbnQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLWRhbmdlclwiIGlkID0gXCJSZW1vdmVEZXBlbmRlbnRcIiBvbkNsaWNrID0geygpID0+IHRoaXMucmVtb3ZlKCl9PiBSZW1vdmUgYSBSb3cgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkRlcGVuZGVudE5hbWVbXVwiPiBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJuYW1lXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG5hbWUgb2YgZGVwZW5kZW50XCIgaWQgPSBcIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJEZXBlbmRlbnREYXRlT2ZCaXJ0aFtdXCI+IERhdGUgb2YgQmlydGggPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImJpcnRoRGF0ZVwiIGlkID0gXCJiaXJ0aERhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRGVwZW5kZW50UmVsYXRpb25zaGlwW11cIj4gUmVsYXRpb25zaGlwIHRvIFVzZXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJlbGF0aW9uc2hpcFwiIGlkID0gXCJyZWxhdGlvbnNoaXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkID0gXCJEZXBlbmRlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZHVwbGljYXRlRm9ybXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHR5cGUgPSBcInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIC8vICAgICAvLyApfVxyXG4gICAgICAgICAgICAvLyA8L0Zvcm1paz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbmFsSW5mb0RlcGVuZGVudHMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFBlcnNvbmFsSW5mb0RlcGVuZGVudHMgZnJvbSAnLi9wZXJzb25hbC1pbmZvLWRlcGVuZGVudHMnXHJcbmltcG9ydCBOYW1lRGlzcGxheSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hbWUtZGlzcGxheSdcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnNcIlxyXG5cclxuaW1wb3J0IHVwZGF0ZUZhY3VsdHkgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL3VwZGF0ZUZhY3VsdHknXHJcbmltcG9ydCBhZGRGYWN1bHR5IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FkbWluL2FkZEZhY3VsdHknXHJcblxyXG5mdW5jdGlvbiBQZXJzb25hbEluZm8ocHJvcHMpIHtcclxuICAgIGxldCBGYWN1bHR5RGV0YWlsc1xyXG4gICAgbGV0IG5hbWVcclxuICAgIGxldCBkZXBlbmRlbnRzXHJcbiAgICBsZXQgcmVzXHJcbiAgICBsZXQgcG9zaXRpb25zID0gW11cclxuICAgIGlmKHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuICAgICAgICBGYWN1bHR5RGV0YWlscyA9IHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBwcm9wcy5jaGlsZHJlbi5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBwcm9wcy5jaGlsZHJlbi5sYXN0TmFtZSxcclxuICAgICAgICAgICAgbWlkZGxlTmFtZTogcHJvcHMuY2hpbGRyZW4ubWlkZGxlTmFtZSxcclxuICAgICAgICAgICAgZ2VuZGVyOiBwcm9wcy5jaGlsZHJlbi5nZW5kZXIsXHJcbiAgICAgICAgICAgIGRhdGVPZkJpcnRoOiBwcm9wcy5jaGlsZHJlbi5kYXRlT2ZCaXJ0aCxcclxuICAgICAgICAgICAgcGxhY2VPZkJpcnRoOiBwcm9wcy5jaGlsZHJlbi5wbGFjZU9mQmlydGgsXHJcbiAgICAgICAgICAgIHBlcm1hbmVudEFkZHJlc3M6IHByb3BzLmNoaWxkcmVuLnBlcm1hbmVudEFkZHJlc3MsXHJcbiAgICAgICAgICAgIHByZXNlbnRBZGRyZXNzOiBwcm9wcy5jaGlsZHJlbi5wcmVzZW50QWRkcmVzcyxcclxuICAgICAgICAgICAgbW9iaWxlOiBwcm9wcy5jaGlsZHJlbi5tb2JpbGUsXHJcbiAgICAgICAgICAgIGxhbmRsaW5lOiBwcm9wcy5jaGlsZHJlbi5sYW5kbGluZSxcclxuICAgICAgICAgICAgZW1haWw6IHByb3BzLmNoaWxkcmVuLmVtYWlsLFxyXG4gICAgICAgICAgICBjaXZpbFN0YXR1czogcHJvcHMuY2hpbGRyZW4uY2l2aWxTdGF0dXMsXHJcbiAgICAgICAgICAgIHJlbGlnaW9uOiBwcm9wcy5jaGlsZHJlbi5yZWxpZ2lvbixcclxuICAgICAgICAgICAgZW1lcmdlbmN5Q29udGFjdFBlcnNvbjogcHJvcHMuY2hpbGRyZW4uZW1lcmdlbmN5Q29udGFjdFBlcnNvbixcclxuICAgICAgICAgICAgZW1lcmdlbmN5Q29udGFjdE51bWJlcjogcHJvcHMuY2hpbGRyZW4uZW1lcmdlbmN5Q29udGFjdE51bWJlcixcclxuICAgICAgICAgICAgc3VmZml4OiBwcm9wcy5jaGlsZHJlbi5zdWZmaXgsXHJcbiAgICAgICAgICAgIGZhY3VsdHlfZGVwZW5kZW50czogcHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9kZXBlbmRlbnRzLFxyXG4gICAgICAgICAgICBwaGlsb3NvcGh5OiBwcm9wcy5jaGlsZHJlbi50ZWFjaGluZ1BoaWxvc29waHlcclxuICAgICAgICB9XHJcbiAgICAgICAgbmFtZSA9IHByb3BzLmNoaWxkcmVuLmxhc3ROYW1lICsgJywgJyArIHByb3BzLmNoaWxkcmVuLmZpcnN0TmFtZVxyXG4gICAgICAgIGRlcGVuZGVudHMgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2RlcGVuZGVudHMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEZXBlbmRlbnRcIj4gTmFtZSBvZiBEZXBlbmRlbnQgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm5hbWVcIiBkZWZhdWx0VmFsdWUgPSB7IHByb3BzLmNoaWxkcmVuLmZhY3VsdHlfZGVwZW5kZW50c1trZXldLm5hbWUgfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkRlcGVuZGVudERhdGVPZkJpcnRoXCI+IERhdGUgb2YgQmlydGggPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcImJpcnRoRGF0ZVwiIGRlZmF1bHRWYWx1ZSA9IHsgcHJvcHMuY2hpbGRyZW4uZmFjdWx0eV9kZXBlbmRlbnRzW2tleV0uYmlydGhEYXRlIH0gZGlzYWJsZWQ9eyFwcm9wcy5mYWN1bHR5RmxhZyAmJiAhcHJvcHMuY2xlcmtGbGFnfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJEZXBlbmRlbnRSZWxhdGlvbnNoaXBbXVwiPiBSZWxhdGlvbnNoaXAgdG8gVXNlciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmVsYXRpb25zaGlwXCIgZGVmYXVsdFZhbHVlID0geyBwcm9wcy5jaGlsZHJlbi5mYWN1bHR5X2RlcGVuZGVudHNba2V5XS5yZWxhdGlvbnNoaXAgfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgRmFjdWx0eURldGFpbHMgPSB7XHJcbiAgICAgICAgICAgIGNsZXJrOiAnJyxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBtaWRkbGVOYW1lOiAnJyxcclxuICAgICAgICAgICAgZ2VuZGVyOiAnTWFsZScsXHJcbiAgICAgICAgICAgIGRhdGVPZkJpcnRoOiAnJyxcclxuICAgICAgICAgICAgcGxhY2VPZkJpcnRoOiAnJyxcclxuICAgICAgICAgICAgcGVybWFuZW50QWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIHByZXNlbnRBZGRyZXNzOiAnJyxcclxuICAgICAgICAgICAgbW9iaWxlOiAnJyxcclxuICAgICAgICAgICAgbGFuZGxpbmU6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIGNpdmlsU3RhdHVzOiAnc2luZ2xlJyxcclxuICAgICAgICAgICAgcmVsaWdpb246ICcnLFxyXG4gICAgICAgICAgICBlbWVyZ2VuY3lDb250YWN0UGVyc29uOiAnJyxcclxuICAgICAgICAgICAgZW1lcmdlbmN5Q29udGFjdE51bWJlcjogJycsXHJcbiAgICAgICAgICAgIHN1ZmZpeDogJycsXHJcbiAgICAgICAgICAgIGZhY3VsdHlfZGVwZW5kZW50czogJycsXHJcbiAgICAgICAgICAgIHVwZW1haWw6ICcnLFxyXG4gICAgICAgICAgICB1bml0OiAnMScsXHJcbiAgICAgICAgICAgIGVtcGxveW1lbnRQb3NpdGlvbjogJzEnLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6ICcnLFxyXG4gICAgICAgICAgICBwaGlsb3NvcGh5OiAnJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvcHMucG9zaXRpb25zLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0ge2tleS5lbXBsb3ltZW50UG9zaXRpb25JZH0+e2tleS5wb3NpdGlvbn08L29wdGlvbj4gICAgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGFsaWduID0gXCJjZW50ZXJcIj4gUGVyc29uYWwgSW5mb3JtYXRpb24gPC9oMj5cclxuICAgICAgICA8TmFtZURpc3BsYXkgdW5pdCA9IHtwcm9wcy51bml0fSBwb3NpdGlvbj17cHJvcHMucG9zaXRpb259IGVtcGxveW1lbnRUeXBlPXtwcm9wcy5lbXBsb3ltZW50VHlwZX0+e25hbWV9PC9OYW1lRGlzcGxheT5cclxuXHRcdDxGb3JtaWtcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17RmFjdWx0eURldGFpbHN9XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB0b2tlbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLmNsZXJrRmxhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IGF3YWl0IGFkZEZhY3VsdHkodmFsdWVzLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgdXBkYXRlRmFjdWx0eSh2YWx1ZXMsIHByb3BzLnRva2VuKSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5tZXNzYWdlID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgdmFsdWVzLm1lc3NhZ2UgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgdmFsdWVzLm1lc3NhZ2UgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuY2xlcmtGbGFnKSB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL2ZhY3VsdHknKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWRtaW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCIgaWQ9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWVzLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmZhY3VsdHlGbGFnICYmIDxoNj5SZXF1aXJlZDwvaDY+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkZpcnN0TmFtZVwiPiBGaXJzdCBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZmlyc3ROYW1lXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5maXJzdE5hbWUgfSBkaXNhYmxlZD17IXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiTWlkZGxlTmFtZVwiPiBNaWRkbGUgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm1pZGRsZU5hbWVcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLm1pZGRsZU5hbWUgfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkxhc3ROYW1lXCI+IExhc3QgTmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImxhc3ROYW1lXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5sYXN0TmFtZSB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiU3VmZml4XCI+IFN1ZmZpeCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInN1ZmZpeFwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuc3VmZml4IH0gZGlzYWJsZWQ9eyFwcm9wcy5mYWN1bHR5RmxhZyAmJiAhcHJvcHMuY2xlcmtGbGFnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJTZXhcIj4gU2V4IChhdCBiaXJ0aCkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJnZW5kZXJcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmdlbmRlciB9IGRpc2FibGVkPXshcHJvcHMuY2xlcmtGbGFnfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJNYWxlXCI+TWFsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkZlbWFsZVwiPkZlbWFsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRGF0ZU9mQmlydGhcIj4gRGF0ZSBvZiBCaXJ0aCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcImRhdGVPZkJpcnRoXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5kYXRlT2ZCaXJ0aCB9IGRpc2FibGVkPXshcHJvcHMuY2xlcmtGbGFnfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTQgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJQbGFjZU9mQmlydGhcIj4gUGxhY2Ugb2YgQmlydGggPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJwbGFjZU9mQmlydGhcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnBsYWNlT2ZCaXJ0aCB9IGRpc2FibGVkPXshcHJvcHMuY2xlcmtGbGFnfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiUHJlc2VudEFkZHJlc3NcIj4gUHJlc2VudCBBZGRyZXNzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJwcmVzZW50QWRkcmVzc1wiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMucHJlc2VudEFkZHJlc3MgfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIlBlcm1hbmVudEFkZHJlc3NcIj4gUGVybWFuZW50IEFkZHJlc3MgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInBlcm1hbmVudEFkZHJlc3NcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnBlcm1hbmVudEFkZHJlc3MgfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9XCJDaXZpbFN0YXR1c1wiPiBDaXZpbCBTdGF0dXMgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJjaXZpbFN0YXR1c1wiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuY2l2aWxTdGF0dXMgfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcInNpbmdsZVwiPlNpbmdsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIm1hcnJpZWRcIj5NYXJyaWVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwic2VwYXJhdGVkXCI+U2VwYXJhdGVkIChMZWdhbGx5KTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcImRpdm9yY2VkXCI+RGl2b3JjZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJ3aWRvd2VkXCI+V2lkb3dlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlbGlnaW9uXCI+IFJlbGlnaW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJlbGlnaW9uXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5yZWxpZ2lvbiB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiQ29udGFjdE51bWJlclwiPiBDb250YWN0IE51bWJlciAoTGFuZGxpbmUpIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZWxcIiBuYW1lID0gXCJsYW5kbGluZVwiIHBhdHRlcm4gPSBcIlswLTldezh9XCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5sYW5kbGluZSB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiQ29udGFjdE51bWJlclwiPiBDb250YWN0IE51bWJlciAoTW9iaWxlKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGVsXCIgbmFtZSA9IFwibW9iaWxlXCIgcGF0dGVybiA9IFwiWzBdezF9WzldezF9WzAtOV17OX1cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLm1vYmlsZSB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1haWxBZGRyZXNzQWx0XCI+IFBlcnNvbmFsIEUtbWFpbCBBZGRyZXNzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJlbWFpbFwiIG5hbWUgPSBcImVtYWlsXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5lbWFpbCB9IGRpc2FibGVkPXshcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLmNsZXJrRmxhZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02IHJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiRW1lcmdlbmN5Q29udGFjdFwiPiBFbWVyZ2VuY3kgQ29udGFjdCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImVtZXJnZW5jeUNvbnRhY3RQZXJzb25cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmVtZXJnZW5jeUNvbnRhY3RQZXJzb24gfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNiByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkVtZXJnZW5jeUNvbnRhY3ROdW1iZXJcIj4gRW1lcmdlbmN5IENvbnRhY3QgTnVtYmVyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZWxcIiBuYW1lID0gXCJlbWVyZ2VuY3lDb250YWN0TnVtYmVyXCIgcGF0dGVybiA9IFwiWzBdezF9WzldezF9WzAtOV17OX1cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmVtZXJnZW5jeUNvbnRhY3ROdW1iZXIgfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMTIgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSBcImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yID0gXCJwaGlsb3NvcGh5XCI+IFRlYWNoaW5nIFBoaWxvc29waHkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIGNvbXBvbmVudCA9IFwidGV4dGFyZWFcIiByb3dzID0gezV9IG5hbWUgPSBcInBoaWxvc29waHlcIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLnBoaWxvc29waHkgfSBkaXNhYmxlZD17IXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy5jbGVya0ZsYWd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxoNSBhbGlnbiA9IFwiY2VudGVyXCI+IERlcGVuZGVudHMgPC9oNT4qL31cclxuICAgICAgICAgICAgICAgICAgICB7Lyp7ZGVwZW5kZW50c30qL31cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNsZXJrRmxhZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5FbXBsb3ltZW50IEluZm88L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkVtYWlsQWRkcmVzc0FsdFwiPiBVUCBFLW1haWwgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZW1haWxcIiBuYW1lID0gXCJ1cGVtYWlsXCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy5lbWFpbCB9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPVwiVW5pdFwiPiBVbml0IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJ1bml0XCIgZGVmYXVsdFZhbHVlID0geyBGYWN1bHR5RGV0YWlscy51bml0IH0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCIxXCI+Q2hlbWlzdHJ5IFVuaXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIjJcIj5NYXRoZW1hdGljYWwgYW5kIENvbXB1dGluZyBTY2llbmNlcyBVbml0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCIzXCI+UGh5c2ljcyBhbmQgR2VvbG9neSBVbml0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTMgcmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IFwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3IgPSBcIkVtcGxveW1lbnRQb3NpdGlvblwiPiBFbXBsb3ltZW50IFBvc2l0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJlbXBsb3ltZW50UG9zaXRpb25cIiBkZWZhdWx0VmFsdWUgPSB7IEZhY3VsdHlEZXRhaWxzLmVtcGxveW1lbnRQb3NpdGlvbiB9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc2l0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMyByZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjb250cm9sLWxhYmVsXCIgaHRtbEZvciA9IFwiU3RhcnREYXRlXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwiZGF0ZVwiIG5hbWUgPSBcInN0YXJ0RGF0ZVwiIGRlZmF1bHRWYWx1ZSA9IHsgRmFjdWx0eURldGFpbHMuU3RhcnREYXRlIH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZmFjdWx0eUZsYWcgJiYgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30+IFVwZGF0ZSA8L2J1dHRvbj4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2xlcmtGbGFnICYmIDxidXR0b24gdHlwZSA9IFwic3VibWl0XCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9PiBBZGQgRmFjdWx0eSA8L2J1dHRvbj4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKnsgcHJvcHMuZmFjdWx0eUZsYWcgJiYgPFBlcnNvbmFsSW5mb0RlcGVuZGVudHMgLz4gfSovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAucmVxdWlyZWQgLmNvbnRyb2wtbGFiZWw6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIipcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg2OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiKiBcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNhbGVydCB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+ICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxJbmZvXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhZGRXb3JrRXhwIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9hZGRXb3JrRXhwJ1xyXG5cclxuY2xhc3MgV29ya0V4cEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBXb3JrRGV0YWlscyA9IHtcclxuXHRcdFx0ZW1wbG95ZXJOYW1lOiBcIlwiLFxyXG5cdFx0XHRwb3NpdGlvbjogXCJcIixcclxuXHRcdFx0c3RhcnREYXRlOiBcIlwiLFxyXG5cdFx0XHRlbmREYXRlOiBcIlwiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogXCJcIlxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8Rm9ybWlrXHJcblx0XHRcdFx0aW5pdGlhbFZhbHVlcz17V29ya0RldGFpbHN9XHJcblx0XHRcdFx0b25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHtyZXNldEZvcm19KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtleHBhbGVydFwiKVxyXG5cdFx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IGFkZFdvcmtFeHAodmFsdWVzLCB0aGlzLnByb3BzLnRva2VuKVxyXG5cdFx0XHRcdFx0aWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuXHRcdFx0XHRcdFx0YWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG5cdFx0XHRcdFx0XHRhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcblx0XHRcdFx0XHRcdGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcblx0XHRcdFx0XHRcdGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0ZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JChcIiN3b3JrZXhwYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdCQoXCIjd29ya2V4cGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRyZXNldEZvcm0oKVxyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nLCAnL2ZhY3VsdHkvYmFzaWMtaW5mbycpXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdFx0XHRcdDxGb3JtPlxyXG5cdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiRW1wbG95ZXJXb3JrRXhwZXJpZW5jZVtdXCI+IEVtcGxveWVyIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZW1wbG95ZXJOYW1lXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG5hbWUgb2YgZW1wbG95ZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUG9zaXRpb25Xb3JrRXhwZXJpZW5jZVtdXCI+IFRpdGxlL1Bvc2l0aW9uIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicG9zaXRpb25cIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcG9zaXRpb25cIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiRGVzY3JpcHRpb25Xb3JrRXhwZXJpZW5jZVtdXCI+IERlc2NyaXB0aW9uIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlciA9IFwiQWRkIERlc2NyaXB0aW9uXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiU3RhcnREYXRlV29ya0V4cGVyaWVuY2VbXVwiPiBTdGFydCBEYXRlIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwic3RhcnREYXRlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIkVuZERhdGVXb3JrRXhwZXJpZW5jZVtdXCI+IEVuZCBEYXRlIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZW5kRGF0ZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHR5cGUgPSBcInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L0Zvcm1paz5cclxuXHRcdClcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrRXhwRm9ybTtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgV29ya0V4cEZvcm0gZnJvbSAnLi93b3JrLWV4cC1mb3JtJ1xyXG5pbXBvcnQgRW1wbG95bWVudEhpc3RvcnkgZnJvbSAnLi9lbXBsb3ltZW50LWhpc3RvcnknXHJcbmltcG9ydCBOYW1lRGlzcGxheSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hbWUtZGlzcGxheSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHVwZGF0ZVdvcmtFeHAgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9iYXNpYy1pbmZvL3VwZGF0ZVdvcmtFeHAnXHJcbmltcG9ydCBkZWxldGVXb3JrRXhwIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYmFzaWMtaW5mby9kZWxldGVXb3JrRXhwJ1xyXG5cclxuZnVuY3Rpb24gV29ya0V4cGVyaWVuY2UocHJvcHMpe1xyXG4gICAgY29uc3QgbmFtZSA9IHByb3BzLm5hbWVcclxuICAgIGxldCBkZWxldGVXb3JrID0gMFxyXG4gICAgbGV0IGVkaXRXb3JrID0gMFxyXG4gICAgY29uc3QgW2N1cnJEYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICB3b3JrRXhwSWQ6IDAsXHJcbiAgICAgICAgZW1wbG95ZXJOYW1lOiAnJyxcclxuICAgICAgICBwb3NpdGlvbjonJyxcclxuICAgICAgICBzdGFydERhdGU6ICcnLFxyXG4gICAgICAgIGVuZERhdGU6ICcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgfSlcclxuICAgIGxldCBjb250ZW50IFxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuW2tleV0ud29ya0V4cElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleSA9IHtwcm9wcy5jaGlsZHJlbi5ba2V5XS53b3JrRXhwSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZW1wbG95ZXJOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5wb3NpdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uc3RhcnREYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5lbmREYXRlfXshcHJvcHMuY2hpbGRyZW5ba2V5XS5lbmREYXRlICYmIDxkaXY+UHJlc2VudDwvZGl2Pn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLnZpZXdGbGFnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRXb3JrRXhwZXJpZW5jZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQocHJvcHMuY2hpbGRyZW4uW2tleV0ud29ya0V4cElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5KGVkaXRXb3JrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNkZWxldGVXb3JrRXhwZXJpZW5jZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlbGV0ZShwcm9wcy5jaGlsZHJlbi5ba2V5XS53b3JrRXhwSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnRlbnQgPSA8dGQgY29sc3BhbiA9IFwiNlwiPjxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBkYXRhIGF2YWlsYWJsZSE8L3A+PC90ZD5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcbiAgICAgICAgZWRpdFdvcmsgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZShpZCkge1xyXG4gICAgICAgIGRlbGV0ZVdvcmsgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEtleSh4KSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICBpZihwcm9wcy5jaGlsZHJlbi5ba2V5XS53b3JrRXhwSWQgPT0geCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShwcm9wcy5jaGlsZHJlbi5ba2V5XSlcclxuICAgICAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuLltrZXldLmVuZERhdGUgPT0gXCJcIiB8fCBwcm9wcy5jaGlsZHJlbi5ba2V5XS5lbmREYXRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIGVuZERhdGU6ICcnfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShpZCwgZXZlbnQpIHtcclxuICAgICAgICBzZXREYXRhKHsuLi5jdXJyRGF0YSwgW2lkXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBhbGlnbiA9IFwiY2VudGVyXCI+IFdvcmsgRXhwZXJpZW5jZSA8L2gyPlxyXG4gICAgICAgICAgICA8TmFtZURpc3BsYXkgdW5pdCA9IHtwcm9wcy51bml0fSBwb3NpdGlvbj17cHJvcHMucG9zaXRpb259IGVtcGxveW1lbnRUeXBlPXtwcm9wcy5lbXBsb3ltZW50VHlwZX0+e25hbWV9PC9OYW1lRGlzcGxheT5cclxuICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIiBpZD1cIndvcmtleHBhbGVydFwiIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxoNSBhbGlnbiA9IFwiY2VudGVyXCI+IFdpdGhpbiBVUCBNYW5pbGEgPC9oNT5cclxuICAgICAgICAgICAgPEVtcGxveW1lbnRIaXN0b3J5Pntwcm9wcy5lbXBsb3ltZW50fTwvRW1wbG95bWVudEhpc3Rvcnk+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8aDUgYWxpZ24gPSBcImNlbnRlclwiPiBPdXRzaWRlIFVQIE1hbmlsYSA8L2g1PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLXNtXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXkgPSBcImhlYWRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+RW1wbG95ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Qb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXJ0IERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5FbmQgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICB7IXByb3BzLnZpZXdGbGFnICYmIDx0aD5BY3Rpb248L3RoPn1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLnZpZXdGbGFnICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXb3JrRXhwRm9ybSB0b2tlbiA9IHsgcHJvcHMudG9rZW4gfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJlZGl0V29ya0V4cGVyaWVuY2VcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImVkaXRXb3JrRXhwZXJpZW5jZUxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZWRpdFdvcmtFeHBlcmllbmNlTGFiZWxcIj5VcGRhdGUgV29yayBFeHBlcmllbmNlIEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRW1wbG95ZXJXb3JrRXhwZXJpZW5jZVVwZGF0ZVwiPiBFbXBsb3llciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJFbXBsb3llcldvcmtFeHBlcmllbmNlVXBkYXRlXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IG5hbWUgb2YgZW1wbG95ZXJcIiBkZWZhdWx0VmFsdWUgPSB7IGN1cnJEYXRhLmVtcGxveWVyTmFtZSB9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcImVtcGxveWVyTmFtZVwiLCBlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQb3NpdGlvbldvcmtFeHBlcmllbmNlVXBkYXRlXCI+IFRpdGxlL1Bvc2l0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIlBvc2l0aW9uV29ya0V4cGVyaWVuY2VVcGRhdGVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcG9zaXRpb25cIiBkZWZhdWx0VmFsdWUgPSB7IGN1cnJEYXRhLnBvc2l0aW9uIH0gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwicG9zaXRpb25cIiwgZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlN0YXJ0RGF0ZVdvcmtFeHBlcmllbmNlVXBkYXRlXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiU3RhcnREYXRlV29ya0V4cGVyaWVuY2VVcGRhdGVcIiBkZWZhdWx0VmFsdWUgPSB7IGN1cnJEYXRhLnN0YXJ0RGF0ZSB9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcInN0YXJ0RGF0ZVwiLCBlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkVuZERhdGVXb3JrRXhwZXJpZW5jZVVwZGF0ZVwiPiBFbmQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJFbmREYXRlV29ya0V4cGVyaWVuY2VVcGRhdGVcIiBkZWZhdWx0VmFsdWUgPSB7IGN1cnJEYXRhLmVuZERhdGUgfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJlbmREYXRlXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiRGVzY3JpcHRpb25Xb3JrRXhwZXJpZW5jZVVwZGF0ZVwiPiBEZXNjcmlwdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJEZXNjcmlwdGlvbldvcmtFeHBlcmllbmNlVXBkYXRlXCIgcGxhY2Vob2xkZXIgPSBcIkFkZCBEZXNjcmlwdGlvblwiIGRlZmF1bHRWYWx1ZSA9IHsgY3VyckRhdGEuZGVzY3JpcHRpb24gfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJkZXNjcmlwdGlvblwiLCBlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdFdvcmtFeHBlcmllbmNlJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrZXhwYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB1cGRhdGVXb3JrRXhwKGN1cnJEYXRhLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjd29ya2V4cGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjd29ya2V4cGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZGVsZXRlV29ya0V4cGVyaWVuY2VcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImRlbGV0ZVdvcmtFeHBlcmllbmNlTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJkZWxldGVXb3JrRXhwZXJpZW5jZUxhYmVsXCI+RGVsZXRlIFdvcmsgRXhwZXJpZW5jZSBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHdvcmsgZXhwZXJpZW5jZSBpbmZvcm1hdGlvbj8gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5ObywgZG9uJ3QgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZGVsZXRlV29ya0V4cGVyaWVuY2UnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtleHBhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGRlbGV0ZVdvcmtFeHAoZGVsZXRlV29yaywgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3dvcmtleHBhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3dvcmtleHBhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5ZZXMsIGRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrRXhwZXJpZW5jZVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRGYWN1bHR5KGRhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG5cdFxyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1x0ICAgICAgXHJcblx0ICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdXNlci9hZGQnO1xyXG5cdFx0ICAgIGxldCBoZWFkZXIgPSB7XHJcblx0XHQgICAgICAgIGhlYWRlcnM6IHtcclxuXHRcdCAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH1cclxuXHQgICAgICAgIHRyeSB7XHJcblx0ICAgICAgICBcdGxldCBib2R5ID0ge1xyXG5cdFx0XHRcdFx0XCJyb2xlXCI6IFwiMVwiLFxyXG5cdFx0XHRcdFx0XCJ1cGVtYWlsXCI6IGAke2RhdGEudXBlbWFpbH1gLFxyXG5cdFx0XHRcdFx0XCJwYXNzd29yZFwiOiBcInBhc3N3b3JkXCIsXHJcblx0XHRcdFx0XHRcInBlcnNvbmFsSW5mb1wiOiB7XHJcblx0XHRcdFx0XHRcdGZpcnN0TmFtZTogYCR7ZGF0YS5maXJzdE5hbWV9YCwgXHJcblx0XHRcdFx0XHRcdGxhc3ROYW1lOiBgJHtkYXRhLmxhc3ROYW1lfWAsXHJcblx0XHRcdFx0XHRcdG1pZGRsZU5hbWU6IGAke2RhdGEubWlkZGxlTmFtZX1gLFxyXG5cdFx0XHRcdFx0XHRzdWZmaXg6IGAke2RhdGEuc3VmZml4fWAsXHJcblx0XHRcdFx0XHRcdGdlbmRlcjogYCR7ZGF0YS5nZW5kZXJ9YCxcclxuXHRcdFx0XHRcdFx0ZGF0ZU9mQmlydGg6IGAke2RhdGEuZGF0ZU9mQmlydGh9YCxcclxuXHRcdFx0XHRcdFx0cGxhY2VPZkJpcnRoOiBgJHtkYXRhLnBsYWNlT2ZCaXJ0aH1gLFxyXG5cdFx0XHRcdFx0XHRwZXJtYW5lbnRBZGRyZXNzOiBgJHtkYXRhLnBlcm1hbmVudEFkZHJlc3N9YCxcclxuXHRcdFx0XHRcdFx0cHJlc2VudEFkZHJlc3M6IGAke2RhdGEucHJlc2VudEFkZHJlc3N9YCxcclxuXHRcdFx0XHRcdFx0bW9iaWxlOiBgJHtkYXRhLm1vYmlsZX1gLFxyXG5cdFx0XHRcdFx0XHRsYW5kbGluZTogYCR7ZGF0YS5sYW5kbGluZX1gLFxyXG5cdFx0XHRcdFx0XHRlbWFpbDogYCR7ZGF0YS5lbWFpbH1gLFxyXG5cdFx0XHRcdFx0XHRjaXZpbFN0YXR1czogYCR7ZGF0YS5jaXZpbFN0YXR1c31gLFxyXG5cdFx0XHRcdFx0XHRyZWxpZ2lvbjogYCR7ZGF0YS5yZWxpZ2lvbn1gLFxyXG5cdFx0XHRcdFx0XHRlbWVyZ2VuY3lDb250YWN0UGVyc29uOiBgJHtkYXRhLmVtZXJnZW5jeUNvbnRhY3RQZXJzb259YCxcclxuXHRcdCAgXHRcdFx0XHRlbWVyZ2VuY3lDb250YWN0TnVtYmVyOiBgJHtkYXRhLmVtZXJnZW5jeUNvbnRhY3ROdW1iZXJ9YCxcclxuXHRcdFx0XHRcdFx0dGVhY2hpbmdQaGlsb3NvcGh5OiBgJHtkYXRhLnBoaWxvc29waHl9YFxyXG5cdFx0ICBcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XCJ1bml0SWRcIjogYCR7ZGF0YS51bml0fWAsXHJcblx0XHRcdFx0XHRcImVtcGxveW1lbnRQb3NpdGlvbklkXCI6IGAke2RhdGEuZW1wbG95bWVudFBvc2l0aW9ufWAsXHJcblx0XHRcdFx0XHRcInN0YXJ0RGF0ZVwiOiBgJHtkYXRhLnN0YXJ0RGF0ZX1gXHJcblx0XHQgIFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgYm9keSlcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzcy5yZXN1bHQubWVzc2FnZSlcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFkZEVkdWNhdGlvbihmb3JtRGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBsZXQgZmFjdWx0eUlkID0gY29va2llRGF0YS5mYWN1bHR5SWRcclxuXHR0cnkge1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYoZm9ybURhdGEuZ2V0KCdwcm9vZicpID09IFwiXCIpIHtcclxuXHRcdFx0XHRcdGZvcm1EYXRhLmRlbGV0ZSgncHJvb2YnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihmb3JtRGF0YS5nZXQoJ2VuZERhdGUnKSA9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ2VuZERhdGUnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ZhY3VsdHlJZCcsIGZhY3VsdHlJZClcclxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ3N0YXR1cycsICdQZW5kaW5nJylcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0XHQgICAgbWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9iYXNpYy1pbmZvL2FkZC9lZHVjYXRpb24nLFxyXG5cdFx0XHRcdCAgICBkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0XHQgICAgfSlcdFxyXG5cdFx0XHQgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRXb3JrRXhwKGRhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHRsZXQgYm9kID0gbnVsbFxyXG5cdFx0XHRpZihgJHtkYXRhLmVuZERhdGV9YCA9PSBcIlwiKSB7XHJcblx0XHRcdFx0Ym9kID0ge1xyXG5cdFx0XHRcdFx0ZmFjdWx0eUlkOiBgJHtmYWN1bHR5SWR9YCxcclxuXHRcdFx0XHRcdGVtcGxveWVyTmFtZTogYCR7ZGF0YS5lbXBsb3llck5hbWV9YCxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBgJHtkYXRhLnBvc2l0aW9ufWAsXHJcblx0XHRcdFx0XHRzdGFydERhdGU6IGAke2RhdGEuc3RhcnREYXRlfWAsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogYCR7ZGF0YS5kZXNjcmlwdGlvbn1gXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJvZCA9IHtcclxuXHRcdFx0XHRcdGZhY3VsdHlJZDogYCR7ZmFjdWx0eUlkfWAsXHJcblx0XHRcdFx0XHRlbXBsb3llck5hbWU6IGAke2RhdGEuZW1wbG95ZXJOYW1lfWAsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYCR7ZGF0YS5wb3NpdGlvbn1gLFxyXG5cdFx0XHRcdFx0c3RhcnREYXRlOiBgJHtkYXRhLnN0YXJ0RGF0ZX1gLFxyXG5cdFx0XHRcdFx0ZW5kRGF0ZTogYCR7ZGF0YS5lbmREYXRlfWAsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogYCR7ZGF0YS5kZXNjcmlwdGlvbn1gXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9mYWN1bHR5L2Jhc2ljLWluZm8vYWRkL3dvcmstZXhwXCIsIGJvZCwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlRWR1Y2F0aW9uKGZvcm1EYXRhLCBhcHByb3ZlRmxhZywgZmFjdWx0eUlkLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIFxyXG5cdGxldCBzdGF0dXNcclxuXHRpZihhcHByb3ZlRmxhZykge1xyXG5cdFx0aWYoY29va2llRGF0YS5yb2xlID09IDIpIHtcclxuXHRcdFx0c3RhdHVzID0gJ1ZlcmlmaWVkJ1xyXG5cdFx0fSBlbHNlIGlmKGNvb2tpZURhdGEucm9sZSA9PSAzKSB7XHJcblx0XHRcdHN0YXR1cyA9ICdBcHByb3ZlZCdcclxuXHRcdH1cclxuXHR9IGVsc2Ugc3RhdHVzID0gJ1JlamVjdGVkJ1xyXG5cdGZvcm1EYXRhLmFwcGVuZCgnc3RhdHVzJywgc3RhdHVzKVxyXG5cclxuXHR0cnkge1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0bGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2ZhY3VsdHkvYmFzaWMtaW5mby8nICsgZmFjdWx0eUlkO1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0XHRcdHVybDogdXJsICsgJy9lZHVjYXRpb24nLFxyXG5cdFx0XHRcdFx0ZGF0YTogZm9ybURhdGEsXHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9XHJcblx0XHRcdFx0fSlcdFxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gIGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUVkdWNhdGlvbihkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9iYXNpYy1pbmZvL1wiICsgZmFjdWx0eUlkICsgXCIvZWR1Y2F0aW9uXCIsIHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGVkdWNJbmZvSWQ6IGAke2RhdGF9YFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSAgY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlV29ya0V4cChkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9iYXNpYy1pbmZvL1wiICsgZmFjdWx0eUlkICsgXCIvd29yay1leHBcIiwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0d29ya0V4cElkOiBgJHtkYXRhfWBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gIGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVkdWNhdGlvbihmb3JtRGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBsZXQgZmFjdWx0eUlkID0gY29va2llRGF0YS5mYWN1bHR5SWRcclxuXHR0cnkge1xyXG5cdCAgICBpZiAodG9rZW4pIHtcclxuXHQgICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9mYWN1bHR5L2Jhc2ljLWluZm8vJyArIGZhY3VsdHlJZDtcclxuXHRcdCAgICBsZXQgaGVhZGVyID0ge1xyXG5cdFx0ICAgICAgICBoZWFkZXJzOiB7XHJcblx0XHQgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9XHJcblx0XHQgICAgaWYoZm9ybURhdGEuZ2V0KCdwcm9vZicpID09IFwiXCIpIHtcclxuXHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ3Byb29mJylcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihmb3JtRGF0YS5nZXQoJ2VuZERhdGUnKSA9PSBcIlwiKSB7XHJcblx0XHRcdFx0Zm9ybURhdGEuZGVsZXRlKCdlbmREYXRlJylcclxuXHRcdFx0fVxyXG5cdFx0ICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHQgICAgbWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0ICAgIHVybDogdXJsICsgJy9lZHVjYXRpb24nLFxyXG5cdFx0XHQgICAgZGF0YTogZm9ybURhdGEsXHJcblx0XHRcdCAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9XHJcblx0XHQgICAgfSlcdFxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coYWNjZXNzLnJlc3VsdC5tZXNzYWdlKVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmFjdWx0eShkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1x0ICAgICAgXHJcblx0ICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9iYXNpYy1pbmZvLycgKyBmYWN1bHR5SWQ7XHJcblx0XHQgICAgbGV0IGhlYWRlciA9IHtcclxuXHRcdCAgICAgICAgaGVhZGVyczoge1xyXG5cdFx0ICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfVxyXG5cdCAgICAgICAgdHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dCh1cmwgKyBcIi9wZXJzb25hbFwiLCB7XHJcblx0XHRcdFx0XHRsYXN0TmFtZTogYCR7ZGF0YS5sYXN0TmFtZX1gLFxyXG5cdFx0XHRcdFx0bWlkZGxlTmFtZTogYCR7ZGF0YS5taWRkbGVOYW1lfWAsXHJcblx0XHRcdFx0XHRzdWZmaXg6IGAke2RhdGEuc3VmZml4fWAsXHJcblx0XHRcdFx0XHRwZXJtYW5lbnRBZGRyZXNzOiBgJHtkYXRhLnBlcm1hbmVudEFkZHJlc3N9YCxcclxuXHRcdFx0XHRcdHByZXNlbnRBZGRyZXNzOiBgJHtkYXRhLnByZXNlbnRBZGRyZXNzfWAsXHJcblx0XHRcdFx0XHRtb2JpbGU6IGAke2RhdGEubW9iaWxlfWAsXHJcblx0XHRcdFx0XHRsYW5kbGluZTogYCR7ZGF0YS5sYW5kbGluZX1gLFxyXG5cdFx0XHRcdFx0ZW1haWw6IGAke2RhdGEuZW1haWx9YCxcclxuXHRcdFx0XHRcdGNpdmlsU3RhdHVzOiBgJHtkYXRhLmNpdmlsU3RhdHVzfWAsXHJcblx0XHRcdFx0XHRyZWxpZ2lvbjogYCR7ZGF0YS5yZWxpZ2lvbn1gLFxyXG5cdFx0XHRcdFx0ZW1lcmdlbmN5Q29udGFjdFBlcnNvbjogYCR7ZGF0YS5lbWVyZ2VuY3lDb250YWN0UGVyc29ufWAsXHJcblx0ICBcdFx0XHRcdGVtZXJnZW5jeUNvbnRhY3ROdW1iZXI6IGAke2RhdGEuZW1lcmdlbmN5Q29udGFjdE51bWJlcn1gLFxyXG5cdFx0XHRcdFx0dGVhY2hpbmdQaGlsb3NvcGh5OiBgJHtkYXRhLnBoaWxvc29waHl9YCxcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVx0XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coYWNjZXNzLnJlc3VsdC5tZXNzYWdlKVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV29ya0V4cChkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1xyXG5cdCAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2ZhY3VsdHkvYmFzaWMtaW5mby8nICsgZmFjdWx0eUlkO1xyXG5cdFx0ICAgIGxldCBoZWFkZXIgPSB7XHJcblx0XHQgICAgICAgIGhlYWRlcnM6IHtcclxuXHRcdCAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH1cclxuXHRcdCAgICBsZXQgYm9kID0gbnVsbFxyXG5cdFx0ICAgIGlmKGRhdGEuZW5kRGF0ZSA9PSBcIlwiIHx8IGRhdGEuZW5kRGF0ZSA9PSBudWxsKSB7XHJcblx0XHQgICAgXHRib2QgPSB7XHJcblx0XHQgICAgXHRcdHdvcmtFeHBJZDogYCR7ZGF0YS53b3JrRXhwSWR9YCxcclxuXHRcdFx0XHRcdGVtcGxveWVyTmFtZTogYCR7ZGF0YS5lbXBsb3llck5hbWV9YCxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBgJHtkYXRhLnBvc2l0aW9ufWAsXHJcblx0XHRcdFx0XHRzdGFydERhdGU6IGAke2RhdGEuc3RhcnREYXRlfWAsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogYCR7ZGF0YS5kZXNjcmlwdGlvbn1gXHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdCAgICBcdGJvZCA9IHtcclxuXHRcdCAgICBcdFx0d29ya0V4cElkOiBgJHtkYXRhLndvcmtFeHBJZH1gLFxyXG5cdFx0XHRcdFx0ZW1wbG95ZXJOYW1lOiBgJHtkYXRhLmVtcGxveWVyTmFtZX1gLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IGAke2RhdGEucG9zaXRpb259YCxcclxuXHRcdFx0XHRcdHN0YXJ0RGF0ZTogYCR7ZGF0YS5zdGFydERhdGV9YCxcclxuXHRcdFx0XHRcdGVuZERhdGU6IGAke2RhdGEuZW5kRGF0ZX1gLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IGAke2RhdGEuZGVzY3JpcHRpb259YFxyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIH1cclxuXHRcdCAgICBcclxuXHQgICAgICAgIHRyeSB7IFxyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KHVybCArIFwiL3dvcmstZXhwXCIsIGJvZCwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3MucmVzdWx0Lm1lc3NhZ2UpXHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9