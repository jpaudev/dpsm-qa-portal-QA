exports.id = "components_faculty_accomplishments_licensure-exam_js-components_faculty_accomplishments_publi-e98a0b";
exports.ids = ["components_faculty_accomplishments_licensure-exam_js-components_faculty_accomplishments_publi-e98a0b"];
exports.modules = {

/***/ "./components/faculty/accomplishments/licensure-exam-form.js":
/*!*******************************************************************!*\
  !*** ./components/faculty/accomplishments/licensure-exam-form.js ***!
  \*******************************************************************/
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
/* harmony import */ var _services_faculty_accomplishments_addLicensure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/addLicensure */ "./services/faculty/accomplishments/addLicensure.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\licensure-exam-form.js";





class LicensureExamForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      duplicateForms: []
    };
  }

  render() {
    let LicensureDetails = {
      examName: "",
      examDate: "",
      licenseNumber: "",
      rank: "",
      proof: ""
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: LicensureDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('licenseForm');
        let formData = new FormData(form);
        let alert = document.getElementById("licensureexamalert");
        let res = await (0,_services_faculty_accomplishments_addLicensure__WEBPACK_IMPORTED_MODULE_4__.default)(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#licensureexamalert").slideUp(500);
        });
        resetForm();
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/faculty/accomplishment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
        id: "licenseForm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "LicensureExam[]",
              children: " Licensure Exam "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "examName",
              placeholder: "Input licensure exam"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "LicensureExamDate[]",
              children: " Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "date",
              className: "form-control",
              name: "examDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "LicensureExamRank[]",
              children: " Rank "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "rank",
              placeholder: "Input rank"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "LicenseNumber[]",
              children: " License Number "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "licenseNumber",
              placeholder: "Input licensure number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "LicensureExamProof[]",
              children: " Proof "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-primary",
          disabled: isSubmitting,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LicensureExamForm);

/***/ }),

/***/ "./components/faculty/accomplishments/licensure-exam.js":
/*!**************************************************************!*\
  !*** ./components/faculty/accomplishments/licensure-exam.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _licensure_exam_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./licensure-exam-form */ "./components/faculty/accomplishments/licensure-exam-form.js");
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/faculty/downloadProof */ "./services/faculty/downloadProof.js");
/* harmony import */ var _services_faculty_accomplishments_updateLicensure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/updateLicensure */ "./services/faculty/accomplishments/updateLicensure.js");
/* harmony import */ var _services_faculty_accomplishments_deleteLicensure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/deleteLicensure */ "./services/faculty/accomplishments/deleteLicensure.js");
/* harmony import */ var _services_faculty_accomplishments_approveLicense__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/approveLicense */ "./services/faculty/accomplishments/approveLicense.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\licensure-exam.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function LicensureExam(props) {
  let deleteLic = 0;
  let editLic = 0;
  let approveLic = 0;
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_5___default().useState({
    licenseId: 0,
    examName: '',
    examDate: '',
    licenseNumber: '',
    rank: '',
    proof: ''
  });
  const name = props.name;
  let content;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      if (props.children[key].licenseId != null) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].examName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].rank
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].examDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].licenseNumber
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
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
                lineNumber: 41,
                columnNumber: 33
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
                lineNumber: 51,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this), !props.children[key].proof && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "None"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].approverRemarks || 'None'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editLicensureExam",
                onClick: () => {
                  setEdit(props.children[key].licenseId);
                  setKey(editLic);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteLicensureExam",
                onClick: () => {
                  setDelete(props.children[key].licenseId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this), !props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approveLicense",
                onClick: () => {
                  setApprove(props.children[key].licenseId);
                },
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectLicense",
                onClick: () => {
                  setApprove(props.children[key].licenseId);
                },
                children: "Reject"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this)]
        }, props.children[key].licenseId, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this);
      }
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colspan: "7",
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

  function setEdit(id) {
    editLic = id;
  }

  function setDelete(id) {
    deleteLic = id;
  }

  function setApprove(id) {
    approveLic = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].licenseId == x) {
        setData(props.children[key]);

        if (props.children[key].rank == "" || props.children[key].rank == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            rank: ''
          }));
        }
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      children: " Licensure Exams "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_3__.default, {
      unit: props.unit,
      position: props.position,
      employmentType: props.employmentType,
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      role: "alert",
      id: "licensureexamalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Exam Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Rank"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "License Number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Approver Remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 49
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, this), content]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, this), props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_licensure_exam_form__WEBPACK_IMPORTED_MODULE_2__.default, {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "editLicensureExam",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editLicensureExamLabel",
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
              id: "editLicensureExamLabel",
              children: "Update Licensure Exam Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
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
                lineNumber: 160,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let form = document.getElementById('editLicForm');
              let formData = new FormData(form);
              formData.append('licenseId', currData.licenseId);
              let alert = document.getElementById("licensureexamalert");
              let res = await (0,_services_faculty_accomplishments_updateLicensure__WEBPACK_IMPORTED_MODULE_8__.default)(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#licensureexamalert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "editLicForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "LicensureExamUpdate",
                      children: " Licensure Exam "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "examName",
                      id: "examName",
                      placeholder: "Input licensure exam"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "LicensureExamDateUpdate",
                      children: " Date "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "date",
                      className: "form-control",
                      name: "examDate",
                      id: "examDate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "LicensureExamRankUpdate",
                      children: " Rank "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "rank",
                      id: "rank",
                      placeholder: "Input rank"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "LicenseNumeberUpdate",
                      children: " License Number "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 214,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "licenseNumber",
                      id: "licenseNumber",
                      placeholder: "Input licensure number"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "LicensureExamProofUpdate",
                      children: " Proof "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "proof",
                      id: "proof",
                      value: undefined
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 192,
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
                  lineNumber: 226,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#editLicensureExam').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "deleteLicensureExam",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteLicensureExamLabel",
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
              id: "deleteLicensureExamLabel",
              children: "Delete Licensure Exam Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 29
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
                lineNumber: 244,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this education information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: async () => {
                let alert = document.getElementById("licensureexamalert");
                let res = await (0,_services_faculty_accomplishments_deleteLicensure__WEBPACK_IMPORTED_MODULE_9__.default)(deleteLic, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#licensureexamalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "approveLicense",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveLicenseLabel",
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
              id: "approveLicenseLabel",
              children: "Approve Licensure Exam Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
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
                lineNumber: 282,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to approve this licensure exam information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 285,
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
              lineNumber: 290,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: async () => {
                let alert = document.getElementById("licensureexamalert");
                $('#approveLicense').modal('toggle');
                let formData = new FormData();
                formData.append('licenseId', approveLic);
                let res = await (0,_services_faculty_accomplishments_approveLicense__WEBPACK_IMPORTED_MODULE_10__.default)(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#licensureexamalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
              },
              children: "Yes, approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "rejectLicense",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectLicenseLabel",
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
              id: "rejectLicenseLabel",
              children: "Reject Licensure Exam Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 21
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
                lineNumber: 326,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("licensureexamalert");
              $('#rejectLicense').modal('toggle');
              let form = document.getElementById('rejectLicenseForm');
              let formData = new FormData(form);
              formData.append('licenseId', approveLic);
              let res = await (0,_services_faculty_accomplishments_approveLicense__WEBPACK_IMPORTED_MODULE_10__.default)(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#licensureexamalert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "rejectLicenseForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 361,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "RejectionRemarks",
                      children: " Reason/Remarks for Rejection "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 364,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "approverRemarks",
                      placeholder: "Input remarks",
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 365,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 363,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 362,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  "data-dismiss": "modal",
                  children: "Close"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#rejectLicense').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LicensureExam);

/***/ }),

/***/ "./components/faculty/accomplishments/public-service-accomplishment-form.js":
/*!**********************************************************************************!*\
  !*** ./components/faculty/accomplishments/public-service-accomplishment-form.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _services_faculty_accomplishments_addPublicService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/addPublicService */ "./services/faculty/accomplishments/addPublicService.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\public-service-accomplishment-form.js";





class PublicServiceAccomplishmentForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    let PublicServiceDetails = {
      type: "",
      position: "",
      organization: "",
      description: "",
      startDate: "",
      endDate: "",
      proof: ""
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: PublicServiceDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('psForm');
        let formData = new FormData(form);
        let alert = document.getElementById("publicservicealert");
        let res = await (0,_services_faculty_accomplishments_addPublicService__WEBPACK_IMPORTED_MODULE_4__.default)(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function () {
          $("#publicservicealert").slideUp(500);
        });
        resetForm();
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/faculty/accomplishment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
        id: "psForm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicServicePosition[]",
              children: " Position/Role "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "position",
              id: "position",
              placeholder: "Input position/role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicServiceOrganization[]",
              children: " Organization "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "organization",
              id: "organization",
              placeholder: "Input organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicServiceAccomplishmentStartDate[]",
              children: " Start Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "date",
              className: "form-control",
              name: "startDate",
              id: "startDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicServiceAccomplishmentEndDate[]",
              children: " End Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "date",
              className: "form-control",
              name: "endDate",
              id: "endDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicServiceAccomplishmentProof[]",
              children: " Proof "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicServiceAccomplishmentType[]",
              children: " Type of Contribution "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              as: "select",
              className: "form-control",
              name: "type",
              id: "type",
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Within UPM",
                children: "Within UPM"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Within Pro",
                children: "Contribution to the Profession"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Within Nat",
                children: "Contribution to the Nation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Within Wor",
                children: "Contribution to the World"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicServiceAccomplishmentDescription[]",
              children: " Description "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "description",
              id: "description",
              placeholder: "Input description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-primary",
          disabled: isSubmitting,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PublicServiceAccomplishmentForm);

/***/ }),

/***/ "./components/faculty/accomplishments/public-service-accomplishment.js":
/*!*****************************************************************************!*\
  !*** ./components/faculty/accomplishments/public-service-accomplishment.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_service_accomplishment_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public-service-accomplishment-form */ "./components/faculty/accomplishments/public-service-accomplishment-form.js");
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/faculty/downloadProof */ "./services/faculty/downloadProof.js");
/* harmony import */ var _services_faculty_accomplishments_deletePublicService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/deletePublicService */ "./services/faculty/accomplishments/deletePublicService.js");
/* harmony import */ var _services_faculty_accomplishments_updatePublicService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/updatePublicService */ "./services/faculty/accomplishments/updatePublicService.js");
/* harmony import */ var _services_faculty_accomplishments_approvePublicService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/approvePublicService */ "./services/faculty/accomplishments/approvePublicService.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\public-service-accomplishment.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function PublicServiceAccomplishment(props) {
  const name = props.name;
  let deletePS = 0;
  let editPS = 0;
  let approvePSA = 0;
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_5___default().useState({
    publicServiceId: 0,
    position: '',
    organization: '',
    description: '',
    type: '',
    startDate: '',
    endDate: ''
  });
  let upm = null;
  let pro = null;
  let nat;
  let wor;

  if (props.children != null) {
    upm = Object.keys(props.children).map(key => {
      if (props.children[key].type == 'Within UPM') {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].position
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].organization
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].startDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].endDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
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
                lineNumber: 46,
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
                lineNumber: 56,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 33
            }, this), !props.children[key].proof && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "None"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].approverRemarks || 'None'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editPublicService",
                onClick: () => {
                  setEdit(props.children[key].publicServiceId);
                  setKey(editPS);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deletePublicService",
                onClick: () => {
                  setDelete(props.children[key].publicServiceId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 37
            }, this), !props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approvePublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectPublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Reject"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 29
          }, this)]
        }, props.children[key].publicServiceId, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this);
      }
    });
    pro = Object.keys(props.children).map(key => {
      if (props.children[key].type == 'Within Pro') {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].position
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].organization
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].startDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].endDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
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
                lineNumber: 117,
                columnNumber: 33
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
                lineNumber: 127,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, this), !props.children[key].proof && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "None"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].approverRemarks || 'None'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editPublicService",
                onClick: () => {
                  setEdit(props.children[key].publicServiceId);
                  setKey(editPS);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deletePublicService",
                onClick: () => {
                  setDelete(props.children[key].publicServiceId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 33
            }, this), !props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approvePublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectPublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Reject"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 29
          }, this)]
        }, props.children[key].publicServiceId, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this);
      }
    });
    nat = Object.keys(props.children).map(key => {
      if (props.children[key].type == 'Within Nat') {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].position
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].organization
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].startDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].endDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
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
                lineNumber: 188,
                columnNumber: 33
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
                lineNumber: 198,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 29
            }, this), !props.children[key].proof && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "None"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].approverRemarks || 'None'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 25
          }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editPublicService",
                onClick: () => {
                  setEdit(props.children[key].publicServiceId);
                  setKey(editPS);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deletePublicService",
                onClick: () => {
                  setDelete(props.children[key].publicServiceId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 33
            }, this), !props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approvePublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectPublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Reject"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 29
          }, this)]
        }, props.children[key].publicServiceId, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, this);
      }
    });
    wor = Object.keys(props.children).map(key => {
      if (props.children[key].type == 'Within Wor') {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].position
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].organization
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].startDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].endDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
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
                lineNumber: 259,
                columnNumber: 33
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
                lineNumber: 269,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 29
            }, this), !props.children[key].proof && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "None"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].approverRemarks || 'None'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 25
          }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editPublicService",
                onClick: () => {
                  setEdit(props.children[key].publicServiceId);
                  setKey(editPS);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deletePublicService",
                onClick: () => {
                  setDelete(props.children[key].publicServiceId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 33
            }, this), !props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approvePublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectPublicService",
                onClick: () => {
                  setApprove(props.children[key].publicServiceId);
                },
                children: "Reject"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 29
          }, this)]
        }, props.children[key].publicServiceId, true, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 21
        }, this);
      }
    });
  }

  function setEdit(id) {
    editPS = id;
  }

  function setDelete(id) {
    deletePS = id;
  }

  function setApprove(id) {
    approvePSA = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].publicServiceId == x) {
        setData(props.children[key]);

        if (props.children[key].endDate == "" || props.children[key].endDate == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            endDate: ''
          }));
        }
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      children: " Public Service Accomplishments "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_3__.default, {
      unit: props.unit,
      position: props.position,
      employmentType: props.employmentType,
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      role: "alert",
      id: "publicservicealert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        align: "center",
        children: "Within UP Manila "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Position/Role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 16
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 18
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 356,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Approver Remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 25
            }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 21
          }, this), upm ? upm : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colspan: "8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              align: "center",
              children: "No data available!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 52
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 34
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        align: "center",
        children: " Contributions to Profession "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Position/Role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Approver Remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 25
            }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 21
          }, this), pro ? pro : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colspan: "8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              align: "center",
              children: "No data available!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 52
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 382,
            columnNumber: 34
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        align: "center",
        children: " Contributions to the Nation "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Position/Role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 390,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 391,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 393,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 394,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 395,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Approver Remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 25
            }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 21
          }, this), nat ? nat : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colspan: "8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              align: "center",
              children: "No data available!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 52
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 400,
            columnNumber: 34
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        align: "center",
        children: " Contributions to the World "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Position/Role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 408,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 409,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 410,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 411,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 412,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 414,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Approver Remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 415,
              columnNumber: 25
            }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 407,
            columnNumber: 21
          }, this), wor ? wor : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colspan: "8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              align: "center",
              children: "No data available!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 52
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 418,
            columnNumber: 34
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 13
    }, this), props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_service_accomplishment_form__WEBPACK_IMPORTED_MODULE_2__.default, {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "editPublicService",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editPublicServiceLabel",
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
              id: "editPublicServiceLabel",
              children: "Update Public Service Accomplishment Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 434,
              columnNumber: 21
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
                lineNumber: 436,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let form = document.getElementById('editPSForm');
              let formData = new FormData(form);
              formData.append('publicServiceId', currData.publicServiceId);
              formData.append('type', currData.type);
              let alert = document.getElementById("publicservicealert");
              let res = await (0,_services_faculty_accomplishments_updatePublicService__WEBPACK_IMPORTED_MODULE_9__.default)(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function () {
                $("#publicservicealert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "editPSForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 468,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublicServicePositionUpdate",
                      children: " Position/Role "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 471,
                      columnNumber: 33
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "position",
                      id: "position",
                      placeholder: "Input position/role"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 472,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 470,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 469,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublicServiceOrganizationUpdate",
                      children: " Organization "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 477,
                      columnNumber: 33
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "organization",
                      id: "organization",
                      placeholder: "Input organization"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 478,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 476,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 475,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublicServiceAccomplishmentStartDateUpdate",
                      children: " Start Date "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 483,
                      columnNumber: 33
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "date",
                      className: "form-control",
                      name: "startDate",
                      id: "startDate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 484,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 482,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 481,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublicServiceAccomplishmentEndDateUpdate",
                      children: " End Date "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 489,
                      columnNumber: 33
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "date",
                      className: "form-control",
                      name: "endDate",
                      id: "endDate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 490,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 488,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 487,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group col-md-12",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublicServiceAccomplishmentDescriptionUpdate",
                      children: " Description "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 495,
                      columnNumber: 33
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "description",
                      id: "description",
                      placeholder: "Input description"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 496,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 494,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 493,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublicServiceAccomplishmentProofUpdate",
                      children: " Proof "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 501,
                      columnNumber: 33
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "proof",
                      id: "proof",
                      value: undefined
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 502,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 500,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 499,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 467,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  "data-dismiss": "modal",
                  children: "Close"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 507,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#editPublicService').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 508,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 506,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 466,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "deletePublicService",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deletePublicServiceLabel",
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
              id: "deletePublicServiceLabel",
              children: "Delete Public Service Accomplishment Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 523,
              columnNumber: 21
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
                lineNumber: 525,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 524,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 522,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 529,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this public service accomplishment information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 530,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 528,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 533,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: async () => {
                let alert = document.getElementById("publicservicealert");
                let res = await (0,_services_faculty_accomplishments_deletePublicService__WEBPACK_IMPORTED_MODULE_8__.default)(deletePS, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#publicservicealert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 534,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 532,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 520,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "approvePublicService",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approvePublicServiceLabel",
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
              id: "approvePublicServiceLabel",
              children: "Approve Public Service Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 563,
              columnNumber: 21
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
                lineNumber: 565,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 564,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 562,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 569,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to approve this public service information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 570,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 568,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 573,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: async () => {
                let alert = document.getElementById("publicservicealert");
                $('#approvePublicService').modal('toggle');
                let formData = new FormData();
                formData.append('publicServiceId', approvePSA);
                let res = await (0,_services_faculty_accomplishments_approvePublicService__WEBPACK_IMPORTED_MODULE_10__.default)(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#publicservicealert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
              },
              children: "Yes, approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 574,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 572,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "rejectPublicService",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectPublicServiceLabel",
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
              id: "rejectPublicServiceLabel",
              children: "Reject Public Service Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 607,
              columnNumber: 21
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
                lineNumber: 609,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 608,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 606,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("publicservicealert");
              $('#rejectPublicService').modal('toggle');
              let form = document.getElementById('rejectPublicServiceForm');
              let formData = new FormData(form);
              formData.append('publicServiceId', approvePSA);
              let res = await (0,_services_faculty_accomplishments_approvePublicService__WEBPACK_IMPORTED_MODULE_10__.default)(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function () {
                $("#publicservicealert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "rejectPublicServiceForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 644,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "RejectionRemarks",
                      children: " Reason/Remarks for Rejection "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 647,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "approverRemarks",
                      placeholder: "Input remarks",
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 648,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 646,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 645,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 643,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  "data-dismiss": "modal",
                  children: "Close"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 653,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#rejectPublicService').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 654,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 652,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 642,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 612,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 604,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 343,
    columnNumber: 2
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PublicServiceAccomplishment);

/***/ }),

/***/ "./components/faculty/accomplishments/publication-form-author.js":
/*!***********************************************************************!*\
  !*** ./components/faculty/accomplishments/publication-form-author.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\publication-form-author.js";


class PublicationFormAuthor extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      duplicateAuthors: []
    };
  }

  clone() {
    let authors = Object.keys(this.props.faculty).map(key => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: this.props.faculty[key].facultyId,
        children: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, this);
    });
    this.state.duplicateAuthors.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "PublicationAuthorDPSM[]",
            children: " Author (from DPSM) "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 5
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            className: "form-control col-md-6",
            name: "PublicationAuthorDPSM[]",
            required: true,
            children: authors
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 41
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 36
    }, this));
    this.setState({});
  }

  remove() {
    this.state.duplicateAuthors.pop();
    this.setState({});
  }

  render() {
    let authors = Object.keys(this.props.faculty).map(key => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: this.props.faculty[key].facultyId,
        children: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this);
    });
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn-group btn-group-sm col-md-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          className: "btn btn-primary",
          id: "AddAuthor",
          onClick: () => this.clone(),
          children: " Add DPSM Author "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          className: "btn btn-danger",
          id: "RemoveAuthor",
          onClick: () => this.remove(),
          children: " Remove a Row "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "PublicationAuthorDPSM[]",
            children: " Author (from DPSM) "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            className: "form-control col-md-6",
            name: "PublicationAuthorDPSM[]",
            required: true,
            children: authors
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: this.state.duplicateAuthors
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PublicationFormAuthor);

/***/ }),

/***/ "./components/faculty/accomplishments/publication-form.js":
/*!****************************************************************!*\
  !*** ./components/faculty/accomplishments/publication-form.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _publication_form_author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publication-form-author */ "./components/faculty/accomplishments/publication-form-author.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_faculty_accomplishments_addPublication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/addPublication */ "./services/faculty/accomplishments/addPublication.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\publication-form.js";






class PublicationForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    let PublicationDetails = {
      title: "",
      citation: "",
      url: "",
      publicationDate: "",
      nonFacultyAuthors: ""
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
      initialValues: PublicationDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('pubForm');
        let formData = new FormData(form);
        let alert = document.getElementById("publicationalert");
        let res = await (0,_services_faculty_accomplishments_addPublication__WEBPACK_IMPORTED_MODULE_5__.default)(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) values.message = res.error[0].message;else values.message = res.message;
        }

        $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#publicationalert").slideUp(500);
        });
        resetForm();
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
        id: "pubForm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Publication[]",
              children: " Publication "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "title",
              placeholder: "Input publication name/title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicationCitation[]",
              children: " Citation "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "citation",
              placeholder: "Input full citation for publication"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicationURL[]",
              children: " URL "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "url",
              placeholder: "Input publication URL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublishDate[]",
              children: " Date Published "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "publicationDate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicationProof[]",
              children: " Proof "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-12",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "PublicationAuthorNonDPSM[]",
              children: " Authors (non-DPSM) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "nonFacultyAuthors",
              placeholder: "Input all authors outside DPSM (separate names with commas)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_publication_form_author__WEBPACK_IMPORTED_MODULE_2__.default, {
            faculty: this.props.faculty
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-primary",
          disabled: isSubmitting,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PublicationForm);

/***/ }),

