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

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\faculty\\facultyList.js";

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

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\admin\\index.js";







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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZmFjdWx0eS9mYWN1bHR5TGlzdC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3BhZ2VzL2FkbWluL2luZGV4LmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vc2VydmljZXMvYWRtaW4vdXBkYXRlVXNlci5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwiY29va2llXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGYWN1bHR5TGlzdCIsInByb3BzIiwiY2hlbSIsIm1jc3UiLCJwaHlzZ2VvIiwidXNlciIsImN1cnJEYXRhIiwic2V0RGF0YSIsIlJlYWN0IiwidXNlcklkIiwic3RhdHVzIiwicmVtYXJrcyIsImZhY3VsdHlOYW1lIiwiYWN0aXZlUmVtYXJrc1N0eWxlIiwiaW5hY3RpdmVSZW1hcmtzU3R5bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImlkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwicGF0aCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJ1bml0SWQiLCJmYWN1bHR5IiwiZmFjdWx0eV91bml0cyIsImZhY3VsdHlMaXN0IiwiaW5kZXgiLCJzdXJuYW1lIiwiZmFjdWx0eV9wZXJzb25hbF9pbmZvIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJmYWN1bHR5SWQiLCJmb3JBcHByb3ZhbENvdW50Iiwic3RhdHVzQ2xhc3MiLCJsYXN0VXBkYXRlZCIsImZhY3VsdHlfdXBkYXRlIiwidXBkYXRlZEF0Iiwic3BsaXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyb2xlIiwic2V0RWRpdCIsInNldEtleSIsInVuaXQiLCJ4IiwidmlzaWJpbGl0eSIsImUiLCJkaXNwbGF5IiwiJCIsIm1vZGFsIiwiYWxlcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzIiwidXBkYXRlVXNlciIsInRva2VuIiwic3VjY2VzcyIsImNsYXNzTmFtZSIsInN0eWxlIiwiaW5uZXJIVE1MIiwibWVzc2FnZSIsImVycm9yIiwiZmFkZVRvIiwic2xpZGVVcCIsIlJvdXRlciIsImRhdGEiLCJuYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInBhcnNlQ29va2llcyIsInJlcSIsImlzRXhwaXJlZCIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsImp3dCIsImhlYWRlciIsImhlYWRlcnMiLCJmZXRjaCIsInByb2Nlc3MiLCJqc29uIiwicmVzdWx0IiwidXJsIiwicmVzcG9uc2UiLCJheGlvcyIsIm1ldGhvZCIsIkF1dGhvcml6YXRpb24iLCJlcnIiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQzFCLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsT0FBSjtBQUNBLE1BQUlDLElBQUksR0FBRyxDQUFYO0FBQ0EsUUFBTSxDQUFDQyxRQUFELEVBQVdDLE9BQVgsSUFBc0JDLHFEQUFBLENBQWU7QUFDMUNDLFVBQU0sRUFBRSxDQURrQztBQUVwQ0MsVUFBTSxFQUFFLEVBRjRCO0FBR3BDQyxXQUFPLEVBQUUsRUFIMkI7QUFJMUNDLGVBQVcsRUFBRTtBQUo2QixHQUFmLENBQTVCO0FBT0EsTUFBSUMsa0JBQUo7QUFDQSxNQUFJQyxvQkFBSjs7QUFFQSxXQUFTQyxpQkFBVCxDQUEyQkMsRUFBM0IsRUFBK0JDLEtBQS9CLEVBQXNDO0FBQ3JDLFFBQUdELEVBQUUsSUFBSSxRQUFULEVBQW1CVCxPQUFPLGlDQUFLRCxRQUFMO0FBQWUsT0FBQ1UsRUFBRCxHQUFNQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBbEM7QUFBeUMsT0FBQyxTQUFELEdBQWE7QUFBdEQsT0FBUCxDQUFuQixLQUNLWixPQUFPLGlDQUFLRCxRQUFMO0FBQWUsT0FBQ1UsRUFBRCxHQUFNQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUM7QUFBbEMsT0FBUDtBQUNMOztBQUVELE1BQUdiLFFBQVEsQ0FBQ0ksTUFBVCxJQUFtQixVQUF0QixFQUFrQztBQUNqQ0csc0JBQWtCLEdBQUcsTUFBckI7QUFDQUMsd0JBQW9CLEdBQUcsT0FBdkI7QUFDQyxHQUhGLE1BR1E7QUFDUEQsc0JBQWtCLEdBQUcsT0FBckI7QUFDQUMsd0JBQW9CLEdBQUcsTUFBdkI7QUFDQzs7QUFF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Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REY7QUFFZSxlQUFleUQsVUFBZixDQUEwQlcsSUFBMUIsRUFBZ0NWLEtBQWhDLEVBQXVDO0FBQ3JELE1BQUk7QUFDRyxRQUFJQSxLQUFKLEVBQVc7QUFDaEIsVUFBSTZCLEdBQUcsR0FBR0gsMkJBQUEsR0FBc0IsUUFBdEIsR0FBa0MsR0FBRWhCLElBQUksQ0FBQzNELE1BQU8sRUFBMUQ7QUFDUyxZQUFNK0UsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUM7QUFDekJDLGNBQU0sRUFBRSxLQURpQjtBQUV6QkgsV0FBRyxFQUFFQSxHQUZvQjtBQUd6Qm5CLFlBQUksRUFBRTtBQUNGMUQsZ0JBQU0sRUFBRyxHQUFFMEQsSUFBSSxDQUFDMUQsTUFBTyxFQURyQjtBQUVGQyxpQkFBTyxFQUFHLEdBQUV5RCxJQUFJLENBQUN6RCxPQUFRO0FBRnZCLFNBSG1CO0FBT3pCdUUsZUFBTyxFQUFFO0FBQUMsMEJBQWdCLGtCQUFqQjtBQUFxQ1MsdUJBQWEsRUFBRyxVQUFTakMsS0FBTTtBQUFwRTtBQVBnQixPQUFELENBQTVCO0FBU0EsYUFBTzhCLFFBQVEsQ0FBQ3BCLElBQWhCO0FBRVQ7QUFDRCxHQWZELENBZUUsT0FBT3dCLEdBQVAsRUFBWTtBQUNiQyxXQUFPLENBQUM3QixLQUFSLENBQWM0QixHQUFkO0FBQ0EsV0FBT0EsR0FBUDtBQUNBO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUN0QkQsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB1cGRhdGVVc2VyIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkbWluL3VwZGF0ZVVzZXInXHJcblxyXG5mdW5jdGlvbiBGYWN1bHR5TGlzdChwcm9wcyl7IFxyXG5cdGxldCBjaGVtXHJcblx0bGV0IG1jc3VcclxuXHRsZXQgcGh5c2dlb1xyXG5cdGxldCB1c2VyID0gMFxyXG5cdGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcblx0XHR1c2VySWQ6IDAsXHJcbiAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgICByZW1hcmtzOiAnJyxcclxuXHRcdGZhY3VsdHlOYW1lOiAnJ1xyXG4gICAgfSlcclxuXHJcblx0bGV0IGFjdGl2ZVJlbWFya3NTdHlsZVxyXG5cdGxldCBpbmFjdGl2ZVJlbWFya3NTdHlsZSBcclxuXHRcclxuXHRmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShpZCwgZXZlbnQpIHtcclxuXHRcdGlmKGlkID09ICdzdGF0dXMnKSBzZXREYXRhKHsuLi5jdXJyRGF0YSwgW2lkXTogZXZlbnQudGFyZ2V0LnZhbHVlLCBbJ3JlbWFya3MnXTogJyd9KTtcclxuXHRcdGVsc2Ugc2V0RGF0YSh7Li4uY3VyckRhdGEsIFtpZF06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG5cdH1cclxuXHJcblx0aWYoY3VyckRhdGEuc3RhdHVzID09ICdJbmFjdGl2ZScpIHtcclxuXHRcdGFjdGl2ZVJlbWFya3NTdHlsZSA9ICdub25lJ1xyXG5cdFx0aW5hY3RpdmVSZW1hcmtzU3R5bGUgPSAnYmxvY2snOyBcclxuXHQgfSBlbHNlIHtcclxuXHRcdGFjdGl2ZVJlbWFya3NTdHlsZSA9ICdibG9jaydcclxuXHRcdGluYWN0aXZlUmVtYXJrc1N0eWxlID0gJ25vbmUnXHJcblx0IH0gXHJcblx0XHJcblx0aWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG5cdFx0bGV0IHBhdGhcclxuXHRcdGlmKHByb3BzLnBhdGggPT0gXCJhcHByb3ZhbFwiKSBwYXRoID0gJy9mYWN1bHR5L2FwcHJvdmFsLydcclxuXHRcdGVsc2UgaWYocHJvcHMucGF0aCA9PSAnYWRtaW4nKSBwYXRoID0gJy9hZG1pbi8nXHJcblx0XHRlbHNlIGlmKHByb3BzLnBhdGggPT0gJ2luZm8nKSBwYXRoID0gJy9mYWN1bHR5L3ZpZXcvJ1xyXG5cdFx0XHJcblx0XHRjaGVtID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG5cdFx0XHRpZiAocHJvcHMuY2hpbGRyZW5ba2V5XS51bml0SWQgPT0gMSkgeyBcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5TGlzdCA9IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcCgoaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzdXJuYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmlyc3ROYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZhY3VsdHlJZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlJZFxyXG5cdFx0XHRcdFx0bGV0IGZvckFwcHJvdmFsQ291bnQgPSBmYWN1bHR5W2luZGV4XS5mb3JBcHByb3ZhbENvdW50XHJcblx0XHRcdFx0XHRsZXQgc3RhdHVzQ2xhc3NcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGxhc3RVcGRhdGVkXHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUpIGxhc3RVcGRhdGVkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlLnVwZGF0ZWRBdC5zcGxpdCgnVCcpWzBdXHJcblxyXG5cdFx0XHRcdFx0aWYocHJvcHMucGF0aCAhPSAnYXBwcm92YWwnKSB7XHJcblx0XHRcdFx0XHRcdHN0YXR1c0NsYXNzID0gJ2Rpc2FibGVkIGJ0biAnXHJcblx0XHRcdFx0XHRcdGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyA9PSAnQWN0aXZlJyA/IHN0YXR1c0NsYXNzICs9J2J0bi13YXJuaW5nJyA6IHN0YXR1c0NsYXNzICs9ICdidG4tZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWYgPSB7YCR7cGF0aCArIGVuY29kZVVSSUNvbXBvbmVudChmYWN1bHR5SWQpfWB9IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWxpZ2h0XCIgZm9yQXBwcm92YWw9e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mb30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N1cm5hbWV9LCB7Zmlyc3ROYW1lfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2ZvckFwcHJvdmFsQ291bnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgcHJvcHMucGF0aCA9PSAnaW5mbycgJiYgcHJvcHMucm9sZSA9PSAzICYmIGxhc3RVcGRhdGVkICYmIGAgKExhc3QgVXBkYXRlZDogJHtsYXN0VXBkYXRlZH0pYCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1c308L3NwYW4+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0U3RhdHVzXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXQoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIudXNlcklkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEtleSh1c2VyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoNCBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5jaGlsZHJlbltrZXldLnVuaXR9IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlJlbWFya3M8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHR7ZmFjdWx0eUxpc3R9XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTsgXHJcblx0XHRcdH1cclxuICAgICAgICB9KTtcclxuXHJcblx0XHRtY3N1ID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG5cdFx0XHRpZiAocHJvcHMuY2hpbGRyZW5ba2V5XS51bml0SWQgPT0gMikgeyBcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5TGlzdCA9IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcCgoaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzdXJuYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmlyc3ROYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZhY3VsdHlJZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlJZFxyXG5cdFx0XHRcdFx0bGV0IGZvckFwcHJvdmFsQ291bnQgPSBmYWN1bHR5W2luZGV4XS5mb3JBcHByb3ZhbENvdW50XHJcblx0XHRcdFx0XHRsZXQgc3RhdHVzQ2xhc3NcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGxhc3RVcGRhdGVkXHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUpIGxhc3RVcGRhdGVkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlLnVwZGF0ZWRBdC5zcGxpdCgnVCcpWzBdXHJcblxyXG5cdFx0XHRcdFx0aWYocHJvcHMucGF0aCAhPSAnYXBwcm92YWwnKSB7XHJcblx0XHRcdFx0XHRcdHN0YXR1c0NsYXNzID0gJ2Rpc2FibGVkIGJ0biAnXHJcblx0XHRcdFx0XHRcdGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyA9PSAnQWN0aXZlJyA/IHN0YXR1c0NsYXNzICs9J2J0bi13YXJuaW5nJyA6IHN0YXR1c0NsYXNzICs9ICdidG4tZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWYgPSB7YCR7cGF0aCArIGVuY29kZVVSSUNvbXBvbmVudChmYWN1bHR5SWQpfWB9IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWxpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N1cm5hbWV9LCB7Zmlyc3ROYW1lfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2ZvckFwcHJvdmFsQ291bnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgcHJvcHMucGF0aCA9PSAnaW5mbycgJiYgcHJvcHMucm9sZSA9PSAzICYmIGxhc3RVcGRhdGVkICYmIGAgKExhc3QgVXBkYXRlZDogJHtsYXN0VXBkYXRlZH0pYCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD48c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzfTwvc3Bhbj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIucmVtYXJrcyB8fCAnTm9uZSd9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRTdGF0dXNcIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdChmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0S2V5KHVzZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PkVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGg0IGFsaWduID0gXCJjZW50ZXJcIj4ge3Byb3BzLmNoaWxkcmVuW2tleV0udW5pdH0gPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5TdGF0dXM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+UmVtYXJrczwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+QWN0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdHtmYWN1bHR5TGlzdH1cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpOyBcclxuXHRcdFx0fVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdHBoeXNnZW8gPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcblx0XHRcdGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnVuaXRJZCA9PSAzKSB7IFxyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0bGV0IGZhY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKChpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1cm5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmaXJzdE5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmFjdWx0eUlkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eUlkXHJcblx0XHRcdFx0XHRsZXQgZm9yQXBwcm92YWxDb3VudCA9IGZhY3VsdHlbaW5kZXhdLmZvckFwcHJvdmFsQ291bnRcclxuXHRcdFx0XHRcdGxldCBzdGF0dXNDbGFzc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbGFzdFVwZGF0ZWRcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZSkgbGFzdFVwZGF0ZWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUudXBkYXRlZEF0LnNwbGl0KCdUJylbMF1cclxuXHJcblx0XHRcdFx0XHRpZihwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcpIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSAnZGlzYWJsZWQgYnRuICdcclxuXHRcdFx0XHRcdFx0ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzID09ICdBY3RpdmUnID8gc3RhdHVzQ2xhc3MgKz0nYnRuLXdhcm5pbmcnIDogc3RhdHVzQ2xhc3MgKz0gJ2J0bi1kYW5nZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZiA9IHtgJHtwYXRoICsgZW5jb2RlVVJJQ29tcG9uZW50KGZhY3VsdHlJZCl9YH0gY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tbGlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c3VybmFtZX0sIHtmaXJzdE5hbWV9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57Zm9yQXBwcm92YWxDb3VudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5wYXRoID09ICdpbmZvJyAmJiBwcm9wcy5yb2xlID09IDMgJiYgbGFzdFVwZGF0ZWQgJiYgYCAoTGFzdCBVcGRhdGVkOiAke2xhc3RVcGRhdGVkfSlgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuIGNsYXNzTmFtZT17c3RhdHVzQ2xhc3N9PntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXN9PC9zcGFuPjwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdFN0YXR1c1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0KGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnVzZXJJZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRLZXkodXNlcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+RWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDQgYWxpZ24gPSBcImNlbnRlclwiPiB7cHJvcHMuY2hpbGRyZW5ba2V5XS51bml0fSA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5SZW1hcmtzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5BY3Rpb248L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0e2ZhY3VsdHlMaXN0fVxyXG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7IFxyXG5cdFx0XHR9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RWRpdChpZCkge1xyXG5cdFx0XHR1c2VyID0gaWRcclxuXHRcdH1cclxuXHJcblx0XHRhc3luYyBmdW5jdGlvbiBzZXRLZXkoeCkge1xyXG5cdFx0XHRhd2FpdCBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGFzeW5jIGtleSA9PiB7XHJcblx0XHRcdFx0bGV0IGZhY3VsdHkgPSBwcm9wcy5jaGlsZHJlbltrZXldLmZhY3VsdHlfdW5pdHNcclxuXHRcdFx0XHRhd2FpdCBPYmplY3Qua2V5cyhmYWN1bHR5KS5tYXAoYXN5bmMgaW5kZXggPT4ge1xyXG5cdFx0XHRcdFx0aWYoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIudXNlcklkID09IHgpIHsgXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRhd2FpdCBzZXREYXRhKHtcclxuXHRcdFx0XHRcdFx0XHR1c2VySWQ6IHgsXHJcblx0XHRcdFx0XHRcdFx0c3RhdHVzOiBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXMsXHJcblx0XHRcdFx0XHRcdFx0cmVtYXJrczogZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIucmVtYXJrcyxcclxuXHRcdFx0XHRcdFx0XHRmYWN1bHR5TmFtZTogZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lICsgJywgJyArIGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWVcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9XHJcbiAgICB9IFxyXG4gICAgZWxzZXsgXHJcbiAgICAgICAgcmV0dXJuKDxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBhcHByb3ZhbHMgbmVlZGVkITwvcD4pXHJcbiAgICB9XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJmYWN1bHR5U3RhdHVzYWxlcnRcIiBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIn19PjwvZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0e2NoZW19XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHR7bWNzdX1cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdHtwaHlzZ2VvfVxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJlZGl0U3RhdHVzXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJlZGl0U3RhdHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZWRpdFN0YXR1c1wiPlVwZGF0ZSBGYWN1bHR5IFN0YXR1cyAtIHtjdXJyRGF0YS5mYWN1bHR5TmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJTdGF0dXNcIj4gU3RhdHVzIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiU3RhdHVzXCIgaWQ9XCJTdGF0dXNcIiB2YWx1ZSA9IHsgY3VyckRhdGEuc3RhdHVzIH0gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwic3RhdHVzXCIsIGUpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQWN0aXZlXCIga2V5ID0gXCJhY3RpdmVcIj5BY3RpdmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiSW5hY3RpdmVcIiBrZXkgPSBcImluYWN0aXZlXCI+SW5hY3RpdmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIiBpZD1cImFjdGl2ZXJlbWFya3Nyb3dcIiBzdHlsZT17e2Rpc3BsYXk6IGFjdGl2ZVJlbWFya3NTdHlsZX19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlJlbWFya3NcIj4gUmVtYXJrcyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlJlbWFya3NcIiBpZD1cIlJlbWFya3NcIiB2YWx1ZSA9IHsgY3VyckRhdGEucmVtYXJrcyB8fCAnJ30gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwicmVtYXJrc1wiLCBlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPi0tIFNFTEVDVCBSRU1BUktTIC0tPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIk9uIExlYXZlXCI+T24gTGVhdmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCIgaWQ9XCJpbmFjdGl2ZXJlbWFya3Nyb3dcIiBzdHlsZT17e2Rpc3BsYXk6IGluYWN0aXZlUmVtYXJrc1N0eWxlfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUmVtYXJrc1wiPiBSZW1hcmtzIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiUmVtYXJrc1wiIGlkPVwiUmVtYXJrc1wiIHZhbHVlID0geyBjdXJyRGF0YS5yZW1hcmtzIHx8ICcnfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJyZW1hcmtzXCIsIGUpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+LS0gU0VMRUNUIFJFTUFSS1MgLS08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUmV0aXJlZFwiPlJldGlyZWQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUmVzaWduZWRcIj5SZXNpZ25lZDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2sgPSB7YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXRTdGF0dXMnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhY3VsdHlTdGF0dXNhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHVwZGF0ZVVzZXIoY3VyckRhdGEsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNmYWN1bHR5U3RhdHVzYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNmYWN1bHR5U3RhdHVzYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN1bHR5TGlzdFxyXG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIGlzRXhwaXJlZCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzXCJcclxuaW1wb3J0IEZhY3VsdHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmFjdWx0eS9mYWN1bHR5TGlzdFwiXHJcblxyXG5mdW5jdGlvbiBGYWN1bHR5TGlzdChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHVzZXJJZD17cHJvcHMuZGF0YS51c2VySWR9IHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gbmFtZT17cHJvcHMuZGF0YS5uYW1lfT5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxoMiBhbGlnbj1cImNlbnRlclwiPkZhY3VsdHkgTGlzdDwvaDI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9hZG1pbi9mYWN1bHR5XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0XCI+QWRkIEZhY3VsdHk8L2J1dHRvbj48L0xpbms+XHJcblx0ICAgIDxMaW5rIGhyZWYgPSBcIi9hZG1pbi9nZW5lcmF0ZS1yZXBvcnRzXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0XCI+R2VuZXJhdGUgUmVwb3J0czwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxGYWN1bHR5IHBhdGg9XCJhZG1pblwiIHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gdG9rZW49e3Byb3BzLnRva2VuLnVzZXJ9Pntwcm9wcy5mYWN1bHR5TGlzdH08L0ZhY3VsdHk+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHRva2VuID0gcGFyc2VDb29raWVzKGNvbnRleHQucmVxKVxyXG4gICAgbGV0IGRhdGFcclxuICAgIGxldCBmYWN1bHR5TGlzdFxyXG5cclxuICAgIGlmIChjb250ZXh0LnJlcykge1xyXG4gICAgICAgIGlmIChpc0V4cGlyZWQodG9rZW4udXNlcikgfHwgT2JqZWN0LmtleXModG9rZW4pLmxlbmd0aCA9PT0gMCAmJiB0b2tlbi5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnLycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gand0LmRlY29kZSh0b2tlbi51c2VyKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW4udXNlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBmYWN1bHR5ID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvJywgaGVhZGVyKVxyXG4gICAgICAgICAgICBmYWN1bHR5TGlzdCA9IGF3YWl0IGZhY3VsdHkuanNvbigpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4gJiYgdG9rZW4sXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGZhY3VsdHlMaXN0OiBmYWN1bHR5TGlzdC5yZXN1bHQsXHJcbiAgICAgICAgfVxyXG5cdH1cclxufVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEZhY3VsdHlMaXN0XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcihkYXRhLCB0b2tlbikge1xyXG5cdHRyeSB7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7IFxyXG5cdFx0XHRsZXQgdXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvdXNlci8nICsgYCR7ZGF0YS51c2VySWR9YDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBgJHtkYXRhLnN0YXR1c31gLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFya3M6IGAke2RhdGEucmVtYXJrc31gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICBcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=