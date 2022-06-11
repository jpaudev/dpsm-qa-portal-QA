exports.id = "components_faculty_faculty-load_faculty-load-table_js";
exports.ids = ["components_faculty_faculty-load_faculty-load-table_js"];
exports.modules = {

/***/ "./components/faculty/faculty-load/faculty-load-form.js":
/*!**************************************************************!*\
  !*** ./components/faculty/faculty-load/faculty-load-form.js ***!
  \**************************************************************/
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
/* harmony import */ var _services_admin_addFacultyLoad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/admin/addFacultyLoad */ "./services/admin/addFacultyLoad.js");

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\faculty-load\\faculty-load-form.js";





class FacultyLoadForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    let year = [];
    let currYear = new Date().getFullYear();

    for (let i = currYear; i >= 1970; i--) {
      year.push(i);
    }

    let options = Object.keys(year).map(i => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: year[i],
        children: [year[i] - 1, "-", year[i]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this);
    });
    let FacLoadDetails = {
      subject: "",
      section: "",
      semester: "1st Semester",
      academicYear: currYear,
      syllabus: ""
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: FacLoadDetails,
      onSubmit: async (values, {
        resetForm
      }) => {
        let form = document.getElementById('facLoadForm');
        let formData = new FormData(form);
        let res = await (0,_services_admin_addFacultyLoad__WEBPACK_IMPORTED_MODULE_4__.default)(formData, this.props.token);
        let alert = document.getElementById("loadalert");

        if (res.success == true) {
          alert.className = "alert alert-success";
          alert.style = "visibility: visible";
          alert.innerHTML = res.message;
        } else {
          alert.className = "alert alert-danger";
          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
        }

        alert.setAttribute("style", "visibility: visible");
        $("#loadalert").fadeTo(5000, 500).slideUp(500, function () {
          $("#loadalert").slideUp(500);
        });
        resetForm();
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/admin/' + this.props.facultyId);
      },
      children: ({
        values,
        errors,
        touched,
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
        id: "facLoadForm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          children: "Add Faculty Load"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
            className: "form-control",
            type: "hidden",
            name: "facultyId",
            value: this.props.facultyId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Subject",
              children: " Subject "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "subject",
              placeholder: "Input subject",
              required: true
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
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Section",
              children: " Section "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              className: "form-control",
              type: "text",
              name: "section",
              placeholder: "Input section",
              required: true
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
            className: "form-group col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Semester",
              children: " Semester "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              as: "select",
              className: "form-control",
              name: "semester",
              required: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "1st",
                children: "1st Semester"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "2nd",
                children: "2nd Semester"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "Midyear",
                children: "Mid-Year"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group col-md-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "Year",
              children: " Academic Year "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
              as: "select",
              className: "form-control",
              name: "academicYear",
              required: true,
              children: options
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
          lineNumber: 66,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "btn btn-primary col-md-12",
          disabled: isSubmitting,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FacultyLoadForm);

/***/ }),

/***/ "./components/faculty/faculty-load/faculty-load-table.js":
/*!***************************************************************!*\
  !*** ./components/faculty/faculty-load/faculty-load-table.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _faculty_load_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faculty-load-form */ "./components/faculty/faculty-load/faculty-load-form.js");
/* harmony import */ var _services_admin_updateFacultyLoad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/admin/updateFacultyLoad */ "./services/admin/updateFacultyLoad.js");
/* harmony import */ var _services_admin_deleteFacultyLoad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/admin/deleteFacultyLoad */ "./services/admin/deleteFacultyLoad.js");