/***/ "./components/faculty/accomplishments/publication.js":
/*!***********************************************************!*\
  !*** ./components/faculty/accomplishments/publication.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _publication_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publication-form */ "./components/faculty/accomplishments/publication-form.js");
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/faculty/downloadProof */ "./services/faculty/downloadProof.js");
/* harmony import */ var _services_faculty_accomplishments_deletePublication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/deletePublication */ "./services/faculty/accomplishments/deletePublication.js");
/* harmony import */ var _services_faculty_accomplishments_updatePublication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/updatePublication */ "./services/faculty/accomplishments/updatePublication.js");
/* harmony import */ var _services_faculty_accomplishments_approvePublication__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/approvePublication */ "./services/faculty/accomplishments/approvePublication.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\publication.js";











function Publication(props) {
  let content;
  let deletePub = 0;
  let editPub = 0;
  let approvePub = 0;
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_5___default().useState({
    publicationId: 0,
    title: '',
    publicationDate: '',
    citation: '',
    url: '',
    nonFacultyAuthors: ''
  });

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      let pub = props.children[key].faculty_publishers;
      let dpsmauth = [];
      pub.forEach(auth => {
        let link = "/faculty/view/" + auth.facultyId;
        dpsmauth.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: link,
          children: auth.faculty_personal_info.firstName + ' ' + auth.faculty_personal_info.lastName + ', '
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 31
        }, this));
      });
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: [dpsmauth, props.children[key].nonFacultyAuthors]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].publicationDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: props.children[key].citation
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: Object.keys(pub).map(auth => {
            if (pub[auth].facultyId == props.facultyId) {
              if (pub[auth].proof) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "btn-grp",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    type: "button",
                    className: "btn btn-primary",
                    onClick: () => {
                      let file = pub[auth].proof;
                      (0,_services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_7__.default)(file, props.token);
                    },
                    children: "Download"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "btn btn-info",
                    href: "http://localhost:3001/" + pub[auth].proof,
                    style: {
                      color: 'white'
                    },
                    target: "_blank",
                    children: "Preview"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 41
                }, this);
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: "None"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 44
                }, this);
              }
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: Object.keys(pub).map(auth => {
            if (pub[auth].facultyId == props.facultyId) {
              return pub[auth].status;
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: [props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "btn-group",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#editPublication",
              onClick: () => {
                setEdit(props.children[key].publicationId);
                setKey(editPub);
              },
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#deletePublication",
              onClick: () => {
                setDelete(props.children[key].publicationId);
              },
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this), !props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "btn-grp",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-info",
              "data-toggle": "modal",
              "data-target": "#approvePublication",
              onClick: () => {
                setApprove(props.children[key].publicationId);
              },
              children: "Approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-danger",
              "data-toggle": "modal",
              "data-target": "#rejectPublication",
              onClick: () => {
                setApprove(props.children[key].publicationId);
              },
              children: "Reject"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this)]
      }, props.children[key].publicationId, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this);
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colspan: "7",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }, this);
  }

  function setEdit(id) {
    editPub = id;
  }

  function setDelete(id) {
    deletePub = id;
  }

  function setApprove(id) {
    approvePub = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].publicationId == x) {
        setData(props.children[key]);
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      children: " Publications "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_3__.default, {
      unit: props.unit,
      position: props.position,
      employmentType: props.employmentType,
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "alert alert-success",
      role: "alert",
      id: "publicationalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Publication"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Author/s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Publication Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "URL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Citation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 5
            }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 4
          }, this), content]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 2
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 4
    }, this), props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_publication_form__WEBPACK_IMPORTED_MODULE_2__.default, {
        faculty: props.faculty,
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "editPublication",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editPublicationLabel",
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
              id: "editPublicationLabel",
              children: "Update Publication Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
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
                lineNumber: 175,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let form = document.getElementById('editPubForm');
              let formData = new FormData(form);
              formData.append('publicationId', currData.publicationId);
              let alert = document.getElementById("publicationalert");
              let res = await (0,_services_faculty_accomplishments_updatePublication__WEBPACK_IMPORTED_MODULE_9__.default)(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#publicationalert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "editPubForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublicationUpdate",
                      children: " Publication "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "title",
                      placeholder: "Input publication name/title"
                    }, void 0, false, {
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
                      htmlFor: "PublicationCitationUpdate",
                      children: " Citation "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "citation",
                      placeholder: "Input full citation for publication"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublicationURLUpdate",
                      children: " URL "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "url",
                      placeholder: "Input publication URL"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublishDateUpdate",
                      children: " Date Published "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "date",
                      className: "form-control",
                      name: "publicationDate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublicationAuthorNonDPSMUpdate",
                      children: " Authors (non-DPSM) "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "nonFacultyAuthors",
                      placeholder: "Input all authors outside DPSM (separate names with commas)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "PublicationProofUpdate",
                      children: " Proof "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 239,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "proof",
                      value: undefined
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 205,
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
                  lineNumber: 245,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#editPublication').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "deletePublication",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deletePublicationLabel",
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
              id: "deletePublicationLabel",
              children: "Delete Publication Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
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
                lineNumber: 263,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this publication information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
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
              lineNumber: 271,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: async () => {
                let alert = document.getElementById("publicationalert");
                let res = await (0,_services_faculty_accomplishments_deletePublication__WEBPACK_IMPORTED_MODULE_8__.default)(deletePub, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#publicationalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "approvePublication",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approvePublicationLabel",
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
              id: "approvePublicationLabel",
              children: "Approve Publication Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
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
                lineNumber: 303,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to approve this publication information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 306,
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
              lineNumber: 311,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: async () => {
                let alert = document.getElementById("publicationalert");
                $('#approvePublication').modal('toggle');
                let formData = new FormData();
                formData.append('publicationId', approvePub);
                let res = await (0,_services_faculty_accomplishments_approvePublication__WEBPACK_IMPORTED_MODULE_10__.default)(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#publicationalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
              },
              children: "Yes, approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "rejectPublication",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectPublicationLabel",
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
              id: "rejectPublicationLabel",
              children: "Reject Publication Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 345,
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
                lineNumber: 347,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("publicationalert");
              $('#rejectPublication').modal('toggle');
              let form = document.getElementById('rejectPubForm');
              let formData = new FormData(form);
              formData.append('publicationId', approvePub);
              let res = await (0,_services_faculty_accomplishments_approvePublication__WEBPACK_IMPORTED_MODULE_10__.default)(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#publicationalert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "rejectPubForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
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
                      lineNumber: 385,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "approverRemarks",
                      placeholder: "Input remarks",
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 386,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 383,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 381,
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
                  lineNumber: 391,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#rejectPublication').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 392,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Publication);

/***/ }),

/***/ "./components/faculty/accomplishments/research-grant-form-author.js":
/*!**************************************************************************!*\
  !*** ./components/faculty/accomplishments/research-grant-form-author.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\research-grant-form-author.js";


class ResearchGrantFormAuthor extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      duplicateAuthors: []
    };
  }

  clone() {
    let authors = Object.keys(this.props.faculty).map(key => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: this.props.faculty[key].facultyId,
        children: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, this);
    });
    this.state.duplicateAuthors.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "ResearchAuthorDPSM[]",
            children: " Researcher (from DPSM) "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 5
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            className: "form-control col-md-6",
            name: "ResearchAuthorDPSM[]",
            required: true,
            children: authors
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 41
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 36
    }, this));
    this.setState({});
  }

  remove() {
    this.state.duplicateAuthors.pop();
    this.setState({});
  }

  render() {
    let authors = Object.keys(this.props.faculty).map(key => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: this.props.faculty[key].facultyId,
        children: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this);
    });
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn-group btn-group-sm col-md-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          className: "btn btn-primary",
          id: "AddAuthor",
          onClick: () => this.clone(),
          children: " Add Researcher "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          className: "btn btn-danger",
          id: "RemoveAuthor",
          onClick: () => this.remove(),
          children: " Remove a Row "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group col-md-6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "ResearchAuthorDPSM[]",
            children: " Researcher (from DPSM) "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 5
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            className: "form-control col-md-6",
            name: "ResearchAuthorDPSM[]",
            required: true,
            children: authors
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: this.state.duplicateAuthors
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 10
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ResearchGrantFormAuthor);

/***/ }),

/***/ "./components/faculty/accomplishments/research-grant-form.js":
/*!*******************************************************************!*\
  !*** ./components/faculty/accomplishments/research-grant-form.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _research_grant_form_author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./research-grant-form-author */ "./components/faculty/accomplishments/research-grant-form-author.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_faculty_accomplishments_addResearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/addResearch */ "./services/faculty/accomplishments/addResearch.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\research-grant-form.js";






class ResearchGrantForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    let ResearchDetails = {
      researchName: "",
      granter: "",
      amount: "",
      projectedStart: "",
      projectedEnd: "",
      actualStart: "",
      actualEnd: "",
      researchProgress: "",
      nonFacultyResearchers: ""
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
      initialValues: ResearchDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('resForm');
        let formData = new FormData(form);
        let alert = document.getElementById("researchalert");
        let res = await (0,_services_faculty_accomplishments_addResearch__WEBPACK_IMPORTED_MODULE_5__.default)(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) values.message = res.error[0].message;else values.message = res.message;
        }

        $("#publicationalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#publicationalert").slideUp(500);
        });
        resetForm();
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
        id: "resForm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Research[]",
              children: " Research Project "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "researchName",
              placeholder: "Input research name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ResearchSponsor[]",
              children: " Sponsor "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "granter",
              placeholder: "Input sponsor"
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
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ResearchAmount[]",
              children: " Amount "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "amount",
              placeholder: "Input amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ResearchProof[]",
              children: " Proof "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 34
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 34
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-12",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ResearchAuthorNonDPSM[]",
              children: " Researchers (non-DPSM) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              className: "form-control",
              type: "text",
              name: "nonFacultyResearchers",
              placeholder: "Input all authors outside DPSM (separate names with commas)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ResearchProjectedStartDate[]",
              children: " Start Date (Projected) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "projectedStart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ResearchProjectedEndDate[]",
              children: " End Date (Projected) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "projectedEnd"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ResearchStartDate[]",
              children: " Start Date (Actual) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "actualStart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ResearchEndDate[]",
              children: " End Date (Actual) "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              type: "date",
              className: "form-control",
              name: "actualEnd"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "ResearchProgress[]",
              children: " Research Progress "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
              as: "select",
              className: "form-control",
              name: "researchProgress",
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Ongoing",
                children: "Ongoing"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 38
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Completed",
                children: "Completed"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 38
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_research_grant_form_author__WEBPACK_IMPORTED_MODULE_2__.default, {
            faculty: this.props.faculty
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-primary",
          disabled: isSubmitting,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ResearchGrantForm);

/***/ }),

/***/ "./components/faculty/accomplishments/research-grant.js":
/*!**************************************************************!*\
  !*** ./components/faculty/accomplishments/research-grant.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _research_grant_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./research-grant-form */ "./components/faculty/accomplishments/research-grant-form.js");
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/faculty/downloadProof */ "./services/faculty/downloadProof.js");
/* harmony import */ var _services_faculty_accomplishments_deleteResearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/deleteResearch */ "./services/faculty/accomplishments/deleteResearch.js");
/* harmony import */ var _services_faculty_accomplishments_updateResearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/updateResearch */ "./services/faculty/accomplishments/updateResearch.js");
/* harmony import */ var _services_faculty_accomplishments_approveResearchGrant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/approveResearchGrant */ "./services/faculty/accomplishments/approveResearchGrant.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\research-grant.js";











function ResearchGrant(props) {
  let content;
  let deleteRes = 0;
  let editRes = 0;
  let approveRG = 0;
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_5___default().useState({
    researchId: 0,
    researchName: '',
    granter: '',
    amount: '',
    projectedStart: '',
    projectedEnd: '',
    actualStart: '',
    actualEnd: '',
    researchProgress: '',
    nonFacultyResearchers: ''
  });

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      let res = props.children[key].faculty_researchers;
      let dpsmauth = [];
      res.forEach(auth => {
        let link = "/faculty/view/" + auth.facultyId;
        dpsmauth.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: link,
          children: auth.faculty_personal_info.firstName + ' ' + auth.faculty_personal_info.lastName + ', '
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 31
        }, this));
      });

      if (props.children[key].researchId != null) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].researchName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [dpsmauth, props.children[key].nonFacultyResearchers]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].granter
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.children[key].projectedStart, " to ", props.children[key].projectedEnd]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].actualStart
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].actualEnd
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].researchProgress
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: Object.keys(res).map(auth => {
              if (res[auth].facultyId == props.facultyId) {
                if (res[auth].proof) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "btn-grp",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                      type: "button",
                      className: "btn btn-primary",
                      onClick: () => {
                        let file = res[auth].proof;
                        (0,_services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_7__.default)(file, props.token);
                      },
                      children: "Download"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 49
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "btn btn-info",
                      href: "http://localhost:3001/" + res[auth].proof,
                      style: {
                        color: 'white'
                      },
                      target: "_blank",
                      children: "Preview"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 49
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 45
                  }, this);
                } else {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: "None"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 48
                  }, this);
                }
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: Object.keys(res).map(auth => {
              if (res[auth].facultyId == props.facultyId) {
                return res[auth].status;
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editResearchGrant",
                onClick: () => {
                  setEdit(props.children[key].researchId);
                  setKey(editRes);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteResearchGrant",
                onClick: () => {
                  setDelete(props.children[key].researchId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, this), !props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approveResearchGrant",
                onClick: () => {
                  setApprove(props.children[key].researchId);
                },
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectResearchGrant",
                onClick: () => {
                  setApprove(props.children[key].researchId);
                },
                children: "Reject"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this);
      }
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colspan: "10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 38
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }, this);
  }

  function setEdit(id) {
    editRes = id;
  }

  function setDelete(id) {
    deleteRes = id;
  }

  function setApprove(id) {
    approveRG = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].researchId == x) {
        setData(props.children[key]);
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      children: " Research Grants "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_3__.default, {
      unit: props.unit,
      position: props.position,
      employmentType: props.employmentType,
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "alert alert-success",
      role: "alert",
      id: "researchalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Research Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Researcher/s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Sponsor"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Projected Duration"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Research Progress"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 5
            }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 4
          }, this), content]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 2
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }, this), props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_research_grant_form__WEBPACK_IMPORTED_MODULE_2__.default, {
        faculty: props.faculty,
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "editResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editResearchGrantLabel",
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
              id: "editResearchGrantLabel",
              children: "Update Research Grant Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 21
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
                lineNumber: 188,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let form = document.getElementById('editResForm');
              let formData = new FormData(form);
              formData.append('researchId', currData.researchId);
              let alert = document.getElementById("researchalert");
              let res = await (0,_services_faculty_accomplishments_updateResearch__WEBPACK_IMPORTED_MODULE_9__.default)(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#researchalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#researchalert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "editResForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchUpdate",
                      children: " Research Project "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "researchName",
                      placeholder: "Input research name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchSponsorUpdate",
                      children: " Sponsor "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "granter",
                      placeholder: "Input sponsor"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchAmountUpdate",
                      children: " Amount "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "amount",
                      placeholder: "Input amount"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 235,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchStartDateUpdate",
                      children: " Start Date (Actual) "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "date",
                      className: "form-control",
                      name: "actualStart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 241,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchEndDateUpdate",
                      children: " End Date (Actual) "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "date",
                      className: "form-control",
                      name: "actualEnd"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchProjectedStartDateUpdate",
                      children: " Start Date (Projected) "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 252,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "date",
                      className: "form-control",
                      name: "projectedStart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 253,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchProjectedEndDateUpdate",
                      children: " End Date (Projected) "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 258,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "date",
                      className: "form-control",
                      name: "projectedEnd"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 259,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchProgressUpdate",
                      children: " Progress "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 264,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "researchProgress",
                      placeholder: "Input progress"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchAuthorNonDPSMUpdate",
                      children: " Authors (non-DPSM) "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 270,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "nonFacultyResearchers",
                      placeholder: "Input all authors outside DPSM (separate names with commas)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchAuthorDPSMUpdate",
                      children: " Authors (DPSM) "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 276,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      className: "form-control",
                      type: "text",
                      name: "ResearchAuthorDPSMUpdate",
                      placeholder: "Input author (must be from DPSM)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "ResearchProofUpdate",
                      children: " Proof "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 282,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "proof",
                      value: undefined
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 283,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 281,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 280,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  "data-dismiss": "modal",
                  children: "Close"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 288,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#editResearchGrant').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "deleteResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteResearchGrantLabel",
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
              id: "deleteResearchGrantLabel",
              children: "Delete Research Grant Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 21
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
                lineNumber: 306,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this research grant information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: async () => {
                let alert = document.getElementById("researchalert");
                let res = await (0,_services_faculty_accomplishments_deleteResearch__WEBPACK_IMPORTED_MODULE_8__.default)(deleteRes, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) values.message = res.error[0].message;else values.message = res.message;
                }

                $("#researchalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#researchalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "approveResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveResearchGrantLabel",
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
              id: "approveResearchGrantLabel",
              children: "Approve Research Grant Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
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
                lineNumber: 346,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to approve this research grant information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 351,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 349,
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
              lineNumber: 354,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: async () => {
                let alert = document.getElementById("researchalert");
                $('#approveResearchGrant').modal('toggle');
                let formData = new FormData();
                formData.append('researchId', approveRG);
                let res = await (0,_services_faculty_accomplishments_approveResearchGrant__WEBPACK_IMPORTED_MODULE_10__.default)(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#researchalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#researchalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
              },
              children: "Yes, approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "rejectResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectResearchGrantLabel",
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
              id: "rejectResearchGrantLabel",
              children: "Reject Research Grant Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 388,
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
                lineNumber: 390,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("researchalert");
              $('#rejectResearchGrant').modal('toggle');
              let form = document.getElementById('rejectRGForm');
              let formData = new FormData(form);
              formData.append('researchId', approveRG);
              let res = await (0,_services_faculty_accomplishments_approveResearchGrant__WEBPACK_IMPORTED_MODULE_10__.default)(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#researchalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#researchalert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "rejectRGForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 425,
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
                      lineNumber: 428,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "approverRemarks",
                      placeholder: "Input remarks",
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 429,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 427,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 426,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 424,
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
                  lineNumber: 434,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#rejectResearchGrant').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 435,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 433,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 393,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ResearchGrant);

/***/ }),

/***/ "./components/faculty/accomplishments/training-seminar-form.js":
/*!*********************************************************************!*\
  !*** ./components/faculty/accomplishments/training-seminar-form.js ***!
  \*********************************************************************/
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
/* harmony import */ var _services_faculty_accomplishments_addTraining__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/addTraining */ "./services/faculty/accomplishments/addTraining.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\training-seminar-form.js";





class TrainingSeminarForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    let TrainingDetails = {
      title: "",
      role: "",
      dateFrom: "",
      dateTo: "",
      venue: "",
      proof: ""
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: TrainingDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('tsForm');
        let formData = new FormData(form);
        let alert = document.getElementById("trainingseminaralert");
        let res = await (0,_services_faculty_accomplishments_addTraining__WEBPACK_IMPORTED_MODULE_4__.default)(formData, this.props.token);

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function () {
          $("#trainingseminaralert").slideUp(500);
        });
        resetForm();
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/faculty/accomplishment');
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
        id: "tsForm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "TrainingSeminar[]",
              children: " Name of Training/Seminar "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "title",
              id: "title",
              placeholder: "Input training/seminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "TrainingSeminarRole[]",
              children: " Role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "role",
              id: "role",
              placeholder: "Input training/seminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "TrainingSeminarVenue[]",
              children: " Venue "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "venue",
              id: "venue",
              placeholder: "Input venue"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "TrainingSeminarStartDate[]",
              children: " Start Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "date",
              className: "form-control",
              name: "dateFrom",
              id: "dateFrom"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "TrainingSeminarEndDate[]",
              children: " End Date "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "date",
              className: "form-control",
              name: "dateTo",
              id: "dateTo"
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
            className: "form-group col-md-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "TrainingSeminarRemarks[]",
              children: " Remarks "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "remarks",
              id: "remarks",
              placeholder: "Input remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "TrainingSeminarProof[]",
              children: " Proof "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              type: "file",
              className: "form-control-file",
              name: "proof",
              id: "proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-primary",
          disabled: isSubmitting,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 12
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TrainingSeminarForm);

/***/ }),

/***/ "./components/faculty/accomplishments/training-seminar.js":
/*!****************************************************************!*\
  !*** ./components/faculty/accomplishments/training-seminar.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _training_seminar_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-seminar-form */ "./components/faculty/accomplishments/training-seminar-form.js");
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/faculty/downloadProof */ "./services/faculty/downloadProof.js");
/* harmony import */ var _services_faculty_accomplishments_deleteTraining__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/deleteTraining */ "./services/faculty/accomplishments/deleteTraining.js");
/* harmony import */ var _services_faculty_accomplishments_updateTraining__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/updateTraining */ "./services/faculty/accomplishments/updateTraining.js");
/* harmony import */ var _services_faculty_accomplishments_approveTraining__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/approveTraining */ "./services/faculty/accomplishments/approveTraining.js");

