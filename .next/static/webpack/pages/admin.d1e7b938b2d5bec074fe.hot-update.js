self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/faculty/facultyList.js":
/*!*******************************************!*\
  !*** ./components/faculty/facultyList.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_admin_updateUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/admin/updateUser */ "./services/admin/updateUser.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\JodieLeeDiane.C\\Bod\\Projects\\dpsm-qa-portal\\components\\faculty\\facultyList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function FacultyList(props) {
  _s();

  var _this = this;

  var chem;
  var mcsu;
  var physgeo;
  var user = 0;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default().useState({
    userId: 0,
    status: '',
    remarks: '',
    facultyName: ''
  }),
      _React$useState2 = (0,C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState, 2),
      currData = _React$useState2[0],
      setData = _React$useState2[1];

  var remarksStyle;

  function handleInputChange(id, event) {
    setData(_objectSpread(_objectSpread({}, currData), {}, (0,C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, id, event.target.value)));

    if (id == 'status') {
      if (event.target.value == 'Inactive') document.getElementById("remarksrow").style = "visibility: visible";else document.getElementById("remarksrow").style = "visibility: hidden";
    }
  }

  if (props.children != null) {
    var setEdit = function setEdit(id) {
      user = id;
    };

    var setKey = /*#__PURE__*/function () {
      var _ref = (0,C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(x) {
        return C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object.keys(props.children).map( /*#__PURE__*/function () {
                  var _ref2 = (0,C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(key) {
                    var faculty;
                    return C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            faculty = props.children[key].faculty_units;
                            _context2.next = 3;
                            return Object.keys(faculty).map( /*#__PURE__*/function () {
                              var _ref3 = (0,C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(index) {
                                return C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        if (!(faculty[index].faculty_personal_info.user.userId == x)) {
                                          _context.next = 3;
                                          break;
                                        }

                                        _context.next = 3;
                                        return setData({
                                          userId: x,
                                          status: faculty[index].faculty_personal_info.user.status,
                                          remarks: faculty[index].faculty_personal_info.user.remarks,
                                          facultyName: faculty[index].faculty_personal_info.lastName + ', ' + faculty[index].faculty_personal_info.firstName
                                        });

                                      case 3:
                                      case "end":
                                        return _context.stop();
                                    }
                                  }
                                }, _callee);
                              }));

                              return function (_x3) {
                                return _ref3.apply(this, arguments);
                              };
                            }());

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function setKey(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var path;
    if (props.path == "approval") path = '/faculty/approval/';else if (props.path == 'admin') path = '/admin/';else if (props.path == 'info') path = '/faculty/view/';
    chem = Object.keys(props.children).map(function (key) {
      if (props.children[key].unitId == 1) {
        var faculty = props.children[key].faculty_units;
        var facultyList = Object.keys(faculty).map(function (index) {
          var surname = faculty[index].faculty_personal_info.lastName;
          var firstName = faculty[index].faculty_personal_info.firstName;
          var facultyId = faculty[index].facultyId;
          var forApprovalCount = faculty[index].forApprovalCount;
          var statusClass;
          var lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0];

          if (props.path != 'approval') {
            statusClass = 'disabled btn ';
            faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass += 'btn-warning' : statusClass += 'btn-danger';
          }

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "list-group",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "".concat(path + encodeURIComponent(facultyId)),
                  className: "list-group-item list-group-item-action list-group-item-light",
                  forApproval: faculty[index].faculty_personal_info,
                  children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    className: "badge badge-danger",
                    children: forApprovalCount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 9
            }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-dismiss": "modal",
                "data-target": "#editStatus",
                onClick: function onClick() {
                  setEdit(faculty[index].faculty_personal_info.user.userId);
                  setKey(user);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
              className: "table",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, _this);
      }
    });
    mcsu = Object.keys(props.children).map(function (key) {
      if (props.children[key].unitId == 2) {
        var faculty = props.children[key].faculty_units;
        var facultyList = Object.keys(faculty).map(function (index) {
          var surname = faculty[index].faculty_personal_info.lastName;
          var firstName = faculty[index].faculty_personal_info.firstName;
          var facultyId = faculty[index].facultyId;
          var forApprovalCount = faculty[index].forApprovalCount;
          var statusClass;
          var lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0];

          if (props.path != 'approval') {
            statusClass = 'disabled btn ';
            faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass += 'btn-warning' : statusClass += 'btn-danger';
          }

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "list-group",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "".concat(path + encodeURIComponent(facultyId)),
                  className: "list-group-item list-group-item-action list-group-item-light",
                  children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    className: "badge badge-danger",
                    children: forApprovalCount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 9
            }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-dismiss": "modal",
                "data-target": "#editStatus",
                onClick: function onClick() {
                  setEdit(faculty[index].faculty_personal_info.user.userId);
                  setKey(user);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
              className: "table",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 6
        }, _this);
      }
    });
    physgeo = Object.keys(props.children).map(function (key) {
      if (props.children[key].unitId == 3) {
        var faculty = props.children[key].faculty_units;
        var facultyList = Object.keys(faculty).map(function (index) {
          var surname = faculty[index].faculty_personal_info.lastName;
          var firstName = faculty[index].faculty_personal_info.firstName;
          var facultyId = faculty[index].facultyId;
          var forApprovalCount = faculty[index].forApprovalCount;
          var statusClass;
          var lastUpdated;
          if (faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0];

          if (props.path != 'approval') {
            statusClass = 'disabled btn ';
            faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass += 'btn-warning' : statusClass += 'btn-danger';
          }

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "list-group",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "".concat(path + encodeURIComponent(facultyId)),
                  className: "list-group-item list-group-item-action list-group-item-light",
                  children: [surname, ", ", firstName, "\xA0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    className: "badge badge-danger",
                    children: forApprovalCount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 9
            }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-dismiss": "modal",
                "data-target": "#editStatus",
                onClick: function onClick() {
                  setEdit(faculty[index].faculty_personal_info.user.userId);
                  setKey(user);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
              className: "table",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 6
        }, _this);
      }
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      align: "center",
      children: "No approvals needed!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "alert alert-success",
      role: "alert",
      id: "facultyStatusalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 4
    }, this), chem, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 4
    }, this), mcsu, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 4
    }, this), physgeo, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "modal fade",
      id: "editStatus",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editStatus",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
              className: "modal-title",
              id: "editStatus",
              children: ["Update Faculty Status - ", currData.facultyName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                "aria-hidden": "true",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "form-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    htmlFor: "Status",
                    children: " Status "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 319,
                    columnNumber: 10
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
                    className: "form-control",
                    name: "Status",
                    id: "Status",
                    value: currData.status,
                    onChange: function onChange(e) {
                      return handleInputChange("status", e);
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Active",
                      children: "Active"
                    }, "active", false, {
                      fileName: _jsxFileName,
                      lineNumber: 321,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Inactive",
                      children: "Inactive"
                    }, "inactive", false, {
                      fileName: _jsxFileName,
                      lineNumber: 322,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 320,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 318,
                  columnNumber: 30
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 317,
                columnNumber: 29
              }, this), currData.status == 'Inactive' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "form-row",
                id: "remarksrow",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    htmlFor: "Remarks",
                    children: " Remarks "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 11
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
                    className: "form-control",
                    name: "Remarks",
                    id: "Remarks",
                    value: currData.remarks || '',
                    onChange: function onChange(e) {
                      return handleInputChange("remarks", e);
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "",
                      children: "-- SELECT REMARKS --"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 332,
                      columnNumber: 12
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Retired",
                      children: "Retired"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 333,
                      columnNumber: 12
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Resigned",
                      children: "Resigned"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 334,
                      columnNumber: 12
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "On Leave",
                      children: "On Leave"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 335,
                      columnNumber: 12
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 331,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: /*#__PURE__*/(0,C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
                var alert, res;
                return C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        $('#editStatus').modal('toggle');
                        alert = document.getElementById("facultyStatusalert");
                        _context4.next = 4;
                        return (0,_services_admin_updateUser__WEBPACK_IMPORTED_MODULE_8__.default)(currData, props.token);

                      case 4:
                        res = _context4.sent;

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
                        next_router__WEBPACK_IMPORTED_MODULE_7___default().push('/admin');

                      case 8:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })),
              children: "Save changes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 295,
    columnNumber: 3
  }, this);
}

