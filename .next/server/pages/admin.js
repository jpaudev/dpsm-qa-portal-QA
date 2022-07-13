(function() {
var exports = {};
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
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

var _jsxFileName = "D:\\nicho\\Documents\\GitHub\\dpsm-qa-portal\\components\\content.js";




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

/***/ "./components/faculty/facultyList.js":
/*!*******************************************!*\
  !*** ./components/faculty/facultyList.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_admin_updateUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin/updateUser */ "./services/admin/updateUser.js");

var _jsxFileName = "D:\\nicho\\Documents\\GitHub\\dpsm-qa-portal\\components\\faculty\\facultyList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function FacultyList(props) {
  let chem;
  let mcsu;
  let physgeo;
  let user = 0;
  const [currData, setData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState({
    userId: 0,
    status: '',
    remarks: '',
    facultyName: ''
  });
  let activeRemarksStyle;
  let inactiveRemarksStyle;

  function handleInputChange(id, event) {
    if (id == 'status') setData(_objectSpread(_objectSpread({}, currData), {}, {
      [id]: event.target.value,
      ['remarks']: ''
    }));else setData(_objectSpread(_objectSpread({}, currData), {}, {
      [id]: event.target.value
    }));
  }

  if (currData.status == 'Inactive') {
    activeRemarksStyle = 'none';
    inactiveRemarksStyle = 'block';
  } else {
    activeRemarksStyle = 'block';
    inactiveRemarksStyle = 'none';
  }

  if (props.children != null) {
    let path;
    if (props.path == "approval") path = '/faculty/approval/';else if (props.path == 'admin') path = '/admin/';else if (props.path == 'info') path = '/faculty/view/';
    chem = Object.keys(props.children).map(key => {
      if (props.children[key].unitId == 1) {
        let faculty = props.children[key].faculty_units;
        let facultyList = Object.keys(faculty).map(index => {
          let surname = faculty[index].faculty_personal_info.lastName;
          let firstName = faculty[index].faculty_personal_info.firstName;
          let facultyId = faculty[index].facultyId;
          let forApprovalCount = faculty[index].forApprovalCount;
          let statusClass;
          let lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0];

          if (props.path != 'approval') {
            statusClass = 'disabled btn ';
            faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass += 'btn-warning' : statusClass += 'btn-danger';
          }

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "list-group",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: `${path + encodeURIComponent(facultyId)}`,
                  className: "list-group-item list-group-item-action list-group-item-light",
                  forApproval: faculty[index].faculty_personal_info,
                  children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "badge badge-danger",
                    children: forApprovalCount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 18
                  }, this), props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})`]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 8
            }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 9
            }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 9
            }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-dismiss": "modal",
                "data-target": "#editStatus",
                onClick: () => {
                  setEdit(faculty[index].faculty_personal_info.user.userId);
                  setKey(user);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
              className: "table",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 9
                }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 9
                }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 9
                }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 8
              }, this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }, this);
      }
    });
    mcsu = Object.keys(props.children).map(key => {
      if (props.children[key].unitId == 2) {
        let faculty = props.children[key].faculty_units;
        let facultyList = Object.keys(faculty).map(index => {
          let surname = faculty[index].faculty_personal_info.lastName;
          let firstName = faculty[index].faculty_personal_info.firstName;
          let facultyId = faculty[index].facultyId;
          let forApprovalCount = faculty[index].forApprovalCount;
          let statusClass;
          let lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0];

          if (props.path != 'approval') {
            statusClass = 'disabled btn ';
            faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass += 'btn-warning' : statusClass += 'btn-danger';
          }

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "list-group",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: `${path + encodeURIComponent(facultyId)}`,
                  className: "list-group-item list-group-item-action list-group-item-light",
                  children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "badge badge-danger",
                    children: forApprovalCount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 18
                  }, this), props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})`]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 8
            }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 9
            }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 9
            }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-dismiss": "modal",
                "data-target": "#editStatus",
                onClick: () => {
                  setEdit(faculty[index].faculty_personal_info.user.userId);
                  setKey(user);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
              className: "table",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 9
                }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 9
                }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 9
                }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 8
              }, this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 6
        }, this);
      }
    });
    physgeo = Object.keys(props.children).map(key => {
      if (props.children[key].unitId == 3) {
        let faculty = props.children[key].faculty_units;
        let facultyList = Object.keys(faculty).map(index => {
          let surname = faculty[index].faculty_personal_info.lastName;
          let firstName = faculty[index].faculty_personal_info.firstName;
          let facultyId = faculty[index].facultyId;
          let forApprovalCount = faculty[index].forApprovalCount;
          let statusClass;
          let lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0];

          if (props.path != 'approval') {
            statusClass = 'disabled btn ';
            faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass += 'btn-warning' : statusClass += 'btn-danger';
          }

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "list-group",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: `${path + encodeURIComponent(facultyId)}`,
                  className: "list-group-item list-group-item-action list-group-item-light",
                  children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "badge badge-danger",
                    children: forApprovalCount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 18
                  }, this), props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})`]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 8
            }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 9
            }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 9
            }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-dismiss": "modal",
                "data-target": "#editStatus",
                onClick: () => {
                  setEdit(faculty[index].faculty_personal_info.user.userId);
                  setKey(user);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 7
          }, this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
              className: "table",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 9
                }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 9
                }, this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 9
                }, this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 8
              }, this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 6
        }, this);
      }
    });

    function setEdit(id) {
      user = id;
    }

    async function setKey(x) {
      await Object.keys(props.children).map(async key => {
        let faculty = props.children[key].faculty_units;
        await Object.keys(faculty).map(async index => {
          if (faculty[index].faculty_personal_info.user.userId == x) {
            await setData({
              userId: x,
              status: faculty[index].faculty_personal_info.user.status,
              remarks: faculty[index].faculty_personal_info.user.remarks,
              facultyName: faculty[index].faculty_personal_info.lastName + ', ' + faculty[index].faculty_personal_info.firstName
            });
          }
        });
      });
    }
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      align: "center",
      children: "No approvals needed!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "alert alert-success",
      role: "alert",
      id: "facultyStatusalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 4
    }, this), chem, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 4
    }, this), mcsu, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 4
    }, this), physgeo, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "editStatus",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editStatus",
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
              id: "editStatus",
              children: ["Update Faculty Status - ", currData.facultyName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 314,
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
                lineNumber: 316,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "Status",
                    children: " Status "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 324,
                    columnNumber: 10
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                    className: "form-control",
                    name: "Status",
                    id: "Status",
                    value: currData.status,
                    onChange: e => handleInputChange("status", e),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      value: "Active",
                      children: "Active"
                    }, "active", false, {
                      fileName: _jsxFileName,
                      lineNumber: 326,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      value: "Inactive",
                      children: "Inactive"
                    }, "inactive", false, {
                      fileName: _jsxFileName,
                      lineNumber: 327,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 323,
                  columnNumber: 30
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-row",
                id: "activeremarksrow",
                style: {
                  display: activeRemarksStyle
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "Remarks",
                    children: " Remarks "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 334,
                    columnNumber: 10
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                    className: "form-control",
                    name: "Remarks",
                    id: "Remarks",
                    value: currData.remarks || '',
                    onChange: e => handleInputChange("remarks", e),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      value: "",
                      children: "-- SELECT REMARKS --"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 336,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      value: "On Leave",
                      children: "On Leave"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 337,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 335,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 333,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-row",
                id: "inactiveremarksrow",
                style: {
                  display: inactiveRemarksStyle
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "Remarks",
                    children: " Remarks "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
                    columnNumber: 10
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                    className: "form-control",
                    name: "Remarks",
                    id: "Remarks",
                    value: currData.remarks || '',
                    onChange: e => handleInputChange("remarks", e),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      value: "",
                      children: "-- SELECT REMARKS --"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 346,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      value: "Retired",
                      children: "Retired"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 347,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      value: "Resigned",
                      children: "Resigned"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 348,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 345,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 343,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 319,
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
              lineNumber: 356,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: async () => {
                $('#editStatus').modal('toggle');
                let alert = document.getElementById("facultyStatusalert");
                let res = await (0,_services_admin_updateUser__WEBPACK_IMPORTED_MODULE_4__.default)(currData, props.token);

                if (res.success == true) {
                  alert.className = "alert alert-success";
                  alert.style = "visibility: visible";
                  alert.innerHTML = res.message;
                } else {
                  alert.className = "alert alert-danger";
                  if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                }

                $("#facultyStatusalert").fadeTo(5000, 500).slideUp(500, function () {
                  $("#facultyStatusalert").slideUp(500);
                });
                next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/admin');
              },
              children: "Save changes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 300,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FacultyList);

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

var _jsxFileName = "D:\\nicho\\Documents\\GitHub\\dpsm-qa-portal\\components\\footer.js";


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

var _jsxFileName = "D:\\nicho\\Documents\\GitHub\\dpsm-qa-portal\\components\\header.js";



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
      children: ".navbar.jsx-3546386183{background-color:#910303;width:100%;}h2.jsx-3546386183,h5.jsx-3546386183{font-family:Georgia;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsXFxjb21wb25lbnRzXFxoZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNjLEFBRzZCLEFBSUwsb0JBQ1QsS0FKRCxNQUtYLEtBSkEiLCJmaWxlIjoiRDpcXG5pY2hvXFxEb2N1bWVudHNcXEdpdEh1YlxcZHBzbS1xYS1wb3J0YWxcXGNvbXBvbmVudHNcXGhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG5cdGxldCByb2xlTmFtZSA9IFwiXCJcclxuXHRzd2l0Y2gocHJvcHMucm9sZSl7XHJcblx0XHRjYXNlIDE6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiRmFjdWx0eVwiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDI6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiVW5pdCBIZWFkXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMzogXHJcblx0XHRcdHJvbGVOYW1lID0gXCJEZXBhcnRtZW50IENoYWlyXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiQWRtaW4gQ2xlcmtcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZHBzbS1zZWFsLnBuZ1wiIHdpZHRoPVwiMTg2XCIgaGVpZ2h0PVwiMTUwXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCIgYWx0PVwiRFBTTS1RQS1Qb3J0YWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0PGgyPiBEUFNNIFFBIFBPUlRBTCA8L2gyPlxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibWwtYXV0b1wiPlxyXG5cdFx0XHQ8aDU+IEN1cnJlbnRseSBMb2dnZWQgSW46IDxMaW5rIGhyZWYgPSBcIi9zZXR0aW5ncy9jaGFuZ2UtcGFzc3dvcmRcIj48YT4ge3Byb3BzLm5hbWV9ICh7cm9sZU5hbWV9KSA8L2E+PC9MaW5rPiA8L2g1PlxyXG5cdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0Lm5hdmJhcntcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzkxMDMwMztcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdH1cclxuXHRcdGgyLCBoNXtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdlb3JnaWE7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0fVxyXG5cdGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXX0= */\n/*@ sourceURL=D:\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal\\\\components\\\\header.js */"
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

var _jsxFileName = "D:\\nicho\\Documents\\GitHub\\dpsm-qa-portal\\components\\layout.js";







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

var _jsxFileName = "D:\\nicho\\Documents\\GitHub\\dpsm-qa-portal\\components\\sidebar.js";






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
        children: "#menu.jsx-1836586042{background-color:#017823;}.list-group-item-success.jsx-1836586042{text-indent:20%;}#active.jsx-1836586042{background-color:#005919;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsXFxjb21wb25lbnRzXFxzaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFYyxBQUdnQyxBQUdaLEFBR1UsZ0JBRjFCLFNBSEEsQUFNWSxXQUNaIiwiZmlsZSI6IkQ6XFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsXFxjb21wb25lbnRzXFxzaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIocHJvcHMpIHsgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWUsIHJlbW92ZUNvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUNvb2tpZSgpIHtcclxuICAgICAgICByZW1vdmVDb29raWUoXCJ1c2VyXCIsIHtwYXRoOicvJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmYWN1bHR5ID0gdHJ1ZVxyXG4gICAgbGV0IHN0YWZmID0gdHJ1ZVxyXG5cclxuICAgIGlmKHByb3BzLnJvbGUgPT0gMSB8fCBwcm9wcy5yb2xlID09IDIgfHwgcHJvcHMucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgc3RhZmYgPSBmYWxzZVxyXG4gICAgICAgIGlmKHByb3BzLnJvbGUgPT0gMiB8fCBwcm9wcy5yb2xlID09IDMpIHtcclxuICAgICAgICAgICAgZmFjdWx0eSA9IGZhbHNlXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcImZhbHNlXCIpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgXHRzZXRBY3RpdmUoIWlzQWN0aXZlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXJcIj5cclxuXHQgICAgPGRpdiBjbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWluZm8gY29sLTEyIGQtbWQtbm9uZSB0ZXh0LWNlbnRlclwiIG9uQ2xpY2sgPSB7aGFuZGxlVG9nZ2xlfT4gTWFpbiBNZW51IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJtZW51XCIgY2xhc3NOYW1lID0ge2lzQWN0aXZlID8gbnVsbCA6IFwiZC1ub25lIGQtbWQtYmxvY2tcIn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXNlY29uZGFyeVwiIGRhdGEtdG9nZ2xlID0gXCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0ID0gXCIjZmFjdWx0eU1lbnVcIiBhcmlhLWNvbnRyb2xzID0gXCJmYWN1bHR5TWVudVwiPiBGYWN1bHR5IDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSBcImZhY3VsdHlNZW51XCIgY2xhc3NOYW1lID0gXCJjb2xsYXBzZSBzaG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eVwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5EYXNoYm9hcmQ8L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9iYXNpYy1pbmZvXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYmFzaWMtaW5mb1wiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+QmFzaWMgSW5mb3JtYXRpb248L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9hY2NvbXBsaXNobWVudFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2FjY29tcGxpc2htZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5BY2NvbXBsaXNobWVudDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2ZhY3VsdHktbG9hZFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2ZhY3VsdHktbG9hZFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMb2FkPC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvdmlldy9hbGxcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvdmlldy9hbGxcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkZhY3VsdHkgTGlzdDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2FwcHJvdmFsXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9hcHByb3ZhbFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGluZyBBcHByb3ZhbHMgJm5ic3A7e3Byb3BzLmFwcHJvdmFsTGlzdC5mYWN1bHR5Q291bnQgPiAwICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntwcm9wcy5hcHByb3ZhbExpc3QuZmFjdWx0eUNvdW50fTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7IHN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2FkbWluXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hZG1pblwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMaXN0PC9hPjwvTGluaz4gfVxyXG5cdFx0ICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgcHJvcHMucm9sZUFzc2lnbm1lbnQgJiYgPExpbmsgaHJlZiA9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlIEFzc2lnbm1lbnQgJm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+ITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmICFwcm9wcy5yb2xlQXNzaWdubWVudCAmJiA8TGluayBocmVmID17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGUgQXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUNvb2tpZX0+TG9nIE91dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdCNtZW51IHtcclxuICBcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMTc4MjM7XHJcblx0XHRcdH1cclxuXHRcdFx0Lmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNze1xyXG5cdFx0XHRcdHRleHQtaW5kZW50OjIwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQjYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDU5MTk7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0PC9kaXY+XHRcdFx0XHRcdCAgICBcclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iXX0= */\n/*@ sourceURL=D:\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal\\\\components\\\\sidebar.js */"
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

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");
/* harmony import */ var _components_faculty_facultyList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/faculty/facultyList */ "./components/faculty/facultyList.js");

var _jsxFileName = "D:\\nicho\\Documents\\GitHub\\dpsm-qa-portal\\pages\\admin\\index.js";







function FacultyList(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    userId: props.data.userId,
    role: props.data.role,
    name: props.data.name,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      align: "center",
      children: "Faculty List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/admin/faculty",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: "btn btn-primary float-right",
        children: "Add Faculty"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 43
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/admin/generate-reports",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: "btn btn-primary float-right",
        children: "Generate Reports"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 45
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_faculty_facultyList__WEBPACK_IMPORTED_MODULE_6__.default, {
      path: "admin",
      role: props.data.role,
      token: props.token.user,
      children: props.facultyList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

async function getServerSideProps(context) {
  const token = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(context.req);
  let data;
  let facultyList;

  if (context.res) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.isExpired)(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      };
    } else {
      data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().decode(token.user);
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token.user
        }
      };
      const faculty = await fetch("http://localhost:3001/api" + '/faculty/basic-info', header);
      facultyList = await faculty.json();
    }
  }

  return {
    props: {
      token: token && token,
      data,
      facultyList: facultyList.result
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (FacultyList);

/***/ }),

/***/ "./services/admin/updateUser.js":
/*!**************************************!*\
  !*** ./services/admin/updateUser.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function updateUser(data, token) {
  try {
    if (token) {
      let url = "http://localhost:3001/api" + '/user/' + `${data.userId}`;
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'PUT',
        url: url,
        data: {
          status: `${data.status}`,
          remarks: `${data.remarks}`
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/admin/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9mYWN1bHR5TGlzdC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9wYWdlcy9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL2FkbWluL3VwZGF0ZVVzZXIuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwiY29va2llXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9pZ25vcmVkfEQ6XFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ29udGVudCIsInByb3BzIiwiY2hpbGRyZW4iLCJGYWN1bHR5TGlzdCIsImNoZW0iLCJtY3N1IiwicGh5c2dlbyIsInVzZXIiLCJjdXJyRGF0YSIsInNldERhdGEiLCJSZWFjdCIsInVzZXJJZCIsInN0YXR1cyIsInJlbWFya3MiLCJmYWN1bHR5TmFtZSIsImFjdGl2ZVJlbWFya3NTdHlsZSIsImluYWN0aXZlUmVtYXJrc1N0eWxlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJpZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwYXRoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInVuaXRJZCIsImZhY3VsdHkiLCJmYWN1bHR5X3VuaXRzIiwiZmFjdWx0eUxpc3QiLCJpbmRleCIsInN1cm5hbWUiLCJmYWN1bHR5X3BlcnNvbmFsX2luZm8iLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsImZhY3VsdHlJZCIsImZvckFwcHJvdmFsQ291bnQiLCJzdGF0dXNDbGFzcyIsImxhc3RVcGRhdGVkIiwiZmFjdWx0eV91cGRhdGUiLCJ1cGRhdGVkQXQiLCJzcGxpdCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJvbGUiLCJzZXRFZGl0Iiwic2V0S2V5IiwidW5pdCIsIngiLCJ2aXNpYmlsaXR5IiwiZSIsImRpc3BsYXkiLCIkIiwibW9kYWwiLCJhbGVydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXMiLCJ1cGRhdGVVc2VyIiwidG9rZW4iLCJzdWNjZXNzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwiZXJyb3IiLCJmYWRlVG8iLCJzbGlkZVVwIiwiUm91dGVyIiwiRm9vdGVyIiwiSGVhZGVyIiwicm9sZU5hbWUiLCJuYW1lIiwiTGF5b3V0IiwiYXBwcm92YWxMaXN0Iiwicm9sZUFzc2lnbm1lbnRGbGFnIiwiU2lkZWJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJ1c2VDb29raWVzIiwiaGFuZGxlUmVtb3ZlQ29va2llIiwic3RhZmYiLCJpc0FjdGl2ZSIsInNldEFjdGl2ZSIsInVzZVN0YXRlIiwiaGFuZGxlVG9nZ2xlIiwicGF0aG5hbWUiLCJmYWN1bHR5Q291bnQiLCJyb2xlQXNzaWdubWVudCIsInBhcnNlQ29va2llcyIsInJlcSIsImNvb2tpZSIsImhlYWRlcnMiLCJpc0V4cGlyZWQiLCJkZWNvZGVkIiwiand0Iiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJleHAiLCJkYXRhIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsImhlYWRlciIsImZldGNoIiwicHJvY2VzcyIsImpzb24iLCJyZXN1bHQiLCJ1cmwiLCJyZXNwb25zZSIsImF4aW9zIiwibWV0aG9kIiwiQXV0aG9yaXphdGlvbiIsImVyciIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7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b0I7QUFHekJiLFlBQUksRUFBRTtBQUNGM0YsZ0JBQU0sRUFBRyxHQUFFMkYsSUFBSSxDQUFDM0YsTUFBTyxFQURyQjtBQUVGQyxpQkFBTyxFQUFHLEdBQUUwRixJQUFJLENBQUMxRixPQUFRO0FBRnZCLFNBSG1CO0FBT3pCa0YsZUFBTyxFQUFFO0FBQUMsMEJBQWdCLGtCQUFqQjtBQUFxQ3lCLHVCQUFhLEVBQUcsVUFBUzdELEtBQU07QUFBcEU7QUFQZ0IsT0FBRCxDQUE1QjtBQVNBLGFBQU8wRCxRQUFRLENBQUNkLElBQWhCO0FBRVQ7QUFDRCxHQWZELENBZUUsT0FBT2tCLEdBQVAsRUFBWTtBQUNiQyxXQUFPLENBQUN6RCxLQUFSLENBQWN3RCxHQUFkO0FBQ0EsV0FBT0EsR0FBUDtBQUNBO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUN0QkQsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2FkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcicgXHJcblxyXG5mdW5jdGlvbiBDb250ZW50KHByb3BzKXtcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzID0gXCJyb3dcIj5cclxuICAgICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB1cGRhdGVVc2VyIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkbWluL3VwZGF0ZVVzZXInXHJcblxyXG5mdW5jdGlvbiBGYWN1bHR5TGlzdChwcm9wcyl7IFxyXG5cdGxldCBjaGVtXHJcblx0bGV0IG1jc3VcclxuXHRsZXQgcGh5c2dlb1xyXG5cdGxldCB1c2VyID0gMFxyXG5cdGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcblx0XHR1c2VySWQ6IDAsXHJcbiAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgICByZW1hcmtzOiAnJyxcclxuXHRcdGZhY3VsdHlOYW1lOiAnJ1xyXG4gICAgfSlcclxuXHJcblx0bGV0IGFjdGl2ZVJlbWFya3NTdHlsZVxyXG5cdGxldCBpbmFjdGl2ZVJlbWFya3NTdHlsZSBcclxuXHRcclxuXHRmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShpZCwgZXZlbnQpIHtcclxuXHRcdGlmKGlkID09ICdzdGF0dXMnKSBzZXREYXRhKHsuLi5jdXJyRGF0YSwgW2lkXTogZXZlbnQudGFyZ2V0LnZhbHVlLCBbJ3JlbWFya3MnXTogJyd9KTtcclxuXHRcdGVsc2Ugc2V0RGF0YSh7Li4uY3VyckRhdGEsIFtpZF06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG5cdH1cclxuXHJcblx0aWYoY3VyckRhdGEuc3RhdHVzID09ICdJbmFjdGl2ZScpIHtcclxuXHRcdGFjdGl2ZVJlbWFya3NTdHlsZSA9ICdub25lJ1xyXG5cdFx0aW5hY3RpdmVSZW1hcmtzU3R5bGUgPSAnYmxvY2snOyBcclxuXHQgfSBlbHNlIHtcclxuXHRcdGFjdGl2ZVJlbWFya3NTdHlsZSA9ICdibG9jaydcclxuXHRcdGluYWN0aXZlUmVtYXJrc1N0eWxlID0gJ25vbmUnXHJcblx0IH0gXHJcblx0XHJcblx0aWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG5cdFx0bGV0IHBhdGhcclxuXHRcdGlmKHByb3BzLnBhdGggPT0gXCJhcHByb3ZhbFwiKSBwYXRoID0gJy9mYWN1bHR5L2FwcHJvdmFsLydcclxuXHRcdGVsc2UgaWYocHJvcHMucGF0aCA9PSAnYWRtaW4nKSBwYXRoID0gJy9hZG1pbi8nXHJcblx0XHRlbHNlIGlmKHByb3BzLnBhdGggPT0gJ2luZm8nKSBwYXRoID0gJy9mYWN1bHR5L3ZpZXcvJ1xyXG5cdFx0XHJcblx0XHRjaGVtID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG5cdFx0XHRpZiAocHJvcHMuY2hpbGRyZW5ba2V5XS51bml0SWQgPT0gMSkgeyBcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5TGlzdCA9IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcCgoaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzdXJuYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmlyc3ROYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZhY3VsdHlJZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlJZFxyXG5cdFx0XHRcdFx0bGV0IGZvckFwcHJvdmFsQ291bnQgPSBmYWN1bHR5W2luZGV4XS5mb3JBcHByb3ZhbENvdW50XHJcblx0XHRcdFx0XHRsZXQgc3RhdHVzQ2xhc3NcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGxhc3RVcGRhdGVkXHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUpIGxhc3RVcGRhdGVkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlLnVwZGF0ZWRBdC5zcGxpdCgnVCcpWzBdXHJcblxyXG5cdFx0XHRcdFx0aWYocHJvcHMucGF0aCAhPSAnYXBwcm92YWwnKSB7XHJcblx0XHRcdFx0XHRcdHN0YXR1c0NsYXNzID0gJ2Rpc2FibGVkIGJ0biAnXHJcblx0XHRcdFx0XHRcdGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyA9PSAnQWN0aXZlJyA/IHN0YXR1c0NsYXNzICs9J2J0bi13YXJuaW5nJyA6IHN0YXR1c0NsYXNzICs9ICdidG4tZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWYgPSB7YCR7cGF0aCArIGVuY29kZVVSSUNvbXBvbmVudChmYWN1bHR5SWQpfWB9IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWxpZ2h0XCIgZm9yQXBwcm92YWw9e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mb30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N1cm5hbWV9LCB7Zmlyc3ROYW1lfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2ZvckFwcHJvdmFsQ291bnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgcHJvcHMucGF0aCA9PSAnaW5mbycgJiYgcHJvcHMucm9sZSA9PSAzICYmIGxhc3RVcGRhdGVkICYmIGAgKExhc3QgVXBkYXRlZDogJHtsYXN0VXBkYXRlZH0pYCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1c308L3NwYW4+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0U3RhdHVzXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXQoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIudXNlcklkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEtleSh1c2VyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoNCBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5jaGlsZHJlbltrZXldLnVuaXR9IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlJlbWFya3M8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHR7ZmFjdWx0eUxpc3R9XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTsgXHJcblx0XHRcdH1cclxuICAgICAgICB9KTtcclxuXHJcblx0XHRtY3N1ID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG5cdFx0XHRpZiAocHJvcHMuY2hpbGRyZW5ba2V5XS51bml0SWQgPT0gMikgeyBcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5TGlzdCA9IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcCgoaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzdXJuYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmlyc3ROYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZhY3VsdHlJZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlJZFxyXG5cdFx0XHRcdFx0bGV0IGZvckFwcHJvdmFsQ291bnQgPSBmYWN1bHR5W2luZGV4XS5mb3JBcHByb3ZhbENvdW50XHJcblx0XHRcdFx0XHRsZXQgc3RhdHVzQ2xhc3NcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGxhc3RVcGRhdGVkXHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUpIGxhc3RVcGRhdGVkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlLnVwZGF0ZWRBdC5zcGxpdCgnVCcpWzBdXHJcblxyXG5cdFx0XHRcdFx0aWYocHJvcHMucGF0aCAhPSAnYXBwcm92YWwnKSB7XHJcblx0XHRcdFx0XHRcdHN0YXR1c0NsYXNzID0gJ2Rpc2FibGVkIGJ0biAnXHJcblx0XHRcdFx0XHRcdGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyA9PSAnQWN0aXZlJyA/IHN0YXR1c0NsYXNzICs9J2J0bi13YXJuaW5nJyA6IHN0YXR1c0NsYXNzICs9ICdidG4tZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWYgPSB7YCR7cGF0aCArIGVuY29kZVVSSUNvbXBvbmVudChmYWN1bHR5SWQpfWB9IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWxpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N1cm5hbWV9LCB7Zmlyc3ROYW1lfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2ZvckFwcHJvdmFsQ291bnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgcHJvcHMucGF0aCA9PSAnaW5mbycgJiYgcHJvcHMucm9sZSA9PSAzICYmIGxhc3RVcGRhdGVkICYmIGAgKExhc3QgVXBkYXRlZDogJHtsYXN0VXBkYXRlZH0pYCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD48c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzfTwvc3Bhbj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIucmVtYXJrcyB8fCAnTm9uZSd9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRTdGF0dXNcIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdChmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0S2V5KHVzZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PkVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGg0IGFsaWduID0gXCJjZW50ZXJcIj4ge3Byb3BzLmNoaWxkcmVuW2tleV0udW5pdH0gPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5TdGF0dXM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+UmVtYXJrczwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+QWN0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdHtmYWN1bHR5TGlzdH1cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpOyBcclxuXHRcdFx0fVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdHBoeXNnZW8gPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcblx0XHRcdGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnVuaXRJZCA9PSAzKSB7IFxyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0bGV0IGZhY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKChpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1cm5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmaXJzdE5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmFjdWx0eUlkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eUlkXHJcblx0XHRcdFx0XHRsZXQgZm9yQXBwcm92YWxDb3VudCA9IGZhY3VsdHlbaW5kZXhdLmZvckFwcHJvdmFsQ291bnRcclxuXHRcdFx0XHRcdGxldCBzdGF0dXNDbGFzc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbGFzdFVwZGF0ZWRcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZSkgbGFzdFVwZGF0ZWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUudXBkYXRlZEF0LnNwbGl0KCdUJylbMF1cclxuXHJcblx0XHRcdFx0XHRpZihwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcpIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSAnZGlzYWJsZWQgYnRuICdcclxuXHRcdFx0XHRcdFx0ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzID09ICdBY3RpdmUnID8gc3RhdHVzQ2xhc3MgKz0nYnRuLXdhcm5pbmcnIDogc3RhdHVzQ2xhc3MgKz0gJ2J0bi1kYW5nZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZiA9IHtgJHtwYXRoICsgZW5jb2RlVVJJQ29tcG9uZW50KGZhY3VsdHlJZCl9YH0gY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tbGlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c3VybmFtZX0sIHtmaXJzdE5hbWV9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57Zm9yQXBwcm92YWxDb3VudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5wYXRoID09ICdpbmZvJyAmJiBwcm9wcy5yb2xlID09IDMgJiYgbGFzdFVwZGF0ZWQgJiYgYCAoTGFzdCBVcGRhdGVkOiAke2xhc3RVcGRhdGVkfSlgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuIGNsYXNzTmFtZT17c3RhdHVzQ2xhc3N9PntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXN9PC9zcGFuPjwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdFN0YXR1c1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0KGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnVzZXJJZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRLZXkodXNlcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+RWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDQgYWxpZ24gPSBcImNlbnRlclwiPiB7cHJvcHMuY2hpbGRyZW5ba2V5XS51bml0fSA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5SZW1hcmtzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5BY3Rpb248L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0e2ZhY3VsdHlMaXN0fVxyXG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7IFxyXG5cdFx0XHR9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RWRpdChpZCkge1xyXG5cdFx0XHR1c2VyID0gaWRcclxuXHRcdH1cclxuXHJcblx0XHRhc3luYyBmdW5jdGlvbiBzZXRLZXkoeCkge1xyXG5cdFx0XHRhd2FpdCBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGFzeW5jIGtleSA9PiB7XHJcblx0XHRcdFx0bGV0IGZhY3VsdHkgPSBwcm9wcy5jaGlsZHJlbltrZXldLmZhY3VsdHlfdW5pdHNcclxuXHRcdFx0XHRhd2FpdCBPYmplY3Qua2V5cyhmYWN1bHR5KS5tYXAoYXN5bmMgaW5kZXggPT4ge1xyXG5cdFx0XHRcdFx0aWYoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIudXNlcklkID09IHgpIHsgXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRhd2FpdCBzZXREYXRhKHtcclxuXHRcdFx0XHRcdFx0XHR1c2VySWQ6IHgsXHJcblx0XHRcdFx0XHRcdFx0c3RhdHVzOiBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXMsXHJcblx0XHRcdFx0XHRcdFx0cmVtYXJrczogZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIucmVtYXJrcyxcclxuXHRcdFx0XHRcdFx0XHRmYWN1bHR5TmFtZTogZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lICsgJywgJyArIGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWVcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9XHJcbiAgICB9IFxyXG4gICAgZWxzZXsgXHJcbiAgICAgICAgcmV0dXJuKDxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBhcHByb3ZhbHMgbmVlZGVkITwvcD4pXHJcbiAgICB9XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJmYWN1bHR5U3RhdHVzYWxlcnRcIiBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIn19PjwvZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0e2NoZW19XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHR7bWNzdX1cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdHtwaHlzZ2VvfVxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJlZGl0U3RhdHVzXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJlZGl0U3RhdHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZWRpdFN0YXR1c1wiPlVwZGF0ZSBGYWN1bHR5IFN0YXR1cyAtIHtjdXJyRGF0YS5mYWN1bHR5TmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJTdGF0dXNcIj4gU3RhdHVzIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiU3RhdHVzXCIgaWQ9XCJTdGF0dXNcIiB2YWx1ZSA9IHsgY3VyckRhdGEuc3RhdHVzIH0gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwic3RhdHVzXCIsIGUpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQWN0aXZlXCIga2V5ID0gXCJhY3RpdmVcIj5BY3RpdmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiSW5hY3RpdmVcIiBrZXkgPSBcImluYWN0aXZlXCI+SW5hY3RpdmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIiBpZD1cImFjdGl2ZXJlbWFya3Nyb3dcIiBzdHlsZT17e2Rpc3BsYXk6IGFjdGl2ZVJlbWFya3NTdHlsZX19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlJlbWFya3NcIj4gUmVtYXJrcyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlJlbWFya3NcIiBpZD1cIlJlbWFya3NcIiB2YWx1ZSA9IHsgY3VyckRhdGEucmVtYXJrcyB8fCAnJ30gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwicmVtYXJrc1wiLCBlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPi0tIFNFTEVDVCBSRU1BUktTIC0tPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIk9uIExlYXZlXCI+T24gTGVhdmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCIgaWQ9XCJpbmFjdGl2ZXJlbWFya3Nyb3dcIiBzdHlsZT17e2Rpc3BsYXk6IGluYWN0aXZlUmVtYXJrc1N0eWxlfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUmVtYXJrc1wiPiBSZW1hcmtzIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiUmVtYXJrc1wiIGlkPVwiUmVtYXJrc1wiIHZhbHVlID0geyBjdXJyRGF0YS5yZW1hcmtzIHx8ICcnfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJyZW1hcmtzXCIsIGUpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+LS0gU0VMRUNUIFJFTUFSS1MgLS08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUmV0aXJlZFwiPlJldGlyZWQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUmVzaWduZWRcIj5SZXNpZ25lZDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2sgPSB7YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXRTdGF0dXMnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhY3VsdHlTdGF0dXNhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHVwZGF0ZVVzZXIoY3VyckRhdGEsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNmYWN1bHR5U3RhdHVzYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNmYWN1bHR5U3RhdHVzYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN1bHR5TGlzdFxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAmY29weTsgQ29weXJpZ2h0IDIwMjEgRFBTTVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuXHRsZXQgcm9sZU5hbWUgPSBcIlwiXHJcblx0c3dpdGNoKHByb3BzLnJvbGUpe1xyXG5cdFx0Y2FzZSAxOiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIkZhY3VsdHlcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAyOiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIlVuaXQgSGVhZFwiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDM6IFxyXG5cdFx0XHRyb2xlTmFtZSA9IFwiRGVwYXJ0bWVudCBDaGFpclwiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIkFkbWluIENsZXJrXCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblx0XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Rwc20tc2VhbC5wbmdcIiB3aWR0aD1cIjE4NlwiIGhlaWdodD1cIjE1MFwiIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiIGFsdD1cIkRQU00tUUEtUG9ydGFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdDxoMj4gRFBTTSBRQSBQT1JUQUwgPC9oMj5cclxuXHRcdFxyXG5cdFx0PGRpdiBjbGFzc05hbWUgPSBcIm1sLWF1dG9cIj5cclxuXHRcdFx0PGg1PiBDdXJyZW50bHkgTG9nZ2VkIEluOiA8TGluayBocmVmID0gXCIvc2V0dGluZ3MvY2hhbmdlLXBhc3N3b3JkXCI+PGE+IHtwcm9wcy5uYW1lfSAoe3JvbGVOYW1lfSkgPC9hPjwvTGluaz4gPC9oNT5cclxuXHRcdDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdC5uYXZiYXJ7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM5MTAzMDM7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHR9XHJcblx0XHRoMiwgaDV7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInXHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudCdcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG4gICAgbGV0IGFwcHJvdmFsTGlzdFxyXG4gICAgaWYocHJvcHMuYXBwcm92YWxMaXN0KSBhcHByb3ZhbExpc3QgPSBwcm9wcy5hcHByb3ZhbExpc3RcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtaWNvbnNAMS40LjEvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy41LjEvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNi4wL3VtZC9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyIG5hbWU9eyBwcm9wcy5uYW1lIH0gcm9sZT17cHJvcHMucm9sZX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCIgaWQgPSBcImxheW91dF9yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHJvbGUgPSB7cHJvcHMucm9sZX0gYXBwcm92YWxMaXN0PXthcHByb3ZhbExpc3R9IGZhY3VsdHlJZCA9IHtwcm9wcy5mYWN1bHR5SWR9IHJvbGVBc3NpZ25tZW50PXtwcm9wcy5yb2xlQXNzaWdubWVudEZsYWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBpZCA9IFwibGF5b3V0X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIocHJvcHMpIHsgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWUsIHJlbW92ZUNvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUNvb2tpZSgpIHtcclxuICAgICAgICByZW1vdmVDb29raWUoXCJ1c2VyXCIsIHtwYXRoOicvJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmYWN1bHR5ID0gdHJ1ZVxyXG4gICAgbGV0IHN0YWZmID0gdHJ1ZVxyXG5cclxuICAgIGlmKHByb3BzLnJvbGUgPT0gMSB8fCBwcm9wcy5yb2xlID09IDIgfHwgcHJvcHMucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgc3RhZmYgPSBmYWxzZVxyXG4gICAgICAgIGlmKHByb3BzLnJvbGUgPT0gMiB8fCBwcm9wcy5yb2xlID09IDMpIHtcclxuICAgICAgICAgICAgZmFjdWx0eSA9IGZhbHNlXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcImZhbHNlXCIpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgXHRzZXRBY3RpdmUoIWlzQWN0aXZlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXJcIj5cclxuXHQgICAgPGRpdiBjbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWluZm8gY29sLTEyIGQtbWQtbm9uZSB0ZXh0LWNlbnRlclwiIG9uQ2xpY2sgPSB7aGFuZGxlVG9nZ2xlfT4gTWFpbiBNZW51IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJtZW51XCIgY2xhc3NOYW1lID0ge2lzQWN0aXZlID8gbnVsbCA6IFwiZC1ub25lIGQtbWQtYmxvY2tcIn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcblx0XHRcdDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXNlY29uZGFyeVwiIGRhdGEtdG9nZ2xlID0gXCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0ID0gXCIjZmFjdWx0eU1lbnVcIiBhcmlhLWNvbnRyb2xzID0gXCJmYWN1bHR5TWVudVwiPiBGYWN1bHR5IDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSBcImZhY3VsdHlNZW51XCIgY2xhc3NOYW1lID0gXCJjb2xsYXBzZSBzaG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eVwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5EYXNoYm9hcmQ8L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9iYXNpYy1pbmZvXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYmFzaWMtaW5mb1wiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+QmFzaWMgSW5mb3JtYXRpb248L2E+PC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9hY2NvbXBsaXNobWVudFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2FjY29tcGxpc2htZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5BY2NvbXBsaXNobWVudDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2ZhY3VsdHktbG9hZFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2ZhY3VsdHktbG9hZFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMb2FkPC9hPjwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvdmlldy9hbGxcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvdmlldy9hbGxcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkZhY3VsdHkgTGlzdDwvYT48L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2FwcHJvdmFsXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9hcHByb3ZhbFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGluZyBBcHByb3ZhbHMgJm5ic3A7e3Byb3BzLmFwcHJvdmFsTGlzdC5mYWN1bHR5Q291bnQgPiAwICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntwcm9wcy5hcHByb3ZhbExpc3QuZmFjdWx0eUNvdW50fTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgICAgICAgICAgICAgICAgICB7IHN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2FkbWluXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hZG1pblwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMaXN0PC9hPjwvTGluaz4gfVxyXG5cdFx0ICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgcHJvcHMucm9sZUFzc2lnbm1lbnQgJiYgPExpbmsgaHJlZiA9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlIEFzc2lnbm1lbnQgJm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+ITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmICFwcm9wcy5yb2xlQXNzaWdubWVudCAmJiA8TGluayBocmVmID17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGUgQXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUNvb2tpZX0+TG9nIE91dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdCNtZW51IHtcclxuICBcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMTc4MjM7XHJcblx0XHRcdH1cclxuXHRcdFx0Lmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNze1xyXG5cdFx0XHRcdHRleHQtaW5kZW50OjIwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQjYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDU5MTk7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0PC9kaXY+XHRcdFx0XHRcdCAgICBcclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iLCJpbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvb2tpZXMocmVxKSB7XHJcbiAgcmV0dXJuIGNvb2tpZS5wYXJzZShyZXEgPyByZXEuaGVhZGVycy5jb29raWUgfHwgXCJcIiA6IGRvY3VtZW50LmNvb2tpZSlcclxufVxyXG5cclxuLy8gY2hlY2sgdG9rZW4gaWYgZXhwaXJlZFxyXG5leHBvcnQgZnVuY3Rpb24gaXNFeHBpcmVkKHVzZXIpIHtcclxuICBsZXQgZGVjb2RlZCA9IGp3dC5kZWNvZGUodXNlcilcclxuICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXHJcbiAgcmV0dXJuIGRlY29kZWQgJiYgZGVjb2RlZC5leHAgPCBub3dcclxufSIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcywgaXNFeHBpcmVkIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIlxyXG5pbXBvcnQgRmFjdWx0eSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mYWN1bHR5L2ZhY3VsdHlMaXN0XCJcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdHlMaXN0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdXNlcklkPXtwcm9wcy5kYXRhLnVzZXJJZH0gcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBuYW1lPXtwcm9wcy5kYXRhLm5hbWV9PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGgyIGFsaWduPVwiY2VudGVyXCI+RmFjdWx0eSBMaXN0PC9oMj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL2FkbWluL2ZhY3VsdHlcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIj5BZGQgRmFjdWx0eTwvYnV0dG9uPjwvTGluaz5cclxuXHQgICAgPExpbmsgaHJlZiA9IFwiL2FkbWluL2dlbmVyYXRlLXJlcG9ydHNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIj5HZW5lcmF0ZSBSZXBvcnRzPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEZhY3VsdHkgcGF0aD1cImFkbWluXCIgcm9sZT17cHJvcHMuZGF0YS5yb2xlfSB0b2tlbj17cHJvcHMudG9rZW4udXNlcn0+e3Byb3BzLmZhY3VsdHlMaXN0fTwvRmFjdWx0eT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBwYXJzZUNvb2tpZXMoY29udGV4dC5yZXEpXHJcbiAgICBsZXQgZGF0YVxyXG4gICAgbGV0IGZhY3VsdHlMaXN0XHJcblxyXG4gICAgaWYgKGNvbnRleHQucmVzKSB7XHJcbiAgICAgICAgaWYgKGlzRXhwaXJlZCh0b2tlbi51c2VyKSB8fCBPYmplY3Qua2V5cyh0b2tlbikubGVuZ3RoID09PSAwICYmIHRva2VuLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvJyxcclxuICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBqd3QuZGVjb2RlKHRva2VuLnVzZXIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbi51c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGZhY3VsdHkgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2Jhc2ljLWluZm8nLCBoZWFkZXIpXHJcbiAgICAgICAgICAgIGZhY3VsdHlMaXN0ID0gYXdhaXQgZmFjdWx0eS5qc29uKClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbiAmJiB0b2tlbixcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgZmFjdWx0eUxpc3Q6IGZhY3VsdHlMaXN0LnJlc3VsdCxcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUxpc3RcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKGRhdGEsIHRva2VuKSB7XHJcblx0dHJ5IHtcclxuICAgICAgICBpZiAodG9rZW4pIHsgXHJcblx0XHRcdGxldCB1cmwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy91c2VyLycgKyBgJHtkYXRhLnVzZXJJZH1gO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGAke2RhdGEuc3RhdHVzfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrczogYCR7ZGF0YS5yZW1hcmtzfWBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIFxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9