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
    remarks: ''
  }),
      _React$useState2 = (0,C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState, 2),
      currData = _React$useState2[0],
      setData = _React$useState2[1];

  var facultyName;
  var remarksStyle;

  function handleInputChange(id, event) {
    setData(_objectSpread(_objectSpread({}, currData), {}, (0,C_Users_JodieLeeDiane_C_Bod_Projects_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, id, event.target.value)));
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
                                          remarks: faculty[index].faculty_personal_info.user.remarks
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
                    lineNumber: 54,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
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
                lineNumber: 71,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
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
                  lineNumber: 87,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
                    lineNumber: 132,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
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
                lineNumber: 148,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
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
                  lineNumber: 164,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
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
                    lineNumber: 209,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
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
                  facultyName = faculty[index].faculty_personal_info.lastName;
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
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
                  lineNumber: 242,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 237,
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
      lineNumber: 285,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
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
      lineNumber: 291,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 4
    }, this), chem, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 4
    }, this), mcsu, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 296,
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
              children: ["Update Faculty Status - ", facultyName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 303,
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
                lineNumber: 305,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
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
                    lineNumber: 313,
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
                      lineNumber: 315,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Inactive",
                      children: "Inactive"
                    }, "inactive", false, {
                      fileName: _jsxFileName,
                      lineNumber: 316,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 30
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "form-row",
                id: "remarksrow",
                style: remarksStyle,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    htmlFor: "Remarks",
                    children: " Remarks "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 10
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
                      lineNumber: 324,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Retired",
                      children: "Retired"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 325,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Resigned",
                      children: "Resigned"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 326,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "On Leave",
                      children: "On Leave"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 327,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 30
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
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
              lineNumber: 334,
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
              lineNumber: 335,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 289,
    columnNumber: 3
  }, this);
}

