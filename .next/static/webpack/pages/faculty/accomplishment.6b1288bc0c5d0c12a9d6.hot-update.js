self["webpackHotUpdate_N_E"]("pages/faculty/accomplishment",{

/***/ "./components/faculty/accomplishments/research-grant.js":
/*!**************************************************************!*\
  !*** ./components/faculty/accomplishments/research-grant.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _research_grant_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./research-grant-form */ "./components/faculty/accomplishments/research-grant-form.js");
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/faculty/downloadProof */ "./services/faculty/downloadProof.js");
/* harmony import */ var _services_faculty_accomplishments_deleteResearch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/deleteResearch */ "./services/faculty/accomplishments/deleteResearch.js");
/* harmony import */ var _services_faculty_accomplishments_updateResearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/updateResearch */ "./services/faculty/accomplishments/updateResearch.js");
/* harmony import */ var _services_faculty_accomplishments_approveResearchGrant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/approveResearchGrant */ "./services/faculty/accomplishments/approveResearchGrant.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\accomplishments\\research-grant.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function ResearchGrant(props) {
  _s();

  var _this = this;

  var content;
  var deleteRes = 0;
  var editRes = 0;
  var approveRG = 0;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_9___default().useState({
    researchId: 0,
    researchName: '',
    granter: '',
    amount: '',
    projectedStart: '',
    projectedEnd: '',
    actualStart: '',
    actualEnd: '',
    researchProgress: '',
    nonFacultyResearchers: '',
    faculty_researchers: [],
    og_auth: []
  }),
      _React$useState2 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState, 2),
      currData = _React$useState2[0],
      setData = _React$useState2[1];

  var authors;

  if (props.faculty) {
    authors = Object.keys(props.faculty).map(function (key) {
      return {
        value: props.faculty[key].facultyId,
        label: props.faculty[key].lastName + ', ' + props.faculty[key].firstName
      };
    });
  }

  var faculty_researchers = [];

  if (props.children != null) {
    content = Object.keys(props.children).map(function (key) {
      var res = props.children[key].faculty_researchers;
      var dpsmauth = [];
      res.forEach(function (auth) {
        var link;
        var name = auth.faculty_personal_info.firstName + ' ' + auth.faculty_personal_info.lastName + ', ';

        if (auth.facultyId == props.facultyId || props.role == 1) {
          dpsmauth.push(name);
        } else if (props.role == 5) {
          link = "/admin/" + auth.facultyId;
          dpsmauth.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: link,
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 35
          }, _this));
        } else if (props.role == 2 || props.role == 3) {
          link = "/faculty/view/" + auth.facultyId;
          dpsmauth.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: link,
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 35
          }, _this));
        }
      });

      if (props.children[key].researchId != null) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].researchName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: [dpsmauth, props.children[key].nonFacultyResearchers]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].granter
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: [props.children[key].projectedStart, " to ", props.children[key].projectedEnd]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].actualStart
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].actualEnd
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].researchProgress
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: Object.keys(res).map(function (auth) {
              if (res[auth].facultyId == props.facultyId) {
                if (res[auth].proof) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "btn-grp",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                      type: "button",
                      className: "btn btn-primary",
                      onClick: function onClick() {
                        var file = res[auth].proof;
                        (0,_services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_11__.default)(file, props.token);
                      },
                      children: "Download"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                      className: "btn btn-info",
                      href: "http://localhost:3001/" + res[auth].proof,
                      style: {
                        color: 'white'
                      },
                      target: "_blank",
                      children: "Preview"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 45
                  }, _this);
                } else {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    children: "None"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 48
                  }, _this);
                }
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: Object.keys(res).map(function (auth) {
              if (res[auth].facultyId == props.facultyId) {
                return res[auth].status;
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: Object.keys(res).map(function (auth) {
              if (res[auth].facultyId == props.facultyId) {
                return res[auth].approverRemarks || 'None';
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: [props.editable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editResearchGrant",
                onClick: function onClick() {
                  setEdit(props.children[key].researchId);
                  setKey(editRes);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteResearchGrant",
                onClick: function onClick() {
                  setDelete(props.children[key].researchId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, _this), props.approver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approveResearchGrant",
                onClick: function onClick() {
                  setApprove(props.children[key].researchId);
                },
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectResearchGrant",
                onClick: function onClick() {
                  setApprove(props.children[key].researchId);
                },
                children: "Reject"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this);
      }
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
      colSpan: "10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 38
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
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

  function setKey(_x) {
    return _setKey.apply(this, arguments);
  }

  function _setKey() {
    _setKey = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(x) {
      return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return Object.keys(props.children).map( /*#__PURE__*/function () {
                var _ref7 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(key) {
                  var tempProof, temp;
                  return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          if (!(props.children[key].researchId == x)) {
                            _context7.next = 7;
                            break;
                          }

                          tempProof = '';
                          _context7.next = 4;
                          return props.children[key].faculty_researchers.forEach( /*#__PURE__*/function () {
                            var _ref8 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(e) {
                              return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      if (e.facultyId == props.facultyId) {
                                        if (e.proof) {
                                          tempProof = e.proof;
                                        } else {
                                          tempProof = null;
                                        }
                                      }

                                      _context6.next = 3;
                                      return authors.forEach( /*#__PURE__*/function () {
                                        var _ref9 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(fp, index) {
                                          return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                                            while (1) {
                                              switch (_context5.prev = _context5.next) {
                                                case 0:
                                                  if (!(fp.value == e.facultyId)) {
                                                    _context5.next = 3;
                                                    break;
                                                  }

                                                  _context5.next = 3;
                                                  return faculty_researchers.push(fp);

                                                case 3:
                                                case "end":
                                                  return _context5.stop();
                                              }
                                            }
                                          }, _callee5);
                                        }));

                                        return function (_x6, _x7) {
                                          return _ref9.apply(this, arguments);
                                        };
                                      }());

                                    case 3:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee6);
                            }));

                            return function (_x5) {
                              return _ref8.apply(this, arguments);
                            };
                          }());

                        case 4:
                          if (tempProof) {
                            temp = {
                              researchId: props.children[key].researchId,
                              researchName: props.children[key].researchName,
                              granter: props.children[key].granter,
                              amount: props.children[key].amount,
                              projectedStart: props.children[key].projectedStart,
                              projectedEnd: props.children[key].projectedEnd,
                              actualStart: props.children[key].actualStart,
                              actualEnd: props.children[key].actualEnd,
                              researchProgress: props.children[key].researchProgress,
                              nonFacultyResearchers: props.children[key].nonFacultyResearchers,
                              faculty_researchers: faculty_researchers,
                              og_auth: faculty_researchers,
                              proof: tempProof
                            };
                          } else {
                            temp = {
                              researchId: props.children[key].researchId,
                              researchName: props.children[key].researchName,
                              granter: props.children[key].granter,
                              amount: props.children[key].amount,
                              projectedStart: props.children[key].projectedStart,
                              projectedEnd: props.children[key].projectedEnd,
                              actualStart: props.children[key].actualStart,
                              actualEnd: props.children[key].actualEnd,
                              researchProgress: props.children[key].researchProgress,
                              nonFacultyResearchers: props.children[key].nonFacultyResearchers,
                              faculty_researchers: faculty_researchers,
                              og_auth: faculty_researchers,
                              proof: 'None'
                            };
                          }

                          _context7.next = 7;
                          return setData(temp);

                        case 7:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x4) {
                  return _ref7.apply(this, arguments);
                };
              }());

            case 2:
              return _context8.abrupt("return", faculty_researchers);

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return _setKey.apply(this, arguments);
  }

  var handleChange = function handleChange(e) {
    setData(function (currData) {
      return _objectSpread(_objectSpread({}, currData), {}, {
        faculty_researchers: e
      });
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      align: "center",
      children: " Research Grants "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_7__.default, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "alert alert-success",
      role: "alert",
      id: "researchalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Research Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Researcher/s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Sponsor"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Projected Duration"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Research Progress"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Approver Remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 17
            }, this), (props.editable || props.approver) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 57
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 4
          }, this), content]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 2
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }, this), props.editable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_research_grant_form__WEBPACK_IMPORTED_MODULE_6__.default, {
        faculty: props.faculty,
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "modal fade",
      id: "editResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editResearchGrantLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
              className: "modal-title",
              id: "editResearchGrantLabel",
              children: "Update Research Grant Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                "aria-hidden": "true",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: /*#__PURE__*/function () {
              var _ref = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {
                var form, formData, alert, existing, temp_res, rem_og, add_res, res;
                return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        form = document.getElementById('editResForm');
                        formData = new FormData(form);
                        formData.append('researchId', currData.researchId);
                        alert = document.getElementById("researchalert");
                        existing = [];
                        currData.og_auth.forEach(function (x) {
                          existing.push(x.value);
                        });
                        temp_res = formData.getAll('faculty_researchers').map(function (x) {
                          return Number(x);
                        });
                        _context.next = 9;
                        return existing.filter(function (x) {
                          return !temp_res.includes(x);
                        });

                      case 9:
                        rem_og = _context.sent;
                        _context.next = 12;
                        return temp_res.filter(function (x) {
                          return !existing.includes(x);
                        });

                      case 12:
                        add_res = _context.sent;

                        if (add_res.length > 0) {
                          add_res.forEach(function (x) {
                            formData.append('add_res', x);
                          });
                        }

                        if (rem_og.length > 0) {
                          rem_og.forEach(function (x) {
                            formData.append('rem_res', x);
                          });
                        }

                        _context.next = 17;
                        return (0,_services_faculty_accomplishments_updateResearch__WEBPACK_IMPORTED_MODULE_13__.default)(formData, props.token);

                      case 17:
                        res = _context.sent;

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
                        next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/faculty/accomplishment');

                      case 21:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref.apply(this, arguments);
              };
            }(),
            children: function children(_ref2) {
              var values = _ref2.values,
                  errors = _ref2.errors,
                  touched = _ref2.touched,
                  isSubmitting = _ref2.isSubmitting;
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Form, {
                id: "editResForm",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "modal-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchUpdate",
                        children: " Research Project "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 326,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        className: "form-control",
                        type: "text",
                        name: "researchName",
                        placeholder: "Input research name"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 327,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 325,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 324,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchSponsorUpdate",
                        children: " Sponsor "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 332,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        className: "form-control",
                        type: "text",
                        name: "granter",
                        placeholder: "Input sponsor"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 333,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 331,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchAmountUpdate",
                        children: " Amount "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 338,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        className: "form-control",
                        type: "text",
                        name: "amount",
                        placeholder: "Input amount"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 339,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 337,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 336,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchStartDateUpdate",
                        children: " Start Date (Actual) "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 344,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        type: "date",
                        className: "form-control",
                        name: "actualStart"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 345,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 343,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchEndDateUpdate",
                        children: " End Date (Actual) "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 350,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        type: "date",
                        className: "form-control",
                        name: "actualEnd"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 351,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 349,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 348,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchProjectedStartDateUpdate",
                        children: " Start Date (Projected) "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 356,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        type: "date",
                        className: "form-control",
                        name: "projectedStart"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 357,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 355,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 354,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchProjectedEndDateUpdate",
                        children: " End Date (Projected) "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 362,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        type: "date",
                        className: "form-control",
                        name: "projectedEnd"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 363,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 361,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchProgressUpdate",
                        children: " Progress "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 368,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        className: "form-control",
                        type: "text",
                        name: "researchProgress",
                        placeholder: "Input progress"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 369,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 367,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 366,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchAuthorDPSMUpdate",
                        children: " Authors (DPSM) "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 374,
                        columnNumber: 41
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_15__.default, {
                        name: "faculty_researchers",
                        isMulti: true,
                        options: authors,
                        value: currData.faculty_researchers,
                        onChange: function onChange(event) {
                          return handleChange(event);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 375,
                        columnNumber: 41
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 373,
                      columnNumber: 37
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 372,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchAuthorNonDPSMUpdate",
                        children: " Authors (non-DPSM) "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 386,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        className: "form-control",
                        type: "text",
                        name: "nonFacultyResearchers",
                        placeholder: "Input all authors outside DPSM (separate names with commas)"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 387,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 385,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "ResearchProofUpdate",
                        children: [" Add/Edit Proof [Uploaded: ", currData.proof, "] "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 392,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        type: "file",
                        className: "form-control-file",
                        name: "proof",
                        value: undefined
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 393,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 391,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 390,
                    columnNumber: 29
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 322,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "modal-footer",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    type: "button",
                    className: "btn btn-secondary",
                    "data-dismiss": "modal",
                    children: "Close"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 398,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    type: "submit",
                    className: "btn btn-primary",
                    disabled: isSubmitting,
                    onClick: function onClick() {
                      $('#editResearchGrant').modal('toggle');
                    },
                    children: "Save changes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 399,
                    columnNumber: 29
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 397,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 21
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "modal fade",
      id: "deleteResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteResearchGrantLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
              className: "modal-title",
              id: "deleteResearchGrantLabel",
              children: "Delete Research Grant Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 414,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                "aria-hidden": "true",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 416,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 415,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: " Are you sure you want to delete this research grant information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 419,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: /*#__PURE__*/(0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
                var alert, res;
                return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        alert = document.getElementById("researchalert");
                        _context2.next = 3;
                        return (0,_services_faculty_accomplishments_deleteResearch__WEBPACK_IMPORTED_MODULE_12__.default)(deleteRes, props.token);

                      case 3:
                        res = _context2.sent;

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
                        next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/faculty/accomplishment');

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })),
              children: "Yes, delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "modal fade",
      id: "approveResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveResearchGrantLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
              className: "modal-title",
              id: "approveResearchGrantLabel",
              children: "Approve Research Grant Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                "aria-hidden": "true",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 456,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 455,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 460,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: " Are you sure you want to approve this research grant information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 459,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 464,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: /*#__PURE__*/(0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
                var alert, formData, res;
                return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        alert = document.getElementById("researchalert");
                        $('#approveResearchGrant').modal('toggle');
                        formData = new FormData();
                        formData.append('researchId', approveRG);
                        _context3.next = 6;
                        return (0,_services_faculty_accomplishments_approveResearchGrant__WEBPACK_IMPORTED_MODULE_14__.default)(formData, true, props.facultyId, props.token);

                      case 6:
                        res = _context3.sent;

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
                        next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);

                      case 10:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })),
              children: "Yes, approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 465,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 463,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "modal fade",
      id: "rejectResearchGrant",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectResearchGrantLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
              className: "modal-title",
              id: "rejectResearchGrantLabel",
              children: "Reject Research Grant Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 498,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                "aria-hidden": "true",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 500,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 497,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: /*#__PURE__*/function () {
              var _ref5 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(values) {
                var alert, form, formData, res;
                return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        alert = document.getElementById("researchalert");
                        $('#rejectResearchGrant').modal('toggle');
                        form = document.getElementById('rejectRGForm');
                        formData = new FormData(form);
                        formData.append('researchId', approveRG);
                        _context4.next = 7;
                        return (0,_services_faculty_accomplishments_approveResearchGrant__WEBPACK_IMPORTED_MODULE_14__.default)(formData, false, props.facultyId, props.token);

                      case 7:
                        res = _context4.sent;

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
                        next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);

                      case 11:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x3) {
                return _ref5.apply(this, arguments);
              };
            }(),
            children: function children(_ref6) {
              var values = _ref6.values,
                  errors = _ref6.errors,
                  touched = _ref6.touched,
                  isSubmitting = _ref6.isSubmitting;
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Form, {
                id: "rejectRGForm",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "modal-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 535,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "RejectionRemarks",
                        children: " Reason/Remarks for Rejection "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 538,
                        columnNumber: 41
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        className: "form-control",
                        type: "text",
                        name: "approverRemarks",
                        placeholder: "Input remarks",
                        required: true
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 539,
                        columnNumber: 41
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 537,
                      columnNumber: 37
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 536,
                    columnNumber: 33
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 534,
                  columnNumber: 29
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "modal-footer",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    type: "button",
                    className: "btn btn-secondary",
                    "data-dismiss": "modal",
                    children: "Close"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 544,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    type: "submit",
                    className: "btn btn-primary",
                    disabled: isSubmitting,
                    onClick: function onClick() {
                      $('#rejectResearchGrant').modal('toggle');
                    },
                    children: "Save changes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 545,
                    columnNumber: 33
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 543,
                  columnNumber: 29
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 533,
                columnNumber: 25
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 503,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 235,
    columnNumber: 3
  }, this);
}

