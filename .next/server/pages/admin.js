(function() {
var exports = {};
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\faculty\\facultyList.js";

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

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\admin\\index.js";







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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layout_js-helpers_index_js"], function() { return __webpack_exec__("./pages/admin/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9mYWN1bHR5TGlzdC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3BhZ2VzL2FkbWluL2luZGV4LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvYWRtaW4vdXBkYXRlVXNlci5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkZhY3VsdHlMaXN0IiwicHJvcHMiLCJjaGVtIiwibWNzdSIsInBoeXNnZW8iLCJ1c2VyIiwiY3VyckRhdGEiLCJzZXREYXRhIiwiUmVhY3QiLCJ1c2VySWQiLCJzdGF0dXMiLCJyZW1hcmtzIiwiZmFjdWx0eU5hbWUiLCJhY3RpdmVSZW1hcmtzU3R5bGUiLCJpbmFjdGl2ZVJlbWFya3NTdHlsZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaWQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2hpbGRyZW4iLCJwYXRoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInVuaXRJZCIsImZhY3VsdHkiLCJmYWN1bHR5X3VuaXRzIiwiZmFjdWx0eUxpc3QiLCJpbmRleCIsInN1cm5hbWUiLCJmYWN1bHR5X3BlcnNvbmFsX2luZm8iLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsImZhY3VsdHlJZCIsImZvckFwcHJvdmFsQ291bnQiLCJzdGF0dXNDbGFzcyIsImxhc3RVcGRhdGVkIiwiZmFjdWx0eV91cGRhdGUiLCJ1cGRhdGVkQXQiLCJzcGxpdCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJvbGUiLCJzZXRFZGl0Iiwic2V0S2V5IiwidW5pdCIsIngiLCJ2aXNpYmlsaXR5IiwiZSIsImRpc3BsYXkiLCIkIiwibW9kYWwiLCJhbGVydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXMiLCJ1cGRhdGVVc2VyIiwidG9rZW4iLCJzdWNjZXNzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwiZXJyb3IiLCJmYWRlVG8iLCJzbGlkZVVwIiwiUm91dGVyIiwiZGF0YSIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicGFyc2VDb29raWVzIiwicmVxIiwiaXNFeHBpcmVkIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50Iiwiand0IiwiaGVhZGVyIiwiaGVhZGVycyIsImZldGNoIiwicHJvY2VzcyIsImpzb24iLCJyZXN1bHQiLCJ1cmwiLCJyZXNwb25zZSIsImF4aW9zIiwibWV0aG9kIiwiQXV0aG9yaXphdGlvbiIsImVyciIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBMkI7QUFDMUIsTUFBSUMsSUFBSjtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxPQUFKO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxRQUFNLENBQUNDLFFBQUQsRUFBV0MsT0FBWCxJQUFzQkMscURBQUEsQ0FBZTtBQUMxQ0MsVUFBTSxFQUFFLENBRGtDO0FBRXBDQyxVQUFNLEVBQUUsRUFGNEI7QUFHcENDLFdBQU8sRUFBRSxFQUgyQjtBQUkxQ0MsZUFBVyxFQUFFO0FBSjZCLEdBQWYsQ0FBNUI7QUFPQSxNQUFJQyxrQkFBSjtBQUNBLE1BQUlDLG9CQUFKOztBQUVBLFdBQVNDLGlCQUFULENBQTJCQyxFQUEzQixFQUErQkMsS0FBL0IsRUFBc0M7QUFDckMsUUFBR0QsRUFBRSxJQUFJLFFBQVQsRUFBbUJULE9BQU8saUNBQUtELFFBQUw7QUFBZSxPQUFDVSxFQUFELEdBQU1DLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFsQztBQUF5QyxPQUFDLFNBQUQsR0FBYTtBQUF0RCxPQUFQLENBQW5CLEtBQ0taLE9BQU8saUNBQUtELFFBQUw7QUFBZSxPQUFDVSxFQUFELEdBQU1DLEtBQUssQ0FBQ0MsTUFBTixDQUFhQztBQUFsQyxPQUFQO0FBQ0w7O0FBRUQsTUFBR2IsUUFBUSxDQUFDSSxNQUFULElBQW1CLFVBQXRCLEVBQWtDO0FBQ2pDRyxzQkFBa0IsR0FBRyxNQUFyQjtBQUNBQyx3QkFBb0IsR0FBRyxPQUF2QjtBQUNDLEdBSEYsTUFHUTtBQUNQRCxzQkFBa0IsR0FBRyxPQUFyQjtBQUNBQyx3QkFBb0IsR0FBRyxNQUF2QjtBQUNDOztBQUVG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Ozs7Ozs7Ozs7Ozs7OztBQ3pERjtBQUVlLGVBQWV5RCxVQUFmLENBQTBCVyxJQUExQixFQUFnQ1YsS0FBaEMsRUFBdUM7QUFDckQsTUFBSTtBQUNHLFFBQUlBLEtBQUosRUFBVztBQUNoQixVQUFJNkIsR0FBRyxHQUFHSCwyQkFBQSxHQUFzQixRQUF0QixHQUFrQyxHQUFFaEIsSUFBSSxDQUFDM0QsTUFBTyxFQUExRDtBQUNTLFlBQU0rRSxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQztBQUN6QkMsY0FBTSxFQUFFLEtBRGlCO0FBRXpCSCxXQUFHLEVBQUVBLEdBRm9CO0FBR3pCbkIsWUFBSSxFQUFFO0FBQ0YxRCxnQkFBTSxFQUFHLEdBQUUwRCxJQUFJLENBQUMxRCxNQUFPLEVBRHJCO0FBRUZDLGlCQUFPLEVBQUcsR0FBRXlELElBQUksQ0FBQ3pELE9BQVE7QUFGdkIsU0FIbUI7QUFPekJ1RSxlQUFPLEVBQUU7QUFBQywwQkFBZ0Isa0JBQWpCO0FBQXFDUyx1QkFBYSxFQUFHLFVBQVNqQyxLQUFNO0FBQXBFO0FBUGdCLE9BQUQsQ0FBNUI7QUFTQSxhQUFPOEIsUUFBUSxDQUFDcEIsSUFBaEI7QUFFVDtBQUNELEdBZkQsQ0FlRSxPQUFPd0IsR0FBUCxFQUFZO0FBQ2JDLFdBQU8sQ0FBQzdCLEtBQVIsQ0FBYzRCLEdBQWQ7QUFDQSxXQUFPQSxHQUFQO0FBQ0E7QUFDRCxDOzs7Ozs7Ozs7OztBQ3RCRCxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHVwZGF0ZVVzZXIgZnJvbSAnLi4vLi4vc2VydmljZXMvYWRtaW4vdXBkYXRlVXNlcidcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdHlMaXN0KHByb3BzKXsgXHJcblx0bGV0IGNoZW1cclxuXHRsZXQgbWNzdVxyXG5cdGxldCBwaHlzZ2VvXHJcblx0bGV0IHVzZXIgPSAwXHJcblx0Y29uc3QgW2N1cnJEYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuXHRcdHVzZXJJZDogMCxcclxuICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgIHJlbWFya3M6ICcnLFxyXG5cdFx0ZmFjdWx0eU5hbWU6ICcnXHJcbiAgICB9KVxyXG5cclxuXHRsZXQgYWN0aXZlUmVtYXJrc1N0eWxlXHJcblx0bGV0IGluYWN0aXZlUmVtYXJrc1N0eWxlIFxyXG5cdFxyXG5cdGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGlkLCBldmVudCkge1xyXG5cdFx0aWYoaWQgPT0gJ3N0YXR1cycpIHNldERhdGEoey4uLmN1cnJEYXRhLCBbaWRdOiBldmVudC50YXJnZXQudmFsdWUsIFsncmVtYXJrcyddOiAnJ30pO1xyXG5cdFx0ZWxzZSBzZXREYXRhKHsuLi5jdXJyRGF0YSwgW2lkXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcblx0fVxyXG5cclxuXHRpZihjdXJyRGF0YS5zdGF0dXMgPT0gJ0luYWN0aXZlJykge1xyXG5cdFx0YWN0aXZlUmVtYXJrc1N0eWxlID0gJ25vbmUnXHJcblx0XHRpbmFjdGl2ZVJlbWFya3NTdHlsZSA9ICdibG9jayc7IFxyXG5cdCB9IGVsc2Uge1xyXG5cdFx0YWN0aXZlUmVtYXJrc1N0eWxlID0gJ2Jsb2NrJ1xyXG5cdFx0aW5hY3RpdmVSZW1hcmtzU3R5bGUgPSAnbm9uZSdcclxuXHQgfSBcclxuXHRcclxuXHRpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcblx0XHRsZXQgcGF0aFxyXG5cdFx0aWYocHJvcHMucGF0aCA9PSBcImFwcHJvdmFsXCIpIHBhdGggPSAnL2ZhY3VsdHkvYXBwcm92YWwvJ1xyXG5cdFx0ZWxzZSBpZihwcm9wcy5wYXRoID09ICdhZG1pbicpIHBhdGggPSAnL2FkbWluLydcclxuXHRcdGVsc2UgaWYocHJvcHMucGF0aCA9PSAnaW5mbycpIHBhdGggPSAnL2ZhY3VsdHkvdmlldy8nXHJcblx0XHRcclxuXHRcdGNoZW0gPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcblx0XHRcdGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnVuaXRJZCA9PSAxKSB7IFxyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0bGV0IGZhY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKChpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1cm5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmaXJzdE5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmFjdWx0eUlkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eUlkXHJcblx0XHRcdFx0XHRsZXQgZm9yQXBwcm92YWxDb3VudCA9IGZhY3VsdHlbaW5kZXhdLmZvckFwcHJvdmFsQ291bnRcclxuXHRcdFx0XHRcdGxldCBzdGF0dXNDbGFzc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbGFzdFVwZGF0ZWRcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZSkgbGFzdFVwZGF0ZWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUudXBkYXRlZEF0LnNwbGl0KCdUJylbMF1cclxuXHJcblx0XHRcdFx0XHRpZihwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcpIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSAnZGlzYWJsZWQgYnRuICdcclxuXHRcdFx0XHRcdFx0ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzID09ICdBY3RpdmUnID8gc3RhdHVzQ2xhc3MgKz0nYnRuLXdhcm5pbmcnIDogc3RhdHVzQ2xhc3MgKz0gJ2J0bi1kYW5nZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZiA9IHtgJHtwYXRoICsgZW5jb2RlVVJJQ29tcG9uZW50KGZhY3VsdHlJZCl9YH0gY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tbGlnaHRcIiBmb3JBcHByb3ZhbD17ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c3VybmFtZX0sIHtmaXJzdE5hbWV9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57Zm9yQXBwcm92YWxDb3VudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5wYXRoID09ICdpbmZvJyAmJiBwcm9wcy5yb2xlID09IDMgJiYgbGFzdFVwZGF0ZWQgJiYgYCAoTGFzdCBVcGRhdGVkOiAke2xhc3RVcGRhdGVkfSlgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD48c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzfTwvc3Bhbj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIucmVtYXJrcyB8fCAnTm9uZSd9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRTdGF0dXNcIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdChmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0S2V5KHVzZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PkVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGg0IGFsaWduID0gXCJjZW50ZXJcIj4ge3Byb3BzLmNoaWxkcmVuW2tleV0udW5pdH0gPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5TdGF0dXM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+UmVtYXJrczwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+QWN0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdHtmYWN1bHR5TGlzdH1cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpOyBcclxuXHRcdFx0fVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdG1jc3UgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcblx0XHRcdGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnVuaXRJZCA9PSAyKSB7IFxyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0bGV0IGZhY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKChpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1cm5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmaXJzdE5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmFjdWx0eUlkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eUlkXHJcblx0XHRcdFx0XHRsZXQgZm9yQXBwcm92YWxDb3VudCA9IGZhY3VsdHlbaW5kZXhdLmZvckFwcHJvdmFsQ291bnRcclxuXHRcdFx0XHRcdGxldCBzdGF0dXNDbGFzc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbGFzdFVwZGF0ZWRcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZSkgbGFzdFVwZGF0ZWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUudXBkYXRlZEF0LnNwbGl0KCdUJylbMF1cclxuXHJcblx0XHRcdFx0XHRpZihwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcpIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSAnZGlzYWJsZWQgYnRuICdcclxuXHRcdFx0XHRcdFx0ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzID09ICdBY3RpdmUnID8gc3RhdHVzQ2xhc3MgKz0nYnRuLXdhcm5pbmcnIDogc3RhdHVzQ2xhc3MgKz0gJ2J0bi1kYW5nZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZiA9IHtgJHtwYXRoICsgZW5jb2RlVVJJQ29tcG9uZW50KGZhY3VsdHlJZCl9YH0gY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tbGlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c3VybmFtZX0sIHtmaXJzdE5hbWV9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57Zm9yQXBwcm92YWxDb3VudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5wYXRoID09ICdpbmZvJyAmJiBwcm9wcy5yb2xlID09IDMgJiYgbGFzdFVwZGF0ZWQgJiYgYCAoTGFzdCBVcGRhdGVkOiAke2xhc3RVcGRhdGVkfSlgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuIGNsYXNzTmFtZT17c3RhdHVzQ2xhc3N9PntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXN9PC9zcGFuPjwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdFN0YXR1c1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0KGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnVzZXJJZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRLZXkodXNlcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+RWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDQgYWxpZ24gPSBcImNlbnRlclwiPiB7cHJvcHMuY2hpbGRyZW5ba2V5XS51bml0fSA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5SZW1hcmtzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5BY3Rpb248L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0e2ZhY3VsdHlMaXN0fVxyXG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7IFxyXG5cdFx0XHR9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0cGh5c2dlbyA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0aWYgKHByb3BzLmNoaWxkcmVuW2tleV0udW5pdElkID09IDMpIHsgXHJcblx0XHRcdFx0bGV0IGZhY3VsdHkgPSBwcm9wcy5jaGlsZHJlbltrZXldLmZhY3VsdHlfdW5pdHNcclxuXHRcdFx0XHRsZXQgZmFjdWx0eUxpc3QgPSBPYmplY3Qua2V5cyhmYWN1bHR5KS5tYXAoKGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgc3VybmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0TmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmYWN1bHR5SWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5SWRcclxuXHRcdFx0XHRcdGxldCBmb3JBcHByb3ZhbENvdW50ID0gZmFjdWx0eVtpbmRleF0uZm9yQXBwcm92YWxDb3VudFxyXG5cdFx0XHRcdFx0bGV0IHN0YXR1c0NsYXNzXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBsYXN0VXBkYXRlZFxyXG5cdFx0XHRcdFx0aWYoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlKSBsYXN0VXBkYXRlZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZS51cGRhdGVkQXQuc3BsaXQoJ1QnKVswXVxyXG5cclxuXHRcdFx0XHRcdGlmKHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJykge1xyXG5cdFx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9ICdkaXNhYmxlZCBidG4gJ1xyXG5cdFx0XHRcdFx0XHRmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXMgPT0gJ0FjdGl2ZScgPyBzdGF0dXNDbGFzcyArPSdidG4td2FybmluZycgOiBzdGF0dXNDbGFzcyArPSAnYnRuLWRhbmdlcidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmID0ge2Ake3BhdGggKyBlbmNvZGVVUklDb21wb25lbnQoZmFjdWx0eUlkKX1gfSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1saWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzdXJuYW1lfSwge2ZpcnN0TmFtZX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jm5ic3A7IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntmb3JBcHByb3ZhbENvdW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHByb3BzLnBhdGggPT0gJ2luZm8nICYmIHByb3BzLnJvbGUgPT0gMyAmJiBsYXN0VXBkYXRlZCAmJiBgIChMYXN0IFVwZGF0ZWQ6ICR7bGFzdFVwZGF0ZWR9KWAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1c308L3NwYW4+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0U3RhdHVzXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXQoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIudXNlcklkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEtleSh1c2VyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoNCBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5jaGlsZHJlbltrZXldLnVuaXR9IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlJlbWFya3M8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHR7ZmFjdWx0eUxpc3R9XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTsgXHJcblx0XHRcdH1cclxuICAgICAgICB9KTtcclxuXHJcblx0XHRmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcblx0XHRcdHVzZXIgPSBpZFxyXG5cdFx0fVxyXG5cclxuXHRcdGFzeW5jIGZ1bmN0aW9uIHNldEtleSh4KSB7XHJcblx0XHRcdGF3YWl0IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoYXN5bmMga2V5ID0+IHtcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGF3YWl0IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcChhc3luYyBpbmRleCA9PiB7XHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQgPT0geCkgeyBcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGF3YWl0IHNldERhdGEoe1xyXG5cdFx0XHRcdFx0XHRcdHVzZXJJZDogeCxcclxuXHRcdFx0XHRcdFx0XHRzdGF0dXM6IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyxcclxuXHRcdFx0XHRcdFx0XHRyZW1hcmtzOiBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzLFxyXG5cdFx0XHRcdFx0XHRcdGZhY3VsdHlOYW1lOiBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWUgKyAnLCAnICsgZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuICAgIH0gXHJcbiAgICBlbHNleyBcclxuICAgICAgICByZXR1cm4oPHAgYWxpZ24gPSBcImNlbnRlclwiPk5vIGFwcHJvdmFscyBuZWVkZWQhPC9wPilcclxuICAgIH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIiBpZD1cImZhY3VsdHlTdGF0dXNhbGVydFwiIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwifX0+PC9kaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHR7Y2hlbX1cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdHttY3N1fVxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0e3BoeXNnZW99XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImVkaXRTdGF0dXNcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImVkaXRTdGF0dXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0U3RhdHVzXCI+VXBkYXRlIEZhY3VsdHkgU3RhdHVzIC0ge2N1cnJEYXRhLmZhY3VsdHlOYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlN0YXR1c1wiPiBTdGF0dXMgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWU9XCJTdGF0dXNcIiBpZD1cIlN0YXR1c1wiIHZhbHVlID0geyBjdXJyRGF0YS5zdGF0dXMgfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJzdGF0dXNcIiwgZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJBY3RpdmVcIiBrZXkgPSBcImFjdGl2ZVwiPkFjdGl2ZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJJbmFjdGl2ZVwiIGtleSA9IFwiaW5hY3RpdmVcIj5JbmFjdGl2ZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiIGlkPVwiYWN0aXZlcmVtYXJrc3Jvd1wiIHN0eWxlPXt7ZGlzcGxheTogYWN0aXZlUmVtYXJrc1N0eWxlfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUmVtYXJrc1wiPiBSZW1hcmtzIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiUmVtYXJrc1wiIGlkPVwiUmVtYXJrc1wiIHZhbHVlID0geyBjdXJyRGF0YS5yZW1hcmtzIHx8ICcnfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJyZW1hcmtzXCIsIGUpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+LS0gU0VMRUNUIFJFTUFSS1MgLS08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiT24gTGVhdmVcIj5PbiBMZWF2ZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIiBpZD1cImluYWN0aXZlcmVtYXJrc3Jvd1wiIHN0eWxlPXt7ZGlzcGxheTogaW5hY3RpdmVSZW1hcmtzU3R5bGV9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJSZW1hcmtzXCI+IFJlbWFya3MgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWU9XCJSZW1hcmtzXCIgaWQ9XCJSZW1hcmtzXCIgdmFsdWUgPSB7IGN1cnJEYXRhLnJlbWFya3MgfHwgJyd9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcInJlbWFya3NcIiwgZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj4tLSBTRUxFQ1QgUkVNQVJLUyAtLTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSZXRpcmVkXCI+UmV0aXJlZDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSZXNpZ25lZFwiPlJlc2lnbmVkPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdFN0YXR1cycpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFjdWx0eVN0YXR1c2FsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgdXBkYXRlVXNlcihjdXJyRGF0YSwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2ZhY3VsdHlTdGF0dXNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2ZhY3VsdHlTdGF0dXNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdHlMaXN0XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcywgaXNFeHBpcmVkIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIlxyXG5pbXBvcnQgRmFjdWx0eSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mYWN1bHR5L2ZhY3VsdHlMaXN0XCJcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdHlMaXN0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdXNlcklkPXtwcm9wcy5kYXRhLnVzZXJJZH0gcm9sZT17cHJvcHMuZGF0YS5yb2xlfSBuYW1lPXtwcm9wcy5kYXRhLm5hbWV9PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGgyIGFsaWduPVwiY2VudGVyXCI+RmFjdWx0eSBMaXN0PC9oMj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL2FkbWluL2ZhY3VsdHlcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIj5BZGQgRmFjdWx0eTwvYnV0dG9uPjwvTGluaz5cclxuXHQgICAgPExpbmsgaHJlZiA9IFwiL2FkbWluL2dlbmVyYXRlLXJlcG9ydHNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIj5HZW5lcmF0ZSBSZXBvcnRzPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEZhY3VsdHkgcGF0aD1cImFkbWluXCIgcm9sZT17cHJvcHMuZGF0YS5yb2xlfSB0b2tlbj17cHJvcHMudG9rZW4udXNlcn0+e3Byb3BzLmZhY3VsdHlMaXN0fTwvRmFjdWx0eT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBwYXJzZUNvb2tpZXMoY29udGV4dC5yZXEpXHJcbiAgICBsZXQgZGF0YVxyXG4gICAgbGV0IGZhY3VsdHlMaXN0XHJcblxyXG4gICAgaWYgKGNvbnRleHQucmVzKSB7XHJcbiAgICAgICAgaWYgKGlzRXhwaXJlZCh0b2tlbi51c2VyKSB8fCBPYmplY3Qua2V5cyh0b2tlbikubGVuZ3RoID09PSAwICYmIHRva2VuLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvJyxcclxuICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBqd3QuZGVjb2RlKHRva2VuLnVzZXIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbi51c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGZhY3VsdHkgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2Jhc2ljLWluZm8nLCBoZWFkZXIpXHJcbiAgICAgICAgICAgIGZhY3VsdHlMaXN0ID0gYXdhaXQgZmFjdWx0eS5qc29uKClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbiAmJiB0b2tlbixcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgZmFjdWx0eUxpc3Q6IGZhY3VsdHlMaXN0LnJlc3VsdCxcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUxpc3RcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKGRhdGEsIHRva2VuKSB7XHJcblx0dHJ5IHtcclxuICAgICAgICBpZiAodG9rZW4pIHsgXHJcblx0XHRcdGxldCB1cmwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy91c2VyLycgKyBgJHtkYXRhLnVzZXJJZH1gO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGAke2RhdGEuc3RhdHVzfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrczogYCR7ZGF0YS5yZW1hcmtzfWBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIFxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRyZXR1cm4gZXJyXHJcblx0fVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9