var _jsxFileName = "D:\\Bod\\dpsm-qa-portal\\components\\faculty\\accomplishments\\training-seminar.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function TrainingSeminar(props) {
  const name = props.name;
  let deleteTS = 0;
  let editTS = 0;
  let approveTS = 0;
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_5___default().useState({
    tsId: 0,
    role: '',
    title: '',
    dateFrom: '',
    dateTo: '',
    venue: '',
    remarks: '',
    proof: ''
  });
  let content;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      if (props.children[key].tsId != null) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].role
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].venue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].dateFrom
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].dateTo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].remarks
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].proof && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                lineNumber: 45,
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
                lineNumber: 55,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editTrainingSeminar",
                onClick: () => {
                  setEdit(props.children[key].tsId);
                  setKey(editTS);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteTrainingSeminar",
                onClick: () => {
                  setDelete(props.children[key].tsId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this), !props.facultyFlag && !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approveTrainingSeminar",
                onClick: () => {
                  setApprove(props.children[key].tsId);
                },
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectTrainingSeminar",
                onClick: () => {
                  setApprove(props.children[key].tsId);
                },
                children: "Reject"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)]
        }, props.children[key].tsId, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this);
      }
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colspan: "9",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }, this);
  }

  function setEdit(id) {
    editTS = id;
  }

  function setDelete(id) {
    deleteTS = id;
  }

  function setApprove(id) {
    approveTS = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].tsId == x) {
        setData(props.children[key]);

        if (props.children[key].endDate == "" || props.children[key].endDate == null) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            endDate: ''
          }));
        }
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      children: " Training/Seminars "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_3__.default, {
      unit: props.unit,
      position: props.position,
      employmentType: props.employmentType,
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      role: "alert",
      id: "trainingseminaralert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Name of Training/Seminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Venue"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, this), !props.viewFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 49
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this), content]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, this), props.facultyFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_training_seminar_form__WEBPACK_IMPORTED_MODULE_2__.default, {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "editTrainingSeminar",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editTrainingSeminarLabel",
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
              id: "editTrainingSeminarLabel",
              children: "Update Training/Seminar Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
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
                lineNumber: 160,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let form = document.getElementById('editTSForm');
              let formData = new FormData(form);
              formData.append('tsId', currData.tsId);
              let alert = document.getElementById("trainingseminaralert");
              let res = await (0,_services_faculty_accomplishments_updateTraining__WEBPACK_IMPORTED_MODULE_9__.default)(formData, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function () {
                $("#trainingseminaralert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "editTSForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "TrainingSeminarUpdate",
                      children: " Name of Training/Seminar "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "title",
                      id: "title",
                      placeholder: "Input training/seminar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "TrainingSeminarRoleUpdate",
                      children: " Role "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "role",
                      id: "role",
                      placeholder: "Input role"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "TrainingSeminarVenueUpdate",
                      children: " Venue "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "venue",
                      id: "venue",
                      placeholder: "Input venue"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "TrainingSeminarStartDateUpdate",
                      children: " Start Date "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 213,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "date",
                      className: "form-control",
                      name: "dateFrom",
                      id: "dateFrom"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 214,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "TrainingSeminarEndDateUpdate",
                      children: " End Date "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 219,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "date",
                      className: "form-control",
                      name: "dateTo",
                      id: "dateTo"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "TrainingSeminarVenueUpdate",
                      children: " Remarks "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 225,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "remarks",
                      id: "remarks",
                      placeholder: "Input remarks"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "TrainingSeminarProofUpdate",
                      children: " Proof "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "proof",
                      id: "proof",
                      value: undefined
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 191,
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
                  lineNumber: 237,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#editTrainingSeminar').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "deleteTrainingSeminar",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteTrainingSeminarLabel",
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
              id: "deleteTrainingSeminarLabel",
              children: "Delete Training/Seminar Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
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
                lineNumber: 255,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this training/seminar information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
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
              lineNumber: 263,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: async () => {
                $('#deleteTrainingSeminar').modal('toggle');
                let alert = document.getElementById("trainingseminaralert");
                let res = await (0,_services_faculty_accomplishments_deleteTraining__WEBPACK_IMPORTED_MODULE_8__.default)(deleteTS, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#trainingseminaralert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/accomplishment');
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "approveTrainingSeminar",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveTrainingSeminarLabel",
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
              id: "approveTrainingSeminarLabel",
              children: "Approve Training/Seminar Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
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
                lineNumber: 295,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to approve this training/seminar information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 298,
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
              lineNumber: 303,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: async () => {
                let alert = document.getElementById("trainingseminaralert");
                $('#approveTrainingSeminar').modal('toggle');
                let formData = new FormData();
                formData.append('tsId', approveTS);
                let res = await (0,_services_faculty_accomplishments_approveTraining__WEBPACK_IMPORTED_MODULE_10__.default)(formData, true, props.facultyId, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  alert.style = "visibility: visible";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#trainingseminaralert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
              },
              children: "Yes, approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "rejectTrainingSeminar",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectTrainingSeminarLabel",
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
              id: "rejectTrainingSeminarLabel",
              children: "Reject Training/Seminar Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 21
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
                lineNumber: 340,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("trainingseminaralert");
              $('#rejectTrainingSeminar').modal('toggle');
              let form = document.getElementById('rejectTrainingSeminarForm');
              let formData = new FormData(form);
              formData.append('tsId', approveTS);
              let res = await (0,_services_faculty_accomplishments_approveTraining__WEBPACK_IMPORTED_MODULE_10__.default)(formData, false, props.facultyId, props.token);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                alert.style = "visibility: visible";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function () {
                $("#trainingseminaralert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              id: "rejectTrainingSeminarForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "RejectionRemarks",
                      children: " Reason/Remarks for Rejection "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 378,
                      columnNumber: 37
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "approverRemarks",
                      placeholder: "Input remarks",
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 379,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 377,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-footer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  "data-dismiss": "modal",
                  children: "Close"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 384,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#rejectTrainingSeminar').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 385,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TrainingSeminar);

/***/ }),

/***/ "./services/faculty/accomplishments/addLicensure.js":
/*!**********************************************************!*\
  !*** ./services/faculty/accomplishments/addLicensure.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addLicensure; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function addLicensure(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        formData.append('facultyId', facultyId);
        formData.append('status', 'Pending');
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'POST',
          url: 'http://localhost:3001/api/faculty/accomplishment/add/licensure-exam',
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

/***/ "./services/faculty/accomplishments/addPublicService.js":
/*!**************************************************************!*\
  !*** ./services/faculty/accomplishments/addPublicService.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addPublicService; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function addPublicService(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        if (formData.get('endDate') == "") {
          formData.delete('endDate');
        }

        formData.append('facultyId', facultyId);
        formData.append('status', 'Pending');
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'POST',
          url: 'http://localhost:3001/api/faculty/accomplishment/add/public-service',
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

/***/ "./services/faculty/accomplishments/addPublication.js":
/*!************************************************************!*\
  !*** ./services/faculty/accomplishments/addPublication.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addPublication; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function addPublication(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        let authors = [];

        for (var pair of formData.entries()) {
          if (pair[0] == 'PublicationAuthorDPSM[]' && pair[1] != facultyId) {
            authors.push(pair[1]);
          }
        }

        let proof = formData.get('proof');
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'POST',
          url: 'http://localhost:3001/api/faculty/accomplishment/add/publication',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        let bodData = new FormData();
        bodData.append('facultyId', facultyId);
        bodData.append('publicationId', response.data.result.publicationId);
        bodData.append('proof', proof);
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'POST',
          url: 'http://localhost:3001/api/faculty/accomplishment/add/publisher',
          data: bodData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        bodData.delete('proof');

        for (var value of authors) {
          bodData.set('facultyId', value);
          const auth = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: 'http://localhost:3001/api/faculty/accomplishment/add/publisher',
            data: bodData,
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`
            }
          });
        }

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

/***/ "./services/faculty/accomplishments/addResearch.js":
/*!*********************************************************!*\
  !*** ./services/faculty/accomplishments/addResearch.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addResearch; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function addResearch(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        let researchers = [];

        for (var pair of formData.entries()) {
          if (pair[0] == 'ResearchAuthorDPSM[]' && pair[1] != facultyId) {
            researchers.push(pair[1]);
          }
        }

        let proof = formData.get('proof');
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'POST',
          url: 'http://localhost:3001/api/faculty/accomplishment/add/research-grant',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        let bodData = new FormData();
        bodData.append('facultyId', facultyId);
        bodData.append('researchId', response.data.result.researchId);
        bodData.append('proof', proof);
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'POST',
          url: 'http://localhost:3001/api/faculty/accomplishment/add/researcher',
          data: bodData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        bodData.delete('proof');

        for (var value of researchers) {
          bodData.set('facultyId', value);
          const auth = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: 'http://localhost:3001/api/faculty/accomplishment/add/researcher',
            data: bodData,
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`
            }
          });
        }

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

/***/ "./services/faculty/accomplishments/addTraining.js":
/*!*********************************************************!*\
  !*** ./services/faculty/accomplishments/addTraining.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addTraining; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function addTraining(formData, token) {
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
          url: 'http://localhost:3001/api/faculty/accomplishment/add/training-seminar',
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

/***/ "./services/faculty/accomplishments/approveLicense.js":
/*!************************************************************!*\
  !*** ./services/faculty/accomplishments/approveLicense.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ approveLicense; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function approveLicense(formData, approveFlag, facultyId, token) {
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
        let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'PUT',
          url: url + '/licensure-exam',
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

/***/ "./services/faculty/accomplishments/approvePublicService.js":
/*!******************************************************************!*\
  !*** ./services/faculty/accomplishments/approvePublicService.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ approvePublicService; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function approvePublicService(formData, approveFlag, facultyId, token) {
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
        let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'PUT',
          url: url + '/public-service',
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

/***/ "./services/faculty/accomplishments/approvePublication.js":
/*!****************************************************************!*\
  !*** ./services/faculty/accomplishments/approvePublication.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ approvePublication; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function approvePublication(formData, approveFlag, facultyId, token) {
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
        let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'PUT',
          url: url + '/publisher',
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

/***/ "./services/faculty/accomplishments/approveResearchGrant.js":
/*!******************************************************************!*\
  !*** ./services/faculty/accomplishments/approveResearchGrant.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ approveResearchGrant; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function approveResearchGrant(formData, approveFlag, facultyId, token) {
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
        let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'PUT',
          url: url + '/researcher',
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

/***/ "./services/faculty/accomplishments/approveTraining.js":
/*!*************************************************************!*\
  !*** ./services/faculty/accomplishments/approveTraining.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ approveTraining; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function approveTraining(formData, approveFlag, facultyId, token) {
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
        let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'PUT',
          url: url + '/training-seminar',
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

/***/ "./services/faculty/accomplishments/deleteLicensure.js":
/*!*************************************************************!*\
  !*** ./services/faculty/accomplishments/deleteLicensure.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deleteLicensure; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function deleteLicensure(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api/faculty/accomplishment/" + facultyId + "/licensure-exam", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            licenseId: `${data}`
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

/***/ "./services/faculty/accomplishments/deletePublicService.js":
/*!*****************************************************************!*\
  !*** ./services/faculty/accomplishments/deletePublicService.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deletePublicService; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function deletePublicService(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api/faculty/accomplishment/" + facultyId + "/public-service", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            publicServiceId: `${data}`
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

/***/ "./services/faculty/accomplishments/deletePublication.js":
/*!***************************************************************!*\
  !*** ./services/faculty/accomplishments/deletePublication.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deletePublication; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function deletePublication(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api/faculty/accomplishment/" + facultyId + "/publisher", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            publicationId: `${data}`
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

/***/ "./services/faculty/accomplishments/deleteResearch.js":
/*!************************************************************!*\
  !*** ./services/faculty/accomplishments/deleteResearch.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deleteResearch; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function deleteResearch(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api/faculty/accomplishment/" + facultyId + "/researcher", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            researchId: `${data}`
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

/***/ "./services/faculty/accomplishments/deleteTraining.js":
/*!************************************************************!*\
  !*** ./services/faculty/accomplishments/deleteTraining.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deleteTraining; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function deleteTraining(data, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api/faculty/accomplishment/" + facultyId + "/training-seminar", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            tsId: `${data}`
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

/***/ "./services/faculty/accomplishments/updateLicensure.js":
/*!*************************************************************!*\
  !*** ./services/faculty/accomplishments/updateLicensure.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateLicensure; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function updateLicensure(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      if (formData.get('rank') == "") {
        formData.set('rank', '');
      }

      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'PUT',
        url: url + '/licensure-exam',
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

/***/ "./services/faculty/accomplishments/updatePublicService.js":
/*!*****************************************************************!*\
  !*** ./services/faculty/accomplishments/updatePublicService.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updatePublicService; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function updatePublicService(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
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
        url: url + '/public-service',
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

/***/ "./services/faculty/accomplishments/updatePublication.js":
/*!***************************************************************!*\
  !*** ./services/faculty/accomplishments/updatePublication.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updatePublication; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function updatePublication(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'PUT',
        url: url + '/publication',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
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

/***/ "./services/faculty/accomplishments/updateResearch.js":
/*!************************************************************!*\
  !*** ./services/faculty/accomplishments/updateResearch.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateResearch; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function updateResearch(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'PUT',
        url: url + '/research-grant',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
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

/***/ "./services/faculty/accomplishments/updateTraining.js":
/*!************************************************************!*\
  !*** ./services/faculty/accomplishments/updateTraining.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateTraining; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function updateTraining(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      };

      if (formData.get('proof') == "") {
        formData.delete('proof');
      }

      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'PUT',
        url: url + '/training-seminar',
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvbGljZW5zdXJlLWV4YW0tZm9ybS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvbGljZW5zdXJlLWV4YW0uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL3B1YmxpYy1zZXJ2aWNlLWFjY29tcGxpc2htZW50LWZvcm0uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL3B1YmxpYy1zZXJ2aWNlLWFjY29tcGxpc2htZW50LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9wdWJsaWNhdGlvbi1mb3JtLWF1dGhvci5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvcHVibGljYXRpb24tZm9ybS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvcHVibGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL3Jlc2VhcmNoLWdyYW50LWZvcm0tYXV0aG9yLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9yZXNlYXJjaC1ncmFudC1mb3JtLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9yZXNlYXJjaC1ncmFudC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvdHJhaW5pbmctc2VtaW5hci1mb3JtLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy90cmFpbmluZy1zZW1pbmFyLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvYWRkTGljZW5zdXJlLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvYWRkUHVibGljU2VydmljZS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2FkZFB1YmxpY2F0aW9uLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvYWRkUmVzZWFyY2guanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9hZGRUcmFpbmluZy5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2FwcHJvdmVMaWNlbnNlLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvYXBwcm92ZVB1YmxpY1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9hcHByb3ZlUHVibGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9hcHByb3ZlUmVzZWFyY2hHcmFudC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2FwcHJvdmVUcmFpbmluZy5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2RlbGV0ZUxpY2Vuc3VyZS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2RlbGV0ZVB1YmxpY1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9kZWxldGVQdWJsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2RlbGV0ZVJlc2VhcmNoLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvZGVsZXRlVHJhaW5pbmcuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy91cGRhdGVMaWNlbnN1cmUuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy91cGRhdGVQdWJsaWNTZXJ2aWNlLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvdXBkYXRlUHVibGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy91cGRhdGVSZXNlYXJjaC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL3VwZGF0ZVRyYWluaW5nLmpzIl0sIm5hbWVzIjpbIkxpY2Vuc3VyZUV4YW1Gb3JtIiwiUmVhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJkdXBsaWNhdGVGb3JtcyIsInJlbmRlciIsIkxpY2Vuc3VyZURldGFpbHMiLCJleGFtTmFtZSIsImV4YW1EYXRlIiwibGljZW5zZU51bWJlciIsInJhbmsiLCJwcm9vZiIsInZhbHVlcyIsInJlc2V0Rm9ybSIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFsZXJ0IiwicmVzIiwiYWRkTGljZW5zdXJlIiwidG9rZW4iLCJzdWNjZXNzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwiZXJyb3IiLCIkIiwiZmFkZVRvIiwic2xpZGVVcCIsIlJvdXRlciIsImVycm9ycyIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJMaWNlbnN1cmVFeGFtIiwiZGVsZXRlTGljIiwiZWRpdExpYyIsImFwcHJvdmVMaWMiLCJjdXJyRGF0YSIsInNldERhdGEiLCJsaWNlbnNlSWQiLCJuYW1lIiwiY29udGVudCIsImNoaWxkcmVuIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImZpbGUiLCJkb3dubG9hZFByb29mIiwiY29sb3IiLCJzdGF0dXMiLCJhcHByb3ZlclJlbWFya3MiLCJmYWN1bHR5RmxhZyIsInZpZXdGbGFnIiwic2V0RWRpdCIsInNldEtleSIsInNldERlbGV0ZSIsInNldEFwcHJvdmUiLCJpZCIsIngiLCJ1bml0IiwicG9zaXRpb24iLCJlbXBsb3ltZW50VHlwZSIsInZpc2liaWxpdHkiLCJhcHBlbmQiLCJ1cGRhdGVMaWNlbnN1cmUiLCJ1bmRlZmluZWQiLCJtb2RhbCIsImRlbGV0ZUxpY2Vuc3VyZSIsImFwcHJvdmVMaWNlbnNlIiwiZmFjdWx0eUlkIiwiUHVibGljU2VydmljZUFjY29tcGxpc2htZW50Rm9ybSIsIlB1YmxpY1NlcnZpY2VEZXRhaWxzIiwidHlwZSIsIm9yZ2FuaXphdGlvbiIsImRlc2NyaXB0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImFkZFB1YmxpY1NlcnZpY2UiLCJQdWJsaWNTZXJ2aWNlQWNjb21wbGlzaG1lbnQiLCJkZWxldGVQUyIsImVkaXRQUyIsImFwcHJvdmVQU0EiLCJwdWJsaWNTZXJ2aWNlSWQiLCJ1cG0iLCJwcm8iLCJuYXQiLCJ3b3IiLCJ1cGRhdGVQdWJsaWNTZXJ2aWNlIiwiZGVsZXRlUHVibGljU2VydmljZSIsImFwcHJvdmVQdWJsaWNTZXJ2aWNlIiwiUHVibGljYXRpb25Gb3JtQXV0aG9yIiwiZHVwbGljYXRlQXV0aG9ycyIsImNsb25lIiwiYXV0aG9ycyIsImZhY3VsdHkiLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsInB1c2giLCJzZXRTdGF0ZSIsInJlbW92ZSIsInBvcCIsIlB1YmxpY2F0aW9uRm9ybSIsIlB1YmxpY2F0aW9uRGV0YWlscyIsInRpdGxlIiwiY2l0YXRpb24iLCJ1cmwiLCJwdWJsaWNhdGlvbkRhdGUiLCJub25GYWN1bHR5QXV0aG9ycyIsImFkZFB1YmxpY2F0aW9uIiwiUHVibGljYXRpb24iLCJkZWxldGVQdWIiLCJlZGl0UHViIiwiYXBwcm92ZVB1YiIsInB1YmxpY2F0aW9uSWQiLCJwdWIiLCJmYWN1bHR5X3B1Ymxpc2hlcnMiLCJkcHNtYXV0aCIsImZvckVhY2giLCJhdXRoIiwibGluayIsImZhY3VsdHlfcGVyc29uYWxfaW5mbyIsInVwZGF0ZVB1YmxpY2F0aW9uIiwiZGVsZXRlUHVibGljYXRpb24iLCJhcHByb3ZlUHVibGljYXRpb24iLCJSZXNlYXJjaEdyYW50Rm9ybUF1dGhvciIsIlJlc2VhcmNoR3JhbnRGb3JtIiwiUmVzZWFyY2hEZXRhaWxzIiwicmVzZWFyY2hOYW1lIiwiZ3JhbnRlciIsImFtb3VudCIsInByb2plY3RlZFN0YXJ0IiwicHJvamVjdGVkRW5kIiwiYWN0dWFsU3RhcnQiLCJhY3R1YWxFbmQiLCJyZXNlYXJjaFByb2dyZXNzIiwibm9uRmFjdWx0eVJlc2VhcmNoZXJzIiwiYWRkUmVzZWFyY2giLCJSZXNlYXJjaEdyYW50IiwiZGVsZXRlUmVzIiwiZWRpdFJlcyIsImFwcHJvdmVSRyIsInJlc2VhcmNoSWQiLCJmYWN1bHR5X3Jlc2VhcmNoZXJzIiwidXBkYXRlUmVzZWFyY2giLCJkZWxldGVSZXNlYXJjaCIsImFwcHJvdmVSZXNlYXJjaEdyYW50IiwiVHJhaW5pbmdTZW1pbmFyRm9ybSIsIlRyYWluaW5nRGV0YWlscyIsInJvbGUiLCJkYXRlRnJvbSIsImRhdGVUbyIsInZlbnVlIiwiYWRkVHJhaW5pbmciLCJUcmFpbmluZ1NlbWluYXIiLCJkZWxldGVUUyIsImVkaXRUUyIsImFwcHJvdmVUUyIsInRzSWQiLCJyZW1hcmtzIiwidXBkYXRlVHJhaW5pbmciLCJkZWxldGVUcmFpbmluZyIsImFwcHJvdmVUcmFpbmluZyIsImNvb2tpZURhdGEiLCJqd3QiLCJyZXNwb25zZSIsImF4aW9zIiwibWV0aG9kIiwiZGF0YSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZXJyIiwiY29uc29sZSIsImdldCIsImRlbGV0ZSIsInBhaXIiLCJlbnRyaWVzIiwiYm9kRGF0YSIsInJlc3VsdCIsInZhbHVlIiwic2V0IiwicmVzZWFyY2hlcnMiLCJhcHByb3ZlRmxhZyIsImhlYWRlciIsImxvZyIsImFjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxpQkFBTixTQUFnQ0Msd0RBQWhDLENBQStDO0FBQzlDQyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLG9CQUFjLEVBQUU7QUFESixLQUFiO0FBR0E7O0FBRURDLFFBQU0sR0FBRTtBQUNELFFBQUlDLGdCQUFnQixHQUFHO0FBQ25CQyxjQUFRLEVBQUUsRUFEUztBQUVuQkMsY0FBUSxFQUFFLEVBRlM7QUFHbkJDLG1CQUFhLEVBQUUsRUFISTtBQUluQkMsVUFBSSxFQUFFLEVBSmE7QUFL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RyxNQUFJbUQsU0FBUyxHQUFHNkYsVUFBVSxDQUFDN0YsU0FBM0I7O0FBQ0gsTUFBSTtBQUNBLFFBQUluRCxLQUFKLEVBQVc7QUFDUCxVQUFJdUYsR0FBRyxHQUFHLHNEQUFzRHBDLFNBQWhFO0FBQ0gsVUFBSWlILE1BQU0sR0FBRztBQUNUZCxlQUFPLEVBQUU7QUFDTCwyQkFBaUIsWUFBWXRKO0FBRHhCO0FBREEsT0FBYjs7QUFLQSxVQUFHTCxRQUFRLENBQUMrSixHQUFULENBQWEsT0FBYixLQUF5QixFQUE1QixFQUFnQztBQUNsQy9KLGdCQUFRLENBQUNnSyxNQUFULENBQWdCLE9BQWhCO0FBQ0E7O0FBQ0UsWUFBTVQsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUM7QUFDNUJDLGNBQU0sRUFBRSxLQURvQjtBQUU1QjdELFdBQUcsRUFBRUEsR0FBRyxHQUFHLG1CQUZpQjtBQUc1QjhELFlBQUksRUFBRTFKLFFBSHNCO0FBSTVCMkosZUFBTyxFQUFFO0FBQUMsMEJBQWdCLHFCQUFqQjtBQUF3Q0MsdUJBQWEsRUFBRyxVQUFTdkosS0FBTTtBQUF2RTtBQUptQixPQUFELENBQTVCO0FBTUgsYUFBT2tKLFFBQVEsQ0FBQ0csSUFBaEI7QUFDRyxLQWpCRCxNQWlCTztBQUNISSxhQUFPLENBQUNZLEdBQVIsQ0FBWUMsTUFBTSxDQUFDUCxNQUFQLENBQWMxSixPQUExQjtBQUNOO0FBQ0QsR0FyQkQsQ0FxQkUsT0FBT21KLEdBQVAsRUFBWTtBQUNiQyxXQUFPLENBQUNuSixLQUFSLENBQWNrSixHQUFkO0FBQ0EsV0FBT0EsR0FBUDtBQUNBO0FBQ0QsQyIsImZpbGUiOiJjb21wb25lbnRzX2ZhY3VsdHlfYWNjb21wbGlzaG1lbnRzX2xpY2Vuc3VyZS1leGFtX2pzLWNvbXBvbmVudHNfZmFjdWx0eV9hY2NvbXBsaXNobWVudHNfcHVibGktZTk4YTBiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgYWRkTGljZW5zdXJlIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2FkZExpY2Vuc3VyZSdcclxuXHJcbmNsYXNzIExpY2Vuc3VyZUV4YW1Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0ZHVwbGljYXRlRm9ybXM6IFtdXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBMaWNlbnN1cmVEZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBleGFtTmFtZTogXCJcIixcclxuICAgICAgICAgICAgZXhhbURhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGxpY2Vuc2VOdW1iZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIHJhbms6IFwiXCIsXHJcbiAgICAgICAgICAgIHByb29mOiBcIlwiXHJcbiAgICAgICAgfVxyXG5cdFx0cmV0dXJuKFxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtMaWNlbnN1cmVEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHtyZXNldEZvcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGljZW5zZUZvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpY2Vuc3VyZWV4YW1hbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhZGRMaWNlbnN1cmUoZm9ybURhdGEsIHRoaXMucHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNsaWNlbnN1cmVleGFtYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKClcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQnKSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gaWQgPSBcImxpY2Vuc2VGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJMaWNlbnN1cmVFeGFtW11cIj4gTGljZW5zdXJlIEV4YW0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZXhhbU5hbWVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgbGljZW5zdXJlIGV4YW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJMaWNlbnN1cmVFeGFtRGF0ZVtdXCI+IERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZXhhbURhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJMaWNlbnN1cmVFeGFtUmFua1tdXCI+IFJhbmsgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmFua1wiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCByYW5rXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiTGljZW5zZU51bWJlcltdXCI+IExpY2Vuc2UgTnVtYmVyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImxpY2Vuc2VOdW1iZXJcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgbGljZW5zdXJlIG51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkxpY2Vuc3VyZUV4YW1Qcm9vZltdXCI+IFByb29mIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImZpbGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbC1maWxlXCIgbmFtZSA9IFwicHJvb2ZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGljZW5zdXJlRXhhbUZvcm1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGljZW5zdXJlRXhhbUZvcm0gZnJvbSAnLi9saWNlbnN1cmUtZXhhbS1mb3JtJ1xyXG5pbXBvcnQgTmFtZURpc3BsYXkgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYW1lLWRpc3BsYXknXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuXHJcbmltcG9ydCBkb3dubG9hZFByb29mIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvZG93bmxvYWRQcm9vZidcclxuaW1wb3J0IHVwZGF0ZUxpY2Vuc3VyZSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy91cGRhdGVMaWNlbnN1cmUnXHJcbmltcG9ydCBkZWxldGVMaWNlbnN1cmUgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvZGVsZXRlTGljZW5zdXJlJ1xyXG5pbXBvcnQgYXBwcm92ZUxpY2Vuc2UgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvYXBwcm92ZUxpY2Vuc2UnXHJcblxyXG5mdW5jdGlvbiBMaWNlbnN1cmVFeGFtKHByb3BzKSB7XHJcbiAgICBsZXQgZGVsZXRlTGljID0gMFxyXG4gICAgbGV0IGVkaXRMaWMgPSAwXHJcbiAgICBsZXQgYXBwcm92ZUxpYyA9IDBcclxuXHJcbiAgICBjb25zdCBbY3VyckRhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGxpY2Vuc2VJZDogMCxcclxuICAgICAgICBleGFtTmFtZTogJycsXHJcbiAgICAgICAgZXhhbURhdGU6JycsXHJcbiAgICAgICAgbGljZW5zZU51bWJlcjogJycsXHJcbiAgICAgICAgcmFuazogJycsXHJcbiAgICAgICAgcHJvb2Y6ICcnXHJcbiAgICB9KVxyXG4gICAgY29uc3QgbmFtZSA9IHByb3BzLm5hbWVcclxuICAgIGxldCBjb250ZW50IFxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuW2tleV0ubGljZW5zZUlkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleSA9IHtwcm9wcy5jaGlsZHJlbltrZXldLmxpY2Vuc2VJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5leGFtTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0ucmFua308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZXhhbURhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmxpY2Vuc2VOdW1iZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFByb29mKGZpbGUsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17XCJodHRwOi8vbG9jYWxob3N0OjMwMDEvXCIgKyBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7IGNvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ob25lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYXBwcm92ZXJSZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy52aWV3RmxhZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0TGljZW5zdXJlRXhhbVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdChwcm9wcy5jaGlsZHJlbi5ba2V5XS5saWNlbnNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEtleShlZGl0TGljKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlTGljZW5zdXJlRXhhbVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlKHByb3BzLmNoaWxkcmVuLltrZXldLmxpY2Vuc2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLnZpZXdGbGFnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNhcHByb3ZlTGljZW5zZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLmxpY2Vuc2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BcHByb3ZlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3JlamVjdExpY2Vuc2VcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFwcHJvdmUocHJvcHMuY2hpbGRyZW5ba2V5XS5saWNlbnNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+UmVqZWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnRlbnQgPSA8dGQgY29sc3BhbiA9IFwiN1wiPjxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBkYXRhIGF2YWlsYWJsZSE8L3A+PC90ZD5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcbiAgICAgICAgZWRpdExpYyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlKGlkKSB7XHJcbiAgICAgICAgZGVsZXRlTGljID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBcHByb3ZlKGlkKSB7XHJcbiAgICAgICAgYXBwcm92ZUxpYyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0S2V5KHgpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuLltrZXldLmxpY2Vuc2VJZCA9PSB4KSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHByb3BzLmNoaWxkcmVuLltrZXldKVxyXG4gICAgICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW4uW2tleV0ucmFuayA9PSBcIlwiIHx8IHByb3BzLmNoaWxkcmVuLltrZXldLnJhbmsgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoY3VyckRhdGEgPT4gKHsuLi5jdXJyRGF0YSwgcmFuazogJyd9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGFsaWduID0gXCJjZW50ZXJcIj4gTGljZW5zdXJlIEV4YW1zIDwvaDI+XHJcbiAgICAgICAgICAgIDxOYW1lRGlzcGxheSB1bml0ID0ge3Byb3BzLnVuaXR9IHBvc2l0aW9uPXtwcm9wcy5wb3NpdGlvbn0gZW1wbG95bWVudFR5cGU9e3Byb3BzLmVtcGxveW1lbnRUeXBlfT57cHJvcHMubmFtZX08L05hbWVEaXNwbGF5PlxyXG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGlkPVwibGljZW5zdXJlZXhhbWFsZXJ0XCIgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FeGFtIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhbms8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpY2Vuc2UgTnVtYmVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9vZjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BcHByb3ZlciBSZW1hcmtzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshcHJvcHMudmlld0ZsYWcgJiYgPHRoPkFjdGlvbjwvdGg+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5mYWN1bHR5RmxhZyAmJiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpY2Vuc3VyZUV4YW1Gb3JtIHRva2VuID0geyBwcm9wcy50b2tlbiB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgfVxyXG5cdFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImVkaXRMaWNlbnN1cmVFeGFtXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJlZGl0TGljZW5zdXJlRXhhbUxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZWRpdExpY2Vuc3VyZUV4YW1MYWJlbFwiPlVwZGF0ZSBMaWNlbnN1cmUgRXhhbSBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Y3VyckRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0TGljRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbGljZW5zZUlkJywgY3VyckRhdGEubGljZW5zZUlkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGljZW5zdXJlZXhhbWFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgdXBkYXRlTGljZW5zdXJlKGZvcm1EYXRhLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hY2NvbXBsaXNobWVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpZCA9IFwiZWRpdExpY0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkxpY2Vuc3VyZUV4YW1VcGRhdGVcIj4gTGljZW5zdXJlIEV4YW0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJleGFtTmFtZVwiIGlkID0gXCJleGFtTmFtZVwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBsaWNlbnN1cmUgZXhhbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkxpY2Vuc3VyZUV4YW1EYXRlVXBkYXRlXCI+IERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJleGFtRGF0ZVwiIGlkID0gXCJleGFtRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkxpY2Vuc3VyZUV4YW1SYW5rVXBkYXRlXCI+IFJhbmsgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJyYW5rXCIgaWQgPSBcInJhbmtcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcmFua1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkxpY2Vuc2VOdW1lYmVyVXBkYXRlXCI+IExpY2Vuc2UgTnVtYmVyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibGljZW5zZU51bWJlclwiIGlkID0gXCJsaWNlbnNlTnVtYmVyXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IGxpY2Vuc3VyZSBudW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJMaWNlbnN1cmVFeGFtUHJvb2ZVcGRhdGVcIj4gUHJvb2YgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJmaWxlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wtZmlsZVwiIG5hbWUgPSBcInByb29mXCIgaWQgPSBcInByb29mXCIgdmFsdWU9e3VuZGVmaW5lZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfSBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXRMaWNlbnN1cmVFeGFtJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImRlbGV0ZUxpY2Vuc3VyZUV4YW1cIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImRlbGV0ZUxpY2Vuc3VyZUV4YW1MYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZGVsZXRlTGljZW5zdXJlRXhhbUxhYmVsXCI+RGVsZXRlIExpY2Vuc3VyZSBFeGFtIEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGVkdWNhdGlvbiBpbmZvcm1hdGlvbj8gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPk5vLCBkb24ndCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2sgPSB7YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWNlbnN1cmVleGFtYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBkZWxldGVMaWNlbnN1cmUoZGVsZXRlTGljLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hY2NvbXBsaXNobWVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImFwcHJvdmVMaWNlbnNlXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJhcHByb3ZlTGljZW5zZUxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiYXBwcm92ZUxpY2Vuc2VMYWJlbFwiPkFwcHJvdmUgTGljZW5zdXJlIEV4YW0gSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBhcHByb3ZlIHRoaXMgbGljZW5zdXJlIGV4YW0gaW5mb3JtYXRpb24/IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Tm8sIGRvbid0IGFwcHJvdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGljZW5zdXJlZXhhbWFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYXBwcm92ZUxpY2Vuc2UnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2xpY2Vuc2VJZCcsIGFwcHJvdmVMaWMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcHByb3ZlTGljZW5zZShmb3JtRGF0YSwgdHJ1ZSwgcHJvcHMuZmFjdWx0eUlkLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQsICcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5ZZXMsIGFwcHJvdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJyZWplY3RMaWNlbnNlXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJyZWplY3RMaWNlbnNlTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cInJlamVjdExpY2Vuc2VMYWJlbFwiPlJlamVjdCBMaWNlbnN1cmUgRXhhbSBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtjdXJyRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpY2Vuc3VyZWV4YW1hbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVqZWN0TGljZW5zZScpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlamVjdExpY2Vuc2VGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbGljZW5zZUlkJywgYXBwcm92ZUxpYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcHByb3ZlTGljZW5zZShmb3JtRGF0YSwgZmFsc2UsIHByb3BzLmZhY3VsdHlJZCwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2xpY2Vuc3VyZWV4YW1hbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkLCAnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGlkID0gXCJyZWplY3RMaWNlbnNlRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlamVjdGlvblJlbWFya3NcIj4gUmVhc29uL1JlbWFya3MgZm9yIFJlamVjdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiYXBwcm92ZXJSZW1hcmtzXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHJlbWFya3NcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9IG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWplY3RMaWNlbnNlJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHRcclxuXHRcclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGljZW5zdXJlRXhhbVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhZGRQdWJsaWNTZXJ2aWNlIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2FkZFB1YmxpY1NlcnZpY2UnXHJcblxyXG5jbGFzcyBQdWJsaWNTZXJ2aWNlQWNjb21wbGlzaG1lbnRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG4gICAgXHJcblx0cmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFB1YmxpY1NlcnZpY2VEZXRhaWxzID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJcIixcclxuICAgICAgICAgICAgb3JnYW5pemF0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgc3RhcnREYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBlbmREYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBwcm9vZjogXCJcIlxyXG4gICAgICAgIH1cclxuXHJcblx0XHRyZXR1cm4oXHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e1B1YmxpY1NlcnZpY2VEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHtyZXNldEZvcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHNGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB1YmxpY3NlcnZpY2VhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhZGRQdWJsaWNTZXJ2aWNlKGZvcm1EYXRhLCB0aGlzLnByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHVibGljc2VydmljZWFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY3NlcnZpY2VhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FjY29tcGxpc2htZW50JylcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxGb3JtIGlkID0gXCJwc0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNTZXJ2aWNlUG9zaXRpb25bXVwiPiBQb3NpdGlvbi9Sb2xlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicG9zaXRpb25cIiBpZCA9IFwicG9zaXRpb25cIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcG9zaXRpb24vcm9sZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUHVibGljU2VydmljZU9yZ2FuaXphdGlvbltdXCI+IE9yZ2FuaXphdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcIm9yZ2FuaXphdGlvblwiIGlkID0gXCJvcmdhbml6YXRpb25cIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgb3JnYW5pemF0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUHVibGljU2VydmljZUFjY29tcGxpc2htZW50U3RhcnREYXRlW11cIj4gU3RhcnQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInN0YXJ0RGF0ZVwiIGlkID0gXCJzdGFydERhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNTZXJ2aWNlQWNjb21wbGlzaG1lbnRFbmREYXRlW11cIj4gRW5kIERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJlbmREYXRlXCIgaWQgPSBcImVuZERhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNTZXJ2aWNlQWNjb21wbGlzaG1lbnRQcm9vZltdXCI+IFByb29mIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJwcm9vZlwiIGlkID0gXCJwcm9vZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNTZXJ2aWNlQWNjb21wbGlzaG1lbnRUeXBlW11cIj4gVHlwZSBvZiBDb250cmlidXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInR5cGVcIiBpZCA9IFwidHlwZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiV2l0aGluIFVQTVwiPldpdGhpbiBVUE08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIldpdGhpbiBQcm9cIj5Db250cmlidXRpb24gdG8gdGhlIFByb2Zlc3Npb248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIldpdGhpbiBOYXRcIj5Db250cmlidXRpb24gdG8gdGhlIE5hdGlvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiV2l0aGluIFdvclwiPkNvbnRyaWJ1dGlvbiB0byB0aGUgV29ybGQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlB1YmxpY1NlcnZpY2VBY2NvbXBsaXNobWVudERlc2NyaXB0aW9uW11cIj4gRGVzY3JpcHRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJkZXNjcmlwdGlvblwiIGlkID0gXCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVibGljU2VydmljZUFjY29tcGxpc2htZW50Rm9ybVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBQdWJsaWNTZXJ2aWNlQWNjb21wbGlzaG1lbnRGb3JtIGZyb20gJy4vcHVibGljLXNlcnZpY2UtYWNjb21wbGlzaG1lbnQtZm9ybSdcclxuaW1wb3J0IE5hbWVEaXNwbGF5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmFtZS1kaXNwbGF5J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXHJcblxyXG5pbXBvcnQgZG93bmxvYWRQcm9vZiBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Rvd25sb2FkUHJvb2YnXHJcbmltcG9ydCBkZWxldGVQdWJsaWNTZXJ2aWNlIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2RlbGV0ZVB1YmxpY1NlcnZpY2UnXHJcbmltcG9ydCB1cGRhdGVQdWJsaWNTZXJ2aWNlIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL3VwZGF0ZVB1YmxpY1NlcnZpY2UnXHJcbmltcG9ydCBhcHByb3ZlUHVibGljU2VydmljZSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9hcHByb3ZlUHVibGljU2VydmljZSdcclxuXHJcbmZ1bmN0aW9uIFB1YmxpY1NlcnZpY2VBY2NvbXBsaXNobWVudChwcm9wcyl7XHJcbiAgICBjb25zdCBuYW1lID0gcHJvcHMubmFtZVxyXG4gICAgbGV0IGRlbGV0ZVBTID0gMFxyXG4gICAgbGV0IGVkaXRQUyA9IDBcclxuICAgIGxldCBhcHByb3ZlUFNBID0gMFxyXG5cclxuICAgIGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgcHVibGljU2VydmljZUlkOiAwLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnJyxcclxuICAgICAgICBvcmdhbml6YXRpb246JycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogJycsXHJcbiAgICAgICAgZW5kRGF0ZTogJydcclxuICAgIH0pXHJcbiAgICBsZXQgdXBtID0gbnVsbFxyXG4gICAgbGV0IHBybyA9IG51bGxcclxuICAgIGxldCBuYXRcclxuICAgIGxldCB3b3JcclxuICAgIGlmKHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuICAgICAgICB1cG0gPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnR5cGUgPT0gJ1dpdGhpbiBVUE0nKXtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5ID0ge3Byb3BzLmNoaWxkcmVuLltrZXldLnB1YmxpY1NlcnZpY2VJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5wb3NpdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0ub3JnYW5pemF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uc3RhcnREYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5lbmREYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRQcm9vZihmaWxlLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9cIiArIHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2Z9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7IGNvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMuY2hpbGRyZW5ba2V5XS5wcm9vZiAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5vbmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYXBwcm92ZXJSZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMudmlld0ZsYWcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmZhY3VsdHlGbGFnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0UHVibGljU2VydmljZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHByb3BzLmNoaWxkcmVuLltrZXldLnB1YmxpY1NlcnZpY2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkoZWRpdFBTKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2RlbGV0ZVB1YmxpY1NlcnZpY2VcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlKHByb3BzLmNoaWxkcmVuLltrZXldLnB1YmxpY1NlcnZpY2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLmZhY3VsdHlGbGFnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjYXBwcm92ZVB1YmxpY1NlcnZpY2VcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLnB1YmxpY1NlcnZpY2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFwcHJvdmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNyZWplY3RQdWJsaWNTZXJ2aWNlXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFwcHJvdmUocHJvcHMuY2hpbGRyZW5ba2V5XS5wdWJsaWNTZXJ2aWNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5SZWplY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBybyA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLmNoaWxkcmVuW2tleV0udHlwZSA9PSAnV2l0aGluIFBybycpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXkgPSB7cHJvcHMuY2hpbGRyZW4uW2tleV0ucHVibGljU2VydmljZUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnBvc2l0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5vcmdhbml6YXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5zdGFydERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmVuZERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFByb29mKGZpbGUsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17XCJodHRwOi8vbG9jYWxob3N0OjMwMDEvXCIgKyBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7IGNvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ob25lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYXBwcm92ZXJSZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMudmlld0ZsYWcgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZmFjdWx0eUZsYWcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0UHVibGljU2VydmljZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQocHJvcHMuY2hpbGRyZW4uW2tleV0ucHVibGljU2VydmljZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5KGVkaXRQUylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlUHVibGljU2VydmljZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlbGV0ZShwcm9wcy5jaGlsZHJlbi5ba2V5XS5wdWJsaWNTZXJ2aWNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMuZmFjdWx0eUZsYWcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjYXBwcm92ZVB1YmxpY1NlcnZpY2VcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcHByb3ZlKHByb3BzLmNoaWxkcmVuW2tleV0ucHVibGljU2VydmljZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BcHByb3ZlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNyZWplY3RQdWJsaWNTZXJ2aWNlXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLnB1YmxpY1NlcnZpY2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+UmVqZWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmF0ID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMuY2hpbGRyZW5ba2V5XS50eXBlID09ICdXaXRoaW4gTmF0Jyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleSA9IHtwcm9wcy5jaGlsZHJlbi5ba2V5XS5wdWJsaWNTZXJ2aWNlSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0ucG9zaXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLm9yZ2FuaXphdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnN0YXJ0RGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZW5kRGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2YgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkUHJvb2YoZmlsZSwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJidG4gYnRuLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9cIiArIHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2Z9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3sgY29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2YgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5vbmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5hcHByb3ZlclJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy52aWV3RmxhZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmZhY3VsdHlGbGFnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdFB1YmxpY1NlcnZpY2VcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHByb3BzLmNoaWxkcmVuLltrZXldLnB1YmxpY1NlcnZpY2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEtleShlZGl0UFMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2RlbGV0ZVB1YmxpY1NlcnZpY2VcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGUocHJvcHMuY2hpbGRyZW4uW2tleV0ucHVibGljU2VydmljZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLmZhY3VsdHlGbGFnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2FwcHJvdmVQdWJsaWNTZXJ2aWNlXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLnB1YmxpY1NlcnZpY2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+QXBwcm92ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjcmVqZWN0UHVibGljU2VydmljZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFwcHJvdmUocHJvcHMuY2hpbGRyZW5ba2V5XS5wdWJsaWNTZXJ2aWNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlJlamVjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdvciA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLmNoaWxkcmVuW2tleV0udHlwZSA9PSAnV2l0aGluIFdvcicpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXkgPSB7cHJvcHMuY2hpbGRyZW4uW2tleV0ucHVibGljU2VydmljZUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnBvc2l0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5vcmdhbml6YXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5zdGFydERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmVuZERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFByb29mKGZpbGUsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17XCJodHRwOi8vbG9jYWxob3N0OjMwMDEvXCIgKyBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7IGNvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ob25lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYXBwcm92ZXJSZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMudmlld0ZsYWcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5mYWN1bHR5RmxhZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRQdWJsaWNTZXJ2aWNlXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdChwcm9wcy5jaGlsZHJlbi5ba2V5XS5wdWJsaWNTZXJ2aWNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkoZWRpdFBTKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNkZWxldGVQdWJsaWNTZXJ2aWNlXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlKHByb3BzLmNoaWxkcmVuLltrZXldLnB1YmxpY1NlcnZpY2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5mYWN1bHR5RmxhZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNhcHByb3ZlUHVibGljU2VydmljZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFwcHJvdmUocHJvcHMuY2hpbGRyZW5ba2V5XS5wdWJsaWNTZXJ2aWNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFwcHJvdmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3JlamVjdFB1YmxpY1NlcnZpY2VcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcHByb3ZlKHByb3BzLmNoaWxkcmVuW2tleV0ucHVibGljU2VydmljZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5SZWplY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcbiAgICAgICAgZWRpdFBTID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXREZWxldGUoaWQpIHtcclxuICAgICAgICBkZWxldGVQUyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QXBwcm92ZShpZCkge1xyXG4gICAgICAgIGFwcHJvdmVQU0EgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEtleSh4KSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICBpZihwcm9wcy5jaGlsZHJlbi5ba2V5XS5wdWJsaWNTZXJ2aWNlSWQgPT0geCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShwcm9wcy5jaGlsZHJlbi5ba2V5XSlcclxuICAgICAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuLltrZXldLmVuZERhdGUgPT0gXCJcIiB8fCBwcm9wcy5jaGlsZHJlbi5ba2V5XS5lbmREYXRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIGVuZERhdGU6ICcnfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdDxkaXY+XHJcblx0XHQ8aDIgYWxpZ24gPSBcImNlbnRlclwiPiBQdWJsaWMgU2VydmljZSBBY2NvbXBsaXNobWVudHMgPC9oMj5cclxuICAgICAgICA8TmFtZURpc3BsYXkgdW5pdCA9IHtwcm9wcy51bml0fSBwb3NpdGlvbj17cHJvcHMucG9zaXRpb259IGVtcGxveW1lbnRUeXBlPXtwcm9wcy5lbXBsb3ltZW50VHlwZX0+e3Byb3BzLm5hbWV9PC9OYW1lRGlzcGxheT5cclxuICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGlkPVwicHVibGljc2VydmljZWFsZXJ0XCIgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9fT48L2Rpdj5cclxuXHRcdDxkaXY+XHJcblx0XHQ8aDUgYWxpZ24gPSBcImNlbnRlclwiPldpdGhpbiBVUCBNYW5pbGEgPC9oNT5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvc2l0aW9uL1JvbGU8L3RoPlxyXG4gICAgICAgIFx0XHRcdCAgICA8dGg+T3JnYW5pemF0aW9uPC90aD5cclxuXHRcdCAgICAgICAgICBcdCAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhcnQgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbmQgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9vZjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+QXBwcm92ZXIgUmVtYXJrczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshcHJvcHMudmlld0ZsYWcgJiYgPHRoPkFjdGlvbjwvdGg+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VwbSA/IHVwbSA6IDx0ZCBjb2xzcGFuID0gXCI4XCI+PHAgYWxpZ24gPSBcImNlbnRlclwiPk5vIGRhdGEgYXZhaWxhYmxlITwvcD48L3RkPn0gXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuXHRcdDxiciAvPlxyXG5cdFx0PGg1IGFsaWduID0gXCJjZW50ZXJcIj4gQ29udHJpYnV0aW9ucyB0byBQcm9mZXNzaW9uIDwvaDU+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtc21cIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb3NpdGlvbi9Sb2xlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk9yZ2FuaXphdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGFydCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVuZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByb29mPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BcHByb3ZlciBSZW1hcmtzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFwcm9wcy52aWV3RmxhZyAmJiA8dGg+QWN0aW9uPC90aD59XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvID8gcHJvIDogPHRkIGNvbHNwYW4gPSBcIjhcIj48cCBhbGlnbiA9IFwiY2VudGVyXCI+Tm8gZGF0YSBhdmFpbGFibGUhPC9wPjwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuXHRcdDxiciAvPlxyXG5cdFx0PGg1IGFsaWduID0gXCJjZW50ZXJcIj4gQ29udHJpYnV0aW9ucyB0byB0aGUgTmF0aW9uIDwvaDU+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtc21cIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb3NpdGlvbi9Sb2xlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk9yZ2FuaXphdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGFydCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVuZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByb29mPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BcHByb3ZlciBSZW1hcmtzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFwcm9wcy52aWV3RmxhZyAmJiA8dGg+QWN0aW9uPC90aD59XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7bmF0ID8gbmF0IDogPHRkIGNvbHNwYW4gPSBcIjhcIj48cCBhbGlnbiA9IFwiY2VudGVyXCI+Tm8gZGF0YSBhdmFpbGFibGUhPC9wPjwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuXHRcdDxiciAvPlxyXG5cdFx0PGg1IGFsaWduID0gXCJjZW50ZXJcIj4gQ29udHJpYnV0aW9ucyB0byB0aGUgV29ybGQgPC9oNT5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvc2l0aW9uL1JvbGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+T3JnYW5pemF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXJ0IERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW5kIERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJvb2Y8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFwcHJvdmVyIFJlbWFya3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXByb3BzLnZpZXdGbGFnICYmIDx0aD5BY3Rpb248L3RoPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3IgPyB3b3IgOiA8dGQgY29sc3BhbiA9IFwiOFwiPjxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBkYXRhIGF2YWlsYWJsZSE8L3A+PC90ZD59XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmZhY3VsdHlGbGFnICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQdWJsaWNTZXJ2aWNlQWNjb21wbGlzaG1lbnRGb3JtIHRva2VuID0geyBwcm9wcy50b2tlbiB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICB9IFxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImVkaXRQdWJsaWNTZXJ2aWNlXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJlZGl0UHVibGljU2VydmljZUxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0UHVibGljU2VydmljZUxhYmVsXCI+VXBkYXRlIFB1YmxpYyBTZXJ2aWNlIEFjY29tcGxpc2htZW50IEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2N1cnJEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQU0Zvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwdWJsaWNTZXJ2aWNlSWQnLCBjdXJyRGF0YS5wdWJsaWNTZXJ2aWNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZScsIGN1cnJEYXRhLnR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHVibGljc2VydmljZWFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB1cGRhdGVQdWJsaWNTZXJ2aWNlKGZvcm1EYXRhLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNzZXJ2aWNlYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY3NlcnZpY2VhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FjY29tcGxpc2htZW50JylcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGlkID0gXCJlZGl0UFNGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlB1YmxpY1NlcnZpY2VQb3NpdGlvblVwZGF0ZVwiPiBQb3NpdGlvbi9Sb2xlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInBvc2l0aW9uXCIgaWQgPSBcInBvc2l0aW9uXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHBvc2l0aW9uL3JvbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUHVibGljU2VydmljZU9yZ2FuaXphdGlvblVwZGF0ZVwiPiBPcmdhbml6YXRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwib3JnYW5pemF0aW9uXCIgaWQgPSBcIm9yZ2FuaXphdGlvblwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBvcmdhbml6YXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUHVibGljU2VydmljZUFjY29tcGxpc2htZW50U3RhcnREYXRlVXBkYXRlXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwic3RhcnREYXRlXCIgaWQgPSBcInN0YXJ0RGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNTZXJ2aWNlQWNjb21wbGlzaG1lbnRFbmREYXRlVXBkYXRlXCI+IEVuZCBEYXRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImVuZERhdGVcIiBpZCA9IFwiZW5kRGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUHVibGljU2VydmljZUFjY29tcGxpc2htZW50RGVzY3JpcHRpb25VcGRhdGVcIj4gRGVzY3JpcHRpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZGVzY3JpcHRpb25cIiBpZCA9IFwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUHVibGljU2VydmljZUFjY29tcGxpc2htZW50UHJvb2ZVcGRhdGVcIj4gUHJvb2YgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJwcm9vZlwiIGlkID0gXCJwcm9vZlwiIHZhbHVlPXt1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfSBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdFB1YmxpY1NlcnZpY2UnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZGVsZXRlUHVibGljU2VydmljZVwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVsZXRlUHVibGljU2VydmljZUxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJkZWxldGVQdWJsaWNTZXJ2aWNlTGFiZWxcIj5EZWxldGUgUHVibGljIFNlcnZpY2UgQWNjb21wbGlzaG1lbnQgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHB1YmxpYyBzZXJ2aWNlIGFjY29tcGxpc2htZW50IGluZm9ybWF0aW9uPyA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPk5vLCBkb24ndCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHVibGljc2VydmljZWFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBkZWxldGVQdWJsaWNTZXJ2aWNlKGRlbGV0ZVBTLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNzZXJ2aWNlYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY3NlcnZpY2VhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FjY29tcGxpc2htZW50JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+WWVzLCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJhcHByb3ZlUHVibGljU2VydmljZVwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiYXBwcm92ZVB1YmxpY1NlcnZpY2VMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiYXBwcm92ZVB1YmxpY1NlcnZpY2VMYWJlbFwiPkFwcHJvdmUgUHVibGljIFNlcnZpY2UgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGFwcHJvdmUgdGhpcyBwdWJsaWMgc2VydmljZSBpbmZvcm1hdGlvbj8gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5ObywgZG9uJ3QgYXBwcm92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHVibGljc2VydmljZWFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhcHByb3ZlUHVibGljU2VydmljZScpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHVibGljU2VydmljZUlkJywgYXBwcm92ZVBTQSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcHByb3ZlUHVibGljU2VydmljZShmb3JtRGF0YSwgdHJ1ZSwgcHJvcHMuZmFjdWx0eUlkLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHVibGljc2VydmljZWFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNzZXJ2aWNlYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQsICcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlllcywgYXBwcm92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwicmVqZWN0UHVibGljU2VydmljZVwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwicmVqZWN0UHVibGljU2VydmljZUxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJyZWplY3RQdWJsaWNTZXJ2aWNlTGFiZWxcIj5SZWplY3QgUHVibGljIFNlcnZpY2UgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Y3VyckRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdWJsaWNzZXJ2aWNlYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlamVjdFB1YmxpY1NlcnZpY2UnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWplY3RQdWJsaWNTZXJ2aWNlRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3B1YmxpY1NlcnZpY2VJZCcsIGFwcHJvdmVQU0EpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBwcm92ZVB1YmxpY1NlcnZpY2UoZm9ybURhdGEsIGZhbHNlLCBwcm9wcy5mYWN1bHR5SWQsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNzZXJ2aWNlYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY3NlcnZpY2VhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZCwgJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpZCA9IFwicmVqZWN0UHVibGljU2VydmljZUZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJSZWplY3Rpb25SZW1hcmtzXCI+IFJlYXNvbi9SZW1hcmtzIGZvciBSZWplY3Rpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImFwcHJvdmVyUmVtYXJrc1wiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCByZW1hcmtzXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfSBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVqZWN0UHVibGljU2VydmljZScpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVibGljU2VydmljZUFjY29tcGxpc2htZW50XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIFB1YmxpY2F0aW9uRm9ybUF1dGhvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGR1cGxpY2F0ZUF1dGhvcnM6IFtdXHJcblx0XHR9XHJcblx0fVxyXG5cdGNsb25lKCl7XHJcblx0XHRsZXQgYXV0aG9ycyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZmFjdWx0eSkubWFwKGtleSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PG9wdGlvbiB2YWx1ZSA9IHt0aGlzLnByb3BzLmZhY3VsdHlba2V5XS5mYWN1bHR5SWR9Pnt0aGlzLnByb3BzLmZhY3VsdHlba2V5XS5sYXN0TmFtZSArICcsICcgKyB0aGlzLnByb3BzLmZhY3VsdHlba2V5XS5maXJzdE5hbWV9PC9vcHRpb24+IFxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0YXRlLmR1cGxpY2F0ZUF1dGhvcnMucHVzaCg8ZGl2PjxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNhdGlvbkF1dGhvckRQU01bXVwiPiBBdXRob3IgKGZyb20gRFBTTSkgPC9sYWJlbD5cclxuXHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC02XCIgbmFtZSA9IFwiUHVibGljYXRpb25BdXRob3JEUFNNW11cIiByZXF1aXJlZD5cclxuXHRcdFx0XHRcdHthdXRob3JzfVxyXG5cdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PjwvZGl2PilcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cclxuXHRcdH0pXHJcblx0fVxyXG5cdHJlbW92ZSgpe1xyXG5cdFx0dGhpcy5zdGF0ZS5kdXBsaWNhdGVBdXRob3JzLnBvcCgpXHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRsZXQgYXV0aG9ycyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZmFjdWx0eSkubWFwKGtleSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PG9wdGlvbiB2YWx1ZSA9IHt0aGlzLnByb3BzLmZhY3VsdHlba2V5XS5mYWN1bHR5SWR9Pnt0aGlzLnByb3BzLmZhY3VsdHlba2V5XS5sYXN0TmFtZSArICcsICcgKyB0aGlzLnByb3BzLmZhY3VsdHlba2V5XS5maXJzdE5hbWV9PC9vcHRpb24+IFxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4oPGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncm91cCBidG4tZ3JvdXAtc20gY29sLW1kLTJcIj5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQgPSBcIkFkZEF1dGhvclwiIG9uQ2xpY2sgPSB7KCkgPT4gdGhpcy5jbG9uZSgpfT4gQWRkIERQU00gQXV0aG9yIDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLWRhbmdlclwiIGlkID0gXCJSZW1vdmVBdXRob3JcIiBvbkNsaWNrID0geygpID0+IHRoaXMucmVtb3ZlKCl9PiBSZW1vdmUgYSBSb3cgPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlB1YmxpY2F0aW9uQXV0aG9yRFBTTVtdXCI+IEF1dGhvciAoZnJvbSBEUFNNKSA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBjb2wtbWQtNlwiIG5hbWUgPSBcIlB1YmxpY2F0aW9uQXV0aG9yRFBTTVtdXCIgcmVxdWlyZWQ+XHJcblx0XHRcdFx0XHRcdHthdXRob3JzfVxyXG5cdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PGRpdj5cclxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5kdXBsaWNhdGVBdXRob3JzfVxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1YmxpY2F0aW9uRm9ybUF1dGhvclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQdWJsaWNhdGlvbkZvcm1BdXRob3IgZnJvbSAnLi9wdWJsaWNhdGlvbi1mb3JtLWF1dGhvcidcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IGFkZFB1YmxpY2F0aW9uIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2FkZFB1YmxpY2F0aW9uJ1xyXG5cclxuY2xhc3MgUHVibGljYXRpb25Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBQdWJsaWNhdGlvbkRldGFpbHMgPSB7XHJcblx0XHRcdHRpdGxlOiBcIlwiLFxyXG5cdFx0XHRjaXRhdGlvbjogXCJcIixcclxuXHRcdFx0dXJsOiBcIlwiLFxyXG5cdFx0XHRwdWJsaWNhdGlvbkRhdGU6IFwiXCIsXHJcblx0XHRcdG5vbkZhY3VsdHlBdXRob3JzOiBcIlwiXHJcblx0XHR9XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxGb3JtaWtcclxuXHRcdFx0XHRpbml0aWFsVmFsdWVzPXtQdWJsaWNhdGlvbkRldGFpbHN9XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywge3Jlc2V0Rm9ybX0pID0+IHtcclxuICAgICAgICAgICAgICAgIFx0bGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHViRm9ybScpXHJcbiAgICAgICAgICAgICAgICBcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cclxuXHRcdFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHVibGljYXRpb25hbGVydFwiKVxyXG5cdFx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IGFkZFB1YmxpY2F0aW9uKGZvcm1EYXRhLCB0aGlzLnByb3BzLnRva2VuKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG5cdFx0XHRcdFx0XHRhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcblx0XHRcdFx0XHRcdGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuXHRcdFx0XHRcdFx0YWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuXHRcdFx0XHRcdFx0aWYocmVzLmVycm9yKSB2YWx1ZXMubWVzc2FnZSA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcblx0XHRcdFx0XHRcdGVsc2UgdmFsdWVzLm1lc3NhZ2UgPSByZXMubWVzc2FnZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKFwiI3B1YmxpY2F0aW9uYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdCQoXCIjcHVibGljYXRpb25hbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgXHRyZXNldEZvcm0oKVxyXG4gICAgICAgICAgICAgICAgXHRSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQnKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdFx0XHRcdDxGb3JtIGlkID0gXCJwdWJGb3JtXCI+XHJcblx0XHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNhdGlvbltdXCI+IFB1YmxpY2F0aW9uIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcHVibGljYXRpb24gbmFtZS90aXRsZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNhdGlvbkNpdGF0aW9uW11cIj4gQ2l0YXRpb24gPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJjaXRhdGlvblwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBmdWxsIGNpdGF0aW9uIGZvciBwdWJsaWNhdGlvblwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPiBcclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNhdGlvblVSTFtdXCI+IFVSTCA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInVybFwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBwdWJsaWNhdGlvbiBVUkxcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUHVibGlzaERhdGVbXVwiPiBEYXRlIFB1Ymxpc2hlZCA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInB1YmxpY2F0aW9uRGF0ZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlB1YmxpY2F0aW9uUHJvb2ZbXVwiPiBQcm9vZiA8L2xhYmVsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJwcm9vZlwiIGlkID0gXCJwcm9vZlwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNhdGlvbkF1dGhvck5vbkRQU01bXVwiPiBBdXRob3JzIChub24tRFBTTSkgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJub25GYWN1bHR5QXV0aG9yc1wiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBhbGwgYXV0aG9ycyBvdXRzaWRlIERQU00gKHNlcGFyYXRlIG5hbWVzIHdpdGggY29tbWFzKVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxQdWJsaWNhdGlvbkZvcm1BdXRob3IgZmFjdWx0eSA9IHt0aGlzLnByb3BzLmZhY3VsdHl9IC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHR5cGUgPSBcInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L0Zvcm1paz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1YmxpY2F0aW9uRm9ybVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBQdWJsaWNhdGlvbkZvcm0gZnJvbSAnLi9wdWJsaWNhdGlvbi1mb3JtJ1xyXG5pbXBvcnQgTmFtZURpc3BsYXkgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYW1lLWRpc3BsYXknXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuXHJcbmltcG9ydCBkb3dubG9hZFByb29mIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvZG93bmxvYWRQcm9vZidcclxuaW1wb3J0IGRlbGV0ZVB1YmxpY2F0aW9uIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2RlbGV0ZVB1YmxpY2F0aW9uJ1xyXG5pbXBvcnQgdXBkYXRlUHVibGljYXRpb24gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvdXBkYXRlUHVibGljYXRpb24nXHJcbmltcG9ydCBhcHByb3ZlUHVibGljYXRpb24gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvYXBwcm92ZVB1YmxpY2F0aW9uJ1xyXG5cclxuZnVuY3Rpb24gUHVibGljYXRpb24ocHJvcHMpe1xyXG4gICAgbGV0IGNvbnRlbnQgXHJcbiAgICBsZXQgZGVsZXRlUHViID0gMFxyXG4gICAgbGV0IGVkaXRQdWIgPSAwXHJcbiAgICBsZXQgYXBwcm92ZVB1YiA9IDBcclxuICAgIGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgcHVibGljYXRpb25JZDogMCxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlOicnLFxyXG4gICAgICAgIGNpdGF0aW9uOiAnJyxcclxuICAgICAgICB1cmw6ICcnLFxyXG4gICAgICAgIG5vbkZhY3VsdHlBdXRob3JzOiAnJ1xyXG4gICAgfSlcclxuICAgIGlmKHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHsgXHJcbiAgICAgICAgY29udGVudCA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgbGV0IHB1YiA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV9wdWJsaXNoZXJzO1xyXG4gICAgICAgICAgICBsZXQgZHBzbWF1dGggPSBbXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHViLmZvckVhY2goKGF1dGgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5rID0gXCIvZmFjdWx0eS92aWV3L1wiICsgYXV0aC5mYWN1bHR5SWRcclxuICAgICAgICAgICAgICAgIGRwc21hdXRoLnB1c2goPGEgaHJlZiA9IHtsaW5rfT57YXV0aC5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lICsgJyAnICsgYXV0aC5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWUgKyAnLCAnfTwvYT4pICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ciBrZXkgPSB7cHJvcHMuY2hpbGRyZW4uW2tleV0ucHVibGljYXRpb25JZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnRpdGxlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGRwc21hdXRoIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbltrZXldLm5vbkZhY3VsdHlBdXRob3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnB1YmxpY2F0aW9uRGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS51cmx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uY2l0YXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwdWIpLm1hcChhdXRoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHB1YlthdXRoXS5mYWN1bHR5SWQgPT0gcHJvcHMuZmFjdWx0eUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHViW2F1dGhdLnByb29mKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBwdWJbYXV0aF0ucHJvb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkUHJvb2YoZmlsZSwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJidG4gYnRuLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9cIiArIHB1YlthdXRoXS5wcm9vZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7eyBjb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8ZGl2Pk5vbmU8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHB1YikubWFwKGF1dGggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHViW2F1dGhdLmZhY3VsdHlJZCA9PSBwcm9wcy5mYWN1bHR5SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJbYXV0aF0uc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5mYWN1bHR5RmxhZyAmJiAhcHJvcHMudmlld0ZsYWcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRQdWJsaWNhdGlvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHByb3BzLmNoaWxkcmVuLltrZXldLnB1YmxpY2F0aW9uSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5KGVkaXRQdWIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlUHVibGljYXRpb25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlKHByb3BzLmNoaWxkcmVuLltrZXldLnB1YmxpY2F0aW9uSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5mYWN1bHR5RmxhZyAmJiAhcHJvcHMudmlld0ZsYWcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNhcHByb3ZlUHVibGljYXRpb25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLnB1YmxpY2F0aW9uSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BcHByb3ZlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjcmVqZWN0UHVibGljYXRpb25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLnB1YmxpY2F0aW9uSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5SZWplY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKTsgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnRlbnQgPSA8dGQgY29sc3BhbiA9IFwiN1wiPjxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBkYXRhIGF2YWlsYWJsZSE8L3A+PC90ZD5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcbiAgICAgICAgZWRpdFB1YiA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlKGlkKSB7XHJcbiAgICAgICAgZGVsZXRlUHViID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBcHByb3ZlKGlkKSB7XHJcbiAgICAgICAgYXBwcm92ZVB1YiA9IGlkXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEtleSh4KSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICBpZihwcm9wcy5jaGlsZHJlbi5ba2V5XS5wdWJsaWNhdGlvbklkID09IHgpIHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEocHJvcHMuY2hpbGRyZW4uW2tleV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuICAgICAgICAgICAgPGgyIGFsaWduID0gXCJjZW50ZXJcIj4gUHVibGljYXRpb25zIDwvaDI+XHJcbiAgICAgICAgICAgIDxOYW1lRGlzcGxheSB1bml0ID0ge3Byb3BzLnVuaXR9IHBvc2l0aW9uPXtwcm9wcy5wb3NpdGlvbn0gZW1wbG95bWVudFR5cGU9e3Byb3BzLmVtcGxveW1lbnRUeXBlfT57cHJvcHMubmFtZX08L05hbWVEaXNwbGF5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJwdWJsaWNhdGlvbmFsZXJ0XCIgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9fT48L2Rpdj5cclxuXHRcdFx0PGRpdj5cclxuXHQ8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLXNtXCI+XHJcblx0XHQ8dGJvZHk+XHJcblx0XHRcdDx0cj5cclxuXHRcdFx0XHQ8dGg+UHVibGljYXRpb248L3RoPlxyXG5cdFx0XHRcdDx0aD5BdXRob3IvczwvdGg+XHJcblx0XHRcdFx0PHRoPlB1YmxpY2F0aW9uIERhdGU8L3RoPlxyXG5cdFx0XHRcdDx0aD5VUkw8L3RoPlxyXG5cdFx0XHRcdDx0aD5DaXRhdGlvbjwvdGg+XHJcblx0XHRcdFx0PHRoPlByb29mPC90aD5cclxuXHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgIHshcHJvcHMudmlld0ZsYWcgJiYgPHRoPkFjdGlvbjwvdGg+fVxyXG5cdFx0XHQ8L3RyPlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuXHRcdDwvdGJvZHk+XHJcblx0PC90YWJsZT5cdFxyXG5cdDwvZGl2PlxyXG4gICAgeyBcclxuICAgICAgICBwcm9wcy5mYWN1bHR5RmxhZyAmJiBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UHVibGljYXRpb25Gb3JtIGZhY3VsdHkgPSB7cHJvcHMuZmFjdWx0eX0gdG9rZW4gPSB7cHJvcHMudG9rZW59IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG5cdCAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImVkaXRQdWJsaWNhdGlvblwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZWRpdFB1YmxpY2F0aW9uTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0UHVibGljYXRpb25MYWJlbFwiPlVwZGF0ZSBQdWJsaWNhdGlvbiBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Y3VyckRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UHViRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHVibGljYXRpb25JZCcsIGN1cnJEYXRhLnB1YmxpY2F0aW9uSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB1YmxpY2F0aW9uYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB1cGRhdGVQdWJsaWNhdGlvbihmb3JtRGF0YSwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY2F0aW9uYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNhdGlvbmFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hY2NvbXBsaXNobWVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gaWQgPSBcImVkaXRQdWJGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNhdGlvblVwZGF0ZVwiPiBQdWJsaWNhdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHB1YmxpY2F0aW9uIG5hbWUvdGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNhdGlvbkNpdGF0aW9uVXBkYXRlXCI+IENpdGF0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiY2l0YXRpb25cIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgZnVsbCBjaXRhdGlvbiBmb3IgcHVibGljYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNhdGlvblVSTFVwZGF0ZVwiPiBVUkwgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJ1cmxcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcHVibGljYXRpb24gVVJMXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUHVibGlzaERhdGVVcGRhdGVcIj4gRGF0ZSBQdWJsaXNoZWQgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJwdWJsaWNhdGlvbkRhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNhdGlvbkF1dGhvck5vbkRQU01VcGRhdGVcIj4gQXV0aG9ycyAobm9uLURQU00pIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibm9uRmFjdWx0eUF1dGhvcnNcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgYWxsIGF1dGhvcnMgb3V0c2lkZSBEUFNNIChzZXBhcmF0ZSBuYW1lcyB3aXRoIGNvbW1hcylcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJQdWJsaWNhdGlvblByb29mVXBkYXRlXCI+IFByb29mIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJwcm9vZlwiIHZhbHVlPXt1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30gb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0UHVibGljYXRpb24nKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZGVsZXRlUHVibGljYXRpb25cIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImRlbGV0ZVB1YmxpY2F0aW9uTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJkZWxldGVQdWJsaWNhdGlvbkxhYmVsXCI+RGVsZXRlIFB1YmxpY2F0aW9uIEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHVibGljYXRpb24gaW5mb3JtYXRpb24/IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Tm8sIGRvbid0IGRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB1YmxpY2F0aW9uYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBkZWxldGVQdWJsaWNhdGlvbihkZWxldGVQdWIsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHVibGljYXRpb25hbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY2F0aW9uYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hY2NvbXBsaXNobWVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImFwcHJvdmVQdWJsaWNhdGlvblwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiYXBwcm92ZVB1YmxpY2F0aW9uTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJhcHByb3ZlUHVibGljYXRpb25MYWJlbFwiPkFwcHJvdmUgUHVibGljYXRpb24gSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBhcHByb3ZlIHRoaXMgcHVibGljYXRpb24gaW5mb3JtYXRpb24/IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Tm8sIGRvbid0IGFwcHJvdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHVibGljYXRpb25hbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2FwcHJvdmVQdWJsaWNhdGlvbicpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHVibGljYXRpb25JZCcsIGFwcHJvdmVQdWIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcHByb3ZlUHVibGljYXRpb24oZm9ybURhdGEsIHRydWUsIHByb3BzLmZhY3VsdHlJZCwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY2F0aW9uYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNhdGlvbmFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQsICcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5ZZXMsIGFwcHJvdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cInJlamVjdFB1YmxpY2F0aW9uXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJyZWplY3RQdWJsaWNhdGlvbkxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwicmVqZWN0UHVibGljYXRpb25MYWJlbFwiPlJlamVjdCBQdWJsaWNhdGlvbiBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Y3VyckRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB1YmxpY2F0aW9uYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWplY3RQdWJsaWNhdGlvbicpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVqZWN0UHViRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHVibGljYXRpb25JZCcsIGFwcHJvdmVQdWIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcHByb3ZlUHVibGljYXRpb24oZm9ybURhdGEsIGZhbHNlLCBwcm9wcy5mYWN1bHR5SWQsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNhdGlvbmFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHVibGljYXRpb25hbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkLCAnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpZCA9IFwicmVqZWN0UHViRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVqZWN0aW9uUmVtYXJrc1wiPiBSZWFzb24vUmVtYXJrcyBmb3IgUmVqZWN0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiYXBwcm92ZXJSZW1hcmtzXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHJlbWFya3NcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9IG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVqZWN0UHVibGljYXRpb24nKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdWJsaWNhdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBSZXNlYXJjaEdyYW50Rm9ybUF1dGhvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGR1cGxpY2F0ZUF1dGhvcnM6IFtdXHJcblx0XHR9XHJcblx0fVxyXG5cdGNsb25lKCl7XHJcblx0XHRsZXQgYXV0aG9ycyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZmFjdWx0eSkubWFwKGtleSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PG9wdGlvbiB2YWx1ZSA9IHt0aGlzLnByb3BzLmZhY3VsdHlba2V5XS5mYWN1bHR5SWR9Pnt0aGlzLnByb3BzLmZhY3VsdHlba2V5XS5sYXN0TmFtZSArICcsICcgKyB0aGlzLnByb3BzLmZhY3VsdHlba2V5XS5maXJzdE5hbWV9PC9vcHRpb24+IFxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0YXRlLmR1cGxpY2F0ZUF1dGhvcnMucHVzaCg8ZGl2PjxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJSZXNlYXJjaEF1dGhvckRQU01bXVwiPiBSZXNlYXJjaGVyIChmcm9tIERQU00pIDwvbGFiZWw+XHJcblx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBjb2wtbWQtNlwiIG5hbWUgPSBcIlJlc2VhcmNoQXV0aG9yRFBTTVtdXCIgcmVxdWlyZWQ+XHJcblx0XHRcdFx0XHR7YXV0aG9yc31cclxuXHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj48L2Rpdj4pXHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHJcblx0XHR9KVxyXG5cdH1cclxuXHRyZW1vdmUoKXtcclxuXHRcdHRoaXMuc3RhdGUuZHVwbGljYXRlQXV0aG9ycy5wb3AoKVxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblxyXG5cdFx0fSlcclxuXHR9XHJcblx0cmVuZGVyKCl7XHRcclxuXHRcdGxldCBhdXRob3JzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5mYWN1bHR5KS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlID0ge3RoaXMucHJvcHMuZmFjdWx0eVtrZXldLmZhY3VsdHlJZH0+e3RoaXMucHJvcHMuZmFjdWx0eVtrZXldLmxhc3ROYW1lICsgJywgJyArIHRoaXMucHJvcHMuZmFjdWx0eVtrZXldLmZpcnN0TmFtZX08L29wdGlvbj4gXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybig8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbSBjb2wtbWQtMlwiPlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIiBpZCA9IFwiQWRkQXV0aG9yXCIgb25DbGljayA9IHsoKSA9PiB0aGlzLmNsb25lKCl9PiBBZGQgUmVzZWFyY2hlciA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1kYW5nZXJcIiBpZCA9IFwiUmVtb3ZlQXV0aG9yXCIgb25DbGljayA9IHsoKSA9PiB0aGlzLnJlbW92ZSgpfT4gUmVtb3ZlIGEgUm93IDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC02XCI+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoQXV0aG9yRFBTTVtdXCI+IFJlc2VhcmNoZXIgKGZyb20gRFBTTSkgPC9sYWJlbD5cclxuXHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIGNvbC1tZC02XCIgbmFtZSA9IFwiUmVzZWFyY2hBdXRob3JEUFNNW11cIiByZXF1aXJlZD5cclxuXHRcdFx0XHRcdHthdXRob3JzfVxyXG5cdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdj5cclxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5kdXBsaWNhdGVBdXRob3JzfVxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VhcmNoR3JhbnRGb3JtQXV0aG9yXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlc2VhcmNoR3JhbnRGb3JtQXV0aG9yIGZyb20gJy4vcmVzZWFyY2gtZ3JhbnQtZm9ybS1hdXRob3InXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhZGRSZXNlYXJjaCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9hZGRSZXNlYXJjaCdcclxuXHJcbmNsYXNzIFJlc2VhcmNoR3JhbnRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBSZXNlYXJjaERldGFpbHMgPSB7XHJcblx0XHRcdHJlc2VhcmNoTmFtZTogXCJcIixcclxuXHRcdFx0Z3JhbnRlcjogXCJcIixcclxuXHRcdFx0YW1vdW50OiBcIlwiLFxyXG5cdFx0XHRwcm9qZWN0ZWRTdGFydDogXCJcIixcclxuXHRcdFx0cHJvamVjdGVkRW5kOiBcIlwiLFxyXG5cdFx0XHRhY3R1YWxTdGFydDogXCJcIixcclxuXHRcdFx0YWN0dWFsRW5kOiBcIlwiLFxyXG5cdFx0XHRyZXNlYXJjaFByb2dyZXNzOiBcIlwiLFxyXG5cdFx0XHRub25GYWN1bHR5UmVzZWFyY2hlcnM6IFwiXCJcclxuXHRcdH1cclxuXHRcdHJldHVybihcclxuXHRcdFx0PEZvcm1pa1xyXG5cdFx0XHRcdGluaXRpYWxWYWx1ZXM9e1Jlc2VhcmNoRGV0YWlsc31cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7cmVzZXRGb3JtfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHRsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNGb3JtJylcclxuICAgICAgICAgICAgICAgIFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXHJcblxyXG4gICAgICAgICAgICAgICAgXHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoYWxlcnRcIilcclxuXHRcdFx0XHRcdGxldCByZXMgPSBhd2FpdCBhZGRSZXNlYXJjaChmb3JtRGF0YSwgdGhpcy5wcm9wcy50b2tlbilcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuXHRcdFx0XHRcdFx0YWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG5cdFx0XHRcdFx0XHRhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcblx0XHRcdFx0XHRcdGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcblx0XHRcdFx0XHRcdGlmKHJlcy5lcnJvcikgdmFsdWVzLm1lc3NhZ2UgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRlbHNlIHZhbHVlcy5tZXNzYWdlID0gcmVzLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JChcIiNwdWJsaWNhdGlvbmFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHQkKFwiI3B1YmxpY2F0aW9uYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgXHRyZXNldEZvcm0oKVxyXG4gICAgICAgICAgICAgICAgXHRSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQnKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdFx0XHRcdDxGb3JtIGlkID0gXCJyZXNGb3JtXCI+XHJcblx0XHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJSZXNlYXJjaFtdXCI+IFJlc2VhcmNoIFByb2plY3QgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJyZXNlYXJjaE5hbWVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcmVzZWFyY2ggbmFtZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hTcG9uc29yW11cIj4gU3BvbnNvciA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImdyYW50ZXJcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgc3BvbnNvclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hBbW91bnRbXVwiPiBBbW91bnQgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJhbW91bnRcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgYW1vdW50XCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMlwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJSZXNlYXJjaFByb29mW11cIj4gUHJvb2YgPC9sYWJlbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJwcm9vZlwiIGlkID0gXCJwcm9vZlwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdCA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoQXV0aG9yTm9uRFBTTVtdXCI+IFJlc2VhcmNoZXJzIChub24tRFBTTSkgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJub25GYWN1bHR5UmVzZWFyY2hlcnNcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgYWxsIGF1dGhvcnMgb3V0c2lkZSBEUFNNIChzZXBhcmF0ZSBuYW1lcyB3aXRoIGNvbW1hcylcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJSZXNlYXJjaFByb2plY3RlZFN0YXJ0RGF0ZVtdXCI+IFN0YXJ0IERhdGUgKFByb2plY3RlZCkgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJwcm9qZWN0ZWRTdGFydFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJSZXNlYXJjaFByb2plY3RlZEVuZERhdGVbXVwiPiBFbmQgRGF0ZSAoUHJvamVjdGVkKSA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInByb2plY3RlZEVuZFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJSZXNlYXJjaFN0YXJ0RGF0ZVtdXCI+IFN0YXJ0IERhdGUgKEFjdHVhbCkgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJhY3R1YWxTdGFydFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJSZXNlYXJjaEVuZERhdGVbXVwiPiBFbmQgRGF0ZSAoQWN0dWFsKSA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImFjdHVhbEVuZFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hQcm9ncmVzc1tdXCI+IFJlc2VhcmNoIFByb2dyZXNzIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgYXMgPSBcInNlbGVjdFwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwicmVzZWFyY2hQcm9ncmVzc1wiIHJlcXVpcmVkPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ8b3B0aW9uIHZhbHVlID0gXCJPbmdvaW5nXCI+T25nb2luZzwvb3B0aW9uPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ8b3B0aW9uIHZhbHVlID0gXCJDb21wbGV0ZWRcIj5Db21wbGV0ZWQ8L29wdGlvbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ8L0ZpZWxkPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8UmVzZWFyY2hHcmFudEZvcm1BdXRob3IgZmFjdWx0eSA9IHt0aGlzLnByb3BzLmZhY3VsdHl9IC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHR5cGUgPSBcInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L0Zvcm1paz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VhcmNoR3JhbnRGb3JtXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlc2VhcmNoR3JhbnRGb3JtIGZyb20gJy4vcmVzZWFyY2gtZ3JhbnQtZm9ybSdcclxuaW1wb3J0IE5hbWVEaXNwbGF5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmFtZS1kaXNwbGF5J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXHJcblxyXG5pbXBvcnQgZG93bmxvYWRQcm9vZiBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Rvd25sb2FkUHJvb2YnXHJcbmltcG9ydCBkZWxldGVSZXNlYXJjaCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9kZWxldGVSZXNlYXJjaCdcclxuaW1wb3J0IHVwZGF0ZVJlc2VhcmNoIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL3VwZGF0ZVJlc2VhcmNoJ1xyXG5pbXBvcnQgYXBwcm92ZVJlc2VhcmNoR3JhbnQgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvYXBwcm92ZVJlc2VhcmNoR3JhbnQnXHJcblxyXG5mdW5jdGlvbiBSZXNlYXJjaEdyYW50KHByb3BzKXtcclxuICAgIGxldCBjb250ZW50IFxyXG4gICAgbGV0IGRlbGV0ZVJlcyA9IDBcclxuICAgIGxldCBlZGl0UmVzID0gMFxyXG4gICAgbGV0IGFwcHJvdmVSRyA9IDBcclxuICAgIGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgcmVzZWFyY2hJZDogMCxcclxuICAgICAgICByZXNlYXJjaE5hbWU6ICcnLFxyXG4gICAgICAgIGdyYW50ZXI6JycsXHJcbiAgICAgICAgYW1vdW50OiAnJyxcclxuICAgICAgICBwcm9qZWN0ZWRTdGFydDogJycsXHJcbiAgICAgICAgcHJvamVjdGVkRW5kOiAnJyxcclxuICAgICAgICBhY3R1YWxTdGFydDogJycsXHJcbiAgICAgICAgYWN0dWFsRW5kOiAnJyxcclxuICAgICAgICByZXNlYXJjaFByb2dyZXNzOiAnJyxcclxuICAgICAgICBub25GYWN1bHR5UmVzZWFyY2hlcnM6ICcnXHJcbiAgICB9KVxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7IFxyXG4gICAgICAgICAgICBsZXQgcmVzID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3Jlc2VhcmNoZXJzO1xyXG4gICAgICAgICAgICBsZXQgZHBzbWF1dGggPSBbXVxyXG5cclxuICAgICAgICAgICAgcmVzLmZvckVhY2goKGF1dGgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5rID0gXCIvZmFjdWx0eS92aWV3L1wiICsgYXV0aC5mYWN1bHR5SWRcclxuICAgICAgICAgICAgICAgIGRwc21hdXRoLnB1c2goPGEgaHJlZiA9IHtsaW5rfT57YXV0aC5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lICsgJyAnICsgYXV0aC5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWUgKyAnLCAnfTwvYT4pICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS5yZXNlYXJjaElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5yZXNlYXJjaE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkcHNtYXV0aCB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVuW2tleV0ubm9uRmFjdWx0eVJlc2VhcmNoZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZ3JhbnRlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYW1vdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5wcm9qZWN0ZWRTdGFydH0gdG8ge3Byb3BzLmNoaWxkcmVuW2tleV0ucHJvamVjdGVkRW5kfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5hY3R1YWxTdGFydH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYWN0dWFsRW5kfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5yZXNlYXJjaFByb2dyZXNzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXMpLm1hcChhdXRoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNbYXV0aF0uZmFjdWx0eUlkID09IHByb3BzLmZhY3VsdHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNbYXV0aF0ucHJvb2YpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSByZXNbYXV0aF0ucHJvb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFByb29mKGZpbGUsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1wiaHR0cDovL2xvY2FsaG9zdDozMDAxL1wiICsgcmVzW2F1dGhdLnByb29mfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7eyBjb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPGRpdj5Ob25lPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXMpLm1hcChhdXRoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNbYXV0aF0uZmFjdWx0eUlkID09IHByb3BzLmZhY3VsdHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzW2F1dGhdLnN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5mYWN1bHR5RmxhZyAmJiAhcHJvcHMudmlld0ZsYWcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdFJlc2VhcmNoR3JhbnRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQocHJvcHMuY2hpbGRyZW4uW2tleV0ucmVzZWFyY2hJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5KGVkaXRSZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNkZWxldGVSZXNlYXJjaEdyYW50XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGUocHJvcHMuY2hpbGRyZW4uW2tleV0ucmVzZWFyY2hJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLnZpZXdGbGFnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNhcHByb3ZlUmVzZWFyY2hHcmFudFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLnJlc2VhcmNoSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+QXBwcm92ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNyZWplY3RSZXNlYXJjaEdyYW50XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcHByb3ZlKHByb3BzLmNoaWxkcmVuW2tleV0ucmVzZWFyY2hJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5SZWplY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnRlbnQgPSA8dGQgY29sc3BhbiA9IFwiMTBcIj48cCBhbGlnbiA9IFwiY2VudGVyXCI+Tm8gZGF0YSBhdmFpbGFibGUhPC9wPjwvdGQ+XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RWRpdChpZCkge1xyXG4gICAgICAgIGVkaXRSZXMgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZShpZCkge1xyXG4gICAgICAgIGRlbGV0ZVJlcyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QXBwcm92ZShpZCkge1xyXG4gICAgICAgIGFwcHJvdmVSRyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0S2V5KHgpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuLltrZXldLnJlc2VhcmNoSWQgPT0geCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShwcm9wcy5jaGlsZHJlbi5ba2V5XSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgYWxpZ24gPSBcImNlbnRlclwiPiBSZXNlYXJjaCBHcmFudHMgPC9oMj5cclxuICAgICAgICAgICAgPE5hbWVEaXNwbGF5IHVuaXQgPSB7cHJvcHMudW5pdH0gcG9zaXRpb249e3Byb3BzLnBvc2l0aW9ufSBlbXBsb3ltZW50VHlwZT17cHJvcHMuZW1wbG95bWVudFR5cGV9Pntwcm9wcy5uYW1lfTwvTmFtZURpc3BsYXk+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIiBpZD1cInJlc2VhcmNoYWxlcnRcIiBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIn19PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cdDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtc21cIj5cclxuXHRcdDx0Ym9keT5cclxuXHRcdFx0PHRyPlxyXG5cdFx0XHRcdDx0aD5SZXNlYXJjaCBQcm9qZWN0PC90aD5cclxuXHRcdFx0XHQ8dGg+UmVzZWFyY2hlci9zPC90aD5cclxuXHRcdFx0XHQ8dGg+U3BvbnNvcjwvdGg+XHJcblx0XHRcdFx0PHRoPkFtb3VudDwvdGg+XHJcblx0XHRcdFx0PHRoPlByb2plY3RlZCBEdXJhdGlvbjwvdGg+XHJcblx0XHRcdFx0PHRoPlN0YXJ0IERhdGU8L3RoPlxyXG5cdFx0XHRcdDx0aD5FbmQgRGF0ZTwvdGg+XHJcblx0XHRcdFx0PHRoPlJlc2VhcmNoIFByb2dyZXNzPC90aD5cclxuXHRcdFx0XHQ8dGg+UHJvb2Y8L3RoPlxyXG5cdFx0XHRcdDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgeyFwcm9wcy52aWV3RmxhZyAmJiA8dGg+QWN0aW9uPC90aD59XHJcblx0XHRcdDwvdHI+XHJcbiAgICAgICAgICAgIHtjb250ZW50fVxyXG5cdFx0PC90Ym9keT5cclxuXHQ8L3RhYmxlPlx0XHJcblx0PC9kaXY+XHJcbiAgICB7IFxyXG4gICAgICAgIHByb3BzLmZhY3VsdHlGbGFnICYmXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFJlc2VhcmNoR3JhbnRGb3JtIGZhY3VsdHkgPSB7cHJvcHMuZmFjdWx0eX0gdG9rZW4gPSB7cHJvcHMudG9rZW59IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZWRpdFJlc2VhcmNoR3JhbnRcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImVkaXRSZXNlYXJjaEdyYW50TGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImVkaXRSZXNlYXJjaEdyYW50TGFiZWxcIj5VcGRhdGUgUmVzZWFyY2ggR3JhbnQgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Y3VyckRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFJlc0Zvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZXNlYXJjaElkJywgY3VyckRhdGEucmVzZWFyY2hJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB1cGRhdGVSZXNlYXJjaChmb3JtRGF0YSwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcmVzZWFyY2hhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcmVzZWFyY2hhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FjY29tcGxpc2htZW50JylcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGlkID0gXCJlZGl0UmVzRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoVXBkYXRlXCI+IFJlc2VhcmNoIFByb2plY3QgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJlc2VhcmNoTmFtZVwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCByZXNlYXJjaCBuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoU3BvbnNvclVwZGF0ZVwiPiBTcG9uc29yIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJncmFudGVyXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHNwb25zb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hBbW91bnRVcGRhdGVcIj4gQW1vdW50IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJhbW91bnRcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoU3RhcnREYXRlVXBkYXRlXCI+IFN0YXJ0IERhdGUgKEFjdHVhbCkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImFjdHVhbFN0YXJ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoRW5kRGF0ZVVwZGF0ZVwiPiBFbmQgRGF0ZSAoQWN0dWFsKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiYWN0dWFsRW5kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoUHJvamVjdGVkU3RhcnREYXRlVXBkYXRlXCI+IFN0YXJ0IERhdGUgKFByb2plY3RlZCkgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInByb2plY3RlZFN0YXJ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoUHJvamVjdGVkRW5kRGF0ZVVwZGF0ZVwiPiBFbmQgRGF0ZSAoUHJvamVjdGVkKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwicHJvamVjdGVkRW5kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoUHJvZ3Jlc3NVcGRhdGVcIj4gUHJvZ3Jlc3MgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJlc2VhcmNoUHJvZ3Jlc3NcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcHJvZ3Jlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hBdXRob3JOb25EUFNNVXBkYXRlXCI+IEF1dGhvcnMgKG5vbi1EUFNNKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibm9uRmFjdWx0eVJlc2VhcmNoZXJzXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IGFsbCBhdXRob3JzIG91dHNpZGUgRFBTTSAoc2VwYXJhdGUgbmFtZXMgd2l0aCBjb21tYXMpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoQXV0aG9yRFBTTVVwZGF0ZVwiPiBBdXRob3JzIChEUFNNKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiUmVzZWFyY2hBdXRob3JEUFNNVXBkYXRlXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IGF1dGhvciAobXVzdCBiZSBmcm9tIERQU00pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoUHJvb2ZVcGRhdGVcIj4gUHJvb2YgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImZpbGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbC1maWxlXCIgbmFtZSA9IFwicHJvb2ZcIiAgdmFsdWU9e3VuZGVmaW5lZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfSBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdFJlc2VhcmNoR3JhbnQnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZGVsZXRlUmVzZWFyY2hHcmFudFwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGVsZXRlUmVzZWFyY2hHcmFudExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJkZWxldGVSZXNlYXJjaEdyYW50TGFiZWxcIj5EZWxldGUgUmVzZWFyY2ggR3JhbnQgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlc2VhcmNoIGdyYW50IGluZm9ybWF0aW9uPyA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPk5vLCBkb24ndCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2hhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZGVsZXRlUmVzZWFyY2goZGVsZXRlUmVzLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSB2YWx1ZXMubWVzc2FnZSA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZhbHVlcy5tZXNzYWdlID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNyZXNlYXJjaGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNyZXNlYXJjaGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlllcywgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cdFx0XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiYXBwcm92ZVJlc2VhcmNoR3JhbnRcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImFwcHJvdmVSZXNlYXJjaEdyYW50TGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJhcHByb3ZlUmVzZWFyY2hHcmFudExhYmVsXCI+QXBwcm92ZSBSZXNlYXJjaCBHcmFudCBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGFwcHJvdmUgdGhpcyByZXNlYXJjaCBncmFudCBpbmZvcm1hdGlvbj8gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5ObywgZG9uJ3QgYXBwcm92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2sgPSB7YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYXBwcm92ZVJlc2VhcmNoR3JhbnQnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jlc2VhcmNoSWQnLCBhcHByb3ZlUkcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcHByb3ZlUmVzZWFyY2hHcmFudChmb3JtRGF0YSwgdHJ1ZSwgcHJvcHMuZmFjdWx0eUlkLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcmVzZWFyY2hhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Jlc2VhcmNoYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZCwgJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgYXBwcm92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwicmVqZWN0UmVzZWFyY2hHcmFudFwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwicmVqZWN0UmVzZWFyY2hHcmFudExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwicmVqZWN0UmVzZWFyY2hHcmFudExhYmVsXCI+UmVqZWN0IFJlc2VhcmNoIEdyYW50IEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtjdXJyRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2hhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlamVjdFJlc2VhcmNoR3JhbnQnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlamVjdFJHRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmVzZWFyY2hJZCcsIGFwcHJvdmVSRylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwcHJvdmVSZXNlYXJjaEdyYW50KGZvcm1EYXRhLCBmYWxzZSwgcHJvcHMuZmFjdWx0eUlkLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcmVzZWFyY2hhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Jlc2VhcmNoYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZCwgJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gaWQgPSBcInJlamVjdFJHRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVqZWN0aW9uUmVtYXJrc1wiPiBSZWFzb24vUmVtYXJrcyBmb3IgUmVqZWN0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiYXBwcm92ZXJSZW1hcmtzXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHJlbWFya3NcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9IG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVqZWN0UmVzZWFyY2hHcmFudCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlYXJjaEdyYW50XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IGFkZFRyYWluaW5nIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2FkZFRyYWluaW5nJ1xyXG5cclxuY2xhc3MgVHJhaW5pbmdTZW1pbmFyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblx0XHJcblx0cmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFRyYWluaW5nRGV0YWlscyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHJvbGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGVGcm9tOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRlVG86IFwiXCIsXHJcbiAgICAgICAgICAgIHZlbnVlOiBcIlwiLFxyXG4gICAgICAgICAgICBwcm9vZjogXCJcIlxyXG4gICAgICAgIH1cclxuXHRcdHJldHVybihcclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17VHJhaW5pbmdEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHtyZXNldEZvcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHNGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWluaW5nc2VtaW5hcmFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFkZFRyYWluaW5nKGZvcm1EYXRhLCB0aGlzLnByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdHJhaW5pbmdzZW1pbmFyYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdHJhaW5pbmdzZW1pbmFyYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKVxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hY2NvbXBsaXNobWVudCcpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgXHRcdFx0PEZvcm0gaWQgPSBcInRzRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiVHJhaW5pbmdTZW1pbmFyW11cIj4gTmFtZSBvZiBUcmFpbmluZy9TZW1pbmFyIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInRpdGxlXCIgaWQgPSBcInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHRyYWluaW5nL3NlbWluYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJUcmFpbmluZ1NlbWluYXJSb2xlW11cIj4gUm9sZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJvbGVcIiBpZCA9IFwicm9sZVwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCB0cmFpbmluZy9zZW1pbmFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiVHJhaW5pbmdTZW1pbmFyVmVudWVbXVwiPiBWZW51ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJ2ZW51ZVwiIGlkID0gXCJ2ZW51ZVwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCB2ZW51ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlRyYWluaW5nU2VtaW5hclN0YXJ0RGF0ZVtdXCI+IFN0YXJ0IERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZGF0ZUZyb21cIiBpZCA9IFwiZGF0ZUZyb21cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJUcmFpbmluZ1NlbWluYXJFbmREYXRlW11cIj4gRW5kIERhdGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiZGF0ZVRvXCIgaWQgPSBcImRhdGVUb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlRyYWluaW5nU2VtaW5hclJlbWFya3NbXVwiPiBSZW1hcmtzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJlbWFya3NcIiBpZCA9IFwicmVtYXJrc1wiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCByZW1hcmtzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiVHJhaW5pbmdTZW1pbmFyUHJvb2ZbXVwiPiBQcm9vZiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJmaWxlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wtZmlsZVwiIG5hbWUgPSBcInByb29mXCIgaWQgPSBcInByb29mXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Zvcm1paz4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWluaW5nU2VtaW5hckZvcm1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgVHJhaW5pbmdTZW1pbmFyRm9ybSBmcm9tICcuL3RyYWluaW5nLXNlbWluYXItZm9ybSdcclxuaW1wb3J0IE5hbWVEaXNwbGF5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmFtZS1kaXNwbGF5J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXHJcblxyXG5pbXBvcnQgZG93bmxvYWRQcm9vZiBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Rvd25sb2FkUHJvb2YnXHJcbmltcG9ydCBkZWxldGVUcmFpbmluZyBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9kZWxldGVUcmFpbmluZydcclxuaW1wb3J0IHVwZGF0ZVRyYWluaW5nIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL3VwZGF0ZVRyYWluaW5nJ1xyXG5pbXBvcnQgYXBwcm92ZVRyYWluaW5nIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL2FwcHJvdmVUcmFpbmluZydcclxuXHJcbmZ1bmN0aW9uIFRyYWluaW5nU2VtaW5hcihwcm9wcykge1xyXG4gICAgY29uc3QgbmFtZSA9IHByb3BzLm5hbWVcclxuICAgIGxldCBkZWxldGVUUyA9IDBcclxuICAgIGxldCBlZGl0VFMgPSAwXHJcbiAgICBsZXQgYXBwcm92ZVRTID0gMFxyXG5cclxuICAgIGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgdHNJZDogMCxcclxuICAgICAgICByb2xlOiAnJyxcclxuICAgICAgICB0aXRsZTonJyxcclxuICAgICAgICBkYXRlRnJvbTogJycsXHJcbiAgICAgICAgZGF0ZVRvOiAnJyxcclxuICAgICAgICB2ZW51ZTogJycsXHJcbiAgICAgICAgcmVtYXJrczogJycsXHJcbiAgICAgICAgcHJvb2Y6ICcnXHJcbiAgICB9KVxyXG4gICAgbGV0IGNvbnRlbnQgXHJcbiAgICBpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgY29udGVudCA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS50c0lkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleSA9IHtwcm9wcy5jaGlsZHJlbltrZXldLnRzSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0udGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnJvbGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnZlbnVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5kYXRlRnJvbX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZGF0ZVRvfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5yZW1hcmtzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRQcm9vZihmaWxlLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9cIiArIHByb3BzLmNoaWxkcmVuW2tleV0ucHJvb2Z9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7IGNvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZmFjdWx0eUZsYWcgJiYgIXByb3BzLnZpZXdGbGFnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRUcmFpbmluZ1NlbWluYXJcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHByb3BzLmNoaWxkcmVuLltrZXldLnRzSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkoZWRpdFRTKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2RlbGV0ZVRyYWluaW5nU2VtaW5hclwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlKHByb3BzLmNoaWxkcmVuLltrZXldLnRzSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLmZhY3VsdHlGbGFnICYmICFwcm9wcy52aWV3RmxhZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjYXBwcm92ZVRyYWluaW5nU2VtaW5hclwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLnRzSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+QXBwcm92ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNyZWplY3RUcmFpbmluZ1NlbWluYXJcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFwcHJvdmUocHJvcHMuY2hpbGRyZW5ba2V5XS50c0lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlJlamVjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnRlbnQgPSA8dGQgY29sc3BhbiA9IFwiOVwiPjxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBkYXRhIGF2YWlsYWJsZSE8L3A+PC90ZD5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcbiAgICAgICAgZWRpdFRTID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXREZWxldGUoaWQpIHtcclxuICAgICAgICBkZWxldGVUUyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QXBwcm92ZShpZCkge1xyXG4gICAgICAgIGFwcHJvdmVUUyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0S2V5KHgpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuLltrZXldLnRzSWQgPT0geCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShwcm9wcy5jaGlsZHJlbi5ba2V5XSlcclxuICAgICAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuLltrZXldLmVuZERhdGUgPT0gXCJcIiB8fCBwcm9wcy5jaGlsZHJlbi5ba2V5XS5lbmREYXRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIGVuZERhdGU6ICcnfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBhbGlnbiA9IFwiY2VudGVyXCI+IFRyYWluaW5nL1NlbWluYXJzIDwvaDI+XHJcbiAgICAgICAgICAgIDxOYW1lRGlzcGxheSB1bml0ID0ge3Byb3BzLnVuaXR9IHBvc2l0aW9uPXtwcm9wcy5wb3NpdGlvbn0gZW1wbG95bWVudFR5cGU9e3Byb3BzLmVtcGxveW1lbnRUeXBlfT57cHJvcHMubmFtZX08L05hbWVEaXNwbGF5PlxyXG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGlkPVwidHJhaW5pbmdzZW1pbmFyYWxlcnRcIiBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIn19PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWUgb2YgVHJhaW5pbmcvU2VtaW5hcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VmVudWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXJ0IERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVuZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW1hcmtzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9vZjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshcHJvcHMudmlld0ZsYWcgJiYgPHRoPkFjdGlvbjwvdGg+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5mYWN1bHR5RmxhZyAmJiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYWluaW5nU2VtaW5hckZvcm0gdG9rZW4gPSB7IHByb3BzLnRva2VuIH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIH0gXHJcblx0XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZWRpdFRyYWluaW5nU2VtaW5hclwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZWRpdFRyYWluaW5nU2VtaW5hckxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZWRpdFRyYWluaW5nU2VtaW5hckxhYmVsXCI+VXBkYXRlIFRyYWluaW5nL1NlbWluYXIgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2N1cnJEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRTRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHNJZCcsIGN1cnJEYXRhLnRzSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhaW5pbmdzZW1pbmFyYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB1cGRhdGVUcmFpbmluZyhmb3JtRGF0YSwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RyYWluaW5nc2VtaW5hcmFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdHJhaW5pbmdzZW1pbmFyYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FjY29tcGxpc2htZW50JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpZCA9IFwiZWRpdFRTRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiVHJhaW5pbmdTZW1pbmFyVXBkYXRlXCI+IE5hbWUgb2YgVHJhaW5pbmcvU2VtaW5hciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInRpdGxlXCIgaWQgPSBcInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHRyYWluaW5nL3NlbWluYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJUcmFpbmluZ1NlbWluYXJSb2xlVXBkYXRlXCI+IFJvbGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJyb2xlXCIgaWQgPSBcInJvbGVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcm9sZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlRyYWluaW5nU2VtaW5hclZlbnVlVXBkYXRlXCI+IFZlbnVlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwidmVudWVcIiBpZCA9IFwidmVudWVcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgdmVudWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJUcmFpbmluZ1NlbWluYXJTdGFydERhdGVVcGRhdGVcIj4gU3RhcnQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImRhdGVGcm9tXCIgaWQgPSBcImRhdGVGcm9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiVHJhaW5pbmdTZW1pbmFyRW5kRGF0ZVVwZGF0ZVwiPiBFbmQgRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImRhdGVUb1wiIGlkID0gXCJkYXRlVG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJUcmFpbmluZ1NlbWluYXJWZW51ZVVwZGF0ZVwiPiBSZW1hcmtzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmVtYXJrc1wiIGlkID0gXCJyZW1hcmtzXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHJlbWFya3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJUcmFpbmluZ1NlbWluYXJQcm9vZlVwZGF0ZVwiPiBQcm9vZiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImZpbGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbC1maWxlXCIgbmFtZSA9IFwicHJvb2ZcIiBpZCA9IFwicHJvb2ZcIiB2YWx1ZT17dW5kZWZpbmVkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9IG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdFRyYWluaW5nU2VtaW5hcicpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJkZWxldGVUcmFpbmluZ1NlbWluYXJcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImRlbGV0ZVRyYWluaW5nU2VtaW5hckxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZGVsZXRlVHJhaW5pbmdTZW1pbmFyTGFiZWxcIj5EZWxldGUgVHJhaW5pbmcvU2VtaW5hciBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRyYWluaW5nL3NlbWluYXIgaW5mb3JtYXRpb24/IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Tm8sIGRvbid0IGRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZGVsZXRlVHJhaW5pbmdTZW1pbmFyJykubW9kYWwoJ3RvZ2dsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhaW5pbmdzZW1pbmFyYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBkZWxldGVUcmFpbmluZyhkZWxldGVUUywgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3RyYWluaW5nc2VtaW5hcmFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdHJhaW5pbmdzZW1pbmFyYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FjY29tcGxpc2htZW50JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+WWVzLCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJhcHByb3ZlVHJhaW5pbmdTZW1pbmFyXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJhcHByb3ZlVHJhaW5pbmdTZW1pbmFyTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJhcHByb3ZlVHJhaW5pbmdTZW1pbmFyTGFiZWxcIj5BcHByb3ZlIFRyYWluaW5nL1NlbWluYXIgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBhcHByb3ZlIHRoaXMgdHJhaW5pbmcvc2VtaW5hciBpbmZvcm1hdGlvbj8gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5ObywgZG9uJ3QgYXBwcm92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2sgPSB7YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFpbmluZ3NlbWluYXJhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2FwcHJvdmVUcmFpbmluZ1NlbWluYXInKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RzSWQnLCBhcHByb3ZlVFMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcHByb3ZlVHJhaW5pbmcoZm9ybURhdGEsIHRydWUsIHByb3BzLmZhY3VsdHlJZCwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdHJhaW5pbmdzZW1pbmFyYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0cmFpbmluZ3NlbWluYXJhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkLCAnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+WWVzLCBhcHByb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwicmVqZWN0VHJhaW5pbmdTZW1pbmFyXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJyZWplY3RUcmFpbmluZ1NlbWluYXJMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwicmVqZWN0VHJhaW5pbmdTZW1pbmFyTGFiZWxcIj5SZWplY3QgVHJhaW5pbmcvU2VtaW5hciBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtjdXJyRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWluaW5nc2VtaW5hcmFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWplY3RUcmFpbmluZ1NlbWluYXInKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWplY3RUcmFpbmluZ1NlbWluYXJGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHNJZCcsIGFwcHJvdmVUUylcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcHByb3ZlVHJhaW5pbmcoZm9ybURhdGEsIGZhbHNlLCBwcm9wcy5mYWN1bHR5SWQsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN0cmFpbmluZ3NlbWluYXJhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdHJhaW5pbmdzZW1pbmFyYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQsICcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gaWQgPSBcInJlamVjdFRyYWluaW5nU2VtaW5hckZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJSZWplY3Rpb25SZW1hcmtzXCI+IFJlYXNvbi9SZW1hcmtzIGZvciBSZWplY3Rpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImFwcHJvdmVyUmVtYXJrc1wiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCByZW1hcmtzXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfSBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVqZWN0VHJhaW5pbmdTZW1pbmFyJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIDwvZGl2Plx0XHJcbiAgICApXHJcbn0gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhaW5pbmdTZW1pbmFyXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFkZExpY2Vuc3VyZShmb3JtRGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBsZXQgZmFjdWx0eUlkID0gY29va2llRGF0YS5mYWN1bHR5SWRcclxuXHR0cnkge1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdmYWN1bHR5SWQnLCBmYWN1bHR5SWQpXHJcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdzdGF0dXMnLCAnUGVuZGluZycpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcblx0XHRcdFx0ICAgIG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdCAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQvYWRkL2xpY2Vuc3VyZS1leGFtJyxcclxuXHRcdFx0XHQgICAgZGF0YTogZm9ybURhdGEsXHJcblx0XHRcdFx0ICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuXHRcdFx0ICAgIH0pXHRcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFkZFB1YmxpY1NlcnZpY2UoZm9ybURhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmKGZvcm1EYXRhLmdldCgnZW5kRGF0ZScpID09IFwiXCIpIHtcclxuXHRcdFx0XHRcdGZvcm1EYXRhLmRlbGV0ZSgnZW5kRGF0ZScpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnZmFjdWx0eUlkJywgZmFjdWx0eUlkKVxyXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnc3RhdHVzJywgJ1BlbmRpbmcnKVxyXG5cclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0XHQgICAgbWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC9hZGQvcHVibGljLXNlcnZpY2UnLFxyXG5cdFx0XHRcdCAgICBkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0XHQgICAgfSlcdFxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWRkUHVibGljYXRpb24oZm9ybURhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGxldCBhdXRob3JzID0gW11cclxuXHRcdFx0XHRmb3IgKHZhciBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhaXJbMF0gPT0gJ1B1YmxpY2F0aW9uQXV0aG9yRFBTTVtdJyAmJiBwYWlyWzFdICE9IGZhY3VsdHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFx0YXV0aG9ycy5wdXNoKHBhaXJbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgXHRsZXQgcHJvb2YgPSBmb3JtRGF0YS5nZXQoJ3Byb29mJylcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0XHQgICAgbWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC9hZGQvcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdCAgICBkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0XHQgICAgfSlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgYm9kRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcblx0XHQgICAgXHRib2REYXRhLmFwcGVuZCgnZmFjdWx0eUlkJywgZmFjdWx0eUlkKVxyXG5cdFx0ICAgIFx0Ym9kRGF0YS5hcHBlbmQoJ3B1YmxpY2F0aW9uSWQnLCByZXNwb25zZS5kYXRhLnJlc3VsdC5wdWJsaWNhdGlvbklkKVxyXG5cdFx0XHRcdGJvZERhdGEuYXBwZW5kKCdwcm9vZicsIHByb29mKVxyXG5cdFx0ICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcblx0XHQgICAgICAgIFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC9hZGQvcHVibGlzaGVyJyxcclxuXHRcdFx0XHQgICAgZGF0YTogYm9kRGF0YSxcclxuXHRcdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0ICAgICAgICB9KVxyXG5cdFx0ICAgICAgICBib2REYXRhLmRlbGV0ZSgncHJvb2YnKVxyXG5cclxuXHRcdFx0XHRmb3IodmFyIHZhbHVlIG9mIGF1dGhvcnMpIHtcclxuXHRcdCAgICAgICAgXHRib2REYXRhLnNldCgnZmFjdWx0eUlkJywgdmFsdWUpXHJcblx0XHQgICAgICAgIFx0Y29uc3QgYXV0aCA9IGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0ICAgICAgICBcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC9hZGQvcHVibGlzaGVyJyxcclxuXHRcdFx0XHRcdCAgICBkYXRhOiBib2REYXRhLFxyXG5cdFx0XHRcdFx0ICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuXHRcdFx0ICAgICAgICB9KVxyXG5cdFx0ICAgICAgICB9XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRSZXNlYXJjaChmb3JtRGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBsZXQgZmFjdWx0eUlkID0gY29va2llRGF0YS5mYWN1bHR5SWRcclxuXHR0cnkge1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0bGV0IHJlc2VhcmNoZXJzID0gW11cclxuXHRcdFx0XHRmb3IgKHZhciBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhaXJbMF0gPT0gJ1Jlc2VhcmNoQXV0aG9yRFBTTVtdJyAmJiBwYWlyWzFdICE9IGZhY3VsdHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFx0cmVzZWFyY2hlcnMucHVzaChwYWlyWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHRsZXQgcHJvb2YgPSBmb3JtRGF0YS5nZXQoJ3Byb29mJylcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0XHQgICAgbWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC9hZGQvcmVzZWFyY2gtZ3JhbnQnLFxyXG5cdFx0XHRcdCAgICBkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0XHQgICAgfSlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgYm9kRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcblx0XHQgICAgXHRib2REYXRhLmFwcGVuZCgnZmFjdWx0eUlkJywgZmFjdWx0eUlkKVxyXG5cdFx0ICAgIFx0Ym9kRGF0YS5hcHBlbmQoJ3Jlc2VhcmNoSWQnLCByZXNwb25zZS5kYXRhLnJlc3VsdC5yZXNlYXJjaElkKVxyXG5cdFx0XHRcdGJvZERhdGEuYXBwZW5kKCdwcm9vZicsIHByb29mKVxyXG5cdFx0ICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcblx0XHQgICAgICAgIFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC9hZGQvcmVzZWFyY2hlcicsXHJcblx0XHRcdFx0ICAgIGRhdGE6IGJvZERhdGEsXHJcblx0XHRcdFx0ICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuXHRcdCAgICAgICAgfSlcclxuXHRcdCAgICAgICAgYm9kRGF0YS5kZWxldGUoJ3Byb29mJylcclxuXHJcblx0XHQgICAgICAgIGZvcih2YXIgdmFsdWUgb2YgcmVzZWFyY2hlcnMpIHtcclxuXHRcdCAgICAgICAgXHRib2REYXRhLnNldCgnZmFjdWx0eUlkJywgdmFsdWUpXHJcblx0XHQgICAgICAgIFx0Y29uc3QgYXV0aCA9IGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0ICAgICAgICBcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC9hZGQvcmVzZWFyY2hlcicsXHJcblx0XHRcdFx0XHQgICAgZGF0YTogYm9kRGF0YSxcclxuXHRcdFx0XHRcdCAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9XHJcblx0XHRcdCAgICAgICAgfSlcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWRkVHJhaW5pbmcoZm9ybURhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmKGZvcm1EYXRhLmdldCgncHJvb2YnKSA9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ3Byb29mJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoZm9ybURhdGEuZ2V0KCdlbmREYXRlJykgPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0Zm9ybURhdGEuZGVsZXRlKCdlbmREYXRlJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdmYWN1bHR5SWQnLCBmYWN1bHR5SWQpXHJcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdzdGF0dXMnLCAnUGVuZGluZycpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcblx0XHRcdFx0ICAgIG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdCAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQvYWRkL3RyYWluaW5nLXNlbWluYXInLFxyXG5cdFx0XHRcdCAgICBkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0XHQgICAgfSlcdFxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXBwcm92ZUxpY2Vuc2UoZm9ybURhdGEsIGFwcHJvdmVGbGFnLCBmYWN1bHR5SWQsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgXHJcblx0bGV0IHN0YXR1c1xyXG5cdGlmKGFwcHJvdmVGbGFnKSB7XHJcblx0XHRpZihjb29raWVEYXRhLnJvbGUgPT0gMikge1xyXG5cdFx0XHRzdGF0dXMgPSAnVmVyaWZpZWQnXHJcblx0XHR9IGVsc2UgaWYoY29va2llRGF0YS5yb2xlID09IDMpIHtcclxuXHRcdFx0c3RhdHVzID0gJ0FwcHJvdmVkJ1xyXG5cdFx0fVxyXG5cdH0gZWxzZSBzdGF0dXMgPSAnUmVqZWN0ZWQnXHJcblx0Zm9ybURhdGEuYXBwZW5kKCdzdGF0dXMnLCBzdGF0dXMpXHJcblxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC8nICsgZmFjdWx0eUlkO1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0XHRcdHVybDogdXJsICsgJy9saWNlbnN1cmUtZXhhbScsXHJcblx0XHRcdFx0XHRkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuXHRcdFx0XHR9KVx0XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSAgY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXBwcm92ZVB1YmxpY1NlcnZpY2UoZm9ybURhdGEsIGFwcHJvdmVGbGFnLCBmYWN1bHR5SWQsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgXHJcblx0bGV0IHN0YXR1c1xyXG5cdGlmKGFwcHJvdmVGbGFnKSB7XHJcblx0XHRpZihjb29raWVEYXRhLnJvbGUgPT0gMikge1xyXG5cdFx0XHRzdGF0dXMgPSAnVmVyaWZpZWQnXHJcblx0XHR9IGVsc2UgaWYoY29va2llRGF0YS5yb2xlID09IDMpIHtcclxuXHRcdFx0c3RhdHVzID0gJ0FwcHJvdmVkJ1xyXG5cdFx0fVxyXG5cdH0gZWxzZSBzdGF0dXMgPSAnUmVqZWN0ZWQnXHJcblx0Zm9ybURhdGEuYXBwZW5kKCdzdGF0dXMnLCBzdGF0dXMpXHJcblxyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC8nICsgZmFjdWx0eUlkO1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0XHRcdHVybDogdXJsICsgJy9wdWJsaWMtc2VydmljZScsXHJcblx0XHRcdFx0XHRkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuXHRcdFx0XHR9KVx0XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSAgY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXBwcm92ZVB1YmxpY2F0aW9uKGZvcm1EYXRhLCBhcHByb3ZlRmxhZywgZmFjdWx0eUlkLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIFxyXG5cdGxldCBzdGF0dXNcclxuXHRpZihhcHByb3ZlRmxhZykge1xyXG5cdFx0aWYoY29va2llRGF0YS5yb2xlID09IDIpIHtcclxuXHRcdFx0c3RhdHVzID0gJ1ZlcmlmaWVkJ1xyXG5cdFx0fSBlbHNlIGlmKGNvb2tpZURhdGEucm9sZSA9PSAzKSB7XHJcblx0XHRcdHN0YXR1cyA9ICdBcHByb3ZlZCdcclxuXHRcdH1cclxuXHR9IGVsc2Ugc3RhdHVzID0gJ1JlamVjdGVkJ1xyXG5cdGZvcm1EYXRhLmFwcGVuZCgnc3RhdHVzJywgc3RhdHVzKVxyXG5cclxuXHR0cnkge1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0bGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQvJyArIGZhY3VsdHlJZDtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRcdFx0XHR1cmw6IHVybCArICcvcHVibGlzaGVyJyxcclxuXHRcdFx0XHRcdGRhdGE6IGZvcm1EYXRhLFxyXG5cdFx0XHRcdFx0aGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0XHRcdH0pXHRcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9ICBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlUmVzZWFyY2hHcmFudChmb3JtRGF0YSwgYXBwcm92ZUZsYWcsIGZhY3VsdHlJZCwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBcclxuXHRsZXQgc3RhdHVzXHJcblx0aWYoYXBwcm92ZUZsYWcpIHtcclxuXHRcdGlmKGNvb2tpZURhdGEucm9sZSA9PSAyKSB7XHJcblx0XHRcdHN0YXR1cyA9ICdWZXJpZmllZCdcclxuXHRcdH0gZWxzZSBpZihjb29raWVEYXRhLnJvbGUgPT0gMykge1xyXG5cdFx0XHRzdGF0dXMgPSAnQXBwcm92ZWQnXHJcblx0XHR9XHJcblx0fSBlbHNlIHN0YXR1cyA9ICdSZWplY3RlZCdcclxuXHRmb3JtRGF0YS5hcHBlbmQoJ3N0YXR1cycsIHN0YXR1cylcclxuXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9mYWN1bHR5L2FjY29tcGxpc2htZW50LycgKyBmYWN1bHR5SWQ7XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0XHRcdFx0dXJsOiB1cmwgKyAnL3Jlc2VhcmNoZXInLFxyXG5cdFx0XHRcdFx0ZGF0YTogZm9ybURhdGEsXHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9XHJcblx0XHRcdFx0fSlcdFxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gIGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVUcmFpbmluZyhmb3JtRGF0YSwgYXBwcm92ZUZsYWcsIGZhY3VsdHlJZCwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBcclxuXHRsZXQgc3RhdHVzXHJcblx0aWYoYXBwcm92ZUZsYWcpIHtcclxuXHRcdGlmKGNvb2tpZURhdGEucm9sZSA9PSAyKSB7XHJcblx0XHRcdHN0YXR1cyA9ICdWZXJpZmllZCdcclxuXHRcdH0gZWxzZSBpZihjb29raWVEYXRhLnJvbGUgPT0gMykge1xyXG5cdFx0XHRzdGF0dXMgPSAnQXBwcm92ZWQnXHJcblx0XHR9XHJcblx0fSBlbHNlIHN0YXR1cyA9ICdSZWplY3RlZCdcclxuXHRmb3JtRGF0YS5hcHBlbmQoJ3N0YXR1cycsIHN0YXR1cylcclxuXHJcblx0dHJ5IHtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9mYWN1bHR5L2FjY29tcGxpc2htZW50LycgKyBmYWN1bHR5SWQ7XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0XHRcdFx0dXJsOiB1cmwgKyAnL3RyYWluaW5nLXNlbWluYXInLFxyXG5cdFx0XHRcdFx0ZGF0YTogZm9ybURhdGEsXHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9XHJcblx0XHRcdFx0fSlcdFxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gIGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxpY2Vuc3VyZShkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0XHRpZih0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9mYWN1bHR5L2FjY29tcGxpc2htZW50L1wiICsgZmFjdWx0eUlkICsgXCIvbGljZW5zdXJlLWV4YW1cIiwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0bGljZW5zZUlkOiBgJHtkYXRhfWBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gIGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVB1YmxpY1NlcnZpY2UoZGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBsZXQgZmFjdWx0eUlkID0gY29va2llRGF0YS5mYWN1bHR5SWRcclxuXHR0cnkge1xyXG5cdFx0aWYodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC9cIiArIGZhY3VsdHlJZCArIFwiL3B1YmxpYy1zZXJ2aWNlXCIsIHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHB1YmxpY1NlcnZpY2VJZDogYCR7ZGF0YX1gXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9ICBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkZWxldGVQdWJsaWNhdGlvbihkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0XHRpZih0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9mYWN1bHR5L2FjY29tcGxpc2htZW50L1wiICsgZmFjdWx0eUlkICsgXCIvcHVibGlzaGVyXCIsIHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHB1YmxpY2F0aW9uSWQ6IGAke2RhdGF9YFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0fSAgY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVzZWFyY2goZGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBsZXQgZmFjdWx0eUlkID0gY29va2llRGF0YS5mYWN1bHR5SWRcclxuXHR0cnkge1xyXG5cdFx0aWYodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC9cIiArIGZhY3VsdHlJZCArIFwiL3Jlc2VhcmNoZXJcIiwge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0cmVzZWFyY2hJZDogYCR7ZGF0YX1gXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9ICBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkZWxldGVUcmFpbmluZyhkYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0XHRpZih0b2tlbikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9mYWN1bHR5L2FjY29tcGxpc2htZW50L1wiICsgZmFjdWx0eUlkICsgXCIvdHJhaW5pbmctc2VtaW5hclwiLCB7XHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHR0c0lkOiBgJHtkYXRhfWBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gIGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUxpY2Vuc3VyZShmb3JtRGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBsZXQgZmFjdWx0eUlkID0gY29va2llRGF0YS5mYWN1bHR5SWRcclxuXHR0cnkge1xyXG5cdCAgICBpZiAodG9rZW4pIHtcclxuXHQgICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9mYWN1bHR5L2FjY29tcGxpc2htZW50LycgKyBmYWN1bHR5SWQ7XHJcblx0XHQgICAgbGV0IGhlYWRlciA9IHtcclxuXHRcdCAgICAgICAgaGVhZGVyczoge1xyXG5cdFx0ICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIGlmKGZvcm1EYXRhLmdldCgncHJvb2YnKSA9PSBcIlwiKSB7XHJcblx0XHRcdFx0Zm9ybURhdGEuZGVsZXRlKCdwcm9vZicpXHJcblx0XHRcdH1cclxuXHRcdFx0aWYoZm9ybURhdGEuZ2V0KCdyYW5rJykgPT0gXCJcIikge1xyXG5cdFx0XHRcdGZvcm1EYXRhLnNldCgncmFuaycsICcnKVxyXG5cdFx0XHR9XHJcblx0XHQgICAgXHJcblx0XHQgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcblx0XHRcdCAgICBtZXRob2Q6ICdQVVQnLFxyXG5cdFx0XHQgICAgdXJsOiB1cmwgKyAnL2xpY2Vuc3VyZS1leGFtJyxcclxuXHRcdFx0ICAgIGRhdGE6IGZvcm1EYXRhLFxyXG5cdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0ICAgIH0pXHRcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzcy5yZXN1bHQubWVzc2FnZSlcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVB1YmxpY1NlcnZpY2UoZm9ybURhdGEsIHRva2VuKSB7XHJcblx0bGV0IGNvb2tpZURhdGEgPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgbGV0IGZhY3VsdHlJZCA9IGNvb2tpZURhdGEuZmFjdWx0eUlkXHJcblx0dHJ5IHtcclxuXHQgICAgaWYgKHRva2VuKSB7XHJcblx0ICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZmFjdWx0eS9hY2NvbXBsaXNobWVudC8nICsgZmFjdWx0eUlkO1xyXG5cdFx0ICAgIGxldCBoZWFkZXIgPSB7XHJcblx0XHQgICAgICAgIGhlYWRlcnM6IHtcclxuXHRcdCAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH1cclxuXHRcdCAgICBpZihmb3JtRGF0YS5nZXQoJ3Byb29mJykgPT0gXCJcIikge1xyXG5cdFx0XHRcdGZvcm1EYXRhLmRlbGV0ZSgncHJvb2YnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGZvcm1EYXRhLmdldCgnZW5kRGF0ZScpID09IFwiXCIpIHtcclxuXHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ2VuZERhdGUnKVxyXG5cdFx0XHR9XHJcblx0XHQgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcblx0XHRcdCAgICBtZXRob2Q6ICdQVVQnLFxyXG5cdFx0XHQgICAgdXJsOiB1cmwgKyAnL3B1YmxpYy1zZXJ2aWNlJyxcclxuXHRcdFx0ICAgIGRhdGE6IGZvcm1EYXRhLFxyXG5cdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0ICAgIH0pXHRcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzcy5yZXN1bHQubWVzc2FnZSlcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVB1YmxpY2F0aW9uKGZvcm1EYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1xyXG5cdCAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQvJyArIGZhY3VsdHlJZDtcclxuXHRcdCAgICBsZXQgaGVhZGVyID0ge1xyXG5cdFx0ICAgICAgICBoZWFkZXJzOiB7XHJcblx0XHQgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9XHJcblx0XHQgICAgaWYoZm9ybURhdGEuZ2V0KCdwcm9vZicpID09IFwiXCIpIHtcclxuXHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ3Byb29mJylcclxuXHRcdFx0fVxyXG5cdFx0ICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHQgICAgbWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0ICAgIHVybDogdXJsICsgJy9wdWJsaWNhdGlvbicsXHJcblx0XHRcdCAgICBkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0ICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuXHRcdCAgICB9KVx0XHJcblx0XHQgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzcy5yZXN1bHQubWVzc2FnZSlcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJlc2VhcmNoKGZvcm1EYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1xyXG5cdCAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQvJyArIGZhY3VsdHlJZDtcclxuXHRcdCAgICBsZXQgaGVhZGVyID0ge1xyXG5cdFx0ICAgICAgICBoZWFkZXJzOiB7XHJcblx0XHQgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9XHJcblx0XHQgICAgaWYoZm9ybURhdGEuZ2V0KCdwcm9vZicpID09IFwiXCIpIHtcclxuXHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ3Byb29mJylcclxuXHRcdFx0fVxyXG5cdFx0ICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHQgICAgbWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0ICAgIHVybDogdXJsICsgJy9yZXNlYXJjaC1ncmFudCcsXHJcblx0XHRcdCAgICBkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0ICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH1cclxuXHRcdCAgICB9KVx0XHJcblx0XHQgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzcy5yZXN1bHQubWVzc2FnZSlcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRyYWluaW5nKGZvcm1EYXRhLCB0b2tlbikge1xyXG5cdGxldCBjb29raWVEYXRhID0gand0LmRlY29kZSh0b2tlbilcclxuICAgIGxldCBmYWN1bHR5SWQgPSBjb29raWVEYXRhLmZhY3VsdHlJZFxyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1xyXG5cdCAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQvJyArIGZhY3VsdHlJZDtcclxuXHRcdCAgICBsZXQgaGVhZGVyID0ge1xyXG5cdFx0ICAgICAgICBoZWFkZXJzOiB7XHJcblx0XHQgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9XHJcblx0XHQgICAgaWYoZm9ybURhdGEuZ2V0KCdwcm9vZicpID09IFwiXCIpIHtcclxuXHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ3Byb29mJylcclxuXHRcdFx0fVxyXG5cdFx0ICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHQgICAgbWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0ICAgIHVybDogdXJsICsgJy90cmFpbmluZy1zZW1pbmFyJyxcclxuXHRcdFx0ICAgIGRhdGE6IGZvcm1EYXRhLFxyXG5cdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0ICAgIH0pXHRcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzcy5yZXN1bHQubWVzc2FnZSlcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=