_s(ResearchGrant, "m0n3z84XGXbdI0+ihQawPOivnAM=");

_c = ResearchGrant;
/* harmony default export */ __webpack_exports__["default"] = (ResearchGrant);

var _c;

$RefreshReg$(_c, "ResearchGrant");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9yZXNlYXJjaC1ncmFudC5qcyJdLCJuYW1lcyI6WyJSZXNlYXJjaEdyYW50IiwicHJvcHMiLCJjb250ZW50IiwiZGVsZXRlUmVzIiwiZWRpdFJlcyIsImFwcHJvdmVSRyIsIlJlYWN0IiwicmVzZWFyY2hJZCIsInJlc2VhcmNoTmFtZSIsImdyYW50ZXIiLCJhbW91bnQiLCJwcm9qZWN0ZWRTdGFydCIsInByb2plY3RlZEVuZCIsImFjdHVhbFN0YXJ0IiwiYWN0dWFsRW5kIiwicmVzZWFyY2hQcm9ncmVzcyIsIm5vbkZhY3VsdHlSZXNlYXJjaGVycyIsImZhY3VsdHlfcmVzZWFyY2hlcnMiLCJvZ19hdXRoIiwiY3VyckRhdGEiLCJzZXREYXRhIiwiYXV0aG9ycyIsImZhY3VsdHkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwidmFsdWUiLCJmYWN1bHR5SWQiLCJsYWJlbCIsImxhc3ROYW1lIiwiZmlyc3ROYW1lIiwiY2hpbGRyZW4iLCJyZXMiLCJkcHNtYXV0aCIsImZvckVhY2giLCJhdXRoIiwibGluayIsIm5hbWUiLCJmYWN1bHR5X3BlcnNvbmFsX2luZm8iLCJyb2xlIiwicHVzaCIsInByb29mIiwiZmlsZSIsImRvd25sb2FkUHJvb2YiLCJ0b2tlbiIsInByb2Nlc3MiLCJjb2xvciIsInN0YXR1cyIsImFwcHJvdmVyUmVtYXJrcyIsImVkaXRhYmxlIiwic2V0RWRpdCIsInNldEtleSIsInNldERlbGV0ZSIsImFwcHJvdmVyIiwic2V0QXBwcm92ZSIsImlkIiwieCIsInRlbXBQcm9vZiIsImUiLCJmcCIsImluZGV4IiwidGVtcCIsImhhbmRsZUNoYW5nZSIsInVuaXQiLCJwb3NpdGlvbiIsInZpc2liaWxpdHkiLCJ2YWx1ZXMiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJhbGVydCIsImV4aXN0aW5nIiwidGVtcF9yZXMiLCJnZXRBbGwiLCJOdW1iZXIiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInJlbV9vZyIsImFkZF9yZXMiLCJsZW5ndGgiLCJ1cGRhdGVSZXNlYXJjaCIsInN1Y2Nlc3MiLCJjbGFzc05hbWUiLCJzdHlsZSIsImlubmVySFRNTCIsIm1lc3NhZ2UiLCJlcnJvciIsIiQiLCJmYWRlVG8iLCJzbGlkZVVwIiwiUm91dGVyIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzU3VibWl0dGluZyIsImV2ZW50IiwidW5kZWZpbmVkIiwibW9kYWwiLCJkZWxldGVSZXNlYXJjaCIsImFwcHJvdmVSZXNlYXJjaEdyYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQ3pCLE1BQUlDLE9BQUo7QUFDQSxNQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBZDtBQUNBLE1BQUlDLFNBQVMsR0FBRyxDQUFoQjs7QUFKeUIsd0JBS0dDLHFEQUFBLENBQWU7QUFDdkNDLGNBQVUsRUFBRSxDQUQyQjtBQUV2Q0MsZ0JBQVksRUFBRSxFQUZ5QjtBQUd2Q0MsV0FBTyxFQUFDLEVBSCtCO0FBSXZDQyxVQUFNLEVBQUUsRUFKK0I7QUFLdkNDLGtCQUFjLEVBQUUsRUFMdUI7QUFNdkNDLGdCQUFZLEVBQUUsRUFOeUI7QUFPdkNDLGVBQVcsRUFBRSxFQVAwQjtBQVF2Q0MsYUFBUyxFQUFFLEVBUjRCO0FBU3ZDQyxvQkFBZ0IsRUFBRSxFQVRxQjtBQVV2Q0MseUJBQXFCLEVBQUUsRUFWZ0I7QUFXdkNDLHVCQUFtQixFQUFFLEVBWGtCO0FBWXZDQyxXQUFPLEVBQUU7QUFaOEIsR0FBZixDQUxIO0FBQUE7QUFBQSxNQUtsQkMsUUFM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QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURIO0FBQUE7QUE3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5RVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXFVQTs7R0FqaUJRcEcsYTs7S0FBQUEsYTtBQW1pQlQsK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudC42YjEyODhiYzBjNWQwYzEyYTlkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVzZWFyY2hHcmFudEZvcm0gZnJvbSAnLi9yZXNlYXJjaC1ncmFudC1mb3JtJ1xyXG5pbXBvcnQgTmFtZURpc3BsYXkgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYW1lLWRpc3BsYXknXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXHJcblxyXG5pbXBvcnQgZG93bmxvYWRQcm9vZiBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2Rvd25sb2FkUHJvb2YnXHJcbmltcG9ydCBkZWxldGVSZXNlYXJjaCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9kZWxldGVSZXNlYXJjaCdcclxuaW1wb3J0IHVwZGF0ZVJlc2VhcmNoIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL3VwZGF0ZVJlc2VhcmNoJ1xyXG5pbXBvcnQgYXBwcm92ZVJlc2VhcmNoR3JhbnQgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9hY2NvbXBsaXNobWVudHMvYXBwcm92ZVJlc2VhcmNoR3JhbnQnXHJcblxyXG5mdW5jdGlvbiBSZXNlYXJjaEdyYW50KHByb3BzKXtcclxuICAgIGxldCBjb250ZW50IFxyXG4gICAgbGV0IGRlbGV0ZVJlcyA9IDBcclxuICAgIGxldCBlZGl0UmVzID0gMFxyXG4gICAgbGV0IGFwcHJvdmVSRyA9IDBcclxuICAgIGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgcmVzZWFyY2hJZDogMCxcclxuICAgICAgICByZXNlYXJjaE5hbWU6ICcnLFxyXG4gICAgICAgIGdyYW50ZXI6JycsXHJcbiAgICAgICAgYW1vdW50OiAnJyxcclxuICAgICAgICBwcm9qZWN0ZWRTdGFydDogJycsXHJcbiAgICAgICAgcHJvamVjdGVkRW5kOiAnJyxcclxuICAgICAgICBhY3R1YWxTdGFydDogJycsXHJcbiAgICAgICAgYWN0dWFsRW5kOiAnJyxcclxuICAgICAgICByZXNlYXJjaFByb2dyZXNzOiAnJyxcclxuICAgICAgICBub25GYWN1bHR5UmVzZWFyY2hlcnM6ICcnLFxyXG4gICAgICAgIGZhY3VsdHlfcmVzZWFyY2hlcnM6IFtdLFxyXG4gICAgICAgIG9nX2F1dGg6IFtdXHJcbiAgICB9KVxyXG4gICAgbGV0IGF1dGhvcnNcclxuICAgIGlmKHByb3BzLmZhY3VsdHkpIHtcclxuICAgICAgICBhdXRob3JzID0gT2JqZWN0LmtleXMocHJvcHMuZmFjdWx0eSkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogcHJvcHMuZmFjdWx0eVtrZXldLmZhY3VsdHlJZCwgbGFiZWw6IHByb3BzLmZhY3VsdHlba2V5XS5sYXN0TmFtZSArICcsICcgKyBwcm9wcy5mYWN1bHR5W2tleV0uZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IGZhY3VsdHlfcmVzZWFyY2hlcnMgPSBbXVxyXG5cclxuICAgIGlmKHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcclxuICAgICAgICBjb250ZW50ID0gT2JqZWN0LmtleXMocHJvcHMuY2hpbGRyZW4pLm1hcChrZXkgPT4geyBcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV9yZXNlYXJjaGVycztcclxuICAgICAgICAgICAgbGV0IGRwc21hdXRoID0gW11cclxuXHJcbiAgICAgICAgICAgIHJlcy5mb3JFYWNoKChhdXRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlua1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBhdXRoLmZhY3VsdHlfcGVyc29uYWxfaW5mby5maXJzdE5hbWUgKyAnICcgKyBhdXRoLmZhY3VsdHlfcGVyc29uYWxfaW5mby5sYXN0TmFtZSArICcsICdcclxuICAgICAgICAgICAgICAgIGlmKGF1dGguZmFjdWx0eUlkID09IHByb3BzLmZhY3VsdHlJZCB8fCBwcm9wcy5yb2xlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcHNtYXV0aC5wdXNoKG5hbWUpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYocHJvcHMucm9sZSA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IFwiL2FkbWluL1wiICsgYXV0aC5mYWN1bHR5SWRcclxuICAgICAgICAgICAgICAgICAgICBkcHNtYXV0aC5wdXNoKDxhIGhyZWYgPSB7bGlua30+e25hbWV9PC9hPilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihwcm9wcy5yb2xlID09IDIgfHwgcHJvcHMucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IFwiL2ZhY3VsdHkvdmlldy9cIiArIGF1dGguZmFjdWx0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgZHBzbWF1dGgucHVzaCg8YSBocmVmID0ge2xpbmt9PntuYW1lfTwvYT4pXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS5yZXNlYXJjaElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5yZXNlYXJjaE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkcHNtYXV0aCB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVuW2tleV0ubm9uRmFjdWx0eVJlc2VhcmNoZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZ3JhbnRlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYW1vdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5wcm9qZWN0ZWRTdGFydH0gdG8ge3Byb3BzLmNoaWxkcmVuW2tleV0ucHJvamVjdGVkRW5kfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5hY3R1YWxTdGFydH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYWN0dWFsRW5kfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5yZXNlYXJjaFByb2dyZXNzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXMpLm1hcChhdXRoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNbYXV0aF0uZmFjdWx0eUlkID09IHByb3BzLmZhY3VsdHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNbYXV0aF0ucHJvb2YpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSByZXNbYXV0aF0ucHJvb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFByb29mKGZpbGUsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlVQTE9BRFNfVVJMICsgcmVzW2F1dGhdLnByb29mfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7eyBjb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPGRpdj5Ob25lPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXMpLm1hcChhdXRoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNbYXV0aF0uZmFjdWx0eUlkID09IHByb3BzLmZhY3VsdHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzW2F1dGhdLnN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocmVzKS5tYXAoYXV0aCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzW2F1dGhdLmZhY3VsdHlJZCA9PSBwcm9wcy5mYWN1bHR5SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1thdXRoXS5hcHByb3ZlclJlbWFya3MgfHwgJ05vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5lZGl0YWJsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNlZGl0UmVzZWFyY2hHcmFudFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdChwcm9wcy5jaGlsZHJlbltrZXldLnJlc2VhcmNoSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEtleShlZGl0UmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlUmVzZWFyY2hHcmFudFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlKHByb3BzLmNoaWxkcmVuW2tleV0ucmVzZWFyY2hJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmFwcHJvdmVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNhcHByb3ZlUmVzZWFyY2hHcmFudFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLnJlc2VhcmNoSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+QXBwcm92ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNyZWplY3RSZXNlYXJjaEdyYW50XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcHByb3ZlKHByb3BzLmNoaWxkcmVuW2tleV0ucmVzZWFyY2hJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5SZWplY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnRlbnQgPSA8dGQgY29sU3BhbiA9IFwiMTBcIj48cCBhbGlnbiA9IFwiY2VudGVyXCI+Tm8gZGF0YSBhdmFpbGFibGUhPC9wPjwvdGQ+XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RWRpdChpZCkge1xyXG4gICAgICAgIGVkaXRSZXMgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZShpZCkge1xyXG4gICAgICAgIGRlbGV0ZVJlcyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QXBwcm92ZShpZCkge1xyXG4gICAgICAgIGFwcHJvdmVSRyA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0S2V5KHgpIHtcclxuICAgICAgICBhd2FpdCBPYmplY3Qua2V5cyhwcm9wcy5jaGlsZHJlbikubWFwKGFzeW5jIGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNoaWxkcmVuW2tleV0ucmVzZWFyY2hJZCA9PSB4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcFByb29mID0gJydcclxuICAgICAgICAgICAgICAgIGF3YWl0IHByb3BzLmNoaWxkcmVuW2tleV0uZmFjdWx0eV9yZXNlYXJjaGVycy5mb3JFYWNoKGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZS5mYWN1bHR5SWQgPT0gcHJvcHMuZmFjdWx0eUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUucHJvb2YpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQcm9vZiA9IGUucHJvb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQcm9vZiA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBhdXRob3JzLmZvckVhY2goYXN5bmMgKGZwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmcC52YWx1ZSA9PSBlLmZhY3VsdHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZmFjdWx0eV9yZXNlYXJjaGVycy5wdXNoKGZwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcFxyXG4gICAgICAgICAgICAgICAgaWYodGVtcFByb29mKXtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNlYXJjaElkOiBwcm9wcy5jaGlsZHJlbltrZXldLnJlc2VhcmNoSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VhcmNoTmFtZTogcHJvcHMuY2hpbGRyZW5ba2V5XS5yZXNlYXJjaE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYW50ZXI6IHByb3BzLmNoaWxkcmVuW2tleV0uZ3JhbnRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBwcm9wcy5jaGlsZHJlbltrZXldLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdGVkU3RhcnQ6IHByb3BzLmNoaWxkcmVuW2tleV0ucHJvamVjdGVkU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RlZEVuZDogcHJvcHMuY2hpbGRyZW5ba2V5XS5wcm9qZWN0ZWRFbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbFN0YXJ0OiBwcm9wcy5jaGlsZHJlbltrZXldLmFjdHVhbFN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxFbmQ6IHByb3BzLmNoaWxkcmVuW2tleV0uYWN0dWFsRW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNlYXJjaFByb2dyZXNzOiBwcm9wcy5jaGlsZHJlbltrZXldLnJlc2VhcmNoUHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbkZhY3VsdHlSZXNlYXJjaGVyczogcHJvcHMuY2hpbGRyZW5ba2V5XS5ub25GYWN1bHR5UmVzZWFyY2hlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY3VsdHlfcmVzZWFyY2hlcnM6IGZhY3VsdHlfcmVzZWFyY2hlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9nX2F1dGg6IGZhY3VsdHlfcmVzZWFyY2hlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb29mOiB0ZW1wUHJvb2ZcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VhcmNoSWQ6IHByb3BzLmNoaWxkcmVuW2tleV0ucmVzZWFyY2hJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZWFyY2hOYW1lOiBwcm9wcy5jaGlsZHJlbltrZXldLnJlc2VhcmNoTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbnRlcjogcHJvcHMuY2hpbGRyZW5ba2V5XS5ncmFudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHByb3BzLmNoaWxkcmVuW2tleV0uYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0ZWRTdGFydDogcHJvcHMuY2hpbGRyZW5ba2V5XS5wcm9qZWN0ZWRTdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdGVkRW5kOiBwcm9wcy5jaGlsZHJlbltrZXldLnByb2plY3RlZEVuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsU3RhcnQ6IHByb3BzLmNoaWxkcmVuW2tleV0uYWN0dWFsU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbEVuZDogcHJvcHMuY2hpbGRyZW5ba2V5XS5hY3R1YWxFbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VhcmNoUHJvZ3Jlc3M6IHByb3BzLmNoaWxkcmVuW2tleV0ucmVzZWFyY2hQcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uRmFjdWx0eVJlc2VhcmNoZXJzOiBwcm9wcy5jaGlsZHJlbltrZXldLm5vbkZhY3VsdHlSZXNlYXJjaGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjdWx0eV9yZXNlYXJjaGVyczogZmFjdWx0eV9yZXNlYXJjaGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2dfYXV0aDogZmFjdWx0eV9yZXNlYXJjaGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvb2Y6ICdOb25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXdhaXQgc2V0RGF0YSh0ZW1wKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWN1bHR5X3Jlc2VhcmNoZXJzXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIGZhY3VsdHlfcmVzZWFyY2hlcnM6IGV9KSlcclxuICAgIH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuICAgICAgICAgICAgPGgyIGFsaWduID0gXCJjZW50ZXJcIj4gUmVzZWFyY2ggR3JhbnRzIDwvaDI+XHJcbiAgICAgICAgICAgIDxOYW1lRGlzcGxheSB1bml0ID0ge3Byb3BzLnVuaXR9IHBvc2l0aW9uPXtwcm9wcy5wb3NpdGlvbn0+e3Byb3BzLm5hbWV9PC9OYW1lRGlzcGxheT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiIGlkPVwicmVzZWFyY2hhbGVydFwiIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0PHRhYmxlIGNsYXNzTmFtZSA9IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1zbVwiPlxyXG5cdFx0PHRib2R5PlxyXG5cdFx0XHQ8dHI+XHJcblx0XHRcdFx0PHRoPlJlc2VhcmNoIFByb2plY3Q8L3RoPlxyXG5cdFx0XHRcdDx0aD5SZXNlYXJjaGVyL3M8L3RoPlxyXG5cdFx0XHRcdDx0aD5TcG9uc29yPC90aD5cclxuXHRcdFx0XHQ8dGg+QW1vdW50PC90aD5cclxuXHRcdFx0XHQ8dGg+UHJvamVjdGVkIER1cmF0aW9uPC90aD5cclxuXHRcdFx0XHQ8dGg+U3RhcnQgRGF0ZTwvdGg+XHJcblx0XHRcdFx0PHRoPkVuZCBEYXRlPC90aD5cclxuXHRcdFx0XHQ8dGg+UmVzZWFyY2ggUHJvZ3Jlc3M8L3RoPlxyXG5cdFx0XHRcdDx0aD5Qcm9vZjwvdGg+XHJcblx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+QXBwcm92ZXIgUmVtYXJrczwvdGg+XHJcbiAgICAgICAgICAgICAgICB7IChwcm9wcy5lZGl0YWJsZSB8fCBwcm9wcy5hcHByb3ZlcikgJiYgPHRoPkFjdGlvbjwvdGg+fVxyXG5cdFx0XHQ8L3RyPlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuXHRcdDwvdGJvZHk+XHJcblx0PC90YWJsZT5cdFxyXG5cdDwvZGl2PlxyXG4gICAgeyBwcm9wcy5lZGl0YWJsZSAmJlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxSZXNlYXJjaEdyYW50Rm9ybSBmYWN1bHR5ID0ge3Byb3BzLmZhY3VsdHl9IHRva2VuID0ge3Byb3BzLnRva2VufSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZWRpdFJlc2VhcmNoR3JhbnRcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImVkaXRSZXNlYXJjaEdyYW50TGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImVkaXRSZXNlYXJjaEdyYW50TGFiZWxcIj5VcGRhdGUgUmVzZWFyY2ggR3JhbnQgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Y3VyckRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFJlc0Zvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZXNlYXJjaElkJywgY3VyckRhdGEucmVzZWFyY2hJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleGlzdGluZyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJEYXRhLm9nX2F1dGguZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnB1c2goeC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wX3JlcyA9IGZvcm1EYXRhLmdldEFsbCgnZmFjdWx0eV9yZXNlYXJjaGVycycpLm1hcCh4ID0+IE51bWJlcih4KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbV9vZyA9IGF3YWl0IGV4aXN0aW5nLmZpbHRlcih4ID0+ICF0ZW1wX3Jlcy5pbmNsdWRlcyh4KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZF9yZXMgPSBhd2FpdCB0ZW1wX3Jlcy5maWx0ZXIoeCA9PiAhZXhpc3RpbmcuaW5jbHVkZXMoeCkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhZGRfcmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF9yZXMuZm9yRWFjaCgoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWRkX3JlcycsIHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZW1fb2cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtX29nLmZvckVhY2goKHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3JlbV9yZXMnLCB4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHVwZGF0ZVJlc2VhcmNoKGZvcm1EYXRhLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNyZXNlYXJjaGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNyZXNlYXJjaGFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gaWQgPSBcImVkaXRSZXNGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hVcGRhdGVcIj4gUmVzZWFyY2ggUHJvamVjdCA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmVzZWFyY2hOYW1lXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IHJlc2VhcmNoIG5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hTcG9uc29yVXBkYXRlXCI+IFNwb25zb3IgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImdyYW50ZXJcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgc3BvbnNvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJSZXNlYXJjaEFtb3VudFVwZGF0ZVwiPiBBbW91bnQgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImFtb3VudFwiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBhbW91bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hTdGFydERhdGVVcGRhdGVcIj4gU3RhcnQgRGF0ZSAoQWN0dWFsKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwiYWN0dWFsU3RhcnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hFbmREYXRlVXBkYXRlXCI+IEVuZCBEYXRlIChBY3R1YWwpIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJhY3R1YWxFbmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hQcm9qZWN0ZWRTdGFydERhdGVVcGRhdGVcIj4gU3RhcnQgRGF0ZSAoUHJvamVjdGVkKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZGF0ZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgbmFtZSA9IFwicHJvamVjdGVkU3RhcnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hQcm9qZWN0ZWRFbmREYXRlVXBkYXRlXCI+IEVuZCBEYXRlIChQcm9qZWN0ZWQpIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlID0gXCJkYXRlXCIgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJwcm9qZWN0ZWRFbmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hQcm9ncmVzc1VwZGF0ZVwiPiBQcm9ncmVzcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwicmVzZWFyY2hQcm9ncmVzc1wiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCBwcm9ncmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoQXV0aG9yRFBTTVVwZGF0ZVwiPiBBdXRob3JzIChEUFNNKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImZhY3VsdHlfcmVzZWFyY2hlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge2F1dGhvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y3VyckRhdGEuZmFjdWx0eV9yZXNlYXJjaGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVzZWFyY2hBdXRob3JOb25EUFNNVXBkYXRlXCI+IEF1dGhvcnMgKG5vbi1EUFNNKSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwibm9uRmFjdWx0eVJlc2VhcmNoZXJzXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IGFsbCBhdXRob3JzIG91dHNpZGUgRFBTTSAoc2VwYXJhdGUgbmFtZXMgd2l0aCBjb21tYXMpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIlJlc2VhcmNoUHJvb2ZVcGRhdGVcIj4gQWRkL0VkaXQgUHJvb2YgW1VwbG9hZGVkOiB7Y3VyckRhdGEucHJvb2Z9XSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJwcm9vZlwiICB2YWx1ZT17dW5kZWZpbmVkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9IG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0UmVzZWFyY2hHcmFudCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJkZWxldGVSZXNlYXJjaEdyYW50XCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJkZWxldGVSZXNlYXJjaEdyYW50TGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImRlbGV0ZVJlc2VhcmNoR3JhbnRMYWJlbFwiPkRlbGV0ZSBSZXNlYXJjaCBHcmFudCBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVzZWFyY2ggZ3JhbnQgaW5mb3JtYXRpb24/IDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Tm8sIGRvbid0IGRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrID0ge2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBkZWxldGVSZXNlYXJjaChkZWxldGVSZXMsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIHZhbHVlcy5tZXNzYWdlID0gcmVzLmVycm9yWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdmFsdWVzLm1lc3NhZ2UgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Jlc2VhcmNoYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Jlc2VhcmNoYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hY2NvbXBsaXNobWVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+WWVzLCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Plx0XHRcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJhcHByb3ZlUmVzZWFyY2hHcmFudFwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiYXBwcm92ZVJlc2VhcmNoR3JhbnRMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImFwcHJvdmVSZXNlYXJjaEdyYW50TGFiZWxcIj5BcHByb3ZlIFJlc2VhcmNoIEdyYW50IEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gYXBwcm92ZSB0aGlzIHJlc2VhcmNoIGdyYW50IGluZm9ybWF0aW9uPyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPk5vLCBkb24ndCBhcHByb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljayA9IHthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhcHByb3ZlUmVzZWFyY2hHcmFudCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmVzZWFyY2hJZCcsIGFwcHJvdmVSRylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwcHJvdmVSZXNlYXJjaEdyYW50KGZvcm1EYXRhLCB0cnVlLCBwcm9wcy5mYWN1bHR5SWQsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNyZXNlYXJjaGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcmVzZWFyY2hhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkLCAnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+WWVzLCBhcHByb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJyZWplY3RSZXNlYXJjaEdyYW50XCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJyZWplY3RSZXNlYXJjaEdyYW50TGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJyZWplY3RSZXNlYXJjaEdyYW50TGFiZWxcIj5SZWplY3QgUmVzZWFyY2ggR3JhbnQgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2N1cnJEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVqZWN0UmVzZWFyY2hHcmFudCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVqZWN0UkdGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZXNlYXJjaElkJywgYXBwcm92ZVJHKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBwcm92ZVJlc2VhcmNoR3JhbnQoZm9ybURhdGEsIGZhbHNlLCBwcm9wcy5mYWN1bHR5SWQsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNyZXNlYXJjaGFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcmVzZWFyY2hhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkLCAnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpZCA9IFwicmVqZWN0UkdGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yID0gXCJSZWplY3Rpb25SZW1hcmtzXCI+IFJlYXNvbi9SZW1hcmtzIGZvciBSZWplY3Rpb24gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJhcHByb3ZlclJlbWFya3NcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcmVtYXJrc1wiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30gb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWplY3RSZXNlYXJjaEdyYW50JykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VhcmNoR3JhbnRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==