_s(FacultyList, "SNsODSAuFQpQYJRv3ACoQCGZuXQ=");

_c = FacultyList;
/* harmony default export */ __webpack_exports__["default"] = (FacultyList);

var _c;

$RefreshReg$(_c, "FacultyList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mYWN1bHR5L2ZhY3VsdHlMaXN0LmpzIl0sIm5hbWVzIjpbIkZhY3VsdHlMaXN0IiwicHJvcHMiLCJjaGVtIiwibWNzdSIsInBoeXNnZW8iLCJ1c2VyIiwiUmVhY3QiLCJ1c2VySWQiLCJzdGF0dXMiLCJyZW1hcmtzIiwiZmFjdWx0eU5hbWUiLCJjdXJyRGF0YSIsInNldERhdGEiLCJyZW1hcmtzU3R5bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImlkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImNoaWxkcmVuIiwic2V0RWRpdCIsInNldEtleSIsIngiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiZmFjdWx0eSIsImZhY3VsdHlfdW5pdHMiLCJpbmRleCIsImZhY3VsdHlfcGVyc29uYWxfaW5mbyIsImxhc3ROYW1lIiwiZmlyc3ROYW1lIiwicGF0aCIsInVuaXRJZCIsImZhY3VsdHlMaXN0Iiwic3VybmFtZSIsImZhY3VsdHlJZCIsImZvckFwcHJvdmFsQ291bnQiLCJzdGF0dXNDbGFzcyIsImxhc3RVcGRhdGVkIiwiZmFjdWx0eV91cGRhdGUiLCJ1cGRhdGVkQXQiLCJzcGxpdCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJvbGUiLCJ1bml0IiwidmlzaWJpbGl0eSIsImUiLCIkIiwibW9kYWwiLCJhbGVydCIsInVwZGF0ZVVzZXIiLCJ0b2tlbiIsInJlcyIsInN1Y2Nlc3MiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwiZXJyb3IiLCJmYWRlVG8iLCJzbGlkZVVwIiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQzFCLE1BQUlD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YUQsT0FBL0IsQ0FBZCxLQUNLUCxLQUFLLENBQUNNLFNBQU4sR0FBa0JILEdBQUcsQ0FBQ0ksT0FBdEI7QUFDUjs7QUFDRFQseUJBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCVyxNQUF6QixDQUFnQyxJQUFoQyxFQUFzQyxHQUF0QyxFQUEyQ0MsT0FBM0MsQ0FBbUQsR0FBbkQsRUFBd0QsWUFBVTtBQUM5RFosMkJBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCWSxPQUF6QixDQUFpQyxHQUFqQztBQUNILHlCQUZEO0FBSUFDLCtFQUFBLENBQVksUUFBWjs7QUFqQnlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUosRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBNEVBOztHQTNXUWpFLFc7O0tBQUFBLFc7QUE2V1QsK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uZDFlN2I5MzhiMmQ1YmVjMDc0ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHVwZGF0ZVVzZXIgZnJvbSAnLi4vLi4vc2VydmljZXMvYWRtaW4vdXBkYXRlVXNlcidcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdHlMaXN0KHByb3BzKXsgXHJcblx0bGV0IGNoZW1cclxuXHRsZXQgbWNzdVxyXG5cdGxldCBwaHlzZ2VvXHJcblx0bGV0IHVzZXIgPSAwXHJcblx0Y29uc3QgW2N1cnJEYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuXHRcdHVzZXJJZDogMCxcclxuICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgIHJlbWFya3M6ICcnLFxyXG5cdFx0ZmFjdWx0eU5hbWU6ICcnXHJcbiAgICB9KVxyXG5cclxuXHRsZXQgcmVtYXJrc1N0eWxlXHJcblx0XHJcblx0ZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoaWQsIGV2ZW50KSB7XHJcblx0XHRzZXREYXRhKHsuLi5jdXJyRGF0YSwgW2lkXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcblx0XHRpZihpZCA9PSAnc3RhdHVzJykge1xyXG5cdFx0XHRpZihldmVudC50YXJnZXQudmFsdWUgPT0gJ0luYWN0aXZlJykgXHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW1hcmtzcm93XCIpLnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuXHRcdFx0ZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbWFya3Nyb3dcIikuc3R5bGUgPSBcInZpc2liaWxpdHk6IGhpZGRlblwiXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGlmKHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuXHRcdGxldCBwYXRoXHJcblx0XHRpZihwcm9wcy5wYXRoID09IFwiYXBwcm92YWxcIikgcGF0aCA9ICcvZmFjdWx0eS9hcHByb3ZhbC8nXHJcblx0XHRlbHNlIGlmKHByb3BzLnBhdGggPT0gJ2FkbWluJykgcGF0aCA9ICcvYWRtaW4vJ1xyXG5cdFx0ZWxzZSBpZihwcm9wcy5wYXRoID09ICdpbmZvJykgcGF0aCA9ICcvZmFjdWx0eS92aWV3LydcclxuXHRcdFxyXG5cdFx0Y2hlbSA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0aWYgKHByb3BzLmNoaWxkcmVuW2tleV0udW5pdElkID09IDEpIHsgXHJcblx0XHRcdFx0bGV0IGZhY3VsdHkgPSBwcm9wcy5jaGlsZHJlbltrZXldLmZhY3VsdHlfdW5pdHNcclxuXHRcdFx0XHRsZXQgZmFjdWx0eUxpc3QgPSBPYmplY3Qua2V5cyhmYWN1bHR5KS5tYXAoKGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgc3VybmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0TmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmYWN1bHR5SWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5SWRcclxuXHRcdFx0XHRcdGxldCBmb3JBcHByb3ZhbENvdW50ID0gZmFjdWx0eVtpbmRleF0uZm9yQXBwcm92YWxDb3VudFxyXG5cdFx0XHRcdFx0bGV0IHN0YXR1c0NsYXNzXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBsYXN0VXBkYXRlZFxyXG5cdFx0XHRcdFx0aWYoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlKSBsYXN0VXBkYXRlZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZS51cGRhdGVkQXQuc3BsaXQoJ1QnKVswXVxyXG5cclxuXHRcdFx0XHRcdGlmKHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJykge1xyXG5cdFx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9ICdkaXNhYmxlZCBidG4gJ1xyXG5cdFx0XHRcdFx0XHRmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXMgPT0gJ0FjdGl2ZScgPyBzdGF0dXNDbGFzcyArPSdidG4td2FybmluZycgOiBzdGF0dXNDbGFzcyArPSAnYnRuLWRhbmdlcidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmID0ge2Ake3BhdGggKyBlbmNvZGVVUklDb21wb25lbnQoZmFjdWx0eUlkKX1gfSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1saWdodFwiIGZvckFwcHJvdmFsPXtmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm99PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzdXJuYW1lfSwge2ZpcnN0TmFtZX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jm5ic3A7IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntmb3JBcHByb3ZhbENvdW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHByb3BzLnBhdGggPT0gJ2luZm8nICYmIHByb3BzLnJvbGUgPT0gMyAmJiBsYXN0VXBkYXRlZCAmJiBgIChMYXN0IFVwZGF0ZWQ6ICR7bGFzdFVwZGF0ZWR9KWAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuIGNsYXNzTmFtZT17c3RhdHVzQ2xhc3N9PntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXN9PC9zcGFuPjwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdFN0YXR1c1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0KGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnVzZXJJZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRLZXkodXNlcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+RWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDQgYWxpZ24gPSBcImNlbnRlclwiPiB7cHJvcHMuY2hpbGRyZW5ba2V5XS51bml0fSA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5SZW1hcmtzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5BY3Rpb248L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0e2ZhY3VsdHlMaXN0fVxyXG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7IFxyXG5cdFx0XHR9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0bWNzdSA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0aWYgKHByb3BzLmNoaWxkcmVuW2tleV0udW5pdElkID09IDIpIHsgXHJcblx0XHRcdFx0bGV0IGZhY3VsdHkgPSBwcm9wcy5jaGlsZHJlbltrZXldLmZhY3VsdHlfdW5pdHNcclxuXHRcdFx0XHRsZXQgZmFjdWx0eUxpc3QgPSBPYmplY3Qua2V5cyhmYWN1bHR5KS5tYXAoKGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgc3VybmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0TmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmYWN1bHR5SWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5SWRcclxuXHRcdFx0XHRcdGxldCBmb3JBcHByb3ZhbENvdW50ID0gZmFjdWx0eVtpbmRleF0uZm9yQXBwcm92YWxDb3VudFxyXG5cdFx0XHRcdFx0bGV0IHN0YXR1c0NsYXNzXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBsYXN0VXBkYXRlZFxyXG5cdFx0XHRcdFx0aWYoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlKSBsYXN0VXBkYXRlZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZS51cGRhdGVkQXQuc3BsaXQoJ1QnKVswXVxyXG5cclxuXHRcdFx0XHRcdGlmKHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJykge1xyXG5cdFx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9ICdkaXNhYmxlZCBidG4gJ1xyXG5cdFx0XHRcdFx0XHRmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXMgPT0gJ0FjdGl2ZScgPyBzdGF0dXNDbGFzcyArPSdidG4td2FybmluZycgOiBzdGF0dXNDbGFzcyArPSAnYnRuLWRhbmdlcidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmID0ge2Ake3BhdGggKyBlbmNvZGVVUklDb21wb25lbnQoZmFjdWx0eUlkKX1gfSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1saWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzdXJuYW1lfSwge2ZpcnN0TmFtZX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jm5ic3A7IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntmb3JBcHByb3ZhbENvdW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHByb3BzLnBhdGggPT0gJ2luZm8nICYmIHByb3BzLnJvbGUgPT0gMyAmJiBsYXN0VXBkYXRlZCAmJiBgIChMYXN0IFVwZGF0ZWQ6ICR7bGFzdFVwZGF0ZWR9KWAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1c308L3NwYW4+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0U3RhdHVzXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXQoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIudXNlcklkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEtleSh1c2VyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoNCBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5jaGlsZHJlbltrZXldLnVuaXR9IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlJlbWFya3M8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHR7ZmFjdWx0eUxpc3R9XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTsgXHJcblx0XHRcdH1cclxuICAgICAgICB9KTtcclxuXHJcblx0XHRwaHlzZ2VvID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG5cdFx0XHRpZiAocHJvcHMuY2hpbGRyZW5ba2V5XS51bml0SWQgPT0gMykgeyBcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5TGlzdCA9IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcCgoaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzdXJuYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmlyc3ROYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZhY3VsdHlJZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlJZFxyXG5cdFx0XHRcdFx0bGV0IGZvckFwcHJvdmFsQ291bnQgPSBmYWN1bHR5W2luZGV4XS5mb3JBcHByb3ZhbENvdW50XHJcblx0XHRcdFx0XHRsZXQgc3RhdHVzQ2xhc3NcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGxhc3RVcGRhdGVkXHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUpIGxhc3RVcGRhdGVkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlLnVwZGF0ZWRBdC5zcGxpdCgnVCcpWzBdXHJcblxyXG5cdFx0XHRcdFx0aWYocHJvcHMucGF0aCAhPSAnYXBwcm92YWwnKSB7XHJcblx0XHRcdFx0XHRcdHN0YXR1c0NsYXNzID0gJ2Rpc2FibGVkIGJ0biAnXHJcblx0XHRcdFx0XHRcdGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyA9PSAnQWN0aXZlJyA/IHN0YXR1c0NsYXNzICs9J2J0bi13YXJuaW5nJyA6IHN0YXR1c0NsYXNzICs9ICdidG4tZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWYgPSB7YCR7cGF0aCArIGVuY29kZVVSSUNvbXBvbmVudChmYWN1bHR5SWQpfWB9IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWxpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N1cm5hbWV9LCB7Zmlyc3ROYW1lfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2ZvckFwcHJvdmFsQ291bnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgcHJvcHMucGF0aCA9PSAnaW5mbycgJiYgcHJvcHMucm9sZSA9PSAzICYmIGxhc3RVcGRhdGVkICYmIGAgKExhc3QgVXBkYXRlZDogJHtsYXN0VXBkYXRlZH0pYCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD48c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzfTwvc3Bhbj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIucmVtYXJrcyB8fCAnTm9uZSd9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRTdGF0dXNcIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdChmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0S2V5KHVzZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PkVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGg0IGFsaWduID0gXCJjZW50ZXJcIj4ge3Byb3BzLmNoaWxkcmVuW2tleV0udW5pdH0gPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5TdGF0dXM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+UmVtYXJrczwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+QWN0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdHtmYWN1bHR5TGlzdH1cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpOyBcclxuXHRcdFx0fVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIHNldEVkaXQoaWQpIHtcclxuXHRcdFx0dXNlciA9IGlkXHJcblx0XHR9XHJcblxyXG5cdFx0YXN5bmMgZnVuY3Rpb24gc2V0S2V5KHgpIHtcclxuXHRcdFx0YXdhaXQgT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChhc3luYyBrZXkgPT4ge1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0YXdhaXQgT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKGFzeW5jIGluZGV4ID0+IHtcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnVzZXJJZCA9PSB4KSB7IFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0YXdhaXQgc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRcdFx0dXNlcklkOiB4LFxyXG5cdFx0XHRcdFx0XHRcdHN0YXR1czogZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzLFxyXG5cdFx0XHRcdFx0XHRcdHJlbWFya3M6IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3MsXHJcblx0XHRcdFx0XHRcdFx0ZmFjdWx0eU5hbWU6IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZSArICcsICcgKyBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG4gICAgfSBcclxuICAgIGVsc2V7IFxyXG4gICAgICAgIHJldHVybig8cCBhbGlnbiA9IFwiY2VudGVyXCI+Tm8gYXBwcm92YWxzIG5lZWRlZCE8L3A+KVxyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiIGlkPVwiZmFjdWx0eVN0YXR1c2FsZXJ0XCIgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9fT48L2Rpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdHtjaGVtfVxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0e21jc3V9XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHR7cGh5c2dlb31cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZWRpdFN0YXR1c1wiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZWRpdFN0YXR1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImVkaXRTdGF0dXNcIj5VcGRhdGUgRmFjdWx0eSBTdGF0dXMgLSB7Y3VyckRhdGEuZmFjdWx0eU5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiU3RhdHVzXCI+IFN0YXR1cyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlN0YXR1c1wiIGlkPVwiU3RhdHVzXCIgdmFsdWUgPSB7IGN1cnJEYXRhLnN0YXR1cyB9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcInN0YXR1c1wiLCBlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkFjdGl2ZVwiIGtleSA9IFwiYWN0aXZlXCI+QWN0aXZlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkluYWN0aXZlXCIga2V5ID0gXCJpbmFjdGl2ZVwiPkluYWN0aXZlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Y3VyckRhdGEuc3RhdHVzID09ICdJbmFjdGl2ZScgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIiBpZD1cInJlbWFya3Nyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUmVtYXJrc1wiPiBSZW1hcmtzIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWU9XCJSZW1hcmtzXCIgaWQ9XCJSZW1hcmtzXCIgdmFsdWUgPSB7IGN1cnJEYXRhLnJlbWFya3MgfHwgJyd9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcInJlbWFya3NcIiwgZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPi0tIFNFTEVDVCBSRU1BUktTIC0tPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUmV0aXJlZFwiPlJldGlyZWQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSZXNpZ25lZFwiPlJlc2lnbmVkPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiT24gTGVhdmVcIj5PbiBMZWF2ZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0U3RhdHVzJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYWN1bHR5U3RhdHVzYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB1cGRhdGVVc2VyKGN1cnJEYXRhLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZmFjdWx0eVN0YXR1c2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZmFjdWx0eVN0YXR1c2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUxpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==