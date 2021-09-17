self["webpackHotUpdate_N_E"]("pages/faculty/view/all",{

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
                    lineNumber: 61,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
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
                lineNumber: 78,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
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
                  lineNumber: 94,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
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
                    lineNumber: 139,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
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
                lineNumber: 155,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
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
                  lineNumber: 171,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
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
                    lineNumber: 216,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
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
                lineNumber: 232,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
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
                  lineNumber: 248,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
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
      lineNumber: 293,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 298,
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
      lineNumber: 299,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 4
    }, this), chem, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 4
    }, this), mcsu, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 304,
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
              lineNumber: 311,
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
                lineNumber: 313,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
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
                    lineNumber: 321,
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
                      lineNumber: 323,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Inactive",
                      children: "Inactive"
                    }, "inactive", false, {
                      fileName: _jsxFileName,
                      lineNumber: 324,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 320,
                  columnNumber: 30
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 319,
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
                    lineNumber: 331,
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
                      lineNumber: 333,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Retired",
                      children: "Retired"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 334,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Resigned",
                      children: "Resigned"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 335,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "On Leave",
                      children: "On Leave"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 336,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 330,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
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
              lineNumber: 344,
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
              lineNumber: 345,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 297,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mYWN1bHR5L2ZhY3VsdHlMaXN0LmpzIl0sIm5hbWVzIjpbIkZhY3VsdHlMaXN0IiwicHJvcHMiLCJjaGVtIiwibWNzdSIsInBoeXNnZW8iLCJ1c2VyIiwiUmVhY3QiLCJ1c2VySWQiLCJzdGF0dXMiLCJyZW1hcmtzIiwiZmFjdWx0eU5hbWUiLCJjdXJyRGF0YSIsInNldERhdGEiLCJyZW1hcmtzU3R5bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImlkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImNoaWxkcmVuIiwic2V0RWRpdCIsInNldEtleSIsIngiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiZmFjdWx0eSIsImZhY3VsdHlfdW5pdHMiLCJpbmRleCIsImZhY3VsdHlfcGVyc29uYWxfaW5mbyIsImxhc3ROYW1lIiwiZmlyc3ROYW1lIiwicGF0aCIsInVuaXRJZCIsImZhY3VsdHlMaXN0Iiwic3VybmFtZSIsImZhY3VsdHlJZCIsImZvckFwcHJvdmFsQ291bnQiLCJzdGF0dXNDbGFzcyIsImxhc3RVcGRhdGVkIiwiZmFjdWx0eV91cGRhdGUiLCJ1cGRhdGVkQXQiLCJzcGxpdCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJvbGUiLCJ1bml0IiwidmlzaWJpbGl0eSIsImUiLCIkIiwibW9kYWwiLCJhbGVydCIsInVwZGF0ZVVzZXIiLCJ0b2tlbiIsInJlcyIsInN1Y2Nlc3MiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwiZXJyb3IiLCJmYWRlVG8iLCJzbGlkZVVwIiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQzFCLE1BQUlD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QkFBbEI7QUFDQSw4QkFBR0YsR0FBRyxDQUFDSyxLQUFQLEVBQWNSLEtBQUssQ0FBQ00sU0FBTixHQUFrQkgsR0FBRyxDQUFDSyxLQUFKLENBQVUsQ0FBVixFQUFhRCxPQUEvQixDQUFkLEtBQ0tQLEtBQUssQ0FBQ00sU0FBTixHQUFrQkgsR0FBRyxDQUFDSSxPQUF0QjtBQUNSOztBQUNEVCx5QkFBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJXLE1BQXpCLENBQWdDLElBQWhDLEVBQXNDLEdBQXRDLEVBQTJDQyxPQUEzQyxDQUFtRCxHQUFuRCxFQUF3RCxZQUFVO0FBQzlEWiwyQkFBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJZLE9BQXpCLENBQWlDLEdBQWpDO0FBQ0gseUJBRkQ7QUFJQUMsK0VBQUEsQ0FBWSxRQUFaOztBQWpCeUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSixFQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEyRUE7O0dBNVdRakUsVzs7S0FBQUEsVztBQThXVCwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mYWN1bHR5L3ZpZXcvYWxsLmU1ZjExNjhiZGJjYjliMDIxMTBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB1cGRhdGVVc2VyIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkbWluL3VwZGF0ZVVzZXInXHJcblxyXG5mdW5jdGlvbiBGYWN1bHR5TGlzdChwcm9wcyl7IFxyXG5cdGxldCBjaGVtXHJcblx0bGV0IG1jc3VcclxuXHRsZXQgcGh5c2dlb1xyXG5cdGxldCB1c2VyID0gMFxyXG5cdGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcblx0XHR1c2VySWQ6IDAsXHJcbiAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgICByZW1hcmtzOiAnJyxcclxuXHRcdGZhY3VsdHlOYW1lOiAnJ1xyXG4gICAgfSlcclxuXHJcblx0bGV0IHJlbWFya3NTdHlsZSBcclxuXHRcclxuXHRmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShpZCwgZXZlbnQpIHtcclxuXHRcdHNldERhdGEoey4uLmN1cnJEYXRhLCBbaWRdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuXHRcdGlmKGlkID09ICdzdGF0dXMnKSB7XHJcblx0XHRcdGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PSAnSW5hY3RpdmUnKSBcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbWFya3Nyb3dcIikuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG5cdFx0XHRlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtYXJrc3Jvd1wiKS5zdHlsZSA9IFwidmlzaWJpbGl0eTogaGlkZGVuXCJcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGN1cnJEYXRhLnN0YXR1cyA9PSAnSW5hY3RpdmUnID8gcmVtYXJrc1N0eWxlID0gJ3Zpc2libGUnIDogcmVtYXJrc1N0eWxlID0gJ2hpZGRlbidcclxuXHRcclxuXHRpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcblx0XHRsZXQgcGF0aFxyXG5cdFx0aWYocHJvcHMucGF0aCA9PSBcImFwcHJvdmFsXCIpIHBhdGggPSAnL2ZhY3VsdHkvYXBwcm92YWwvJ1xyXG5cdFx0ZWxzZSBpZihwcm9wcy5wYXRoID09ICdhZG1pbicpIHBhdGggPSAnL2FkbWluLydcclxuXHRcdGVsc2UgaWYocHJvcHMucGF0aCA9PSAnaW5mbycpIHBhdGggPSAnL2ZhY3VsdHkvdmlldy8nXHJcblx0XHRcclxuXHRcdGNoZW0gPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcblx0XHRcdGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnVuaXRJZCA9PSAxKSB7IFxyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0bGV0IGZhY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKChpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1cm5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmaXJzdE5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmFjdWx0eUlkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eUlkXHJcblx0XHRcdFx0XHRsZXQgZm9yQXBwcm92YWxDb3VudCA9IGZhY3VsdHlbaW5kZXhdLmZvckFwcHJvdmFsQ291bnRcclxuXHRcdFx0XHRcdGxldCBzdGF0dXNDbGFzc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbGFzdFVwZGF0ZWRcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZSkgbGFzdFVwZGF0ZWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUudXBkYXRlZEF0LnNwbGl0KCdUJylbMF1cclxuXHJcblx0XHRcdFx0XHRpZihwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcpIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSAnZGlzYWJsZWQgYnRuICdcclxuXHRcdFx0XHRcdFx0ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzID09ICdBY3RpdmUnID8gc3RhdHVzQ2xhc3MgKz0nYnRuLXdhcm5pbmcnIDogc3RhdHVzQ2xhc3MgKz0gJ2J0bi1kYW5nZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZiA9IHtgJHtwYXRoICsgZW5jb2RlVVJJQ29tcG9uZW50KGZhY3VsdHlJZCl9YH0gY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tbGlnaHRcIiBmb3JBcHByb3ZhbD17ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c3VybmFtZX0sIHtmaXJzdE5hbWV9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57Zm9yQXBwcm92YWxDb3VudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5wYXRoID09ICdpbmZvJyAmJiBwcm9wcy5yb2xlID09IDMgJiYgbGFzdFVwZGF0ZWQgJiYgYCAoTGFzdCBVcGRhdGVkOiAke2xhc3RVcGRhdGVkfSlgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD48c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzfTwvc3Bhbj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIucmVtYXJrcyB8fCAnTm9uZSd9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRTdGF0dXNcIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdChmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0S2V5KHVzZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PkVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGg0IGFsaWduID0gXCJjZW50ZXJcIj4ge3Byb3BzLmNoaWxkcmVuW2tleV0udW5pdH0gPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5TdGF0dXM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+UmVtYXJrczwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+QWN0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdHtmYWN1bHR5TGlzdH1cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpOyBcclxuXHRcdFx0fVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdG1jc3UgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcblx0XHRcdGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnVuaXRJZCA9PSAyKSB7IFxyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0bGV0IGZhY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKChpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1cm5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmaXJzdE5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmFjdWx0eUlkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eUlkXHJcblx0XHRcdFx0XHRsZXQgZm9yQXBwcm92YWxDb3VudCA9IGZhY3VsdHlbaW5kZXhdLmZvckFwcHJvdmFsQ291bnRcclxuXHRcdFx0XHRcdGxldCBzdGF0dXNDbGFzc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbGFzdFVwZGF0ZWRcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZSkgbGFzdFVwZGF0ZWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUudXBkYXRlZEF0LnNwbGl0KCdUJylbMF1cclxuXHJcblx0XHRcdFx0XHRpZihwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcpIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSAnZGlzYWJsZWQgYnRuICdcclxuXHRcdFx0XHRcdFx0ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzID09ICdBY3RpdmUnID8gc3RhdHVzQ2xhc3MgKz0nYnRuLXdhcm5pbmcnIDogc3RhdHVzQ2xhc3MgKz0gJ2J0bi1kYW5nZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZiA9IHtgJHtwYXRoICsgZW5jb2RlVVJJQ29tcG9uZW50KGZhY3VsdHlJZCl9YH0gY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tbGlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c3VybmFtZX0sIHtmaXJzdE5hbWV9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57Zm9yQXBwcm92YWxDb3VudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5wYXRoID09ICdpbmZvJyAmJiBwcm9wcy5yb2xlID09IDMgJiYgbGFzdFVwZGF0ZWQgJiYgYCAoTGFzdCBVcGRhdGVkOiAke2xhc3RVcGRhdGVkfSlgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuIGNsYXNzTmFtZT17c3RhdHVzQ2xhc3N9PntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXN9PC9zcGFuPjwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdFN0YXR1c1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0KGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnVzZXJJZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRLZXkodXNlcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+RWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDQgYWxpZ24gPSBcImNlbnRlclwiPiB7cHJvcHMuY2hpbGRyZW5ba2V5XS51bml0fSA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5SZW1hcmtzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5BY3Rpb248L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0e2ZhY3VsdHlMaXN0fVxyXG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7IFxyXG5cdFx0XHR9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0cGh5c2dlbyA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0aWYgKHByb3BzLmNoaWxkcmVuW2tleV0udW5pdElkID09IDMpIHsgXHJcblx0XHRcdFx0bGV0IGZhY3VsdHkgPSBwcm9wcy5jaGlsZHJlbltrZXldLmZhY3VsdHlfdW5pdHNcclxuXHRcdFx0XHRsZXQgZmFjdWx0eUxpc3QgPSBPYmplY3Qua2V5cyhmYWN1bHR5KS5tYXAoKGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgc3VybmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0TmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmYWN1bHR5SWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5SWRcclxuXHRcdFx0XHRcdGxldCBmb3JBcHByb3ZhbENvdW50ID0gZmFjdWx0eVtpbmRleF0uZm9yQXBwcm92YWxDb3VudFxyXG5cdFx0XHRcdFx0bGV0IHN0YXR1c0NsYXNzXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBsYXN0VXBkYXRlZFxyXG5cdFx0XHRcdFx0aWYoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlKSBsYXN0VXBkYXRlZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZS51cGRhdGVkQXQuc3BsaXQoJ1QnKVswXVxyXG5cclxuXHRcdFx0XHRcdGlmKHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJykge1xyXG5cdFx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9ICdkaXNhYmxlZCBidG4gJ1xyXG5cdFx0XHRcdFx0XHRmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXMgPT0gJ0FjdGl2ZScgPyBzdGF0dXNDbGFzcyArPSdidG4td2FybmluZycgOiBzdGF0dXNDbGFzcyArPSAnYnRuLWRhbmdlcidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmID0ge2Ake3BhdGggKyBlbmNvZGVVUklDb21wb25lbnQoZmFjdWx0eUlkKX1gfSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1saWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzdXJuYW1lfSwge2ZpcnN0TmFtZX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jm5ic3A7IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntmb3JBcHByb3ZhbENvdW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHByb3BzLnBhdGggPT0gJ2luZm8nICYmIHByb3BzLnJvbGUgPT0gMyAmJiBsYXN0VXBkYXRlZCAmJiBgIChMYXN0IFVwZGF0ZWQ6ICR7bGFzdFVwZGF0ZWR9KWAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1c308L3NwYW4+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0U3RhdHVzXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXQoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIudXNlcklkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEtleSh1c2VyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoNCBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5jaGlsZHJlbltrZXldLnVuaXR9IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlJlbWFya3M8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHR7ZmFjdWx0eUxpc3R9XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTsgXHJcblx0XHRcdH1cclxuICAgICAgICB9KTtcclxuXHJcblx0XHRmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcblx0XHRcdHVzZXIgPSBpZFxyXG5cdFx0fVxyXG5cclxuXHRcdGFzeW5jIGZ1bmN0aW9uIHNldEtleSh4KSB7XHJcblx0XHRcdGF3YWl0IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoYXN5bmMga2V5ID0+IHtcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGF3YWl0IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcChhc3luYyBpbmRleCA9PiB7XHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQgPT0geCkgeyBcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGF3YWl0IHNldERhdGEoe1xyXG5cdFx0XHRcdFx0XHRcdHVzZXJJZDogeCxcclxuXHRcdFx0XHRcdFx0XHRzdGF0dXM6IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyxcclxuXHRcdFx0XHRcdFx0XHRyZW1hcmtzOiBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzLFxyXG5cdFx0XHRcdFx0XHRcdGZhY3VsdHlOYW1lOiBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWUgKyAnLCAnICsgZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuICAgIH0gXHJcbiAgICBlbHNleyBcclxuICAgICAgICByZXR1cm4oPHAgYWxpZ24gPSBcImNlbnRlclwiPk5vIGFwcHJvdmFscyBuZWVkZWQhPC9wPilcclxuICAgIH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIiBpZD1cImZhY3VsdHlTdGF0dXNhbGVydFwiIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwifX0+PC9kaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHR7Y2hlbX1cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdHttY3N1fVxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0e3BoeXNnZW99XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImVkaXRTdGF0dXNcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImVkaXRTdGF0dXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0U3RhdHVzXCI+VXBkYXRlIEZhY3VsdHkgU3RhdHVzIC0ge2N1cnJEYXRhLmZhY3VsdHlOYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlN0YXR1c1wiPiBTdGF0dXMgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWU9XCJTdGF0dXNcIiBpZD1cIlN0YXR1c1wiIHZhbHVlID0geyBjdXJyRGF0YS5zdGF0dXMgfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJzdGF0dXNcIiwgZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJBY3RpdmVcIiBrZXkgPSBcImFjdGl2ZVwiPkFjdGl2ZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJJbmFjdGl2ZVwiIGtleSA9IFwiaW5hY3RpdmVcIj5JbmFjdGl2ZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiIGlkPVwicmVtYXJrc3Jvd1wiIHN0eWxlPXt7dmlzaWJpbGl0eTogcmVtYXJrc1N0eWxlfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUmVtYXJrc1wiPiBSZW1hcmtzIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiUmVtYXJrc1wiIGlkPVwiUmVtYXJrc1wiIHZhbHVlID0geyBjdXJyRGF0YS5yZW1hcmtzIHx8ICcnfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJyZW1hcmtzXCIsIGUpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+LS0gU0VMRUNUIFJFTUFSS1MgLS08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUmV0aXJlZFwiPlJldGlyZWQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUmVzaWduZWRcIj5SZXNpZ25lZDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJPbiBMZWF2ZVwiPk9uIExlYXZlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdFN0YXR1cycpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFjdWx0eVN0YXR1c2FsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgdXBkYXRlVXNlcihjdXJyRGF0YSwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2ZhY3VsdHlTdGF0dXNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2ZhY3VsdHlTdGF0dXNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdHlMaXN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=