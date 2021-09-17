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
  }

  currData.status == 'Inactive' ? remarksStyle = 'visible' : remarksStyle = 'hidden';

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
                    lineNumber: 56,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
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
                lineNumber: 73,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
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
                  lineNumber: 89,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
                    lineNumber: 134,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
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
                lineNumber: 150,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
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
                  lineNumber: 166,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
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
                    lineNumber: 211,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
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
                lineNumber: 227,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
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
                  lineNumber: 243,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 238,
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
      lineNumber: 288,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 293,
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
      lineNumber: 294,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 4
    }, this), chem, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 4
    }, this), mcsu, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 299,
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
              lineNumber: 306,
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
                lineNumber: 308,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 313,
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
                    lineNumber: 316,
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
                      lineNumber: 318,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Inactive",
                      children: "Inactive"
                    }, "inactive", false, {
                      fileName: _jsxFileName,
                      lineNumber: 319,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 317,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 315,
                  columnNumber: 30
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "form-row",
                id: "remarksrow",
                style: {
                  visibility: remarksStyle
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    htmlFor: "Remarks",
                    children: " Remarks "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 326,
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
                      lineNumber: 328,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Retired",
                      children: "Retired"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 329,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Resigned",
                      children: "Resigned"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 330,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "On Leave",
                      children: "On Leave"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 331,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 325,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 324,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
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
              lineNumber: 339,
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
              lineNumber: 340,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 292,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mYWN1bHR5L2ZhY3VsdHlMaXN0LmpzIl0sIm5hbWVzIjpbIkZhY3VsdHlMaXN0IiwicHJvcHMiLCJjaGVtIiwibWNzdSIsInBoeXNnZW8iLCJ1c2VyIiwiUmVhY3QiLCJ1c2VySWQiLCJzdGF0dXMiLCJyZW1hcmtzIiwiZmFjdWx0eU5hbWUiLCJjdXJyRGF0YSIsInNldERhdGEiLCJyZW1hcmtzU3R5bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImlkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic2V0RWRpdCIsInNldEtleSIsIngiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiZmFjdWx0eSIsImZhY3VsdHlfdW5pdHMiLCJpbmRleCIsImZhY3VsdHlfcGVyc29uYWxfaW5mbyIsImxhc3ROYW1lIiwiZmlyc3ROYW1lIiwicGF0aCIsInVuaXRJZCIsImZhY3VsdHlMaXN0Iiwic3VybmFtZSIsImZhY3VsdHlJZCIsImZvckFwcHJvdmFsQ291bnQiLCJzdGF0dXNDbGFzcyIsImxhc3RVcGRhdGVkIiwiZmFjdWx0eV91cGRhdGUiLCJ1cGRhdGVkQXQiLCJzcGxpdCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJvbGUiLCJ1bml0IiwidmlzaWJpbGl0eSIsImUiLCIkIiwibW9kYWwiLCJhbGVydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cGRhdGVVc2VyIiwidG9rZW4iLCJyZXMiLCJzdWNjZXNzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwiZXJyb3IiLCJmYWRlVG8iLCJzbGlkZVVwIiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQzFCLE1BQUlD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QUEyQ0MsT0FBM0MsQ0FBbUQsR0FBbkQsRUFBd0QsWUFBVTtBQUM5RGYsMkJBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCZSxPQUF6QixDQUFpQyxHQUFqQztBQUNILHlCQUZEO0FBSUFDLCtFQUFBLENBQVksUUFBWjs7QUFqQnlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUosRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMkVBOztHQXZXUWpFLFc7O0tBQUFBLFc7QUF5V1QsK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uZjNhZmM0MTkyZGY4NDJkMTcyOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHVwZGF0ZVVzZXIgZnJvbSAnLi4vLi4vc2VydmljZXMvYWRtaW4vdXBkYXRlVXNlcidcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdHlMaXN0KHByb3BzKXsgXHJcblx0bGV0IGNoZW1cclxuXHRsZXQgbWNzdVxyXG5cdGxldCBwaHlzZ2VvXHJcblx0bGV0IHVzZXIgPSAwXHJcblx0Y29uc3QgW2N1cnJEYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuXHRcdHVzZXJJZDogMCxcclxuICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgIHJlbWFya3M6ICcnLFxyXG5cdFx0ZmFjdWx0eU5hbWU6ICcnXHJcbiAgICB9KVxyXG5cclxuXHRsZXQgcmVtYXJrc1N0eWxlIFxyXG5cdFxyXG5cdGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGlkLCBldmVudCkge1xyXG5cdFx0c2V0RGF0YSh7Li4uY3VyckRhdGEsIFtpZF06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG5cdH1cclxuXHJcblx0Y3VyckRhdGEuc3RhdHVzID09ICdJbmFjdGl2ZScgPyByZW1hcmtzU3R5bGUgPSAndmlzaWJsZScgOiByZW1hcmtzU3R5bGUgPSAnaGlkZGVuJ1xyXG5cdFxyXG5cdGlmKHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuXHRcdGxldCBwYXRoXHJcblx0XHRpZihwcm9wcy5wYXRoID09IFwiYXBwcm92YWxcIikgcGF0aCA9ICcvZmFjdWx0eS9hcHByb3ZhbC8nXHJcblx0XHRlbHNlIGlmKHByb3BzLnBhdGggPT0gJ2FkbWluJykgcGF0aCA9ICcvYWRtaW4vJ1xyXG5cdFx0ZWxzZSBpZihwcm9wcy5wYXRoID09ICdpbmZvJykgcGF0aCA9ICcvZmFjdWx0eS92aWV3LydcclxuXHRcdFxyXG5cdFx0Y2hlbSA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0aWYgKHByb3BzLmNoaWxkcmVuW2tleV0udW5pdElkID09IDEpIHsgXHJcblx0XHRcdFx0bGV0IGZhY3VsdHkgPSBwcm9wcy5jaGlsZHJlbltrZXldLmZhY3VsdHlfdW5pdHNcclxuXHRcdFx0XHRsZXQgZmFjdWx0eUxpc3QgPSBPYmplY3Qua2V5cyhmYWN1bHR5KS5tYXAoKGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgc3VybmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0TmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmYWN1bHR5SWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5SWRcclxuXHRcdFx0XHRcdGxldCBmb3JBcHByb3ZhbENvdW50ID0gZmFjdWx0eVtpbmRleF0uZm9yQXBwcm92YWxDb3VudFxyXG5cdFx0XHRcdFx0bGV0IHN0YXR1c0NsYXNzXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBsYXN0VXBkYXRlZFxyXG5cdFx0XHRcdFx0aWYoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlKSBsYXN0VXBkYXRlZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZS51cGRhdGVkQXQuc3BsaXQoJ1QnKVswXVxyXG5cclxuXHRcdFx0XHRcdGlmKHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJykge1xyXG5cdFx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9ICdkaXNhYmxlZCBidG4gJ1xyXG5cdFx0XHRcdFx0XHRmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXMgPT0gJ0FjdGl2ZScgPyBzdGF0dXNDbGFzcyArPSdidG4td2FybmluZycgOiBzdGF0dXNDbGFzcyArPSAnYnRuLWRhbmdlcidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmID0ge2Ake3BhdGggKyBlbmNvZGVVUklDb21wb25lbnQoZmFjdWx0eUlkKX1gfSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1saWdodFwiIGZvckFwcHJvdmFsPXtmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm99PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzdXJuYW1lfSwge2ZpcnN0TmFtZX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jm5ic3A7IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntmb3JBcHByb3ZhbENvdW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHByb3BzLnBhdGggPT0gJ2luZm8nICYmIHByb3BzLnJvbGUgPT0gMyAmJiBsYXN0VXBkYXRlZCAmJiBgIChMYXN0IFVwZGF0ZWQ6ICR7bGFzdFVwZGF0ZWR9KWAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuIGNsYXNzTmFtZT17c3RhdHVzQ2xhc3N9PntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXN9PC9zcGFuPjwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdFN0YXR1c1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0KGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnVzZXJJZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRLZXkodXNlcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+RWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDQgYWxpZ24gPSBcImNlbnRlclwiPiB7cHJvcHMuY2hpbGRyZW5ba2V5XS51bml0fSA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5SZW1hcmtzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5BY3Rpb248L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0e2ZhY3VsdHlMaXN0fVxyXG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7IFxyXG5cdFx0XHR9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0bWNzdSA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0aWYgKHByb3BzLmNoaWxkcmVuW2tleV0udW5pdElkID09IDIpIHsgXHJcblx0XHRcdFx0bGV0IGZhY3VsdHkgPSBwcm9wcy5jaGlsZHJlbltrZXldLmZhY3VsdHlfdW5pdHNcclxuXHRcdFx0XHRsZXQgZmFjdWx0eUxpc3QgPSBPYmplY3Qua2V5cyhmYWN1bHR5KS5tYXAoKGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgc3VybmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0TmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmYWN1bHR5SWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5SWRcclxuXHRcdFx0XHRcdGxldCBmb3JBcHByb3ZhbENvdW50ID0gZmFjdWx0eVtpbmRleF0uZm9yQXBwcm92YWxDb3VudFxyXG5cdFx0XHRcdFx0bGV0IHN0YXR1c0NsYXNzXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBsYXN0VXBkYXRlZFxyXG5cdFx0XHRcdFx0aWYoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlKSBsYXN0VXBkYXRlZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZS51cGRhdGVkQXQuc3BsaXQoJ1QnKVswXVxyXG5cclxuXHRcdFx0XHRcdGlmKHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJykge1xyXG5cdFx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9ICdkaXNhYmxlZCBidG4gJ1xyXG5cdFx0XHRcdFx0XHRmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXMgPT0gJ0FjdGl2ZScgPyBzdGF0dXNDbGFzcyArPSdidG4td2FybmluZycgOiBzdGF0dXNDbGFzcyArPSAnYnRuLWRhbmdlcidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmID0ge2Ake3BhdGggKyBlbmNvZGVVUklDb21wb25lbnQoZmFjdWx0eUlkKX1gfSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1saWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzdXJuYW1lfSwge2ZpcnN0TmFtZX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jm5ic3A7IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntmb3JBcHByb3ZhbENvdW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHByb3BzLnBhdGggPT0gJ2luZm8nICYmIHByb3BzLnJvbGUgPT0gMyAmJiBsYXN0VXBkYXRlZCAmJiBgIChMYXN0IFVwZGF0ZWQ6ICR7bGFzdFVwZGF0ZWR9KWAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1c308L3NwYW4+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0U3RhdHVzXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXQoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIudXNlcklkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEtleSh1c2VyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoNCBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5jaGlsZHJlbltrZXldLnVuaXR9IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlJlbWFya3M8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHR7ZmFjdWx0eUxpc3R9XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTsgXHJcblx0XHRcdH1cclxuICAgICAgICB9KTtcclxuXHJcblx0XHRwaHlzZ2VvID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4ge1xyXG5cdFx0XHRpZiAocHJvcHMuY2hpbGRyZW5ba2V5XS51bml0SWQgPT0gMykgeyBcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5TGlzdCA9IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcCgoaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzdXJuYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmxhc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmlyc3ROYW1lID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZhY3VsdHlJZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlJZFxyXG5cdFx0XHRcdFx0bGV0IGZvckFwcHJvdmFsQ291bnQgPSBmYWN1bHR5W2luZGV4XS5mb3JBcHByb3ZhbENvdW50XHJcblx0XHRcdFx0XHRsZXQgc3RhdHVzQ2xhc3NcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGxhc3RVcGRhdGVkXHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUpIGxhc3RVcGRhdGVkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlLnVwZGF0ZWRBdC5zcGxpdCgnVCcpWzBdXHJcblxyXG5cdFx0XHRcdFx0aWYocHJvcHMucGF0aCAhPSAnYXBwcm92YWwnKSB7XHJcblx0XHRcdFx0XHRcdHN0YXR1c0NsYXNzID0gJ2Rpc2FibGVkIGJ0biAnXHJcblx0XHRcdFx0XHRcdGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyA9PSAnQWN0aXZlJyA/IHN0YXR1c0NsYXNzICs9J2J0bi13YXJuaW5nJyA6IHN0YXR1c0NsYXNzICs9ICdidG4tZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWYgPSB7YCR7cGF0aCArIGVuY29kZVVSSUNvbXBvbmVudChmYWN1bHR5SWQpfWB9IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWxpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N1cm5hbWV9LCB7Zmlyc3ROYW1lfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2ZvckFwcHJvdmFsQ291bnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgcHJvcHMucGF0aCA9PSAnaW5mbycgJiYgcHJvcHMucm9sZSA9PSAzICYmIGxhc3RVcGRhdGVkICYmIGAgKExhc3QgVXBkYXRlZDogJHtsYXN0VXBkYXRlZH0pYCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD48c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzfTwvc3Bhbj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIucmVtYXJrcyB8fCAnTm9uZSd9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRTdGF0dXNcIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdChmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0S2V5KHVzZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PkVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGg0IGFsaWduID0gXCJjZW50ZXJcIj4ge3Byb3BzLmNoaWxkcmVuW2tleV0udW5pdH0gPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5TdGF0dXM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+UmVtYXJrczwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+QWN0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdHtmYWN1bHR5TGlzdH1cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpOyBcclxuXHRcdFx0fVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIHNldEVkaXQoaWQpIHtcclxuXHRcdFx0dXNlciA9IGlkXHJcblx0XHR9XHJcblxyXG5cdFx0YXN5bmMgZnVuY3Rpb24gc2V0S2V5KHgpIHtcclxuXHRcdFx0YXdhaXQgT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChhc3luYyBrZXkgPT4ge1xyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0YXdhaXQgT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKGFzeW5jIGluZGV4ID0+IHtcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnVzZXJJZCA9PSB4KSB7IFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0YXdhaXQgc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRcdFx0dXNlcklkOiB4LFxyXG5cdFx0XHRcdFx0XHRcdHN0YXR1czogZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzLFxyXG5cdFx0XHRcdFx0XHRcdHJlbWFya3M6IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3MsXHJcblx0XHRcdFx0XHRcdFx0ZmFjdWx0eU5hbWU6IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZSArICcsICcgKyBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG4gICAgfSBcclxuICAgIGVsc2V7IFxyXG4gICAgICAgIHJldHVybig8cCBhbGlnbiA9IFwiY2VudGVyXCI+Tm8gYXBwcm92YWxzIG5lZWRlZCE8L3A+KVxyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiIGlkPVwiZmFjdWx0eVN0YXR1c2FsZXJ0XCIgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9fT48L2Rpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdHtjaGVtfVxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0e21jc3V9XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHR7cGh5c2dlb31cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZWRpdFN0YXR1c1wiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZWRpdFN0YXR1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImVkaXRTdGF0dXNcIj5VcGRhdGUgRmFjdWx0eSBTdGF0dXMgLSB7Y3VyckRhdGEuZmFjdWx0eU5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiU3RhdHVzXCI+IFN0YXR1cyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlN0YXR1c1wiIGlkPVwiU3RhdHVzXCIgdmFsdWUgPSB7IGN1cnJEYXRhLnN0YXR1cyB9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcInN0YXR1c1wiLCBlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkFjdGl2ZVwiIGtleSA9IFwiYWN0aXZlXCI+QWN0aXZlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkluYWN0aXZlXCIga2V5ID0gXCJpbmFjdGl2ZVwiPkluYWN0aXZlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCIgaWQ9XCJyZW1hcmtzcm93XCIgc3R5bGU9e3t2aXNpYmlsaXR5OiByZW1hcmtzU3R5bGV9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJSZW1hcmtzXCI+IFJlbWFya3MgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWU9XCJSZW1hcmtzXCIgaWQ9XCJSZW1hcmtzXCIgdmFsdWUgPSB7IGN1cnJEYXRhLnJlbWFya3MgfHwgJyd9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcInJlbWFya3NcIiwgZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj4tLSBTRUxFQ1QgUkVNQVJLUyAtLTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSZXRpcmVkXCI+UmV0aXJlZDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSZXNpZ25lZFwiPlJlc2lnbmVkPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIk9uIExlYXZlXCI+T24gTGVhdmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0U3RhdHVzJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYWN1bHR5U3RhdHVzYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB1cGRhdGVVc2VyKGN1cnJEYXRhLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZmFjdWx0eVN0YXR1c2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZmFjdWx0eVN0YXR1c2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUxpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==