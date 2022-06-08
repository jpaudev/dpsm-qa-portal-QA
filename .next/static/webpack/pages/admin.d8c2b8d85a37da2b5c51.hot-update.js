self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/faculty/facultyList.js":
/*!*******************************************!*\
  !*** ./components/faculty/facultyList.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_admin_updateUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/admin/updateUser */ "./services/admin/updateUser.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\facultyList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






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
      _React$useState2 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState, 2),
      currData = _React$useState2[0],
      setData = _React$useState2[1];

  var activeRemarksStyle;
  var inactiveRemarksStyle;

  function handleInputChange(id, event) {
    var _objectSpread2;

    if (id == 'status') setData(_objectSpread(_objectSpread({}, currData), {}, (_objectSpread2 = {}, (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_objectSpread2, id, event.target.value), (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_objectSpread2, 'remarks', ''), _objectSpread2)));else setData(_objectSpread(_objectSpread({}, currData), {}, (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, id, event.target.value)));
  }

  if (currData.status == 'Inactive') {
    activeRemarksStyle = 'none';
    inactiveRemarksStyle = 'block';
  } else {
    activeRemarksStyle = 'block';
    inactiveRemarksStyle = 'none';
  }

  if (props.children != null) {
    var setEdit = function setEdit(id) {
      user = id;
    };

    var setKey = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(x) {
        return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object.keys(props.children).map( /*#__PURE__*/function () {
                  var _ref2 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(key) {
                    var faculty;
                    return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            faculty = props.children[key].faculty_units;
                            _context2.next = 3;
                            return Object.keys(faculty).map( /*#__PURE__*/function () {
                              var _ref3 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(index) {
                                return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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
                    lineNumber: 64,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
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
                lineNumber: 81,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
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
                  lineNumber: 97,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
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
                    lineNumber: 142,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
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
                lineNumber: 158,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
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
                  lineNumber: 174,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
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
                    lineNumber: 219,
                    columnNumber: 18
                  }, _this), props.path == 'info' && props.role == 3 && lastUpdated && " (Last Updated: ".concat(lastUpdated, ")")]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 8
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: statusClass,
                children: faculty[index].faculty_personal_info.user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 9
            }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
              children: faculty[index].faculty_personal_info.user.remarks || 'None'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
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
                lineNumber: 235,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 7
          }, _this);
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
            align: "center",
            children: [" ", props.children[key].unit, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
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
                  lineNumber: 251,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 9
                }, _this), props.path != 'approval' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Remarks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 9
                }, _this), props.role == 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 8
              }, _this), facultyList]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 246,
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
      lineNumber: 296,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
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
      lineNumber: 302,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 4
    }, this), chem, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 4
    }, this), mcsu, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 307,
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
              lineNumber: 314,
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
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
                    lineNumber: 324,
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
                      lineNumber: 326,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
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
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "form-row",
                id: "activeremarksrow",
                style: {
                  display: activeRemarksStyle
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    htmlFor: "Remarks",
                    children: " Remarks "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 334,
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
                      lineNumber: 336,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
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
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "form-row",
                id: "inactiveremarksrow",
                style: {
                  display: inactiveRemarksStyle
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                    htmlFor: "Remarks",
                    children: " Remarks "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
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
                      lineNumber: 346,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
                      value: "Retired",
                      children: "Retired"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 347,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 356,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: /*#__PURE__*/(0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
                var alert, res;
                return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        // $('#editStatus').modal('toggle');
                        alert = document.getElementById("facultyStatusalert");
                        _context4.next = 3;
                        return (0,_services_admin_updateUser__WEBPACK_IMPORTED_MODULE_8__.default)(currData, props.token);

                      case 3:
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

                      case 7:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mYWN1bHR5L2ZhY3VsdHlMaXN0LmpzIl0sIm5hbWVzIjpbIkZhY3VsdHlMaXN0IiwicHJvcHMiLCJjaGVtIiwibWNzdSIsInBoeXNnZW8iLCJ1c2VyIiwiUmVhY3QiLCJ1c2VySWQiLCJzdGF0dXMiLCJyZW1hcmtzIiwiZmFjdWx0eU5hbWUiLCJjdXJyRGF0YSIsInNldERhdGEiLCJhY3RpdmVSZW1hcmtzU3R5bGUiLCJpbmFjdGl2ZVJlbWFya3NTdHlsZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaWQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2hpbGRyZW4iLCJzZXRFZGl0Iiwic2V0S2V5IiwieCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJmYWN1bHR5IiwiZmFjdWx0eV91bml0cyIsImluZGV4IiwiZmFjdWx0eV9wZXJzb25hbF9pbmZvIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJwYXRoIiwidW5pdElkIiwiZmFjdWx0eUxpc3QiLCJzdXJuYW1lIiwiZmFjdWx0eUlkIiwiZm9yQXBwcm92YWxDb3VudCIsInN0YXR1c0NsYXNzIiwibGFzdFVwZGF0ZWQiLCJmYWN1bHR5X3VwZGF0ZSIsInVwZGF0ZWRBdCIsInNwbGl0IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwicm9sZSIsInVuaXQiLCJ2aXNpYmlsaXR5IiwiZSIsImRpc3BsYXkiLCJhbGVydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cGRhdGVVc2VyIiwidG9rZW4iLCJyZXMiLCJzdWNjZXNzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwiZXJyb3IiLCIkIiwiZmFkZVRvIiwic2xpZGVVcCIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxLQUFy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SUFDLCtFQUFBLENBQVksUUFBWjs7QUFqQnlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUosRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBb0ZBOztHQXhYUWxFLFc7O0tBQUFBLFc7QUEwWFQsK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uZDhjMmI4ZDg1YTM3ZGEyYjVjNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHVwZGF0ZVVzZXIgZnJvbSAnLi4vLi4vc2VydmljZXMvYWRtaW4vdXBkYXRlVXNlcidcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdHlMaXN0KHByb3BzKXsgXHJcblx0bGV0IGNoZW1cclxuXHRsZXQgbWNzdVxyXG5cdGxldCBwaHlzZ2VvXHJcblx0bGV0IHVzZXIgPSAwXHJcblx0Y29uc3QgW2N1cnJEYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuXHRcdHVzZXJJZDogMCxcclxuICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgIHJlbWFya3M6ICcnLFxyXG5cdFx0ZmFjdWx0eU5hbWU6ICcnXHJcbiAgICB9KVxyXG5cclxuXHRsZXQgYWN0aXZlUmVtYXJrc1N0eWxlXHJcblx0bGV0IGluYWN0aXZlUmVtYXJrc1N0eWxlIFxyXG5cdFxyXG5cdGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGlkLCBldmVudCkge1xyXG5cdFx0aWYoaWQgPT0gJ3N0YXR1cycpIHNldERhdGEoey4uLmN1cnJEYXRhLCBbaWRdOiBldmVudC50YXJnZXQudmFsdWUsIFsncmVtYXJrcyddOiAnJ30pO1xyXG5cdFx0ZWxzZSBzZXREYXRhKHsuLi5jdXJyRGF0YSwgW2lkXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcblx0fVxyXG5cclxuXHRpZihjdXJyRGF0YS5zdGF0dXMgPT0gJ0luYWN0aXZlJykge1xyXG5cdFx0YWN0aXZlUmVtYXJrc1N0eWxlID0gJ25vbmUnXHJcblx0XHRpbmFjdGl2ZVJlbWFya3NTdHlsZSA9ICdibG9jayc7IFxyXG5cdCB9IGVsc2Uge1xyXG5cdFx0YWN0aXZlUmVtYXJrc1N0eWxlID0gJ2Jsb2NrJ1xyXG5cdFx0aW5hY3RpdmVSZW1hcmtzU3R5bGUgPSAnbm9uZSdcclxuXHQgfSBcclxuXHRcclxuXHRpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcblx0XHRsZXQgcGF0aFxyXG5cdFx0aWYocHJvcHMucGF0aCA9PSBcImFwcHJvdmFsXCIpIHBhdGggPSAnL2ZhY3VsdHkvYXBwcm92YWwvJ1xyXG5cdFx0ZWxzZSBpZihwcm9wcy5wYXRoID09ICdhZG1pbicpIHBhdGggPSAnL2FkbWluLydcclxuXHRcdGVsc2UgaWYocHJvcHMucGF0aCA9PSAnaW5mbycpIHBhdGggPSAnL2ZhY3VsdHkvdmlldy8nXHJcblx0XHRcclxuXHRcdGNoZW0gPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcblx0XHRcdGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnVuaXRJZCA9PSAxKSB7IFxyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0bGV0IGZhY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKChpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1cm5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmaXJzdE5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmFjdWx0eUlkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eUlkXHJcblx0XHRcdFx0XHRsZXQgZm9yQXBwcm92YWxDb3VudCA9IGZhY3VsdHlbaW5kZXhdLmZvckFwcHJvdmFsQ291bnRcclxuXHRcdFx0XHRcdGxldCBzdGF0dXNDbGFzc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbGFzdFVwZGF0ZWRcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZSkgbGFzdFVwZGF0ZWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUudXBkYXRlZEF0LnNwbGl0KCdUJylbMF1cclxuXHJcblx0XHRcdFx0XHRpZihwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcpIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSAnZGlzYWJsZWQgYnRuICdcclxuXHRcdFx0XHRcdFx0ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzID09ICdBY3RpdmUnID8gc3RhdHVzQ2xhc3MgKz0nYnRuLXdhcm5pbmcnIDogc3RhdHVzQ2xhc3MgKz0gJ2J0bi1kYW5nZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZiA9IHtgJHtwYXRoICsgZW5jb2RlVVJJQ29tcG9uZW50KGZhY3VsdHlJZCl9YH0gY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tbGlnaHRcIiBmb3JBcHByb3ZhbD17ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c3VybmFtZX0sIHtmaXJzdE5hbWV9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57Zm9yQXBwcm92YWxDb3VudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5wYXRoID09ICdpbmZvJyAmJiBwcm9wcy5yb2xlID09IDMgJiYgbGFzdFVwZGF0ZWQgJiYgYCAoTGFzdCBVcGRhdGVkOiAke2xhc3RVcGRhdGVkfSlgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD48c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzfT57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzfTwvc3Bhbj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD57ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIucmVtYXJrcyB8fCAnTm9uZSd9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRTdGF0dXNcIiBvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdChmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0S2V5KHVzZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PkVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGg0IGFsaWduID0gXCJjZW50ZXJcIj4ge3Byb3BzLmNoaWxkcmVuW2tleV0udW5pdH0gPC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5TdGF0dXM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+UmVtYXJrczwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+QWN0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdHtmYWN1bHR5TGlzdH1cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpOyBcclxuXHRcdFx0fVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdG1jc3UgPSBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGtleSA9PiB7XHJcblx0XHRcdGlmIChwcm9wcy5jaGlsZHJlbltrZXldLnVuaXRJZCA9PSAyKSB7IFxyXG5cdFx0XHRcdGxldCBmYWN1bHR5ID0gcHJvcHMuY2hpbGRyZW5ba2V5XS5mYWN1bHR5X3VuaXRzXHJcblx0XHRcdFx0bGV0IGZhY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoZmFjdWx0eSkubWFwKChpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1cm5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmaXJzdE5hbWUgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmlyc3ROYW1lXHJcblx0XHRcdFx0XHRsZXQgZmFjdWx0eUlkID0gZmFjdWx0eVtpbmRleF0uZmFjdWx0eUlkXHJcblx0XHRcdFx0XHRsZXQgZm9yQXBwcm92YWxDb3VudCA9IGZhY3VsdHlbaW5kZXhdLmZvckFwcHJvdmFsQ291bnRcclxuXHRcdFx0XHRcdGxldCBzdGF0dXNDbGFzc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbGFzdFVwZGF0ZWRcclxuXHRcdFx0XHRcdGlmKGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZSkgbGFzdFVwZGF0ZWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8uZmFjdWx0eV91cGRhdGUudXBkYXRlZEF0LnNwbGl0KCdUJylbMF1cclxuXHJcblx0XHRcdFx0XHRpZihwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcpIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSAnZGlzYWJsZWQgYnRuICdcclxuXHRcdFx0XHRcdFx0ZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIuc3RhdHVzID09ICdBY3RpdmUnID8gc3RhdHVzQ2xhc3MgKz0nYnRuLXdhcm5pbmcnIDogc3RhdHVzQ2xhc3MgKz0gJ2J0bi1kYW5nZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZiA9IHtgJHtwYXRoICsgZW5jb2RlVVJJQ29tcG9uZW50KGZhY3VsdHlJZCl9YH0gY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tbGlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c3VybmFtZX0sIHtmaXJzdE5hbWV9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57Zm9yQXBwcm92YWxDb3VudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5wYXRoID09ICdpbmZvJyAmJiBwcm9wcy5yb2xlID09IDMgJiYgbGFzdFVwZGF0ZWQgJiYgYCAoTGFzdCBVcGRhdGVkOiAke2xhc3RVcGRhdGVkfSlgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuIGNsYXNzTmFtZT17c3RhdHVzQ2xhc3N9PntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXN9PC9zcGFuPjwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPntmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdFN0YXR1c1wiIG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0KGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnVzZXJJZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRLZXkodXNlcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+RWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDQgYWxpZ24gPSBcImNlbnRlclwiPiB7cHJvcHMuY2hpbGRyZW5ba2V5XS51bml0fSA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5wYXRoICE9ICdhcHByb3ZhbCcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5SZW1hcmtzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMucm9sZSA9PSA1ICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5BY3Rpb248L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0e2ZhY3VsdHlMaXN0fVxyXG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7IFxyXG5cdFx0XHR9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0cGh5c2dlbyA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0aWYgKHByb3BzLmNoaWxkcmVuW2tleV0udW5pdElkID09IDMpIHsgXHJcblx0XHRcdFx0bGV0IGZhY3VsdHkgPSBwcm9wcy5jaGlsZHJlbltrZXldLmZhY3VsdHlfdW5pdHNcclxuXHRcdFx0XHRsZXQgZmFjdWx0eUxpc3QgPSBPYmplY3Qua2V5cyhmYWN1bHR5KS5tYXAoKGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgc3VybmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZVxyXG5cdFx0XHRcdFx0bGV0IGZpcnN0TmFtZSA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWVcclxuXHRcdFx0XHRcdGxldCBmYWN1bHR5SWQgPSBmYWN1bHR5W2luZGV4XS5mYWN1bHR5SWRcclxuXHRcdFx0XHRcdGxldCBmb3JBcHByb3ZhbENvdW50ID0gZmFjdWx0eVtpbmRleF0uZm9yQXBwcm92YWxDb3VudFxyXG5cdFx0XHRcdFx0bGV0IHN0YXR1c0NsYXNzXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBsYXN0VXBkYXRlZFxyXG5cdFx0XHRcdFx0aWYoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZhY3VsdHlfdXBkYXRlKSBsYXN0VXBkYXRlZCA9IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby5mYWN1bHR5X3VwZGF0ZS51cGRhdGVkQXQuc3BsaXQoJ1QnKVswXVxyXG5cclxuXHRcdFx0XHRcdGlmKHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJykge1xyXG5cdFx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9ICdkaXNhYmxlZCBidG4gJ1xyXG5cdFx0XHRcdFx0XHRmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5zdGF0dXMgPT0gJ0FjdGl2ZScgPyBzdGF0dXNDbGFzcyArPSdidG4td2FybmluZycgOiBzdGF0dXNDbGFzcyArPSAnYnRuLWRhbmdlcidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmID0ge2Ake3BhdGggKyBlbmNvZGVVUklDb21wb25lbnQoZmFjdWx0eUlkKX1gfSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1saWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzdXJuYW1lfSwge2ZpcnN0TmFtZX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jm5ic3A7IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntmb3JBcHByb3ZhbENvdW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHByb3BzLnBhdGggPT0gJ2luZm8nICYmIHByb3BzLnJvbGUgPT0gMyAmJiBsYXN0VXBkYXRlZCAmJiBgIChMYXN0IFVwZGF0ZWQ6ICR7bGFzdFVwZGF0ZWR9KWAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc30+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1c308L3NwYW4+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2ZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnJlbWFya3MgfHwgJ05vbmUnfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnJvbGUgPT0gNSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0U3RhdHVzXCIgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXQoZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLnVzZXIudXNlcklkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEtleSh1c2VyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoNCBhbGlnbiA9IFwiY2VudGVyXCI+IHtwcm9wcy5jaGlsZHJlbltrZXldLnVuaXR9IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWUgPSBcInRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMucGF0aCAhPSAnYXBwcm92YWwnICYmXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BzLnBhdGggIT0gJ2FwcHJvdmFsJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlJlbWFya3M8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5yb2xlID09IDUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHR7ZmFjdWx0eUxpc3R9XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTsgXHJcblx0XHRcdH1cclxuICAgICAgICB9KTtcclxuXHJcblx0XHRmdW5jdGlvbiBzZXRFZGl0KGlkKSB7XHJcblx0XHRcdHVzZXIgPSBpZFxyXG5cdFx0fVxyXG5cclxuXHRcdGFzeW5jIGZ1bmN0aW9uIHNldEtleSh4KSB7XHJcblx0XHRcdGF3YWl0IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoYXN5bmMga2V5ID0+IHtcclxuXHRcdFx0XHRsZXQgZmFjdWx0eSA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV91bml0c1xyXG5cdFx0XHRcdGF3YWl0IE9iamVjdC5rZXlzKGZhY3VsdHkpLm1hcChhc3luYyBpbmRleCA9PiB7XHJcblx0XHRcdFx0XHRpZihmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci51c2VySWQgPT0geCkgeyBcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGF3YWl0IHNldERhdGEoe1xyXG5cdFx0XHRcdFx0XHRcdHVzZXJJZDogeCxcclxuXHRcdFx0XHRcdFx0XHRzdGF0dXM6IGZhY3VsdHlbaW5kZXhdLmZhY3VsdHlfcGVyc29uYWxfaW5mby51c2VyLnN0YXR1cyxcclxuXHRcdFx0XHRcdFx0XHRyZW1hcmtzOiBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8udXNlci5yZW1hcmtzLFxyXG5cdFx0XHRcdFx0XHRcdGZhY3VsdHlOYW1lOiBmYWN1bHR5W2luZGV4XS5mYWN1bHR5X3BlcnNvbmFsX2luZm8ubGFzdE5hbWUgKyAnLCAnICsgZmFjdWx0eVtpbmRleF0uZmFjdWx0eV9wZXJzb25hbF9pbmZvLmZpcnN0TmFtZVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuICAgIH0gXHJcbiAgICBlbHNleyBcclxuICAgICAgICByZXR1cm4oPHAgYWxpZ24gPSBcImNlbnRlclwiPk5vIGFwcHJvdmFscyBuZWVkZWQhPC9wPilcclxuICAgIH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIiBpZD1cImZhY3VsdHlTdGF0dXNhbGVydFwiIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwifX0+PC9kaXY+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHR7Y2hlbX1cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdHttY3N1fVxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0e3BoeXNnZW99XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImVkaXRTdGF0dXNcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImVkaXRTdGF0dXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0U3RhdHVzXCI+VXBkYXRlIEZhY3VsdHkgU3RhdHVzIC0ge2N1cnJEYXRhLmZhY3VsdHlOYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPSBcIlN0YXR1c1wiPiBTdGF0dXMgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWU9XCJTdGF0dXNcIiBpZD1cIlN0YXR1c1wiIHZhbHVlID0geyBjdXJyRGF0YS5zdGF0dXMgfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJzdGF0dXNcIiwgZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJBY3RpdmVcIiBrZXkgPSBcImFjdGl2ZVwiPkFjdGl2ZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJJbmFjdGl2ZVwiIGtleSA9IFwiaW5hY3RpdmVcIj5JbmFjdGl2ZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiIGlkPVwiYWN0aXZlcmVtYXJrc3Jvd1wiIHN0eWxlPXt7ZGlzcGxheTogYWN0aXZlUmVtYXJrc1N0eWxlfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9IFwiUmVtYXJrc1wiPiBSZW1hcmtzIDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiUmVtYXJrc1wiIGlkPVwiUmVtYXJrc1wiIHZhbHVlID0geyBjdXJyRGF0YS5yZW1hcmtzIHx8ICcnfSBvbkNoYW5nZSA9IHsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJyZW1hcmtzXCIsIGUpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+LS0gU0VMRUNUIFJFTUFSS1MgLS08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiT24gTGVhdmVcIj5PbiBMZWF2ZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIiBpZD1cImluYWN0aXZlcmVtYXJrc3Jvd1wiIHN0eWxlPXt7ZGlzcGxheTogaW5hY3RpdmVSZW1hcmtzU3R5bGV9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID0gXCJSZW1hcmtzXCI+IFJlbWFya3MgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWU9XCJSZW1hcmtzXCIgaWQ9XCJSZW1hcmtzXCIgdmFsdWUgPSB7IGN1cnJEYXRhLnJlbWFya3MgfHwgJyd9IG9uQ2hhbmdlID0geyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcInJlbWFya3NcIiwgZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj4tLSBTRUxFQ1QgUkVNQVJLUyAtLTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSZXRpcmVkXCI+UmV0aXJlZDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSZXNpZ25lZFwiPlJlc2lnbmVkPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkKCcjZWRpdFN0YXR1cycpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFjdWx0eVN0YXR1c2FsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgdXBkYXRlVXNlcihjdXJyRGF0YSwgcHJvcHMudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3VjY2VzcyA9PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcikgYWxlcnQuaW5uZXJIVE1MID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2ZhY3VsdHlTdGF0dXNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2ZhY3VsdHlTdGF0dXNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdHlMaXN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=