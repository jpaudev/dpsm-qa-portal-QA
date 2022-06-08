self["webpackHotUpdate_N_E"]("pages/faculty/accomplishment",{

/***/ "./components/faculty/accomplishments/licensure-exam.js":
/*!**************************************************************!*\
  !*** ./components/faculty/accomplishments/licensure-exam.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _licensure_exam_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./licensure-exam-form */ "./components/faculty/accomplishments/licensure-exam-form.js");
/* harmony import */ var _components_name_display__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/name-display */ "./components/name-display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/faculty/downloadProof */ "./services/faculty/downloadProof.js");
/* harmony import */ var _services_faculty_accomplishments_updateLicensure__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/updateLicensure */ "./services/faculty/accomplishments/updateLicensure.js");
/* harmony import */ var _services_faculty_accomplishments_deleteLicensure__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/deleteLicensure */ "./services/faculty/accomplishments/deleteLicensure.js");
/* harmony import */ var _services_faculty_accomplishments_approveLicense__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/faculty/accomplishments/approveLicense */ "./services/faculty/accomplishments/approveLicense.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Aji Maglanque\\Desktop\\dpsm-qa-portal\\components\\faculty\\accomplishments\\licensure-exam.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function LicensureExam(props) {
  _s();

  var _this = this;

  var deleteLic = 0;
  var editLic = 0;
  var approveLic = 0;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_9___default().useState({
    licenseId: 0,
    examName: '',
    examDate: '',
    licenseNumber: '',
    rank: '',
    proof: ''
  }),
      _React$useState2 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState, 2),
      currData = _React$useState2[0],
      setData = _React$useState2[1];

  var name = props.name;
  var content;

  if (props.children != null) {
    content = Object.keys(props.children).map(function (key) {
      if (props.children[key].licenseId != null) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].examName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].rank == 0 || props.children[key].rank == null ? 'N/A' : props.children[key].rank
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].examDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].licenseNumber
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: [props.children[key].proof && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                type: "button",
                className: "btn btn-primary",
                onClick: function onClick() {
                  var file = props.children[key].proof;
                  (0,_services_faculty_downloadProof__WEBPACK_IMPORTED_MODULE_11__.default)(file, props.token);
                },
                children: "Download"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "btn btn-info",
                href: "http://localhost:3001/" + props.children[key].proof,
                style: {
                  color: 'white'
                },
                target: "_blank",
                children: "Preview"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, _this), !props.children[key].proof && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              children: "None"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: props.children[key].approverRemarks || 'None'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: [props.editable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "btn-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#editLicensureExam",
                onClick: function onClick() {
                  setEdit(props.children[key].licenseId);
                  setKey(editLic);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#deleteLicensureExam",
                onClick: function onClick() {
                  setDelete(props.children[key].licenseId);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, _this), props.approver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "btn-grp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "btn btn-info",
                "data-toggle": "modal",
                "data-target": "#approveLicense",
                onClick: function onClick() {
                  setApprove(props.children[key].licenseId);
                },
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                className: "btn btn-danger",
                "data-toggle": "modal",
                "data-target": "#rejectLicense",
                onClick: function onClick() {
                  setApprove(props.children[key].licenseId);
                },
                children: "Reject"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, _this)]
        }, props.children[key].licenseId, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this);
      }
    });
  } else {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
      colSpan: "7",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        align: "center",
        children: "No data available!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }, this);
  }

  function setEdit(id) {
    editLic = id;
  }

  function setDelete(id) {
    deleteLic = id;
  }

  function setApprove(id) {
    approveLic = id;
  }

  function setKey(x) {
    Object.keys(props.children).map(function (key) {
      if (props.children[key].licenseId == x) {
        setData(props.children[key]);

        if (props.children[key].rank == "" || props.children[key].rank == null) {
          setData(function (currData) {
            return _objectSpread(_objectSpread({}, currData), {}, {
              rank: ''
            });
          });
        }

        if (props.children[key].proof) {
          setData(function (currData) {
            return _objectSpread(_objectSpread({}, currData), {}, {
              proof: props.children[key].proof
            });
          });
        } else {
          setData(function (currData) {
            return _objectSpread(_objectSpread({}, currData), {}, {
              proof: 'None'
            });
          });
        }
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      align: "center",
      children: " Licensure Exams "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_name_display__WEBPACK_IMPORTED_MODULE_7__.default, {
      unit: props.unit,
      position: props.position,
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      role: "alert",
      id: "licensureexamalert",
      style: {
        visibility: "hidden"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("table", {
        className: "table table-striped table-sm",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Exam Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Rank"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "License Number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Proof"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Approver Remarks"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, this), (props.editable || props.approver) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 69
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, this), content]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, this), props.editable && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_licensure_exam_form__WEBPACK_IMPORTED_MODULE_6__.default, {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "modal fade",
      id: "editLicensureExam",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "editLicensureExamLabel",
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
              id: "editLicensureExamLabel",
              children: "Update Licensure Exam Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
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
                lineNumber: 162,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: /*#__PURE__*/function () {
              var _ref = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {
                var form, formData, alert, res;
                return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        form = document.getElementById('editLicForm');
                        formData = new FormData(form);
                        formData.append('licenseId', currData.licenseId);
                        alert = document.getElementById("licensureexamalert");
                        _context.next = 6;
                        return (0,_services_faculty_accomplishments_updateLicensure__WEBPACK_IMPORTED_MODULE_12__.default)(formData, props.token);

                      case 6:
                        res = _context.sent;

                        if (res.success == true) {
                          alert.className = "alert alert-success";
                          alert.style = "visibility: visible";
                          alert.innerHTML = res.message;
                        } else {
                          alert.className = "alert alert-danger";
                          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                        }

                        $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                          $("#licensureexamalert").slideUp(500);
                        });
                        next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/faculty/accomplishment');

                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }(),
            children: function children(_ref2) {
              var values = _ref2.values,
                  errors = _ref2.errors,
                  touched = _ref2.touched,
                  isSubmitting = _ref2.isSubmitting;
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Form, {
                id: "editLicForm",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "modal-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "LicensureExamUpdate",
                        children: " Licensure Exam "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 198,
                        columnNumber: 41
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        className: "form-control",
                        type: "text",
                        name: "examName",
                        id: "examName",
                        placeholder: "Input licensure exam"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 41
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 37
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "LicensureExamDateUpdate",
                        children: " Date "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 41
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        type: "date",
                        className: "form-control",
                        name: "examDate",
                        id: "examDate"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 41
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 37
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "LicensureExamRankUpdate",
                        children: " Rank "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 41
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        className: "form-control",
                        type: "text",
                        name: "rank",
                        id: "rank",
                        placeholder: "Input rank"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 41
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 37
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "LicenseNumeberUpdate",
                        children: " License Number "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 216,
                        columnNumber: 41
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        className: "form-control",
                        type: "text",
                        name: "licenseNumber",
                        id: "licenseNumber",
                        placeholder: "Input licensure number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 217,
                        columnNumber: 41
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 37
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "LicensureExamProofUpdate",
                        children: [" Add/Edit Proof [Uploaded: ", currData.proof, "] "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 41
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        type: "file",
                        className: "form-control-file",
                        name: "proof",
                        id: "proof",
                        value: undefined
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 223,
                        columnNumber: 41
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 37
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 33
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
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
                    lineNumber: 228,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    type: "submit",
                    className: "btn btn-primary",
                    disabled: isSubmitting,
                    onClick: function onClick() {
                      $('#editLicensureExam').modal('toggle');
                    },
                    children: "Save changes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 33
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 29
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 25
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "modal fade",
      id: "deleteLicensureExam",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "deleteLicensureExamLabel",
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
              id: "deleteLicensureExamLabel",
              children: "Delete Licensure Exam Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 29
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
                lineNumber: 246,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: " Are you sure you want to delete this licensure exam information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-dismiss": "modal",
              children: "No, don't delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              "data-dismiss": "modal",
              onClick: /*#__PURE__*/(0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
                var alert, res;
                return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        alert = document.getElementById("licensureexamalert");
                        _context2.next = 3;
                        return (0,_services_faculty_accomplishments_deleteLicensure__WEBPACK_IMPORTED_MODULE_13__.default)(deleteLic, props.token);

                      case 3:
                        res = _context2.sent;

                        if (res.success == true) {
                          alert.className = "alert alert-success";
                          alert.style = "visibility: visible";
                          alert.innerHTML = res.message;
                        } else {
                          alert.className = "alert alert-danger";
                          if (res.error) alert.innerHTML = res.error[0].message;else alert.innerHTML = res.message;
                        }

                        $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                          $("#licensureexamalert").slideUp(500);
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
              lineNumber: 255,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "modal fade",
      id: "approveLicense",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "approveLicenseLabel",
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
              id: "approveLicenseLabel",
              children: "Approve Licensure Exam Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
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
                lineNumber: 283,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: " Are you sure you want to approve this licensure exam information? "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 286,
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
              lineNumber: 291,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: /*#__PURE__*/(0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
                var alert, formData, res;
                return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        alert = document.getElementById("licensureexamalert");
                        $('#approveLicense').modal('toggle');
                        formData = new FormData();
                        formData.append('licenseId', approveLic);
                        _context3.next = 6;
                        return (0,_services_faculty_accomplishments_approveLicense__WEBPACK_IMPORTED_MODULE_14__.default)(formData, true, props.facultyId, props.token);

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

                        $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                          $("#licensureexamalert").slideUp(500);
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
              lineNumber: 292,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "modal fade",
      id: "rejectLicense",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "rejectLicenseLabel",
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
              id: "rejectLicenseLabel",
              children: "Reject Licensure Exam Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
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
                lineNumber: 327,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Formik, {
            enableReinitialize: true,
            initialValues: currData,
            onSubmit: /*#__PURE__*/function () {
              var _ref5 = (0,C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(values) {
                var alert, form, formData, res;
                return C_Users_Aji_Maglanque_Desktop_dpsm_qa_portal_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        alert = document.getElementById("licensureexamalert");
                        $('#rejectLicense').modal('toggle');
                        form = document.getElementById('rejectLicenseForm');
                        formData = new FormData(form);
                        formData.append('licenseId', approveLic);
                        _context4.next = 7;
                        return (0,_services_faculty_accomplishments_approveLicense__WEBPACK_IMPORTED_MODULE_14__.default)(formData, false, props.facultyId, props.token);

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

                        $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function () {
                          $("#licensureexamalert").slideUp(500);
                        });
                        next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId);

                      case 11:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x2) {
                return _ref5.apply(this, arguments);
              };
            }(),
            children: function children(_ref6) {
              var values = _ref6.values,
                  errors = _ref6.errors,
                  touched = _ref6.touched,
                  isSubmitting = _ref6.isSubmitting;
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Form, {
                id: "rejectLicenseForm",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "modal-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 362,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "form-row",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                        htmlFor: "RejectionRemarks",
                        children: " Reason/Remarks for Rejection "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 365,
                        columnNumber: 37
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
                        className: "form-control",
                        type: "text",
                        name: "approverRemarks",
                        placeholder: "Input remarks",
                        required: true
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 366,
                        columnNumber: 37
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 364,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 363,
                    columnNumber: 29
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 361,
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
                    lineNumber: 371,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    type: "submit",
                    className: "btn btn-primary",
                    disabled: isSubmitting,
                    onClick: function onClick() {
                      $('#rejectLicense').modal('toggle');
                    },
                    children: "Save changes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 372,
                    columnNumber: 29
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 21
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 9
  }, this);
}

_s(LicensureExam, "Go6WUvgHE08E9ziqB3eOiaFgMcE=");

_c = LicensureExam;
/* harmony default export */ __webpack_exports__["default"] = (LicensureExam);

var _c;

$RefreshReg$(_c, "LicensureExam");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9saWNlbnN1cmUtZXhhbS5qcyJdLCJuYW1lcyI6WyJMaWNlbnN1cmVFeGFtIiwicHJvcHMiLCJkZWxldGVMaWMiLCJlZGl0TGljIiwiYXBwcm92ZUxpYyIsIlJlYWN0IiwibGljZW5zZUlkIiwiZXhhbU5hbWUiLCJleGFtRGF0ZSIsImxpY2Vuc2VOdW1iZXIiLCJyYW5rIiwicHJvb2YiLCJjdXJyRGF0YSIsInNldERhdGEiLCJuYW1lIiwiY29udGVudCIsImNoaWxkcmVuIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImZpbGUiLCJkb3dubG9hZFByb29mIiwidG9rZW4iLCJwcm9jZXNzIiwiY29sb3IiLCJzdGF0dXMiLCJhcHByb3ZlclJlbWFya3MiLCJlZGl0YWJsZSIsInNldEVkaXQiLCJzZXRLZXkiLCJzZXREZWxldGUiLCJhcHByb3ZlciIsInNldEFwcHJvdmUiLCJpZCIsIngiLCJ1bml0IiwicG9zaXRpb24iLCJ2aXNpYmlsaXR5IiwidmFsdWVzIiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYWxlcnQiLCJ1cGRhdGVMaWNlbnN1cmUiLCJyZXMiLCJzdWNjZXNzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbm5lckhUTUwiLCJtZXNzYWdlIiwiZXJyb3IiLCIkIiwiZmFkZVRvIiwic2xpZGVVcCIsIlJvdXRlciIsImVycm9ycyIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJ1bmRlZmluZWQiLCJtb2RhbCIsImRlbGV0ZUxpY2Vuc3VyZSIsImFwcHJvdmVMaWNlbnNlIiwiZmFjdWx0eUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQUE7O0FBQzFCLE1BQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxDQUFkO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLENBQWpCOztBQUgwQix3QkFLRUMscURBQUEsQ0FBZTtBQUN2Q0MsYUFBUyxFQUFFLENBRDRCO0FBRXZDQyxZQUFRLEVBQUUsRUFGNkI7QUFHdkNDLFlBQVEsRUFBQyxFQUg4QjtBQUl2Q0MsaUJBQWEsRUFBRSxFQUp3QjtBQUt2Q0MsUUFBSSxFQUFFLEVBTGlDO0FBTXZDQyxTQUFLLEVBQUU7QUFOZ0MsR0FBZixDQUxGO0FBQUE7QUFBQSxNQUtuQkMsUUFMbUI7QUFBQSxNQUtUQyxPQUxTOztBQWExQixNQUFNQyxJQUFJLEdBQUdiLEtBQUssQ0FBQ2EsSUFBbkI7QUFDQSxNQUFJQyxPQUFKOztBQUNBLE1BQUdkLEtBQUssQ0FBQ2UsUUFBTixJQUFrQixJQUFyQixFQUEyQjtBQUN2QkQsV0FBTyxHQUFHRSxNQUFNLENBQUNDLElBQVAsQ0FBWWpCLEtBQUssQ0FBQ2UsUUFBbEIsRUFBNEJHLEdBQTVCLENBQWdDLFVBQUFDLEdBQUcsRUFBSTtBQUM3QyxVQUFHbkIsS0FBSyxDQUFDZSxRQUFOLENBQWVJLEdBQWYsRUFBb0JkLFNBQXBCLElBQWlDLElBQXBDLEVBQTBDO0FBQ3RDLDRCQUNJO0FBQUEsa0NBQ0k7QUFBQSxzQkFBS0wsS0FBSyxDQUFDZSxRQUFOLENBQWVJLEdBQWYsRUFBb0JiO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLHNCQUFLTixLQUFLLENBQUNlLFFBQU4sQ0FBZUksR0FBZixFQUFvQlYsSUFBcEIsSUFBNEIsQ0FBNUIsSUFBaUNULEtBQUssQ0FBQ2UsUUFBTixDQUFlSSxHQUFmLEVBQW9CVixJQUFwQixJQUE0QixJQUE3RCxHQUFvRSxLQUFwRSxHQUE0RVQsS0FBSyxDQUFDZSxRQUFOLENBQWVJLEdBQWYsRUFBb0JWO0FBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLHNCQUFLVCxLQUFLLENBQUNlLFFBQU4sQ0FBZUksR0FBZixFQUFvQlo7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQUEsc0JBQUtQLEtBQUssQ0FBQ2UsUUFBTixDQUFlSSxHQUFmLEVBQW9CWDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBQSx1QkFFSVIsS0FBSyxDQUFDZSxRQUFOLENBQWVJLEdBQWYsRUFBb0JULEtBQXBCLGlCQUNBO0FBQUssdUJBQVMsRUFBRyxTQUFqQjtBQUFBLHNDQUNJO0FBQ0ksb0JBQUksRUFBQyxRQURUO0FBRUkseUJBQVMsRUFBQyxpQkFGZDtBQUdJLHVCQUFPLEVBQUksbUJBQU07QUFDYixzQkFBSVUsSUFBSSxHQUFHcEIsS0FBSyxDQUFDZSxRQUFOLENBQWVJLEdBQWYsRUFBb0JULEtBQS9CO0FBQ0FXLDJGQUFhLENBQUNELElBQUQsRUFBT3BCLEtBQUssQ0FBQ3NCLEtBQWIsQ0FBYjtBQUNILGlCQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBV0k7QUFDSSx5QkFBUyxFQUFFLGNBRGY7QUFFSSxvQkFBSSxFQUFFQyx3QkFBQSxHQUEwQnZCLEtBQUssQ0FBQ2UsUUFBTixDQUFlSSxHQUFmLEVBQW9CVCxLQUZ4RDtBQUdJLHFCQUFLLEVBQUk7QUFBRWMsdUJBQUssRUFBRTtBQUFULGlCQUhiO0FBSUksc0JBQU0sRUFBQyxRQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixFQXdCSSxDQUFDeEIsS0FBSyxDQUFDZSxRQUFOLENBQWVJLEdBQWYsRUFBb0JULEtBQXJCLGlCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFpQ0k7QUFBQSxzQkFBS1YsS0FBSyxDQUFDZSxRQUFOLENBQWVJLEdBQWYsRUFBb0JNO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakNKLGVBa0NJO0FBQUEsc0JBQUt6QixLQUFLLENBQUNlLFFBQU4sQ0FBZUksR0FBZixFQUFvQk8sZUFBcEIsSUFBdUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQ0osZUFtQ0k7QUFBQSx1QkFDRTFCLEtBQUssQ0FBQzJCLFFBQU4saUJBQ0U7QUFBSyx1QkFBUyxFQUFHLFdBQWpCO0FBQUEsc0NBQ0k7QUFBRyx5QkFBUyxFQUFDLGNBQWI7QUFBNEIsK0JBQVksT0FBeEM7QUFBZ0QsK0JBQVksb0JBQTVEO0FBQWlGLHVCQUFPLEVBQUUsbUJBQU07QUFDNUZDLHlCQUFPLENBQUM1QixLQUFLLENBQUNlLFFBQU4sQ0FBZUksR0FBZixFQUFvQmQsU0FBckIsQ0FBUDtBQUNBd0Isd0JBQU0sQ0FBQzNCLE9BQUQsQ0FBTjtBQUNILGlCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBS0k7QUFBRyx5QkFBUyxFQUFDLGdCQUFiO0FBQThCLCtCQUFZLE9BQTFDO0FBQWtELCtCQUFZLHNCQUE5RDtBQUFxRix1QkFBTyxFQUFFLG1CQUFNO0FBQ2hHNEIsMkJBQVMsQ0FBQzlCLEtBQUssQ0FBQ2UsUUFBTixDQUFlSSxHQUFmLEVBQW9CZCxTQUFyQixDQUFUO0FBQ0gsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLEVBWUVMLEtBQUssQ0FBQytCLFFBQU4saUJBQ0U7QUFBSyx1QkFBUyxFQUFHLFNBQWpCO0FBQUEsc0NBQ0k7QUFBRyx5QkFBUyxFQUFDLGNBQWI7QUFBNEIsK0JBQVksT0FBeEM7QUFBZ0QsK0JBQVksaUJBQTVEO0FBQThFLHVCQUFPLEVBQUUsbUJBQU07QUFDekZDLDRCQUFVLENBQUNoQyxLQUFLLENBQUNlLFFBQU4sQ0FBZUksR0FBZixFQUFvQmQsU0FBckIsQ0FBVjtBQUNILGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUk7QUFBRyx5QkFBUyxFQUFDLGdCQUFiO0FBQThCLCtCQUFZLE9BQTFDO0FBQWtELCtCQUFZLGdCQUE5RDtBQUErRSx1QkFBTyxFQUFFLG1CQUFNO0FBQzFGMkIsNEJBQVUsQ0FBQ2hDLEtBQUssQ0FBQ2UsUUFBTixDQUFlSSxHQUFmLEVBQW9CZCxTQUFyQixDQUFWO0FBQ0gsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQ0o7QUFBQSxXQUFXTCxLQUFLLENBQUNlLFFBQU4sQ0FBZUksR0FBZixFQUFvQmQsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQTZESDtBQUNKLEtBaEVTLENBQVY7QUFpRUgsR0FsRUQsTUFtRUk7QUFDQVMsV0FBTyxnQkFBRztBQUFJLGFBQU8sRUFBRyxHQUFkO0FBQUEsNkJBQWtCO0FBQUcsYUFBSyxFQUFHLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0g7O0FBRUQsV0FBU2MsT0FBVCxDQUFpQkssRUFBakIsRUFBcUI7QUFDakIvQixXQUFPLEdBQUcrQixFQUFWO0FBQ0g7O0FBRUQsV0FBU0gsU0FBVCxDQUFtQkcsRUFBbkIsRUFBdUI7QUFDbkJoQyxhQUFTLEdBQUdnQyxFQUFaO0FBQ0g7O0FBRUQsV0FBU0QsVUFBVCxDQUFvQkMsRUFBcEIsRUFBd0I7QUFDcEI5QixjQUFVLEdBQUc4QixFQUFiO0FBQ0g7O0FBRUQsV0FBU0osTUFBVCxDQUFnQkssQ0FBaEIsRUFBbUI7QUFDZmxCLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZakIsS0FBSyxDQUFDZSxRQUFsQixFQUE0QkcsR0FBNUIsQ0FBZ0MsVUFBQUMsR0FBRyxFQUFJO0FBQ25DLFVBQUduQixLQUFLLENBQUNlLFFBQU4sQ0FBZUksR0FBZixFQUFvQmQsU0FBcEIsSUFBaUM2QixDQUFwQyxFQUF1QztBQUNuQ3RCLGVBQU8sQ0FBQ1osS0FBSyxDQUFDZSxRQUFOLENBQWVJLEdBQWYsQ0FBRCxDQUFQOztBQUNBLFlBQUduQixLQUFLLENBQUNlLFFBQU4sQ0FBZUksR0FBZixFQUFvQlYsSUFBcEIsSUFBNEIsRUFBNUIsSUFBa0NULEtBQUssQ0FBQ2UsUUFBTixDQUFlSSxHQUFmLEVBQW9CVixJQUFwQixJQUE0QixJQUFqRSxFQUF1RTtBQUNuRUcsaUJBQU8sQ0FBQyxVQUFBRCxRQUFRO0FBQUEsbURBQVNBLFFBQVQ7QUFBbUJGLGtCQUFJLEVBQUU7QUFBekI7QUFBQSxXQUFULENBQVA7QUFDSDs7QUFDRCxZQUFHVCxLQUFLLENBQUNlLFFBQU4sQ0FBZUksR0FBZixFQUFvQlQsS0FBdkIsRUFBOEI7QUFDMUJFLGlCQUFPLENBQUMsVUFBQUQsUUFBUTtBQUFBLG1EQUFTQSxRQUFUO0FBQW1CRCxtQkFBSyxFQUFFVixLQUFLLENBQUNlLFFBQU4sQ0FBZUksR0FBZixFQUFvQlQ7QUFBOUM7QUFBQSxXQUFULENBQVA7QUFDSCxTQUZELE1BRU87QUFDSEUsaUJBQU8sQ0FBQyxVQUFBRCxRQUFRO0FBQUEsbURBQVNBLFFBQVQ7QUFBbUJELG1CQUFLLEVBQUU7QUFBMUI7QUFBQSxXQUFULENBQVA7QUFDSDtBQUNKO0FBQ0osS0FaRDtBQWFIOztBQUVELHNCQUNJO0FBQUEsNEJBQ0k7QUFBSSxXQUFLLEVBQUcsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUksOERBQUMsNkRBQUQ7QUFBYSxVQUFJLEVBQUlWLEtBQUssQ0FBQ21DLElBQTNCO0FBQWlDLGNBQVEsRUFBRW5DLEtBQUssQ0FBQ29DLFFBQWpEO0FBQUEsZ0JBQTREcEMsS0FBSyxDQUFDYTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFLLFVBQUksRUFBQyxPQUFWO0FBQWtCLFFBQUUsRUFBQyxvQkFBckI7QUFBMEMsV0FBSyxFQUFFO0FBQUN3QixrQkFBVSxFQUFDO0FBQVo7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUk7QUFBSyxlQUFTLEVBQUcsa0JBQWpCO0FBQUEsNkJBQ0k7QUFBTyxpQkFBUyxFQUFHLDhCQUFuQjtBQUFBLCtCQUNJO0FBQUEsa0NBQ0k7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkosZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQSixFQVFNLENBQUNyQyxLQUFLLENBQUMyQixRQUFOLElBQWtCM0IsS0FBSyxDQUFDK0IsUUFBekIsa0JBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVI1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFXS2pCLE9BWEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixFQXNCTWQsS0FBSyxDQUFDMkIsUUFBTixpQkFDRTtBQUFBLDZCQUNJLDhEQUFDLHlEQUFEO0FBQW1CLGFBQUssRUFBSzNCLEtBQUssQ0FBQ3NCO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJSLGVBNEJJO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsUUFBRSxFQUFDLG1CQUEvQjtBQUFtRCxjQUFRLEVBQUMsSUFBNUQ7QUFBaUUsVUFBSSxFQUFDLFFBQXRFO0FBQStFLHlCQUFnQix3QkFBL0Y7QUFBd0gscUJBQVksTUFBcEk7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUE4QixZQUFJLEVBQUMsVUFBbkM7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGtDQUNBO0FBQUsscUJBQVMsRUFBQyxjQUFmO0FBQUEsb0NBQ0k7QUFBSSx1QkFBUyxFQUFDLGFBQWQ7QUFBNEIsZ0JBQUUsRUFBQyx3QkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBUyxFQUFDLE9BQWhDO0FBQXdDLDhCQUFhLE9BQXJEO0FBQTZELDRCQUFXLE9BQXhFO0FBQUEscUNBQ0E7QUFBTSwrQkFBWSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBT0EsOERBQUMsMkNBQUQ7QUFDSSw4QkFBa0IsTUFEdEI7QUFFSSx5QkFBYSxFQUFFWCxRQUZuQjtBQUdJLG9CQUFRO0FBQUEseVZBQUUsaUJBQU8yQixNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNGQyw0QkFERSxHQUNLQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FETDtBQUVGQyxnQ0FGRSxHQUVTLElBQUlDLFFBQUosQ0FBYUosSUFBYixDQUZUO0FBR05HLGdDQUFRLENBQUNFLE1BQVQsQ0FBZ0IsV0FBaEIsRUFBNkJqQyxRQUFRLENBQUNOLFNBQXRDO0FBRUl3Qyw2QkFMRSxHQUtNTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBTE47QUFBQTtBQUFBLCtCQU1VSywyRkFBZSxDQUFDSixRQUFELEVBQVcxQyxLQUFLLENBQUNzQixLQUFqQixDQU56Qjs7QUFBQTtBQU1GeUIsMkJBTkU7O0FBT04sNEJBQUdBLEdBQUcsQ0FBQ0MsT0FBSixJQUFlLElBQWxCLEVBQXdCO0FBQ3BCSCwrQkFBSyxDQUFDSSxTQUFOLEdBQWlCLHFCQUFqQjtBQUNBSiwrQkFBSyxDQUFDSyxLQUFOLEdBQWMscUJBQWQ7QUFDQUwsK0JBQUssQ0FBQ00sU0FBTixHQUFrQkosR0FBRyxDQUFDSyxPQUF0QjtBQUNILHlCQUpELE1BSU87QUFDSFAsK0JBQUssQ0FBQ0ksU0FBTixHQUFrQixvQkFBbEI7QUFDQSw4QkFBR0YsR0FBRyxDQUFDTSxLQUFQLEVBQWNSLEtBQUssQ0FBQ00sU0FBTixHQUFrQkosR0FBRyxDQUFDTSxLQUFKLENBQVUsQ0FBVixFQUFhRCxPQUEvQixDQUFkLEtBQ0tQLEtBQUssQ0FBQ00sU0FBTixHQUFrQkosR0FBRyxDQUFDSyxPQUF0QjtBQUNSOztBQUNERSx5QkFBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJDLE1BQXpCLENBQWdDLElBQWhDLEVBQXNDLEdBQXRDLEVBQTJDQyxPQUEzQyxDQUFtRCxHQUFuRCxFQUF3RCxZQUFVO0FBQzlERiwyQkFBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJFLE9BQXpCLENBQWlDLEdBQWpDO0FBQ0gseUJBRkQ7QUFJQUMsK0VBQUEsQ0FBWSx5QkFBWjs7QUFwQk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhaO0FBQUEsc0JBMkJDO0FBQUEsa0JBQUduQixNQUFILFNBQUdBLE1BQUg7QUFBQSxrQkFBV29CLE1BQVgsU0FBV0EsTUFBWDtBQUFBLGtCQUFtQkMsT0FBbkIsU0FBbUJBLE9BQW5CO0FBQUEsa0JBQTRCQyxZQUE1QixTQUE0QkEsWUFBNUI7QUFBQSxrQ0FDRyw4REFBQyx5Q0FBRDtBQUFNLGtCQUFFLEVBQUcsYUFBWDtBQUFBLHdDQUNJO0FBQUssMkJBQVMsRUFBQyxZQUFmO0FBQUEsMENBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQUssNkJBQVMsRUFBRyxVQUFqQjtBQUFBLDJDQUNJO0FBQUssK0JBQVMsRUFBRyxZQUFqQjtBQUFBLDhDQUNJO0FBQU8sK0JBQU8sRUFBRyxxQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREosZUFFSSw4REFBQywwQ0FBRDtBQUFPLGlDQUFTLEVBQUcsY0FBbkI7QUFBa0MsNEJBQUksRUFBRyxNQUF6QztBQUFnRCw0QkFBSSxFQUFHLFVBQXZEO0FBQWtFLDBCQUFFLEVBQUcsVUFBdkU7QUFBa0YsbUNBQVcsRUFBRztBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkosZUFRSTtBQUFLLDZCQUFTLEVBQUcsVUFBakI7QUFBQSwyQ0FDSTtBQUFLLCtCQUFTLEVBQUcsWUFBakI7QUFBQSw4Q0FDSTtBQUFPLCtCQUFPLEVBQUcseUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUksOERBQUMsMENBQUQ7QUFBTyw0QkFBSSxFQUFHLE1BQWQ7QUFBcUIsaUNBQVMsRUFBRyxjQUFqQztBQUFnRCw0QkFBSSxFQUFHLFVBQXZEO0FBQWtFLDBCQUFFLEVBQUc7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJKLGVBY0k7QUFBSyw2QkFBUyxFQUFHLFVBQWpCO0FBQUEsMkNBQ0k7QUFBSywrQkFBUyxFQUFHLFlBQWpCO0FBQUEsOENBQ0k7QUFBTywrQkFBTyxFQUFHLHlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixlQUVJLDhEQUFDLDBDQUFEO0FBQU8saUNBQVMsRUFBRyxjQUFuQjtBQUFrQyw0QkFBSSxFQUFHLE1BQXpDO0FBQWdELDRCQUFJLEVBQUcsTUFBdkQ7QUFBOEQsMEJBQUUsRUFBRyxNQUFuRTtBQUEwRSxtQ0FBVyxFQUFHO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFkSixlQW9CSTtBQUFLLDZCQUFTLEVBQUcsVUFBakI7QUFBQSwyQ0FDSTtBQUFLLCtCQUFTLEVBQUcsWUFBakI7QUFBQSw4Q0FDSTtBQUFPLCtCQUFPLEVBQUcsc0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUksOERBQUMsMENBQUQ7QUFBTyxpQ0FBUyxFQUFHLGNBQW5CO0FBQWtDLDRCQUFJLEVBQUcsTUFBekM7QUFBZ0QsNEJBQUksRUFBRyxlQUF2RDtBQUF1RSwwQkFBRSxFQUFHLGVBQTVFO0FBQTRGLG1DQUFXLEVBQUc7QUFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXBCSixlQTBCSTtBQUFLLDZCQUFTLEVBQUcsVUFBakI7QUFBQSwyQ0FDSTtBQUFLLCtCQUFTLEVBQUcsWUFBakI7QUFBQSw4Q0FDSTtBQUFPLCtCQUFPLEVBQUcsMEJBQWpCO0FBQUEsa0VBQXdFakQsUUFBUSxDQUFDRCxLQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREosZUFFSSw4REFBQywwQ0FBRDtBQUFPLDRCQUFJLEVBQUcsTUFBZDtBQUFxQixpQ0FBUyxFQUFHLG1CQUFqQztBQUFxRCw0QkFBSSxFQUFHLE9BQTVEO0FBQW9FLDBCQUFFLEVBQUcsT0FBekU7QUFBaUYsNkJBQUssRUFBRW1EO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBa0NJO0FBQUssMkJBQVMsRUFBQyxjQUFmO0FBQUEsMENBQ0k7QUFBUSx3QkFBSSxFQUFDLFFBQWI7QUFBc0IsNkJBQVMsRUFBQyxtQkFBaEM7QUFBb0Qsb0NBQWEsT0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFFSTtBQUFRLHdCQUFJLEVBQUMsUUFBYjtBQUFzQiw2QkFBUyxFQUFDLGlCQUFoQztBQUFrRCw0QkFBUSxFQUFJRCxZQUE5RDtBQUE0RSwyQkFBTyxFQUFJLG1CQUFNO0FBQ3pGTix1QkFBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JRLEtBQXhCLENBQThCLFFBQTlCO0FBQ0gscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREg7QUFBQTtBQTNCRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJKLGVBZ0hJO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsUUFBRSxFQUFDLHFCQUEvQjtBQUFxRCxjQUFRLEVBQUMsSUFBOUQ7QUFBbUUsVUFBSSxFQUFDLFFBQXhFO0FBQWlGLHlCQUFnQiwwQkFBakc7QUFBNEgscUJBQVksTUFBeEk7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUE4QixZQUFJLEVBQUMsVUFBbkM7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxjQUFmO0FBQUEsb0NBQ0k7QUFBSSx1QkFBUyxFQUFDLGFBQWQ7QUFBNEIsZ0JBQUUsRUFBQywwQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBUyxFQUFDLE9BQWhDO0FBQXdDLDhCQUFhLE9BQXJEO0FBQTZELDRCQUFXLE9BQXhFO0FBQUEscUNBQ0E7QUFBTSwrQkFBWSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBT0k7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKLGVBV0k7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxvQ0FDQTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBUyxFQUFDLG1CQUFoQztBQUFvRCw4QkFBYSxPQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQUVBO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFTLEVBQUMsZ0JBQWhDO0FBQWlELDhCQUFhLE9BQTlEO0FBQXNFLHFCQUFPLCtVQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6RWpCLDZCQUR5RSxHQUNqRUwsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQURpRTtBQUFBO0FBQUEsK0JBRTdEc0IsMkZBQWUsQ0FBQzlELFNBQUQsRUFBWUQsS0FBSyxDQUFDc0IsS0FBbEIsQ0FGOEM7O0FBQUE7QUFFekV5QiwyQkFGeUU7O0FBRzdFLDRCQUFHQSxHQUFHLENBQUNDLE9BQUosSUFBZSxJQUFsQixFQUF3QjtBQUNwQkgsK0JBQUssQ0FBQ0ksU0FBTixHQUFpQixxQkFBakI7QUFDQUosK0JBQUssQ0FBQ0ssS0FBTixHQUFjLHFCQUFkO0FBQ0FMLCtCQUFLLENBQUNNLFNBQU4sR0FBa0JKLEdBQUcsQ0FBQ0ssT0FBdEI7QUFDSCx5QkFKRCxNQUlPO0FBQ0hQLCtCQUFLLENBQUNJLFNBQU4sR0FBa0Isb0JBQWxCO0FBQ0EsOEJBQUdGLEdBQUcsQ0FBQ00sS0FBUCxFQUFjUixLQUFLLENBQUNNLFNBQU4sR0FBa0JKLEdBQUcsQ0FBQ00sS0FBSixDQUFVLENBQVYsRUFBYUQsT0FBL0IsQ0FBZCxLQUNLUCxLQUFLLENBQUNNLFNBQU4sR0FBa0JKLEdBQUcsQ0FBQ0ssT0FBdEI7QUFDUjs7QUFDREUseUJBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCQyxNQUF6QixDQUFnQyxJQUFoQyxFQUFzQyxHQUF0QyxFQUEyQ0MsT0FBM0MsQ0FBbUQsR0FBbkQsRUFBd0QsWUFBVTtBQUM5REYsMkJBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRSxPQUF6QixDQUFpQyxHQUFqQztBQUNILHlCQUZEO0FBSUFDLCtFQUFBLENBQVkseUJBQVo7O0FBaEI2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKLEVBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhISixlQXFKSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQTRCLFFBQUUsRUFBQyxnQkFBL0I7QUFBZ0QsY0FBUSxFQUFDLElBQXpEO0FBQThELFVBQUksRUFBQyxRQUFuRTtBQUE0RSx5QkFBZ0IscUJBQTVGO0FBQWtILHFCQUFZLE1BQTlIO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBOEIsWUFBSSxFQUFDLFVBQW5DO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxrQ0FDQTtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG9DQUNJO0FBQUksdUJBQVMsRUFBQyxhQUFkO0FBQTRCLGdCQUFFLEVBQUMscUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQVMsRUFBQyxPQUFoQztBQUF3Qyw4QkFBYSxPQUFyRDtBQUE2RCw0QkFBVyxPQUF4RTtBQUFBLHFDQUNBO0FBQU0sK0JBQVksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQU9BO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQQSxlQVdBO0FBQUsscUJBQVMsRUFBQyxjQUFmO0FBQUEsb0NBQ0k7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQVMsRUFBQyxtQkFBaEM7QUFBb0QsOEJBQWEsT0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBUyxFQUFDLGdCQUFoQztBQUFpRCxxQkFBTywrVUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcERaLDZCQURvRCxHQUM1Q0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQUQ0QztBQUV4RGEseUJBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCUSxLQUFyQixDQUEyQixRQUEzQjtBQUVJcEIsZ0NBSm9ELEdBSXpDLElBQUlDLFFBQUosRUFKeUM7QUFLeERELGdDQUFRLENBQUNFLE1BQVQsQ0FBZ0IsV0FBaEIsRUFBNkJ6QyxVQUE3QjtBQUx3RDtBQUFBLCtCQU94QzZELDBGQUFjLENBQUN0QixRQUFELEVBQVcsSUFBWCxFQUFpQjFDLEtBQUssQ0FBQ2lFLFNBQXZCLEVBQWtDakUsS0FBSyxDQUFDc0IsS0FBeEMsQ0FQMEI7O0FBQUE7QUFPcER5QiwyQkFQb0Q7O0FBUXhELDRCQUFHQSxHQUFHLENBQUNDLE9BQUosSUFBZSxJQUFsQixFQUF3QjtBQUNwQkgsK0JBQUssQ0FBQ0ksU0FBTixHQUFpQixxQkFBakI7QUFDQUosK0JBQUssQ0FBQ0ssS0FBTixHQUFjLHFCQUFkO0FBQ0FMLCtCQUFLLENBQUNNLFNBQU4sR0FBa0JKLEdBQUcsQ0FBQ0ssT0FBdEI7QUFDSCx5QkFKRCxNQUlPO0FBQ0hQLCtCQUFLLENBQUNJLFNBQU4sR0FBa0Isb0JBQWxCO0FBQ0FKLCtCQUFLLENBQUNLLEtBQU4sR0FBYyxxQkFBZDtBQUNBLDhCQUFHSCxHQUFHLENBQUNNLEtBQVAsRUFBY1IsS0FBSyxDQUFDTSxTQUFOLEdBQWtCSixHQUFHLENBQUNNLEtBQUosQ0FBVSxDQUFWLEVBQWFELE9BQS9CLENBQWQsS0FDS1AsS0FBSyxDQUFDTSxTQUFOLEdBQWtCSixHQUFHLENBQUNLLE9BQXRCO0FBQ1I7O0FBRURFLHlCQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsTUFBekIsQ0FBZ0MsSUFBaEMsRUFBc0MsR0FBdEMsRUFBMkNDLE9BQTNDLENBQW1ELEdBQW5ELEVBQXdELFlBQVU7QUFDOURGLDJCQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkUsT0FBekIsQ0FBaUMsR0FBakM7QUFDSCx5QkFGRDtBQUdBQywrRUFBQSxDQUFZLHVCQUF1QnpELEtBQUssQ0FBQ2lFLFNBQXpDLEVBQW9ELHVCQUF1QmpFLEtBQUssQ0FBQ2lFLFNBQWpGOztBQXRCd0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSixFQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFySkosZUFpTUE7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixRQUFFLEVBQUMsZUFBL0I7QUFBK0MsY0FBUSxFQUFDLElBQXhEO0FBQTZELFVBQUksRUFBQyxRQUFsRTtBQUEyRSx5QkFBZ0Isb0JBQTNGO0FBQWdILHFCQUFZLE1BQTVIO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBOEIsWUFBSSxFQUFDLFVBQW5DO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxrQ0FDQTtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG9DQUNJO0FBQUksdUJBQVMsRUFBQyxhQUFkO0FBQTRCLGdCQUFFLEVBQUMsb0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQVMsRUFBQyxPQUFoQztBQUF3Qyw4QkFBYSxPQUFyRDtBQUE2RCw0QkFBVyxPQUF4RTtBQUFBLHFDQUNBO0FBQU0sK0JBQVksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQU9BLDhEQUFDLDJDQUFEO0FBQ0ksOEJBQWtCLE1BRHRCO0FBRUkseUJBQWEsRUFBRXRELFFBRm5CO0FBR0ksb0JBQVE7QUFBQSwwVkFBRSxrQkFBTzJCLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ZPLDZCQURFLEdBQ01MLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FETjtBQUVOYSx5QkFBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JRLEtBQXBCLENBQTBCLFFBQTFCO0FBRUl2Qiw0QkFKRSxHQUlLQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLENBSkw7QUFLRkMsZ0NBTEUsR0FLUyxJQUFJQyxRQUFKLENBQWFKLElBQWIsQ0FMVDtBQU1ORyxnQ0FBUSxDQUFDRSxNQUFULENBQWdCLFdBQWhCLEVBQTZCekMsVUFBN0I7QUFOTTtBQUFBLCtCQVFVNkQsMEZBQWMsQ0FBQ3RCLFFBQUQsRUFBVyxLQUFYLEVBQWtCMUMsS0FBSyxDQUFDaUUsU0FBeEIsRUFBbUNqRSxLQUFLLENBQUNzQixLQUF6QyxDQVJ4Qjs7QUFBQTtBQVFGeUIsMkJBUkU7O0FBU04sNEJBQUdBLEdBQUcsQ0FBQ0MsT0FBSixJQUFlLElBQWxCLEVBQXdCO0FBQ3BCSCwrQkFBSyxDQUFDSSxTQUFOLEdBQWlCLHFCQUFqQjtBQUNBSiwrQkFBSyxDQUFDSyxLQUFOLEdBQWMscUJBQWQ7QUFDQUwsK0JBQUssQ0FBQ00sU0FBTixHQUFrQkosR0FBRyxDQUFDSyxPQUF0QjtBQUNILHlCQUpELE1BSU87QUFDSFAsK0JBQUssQ0FBQ0ksU0FBTixHQUFrQixvQkFBbEI7QUFDQUosK0JBQUssQ0FBQ0ssS0FBTixHQUFjLHFCQUFkO0FBQ0EsOEJBQUdILEdBQUcsQ0FBQ00sS0FBUCxFQUFjUixLQUFLLENBQUNNLFNBQU4sR0FBa0JKLEdBQUcsQ0FBQ00sS0FBSixDQUFVLENBQVYsRUFBYUQsT0FBL0IsQ0FBZCxLQUNLUCxLQUFLLENBQUNNLFNBQU4sR0FBa0JKLEdBQUcsQ0FBQ0ssT0FBdEI7QUFDUjs7QUFFREUseUJBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCQyxNQUF6QixDQUFnQyxJQUFoQyxFQUFzQyxHQUF0QyxFQUEyQ0MsT0FBM0MsQ0FBbUQsR0FBbkQsRUFBd0QsWUFBVTtBQUM5REYsMkJBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRSxPQUF6QixDQUFpQyxHQUFqQztBQUNILHlCQUZEO0FBR0FDLCtFQUFBLENBQVksdUJBQXVCekQsS0FBSyxDQUFDaUUsU0FBekMsRUFBb0QsdUJBQXVCakUsS0FBSyxDQUFDaUUsU0FBakY7O0FBdkJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIWjtBQUFBLHNCQTZCQztBQUFBLGtCQUFHM0IsTUFBSCxTQUFHQSxNQUFIO0FBQUEsa0JBQVdvQixNQUFYLFNBQVdBLE1BQVg7QUFBQSxrQkFBbUJDLE9BQW5CLFNBQW1CQSxPQUFuQjtBQUFBLGtCQUE0QkMsWUFBNUIsU0FBNEJBLFlBQTVCO0FBQUEsa0NBQ0csOERBQUMseUNBQUQ7QUFBTSxrQkFBRSxFQUFHLG1CQUFYO0FBQUEsd0NBQ0k7QUFBSywyQkFBUyxFQUFDLFlBQWY7QUFBQSwwQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBSyw2QkFBUyxFQUFHLFVBQWpCO0FBQUEsMkNBQ0k7QUFBSywrQkFBUyxFQUFHLFlBQWpCO0FBQUEsOENBQ0k7QUFBTywrQkFBTyxFQUFHLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixlQUVJLDhEQUFDLDBDQUFEO0FBQU8saUNBQVMsRUFBRyxjQUFuQjtBQUFrQyw0QkFBSSxFQUFHLE1BQXpDO0FBQWdELDRCQUFJLEVBQUcsaUJBQXZEO0FBQXlFLG1DQUFXLEVBQUcsZUFBdkY7QUFBdUcsZ0NBQVE7QUFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQVVJO0FBQUssMkJBQVMsRUFBQyxjQUFmO0FBQUEsMENBQ0k7QUFBUSx3QkFBSSxFQUFDLFFBQWI7QUFBc0IsNkJBQVMsRUFBQyxtQkFBaEM7QUFBb0Qsb0NBQWEsT0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFFSTtBQUFRLHdCQUFJLEVBQUMsUUFBYjtBQUFzQiw2QkFBUyxFQUFDLGlCQUFoQztBQUFrRCw0QkFBUSxFQUFJQSxZQUE5RDtBQUE0RSwyQkFBTyxFQUFJLG1CQUFNO0FBQ3pGTix1QkFBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JRLEtBQXBCLENBQTBCLFFBQTFCO0FBQ0gscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESDtBQUFBO0FBN0JEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxUUQ7O0dBdlhNL0QsYTs7S0FBQUEsYTtBQXlYUCwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50LjFkOTBkZDdiZWIwZTJmMTRjODY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMaWNlbnN1cmVFeGFtRm9ybSBmcm9tICcuL2xpY2Vuc3VyZS1leGFtLWZvcm0nXHJcbmltcG9ydCBOYW1lRGlzcGxheSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hbWUtZGlzcGxheSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xyXG5cclxuaW1wb3J0IGRvd25sb2FkUHJvb2YgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmFjdWx0eS9kb3dubG9hZFByb29mJ1xyXG5pbXBvcnQgdXBkYXRlTGljZW5zdXJlIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRzL3VwZGF0ZUxpY2Vuc3VyZSdcclxuaW1wb3J0IGRlbGV0ZUxpY2Vuc3VyZSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9kZWxldGVMaWNlbnN1cmUnXHJcbmltcG9ydCBhcHByb3ZlTGljZW5zZSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYWN1bHR5L2FjY29tcGxpc2htZW50cy9hcHByb3ZlTGljZW5zZSdcclxuXHJcbmZ1bmN0aW9uIExpY2Vuc3VyZUV4YW0ocHJvcHMpIHtcclxuICAgIGxldCBkZWxldGVMaWMgPSAwXHJcbiAgICBsZXQgZWRpdExpYyA9IDBcclxuICAgIGxldCBhcHByb3ZlTGljID0gMFxyXG5cclxuICAgIGNvbnN0IFtjdXJyRGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgbGljZW5zZUlkOiAwLFxyXG4gICAgICAgIGV4YW1OYW1lOiAnJyxcclxuICAgICAgICBleGFtRGF0ZTonJyxcclxuICAgICAgICBsaWNlbnNlTnVtYmVyOiAnJyxcclxuICAgICAgICByYW5rOiAnJyxcclxuICAgICAgICBwcm9vZjogJydcclxuICAgIH0pXHJcbiAgICBjb25zdCBuYW1lID0gcHJvcHMubmFtZVxyXG4gICAgbGV0IGNvbnRlbnQgXHJcbiAgICBpZihwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgY29udGVudCA9IE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS5saWNlbnNlSWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5ID0ge3Byb3BzLmNoaWxkcmVuW2tleV0ubGljZW5zZUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmV4YW1OYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hpbGRyZW5ba2V5XS5yYW5rID09IDAgfHwgcHJvcHMuY2hpbGRyZW5ba2V5XS5yYW5rID09IG51bGwgPyAnTi9BJyA6IHByb3BzLmNoaWxkcmVuW2tleV0ucmFua308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uZXhhbURhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLmxpY2Vuc2VOdW1iZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFByb29mKGZpbGUsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuVVBMT0FEU19VUkwgKyBwcm9wcy5jaGlsZHJlbltrZXldLnByb29mfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7IGNvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5jaGlsZHJlbltrZXldLnByb29mICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ob25lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wcy5jaGlsZHJlbltrZXldLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BzLmNoaWxkcmVuW2tleV0uYXBwcm92ZXJSZW1hcmtzIHx8ICdOb25lJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZWRpdGFibGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdExpY2Vuc3VyZUV4YW1cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQocHJvcHMuY2hpbGRyZW5ba2V5XS5saWNlbnNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEtleShlZGl0TGljKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlTGljZW5zdXJlRXhhbVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlKHByb3BzLmNoaWxkcmVuW2tleV0ubGljZW5zZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuYXBwcm92ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidG4tZ3JwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2FwcHJvdmVMaWNlbnNlXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcHByb3ZlKHByb3BzLmNoaWxkcmVuW2tleV0ubGljZW5zZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFwcHJvdmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjcmVqZWN0TGljZW5zZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXBwcm92ZShwcm9wcy5jaGlsZHJlbltrZXldLmxpY2Vuc2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5SZWplY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29udGVudCA9IDx0ZCBjb2xTcGFuID0gXCI3XCI+PHAgYWxpZ24gPSBcImNlbnRlclwiPk5vIGRhdGEgYXZhaWxhYmxlITwvcD48L3RkPlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEVkaXQoaWQpIHtcclxuICAgICAgICBlZGl0TGljID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXREZWxldGUoaWQpIHtcclxuICAgICAgICBkZWxldGVMaWMgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFwcHJvdmUoaWQpIHtcclxuICAgICAgICBhcHByb3ZlTGljID0gaWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRLZXkoeCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzLmNoaWxkcmVuKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS5saWNlbnNlSWQgPT0geCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShwcm9wcy5jaGlsZHJlbltrZXldKVxyXG4gICAgICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW5ba2V5XS5yYW5rID09IFwiXCIgfHwgcHJvcHMuY2hpbGRyZW5ba2V5XS5yYW5rID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIHJhbms6ICcnfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwcm9wcy5jaGlsZHJlbltrZXldLnByb29mKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShjdXJyRGF0YSA9PiAoey4uLmN1cnJEYXRhLCBwcm9vZjogcHJvcHMuY2hpbGRyZW5ba2V5XS5wcm9vZn0pKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGN1cnJEYXRhID0+ICh7Li4uY3VyckRhdGEsIHByb29mOiAnTm9uZSd9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGFsaWduID0gXCJjZW50ZXJcIj4gTGljZW5zdXJlIEV4YW1zIDwvaDI+XHJcbiAgICAgICAgICAgIDxOYW1lRGlzcGxheSB1bml0ID0ge3Byb3BzLnVuaXR9IHBvc2l0aW9uPXtwcm9wcy5wb3NpdGlvbn0+e3Byb3BzLm5hbWV9PC9OYW1lRGlzcGxheT5cclxuICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIiBpZD1cImxpY2Vuc3VyZWV4YW1hbGVydFwiIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhhbSBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYW5rPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MaWNlbnNlIE51bWJlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJvb2Y8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QXBwcm92ZXIgUmVtYXJrczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IChwcm9wcy5lZGl0YWJsZSB8fCBwcm9wcy5hcHByb3ZlcikgJiYgPHRoPkFjdGlvbjwvdGg+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7IHByb3BzLmVkaXRhYmxlICYmIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGljZW5zdXJlRXhhbUZvcm0gdG9rZW4gPSB7IHByb3BzLnRva2VuIH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICB9XHJcblx0XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZWRpdExpY2Vuc3VyZUV4YW1cIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImVkaXRMaWNlbnN1cmVFeGFtTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJlZGl0TGljZW5zdXJlRXhhbUxhYmVsXCI+VXBkYXRlIExpY2Vuc3VyZSBFeGFtIEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtjdXJyRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRMaWNGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdsaWNlbnNlSWQnLCBjdXJyRGF0YS5saWNlbnNlSWQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWNlbnN1cmVleGFtYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB1cGRhdGVMaWNlbnN1cmUoZm9ybURhdGEsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsaWNlbnN1cmVleGFtYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsaWNlbnN1cmVleGFtYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FjY29tcGxpc2htZW50JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGlkID0gXCJlZGl0TGljRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiTGljZW5zdXJlRXhhbVVwZGF0ZVwiPiBMaWNlbnN1cmUgRXhhbSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcImV4YW1OYW1lXCIgaWQgPSBcImV4YW1OYW1lXCIgcGxhY2Vob2xkZXIgPSBcIklucHV0IGxpY2Vuc3VyZSBleGFtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiTGljZW5zdXJlRXhhbURhdGVVcGRhdGVcIj4gRGF0ZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGUgPSBcImRhdGVcIiBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIG5hbWUgPSBcImV4YW1EYXRlXCIgaWQgPSBcImV4YW1EYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiTGljZW5zdXJlRXhhbVJhbmtVcGRhdGVcIj4gUmFuayA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInJhbmtcIiBpZCA9IFwicmFua1wiIHBsYWNlaG9sZGVyID0gXCJJbnB1dCByYW5rXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiTGljZW5zZU51bWViZXJVcGRhdGVcIj4gTGljZW5zZSBOdW1iZXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJsaWNlbnNlTnVtYmVyXCIgaWQgPSBcImxpY2Vuc2VOdW1iZXJcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgbGljZW5zdXJlIG51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSBcIkxpY2Vuc3VyZUV4YW1Qcm9vZlVwZGF0ZVwiPiBBZGQvRWRpdCBQcm9vZiBbVXBsb2FkZWQ6IHtjdXJyRGF0YS5wcm9vZn1dIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZSA9IFwiZmlsZVwiIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sLWZpbGVcIiBuYW1lID0gXCJwcm9vZlwiIGlkID0gXCJwcm9vZlwiIHZhbHVlPXt1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30gb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0TGljZW5zdXJlRXhhbScpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJkZWxldGVMaWNlbnN1cmVFeGFtXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJkZWxldGVMaWNlbnN1cmVFeGFtTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImRlbGV0ZUxpY2Vuc3VyZUV4YW1MYWJlbFwiPkRlbGV0ZSBMaWNlbnN1cmUgRXhhbSBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaWNlbnN1cmUgZXhhbSBpbmZvcm1hdGlvbj8gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPk5vLCBkb24ndCBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2sgPSB7YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWNlbnN1cmVleGFtYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBkZWxldGVMaWNlbnN1cmUoZGVsZXRlTGljLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuY2xhc3NOYW1lID1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSByZXMubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9hY2NvbXBsaXNobWVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiYXBwcm92ZUxpY2Vuc2VcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImFwcHJvdmVMaWNlbnNlTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJhcHByb3ZlTGljZW5zZUxhYmVsXCI+QXBwcm92ZSBMaWNlbnN1cmUgRXhhbSBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGFwcHJvdmUgdGhpcyBsaWNlbnN1cmUgZXhhbSBpbmZvcm1hdGlvbj8gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5ObywgZG9uJ3QgYXBwcm92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2sgPSB7YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWNlbnN1cmVleGFtYWxlcnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhcHByb3ZlTGljZW5zZScpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbGljZW5zZUlkJywgYXBwcm92ZUxpYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwcHJvdmVMaWNlbnNlKGZvcm1EYXRhLCB0cnVlLCBwcm9wcy5mYWN1bHR5SWQsIHByb3BzLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQuc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKSBhbGVydC5pbm5lckhUTUwgPSByZXMuZXJyb3JbMF0ubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYWxlcnQuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsaWNlbnN1cmVleGFtYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsaWNlbnN1cmVleGFtYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHkvYXBwcm92YWwvJyArIHByb3BzLmZhY3VsdHlJZCwgJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlllcywgYXBwcm92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cInJlamVjdExpY2Vuc2VcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cInJlamVjdExpY2Vuc2VMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwicmVqZWN0TGljZW5zZUxhYmVsXCI+UmVqZWN0IExpY2Vuc3VyZSBFeGFtIEluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2N1cnJEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGljZW5zdXJlZXhhbWFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWplY3RMaWNlbnNlJykubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVqZWN0TGljZW5zZUZvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdsaWNlbnNlSWQnLCBhcHByb3ZlTGljKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwcHJvdmVMaWNlbnNlKGZvcm1EYXRhLCBmYWxzZSwgcHJvcHMuZmFjdWx0eUlkLCBwcm9wcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTmFtZSA9XCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdHlsZSA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3IpIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5lcnJvclswXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0LmlubmVySFRNTCA9IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGljZW5zdXJlZXhhbWFsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsaWNlbnN1cmVleGFtYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2FwcHJvdmFsLycgKyBwcm9wcy5mYWN1bHR5SWQsICcvZmFjdWx0eS9hcHByb3ZhbC8nICsgcHJvcHMuZmFjdWx0eUlkKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gaWQgPSBcInJlamVjdExpY2Vuc2VGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvciA9IFwiUmVqZWN0aW9uUmVtYXJrc1wiPiBSZWFzb24vUmVtYXJrcyBmb3IgUmVqZWN0aW9uIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJhcHByb3ZlclJlbWFya3NcIiBwbGFjZWhvbGRlciA9IFwiSW5wdXQgcmVtYXJrc1wiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30gb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlamVjdExpY2Vuc2UnKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cdFxyXG5cdFxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMaWNlbnN1cmVFeGFtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=