_s(FacultyList, "VzpVsLcWnv8UEIWx50vQuqGjnxc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mYWN1bHR5L2ZhY3VsdHlMaXN0LmpzIl0sIm5hbWVzIjpbIkZhY3VsdHlMaXN0IiwicHJvcHMiLCJjaGVtIiwibWNzdSIsInBoeXNnZW8iLCJ1c2VyIiwiUmVhY3QiLCJ1c2VySWQiLCJzdGF0dXMiLCJyZW1hcmtzIiwiY3VyckRhdGEiLCJzZXREYXRhIiwiZmFjdWx0eU5hbWUiLCJyZW1hcmtzU3R5bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImlkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic2V0RWRpdCIsInNldEtleSIsIngiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiZmFjdWx0eSIsImZhY3VsdHlfdW5pdHMiLCJpbmRleCIsImZhY3VsdHlfcGVyc29uYWxfaW5mbyIsInBhdGgiLCJ1bml0SWQiLCJmYWN1bHR5TGlzdCIsInN1cm5hbWUiLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsImZhY3VsdHlJZCIsImZvckFwcHJvdmFsQ291bnQiLCJzdGF0dXNDbGFzcyIsImxhc3RVcGRhdGVkIiwiZmFjdWx0eV91cGRhdGUiLCJ1cGRhdGVkQXQiLCJzcGxpdCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJvbGUiLCJ1bml0IiwidmlzaWJpbGl0eSIsImUiLCIkIiwibW9kYWwiLCJhbGVydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cGRhdGVVc2VyIiwidG9rZW4iLCJyZXMiLCJzdWNjZXNzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwiZXJyb3IiLCJmYWRlVG8iLCJzbGlkZVVwIiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQzFCLE1BQUlD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QTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF5RUE7O0dBbFdRakUsVzs7S0FBQUEsVztBQW9XVCwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi5iNzdhZTllYmQ5MjZjMjI3YzNjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgdXBkYXRlVXNlciBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hZG1pbi91cGRhdGVVc2VyJ1xyXG5cclxuZnVuY3Rpb24gRmFjdWx0eUxpc3QocHJvcHMpeyBcclxuXHRsZXQgY2hlbVxyXG5cdGxldCBtY3N1XHJcblx0bGV0IHBoeXNnZW9cclxuXHRsZXQgdXNlciA9IDBcclxuXHRjb25zdCBbY3VyckRhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG5cdFx0dXNlcklkOiAwLFxyXG4gICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgcmVtYXJrczogJydcclxuICAgIH0pXHJcblxyXG5cdGxldCBmYWN1bHR5TmFtZVxyXG5cdGxldCByZW1hcmtzU3R5bGVcclxuXHRcclxuXHRmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShpZCwgZXZlbnQpIHtcclxuXHRcdHNldERhdGEoey4uLmN1cnJEYXRhLCBbaWRdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuXHR9XHJcblx0XHJcblx0aWYocHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG5cdFx0bGV0IHBhdGhcclxuXHRcdGlmKHByb3BzLnBhdGggPT0gXCJhcHByb3ZhbFwiKSBwYXRoID0gJy9mYWN1bHR5L2FwcHJvdmFsLydcclxuXHRcdGVsc2UgaWYocHJvcHMucGF0aCA9PSAnYWRtaW4nKSBwYXRoID0gJy9hZG1pbi8nXHJcblx0XHRlbHNlIGlmKHByb3BzLnBhdGggPT0gJ2luZm8nKSBwYXRoID0gJy9mYWN1bHR5L3ZpZXcvJ1xyXG5cdFx0XHJcblx0XHRjaGVtID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG5cdFx0XHRpZiAocHJvcHMuY2hpbGRyZW5ba2V5XS51bml0SWQgPT0gMSkgeyBcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5TGlzdCA9IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcCgoaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzdXJuYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmlyc3ROYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZhY3VsdHlJZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlJZFxyXG5cdFx0XHRcdFx0bGV0IGZvckFwcHJvdmFsQ291bnQgPSBmYWN1bHR5W2luZGV4XS5mb3JBcHByb3ZhbENvdW50XHJcblx0XHRcdFx0XHRsZXQgc3RhdHVzQ2xhc3NcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGxhc3RVcGRhdGVkXHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUpIGxhc3RVcGRhdGVkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlLnVwZGF0ZWRBdC5zcGxpdCgnVCcpWzBdXHJcblxyXG5cdFx0XHRcdFx0aWYocHJvcHMucGF0aCAhPSAnYXBwcm92YWwnKSB7XHJcblx0XHRcdFx0XHRcdHN0YXR1c0NsYXNzID0gJ2Rpc2FibGVkIGJ0biAnXHJcblx0XHRcdFx0XHRcdGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyA9PSAnQWN0aXZlJyA/IHN0YXR1c0NsYXNzICs9J2J0bi13YXJuaW5nJyA6IHN0YXR1c0NsYXNzICs9ICdidG4tZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWYgPSB7YCR7cGF0aCArIGVuY29kZVVSSUNvbXBvbmVudChmYWN1bHR5SWQpfWB9IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWxpZ2h0XCIgZm9yQXBwcm92YWw9e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mb30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N1cm5hbWV9LCB7Zmlyc3ROYW1lfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2ZvckFwcHJvdmFsQ291bnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgcHJvcHMucGF0aCA9PSAnaW5mbycgJiYgcHJvcHMucm9sZSA9PSAzICYmIGxhc3RVcGRhdGVkICYmIGAgKExhc3QgVXBkYXRlZDogJHtsYXN0VXBkYXRlZH0pYCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1c308L3NwYW4+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0U3RhdHVzXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXQoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIudXNlcklkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEtleSh1c2VyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoNCBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5jaGlsZHJlbltrZXldLnVuaXR9IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlJlbWFya3M8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHR7ZmFjdWx0eUxpc3R9XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTsgXHJcblx0XHRcdH1cclxuICAgICAgICB9KTtcclxuXHJcblx0XHRtY3N1ID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG5cdFx0XHRpZiAocHJvcHMuY2hpbGRyZW5ba2V5XS51bml0SWQgPT0gMikgeyBcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5TGlzdCA9IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcCgoaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzdXJuYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmlyc3ROYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZhY3VsdHlJZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlJZFxyXG5cdFx0XHRcdFx0bGV0IGZvckFwcHJvdmFsQ291bnQgPSBmYWN1bHR5W2luZGV4XS5mb3JBcHByb3ZhbENvdW50XHJcblx0XHRcdFx0XHRsZXQgc3RhdHVzQ2xhc3NcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGxhc3RVcGRhdGVkXHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUpIGxhc3RVcGRhdGVkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlLnVwZGF0ZWRBdC5zcGxpdCgnVCcpWzBdXHJcblxyXG5cdFx0XHRcdFx0aWYocHJvcHMucGF0aCAhPSAnYXBwcm92YWwnKSB7XHJcblx0XHRcdFx0XHRcdHN0YXR1c0NsYXNzID0gJ2Rpc2FibGVkIGJ0biAnXHJcblx0XHRcdFx0XHRcdGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyA9PSAnQWN0aXZlJyA/IHN0YXR1c0NsYXNzICs9J2J0bi13YXJuaW5nJyA6IHN0YXR1c0NsYXNzICs9ICdidG4tZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWYgPSB7YCR7cGF0aCArIGVuY29kZVVSSUNvbXBvbmVudChmYWN1bHR5SWQpfWB9IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWxpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N1cm5hbWV9LCB7Zmlyc3ROYW1lfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2ZvckFwcHJvdmFsQ291bnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgcHJvcHMucGF0aCA9PSAnaW5mbycgJiYgcHJvcHMucm9sZSA9PSAzICYmIGxhc3RVcGRhdGVkICYmIGAgKExhc3QgVXBkYXRlZDogJHtsYXN0VXBkYXRlZH0pYCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD48c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzfTwvc3Bhbj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIucmVtYXJrcyB8fCAnTm9uZSd9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRTdGF0dXNcIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdChmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0S2V5KHVzZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PkVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGg0IGFsaWduID0gXCJjZW50ZXJcIj4ge3Byb3BzLmNoaWxkcmVuW2tleV0udW5pdH0gPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5TdGF0dXM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+UmVtYXJrczwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+QWN0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdHtmYWN1bHR5TGlzdH1cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpOyBcclxuXHRcdFx0fVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdHBoeXNnZW8gPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcblx0XHRcdGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnVuaXRJZCA9PSAzKSB7IFxyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0bGV0IGZhY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKChpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1cm5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmaXJzdE5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmFjdWx0eUlkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eUlkXHJcblx0XHRcdFx0XHRsZXQgZm9yQXBwcm92YWxDb3VudCA9IGZhY3VsdHlbaW5kZXhdLmZvckFwcHJvdmFsQ291bnRcclxuXHRcdFx0XHRcdGxldCBzdGF0dXNDbGFzc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbGFzdFVwZGF0ZWRcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZSkgbGFzdFVwZGF0ZWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUudXBkYXRlZEF0LnNwbGl0KCdUJylbMF1cclxuXHJcblx0XHRcdFx0XHRpZihwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcpIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSAnZGlzYWJsZWQgYnRuICdcclxuXHRcdFx0XHRcdFx0ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzID09ICdBY3RpdmUnID8gc3RhdHVzQ2xhc3MgKz0nYnRuLXdhcm5pbmcnIDogc3RhdHVzQ2xhc3MgKz0gJ2J0bi1kYW5nZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZiA9IHtgJHtwYXRoICsgZW5jb2RlVVJJQ29tcG9uZW50KGZhY3VsdHlJZCl9YH0gY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tbGlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c3VybmFtZX0sIHtmaXJzdE5hbWV9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57Zm9yQXBwcm92YWxDb3VudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5wYXRoID09ICdpbmZvJyAmJiBwcm9wcy5yb2xlID09IDMgJiYgbGFzdFVwZGF0ZWQgJiYgYCAoTGFzdCBVcGRhdGVkOiAke2xhc3RVcGRhdGVkfSlgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuIGNsYXNzTmFtZT17c3RhdHVzQ2xhc3N9PntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXN9PC9zcGFuPjwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdFN0YXR1c1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0KGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnVzZXJJZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRLZXkodXNlcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmYWN1bHR5TmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoNCBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5jaGlsZHJlbltrZXldLnVuaXR9IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlJlbWFya3M8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHR7ZmFjdWx0eUxpc3R9XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTsgXHJcblx0XHRcdH1cclxuICAgICAgICB9KTtcclxuXHJcblx0XHRmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcblx0XHRcdHVzZXIgPSBpZFxyXG5cdFx0fVxyXG5cclxuXHRcdGFzeW5jIGZ1bmN0aW9uIHNldEtleSh4KSB7XHJcblx0XHRcdGF3YWl0IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoYXN5bmMga2V5ID0+IHtcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGF3YWl0IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcChhc3luYyBpbmRleCA9PiB7XHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQgPT0geCkgeyBcclxuXHRcdFx0XHRcdFx0YXdhaXQgc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRcdFx0dXNlcklkOiB4LFxyXG5cdFx0XHRcdFx0XHRcdHN0YXR1czogZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzLFxyXG5cdFx0XHRcdFx0XHRcdHJlbWFya3M6IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3NcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9XHJcbiAgICB9IFxyXG4gICAgZWxzZXsgXHJcbiAgICAgICAgcmV0dXJuKDxwIGFsaWduID0gXCJjZW50ZXJcIj5ObyBhcHByb3ZhbHMgbmVlZGVkITwvcD4pXHJcbiAgICB9XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJmYWN1bHR5U3RhdHVzYWxlcnRcIiBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIn19PjwvZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0e2NoZW19XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHR7bWNzdX1cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdHtwaHlzZ2VvfVxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJlZGl0U3RhdHVzXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJlZGl0U3RhdHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZWRpdFN0YXR1c1wiPlVwZGF0ZSBGYWN1bHR5IFN0YXR1cyAtIHtmYWN1bHR5TmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJTdGF0dXNcIj4gU3RhdHVzIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiU3RhdHVzXCIgaWQ9XCJTdGF0dXNcIiB2YWx1ZSA9IHsgY3VyckRhdGEuc3RhdHVzIH0gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwic3RhdHVzXCIsIGUpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQWN0aXZlXCIga2V5ID0gXCJhY3RpdmVcIj5BY3RpdmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiSW5hY3RpdmVcIiBrZXkgPSBcImluYWN0aXZlXCI+SW5hY3RpdmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiIGlkPVwicmVtYXJrc3Jvd1wiICBzdHlsZT17cmVtYXJrc1N0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlJlbWFya3NcIj4gUmVtYXJrcyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlJlbWFya3NcIiBpZD1cIlJlbWFya3NcIiB2YWx1ZSA9IHsgY3VyckRhdGEucmVtYXJrcyB8fCAnJ30gb25DaGFuZ2UgPSB7KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwicmVtYXJrc1wiLCBlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPi0tIFNFTEVDVCBSRU1BUktTIC0tPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlJldGlyZWRcIj5SZXRpcmVkPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlJlc2lnbmVkXCI+UmVzaWduZWQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiT24gTGVhdmVcIj5PbiBMZWF2ZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0U3RhdHVzJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYWN1bHR5U3RhdHVzYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB1cGRhdGVVc2VyKGN1cnJEYXRhLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZmFjdWx0eVN0YXR1c2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZmFjdWx0eVN0YXR1c2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUxpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==