var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\faculty-load\\faculty-load-table.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function FacultyLoadTable(props) {
  let year = [];
  let currYear = new Date().getFullYear();

  for (let i = currYear; i >= 1970; i--) {
    year.push(i);
  }

  let options = Object.keys(year).map(i => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: year[i],
      children: [year[i] - 1, "-", year[i]]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this);
  });
  let deleteClass = 0;
  let editClass = 0;
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState({
    recordId: 0,
    subject: '',
    section: '',
    semester: '',
    academicYear: '',
    syllabus: ''
  });
  const name = props.name;
  let content;

  if (props.children != null) {
    content = Object.keys(props.children).map(key => {
      if (props.children[key].recordId != null) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].subject
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].section
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].semester
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: props.children[key].academicYear - 1 + ' - ' + props.children[key].academicYear
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [props.children[key].syllabus && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                href: "http://localhost:3001/" + props.children[key].syllabus,
                style: {
                  color: 'white'
                },
                target: "_blank",
                children: "View"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, this), props.editClass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-warning",
                "data-toggle": "modal",
                "data-target": "#addSyllabus",
                onClick: () => {
                  setEdit(props.children[key].recordId);
                  setKey(editClass);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this), props.editClass && !props.children[key].syllabus && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-warning",
              "data-toggle": "modal",
              "data-target": "#addSyllabus",
              onClick: () => {
                setEdit(props.children[key].recordId);
                setKey(editClass);
              },
              children: "Add Syllabus"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, this), !props.editClass && !props.children[key].syllabus && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "None"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editClass",
                onClick: () => {
                  setEdit(props.children[key].recordId);
                  setKey(editClass);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteClass",
                onClick: () => {
                  setDelete(props.children[key].recordId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 39
          }, this)]
        }, props.children[key].recordId, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this);
      }
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colSpan: "7",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }, this);
  }

  function setEdit(id) {
    editClass = id;
  }

  function setDelete(id) {
    deleteClass = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(key => {
      if (props.children[key].recordId == x) {
        setData(props.children[key]);

        if (props.children[key].syllabus) {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            syllabus: props.children[key].syllabus
          }));
        } else {
          setData(currData => _objectSpread(_objectSpread({}, currData), {}, {
            syllabus: 'None'
          }));
        }
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      children: " Faculty Load "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_1__.default, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      role: "alert",
      id: "loadalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Subject"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Section"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Semester"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Academic Year"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Syllabus"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 25
            }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 43
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_faculty_load_form__WEBPACK_IMPORTED_MODULE_5__.default, {
        token: props.token,
        facultyId: props.facultyId,
        role: props.role
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "editClass",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editClassLabel",
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
              id: "editClassLabel",
              children: "Update Class Record"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
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
                lineNumber: 153,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let form = document.getElementById('editClassForm');
              let formData = new FormData(form);
              formData.append('recordId', currData.recordId);
              let alert = document.getElementById("loadalert");
              let res = await (0,_services_admin_updateFacultyLoad__WEBPACK_IMPORTED_MODULE_6__.default)(formData, props.token, props.facultyId);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#loadalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#loadalert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/admin/' + props.facultyId, '/admin/' + props.facultyId);
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
              id: "editClassForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "subject",
                      children: " Subject "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "subject",
                      id: "subject",
                      placeholder: "Input subject"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 190,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "section",
                      children: " Section "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      className: "form-control",
                      type: "text",
                      name: "section",
                      id: "section",
                      placeholder: "Input section"
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
                      htmlFor: "semester",
                      children: " Semester "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      as: "select",
                      className: "form-control",
                      name: "semester",
                      id: "semester",
                      required: true,
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "1st",
                        children: "1st Semester"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 203,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "2nd",
                        children: "2nd Semester"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 45
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                        value: "Midyear",
                        children: "Mid-Year"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
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
                      htmlFor: "Year",
                      children: " Academic Year "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      as: "select",
                      className: "form-control",
                      name: "academicYear",
                      id: "academicYear",
                      required: true,
                      children: options
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 185,
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
                  lineNumber: 219,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#editClass').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "deleteClass",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteClassLabel",
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
              id: "deleteClassLabel",
              children: "Delete Class Record"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
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
                lineNumber: 237,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " Are you sure you want to delete this faculty load information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
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
              lineNumber: 245,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: async () => {
                let alert = document.getElementById("loadalert");
                let res = await (0,_services_admin_deleteFacultyLoad__WEBPACK_IMPORTED_MODULE_7__.default)(deleteClass, props.token, props.facultyId);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#loadalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#loadalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/admin/' + props.facultyId, '/admin/' + props.facultyId);
              },
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "addSyllabus",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "addSyllabusLabel",
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
              id: "addSyllabusLabel",
              children: "Update Class Records"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
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
                lineNumber: 275,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: async values => {
              let alert = document.getElementById("loadalert");
              let form = document.getElementById('addSyllForm');
              let formData = new FormData(form);
              formData.append('recordId', currData.recordId);
              console.log(props);
              let res = await (0,_services_admin_updateFacultyLoad__WEBPACK_IMPORTED_MODULE_6__.default)(formData, props.token, props.facultyId);

              if (res.success == true) {
                alert.className = "alert alert-success";
                alert.style = "visibility: visible";
                alert.innerHTML = res.message;
              } else {
                alert.className = "alert alert-danger";
                if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
              }

              $("#loadalert").fadeTo(5000, 500).slideUp(500, function () {
                $("#loadalert").slideUp(500);
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/faculty/faculty-load', '/faculty/faculty-load');
            },
            children: ({
              values,
              errors,
              touched,
              isSubmitting
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
              id: "addSyllForm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "modal-body",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "syllabus",
                      children: [" Add/Edit Syllabus [Uploaded: ", currData.syllabus, "] "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 311,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      type: "file",
                      className: "form-control-file",
                      name: "syllabus",
                      id: "syllabus",
                      value: undefined
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 312,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      type: "hidden",
                      className: "form-control",
                      name: "subject"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 313,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      type: "hidden",
                      className: "form-control",
                      name: "section"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 314,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      type: "hidden",
                      className: "form-control",
                      name: "setResults"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 315,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 310,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
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
                  lineNumber: 320,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: isSubmitting,
                  onClick: () => {
                    $('#addSyllabus').modal('toggle');
                  },
                  children: "Save changes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FacultyLoadTable);

/***/ }),

/***/ "./services/admin/addFacultyLoad.js":
/*!******************************************!*\
  !*** ./services/admin/addFacultyLoad.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addFacultyLoad; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function addFacultyLoad(formData, token) {
  let cookieData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token);
  let facultyId = cookieData.facultyId;

  try {
    if (token) {
      try {
        for (var value of formData.values()) {
          console.log(value);
        }

        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: 'POST',
          url: "http://localhost:3001/api" + '/faculty/load',
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

/***/ "./services/admin/deleteFacultyLoad.js":
/*!*********************************************!*\
  !*** ./services/admin/deleteFacultyLoad.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deleteFacultyLoad; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function deleteFacultyLoad(data, token, facultyId) {
  try {
    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("http://localhost:3001/api" + "/faculty/load/" + facultyId, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            recordId: `${data}`
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

/***/ "./services/admin/updateFacultyLoad.js":
/*!*********************************************!*\
  !*** ./services/admin/updateFacultyLoad.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateFacultyLoad; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function updateFacultyLoad(formData, token, facultyId) {
  try {
    if (token) {
      let url = "http://localhost:3001/api" + '/faculty/load/' + facultyId;

      if (formData.get('setResults') == "") {
        formData.delete('setResults');
      }

      for (var value of formData.entries()) {
        console.log(value[0] + ' ' + value[1]);
      }

      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'PUT',
        url: url,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9mYWN1bHR5LWxvYWQvZmFjdWx0eS1sb2FkLWZvcm0uanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2ZhY3VsdHkvZmFjdWx0eS1sb2FkL2ZhY3VsdHktbG9hZC10YWJsZS5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2FkbWluL2FkZEZhY3VsdHlMb2FkLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvYWRtaW4vZGVsZXRlRmFjdWx0eUxvYWQuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9zZXJ2aWNlcy9hZG1pbi91cGRhdGVGYWN1bHR5TG9hZC5qcyJdLCJuYW1lcyI6WyJGYWN1bHR5TG9hZEZvcm0iLCJSZWFjdCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJ5ZWFyIiwiY3VyclllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJpIiwicHVzaCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiRmFjTG9hZERldGFpbHMiLCJzdWJqZWN0Iiwic2VjdGlvbiIsInNlbWVzdGVyIiwiYWNhZGVtaWNZZWFyIiwic3lsbGFidXMiLCJ2YWx1ZXMiLCJyZXNldEZvcm0iLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJyZXMiLCJhZGRGYWN1bHR5TG9hZCIsInRva2VuIiwiYWxlcnQiLCJzdWNjZXNzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwiZXJyb3IiLCJzZXRBdHRyaWJ1dGUiLCIkIiwiZmFkZVRvIiwic2xpZGVVcCIsIlJvdXRlciIsImZhY3VsdHlJZCIsImVycm9ycyIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJGYWN1bHR5TG9hZFRhYmxlIiwiZGVsZXRlQ2xhc3MiLCJlZGl0Q2xhc3MiLCJjdXJyRGF0YSIsInNldERhdGEiLCJyZWNvcmRJZCIsIm5hbWUiLCJjb250ZW50IiwiY2hpbGRyZW4iLCJrZXkiLCJwcm9jZXNzIiwiY29sb3IiLCJzZXRFZGl0Iiwic2V0S2V5Iiwicm9sZSIsInNldERlbGV0ZSIsImlkIiwieCIsInVuaXQiLCJwb3NpdGlvbiIsInZpc2liaWxpdHkiLCJhcHBlbmQiLCJ1cGRhdGVGYWN1bHR5TG9hZCIsIm1vZGFsIiwiZGVsZXRlRmFjdWx0eUxvYWQiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiY29va2llRGF0YSIsImp3dCIsInZhbHVlIiwicmVzcG9uc2UiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImVyciIsImdldCIsImRlbGV0ZSIsImVudHJpZXMiLCJhY2Nlc3MiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsZUFBTixTQUE4QkMsd0RBQTlCLENBQTZDO0FBQ3pDQyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUNkLFVBQU1BLEtBQU47QUFDSDs7QUFFREMsUUFBTSxHQUFFO0FBQ0osUUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQSxRQUFJQyxRQUFRLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQWY7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUdILFFBQVosRUFBc0JHLENBQUMsSUFBSSxJQUEzQixFQUFpQ0EsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQ0osVUFBSSxDQUFDSyxJQUFMLENBQVVELENBQVY7QUFDSDs7QUFFRCxRQUFJRSxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUixJQUFaLEVBQWtCUyxHQUFsQixDQUF1QkwsQ0FBRCxJQUFPO0FBQ3ZDLDBCQUNJO0FBQVEsYUFBSyxFQUFFSixJQUFJLENBQUNJLENBQUQsQ0FBbkI7QUFBQSxtQkFB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QUFDLDBCQUFnQixxQkFBakI7QUFBd0NDLHVCQUFhLEVBQUcsVUFBU3RELEtBQU07QUFBdkU7QUFKbUIsT0FBRCxDQUE1QjtBQU1ILGFBQU9nRCxRQUFRLENBQUNJLElBQWhCO0FBQ0csS0FmRCxNQWVPO0FBQ0hWLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZ0IsTUFBTSxDQUFDQyxNQUFQLENBQWN0RCxPQUExQjtBQUNOO0FBQ0QsR0FuQkQsQ0FtQkUsT0FBT2lELEdBQVAsRUFBWTtBQUNiYixXQUFPLENBQUNuQyxLQUFSLENBQWNnRCxHQUFkO0FBQ0EsV0FBT0EsR0FBUDtBQUNBO0FBQ0QsQyIsImZpbGUiOiJjb21wb25lbnRzX2ZhY3VsdHlfZmFjdWx0eS1sb2FkX2ZhY3VsdHktbG9hZC10YWJsZV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhZGRGYWN1bHR5TG9hZCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hZG1pbi9hZGRGYWN1bHR5TG9hZCdcclxuXHJcbmNsYXNzIEZhY3VsdHlMb2FkRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgeWVhciA9IFtdXHJcbiAgICAgICAgbGV0IGN1cnJZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgZm9yKGxldCBpID0gY3VyclllYXI7IGkgPj0gMTk3MDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHllYXIucHVzaChpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHllYXIpLm1hcCgoaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt5ZWFyW2ldfT57eWVhcltpXS0xfS17eWVhcltpXX08L29wdGlvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IEZhY0xvYWREZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4gICAgICAgICAgICBzZWN0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBzZW1lc3RlcjogXCIxc3QgU2VtZXN0ZXJcIixcclxuICAgICAgICAgICAgYWNhZGVtaWNZZWFyOiBjdXJyWWVhcixcclxuICAgICAgICAgICAgc3lsbGFidXM6IFwiXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17RmFjTG9hZERldGFpbHN9XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywge3Jlc2V0Rm9ybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNMb2FkRm9ybScpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhZGRGYWN1bHR5TG9hZChmb3JtRGF0YSwgdGhpcy5wcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2xvYWRhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsb2FkYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKVxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vJyArIHRoaXMucHJvcHMuZmFjdWx0eUlkKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGlkID0gXCJmYWNMb2FkRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkFkZCBGYWN1bHR5IExvYWQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcImhpZGRlblwiIG5hbWUgPSBcImZhY3VsdHlJZFwiIHZhbHVlID0ge3RoaXMucHJvcHMuZmFjdWx0eUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXAgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiU3ViamVjdFwiPiBTdWJqZWN0IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInN1YmplY3RcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgc3ViamVjdFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlNlY3Rpb25cIj4gU2VjdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJzZWN0aW9uXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHNlY3Rpb25cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJTZW1lc3RlclwiPiBTZW1lc3RlciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzZW1lc3RlclwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCIxc3RcIj4xc3QgU2VtZXN0ZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiMm5kXCI+Mm5kIFNlbWVzdGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIk1pZHllYXJcIj5NaWQtWWVhcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlllYXJcIj4gQWNhZGVtaWMgWWVhciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJhY2FkZW1pY1llYXJcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUxvYWRGb3JtXHJcbiIsImltcG9ydCBOYW1lRGlzcGxheSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hbWUtZGlzcGxheSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IEZhY3VsdHlMb2FkRm9ybSBmcm9tICcuL2ZhY3VsdHktbG9hZC1mb3JtJ1xyXG5pbXBvcnQgdXBkYXRlRmFjdWx0eUxvYWQgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWRtaW4vdXBkYXRlRmFjdWx0eUxvYWQnXHJcbmltcG9ydCBkZWxldGVGYWN1bHR5TG9hZCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hZG1pbi9kZWxldGVGYWN1bHR5TG9hZCdcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdHlMb2FkVGFibGUocHJvcHMpIHtcclxuICAgIGxldCB5ZWFyID0gW11cclxuICAgIGxldCBjdXJyWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG4gICAgZm9yKGxldCBpID0gY3VyclllYXI7IGkgPj0gMTk3MDsgaS0tKSB7XHJcbiAgICAgICAgeWVhci5wdXNoKGkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmtleXMoeWVhcikubWFwKChpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt5ZWFyW2ldfT57eWVhcltpXS0xfS17eWVhcltpXX08L29wdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBkZWxldGVDbGFzcyA9IDBcclxuICAgIGxldCBlZGl0Q2xhc3MgPSAwXHJcblxyXG4gICAgY29uc3QgW2N1cnJEYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICByZWNvcmRJZDogMCxcclxuICAgICAgICBzdWJqZWN0OiAnJyxcclxuICAgICAgICBzZWN0aW9uOiAnJyxcclxuICAgICAgICBzZW1lc3RlcjogJycsXHJcbiAgICAgICAgYWNhZGVtaWNZZWFyOiAnJyxcclxuICAgICAgICBzeWxsYWJ1czogJydcclxuICAgIH0pXHJcbiAgICBjb25zdCBuYW1lID0gcHJvcHMubmFtZVxyXG4gICAgbGV0IGNvbnRlbnQgXHJcblxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuW2tleV0ucmVjb3JkSWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5ID0ge3Byb3BzLmNoaWxkcmVuW2tleV0ucmVjb3JkSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5zdWJqZWN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnNlY3Rpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uc2VtZXN0ZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYWNhZGVtaWNZZWFyIC0gMSArICcgLSAnICsgcHJvcHMuY2hpbGRyZW5ba2V5XS5hY2FkZW1pY1llYXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuW2tleV0uc3lsbGFidXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlVQTE9BRFNfVVJMICsgcHJvcHMuY2hpbGRyZW5ba2V5XS5zeWxsYWJ1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7eyBjb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3BzLmVkaXRDbGFzcykgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNhZGRTeWxsYWJ1c1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQocHJvcHMuY2hpbGRyZW5ba2V5XS5yZWNvcmRJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEtleShlZGl0Q2xhc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLmVkaXRDbGFzcykgJiYgIXByb3BzLmNoaWxkcmVuW2tleV0uc3lsbGFidXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNhZGRTeWxsYWJ1c1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHByb3BzLmNoaWxkcmVuW2tleV0ucmVjb3JkSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5KGVkaXRDbGFzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFkZCBTeWxsYWJ1czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMuZWRpdENsYXNzICYmICFwcm9wcy5jaGlsZHJlbltrZXldLnN5bGxhYnVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5vbmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJvbGU9PTUgJiYgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdENsYXNzXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQocHJvcHMuY2hpbGRyZW5ba2V5XS5yZWNvcmRJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkoZWRpdENsYXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2RlbGV0ZUNsYXNzXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlbGV0ZShwcm9wcy5jaGlsZHJlbltrZXldLnJlY29yZElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPn1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29udGVudCA9IDx0ZCBjb2xTcGFuID0gXCI3XCI+PHAgYWxpZ24gPSBcImNlbnRlclwiPk5vIGRhdGEgYXZhaWxhYmxlITwvcD48L3RkPlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEVkaXQoaWQpIHtcclxuICAgICAgICBlZGl0Q2xhc3MgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZShpZCkge1xyXG4gICAgICAgIGRlbGV0ZUNsYXNzID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRLZXkoeCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS5yZWNvcmRJZCA9PSB4KSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHByb3BzLmNoaWxkcmVuW2tleV0pXHJcbiAgICAgICAgICAgICAgICBpZihwcm9wcy5jaGlsZHJlbltrZXldLnN5bGxhYnVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShjdXJyRGF0YSA9PiAoey4uLmN1cnJEYXRhLCBzeWxsYWJ1czogcHJvcHMuY2hpbGRyZW5ba2V5XS5zeWxsYWJ1c30pKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIHN5bGxhYnVzOiAnTm9uZSd9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGFsaWduID0gXCJjZW50ZXJcIj4gRmFjdWx0eSBMb2FkIDwvaDI+XHJcbiAgICAgICAgICAgIDxOYW1lRGlzcGxheSB1bml0ID0ge3Byb3BzLnVuaXR9IHBvc2l0aW9uPXtwcm9wcy5wb3NpdGlvbn0+e3Byb3BzLm5hbWV9PC9OYW1lRGlzcGxheT5cclxuICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIiBpZD1cImxvYWRhbGVydFwiIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN1YmplY3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2VjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TZW1lc3RlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY2FkZW1pYyBZZWFyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN5bGxhYnVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJvbGU9PTUgJiYgPHRoPkFjdGlvbjwvdGg+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsgcHJvcHMucm9sZT09NSAmJiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhY3VsdHlMb2FkRm9ybSB0b2tlbiA9IHsgcHJvcHMudG9rZW4gfSBmYWN1bHR5SWQgPSB7IHByb3BzLmZhY3VsdHlJZCB9IHJvbGU9eyBwcm9wcy5yb2xlIH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICB9XHJcblx0XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZWRpdENsYXNzXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJlZGl0Q2xhc3NMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImVkaXRDbGFzc0xhYmVsXCI+VXBkYXRlIENsYXNzIFJlY29yZDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Y3VyckRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0Q2xhc3NGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZWNvcmRJZCcsIGN1cnJEYXRhLnJlY29yZElkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgdXBkYXRlRmFjdWx0eUxvYWQoZm9ybURhdGEsIHByb3BzLnRva2VuLCBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2xvYWRhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2xvYWRhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluLycgKyBwcm9wcy5mYWN1bHR5SWQsICcvYWRtaW4vJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGlkID0gXCJlZGl0Q2xhc3NGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJzdWJqZWN0XCI+IFN1YmplY3QgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJzdWJqZWN0XCIgaWQgPSBcInN1YmplY3RcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgc3ViamVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcInNlY3Rpb25cIj4gU2VjdGlvbiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInNlY3Rpb25cIiBpZD0gXCJzZWN0aW9uXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHNlY3Rpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJzZW1lc3RlclwiPiBTZW1lc3RlciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzID0gXCJzZWxlY3RcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInNlbWVzdGVyXCIgaWQgPSBcInNlbWVzdGVyXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiMXN0XCI+MXN0IFNlbWVzdGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiMm5kXCI+Mm5kIFNlbWVzdGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiTWlkeWVhclwiPk1pZC1ZZWFyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJZZWFyXCI+IEFjYWRlbWljIFllYXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcyA9IFwic2VsZWN0XCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJhY2FkZW1pY1llYXJcIiBpZCA9IFwiYWNhZGVtaWNZZWFyXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9IG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdENsYXNzJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImRlbGV0ZUNsYXNzXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJkZWxldGVDbGFzc0xhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJkZWxldGVDbGFzc0xhYmVsXCI+RGVsZXRlIENsYXNzIFJlY29yZDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBmYWN1bHR5IGxvYWQgaW5mb3JtYXRpb24/IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5ObywgZG9uJ3QgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZGVsZXRlRmFjdWx0eUxvYWQoZGVsZXRlQ2xhc3MsIHByb3BzLnRva2VuLCBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2xvYWRhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2xvYWRhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluLycgKyBwcm9wcy5mYWN1bHR5SWQsICcvYWRtaW4vJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+WWVzLCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImFkZFN5bGxhYnVzXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJhZGRTeWxsYWJ1c0xhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiYWRkU3lsbGFidXNMYWJlbFwiPlVwZGF0ZSBDbGFzcyBSZWNvcmRzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtjdXJyRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFN5bGxGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZWNvcmRJZCcsIGN1cnJEYXRhLnJlY29yZElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB1cGRhdGVGYWN1bHR5TG9hZChmb3JtRGF0YSwgcHJvcHMudG9rZW4sIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsb2FkYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsb2FkYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvZmFjdWx0eS1sb2FkJywgJy9mYWN1bHR5L2ZhY3VsdHktbG9hZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gaWQgPSBcImFkZFN5bGxGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJzeWxsYWJ1c1wiPiBBZGQvRWRpdCBTeWxsYWJ1cyBbVXBsb2FkZWQ6IHtjdXJyRGF0YS5zeWxsYWJ1c31dIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJzeWxsYWJ1c1wiIGlkID0gXCJzeWxsYWJ1c1wiIHZhbHVlPXt1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiaGlkZGVuXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJzdWJqZWN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJoaWRkZW5cIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcInNlY3Rpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImhpZGRlblwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwic2V0UmVzdWx0c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30gb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhZGRTeWxsYWJ1cycpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUxvYWRUYWJsZVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRGYWN1bHR5TG9hZChmb3JtRGF0YSwgdG9rZW4pIHtcclxuXHRsZXQgY29va2llRGF0YSA9IGp3dC5kZWNvZGUodG9rZW4pXHJcbiAgICBsZXQgZmFjdWx0eUlkID0gY29va2llRGF0YS5mYWN1bHR5SWRcclxuXHR0cnkge1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Zm9yKHZhciB2YWx1ZSBvZiBmb3JtRGF0YS52YWx1ZXMoKSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codmFsdWUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHRcdCAgICBtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHQgICAgdXJsOiBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2xvYWQnLFxyXG5cdFx0XHRcdCAgICBkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0XHQgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG5cdFx0XHQgICAgfSlcdFxyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRmFjdWx0eUxvYWQoZGF0YSwgdG9rZW4sIGZhY3VsdHlJZCkge1xyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvZmFjdWx0eS9sb2FkL1wiICsgZmFjdWx0eUlkLCB7XHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRyZWNvcmRJZDogYCR7ZGF0YX1gXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHR9ICBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycilcclxuXHRcdHJldHVybiBlcnJcclxuXHR9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGYWN1bHR5TG9hZChmb3JtRGF0YSwgdG9rZW4sIGZhY3VsdHlJZCkge1xyXG5cdHRyeSB7XHJcblx0ICAgIGlmICh0b2tlbikge1xyXG5cdCAgICAgICAgbGV0IHVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvbG9hZC8nICsgZmFjdWx0eUlkO1xyXG5cdFx0ICAgIGlmKGZvcm1EYXRhLmdldCgnc2V0UmVzdWx0cycpID09IFwiXCIpIHtcclxuXHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ3NldFJlc3VsdHMnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGZvcih2YXIgdmFsdWUgb2YgZm9ybURhdGEuZW50cmllcygpKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codmFsdWVbMF0gKyAnICcgKyB2YWx1ZVsxXSlcclxuXHRcdFx0fVxyXG5cdFx0ICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHQgICAgbWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0ICAgIHVybDogdXJsLFxyXG5cdFx0XHQgICAgZGF0YTogZm9ybURhdGEsXHJcblx0XHRcdCAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9XHJcblx0XHQgICAgfSlcdFxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coYWNjZXNzLnJlc3VsdC5tZXNzYWdlKVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==